/**
 * Public, client-safe env values. Never put secrets here.
 * Vite only inlines vars with a configured prefix (see vite.config.ts).
 */

function readPublic(name: "PUBLIC_WHATSAPP_NUMBER" | "VITE_PUBLIC_WHATSAPP_NUMBER"): string {
  const value = import.meta.env[name];
  return typeof value === "string" ? value.trim() : "";
}

/** Digits-only WhatsApp number, or undefined when unset / placeholder. */
export function parseWhatsappNumber(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim();
  if (!trimmed || trimmed.startsWith("TODO_")) return undefined;
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length < 8) return undefined;
  return digits;
}

export function getPublicWhatsappNumber(): string | undefined {
  const raw = readPublic("PUBLIC_WHATSAPP_NUMBER") || readPublic("VITE_PUBLIC_WHATSAPP_NUMBER");
  return parseWhatsappNumber(raw);
}
