// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsExcursionNikkoDesdeTokio = () => {
  return (
    <Layout>
      <SEO
        title="Excursión a Nikko desde Tokio: guía completa 2026"
        description="Cómo ir a Nikko desde Tokio, cuánto tarda, qué ver y si vale la pena ir con guía o solo. Todo lo que necesitas saber antes de salir."
        canonicalPath="/es/blog/excursion-nikko-desde-tokio"
        hreflang={[
          { lang: "es", path: "/es/blog/excursion-nikko-desde-tokio" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/nikko-toshogu-hero.jpg"
          alt="Torii tradicional japonés — excursión a Nikko desde Tokio"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Article Header */}
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
              Excursión a Nikko desde Tokio: Guía Completa 2026
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
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Si estás planificando una excursión a Nikko desde Tokio, probablemente ya hayas visto las fotos del santuario Toshogu entre los cedros gigantes y te hayas preguntado: ¿merece la pena ir? La respuesta corta es sí, absolutamente. Pero déjame explicarte por qué, cómo llegar sin complicaciones y qué ver para que no pierdas ni un minuto del día.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Llevo años guiando visitantes en esta excursión a Nikko desde Tokio y cada vez descubro algo nuevo. Nikko no es un destino que se agota en una visita, pero una jornada bien planificada te permite ver lo esencial y entender por qué este rincón de montaña fue tan importante para la historia de Japón. En esta guía te cuento todo lo que necesitas: transporte, itinerario, precios y los detalles que solo conocemos los guías locales.
            </p>

            {/* ¿Por qué Nikko? */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Por qué Nikko? (y por qué la mayoría se lo pierde)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mayoría de los viajeros que vienen a Tokio tienen Kioto, Osaka y quizás Hiroshima en su lista. Nikko rara vez aparece en los primeros borradores del itinerario, y es una pena. A menos de dos horas de la capital, Nikko ofrece algo que ninguna otra excursión de un día puede igualar: la combinación perfecta de arquitectura monumental, bosques centenarios y una atmósfera que te hace sentir que has viajado siglos atrás en el tiempo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Un poco de historia: el mausoleo de Tokugawa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para entender Nikko hay que entender a Tokugawa Ieyasu, el shogun que unificó Japón en 1603 y fundó una dinastía que gobernaría durante más de 250 años. Cuando Ieyasu murió en 1616, su nieto Iemitsu ordenó la construcción de un mausoleo que reflejara el poder absoluto de la familia. El resultado fue Toshogu, un complejo de santuarios tan elaborado y tan cargado de simbolismo político que no tiene equivalente en todo Japón. Piensa en ello como el Escorial en España — un mausoleo de poder. No es un templo donde ir a meditar en silencio. Es una declaración: "aquí descansa quien gobernó todo esto".
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo que hace especial a Nikko (naturaleza + historia)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que diferencia a Nikko de otros destinos históricos japoneses es su entorno natural. Los santuarios no están en medio de una ciudad moderna sino envueltos en un bosque de cedros japoneses (sugi) que llevan ahí más de 400 años. Algunos de estos árboles superan los 40 metros de altura y sus troncos son tan gruesos que tres personas no pueden abrazarlos. La luz que se filtra entre las copas, el musgo que cubre las piedras, el sonido del agua corriendo por todas partes — todo esto crea una experiencia sensorial que ninguna foto puede capturar. Es la naturaleza y la historia coexistiendo de una forma que en Japón solo encuentras aquí.
            </p>

            {/* Cómo llegar */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo llegar a Nikko desde Tokio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hay dos rutas principales para hacer la excursión a Nikko desde Tokio. La elección depende de tu presupuesto, si tienes JR Pass y cuánto valoras tu tiempo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Opción 1: Tobu Railway desde Asakusa (la más económica)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La línea Tobu sale de la estación de Asakusa y te lleva directamente a Tobu-Nikko. El tren expreso limitado (tokkyuu) tarda aproximadamente 1 hora y 50 minutos y cuesta alrededor de 2.800 yenes por trayecto. Si quieres ahorrar más, puedes tomar el tren rápido (kaisoku), que tarda unas 2 horas y 20 minutos pero cuesta solo unos 1.400 yenes. Esta es la opción que más recomiendo a los viajeros con presupuesto ajustado. La estación de salida en Asakusa está justo al lado del barrio del Senso-ji, así que puedes combinar ambas visitas si te organizas bien.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Opción 2: JR Shinkansen + línea local (la más rápida)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si tienes el Japan Rail Pass, esta opción sale "gratis" dentro de tu pase. Tomas el Tohoku Shinkansen desde Tokio o Ueno hasta Utsunomiya (unos 50 minutos) y ahí cambias a la línea JR Nikko (otros 45 minutos). El tiempo total es de aproximadamente 1 hora y 40 minutos, ligeramente más rápido que Tobu. Sin JR Pass, el coste es significativamente mayor — alrededor de 5.500 yenes por trayecto — así que solo merece la pena si ya tienes el pase activado.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tiempos reales y precios actualizados 2026
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Para que lo tengas claro de un vistazo: <strong className="text-foreground">Tobu Express desde Asakusa: ~1h50min, ~2.800 yenes</strong>. <strong className="text-foreground">Tobu Rápido desde Asakusa: ~2h20min, ~1.400 yenes</strong>. <strong className="text-foreground">JR Shinkansen + local: ~1h40min, ~5.500 yenes (cubierto por JR Pass)</strong>. Mi consejo: sal temprano. El primer tren Tobu Express sale alrededor de las 7:30 AM y te permite estar en Nikko a las 9:20, justo cuando abren los santuarios y antes de que lleguen los autobuses turísticos.
            </p>

            {/* Qué ver */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué ver en Nikko (itinerario de un día)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Con un día bien aprovechado puedes ver los puntos esenciales sin prisas. Este es el itinerario que sigo cuando guío la excursión a Nikko desde Tokio, ajustado a lo largo de muchas visitas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Toshogu: el santuario más decorado de Japón
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El santuario Toshogu es el plato principal y necesitas al menos 90 minutos para verlo con calma. La puerta Yomeimon, con más de 500 tallas de dragones, flores, sabios y criaturas míticas, es la pieza central. Los artesanos que la construyeron tardaron 12 años. Fíjate en que una de las columnas tiene el patrón tallado al revés — se hizo a propósito. En la creencia japonesa, la perfección invita a la decadencia, así que el "error" deliberado protege al edificio de la ruina. Ese tipo de detalle es lo que un guía te puede señalar y una audioguía no.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dentro del complejo encontrarás también los famosos tres monos sabios (no ver, no oír, no hablar) tallados en el establo sagrado, y el gato durmiente (nemuri-neko) sobre la puerta que lleva a la tumba de Ieyasu. La subida a la tumba, por unas 200 escaleras de piedra entre cedros inmensos, es uno de los momentos más sobrecogedores de toda la excursión. La entrada a Toshogu cuesta 1.300 yenes para adultos.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Puente Shinkyo y el río Daiya
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El puente Shinkyo, pintado en rojo lacado brillante, cruza el río Daiya justo a la entrada de la zona de santuarios. Es considerado uno de los tres puentes más bellos de Japón. Puedes cruzarlo por 300 yenes o simplemente admirarlo desde la orilla — la vista desde abajo, con el agua cristalina del río, los árboles y el puente rojo enmarcando la escena, es honestamente igual de buena. Es un punto de parada perfecto para tomar fotos antes de subir hacia los santuarios.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lago Chuzenji y cascada Kegon (si tienes tiempo)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si sales temprano de Tokio y eres eficiente en los santuarios, puedes tomar el autobús desde Nikko hasta el Lago Chuzenji (unos 50 minutos, carretera de montaña con curvas espectaculares). El lago, de origen volcánico, está a 1.269 metros de altitud y la cascada Kegon cae 97 metros desde su desagüe. Un ascensor te baja a la base de la cascada por 570 yenes. En otoño, con los arces rojos reflejados en el agua, es uno de los paisajes más impresionantes de la región de Kanto. Pero sé realista con los tiempos: si eliges subir al lago, necesitarás un día muy largo o sacrificar parte de la visita a los santuarios.
            </p>

            {/* Cuándo ir */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cuándo ir a Nikko
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Otoño (octubre-noviembre): la mejor época
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si puedes elegir, planifica tu excursión a Nikko desde Tokio entre mediados de octubre y mediados de noviembre. El koyo (cambio de color de las hojas) transforma los bosques de cedros y arces en una explosión de rojos, naranjas y amarillos que contrasta espectacularmente con las lacas rojas y doradas de los santuarios. La zona del Lago Chuzenji cambia de color una o dos semanas antes que los santuarios, porque está a mayor altitud. Es la época más popular, así que espera más visitantes, pero la belleza compensa con creces.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Primavera y verano
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La primavera trae los cerezos en flor a Nikko, normalmente una o dos semanas después de Tokio por la diferencia de altitud. El verano es verde, exuberante y considerablemente más fresco que Tokio — una ventaja real cuando la capital está a 35 grados y 90% de humedad. Nikko en verano funciona casi como un refugio de montaña: bosques densos, cascadas con niebla y temperaturas que pueden ser 5 a 8 grados más bajas que en la ciudad.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Invierno: Nikko bajo la nieve
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nikko en invierno es un secreto bien guardado. La nieve cubre los tejados de los santuarios y los cedros, creando un paisaje de postal que muy pocos turistas ven porque la mayoría evita viajar en enero y febrero. Hay menos servicios de autobús hacia el Lago Chuzenji, pero los santuarios siguen abiertos y la experiencia de caminar entre los cedros nevados, prácticamente solo, es difícil de superar. Lleva ropa de abrigo seria — las temperaturas pueden bajar a -5 grados.
            </p>

            {/* ¿Con guía o por tu cuenta? */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Con guía o por tu cuenta?
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo que te pierdes sin guía
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puedes hacer la excursión a Nikko desde Tokio perfectamente por tu cuenta. Los trenes son fáciles de usar, los carteles están en inglés y los santuarios tienen folletos informativos. Pero hay una diferencia enorme entre "ver" Toshogu y "entender" Toshogu. Sin contexto, las 500 tallas de la puerta Yomeimon son bonitas pero incomprensibles. Con un guía, cada talla cuenta una historia: los dragones que representan el poder imperial, las flores que simbolizan las estaciones, los niños jugando que representan la paz que trajo el shogunato Tokugawa. Lo mismo ocurre con los tres monos, el gato durmiente y decenas de detalles que la mayoría de visitantes pasan de largo sin saber lo que significan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para una visión comparativa de las diferentes excursiones desde Tokio y cuáles merecen más un guía, puedes consultar nuestra{" "}
              <Link to="/es/blog/comparativa-excursiones" className="text-accent hover:underline">
                comparativa de excursiones desde Tokio
              </Link>
              .
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mi experiencia guiando en Nikko
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de tantas visitas a Nikko, lo que más disfruto es ver la cara de mis invitados cuando entienden la escala de lo que están viendo. Toshogu no es solo un santuario bonito — es el proyecto arquitectónico más ambicioso de toda la era Edo, financiado con el equivalente a miles de millones de dólares actuales, construido por los mejores artesanos del país. Cuando explico eso, cuando señalo la columna invertida, cuando cuento la historia del gato que duerme porque ya no hay guerras que vigilar, el lugar cobra vida de una forma que una guía de papel no puede lograr. Es exactamente por eso que ofrecemos nuestro{" "}
              <Link to="/es/tours/nikko-day-trip" className="text-accent hover:underline">
                tour guiado de un día a Nikko
              </Link>
              .
            </p>

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas frecuentes sobre la excursión a Nikko desde Tokio
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Se puede hacer en un día?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sí, y es lo que hace la mayoría de visitantes. Saliendo de Tokio a las 7:30 y volviendo alrededor de las 18:00-19:00 tienes tiempo de sobra para ver los santuarios principales y el puente Shinkyo. Si quieres incluir el Lago Chuzenji, el día será más largo pero factible si sales muy temprano.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Cuánto cuesta?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Presupuesto mínimo para un día: transporte ida y vuelta en Tobu rápido (~2.800 yenes), entrada a Toshogu (1.300 yenes), comida (~1.500 yenes). Total aproximado: unos 5.600 yenes (alrededor de 35-40 euros). Si usas el tren expreso o subes al Lago Chuzenji, añade unos 2.000-3.000 yenes más.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Merece la pena el Nikko Pass?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El Nikko Pass de Tobu Railway existe en dos versiones: el básico (que cubre el trayecto Asakusa-Nikko y autobuses locales) y el "all area" (que incluye los autobuses hasta el Lago Chuzenji). Si planeas subir al lago, el all area pass se amortiza fácilmente. Si solo vas a ver los santuarios del centro de Nikko, el pase básico puede ahorrarte unos cientos de yenes, pero no es imprescindible.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Puedo ir con JR Pass?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sí, pero con la ruta JR (Shinkansen a Utsunomiya + línea JR Nikko). La línea Tobu no está cubierta por el JR Pass. Si ya tienes el pase activado, la ruta JR es la elección lógica. Si no tienes JR Pass, Tobu es más barato y más directo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Nikko o Kamakura?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ambas son excursiones excelentes pero muy diferentes. Kamakura es más cercana (una hora desde Tokio), tiene el Gran Buda y playas, y es perfecta para medio día. Nikko requiere más tiempo de viaje pero ofrece una experiencia más profunda e inmersiva. Si solo tienes tiempo para una y te interesa la historia y la naturaleza, Nikko. Si prefieres algo más relajado y cercano, Kamakura. Lo ideal, por supuesto, es hacer ambas.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres descubrir Nikko con un guía que conoce cada rincón?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En nuestro tour guiado de un día a Nikko, me encargo de todo el transporte, te explico la historia y el simbolismo de cada talla, y te llevo a los rincones que la mayoría de visitantes no encuentran solos. Sales de Tokio por la mañana y vuelves con la sensación de haber entendido uno de los lugares más extraordinarios de Japón.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/nikko-day-trip" className="btn-accent">
                  Reservar Tour a Nikko
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Hacer una Pregunta
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Excursión a Nikko desde Tokio: Guía Completa 2026",
            "description": "Cómo ir a Nikko desde Tokio, cuánto tarda, qué ver y si vale la pena ir con guía o solo. Todo lo que necesitas saber antes de salir.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
            },
            "datePublished": "2026-03-07",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/excursion-nikko-desde-tokio",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsExcursionNikkoDesdeTokio;
