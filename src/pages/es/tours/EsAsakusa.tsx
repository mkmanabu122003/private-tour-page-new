// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { StickyBookingBar } from "@/components/tours/StickyBookingBar";

const EsAsakusa = () => {
  return (
    <Layout>
      <SEO
        title="Tour por Asakusa en Español | Guía Japonés Nativo | Tokio"
        description="Recorre Asakusa con Manabu, guía japonés nativo con licencia oficial. Templo Senso-ji, calle Nakamise y gastronomía local en un tour privado de 3 horas. Desde ¥30,000."
        canonicalPath="/es/tours/asakusa"
        hreflang={[
          { lang: "en", path: "/tours/asakusa" },
          { lang: "es", path: "/es/tours/asakusa" },
          { lang: "x-default", path: "/tours/asakusa" },
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
              Tour Privado por Asakusa con Guía en Español
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Asakusa es el barrio más tradicional de Tokio y el lugar donde Manabu comenzó su carrera como guía. Conoce cada rincón como si fuera su propio barrio.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vive la magia del distrito más antiguo y tradicional de Tokio. Este tour a pie te lleva por el icónico Templo Senso-ji, la bulliciosa calle comercial Nakamise y rincones escondidos que solo los locales conocen.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-12">
        <div className="container-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/tours/asakusa-kaminarimon-morning.webp", alt: "Puerta Kaminarimon en Asakusa - punto de inicio del tour privado" },
              { src: "/images/tours/asakusa-nakamise-street.webp", alt: "Calle Nakamise-dori hacia el Templo Senso-ji" },
              { src: "/images/tours/senso-ji-temple-tokyo.webp", alt: "Templo Senso-ji - el templo más antiguo de Tokio" },
              { src: "/images/tours/asakusa-backstreet-local.webp", alt: "Callejón escondido de Asakusa lejos de las multitudes" },
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
                    "Templo Senso-ji, el templo más antiguo y famoso de Tokio",
                    "Puerta Kaminarimon, la icónica Puerta del Trueno",
                    "Calle comercial Nakamise, dulces tradicionales y recuerdos",
                    "Callejones ocultos y rincones locales",
                    "Vistas del río Sumida y puntos fotográficos del Skytree",
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
                    { time: "10:00", activity: "Encuentro en la estación de Asakusa" },
                    { time: "10:15", activity: "Puerta Kaminarimon y calle Nakamise" },
                    { time: "10:45", activity: "Exploración del Templo Senso-ji" },
                    { time: "11:30", activity: "Callejones escondidos y tiendas locales" },
                    { time: "12:15", activity: "Paseo por el río Sumida y puntos fotográficos" },
                    { time: "13:00", activity: "Fin del tour en la estación de Asakusa" },
                  ].map((item) => (
                    <div key={item.time} className="flex gap-4 items-start">
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
                    "Guía con licencia oficial que habla español",
                    "Comentarios culturales e historias locales",
                    "Asistencia fotográfica en puntos clave",
                    "Guía de etiqueta en templos",
                    "Recomendaciones de comida local",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable For */}
              <div>
                <h2 className="heading-section text-foreground mb-6">Ideal Para</h2>
                <ul className="space-y-3">
                  {[
                    "Visitantes primerizos en Tokio",
                    "Familias con niños",
                    "Personas mayores (ritmo tranquilo)",
                    "Entusiastas de la fotografía",
                    "Amantes de la historia y la cultura",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-6 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground">Desde</span>
                  <p className="text-3xl font-serif font-semibold text-foreground">¥30,000</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">3 horas</p>
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
                      <p className="text-sm text-muted-foreground">10:00 AM o 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Punto de encuentro</p>
                      <p className="text-sm text-muted-foreground">Estación de Asakusa, Salida 1</p>
                    </div>
                  </div>
                </div>

                <Link to="/es/contact" className="btn-accent w-full text-center">
                  Reservar Este Tour
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
          <h2 className="heading-section">¿Listo para Explorar Asakusa?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Reserva tu tour privado por Asakusa con un guía japonés nativo que habla español.
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
      <StickyBookingBar tourName="Tour Privado por Asakusa" price="¥30,000" />
    </Layout>
  );
};

export default EsAsakusa;
