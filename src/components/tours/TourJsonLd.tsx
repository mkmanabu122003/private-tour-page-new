import type { TourLang } from "./tourPolicyCopy";

interface TourJsonLdProps {
  name: string;
  description: string;
  path: string;
  lang?: TourLang;
  /** Integer yen string, e.g. "45000". Omit when the fee is a quote or tailored. */
  fromPriceYen?: string;
  area?: string;
}

export const TourJsonLd = ({
  name,
  description,
  path,
  lang = "en",
  fromPriceYen,
  area,
}: TourJsonLdProps) => {
  const url = `https://tanuki-tabi-travel.com${path}`;
  const fromLabel =
    fromPriceYen &&
    (lang === "es"
      ? `Desde ¥${Number(fromPriceYen).toLocaleString("en-US")} por grupo`
      : `From ¥${Number(fromPriceYen).toLocaleString("en-US")} per group`);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url,
    touristType: "Cultural Tourism",
    provider: {
      "@type": "LocalBusiness",
      name: "Tanuki Tabi Travel",
      url: "https://tanuki-tabi-travel.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressCountry: "JP",
      },
    },
  };

  if (area) {
    data.touristDestination = {
      "@type": "Place",
      name: area,
    };
  }

  if (fromPriceYen && fromLabel) {
    data.offers = {
      "@type": "Offer",
      price: fromPriceYen,
      priceCurrency: "JPY",
      name: fromLabel,
      availability: "https://schema.org/InStock",
      url,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
