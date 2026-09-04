#!/usr/bin/env node
/**
 * Content-contract checks for the Logistics Hub (EN + ES) and /go plumbing.
 * Run: npm run test:logistics
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => fs.readFileSync(path.join(root, rel), "utf-8");

const en = read("src/pages/Logistics.tsx");
const es = read("src/pages/es/EsLogistics.tsx");
const pages = en + "\n" + es;
const affiliates = read("src/lib/affiliates.ts");
const ga4 = read("src/lib/ga4.ts");
const goPage = read("src/pages/AffiliateGo.tsx");
const routes = read("src/AppRoutes.tsx");

const failures = [];
const record = (ok, msg) => {
  if (ok) console.log(`  OK  ${msg}`);
  else {
    console.error(`  FAIL ${msg}`);
    failures.push(msg);
  }
};

console.log("=== Logistics hub content contract ===");

const expectedSlugs = [
  "TODO_jw-esim",
  "TODO_jw-wifi",
  "TODO_shinkansen",
  "TODO_highway-bus",
  "TODO_airport-taxi",
];

for (const slug of expectedSlugs) {
  record(en.includes(`/go/${slug}`) || en.includes(`slug="${slug}"`), `EN references ${slug}`);
  record(es.includes(`slug="${slug}"`), `ES references ${slug}`);
  record(affiliates.includes(`slug: "${slug}"`), `registry has ${slug}`);
}

record(affiliates.includes('partner: AFFILIATE_PARTNER') || affiliates.includes('"inbound-platform"'), "partner inbound-platform");
record(affiliates.includes("placeholder:unconfigured"), "TODO destinations are placeholders");
record(!/destination:\s*"https?:\/\//.test(affiliates), "no live partner URLs in registry");

record(en.includes('to="/contact"') || en.includes('INQUIRY_PATH = "/contact"'), "EN inquiry CTA → /contact");
record(es.includes('to="/es/contact"') || es.includes('INQUIRY_PATH = "/es/contact"'), "ES inquiry CTA → /es/contact");

record(routes.includes('path="/logistics"'), "EN route /logistics");
record(routes.includes('path="/es/logistics"'), "ES route /es/logistics");
record(routes.includes('path="/go/:slug"'), "/go/:slug route");

const orderKeysEn = [
  "Plan the logistics — then enjoy the trip",
  "Start with a private tour",
  "Inquire about a private tour",
  "Affiliate disclosure",
  "Which of these do you actually need?",
  "1) Stay online: eSIM or Pocket WiFi?",
  "2) City to city: Shinkansen",
  "3) Budget longer hops: highway buses",
  "4) Airport run: fixed-fare car",
  'id="section-faq"',
  "Closing note",
];
let last = -1;
for (const key of orderKeysEn) {
  const idx = en.indexOf(key);
  record(idx > last, `EN order: ${key.replace(/[<>]/g, "")}`);
  last = idx;
}

const firstAffiliateCta = en.indexOf("Check Japan Wireless eSIM");
const ownCta = en.indexOf("Inquire about a private tour");
const disclosure = en.indexOf("Some links below are affiliate links");
record(ownCta > -1 && firstAffiliateCta > ownCta, "EN own-tour CTA before first affiliate CTA");
record(disclosure > ownCta && disclosure < firstAffiliateCta, "EN disclosure between own CTA and affiliate CTAs");
record(!en.includes("<details") && !es.includes("<details"), "disclosure is not a collapsed details element");

const esOwn = es.indexOf("Consultar un tour privado");
const esAff = es.indexOf("Ver Japan Wireless eSIM");
const esDisc = es.indexOf("Algunos enlaces de abajo son de afiliados");
record(esOwn > -1 && esAff > esOwn, "ES own-tour CTA before first affiliate CTA");
record(esDisc > esOwn && esDisc < esAff, "ES disclosure between own CTA and affiliate CTAs");

record((en.match(/<h1\b/g) || []).length === 1, "EN has exactly one H1");
record((es.match(/<h1\b/g) || []).length === 1, "ES has exactly one H1");
record(en.includes("[VERIFY]"), "EN keeps [VERIFY] markers");
record(es.includes("[VERIFY]"), "ES keeps [VERIFY] markers");
record(en.includes("¥5,000") && en.includes("¥14,700") && !en.includes("$"), "EN prices in yen, no USD");
record(es.includes("¥5,000") && es.includes("¥14,700") && !es.includes("USD"), "ES prices in yen");

const forbidden = [
  "your guide",
  "su guía",
  "Manabu",
  "we arrange",
  "gestionamos",
  "reservamos por ustedes",
  "vosotros",
  "vuestro",
];
for (const needle of forbidden) {
  const re = new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  record(!re.test(pages), `forbidden string absent: ${needle}`);
}

const bannedHosts = ["airalo", "holafly", "klook", "viator", "getyourguide"];
for (const host of bannedHosts) {
  record(!new RegExp(host, "i").test(pages), `no ${host} mention on hub pages`);
}

record(ga4.includes('event", "affiliate_click"') || ga4.includes('event", \'affiliate_click\''), "GA4 affiliate_click emitter exists");
record(ga4.includes("shouldTrackAffiliateClick"), "GA4 defers to TODO_ production guard");
record(affiliates.includes("import.meta.env.PROD"), "TODO_ clicks gated on production builds");
record(goPage.includes("isTodoSlug") && goPage.includes("placeholder"), "Go page keeps TODO_ on a placeholder");
record(!/window\.location\.(assign|replace)\(.*https/.test(goPage), "Go page does not hard-code a partner URL redirect");
record(
  en.includes("HubTable") && es.includes("HubTable") && read("src/components/logistics/HubTable.tsx").includes("hub-table-scroll"),
  "tables wrapped for mobile scroll",
);

if (failures.length) {
  console.error(`\n${failures.length} check(s) failed.`);
  process.exit(1);
}
console.log("\n✓ Logistics hub checks passed");
