// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { StickyBookingBar } from "@/components/tours/StickyBookingBar";
import { trackBookNowClick, trackTourPageView } from "@/lib/ga4";

const EsShibuyaHarajuku = () => {
  useEffect(() => { trackTourPageView("Tour Privado por Shibuya y Harajuku"); }, []);

  return (
    <Layout>
      <SEO
        title="Tour por Shibuya y Harajuku en Español | Guía Japonés Nativo | Tokio"
        description="Recorre el famoso cruce de Shibuya y las calles de Harajuku con un guía japonés nativo en español. Santuario Meiji incluido. Tour privado 3.5 horas desde ¥50,000."
        canonicalPath="/es/tours/shibuya-harajuku"
        hreflang={[
          { lang: "en", path: "/tours/shibuya-harajuku" },
          { lang: "es", path: "/es/tours/shibuya-harajuku" },
          { lang: "x-default", path: "/tours/shibuya-harajuku" },
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
              Tour Privado por Shibuya y Harajuku con Guía en Español
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sumérgete en el corazón del Tokio moderno donde la moda, la tecnología y la tradición coexisten. Desde el cruce peatonal más transitado del mundo hasta los tranquilos jardines del santuario, este tour muestra la energía dinámica de Tokio y sus contrastes culturales.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/tours/shibuya-scramble-crossing.webp", alt: "Cruce de Shibuya - la intersección más famosa de Tokio" },
              { src: "/images/tours/harajuku-takeshita-street.webp", alt: "Calle Takeshita en Harajuku - centro de la cultura juvenil de Tokio" },
              { src: "/images/tours/meiji-shrine-torii-gate.webp", alt: "Entrada al Santuario Meiji - contraste pacífico con el bullicioso Harajuku" },
            ].map((img) => (
              <div key={img.src} className="aspect-[4/3] rounded-lg overflow-hidden">
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
                    "Cruce de Shibuya: el cruce peatonal más transitado del mundo",
                    "Estatua de Hachiko: el punto de encuentro más famoso de Tokio",
                    "Calle Takeshita en Harajuku: paraíso de la moda adolescente",
                    "Santuario Meiji: oasis de paz en la ciudad",
                    "Omotesando: los Campos Elíseos de Tokio",
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
                    { time: "10:30", activity: "Encuentro en la estatua de Hachiko, estación de Shibuya" },
                    { time: "10:45", activity: "Experiencia del cruce de Shibuya y puntos de observación" },
                    { time: "11:15", activity: "Paseo a Harajuku por Omotesando" },
                    { time: "11:45", activity: "Exploración de la calle Takeshita y moda de Harajuku" },
                    { time: "12:30", activity: "Visita al Santuario Meiji y paseo por el bosque" },
                    { time: "13:45", activity: "Arquitectura y boutiques de Omotesando" },
                    { time: "14:00", activity: "Fin del tour en la estación de Harajuku/Omotesando" },
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
                    "Información sobre cultura juvenil y moda",
                    "Guía de etiqueta en santuarios",
                    "Oportunidades fotográficas en lugares emblemáticos",
                    "Recomendaciones de cafés y restaurantes de moda",
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
                    "Visitantes primerizos en Tokio",
                    "Entusiastas de la moda y cultura pop",
                    "Familias con adolescentes",
                    "Amantes de la fotografía",
                    "Interesados en la cultura japonesa moderna",
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
                  <p className="text-3xl font-serif font-semibold text-foreground">¥50,000</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">3.5 horas</p>
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
                      <p className="text-sm text-muted-foreground">10:30 AM o 2:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Punto de encuentro</p>
                      <p className="text-sm text-muted-foreground">Estación de Shibuya, Salida Hachiko</p>
                    </div>
                  </div>
                </div>
                <Link to="/es/contact" className="btn-accent w-full text-center" data-cta="book-now-tour-sidebar" onClick={() => trackBookNowClick("Reservar Este Tour", "tour-sidebar")}>
                  Reservar Este Tour
                  <ArrowRight className="btn-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-section text-foreground mb-8">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">¿Veremos el cruce de Shibuya desde arriba?</h3>
                <p className="text-muted-foreground leading-relaxed">¡Sí! Tu guía te llevará a los mejores puntos de observación para ver y fotografiar el famoso cruce desde lo alto.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">¿Este tour es adecuado para adolescentes?</h3>
                <p className="text-muted-foreground leading-relaxed">Sin duda, este es uno de nuestros tours más populares para familias con adolescentes. La escena de moda de Harajuku, las crepas y la cultura pop lo convierten en una experiencia inolvidable.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">¿Se visita el Santuario Meiji en este tour?</h3>
                <p className="text-muted-foreground leading-relaxed">Sí. El Santuario Meiji ofrece un contraste sereno con el bullicioso Harajuku y es uno de los puntos destacados del tour. Caminamos por el sendero arbolado y explicamos los rituales sintoístas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Veremos el cruce de Shibuya desde arriba?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "¡Sí! Tu guía te llevará a los mejores puntos de observación para ver y fotografiar el famoso cruce desde lo alto."
                }
              },
              {
                "@type": "Question",
                "name": "¿Este tour es adecuado para adolescentes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sin duda, este es uno de nuestros tours más populares para familias con adolescentes. La escena de moda de Harajuku, las crepas y la cultura pop lo convierten en una experiencia inolvidable."
                }
              },
              {
                "@type": "Question",
                "name": "¿Se visita el Santuario Meiji en este tour?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. El Santuario Meiji ofrece un contraste sereno con el bullicioso Harajuku y es uno de los puntos destacados del tour. Caminamos por el sendero arbolado y explicamos los rituales sintoístas."
                }
              }
            ]
          })
        }}
      />

      {/* Inline Booking CTA */}
      <section className="py-12 bg-accent/5 border-y border-accent/10">
        <div className="container-section text-center">
          <p className="text-lg sm:text-xl font-semibold text-foreground">
            ¿Listo para reservar? Asegura tu tour privado →
          </p>
          <Link
            to="/es/contact"
            className="btn-accent-lg mt-6"
            data-cta="book-now-tour-inline"
            onClick={() => trackBookNowClick("Reservar Ahora", "tour-inline")}
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
          <h2 className="heading-section">¿Listo para Explorar Shibuya y Harajuku?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Reserva tu tour privado con un guía japonés nativo que habla español.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/contact" className="btn-accent" data-cta="book-now-tour-footer" onClick={() => trackBookNowClick("Reservar Mi Tour", "tour-footer")}>Reservar Mi Tour</Link>
            <Link to="/es" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-300 ease-out hover:bg-primary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50">Ver Todos los Tours</Link>
          </div>
        </div>
      </section>
      <StickyBookingBar tourName="Tour Privado por Shibuya y Harajuku" price="¥50,000" />
    </Layout>
  );
};

export default EsShibuyaHarajuku;
