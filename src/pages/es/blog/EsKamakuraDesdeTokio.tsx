// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsKamakuraDesdeTokio = () => {
  return (
    <Layout>
      <SEO
        title="Kamakura desde Tokio: lo que nadie te cuenta antes de ir"
        description="Kamakura en un día desde Tokio: el Gran Buda, los templos, la comida y los errores que cometen casi todos los turistas. Guía 2026."
        canonicalPath="/es/blog/kamakura-desde-tokio"
        hreflang={[
          { lang: "es", path: "/es/blog/kamakura-desde-tokio" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/kamakura-great-buddha.webp"
          alt="Gran Buda de Kamakura: excursión desde Tokio"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
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
              Kamakura desde Tokio: Lo Que Nadie Te Cuenta Antes de Ir
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
              Si me preguntas cuál es la mejor excursión de un día desde Tokio, mi respuesta siempre es la misma: Kamakura. No porque sea la más espectacular (Hakone tiene su volcán, Nikko sus santuarios dorados), sino porque Kamakura te da algo que ningún otro destino cercano a Tokio puede ofrecer: una antigua capital samurái junto al mar, con templos entre montañas boscosas, playas de arena oscura y una cultura gastronómica que merece un viaje por sí sola. Es como si Toledo estuviera junto al mar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como guía con licencia, hago la <strong className="text-foreground">excursión Kamakura desde Tokio</strong> varias veces al mes con visitantes de todo el mundo hispanohablante. Y siempre veo los mismos patrones: gente que llega con un plan apretadísimo, que no sabe qué comer, que se pierde lo mejor y se queda en las trampas para turistas. Esta guía es todo lo que les cuento a mis clientes antes de salir de Tokio. Sin filtros, sin adornos, solo lo que de verdad necesitas saber.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si estás comparando opciones para tu día fuera de Tokio, te recomiendo leer también nuestra{" "}
              <Link to="/es/blog/comparativa-excursiones" className="text-accent hover:underline">
                comparativa de excursiones desde Tokio
              </Link>{" "}
              para ver cómo Kamakura se compara con Hakone, Nikko y otras alternativas.
            </p>

            {/* Por qué Kamakura merece un día completo */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Por qué Kamakura merece un día completo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muchos visitantes cometen el error de meter Kamakura en medio día, como si fuera una parada rápida entre Shibuya y Shinjuku. No lo es. Kamakura fue la capital de Japón durante el período Kamakura (1185-1333), cuando el shogunato gobernaba el país desde aquí. Esa historia se siente en cada rincón, y necesitas tiempo para absorberla.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              La antigua capital de los samuráis
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Antes de que Tokio existiera como centro de poder, Kamakura era donde se tomaban las decisiones. Minamoto no Yoritomo estableció aquí el primer gobierno militar de Japón, y durante casi 150 años esta pequeña ciudad costera fue el centro político del país. Los templos y santuarios que visitarás no son atracciones turísticas construidas para impresionar, son los restos reales de una capital medieval. Tsurugaoka Hachimangu no era solo un santuario; era el corazón espiritual del gobierno samurái. Esa profundidad histórica es lo que hace que una <strong className="text-foreground">excursión Kamakura desde Tokio</strong> sea tan diferente de visitar un templo cualquiera en la capital.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mar, montaña y templos en un solo lugar
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que hace única a Kamakura es su geografía. La ciudad está rodeada de montañas boscosas por tres lados y abierta al Océano Pacífico por el cuarto. Esta configuración natural la hizo perfecta como fortaleza medieval, y hoy la convierte en un lugar donde puedes caminar entre bambúes gigantes por la mañana, contemplar un Buda de bronce de 13 metros antes del almuerzo y pisar la arena de la playa por la tarde. Todo en una ciudad que puedes recorrer a pie o en un pequeño tranvía.
            </p>

            {/* Cómo ir de Tokio a Kamakura */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo ir de Tokio a Kamakura
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Llegar a Kamakura desde Tokio es más sencillo de lo que parece, pero hay opciones que conviene conocer antes de subirse al tren.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              JR Yokosuka Line desde Tokio/Shinagawa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La forma más directa y económica es la <strong className="text-foreground">JR Yokosuka Line</strong>, que sale de las estaciones de Tokio y Shinagawa. El trayecto dura aproximadamente una hora desde Tokio Station y unos 50 minutos desde Shinagawa. No necesitas reservar asiento, es un tren local con asientos libres. Si tienes el Japan Rail Pass, este trayecto está incluido, lo cual convierte esta <strong className="text-foreground">excursión Kamakura desde Tokio</strong> en básicamente gratuita en transporte. Sin JR Pass, el billete de ida cuesta alrededor de 940 yenes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Enoden: el tranvía que es una experiencia en sí
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una vez en Kamakura, el <strong className="text-foreground">Enoden</strong> (Enoshima Electric Railway) es mucho más que un medio de transporte: es una de las experiencias más encantadoras de tu visita. Este pequeño tranvía vintage conecta la estación de Kamakura con Enoshima en unos 34 minutos, pasando entre casas tan cerca que podrías tocar la ropa tendida, bordeando acantilados costeros con vistas al mar y atravesando zonas residenciales que parecen detenidas en el tiempo. La parada de Hase te deja a pocos minutos del Gran Buda y del templo Hasedera. Un billete de día del Enoden cuesta 800 yenes y te permite subir y bajar las veces que quieras.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Precios y tiempos reales 2026
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Para que puedas planificar tu presupuesto con datos actuales: el trayecto JR Yokosuka Line desde Tokio Station cuesta 940 yenes por trayecto (incluido en el JR Pass). El Enoden cuesta 200-310 yenes por trayecto individual o 800 yenes el pase de día. El tren Shonan-Shinjuku Line desde Shinjuku es otra opción, con un tiempo similar y precio comparable. En total, el transporte de ida y vuelta te costará entre 1.880 y 2.500 yenes sin JR Pass. Con JR Pass, solo pagarás el Enoden local.
            </p>

            <InlineCTAEs href="/es/tours/kamakura" />

            {/* Qué ver en Kamakura */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué ver en Kamakura (mi ruta recomendada)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de cientos de visitas, he afinado una ruta que maximiza lo que ves sin agotarte. Este es el orden que recomiendo, empezando por lo más lejos de la estación para evitar las multitudes de la mañana.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El Gran Buda (Kotoku-in): la foto obligatoria
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El <strong className="text-foreground">Daibutsu</strong> (Gran Buda) de Kamakura es una estatua de bronce de 13,35 metros de altura que lleva aquí desde 1252. Originalmente estaba dentro de un gran templo de madera, pero un tsunami en el siglo XV destruyó el edificio y desde entonces el Buda ha permanecido al aire libre, expuesto a los elementos. Eso es parte de su magia: mientras que otros Budas gigantes de Japón están encerrados en salones oscuros, este te recibe a cielo abierto. La entrada cuesta 300 yenes, y por 20 yenes adicionales puedes entrar en el interior hueco de la estatua. Llega antes de las 10:00 para fotografiarlo sin doscientas cabezas de fondo. Es el emblema de cualquier <strong className="text-foreground">excursión Kamakura desde Tokio</strong> que se precie.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Hasedera: el templo con vistas al mar
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A solo diez minutos a pie del Gran Buda, Hasedera es mi templo favorito de Kamakura, y posiblemente de todo Japón. La razón es simple: su plataforma de observación ofrece una vista panorámica de la bahía de Sagami que te deja sin palabras. Dentro del templo encontrarás la mayor estatua de madera de Kannon (la diosa de la misericordia) en Japón, con más de 9 metros de altura y cubierta de pan de oro. Pero lo que realmente enamora de Hasedera son sus jardines: miles de hortensias en junio, cerezos en primavera, y un jardín japonés con estanques de carpas koi que invita a sentarse y respirar. La entrada es de 400 yenes. Reserva al menos 45 minutos aquí.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tsurugaoka Hachimangu: el santuario principal
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es el santuario más importante de Kamakura, fundado en 1063 y reubicado a su posición actual por Minamoto no Yoritomo en 1180. Es enorme. La avenida principal (Wakamiya Oji) que conduce al santuario desde la costa fue diseñada como un eje ceremonial, y todavía se percibe esa grandiosidad. Sube la escalinata empinada hasta el salón principal para tener una vista impresionante del paseo arbolado y la ciudad más allá. El recinto incluye estanques con lotos, un museo de tesoros nacionales y a menudo alguna ceremonia sintoísta en curso. La entrada al recinto es gratuita. Es un lugar que respira historia en cada piedra.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Komachi-dori: la calle comercial (con trampas)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Komachi-dori conecta la estación de Kamakura con el santuario Tsurugaoka Hachimangu y es la calle más concurrida de la ciudad. Aquí encontrarás tiendas de recuerdos, heladerías, cafeterías y restaurantes alineados a ambos lados. <strong className="text-foreground">Mi consejo: no la recorras con hambre ni sin un plan.</strong> Muchos de los restaurantes en Komachi-dori están orientados a turistas con precios inflados y calidad mediocre. Las tiendas de recuerdos venden básicamente lo mismo unas que otras. Dicho esto, hay joyas escondidas: una pastelería artesanal de warabi-mochi, una tienda de cuchillos japoneses de calidad y alguna cafetería con verdadero carácter. Te cuento cuáles en la sección de comida.
            </p>

            {/* Dónde comer en Kamakura */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Dónde comer en Kamakura
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La gastronomía de Kamakura tiene una estrella indiscutible y varios secundarios que merecen atención. Esto es lo que recomiendo a todos mis clientes cuando hacen la <strong className="text-foreground">excursión Kamakura desde Tokio</strong>.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Shirasu (boquerón japonés): el plato estrella
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El shirasu es la especialidad absoluta de Kamakura. Son crías de sardina o anchoa, diminutas y translúcidas, que se pescan en la bahía de Sagami justo frente a la ciudad. Se sirven de dos formas: <strong className="text-foreground">nama-shirasu</strong> (crudos, cuando la pesca del día lo permite) o <strong className="text-foreground">kamaage-shirasu</strong> (ligeramente hervidos). El plato más típico es el shirasu-don: un bol de arroz cubierto de shirasu con un poco de jengibre rallado y salsa de soja. Es simple, fresco y absolutamente delicioso. Los mejores restaurantes de shirasu están cerca de la costa, no en Komachi-dori. Espera pagar entre 1.200 y 1.800 yenes por un buen shirasu-don. Nota importante: entre enero y mediados de marzo, hay veda de shirasu, así que no habrá nama-shirasu disponible en esos meses.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Soba artesanal en los callejones
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kamakura tiene una tradición de soba (fideos de trigo sarraceno) artesanal que muchos visitantes pasan por alto porque van directos al shirasu. Error. Hay pequeños restaurantes de soba escondidos en los callejones laterales, lejos de Komachi-dori, donde un maestro artesano prepara los fideos a mano cada mañana. El soba frío (zaru soba) servido sobre una esterilla de bambú con salsa de inmersión es perfecto después de caminar bajo el sol. Busca locales pequeños con solo seis u ocho mesas. Si hay cola de japoneses fuera, es buena señal. Un plato de soba artesanal cuesta entre 1.000 y 1.500 yenes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo que debes evitar en Komachi-dori
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Voy a ser directo: la mayoría de los restaurantes en la parte más concurrida de Komachi-dori cobran de más y sirven de menos. Los establecimientos con fotos enormes del menú en la entrada y personal invitándote a pasar son los que más debes evitar. El shirasu-don en estos sitios suele ser más pequeño, menos fresco y más caro que en los restaurantes locales cerca de la playa. Las excepciones son las tiendas de comida callejera para llevar: algunos mochi artesanales, el helado de matcha de ciertas tiendas específicas y los senbei (galletas de arroz) recién hechos sí merecen la parada.
            </p>

            {/* Los errores que veo en mis clientes */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Los errores que veo en mis clientes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Llevo años guiando visitantes por Kamakura y estos son los tres errores que veo una y otra vez. Si lees esto antes de tu viaje, ya irás mejor preparado que el 90% de los turistas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Intentar ver todo en medio día
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es el error número uno. Alguien lee que Kamakura está "a una hora de Tokio" y decide ir después del almuerzo, pensando que con tres horas es suficiente. No lo es. Entre el trayecto, los desplazamientos internos, las visitas a los templos y una comida decente, necesitas un mínimo de seis horas para una <strong className="text-foreground">excursión Kamakura desde Tokio</strong> que merezca la pena. Mi recomendación es salir de Tokio a las 8:30-9:00 y volver sobre las 17:00-18:00. Así tendrás tiempo para respirar, sentarte a comer sin prisa y disfrutar del ambiente sin ir corriendo de templo en templo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              No llevar calzado cómodo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kamakura no es plana. Los templos están en colinas, las escaleras son empinadas y a menudo irregulares, y los caminos entre santuarios pasan por senderos de tierra y grava. He visto a gente con tacones intentando subir las escaleras de Tsurugaoka Hachimangu y a personas con sandalias nuevas con ampollas a las dos horas. Zapatillas deportivas cómodas, ya usadas. Punto. Si llueve, las piedras mojadas son resbaladizas, así que lleva también un paraguas pequeño.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ignorar la playa de Yuigahama
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              La mayoría de los visitantes van del Gran Buda a Hasedera y de ahí a Tsurugaoka Hachimangu sin pisar la playa. Es una pena enorme. Yuigahama Beach está a cinco minutos a pie de Hasedera y ofrece una perspectiva de Kamakura completamente diferente. La arena oscura volcánica, las olas del Pacífico, los surfistas locales y la silueta de la isla de Enoshima al fondo crean un paisaje que no esperarías encontrar tan cerca de Tokio. No necesitas bañarte, solo caminar por la orilla diez minutos y sentir que estás en un lugar donde la montaña se encuentra con el mar.
            </p>

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas frecuentes sobre Kamakura desde Tokio
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  ¿Se puede hacer Kamakura en un día?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, absolutamente. Kamakura está diseñada para visitarse en un día completo desde Tokio. Con un tren a las 8:30-9:00 de la mañana y vuelta sobre las 17:00-18:00, tienes tiempo de sobra para ver los templos principales, comer bien y pasear por la playa. No intentes hacerlo en medio día, te quedarás con una sensación de visita incompleta.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  ¿Cuánto cuesta la excursión Kamakura desde Tokio?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  El presupuesto total para un día en Kamakura, incluyendo transporte, entradas y comida, ronda los 5.000-8.000 yenes por persona. Transporte ida y vuelta: 1.880-2.500 yenes (gratis con JR Pass hasta Kamakura). Entradas: entre 700 y 1.000 yenes para los templos principales. Comida: 2.000-4.000 yenes dependiendo de dónde comas. Es una de las excursiones más asequibles desde Tokio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  ¿Kamakura o Hakone?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Depende de lo que busques. Kamakura ofrece historia samurái, templos, mar y gastronomía costera. Hakone ofrece paisaje volcánico, aguas termales y vistas del Monte Fuji (cuando el clima coopera). Si te interesa la cultura y la historia japonesa, Kamakura. Si buscas naturaleza y relax, Hakone. Si solo tienes un día libre, yo elegiría Kamakura por su mayor variedad de experiencias.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  ¿Merece la pena ir con guía?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Soy guía, así que soy parcial, pero voy a ser honesto: puedes visitar Kamakura perfectamente por tu cuenta. Los templos están señalizados, el transporte es sencillo y la ciudad es segura. Lo que un guía te aporta es contexto: por qué cada templo está donde está, qué significan los rituales que ves, dónde comer sin caer en trampas turísticas y las historias que conectan todo. La diferencia entre ver un Buda de bronce y entender por qué lleva 800 años ahí sentado mirando al mar es, para muchos visitantes, la diferencia entre una excursión agradable y una experiencia que recuerdas toda la vida.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  ¿Qué hago si llueve?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No canceles. Kamakura bajo la lluvia tiene un encanto especial: los templos entre la niebla, el sonido de la lluvia sobre los jardines de Hasedera, las calles menos concurridas. Lleva un paraguas y calzado impermeable. Lo único que cambiaría es evitar los senderos de montaña (como el Daibutsu Hiking Course) porque se vuelven resbaladizos. El resto de la visita funciona perfectamente con lluvia. Si llueve con fuerza, los numerosos cafés y restaurantes de Kamakura son un refugio excelente.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres hacer la excursión Kamakura desde Tokio con un guía local?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En nuestro tour de día a Kamakura, te llevo por la ruta que he afinado después de cientos de visitas. Te explico la historia de cada templo en español, te llevo a los restaurantes donde como yo cuando voy sin clientes y nos saltamos las colas y las trampas para turistas. Un día completo, sin prisas, con todo el contexto que transforma una excursión en una experiencia. Incluye transporte, entradas y recomendaciones gastronómicas personalizadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/kamakura-day-trip" className="btn-accent">
                  Reservar Tour Kamakura
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Hacer una Pregunta
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
            "headline": "Kamakura desde Tokio: Lo Que Nadie Te Cuenta Antes de Ir",
            "description": "Kamakura en un día desde Tokio: el Gran Buda, los templos, la comida y los errores que cometen casi todos los turistas. Guía 2026.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/kamakura-desde-tokio",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsKamakuraDesdeTokio;
