import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { trackBookNowClick, trackBlogToTourClick } from "@/lib/ga4";

interface TourInfo {
  id: string;
  title: string;
  duration: string;
  price: string;
  link: string;
  subtitle?: string;
}

const tourCatalog: Record<string, TourInfo> = {
  asakusa: {
    id: "asakusa",
    title: "Asakusa Walking Tour",
    duration: "3 hours",
    price: "From ¥45,000",
    link: "/tours/asakusa",
  },
  yanaka: {
    id: "yanaka",
    title: "Ueno & Yanaka Discovery",
    duration: "4 hours",
    price: "From ¥50,000",
    link: "/tours/yanaka",
  },
  "shibuya-harajuku": {
    id: "shibuya-harajuku",
    title: "Shibuya & Harajuku Tour",
    duration: "3.5 hours",
    price: "From ¥50,000",
    link: "/tours/shibuya-harajuku",
  },
  "tsukiji-ginza": {
    id: "tsukiji-ginza",
    title: "Tsukiji & Ginza Tour",
    duration: "3 hours",
    price: "From ¥45,000",
    link: "/tours/tsukiji-ginza",
  },
  "imperial-palace": {
    id: "imperial-palace",
    title: "Imperial Palace Tour",
    duration: "2.5 hours",
    price: "From ¥40,000",
    link: "/tours/imperial-palace",
  },
  custom: {
    id: "custom",
    title: "Custom Private Tour",
    duration: "Flexible",
    price: "From ¥10,000~/hr",
    link: "/tours/custom",
  },
  "tokyo-food-tour": {
    id: "tokyo-food-tour",
    title: "Tokyo Food Tour",
    duration: "3-7 hours",
    price: "Contact for quote",
    link: "/tours/tokyo-food-tour",
  },
  "tokyo-night-tour": {
    id: "tokyo-night-tour",
    title: "Tokyo Night Tour",
    duration: "3-4 hours",
    price: "Contact for quote",
    link: "/tours/tokyo-night-tour",
  },
  "kamakura-day-trip": {
    id: "kamakura-day-trip",
    title: "Kamakura Day Trip",
    duration: "7-8 hours",
    price: "From ¥70,000",
    link: "/tours/kamakura-day-trip",
  },
  "hakone-day-trip": {
    id: "hakone-day-trip",
    title: "Hakone Day Trip",
    duration: "8-10 hours",
    price: "From ¥70,000",
    link: "/tours/hakone-day-trip",
  },
  "nikko-day-trip": {
    id: "nikko-day-trip",
    title: "Nikko Day Trip",
    duration: "9-10 hours",
    price: "From ¥80,000",
    link: "/tours/nikko-day-trip",
  },
};

const esTourCatalog: Record<string, TourInfo> = {
  asakusa: {
    id: "asakusa",
    title: "Tour por Asakusa",
    duration: "3 horas",
    price: "Desde ¥45,000",
    link: "/es/tours/asakusa",
  },
  yanaka: {
    id: "yanaka",
    title: "Ueno y Yanaka",
    duration: "4 horas",
    price: "Desde ¥50,000",
    link: "/es/tours/yanaka",
  },
  "shibuya-harajuku": {
    id: "shibuya-harajuku",
    title: "Shibuya y Harajuku",
    duration: "3.5 horas",
    price: "Desde ¥50,000",
    link: "/es/tours/shibuya-harajuku",
  },
  "tsukiji-ginza": {
    id: "tsukiji-ginza",
    title: "Tsukiji y Ginza",
    duration: "3 horas",
    price: "Desde ¥45,000",
    link: "/es/tours/tsukiji-ginza",
  },
  "imperial-palace": {
    id: "imperial-palace",
    title: "Palacio Imperial",
    duration: "2.5 horas",
    price: "Desde ¥40,000",
    link: "/es/tours/imperial-palace",
  },
  custom: {
    id: "custom",
    title: "Tour Personalizado",
    duration: "Flexible",
    price: "Desde ¥10,000~/hr",
    link: "/es/tours/custom",
  },
  "tokyo-food-tour": {
    id: "tokyo-food-tour",
    title: "Tour Gastronómico",
    duration: "3-7 horas",
    price: "Consultar precio",
    link: "/es/tours/custom",
  },
  "tokyo-night-tour": {
    id: "tokyo-night-tour",
    title: "Tour Nocturno",
    duration: "3-4 horas",
    price: "Consultar precio",
    link: "/es/tours/custom",
  },
  "kamakura-day-trip": {
    id: "kamakura-day-trip",
    title: "Excursión a Kamakura",
    duration: "7-8 horas",
    price: "Desde ¥70,000",
    link: "/es/tours/kamakura-day-trip",
  },
  "hakone-day-trip": {
    id: "hakone-day-trip",
    title: "Excursión a Hakone",
    duration: "8-10 horas",
    price: "Desde ¥70,000",
    link: "/es/tours/hakone-day-trip",
  },
  "nikko-day-trip": {
    id: "nikko-day-trip",
    title: "Excursión a Nikko",
    duration: "9-10 horas",
    price: "Desde ¥80,000",
    link: "/es/tours/nikko-day-trip",
  },
};

interface RelatedTourCardsProps {
  tourIds: string[];
  showViewAll?: boolean;
  customSubtitles?: Record<string, string>;
  lang?: "en" | "es";
}

export const RelatedTourCards = ({
  tourIds,
  showViewAll = false,
  customSubtitles,
  lang = "en",
}: RelatedTourCardsProps) => {
  const catalog = lang === "es" ? esTourCatalog : tourCatalog;
  const contactPath = lang === "es" ? "/es/contact" : "/contact";
  const toursPath = lang === "es" ? "/es/tours" : "/tours";

  const tours = tourIds
    .map((id) => catalog[id])
    .filter(Boolean);

  if (tours.length === 0) return null;

  const labels = lang === "es"
    ? { tag: "Tours Privados", heading: "Explora Tokio con un Guía con Licencia", bookNow: "Reservar Ahora", viewDetails: "Ver detalles", viewAll: "Ver Todos los Tours" }
    : { tag: "Private Tours", heading: "Explore Tokyo With a Licensed Guide", bookNow: "Book Now", viewDetails: "View details", viewAll: "View All Tours" };

  return (
    <section className="py-16 bg-secondary/30 border-t border-border">
      <div className="container-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-label text-accent mb-3">{labels.tag}</p>
            <h2 className="heading-section text-foreground">
              {labels.heading}
            </h2>
          </div>

          <div className={`grid gap-6 ${tours.length === 1 ? "max-w-md mx-auto" : "sm:grid-cols-2"}`}>
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-card border border-border rounded-lg p-6 flex flex-col shadow-[var(--shadow-card)] hover:border-accent/50 hover:shadow-[var(--shadow-medium)] transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {tour.title}
                </h3>
                {customSubtitles?.[tour.id] && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {customSubtitles[tour.id]}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </span>
                </div>
                <p className="mt-3 text-lg font-semibold text-foreground">
                  {tour.price}
                </p>
                <div className="mt-auto pt-5">
                  <Link
                    to={contactPath}
                    data-cta="book-now"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-[#C9A84C] text-[#0D0D0D] font-semibold rounded-md transition-colors duration-200 hover:bg-[#E2C07A] text-sm"
                    onClick={() => trackBookNowClick(labels.bookNow)}
                  >
                    {labels.bookNow}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    to={tour.link}
                    data-cta="blog-tour-card"
                    className="block text-center mt-2 text-sm text-accent hover:underline"
                    onClick={() => trackBlogToTourClick(tour.link)}
                  >
                    {labels.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {showViewAll && (
            <div className="mt-8 text-center">
              <Link
                to={toursPath}
                className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
              >
                {labels.viewAll}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
