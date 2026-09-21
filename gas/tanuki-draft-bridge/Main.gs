/**
 * Draft Bridge のエントリポイント。
 *
 * Queue を読む → ゲートで絞る → 検証する → Gmail Draft を作る、だけを行う
 * 決定的な実行層。AI 生成も送信もここには無い。Reply Body は ChatGPT が
 * 書いた文字列としてそのまま Draft に入れるだけで、指示として解釈しない。
 */

/** 時間トリガーから呼ばれる関数 */
function processTanukiDraftQueue() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(LOCK_TIMEOUT_MS)) {
    console.log(JSON.stringify({ event: 'run_skipped', reason: 'LOCK_BUSY' }));
    return { processed: 0, skipped: 0, errors: 0, lockBusy: true };
  }

  try {
    return runDraftQueuePass();
  } finally {
    lock.releaseLock();
  }
}

function runDraftQueuePass() {
  // エイリアスが無いなら1件も作らない。行は書き換えず、設定が直れば
  // 次のトリガーでそのまま再開できるようにする。
  if (!hasTanukiAlias()) {
    console.error(JSON.stringify({
      event: 'run_aborted',
      errorCode: ERROR_CODE.ALIAS_NOT_FOUND,
      timestamp: nowJst(),
    }));
    throw taggedError(
      ERROR_CODE.ALIAS_NOT_FOUND,
      TANUKI_FROM_EMAIL + ' が Gmail の送信エイリアスに登録されていません'
    );
  }

  const sheet = ensureDraftQueueSheet();
  const headerMap = readHeaderMap(sheet);
  const rows = readQueueRows(sheet, headerMap);

  const summary = { processed: 0, skipped: 0, errors: 0, ignored: 0 };

  for (let i = 0; i < rows.length; i++) {
    if (summary.processed + summary.errors >= MAX_PER_RUN) {
      console.log(JSON.stringify({ event: 'run_capped', maxPerRun: MAX_PER_RUN }));
      break;
    }

    const row = rows[i];
    const verdict = classifyQueueRow(row);

    if (verdict.action === 'IGNORE') {
      summary.ignored++;
      continue;
    }

    if (verdict.action === 'SKIP') {
      updateQueueRow(sheet, headerMap, row.rowNumber, {
        'Status': STATUS.SKIPPED,
        'Risk Flags': appendRiskFlag(row.riskFlags, verdict.reason),
        'Processed At': nowJst(),
      });
      summary.skipped++;
      logRow('row_skipped', row, verdict.reason);
      continue;
    }

    const outcome = processOneRow(sheet, headerMap, rows, row);
    if (outcome === 'DONE') summary.processed++;
    else summary.errors++;
  }

  console.log(JSON.stringify({
    event: 'run_complete',
    timestamp: nowJst(),
    processed: summary.processed,
    skipped: summary.skipped,
    errors: summary.errors,
  }));
  return summary;
}

/**
 * 1行を処理する。PROCESSING を書いてから作業し、成功でも失敗でも
 * 必ず DONE か ERROR に決着させる（PROCESSING のまま残さない）。
 * @return {'DONE'|'ERROR'}
 */
function processOneRow(sheet, headerMap, allRows, row) {
  updateQueueRow(sheet, headerMap, row.rowNumber, { 'Status': STATUS.PROCESSING });
  SpreadsheetApp.flush();

  let message = null;

  try {
    const fieldError = validateProcessableRow(row);
    if (fieldError) throw taggedError(fieldError, 'Queue の値が要件を満たしません');

    const duplicate = findDuplicateDoneRow(allRows, row);
    if (duplicate) {
      throw taggedError(
        ERROR_CODE.DUPLICATE_QUEUE,
        '同じ内容が行 ' + duplicate.rowNumber + ' で処理済みです'
      );
    }

    message = getMessageOrNull(row.gmailMessageId);
    if (!message) {
      throw taggedError(ERROR_CODE.MESSAGE_NOT_FOUND, 'Gmail Message ID が解決できません');
    }

    // Queue に Thread ID があるなら、メッセージが本当にそのスレッドの
    // ものか照合する。食い違ったら別の顧客のスレッドの可能性がある。
    if (row.gmailThreadId) {
      const actualThreadId = message.getThread().getId();
      if (actualThreadId !== row.gmailThreadId) {
        throw taggedError(
          ERROR_CODE.THREAD_MISMATCH,
          'Gmail Thread ID が一致しません'
        );
      }
    }

    const result = createTanukiReplyDraft(message, row.replyBody, row.customerEmail, {
      subject: row.subject,
      language: row.language,
    });

    applyLabelToMessage(message, LABEL_AI_DRAFTED);
    applyLabelToMessage(message, LABEL_PROCESSED);

    updateQueueRow(sheet, headerMap, row.rowNumber, {
      'Status': STATUS.DONE,
      'Draft ID': result.draftId,
      'Error': '',
      'Processed At': nowJst(),
    });
    row.status = STATUS.DONE;
    row.draftId = result.draftId;

    logRow('draft_created', row, '');
    return 'DONE';

  } catch (error) {
    const code = error && error.code
      ? error.code
      : (isRateLimitError(error) ? ERROR_CODE.GMAIL_RATE_LIMIT : ERROR_CODE.UNKNOWN_ERROR);

    updateQueueRow(sheet, headerMap, row.rowNumber, {
      'Status': STATUS.ERROR,
      'Risk Flags': appendRiskFlag(row.riskFlags, code),
      // taggedError のメッセージは既にコードで始まるので二重に付けない
      'Error': String((error && error.message) || error),
      'Processed At': nowJst(),
    });
    row.status = STATUS.ERROR;

    if (message) applyLabelToMessage(message, LABEL_ERROR);
    logRow('draft_failed', row, code);
    return 'ERROR';
  }
}

/**
 * 追跡に必要な識別子だけを出す。Reply Body、顧客メッセージ本文、
 * 顧客名などは出さない。
 */
function logRow(event, row, code) {
  console.log(JSON.stringify({
    event: event,
    timestamp: nowJst(),
    queueId: row.queueId,
    gmailMessageId: row.gmailMessageId,
    status: row.status,
    errorCode: code || '',
  }));
}

/**
 * 1分間隔のインストーラブルトリガーを作る。
 * 既に同じ関数のトリガーがあれば作らない。
 */
function installTanukiDraftBridgeTrigger() {
  const existing = ScriptApp.getProjectTriggers().filter(function (t) {
    return t.getHandlerFunction() === 'processTanukiDraftQueue';
  });
  if (existing.length > 0) {
    console.log(JSON.stringify({
      event: 'trigger_exists',
      count: existing.length,
    }));
    return 'ALREADY_INSTALLED';
  }

  ScriptApp.newTrigger('processTanukiDraftQueue')
    .timeBased()
    .everyMinutes(1)
    .create();
  console.log(JSON.stringify({ event: 'trigger_installed', everyMinutes: 1 }));
  return 'INSTALLED';
}

function removeTanukiDraftBridgeTrigger() {
  let removed = 0;
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'processTanukiDraftQueue') {
      ScriptApp.deleteTrigger(t);
      removed++;
    }
  });
  console.log(JSON.stringify({ event: 'trigger_removed', count: removed }));
  return removed;
}
