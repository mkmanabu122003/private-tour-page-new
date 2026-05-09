// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { DiagnosticTrigger } from "@/components/blog/DiagnosticTrigger";
import { dayTripFinderConfigEs } from "@/data/diagnostics/dayTripFinderEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsComparativaExcursiones = () => {
  return (
    <Layout>
      <SEO
        title="Kamakura vs Hakone vs Nikko: ¿Qué Excursión Elegir desde Tokio?"
        description="¿No puedes decidir entre Kamakura, Hakone o Nikko? Un guía local compara tiempo de viaje, puntos destacados y para quién es mejor cada excursión."
        canonicalPath="/es/blog/comparativa-excursiones"
        hreflang={[
          { lang: "en", path: "/blog/kamakura-vs-hakone-vs-nikko-day-trip" },
          { lang: "es", path: "/es/blog/comparativa-excursiones" },
          { lang: "x-default", path: "/blog/kamakura-vs-hakone-vs-nikko-day-trip" },
        ]}
      />

      <div className="prose-editorial">

      

            {/* Hero — overlaid title (BlogArticleHero) */}
      <BlogArticleHero
        image="/images/blog/nikko-toshogu-hero.webp"
        imageAlt="Kamakura vs Hakone vs Nikko - mejores excursiones desde Tokio"
        eyebrow="Excursiones"
        title="Kamakura vs Hakone vs Nikko: ¿Qué Excursión Elegir desde Tokio?"
        date="25 de febrero de 2026"
        backHref="/es/blog"
        backLabel="Volver al Blog"
      />

            <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
            <BlogArticleToc items={[
          { num: "01", label: "Comparación Rápida", href: "#section-01-comparación-rápida" },
          { num: "02", label: "Kamakura", href: "#section-02-kamakura" },
          { num: "03", label: "Excursión a Kamakura", href: "#section-03-excursion-kamakura" },
          { num: "04", label: "Hakone", href: "#section-04-hakone" },
          { num: "05", label: "Nikko: La Obra Maestra…", href: "#section-05-nikko-la-obra-maestra-unesco-escondida" },
          { num: "06", label: "¿Puedo Hacer Dos en un Solo…", href: "#section-06-puedo-hacer-dos-en-un-solo-viaje" },
          { num: "07", label: "Mi Recomendación", href: "#section-07-mi-recomendación" },
          { num: "08", label: "Preguntas Frecuentes", href: "#section-08-faq" }
            ]} />

            <article>

            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              "¿Qué excursión debería hacer?". Me hacen esta pregunta en casi todos los tours. Es uno de los dilemas más comunes entre los visitantes de Tokio, y la respuesta es genuinamente diferente para cada viajero.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kamakura, Hakone y Nikko son los tres destinos de excursión más populares desde Tokio, y cada uno ofrece una experiencia completamente diferente. Habiendo guiado a cientos de viajeros a los tres, puedo decirte que no hay una única "mejor" opción; depende de lo que busques, cuánto tiempo tengas y qué tipo de experiencia te entusiasma.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Aquí tienes una comparación honesta y detallada para ayudarte a decidir. Y si después de leer esto sigues sin poder elegir, para eso están los itinerarios personalizados.
            </p>

            {/* Interactive Diagnostic Tool — opens in modal */}
            <DiagnosticTrigger config={dayTripFinderConfigEs} />

            {/* Quick Comparison Table */}
            <div className="section-eyebrow"><span>Sección 01 · Comparación Rápida</span></div>
            <h2 id="section-01-comparación-rápida" className="scroll-mt-20">
              Comparación Rápida
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left p-4 font-serif font-medium text-foreground"></th>
                    <th className="text-left p-4 font-serif font-medium text-foreground">Kamakura</th>
                    <th className="text-left p-4 font-serif font-medium text-foreground">Hakone</th>
                    <th className="text-left p-4 font-serif font-medium text-foreground">Nikko</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium text-foreground">Tiempo de viaje</td>
                    <td className="p-4 text-muted-foreground">~1 hora</td>
                    <td className="p-4 text-muted-foreground">~1,5 horas</td>
                    <td className="p-4 text-muted-foreground">~2 horas</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Principal atractivo</td>
                    <td className="p-4 text-muted-foreground">Templos antiguos, ciudad costera</td>
                    <td className="p-4 text-muted-foreground">Vistas del Monte Fuji, aguas termales</td>
                    <td className="p-4 text-muted-foreground">Santuario UNESCO, naturaleza</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Ideal para</td>
                    <td className="p-4 text-muted-foreground">Amantes de la historia, foodies</td>
                    <td className="p-4 text-muted-foreground">Naturaleza y relajación</td>
                    <td className="p-4 text-muted-foreground">Combinación historia + naturaleza</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Dificultad</td>
                    <td className="p-4 text-muted-foreground">Fácil</td>
                    <td className="p-4 text-muted-foreground">Fácil</td>
                    <td className="p-4 text-muted-foreground">Moderada</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Mejor época</td>
                    <td className="p-4 text-muted-foreground">Junio (hortensias), todo el año</td>
                    <td className="p-4 text-muted-foreground">Oct-Feb (vistas del Fuji)</td>
                    <td className="p-4 text-muted-foreground">Oct-Nov (hojas de otoño)</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Coste transporte</td>
                    <td className="p-4 text-muted-foreground">~¥1.500 ida y vuelta</td>
                    <td className="p-4 text-muted-foreground">~¥6.100 (Hakone Pass)</td>
                    <td className="p-4 text-muted-foreground">~¥5.000-8.000 ida y vuelta</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Kamakura */}
            <div className="section-eyebrow"><span>Sección 02 · Kamakura</span></div>
            <h2 id="section-02-kamakura" className="scroll-mt-20">
              Kamakura: La Antigua Capital de Japón Junto al Mar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kamakura fue la capital política de Japón desde 1185 hasta 1333, cuando el shogunato de Kamakura gobernaba el país. Hoy es una pequeña ciudad costera fácil de recorrer a pie, con más de 65 templos y santuarios concentrados en un área sorprendentemente compacta. La combinación de historia antigua, belleza natural y excelente gastronomía la convierte en la excursión más completa.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/kamakura-buddha-comparison.webp"
                alt="Gran Buda de Kamakura - excursión popular desde Tokio"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                El Gran Buda de Kamakura, uno de los monumentos más icónicos de Japón
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La atracción estrella es el Gran Buda (Daibutsu) en Kotoku-in, una estatua de bronce de 13 metros del siglo XIII que originalmente estaba dentro de un enorme salón de madera. Los tifones y tsunamis destruyeron el salón hace siglos, y el Buda ha permanecido serenamente al aire libre desde entonces. Hay algo profundamente conmovedor en ver esta figura antigua sentada pacíficamente bajo el cielo, resistiendo las mismas tormentas durante 800 años.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Más allá del Gran Buda, Kamakura ofrece el Templo Hasedera (espectaculares vistas al océano y una famosa estatua dorada de Kannon), el Santuario Tsurugaoka Hachimangu (el santuario más importante de la ciudad, con un dramático camino de acceso) y el Templo Hokokuji (un sereno bosque de bambú donde puedes disfrutar de té matcha). La calle comercial Komachi-dori, cerca de la estación, es perfecta para almorzar y picar algo. Prueba el shirasu local (sardinas bebé) por el que Kamakura es famosa.
            </p>

            <h3>
              Ideal Para
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Amantes de la historia, visitantes que viajan a Japón por primera vez y quieren una experiencia completa, familias (terreno fácil, mucha variedad) y entusiastas de la gastronomía. Kamakura es también la excursión más fácil logísticamente: conexiones de tren sencillas, zona compacta para caminar y senderos bien señalizados.
            </p>

            <h3>
              Lo Que la Mayoría No Sabe
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mayoría de los turistas siguen la misma ruta (Estación → Hachimangu → Gran Buda → Estación), pero la verdadera magia de Kamakura está en los templos más pequeños escondidos en las colinas circundantes. El Templo Zuisen-ji tiene un impresionante jardín de rocas que recibe una fracción de los visitantes. Los senderos entre templos ofrecen vistas al mar y paseos por el bosque. Y en junio, Kamakura se transforma en un paraíso de hortensias. El jardín de hortensias azules del Templo Meigetsu-in es uno de los lugares más fotografiados de Japón.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Link to="/es/tours/kamakura-day-trip" className="text-accent hover:underline font-medium">
                Ver detalles de nuestra Excursión a Kamakura →
              </Link>
            </p>

            {/* Kamakura Day Trip Deep Dive */}
            <div className="section-eyebrow"><span>Sección 03 · Excursión a Kamakura</span></div>
            <h2 id="section-03-excursion-kamakura" className="scroll-mt-20">
              ¿Vale la Pena una Excursión de un Día a Kamakura desde Tokio?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Respuesta corta: sí, y es la excursión que más recomiendo a los viajeros que vienen a Tokio por primera vez. Una excursión de un día a Kamakura desde Tokio te ofrece templos antiguos, un Buda de bronce de 13 metros, vistas al océano y excelente gastronomía local — todo a aproximadamente una hora del centro de Tokio. De las tres opciones comparadas en esta guía, Kamakura es la más sencilla logísticamente y, para muchos viajeros, también la más gratificante.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A continuación te dejo lo que realmente necesitas para planificar una excursión a Kamakura: cómo llegar, dónde aprovechar las horas y un itinerario de muestra que uso con mis clientes.
            </p>

            <h3>Cómo Llegar a Kamakura desde Tokio</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La ruta más sencilla es la <strong>Línea JR Yokosuka</strong> desde la Estación de Tokio o de Shinagawa directa a la Estación de Kamakura — unos 55–60 minutos, sin transbordos, alrededor de ¥940 por trayecto, e incluida en el JR Pass. Una vez allí, el <strong>Enoden (Ferrocarril Eléctrico de Enoshima)</strong> es un encantador tranvía local que va desde la Estación de Kamakura por la costa hasta Hase (la zona del Gran Buda) y Enoshima. La mayoría de las atracciones principales de Kamakura están a poca distancia caminando desde la Estación de Kamakura o de Hase, así que una excursión a Kamakura rara vez implica más de dos cortos viajes en tren en total.
            </p>

            <h3>Los 5 Mejores Lugares para una Excursión a Kamakura</h3>
            <ol className="space-y-3 mb-4 list-decimal list-outside ml-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Gran Buda (Kotoku-in):</strong> el icono de Kamakura — un Buda de bronce de 13 metros fundido en 1252. Entrada ¥300 para adultos, más ¥50 para entrar al interior hueco de la estatua. Abierto 8:00–17:30 (abril–septiembre) / 8:00–17:00 (octubre–marzo); última entrada 15 minutos antes del cierre. A unos 5 minutos a pie de la Estación de Hase del Enoden.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Santuario Tsurugaoka Hachimangu:</strong> el santuario más importante de Kamakura, fundado en 1180 por Minamoto no Yoritomo, el primer shogún. Entrada gratuita, abierto desde temprano (5:00 abril–septiembre / 6:00 octubre–marzo) hasta las 21:00. La amplia avenida ceremonial de acceso (Wakamiya Oji) que va desde la playa hasta el santuario es ya un atractivo en sí mismo.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Templo Hasedera:</strong> templo en la ladera con espectaculares vistas al océano y una famosa estatua de Kannon de madera de 9 metros. Entrada ¥400 para adultos. Abierto 8:00–17:00 (julio–marzo) / 8:00–17:30 (abril–junio). A poca distancia caminando de la Estación de Hase.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Templo Hokokuji (Bosque de Bambú):</strong> un pequeño templo zen con un sereno bosque de bambú y una casa de té donde puedes tomar matcha mientras contemplas el bambú. Entrada ¥400 (o ¥1.000 con matcha incluido). Abierto 9:00–16:00. Más tranquilo que los grandes nombres — vale la pena la caminata extra si buscas una pausa contemplativa.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Playa de Yuigahama:</strong> gratuita, abierta todo el año. A 5–10 minutos a pie de la Estación de Hase, es donde los locales de Kamakura van a hacer surf, nadar en verano y pasear en cualquier época. Un buen lugar para bajar el ritmo entre templos — especialmente con un bol de arroz con shirasu (anchoítas blancas) en mano.
              </li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm italic">
              Los horarios, tarifas y precios de entrada pueden cambiar sin previo aviso — confirma en los sitios web oficiales de los templos y de JR East antes de ir.
            </p>

            <h3>Itinerario de Muestra para una Excursión a Kamakura</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es un itinerario realista de un día en Kamakura que uso con mis clientes. Asume una salida desde el centro de Tokio en torno a las 8:30 y un regreso entre 17:30 y 18:00, lo que da unas 7–8 horas en total incluyendo el transporte.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Mañana (8:30–12:00):</strong> Salida de la Estación de Tokio 8:30 → Llegada a Kita-Kamakura ~9:30 → Templo Engaku-ji (1 hora) → Sendero Daibutsu (90 minutos) → Gran Buda en Kotoku-in.</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Almuerzo (12:30–13:30):</strong> Bol de arroz con shirasu cerca de la Estación de Hase, o soba artesanal en Komachi-dori.</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Tarde (13:30–16:30):</strong> Templo Hasedera (vistas al océano, sala del Kannon) → Enoden hasta la playa de Yuigahama → caminata de regreso vía Komachi-dori → Santuario Tsurugaoka Hachimangu.</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Regreso (16:30–17:30):</strong> Salida desde la Estación de Kamakura → llegada a la Estación de Tokio ~17:30.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este itinerario de Kamakura cubre los lugares principales sin agobios. Si caminar por senderos no es lo tuyo, cambia la ruta de senderismo por un templo extra — el bosque de bambú de Hokokuji combina muy bien con un almuerzo tranquilo en la misma zona.
            </p>

            {/* Hakone */}
            <div className="section-eyebrow"><span>Sección 04 · Hakone</span></div>
            <h2 id="section-04-hakone" className="scroll-mt-20">
              Hakone: Aguas Termales y la Icónica Vista del Fuji
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hakone es adonde van los residentes de Tokio para escapar de la ciudad, y ha sido un refugio popular durante siglos. Ubicado en las montañas al suroeste de Tokio, ofrece una combinación única de belleza natural, geología volcánica y cultura tradicional de aguas termales. El famoso "Circuito de Hakone", un recorrido de trenes, teleféricos, funiculares, barcos turísticos y autobuses, es tanto un sistema de transporte como una atracción en sí mismo.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/hakone-fuji-comparison.webp"
                alt="Monte Fuji desde Hakone - excursión escénica desde Tokio"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                El Monte Fuji desde el Lago Ashi, la vista más codiciada de Hakone
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El punto culminante para la mayoría de los visitantes es la vista del Monte Fuji sobre el Lago Ashi. Cuando las condiciones son favorables (las mañanas despejadas de invierno son las mejores), la cima nevada reflejada en el lago es una de las imágenes más icónicas de Japón. El teleférico de Hakone te lleva por encima de Owakudani, un valle volcánico activo donde puedes ver vapor sulfuroso saliendo del suelo y probar los famosos huevos negros, huevos normales cocidos en las aguas termales volcánicas que tiñen la cáscara de negro. La leyenda dice que cada uno añade siete años a tu vida.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El Santuario de Hakone, con su torii rojo situado en el lago, es uno de los lugares espirituales más fotografiados de Japón. El camino de acceso a través del antiguo bosque de cedros es atmosférico, y el torii junto al lago crea una composición impresionante. Más allá de las atracciones principales, Hakone ofrece el Museo al Aire Libre (impresionante jardín de esculturas con pabellón de Picasso), posadas tradicionales ryokan y, por supuesto, onsen, los baños termales naturales que son fundamentales en la cultura japonesa de relajación.
            </p>

            <h3>
              Ideal Para
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Amantes de la naturaleza, fotógrafos (especialmente los que buscan la foto del Fuji), parejas que buscan una experiencia romántica, y cualquier persona que quiera un cambio completo de escenario respecto a la energía urbana de Tokio. Si ver el Monte Fuji está en tu lista de deseos, Hakone es tu mejor opción para una excursión de un día (aunque se requiere la cooperación del clima; el Fuji es visible aproximadamente el 60-70% de los días despejados en invierno, menos en verano).
            </p>

            <h3>
              Consejo Local: El Factor Fuji
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esto es algo que la mayoría de las guías de viaje no te dicen: la visibilidad del Monte Fuji es muy impredecible y cambia a lo largo del día. La mañana es generalmente mejor que la tarde, y los meses de invierno (octubre a febrero) ofrecen probabilidades significativamente mejores que el verano. Las nubes pueden aparecer en cuestión de minutos. Por eso exactamente un guía es valioso en Hakone: verifico las condiciones climáticas en tiempo real y reorganizo el itinerario para maximizar tus posibilidades. Si el Fuji es visible por la mañana, hacemos el crucero por el lago primero en lugar de dejarlo para después.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El sistema de transporte también es genuinamente complejo. El Hakone Free Pass es la opción más económica, pero averiguar la combinación correcta de transporte, horarios y rutas por tu cuenta requiere una planificación considerable. Un guía elimina por completo esta carga mental.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Link to="/es/tours/hakone-day-trip" className="text-accent hover:underline font-medium">
                Ver detalles de nuestra Excursión a Hakone →
              </Link>
            </p>

            {/* Nikko */}
            <div className="section-eyebrow"><span>Sección 05 · Nikko: La Obra Maestra UNESCO Escondida</span></div>
            <h2 id="section-05-nikko-la-obra-maestra-unesco-escondida" className="scroll-mt-20">
              Nikko: La Obra Maestra UNESCO Escondida
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si Kamakura es la antigua capital accesible de Japón y Hakone es su parque escénico, Nikko es la obra maestra oculta que recompensa a quienes están dispuestos a hacer el viaje más largo. Ubicado a unas dos horas al norte de Tokio, en las montañas de la Prefectura de Tochigi, Nikko alberga el complejo de santuarios más ornamentado de Japón, y algunos de los paisajes naturales más espectaculares del país.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El Santuario Toshogu es el mausoleo de Tokugawa Ieyasu, el fundador del shogunato Tokugawa que gobernó Japón durante más de 250 años. A diferencia de la sobria simplicidad de la mayoría de los santuarios japoneses, Toshogu es deliberada, casi abrumadoramente ornamentado. Más de 5.000 tallas intrincadas cubren cada superficie: criaturas mitológicas, escenas naturales, alegorías filosóficas y narrativas históricas. ¿Los monos de "no ver el mal, no hablar el mal, no oír el mal" que ves en souvenirs de todo el mundo? La talla original está aquí, y forma parte de una serie más amplia que representa las etapas de la vida humana.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Más allá del complejo del santuario, Nikko ofrece las impresionantes Cataratas Kegon, una cascada de 97 metros que puedes contemplar desde una plataforma de observación a la que se accede mediante un ascensor dentro del acantilado. El Lago Chuzenji, a 1.269 metros de altitud, ofrece un clima y una atmósfera completamente diferentes a los de Tokio. En otoño (octubre a noviembre), la ladera de la montaña se transforma en un tapiz de rojo, naranja y dorado que rivaliza con cualquier espectáculo de follaje en el mundo.
            </p>

            <h3>
              Ideal Para
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apasionados de la historia que quieran comprender la era Tokugawa, amantes de la naturaleza (especialmente en otoño), entusiastas del patrimonio UNESCO y fotógrafos. Nikko también tiene significativamente menos aglomeraciones que Kamakura o Hakone, lo cual es una gran ventaja para quienes prefieren una experiencia más tranquila.
            </p>

            <h3>
              Por Qué Tiene Menos Aglomeraciones Que los Otros
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El mayor tiempo de viaje (unas 2 horas en cada sentido) significa que menos turistas hacen el viaje, especialmente en visitas de un día. Esto juega a tu favor: tendrás más espacio en el santuario, colas más cortas para el ascensor de las cataratas y una experiencia más contemplativa en general. La contrapartida es un día más largo: tendrás que salir de Tokio más temprano y volver más tarde. Pero para los viajeros que valoran la profundidad por encima de la comodidad, Nikko ofrece una experiencia que los destinos más cercanos simplemente no pueden igualar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un guía es particularmente valioso en Nikko porque las tallas de Toshogu son una enciclopedia visual que requiere explicación para ser apreciada. Sin contexto, verás "decoraciones bonitas". Con un guía, comprenderás los mensajes políticos, el simbolismo budista y la filosofía confuciana incrustados en cada panel. Es la diferencia entre mirar la Capilla Sixtina y entender lo que Miguel Ángel intentaba decir.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Link to="/es/tours/nikko-day-trip" className="text-accent hover:underline font-medium">
                Ver detalles de nuestra Excursión a Nikko →
              </Link>
            </p>

            {/* Can I Do Two? */}
            <div className="section-eyebrow"><span>Sección 06 · ¿Puedo Hacer Dos en un Solo Viaje?</span></div>
            <h2 id="section-06-puedo-hacer-dos-en-un-solo-viaje" className="scroll-mt-20">
              ¿Puedo Hacer Dos en un Solo Viaje?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si tienes varios días disponibles, puedes combinar excursiones sin problema. Las combinaciones más populares son:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Kamakura + Hakone:</strong> La combinación más popular. Ambos están al sur/suroeste de Tokio, e incluso podrías pasar una noche en Hakone en un ryokan para la experiencia definitiva de aguas termales.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Kamakura + Nikko:</strong> Ideal para entusiastas de la historia. Kamakura (shogunato de Kamakura) y Nikko (shogunato Tokugawa) juntos cuentan la historia de 700 años de gobierno militar japonés.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hakone + Nikko:</strong> Para amantes de la naturaleza que quieren la máxima variedad de paisajes. Montañas, lagos, volcanes, cascadas... todo lo que la geografía de Japón puede ofrecer.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ofrecemos paquetes de varios días que combinan tours a pie por Tokio con excursiones. Esta es la opción de mejor valor y nos permite crear un itinerario completo que cubre diferentes aspectos de la cultura y la naturaleza de Japón.{" "}
              <Link to="/es/contact" className="text-accent hover:underline">
                Contáctanos
              </Link>{" "}
              para consultar opciones de varios días.
            </p>

            {/* My Recommendation */}
            <div className="section-eyebrow"><span>Sección 07 · Mi Recomendación</span></div>
            <h2 id="section-07-mi-recomendación" className="scroll-mt-20">
              Mi Recomendación
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de cientos de excursiones con viajeros, esta es mi recomendación honesta:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Si solo tienes 1 día:</strong> Ve a Kamakura. Es la experiencia más fácil, más completa y con el menor tiempo de viaje. Verás templos antiguos, una estatua de Buda mundialmente famosa, vistas al océano y excelente comida, todo en un cómodo día de 7-8 horas.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Si quieres naturaleza + relajación:</strong> Elige Hakone. La combinación de vistas del Monte Fuji, valle volcánico, crucero por el lago y la posible experiencia de onsen crea un día que se siente como una escapada completa de Tokio.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Si te encanta la historia y no te importa un viaje más largo:</strong> Nikko es la respuesta. El Santuario Toshogu por sí solo justifica el viaje, y el paisaje natural es un bonus que hace que el mayor tiempo de viaje merezca la pena.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Si tienes 2+ días para excursiones:</strong> Haz Kamakura + Hakone (la combinación más popular) o Kamakura + Nikko (para amantes de la historia). Cada destino ofrece algo que los otros no, así que no sentirás que repites la experiencia.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo más importante es elegir basándote en lo que te entusiasma, no en lo que es "más popular". Si te apasiona genuinamente la historia, Nikko te dejará boquiabierto aunque sea el menos visitado de los tres. Si sueñas con ver el Monte Fuji, Hakone es tu mejor oportunidad. Y si quieres la experiencia más equilibrada y relajada, Kamakura cumple siempre.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              El momento también importa; cada destino tiene una temporada óptima. Para un desglose completo de cuándo planificar tu viaje, consulta nuestra{" "}
              <Link to="/es/blog/mejor-epoca-visitar-tokio" className="text-accent hover:underline">
                guía de la Mejor Época para Visitar Tokio
              </Link>
              .
            </p>

            {/* FAQ */}
            <div className="section-eyebrow"><span>Sección 08 · Preguntas Frecuentes</span></div>
            <h2 id="section-08-faq" className="scroll-mt-20">
              Preguntas Frecuentes
            </h2>
            <div className="faq-block space-y-8">
              <div>
                <h3>¿Cuánto dura una excursión de un día desde Tokio a Kamakura?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Calcula entre 7 y 8 horas en total incluyendo el transporte. La Línea JR Yokosuka tarda unos 55–60 minutos en cada sentido, lo que deja 5–6 horas en Kamakura — suficientes para ver el Gran Buda, dos o tres templos, recorrer parte de un sendero y almorzar. Una salida de Tokio sobre las 8:30 con regreso entre 17:00 y 18:00 es un ritmo cómodo.
                </p>
              </div>
              <div>
                <h3>¿Cuál es la mejor excursión desde Tokio: Kamakura o Hakone?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depende de lo que busques. Kamakura es la mejor excursión para quienes vienen por primera vez y quieren templos, historia y gastronomía en una zona caminable, con el menor tiempo de viaje (alrededor de 1 hora). Hakone es la mejor opción si tu prioridad es ver el Monte Fuji, sumergirte en aguas termales o explorar paisajes volcánicos — pero requiere buen tiempo y unos 90 minutos de viaje en cada sentido. Si solo puedes elegir una y no estás seguro, Kamakura es la apuesta más segura.
                </p>
              </div>
              <div>
                <h3>¿Cómo llego a Kamakura desde Tokio?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La ruta más rápida y sencilla es la Línea JR Yokosuka directa desde la Estación de Tokio o la de Shinagawa hasta la Estación de Kamakura — unos 55–60 minutos sin transbordos, alrededor de ¥940 por trayecto, incluida en el JR Pass. Dentro de Kamakura, el Enoden (Ferrocarril Eléctrico de Enoshima) conecta la Estación de Kamakura con la Estación de Hase (la zona del Gran Buda) y Enoshima por la costa, y forma parte de la experiencia.
                </p>
              </div>
              <div>
                <h3>¿Vale la pena una excursión de un día a Kamakura desde Tokio?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sí. De los tres destinos populares de excursión desde Tokio (Kamakura, Hakone, Nikko), Kamakura es la opción más completa para un solo día. Tendrás historia de la antigua capital, una icónica estatua de Buda, vistas al océano, senderos y una gastronomía notable — todo a una hora del centro de Tokio. Es especialmente recomendable para quienes visitan Japón por primera vez, viajeros con curiosidad histórica y cualquiera que prefiera un día caminable y poco logístico.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2>
                ¿Listo para explorar más allá de Tokio?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Echa un vistazo a nuestras excursiones de un día, o contáctanos para crear un itinerario personalizado de varios días que combine lo mejor de Tokio y los destinos cercanos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Ver Excursiones
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Planificar Viaje Multi-día
                </Link>
              </div>
            </div>
          
            </article>

            <BlogArticleAside />
          </div>
        </div>
      </section>

      <RelatedTourCards tourIds={["custom"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Kamakura vs Hakone vs Nikko: ¿Qué Excursión Elegir desde Tokio?",
            "description": "¿No puedes decidir entre Kamakura, Hakone o Nikko? Un guía local compara tiempo de viaje, puntos destacados y para quién es mejor cada excursión.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/comparativa-excursiones",
            },
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto dura una excursión de un día desde Tokio a Kamakura?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Calcula entre 7 y 8 horas en total incluyendo el transporte. La Línea JR Yokosuka tarda unos 55–60 minutos en cada sentido, lo que deja 5–6 horas en Kamakura — suficientes para ver el Gran Buda, dos o tres templos, recorrer parte de un sendero y almorzar.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la mejor excursión desde Tokio: Kamakura o Hakone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kamakura es la mejor excursión para quienes vienen por primera vez y quieren templos, historia y gastronomía en una zona caminable, con el menor tiempo de viaje (alrededor de 1 hora). Hakone es la mejor opción si tu prioridad es ver el Monte Fuji y los onsen, pero requiere buen tiempo y unos 90 minutos de viaje en cada sentido.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Cómo llego a Kamakura desde Tokio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La ruta más rápida es la Línea JR Yokosuka directa desde la Estación de Tokio o la de Shinagawa hasta la Estación de Kamakura — unos 55–60 minutos sin transbordos, alrededor de ¥940 por trayecto, incluida en el JR Pass.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Vale la pena una excursión de un día a Kamakura desde Tokio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. Kamakura es la excursión desde Tokio más completa — templos antiguos, el Gran Buda, vistas al océano y una gastronomía notable, todo a una hora del centro de Tokio. Es especialmente recomendable para quienes visitan Japón por primera vez y para viajeros con curiosidad histórica.",
                },
              },
            ],
          }),
        }}
      />
    </div>

      </Layout>
  );
};

export default EsComparativaExcursiones;
