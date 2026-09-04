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

/**
 * Netlify rewrites drop extra query params next to :splat (so ?slug=:splat&lang=es
 * never sets lang). Encode ES as slug=es__:splat instead. Also accept the original
 * /go/ or /es/go/ path if the platform forwards it.
 */
function pathnameFromEvent(event) {
  const path = String((event && event.path) || "").split("?")[0];
  if (parseGoPath(path)) return path;

  const params = (event && event.queryStringParameters) || {};
  let slug = String(params.slug || "");
  let lang = params.lang === "es" ? "es" : "en";
  if (slug.startsWith("es__")) {
    lang = "es";
    slug = slug.slice(4);
  } else if (slug.startsWith("en__")) {
    lang = "en";
    slug = slug.slice(4);
  }
  return lang === "es" ? `/es/go/${slug}` : `/go/${slug}`;
}

module.exports = {
  affiliates,
  isPlaceholderUrl,
  getAffiliate,
  fallbackPath,
  parseGoPath,
  resolveGoRedirect,
  pathnameFromEvent,
  HUB,
};
