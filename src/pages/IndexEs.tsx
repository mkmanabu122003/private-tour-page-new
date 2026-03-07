import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Shield, Star, Camera } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { TourCard } from "@/components/tours/TourCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/sumida.jpg";
import tourUeno from "@/assets/tour-ueno.jpg";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";
import imperialPalace from "@/assets/imperial-palace.jpg";
import hamarikyu from "@/assets/hamarikyu.jpg";

const tours = [
  {
    id: "asakusa",
    title: "Tour a Pie por Asakusa",
    description: "Descubre el corazón del viejo Tokio. Visita el Templo Senso-ji, explora tiendas tradicionales y prueba la comida callejera local.",
    duration: "3 horas",
    price: "¥30,000",
    difficulty: "Fácil",
    image: "/images/tours/asakusa-kaminarimon-gate.jpg",
  },
  {
    id: "yanaka",
    title: "Descubrimiento de Ueno y Yanaka",
    description: "Experimenta el encanto nostálgico de los barrios antiguos de Tokio, templos tradicionales y rincones locales escondidos.",
    duration: "4 horas",
    price: "¥40,000",
    difficulty: "Fácil",
    image: tourUeno,
  },
  {
    id: "shibuya-harajuku",
    title: "Tour por Shibuya y Harajuku",
    description: "Explora el centro de la cultura juvenil de Tokio. Desde el famoso Cruce de Shibuya hasta las calles de moda de Harajuku y el Santuario Meiji.",
    duration: "3.5 horas",
    price: "¥35,000",
    difficulty: "Fácil",
    image: "/images/tours/shibuya-crossing-tokyo.jpg",
  },
  {
    id: "tsukiji-ginza",
    title: "Tour por Tsukiji y Ginza",
    description: "Experimenta las delicias culinarias de Tokio en el Mercado Exterior de Tsukiji y pasea por el elegante distrito comercial de Ginza.",
    duration: "3 horas",
    price: "¥30,000",
    difficulty: "Fácil",
    image: "/images/tours/tsukiji-market-food-tokyo.jpg",
  },
  {
    id: "imperial-palace",
    title: "Palacio Imperial y Marunouchi",
    description: "Descubre el corazón histórico de Tokio y su moderno distrito empresarial. Pasea por los Jardines del Este y contempla el Palacio Imperial.",
    duration: "2.5 horas",
    price: "¥25,000",
    difficulty: "Fácil",
    image: imperialPalace,
  },
  {
    id: "kamakura-day-trip",
    title: "Excursión a Kamakura",
    description: "Explora el Gran Buda de Kamakura, templos antiguos y su encanto costero en una excursión privada desde Tokio.",
    duration: "7-8 horas",
    price: "¥50,000",
    difficulty: "Fácil-Moderado",
    image: "/images/tours/kamakura-great-buddha.jpg",
  },
  {
    id: "hakone-day-trip",
    title: "Excursión a Hakone",
    description: "Contempla el Monte Fuji, navega por el Lago Ashi y experimenta la cultura de aguas termales en una excursión privada guiada desde Tokio.",
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

const trustSignals = [
  {
    icon: Shield,
    title: "Guía con Licencia Oficial",
    description: "Guía Intérprete con Licencia del Gobierno Nacional (全国通訳案内士) — la credencial de guía más alta de Japón.",
  },
  {
    icon: Star,
    title: "Más de 516 Tours Realizados",
    description: "Confiado por cientos de viajeros de todo el mundo por su calidad, autenticidad y experiencias personalizadas.",
  },
  {
    icon: Award,
    title: "Calificación Promedio de 4.86★",
    description: "Constantemente entre los mejores por calidad, profundidad cultural y satisfacción del cliente.",
  },
  {
    icon: Users,
    title: "Privado y Personalizado",
    description: "Cada tour es exclusivamente tuyo. Sin desconocidos, sin horarios rígidos — solo tu grupo y tu guía.",
  },
];

const testimonials = [
  {
    text: "Hicimos 3 tours en Tokio y el de Manabu fue con diferencia el más informativo y entretenido. Fue muy claro en su explicación y ofreció interesantes perspectivas culturales en cada lugar que visitamos. ¡Muy recomendado!",
    author: "Pareja visitando Tokio",
    rating: 5,
  },
  {
    text: "El tour de Manabu fue uno de los mejores en los que he estado — es profesional, amable, muy conocedor y un gran narrador. Su ruta está bien planificada y ofrece experiencias divertidas. Se nota que es un guía turístico de tiempo completo por el esfuerzo que pone.",
    author: "Viajero individual",
    rating: 5,
  },
  {
    text: "Este fue un excelente tour. Manabu fue entretenido, carismático y conocedor. Todos los lugares visitados fueron increíbles y proporcionó consejos muy interesantes. Un gran comienzo para nuestro viaje a Japón.",
    author: "Visitantes primerizos en Japón",
    rating: 5,
  },
];

const tourPhotos = [
  {
    src: "/images/tour-photos/group-photo.jpg",
    alt: "Foto grupal con invitados durante un tour privado a pie por Tokio",
  },
  {
    src: "/images/tour-photos/photo1.jpg",
    alt: "Explorando los monumentos culturales de Tokio en un tour guiado",
  },
  {
    src: "/images/tour-photos/photo2.jpg",
    alt: "Descubriendo los tesoros ocultos de Tokio con un guía local",
  },
];

const IndexEs = () => {
  return (
    <Layout>
      <SEO
        title="Guía Turístico Privado en Tokio | Tours a Pie con Licencia | Tanuki Tabi Travel"
        description="Explora Tokio con un guía turístico privado con licencia gubernamental. Más de 516 tours completados con calificación de 4.86★. Tours a pie personalizados por Asakusa, Shibuya, Ginza y más."
        canonicalPath="/es"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Vista panorámica del río Sumida de Tokio con el horizonte tradicional y moderno"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative container-section py-20">
          <div className="max-w-2xl">
            <h1 className="heading-display text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Tours Privados a Pie por Tokio con un{" "}
              <span className="text-accent">Guía Local con Licencia</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Más de 516 tours completados. Calificación promedio de 4.86★. Guía con licencia gubernamental.
            </p>
            <p className="mt-3 text-base text-white/70 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              Descubre el lado auténtico de Tokio a través de tours a pie inmersivos.
              Desde templos antiguos hasta callejones escondidos, vive las historias que
              hacen esta ciudad inolvidable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/tours" className="btn-accent">
                Ver Tours
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/tours/custom" className="btn-outline">
                Reservar un Tour Personalizado
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="text-center group">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <signal.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Explora Tokio</p>
            <h2 className="heading-section text-foreground">Tours Destacados</h2>
            <p className="mt-4 text-body">
              Elige entre tours a pie cuidadosamente seleccionados o crea tu propia experiencia personalizada.
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
                    <TourCard {...tour} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="mt-12 text-center">
            <Link to="/tours" className="btn-outline">
              Ver Todos los Tours
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section (short) */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label text-accent mb-3">Tu Guía</p>
              <h2 className="heading-section text-foreground">
                Conoce a Manabu — Tu Guía con Licencia en Tokio
              </h2>
              <p className="mt-4 text-body">
                Soy Manabu, Guía Intérprete con Licencia del Gobierno Nacional
                (全国通訳案内士) con más de 516 tours completados y una calificación
                promedio de 4.86 estrellas. Nacido en Kanazawa, criado en Kioto y
                ahora radicado en Tokio — aporto conocimientos de las diversas
                regiones culturales de Japón.
              </p>
              <p className="mt-4 text-body">
                Mi enfoque es simple: en los primeros 30 minutos, aprendo qué te
                entusiasma, y luego adapto el tour en tiempo real. No es una
                conferencia — es una conversación.
              </p>
              <Link to="/about" className="btn-outline mt-8 inline-flex">
                Conoce más sobre tu guía
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={guidePortrait}
                  alt="Manabu, guía turístico de Tokio con licencia gubernamental, listo para liderar un tour privado a pie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Reserva Fácil</p>
            <h2 className="heading-section text-foreground">Cómo Funciona</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-semibold">
                1
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Elige un Tour
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Explora nuestros tours seleccionados o solicita un itinerario personalizado adaptado a tus intereses.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-semibold">
                2
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Comparte tus Intereses
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Cuéntanos qué te entusiasma — comida, historia, fotografía, cultura pop — y personalizaremos tu experiencia.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-semibold">
                3
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Explora Tokio
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Conoce a tu guía y descubre Tokio a tu propio ritmo. Sin multitudes, sin prisas — solo una experiencia auténtica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Reseñas de Huéspedes</p>
            <h2 className="heading-section text-foreground">Lo que Dicen los Viajeros</h2>
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
                    — {testimonial.author}
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

      {/* Tours in Photos */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">
              <Camera className="w-4 h-4 inline-block mr-1 -mt-0.5" />
              Galería
            </p>
            <h2 className="heading-section text-foreground">Tours en Fotos</h2>
            <p className="mt-4 text-body">
              Un vistazo a lo que podría ser tu experiencia en Tokio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tourPhotos.map((photo) => (
              <div
                key={photo.src}
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-[var(--shadow-card)] group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">¿Listo para Explorar Tokio?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Creemos una experiencia inolvidable juntos. Reserva tu tour privado
            o contáctame para diseñar un itinerario personalizado.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Reserva tu Tour
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">
              Conoce Más Sobre Mí
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tanuki Tabi Travel",
            "description": "Tours privados a pie por Tokio con un guía con licencia gubernamental",
            "url": "https://tanuki-tabi-travel.com/es",
            "email": "info@tanuki-tabi-travel.com",
            "areaServed": {
              "@type": "City",
              "name": "Tokyo",
              "addressCountry": "JP",
            },
            "founder": {
              "@type": "Person",
              "name": "Manabu",
              "jobTitle": "Guía Turístico con Licencia Gubernamental",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.86",
              "reviewCount": "516",
              "bestRating": "5",
            },
            "review": testimonials.map((t) => ({
              "@type": "Review",
              "reviewBody": t.text,
              "author": { "@type": "Person", "name": t.author },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
              },
            })),
          }),
        }}
      />
    </Layout>
  );
};

export default IndexEs;
