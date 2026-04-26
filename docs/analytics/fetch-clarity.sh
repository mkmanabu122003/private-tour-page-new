#!/usr/bin/env bash
# Microsoft Clarity Data Export API fetcher for tanuki-tabi-travel.com
#
# Usage:
#   bash docs/analytics/fetch-clarity.sh [NUM_DAYS]
#
# NUM_DAYS: 1, 2, or 3 (Clarity API hard limit). Default: 3.
#
# Prereq:
#   1. Generate API token in Clarity dashboard:
#      Settings → Data Export → "Generate new API token"
#   2. Save token to .env.local in project root (gitignored):
#      echo 'CLARITY_API_TOKEN=<your_token>' > .env.local
#      chmod 600 .env.local
#
# API limits (free tier):
#   - 10 requests/day per project
#   - This script makes 6 requests, so ≤1 run per day before hitting limit
#   - Rolling window: only last 1-3 days available
#
# Reference: https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-data-export-api

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
ENV_FILE="${PROJECT_ROOT}/.env.local"

if [ ! -f "$ENV_FILE" ]; then
  echo "ERROR: .env.local not found at $ENV_FILE"
  echo "Create it with:"
  echo "  echo 'CLARITY_API_TOKEN=<your_token>' > $ENV_FILE"
  echo "  chmod 600 $ENV_FILE"
  exit 1
fi

# shellcheck disable=SC1090
set -a
source "$ENV_FILE"
set +a

if [ -z "${CLARITY_API_TOKEN:-}" ]; then
  echo "ERROR: CLARITY_API_TOKEN not set in .env.local"
  exit 1
fi

NUM_DAYS="${1:-3}"
case "$NUM_DAYS" in
  1|2|3) ;;
  *) echo "ERROR: NUM_DAYS must be 1, 2, or 3 (Clarity API limit). Got: $NUM_DAYS"; exit 1 ;;
esac

OUT_DIR="$(cd "$(dirname "$0")" && pwd)/raw"
TODAY=$(date +%F)
TAG="${TODAY}_clarity_${NUM_DAYS}d"
mkdir -p "$OUT_DIR"

echo "Fetching Clarity data: last ${NUM_DAYS} days (window ends today, ${TODAY})"
echo "Output: $OUT_DIR (tag=$TAG)"
echo ""

API_BASE="https://www.clarity.ms/export-data/api/v1/project-live-insights"

clarity() {
  local out="$1"; shift
  local query="numOfDays=${NUM_DAYS}"
  for dim in "$@"; do
    query="${query}&dimension1=${dim}"  # Note: API supports multi-dim via repeated params
  done

  # Build URL with up to 3 dimensions
  local url="${API_BASE}?numOfDays=${NUM_DAYS}"
  local i=1
  for dim in "$@"; do
    url="${url}&dimension${i}=${dim}"
    i=$((i+1))
  done

  echo "  → ${out}"
  local http_code
  http_code=$(curl -sS -o "$OUT_DIR/$out" -w "%{http_code}" \
    -H "Authorization: Bearer $CLARITY_API_TOKEN" \
    -H "Content-Type: application/json" \
    "$url")

  if [ "$http_code" != "200" ]; then
    echo "    WARNING: HTTP $http_code (response saved for inspection)"
  fi
}

# 6 cuts of data — same metrics, different dimension breakdowns
clarity "${TAG}_total.json"
clarity "${TAG}_by_url.json"        URL
clarity "${TAG}_by_device.json"     Device
clarity "${TAG}_by_country.json"    Country
clarity "${TAG}_url_x_device.json"  URL Device
clarity "${TAG}_url_x_country.json" URL Country

echo ""
echo "Done. Files written:"
ls -1 "$OUT_DIR" | grep "^${TAG}" | sed 's/^/  /'
echo ""
echo "Tip: Each file contains scrolldepth, dead-clicks, rage-clicks, quick-backs,"
echo "and excessive-scroll metrics broken down by the requested dimensions."
