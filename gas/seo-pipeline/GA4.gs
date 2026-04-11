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

/**
 * ランディングページ別CVレポートを取得してログに出力
 * GASエディタから手動実行 → ログをコピーして共有
 */
function fetchLandingPageCV() {
  var config = getConfig();
  var pid = config['GA4_PROPERTY_ID'] || '465121981';
  var dr = [{ startDate: '90daysAgo', endDate: 'today' }];

  var landing = ga4Run(pid, {
    dateRanges: dr,
    dimensions: [{ name: 'landingPage' }],
    metrics: [
      { name: 'sessions' },
      { name: 'totalUsers' },
      { name: 'keyEvents' },
      { name: 'keyEventRate' },
      { name: 'averageSessionDuration' },
      { name: 'bounceRate' }
    ],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 50
  });

  var events = ga4Run(pid, {
    dateRanges: dr,
    dimensions: [{ name: 'landingPage' }, { name: 'eventName' }],
    metrics: [{ name: 'eventCount' }],
    dimensionFilter: {
      filter: {
        fieldName: 'eventName',
        inListFilter: {
          values: ['form_submit', 'book_now_click', 'contact_page_view', 'form_start', 'tour_page_view']
        }
      }
    },
    orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
    limit: 200
  });

  var output = JSON.stringify({ landing: landing, events: events });
  Logger.log(output);
  return output;
}

/**
 * Web App エンドポイント — 外部からGA4データを取得するためのAPI
 * デプロイ: 「デプロイ」→「新しいデプロイ」→「ウェブアプリ」→ アクセス権「自分のみ」
 */
function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) || 'landing_cv';
  var pid = '465121981';
  var days = (e && e.parameter && e.parameter.days) || '90';
  var dr = [{ startDate: days + 'daysAgo', endDate: 'today' }];
  var result = {};

  if (action === 'landing_cv') {
    result.landing = ga4Run(pid, {
      dateRanges: dr,
      dimensions: [{ name: 'landingPage' }],
      metrics: [
        { name: 'sessions' },
        { name: 'totalUsers' },
        { name: 'keyEvents' },
        { name: 'keyEventRate' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' }
      ],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 50
    });
    result.events = ga4Run(pid, {
      dateRanges: dr,
      dimensions: [{ name: 'landingPage' }, { name: 'eventName' }],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          inListFilter: {
            values: ['form_submit', 'book_now_click', 'contact_page_view', 'form_start', 'tour_page_view']
          }
        }
      },
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 200
    });
  } else if (action === 'overview') {
    result = fetchGA4Data(pid, days + 'daysAgo', 'today');
  } else if (action === 'diagnostic') {
    // Diagnostic tool funnel report
    result.events = ga4Run(pid, {
      dateRanges: dr,
      dimensions: [{ name: 'eventName' }],
      metrics: [{ name: 'eventCount' }, { name: 'totalUsers' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          inListFilter: {
            values: [
              'diagnostic_start',
              'diagnostic_answer',
              'diagnostic_complete',
              'diagnostic_to_tour',
              'diagnostic_to_contact',
            ],
          },
        },
      },
    });
    result.byTool = ga4Run(pid, {
      dateRanges: dr,
      dimensions: [
        { name: 'eventName' },
        { name: 'customEvent:tool_id' },
      ],
      metrics: [{ name: 'eventCount' }, { name: 'totalUsers' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          inListFilter: {
            values: [
              'diagnostic_start',
              'diagnostic_complete',
              'diagnostic_to_tour',
              'diagnostic_to_contact',
            ],
          },
        },
      },
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 50,
    });
    result.byResult = ga4Run(pid, {
      dateRanges: dr,
      dimensions: [
        { name: 'eventName' },
        { name: 'customEvent:result_id' },
      ],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          inListFilter: {
            values: [
              'diagnostic_complete',
              'diagnostic_to_tour',
              'diagnostic_to_contact',
            ],
          },
        },
      },
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 50,
    });
  }

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
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
