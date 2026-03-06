// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  // Guías de Barrios de Tokio
  {
    slug: "guia-asakusa",
    title: "Guía de Asakusa — Qué Ver Más Allá del Templo Senso-ji",
    description:
      "Consejos de un guía local para explorar Asakusa. Más allá del Senso-ji: santuarios escondidos, comida callejera y los mejores horarios para visitar.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
  },
  {
    slug: "guia-shibuya-harajuku",
    title: "Shibuya y Harajuku — Guía Local del Tokio Moderno",
    description:
      "Explora Shibuya y Harajuku como un local. Cruce de Shibuya, calle Takeshita, cafés escondidos y los mejores puntos fotográficos.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
  },
  {
    slug: "guia-shinjuku",
    title: "Guía de Shinjuku — El Corazón de Neón de Tokio",
    description:
      "Navega Shinjuku como un local. Golden Gai, Omoide Yokocho, Kabukicho, Shinjuku Gyoen y los mejores lugares donde comer.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
  },
  {
    slug: "guia-tsukiji",
    title: "Guía de Tsukiji para Amantes de la Gastronomía",
    description:
      "Guía local del Mercado Exterior de Tsukiji. Qué comer, qué evitar, mejores horarios y cómo combinarlo con Ginza.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
  },
  // Guías de Excursiones
  {
    slug: "comparativa-excursiones",
    title: "Kamakura vs Hakone vs Nikko — ¿Qué Excursión Elegir?",
    description:
      "¿No puedes decidir entre Kamakura, Hakone o Nikko? Un guía local compara tiempo de viaje, puntos destacados y para quién es mejor cada excursión.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Excursiones",
  },
  // Planifica tu Viaje
  {
    slug: "itinerario-tokio-3-dias",
    title: "El Itinerario Perfecto de 3 Días por Tokio — Por un Guía Local",
    description:
      "Planifica 3 días perfectos en Tokio con consejos de un guía local con licencia. Asakusa, Shibuya, Tsukiji, excursiones y joyas ocultas.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Planifica tu Viaje",
  },
  {
    slug: "mejor-epoca-visitar-tokio",
    title: "Mejor Época para Visitar Tokio — Guía Mes a Mes",
    description:
      "¿Cuándo visitar Tokio? Un guía local analiza el clima, eventos, multitudes y costes de cada mes para planificar el viaje perfecto.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Planifica tu Viaje",
  },
  {
    slug: "etiqueta-templos-santuarios",
    title: "Etiqueta en Templos y Santuarios de Japón — Guía Completa",
    description:
      "¿Visitas templos y santuarios en Japón? Aprende la etiqueta esencial — cómo rezar, purificarte e inclinarte con respeto.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Planifica tu Viaje",
  },
  // Guías Útiles
  {
    slug: "vale-la-pena-contratar-guia",
    title: "¿Vale la Pena Contratar un Guía Turístico Privado en Tokio?",
    description:
      "¿Merece la pena un guía privado en Tokio? Un guía con licencia explica cuándo tiene sentido, qué obtienes y quién se beneficia más.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías Útiles",
  },
];

const categories = [
  "Guías de Barrios de Tokio",
  "Guías de Excursiones",
  "Planifica tu Viaje",
  "Guías Útiles",
];

const EsBlogIndex = () => {
  return (
    <Layout>
      <SEO
        title="Blog de Viajes por Tokio en Español | Consejos de un Guía Local"
        description="Guías de barrios, itinerarios y consejos para visitar Tokio escritos por Manabu, guía japonés nativo con licencia oficial. Planifica tu viaje con conocimiento local."
        canonicalPath="/es/blog"
        hreflang={[
          { lang: "en", path: "/blog" },
          { lang: "es", path: "/es/blog" },
          { lang: "x-default", path: "/blog" },
        ]}
      />

      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">De Tu Guía</p>
            <h1 className="heading-display text-foreground">Blog — Consejos de un Guía Local en Tokio</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Consejos de viaje, itinerarios y recomendaciones desde dentro para
              planificar la experiencia perfecta en Tokio.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts by Category */}
      <section className="py-16">
        <div className="container-section">
          {categories.map((category) => {
            const postsInCategory = blogPosts.filter(
              (post) => post.category === category
            );
            if (postsInCategory.length === 0) return null;
            return (
              <div key={category} className="mb-16 last:mb-0">
                <h2 className="heading-section text-foreground mb-8">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {postsInCategory.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/es/blog/${post.slug}`}
                      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="p-6">
                        <p className="text-label text-accent mb-2">
                          {post.category}
                        </p>
                        <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors mb-3">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-accent font-medium text-sm">
                          <span>Leer Artículo</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">¿Listo para Explorar Tokio?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Convierte estos consejos de viaje en experiencias reales con un tour privado guiado.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/tours" className="btn-accent">
              Ver Tours
            </Link>
            <Link
              to="/es/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EsBlogIndex;
