import type { AffiliateLang } from "@/data/affiliates";

interface AffiliateDisclosureProps {
  lang?: AffiliateLang;
  placement?: "top" | "footer";
}

const COPY = {
  en: {
    title: "Partner links",
    body: "Some links on this page go to partners. If you buy through them, we may earn a commission, at no extra cost to you. We introduce options. We don't book transport, hotels, or tickets for you.",
  },
  es: {
    title: "Enlaces de socios",
    body: "Algunos enlaces de esta página llevan a socios. Si compran a través de ellos, es posible que recibamos una comisión, sin costo extra para ustedes. Presentamos opciones. No reservamos transporte, hoteles ni boletos en su nombre.",
  },
} as const;

export function AffiliateDisclosure({ lang = "en", placement = "top" }: AffiliateDisclosureProps) {
  const copy = COPY[lang];
  return (
    <aside
      data-affiliate-disclosure={placement}
      className="my-8 rounded-lg border border-border bg-secondary/40 px-5 py-4 text-sm text-muted-foreground leading-relaxed"
    >
      <p className="font-medium text-foreground">{copy.title}</p>
      <p className="mt-1">{copy.body}</p>
    </aside>
  );
}
