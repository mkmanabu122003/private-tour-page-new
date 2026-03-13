function fetchGSCData(siteUrl, startDate, endDate, maxRows) {
  return {
    queries: scQuery(siteUrl, startDate, endDate, ['query'], maxRows),
    pages: scQuery(siteUrl, startDate, endDate, ['page'], maxRows),
    countries: scQuery(siteUrl, startDate, endDate, ['country'], maxRows),
    devices: scQuery(siteUrl, startDate, endDate, ['device'], maxRows),
    daily: scQuery(siteUrl, startDate, endDate, ['date'], maxRows)
  };
}

function scQuery(siteUrl, startDate, endDate, dims, maxRows) {
  try {
    const r = SearchConsole.Searchanalytics.query(
      {
        startDate,
        endDate,
        dimensions: dims,
        rowLimit: maxRows || 100,
        dataState: 'all'
      },
      siteUrl
    );
    if (!r.rows) return [];
    return r.rows.map(row => ({
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
