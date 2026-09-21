/**
 * Draft Queue（スプレッドシート）の読み書き。
 * Gmail 操作も判定ロジックもここには置かない。
 */

function openSourceSpreadsheet() {
  return SpreadsheetApp.openById(getSourceSheetId());
}

/**
 * Draft Queue タブを用意する。既にあれば作り直さず、ヘッダーだけ検証する。
 * @return {Sheet}
 */
function ensureDraftQueueSheet() {
  const ss = openSourceSpreadsheet();
  const name = getDraftQueueSheetName();
  let sheet = ss.getSheetByName(name);

  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.getRange(1, 1, 1, QUEUE_COLUMNS.length).setValues([QUEUE_COLUMNS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, QUEUE_COLUMNS.length).setFontWeight('bold');
    console.log(JSON.stringify({ event: 'draft_queue_created', sheet: name }));
    return sheet;
  }

  // 既存タブにヘッダーが無い場合だけ書き込む。中身は触らない。
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, QUEUE_COLUMNS.length).setValues([QUEUE_COLUMNS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, QUEUE_COLUMNS.length).setFontWeight('bold');
  }
  return sheet;
}

/**
 * ヘッダー行から列名→列番号(1始まり)の対応を作る。
 * ChatGPT 側が列を足しても順序を変えても壊れないようにするため、
 * 位置ではなく名前で引く。
 */
function readHeaderMap(sheet) {
  const width = Math.max(sheet.getLastColumn(), QUEUE_COLUMNS.length);
  const header = sheet.getRange(1, 1, 1, width).getValues()[0];
  const map = {};
  for (let i = 0; i < header.length; i++) {
    const name = normalizeText(header[i]);
    if (name) map[name] = i + 1;
  }

  const missing = QUEUE_COLUMNS.filter(function (c) { return !map[c]; });
  if (missing.length) {
    throw new Error('Draft Queue に必要な列がありません: ' + missing.join(', '));
  }
  return map;
}

/**
 * Draft Queue の全データ行を読む。
 * @return {Array<Object>} rowNumber 付きの行オブジェクト
 */
function readQueueRows(sheet, headerMap) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  const width = sheet.getLastColumn();
  const values = sheet.getRange(2, 1, lastRow - 1, width).getValues();

  return values.map(function (rowValues, index) {
    function cell(columnName) {
      const col = headerMap[columnName];
      return col && col <= rowValues.length ? rowValues[col - 1] : '';
    }
    return {
      rowNumber: index + 2,
      queueId: normalizeText(cell('Queue ID')),
      brand: cell('Brand'),
      gmailMessageId: normalizeText(cell('Gmail Message ID')),
      gmailThreadId: normalizeText(cell('Gmail Thread ID')),
      customerName: normalizeText(cell('Customer Name')),
      customerEmail: normalizeText(cell('Customer Email')),
      language: normalizeText(cell('Language')),
      subject: normalizeText(cell('Subject')),
      replyBody: String(cell('Reply Body') || ''),
      qaStatus: cell('QA Status'),
      humanReview: cell('Human Review'),
      riskFlags: normalizeText(cell('Risk Flags')),
      status: cell('Status'),
      draftId: normalizeText(cell('Draft ID')),
    };
  });
}

/**
 * 1行の指定列だけを更新する。
 * @param {Object} patch 列名→値
 */
function updateQueueRow(sheet, headerMap, rowNumber, patch) {
  Object.keys(patch).forEach(function (columnName) {
    const col = headerMap[columnName];
    if (!col) return;
    sheet.getRange(rowNumber, col).setValue(patch[columnName]);
  });
}

/** Risk Flags は既存の値を消さずに積む */
function appendRiskFlag(existing, flag) {
  const current = normalizeText(existing);
  if (!current) return flag;
  if (current.split(/\s*,\s*/).indexOf(flag) !== -1) return current;
  return current + ', ' + flag;
}

/**
 * 既に Draft を作り終えた行と衝突しないか調べる。
 * 同じ Queue ID、または同じ Gmail Message ID + Customer Email の組が
 * DONE で存在するなら二重 Draft になる。
 */
function findDuplicateDoneRow(rows, target) {
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (row.rowNumber === target.rowNumber) continue;
    if (normalizeToken(row.status) !== STATUS.DONE) continue;

    if (target.queueId && row.queueId === target.queueId) return row;

    const sameMessage = row.gmailMessageId &&
      row.gmailMessageId === target.gmailMessageId;
    const sameCustomer = row.customerEmail.toLowerCase() ===
      target.customerEmail.toLowerCase();
    if (sameMessage && sameCustomer) return row;
  }
  return null;
}
