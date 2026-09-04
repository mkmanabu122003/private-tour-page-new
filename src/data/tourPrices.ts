/**
 * Shared tour price catalog. Listing pages, sticky bars, and the Netlify
 * auto-reply (`netlify/functions/tourCatalog.cjs`) all read this JSON.
 * Do not hardcode yen amounts in email templates.
 */
import catalog from "./tourPrices.json";

export type TourPriceId = keyof typeof catalog;

export const TOUR_PRICES = catalog;

export function siteDisplayPrice(id: string, lang: "en" | "es"): string {
  const row = catalog[id as TourPriceId];
  if (!row) {
    throw new Error(`No site display price for tour "${id}"`);
  }
  return lang === "es" ? row.displayEs : row.displayEn;
}

export function isQuotedTourPrice(id: string): boolean {
  const row = catalog[id as TourPriceId];
  return !row || row.amount == null;
}

export function formatAutoReplyPrice(id: string, lang: "en" | "es"): string {
  const row = catalog[id as TourPriceId];
  if (!row) {
    throw new Error(`No auto-reply price for tour "${id}"`);
  }
  const display = lang === "es" ? row.displayEs : row.displayEn;
  if (row.amount == null) return display;
  return lang === "es" ? `${display} para tu grupo` : `${display} for your group`;
}
