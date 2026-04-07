// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";

const EsMercadoTsukijiTokio = () => {
  return (
    <Layout>
      <SEO
        title="Mercado Tsukiji 2026: Horario, Qué Comer y Cómo Llegar"
        description="El Mercado Tsukiji sigue abierto en 2026 con 460+ puestos. Horario: 5:00-14:00, cerrado domingos. Guía local con los mejores puestos y consejos."
        canonicalPath="/es/blog/mercado-tsukiji-tokio"
        hreflang={[
          { lang: "en", path: "/blog/tsukiji-market-guide" },
          { lang: "es", path: "/es/blog/mercado-tsukiji-tokio" },
          { lang: "x-default", path: "/blog/tsukiji-market-guide" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/tsukiji-market-seafood-stalls.webp"
          alt="Puestos de brochetas de mariscos en el Mercado Exterior de Tsukiji en Tokio"
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
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><Link to="/es" className="hover:text-foreground transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/es/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground">Mercado Tsukiji</li>
              </ol>
            </nav>
            <p className="text-label text-accent mb-3">Guías de Barrios de Tokio</p>
            <h1 className="heading-display text-foreground">
              Mercado de Tsukiji en Tokio: Qué Queda y Qué Vale la Pena Ver en 2026
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
              "¿El mercado de Tsukiji en Tokio está cerrado?" Es la pregunta que más me hacen mis clientes cuando planifican su viaje. La respuesta corta: no, no está cerrado. La respuesta larga requiere un poco de contexto, algo de historia y bastante pasión por un lugar que llevo años recorriendo como guía profesional. Piénsalo como si te dijeran que La Boquería en Barcelona cerró porque movieron la parte mayorista a otro edificio. El alma del mercado sigue ahí, en sus callejones, sus puestos y su gente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que cerró en 2018 fue el mercado mayorista interior, donde se celebraban las famosas subastas de atún. Esa operación se trasladó al moderno Mercado de Toyosu, en una isla artificial en la Bahía de Tokio. Pero el mercado exterior de Tsukiji, con sus aproximadamente 400 tiendas, restaurantes y puestos de comida callejera, sigue funcionando exactamente donde siempre estuvo. Y en 2026, después de algunas renovaciones y la llegada de nuevos negocios, está mejor que nunca.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En este artículo voy a contarte toda la historia del mercado de Tsukiji en Tokio: qué pasó, qué sobrevivió, qué puedes ver y comer hoy, y por qué sigo llevando a mis grupos allí cada semana. Si estás planeando tu visita a Tokio en 2026, esta guía te dará la información real que necesitas, no la versión simplificada de "Tsukiji cerró, ve a Toyosu".
            </p>

            {/* Qué pasó con el mercado de Tsukiji */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué pasó con el mercado de Tsukiji
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              La historia: de mercado mayorista a icono turístico
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El mercado de Tsukiji en Tokio nació en 1935, después de que el Gran Terremoto de Kanto de 1923 destruyera el antiguo mercado de Nihonbashi que había servido a la ciudad durante siglos. El gobierno metropolitano eligió un terreno junto al río Sumida, en el barrio de Tsukiji (cuyo nombre significa literalmente "tierra construida", porque era terreno ganado al mar), y levantó allí el mayor mercado de pescado y marisco del mundo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Durante décadas, Tsukiji fue un lugar estrictamente profesional. Los compradores mayoristas llegaban a las 3 de la madrugada, las subastas de atún comenzaban antes del amanecer, y para las 9 de la mañana la mayor parte del negocio ya se había cerrado. Los turistas no tenían acceso. Pero a partir de los años 90, la fama del mercado empezó a crecer internacionalmente. Guías de viaje, documentales y el boca a boca convirtieron las subastas de atún en un espectáculo turístico, y el mercado exterior, esa red de callejones con puestos de sushi, marisco a la parrilla y cuchillos artesanales, se convirtió en uno de los destinos gastronómicos más fotografiados del planeta. Algo parecido a lo que ocurrió con el Mercado de San Miguel en Madrid, que pasó de ser un mercado de barrio a convertirse en referencia gastronómica internacional.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El traslado a Toyosu en 2018
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El edificio del mercado mayorista interior tenía más de 80 años y se estaba quedando obsoleto. Los problemas de higiene, la falta de refrigeración moderna y la estructura de hormigón deteriorada hacían inviable una renovación. Después de años de debates políticos, polémicas por la contaminación del suelo en Toyosu y varios retrasos, el mercado mayorista interior cerró definitivamente el 6 de octubre de 2018 y reabrió en Toyosu el 11 de octubre del mismo año.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fue un evento enormemente mediático. Los titulares de prensa de todo el mundo anunciaron "el mercado de Tsukiji cierra sus puertas", y esa frase se quedó grabada en la mente de millones de viajeros. El problema es que era técnicamente incorrecta: lo que cerró fue el mercado mayorista interior. El mercado exterior, la parte que la mayoría de turistas realmente visitaban, nunca cerró.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo que cerró y lo que sobrevivió
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que desapareció de Tsukiji fue el enorme pabellón donde los mayoristas subastaban y vendían pescado al por mayor. Esos hangares se demolieron y el terreno se reconvirtió parcialmente (parte se usó para infraestructuras relacionadas con los Juegos Olímpicos de Tokio 2020). Lo que sobrevivió es el mercado exterior: las calles estrechas repletas de tiendas que llevan décadas vendiendo cuchillos japoneses, tortillas tamagoyaki, sushi fresco, marisco a la parrilla, té verde, especias y herramientas de cocina profesionales. Estos negocios no dependían del mercado mayorista interior para funcionar; tienen sus propios proveedores y su propia clientela. Cuando el mercado mayorista se fue, ellos se quedaron.
            </p>

            {/* Qué puedes ver hoy */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué puedes ver hoy (mercado exterior)
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Las 400 tiendas que siguen abiertas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El mercado exterior de Tsukiji concentra aproximadamente 400 establecimientos en una superficie compacta que puedes recorrer en una hora si vas rápido, aunque yo recomiendo al menos dos. Hay de todo: pescaderías donde cortan el atún delante de ti, puestos de sushi donde comes de pie junto a trabajadores locales, tiendas de cuchillos artesanales donde un maestro cuchillero te graba tu nombre en la hoja, puestos de tamagoyaki que llevan tres generaciones con la misma receta, tiendas de algas, de encurtidos japoneses, de salsa de soja artesanal y de cerámica para la mesa. No es un centro comercial disfrazado de mercado: es un mercado real donde los profesionales de la restauración de Tokio siguen comprando cada mañana.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo nuevo desde el traslado
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde el traslado del mercado mayorista, el mercado exterior ha vivido una renovación gradual. Algunos de los locales más antiguos, al jubilarse sus propietarios, han dado paso a negocios nuevos que aportan energía fresca sin perder la esencia del lugar. Han aparecido cafeterías especializadas, puestos de frutas de temporada preparadas para llevar, y algunos restaurantes que ofrecen experiencias gastronómicas más elaboradas sin dejar de ser accesibles. También se ha mejorado la señalización en inglés y la infraestructura para visitantes. El mercado de Tsukiji en Tokio en 2026 es más cómodo para el turista internacional de lo que fue nunca, sin haber perdido su carácter.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El ambiente a primera hora vs. al mediodía
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es una distinción que la mayoría de guías online no mencionan. Llegar a Tsukiji a las 7 de la mañana es una experiencia completamente distinta a llegar a las 11. A primera hora, el mercado tiene un ritmo de trabajo: los comerciantes reciben mercancía, los cocineros de restaurantes del barrio vienen a comprar sus ingredientes, y los pocos turistas madrugadores pueden ver el mercado en su versión más auténtica. A partir de las 10, el mercado se transforma en un destino gastronómico bullicioso, con colas frente a los puestos más populares. Ambas versiones tienen su encanto, pero si me preguntas cuál prefiero como guía, te diré que el Tsukiji de las 8 de la mañana entre semana es mágico.
            </p>

            {/* Qué comer y dónde */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué comer y dónde (mis recomendaciones personales)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Llevo años guiando grupos por el mercado de Tsukiji en Tokio, y he probado prácticamente todos los puestos. Estas son las categorías que considero imprescindibles y mis consejos sinceros sobre cada una.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Sushi fresco: dónde sí y dónde no
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tsukiji tiene docenas de locales de sushi, y no todos merecen tu tiempo ni tu dinero. Mi regla de oro: evita cualquier restaurante con captadores en la puerta intentando atraerte en varios idiomas. Los mejores locales de sushi de Tsukiji no necesitan hacer eso: tienen cola porque son buenos. Los restaurantes de sushi de pie (tachigui-zushi) ofrecen una relación calidad-precio extraordinaria: por 2.000-3.000 yenes comes 8-10 piezas de sushi preparadas al momento con pescado que llegó esa misma mañana. Para una experiencia más relajada, los locales con asiento ofrecen menús omakase desde 3.500 yenes. Mi consejo: no persigas los nombres famosos con colas de dos horas. Camina un poco más adentro y descubrirás barras excelentes con esperas de 15 minutos.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/tsukiji-fresh-maguro-sashimi.webp"
                alt="Sashimi de atún maguro recién cortado servido en el mercado de Tsukiji"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Maguro recién cortado en Tsukiji — comprado directamente a los mayoristas esa misma mañana
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tamagoyaki, el bocado imprescindible
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si hay un símbolo del mercado exterior de Tsukiji, es el tamagoyaki: una tortilla japonesa espesa, ligeramente dulce, cocinada capa a capa en una sartén rectangular especial. Las dos tiendas históricas son Yamachou (más dulce, casi como un postre) y Shouro (más salada, con más sabor a dashi). Un palito de tamagoyaki cuesta entre 100 y 200 yenes, y verlo preparar es parte de la experiencia. Cada vez que traigo un grupo, el tamagoyaki es lo que más sorprende a quienes nunca han estado en Japón. No te lo saltes.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/tsukiji-tamagoyaki-on-stick.webp"
                alt="Tamagoyaki dorado en palito en el mercado exterior de Tsukiji"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                El icónico tamagoyaki de Tsukiji — dorado, esponjoso y mejor recién salido de la plancha
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Marisco a la parrilla y wagyu en brocheta
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los callejones del mercado están salpicados de puestos donde asan marisco al momento: vieiras gigantes de Hokkaido con mantequilla y soja, patas de cangrejo real, gambas, calamar y lo que la temporada traiga. Las vieiras (hotate) son mi recomendación número uno: a 500-800 yenes por pieza, son enormes y el sabor es incomparable al de cualquier vieira que hayas probado fuera de Japón. Para los carnívoros, varios puestos venden brochetas de wagyu A4 y A5 asadas sobre carbón por 800-1.500 yenes. El marmolado de la carne se derrite literalmente en la boca. Es un capricho, pero estás en Tsukiji, y aquí los caprichos están justificados.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/tsukiji-dried-goods-souvenirs.webp"
                alt="Puesto del mercado de Tsukiji con sésamo de wasabi y productos secos especiales como recuerdo"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Sésamo de wasabi, condimentos secos y otros recuerdos exclusivos de Tsukiji con más sabor que cualquier tienda de aeropuerto
              </figcaption>
            </figure>

            {/* Cómo ir y cuándo llegar */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo ir y cuándo llegar
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Transporte desde cualquier punto de Tokio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Llegar al mercado de Tsukiji en Tokio es sencillo. La estación más cercana es <strong className="text-foreground">Tsukiji</strong> en la línea Hibiya del metro de Tokio (salida 1 o 2, a dos minutos a pie del mercado). También puedes usar la estación <strong className="text-foreground">Tsukijishijo</strong> en la línea Oedo (salida A1). Si vienes desde Shinjuku, el trayecto toma unos 25 minutos; desde Shibuya, unos 20 minutos; desde la estación de Tokio, apenas 10 minutos. Cualquier tarjeta IC (Suica o Pasmo) funciona. No necesitas taxi ni autobús: el metro es la opción más rápida y cómoda.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Horarios reales (no los de internet)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mayoría de webs dicen que el mercado exterior abre de 5:00 a 14:00. La realidad es más matizada. A las 5:00 de la mañana, solo están abiertos un puñado de puestos dirigidos a profesionales del sector. La mayoría de tiendas y restaurantes orientados a visitantes abren entre las 7:00 y las 8:00. El pico de actividad es de 9:00 a 12:00. A partir de las 13:00, muchos puestos empiezan a cerrar, y para las 15:00 el mercado está prácticamente vacío. <strong className="text-foreground">Mi recomendación: llega entre las 8:00 y las 9:00 entre semana para la mejor experiencia.</strong>
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Días de cierre: la trampa del domingo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es el error más frecuente que veo entre los turistas: planificar su visita a Tsukiji en domingo. <strong className="text-foreground">La mayoría de los puestos del mercado exterior cierran los domingos</strong>, y <strong className="text-foreground">los miércoles son también un día habitual de cierre</strong>, con muchos puestos y restaurantes cerrados. No hay un calendario unificado porque cada tienda establece su propio horario, pero como regla general: los martes, jueves y viernes son los mejores días, y los sábados también son buenos aunque más concurridos. El lunes es variable (algunos puestos cierran), y el domingo es decepcionante. Si tu único día libre es el domingo, no vengas a Tsukiji. Planifica otra actividad y guarda el mercado para otro día.
            </p>

            {/* Tsukiji vs. Toyosu */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Tsukiji vs. Toyosu: ¿cuál visitar?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la gran pregunta, y la respuesta depende de lo que busques. Son experiencias completamente diferentes, y entender esa diferencia te ahorrará frustración.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo que ofrece Toyosu
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Toyosu es el mercado mayorista moderno. Su gran atractivo es la subasta de atún rojo, donde ejemplares que pueden costar millones de yenes se venden en cuestión de minutos. Los visitantes observan desde una plataforma elevada detrás de cristal. Es un espectáculo fascinante, pero el acceso requiere ganar un <strong className="text-foreground">sorteo mensual</strong> (se solicita online y los ganadores se eligen al azar, no por orden de llegada). Solo se admiten unos 100 visitantes al día, y hay que estar allí antes de las 6:00 de la mañana. Toyosu también tiene corredores de observación donde puedes ver a los profesionales trabajar, y una zona de restaurantes con locales de sushi de buena calidad. El edificio es limpio, moderno y organizado, pero carece del alma que solo los años y la acumulación de historias pueden dar a un lugar.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo que ofrece Tsukiji
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tsukiji ofrece lo que ningún mercado moderno puede replicar: autenticidad acumulada durante décadas. Callejones estrechos donde huele a marisco asado y a carbón, vendedores que llevan toda la vida en el mismo puesto, el ruido de los cuchillos cortando atún, el vapor del tamagoyaki saliendo de las planchas. Es táctil, inmediato y caótico en el mejor sentido de la palabra. Puedes comer de pie junto a un oficinista japonés en su descanso, comprar un cuchillo artesanal hecho a mano y terminar con un helado de matcha, todo en la misma manzana. Es la experiencia gastronómica callejera más concentrada de Tokio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mi recomendación como guía
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si solo tienes tiempo para uno, elige Tsukiji. La experiencia es más completa, más accesible y más satisfactoria para la gran mayoría de visitantes. Si tienes tiempo y ganas para ambos, haz Toyosu al amanecer (para la subasta de atún) y Tsukiji a media mañana (para comer y explorar). Es una combinación extraordinaria que hago con algunos de mis grupos y que nunca decepciona. Pero insisto: si solo puedes ir a uno, que sea el mercado de Tsukiji en Tokio.
            </p>

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas frecuentes sobre el mercado de Tsukiji
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿El mercado de Tsukiji está cerrado?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No. Lo que cerró en 2018 fue el mercado mayorista interior, que se trasladó a Toyosu. El mercado exterior de Tsukiji, con sus aproximadamente 400 tiendas, restaurantes y puestos de comida, sigue abierto y funcionando con normalidad. Es la parte que la mayoría de turistas visitaban originalmente.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Cuánto tiempo necesito para visitar Tsukiji?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recomiendo un mínimo de 90 minutos para recorrer el mercado con calma, probar varios puestos y explorar las tiendas especializadas. Si quieres sentarte a comer sushi y realmente empapar el ambiente, calcula dos horas o más. Muchos de mis tours combinan Tsukiji con un paseo por Ginza, lo que hace una media jornada perfecta.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Puedo ir al mercado de Tsukiji sin guía?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Por supuesto. El mercado es de acceso libre y no necesitas entrada ni reserva. Sin embargo, un guía local marca la diferencia: te lleva directamente a los puestos que merecen la pena, te ayuda a evitar las trampas para turistas, te traduce los menús y te cuenta las historias detrás de cada producto. Si decides ir por tu cuenta, esta guía te dará una buena base, pero en persona siempre descubrirás más.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Cuánto cuesta comer en Tsukiji?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes comer muy bien con un presupuesto variado. Un palito de tamagoyaki cuesta 100-200 yenes (menos de 2 euros). Una brocheta de marisco, 500-800 yenes. Un set de sushi de pie, 2.000-3.000 yenes. Una comida completa sentado con sushi omakase, 3.500-6.000 yenes. Para una visita típica probando varios puestos, calcula entre 2.000 y 4.000 yenes (unos 12-25 euros), que te dará un recorrido gastronómico más que satisfactorio.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Puedo visitar Tsukiji y Toyosu el mismo día?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, y es una combinación excelente si madrugas. La estrategia es empezar por Toyosu a primera hora de la mañana (especialmente si tienes reserva para ver la subasta de atún, que empieza sobre las 5:30) y después desplazarte a Tsukiji para media mañana. El trayecto entre ambos toma unos 30 minutos en transporte público. Llegarás a Tsukiji justo cuando el mercado exterior está en plena actividad.
                </p>
              </div>
            </div>

            {/* Cierre + enlaces internos */}
            <p className="text-muted-foreground leading-relaxed mb-4">
              El mercado de Tsukiji en Tokio no solo ha sobrevivido al traslado de su mercado mayorista: ha demostrado que su verdadera esencia nunca estuvo en las subastas de atún, sino en las personas que cada mañana abren sus puestos, encienden las parrillas y mantienen viva una tradición gastronómica que lleva casi un siglo en el mismo lugar. Si vienes a Tokio en 2026, no te lo pierdas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si quieres saber más sobre la gastronomía japonesa en general, echa un vistazo a nuestra guía sobre{" "}
              <Link to="/es/blog/que-comer-en-japon" className="text-accent hover:underline">
                qué se come en Japón
              </Link>
              . Y si prefieres explorar Tsukiji con alguien que conoce cada rincón del mercado, te espero en nuestro{" "}
              <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">
                Tour a Pie por Tsukiji y Ginza
              </Link>
              .
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres descubrir el verdadero Tsukiji con un guía local?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En nuestro Tour a Pie por Tsukiji y Ginza, te llevaré por los callejones del mercado exterior, te contaré la historia de cada rincón, te ayudaré a elegir los mejores puestos y te mostraré los secretos que solo conocemos quienes caminamos por aquí cada semana. Después, pasearemos hasta Ginza para completar una mañana inolvidable en Tokio.
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
        </div>
      </section>

      <RelatedTourCards tourIds={["tsukiji-ginza","tokyo-food-tour"]} lang="es" />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿El mercado de Tsukiji está cerrado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Lo que cerró en 2018 fue el mercado mayorista interior, que se trasladó a Toyosu. El mercado exterior de Tsukiji, con sus aproximadamente 400 tiendas, restaurantes y puestos de comida, sigue abierto y funcionando con normalidad.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Cuánto tiempo necesito para visitar Tsukiji?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Recomiendo un mínimo de 90 minutos para recorrer el mercado con calma, probar varios puestos y explorar las tiendas especializadas. Si quieres sentarte a comer sushi, calcula dos horas o más.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Puedo ir al mercado de Tsukiji sin guía?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, el mercado es de acceso libre y no necesitas entrada ni reserva. Sin embargo, un guía local te lleva directamente a los puestos que merecen la pena y te ayuda a evitar las trampas para turistas.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta comer en Tsukiji?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Para una visita típica probando varios puestos, calcula entre 2.000 y 4.000 yenes (unos 12-25 euros). Un palito de tamagoyaki cuesta 100-200 yenes, una brocheta de marisco 500-800 yenes, y un set de sushi de pie 2.000-3.000 yenes.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Puedo visitar Tsukiji y Toyosu el mismo día?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. La estrategia es empezar por Toyosu a primera hora de la mañana y después desplazarte a Tsukiji para media mañana. El trayecto entre ambos toma unos 30 minutos en transporte público.",
                },
              },
            ],
          }),
        }}
      />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Mercado de Tsukiji en Tokio: Qué Queda y Qué Vale la Pena Ver en 2026",
            "description": "El Mercado Tsukiji sigue abierto en 2026 con 460+ puestos. Horario: 5:00-14:00, cerrado domingos. Guía local con los mejores puestos y consejos.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/mercado-tsukiji-tokio",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsMercadoTsukijiTokio;
