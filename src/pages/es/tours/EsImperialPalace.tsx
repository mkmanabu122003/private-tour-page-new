// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { StickyBookingBar } from "@/components/tours/StickyBookingBar";
import { trackBookNowClick, trackTourPageView } from "@/lib/ga4";
import imperialPalace from "@/assets/imperial-palace.webp";
import imperialBridge from "@/assets/imperial-bridge.webp";
import tokyoStation from "@/assets/tokyo-station.webp";

const EsImperialPalace = () => {
  useEffect(() => { trackTourPageView("Tour del Palacio Imperial y Marunouchi"); }, []);

  return (
    <Layout>
      <SEO
        title="Tour por el Palacio Imperial de Tokio en Español | Guía Privado"
        description="Visita los Jardines del Este del Palacio Imperial y Marunouchi con un guía japonés nativo en español. Historia y modernidad de Tokio en 2.5 horas. Desde ¥25,000."
        canonicalPath="/es/tours/imperial-palace"
        hreflang={[
          { lang: "en", path: "/tours/imperial-palace" },
          { lang: "es", path: "/es/tours/imperial-palace" },
          { lang: "x-default", path: "/tours/imperial-palace" },
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
              Tour Privado del Palacio Imperial y Marunouchi con Guía en Español
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Recorre siglos de historia en los Jardines del Este del Palacio Imperial y contrástalo con los relucientes rascacielos de Marunouchi. Este tour equilibra perfectamente el patrimonio imperial de Tokio con su papel como capital empresarial moderna.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: imperialPalace, alt: "Jardines del Este del Palacio Imperial con paisajismo japonés tradicional" },
              { src: imperialBridge, alt: "Puente Nijubashi en el Palacio Imperial, icono de Tokio" },
              { src: tokyoStation, alt: "Edificio histórico de ladrillo rojo de la estación de Tokio en Marunouchi" },
            ].map((img) => (
              <div key={img.alt} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={600} height={450} />
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
                    "Jardines del Este del Palacio Imperial: hermosos jardines japoneses",
                    "Cimientos históricos del castillo y fosos",
                    "Puente Nijubashi: el icónico puente doble",
                    "Arquitectura del distrito empresarial de Marunouchi",
                    "Edificio restaurado de ladrillo rojo de la estación de Tokio",
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
                    { time: "10:00", activity: "Encuentro en la estación de Tokio, salida norte de Marunouchi" },
                    { time: "10:15", activity: "Plaza del Palacio Imperial y puente Nijubashi" },
                    { time: "10:45", activity: "Exploración e historia de los Jardines del Este" },
                    { time: "11:30", activity: "Antiguos terrenos del castillo y murallas de piedra" },
                    { time: "12:00", activity: "Distrito de Marunouchi y arquitectura moderna" },
                    { time: "12:20", activity: "Recorrido por el edificio de la estación de Tokio" },
                    { time: "12:30", activity: "Fin del tour en la estación de Tokio" },
                  ].map((item) => (
                    <div key={item.time} className="flex gap-4 items-start">
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
                    "Guía con licencia oficial que habla español",
                    "Información sobre historia japonesa y cultura imperial",
                    "Consejos de fotografía en jardines y arquitectura",
                    "Recomendaciones de restaurantes locales",
                    "Puntos de interés de temporada (cerezos en flor, hojas de otoño)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-section text-foreground mb-6">Ideal Para</h2>
                <ul className="space-y-3">
                  {[
                    "Entusiastas de la historia",
                    "Visitantes primerizos en Tokio",
                    "Quienes buscan jardines urbanos tranquilos",
                    "Amantes de la arquitectura",
                    "Entusiastas de la fotografía",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-6 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground">Desde</span>
                  <p className="text-3xl font-serif font-semibold text-foreground">¥25,000</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">2.5 horas</p>
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
                      <p className="text-sm text-muted-foreground">Estación de Tokio, Salida Norte Marunouchi</p>
                    </div>
                  </div>
                </div>
                <Link to="/es/contact" className="btn-accent w-full text-center" data-cta="book-now" onClick={() => trackBookNowClick("Reservar Este Tour")}>
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
            data-cta="book-now"
            onClick={() => trackBookNowClick("Reservar Ahora")}
          >
            Reservar Ahora
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Guía con licencia · Tour privado
          </p>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">¿Listo para Explorar el Palacio Imperial?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Reserva tu tour privado con un guía japonés nativo que habla español.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/contact" className="btn-accent" data-cta="book-now" onClick={() => trackBookNowClick("Reservar Mi Tour")}>Reservar Mi Tour</Link>
            <Link to="/es" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">Ver Todos los Tours</Link>
          </div>
        </div>
      </section>
      <StickyBookingBar tourName="Tour del Palacio Imperial y Marunouchi" price="¥25,000" />
    </Layout>
  );
};

export default EsImperialPalace;
