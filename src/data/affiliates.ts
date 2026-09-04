import catalog from "./affiliates.json";

export const AFFILIATE_CATEGORIES = [
  "esim",
  "insurance",
  "railpass",
  "airport",
  "luggage",
  "tickets",
] as const;

export type AffiliateCategory = (typeof AFFILIATE_CATEGORIES)[number];

export type AffiliateLang = "en" | "es";

export interface Affiliate {
  slug: string;
  category: AffiliateCategory;
  label_es: string;
  label_en: string;
  url: string;
  disclosure: boolean;
  product_info?: string;
}

export const AFFILIATES = catalog as Affiliate[];

export const HUB_PATH = {
  en: "/prepare-your-trip",
  es: "/es/prepara-tu-viaje",
} as const;

export function isPlaceholderUrl(url: string | undefined | null): boolean {
  return !url || url.startsWith("TODO_");
}

export function getAffiliate(slug: string): Affiliate | undefined {
  return AFFILIATES.find((row) => row.slug === slug);
}

export function goPath(slug: string, lang: AffiliateLang = "en"): string {
  return lang === "es" ? `/es/go/${slug}` : `/go/${slug}`;
}

export function fallbackPath(lang: AffiliateLang = "en"): string {
  return HUB_PATH[lang];
}

export function parseGoPath(pathname: string): { lang: AffiliateLang; slug: string | null } | null {
  const path = (pathname || "").split("?")[0].replace(/\/+$/, "") || "/";
  const es = path.startsWith("/es/go/") || path === "/es/go";
  const en = path.startsWith("/go/") || path === "/go";
  if (!es && !en) return null;
  const prefix = es ? "/es/go/" : "/go/";
  if (path === "/es/go" || path === "/go") return { lang: es ? "es" : "en", slug: null };
  const slug = decodeURIComponent(path.slice(prefix.length));
  if (!slug || slug.includes("/")) return { lang: es ? "es" : "en", slug: null };
  return { lang: es ? "es" : "en", slug };
}

export function resolveGoRedirect(pathname: string): string {
  const parsed = parseGoPath(pathname);
  if (!parsed) return fallbackPath("en");
  if (!parsed.slug) return fallbackPath(parsed.lang);
  const row = getAffiliate(parsed.slug);
  if (!row || isPlaceholderUrl(row.url)) return fallbackPath(parsed.lang);
  return row.url;
}

export function placeholderSlugs(): string[] {
  return AFFILIATES.filter((row) => isPlaceholderUrl(row.url)).map((row) => row.slug);
}
