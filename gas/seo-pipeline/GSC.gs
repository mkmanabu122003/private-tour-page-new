function fetchGSCData(siteUrl, startDate, endDate, maxRows) {
  return {
    queries: scQuery(siteUrl, startDate, endDate, ['query'], maxRows),
    pages: scQuery(siteUrl, startDate, endDate, ['page'], maxRows),
    countries: scQuery(siteUrl, startDate, endDate, ['country'], maxRows),
    devices: scQuery(siteUrl, startDate, endDate, ['device'], maxRows),
    daily: scQuery(siteUrl, startDate, endDate, ['date'], maxRows)
  };
}

/**
 * Search Console API を UrlFetchApp で直接呼び出す
 * Advanced Service が不要なため、手動でのサービス追加が不要
 */
function scQuery(siteUrl, startDate, endDate, dims, maxRows) {
  try {
    const token = ScriptApp.getOAuthToken();
    const encodedSiteUrl = encodeURIComponent(siteUrl);
    const url = `https://www.googleapis.com/webmasters/v3/sites/${encodedSiteUrl}/searchAnalytics/query`;

    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      headers: {
        Authorization: 'Bearer ' + token
      },
      payload: JSON.stringify({
        startDate: startDate,
        endDate: endDate,
        dimensions: dims,
        rowLimit: maxRows || 100,
        dataState: 'all'
      }),
      muteHttpExceptions: true
    });

    const code = response.getResponseCode();
    const body = JSON.parse(response.getContentText());

    if (code !== 200) {
      Logger.log(`GSC API Error (${code}): ${JSON.stringify(body)}`);
      return [];
    }

    if (!body.rows) return [];
    return body.rows.map(row => ({
      keys: row.keys,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: row.ctr,
      position: row.position
    }));
  } catch (e) {
    Logger.log('GSC Error: ' + e.message);
    return [];
  }
}
