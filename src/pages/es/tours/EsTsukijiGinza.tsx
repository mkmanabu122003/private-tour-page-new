// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsTsukijiGinza = () => {
  return (
    <Layout>
      <SEO
        title="Tour por Tsukiji y Ginza en Español | Gastronomía y Lujo en Tokio"
        description="Descubre el mercado exterior de Tsukiji y el elegante barrio de Ginza con un guía japonés nativo en español. Gastronomía local e historia en 3 horas. Desde ¥30,000."
        canonicalPath="/es/tours/tsukiji-ginza"
        hreflang={[
          { lang: "en", path: "/tours/tsukiji-ginza" },
          { lang: "es", path: "/es/tours/tsukiji-ginza" },
          { lang: "x-default", path: "/tours/tsukiji-ginza" },
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
              Tour Privado por Tsukiji y Ginza con Guía en Español
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Experimenta dos caras de Tokio en un solo tour. Empieza en el bullicioso Mercado Exterior de Tsukiji con mariscos frescos y delicias locales, y luego pasea por el sofisticado Ginza con sus tiendas de lujo, galerías de arte y joyas arquitectónicas.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/tours/tsukiji-outer-market.jpg", alt: "Mercado Exterior de Tsukiji - tour gastronómico privado en Tokio" },
              { src: "/images/tours/tsukiji-street-food.jpg", alt: "Brochetas de mariscos frescos en el Mercado de Tsukiji" },
              { src: "/images/tours/ginza-shopping-district.jpg", alt: "Distrito de compras de lujo de Ginza" },
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
                    "Mercado Exterior de Tsukiji: mariscos frescos y comida callejera",
                    "Degustaciones locales: delicias japonesas de temporada",
                    "Distrito de compras de Ginza: desde marcas de lujo hasta tiendas tradicionales",
                    "Teatro histórico Kabuki-za",
                    "Callejones escondidos e izakayas locales",
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
                    { time: "9:00", activity: "Encuentro en la estación de Tsukiji" },
                    { time: "9:15", activity: "Exploración del Mercado Exterior de Tsukiji y degustaciones" },
                    { time: "10:15", activity: "Paseo por el Templo Tsukiji Honganji" },
                    { time: "10:45", activity: "Recorrido arquitectónico por la calle principal de Ginza" },
                    { time: "11:15", activity: "Tiendas tradicionales y grandes almacenes" },
                    { time: "11:45", activity: "Callejones escondidos y joyas locales" },
                    { time: "12:00", activity: "Fin del tour en la estación de Ginza" },
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
                    "Degustaciones en el mercado (valor ¥500-800)",
                    "Recomendaciones de compras y restaurantes",
                    "Información cultural sobre la gastronomía japonesa",
                    "Asistencia fotográfica en lugares clave",
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
                    "Amantes de la gastronomía",
                    "Entusiastas de las compras",
                    "Interesados en la cocina japonesa",
                    "Entusiastas de la fotografía",
                    "Amantes de la cultura y la historia",
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
                      <p className="text-sm text-muted-foreground">9:00 AM o 1:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Punto de encuentro</p>
                      <p className="text-sm text-muted-foreground">Estación de Tsukiji, Salida A1</p>
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

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">¿Listo para Explorar Tsukiji y Ginza?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Reserva tu tour privado con un guía japonés nativo que habla español.
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

export default EsTsukijiGinza;
