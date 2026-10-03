import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";
import {
  AFFILIATE_CATEGORIES,
  AFFILIATES,
  getAffiliate,
  goPath,
  isPlaceholderUrl,
  parseGoPath,
  placeholderSlugs,
  resolveGoRedirect,
} from "./affiliates";

const LIVE_WIFI_URL = "https://www.japan-wireless.com/?via=manabu";

function runCjs(expr: string): string {
  return execFileSync(
    "node",
    [
      "-e",
      `const c=require("./netlify/functions/affiliateRedirect.cjs"); process.stdout.write(String(${expr}))`,
    ],
    { encoding: "utf8", cwd: process.cwd() },
  );
}

describe("affiliates catalog", () => {
  it("has unique slugs, allowed categories, and no tours category", () => {
    const slugs = AFFILIATES.map((row) => row.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(AFFILIATES.length).toBeGreaterThanOrEqual(1);
    for (const row of AFFILIATES) {
      expect(AFFILIATE_CATEGORIES).toContain(row.category);
      expect(row.category).not.toBe("tours");
      expect(row.slug).toMatch(/^[a-z0-9-]+$/);
      expect(row.label_en.length).toBeGreaterThan(0);
      expect(row.label_es.length).toBeGreaterThan(0);
      expect(row.disclosure).toBe(true);
    }
  });

  // The Phase 1 guard. A partner is listed only once its Rewardful programme is
  // registered and a real ?via= URL exists — a shipped TODO_ would 302 readers
  // into the hub from a link that promised a product page.
  it("ships no placeholder URLs", () => {
    expect(placeholderSlugs()).toEqual([]);
    for (const row of AFFILIATES) {
      expect(isPlaceholderUrl(row.url)).toBe(false);
      expect(row.url.startsWith("https://")).toBe(true);
      expect(row.url).not.toContain("TODO");
    }
  });

  it("carries the one live partner: Japan Wireless pocket WiFi", () => {
    expect(AFFILIATES.map((r) => r.slug)).toEqual(["japan-wireless-wifi"]);
    expect(getAffiliate("japan-wireless-wifi")?.url).toBe(LIVE_WIFI_URL);
    expect(getAffiliate("japan-wireless-wifi")?.category).toBe("esim");
  });

  it("does not list partners whose programme is not registered yet", () => {
    for (const slug of [
      "japan-wireless-esim",
      "japan-bullet-train",
      "japan-bus-tickets",
      "airport-taxi-tokyo",
      "travel-insurance",
      "luggage-storage",
    ]) {
      expect(getAffiliate(slug)).toBeUndefined();
    }
  });
});

describe("/go/ fallback", () => {
  it("sends unknown slugs to the trip-prep hub in the right language", () => {
    expect(resolveGoRedirect("/go/japan-bullet-train")).toBe("/prepare-your-trip");
    expect(resolveGoRedirect("/es/go/japan-bullet-train")).toBe("/es/prepara-tu-viaje");
    expect(resolveGoRedirect("/go/not-a-real-slug")).toBe("/prepare-your-trip");
    expect(resolveGoRedirect("/es/go/not-a-real-slug")).toBe("/es/prepara-tu-viaje");
    expect(parseGoPath("/go/not-a-real-slug")).toEqual({
      lang: "en",
      slug: "not-a-real-slug",
    });
    expect(goPath("japan-wireless-wifi", "es")).toBe("/es/go/japan-wireless-wifi");
  });

  it("302s japan-wireless-wifi to the live Pocket WiFi tracking URL", () => {
    expect(resolveGoRedirect("/go/japan-wireless-wifi")).toBe(LIVE_WIFI_URL);
    expect(resolveGoRedirect("/es/go/japan-wireless-wifi")).toBe(LIVE_WIFI_URL);
    expect(runCjs('c.resolveGoRedirect("/go/japan-wireless-wifi")')).toBe(LIVE_WIFI_URL);
    expect(runCjs('c.resolveGoRedirect("/es/go/japan-wireless-wifi")')).toBe(LIVE_WIFI_URL);
  });

  it("matches the Netlify CJS resolver", () => {
    expect(runCjs('c.resolveGoRedirect("/go/japan-bullet-train")')).toBe("/prepare-your-trip");
    expect(runCjs('c.resolveGoRedirect("/es/go/airport-taxi-tokyo")')).toBe("/es/prepara-tu-viaje");
    expect(runCjs('c.resolveGoRedirect("/go/missing")')).toBe("/prepare-your-trip");
  });

  it("decodes Netlify splat (ES encoded in slug because extra query params are dropped)", () => {
    expect(runCjs('c.pathnameFromEvent({queryStringParameters:{slug:"japan-wireless-wifi"}})'))
      .toBe("/go/japan-wireless-wifi");
    expect(runCjs('c.pathnameFromEvent({queryStringParameters:{slug:"es__japan-wireless-wifi"}})'))
      .toBe("/es/go/japan-wireless-wifi");
    expect(runCjs('c.pathnameFromEvent({path:"/es/go/airport-taxi-tokyo"})'))
      .toBe("/es/go/airport-taxi-tokyo");
  });

  it("Netlify function 302s the live partner out and unknown slugs to the hub", () => {
    const run = (expr: string) =>
      execFileSync(
        "node",
        [
          "-e",
          `const {handler}=require("./netlify/functions/affiliate-go.cjs");
           handler(${expr}).then((r)=>{ process.stdout.write(JSON.stringify(r)); });`,
        ],
        { encoding: "utf8", cwd: process.cwd() },
      );
    type Res = { statusCode: number; headers: { Location: string } };
    const wifi = JSON.parse(run('{queryStringParameters:{slug:"japan-wireless-wifi"}}')) as Res;
    expect(wifi.statusCode).toBe(302);
    expect(wifi.headers.Location).toBe(LIVE_WIFI_URL);
    const en = JSON.parse(run('{queryStringParameters:{slug:"japan-bullet-train"}}')) as Res;
    expect(en.statusCode).toBe(302);
    expect(en.headers.Location).toBe("/prepare-your-trip");
    const es = JSON.parse(run('{queryStringParameters:{slug:"es__japan-bullet-train"}}')) as Res;
    expect(es.statusCode).toBe(302);
    expect(es.headers.Location).toBe("/es/prepara-tu-viaje");
  });
});
