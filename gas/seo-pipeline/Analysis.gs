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
    max_tokens: 12000,
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
3. Suggest specific, actionable next steps (improvements to existing content)
4. Propose NEW blog article topics based on keyword gaps and search trends

You MUST output valid JSON in the following format:
{
  "summary": "1-2 paragraph analysis in Japanese",
  "alerts": ["array of urgent items in Japanese"],
  "actions": [
    {
      "id": "unique-action-id",
      "priority": "high|medium|low",
      "category": "content|technical|seo|new-article-en|new-article-es",
      "title": "Short action title in Japanese",
      "description": "Detailed description in Japanese of what to do",
      "claude_code_prompt": "Detailed English prompt for Claude Code to implement this change. Include specific file paths, content changes, and technical instructions.",
      "estimated_impact": "Expected impact description in Japanese",
      "files_affected": ["array of likely file paths"]
    }
  ]
}

ACTION STRUCTURE — the "actions" array MUST contain exactly 3 sections in this order:

## Section 1: Improvement Actions (max 5)
- category: "content" | "technical" | "seo"
- Improvements to existing pages/content based on data analysis
- id prefix: "improve-{date}-{i}"

## Section 2: New English Articles (exactly 10)
- category: "new-article-en"
- id prefix: "new-en-{date}-{i}"
- Each must target a specific keyword cluster with search volume potential
- Focus on "hidden gem" long-tail keywords that attract potential tour customers
- Think about what someone planning a Tokyo trip would search for
- The article should be substantial (1500-2500 words target)
- title: Article title proposal in Japanese
- description: In Japanese — topic overview, target keywords, angle, why this attracts tour customers
- claude_code_prompt: In English — MUST include:
  • Proposed URL slug (e.g., /blog/best-izakaya-shinjuku)
  • Target primary keyword and 3-5 secondary keywords
  • Detailed article outline (H2/H3 structure with 5-8 sections)
  • Key points to cover in each section
  • Internal linking opportunities to existing articles and tour pages
  • CTA placement suggestions (link to /contact or tour pages)
  • SEO meta title (<60 chars) and meta description (<155 chars)
  • File path: src/pages/blog/{PascalCaseName}.tsx
  • Note: Follow existing blog post component patterns in the codebase
- files_affected: ["src/pages/blog/{Name}.tsx", "src/pages/blog/BlogIndex.tsx"]
- estimated_impact: Expected monthly search volume range and conversion potential in Japanese

## Section 3: New Spanish Articles (exactly 10)
- category: "new-article-es"
- id prefix: "new-es-{date}-{i}"
- These MUST be the Spanish versions of the 10 English articles from Section 2
- Each Spanish article corresponds 1:1 with an English article (same topic)
- title: Spanish article title proposal (in Japanese description)
- description: In Japanese — same as English version but noting it's the Spanish counterpart
- claude_code_prompt: In English — MUST include:
  • Proposed URL slug (e.g., /es/blog/mejores-izakaya-shinjuku)
  • Target primary keyword in Spanish and 3-5 secondary keywords in Spanish
  • Same article outline as English version
  • Internal linking to existing Spanish articles and Spanish tour pages
  • SEO meta title in Spanish (<60 chars) and meta description in Spanish (<155 chars)
  • File path: src/pages/es/blog/Es{PascalCaseName}.tsx
  • Note: Content should be naturally written in Spanish, not machine-translated
- files_affected: ["src/pages/es/blog/Es{Name}.tsx", "src/pages/es/blog/EsBlogIndex.tsx"]

KEYWORD STRATEGY for new articles:
- Analyze GSC queries to find related topics the site does NOT yet cover
- Look for informational queries (how to, what is, best, guide, tips) that indicate trip-planning intent
- Prioritize topics where the searcher is likely planning to visit Tokyo (= potential tour customer)
- Avoid topics already covered by existing articles (see "Existing Articles" in the prompt)
- Consider seasonal relevance, evergreen potential, and difficulty level
- Target keywords with estimated 500-5000 monthly searches (sweet spot for niche authority)
- Think laterally: food, culture, transport, neighborhoods, day trips, shopping, nightlife, family, budget, luxury

IMPORTANT RULES:
- Output ONLY valid JSON. No markdown, no backticks, no preamble.
- claude_code_prompt must be detailed enough for Claude Code to implement without additional context.
- Each action should be a single, atomic change that can be a standalone PR.
- Always include file paths relative to the repo root.
- For content changes, include the actual text to add or modify in the claude_code_prompt.
- Total actions: max 5 improvements + exactly 10 EN articles + exactly 10 ES articles = max 25 actions.`
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
      Logger.log(`Claude APIレスポンス (先頭500文字): ${text.substring(0, 500)}`);
      // JSONをパース（バッククォートが含まれている場合は除去）
      const cleanJson = text
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();
      try {
        const parsed = JSON.parse(cleanJson);
        Logger.log(`パース成功 — summary: ${!!parsed.summary}, alerts: ${Array.isArray(parsed.alerts) ? parsed.alerts.length : 'N/A'}, actions: ${Array.isArray(parsed.actions) ? parsed.actions.length : 'N/A'}`);
        return parsed;
      } catch (parseErr) {
        Logger.log(`JSON パースエラー: ${parseErr.message}`);
        Logger.log(`パース対象 (先頭300文字): ${cleanJson.substring(0, 300)}`);
        return null;
      }
    }

    Logger.log(`Claude API レスポンス異常: ${JSON.stringify(result).substring(0, 500)}`);
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
  prompt += `- Site: Astro framework, Netlify hosting, blog posts as React/TSX components\n`;
  prompt += `- Business: Private Tokyo walking tours, ¥25,000-60,000 per tour\n`;
  prompt += `- Key pages: /blog/japan-rail-pass-worth-it (top traffic), /blog/tsukiji-market-guide, /blog/senso-ji-most-visited-temple\n`;
  prompt += `- Known issues: Low CTR despite good rankings, tour pages rank poorly (position 30-50)\n`;
  prompt += `- Trailing slash normalization was recently implemented\n`;
  prompt += `- Spanish content is growing (Mexico CTR is highest)\n`;
  prompt += `- GA4 shows very few users reach /contact page\n\n`;

  // 既存ブログ一覧（新規記事提案の重複回避用）
  prompt += `### Existing Articles (DO NOT propose these topics again)\n\n`;
  prompt += `**English:**\n`;
  prompt += getExistingBlogSlugs('en').map(s => `- ${s}`).join('\n');
  prompt += `\n\n**Spanish:**\n`;
  prompt += getExistingBlogSlugs('es').map(s => `- ${s}`).join('\n');
  prompt += `\n\n`;

  // 前回提案済みの記事（直近のActionsシートから取得）
  const recentNewArticles = getRecentNewArticleTitles();
  if (recentNewArticles.length > 0) {
    prompt += `### Recently Proposed Articles (DO NOT propose these again)\n`;
    prompt += recentNewArticles.map(t => `- ${t}`).join('\n');
    prompt += `\n\n`;
  }

  prompt += `Based on this data, provide your analysis, improvement actions (max 5), and propose 10 new English article topics + 10 corresponding Spanish articles. Focus on hidden-gem keywords with tour-customer conversion potential.`;

  return prompt;
}

/**
 * 既存ブログ記事のスラッグ一覧を取得（GSCページデータまたはハードコード）
 */
function getExistingBlogSlugs(lang) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('GSC_Pages');

  const slugs = [];

  if (sheet && sheet.getLastRow() > 1) {
    const data = sheet.getDataRange().getValues();
    const prefix = lang === 'es' ? '/es/blog/' : '/blog/';
    const esPrefix = '/es/blog/';

    for (let i = 1; i < data.length; i++) {
      const url = String(data[i][0] || '');
      const path = url.replace('https://tanuki-tabi-travel.com', '');

      if (lang === 'es' && path.startsWith(esPrefix)) {
        slugs.push(path);
      } else if (lang === 'en' && path.startsWith('/blog/') && !path.startsWith(esPrefix)) {
        slugs.push(path);
      }
    }
  }

  // GSCデータにない記事もハードコードで追加（網羅性確保）
  const knownEN = [
    '/blog/japan-rail-pass-worth-it', '/blog/tsukiji-market-guide', '/blog/senso-ji-most-visited-temple',
    '/blog/tokyo-3-day-itinerary', '/blog/tokyo-5-day-itinerary', '/blog/best-time-to-visit-tokyo',
    '/blog/tipping-in-japan', '/blog/tokyo-on-a-budget', '/blog/tokyo-hidden-gems',
    '/blog/asakusa-guide', '/blog/shinjuku-guide', '/blog/shibuya-harajuku-guide',
    '/blog/ramen-guide-tokyo', '/blog/sushi-guide-tokyo', '/blog/vegetarian-food-tour-tokyo',
    '/blog/temple-etiquette', '/blog/old-tokyo-shitamachi', '/blog/yanaka-walking-tour',
    '/blog/nikko-day-trip', '/blog/kamakura-day-trip', '/blog/kawagoe-day-trip',
    '/blog/yokohama-day-trip', '/blog/hakone-day-trip-guide',
    '/blog/first-time-tokyo-local-guide', '/blog/what-to-expect-private-tour',
    '/blog/is-it-worth-hiring-guide', '/blog/tokyo-private-tour-guide-cost',
    '/blog/tsukiji-to-ginza-food-walk', '/blog/day-trip-comparison',
    '/blog/tokyo-with-kids-family-tour'
  ];

  const knownES = [
    '/es/blog/japan-rail-pass', '/es/blog/guia-tsukiji', '/es/blog/templos-famosos-japon',
    '/es/blog/itinerario-tokio-3-dias', '/es/blog/itinerario-tokio-5-dias',
    '/es/blog/mejor-epoca-visitar-tokio', '/es/blog/propinas-en-japon',
    '/es/blog/guia-shinjuku', '/es/blog/guia-shibuya-harajuku', '/es/blog/guia-asakusa',
    '/es/blog/shitamachi-tokio', '/es/blog/yanaka-tokio',
    '/es/blog/nikko-desde-tokio', '/es/blog/kamakura-desde-tokio',
    '/es/blog/comparativa-excursiones', '/es/blog/etiqueta-templos',
    '/es/blog/primera-vez-tokio-guia-local', '/es/blog/vale-la-pena-guia-privado-tokio',
    '/es/blog/cuanto-cuesta-guia-privado-tokio', '/es/blog/tour-gastronomico-tokio',
    '/es/blog/comida-callejera-tokio', '/es/blog/mercado-tsukiji-tokio',
    '/es/blog/guia-licencia-oficial-japon', '/es/blog/monte-fuji-se-ve-desde-tokio',
    '/es/blog/que-comer-en-japon', '/es/blog/que-se-come-en-japon'
  ];

  const known = lang === 'es' ? knownES : knownEN;
  known.forEach(s => {
    if (!slugs.includes(s)) slugs.push(s);
  });

  return [...new Set(slugs)];
}

/**
 * 直近のActionsシートから新規記事提案のタイトルを取得（重複回避用）
 */
function getRecentNewArticleTitles() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Actions');

  if (!sheet || sheet.getLastRow() < 2) return [];

  const data = sheet.getDataRange().getValues();
  const titles = [];
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  for (let i = 1; i < data.length; i++) {
    const dateVal = new Date(data[i][0]);
    const category = String(data[i][3] || '');

    if (dateVal >= thirtyDaysAgo && (category === 'new-article-en' || category === 'new-article-es')) {
      titles.push(String(data[i][4] || ''));
    }
  }

  return titles;
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
