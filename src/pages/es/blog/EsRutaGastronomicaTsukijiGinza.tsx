import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";


const EsRutaGastronomicaTsukijiGinza = () => {
  return (
    <Layout>
      <SEO
        title="De Tsukiji a Ginza: La Ruta Gastronómica Que Hacen los Locales de Tokio"
        description="Una ruta a pie de 3 horas desde el mercado de Tsukiji hasta los izakayas bajo las vías en Yurakucho y Shinbashi. Las paradas que realmente hacen los tokiotas."
        canonicalPath="/es/blog/ruta-gastronomica-tsukiji-ginza"
        hreflang={[
          { lang: "en", path: "/blog/tsukiji-to-ginza-food-walk" },
          { lang: "es", path: "/es/blog/ruta-gastronomica-tsukiji-ginza" },
          { lang: "x-default", path: "/blog/tsukiji-to-ginza-food-walk" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/tsukiji-food-guide-hero.webp"
          alt="Comida fresca en el mercado exterior de Tsukiji en Tokio"
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
            <p className="text-label text-accent mb-3">Gastronomía</p>
            <h1 className="heading-display text-foreground">
              De Tsukiji a Ginza: La Ruta Gastronómica Que Hacen los Locales en Su Día Libre
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia Nacional
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                14 de marzo de 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, guía-intérprete con licencia nacional (全国通訳案内士) que recorre esta ruta con amigos cuando tiene una tarde libre.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido del artículo */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Esta es la ruta que hago con amigos cuando tenemos una tarde libre y queremos comer bien sin complicarnos demasiado. Empieza en el mercado de pescado, termina bajo las vías del tren en Yurakucho con una cerveza fría, y recorre unos 3 kilómetros de lo mejor que se puede comer en Tokio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puedes hacer este recorrido por tu cuenta usando este artículo como guía. No me guardo nada. Pero también te cuento en qué momentos contar con un guía (como yo) aporta algo que no puedes replicar solo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Para una mirada más detallada al mercado en sí, consulta mi{" "}
              <Link to="/es/blog/mercado-tsukiji-tokio" className="text-accent hover:underline">
                guía del mercado de Tsukiji
              </Link>
              .
            </p>

            {/* Parada 1: Mercado exterior de Tsukiji */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Parada 1: Mercado Exterior de Tsukiji (9:00 - 10:30)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {/* <!-- VERIFIED: Tsukiji outer market typically closed Sundays and Wednesdays. Checked: 2026-03-14 --> */}
              Empieza en la estación de Tsukiji (Línea Hibiya, Salida 1) y camina hacia el mercado exterior. El mercado exterior es donde está la magia para los visitantes: cientos de pequeños puestos que venden de todo, desde sashimi fresco hasta brochetas de mariscos a la parrilla y dulces japoneses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Qué comer aquí: tamago (huevo) en todas sus formas, vieiras a la parrilla o uni si eres aventurero, fruta de temporada en las tiendas especializadas y daifuku mochi en alguno de los puestos del callejón principal. Evita los sitios con largas filas de turistas y ningún cliente japonés. Los mejores puestos son aquellos donde compran los locales.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Consejo de horario:</strong> Llega entre las 9:00 y las 10:00. Cuanto antes, mejor surtido; más tarde, más aglomeración. La mayoría de los puestos cierran a las 14:00, y algunos productos populares se agotan antes del mediodía.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Truco:</strong> No comas demasiado aquí. Esto es el aperitivo, no el plato principal. Dos o tres degustaciones pequeñas son perfectas.
            </p>

            {/* Parada 2: Zona del templo Tsukiji Honganji */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Parada 2: Zona del Templo Tsukiji Honganji (10:30 - 11:00)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Camina hacia el sur desde el mercado en dirección al Tsukiji Honganji, un templo budista que no se parece a ningún otro en Tokio. Su arquitectura está inspirada en la India, diseñada por el célebre arquitecto Ito Chuta en la década de 1930. Está a 2 minutos a pie del mercado, pero casi ningún turista lo visita.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              El templo tiene una cafetería (Tsumugi) que sirve un famoso desayuno (¥1.800, todos los días de 8:00 a 10:30, limitado a 110 raciones diarias) con 18 pequeños platos que representan el concepto budista de gratitud por los alimentos. Se recomienda reservar. Aunque no vayas a la cafetería, el interior del templo merece 10 minutos, especialmente el órgano de tubos (uno de los pocos en un templo budista de Japón).
              {/* <!-- VERIFIED: Cafe Tsumugi 18-dish breakfast ¥1,800, daily 8:00-10:30 AM, 110 meals/day limit, reservations available. Checked: 2026-03-14 --> */}
            </p>

            {/* Parada 3: Caminata hacia las callejuelas de Ginza */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Parada 3: Caminata Hacia las Callejuelas de Ginza (11:00 - 12:00)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde el Honganji, camina hacia el noroeste en dirección a Ginza. Este paseo de 15 minutos te lleva por calles de transición donde el viejo barrio del mercado se encuentra con el distrito de tiendas de lujo. El contraste es parte del encanto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una vez en Ginza, olvídate de las avenidas principales (Chuo-dori) y adéntrate una o dos calles más. Las callejuelas de Ginza están llenas de pequeños restaurantes para el almuerzo, galerías de arte y tiendas especializadas que llevan décadas ahí. Es donde comen los oficinistas, no los turistas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Ventana para el almuerzo:</strong> Entre las 11:30 y las 13:00, muchos restaurantes de Ginza ofrecen menús del día a una fracción de sus precios de cena. Una comida que cuesta ¥8.000 por la noche puede salir por ¥1.500-2.500 al mediodía. Es el mejor secreto de precios de la gastronomía tokiota.
            </p>

            {/* Parada 4: Callejón de izakayas en Yurakucho */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Parada 4: Callejón de Izakayas en Yurakucho (16:00 en adelante)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La caminata termina (o la noche comienza) bajo las vías del tren, entre las estaciones de Yurakucho y Shinbashi. Este es uno de los grandes barrios de bebida y comida de Tokio: una hilera de diminutos izakayas y puestos de yakitori apretujados bajo las vías elevadas del JR, con trenes retumbando por encima cada pocos minutos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El ambiente aquí no se parece a ningún otro lugar de Tokio. Humo de las parrillas, oficinistas aflojándose la corbata, grupos de amigos en taburetes diminutos con cerveza y pollo a la brasa. Así de auténtico es Tokio. La mayoría de los locales solo tienen barra y sirven de pie.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Qué pedir: yakitori (brochetas de pollo a la parrilla — pide un surtido), cerveza de barril y la especialidad de la casa. La mayoría de las brochetas cuestan entre ¥100 y ¥300. Puedes comer y beber bien por ¥2.000-3.000 por persona.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Si vas solo:</strong> Los asientos en barra y los bares de pie son, en realidad, más fáciles para quienes viajan solos. Siéntate en la barra, señala lo que están comiendo los demás, y el personal se encargará de ti. Algo de japonés básico ayuda (sumimasen, kore kudasai), pero no es estrictamente necesario.
            </p>

            {/* Parada 5: Extensión a Shinbashi */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Parada 5: Shinbashi — El Tramo Más Profundo (17:30 en adelante)
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/shinbashi-under-the-tracks.webp"
                alt="Restaurantes izakaya bajo las vías elevadas del tren JR cerca de la estación de Shinbashi de noche"
                className="w-full rounded-lg"
                loading="lazy"
                width={1600}
                height={1205}
              />
              <figcaption className="text-sm text-muted-foreground mt-2 italic">
                La franja de izakayas bajo las vías cerca de Shinbashi — donde los menús están escritos a mano y los habituales superan a los turistas.
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si todavía te queda energía (y espacio en el estómago), sigue caminando hacia el sur por las vías en dirección a la estación de Shinbashi. El ambiente va cambiando a medida que te alejas de Yurakucho: los bares se hacen más pequeños, los menús pasan a estar solo en japonés, y la clientela se compone casi exclusivamente de oficinistas locales cerrando la jornada. Es el tramo más profundo de la franja bajo las vías, y premia a los aventureros.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Busca los sitios con menús escritos a mano en la pared, yakiton (casquería de cerdo a la parrilla) humeante y ese caos organizado que se produce cuando un bar de 10 asientos intenta servir a 30 personas. Los mejores locales no tienen cartel en inglés ni reseñas de turistas — solo décadas de clientes fieles y un pollo al carbón excelente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              La locomotora de vapor SL Plaza frente a la estación de Shinbashi es un buen punto de referencia para terminar — y si llegas antes de las 18:00, escucharás sonar su silbato, un pequeño eco del ferrocarril de 1872 que comenzó aquí. Shinbashi fue la terminal de Tokio de la primera línea de tren de Japón, y la cultura de tomar algo después del trabajo que llena estas calles hoy es una parte tan esencial de la identidad de la ciudad como cualquier templo. Escribo más sobre por qué Shinbashi importa en mi{" "}
              <Link to="/es/blog/tesoros-ocultos-tokio" className="text-accent hover:underline">
                guía de tesoros ocultos de Tokio
              </Link>
              .
              {/* <!-- VERIFIED: SL Plaza C11-292 whistle at 12:00/15:00/18:00. Japan's first railway opened 1872-10-14 Shinbashi-Yokohama. Checked: 2026-03-31 --> */}
            </p>

            {/* Solo vs. Con un guía */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Solo vs. Con un Guía
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puedes hacer esta ruta perfectamente solo con este artículo como mapa. El recorrido es sencillo, y los barrios son seguros y fáciles de caminar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dónde un guía aporta valor:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Los mejores puestos cambian según la temporada.</strong> Lo que está bueno en marzo no es lo mismo que en octubre. Yo sé qué hay de temporada y qué vendedores están en su mejor momento ahora mismo.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Algunos sitios requieren japonés para pedir.</strong> Sobre todo en las callejuelas de Ginza, Yurakucho y Shinbashi. Un guía se encarga de la comunicación y puede explicarte la carta, las especialidades del día y la etiqueta.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Los bares de pie de Yurakucho intimidan si vas solo.</strong> Son ruidosos, están llenos, la clientela es mayoritariamente japonesa y el sistema para pedir no es evidente. Con un guía, entras con confianza y sabes exactamente qué hacer.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">El contexto cultural.</strong> ¿Por qué los puestos de Tsukiji abren a las 5 de la mañana? ¿Cuál es la historia de este barrio? ¿Por qué los oficinistas beben bajo las vías del tren? Estas historias convierten un paseo gastronómico en una experiencia cultural.
              </li>
            </ul>

            {/* Información práctica */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Información Práctica
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Distancia total:</strong> Unos 3,5 km (2,2 millas), mayormente llano
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tiempo total:</strong> 3-4 horas para la ruta gastronómica; suma otras 2-3 horas si continúas a Yurakucho y Shinbashi por la tarde-noche
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Presupuesto:</strong> ¥3.000-5.000 por persona para degustaciones y un almuerzo ligero. Suma ¥2.000-3.000 para las bebidas y la comida de la tarde en Yurakucho.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mejores días:</strong> Martes, jueves, viernes y sábado son los más fiables. Muchos puestos de Tsukiji cierran los domingos y miércoles (días de descanso tradicional del mercado), y algunos también los lunes.
                {/* <!-- VERIFIED: Tsukiji typically closed Sundays and Wednesdays. Individual stalls may vary. Checked: 2026-03-14 --> */}
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Efectivo necesario:</strong> Muchos puestos del mercado y bares de Yurakucho solo aceptan efectivo. Lleva ¥10.000-15.000 para el día completo.
              </li>
            </ul>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres la Versión con Guía?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Si esto suena como tu plan ideal pero te preocupa la barrera del idioma, o quieres que alguien te lleve a los puestos que están mejor en este momento, esto es básicamente lo que cubre mi{" "}
                <Link to="/es/tours/tokyo-food-tour" className="text-accent hover:underline">
                  tour gastronómico
                </Link>
                . La misma ruta, pero con acceso privilegiado y el contexto cultural que convierte un paseo gastronómico en una educación culinaria.
              </p>
              <Link
                to="/es/contact?utm_source=blog&utm_medium=cta&utm_campaign=tsukiji-ginza-walk"
                className="btn-accent"
              >
                Consulta Sobre el Tour Gastronómico
              </Link>
            </div>

          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["tsukiji-ginza", "custom"]} showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "De Tsukiji a Ginza: La Ruta Gastronómica Que Hacen los Locales de Tokio",
            description:
              "Una ruta a pie de 3 horas desde el mercado de Tsukiji hasta los izakayas bajo las vías en Yurakucho y Shinbashi. Las paradas que realmente hacen los tokiotas.",
            author: {
              "@type": "Person",
              name: "Manabu",
              jobTitle: "National Government Licensed Guide Interpreter",
              url: "https://tanuki-tabi-travel.com/about",
            },
            datePublished: "2026-03-14",
            dateModified: "2026-03-31",
            publisher: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/ruta-gastronomica-tsukiji-ginza",
            },
          }),
        }}
      />

      {/* FACT-CHECK REPORT
      Generated: 2026-03-14
      Updated: 2026-03-14 (web search verification)
      Status: KEY ITEMS VERIFIED

      Updated: 2026-03-31 (added Stop 5 Shinbashi extension, updated distance/time/description)

      WEB-VERIFIED (2026-03-31):
      - SL Plaza C11-292 whistle schedule (12:00/15:00/18:00): CONFIRMED via Atlas Obscura, VISIT MINATO CITY
      - Japan's first railway 1872-10-14 Shinbashi-Yokohama: CONFIRMED via Wikipedia, Nippon.com

      WEB-VERIFIED (2026-03-14):
      - Tsukiji closing days: CONFIRMED Sundays and Wednesdays typical. Article updated.
      - Tsukiji Honganji Cafe Tsumugi: CONFIRMED still operating. 18-dish breakfast ¥1,800, daily 8:00-10:30 AM, 110 meals/day limit. Article updated with details.
      - Tsukiji Honganji architect (Ito Chuta, 1930s): established fact confirmed
      - Indian-inspired architecture: confirmed

      Category A verified:
      - Walking route geographically accurate
      - Walking time estimates realistic for ~3km
      - Yurakucho area description accurate
      - Food budget estimates reasonable

      Items for Manabu to verify before publishing:
      1. Tsukiji Station Exit 1 — confirm correct exit for outer market
      2. Ginza lunch set pricing (¥1,500-2,500) — verify current ranges
      3. Yakitori pricing (¥100-300 per skewer) — verify current Yurakucho prices
      4. Route matches actual food tour — confirm consistency
      */}
    </Layout>
  );
};

export default EsRutaGastronomicaTsukijiGinza;
