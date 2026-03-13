/**
 * Claude APIを使ってSEOデータを分析し、ネクストアクションを提案する
 */
function analyzeWithClaude(gscData, ga4Data, date) {
  const config = getConfig();
  const apiKey = config.ANTHROPIC_API_KEY;

  if (!apiKey) {
    Logger.log('ANTHROPIC_API_KEY が設定されていません');
    return null;
  }

  // 過去データとの比較用に前日・前週のサマリーを取得
  const previousData = getPreviousSummaries();

  // Claude APIに送るプロンプトを構築
  const prompt = buildAnalysisPrompt(gscData, ga4Data, date, previousData);

  const payload = {
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ],
    system: `You are an SEO analyst for tanuki-tabi-travel.com, a Tokyo private walking tour business.
Your job is to:
1. Analyze the daily GSC and GA4 data
2. Compare with previous days to identify trends
3. Suggest specific, actionable next steps

For each action, you MUST output valid JSON in the following format:
{
  "summary": "1-2 paragraph analysis in Japanese",
  "alerts": ["array of urgent items in Japanese"],
  "actions": [
    {
      "id": "unique-action-id",
      "priority": "high|medium|low",
      "category": "content|technical|seo",
      "title": "Short action title in Japanese",
      "description": "Detailed description in Japanese of what to do",
      "claude_code_prompt": "Detailed English prompt for Claude Code to implement this change. Include specific file paths, content changes, and technical instructions. Reference the Astro framework, Markdown frontmatter, and Netlify configuration as appropriate.",
      "estimated_impact": "Expected impact description in Japanese",
      "files_affected": ["array of likely file paths"]
    }
  ]
}

IMPORTANT RULES:
- Output ONLY valid JSON. No markdown, no backticks, no preamble.
- claude_code_prompt must be detailed enough for Claude Code to implement without additional context.
- Each action should be a single, atomic change that can be a standalone PR.
- Prioritize actions by potential traffic/conversion impact.
- Maximum 5 actions per day to avoid overwhelm.
- Categories: "content" = blog/page edits, "technical" = config/redirect/schema, "seo" = title/meta/structured data.
- Always include file paths relative to the repo root (e.g., src/content/blog/xxx.md).
- For content changes, include the actual text to add or modify in the claude_code_prompt.`
  };

  try {
    const response = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });

    const result = JSON.parse(response.getContentText());

    if (result.content && result.content[0]) {
      const text = result.content[0].text;
      // JSONをパース（バッククォートが含まれている場合は除去）
      const cleanJson = text
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();
      return JSON.parse(cleanJson);
    }

    return null;
  } catch (e) {
    Logger.log(`Claude API Error: ${e.message}`);
    return null;
  }
}

/**
 * 分析プロンプトを構築する
 */
function buildAnalysisPrompt(gscData, ga4Data, date, previousData) {
  let prompt = `## SEO Daily Report: ${date}\n\n`;

  // GSCデータ
  prompt += `### GSC Data (${date})\n\n`;

  if (gscData.queries && gscData.queries.length > 0) {
    prompt += `**Top Queries (by impressions):**\n`;
    gscData.queries.slice(0, 30).forEach(q => {
      prompt += `- "${q.keys[0]}" — clicks:${q.clicks}, impressions:${q.impressions}, CTR:${(q.ctr * 100).toFixed(2)}%, position:${q.position.toFixed(1)}\n`;
    });
    prompt += '\n';
  }

  if (gscData.pages && gscData.pages.length > 0) {
    prompt += `**Top Pages (by impressions):**\n`;
    gscData.pages.slice(0, 20).forEach(p => {
      const path = p.keys[0].replace('https://tanuki-tabi-travel.com', '');
      prompt += `- ${path} — clicks:${p.clicks}, impressions:${p.impressions}, CTR:${(p.ctr * 100).toFixed(2)}%, position:${p.position.toFixed(1)}\n`;
    });
    prompt += '\n';
  }

  // GA4データ
  prompt += `### GA4 Data (${date})\n\n`;

  if (ga4Data.overview && ga4Data.overview.rows && ga4Data.overview.rows.length > 0) {
    const ov = ga4Data.overview.rows[0];
    prompt += `- Sessions: ${ov.sessions || 0}\n`;
    prompt += `- Users: ${ov.totalUsers || 0}\n`;
    prompt += `- Page Views: ${ov.screenPageViews || 0}\n`;
    prompt += `- Bounce Rate: ${((ov.bounceRate || 0) * 100).toFixed(1)}%\n`;
    prompt += `- Avg Session Duration: ${Math.round(ov.averageSessionDuration || 0)}s\n\n`;
  }

  if (ga4Data.events && ga4Data.events.rows) {
    prompt += `**Events:**\n`;
    ga4Data.events.rows.forEach(e => {
      prompt += `- ${e.eventName}: ${e.eventCount} (${e.totalUsers} users)\n`;
    });
    prompt += '\n';
  }

  // 前日データとの比較
  if (previousData) {
    prompt += `### Previous Data for Comparison\n\n`;
    prompt += previousData;
    prompt += '\n';
  }

  // 既知の課題をコンテキストとして追加
  prompt += `### Known Context\n`;
  prompt += `- Site: Astro framework, Netlify hosting, blog posts in Markdown/MDX\n`;
  prompt += `- Business: Private Tokyo walking tours, ¥25,000-60,000 per tour\n`;
  prompt += `- Key pages: /blog/japan-rail-pass-worth-it (top traffic), /blog/tsukiji-market-guide, /blog/senso-ji-most-visited-temple\n`;
  prompt += `- Known issues: Low CTR despite good rankings, tour pages rank poorly (position 30-50)\n`;
  prompt += `- Trailing slash normalization was recently implemented\n`;
  prompt += `- Spanish content is growing (Mexico CTR is highest)\n`;
  prompt += `- GA4 shows very few users reach /contact page\n\n`;

  prompt += `Based on this data, provide your analysis and actionable recommendations.`;

  return prompt;
}

/**
 * 前日・前週のサマリーデータを取得
 */
function getPreviousSummaries() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('GSC_Daily');

  if (!sheet || sheet.getLastRow() < 2) return null;

  const data = sheet.getDataRange().getValues();
  const lastRows = data.slice(-7); // 直近7日分

  let summary = '';
  lastRows.forEach(row => {
    summary += `${row[0]}: impressions=${row[1]}, clicks=${row[2]}, CTR=${row[3]}%\n`;
  });

  return summary;
}
