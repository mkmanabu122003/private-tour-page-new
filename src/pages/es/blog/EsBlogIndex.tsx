// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ArrowUp, Calendar, Sparkles, User } from "lucide-react";
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
    slug: "guia-tsukiji",
    title: "Guía del Mercado de Tsukiji 2026: Sí, Sigue Abierto (Horarios y Consejos)",
    description:
      "Guía actualizada del mercado exterior de Tsukiji con más de 460 puestos. Horarios, qué comer, precios y cómo combinarlo con Ginza. Por un guía local con licencia.",
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
    slug: "tesoros-ocultos-tokio",
    title: "Tokio Secreto: Lugares Fuera de lo Común con un Guía Local (2026)",
    description:
      "Después de más de 500 tours, estos son los rincones de Tokio a los que vuelvo una y otra vez — desde Yanaka hasta los izakayas de Shinbashi.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
    image: "/images/blog/asakusa-hidden-shrine.webp",
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
    slug: "hakone-vs-nikko-excursion",
    title: "Hakone vs Nikko: ¿Qué Excursión Desde Tokio Elegir? (2026)",
    description:
      "Hakone (aguas termales, vistas al Monte Fuji, logística sencilla) o Nikko (templos UNESCO, cascadas, historia)? Una guía con licencia de Tokio compara ambas excursiones por coste, tiempo y tipo de viajero.",
    date: "9 de mayo de 2026",
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
  {
    slug: "nikko-con-guia-vs-solo",
    title: "Nikko desde Tokio 2026: ¿Con Guía o por tu Cuenta? Comparativa Real",
    description:
      "Nikko en un día: unos ¥12,000 por tu cuenta en transporte público vs ¥80,000 con guía privado. Un guía con licencia compara coste, idioma y qué se ve en cada opción.",
    date: "20 de abril de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Excursiones",
    image: "/images/blog/nikko-toshogu-hero.webp",
  },
  {
    slug: "kamakura-con-guia-vs-solo",
    title: "Kamakura desde Tokio 2026: ¿Con Guía o por tu Cuenta? Comparativa Real",
    description:
      "Kamakura en un día: unos ¥4,000 por tu cuenta vs ¥70,000 con guía privado. Un guía con licencia compara los templos que casi nadie visita y cuándo compensa realmente ir con guía.",
    date: "20 de abril de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Excursiones",
    image: "/images/tours/kamakura-great-buddha.webp",
  },
  {
    slug: "guia-licencia-oficial-japon",
    title: "Guía con Licencia Oficial en Japón: Qué Significa y Por Qué Importa",
    description:
      "En Japón existe un examen nacional para guías turísticos. Qué diferencia a un guía con licencia de uno sin ella, y por qué debería importarte.",
    date: "7 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías Útiles",
    image: "/images/tour-photos/tour-photo-1.webp",
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
    image: "/images/blog/tipping-japan-hero.webp",
  },
  {
    slug: "tour-gratis-vs-guia-privado-tokio",
    title: "Tour Gratis vs Guía Privado en Tokio: Las Cuentas Reales (2026)",
    description:
      "Los tours gratis en Tokio esperan ¥1.000–2.000 de propina por persona. Un guía privado con licencia cuesta ¥45.000 por grupo. Cuándo elegir cada uno.",
    date: "30 de abril de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías Útiles",
    image: "/images/tour-photos/sumida-river-group-selfie.webp",
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
  // Comida y Vida Nocturna
  {
    slug: "guia-izakayas-tokio",
    title: "Guía de Izakayas en Tokio: Dónde Bebe un Guía Local",
    description:
      "Un guía oficial de Tokio te revela los callejones de izakayas, las costumbres para pedir y los bares ocultos que no encontrarías solo. Golden Gai, Omoide Yokocho, Yurakucho y más.",
    date: "13 de abril de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Gastronomía Japonesa",
    image: "/images/tours/night-tour-omoide-yokocho.webp",
  },
  // Gastronomía Japonesa (new)
  {
    slug: "ruta-gastronomica-tsukiji-ginza",
    title: "De Tsukiji a Ginza: La Ruta Gastronómica Que Hacen los Locales de Tokio",
    description:
      "Una ruta a pie de 3 horas desde el mercado de Tsukiji hasta los izakayas bajo las vías en Yurakucho y Shinbashi. Las paradas que realmente hacen los tokiotas.",
    date: "14 de marzo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Gastronomía Japonesa",
    image: "/images/blog/tsukiji-food-guide-hero.webp",
  },
  {
    slug: "de-ginza-a-tsukiji-a-pie",
    title: "De Ginza a Tsukiji a Pie 2026: 3 Rutas Comparadas",
    description:
      "Camina de Ginza a Tsukiji en 15 min por Harumi-dori, pasando por el Teatro Kabukiza y Tsukiji Hongan-ji. Guía local con 3 rutas, salidas y horarios.",
    date: "9 de mayo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Guías de Barrios de Tokio",
    image: "/images/blog/ginza-shopping-street.webp",
  },
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
  {
    slug: "toyosu-vs-ueno-mercado-pescado",
    title: "Toyosu vs Mercado de Ueno: ¿Qué Mercado de Pescado de Tokio Visitar?",
    description:
      "Toyosu (mercado mayorista real con subasta de atún) vs Ameyoko en Ueno (calle abierta con puestos de marisco e izakayas). Un guía con licencia compara ambos.",
    date: "9 de mayo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Gastronomía Japonesa",
    image: "/images/blog/toyosu-senkyaku-banrai.webp",
  },
  {
    slug: "tsukiji-mercado-exterior-vs-interior",
    title: "Mercado Exterior vs Interior de Tsukiji: ¿Cuál Es la Diferencia?",
    description:
      "El mercado interior se trasladó a Toyosu en octubre de 2018; el exterior con 460+ puestos sigue en Tsukiji. Un guía con licencia explica qué cambió.",
    date: "9 de mayo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Gastronomía Japonesa",
    image: "/images/blog/tsukiji-outer-market-entrance.webp",
  },
  {
    slug: "toyosu-vs-tsukiji-exterior",
    title: "Mercado de Toyosu vs Mercado Exterior de Tsukiji: ¿Cuál Visitar en 2026?",
    description:
      "Toyosu (mayorista moderno con subasta de atún) vs Mercado Exterior de Tsukiji (460+ puestos en 2026). Comparativa con horarios, precios y plan de mañana combinada.",
    date: "9 de mayo de 2026",
    author: "Manabu, Guía con Licencia",
    category: "Gastronomía Japonesa",
    image: "/images/blog/tsukiji-fresh-tuna-display.webp",
  },
];

// Orden = etapa del embudo. Decisión primero (mayor CV según inventario),
// planificación general al final.
const categories = [
  "Guías Útiles",
  "Guías de Excursiones",
  "Guías de Barrios de Tokio",
  "Gastronomía Japonesa",
  "Cultura Japonesa",
  "Planifica tu Viaje",
] as const;

type CategoryName = (typeof categories)[number];

const CATEGORY_META: Record<CategoryName, { anchor: string; description: string }> = {
  "Guías Útiles": {
    anchor: "para-decidir",
    description:
      "¿Vale la pena un guía? ¿Cuánto cuesta? Respuestas honestas de un guía oficial antes de reservar.",
  },
  "Guías de Excursiones": {
    anchor: "excursiones",
    description:
      "Kamakura, Hakone, Nikko y más — compara excursiones desde Tokio y elige la que vale tu día.",
  },
  "Guías de Barrios de Tokio": {
    anchor: "barrios-tokio",
    description:
      "Guías de Asakusa, Shibuya, Yanaka, Shinjuku y otros barrios, escritas por un guía que recorre estas calles a diario.",
  },
  "Gastronomía Japonesa": {
    anchor: "gastronomia",
    description:
      "Dónde come y bebe un local de Tokio — sushi, ramen, izakayas y los mercados que vale la pena conocer.",
  },
  "Cultura Japonesa": {
    anchor: "cultura",
    description:
      "Etiqueta en templos, propinas y todo lo que conviene saber antes de pisar Japón.",
  },
  "Planifica tu Viaje": {
    anchor: "planifica-viaje",
    description:
      "Itinerarios, mejor época, JR Pass, presupuesto — la capa práctica de planificar Tokio.",
  },
};

// Slugs de los artículos fijados en "Lo Más Leído" — basados en datos de conversión
// (ver docs/seo/2026-04_inventory.md §3.1, equivalentes ES de los winners EN).
const popularSlugs = [
  "comparativa-excursiones",
  "vale-la-pena-guia-privado-tokio",
  "cuanto-cuesta-guia-privado-tokio",
];

const BASE_URL = "https://tanuki-tabi-travel.com";

interface PostCardProps {
  post: BlogPost;
  showPopularBadge?: boolean;
}

const PostCard = ({ post, showPopularBadge }: PostCardProps) => (
  <Link
    to={`/es/blog/${post.slug}`}
    className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 transition-all duration-300"
  >
    <div className="aspect-[16/9] overflow-hidden relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width={600}
        height={338}
      />
      {showPopularBadge && (
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-highlight text-highlight-foreground text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
          <Sparkles className="w-3 h-3" />
          Más Leído
        </span>
      )}
    </div>
    <div className="p-6">
      <p className="text-label text-accent mb-3">{post.category}</p>
      <h3 className="heading-card text-foreground group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-body line-clamp-3">
        {post.description}
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <User className="w-3 h-3" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
        <span>Leer Artículo</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </Link>
);

const EsBlogIndex = () => {
  const popularPosts = popularSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${BASE_URL}/es/blog/${post.slug}`,
      name: post.title,
    })),
  };

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
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      {/* Header */}
      <section id="top" className="pt-16 pb-12 bg-secondary/30">
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

      {/* Lo Más Leído — winners destacados */}
      {popularPosts.length > 0 && (
        <section className="py-12 bg-accent/5 border-b border-border/40">
          <div className="container-section">
            <div className="mb-8 max-w-2xl">
              <p className="text-label text-accent mb-3 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Empieza Aquí
              </p>
              <h2 className="heading-section text-foreground">Lo Más Leído</h2>
              <p className="mt-4 text-body">
                Los tres artículos que más mencionan los viajeros cuando contactan sobre un tour privado.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularPosts.map((post) => (
                <PostCard key={post.slug} post={post} showPopularBadge />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explorar por Tema — anchor pills */}
      <section className="py-8 border-b border-border/40">
        <div className="container-section">
          <p className="text-label text-accent mb-3">Explorar por Tema</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const meta = CATEGORY_META[category];
              const count = blogPosts.filter((p) => p.category === category).length;
              return (
                <a
                  key={category}
                  href={`#${meta.anchor}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-foreground bg-secondary/60 hover:bg-secondary border border-border/60 rounded-full transition-colors"
                >
                  {category}
                  <span className="text-xs text-muted-foreground">({count})</span>
                </a>
              );
            })}
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
            const meta = CATEGORY_META[category];
            return (
              <div key={category} id={meta.anchor} className="mb-16 last:mb-0 scroll-mt-24">
                <div className="mb-8 max-w-3xl">
                  <p className="text-label text-accent mb-3">Tema</p>
                  <h2 className="heading-section text-foreground">
                    {category}{" "}
                    <span className="text-muted-foreground font-normal text-base align-middle">
                      ({postsInCategory.length})
                    </span>
                  </h2>
                  <p className="mt-4 text-body">
                    {meta.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {postsInCategory.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
                <div className="mt-8 text-right">
                  <a
                    href="#top"
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ArrowUp className="w-3 h-3" />
                    Volver arriba
                  </a>
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
            <Link to="/es/tours" className="btn-accent-on-dark">
              Ver Tours
            </Link>
            <Link
              to="/es/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-full transition-all duration-300 ease-out hover:bg-primary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50"
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
