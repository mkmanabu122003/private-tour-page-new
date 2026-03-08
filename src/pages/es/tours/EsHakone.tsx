// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, X, ArrowLeft, ArrowRight, Calendar, Mountain, Info } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsHakone = () => {
  return (
    <Layout>
      <SEO
        title="Excursión Privada a Hakone en Español desde Tokio | Monte Fuji y Lago Ashi"
        description="Excursión privada a Hakone con guía japonés nativo en español. Monte Fuji, lago Ashi en barco y cultura de aguas termales en un día completo desde Tokio. Desde ¥55,000."
        canonicalPath="/es/tours/hakone-day-trip"
        hreflang={[
          { lang: "en", path: "/tours/hakone-day-trip" },
          { lang: "es", path: "/es/tours/hakone-day-trip" },
          { lang: "x-default", path: "/tours/hakone-day-trip" },
        ]}
      />

      <section className="pt-8 pb-4">
        <div className="container-section">
          <Link to="/es/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a Tours
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-section">
          <div className="max-w-4xl">
            <h1 className="heading-display text-foreground">
              Excursión Privada a Hakone con Guía en Español
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Vive lo mejor de Hakone en un solo día: navega por el Lago Ashi con el Monte Fuji como telón de fondo, sube en el teleférico sobre valles volcánicos humeantes y descubre el icónico torii junto al lago del Santuario de Hakone. Tu guía navega el complejo sistema de transporte para que tú te concentres en las vistas.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/tours/hakone-lake-ashi-fuji.jpg", alt: "Lago Ashi con vista del Monte Fuji - excursión desde Tokio" },
              { src: "/images/tours/hakone-ropeway-owakudani.jpg", alt: "Teleférico de Hakone sobre el valle volcánico de Owakudani" },
              { src: "/images/tours/hakone-pirate-ship-ashi.jpg", alt: "Crucero en barco pirata por el Lago Ashi en Hakone" },
            ].map((img) => (
              <div key={img.src} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="heading-section text-foreground mb-6">Puntos Destacados</h2>
                <ul className="space-y-3">
                  {[
                    "Crucero en barco pirata por el Lago Ashi con vistas al Monte Fuji (clima permitting)",
                    "Teleférico de Hakone: vistas aéreas sobre el valle volcánico de Owakudani",
                    "Owakudani: aguas termales volcánicas, famosos huevos negros",
                    "Santuario de Hakone: icónico torii junto al lago",
                    "Opcional: Museo al Aire Libre de Hakone o experiencia de onsen (aguas termales)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-section text-foreground mb-6">Itinerario</h2>
                <div className="space-y-4">
                  {[
                    { time: "8:00", activity: "Encuentro en tu hotel en Tokio" },
                    { time: "9:30", activity: "Llegada a Hakone-Yumoto en Romancecar (tren exprés panorámico)" },
                    { time: "10:00", activity: "Teleférico de Hakone a Owakudani" },
                    { time: "11:00", activity: "Valle volcánico de Owakudani (¡prueba los famosos huevos negros!)" },
                    { time: "12:00", activity: "Continuar en teleférico hasta Togendai" },
                    { time: "12:30", activity: "Crucero por el Lago Ashi (vistas del Monte Fuji en días despejados)" },
                    { time: "13:30", activity: "Santuario de Hakone (camino del torii junto al lago)" },
                    { time: "14:30", activity: "Almuerzo en un restaurante local" },
                    { time: "15:30", activity: "Opción: Museo al Aire Libre O baño de pies en onsen" },
                    { time: "17:00", activity: "Regreso a Tokio en Romancecar" },
                    { time: "18:30", activity: "Llegada a Tokio" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-sm font-medium text-accent min-w-[60px]">{item.time}</span>
                      <span className="text-muted-foreground">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="heading-section text-foreground mb-6">Incluido</h2>
                <ul className="space-y-3">
                  {[
                    "Guía con licencia oficial que habla español durante todo el día",
                    "Planificación personalizada del itinerario",
                    "Navegación del transporte de Hakone (teleférico, crucero, autobuses... ¡es complejo!)",
                    "Recomendaciones de restaurantes y onsen",
                    "Explicaciones culturales y geológicas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-section text-foreground mb-6">No Incluido</h2>
                <ul className="space-y-3">
                  {[
                    "Hakone Free Pass (aprox. ¥6,100, cubre todo el transporte de Hakone + ida y vuelta desde Shinjuku)",
                    "Almuerzo",
                    "Entradas al museo / tarifas de onsen",
                    "Suplemento Romancecar (aprox. ¥1,110 por trayecto, opcional)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6">
                <h2 className="heading-section text-foreground mb-6">Información Práctica</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">8-10 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Mejor época</p>
                      <p className="text-sm text-muted-foreground">Oct-feb para visibilidad del Monte Fuji. Todo el año para aguas termales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Dificultad</p>
                      <p className="text-sm text-muted-foreground">Fácil. Mayormente transporte con paseos cortos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Ideal para</p>
                      <p className="text-sm text-muted-foreground">Amantes de la naturaleza, fotógrafos, parejas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="heading-section text-foreground mb-6">¿Por qué con guía?</h2>
                <div className="flex gap-4 items-start bg-card border border-border rounded-lg p-6">
                  <Info className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    El sistema de transporte de Hakone (trenes, funiculares, teleféricos, autobuses, barcos) puede ser abrumador para los visitantes primerizos. Un guía navega el famoso "Circuito de Hakone" de manera eficiente, ahorrándote tiempo y confusión. Más importante aún, la visibilidad del Monte Fuji cambia cada hora, y tu guía ajusta el itinerario en tiempo real para maximizar tus posibilidades de esa vista icónica.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-6 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground">Desde</span>
                  <p className="text-3xl font-serif font-semibold text-foreground">¥55,000</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">8-10 horas</p>
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
                      <p className="text-sm text-muted-foreground">8:00 AM</p>
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">¿Listo para Explorar Hakone?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Reserva tu excursión privada a Hakone con un guía japonés nativo que habla español.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/contact" className="btn-accent">Reservar Mi Tour</Link>
            <Link to="/es/" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">Ver Todos los Tours</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EsHakone;
