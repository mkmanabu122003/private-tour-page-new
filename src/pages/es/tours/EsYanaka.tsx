// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import tourUeno from "@/assets/tour-ueno.jpg";
import tourYanaka from "@/assets/tour-yanaka.jpg";
import uenoNight from "@/assets/ueno-night.jpg";

const EsYanaka = () => {
  return (
    <Layout>
      <SEO
        title="Tour por Yanaka y Ueno en Español | Guía Local Tokio"
        description="Descubre Yanaka, el barrio más nostálgico de Tokio, con un guía japonés nativo en español. Templos, tiendas vintage y vida local auténtica. Tour privado desde ¥40,000."
        canonicalPath="/es/tours/yanaka"
        hreflang={[
          { lang: "en", path: "/tours/yanaka" },
          { lang: "es", path: "/es/tours/yanaka" },
          { lang: "x-default", path: "/tours/yanaka" },
        ]}
      />

      {/* Back Navigation */}
      <section className="pt-8 pb-4">
        <div className="container-section">
          <Link to="/es/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
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
              Descubrimiento de Ueno y Yanaka con Guía en Español
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Escapa de la ciudad moderna y descubre el barrio más nostálgico de Tokio. Yanaka sobrevivió a la guerra y los terremotos, preservando la atmósfera del viejo Tokio con sus casas de madera, tiendas tradicionales y templos tranquilos.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-12">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: tourUeno, alt: "Calle tradicional del barrio de Yanaka en Tokio" },
              { src: tourYanaka, alt: "Calle comercial retro Yanaka Ginza con tiendas locales" },
              { src: uenoNight, alt: "Templo del Parque Ueno iluminado al atardecer" },
            ].map((img) => (
              <div key={img.src} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
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
                    "Yanaka Ginza — encantadora calle comercial retro",
                    "Templos históricos y cementerios",
                    "Tiendas de artesanía tradicional y cafés",
                    "Observación de gatos en el barrio felino de Japón",
                    "Impresionantes vistas del atardecer desde las escaleras Yuyake Dandan",
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
                    { time: "9:30", activity: "Encuentro en la estación de Nippori" },
                    { time: "9:45", activity: "Cementerio de Yanaka y templos históricos" },
                    { time: "10:30", activity: "Exploración de tiendas de artesanía tradicional" },
                    { time: "11:15", activity: "Calle comercial Yanaka Ginza" },
                    { time: "12:00", activity: "Pausa para almuerzo local (opcional)" },
                    { time: "13:00", activity: "Puntos destacados del Parque Ueno" },
                    { time: "13:30", activity: "Fin del tour en la estación de Ueno" },
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
                    "Información cultural e histórica en profundidad",
                    "Recomendaciones de cafés y comida local",
                    "Guía de etiqueta en templos y santuarios",
                    "Consejos y asistencia fotográfica",
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
                    "Visitantes que regresan a Tokio",
                    "Quienes buscan experiencias auténticas",
                    "Amantes de los gatos",
                    "Entusiastas de la fotografía",
                    "Cualquiera que ame los barrios tranquilos y con encanto",
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
                  <p className="text-3xl font-serif font-semibold text-foreground">¥40,000</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">4 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Tamaño del grupo</p>
                      <p className="text-sm text-muted-foreground">1-4 personas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Horario</p>
                      <p className="text-sm text-muted-foreground">9:30 AM o 1:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Punto de encuentro</p>
                      <p className="text-sm text-muted-foreground">Estación de Nippori, Salida Norte</p>
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

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">¿Listo para Descubrir Yanaka?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Reserva tu tour privado por Ueno y Yanaka con un guía japonés nativo que habla español.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/contact" className="btn-accent">
              Reservar Mi Tour
            </Link>
            <Link to="/es/" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">
              Ver Todos los Tours
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EsYanaka;
