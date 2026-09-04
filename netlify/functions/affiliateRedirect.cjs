/**
 * Shared /go/:slug resolver for the Netlify Function and Vite dev/preview.
 * Reads the same JSON the React app imports. Click targets that still start
 * with TODO_ fall back to the trip-prep hub — never to a live partner URL.
 */
const affiliates = require("../../src/data/affiliates.json");

const HUB = {
  en: "/prepare-your-trip",
  es: "/es/prepara-tu-viaje",
};

function isPlaceholderUrl(url) {
  return !url || String(url).startsWith("TODO_");
}

function getAffiliate(slug) {
  return affiliates.find((row) => row.slug === slug) || null;
}

function fallbackPath(lang) {
  return lang === "es" ? HUB.es : HUB.en;
}

function parseGoPath(pathname) {
  const path = String(pathname || "").split("?")[0].replace(/\/+$/, "") || "/";
  const es = path.startsWith("/es/go/") || path === "/es/go";
  const en = path.startsWith("/go/") || path === "/go";
  if (!es && !en) return null;
  const prefix = es ? "/es/go/" : "/go/";
  if (path === "/es/go" || path === "/go") return { lang: es ? "es" : "en", slug: null };
  let slug;
  try {
    slug = decodeURIComponent(path.slice(prefix.length));
  } catch {
    slug = path.slice(prefix.length);
  }
  if (!slug || slug.includes("/")) return { lang: es ? "es" : "en", slug: null };
  return { lang: es ? "es" : "en", slug };
}

function resolveGoRedirect(pathname) {
  const parsed = parseGoPath(pathname);
  if (!parsed) return fallbackPath("en");
  if (!parsed.slug) return fallbackPath(parsed.lang);
  const row = getAffiliate(parsed.slug);
  if (!row || isPlaceholderUrl(row.url)) return fallbackPath(parsed.lang);
  return row.url;
}

module.exports = {
  affiliates,
  isPlaceholderUrl,
  getAffiliate,
  fallbackPath,
  parseGoPath,
  resolveGoRedirect,
  HUB,
};
