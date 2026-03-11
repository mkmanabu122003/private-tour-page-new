// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";

const EsItinerarioTokio3Dias = () => {
  return (
    <Layout>
      <SEO
        title="Itinerario de 3 Días por Tokio | Guía Local Japonés"
        description="Itinerario de 3 días por Tokio elaborado por Manabu, guía japonés nativo. Qué ver, dónde comer y cómo moverse como un local. Consejos que no encontrarás en ninguna guía."
        canonicalPath="/es/blog/itinerario-tokio-3-dias"
        hreflang={[
          { lang: "en", path: "/blog/tokyo-3-day-itinerary" },
          { lang: "es", path: "/es/blog/itinerario-tokio-3-dias" },
          { lang: "x-default", path: "/blog/tokyo-3-day-itinerary" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/shibuya-crossing-tokyo.webp"
          alt="Cruce de Shibuya, itinerario de 3 días por Tokio"
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
            <p className="text-label text-accent mb-3">Itinerarios</p>
            <h1 className="heading-display text-foreground">
              El Itinerario Perfecto de 3 Días en Tokio, De un Guía Local
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                25 de febrero de 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido del artículo */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Después de guiar más de 500 tours en Tokio, he visto qué funciona y qué no para los visitantes primerizos. Algunos viajeros intentan meter todo en un solo día y terminan agotados. Otros se pierden joyas ocultas porque se limitan a las atracciones más obvias. Este itinerario de 3 días equilibra los lugares imprescindibles con experiencias locales que la mayoría de turistas se pierde. Siéntete libre de mezclar y combinar, cada viajero es diferente, y el mejor itinerario es el que te entusiasma.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              He organizado los tres días geográficamente para minimizar el tiempo de transporte y maximizar la exploración. Cada día cubre una faceta diferente de Tokio: el este tradicional, el oeste moderno, y luego tu elección entre el centro de Tokio o una excursión de un día. Esto es lo que recomiendo basándome en años de recorrer estas calles con viajeros de todo el mundo.
            </p>

            {/* Día 1 */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Día 1: Este de Tokio, Historia y Tradición
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mañana: Asakusa, Donde Vive el Viejo Tokio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Comienza tu viaje por Tokio donde la propia ciudad comenzó: Asakusa. Este barrio alberga el Senso-ji, el templo más antiguo de Tokio, fundado en el siglo VII. Atraviesa el icónico Kaminarimon (Puerta del Trueno) y recorre Nakamise-dori, una calle comercial que ha servido a visitantes durante siglos. Para una inmersión más profunda en la zona, lee nuestra{" "}
              <Link to="/es/blog/guia-asakusa" className="text-accent hover:underline">
                guía completa de Asakusa
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Consejo local:</strong> Llega antes de las 9 AM para vivir el Senso-ji sin aglomeraciones. La luz de la mañana atravesando el humo del incienso crea una atmósfera mágica que simplemente no se consigue más tarde. El recinto del templo está abierto las 24 horas, pero las tiendas de Nakamise abren alrededor de las 10 AM, así que obtienes lo mejor de ambos mundos si calculas bien el momento.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No te limites a la calle principal: adéntrate en los callejones laterales donde encontrarás tiendas de artesanía tradicional, pequeños templos y restaurantes locales que han pertenecido a la misma familia durante generaciones. La zona alrededor del Jardín del Templo Dempoin es particularmente hermosa y a menudo pasada por alto por los turistas que corren hacia el Senso-ji.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si quieres una exploración más profunda de Asakusa con contexto cultural y rincones ocultos, nuestro{" "}
              <Link to="/es/tours/asakusa" className="text-accent hover:underline">
                Tour a Pie por Asakusa
              </Link>{" "}
              cubre todo, desde rituales del templo hasta los mejores puestos de comida callejera.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Media Mañana: Paseo hasta Tokyo Skytree por el Parque Sumida
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde Asakusa, da un paseo panorámico a lo largo del río Sumida hacia el Tokyo Skytree. El paseo ribereño es una de las caminatas más fotogénicas de Tokio, con la pagoda del templo tradicional a un lado y la futurista torre Skytree al otro. En primavera (finales de marzo a principios de abril), esta zona está flanqueada por cerezos en flor, y es uno de los mejores lugares de la ciudad para contemplarlos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No necesitas subir al Skytree (largas colas y caro), pero las vistas desde la base y el centro comercial Solamachi circundante merecen los 15 minutos de caminata. El complejo también tiene excelentes opciones gastronómicas si te está entrando hambre.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Almuerzo: Sabores Locales Cerca de Asakusa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para el almuerzo, recomiendo probar uno de los restaurantes tradicionales de soba (fideos de trigo sarraceno) o un local de tempura en Asakusa. Asakusa ha sido famosa por la tempura desde el período Edo, y todavía hay restaurantes familiares aquí que llevan perfeccionando su arte más de un siglo. Si eres aventurero, prueba el monjayaki, la versión tokiota del okonomiyaki de Osaka, más desordenado pero delicioso.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tarde: Yanaka, El Nostálgico Casco Antiguo de Tokio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Toma el tren hasta la estación de Nippori (unos 15 minutos) y adéntrate en Yanaka, uno de los pocos barrios de Tokio que sobrevivió tanto al terremoto de 1923 como a los bombardeos de la Segunda Guerra Mundial. Este es el Tokio de antaño: callejuelas estrechas, casas de madera, tiendas independientes y gatos descansando sobre los muros de los templos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recorre la calle comercial Yanaka Ginza, donde vendedores locales ofrecen productos artesanales, aperitivos tradicionales y cerveza artesanal. Visita el Templo Tennoji, pasea por el atmosférico Cementerio de Yanaka y, si el momento es el adecuado, contempla la puesta de sol desde las famosas escaleras Yuyake Dandan. Es verdaderamente un momento especial.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yanaka es un barrio que premia la exploración pausada, y es un lugar al que la mayoría de turistas nunca llega. Para la experiencia completa, nuestro{" "}
              <Link to="/es/tours/yanaka" className="text-accent hover:underline">
                Tour a Pie por Yanaka
              </Link>{" "}
              descubre historias y rincones que no encontrarás en ninguna guía.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Noche: Zona de Ueno, Mercado Ameyoko
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Termina tu primer día en Ameyoko, la animada calle-mercado cerca de la estación de Ueno. Originalmente un mercado negro de posguerra, ahora es una bulliciosa franja de puestos de comida, vendedores de marisco y tiendas de descuentos. Ideal para comida callejera: prueba los cuencos de marisco fresco, las brochetas de carne a la parrilla o las fresas cubiertas de chocolate. La energía aquí es contagiosa y es una manera perfecta de terminar tu primer día.
            </p>

            {/* Día 2 */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              Día 2: Oeste de Tokio, Cultura Moderna y Energía
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mañana: Santuario Meiji, Paz en la Ciudad
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Comienza tu segundo día en el Santuario Meiji (Meiji Jingu), dedicado al Emperador Meiji y a la Emperatriz Shoken. Llega temprano (el santuario abre al amanecer) para la experiencia más tranquila. Camina a través del imponente torii y del bosque de 70 hectáreas. Es difícil creer que estás en medio de la zona más concurrida de Tokio. El bosque fue plantado íntegramente por voluntarios en la década de 1920, con árboles donados de todas las prefecturas de Japón.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estate atento a las ceremonias de boda si visitas los fines de semana: podrías presenciar una procesión nupcial sintoísta tradicional. El santuario también tiene un hermoso jardín de iris (mejor en junio) y una exhibición de barriles de sake que cuenta la historia de la relación de Japón con el vino y los licores.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Media Mañana: Harajuku, Explosión de Cultura Juvenil
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde la salida sur del Santuario Meiji, emergerás directamente en la famosa Takeshita Street de Harajuku, una de las transiciones más dramáticas de Tokio. En segundos, pasas de un bosque centenario a una calle iluminada con neón repleta de creperies, tiendas de ropa vintage y cultura pop japonesa. Consulta nuestra{" "}
              <Link to="/es/blog/guia-shibuya-harajuku" className="text-accent hover:underline">
                guía de Shibuya y Harajuku
              </Link>{" "}
              para todos los consejos de experto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recorre Takeshita Street para la sobrecarga sensorial, luego dirígete a Omotesando, a menudo llamada "los Campos Elíseos de Tokio", para disfrutar de arquitectura de primer nivel de Tadao Ando, Kengo Kuma y Toyo Ito. El contraste entre la cultura kawaii de Harajuku y la elegante sofisticación de Omotesando lo dice todo sobre la capacidad de Tokio para contener multitudes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nuestro{" "}
              <Link to="/es/tours/shibuya-harajuku" className="text-accent hover:underline">
                Tour por Shibuya y Harajuku
              </Link>{" "}
              cubre esta zona en profundidad, desde tiendas vintage ocultas hasta las historias detrás de las obras maestras arquitectónicas de Omotesando.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Almuerzo: Zona de Shibuya
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dirígete a Shibuya para almorzar. Evita las cadenas de restaurantes y busca locales auténticos en las calles traseras. Recomiendo probar un buen restaurante de ramen (la espera merece la pena) o un restaurante de curry japonés. Shibuya tiene algunos de los mejores de la ciudad. Si quieres algo rápido y quintaesencialmente japonés, prueba un gyudon (cuenco de ternera) en un restaurante de barra: rápido, contundente y delicioso.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tarde: Cruce de Shibuya y Más Allá
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ninguna visita a Tokio está completa sin experimentar el Cruce de Shibuya, la intersección peatonal más transitada del mundo, donde hasta 3.000 personas cruzan a la vez. Crúzalo tú mismo, luego sube al mirador Shibuya Sky o al Starbucks sobre el cruce para las mejores vistas aéreas. Visita la estatua de Hachiko (el famoso perro fiel) y explora Center-gai para probar la vibrante cultura callejera de Tokio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si te queda energía, pasea por los barrios más tranquilos detrás de las calles principales. Tomigaya y Kamiyamacho son favoritos de los locales con excelentes cafeterías, librerías independientes y pequeños restaurantes que la mayoría de turistas nunca descubre.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Noche: Vida Nocturna en Shinjuku
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Termina el segundo día en Shinjuku, la capital del entretenimiento de Tokio. Para tomar algo, dirígete a Golden Gai, una diminuta red de más de 200 pequeños bares, cada uno con capacidad para unas 6-8 personas. Es íntimo, peculiar y una experiencia completamente única. Busca bares con menús en inglés o carteles de "Foreigner Welcome" si te preocupa la barrera del idioma. Lee nuestra{" "}
              <Link to="/es/blog/guia-shinjuku" className="text-accent hover:underline">
                guía completa de Shinjuku
              </Link>{" "}
              para más detalles sobre la etiqueta en Golden Gai y los mejores lugares para comer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para cenar, prueba Omoide Yokocho ("Callejón de los Recuerdos"), un estrecho callejón de puestos de yakitori (pollo a la parrilla) que lleva sirviendo a trabajadores desde la década de 1940. Es humeante, concurrido y absolutamente auténtico. Los vegetarianos deben tener en cuenta que las opciones aquí son limitadas, pero el cercano Shinjuku tiene restaurantes para todas las necesidades dietéticas.
            </p>

            {/* Día 3 */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              Día 3: Elige Tu Aventura
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Opción A: Centro de Tokio, Gastronomía, Jardines e Historia
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mañana, Mercado Exterior de Tsukiji:</strong> Aunque el mercado mayorista interior se trasladó a Toyosu, el Mercado Exterior de Tsukiji sigue siendo el mejor destino gastronómico de Tokio. Llega entre las 8 y las 9 AM para las ofertas más frescas: sushi para desayunar (sí, es algo habitual aquí), tamagoyaki (tortilla japonesa), ostras frescas y brochetas de wagyu. Tómate tu tiempo y picotea, es la mejor forma de vivir el mercado. Consulta nuestra{" "}
              <Link to="/es/blog/guia-tsukiji-amantes-gastronomia" className="text-accent hover:underline">
                guía de Tsukiji para amantes de la gastronomía
              </Link>{" "}
              para saber qué comer y qué evitar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para una exploración gastronómica guiada, nuestro{" "}
              <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">
                Tour por Tsukiji y Ginza
              </Link>{" "}
              te ayudará a orientarte entre los mejores puestos y a entender lo que estás comiendo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Tarde, Jardines del Este del Palacio Imperial:</strong> Un contraste tranquilo con la energía del mercado por la mañana. Estos jardines de entrada gratuita fueron en su día el círculo más interior del Castillo de Edo, sede del poder del shogunato Tokugawa durante más de 250 años. Los muros de piedra, los fosos y el diseño del jardín cuentan la historia del Japón de la era samurái. Camina hasta el distrito financiero de Marunouchi para ver el horizonte moderno de Tokio enmarcado por antiguas murallas del castillo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Explora la zona en profundidad con nuestro{" "}
              <Link to="/es/tours/imperial-palace" className="text-accent hover:underline">
                Tour del Palacio Imperial
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Noche, Ginza:</strong> Termina tu estancia en Tokio en Ginza, el elegante distrito comercial. Aunque no vayas de compras, los pisos de alimentación de los grandes almacenes (depachika) en los sótanos merecen una visita: son paraísos culinarios de dulces japoneses bellamente empaquetados, cajas bento y delicias gourmet. Perfecto para comprar recuerdos comestibles.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Opción B: Excursión de un Día desde Tokio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si ya has cubierto el centro de Tokio y quieres ver más de Japón, una excursión de un día es un excelente uso de tu tercer día. Cada destino ofrece algo completamente diferente de Tokio:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <Link to="/es/tours/kamakura-day-trip" className="text-accent hover:underline font-medium">
                  Kamakura
                </Link>{" "}
                : Templos antiguos, el Gran Buda y encanto costero. A solo 1 hora de Tokio en tren. La excursión de un día más completa para primerizos. Mejor en junio por las hortensias o en noviembre por las hojas otoñales.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <Link to="/es/tours/hakone-day-trip" className="text-accent hover:underline font-medium">
                  Hakone
                </Link>{" "}
                : Vistas del Monte Fuji, aguas termales y un valle volcánico. Perfecto para amantes de la naturaleza y fotógrafos. El sistema de transporte es complejo, así que un guía es de gran ayuda. Mejor de octubre a febrero para la visibilidad del Fuji.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <Link to="/es/tours/nikko-day-trip" className="text-accent hover:underline font-medium">
                  Nikko
                </Link>{" "}
                : Santuario Toshogu, Patrimonio de la Humanidad de la UNESCO, cascadas espectaculares y paisajes de lagos de montaña. Más lejos de Tokio (2 horas) pero menos concurrido y profundamente gratificante para los entusiastas de la historia. Octubre-noviembre es espectacular para el follaje otoñal.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ¿No puedes decidirte? Lee nuestra comparación detallada:{" "}
              <Link to="/es/blog/kamakura-vs-hakone-vs-nikko-excursion" className="text-accent hover:underline">
                Kamakura vs Hakone vs Nikko: ¿Qué Excursión de un Día Elegir?
              </Link>
            </p>

            {/* Consejos Prácticos */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              Consejos Prácticos para Tu Visita a Tokio
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cómo Moverse
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Consigue una tarjeta IC Suica o Pasmo en cualquier estación: funciona en todos los trenes, metros y autobuses de Tokio. Solo hay que tocar e ir. También puedes usarla en tiendas de conveniencia y máquinas expendedoras. El Metro de Tokio y las líneas JR cubren prácticamente todos los lugares que querrás visitar, y Google Maps funciona perfectamente para la navegación en Japón.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No te dejes intimidar por el sistema de trenes: en realidad es muy intuitivo una vez que entiendes que diferentes compañías operan diferentes líneas. Los carteles están en inglés, las estaciones se anuncian en inglés y los trenes casi siempre son puntuales. Durante las horas punta (7:30-9 AM), evita las líneas más concurridas si es posible, o viaja en dirección contraria al flujo de commuters.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cuándo Visitar
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tokio es un destino para todo el año. La primavera (marzo-mayo) trae los cerezos en flor y un clima agradable. El verano (junio-agosto) es caluroso y húmedo pero ofrece festivales y fuegos artificiales. El otoño (octubre-noviembre) tiene un follaje impresionante y temperaturas agradables. El invierno (diciembre-febrero) es frío pero despejado, con menos turistas y hermosas iluminaciones.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las temporadas altas de turismo son la temporada de cerezos en flor (finales de marzo a mediados de abril) y el follaje otoñal (mediados de noviembre a principios de diciembre). Reserva alojamiento y tours con antelación durante estos períodos. La Golden Week (finales de abril a principios de mayo) es un período festivo nacional japonés en el que el turismo doméstico alcanza su punto máximo y algunos negocios cierran. Para un desglose detallado mes a mes, consulta nuestra{" "}
              <Link to="/es/blog/mejor-epoca-visitar-tokio" className="text-accent hover:underline">
                guía de la Mejor Época para Visitar Tokio
              </Link>
              .
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cuestiones de Dinero
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japón sigue dependiendo más del efectivo que muchos países, especialmente en pequeños restaurantes, templos y mercados. Lleva al menos entre 10.000 y 20.000 yenes en efectivo. Los cajeros automáticos de 7-Eleven y de Correos aceptan tarjetas internacionales de forma fiable. Las tarjetas de crédito se aceptan cada vez más en los establecimientos grandes, pero no dependas exclusivamente de ellas. Tu tarjeta IC (Suica/Pasmo) es el método de pago más cómodo para pequeñas compras.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Etiqueta en Templos y Santuarios
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En los santuarios: haz una ligera reverencia antes de pasar por el torii, camina por los lados (el camino central es para la divinidad), purifícate las manos en la pila de agua, y haz reverencia-aplauso-reverencia al rezar. En los templos: quítate los zapatos al entrar en los edificios, no señales las estatuas y habla en voz baja. Tu guía te explicará todas las costumbres en detalle, pero estos conceptos básicos te ayudarán a sentirte seguro. Para la guía paso a paso completa, lee nuestra{" "}
              <Link to="/es/blog/etiqueta-templos-santuarios-japon" className="text-accent hover:underline">
                guía de Etiqueta en Templos y Santuarios
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Lo más importante es simplemente ser respetuoso y observador. Los japoneses son increíblemente acogedores con los turistas que muestran interés por su cultura, incluso si no aciertas con cada costumbre a la perfección.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres que un guía local dé vida a este itinerario?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Me encantaría ayudarte a vivir lo mejor de Tokio. Ya sea que quieras seguir este itinerario o crear algo completamente personalizado, hagamos que tu viaje sea inolvidable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Explorar Nuestros Tours por Tokio
                </Link>
                <Link to="/es/tours/custom" className="btn-outline">
                  Diseñar un Tour Personalizado
                </Link>
              </div>
            </div>
          </article>
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
            "headline": "El Itinerario Perfecto de 3 Días en Tokio, De un Guía Local",
            "description": "Planifica los 3 días perfectos en Tokio con consejos de un guía local con licencia.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/itinerario-tokio-3-dias",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsItinerarioTokio3Dias;
