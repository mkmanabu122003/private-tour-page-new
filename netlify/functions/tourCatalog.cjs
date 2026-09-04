/**
 * Auto-reply price table. Reads the same JSON the site listing pages use.
 * Do not hardcode yen amounts here. Keep the require() path static so Netlify
 * can bundle the JSON with this function.
 */
const tourPrices = require("../../src/data/tourPrices.json");

function getTourPriceRow(slug) {
  return tourPrices[slug] || null;
}

function getTourPriceDisplay(slug, lang) {
  const row = getTourPriceRow(slug);
  if (!row) return undefined;
  return lang === "es" ? row.displayEs : row.displayEn;
}

/** Line shown in the Resend auto-reply. Quote-only tours omit "for your group". */
function formatAutoReplyPrice(slug, lang) {
  const row = getTourPriceRow(slug);
  if (!row) return undefined;
  const display = lang === "es" ? row.displayEs : row.displayEn;
  if (row.amount == null) return display;
  return lang === "es" ? display + " para tu grupo" : display + " for your group";
}

module.exports = {
  tourPrices,
  getTourPriceDisplay,
  formatAutoReplyPrice,
};
