/**
 * 日次レポートメールを送信（分析・アクション付き）
 */
function sendDailyReport(gscData, ga4Data, analysis, date, email) {
  if (!email) return;

  const ssUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
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

  GmailApp.sendEmail(email, subject, body);
}
