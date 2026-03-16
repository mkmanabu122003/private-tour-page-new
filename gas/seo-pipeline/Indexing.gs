/**
 * Google Indexing API & URL Inspection API を使ったインデックス管理
 *
 * 機能:
 * - サイトマップの全URLのインデックス状況を一括チェック
 * - 未インデックスURLをIndexing APIで送信
 * - 新規記事URLを手動送信
 *
 * 制限:
 * - Indexing API: 1日200リクエストまで
 * - URL Inspection API: 1日2,000リクエストまで
 */

// ============================================================
// サイトマップからURL一覧を取得
// ============================================================

/**
 * サイトマップXMLをパースしてURL一覧を返す
 */
function getSitemapUrls() {
  const config = getConfig();
  const siteUrl = config.SITE_URL || 'https://tanuki-tabi-travel.com';
  const sitemapUrl = siteUrl + '/sitemap.xml';

  try {
    const response = UrlFetchApp.fetch(sitemapUrl, { muteHttpExceptions: true });
    if (response.getResponseCode() !== 200) {
      Logger.log('サイトマップ取得エラー: ' + response.getResponseCode());
      return [];
    }

    const xml = response.getContentText();
    const doc = XmlService.parse(xml);
    const root = doc.getRootElement();
    const ns = root.getNamespace();
    const urlElements = root.getChildren('url', ns);

    return urlElements.map(function(urlEl) {
      return {
        loc: urlEl.getChildText('loc', ns),
        lastmod: urlEl.getChildText('lastmod', ns) || ''
      };
    });
  } catch (e) {
    Logger.log('サイトマップ取得エラー: ' + e.message);
    return [];
  }
}

// ============================================================
// URL Inspection API — インデックス状況チェック
// ============================================================

/**
 * URL Inspection API で1つのURLのインデックス状況を確認
 * @param {string} inspectionUrl チェック対象URL
 * @param {string} siteUrl GSCに登録されたサイトURL
 * @return {Object} インデックス状況
 */
function inspectUrl(inspectionUrl, siteUrl) {
  try {
    const token = ScriptApp.getOAuthToken();
    const url = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect';

    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      headers: { Authorization: 'Bearer ' + token },
      payload: JSON.stringify({
        inspectionUrl: inspectionUrl,
        siteUrl: siteUrl
      }),
      muteHttpExceptions: true
    });

    const code = response.getResponseCode();
    const body = JSON.parse(response.getContentText());

    if (code !== 200) {
      Logger.log('URL Inspection Error (' + code + '): ' + JSON.stringify(body));
      return { url: inspectionUrl, status: 'ERROR', error: body.error?.message || 'Unknown' };
    }

    const result = body.inspectionResult;
    const indexStatus = result.indexStatusResult;

    return {
      url: inspectionUrl,
      verdict: indexStatus.verdict,                    // PASS, NEUTRAL, FAIL, etc.
      coverageState: indexStatus.coverageState,        // "Submitted and indexed", etc.
      crawledAs: indexStatus.crawledAs,
      lastCrawlTime: indexStatus.lastCrawlTime || '',
      indexingState: indexStatus.indexingState,         // INDEXING_ALLOWED, etc.
      pageFetchState: indexStatus.pageFetchState,       // SUCCESSFUL, etc.
      robotsTxtState: indexStatus.robotsTxtState
    };
  } catch (e) {
    Logger.log('URL Inspection Error: ' + e.message);
    return { url: inspectionUrl, status: 'ERROR', error: e.message };
  }
}

/**
 * 全サイトマップURLのインデックス状況をバッチチェック
 * GASの6分制限を回避するため、4分経過で中断→トリガーで自動継続
 *
 * 進捗はScriptPropertiesに保存（インデックス番号のみ、結果は直接シートへ）:
 *   INDEXING_CHECK_INDEX — 次に処理するインデックス（未設定=新規開始）
 */
var BATCH_TIME_LIMIT_MS = 4 * 60 * 1000; // 4分で中断（6分制限の余裕を持たせる）

function checkAllIndexingStatus() {
  var props = PropertiesService.getScriptProperties();
  var config = getConfig();
  var siteUrl = config.GSC_PROPERTY || config.SITE_URL;

  // サイトマップURLを毎回取得（ScriptPropertiesの容量制限を回避）
  var sitemapUrls = getSitemapUrls();
  if (sitemapUrls.length === 0) {
    Logger.log('サイトマップからURLを取得できませんでした');
    return;
  }
  var urls = sitemapUrls.map(function(u) { return u.loc; });

  // 前回の続きがあるか確認
  var savedIndex = props.getProperty('INDEXING_CHECK_INDEX');
  var startIndex = savedIndex ? parseInt(savedIndex) : 0;

  if (startIndex === 0) {
    // 新規開始: シートを初期化
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = getOrCreateSheet(ss, 'Indexing_Status');
    sheet.clear();
    sheet.getRange(1, 1, 1, 8).setValues([[
      'URL', 'Verdict', 'Coverage State', 'Crawled As',
      'Last Crawl', 'Indexing State', 'Page Fetch', 'Checked At'
    ]]).setFontWeight('bold');
    Logger.log('=== インデックス状況チェック開始: ' + urls.length + ' URLs ===');
  } else {
    Logger.log('=== 前回の続きから再開: ' + startIndex + '/' + urls.length + ' ===');
  }

  var startTime = Date.now();
  var batchResults = [];

  for (var i = startIndex; i < urls.length; i++) {
    // 4分経過チェック
    if (Date.now() - startTime > BATCH_TIME_LIMIT_MS) {
      // このバッチの結果をシートに書き込み
      if (batchResults.length > 0) {
        appendIndexingResults(batchResults);
      }

      // 進捗を保存
      props.setProperty('INDEXING_CHECK_INDEX', String(i));

      // 1分後に自動継続トリガーを設定
      ScriptApp.newTrigger('checkAllIndexingStatus')
        .timeBased()
        .after(60 * 1000)
        .create();

      Logger.log('=== 4分経過のため中断: ' + i + '/' + urls.length + ' 処理済み。1分後に自動再開します ===');
      return;
    }

    Logger.log('[' + (i + 1) + '/' + urls.length + '] ' + urls[i]);
    var inspection = inspectUrl(urls[i], siteUrl);
    batchResults.push(inspection);

    // 10件ごとにシートに書き込み（メモリ節約）
    if (batchResults.length >= 10) {
      appendIndexingResults(batchResults);
      batchResults = [];
    }

    // レート制限回避
    if (i < urls.length - 1) {
      Utilities.sleep(500);
    }
  }

  // 残りの結果を書き込み
  if (batchResults.length > 0) {
    appendIndexingResults(batchResults);
  }

  // フォーマット適用
  applyIndexingStatusFormatting();

  // 進捗をクリア
  props.deleteProperty('INDEXING_CHECK_INDEX');

  // 自動継続トリガーを削除
  cleanupIndexingTriggers();

  // サマリー（シートから読み取り）
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Indexing_Status');
  var lastRow = sheet.getLastRow();
  if (lastRow >= 2) {
    var verdicts = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
    var total = verdicts.length;
    var passed = verdicts.filter(function(v) { return v[0] === 'PASS'; }).length;
    Logger.log('=== チェック完了 ===');
    Logger.log('合計: ' + total + ' / インデックス済み: ' + passed + ' / 未インデックス: ' + (total - passed));
  }
}

/**
 * 結果をシートに追記
 */
function appendIndexingResults(results) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getOrCreateSheet(ss, 'Indexing_Status');
  var now = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm');

  if (results.length === 0) return;

  var rows = results.map(function(r) {
    return [
      r.url,
      r.verdict || r.status || '',
      r.coverageState || r.error || '',
      r.crawledAs || '',
      r.lastCrawlTime || '',
      r.indexingState || '',
      r.pageFetchState || '',
      now
    ];
  });

  var startRow = sheet.getLastRow() + 1;
  sheet.getRange(startRow, 1, rows.length, 8).setValues(rows);
}

/**
 * Indexing_Statusシートのフォーマット適用（完了時）
 */
function applyIndexingStatusFormatting() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Indexing_Status');
  if (!sheet) return;

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  var verdicts = sheet.getRange(2, 2, lastRow - 1, 1).getValues();
  for (var i = 0; i < verdicts.length; i++) {
    if (verdicts[i][0] !== 'PASS') {
      sheet.getRange(i + 2, 1, 1, 8).setBackground('#fce4ec');
    }
  }

  sheet.autoResizeColumns(1, 8);
}

/**
 * インデックスチェック用の自動継続トリガーを削除
 */
function cleanupIndexingTriggers() {
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    if (trigger.getHandlerFunction() === 'checkAllIndexingStatus' &&
        trigger.getTriggerSource() === ScriptApp.TriggerSource.CLOCK) {
      // dailyReportトリガーは残す（時間ベースのcheckAllIndexingStatusのみ削除）
      ScriptApp.deleteTrigger(trigger);
    }
  });
}

/**
 * バッチ処理の進捗をリセット（途中で止まった場合に手動で実行）
 */
function resetIndexingCheck() {
  var props = PropertiesService.getScriptProperties();
  props.deleteProperty('INDEXING_CHECK_INDEX');
  cleanupIndexingTriggers();
  Logger.log('インデックスチェックの進捗をリセットしました');
}

// ============================================================
// Google Indexing API — URL送信
// ============================================================

/**
 * Indexing APIで1つのURLを送信
 * @param {string} targetUrl 送信するURL
 * @param {string} type "URL_UPDATED" or "URL_DELETED"
 * @return {Object} APIレスポンス
 */
function publishUrl(targetUrl, type) {
  try {
    const token = ScriptApp.getOAuthToken();
    const url = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      headers: { Authorization: 'Bearer ' + token },
      payload: JSON.stringify({
        url: targetUrl,
        type: type || 'URL_UPDATED'
      }),
      muteHttpExceptions: true
    });

    const code = response.getResponseCode();
    const body = JSON.parse(response.getContentText());

    if (code === 200) {
      Logger.log('送信成功: ' + targetUrl);
      return { url: targetUrl, success: true, response: body };
    } else {
      Logger.log('送信エラー (' + code + '): ' + targetUrl + ' → ' + JSON.stringify(body));
      return { url: targetUrl, success: false, error: body.error?.message || 'HTTP ' + code };
    }
  } catch (e) {
    Logger.log('送信エラー: ' + targetUrl + ' → ' + e.message);
    return { url: targetUrl, success: false, error: e.message };
  }
}

/**
 * 複数URLをバッチ送信（Indexing API）
 * 1日200リクエスト制限に注意
 * @param {string[]} urls 送信するURL配列
 * @return {Object[]} 結果配列
 */
function publishUrls(urls) {
  Logger.log('=== Indexing API バッチ送信: ' + urls.length + ' URLs ===');

  const results = [];
  for (let i = 0; i < urls.length; i++) {
    Logger.log('[' + (i + 1) + '/' + urls.length + '] ' + urls[i]);
    const result = publishUrl(urls[i], 'URL_UPDATED');
    results.push(result);

    // レート制限回避
    if (i < urls.length - 1) {
      Utilities.sleep(500);
    }
  }

  const success = results.filter(function(r) { return r.success; }).length;
  const failed = results.length - success;
  Logger.log('=== 送信完了: 成功 ' + success + ' / 失敗 ' + failed + ' ===');

  // 送信ログをシートに記録
  writeIndexingLogToSheet(results);

  return results;
}

/**
 * 送信ログをシートに記録
 */
function writeIndexingLogToSheet(results) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = getOrCreateSheet(ss, 'Indexing_Log');

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, 4).setValues([[
      'Timestamp', 'URL', 'Status', 'Detail'
    ]]).setFontWeight('bold');
  }

  const now = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');
  results.forEach(function(r) {
    sheet.appendRow([
      now,
      r.url,
      r.success ? 'SUCCESS' : 'FAILED',
      r.success ? JSON.stringify(r.response.urlNotificationMetadata || {}) : r.error
    ]);
  });
}

// ============================================================
// ワークフロー関数（メニューから呼び出し）
// ============================================================

/**
 * Indexing_Statusシートから未インデックスURLを読み取りIndexing APIで送信
 * 事前に「インデックス状況チェック」を実行してシートを作成しておくこと
 */
function submitUnindexedUrls() {
  var ui = SpreadsheetApp.getUi();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Indexing_Status');

  if (!sheet || sheet.getLastRow() < 2) {
    ui.alert(
      'データなし',
      '先に「インデックス状況チェック」を実行して、Indexing_Statusシートを作成してください。',
      ui.ButtonSet.OK
    );
    return;
  }

  // シートから未インデックスURLを抽出
  var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 2).getValues();
  var notIndexed = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i][1] !== 'PASS' && data[i][0]) {
      notIndexed.push({ url: data[i][0], verdict: data[i][1] });
    }
  }

  if (notIndexed.length === 0) {
    ui.alert('完了', '全URLがインデックス済みです！', ui.ButtonSet.OK);
    return;
  }

  var urlList = notIndexed.map(function(r) {
    return r.url + ' (' + r.verdict + ')';
  }).join('\n');

  var confirm = ui.alert(
    '未インデックスURL: ' + notIndexed.length + '件',
    '以下のURLをIndexing APIで送信しますか？\n\n' + urlList,
    ui.ButtonSet.YES_NO
  );

  if (confirm !== ui.Button.YES) return;

  var urls = notIndexed.map(function(r) { return r.url; });
  publishUrls(urls);

  ui.alert('完了', notIndexed.length + '件のURLをIndexing APIに送信しました。\nIndexing_Logシートで結果を確認してください。', ui.ButtonSet.OK);
}

/**
 * 特定のURLをIndexing APIに送信（ダイアログ入力）
 * 新規記事公開時に使用
 */
function submitSpecificUrls() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt(
    'URL送信',
    'Indexing APIに送信するURLを入力してください。\n複数URLは改行で区切ってください。\n\n例:\nhttps://tanuki-tabi-travel.com/blog/new-article\nhttps://tanuki-tabi-travel.com/es/blog/nuevo-articulo',
    ui.ButtonSet.OK_CANCEL
  );

  if (response.getSelectedButton() !== ui.Button.OK) return;

  var input = response.getResponseText().trim();
  if (!input) {
    ui.alert('URLが入力されていません。');
    return;
  }

  var urls = input.split('\n')
    .map(function(u) { return u.trim(); })
    .filter(function(u) { return u.length > 0 && u.startsWith('http'); });

  if (urls.length === 0) {
    ui.alert('有効なURLがありません。');
    return;
  }

  var confirm = ui.alert(
    urls.length + '件のURLを送信',
    urls.join('\n') + '\n\nIndexing APIに送信しますか？',
    ui.ButtonSet.YES_NO
  );

  if (confirm !== ui.Button.YES) return;

  publishUrls(urls);
  ui.alert('完了', urls.length + '件のURLを送信しました。\nIndexing_Logシートで結果を確認してください。', ui.ButtonSet.OK);
}

/**
 * 全サイトマップURLをIndexing APIに送信
 * 初回セットアップや大規模更新時に使用
 * 1日200リクエスト制限に注意
 */
function submitAllSitemapUrls() {
  var ui = SpreadsheetApp.getUi();
  var urls = getSitemapUrls();

  if (urls.length === 0) {
    ui.alert('エラー', 'サイトマップからURLを取得できませんでした。', ui.ButtonSet.OK);
    return;
  }

  if (urls.length > 200) {
    ui.alert(
      '警告',
      'サイトマップに' + urls.length + '件のURLがありますが、Indexing APIの1日の上限は200件です。\n最初の200件のみ送信します。',
      ui.ButtonSet.OK
    );
  }

  var confirm = ui.alert(
    '全URL送信',
    urls.length + '件のURLをIndexing APIに送信しますか？\n（1日200件制限あり）',
    ui.ButtonSet.YES_NO
  );

  if (confirm !== ui.Button.YES) return;

  var targetUrls = urls.slice(0, 200).map(function(u) { return u.loc; });
  publishUrls(targetUrls);

  ui.alert('完了', targetUrls.length + '件のURLを送信しました。\nIndexing_Logシートで結果を確認してください。', ui.ButtonSet.OK);
}
