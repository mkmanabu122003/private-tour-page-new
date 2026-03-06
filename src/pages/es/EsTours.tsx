// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import tourUeno from "@/assets/tour-ueno.jpg";
import shibuyaCrossing from "@/assets/shibuya-crossing.jpg";
import tsukijiMarket from "@/assets/tsukiji-market.jpg";
import imperialPalace from "@/assets/imperial-palace.jpg";
import hamarikyu from "@/assets/hamarikyu.jpg";

interface EsTourCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  difficulty: string;
  image: string;
}

const EsTourCard = ({ id, title, description, duration, price, difficulty, image }: EsTourCardProps) => (
  <Link to={`/es/tours/${id}`} className="group card-elevated">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute top-4 left-4">
        <span className="text-label px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full">
          {difficulty}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="heading-card text-foreground group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-body line-clamp-2">{description}</p>
      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          <span>Privado</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <div>
          <span className="text-xs text-muted-foreground">Desde</span>
          <p className="text-lg font-semibold text-foreground">{price}</p>
        </div>
        <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
          <span>Ver Detalles</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  </Link>
);

const tokyoTours = [
  {
    id: "asakusa",
    title: "Tour por Asakusa",
    description: "Descubre el corazón del viejo Tokio. Visita el Templo Senso-ji, explora tiendas tradicionales y prueba la comida callejera auténtica.",
    duration: "3 horas",
    price: "¥30,000",
    difficulty: "Fácil",
    image: "/images/tours/asakusa-kaminarimon-gate.jpg",
  },
  {
    id: "yanaka",
    title: "Descubrimiento de Ueno y Yanaka",
    description: "Experimenta el encanto nostálgico de los barrios antiguos de Tokio. Pasea por templos tradicionales, senderos de cementerios y cafés locales escondidos.",
    duration: "4 horas",
    price: "¥40,000",
    difficulty: "Fácil",
    image: tourUeno,
  },
  {
    id: "shibuya-harajuku",
    title: "Tour por Shibuya y Harajuku",
    description: "Explora el centro de la cultura juvenil de Tokio. Desde el famoso cruce de Shibuya hasta las calles de moda de Harajuku y el Santuario Meiji.",
    duration: "3.5 horas",
    price: "¥35,000",
    difficulty: "Fácil",
    image: shibuyaCrossing,
  },
  {
    id: "tsukiji-ginza",
    title: "Tour por Tsukiji y Ginza",
    description: "Experimenta las delicias culinarias de Tokio en el Mercado Exterior de Tsukiji y pasea por el elegante distrito comercial de Ginza.",
    duration: "3 horas",
    price: "¥30,000",
    difficulty: "Fácil",
    image: tsukijiMarket,
  },
  {
    id: "imperial-palace",
    title: "Palacio Imperial y Marunouchi",
    description: "Descubre el corazón histórico y el distrito empresarial moderno de Tokio. Pasea por los Jardines del Este y contempla el Palacio Imperial.",
    duration: "2.5 horas",
    price: "¥25,000",
    difficulty: "Fácil",
    image: imperialPalace,
  },
  {
    id: "custom",
    title: "Tour Privado Personalizado",
    description: "Crea tu experiencia perfecta en Tokio. Cuéntame tus intereses y diseñaré un itinerario personalizado solo para ti.",
    duration: "Flexible",
    price: "Desde ¥10,000/hora",
    difficulty: "Personalizable",
    image: hamarikyu,
  },
];

const dayTrips = [
  {
    id: "kamakura-day-trip",
    title: "Excursión a Kamakura",
    description: "Explora el Gran Buda de Kamakura, templos ancestrales y el encanto costero en una excursión privada de un día desde Tokio.",
    duration: "7-8 horas",
    price: "¥50,000",
    difficulty: "Fácil-Moderado",
    image: "/images/tours/kamakura-great-buddha.jpg",
  },
  {
    id: "hakone-day-trip",
    title: "Excursión a Hakone",
    description: "Contempla el Monte Fuji, navega por el Lago Ashi, sube en teleférico sobre valles volcánicos y vive la cultura de aguas termales.",
    duration: "8-10 horas",
    price: "¥55,000",
    difficulty: "Fácil",
    image: "/images/tours/hakone-lake-ashi-fuji.jpg",
  },
  {
    id: "nikko-day-trip",
    title: "Excursión a Nikko",
    description: "Visita el Santuario Toshogu, Patrimonio de la Humanidad, impresionantes cascadas y paisajes de montaña en una excursión desde Tokio.",
    duration: "9-10 horas",
    price: "¥60,000",
    difficulty: "Moderado",
    image: hamarikyu,
  },
];

const EsTours = () => {
  return (
    <Layout>
      <SEO
        title="Tours Privados en Tokio en Español | Tanuki Tabi Travel"
        description="Explora todos los tours privados por Tokio con Manabu, guía japonés nativo en español. Asakusa, Shibuya, Kamakura, Hakone y más. Itinerario 100% personalizado."
        canonicalPath="/es/tours"
        hreflang={[
          { lang: "en", path: "/tours" },
          { lang: "es", path: "/es/tours" },
          { lang: "x-default", path: "/tours" },
        ]}
      />

      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">Explora Tokio</p>
            <h1 className="heading-display text-foreground">Tours Privados y Excursiones</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Descubre la rica cultura de Tokio a través de tours a pie inmersivos, o explora más allá de la ciudad con excursiones privadas a Kamakura, Hakone y Nikko.
            </p>
          </div>
        </div>
      </section>

      {/* Tokyo Walking Tours */}
      <section className="py-16">
        <div className="container-section">
          <h2 className="heading-section text-foreground mb-8">Tours a Pie por Tokio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tokyoTours.map((tour) => (
              <EsTourCard key={tour.id} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips from Tokyo */}
      <section className="py-16 bg-secondary/30">
        <div className="container-section">
          <div className="mb-8">
            <p className="text-label text-accent mb-3">Excursiones</p>
            <h2 className="heading-section text-foreground">Excursiones de un Día desde Tokio</h2>
            <p className="mt-4 text-body max-w-2xl">
              Explora fuera de Tokio con un guía privado. Cada excursión incluye servicio de guía durante todo el día, navegación de transporte y comentarios culturales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTrips.map((tour) => (
              <EsTourCard key={tour.id} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-section">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Qué Incluye
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Guía local profesional con licencia</li>
                <li>• Información cultural e historias locales</li>
                <li>• Oportunidades fotográficas</li>
                <li>• Ritmo y paradas flexibles</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Detalles del Tour
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Solo tours privados</li>
                <li>• Guía en español</li>
                <li>• Horarios de mañana o tarde</li>
                <li>• Con lluvia o sol (con ajustes)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Información de Reserva
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Reserva con al menos 48 horas de antelación</li>
                <li>• Cancelación gratuita hasta 24h antes</li>
                <li>• Pago el día del tour</li>
                <li>• Tours personalizados disponibles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EsTours;
