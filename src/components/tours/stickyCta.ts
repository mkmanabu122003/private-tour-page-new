import type { TourLang } from "./tourPolicyCopy";

export function getTourContactHref(lang: TourLang = "en", tourSlug?: string): string {
  const contactPath = lang === "es" ? "/es/contact" : "/contact";
  const query = tourSlug ? `?tour=${encodeURIComponent(tourSlug)}` : "";
  return `${contactPath}${query}#inquiry-form`;
}

export function getStickyCtaLabel(lang: TourLang = "en"): string {
  return lang === "es" ? "Consultar disponibilidad" : "Check availability";
}
