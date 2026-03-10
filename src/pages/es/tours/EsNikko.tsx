// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, X, ArrowLeft, ArrowRight, Calendar, Mountain, Info } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import nikkoToshogu from "@/assets/nikko-toshogu.jpg";

const EsNikko = () => {
  return (
    <Layout>
      <SEO
        title="Excursión Privada a Nikko en Español desde Tokio | Patrimonio UNESCO"
        description="Visita el Santuario Toshogu, Patrimonio de la Humanidad, con un guía japonés nativo en español. Cascadas y paisajes de montaña en un día completo desde Tokio. Desde ¥60,000."
        canonicalPath="/es/tours/nikko-day-trip"
        hreflang={[
          { lang: "en", path: "/tours/nikko-day-trip" },
          { lang: "es", path: "/es/tours/nikko-day-trip" },
          { lang: "x-default", path: "/tours/nikko-day-trip" },
        ]}
      />

      <section className="pt-8 pb-4">
        <div className="container-section">
          <Link to="/es" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver a Tours
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-section">
          <div className="max-w-4xl">
            <h1 className="heading-display text-foreground">
              Excursión Privada a Nikko con Guía en Español
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Viaja a Nikko, hogar del complejo de santuarios más ornamentado de Japón y un paisaje montañoso impresionante. Descubre el Santuario Toshogu, Patrimonio de la Humanidad, con sus más de 5.000 tallas intrincadas, contempla las poderosas Cascadas Kegon y disfruta de la serena belleza del Lago Chuzenji, todo con comentarios históricos expertos de tu guía.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-section">
          <div className="aspect-[16/9] max-w-2xl rounded-lg overflow-hidden">
            <img src={nikkoToshogu} alt="Puerta torii de piedra y edificios del Santuario Toshogu en Nikko" className="w-full h-full object-cover" />
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
                    "Santuario Toshogu, Patrimonio de la Humanidad UNESCO, el complejo de santuarios más ornamentado de Japón",
                    "Tallas originales de \"no ver el mal, no hablar el mal, no oír el mal\"",
                    "Puente Shinkyo: puente sagrado bermellón sobre el río Daiya",
                    "Cascadas Kegon: una de las cascadas más famosas de Japón (caída de 97m)",
                    "Lago Chuzenji: lago de montaña a 1.269m de altitud",
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
                    { time: "7:30", activity: "Encuentro en la estación de Tokio" },
                    { time: "9:30", activity: "Llegada a Nikko en Shinkansen + tren local (~2 horas)" },
                    { time: "10:00", activity: "Puente Shinkyo (parada fotográfica)" },
                    { time: "10:30", activity: "Complejo del Santuario Toshogu (1,5-2 horas)" },
                    { time: "12:30", activity: "Almuerzo (prueba la especialidad local: yuba, platos de piel de tofu)" },
                    { time: "13:30", activity: "Viaje en autobús a la zona de Chuzenji" },
                    { time: "14:00", activity: "Plataforma de observación de las Cascadas Kegon" },
                    { time: "14:30", activity: "Paseo por la orilla del Lago Chuzenji" },
                    { time: "15:30", activity: "Regreso a la estación de Nikko" },
                    { time: "16:00", activity: "Tren de vuelta a Tokio" },
                    { time: "18:00", activity: "Llegada a Tokio" },
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
                    "Navegación de trenes y autobuses",
                    "Explicaciones detalladas de las tallas de Toshogu y la historia sintoísta/budista",
                    "Recomendaciones de comida local",
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
                    "Billetes de tren (aprox. ¥5,000-8,000 ida y vuelta según tipo de tren)",
                    "Entrada al Santuario Toshogu (¥1,600)",
                    "Almuerzo",
                    "Ascensor de las Cascadas Kegon (¥570, opcional)",
                    "Tarifas de autobús dentro de la zona de Nikko",
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
                      <p className="text-sm text-muted-foreground">9-10 horas (Nikko está más lejos de Tokio)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Mejor época</p>
                      <p className="text-sm text-muted-foreground">Oct-nov para follaje otoñal espectacular. Mayo para verdor primaveral</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Dificultad</p>
                      <p className="text-sm text-muted-foreground">Moderado. Algunas subidas y escaleras en Toshogu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Ideal para</p>
                      <p className="text-sm text-muted-foreground">Amantes de la historia, naturaleza, patrimonio UNESCO, fotógrafos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="heading-section text-foreground mb-6">¿Por qué con guía?</h2>
                <div className="flex gap-4 items-start bg-card border border-border rounded-lg p-6">
                  <Info className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    El Santuario Toshogu tiene más de 5.000 tallas intrincadas. Sin un guía, pasarás de largo el 90% de ellas sin entender su significado. El complejo del santuario es una obra maestra de la artesanía de la era Tokugawa, y un guía conocedor transforma la visita de "edificios bonitos" en una inmersión profunda en la historia política y espiritual de Japón. El guía también gestiona la compleja logística de transporte entre la ciudad de Nikko y la zona del lago de montaña.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-6 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground">Desde</span>
                  <p className="text-3xl font-serif font-semibold text-foreground">¥60,000</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">9-10 horas</p>
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
                      <p className="text-sm text-muted-foreground">7:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Punto de encuentro</p>
                      <p className="text-sm text-muted-foreground">Estación de Tokio</p>
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
          <h2 className="heading-section">¿Listo para Explorar Nikko?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Reserva tu excursión privada a Nikko con un guía japonés nativo que habla español.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/contact" className="btn-accent">Reservar Mi Tour</Link>
            <Link to="/es" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">Ver Todos los Tours</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EsNikko;
