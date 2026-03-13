function writeGSCToSheets(gsc, date) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  writeRows(
    ss,
    'GSC_Queries',
    ['Date', 'Query', 'Clicks', 'Impressions', 'CTR', 'Position'],
    gsc.queries,
    r => [
      date,
      r.keys[0],
      r.clicks,
      r.impressions,
      Math.round(r.ctr * 10000) / 100,
      Math.round(r.position * 100) / 100
    ]
  );
  writeRows(
    ss,
    'GSC_Pages',
    ['Date', 'Page', 'Clicks', 'Impressions', 'CTR', 'Position'],
    gsc.pages,
    r => [
      date,
      r.keys[0].replace('https://tanuki-tabi-travel.com', ''),
      r.clicks,
      r.impressions,
      Math.round(r.ctr * 10000) / 100,
      Math.round(r.position * 100) / 100
    ]
  );
}

function writeGA4ToSheets(ga4, date) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (ga4.overview.rows && ga4.overview.rows[0]) {
    const o = ga4.overview.rows[0];
    const sh = getOrCreateSheet(ss, 'GA4_Daily');
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, 8)
        .setValues([['Date', 'Sessions', 'Users', 'New Users', 'PV', 'Avg Dur', 'Bounce', 'Engaged']])
        .setFontWeight('bold');
    }
    sh.appendRow([
      date,
      o.sessions || 0,
      o.totalUsers || 0,
      o.newUsers || 0,
      o.screenPageViews || 0,
      Math.round((o.averageSessionDuration || 0) * 100) / 100,
      Math.round((o.bounceRate || 0) * 10000) / 100,
      o.engagedSessions || 0
    ]);
  }

  if (ga4.events.rows) {
    const sh = getOrCreateSheet(ss, 'GA4_Events');
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, 4)
        .setValues([['Date', 'Event', 'Count', 'Users']])
        .setFontWeight('bold');
    }
    ga4.events.rows.forEach(e =>
      sh.appendRow([date, e.eventName, e.eventCount, e.totalUsers])
    );
  }
}

function writeDailySummary(gsc, ga4, date) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = getOrCreateSheet(ss, 'GSC_Daily');
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, 4)
      .setValues([['Date', 'Impressions', 'Clicks', 'CTR']])
      .setFontWeight('bold');
  }
  let imp = 0,
    clk = 0;
  if (gsc.daily)
    gsc.daily.forEach(r => {
      imp += r.impressions;
      clk += r.clicks;
    });
  sh.appendRow([date, imp, clk, imp > 0 ? Math.round((clk / imp) * 10000) / 100 : 0]);
}

function writeRows(ss, name, headers, data, mapper) {
  const sh = getOrCreateSheet(ss, name);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, headers.length)
      .setValues([headers])
      .setFontWeight('bold');
  }
  if (!data || !data.length) return;
  const rows = data.map(mapper);
  if (rows.length > 0) {
    sh.getRange(sh.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  }
}
