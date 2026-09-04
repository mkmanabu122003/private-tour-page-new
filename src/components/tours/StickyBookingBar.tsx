import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { trackBookNowClick } from "@/lib/ga4";
import { getPublicWhatsappNumber } from "@/lib/publicEnv";
import type { TourLang } from "./tourPolicyCopy";

interface StickyBookingBarProps {
  tourName: string;
  price: string;
  lang?: TourLang;
  tourSlug?: string;
}

export const StickyBookingBar = ({
  tourName,
  price,
  lang = "en",
  tourSlug,
}: StickyBookingBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsapp = getPublicWhatsappNumber();
  const contactPath = lang === "es" ? "/es/contact" : "/contact";
  const query = tourSlug ? `?tour=${encodeURIComponent(tourSlug)}` : "";
  const contactHref = `${contactPath}${query}#inquiry-form`;
  const ctaLabel = lang === "es" ? "Consultar disponibilidad" : "Check availability";
  const whatsappLabel = "WhatsApp";
  const whatsappText =
    lang === "es"
      ? `Hola, les escribo para consultar disponibilidad de ${tourName}.`
      : `Hi, I'd like to check availability for ${tourName}.`;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D0D] border-t border-white/10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container-section py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-white font-medium text-sm sm:text-base truncate">{tourName}</p>
          <p className="text-white/70 text-xs sm:text-sm">{price}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappText)}`}
              data-cta="whatsapp-tour-sticky"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-white/25 text-white text-sm hover:bg-white/10 transition-colors"
            >
              {whatsappLabel}
            </a>
          )}
          <Link
            to={contactHref}
            data-cta="book-now-tour-sticky"
            className="btn-accent-sm sm:text-base"
            onClick={() => trackBookNowClick(ctaLabel, "tour-sticky")}
          >
            {ctaLabel}
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};
