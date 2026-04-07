import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { QuickAnswer } from "@/components/blog/QuickAnswer";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsExcursionYokohamaDesdeTokio = () => {
  return (
    <Layout>
      <SEO
        title="Excursión a Yokohama desde Tokio 2026: ¿Merece la pena?"
        description="Yokohama está a 30 min de Tokio, pero ¿vale un día entero? Chinatown, Museo del Ramen, paseo marítimo y cómo combinarlo con Kamakura. Guía honesta."
        canonicalPath="/es/blog/excursion-yokohama-desde-tokio"
        hreflang={[
          { lang: "en", path: "/blog/yokohama-day-trip-from-tokyo" },
          { lang: "es", path: "/es/blog/excursion-yokohama-desde-tokio" },
          { lang: "x-default", path: "/blog/yokohama-day-trip-from-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Excursión Yokohama" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/yokohama-minatomirai-hero.webp"
          alt="Skyline de Yokohama Minato Mirai al atardecer con la Landmark Tower y la noria de Cosmo World"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Encabezado del artículo */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link
              to="/es/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>
            <p className="text-label text-accent mb-3">Guías de Excursiones</p>
            <h1 className="heading-display text-foreground">
              Excursión a Yokohama desde Tokio: Lo Que De Verdad Merece el Viaje
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                7 de marzo de 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, Guía-Intérprete Nacional con Licencia del Gobierno (全国通訳案内士), que ha acompañado a innumerables visitantes por la historia portuaria internacional de Yokohama y sus barrios más escondidos.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Última actualización: abril 2026
            </p>
          </div>
        </div>
      </section>

      {/* Contenido del artículo */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <QuickAnswer
              answer="Sí, Yokohama merece la visita: está a solo 30 minutos de Tokio y parece una ciudad completamente diferente. Lo ideal es combinarla con media jornada: mañana en Yokohama, tarde en Kamakura."
              hook="Pero la mayoría de visitantes pierden el tiempo en las atracciones equivocadas. Aquí te cuento exactamente qué ver y qué saltarte, desde la perspectiva de un guía que lleva clientes allí con regularidad."
            />

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              "¿Debería molestarme en ir a Yokohama? Al final es básicamente otra parte de Tokio, ¿no?" Me hacen esta pregunta más que casi cualquier otra sobre excursiones. Y entiendo las dudas. Yokohama está a solo 30 minutos del centro de Tokio en tren. Cuando miras el mapa, las dos ciudades se funden en una mancha urbana continua. Entonces, ¿para qué dedicar un día valioso de tu viaje a un sitio que parece estar a la vuelta de la esquina?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Porque Yokohama no es Tokio. Ni de lejos. Tiene una historia diferente, una atmósfera diferente y una relación distinta con el mundo exterior. Tokio fue la capital de los shogunes y después del emperador. Yokohama fue donde Japón abrió de verdad sus puertas a Occidente: a regañadientes, de forma dramática y con consecuencias que transformaron todo el país.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Aquí tienes mi guía honesta para planificar una <strong className="text-foreground">excursión a Yokohama desde Tokio</strong>: qué merece genuinamente la pena ver, cuánto tiempo necesitas y si tiene más sentido combinarla con otro destino.
            </p>

            {/* Qué es Yokohama */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué es Yokohama (y por qué es diferente de Tokio)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En 1853, el comodoro Matthew Perry llegó con sus buques de guerra estadounidenses a la bahía de Tokio y exigió que Japón pusiera fin a más de 200 años de aislamiento autoimpuesto. El gobierno japonés, el shogunato Tokugawa, estaba aterrorizado pero era pragmático. Accedieron a abrir un puerto al comercio exterior, pero no querían extranjeros en Edo (la actual Tokio), sede del poder. Así que eligieron un pequeño pueblo pesquero costa abajo: Yokohama.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando el puerto internacional de Yokohama abrió oficialmente en 1859, el pueblo se transformó de la noche a la mañana. Comerciantes de Gran Bretaña, Francia, China y Estados Unidos inundaron la zona. Se levantaron edificios de estilo occidental a lo largo del paseo marítimo. Un barrio chino echó raíces cuando los comerciantes chinos establecieron sus negocios. En pocas décadas, Yokohama se convirtió en la ventana de Japón al mundo: el lugar por donde la comida occidental, la moda, la cerveza y el helado entraron por primera vez al país. La primera línea de ferrocarril de Japón, inaugurada en 1872, no conectaba dos ciudades japonesas. Conectaba Tokio con Yokohama, porque ahí estaba el comercio internacional.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta historia le da a Yokohama algo que a Tokio le falta en gran medida: una capa visible de influencia arquitectónica occidental mezclada con las culturas japonesa y china. Cuando guío a mis clientes por Yokohama, suelo decir que es como caminar por tres países a la vez. Los almacenes de ladrillo rojo parecen europeos. Los templos y puertas del barrio chino son inconfundiblemente chinos. Y los jardines y santuarios son puramente japoneses. Esa superposición es lo que hace que una <strong className="text-foreground">excursión a Yokohama desde Tokio</strong> merezca el corto viaje en tren.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hoy, Yokohama es la segunda ciudad más grande de Japón por población (más de 3,7 millones de habitantes), con un puerto activo, un paseo marítimo reluciente y una confianza cosmopolita que nace de haber sido el lugar donde Japón aprendió por primera vez a relacionarse con el resto del mundo.
            </p>

            {/* Qué ver */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué ver: Chinatown, el paseo marítimo y el jardín Sankeien
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Chinatown de Yokohama
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El <strong className="text-foreground">Chinatown de Yokohama</strong> es el barrio chino más grande de Japón y uno de los más grandes del mundo. Más de 500 tiendas y restaurantes llenan una cuadrícula compacta de calles enmarcadas por puertas ornamentales (paifang) en cada entrada cardinal. Lleva aquí desde la década de 1860, cuando los comerciantes chinos llegaron junto a los occidentales, y ha evolucionado continuamente desde entonces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que les digo a mis clientes: ven con hambre. Solo la comida callejera ya justifica la visita. Bollos al vapor (nikuman) del tamaño de tu puño, bolas de sésamo recién fritas, xiaolongbao con caldo hirviendo dentro, castañas asadas en invierno. Pero más allá de la comida, dedica tiempo a visitar el Kanteibyo, el ornamentado templo de Guan Di en el corazón del barrio chino. Está dedicado a Guan Yu, la deidad china de la prosperidad y la lealtad, y su elaborada decoración rivaliza con cualquier cosa que puedas ver en una ciudad china. La mayoría de visitantes pasan de largo camino a su siguiente dumpling. No cometas ese error.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si vienes de un país latinoamericano, hay algo especial en visitar el Chinatown de Yokohama: la mezcla de culturas te resultará curiosamente familiar. Al igual que los barrios chinos de Lima, Ciudad de México o La Habana, este surgió de oleadas migratorias del siglo XIX. Pero a diferencia de los de América Latina, este ha mantenido una conexión ininterrumpida de más de 160 años con sus raíces. Es fascinante comparar cómo evolucionó la diáspora china en dos extremos del Pacífico.
            </p>

            <InlineCTAEs href="/es/tours" message="¿Te gustaría explorar Yokohama con un guía local?" />

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Minato Mirai y el paseo marítimo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Minato Mirai (literalmente "Puerto del Futuro") es el distrito moderno del paseo marítimo de Yokohama. Está anclado por la Landmark Tower, el Museo del Cup Noodles, la noria Cosmo World y una hilera de almacenes de ladrillo rojo (Akarenga) bellamente restaurados de principios del siglo XX, que ahora albergan tiendas y cafeterías. El paseo que conecta estos puntos es uno de los mejores paseos urbanos de toda el área metropolitana de Tokio, especialmente al atardecer, cuando la bahía refleja las luces del puerto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recomiendo especialmente el Museo del Cup Noodles para familias o cualquier persona curiosa sobre la innovación en la cultura pop japonesa. Es genuinamente entretenido (diseñas tu propio vaso de noodles con ingredientes elegidos a mano) y cuenta la historia sorprendentemente apasionante de Momofuku Ando, que inventó el ramen instantáneo en 1958 y cambió literalmente la forma en que el mundo come. Reserva unas 90 minutos.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Jardín Sankeien
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la atracción de Yokohama que la mayoría de excursionistas se saltan, y la que yo creo que no deberían. Sankeien es un jardín paisajístico tradicional japonés construido en 1906 por Tomitaro Hara, un acaudalado comerciante de seda. Lo que lo hace excepcional no es solo su diseño (que es precioso), sino los edificios históricos que Hara reunió y trasladó aquí desde distintos puntos de Japón: una pagoda de tres pisos de Kioto construida originalmente en 1457, una casa de campo de las montañas de Gifu, casas de té de Kamakura, una residencia señorial de Wakayama. Pasear por Sankeien es como visitar seis regiones diferentes de Japón en un solo jardín.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ¿El inconveniente? Sankeien está a unos 20 minutos en autobús del centro de Yokohama, lo que desanima a algunos visitantes. Pero si dispones de un día completo para tu <strong className="text-foreground">excursión a Yokohama desde Tokio</strong>, te recomiendo encarecidamente hacer el desvío. En primavera (cerezos en flor) o en otoño (follaje), es uno de los lugares más tranquilos y fotogénicos de toda la región de Kanto.
            </p>

            {/* Cuánto tiempo necesitas */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Cuánto tiempo necesitas realmente?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la pregunta que más me hacen sobre la <strong className="text-foreground">excursión a Yokohama desde Tokio</strong>, y la respuesta depende de lo que quieras ver:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Media jornada (4-5 horas):</strong> Suficiente para Chinatown, un paseo por el frente marítimo de Minato Mirai y los almacenes de ladrillo rojo. Funciona bien si quieres pasar la mañana en Tokio e ir a Yokohama después del almuerzo, o viceversa. Verás lo esencial, pero no tendrás tiempo para Sankeien.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Día completo (7-8 horas):</strong> El tiempo justo para disfrutar de Chinatown como se merece, explorar Minato Mirai, visitar el jardín Sankeien y sentarte a comer bien. Es lo que recomiendo si Yokohama es tu destino principal del día.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Día combinado:</strong> Si quieres combinar Yokohama con Kamakura (más abajo te explico cómo), dedica la mañana a Yokohama (Chinatown + paseo marítimo, unas 3 horas) y la tarde a Kamakura, o al revés. Es un día largo, pero las dos ciudades están conectadas por una sola línea de tren, así que la logística es sencilla.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Personalmente, cuando guío una <strong className="text-foreground">excursión a Yokohama desde Tokio</strong>, prefiero el día completo. Yokohama recompensa la exploración pausada: perderse por las callejuelas de Chinatown, sentarse en el paseo marítimo con un café y pasar una hora tranquila en Sankeien. Correr de un sitio a otro le quita todo el sentido.
            </p>

            {/* Comparativa */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Yokohama vs. Kamakura vs. Kawagoe: ¿Cuál elegir?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si solo tienes un día para una excursión fuera de Tokio, elegir entre estos tres destinos populares es un verdadero dilema. Aquí va mi opinión honesta:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Elige Yokohama si</strong> te interesa la historia internacional, quieres una variedad gastronómica excepcional (comida china, japonesa, occidental), disfrutas de ciudades modernas con paseo marítimo o viajas con niños (el Museo del Cup Noodles y Cosmo World son geniales para familias). Yokohama también es la excursión más fácil logísticamente: el menor tiempo de viaje, la navegación más sencilla y muchas opciones si el tiempo empeora (museos, mercados cubiertos, zonas comerciales techadas).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Elige{" "}
              <Link to="/es/blog/kamakura-desde-tokio" className="text-accent hover:underline">Kamakura</Link>
              {" "}si</strong> quieres templos antiguos, un gran Buda de bronce, rutas de senderismo entre montañas boscosas e historia samurái. Kamakura es más activa físicamente (las rutas de senderismo son uno de sus grandes atractivos) y tiene una atmósfera más tranquila y espiritual. Está más lejos que Yokohama (alrededor de una hora desde Tokio), pero te da la sensación de haberte alejado mucho más de la ciudad moderna.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Elige{" "}
              <Link to="/es/blog/excursion-kawagoe-desde-tokio" className="text-accent hover:underline">Kawagoe</Link>
              {" "}si</strong> quieres saborear el Japón de la era Edo sin salir de los suburbios de Tokio. El distrito de almacenes de Kawagoe conserva la arquitectura mercantil que el propio Tokio perdió por incendios, terremotos y guerras. Es la más compacta de las tres (puedes ver los puntos principales en 3-4 horas) y es famosa por sus postres de boniato y su calle de dulces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No hay respuesta equivocada. He llevado clientes a las tres y he visto cómo cada una se convertía en el día favorito de alguien. La clave es encajar el destino con lo que te ilusiona, no simplemente tachar la opción más popular.
            </p>

            {/* Cómo combinar */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo combinar Yokohama con otros destinos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esto es algo que la mayoría de blogs de viajes no te cuentan: Yokohama y Kamakura están en la misma línea de tren JR (la línea Yokosuka). Eso significa que puedes visitar ambas en un solo día sin tener que volver a Tokio entre medias. El tren de Yokohama a Kamakura tarda unos 25 minutos. Es básicamente una continuación de la misma línea que tomaste desde Tokio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando planifico una <strong className="text-foreground">excursión a Yokohama desde Tokio</strong> combinada con Kamakura, normalmente recomiendo esta estructura:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">9:00:</strong> Salida de Tokio → Yokohama (30 minutos en JR o tren privado)</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">9:30 – 12:30:</strong> Chinatown de Yokohama (explorar, comer), paseo por el frente marítimo</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">12:30:</strong> Tren a Kamakura (25 minutos)</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">13:00 – 17:00:</strong> Lo imprescindible de Kamakura (Gran Buda, Hasedera, Tsurugaoka Hachimangu)</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">17:00:</strong> Regreso a Tokio desde Kamakura (60 minutos)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Es un día largo, pero funciona bien porque las dos ciudades ofrecen experiencias muy distintas: el bullicio internacional de Yokohama por la mañana, la serenidad de los templos de Kamakura por la tarde. Esta combinación de medio día en Yokohama y medio día en Kamakura es, de hecho, una de las opciones preferidas de mis clientes hispanohablantes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Otra opción que me encanta: una visita nocturna a Yokohama. Si has pasado el día explorando Tokio, ve a Yokohama a última hora de la tarde. Pasea por el frente marítimo mientras el sol se pone sobre la bahía, cena en Chinatown y contempla las luces del puerto desde los almacenes Akarenga. Yokohama de noche tiene un romanticismo genuino que pocas ciudades japonesas logran, y el tren de 30 minutos de vuelta a Tokio significa que no pierdes sueño por ello.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para más información sobre cómo planificar excursiones desde Tokio, consulta mis guías detalladas sobre excursiones a{" "}
              <Link to="/es/blog/kamakura-desde-tokio" className="text-accent hover:underline">Kamakura</Link>{" "}
              y{" "}
              <Link to="/es/blog/excursion-kawagoe-desde-tokio" className="text-accent hover:underline">Kawagoe</Link>.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres una excursión guiada a Yokohama?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ofrezco excursiones guiadas a Yokohama que van más allá de la típica ruta de Chinatown y paseo marítimo: incluyen la historia del puerto, barrios escondidos y los mejores rincones gastronómicos que he descubierto tras años guiando. También puedo diseñar un día combinado Yokohama-Kamakura que abarque ambas ciudades sin que te sientas con prisas. Echa un vistazo a mis tours o escríbeme para planificar tu viaje.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">Ver Todos los Tours</Link>
                <Link to="/es/contact" className="btn-outline">Contactar</Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Preguntas frecuentes</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Merece la pena una excursión a Yokohama desde Tokio?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí, especialmente si te interesa la gastronomía, la historia internacional o quieres un viaje fácil que no requiere madrugar. Yokohama está a solo 30 minutos de Tokio y ofrece una atmósfera notablemente diferente. El Chinatown por sí solo ya no tiene nada que ver con lo que encuentras en Tokio. Para una experiencia cultural completa incluyendo el jardín Sankeien, planifica un día entero. Para ver solo lo imprescindible, medio día funciona bien.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cómo llego de Tokio a Yokohama?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tienes varias opciones, todas rápidas: la línea JR Tokaido desde la estación de Tokio (25 minutos, incluida en el JR Pass), la línea JR Yokosuka desde Shinagawa (25 minutos) o la línea Tokyu Toyoko desde Shibuya (30 minutos, no incluida en el JR Pass pero muy cómoda si tu hotel está en la zona de Shibuya). La extensión de la línea Minatomirai te lleva directamente a la zona del paseo marítimo sin hacer transbordo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Se pueden visitar Yokohama y Kamakura en el mismo día?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí, y combinan muy bien porque están en la misma línea de tren. Dedica la mañana a Yokohama (Chinatown, paseo marítimo) y la tarde a Kamakura (templos, Gran Buda), o al revés. Es un día completo de 8-9 horas, pero muy factible. El tren entre ambas tarda solo 25 minutos.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuánto tiempo necesito en Yokohama?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    De 3 a 4 horas para las atracciones principales (Chinatown, paseo marítimo, Museo del Ramen). Un día completo si añades el Museo del Cup Noodles, el jardín Sankeien o combinas con Kamakura.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Qué comer en el Chinatown de Yokohama?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    El Chinatown de Yokohama es el gran atractivo gastronómico: nikuman (bollos de cerdo al vapor), xiaolongbao (dumplings de sopa), pato laqueado y pudin de mango. Fuera del Chinatown, prueba el estilo de ramen local de Yokohama, el Iekei ramen: una mezcla rica de tonkotsu y soja, más espesa y contundente que el ramen al estilo de Tokio. Para algo único, el Museo del Ramen de Shin-Yokohama tiene ocho restaurantes de ramen bajo un mismo techo, cada uno representando un estilo regional diferente.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Yokohama desde Tokio es fácil sin hablar japonés?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Totalmente. Yokohama es una de las ciudades más internacionales de Japón gracias a su historia portuaria. La señalización del tren y del metro está en japonés e inglés, los menús de Chinatown suelen tener fotos y muchos restaurantes tienen carta en inglés. Si aun así prefieres ir con alguien que te explique todo en español y te lleve a los rincones que no salen en las guías, para eso estoy yo.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["custom"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Excursión a Yokohama desde Tokio: Lo Que De Verdad Merece el Viaje",
        description: "Yokohama está a 30 min de Tokio, pero ¿vale un día entero? Chinatown, Museo del Ramen, paseo marítimo y cómo combinarlo con Kamakura. Guía honesta.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "Guía-Intérprete Nacional con Licencia del Gobierno", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-07",
        dateModified: "2026-04-06",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/excursion-yokohama-desde-tokio" },
        inLanguage: "es"
      })}} />

      {/* FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Merece la pena una excursión a Yokohama desde Tokio?", acceptedAnswer: { "@type": "Answer", text: "Sí. Yokohama está a 30 minutos del centro de Tokio y ofrece el Chinatown más grande de Japón, el Museo del Cup Noodles, vistas al puerto y una atmósfera completamente diferente a Tokio. Media jornada es suficiente para lo esencial." }},
          { "@type": "Question", name: "¿Cómo llego de Tokio a Yokohama?", acceptedAnswer: { "@type": "Answer", text: "Línea JR Tokaido desde la estación de Tokio (25 minutos, incluida en el JR Pass), línea JR Yokosuka desde Shinagawa (25 minutos) o línea Tokyu Toyoko desde Shibuya (30 minutos). La línea Minatomirai te lleva directamente al paseo marítimo." }},
          { "@type": "Question", name: "¿Se pueden visitar Yokohama y Kamakura en el mismo día?", acceptedAnswer: { "@type": "Answer", text: "Sí, y es una combinación excelente. Dedica la mañana a Yokohama (Chinatown + paseo marítimo) y toma el tren de 25 minutos a Kamakura para la tarde (Gran Buda + templos)." }},
          { "@type": "Question", name: "¿Cuánto tiempo necesito en Yokohama?", acceptedAnswer: { "@type": "Answer", text: "De 3 a 4 horas para las atracciones principales (Chinatown, paseo marítimo, Museo del Ramen). Un día completo si añades el Museo del Cup Noodles, el jardín Sankeien o combinas con Kamakura." }},
          { "@type": "Question", name: "¿Qué comer en el Chinatown de Yokohama?", acceptedAnswer: { "@type": "Answer", text: "Imprescindibles del Chinatown: nikuman, xiaolongbao, pato laqueado. Fuera del Chinatown: Iekei ramen (el estilo local de Yokohama). El Museo del Ramen de Shin-Yokohama tiene ocho restaurantes de ramen regional bajo un mismo techo." }},
          { "@type": "Question", name: "¿Yokohama desde Tokio es fácil sin hablar japonés?", acceptedAnswer: { "@type": "Answer", text: "Totalmente. La señalización está en japonés e inglés, los menús de Chinatown suelen tener fotos y muchos restaurantes tienen carta en inglés. Es una de las ciudades más internacionales de Japón." }}
        ]
      })}} />
    </Layout>
  );
};

export default EsExcursionYokohamaDesdeTokio;
