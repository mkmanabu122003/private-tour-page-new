function fetchGA4Data(pid, startDate, endDate) {
  const dr = [{ startDate, endDate }];
  return {
    overview: ga4Run(pid, {
      dateRanges: dr,
      metrics: [
        { name: 'sessions' },
        { name: 'totalUsers' },
        { name: 'newUsers' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
        { name: 'engagedSessions' }
      ]
    }),
    pages: ga4Run(pid, {
      dateRanges: dr,
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'sessions' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' }
      ],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 50
    }),
    events: ga4Run(pid, {
      dateRanges: dr,
      dimensions: [{ name: 'eventName' }],
      metrics: [
        { name: 'eventCount' },
        { name: 'totalUsers' }
      ],
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 30
    }),
    sources: ga4Run(pid, {
      dateRanges: dr,
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [
        { name: 'sessions' },
        { name: 'totalUsers' },
        { name: 'engagedSessions' }
      ],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }]
    })
  };
}

function ga4Run(pid, body) {
  try {
    const r = AnalyticsData.Properties.runReport(body, 'properties/' + pid);
    if (!r.rows) return { headers: [], rows: [] };
    const dH = (r.dimensionHeaders || []).map(h => h.name);
    const mH = (r.metricHeaders || []).map(h => h.name);
    return {
      headers: [...dH, ...mH],
      rows: r.rows.map(row => {
        const o = {};
        (row.dimensionValues || []).forEach((v, i) => o[dH[i]] = v.value);
        (row.metricValues || []).forEach((v, i) => o[mH[i]] = parseFloat(v.value) || 0);
        return o;
      })
    };
  } catch (e) {
    Logger.log('GA4 Error: ' + e.message);
    return { headers: [], rows: [] };
  }
}
