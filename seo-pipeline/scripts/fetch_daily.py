#!/usr/bin/env python3
"""Daily SEO data fetch — GSC + GA4.

Outputs a single JSON file per day:
  seo-pipeline/data/daily/YYYY-MM-DD.json

Auth:
  - Local: uses ~/.config/gcloud/application_default_credentials.json
  - Anthropic Routine / GitHub Actions: reads JSON from
    GOOGLE_APPLICATION_CREDENTIALS_JSON env var.

Usage:
  python3 fetch_daily.py            # writes today's data
  python3 fetch_daily.py --dry-run  # prints summary, no file
"""
import argparse
import json
import os
import sys
import tempfile
from datetime import date, timedelta
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]
PIPELINE_DIR = PROJECT_ROOT / "seo-pipeline"
DATA_DIR = PIPELINE_DIR / "data" / "daily"

GSC_SITE = "https://tanuki-tabi-travel.com/"
GA4_PROPERTY = "properties/465121981"
QUOTA_PROJECT = "gen-lang-client-0292783405"


def setup_credentials():
    """Materialize ADC JSON from env var (for cloud execution)."""
    adc_json = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS_JSON")
    if adc_json:
        f = tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False)
        f.write(adc_json)
        f.close()
        os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = f.name


def get_creds(scopes):
    from google.auth import default
    creds, _ = default(scopes=scopes)
    return creds.with_quota_project(QUOTA_PROJECT)


def fetch_gsc(date_from, date_to):
    """Fetch GSC data: queries, pages, countries, devices, and new-this-week queries."""
    from googleapiclient.discovery import build
    creds = get_creds(["https://www.googleapis.com/auth/webmasters.readonly"])
    sc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    def q(dimensions, row_limit=5000, df=date_from, dt=date_to, search_type="web"):
        body = {
            "startDate": df, "endDate": dt,
            "dimensions": dimensions, "rowLimit": row_limit,
            "type": search_type,
        }
        rows = sc.searchanalytics().query(siteUrl=GSC_SITE, body=body).execute().get("rows", [])
        return [{
            **{d: r["keys"][i] for i, d in enumerate(dimensions)},
            "clicks": r.get("clicks", 0),
            "impressions": r.get("impressions", 0),
            "ctr": round(r.get("ctr", 0) * 100, 4),
            "position": round(r.get("position", 0), 2),
        } for r in rows]

    # 28-day window
    pages = q(["page"], 25000)
    queries = q(["query"], 5000)
    countries = q(["country"], 50)
    devices = q(["device"], 10)

    # New-this-week detection: queries in last 7 days but not in 8-28 days
    last7_from = (date.fromisoformat(date_to) - timedelta(days=6)).isoformat()
    prior_to = (date.fromisoformat(last7_from) - timedelta(days=1)).isoformat()
    prior_from = (date.fromisoformat(prior_to) - timedelta(days=20)).isoformat()
    queries_last7 = {r["query"] for r in q(["query"], 5000, df=last7_from, dt=date_to)}
    queries_prior = {r["query"] for r in q(["query"], 5000, df=prior_from, dt=prior_to)}
    new_queries_set = queries_last7 - queries_prior
    # Get metrics for these new queries
    last7_data = q(["query"], 5000, df=last7_from, dt=date_to)
    new_queries = sorted(
        (r for r in last7_data if r["query"] in new_queries_set),
        key=lambda r: -r["impressions"],
    )[:50]

    # Zero-click high-impression queries (informational/AI-Overview risk)
    zero_click = sorted(
        (r for r in queries if r["clicks"] == 0 and r["impressions"] >= 200 and r["position"] <= 15),
        key=lambda r: -r["impressions"],
    )[:30]

    # Near-page-one push-up candidates (rank 11-20, impr > 300)
    near_page_one = sorted(
        (r for r in queries if 10 < r["position"] <= 20 and r["impressions"] >= 300),
        key=lambda r: -r["impressions"],
    )[:30]

    return {
        "window": {"from": date_from, "to": date_to},
        "totals": {
            "clicks": sum(r["clicks"] for r in pages),
            "impressions": sum(r["impressions"] for r in pages),
            "page_count": len(pages),
            "query_count": len(queries),
        },
        "top_queries_by_impression": queries[:50],
        "top_pages_by_impression": sorted(pages, key=lambda r: -r["impressions"])[:30],
        "countries": countries[:15],
        "devices": devices,
        "new_queries_last7": new_queries,
        "zero_click_opportunities": zero_click,
        "near_page_one_pushup": near_page_one,
    }


def fetch_ga4(date_from, date_to):
    """Fetch GA4 data: sessions, sources, CV events, landing pages."""
    from googleapiclient.discovery import build
    creds = get_creds(["https://www.googleapis.com/auth/analytics.readonly"])
    ga = build("analyticsdata", "v1beta", credentials=creds, cache_discovery=False)

    def report(body):
        return ga.properties().runReport(property=GA4_PROPERTY, body=body).execute()

    def rows(resp, dims, mets):
        out = []
        for r in resp.get("rows", []):
            entry = {}
            for i, d in enumerate(dims):
                entry[d] = r["dimensionValues"][i]["value"]
            for i, m in enumerate(mets):
                try:
                    entry[m] = float(r["metricValues"][i]["value"])
                except (ValueError, KeyError):
                    entry[m] = r["metricValues"][i].get("value")
            out.append(entry)
        return out

    date_range = [{"startDate": date_from, "endDate": date_to}]

    totals = rows(report({
        "dateRanges": date_range,
        "metrics": [{"name": m} for m in ["sessions", "totalUsers", "screenPageViews", "engagementRate", "averageSessionDuration"]],
    }), [], ["sessions", "totalUsers", "screenPageViews", "engagementRate", "averageSessionDuration"])

    sources = rows(report({
        "dateRanges": date_range,
        "dimensions": [{"name": "sessionSource"}, {"name": "sessionMedium"}],
        "metrics": [{"name": "sessions"}, {"name": "engagementRate"}],
        "orderBys": [{"metric": {"metricName": "sessions"}, "desc": True}],
        "limit": 30,
    }), ["sessionSource", "sessionMedium"], ["sessions", "engagementRate"])

    events = rows(report({
        "dateRanges": date_range,
        "dimensions": [{"name": "eventName"}],
        "metrics": [{"name": "eventCount"}, {"name": "totalUsers"}],
        "orderBys": [{"metric": {"metricName": "eventCount"}, "desc": True}],
        "limit": 25,
    }), ["eventName"], ["eventCount", "totalUsers"])

    landing = rows(report({
        "dateRanges": date_range,
        "dimensions": [{"name": "landingPagePlusQueryString"}],
        "metrics": [{"name": "sessions"}, {"name": "engagementRate"}, {"name": "averageSessionDuration"}],
        "dimensionFilter": {"filter": {"fieldName": "sessionDefaultChannelGroup", "stringFilter": {"value": "Organic Search"}}},
        "orderBys": [{"metric": {"metricName": "sessions"}, "desc": True}],
        "limit": 30,
    }), ["landingPagePlusQueryString"], ["sessions", "engagementRate", "averageSessionDuration"])

    countries = rows(report({
        "dateRanges": date_range,
        "dimensions": [{"name": "country"}],
        "metrics": [{"name": "sessions"}, {"name": "engagementRate"}],
        "orderBys": [{"metric": {"metricName": "sessions"}, "desc": True}],
        "limit": 15,
    }), ["country"], ["sessions", "engagementRate"])

    return {
        "window": {"from": date_from, "to": date_to},
        "totals": totals[0] if totals else {},
        "sources": sources,
        "events": events,
        "organic_landing_pages": landing,
        "countries": countries,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--date-to", default=date.today().isoformat(),
                    help="End date (YYYY-MM-DD), default today")
    ap.add_argument("--days", type=int, default=28, help="Window size in days")
    args = ap.parse_args()

    setup_credentials()
    date_to = args.date_to
    date_from = (date.fromisoformat(date_to) - timedelta(days=args.days)).isoformat()

    print(f"Fetching: GSC + GA4, {date_from} to {date_to}")

    try:
        gsc_data = fetch_gsc(date_from, date_to)
        print(f"  GSC: {gsc_data['totals']['clicks']} clicks, "
              f"{gsc_data['totals']['impressions']} impr, "
              f"new queries: {len(gsc_data['new_queries_last7'])}")
    except Exception as e:
        print(f"  GSC ERROR: {e}", file=sys.stderr)
        gsc_data = {"error": str(e)}

    try:
        ga4_data = fetch_ga4(date_from, date_to)
        sess = ga4_data["totals"].get("sessions", 0)
        print(f"  GA4: {sess} sessions, {len(ga4_data['organic_landing_pages'])} organic landing pages")
    except Exception as e:
        print(f"  GA4 ERROR: {e}", file=sys.stderr)
        ga4_data = {"error": str(e)}

    output = {
        "generated_at": date_to,
        "window_days": args.days,
        "gsc": gsc_data,
        "ga4": ga4_data,
    }

    if args.dry_run:
        print("\nDRY RUN — no file written")
        print(json.dumps({
            "gsc_totals": gsc_data.get("totals"),
            "ga4_sessions": ga4_data.get("totals", {}).get("sessions"),
            "new_queries_count": len(gsc_data.get("new_queries_last7", [])),
        }, indent=2))
        return

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    out_path = DATA_DIR / f"{date_to}.json"
    out_path.write_text(json.dumps(output, indent=2, ensure_ascii=False))
    print(f"\nWrote: {out_path}")


if __name__ == "__main__":
    main()
