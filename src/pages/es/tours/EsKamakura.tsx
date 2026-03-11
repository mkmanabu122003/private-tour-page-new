// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, X, ArrowLeft, ArrowRight, Calendar, Mountain, Info } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { StickyBookingBar } from "@/components/tours/StickyBookingBar";

const EsKamakura = () => {
  return (
    <Layout>
      <SEO
        title="Excursión Privada a Kamakura en Español desde Tokio"
        description="Excursión privada a Kamakura con guía japonés nativo en español. Gran Buda, templos ancestrales y costa japonesa en un día completo desde Tokio. Desde ¥50,000."
        canonicalPath="/es/tours/kamakura-day-trip"
        hreflang={[
          { lang: "en", path: "/tours/kamakura-day-trip" },
          { lang: "es", path: "/es/tours/kamakura-day-trip" },
          { lang: "x-default", path: "/tours/kamakura-day-trip" },
        ]}
      />

      {/* Back Navigation */}
      <section className="pt-8 pb-4">
        <div className="container-section">
          <Link to="/es" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a Tours
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-12">
        <div className="container-section">
          <div className="max-w-4xl">
            <h1 className="heading-display text-foreground">
              Excursión Privada a Kamakura con Guía en Español
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Escapa de Tokio por un día y explora Kamakura, la primera capital militar de Japón. Esta excursión privada te lleva al icónico Gran Buda, templos serenos con vistas al océano y la encantadora calle comercial Komachi-dori, todo con un guía con licencia que da vida a 800 años de historia samurái.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-12">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/tours/kamakura-great-buddha.webp", alt: "Gran Buda de Kamakura - excursión desde Tokio con guía" },
              { src: "/images/tours/kamakura-coast-enoden.webp", alt: "Vista costera de Kamakura - excursión de un día desde Tokio" },
              { src: "/images/tours/kamakura-hasedera-temple.webp", alt: "Jardines del Templo Hasedera en Kamakura" },
            ].map((img) => (
              <div key={img.src} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={600} height={450} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-12">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <div>
                <h2 className="heading-section text-foreground mb-6">Puntos Destacados</h2>
                <ul className="space-y-3">
                  {[
                    "Gran Buda en Kotoku-in, estatua de bronce del siglo XIII, uno de los monumentos más icónicos de Japón",
                    "Templo Hasedera: vistas al océano, estatua de Kannon, hortensias en junio",
                    "Santuario Tsurugaoka Hachimangu: el santuario más importante de Kamakura",
                    "Calle comercial Komachi-dori: aperitivos locales, recuerdos, artesanía",
                    "Opcional: bosque de bambú del Templo Hokokuji + experiencia de matcha",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="heading-section text-foreground mb-6">Itinerario</h2>
                <div className="space-y-4">
                  {[
                    { time: "8:30", activity: "Encuentro en tu hotel en Tokio" },
                    { time: "9:30", activity: "Llegada a Kamakura en tren (~1 hora desde Tokio)" },
                    { time: "10:00", activity: "Santuario Tsurugaoka Hachimangu" },
                    { time: "11:00", activity: "Bosque de bambú del Templo Hokokuji (matcha opcional)" },
                    { time: "12:00", activity: "Almuerzo en un restaurante local (el guía recomienda según tus preferencias)" },
                    { time: "13:30", activity: "Gran Buda en Kotoku-in" },
                    { time: "14:30", activity: "Templo Hasedera (vistas al océano desde la plataforma de observación)" },
                    { time: "15:30", activity: "Calle Komachi-dori: comida callejera, compras" },
                    { time: "16:30", activity: "Regreso a Tokio en tren" },
                    { time: "17:30", activity: "Llegada a Tokio" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-sm font-medium text-accent min-w-[60px]">{item.time}</span>
                      <span className="text-muted-foreground">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div>
                <h2 className="heading-section text-foreground mb-6">Incluido</h2>
                <ul className="space-y-3">
                  {[
                    "Guía con licencia oficial que habla español durante todo el día",
                    "Planificación personalizada del itinerario según tus intereses",
                    "Navegación de trenes y transporte local",
                    "Recomendaciones y reservas en restaurantes",
                    "Contexto cultural y explicaciones históricas en cada lugar",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div>
                <h2 className="heading-section text-foreground mb-6">No Incluido</h2>
                <ul className="space-y-3">
                  {[
                    "Billetes de tren (aprox. ¥1,500-2,000 ida y vuelta por persona)",
                    "Almuerzo y aperitivos",
                    "Entradas a templos (aprox. ¥200-400 por sitio)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Info */}
              <div className="bg-secondary/30 rounded-lg p-6">
                <h2 className="heading-section text-foreground mb-6">Información Práctica</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">7-8 horas (flexible)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Mejor época</p>
                      <p className="text-sm text-muted-foreground">Todo el año. Junio para hortensias, nov-dic para hojas otoñales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Dificultad</p>
                      <p className="text-sm text-muted-foreground">Fácil a moderado, terreno mayormente plano</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Ideal para</p>
                      <p className="text-sm text-muted-foreground">Familias, parejas, amantes de la historia, primerizos en Japón</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why a Guide */}
              <div>
                <h2 className="heading-section text-foreground mb-6">¿Por qué con guía?</h2>
                <div className="flex gap-4 items-start bg-card border border-border rounded-lg p-6">
                  <Info className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    Kamakura tiene más de 65 templos y santuarios. Un guía te ayuda a priorizar y entender la rica historia de la primera capital militar de Japón. Evita la confusión de las conexiones de tren y navega las multitudes de manera eficiente, especialmente en los lugares más populares. Tu guía proporciona contexto cultural que transforma las visitas a templos de simple turismo en experiencias significativas.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-6 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground">Desde</span>
                  <p className="text-3xl font-serif font-semibold text-foreground">¥50,000</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">7-8 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Tamaño del grupo</p>
                      <p className="text-sm text-muted-foreground">1-6 personas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Horario</p>
                      <p className="text-sm text-muted-foreground">8:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Punto de encuentro</p>
                      <p className="text-sm text-muted-foreground">Tu hotel en Tokio</p>
                    </div>
                  </div>
                </div>

                <Link to="/es/contact" className="btn-accent w-full text-center">
                  Reservar Esta Excursión
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Booking CTA */}
      <section className="py-12 bg-accent/5 border-y border-accent/10">
        <div className="container-section text-center">
          <p className="text-lg sm:text-xl font-semibold text-foreground">
            ¿Listo para reservar? Asegura tu tour privado →
          </p>
          <Link
            to="/es/contact"
            className="mt-4 inline-flex items-center justify-center px-7 py-3 bg-[#C9A84C] text-[#0D0D0D] font-semibold rounded-md transition-colors duration-200 hover:bg-[#E2C07A]"
          >
            Reservar Ahora
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Guía con licencia · Tour privado
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">¿Listo para Explorar Kamakura?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Reserva tu excursión privada a Kamakura con un guía japonés nativo que habla español.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/contact" className="btn-accent">
              Reservar Mi Tour
            </Link>
            <Link to="/es" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">
              Ver Todos los Tours
            </Link>
          </div>
        </div>
      </section>
      <StickyBookingBar tourName="Excursión Privada a Kamakura" price="¥50,000" />
    </Layout>
  );
};

export default EsKamakura;
