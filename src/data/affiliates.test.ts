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
    expect(AFFILIATES.length).toBeGreaterThanOrEqual(5);
    for (const row of AFFILIATES) {
      expect(AFFILIATE_CATEGORIES).toContain(row.category);
      expect(row.category).not.toBe("tours");
      expect(row.slug).toMatch(/^[a-z0-9-]+$/);
      expect(row.label_en.length).toBeGreaterThan(0);
      expect(row.label_es.length).toBeGreaterThan(0);
      expect(row.disclosure).toBe(true);
      expect(row.url.startsWith("TODO_") || row.url.startsWith("https://")).toBe(true);
    }
  });

  it("includes the Inbound Platform / Japan Wireless placeholders", () => {
    expect(getAffiliate("japan-wireless-esim")?.category).toBe("esim");
    expect(getAffiliate("japan-wireless-wifi")?.category).toBe("esim");
    expect(getAffiliate("japan-bullet-train")?.category).toBe("railpass");
    expect(getAffiliate("japan-bus-tickets")?.category).toBe("tickets");
    expect(getAffiliate("airport-taxi-tokyo")?.category).toBe("airport");
  });

  it("starts every click URL as a TODO_ placeholder", () => {
    expect(placeholderSlugs().sort()).toEqual([...AFFILIATES.map((row) => row.slug)].sort());
    for (const row of AFFILIATES) {
      expect(isPlaceholderUrl(row.url)).toBe(true);
    }
  });
});

describe("/go/ fallback", () => {
  it("sends TODO_ and unknown slugs to the trip-prep hub", () => {
    expect(resolveGoRedirect("/go/japan-wireless-esim")).toBe("/prepare-your-trip");
    expect(resolveGoRedirect("/es/go/japan-wireless-esim")).toBe("/es/prepara-tu-viaje");
    expect(resolveGoRedirect("/go/not-a-real-slug")).toBe("/prepare-your-trip");
    expect(resolveGoRedirect("/es/go/not-a-real-slug")).toBe("/es/prepara-tu-viaje");
    expect(parseGoPath("/go/japan-wireless-esim")).toEqual({
      lang: "en",
      slug: "japan-wireless-esim",
    });
    expect(goPath("japan-wireless-esim", "es")).toBe("/es/go/japan-wireless-esim");
  });

  it("matches the Netlify CJS resolver", () => {
    expect(runCjs('c.resolveGoRedirect("/go/japan-wireless-esim")')).toBe("/prepare-your-trip");
    expect(runCjs('c.resolveGoRedirect("/es/go/airport-taxi-tokyo")')).toBe("/es/prepara-tu-viaje");
    expect(runCjs('c.resolveGoRedirect("/go/missing")')).toBe("/prepare-your-trip");
  });

  it("Netlify function returns 302 to the hub while URLs are TODO_", () => {
    const raw = execFileSync(
      "node",
      [
        "-e",
        `const {handler}=require("./netlify/functions/affiliate-go.cjs");
         handler({queryStringParameters:{slug:"japan-wireless-esim"}}).then((r)=>{
           process.stdout.write(JSON.stringify(r));
         });`,
      ],
      { encoding: "utf8", cwd: process.cwd() },
    );
    const res = JSON.parse(raw) as { statusCode: number; headers: { Location: string } };
    expect(res.statusCode).toBe(302);
    expect(res.headers.Location).toBe("/prepare-your-trip");
  });
});
