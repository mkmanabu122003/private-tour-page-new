/**
 * Draft Queue の1行を処理してよいかを判定する純粋関数群。
 * Gmail もスプレッドシートも触らないので、Tests.gs から副作用なしで検証できる。
 */

/** セル値を比較用に正規化する。空セルや数値が入っても落ちないようにする */
function normalizeToken(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim().toUpperCase();
}

function normalizeText(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

/**
 * ブランド allowlist。CAMINO / 空欄 / UNKNOWN / 表記ゆれはすべて false。
 * 「TANUKI ではないものを弾く」ではなく「TANUKI だけを通す」判定にする。
 */
function isTanukiBrand(value) {
  return normalizeToken(value) === BRAND_TANUKI;
}

function isQaPass(value) {
  return normalizeToken(value) === QA_PASS;
}

/**
 * Human Review が立っている行は自動 Draft の対象外。
 * チェックボックス(true)、文字列("TRUE"/"YES")、数値(1) のどれでも拾う。
 */
function isHumanReview(value) {
  const token = normalizeToken(value);
  return token === 'TRUE' || token === 'YES' || token === '1' || value === true;
}

function isValidEmailFormat(value) {
  const email = normalizeText(value);
  if (!email || email.length > 254) return false;
  return /^[^\s@,;<>]+@[^\s@,;<>]+\.[A-Za-z]{2,}$/.test(email);
}

/**
 * 顧客宛先にしてはいけない内部アドレスか。
 * 完全一致のブロックリストと、ドメイン単位のブロックの両方を見る。
 */
function isBlockedRecipient(value) {
  const email = normalizeText(value).toLowerCase();
  if (!email) return true;
  if (BLOCKED_RECIPIENT_ADDRESSES.indexOf(email) !== -1) return true;

  const at = email.lastIndexOf('@');
  if (at === -1) return true;
  const domain = email.slice(at + 1);
  return BLOCKED_RECIPIENT_DOMAINS.indexOf(domain) !== -1;
}

/**
 * 行の処理可否を決める。
 *
 * 戻り値の action:
 *   'PROCESS' — 全ゲート通過。Draft を作る
 *   'SKIP'    — READY_TO_DRAFT で出されたがゲートで落ちた。SKIPPED を書く
 *   'IGNORE'  — そもそも処理対象の Status ではない。行に一切触れない
 */
function classifyQueueRow(row) {
  if (normalizeToken(row.status) !== STATUS.READY_TO_DRAFT) {
    return { action: 'IGNORE', reason: '' };
  }
  if (!isTanukiBrand(row.brand)) {
    return { action: 'SKIP', reason: 'BRAND_NOT_TANUKI' };
  }
  if (!isQaPass(row.qaStatus)) {
    return { action: 'SKIP', reason: 'QA_NOT_PASS' };
  }
  if (isHumanReview(row.humanReview)) {
    return { action: 'SKIP', reason: 'HUMAN_REVIEW' };
  }
  return { action: 'PROCESS', reason: '' };
}

/**
 * Draft を作る直前の検証。ゲートを抜けた行にだけ適用する。
 * 問題があればエラーコードを返し、無ければ null。
 */
function validateProcessableRow(row) {
  if (!normalizeText(row.gmailMessageId)) {
    return ERROR_CODE.MISSING_REQUIRED_FIELD;
  }
  if (!normalizeText(row.replyBody)) {
    return ERROR_CODE.MISSING_REQUIRED_FIELD;
  }
  if (!isValidEmailFormat(row.customerEmail)) {
    return ERROR_CODE.INVALID_CUSTOMER_EMAIL;
  }
  if (isBlockedRecipient(row.customerEmail)) {
    return ERROR_CODE.INTERNAL_EMAIL_DETECTED;
  }
  if (normalizeText(row.draftId)) {
    return ERROR_CODE.DRAFT_ALREADY_EXISTS;
  }
  return null;
}

/** Gmail のクォータ超過を他の例外と区別する */
function isRateLimitError(error) {
  const message = String((error && error.message) || error || '');
  return /rate limit|quota|too many|service invoked too many/i.test(message);
}
