/**
 * スプレッドシートを開いたときにカスタムメニューを追加
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('SEO Pipeline')
    .addItem('今すぐレポート実行', 'dailyReport')
    .addItem('承認済みアクションを実行', 'executeApprovedActions')
    .addSeparator()
    .addItem('過去7日分をバックフィル', 'backfillLast7Days')
    .addItem('毎朝トリガーを設定', 'setupDailyTrigger')
    .addSeparator()
    .addSubMenu(SpreadsheetApp.getUi().createMenu('Indexing API')
      .addItem('インデックス状況チェック', 'checkAllIndexingStatus')
      .addItem('未インデックスURLを送信', 'submitUnindexedUrls')
      .addItem('特定URLを送信', 'submitSpecificUrls')
      .addItem('全サイトマップURLを送信', 'submitAllSitemapUrls')
      .addSeparator()
      .addItem('チェック進捗をリセット', 'resetIndexingCheck'))
    .addToUi();
}

/**
 * メイン実行関数 — 毎朝トリガーで自動実行
 */
function dailyReport() {
  const config = getConfig();

  if (!config || !config.GA4_PROPERTY_ID) {
    Logger.log('設定が不完全です。Configシートを確認してください。');
    return;
  }

  const lookbackDays = parseInt(config.LOOKBACK_DAYS) || 2;
  const reportDate = daysAgo(lookbackDays);
  const dateStr = formatDate(reportDate);

  Logger.log(`=== SEO日次パイプライン実行: ${dateStr} ===`);

  // [1] データ収集
  Logger.log('[1/5] GSCデータ取得中...');
  const gscData = fetchGSCData(config.GSC_PROPERTY, dateStr, dateStr, 100);

  Logger.log('[2/5] GA4データ取得中...');
  const ga4Data = fetchGA4Data(config.GA4_PROPERTY_ID, dateStr, dateStr);

  // [2] シートに書き込み
  Logger.log('[3/5] シートに書き込み中...');
  writeGSCToSheets(gscData, dateStr);
  writeGA4ToSheets(ga4Data, dateStr);
  writeDailySummary(gscData, ga4Data, dateStr);

  // [3] Claude APIで分析
  Logger.log('[4/5] Claude APIで分析中...');
  const analysis = analyzeWithClaude(gscData, ga4Data, dateStr);

  if (analysis) {
    // 分析結果をAnalysisシートに保存
    writeAnalysisToSheet(analysis, dateStr);

    // アクションをActionsシートに書き込み
    writeActionsToSheet(analysis, dateStr);
  }

  // [4] メール送信
  Logger.log('[5/5] メール送信中...');
  sendDailyReport(gscData, ga4Data, analysis, dateStr, config.REPORT_EMAIL);

  Logger.log('=== パイプライン完了 ===');
}

/**
 * 分析結果をAnalysisシートに保存
 */
function writeAnalysisToSheet(analysis, date) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = getOrCreateSheet(ss, 'Analysis');

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, 3).setValues([['Date', 'Summary', 'Alerts']]).setFontWeight('bold');
  }

  sheet.appendRow([date, analysis.summary || '', (analysis.alerts || []).join('\n')]);
}

/**
 * 過去7日分のデータをバックフィルする
 */
function backfillLast7Days() {
  const config = getConfig();

  if (!config || !config.GA4_PROPERTY_ID) {
    Logger.log('設定が不完全です。Configシートを確認してください。');
    return;
  }

  for (let i = 8; i >= 2; i--) {
    const reportDate = daysAgo(i);
    const dateStr = formatDate(reportDate);

    Logger.log(`バックフィル: ${dateStr}`);

    const gscData = fetchGSCData(config.GSC_PROPERTY, dateStr, dateStr, 100);
    const ga4Data = fetchGA4Data(config.GA4_PROPERTY_ID, dateStr, dateStr);

    writeGSCToSheets(gscData, dateStr);
    writeGA4ToSheets(ga4Data, dateStr);
    writeDailySummary(gscData, ga4Data, dateStr);
  }

  Logger.log('バックフィル完了');
}

/**
 * 毎朝8:00 JSTのトリガーを設定
 */
function setupDailyTrigger() {
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => {
    if (trigger.getHandlerFunction() === 'dailyReport') {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  ScriptApp.newTrigger('dailyReport')
    .timeBased()
    .everyDays(1)
    .atHour(8)
    .inTimezone('Asia/Tokyo')
    .create();

  Logger.log('毎朝8:00 JSTのトリガーを設定しました');
}
