import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { VALID_TOUR_VALUES } from "@/lib/inquiryForm";
import { TOUR_PRICES, formatAutoReplyPrice, siteDisplayPrice } from "./tourPrices";

function runCatalog(expr: string): string {
  return execFileSync(
    "node",
    [
      "-e",
      `const c=require("./netlify/functions/tourCatalog.cjs"); process.stdout.write(String(${expr}))`,
    ],
    { encoding: "utf8", cwd: process.cwd() },
  );
}

function extractTourInfoKeys(src: string): string[] {
  const block = src.match(/const tourInfo = \{([\s\S]*?)\n\};/);
  if (!block) throw new Error("tourInfo object not found in submission-created.js");
  return [...block[1].matchAll(/(?:^|\n)\s*(?:(\w+)|"([^"]+)"): \{ name:/g)].map(
    (m) => m[1] || m[2],
  );
}

const EN_LISTING_IDS = Object.keys(TOUR_PRICES);
const ES_LISTING_IDS = EN_LISTING_IDS.filter(
  (id) => id !== "tokyo-food-tour" && id !== "tokyo-night-tour",
);
const EN_DETAIL_IDS = [
  "asakusa",
  "yanaka",
  "shibuya-harajuku",
  "tsukiji-ginza",
  "imperial-palace",
  "custom",
  "kamakura-day-trip",
  "hakone-day-trip",
  "nikko-day-trip",
];
const ES_DETAIL_PAGES: Array<[file: string, id: string]> = [
  ["EsAsakusa.tsx", "asakusa"],
  ["EsYanaka.tsx", "yanaka"],
  ["EsShibuyaHarajuku.tsx", "shibuya-harajuku"],
  ["EsTsukijiGinza.tsx", "tsukiji-ginza"],
  ["EsImperialPalace.tsx", "imperial-palace"],
  ["EsCustom.tsx", "custom"],
  ["EsKamakura.tsx", "kamakura-day-trip"],
  ["EsHakone.tsx", "hakone-day-trip"],
  ["EsNikko.tsx", "nikko-day-trip"],
];

describe("auto-reply prices vs site catalog", () => {
  it("covers every inquiry tour slug except 'other'", () => {
    const pricedSlugs = VALID_TOUR_VALUES.filter((id) => id !== "other").sort();
    expect([...EN_LISTING_IDS].sort()).toEqual(pricedSlugs);
  });

  it("Netlify tourCatalog require matches shared site display prices", () => {
    for (const id of EN_LISTING_IDS) {
      expect(runCatalog(`c.getTourPriceDisplay(${JSON.stringify(id)}, "en")`)).toBe(
        siteDisplayPrice(id, "en"),
      );
      expect(runCatalog(`c.getTourPriceDisplay(${JSON.stringify(id)}, "es")`)).toBe(
        siteDisplayPrice(id, "es"),
      );
    }
  });

  it("fails if submission-created hardcodes yen tour prices instead of tourCatalog", () => {
    const src = readFileSync("netlify/functions/submission-created.js", "utf8");
    const catalogSrc = readFileSync("netlify/functions/tourCatalog.cjs", "utf8");
    expect(src).toContain('require("./tourCatalog.cjs")');
    expect(src).toContain("formatAutoReplyPrice");
    expect(src).not.toMatch(/price:\s*"¥/);
    expect(src).not.toMatch(/price:\s*"Contact for quote"/);
    expect(src).not.toMatch(/price:\s*"Tailored to your trip"/);
    expect(catalogSrc).toContain("../../src/data/tourPrices.json");
    expect(catalogSrc).not.toMatch(/"¥[0-9]/);
    expect(extractTourInfoKeys(src).sort()).toEqual([...EN_LISTING_IDS].sort());
  });

  it("quoted tours do not append for-your-group; priced tours do", () => {
    expect(formatAutoReplyPrice("hakone-day-trip", "en")).toBe("¥80,000 for your group");
    expect(formatAutoReplyPrice("hakone-day-trip", "es")).toBe("¥80,000 para tu grupo");
    expect(runCatalog(`c.formatAutoReplyPrice("hakone-day-trip", "en")`)).toBe(
      formatAutoReplyPrice("hakone-day-trip", "en"),
    );
    expect(runCatalog(`c.formatAutoReplyPrice("tokyo-food-tour", "en")`)).toBe(
      "Contact for quote",
    );
    expect(runCatalog(`c.formatAutoReplyPrice("tokyo-night-tour", "en")`)).toBe(
      "Contact for quote",
    );
    expect(runCatalog(`c.formatAutoReplyPrice("custom", "en")`)).toBe(
      "Tailored to your trip",
    );
    expect(runCatalog(`c.formatAutoReplyPrice("custom", "es")`)).toBe(
      "A medida de tu viaje",
    );

    for (const id of EN_LISTING_IDS) {
      expect(runCatalog(`c.formatAutoReplyPrice(${JSON.stringify(id)}, "en")`)).toBe(
        formatAutoReplyPrice(id, "en"),
      );
      expect(runCatalog(`c.formatAutoReplyPrice(${JSON.stringify(id)}, "es")`)).toBe(
        formatAutoReplyPrice(id, "es"),
      );
    }
  });
});

describe("site pages use the shared catalog", () => {
  it("EN /tours listing calls siteDisplayPrice for every catalog id", () => {
    const src = readFileSync("src/pages/Tours.tsx", "utf8");
    for (const id of EN_LISTING_IDS) {
      expect(src).toContain(`siteDisplayPrice("${id}", "en")`);
    }
  });

  it("ES /es/tours listing calls siteDisplayPrice for tours that have ES pages", () => {
    const src = readFileSync("src/pages/es/EsTours.tsx", "utf8");
    for (const id of ES_LISTING_IDS) {
      expect(src).toContain(`siteDisplayPrice("${id}", "es")`);
    }
  });

  it("EN tour detail pages call siteDisplayPrice for priced EN templates", () => {
    const src = readFileSync("src/pages/TourDetail.tsx", "utf8");
    for (const id of EN_DETAIL_IDS) {
      expect(src).toContain(`siteDisplayPrice("${id}", "en")`);
    }
  });

  it("EN food and night sticky bars read the shared catalog", () => {
    const food = readFileSync("src/pages/tours/TokyoFoodTour.tsx", "utf8");
    const night = readFileSync("src/pages/tours/TokyoNightTour.tsx", "utf8");
    expect(food).toContain('siteDisplayPrice("tokyo-food-tour", "en")');
    expect(night).toContain('siteDisplayPrice("tokyo-night-tour", "en")');
  });

  it("ES tour detail pages call siteDisplayPrice for sidebar and sticky prices", () => {
    for (const [file, id] of ES_DETAIL_PAGES) {
      const src = readFileSync(`src/pages/es/tours/${file}`, "utf8");
      expect(src).toContain(`siteDisplayPrice("${id}", "es")`);
      expect(src).not.toMatch(/<StickyBookingBar[^>]*price="¥/);
    }
  });
});
