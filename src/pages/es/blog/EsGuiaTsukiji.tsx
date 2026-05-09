// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { DiagnosticTrigger } from "@/components/blog/DiagnosticTrigger";
import { foodFinderEsConfig } from "@/data/diagnostics/foodFinderEs";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsGuiaTsukiji = () => {
  return (
    <Layout>
      <SEO
        title="Guía del Mercado de Tsukiji 2026: Sí, Sigue Abierto (Horarios y Consejos)"
        description="Horarios del Mercado de Tsukiji 2026: 5:00-14:00, cerrado domingos y Año Nuevo. Más de 460 puestos, qué comer y cómo visitarlo con un guía local."
        canonicalPath="/es/blog/guia-tsukiji"
        hreflang={[
          { lang: "en", path: "/blog/tsukiji-market-guide" },
          { lang: "es", path: "/es/blog/guia-tsukiji" },
          { lang: "x-default", path: "/blog/tsukiji-market-guide" },
        ]}
      />

      <div className="prose-editorial">

      

            {/* Hero — overlaid title (BlogArticleHero) */}
      <BlogArticleHero
        image="/images/tours/food-tour-tsukiji.webp"
        imageAlt="Guía del mercado de Tsukiji para amantes de la gastronomía"
        eyebrow="Guías de Barrios de Tokio"
        title="Guía del Mercado de Tsukiji 2026: Sí, Sigue Abierto (Horarios y Consejos)"
        date="25 de febrero de 2026"
        backHref="/es/blog"
        backLabel="Volver al Blog"
      />

            <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
            <BlogArticleToc items={[
          { num: "01", label: "Tsukiji vs Toyosu", href: "#section-01-tsukiji-vs-toyosu" },
          { num: "02", label: "Qué Comer en Tsukiji", href: "#section-02-qué-comer-en-tsukiji" },
          { num: "03", label: "Horarios y Cuándo Visitar", href: "#section-03-cuándo-ir" },
          { num: "04", label: "Combínalo con Ginza para la…", href: "#section-04-combínalo-con-ginza-para-la-media-jornada-perfecta" },
          { num: "05", label: "Mercado de Toyosu", href: "#section-05-mercado-de-toyosu" },
          { num: "06", label: "Preguntas Frecuentes", href: "#section-06-faq" }
            ]} />

            <article>

            {/* Featured Snippet / Summary Box */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
              <p className="text-foreground font-medium mb-2">Resumen rápido — Mercado Exterior de Tsukiji en 2026</p>
              <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside">
                <li><strong className="text-foreground">Estado:</strong> Abierto — más de 460 puestos y restaurantes en funcionamiento</li>
                <li><strong className="text-foreground">Horario:</strong> Aprox. 9:00–14:00 (la mayoría de puestos cierran entre 13:00 y 14:00)</li>
                <li><strong className="text-foreground">Cerrado:</strong> Domingos y algunos miércoles (sigue el calendario del mercado mayorista)</li>
                <li><strong className="text-foreground">Mejores días:</strong> Martes, jueves y viernes por la mañana</li>
                <li><strong className="text-foreground">Acceso:</strong> Estación Tsukiji (Línea Hibiya, salida 1) — 2-3 minutos a pie. ¿Te alojas en Ginza? También puedes <Link to="/es/blog/de-ginza-a-tsukiji-a-pie" className="text-accent hover:underline">caminar de Ginza a Tsukiji en unos 15 minutos</Link> por Harumi-dori.</li>
              </ul>
            </div>

            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Si amas la comida, y me refiero a amarla de verdad, no solo comer sino entender de dónde viene y cómo se prepara, entonces el Mercado Exterior de Tsukiji merece un lugar destacado en tu itinerario por Tokio. Sí, el famoso mercado mayorista interior se trasladó a Toyosu en 2018, y sí, todavía oirás a gente decir "Tsukiji está cerrado". Se equivocan. El mercado exterior está vivo, próspero y posiblemente mejor para los visitantes de lo que jamás fue el antiguo piso mayorista.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como guía con licencia que camina por Tsukiji varias veces a la semana, he visto cómo el mercado ha evolucionado a lo largo de los años. Algunos de los antiguos vendedores mayoristas se han ido, pero las aproximadamente 460 tiendas y restaurantes que conforman el mercado exterior solo han mejorado en su servicio a los amantes de la gastronomía. Los puestos son más accesibles, la variedad es extraordinaria, y la calidad de lo que puedes comer aquí, a menudo preparado justo frente a ti, rivaliza o supera a muchos restaurantes con asiento de la ciudad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Esta guía es todo lo que les cuento a mis invitados del tour antes de recorrer el mercado juntos. Cubriré qué comer, qué saltarse, cuándo ir y cómo combinar Tsukiji con un paseo por la cercana Ginza para un día gastronómico perfecto en Tokio.
            </p>

            {/* Aclaración para usuarios que llegan buscando el error tipográfico
                "Tsuki Market" en lugar de "Tsukiji". */}
            <div className="faq-block space-y-8 mb-10">
              <div>
                <h3>¿Es "Tsuki Market" lo Mismo que el Mercado Tsukiji?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí — "Tsuki Market" y "Tsuki Fish Market" son errores tipográficos frecuentes al buscar el{" "}
                  <strong className="text-foreground">Mercado Tsukiji</strong>{" "}
                  (築地市場). El nombre correcto lleva una "j": Tsukiji, y así aparece en señales, estaciones de metro y mapas. Si llegaste aquí buscando "Tsuki Market" o "tsuki fish market", estás en la página correcta — esta guía cubre el Mercado Exterior de Tsukiji en detalle.
                </p>
              </div>
            </div>

            {/* Tsukiji vs Toyosu */}
            <div className="section-eyebrow"><span>Section 01 · Tsukiji vs Toyosu</span></div>
            <h2 id="section-01-tsukiji-vs-toyosu" className="scroll-mt-20">
              Tsukiji vs Toyosu: ¿Cuál Deberías Visitar?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la pregunta que me hacen con más frecuencia, así que voy a aclararla. El <strong className="text-foreground">Mercado Exterior de Tsukiji</strong> y el <strong className="text-foreground">Mercado de Toyosu</strong> son dos experiencias completamente diferentes, y elegir entre ellos depende de lo que estés buscando.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El Mercado Exterior de Tsukiji es una red densa y transitable de callejones estrechos repletos de puestos de comida, tiendas especializadas y pequeños restaurantes. Puedes entrar a cualquier hora dentro del horario de apertura, no se necesita reserva. La experiencia es táctil e inmediata: olerás marisco a la parrilla, verás a los vendedores cortar pescado con extraordinaria precisión, probarás tamagoyaki recién salido de la plancha, y comerás algo del mejor sushi de tu vida de pie en un mostrador apenas lo suficientemente ancho para tus codos. Es caótico, íntimo y completamente auténtico.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El Mercado de Toyosu, por otro lado, es la moderna instalación mayorista que reemplazó al mercado interior de Tsukiji. El atractivo principal es la <strong className="text-foreground">subasta de atún</strong>, un espectáculo genuinamente fascinante donde atunes rojos de varios millones de yenes se venden en minutos. Sin embargo, la observación requiere una reserva en línea que se agota rápidamente, y el mercado en sí se ve desde plataformas de observación detrás de cristal. Hay algunos restaurantes dentro de Toyosu, pero la variedad gastronómica y la atmósfera de comida callejera no se comparan con Tsukiji.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mi recomendación: <strong className="text-foreground">visita Tsukiji para la experiencia gastronómica</strong>. Si eres un entusiasta serio del marisco y puedes conseguir una reserva para la subasta de atún en Toyosu, añade eso como una visita separada a primera hora de la mañana. Pero para la mayoría de los amantes de la gastronomía, Tsukiji ofrece una experiencia mucho más satisfactoria y memorable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Para un análisis lado a lado más detallado —incluyendo el proceso de lotería de la subasta de Toyosu, horarios y un plan combinado para una sola mañana— consulta mi comparativa dedicada:{" "}
              <Link to="/es/blog/tsukiji-vs-toyosu" className="text-accent hover:underline font-medium">
                Tsukiji vs Toyosu: ¿qué mercado de pescado visitar en Tokio?
              </Link>
            </p>

            {/* Qué Comer */}
            <div className="section-eyebrow"><span>Section 02 · Qué Comer en Tsukiji</span></div>
            <h2 id="section-02-qué-comer-en-tsukiji" className="scroll-mt-20">
              Qué Comer en Tsukiji
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Con cientos de puestos compitiendo por tu atención (y tu apetito), saber qué priorizar marca la diferencia entre una buena visita y una extraordinaria. Aquí está lo que recomiendo a cada invitado, junto con los detalles de conocedor que te ayudarán a elegir sabiamente.
            </p>

            <h3>
              Sushi Fresco: De Pie vs Sentado
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tsukiji tiene tanto barras de sushi de pie como restaurantes de sushi con asiento, y ambos pueden ser excelentes. Los locales de pie (tachigui-zushi) tienden a ser más rápidos y baratos; pagarás alrededor de 1.500 a 3.000 yenes por un buen conjunto de 8 a 10 piezas según los cortes. La experiencia es quintaesencialmente japonesa: codo con codo con oficinistas en su descanso para almorzar, viendo al itamae (chef de sushi) dar forma a cada pieza a mano a centímetros de tu cara. El pescado es absurdamente fresco porque muchos de estos restaurantes se abastecen directamente de los mayoristas del mercado cada mañana.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/tsukiji-fresh-sushi.webp"
                alt="Sushi fresco en el mercado de Tsukiji en Tokio"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Sushi fresco en Tsukiji. El pescado llega de los mayoristas cada mañana
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los restaurantes con asiento ofrecen una experiencia más relajada con selecciones de mayor nivel. Espera pagar de 3.000 a 6.000 yenes por un set omakase (a elección del chef). Aclaración importante: los locales más famosos que dieron fama a Tsukiji — Sushi Dai y Daiwa Sushi — se trasladaron al nuevo mercado de Toyosu en 2018 junto con el mercado interior, así que cualquier listado online que los sitúe en Tsukiji está desactualizado. Las barras de sushi del mercado exterior siguen sirviendo pescado igual de fresco, sin colas de horas. Compartiré qué puestos específicos recomiendo durante nuestro tour a pie.
            </p>

            <h3>
              Tamagoyaki (Tortilla Japonesa de Huevo)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El tamagoyaki de Tsukiji es legendario, y con razón. Estas gruesas tortillas japonesas ligeramente dulces se asan en sartenes rectangulares especiales justo frente a ti, capa por capa, resultando en un bloque de huevo esponjoso y caramelizado que no tiene nada que ver con lo que encontrarías en una cocina occidental. Las dos tiendas más famosas, Yamachou y Shouro, llevan décadas perfeccionando sus recetas. Yamachou tiende hacia un estilo más dulce, tipo postre, mientras que Shouro ofrece una versión más salada, con más dashi. Prueba ambas si puedes. Un palito de tamagoyaki cuesta normalmente unos 200 yenes, lo que lo convierte en una de las mejores gangas de todo el mercado.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/tsukiji-tamagoyaki.webp"
                alt="Tamagoyaki, tortilla japonesa de huevo en el mercado de Tsukiji"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Tamagoyaki en palito, la comida callejera más icónica de Tsukiji
              </figcaption>
            </figure>

            <h3>
              Brochetas de Marisco a la Parrilla
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Caminando por los callejones exteriores de Tsukiji, encontrarás puesto tras puesto de marisco a la parrilla en brochetas: vieiras, calamar, patas de cangrejo real, gambas y pescado de temporada. Los mejores puestos asan por encargo, así que el marisco está ardiendo y ligeramente carbonizado por fuera mientras permanece tierno y jugoso por dentro. Busca puestos donde puedas ver el producto crudo real antes de que llegue a la parrilla, señal de frescura y confianza. Las <strong className="text-foreground">vieiras gigantes de Hokkaido</strong> (hotate) son un destacado, normalmente asadas con un toque de salsa de soja y mantequilla. A alrededor de 500 a 800 yenes por brocheta, no son el snack más barato, pero el tamaño y la calidad los hacen absolutamente merecedores.
            </p>

            <h3>
              Uni (Erizo de Mar)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si nunca has probado el uni fresco, Tsukiji es el lugar para tener tu primera experiencia. La diferencia entre un buen uni y un uni mediocre es enorme. El uni fresco y de alta calidad debería saber dulce y salino, como el océano destilado en un bocado cremoso y con textura de flan. El mal uni sabe metálico y amargo. Así es como se elige el bueno: <strong className="text-foreground">busca uni de color naranja brillante o amarillo dorado</strong>, con lóbulos firmes y definidos que mantengan su forma. Evita cualquier cosa que parezca blanda, acuosa o amarronada. Muchos puestos venden cajas individuales de uni donde puedes inspeccionar el producto antes de comprar. Espera pagar de 500 a 1.500 yenes dependiendo del grado y el origen. El uni de Hokkaido se considera generalmente el más fino, pero el de Sanriku (de la costa noreste) también es excelente y a menudo menos caro.
            </p>

            <h3>
              Ternera Wagyu en Brocheta
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tsukiji no es solo marisco. Varios puestos se especializan en brochetas de ternera wagyu a la parrilla, y la calidad puede ser excepcional. Los mejores vendedores usan wagyu de grado A4 o A5, la misma calidad que se sirve en restaurantes de yakiniku de alta gama, asada sobre carbón y sazonada simplemente con sal o un ligero glaseado de soja. Una sola brocheta normalmente cuesta de 800 a 1.500 yenes dependiendo del corte y el grado. El marmolado se derrite en tu lengua de una manera que la ternera normal simplemente no puede replicar. Es un capricho, pero esto es Tsukiji, y el capricho es el objetivo.
            </p>

            <h3>
              Postres de Matcha
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de toda esa comida salada, querrás algo dulce, y Tsukiji también cumple aquí. Varias tiendas se especializan en helado soft de matcha, daifuku de matcha (mochi relleno de pasta de judías rojas dulces y crema de matcha) y tiramisú de matcha. Matsueda es uno de mis favoritos; su helado soft de matcha usa matcha Uji de alta calidad de Kioto, y el sabor es intenso, ligeramente amargo y profundamente aromático. Un cono cuesta alrededor de 400 a 500 yenes. También hay excelentes dorayaki (sándwiches de tortita con relleno de judías rojas) y mochi de frutas frescas si el matcha no es lo tuyo.
            </p>

            <h3>
              Qué Evitar
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No todo en Tsukiji merece tu espacio estomacal. <strong className="text-foreground">Ten cuidado con los restaurantes de sushi con captadores agresivos afuera</strong> intentando atraerte. Los mejores lugares de sushi en Tsukiji no necesitan reclutar clientes desde la calle. También evita las bandejas de sushi preenvasadas envueltas en plástico que algunas tiendas venden cerca de los bordes exteriores del mercado. Estas se hacen con antelación y pueden estar ahí durante horas. En un mercado donde la frescura es todo el punto, comer sushi que se preparó a las 6 AM y permanece hasta el mediodía anula completamente el propósito. Finalmente, evita los boles de marisco "de lujo" sobreprecios (kaisen-don) que cuestan de 4.000 a 5.000 yenes en las entradas más turísticas; puedes obtener una calidad igual o mejor más adentro del mercado por la mitad del precio.
            </p>

            <InlineCTAEs href="/es/tours/tsukiji-ginza" />

            {/* Horarios y Cuándo Ir — sección reforzada para capturar variantes
                "horarios mercado tsukiji", "tsukiji opening hours" en ES SERPs. */}
            <div className="section-eyebrow"><span>Sección 03 · Horarios del Mercado de Tsukiji</span></div>
            <h2 id="section-03-cuándo-ir" className="scroll-mt-20">
              Horarios del Mercado de Tsukiji 2026: Cuándo Visitar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una aclaración antes de la tabla: el antiguo <strong className="text-foreground">mercado mayorista interior de Tsukiji</strong> cerró en 2018 y se trasladó a Toyosu. Por tanto, los "horarios del mercado de pescado de Tsukiji" que aún circulan en algunas guías para el piso de subastas están desactualizados. El <strong className="text-foreground">Mercado Exterior de Tsukiji</strong> (場外市場), con sus más de 460 tiendas y puestos, sigue abierto y es lo que los visitantes pueden recorrer. Todos los horarios siguientes se refieren al mercado exterior.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Según la <a href="https://www.tsukiji.or.jp/english/calendar/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">página oficial del mercado</a>, el día se divide en tres franjas: <strong className="text-foreground">6:00–9:00 para compradores profesionales</strong> (chefs, mayoristas), <strong className="text-foreground">9:00–14:00 para el público general</strong>, y horario flexible a partir de las 14:00. En la práctica, los puestos individuales abren desde las 4:00 y la mayoría empieza a cerrar hacia la 13:00.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/40">
                    <th className="text-left p-3 font-medium text-foreground">Día</th>
                    <th className="text-left p-3 font-medium text-foreground">Horario general</th>
                    <th className="text-left p-3 font-medium text-foreground">Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Lunes</td>
                    <td className="p-3 text-muted-foreground">5:00 – 14:00</td>
                    <td className="p-3 text-muted-foreground">Abierto</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Martes</td>
                    <td className="p-3 text-muted-foreground">5:00 – 14:00</td>
                    <td className="p-3 text-muted-foreground">Abierto (mejor día)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Miércoles</td>
                    <td className="p-3 text-muted-foreground">5:00 – 14:00</td>
                    <td className="p-3 text-muted-foreground">Abierto la mayoría de semanas; cerrado en fechas concretas (ver calendario)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Jueves</td>
                    <td className="p-3 text-muted-foreground">5:00 – 14:00</td>
                    <td className="p-3 text-muted-foreground">Abierto (mejor día)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Viernes</td>
                    <td className="p-3 text-muted-foreground">5:00 – 14:00</td>
                    <td className="p-3 text-muted-foreground">Abierto (mejor día)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Sábado</td>
                    <td className="p-3 text-muted-foreground">5:00 – 14:00</td>
                    <td className="p-3 text-muted-foreground">Abierto pero muy concurrido a partir de las 9:00</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground"><strong>Domingo</strong></td>
                    <td className="p-3 text-muted-foreground"><strong>Cerrado</strong></td>
                    <td className="p-3 text-muted-foreground">La mayoría de tiendas cerradas; algunas cafeterías abren</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Horarios de tiendas destacadas del Mercado Tsukiji</strong> (verificados en mayo de 2026 desde tsukiji.or.jp):
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/40">
                    <th className="text-left p-3 font-medium text-foreground">Tienda</th>
                    <th className="text-left p-3 font-medium text-foreground">Especialidad</th>
                    <th className="text-left p-3 font-medium text-foreground">Horario</th>
                    <th className="text-left p-3 font-medium text-foreground">Cierre</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Tsukiji Yamachou</td>
                    <td className="p-3 text-muted-foreground">Tamagoyaki</td>
                    <td className="p-3 text-muted-foreground">6:00 – 15:30</td>
                    <td className="p-3 text-muted-foreground">Abierto los 365 días</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Tsukiji Shouro</td>
                    <td className="p-3 text-muted-foreground">Tamagoyaki</td>
                    <td className="p-3 text-muted-foreground">4:00 – 15:00</td>
                    <td className="p-3 text-muted-foreground">Dom, festivos, algunos miércoles</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Marutake</td>
                    <td className="p-3 text-muted-foreground">Tamagoyaki</td>
                    <td className="p-3 text-muted-foreground">4:00 – 14:30</td>
                    <td className="p-3 text-muted-foreground">Algunos domingos (en/ago), festivos, algunos miércoles</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 text-foreground">Kitsuneya</td>
                    <td className="p-3 text-muted-foreground">Gyu-don / horumon-don</td>
                    <td className="p-3 text-muted-foreground">6:30 – 13:30</td>
                    <td className="p-3 text-muted-foreground">Dom, festivos, algunos miércoles</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground">Tamahachi</td>
                    <td className="p-3 text-muted-foreground">Tamagoyaki</td>
                    <td className="p-3 text-muted-foreground">5:00 – 14:30</td>
                    <td className="p-3 text-muted-foreground">Días de cierre del mercado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground italic mb-6">
              Horarios obtenidos del listado oficial de cada tienda en tsukiji.or.jp. Pueden variar por reformas, festivos o estacionalidad. Comprueba siempre el <a href="https://www.tsukiji.or.jp/english/calendar/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">calendario oficial</a> antes de planificar tu visita.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Cierre de fin de año:</strong> el Mercado de Tsukiji cierra durante las fiestas de Año Nuevo, normalmente <strong className="text-foreground">del 30 de diciembre al 4 de enero</strong>. La semana previa (28–30 de diciembre) es la más concurrida del año entero, ya que los locales compran ingredientes tradicionales (osechi, marisco fresco, tamagoyaki). Si viajas en esas fechas, planifica tu visita a partir del 5 de enero.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              El horario importa enormemente en Tsukiji. El mercado exterior es un mercado en funcionamiento, no un parque temático, y sus ritmos reflejan la industria pesquera que lo creó. <strong className="text-foreground">El mejor momento para visitar es entre semana por la mañana, entre las 9:00 y las 11:00 AM.</strong> A esa hora, todos los puestos están abiertos y completamente abastecidos, las parrillas están calientes, el pescado está en su máxima frescura, y las multitudes aún no han alcanzado su pico del mediodía. Tendrás espacio para curiosear, hacer preguntas y comer sin sentirte apresurado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Evita los fines de semana si es posible.</strong> Los sábados por la mañana traen tanto turistas como compradores locales, y los estrechos callejones se congestionan genuinamente. Sigue siendo una experiencia que vale la pena, pero pasarás más tiempo navegando entre multitudes que disfrutando de la comida. El domingo es un problema diferente: <strong className="text-foreground">la mayoría de los puestos están cerrados los domingos</strong>, así que una visita en domingo será decepcionante. <strong className="text-foreground">Algunos miércoles también son día de cierre</strong> (el mercado exterior sigue el calendario del mercado mayorista de Toyosu, no todos los miércoles). Consulta el <a href="https://www.tsukiji.or.jp/calendar/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">calendario oficial</a> antes de tu visita. Los mejores días son martes, jueves y viernes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Muchos puestos comienzan a cerrar entre la 1:00 y las 2:00 PM, y a las 3:00 PM el mercado está prácticamente cerrado. Si llegas después del mediodía, encontrarás una selección reducida y algunos de los mejores productos ya agotados. Planifica tu visita como una actividad matutina, llega con hambre, y date al menos 90 minutos a dos horas para un recorrido completo.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/ginza-shopping-street.webp"
                alt="Distrito de lujo de Ginza - combínalo con Tsukiji para un día perfecto"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Ginza, a pocos pasos de Tsukiji, un mundo completamente diferente
              </figcaption>
            </figure>

            {/* Combinar con Ginza */}
            <div className="section-eyebrow"><span>Section 04 · Combínalo con Ginza para la Media Jornada Perfecta</span></div>
            <h2 id="section-04-combínalo-con-ginza-para-la-media-jornada-perfect" className="scroll-mt-20">
              Combínalo con Ginza para la Media Jornada Perfecta
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una de las mayores ventajas de Tsukiji es su ubicación. <strong className="text-foreground">Ginza, el distrito comercial y cultural más elegante de Tokio, está a solo 10 minutos a pie.</strong> Esto hace un itinerario natural y satisfactorio de media jornada: pasa la mañana comiendo a tu paso por Tsukiji, y luego pasea hasta Ginza para una experiencia de Tokio completamente diferente por la tarde.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El paseo entre las dos zonas te lleva por la calle Harumi-dori, cruzando de la bulliciosa y utilitaria atmósfera del mercado al mundo de arquitectura pulida y boutiques de lujo de Ginza. El contraste es llamativo e intencional. Es una de mis transiciones favoritas en todo Tokio. En Ginza, puedes admirar la impresionante arquitectura de edificios como el complejo Ginza Six y la tienda insignia de Mikimoto, recorrer los legendarios grandes almacenes Wako con su icónica torre del reloj, o echar un vistazo al tradicional Teatro Kabuki-za, incluso si no asistes a una función completa (hay entradas para actos individuales disponibles y sorprendentemente asequibles).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ginza también alberga algunos de los mejores kissaten (cafeterías tradicionales) de Tokio, donde puedes sentarte con un café de filtro perfectamente preparado y reflexionar sobre las aventuras culinarias de la mañana. Esta ruta de Tsukiji por la mañana a Ginza por la tarde es exactamente lo que cubrimos en nuestro{" "}
              <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">
                Tour a Pie por Tsukiji y Ginza
              </Link>
              , y es uno de nuestros itinerarios más populares por una buena razón: reúne dos de los barrios más distintivos de Tokio en una sola experiencia fluida.
            </p>

            {/* Resumen Rápido de Toyosu */}
            <div className="section-eyebrow"><span>Section 05 · Mercado de Toyosu</span></div>
            <h2 id="section-05-mercado-de-toyosu" className="scroll-mt-20">
              Mercado de Toyosu: Resumen Rápido
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si eres un entusiasta serio del marisco y la subasta de atún está en tu lista de deseos, el Mercado de Toyosu vale el esfuerzo, pero requiere planificación. El mercado está ubicado en una isla artificial en la Bahía de Tokio, accesible a través de la Línea Yurikamome (baja en la estación Shijo-mae). Todo el trayecto desde el centro de Tokio toma unos 30 a 40 minutos dependiendo de tu punto de partida.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La <strong className="text-foreground">observación de la subasta de atún</strong> es la razón principal para visitar. Tiene lugar en las primeras horas de la mañana, normalmente comenzando alrededor de las 5:30 AM, y los visitantes observan desde una plataforma de observación cerrada con cristal sobre el piso de la subasta. El acceso se asigna mediante un <strong className="text-foreground">sorteo mensual</strong> (se solicita online a través del sitio web del Gobierno Metropolitano de Tokio, y los ganadores se eligen al azar, no por orden de llegada). Se admiten unos 120 visitantes al día a la plataforma de observación premium — tres grupos de 40 personas que rotan cada 10 minutos entre las 5:45 y las 6:15 AM — por lo que la demanda supera con creces las plazas disponibles. Sin reserva, aún puedes visitar los corredores de observación del mercado para ver las operaciones mayoristas a través de paredes de cristal, pero no verás la subasta en sí.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Toyosu también tiene un área de restaurantes con locales de sushi y restaurantes de marisco que generalmente son muy buenos; muchos están dirigidos por las mismas familias que operaban en el antiguo mercado interior de Tsukiji. Sin embargo, la atmósfera es estéril e institucional comparada con el encanto orgánico de Tsukiji. Si solo tienes tiempo para uno, elige Tsukiji. Si tienes tiempo para ambos, haz la subasta de Toyosu al amanecer y Tsukiji para el brunch. Es una mañana gastronómica inolvidable.
            </p>

            {/* FAQ */}
            <div className="mt-16">
              <div className="section-eyebrow"><span>Sección 06 · Preguntas Frecuentes</span></div>
              <h2 id="section-06-faq" className="scroll-mt-20">Preguntas Frecuentes</h2>
              <div className="faq-block space-y-8">
                <div>
                  <h3>¿Cuáles son los horarios del Mercado de Tsukiji?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Según el sitio oficial, el Mercado Exterior de Tsukiji se divide en tres franjas: 6:00–9:00 para compradores profesionales (chefs, mayoristas), 9:00–14:00 para el público general, y horario flexible a partir de las 14:00. En la práctica, los puestos individuales abren desde las 4:00 y la mayoría empieza a cerrar hacia la 13:00. La mejor franja para visitar es entre las 9:00 y las 11:00.
                  </p>
                </div>
                <div>
                  <h3>¿A qué hora cierra el Mercado de Tsukiji?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La mayoría de los puestos cierran entre la 13:00 y las 14:00, y a las 15:00 el mercado está prácticamente cerrado. El antiguo mercado mayorista de pescado se trasladó a Toyosu en 2018, así que cuando se habla de "horarios del mercado de pescado de Tsukiji" hoy en día se hace referencia al mercado exterior, pensado para visitantes y no para subastas profesionales.
                  </p>
                </div>
                <div>
                  <h3>¿Está abierto el Mercado de Tsukiji los domingos?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No. El Mercado Exterior de Tsukiji está cerrado todos los domingos: la mayoría de los puestos, restaurantes y tiendas no abren. Algunas cafeterías cercanas pueden estar abiertas, pero la visita pierde sentido. Planifica para martes, jueves o viernes por la mañana.
                  </p>
                </div>
                <div>
                  <h3>¿Está abierto durante las fiestas de Año Nuevo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No. El Mercado de Tsukiji cierra durante el periodo de Año Nuevo, normalmente del 30 de diciembre al 4 de enero. La semana previa (28–30 de diciembre) es la más concurrida del año. Si viajas a Tokio a principios de enero, planifica tu visita a partir del 5 de enero y consulta el calendario oficial para confirmar la fecha exacta de reapertura.
                  </p>
                </div>
                <div>
                  <h3>¿Es "Tsuki Market" lo mismo que el Mercado Tsukiji?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí. "Tsuki Market" y "Tsuki Fish Market" son errores tipográficos frecuentes al buscar el Mercado Tsukiji (築地市場). El nombre correcto lleva una "j" final: Tsukiji. Si llegaste aquí buscando "Tsuki Market", estás en la página correcta.
                  </p>
                </div>
                <div>
                  <h3>¿Cómo llego al Mercado de Tsukiji?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Toma la línea Hibiya del metro de Tokio hasta la estación Tsukiji (salida 1). El mercado exterior está a 2-3 minutos a pie. Alternativamente, la línea Toei Oedo se detiene en la estación Tsukiji-shijo (salida A1, ~1 minuto a pie). Desde la mayoría de hoteles del centro, el trayecto dura entre 15 y 25 minutos.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2>
                ¿Quieres que un experto gastronómico local te guíe por los mejores puestos de Tsukiji?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En nuestro Tour a Pie por Tsukiji y Ginza, te llevaré a los puestos que las guías de viaje no mencionan, te ayudaré a navegar el laberinto de callejones del mercado y me aseguraré de que comas la comida más fresca y con mejor relación calidad-precio disponible esa mañana. Terminaremos con un paseo tranquilo por las elegantes calles de Ginza. Sin trampas para turistas, sin bocados desperdiciados. Solo la auténtica experiencia de Tsukiji.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/tsukiji-ginza" className="btn-accent">
                  Reservar Tour Tsukiji y Ginza
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Hacer una Pregunta
                </Link>
              </div>
            </div>
          
            </article>

            <BlogArticleAside />
          </div>
        </div>
      </section>

      <DiagnosticTrigger config={foodFinderEsConfig} />

      <RelatedTourCards tourIds={["tsukiji-ginza","custom"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Guía del Mercado de Tsukiji 2026: Sí, Sigue Abierto (Horarios y Consejos)",
            "description": "Horarios del Mercado de Tsukiji 2026: 5:00-14:00, cerrado domingos y Año Nuevo. Más de 460 puestos, qué comer y cómo visitarlo con un guía local.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
            },
            "datePublished": "2026-02-25",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/guia-tsukiji",
            },
          }),
        }}
      />
      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Cuáles son los horarios del Mercado de Tsukiji?", acceptedAnswer: { "@type": "Answer", text: "Según el sitio oficial, el Mercado Exterior de Tsukiji se divide en tres franjas: 6:00-9:00 para compradores profesionales, 9:00-14:00 para el público general, y horario flexible a partir de las 14:00. Los puestos individuales abren desde las 4:00 y la mayoría empieza a cerrar hacia la 13:00. La mejor franja para visitar es entre las 9:00 y las 11:00." }},
          { "@type": "Question", name: "¿A qué hora cierra el Mercado de Tsukiji?", acceptedAnswer: { "@type": "Answer", text: "La mayoría de los puestos cierran entre la 13:00 y las 14:00, y a las 15:00 el mercado está prácticamente cerrado. El antiguo mercado mayorista se trasladó a Toyosu en 2018, así que los 'horarios del mercado de pescado de Tsukiji' hoy se refieren al mercado exterior." }},
          { "@type": "Question", name: "¿Está abierto el Mercado de Tsukiji los domingos?", acceptedAnswer: { "@type": "Answer", text: "No. El Mercado Exterior de Tsukiji está cerrado todos los domingos. Planifica para martes, jueves o viernes por la mañana." }},
          { "@type": "Question", name: "¿Está abierto el Mercado de Tsukiji durante Año Nuevo?", acceptedAnswer: { "@type": "Answer", text: "No. El Mercado cierra durante el periodo de Año Nuevo, normalmente del 30 de diciembre al 4 de enero. La semana previa (28-30 de diciembre) es la más concurrida del año." }},
          { "@type": "Question", name: "¿Es 'Tsuki Market' lo mismo que el Mercado Tsukiji?", acceptedAnswer: { "@type": "Answer", text: "Sí. 'Tsuki Market' y 'Tsuki Fish Market' son errores tipográficos frecuentes. El nombre correcto es Tsukiji (築地市場), con 'j' final." }},
          { "@type": "Question", name: "¿Cómo llego al Mercado de Tsukiji?", acceptedAnswer: { "@type": "Answer", text: "Toma la línea Hibiya del metro de Tokio hasta la estación Tsukiji (salida 1). El mercado exterior está a 2-3 minutos a pie. Alternativamente, la línea Toei Oedo se detiene en Tsukiji-shijo (salida A1, ~1 minuto a pie). Desde el centro de Tokio el trayecto dura 15-25 minutos." }}
        ]
      })}} />
    </div>

      </Layout>
  );
};

export default EsGuiaTsukiji;
