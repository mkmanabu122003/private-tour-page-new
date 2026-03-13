function getConfig() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Config');
  if (!sheet) sheet = ss.insertSheet('Config');

  if (sheet.getLastRow() < 1) {
    sheet.getRange('A1:B1').setValues([['Key', 'Value']]);
    sheet.getRange('A2:B9').setValues([
      ['SITE_URL', 'https://tanuki-tabi-travel.com'],
      ['GSC_PROPERTY', 'https://tanuki-tabi-travel.com'],
      ['GA4_PROPERTY_ID', ''],
      ['REPORT_EMAIL', ''],
      ['ANTHROPIC_API_KEY', ''],
      ['GITHUB_TOKEN', ''],
      ['GITHUB_REPO', ''],
      ['LOOKBACK_DAYS', '2']
    ]);
    SpreadsheetApp.getUi().alert('初期設定が必要です。Configシートに値を入力してください。');
    return null;
  }

  const data = sheet.getDataRange().getValues();
  const config = {};
  for (let i = 1; i < data.length; i++) {
    config[data[i][0]] = String(data[i][1]);
  }
  return config;
}
