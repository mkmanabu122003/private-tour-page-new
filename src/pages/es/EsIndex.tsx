// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Footprints, Key, Star, MessageSquare, MapPin, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { trackBookNowClick } from "@/lib/ga4";
import { TourCard } from "@/components/tours/TourCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/sumida.webp";

// Hero image: group-photo.jpg from public/images/tour-photos/
const heroGroupPhoto = "/images/tour-photos/group-photo.webp";
import tourUeno from "@/assets/tour-ueno.webp";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";
import imperialPalace from "@/assets/imperial-palace.webp";
import hamarikyu from "@/assets/hamarikyu.webp";

const tours = [
  {
    id: "asakusa",
    title: "Tour por Asakusa",
    description: "Descubre el corazón del viejo Tokio. Visita el Templo Senso-ji, explora tiendas tradicionales y prueba la comida callejera local.",
    duration: "3 horas",
    price: "¥45,000",
    difficulty: "Fácil",
    image: "/images/tours/asakusa-kaminarimon-gate.webp",
  },
  {
    id: "yanaka",
    title: "Descubrimiento de Ueno y Yanaka",
    description: "Experimenta el encanto nostálgico de los barrios antiguos de Tokio, templos tradicionales y rincones locales escondidos.",
    duration: "4 horas",
    price: "¥50,000",
    difficulty: "Fácil",
    image: tourUeno,
  },
  {
    id: "shibuya-harajuku",
    title: "Tour por Shibuya y Harajuku",
    description: "Explora el centro de la cultura juvenil de Tokio. Desde el famoso cruce de Shibuya hasta las calles de moda de Harajuku y el Santuario Meiji.",
    duration: "3.5 horas",
    price: "¥50,000",
    difficulty: "Fácil",
    image: "/images/tours/shibuya-crossing-tokyo.webp",
  },
  {
    id: "tsukiji-ginza",
    title: "Tour por Tsukiji y Ginza",
    description: "Experimenta las delicias culinarias de Tokio en el Mercado Exterior de Tsukiji y pasea por el elegante distrito comercial de Ginza.",
    duration: "3 horas",
    price: "¥45,000",
    difficulty: "Fácil",
    image: "/images/tours/tsukiji-market-food-tokyo.webp",
  },
  {
    id: "imperial-palace",
    title: "Palacio Imperial y Marunouchi",
    description: "Descubre el corazón histórico y el distrito empresarial moderno de Tokio. Pasea por los Jardines del Este y contempla el Palacio Imperial.",
    duration: "2.5 horas",
    price: "¥40,000",
    difficulty: "Fácil",
    image: imperialPalace,
  },
  {
    id: "kamakura-day-trip",
    title: "Excursión a Kamakura",
    description: "Explora el Gran Buda de Kamakura, templos ancestrales y el encanto costero en una excursión privada de un día desde Tokio.",
    duration: "7-8 horas",
    price: "¥70,000",
    difficulty: "Fácil-Moderado",
    image: "/images/tours/kamakura-great-buddha.webp",
  },
  {
    id: "hakone-day-trip",
    title: "Excursión a Hakone",
    description: "Contempla el Monte Fuji, navega por el Lago Ashi y vive la cultura termal en una excursión privada guiada desde Tokio.",
    duration: "8-10 horas",
    price: "¥70,000",
    difficulty: "Fácil",
    image: "/images/tours/hakone-lake-ashi-fuji.webp",
  },
  {
    id: "nikko-day-trip",
    title: "Excursión a Nikko",
    description: "Visita el Santuario Toshogu, Patrimonio de la Humanidad, impresionantes cascadas y paisajes de montaña en una excursión desde Tokio.",
    duration: "9-10 horas",
    price: "¥80,000",
    difficulty: "Moderado",
    // TODO: replace with Nikko image (e.g. toshogu shrine, kegon falls)
    image: hamarikyu,
  },
  {
    id: "custom",
    title: "Tour Privado Personalizado",
    description: "Crea tu experiencia perfecta en Tokio. Cuéntame tus intereses y diseñaré un itinerario personalizado solo para ti.",
    duration: "Flexible",
    price: "Desde ¥10,000~/hora",
    difficulty: "Personalizable",
    // TODO: replace with custom tour image (e.g. a map, planning scene, or collage)
    image: "/images/tour-photos/group-photo.webp",
  },
];

const trustSignals = [
  {
    icon: BadgeCheck,
    stat: "Oficial",
    label: "Guía Certificado",
    description: "Intérprete-guía nacional (全国通訳案内士)",
  },
  {
    icon: Footprints,
    stat: "500+",
    label: "Tours Completados",
    description: "Desde 2018, viajeros de 40+ países",
  },
  {
    icon: Star,
    stat: "4.86★",
    label: "Valoración Media",
    description: "De reseñas verificadas de huéspedes",
  },
  {
    icon: Key,
    stat: "100%",
    label: "Tours Privados",
    description: "Solo tu grupo. Sin extraños.",
  },
];

const testimonials = [
  {
    text: "We did 3 tours in Tokyo and Manabu's was by far the most informative and engaging. He was very clear in his delivery and offered interesting cultural insights as sidebars to each venue we visited. Highly recommended!",
    author: "Couple visiting Tokyo",
    rating: 5,
  },
  {
    text: "Manabu's tour was one of the best I've been on. He is professional, kind, very knowledgeable and an awesome story-teller. His route is well-planned and offers fun experiences. You can tell he is a full-time tour guide because of the effort he puts in.",
    author: "Solo traveler",
    rating: 5,
  },
  {
    text: "This was an excellent tour. Manabu was entertaining, charismatic and knowledgeable. All places visited were awesome and he provided very interesting tips. A great start to our Japan trip.",
    author: "First-time visitors to Japan",
    rating: 5,
  },
];

const EsIndex = () => {
  return (
    <Layout>
      <SEO
        title="Tour Privado en Tokio con Guía Japonés Nativo en Español | Tanuki Tabi Travel"
        description="Tour privado por Tokio con Manabu, guía japonés nativo con licencia oficial del gobierno (全国通訳案内士). Más de 500 tours completados y valoración de 4.86★. Itinerario 100% personalizado."
        canonicalPath="/es"
        hreflang={[
          { lang: "en", path: "/" },
          { lang: "es", path: "/es" },
          { lang: "x-default", path: "/" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroGroupPhoto}
            alt="Foto grupal con invitados durante un tour privado a pie por Tokio"
            className="w-full h-full object-cover"
            fetchpriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container-section py-20">
          <div className="max-w-2xl">
            <h1 className="heading-display text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Tours Privados a Pie por Tokio{" "}
              <span className="text-accent">con Guía Local Certificado</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Más de 500 tours completados. Valoración media de 4.86★. Guía con licencia oficial del gobierno japonés.
            </p>
            <p className="mt-3 text-base text-white/70 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              Cada tour comienza con una pregunta simple: ¿Qué es lo que más te
              emociona de Tokio? A partir de ahí, el recorrido es tuyo. No sigo un
              guión, sigo tu curiosidad.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/es/contact" data-cta="book-now-hero" className="btn-accent-lg" onClick={() => trackBookNowClick("Reserva Tu Tour Privado", "hero")}>
                Reserva Tu Tour Privado
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/es/tours/custom" className="group inline-flex items-center justify-center px-8 py-4 text-base bg-transparent border-[1.5px] border-white text-white font-semibold tracking-wide rounded-md transition-all duration-300 ease-out hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Tour Personalizado
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="container-section">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <signal.icon className="w-6 h-6 text-accent mx-auto mb-4" strokeWidth={1.75} />
                <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {signal.stat}
                </div>
                <div className="mt-2 text-sm font-medium text-foreground/80 tracking-wide uppercase">
                  {signal.label}
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Available */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-4">Explora Tokio</p>
            <div className="w-10 h-px bg-accent mx-auto mb-6" />
            <h2 className="heading-section text-foreground">Tours Disponibles en Español</h2>
            <p className="mt-4 text-body">
              Elige entre tours cuidadosamente diseñados o crea tu propia experiencia personalizada.
            </p>
          </div>

          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {tours.map((tour) => (
                  <CarouselItem key={tour.id} className="md:basis-1/2 lg:basis-1/3">
                    <Link to={`/es/tours/${tour.id}`} className="group card-elevated">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          width={600}
                          height={450}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="text-label px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full">
                            {tour.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="heading-card text-foreground group-hover:text-accent transition-colors">
                          {tour.title}
                        </h3>
                        <p className="mt-2 text-body line-clamp-2">{tour.description}</p>
                        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{tour.duration}</span>
                          <span>Privado</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                          <div>
                            <span className="text-xs text-muted-foreground">Desde</span>
                            <p className="text-lg font-semibold text-foreground">{tour.price}</p>
                          </div>
                          <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                            <span>Ver Detalles</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-4">Opiniones</p>
            <div className="w-10 h-px bg-accent mx-auto mb-6" />
            <h2 className="heading-section text-foreground">Lo Que Dicen los Viajeros</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <footer className="pt-4 border-t border-border">
                  <cite className="not-italic font-medium text-foreground text-sm">
                    - {testimonial.author}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Más de 500 reseñas de cinco estrellas de viajeros de todo el mundo
          </p>
        </div>
      </section>

      {/* Tour Photos */}
      <section aria-label="Fotos de tours" className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-section text-foreground">Tours en Fotos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/images/tour-photos/group-photo.webp", alt: "Foto grupal con invitados durante un tour privado a pie por Tokio", caption: "Tour privado en Tokio" },
              { src: "/images/tour-photos/photo1.webp", alt: "Explorando los monumentos culturales de Tokio en un tour guiado", caption: "Explorando el viejo Tokio juntos" },
              { src: "/images/tour-photos/photo2.webp", alt: "Descubriendo los tesoros ocultos de Tokio con un guía local", caption: "Descubriendo Tokio" },
              { src: "/images/tour-photos/asakusa-guest-selfie.webp", alt: "Selfie con invitados junto al río Sumida cerca de Asakusa con la Torre Asahi Beer de fondo", caption: "Explorando Asakusa con invitados" },
            ].map((photo) => (
              <div key={photo.src} className="flex flex-col">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-20 md:py-28 bg-accent/5 border-y border-accent/10">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-label text-accent mb-4">Reserva Fácil</p>
            <div className="w-10 h-px bg-accent mx-auto mb-6" />
            <h2 className="heading-section text-foreground">Cómo Reservar</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 mx-auto mb-5 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">Paso 1</p>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Envía tu Solicitud
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cuéntame tus fechas y lo que te emociona de Tokio. Solo 2 minutos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 mx-auto mb-5 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">Paso 2</p>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Recibe tu Plan a Medida
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Te respondo en menos de 24 horas con un itinerario personalizado y presupuesto.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 mx-auto mb-5 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">Paso 3</p>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Confirma y Paga
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Asegura tu tour con el pago y nos vemos en Tokio para tu día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose a Native Japanese Guide */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-section text-foreground text-center">¿Por qué elegir un guía japonés nativo?</h2>
            <div className="mt-8 text-muted-foreground leading-relaxed space-y-4">
              <p>
                La mayoría de los guías en español en Tokio son hispanohablantes que aprendieron japonés. Manabu es al revés: japonés nativo que habla español.
              </p>
              <p>
                Eso marca la diferencia. Conoce Tokio desde dentro, su historia, sus costumbres, los lugares donde come la gente local, y te lo cuenta directamente en español, sin filtros de traducción ni malentendidos culturales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label text-accent mb-4">Tu Guía</p>
              <div className="w-10 h-px bg-accent mb-6" />
              <h2 className="heading-section text-foreground">
                Conoce a Manabu, Tu Guía Oficial en Tokio
              </h2>
              <p className="mt-4 text-body">
                Soy Manabu, intérprete-guía con licencia nacional del gobierno japonés (全国通訳案内士), con más de 500 tours completados y una valoración media de 4.86 estrellas. Nacido en Kanazawa, criado en Kioto y ahora viviendo en Tokio. Conozco Japón desde dentro y en profundidad.
              </p>
              <p className="mt-4 text-body">
                Mi forma de guiar es simple: en los primeros 30 minutos aprendo qué es lo que más te emociona, y adapto el tour en tiempo real. No es una clase magistral, es una conversación.
              </p>
              <Link to="/es/about" className="btn-outline mt-8 inline-flex">
                Más Información
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={guidePortrait}
                  alt="Manabu, guía privado con licencia oficial en Tokio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">¿Listo para Explorar Tokio?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Cuéntame tus intereses y diseñaré un itinerario personalizado para ti.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/contact" data-cta="book-now-footer" className="btn-accent" onClick={() => trackBookNowClick("Solicitar un Tour", "footer")}>
              Solicitar un Tour
              <ArrowRight className="btn-arrow" />
            </Link>
            <Link to="/es/tours" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-300 ease-out hover:bg-primary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50">
              Ver Tours
            </Link>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/50">
            Respuesta en menos de 24 horas
          </p>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "TouristInformationCenter"],
            "name": "Tanuki Tabi Travel",
            "url": "https://tanuki-tabi-travel.com/es/",
            "description": "Tours privados por Tokio con Manabu, guía japonés nativo con licencia del gobierno y más de 500 tours completados.",
            "image": "https://tanuki-tabi-travel.com/assets/About_page_Manabu_team_photo-kZpmorG3.webp",
            "email": "info@tanuki-tabi-travel.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tokyo",
              "addressCountry": "JP",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.86",
              "reviewCount": "500",
            },
            "priceRange": "¥¥¥",
            "knowsLanguage": ["en", "es"],
            "hasCredential": "National Government Licensed Guide Interpreter (全国通訳案内士)",
          }),
        }}
      />
    </Layout>
  );
};

export default EsIndex;
