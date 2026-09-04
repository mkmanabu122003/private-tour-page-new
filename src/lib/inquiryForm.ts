export const VALID_TOUR_VALUES = [
  "asakusa",
  "yanaka",
  "shibuya-harajuku",
  "tsukiji-ginza",
  "imperial-palace",
  "tokyo-food-tour",
  "tokyo-night-tour",
  "kamakura-day-trip",
  "hakone-day-trip",
  "nikko-day-trip",
  "custom",
  "other",
] as const;

export type InquiryTourValue = (typeof VALID_TOUR_VALUES)[number];

export const REQUIRED_INQUIRY_FIELDS = ["name", "email", "date", "adults"] as const;
export const OPTIONAL_INQUIRY_FIELDS = [
  "country",
  "children",
  "city",
  "language",
  "tourType",
  "message",
] as const;

export function isValidTourValue(value: string): value is InquiryTourValue {
  return (VALID_TOUR_VALUES as readonly string[]).includes(value);
}

export function composeGroupSize(adults: string, children: string): string {
  const a = adults.trim() || "0";
  const c = children.trim() || "0";
  return `${a} adults, ${c} children`;
}
