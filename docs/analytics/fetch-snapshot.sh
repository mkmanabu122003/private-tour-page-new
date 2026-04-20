#!/usr/bin/env bash
# GSC + GA4 snapshot fetcher for tanuki-tabi-travel.com
#
# Usage:
#   bash docs/analytics/fetch-snapshot.sh [END_DATE] [WINDOW_DAYS]
#   bash docs/analytics/fetch-snapshot.sh 2026-04-18 28
#
# Defaults: END_DATE = 3 days ago (GSC has 2-3d delay), WINDOW_DAYS = 28
#
# Prereq:
#   gcloud auth application-default login \
#     --scopes=openid,https://www.googleapis.com/auth/userinfo.email,\
# https://www.googleapis.com/auth/cloud-platform,\
# https://www.googleapis.com/auth/webmasters.readonly,\
# https://www.googleapis.com/auth/analytics.readonly
#   gcloud config set project seo-pipeline-490113

set -euo pipefail

SITE_URL="https://tanuki-tabi-travel.com/"
GA4_PROPERTY_ID="465121981"
QUOTA_PROJECT="seo-pipeline-490113"

END_DATE="${1:-$(date -v-3d +%F 2>/dev/null || date -d '3 days ago' +%F)}"
WINDOW="${2:-28}"
START_DATE=$(date -j -v-$((WINDOW-1))d -f %F "$END_DATE" +%F 2>/dev/null \
  || date -d "$END_DATE - $((WINDOW-1)) days" +%F)
PREV_END=$(date -j -v-1d -f %F "$START_DATE" +%F 2>/dev/null \
  || date -d "$START_DATE - 1 day" +%F)
PREV_START=$(date -j -v-$((WINDOW-1))d -f %F "$PREV_END" +%F 2>/dev/null \
  || date -d "$PREV_END - $((WINDOW-1)) days" +%F)

TOKEN=$(gcloud auth application-default print-access-token)
OUT_DIR="$(cd "$(dirname "$0")" && pwd)/raw"
TAG="${END_DATE}_${WINDOW}d"
mkdir -p "$OUT_DIR"

echo "Window : $START_DATE → $END_DATE  ($WINDOW days)"
echo "Prev   : $PREV_START → $PREV_END"
echo "Output : $OUT_DIR (tag=$TAG)"

gsc() {
  local body="$1" out="$2"
  local enc
  enc=$(python3 -c "import urllib.parse;print(urllib.parse.quote('$SITE_URL',safe=''))")
  curl -sS \
    -H "Authorization: Bearer $TOKEN" \
    -H "X-Goog-User-Project: $QUOTA_PROJECT" \
    -H "Content-Type: application/json" \
    -X POST \
    "https://www.googleapis.com/webmasters/v3/sites/$enc/searchAnalytics/query" \
    -d "$body" > "$OUT_DIR/$out"
}

ga4() {
  local body="$1" out="$2"
  curl -sS \
    -H "Authorization: Bearer $TOKEN" \
    -H "X-Goog-User-Project: $QUOTA_PROJECT" \
    -H "Content-Type: application/json" \
    -X POST \
    "https://analyticsdata.googleapis.com/v1beta/properties/$GA4_PROPERTY_ID:runReport" \
    -d "$body" > "$OUT_DIR/$out"
}

# ----- GSC -----
gsc "{\"startDate\":\"$START_DATE\",\"endDate\":\"$END_DATE\",\"dimensions\":[],\"rowLimit\":1,\"dataState\":\"all\"}" "${TAG}_gsc_total.json"
gsc "{\"startDate\":\"$PREV_START\",\"endDate\":\"$PREV_END\",\"dimensions\":[],\"rowLimit\":1,\"dataState\":\"all\"}" "${TAG}_gsc_total_prev.json"
for DIM in query page country device; do
  gsc "{\"startDate\":\"$START_DATE\",\"endDate\":\"$END_DATE\",\"dimensions\":[\"$DIM\"],\"rowLimit\":500,\"dataState\":\"all\"}" "${TAG}_gsc_${DIM}.json"
done

# ----- GA4 -----
ga4 "{\"dateRanges\":[{\"startDate\":\"$START_DATE\",\"endDate\":\"$END_DATE\",\"name\":\"recent\"},{\"startDate\":\"$PREV_START\",\"endDate\":\"$PREV_END\",\"name\":\"previous\"}],\"metrics\":[{\"name\":\"activeUsers\"},{\"name\":\"sessions\"},{\"name\":\"engagedSessions\"},{\"name\":\"screenPageViews\"},{\"name\":\"userEngagementDuration\"},{\"name\":\"averageSessionDuration\"},{\"name\":\"bounceRate\"}]}" "${TAG}_ga4_total.json"

ga4 "{\"dateRanges\":[{\"startDate\":\"$START_DATE\",\"endDate\":\"$END_DATE\"}],\"dimensions\":[{\"name\":\"sessionDefaultChannelGroup\"}],\"metrics\":[{\"name\":\"sessions\"},{\"name\":\"engagedSessions\"},{\"name\":\"conversions\"}],\"orderBys\":[{\"metric\":{\"metricName\":\"sessions\"},\"desc\":true}]}" "${TAG}_ga4_channels.json"

ga4 "{\"dateRanges\":[{\"startDate\":\"$START_DATE\",\"endDate\":\"$END_DATE\"}],\"dimensions\":[{\"name\":\"pagePath\"}],\"metrics\":[{\"name\":\"screenPageViews\"},{\"name\":\"activeUsers\"},{\"name\":\"userEngagementDuration\"}],\"orderBys\":[{\"metric\":{\"metricName\":\"screenPageViews\"},\"desc\":true}],\"limit\":50}" "${TAG}_ga4_pages.json"

ga4 "{\"dateRanges\":[{\"startDate\":\"$START_DATE\",\"endDate\":\"$END_DATE\"}],\"dimensions\":[{\"name\":\"eventName\"}],\"metrics\":[{\"name\":\"eventCount\"},{\"name\":\"conversions\"}],\"orderBys\":[{\"metric\":{\"metricName\":\"eventCount\"},\"desc\":true}],\"limit\":30}" "${TAG}_ga4_events.json"

ga4 "{\"dateRanges\":[{\"startDate\":\"$START_DATE\",\"endDate\":\"$END_DATE\"}],\"dimensions\":[{\"name\":\"country\"}],\"metrics\":[{\"name\":\"sessions\"},{\"name\":\"activeUsers\"},{\"name\":\"conversions\"}],\"orderBys\":[{\"metric\":{\"metricName\":\"sessions\"},\"desc\":true}],\"limit\":20}" "${TAG}_ga4_country.json"

ga4 "{\"dateRanges\":[{\"startDate\":\"$START_DATE\",\"endDate\":\"$END_DATE\"}],\"dimensions\":[{\"name\":\"landingPage\"}],\"metrics\":[{\"name\":\"sessions\"},{\"name\":\"engagedSessions\"},{\"name\":\"conversions\"},{\"name\":\"averageSessionDuration\"}],\"orderBys\":[{\"metric\":{\"metricName\":\"sessions\"},\"desc\":true}],\"limit\":30}" "${TAG}_ga4_landing.json"

echo "Done. $(ls -1 "$OUT_DIR" | grep "^${TAG}" | wc -l | tr -d ' ') files written with tag ${TAG}."
