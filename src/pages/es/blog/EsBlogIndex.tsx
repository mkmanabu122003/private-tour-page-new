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
  image: string;
}

const blogPosts: BlogPost[] = [
  // Guías de Barrios de Tokio
  {
    slug: "asakusa-tokio-guia",
    title: "Asakusa: Qué Ver, Qué Evitar y Cómo Ir Antes Que los Turistas",
    description:
      "Asakusa recibe millones de turistas al año, pero a las 7am es otro mundo. Un guía local te enseña cómo vivir el barrio como un habitante.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
    image: "/images/blog/asakusa-guide-hero.webp",
  },
  {
    slug: "guia-shibuya-harajuku",
    title: "Shibuya y Harajuku: Guía Local del Tokio Moderno",
    description:
      "Explora Shibuya y Harajuku como un local. Cruce de Shibuya, calle Takeshita, cafés escondidos y los mejores puntos fotográficos.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
    image: "/images/blog/shibuya-harajuku-guide-hero.webp",
  },
  {
    slug: "guia-shinjuku",
    title: "Guía de Shinjuku: El Corazón de Neón de Tokio",
    description:
      "Navega Shinjuku como un local. Golden Gai, Omoide Yokocho, Kabukicho, Shinjuku Gyoen y los mejores lugares donde comer.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
    image: "/images/blog/shinjuku-guide-hero.webp",
  },
  {
    slug: "mercado-tsukiji-tokio",
    title: "Mercado de Tsukiji en Tokio: Qué Queda y Qué Vale la Pena Ver en 2026",
    description:
      "El mercado interior de Tsukiji cerró en 2018. ¿Qué hay ahora? Un guía oficial explica qué sigue abierto, qué comer y por qué aún vale la visita.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
    image: "/images/blog/tsukiji-outer-market-entrance.webp",
  },
  {
    slug: "yanaka-tokio-itinerario",
    title: "Yanaka, el Tokio Auténtico: Ruta de 3 Horas con un Guía Japonés",
    description:
      "Yanaka es el barrio que sobrevivió a los bombardeos de la guerra. Un guía oficial te lleva por sus calles, templos y la vida que desapareció del resto de Tokio.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
    image: "/images/blog/yanaka-ginza-shopping-street.webp",
  },
  {
    slug: "shitamachi-tokio",
    title: "El Tokio de Antes: Guía del Shitamachi para Viajeros Curiosos",
    description:
      "Shitamachi significa \"ciudad baja\". Es el Tokio que sobrevivió, el que los japoneses ya casi olvidaron. Un guía te lo explica y te lleva por él.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
    image: "/images/tours/asakusa-backstreet-local.webp",
  },
  // Guías de Excursiones
  {
    slug: "comparativa-excursiones",
    title: "Kamakura vs Hakone vs Nikko: ¿Qué Excursión Elegir?",
    description:
      "¿No puedes decidir entre Kamakura, Hakone o Nikko? Un guía local compara tiempo de viaje, puntos destacados y para quién es mejor cada excursión.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Excursiones",
    image: "/images/blog/hakone-fuji-comparison.webp",
  },
  {
    slug: "excursion-nikko-desde-tokio",
    title: "Excursión a Nikko desde Tokio: Guía Completa 2026",
    description:
      "Cómo ir a Nikko desde Tokio, cuánto tarda, qué ver y si vale la pena ir con guía o solo. Todo lo que necesitas saber antes de salir.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Excursiones",
    image: "/images/blog/nikko-toshogu-hero.webp",
  },
  {
    slug: "kamakura-desde-tokio",
    title: "Kamakura desde Tokio: Lo Que Nadie Te Cuenta Antes de Ir",
    description:
      "Kamakura en un día desde Tokio: el Gran Buda, los templos, la comida y los errores que cometen casi todos los turistas. Guía 2026.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Excursiones",
    image: "/images/tours/kamakura-great-buddha.webp",
  },
  {
    slug: "monte-fuji-se-ve-desde-tokio",
    title: "¿Se Ve el Monte Fuji desde Tokio? Cuándo, Desde Dónde y Cómo",
    description:
      "Sí, se puede ver el Monte Fuji desde Tokio. Un guía local te dice los mejores puntos, las horas y la época del año para verlo con claridad.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Excursiones",
    image: "/images/tours/hakone-pirate-ship-ashi.webp",
  },
  // Planifica tu Viaje
  {
    slug: "itinerario-tokio-3-dias",
    title: "El Itinerario Perfecto de 3 Días por Tokio, Por un Guía Local",
    description:
      "Planifica 3 días perfectos en Tokio con consejos de un guía local con licencia. Asakusa, Shibuya, Tsukiji, excursiones y joyas ocultas.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Planifica tu Viaje",
    image: "/images/tours/shibuya-crossing-tokyo.webp",
  },
  {
    slug: "itinerario-tokio-5-dias",
    title: "Itinerario Tokio 5 Días: La Ruta Que Yo Haría Como Guía",
    description:
      "El itinerario de Tokio para 5 días que recomiendo a mis clientes: barrios, comida, transporte y los errores que evitar en cada día.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Planifica tu Viaje",
    image: "/images/tours/shibuya-scramble-crossing.webp",
  },
  {
    slug: "mejor-epoca-visitar-tokio",
    title: "Mejor Época para Visitar Tokio: Guía Mes a Mes",
    description:
      "¿Cuándo visitar Tokio? Un guía local analiza el clima, eventos, multitudes y costes de cada mes para planificar el viaje perfecto.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Planifica tu Viaje",
    image: "/images/blog/meiji-shrine-forest.webp",
  },
  {
    slug: "japan-rail-pass-vale-la-pena",
    title: "Japan Rail Pass 2026: ¿Vale la Pena? La Respuesta Honesta de un Guía",
    description:
      "¿Comprar el JR Pass o no? Un guía oficial japonés hace los cálculos reales según tu itinerario y te dice cuándo conviene y cuándo no.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Planifica tu Viaje",
    image: "/images/tours/hakone-lake-ashi-fuji.webp",
  },
  {
    slug: "etiqueta-templos-santuarios",
    title: "Etiqueta en Templos y Santuarios de Japón: Guía Completa",
    description:
      "¿Visitas templos y santuarios en Japón? Aprende la etiqueta esencial: cómo rezar, purificarte e inclinarte con respeto.",
    date: "25 de febrero de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Planifica tu Viaje",
    image: "/images/tours/senso-ji-temple-tokyo.webp",
  },
  // Cultura Japonesa
  {
    slug: "propinas-en-japon",
    title: "Propinas en Japón: Lo Que Necesitas Saber",
    description:
      "En Japón no es costumbre dejar propina. La mayoría de japoneses no están acostumbrados a recibirla y pueden sentirse confundidos. Un guía oficial explica por qué y cómo mostrar agradecimiento.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Cultura Japonesa",
    image: "/images/tours/asakusa-kaminarimon-gate.webp",
  },
  {
    slug: "templos-famosos-japon",
    title: "Los Templos Más Famosos de Japón: Guía para Entenderlos de Verdad",
    description:
      "Senso-ji, Fushimi Inari, Kinkaku-ji... Un guía oficial explica qué ver, cómo comportarse y qué significa cada elemento en los templos japoneses.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Cultura Japonesa",
    image: "/images/blog/asakusa-sensoji-pagoda.webp",
  },
  // Gastronomía Japonesa
  {
    slug: "que-comer-en-japon",
    title: "Qué Comer en Japón: 15 Platos Que No Puedes Perderte",
    description:
      "Lista definitiva de comida japonesa imprescindible. Un guía oficial con 500+ tours te dice qué pedir, dónde y en qué orden probarlos.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Gastronomía Japonesa",
    image: "/images/tours/food-tour-izakaya.webp",
  },
  {
    slug: "comida-callejera-tokio",
    title: "Comida Callejera en Tokio: Lo Que Come un Guía Local",
    description:
      "Takoyaki, yakitori, taiyaki... Un guía oficial de Tokio te lleva por los mejores puestos de comida callejera en Asakusa, Yanaka y más.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Gastronomía Japonesa",
    image: "/images/tours/tsukiji-street-food.webp",
  },
  {
    slug: "tsukiji-2026",
    title: "Tsukiji en 2026: Mi Ruta Gastronómica Como Guía Local",
    description:
      "Un guía oficial de Tokio comparte su ruta personal por el mercado de Tsukiji en 2026: qué puestos visitar, qué probar primero y cómo comer como un japonés.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Gastronomía Japonesa",
    image: "/images/blog/tsukiji-tamagoyaki.webp",
  },
  // Guías Útiles
  {
    slug: "vale-la-pena-guia-privado-tokio",
    title: "¿Vale la Pena un Guía Privado en Tokio? Mi Respuesta Sin Rodeos",
    description:
      "¿Necesitas un guía privado en Tokio o puedes ir solo? Un guía oficial con 500+ tours te da su respuesta honesta, con ejemplos reales de sus clientes.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías Útiles",
    image: "/images/tour-photos/photo1.webp",
  },
  {
    slug: "cuanto-cuesta-guia-privado-tokio",
    title: "¿Cuánto Cuesta Contratar un Guía Privado en Tokio? Precios Reales 2026",
    description:
      "Precios reales de guías privados en Tokio: desde guías sin licencia hasta intérpretes oficiales. Qué incluye, qué no, y cómo elegir bien.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías Útiles",
    image: "/images/tour-photos/group-photo.webp",
  },
  {
    slug: "primera-vez-tokio-guia-local",
    title: "Primera Vez en Tokio: Lo Que Cambia Tener un Guía Local",
    description:
      "¿Tu primer viaje a Tokio? Un guía local te cuenta cómo es un día real con guía, cuándo merece la pena y cuándo puedes ir solo.",
    date: "14 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías Útiles",
    image: "/images/tours/asakusa-kaminarimon-morning.webp",
  },
  // Gastronomía Japonesa (new)
  {
    slug: "tour-gastronomico-tokio",
    title: "Tour Gastronómico en Tokio: Lo Que Nadie Te Cuenta (Guía Local)",
    description:
      "¿Tour de comida en Tokio o explorar solo? Un guía que habla español te cuenta qué esperar, cuánto cuesta y cuándo merece la pena.",
    date: "14 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Gastronomía Japonesa",
    image: "/images/tours/food-tour-tsukiji.webp",
  },
];

const categories = [
  "Guías de Barrios de Tokio",
  "Guías de Excursiones",
  "Planifica tu Viaje",
  "Cultura Japonesa",
  "Gastronomía Japonesa",
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
            <h1 className="heading-display text-foreground">Blog: Consejos de un Guía Local en Tokio</h1>
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
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          width={600}
                          height={338}
                        />
                      </div>
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
