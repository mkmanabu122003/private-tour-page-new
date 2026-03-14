/**
 * 日次レポートメールを送信（分析・アクション付き）
 * レポートPDFを 年/月/日 フォルダに保存し、メールに添付する
 */
function sendDailyReport(gscData, ga4Data, analysis, date, email) {
  if (!email) return;

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ssUrl = ss.getUrl();
  const subject = `📊 SEO日次レポート — ${date}`;

  let body = `SEO日次レポート: ${date}\n`;
  body += `${'='.repeat(50)}\n\n`;

  // サマリー数値
  if (gscData.daily && gscData.daily.length > 0) {
    const totals = gscData.daily.reduce(
      (acc, r) => {
        acc.clicks += r.clicks;
        acc.impressions += r.impressions;
        return acc;
      },
      { clicks: 0, impressions: 0 }
    );

    body += `■ GSC: ${totals.impressions.toLocaleString()}表示 / ${totals.clicks}クリック / CTR ${totals.impressions > 0 ? ((totals.clicks / totals.impressions) * 100).toFixed(2) : 0}%\n`;
  }

  if (ga4Data.overview && ga4Data.overview.rows && ga4Data.overview.rows[0]) {
    const ov = ga4Data.overview.rows[0];
    body += `■ GA4: ${ov.sessions || 0}セッション / ${ov.totalUsers || 0}ユーザー / ${ov.screenPageViews || 0}PV\n`;
  }

  body += '\n';

  // AI分析サマリー
  if (analysis) {
    body += `■ AI分析\n${analysis.summary || '（分析なし）'}\n\n`;

    if (analysis.alerts && analysis.alerts.length > 0) {
      body += `⚠️ アラート:\n`;
      analysis.alerts.forEach(a => (body += `  - ${a}\n`));
      body += '\n';
    }

    if (analysis.actions && analysis.actions.length > 0) {
      body += `■ 提案アクション（${analysis.actions.length}件）\n`;
      analysis.actions.forEach((a, i) => {
        body += `  ${i + 1}. [${a.priority}] ${a.title}\n`;
        body += `     → ${a.estimated_impact || ''}\n`;
      });
      body += '\n';
    }
  }

  body += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  body += `📋 ダッシュボード: ${ssUrl}\n`;
  body += `→ Actionsシートで承認 → 「SEO Pipeline」メニュー → 「承認済みアクションを実行」\n`;

  // スプレッドシートのPDFを生成して日付フォルダに保存
  try {
    const pdfBlob = exportSpreadsheetAsPdf_(ss);
    const fileName = `SEO-Report-${date}.pdf`;
    const savedFile = saveReportToDateFolder(pdfBlob, date, fileName);

    // メールにもPDFを添付
    GmailApp.sendEmail(email, subject, body, {
      attachments: [savedFile.getAs(MimeType.PDF)]
    });

    Logger.log(`レポートPDFを保存しました: ${savedFile.getUrl()}`);
  } catch (e) {
    Logger.log(`PDF保存エラー（メールはPDFなしで送信）: ${e.message}`);
    GmailApp.sendEmail(email, subject, body);
  }
}

/**
 * スプレッドシートをPDFとしてエクスポートする
 */
function exportSpreadsheetAsPdf_(ss) {
  const ssId = ss.getId();
  const token = ScriptApp.getOAuthToken();
  const url = `https://docs.google.com/spreadsheets/d/${ssId}/export?format=pdf&portrait=false&size=A4&fitw=true`;

  const response = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + token },
    muteHttpExceptions: true
  });

  return response.getBlob().setContentType(MimeType.PDF);
}
