/**
 * Gmail 操作。このプロジェクトが Gmail に対して行う唯一の外部アクションは
 * Draft の作成（と、間違って作った Draft の削除、ラベル付与）。
 * 送信 API（GmailApp.sendEmail / GmailMessage.reply / GmailDraft.send）は
 * 一切呼ばない。
 */

/**
 * info@tanuki-tabi-travel.com が送信エイリアスとして使えるかを確認する。
 * 使えない場合は Draft を作らずに実行全体を止める。個人アドレスへ
 * fallback しないことがこの関数の存在理由。
 * @return {boolean}
 */
function hasTanukiAlias() {
  const aliases = GmailApp.getAliases();
  for (let i = 0; i < aliases.length; i++) {
    if (String(aliases[i]).toLowerCase() === TANUKI_FROM_EMAIL) return true;
  }
  return false;
}

/**
 * Queue の Gmail Message ID から元メッセージを取得する。
 * 見つからない場合に別のメールを推測で探すことはしない。
 */
function getMessageOrNull(messageId) {
  try {
    return GmailApp.getMessageById(messageId);
  } catch (e) {
    return null;
  }
}

/** From ヘッダ等から素のメールアドレスを取り出す */
function extractEmailAddress(headerValue) {
  const text = String(headerValue || '');
  const angle = text.match(/<([^>]+)>/);
  const raw = angle ? angle[1] : text;
  return raw.trim().toLowerCase();
}

/** カンマ区切りの宛先ヘッダを小文字アドレスの配列にする */
function extractEmailAddresses(headerValue) {
  return String(headerValue || '')
    .split(',')
    .map(extractEmailAddress)
    .filter(function (a) { return a.length > 0; });
}

/**
 * 元メッセージのスレッドに Tanuki From で返信 Draft を作る。
 *
 * createDraftReply は宛先を元メッセージ側（Reply-To / From）から決めるため、
 * 作成後に実際の To と From を読み直して検証する。期待と違う Draft は
 * そのまま残さず削除する。フォーム通知メールの Reply-To が顧客ではなく
 * formresponses@netlify.com になっている submission が実在するので、
 * この事後検証は飾りではない。
 *
 * @return {{draftId: string, to: Array<string>, from: string}}
 * @throws {Error} code プロパティにエラーコードを持つ
 */
function createTanukiReplyDraft(message, replyBody, expectedCustomerEmail, options0) {
  const options = {
    from: TANUKI_FROM_EMAIL,
    name: TANUKI_FROM_NAME,
  };

  // 件名は顧客向けのものに差し替える。スレッドは変わらない。
  const subject = buildCustomerFacingSubject(
    (options0 && options0.subject) || '',
    (options0 && options0.language) || ''
  );
  if (subject) options.subject = subject;

  const draft = message.createDraftReply(replyBody, options);
  const draftMessage = draft.getMessage();
  const actualFrom = extractEmailAddress(draftMessage.getFrom());
  const actualTo = extractEmailAddresses(draftMessage.getTo());

  if (actualFrom !== TANUKI_FROM_EMAIL) {
    draft.deleteDraft();
    throw taggedError(
      ERROR_CODE.FROM_NOT_APPLIED,
      'Draft の From が ' + TANUKI_FROM_EMAIL + ' になりませんでした'
    );
  }

  const expected = String(expectedCustomerEmail || '').toLowerCase();
  if (actualTo.indexOf(expected) === -1) {
    draft.deleteDraft();
    throw taggedError(
      ERROR_CODE.RECIPIENT_MISMATCH,
      'Draft の宛先が Queue の Customer Email と一致しません'
    );
  }

  for (let i = 0; i < actualTo.length; i++) {
    if (isBlockedRecipient(actualTo[i])) {
      draft.deleteDraft();
      throw taggedError(
        ERROR_CODE.INTERNAL_EMAIL_DETECTED,
        'Draft の宛先に内部アドレスが含まれています'
      );
    }
  }

  return { draftId: draft.getId(), to: actualTo, from: actualFrom };
}

/**
 * 顧客向け自動確認メール（"Got it, ..." / "Recibido, ..."）のスレッドを探す。
 *
 * Netlify 通知スレッドに返信すると、件名 "[Tanuki Inquiry] <id> | contact"
 * が顧客に見えてしまう。確認メールのスレッドなら顧客向けの件名のまま返信
 * できるが、取り違えると別の顧客に返信することになる。そのため
 * 候補が厳密に1件のときだけスレッドを返し、複数なら null ではなく
 * AMBIGUOUS_CUSTOMER_THREAD を投げる。
 *
 * 既定では使わない（Config の USE_CUSTOMER_CONFIRMATION_THREAD は未設定）。
 * 有効化の判断は Manabu に委ねる。
 *
 * @return {GmailThread|null}
 */
function findCustomerConfirmationThread(customerEmail, aroundDate) {
  if (!isValidEmailFormat(customerEmail) || isBlockedRecipient(customerEmail)) {
    return null;
  }

  const windowDays = 14;
  const after = new Date(aroundDate.getTime() - windowDays * 24 * 60 * 60 * 1000);
  const query = [
    'in:anywhere',
    'from:' + TANUKI_FROM_EMAIL,
    'to:' + customerEmail,
    'after:' + Utilities.formatDate(after, 'Asia/Tokyo', 'yyyy/MM/dd'),
  ].join(' ');

  const threads = GmailApp.search(query, 0, 20).filter(function (thread) {
    const subject = thread.getFirstMessageSubject() || '';
    return /^(Got it,|Recibido,)/.test(subject.replace(/^Re:\s*/i, ''));
  });

  if (threads.length === 0) return null;
  if (threads.length > 1) {
    throw taggedError(
      ERROR_CODE.AMBIGUOUS_CUSTOMER_THREAD,
      '顧客向け確認スレッドの候補が ' + threads.length + ' 件あります'
    );
  }
  return threads[0];
}

/**
 * 顧客に見せる件名を決める。
 *
 * Queue の Subject 列を優先するが、そこに内部マーカーが混ざっていたら
 * 使わずに言語別の既定値へ落とす。ChatGPT が Netlify の件名をそのまま
 * コピーしてきても顧客に漏れないようにするため。
 */
function buildCustomerFacingSubject(queueSubject, language) {
  const candidate = normalizeText(queueSubject);
  const clean = candidate && !containsInternalMarker(candidate);
  if (clean) return candidate;

  const lang = normalizeText(language).toLowerCase().slice(0, 2);
  return CUSTOMER_SUBJECT_DEFAULT[lang] || CUSTOMER_SUBJECT_DEFAULT.en;
}

function containsInternalMarker(subject) {
  for (let i = 0; i < INTERNAL_SUBJECT_MARKERS.length; i++) {
    if (subject.indexOf(INTERNAL_SUBJECT_MARKERS[i]) !== -1) return true;
  }
  return false;
}

/** エラーコードを持つ Error を作る */
function taggedError(code, message) {
  const error = new Error(code + ': ' + message);
  error.code = code;
  return error;
}
