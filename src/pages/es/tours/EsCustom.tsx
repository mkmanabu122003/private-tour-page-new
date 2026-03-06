// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import hamarikyu from "@/assets/hamarikyu.jpg";

const EsCustom = () => {
  return (
    <Layout>
      <SEO
        title="Tour Privado Personalizado en Tokio en Español | Diseña tu Itinerario"
        description="Diseña tu tour perfecto en Tokio con Manabu, guía japonés nativo con licencia oficial. Itinerario 100% personalizado según tus intereses. Desde ¥10,000/hora."
        canonicalPath="/es/tours/custom"
        hreflang={[
          { lang: "en", path: "/tours/custom" },
          { lang: "es", path: "/es/tours/custom" },
          { lang: "x-default", path: "/tours/custom" },
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
              Tour Privado Personalizado — Tu Tokio, a Tu Manera
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Cuéntame tus intereses y crearé un itinerario personalizado solo para ti. Ya sea que te apasione la gastronomía, la historia, el anime, la fotografía o algo completamente único — diseñemos juntos tu día perfecto en Tokio.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-section">
          <div className="aspect-[16/9] max-w-2xl rounded-lg overflow-hidden">
            <img src={hamarikyu} alt="Jardines Hamarikyu con casa de té y horizonte de Tokio" className="w-full h-full object-cover" />
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
                    "Itinerario personalizado según tus intereses",
                    "Horarios y ritmo flexibles",
                    "Acceso a lugares locales que no están en las guías",
                    "Intereses especiales: gastronomía, anime, fotografía, historia",
                    "Posibilidad de combinar múltiples zonas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-section text-foreground mb-6">Cómo Funciona</h2>
                <div className="space-y-4">
                  {[
                    { time: "Flexible", activity: "Encuentro en tu ubicación preferida" },
                    { time: "", activity: "Exploración según tu itinerario personalizado" },
                    { time: "", activity: "Almuerzo en restaurantes locales seleccionados a mano" },
                    { time: "", activity: "Continúa explorando tus intereses" },
                    { time: "", activity: "Fin del tour en una ubicación conveniente" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      {item.time && <span className="text-sm font-medium text-accent min-w-[60px]">{item.time}</span>}
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
                    "Planificación personalizada del itinerario",
                    "Recomendaciones locales privilegiadas",
                    "Ritmo y horario flexibles",
                    "Asistencia con reservas en restaurantes",
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
                    "Cualquiera con intereses específicos",
                    "Quienes buscan experiencias fuera de lo común",
                    "Ocasiones especiales y celebraciones",
                    "Viajeros de negocios con tiempo limitado",
                    "Familias con necesidades únicas",
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
                  <p className="text-3xl font-serif font-semibold text-foreground">¥10,000/hora</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duración</p>
                      <p className="text-sm text-muted-foreground">Flexible (3-8 horas)</p>
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
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Punto de encuentro</p>
                      <p className="text-sm text-muted-foreground">A tu elección</p>
                    </div>
                  </div>
                </div>
                <Link to="/es/contact" className="btn-accent w-full text-center">
                  Solicitar Tour Personalizado
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">¿Listo para Diseñar tu Tour Perfecto?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Cuéntanos tus intereses y crearemos un itinerario único solo para ti.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/contact" className="btn-accent">Contactar</Link>
            <Link to="/es/" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">Ver Tours Disponibles</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EsCustom;
