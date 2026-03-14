/**
 * 設定を取得する
 * - 機密情報（APIキー、トークン）→ Script Properties に保存（安全）
 * - 非機密情報（URL、メール等）→ スプレッドシートの Config シートに保存
 */
function getConfig() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Config');
  if (!sheet) sheet = ss.insertSheet('Config');

  // スプレッドシートに非機密設定の初期値をセット
  if (sheet.getLastRow() < 1) {
    sheet.getRange('A1:B1').setValues([['Key', 'Value']]);
    sheet.getRange('A2:B7').setValues([
      ['SITE_URL', 'https://tanuki-tabi-travel.com'],
      ['GSC_PROPERTY', 'https://tanuki-tabi-travel.com'],
      ['GA4_PROPERTY_ID', ''],
      ['REPORT_EMAIL', ''],
      ['GITHUB_REPO', ''],
      ['LOOKBACK_DAYS', '2']
    ]);
    Logger.log('初期設定が必要です。Configシートに値を入力し、スクリプトプロパティにAPIキーを設定してください。');
    return null;
  }

  // スプレッドシートから非機密設定を読み取り
  const data = sheet.getDataRange().getValues();
  const config = {};
  for (let i = 1; i < data.length; i++) {
    config[data[i][0]] = String(data[i][1]);
  }

  // Script Properties から機密情報を読み取り（スプレッドシートには保存しない）
  const scriptProps = PropertiesService.getScriptProperties();
  config['ANTHROPIC_API_KEY'] = scriptProps.getProperty('ANTHROPIC_API_KEY') || '';
  config['GITHUB_TOKEN'] = scriptProps.getProperty('GITHUB_TOKEN') || '';

  return config;
}

/**
 * 機密情報を Script Properties に保存するヘルパー関数
 * Apps Script エディタから手動で実行してください
 * 実行前に下の値を書き換えてから実行し、実行後に元に戻してください
 */
function setSecrets() {
  const scriptProps = PropertiesService.getScriptProperties();
  scriptProps.setProperties({
    'ANTHROPIC_API_KEY': 'ここにAnthropicのAPIキーを貼り付け',
    'GITHUB_TOKEN': 'ここにGitHubトークンを貼り付け'
  });
  Logger.log('機密情報を Script Properties に保存しました。');
  Logger.log('セキュリティのため、このファイルの値をプレースホルダーに戻してください。');
}
