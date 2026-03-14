// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";

const EsShitamachiTokio = () => {
  return (
    <Layout>
      <SEO
        title="El Tokio de antes: guía del shitamachi para viajeros curiosos"
        description="Shitamachi significa &quot;ciudad baja&quot;. Es el Tokio que sobrevivió, el que los japoneses ya casi olvidaron. Un guía te lo explica y te lleva por él."
        canonicalPath="/es/blog/shitamachi-tokio"
        hreflang={[
          { lang: "es", path: "/es/blog/shitamachi-tokio" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/asakusa-backstreet-local.webp"
          alt="Calles tradicionales del shitamachi en Tokio"
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
            <p className="text-label text-accent mb-3">Guías de Barrios de Tokio</p>
            <h1 className="heading-display text-foreground">
              El Tokio de Antes: Guía del Shitamachi para Viajeros Curiosos
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
              Hay un Tokio que no sale en las guías de viaje. No tiene luces de neón, ni cruces de Shibuya, ni robots sirviendo cócteles. Es un Tokio de callejones estrechos donde las señoras riegan las plantas a las seis de la tarde, donde el tofu-ya (vendedor de tofu) todavía pasa con su carrito, y donde los vecinos se saludan por nombre. Se llama <strong className="text-foreground">shitamachi</strong>, y es el alma que la ciudad moderna intentó borrar pero no pudo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yo crecí escuchando historias del <strong className="text-foreground">barrio antiguo tokio shitamachi</strong> que me contaba mi abuela. Ella vivió en Yanaka hasta los treinta años, y cada vez que hablaba del barrio se le iluminaban los ojos. Me describía un mundo donde las puertas se dejaban abiertas, donde los niños jugaban en la calle hasta que oscurecía, y donde todo el mundo sabía quién hacía el mejor senbei del vecindario. Ese mundo ya casi no existe, pero sus huellas siguen ahí, esperando a quien quiera verlas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Como guía con licencia, llevo años caminando estos barrios con viajeros de todo el mundo. Y siempre pasa lo mismo: la gente llega pensando que va a ver algo pintoresco y se va sintiendo algo profundo. Porque el shitamachi no se ve solamente. Se siente. Es como los barrios castizos de Madrid o los barrios del sur de Buenos Aires, donde la gente todavía se conoce por nombre. Este artículo es mi intento de explicarte qué es, dónde encontrarlo y cómo visitarlo sin romper su magia.
            </p>

            {/* ¿Qué es el shitamachi? */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Qué es el shitamachi? (y por qué debería importarte)
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              La ciudad alta vs. la ciudad baja
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para entender el shitamachi hay que entender cómo se organizaba Tokio, o mejor dicho, Edo, hace cuatrocientos años. Cuando Tokugawa Ieyasu estableció su gobierno en 1603, la ciudad se dividió naturalmente en dos zonas. En las colinas del oeste vivían los samuráis, los señores feudales y la aristocracia. Esa zona se llamaba <strong className="text-foreground">yamanote</strong>, literalmente "la mano de la montaña". Abajo, en las tierras llanas junto al río Sumida, vivían los comerciantes, los artesanos, los pescadores y los trabajadores. Esa era la <strong className="text-foreground">shitamachi</strong>, "la ciudad baja".
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La ironía es que, bajo el sistema de castas de Edo, los comerciantes eran la clase más baja. Pero en la práctica, eran ellos quienes tenían el dinero, la energía y la cultura. El kabuki nació en el shitamachi. El sushi nació en el shitamachi. Los fuegos artificiales de verano sobre el río Sumida, que hoy atraen a un millón de espectadores, nacieron en el <strong className="text-foreground">barrio antiguo tokio shitamachi</strong>. Todo lo que hoy asociamos con la cultura popular japonesa tiene sus raíces en estas calles humildes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Shitamachi: el alma popular de Tokio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si el yamanote era la mente de Tokio, el shitamachi era su corazón. Aquí la gente vivía hacinada en largas filas de casas de madera llamadas nagaya, compartiendo pozos, baños y chismes. La privacidad no existía, pero la soledad tampoco. Había una palabra para describir el carácter de esta gente: <strong className="text-foreground">edokko</strong>, que significa "hijo de Edo". Un edokko era directo, generoso, un poco bravucón y absolutamente leal a su barrio. Gastaba el dinero tan rápido como lo ganaba porque, decían, "el dinero del edokko no pernocta". Era un tipo de persona que ya casi no queda, pero que dejó una huella imborrable en la personalidad de Tokio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Por qué los japoneses sienten nostalgia por el shitamachi
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En japonés existe una palabra que no tiene traducción exacta: <strong className="text-foreground">natsukashii</strong>. Se usa cuando algo te despierta una nostalgia dulce, casi física. Un olor, una canción, un atardecer. Para muchos japoneses, el <strong className="text-foreground">barrio antiguo tokio shitamachi</strong> es la encarnación de ese sentimiento. Representa un Japón de antes, más lento, más humano, menos perfecto pero más cálido. Un Japón donde la comunidad importaba más que la eficiencia. Muchos japoneses que nunca vivieron en el shitamachi sienten nostalgia por él, como si lo llevaran en la memoria genética. Cuando llevas a un viajero por Yanaka y le explicas esto, algo cambia en su mirada. Deja de ver casas viejas y empieza a ver historia viva.
            </p>

            {/* Los barrios del shitamachi */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Los barrios del shitamachi que puedes visitar hoy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El shitamachi histórico abarcaba una zona enorme, pero los terremotos, los bombardeos de la guerra y la modernización se llevaron la mayor parte. Lo que queda son islas de autenticidad rodeadas de ciudad moderna. Estas son las que yo visito con mis invitados.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Asakusa: el más famoso
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Asakusa es la puerta de entrada al shitamachi para la mayoría de los viajeros, y con razón. El templo Senso-ji, con su enorme farol rojo en la puerta Kaminarimon, es probablemente la imagen más fotografiada de Tokio. Pero Asakusa es mucho más que el templo. Las calles laterales alrededor de Denboin-dori conservan un ambiente de barrio que los turistas que solo visitan Nakamise-dori se pierden por completo. Hay tiendas de cuchillos artesanales que llevan tres generaciones, talleres de papel washi, y pequeñas tabernas (izakaya) donde los parroquianos beben hoppy, la bebida del shitamachi por excelencia, desde los años cincuenta. Si quieres conocer Asakusa de verdad, te invito a explorarla en nuestro{" "}
              <Link to="/es/tours/asakusa" className="text-accent hover:underline">
                tour por Asakusa con guía local
              </Link>.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/asakusa-jizo-statues-red-bibs.webp"
                alt="Fila de estatuas Jizo de piedra con baberos rojos en un templo de Asakusa en el antiguo Tokio"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Estatuas Jizo con baberos rojos cerca de un templo en Asakusa — cada babero es una oración personal, un recordatorio silencioso de las raíces espirituales del shitamachi
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Yanaka: el más auténtico
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si Asakusa es el shitamachi que se muestra al mundo, Yanaka es el que se guarda para sí mismo. Este barrio sobrevivió a los bombardeos de 1945 casi intacto, lo que significa que muchas de sus casas de madera, sus templos pequeños y sus callejones sinuosos son genuinamente antiguos, no reconstrucciones. La calle comercial Yanaka Ginza es un modelo de lo que era una shotengai de barrio: carnicerías que fríen croquetas al momento, gatos callejeros dormitando al sol, señores mayores charlando en la puerta de la ferretería. No hay ningún Starbucks. No hay ninguna cadena. Es el <strong className="text-foreground">barrio antiguo tokio shitamachi</strong> en su expresión más pura. Si quieres profundizar en Yanaka, he escrito una{" "}
              <Link to="/es/blog/yanaka-tokio-itinerario" className="text-accent hover:underline">
                guía completa con itinerario por Yanaka
              </Link>.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/yanaka-ginza-shotengai-entrance.webp"
                alt="Puerta de entrada a la calle comercial Yanaka Ginza con compradores locales en el antiguo Tokio"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                La entrada a Yanaka Ginza — esta cuesta con tiendas familiares se siente más como un pueblo que como parte de Tokio
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Shibamata: el que los turistas no conocen
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shibamata está en el extremo este de Tokio, tan lejos del circuito turístico que incluso muchos tokiotas no lo han visitado. Pero para mí es uno de los rincones más especiales de la ciudad. La calle que lleva al templo Taishakuten está congelada en el tiempo: tiendas de dango (brochetas de mochi dulce), talleres de artesanías, y una atmósfera que evoca la era Showa de los años sesenta y setenta. Shibamata es famosa por ser el escenario de la serie de películas "Otoko wa Tsurai yo" (Es duro ser hombre), la saga cinematográfica más larga del mundo, protagonizada por el entrañable vagabundo Tora-san. Si caminas por aquí un martes por la mañana, es posible que seas el único visitante extranjero en todo el barrio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Monzen-nakacho: el barrio de los festivales
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Monzen-nakacho, o simplemente "Monnaká" como lo llaman los locales, es el <strong className="text-foreground">barrio antiguo tokio shitamachi</strong> que todavía late con fuerza. Centrado alrededor del santuario Tomioka Hachiman, este barrio es famoso por el Fukagawa Matsuri, uno de los tres grandes festivales de Tokio. Cada tres años, en agosto, las calles se llenan de mikoshi (santuarios portátiles) que la gente carga sobre los hombros mientras otros les arrojan cubos de agua. Una tradición salvaje, alegre y absolutamente shitamachi. Pero incluso fuera del festival, Monzen-nakacho tiene un carácter propio: yakitoris humeantes, tiendas de sake artesanal y un canal bordeado de cerezos que en primavera parece un cuadro.
            </p>

            {/* La vida en el shitamachi */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              La vida en el shitamachi: lo que verás (y sentirás)
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Las shotengai (calles comerciales cubiertas)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Antes de que existieran los konbini y los supermercados, los japoneses compraban en las shotengai, calles comerciales de barrio, a menudo cubiertas con un techo de plástico o lona, donde cada tienda se especializaba en una cosa. La verdulería, la pescadería, la tienda de arroz, la de encurtidos. En el shitamachi, muchas de estas shotengai sobreviven, aunque algunas luchan contra la despoblación y el envejecimiento. Caminar por una shotengai es entender cómo funcionaba la vida diaria en el Tokio de antes: la tendera que te conocía, que sabía qué tofu te gustaba, que te fiaba si andabas corto de dinero a final de mes.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/ningyocho-amazake-yokocho-tofu-shop.webp"
                alt="Tienda tradicional de tofu y amazake en el callejón Amazake Yokocho de Ningyocho, Tokio"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Una tienda de tofu en Amazake Yokocho, Ningyocho — estos negocios familiares llevan generaciones en el mismo lugar
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Los sento (baños públicos)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En las nagaya del shitamachi no había baño privado. Todo el mundo iba al sento del barrio a bañarse, y el sento era mucho más que un lugar para lavarse: era el centro social de la comunidad. Te enterabas de quién se había casado, quién estaba enfermo, quién había tenido un hijo. Hoy quedan muy pocos sento en Tokio (cierran a un ritmo de uno por mes), pero los que sobreviven en el shitamachi conservan un encanto extraordinario. Azulejos de Monte Fuji pintados a mano en la pared del fondo, techos altos de madera, y un agua caliente que te quita el cansancio y las preocupaciones por igual. Si nunca has entrado a un sento, el shitamachi es el lugar perfecto para tu primera vez.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Los matsuri (festivales): el corazón del barrio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si hay algo que define al <strong className="text-foreground">barrio antiguo tokio shitamachi</strong>, son sus festivales. El Sanja Matsuri de Asakusa, el Fukagawa Matsuri de Monzen-nakacho, el Torigoe Matsuri de Kuramae. Cada barrio tiene el suyo, y cada uno se vive con una intensidad que roza lo sagrado. Durante el festival, las jerarquías sociales se disuelven. El presidente de la empresa carga el mikoshi junto al carpintero. Los niños corren entre las piernas de los adultos. Las abuelas preparan onigiri para todos. El matsuri es el momento en que el barrio deja de ser un lugar y se convierte en una familia. Es el shitamachi en estado puro.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Los artesanos que siguen trabajando como hace 100 años
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En el shitamachi quedan artesanos que practican oficios que en el resto de Tokio ya desaparecieron. Fabricantes de shoji (puertas correderas de papel), torneros de madera que hacen koma (peonzas), artesanos del vidrio soplado edo-kiriko, y preparadores de tatami que trabajan con la misma técnica que sus bisabuelos. Muchos de estos talleres están abiertos a visitantes, y algunos ofrecen experiencias donde puedes probar el oficio con tus propias manos. Es una forma de turismo que no consume el lugar, sino que lo sostiene.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/yanaka-traditional-pottery-storefront.webp"
                alt="Fachada de tienda tradicional de cerámica en Yanaka con cuencos artesanales expuestos"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Una tienda de cerámica en Yanaka — la fachada de madera y las piezas artesanales son exactamente lo que descubres en el shitamachi cuando sabes dónde mirar
              </figcaption>
            </figure>

            {/* Cómo visitar */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo visitar el shitamachi sin romper su magia
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ir despacio (esto no es Shibuya)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El error más común que veo en los viajeros es tratar el shitamachi como una atracción turística más: llegar, hacer fotos, irse. Pero el barrio antiguo tokio shitamachi no funciona así. Su gracia está en el ritmo lento, en los detalles que solo ves cuando no tienes prisa. La maceta de bonsái que alguien cuida desde hace veinte años en la puerta de su casa. El gato que duerme siempre en el mismo muro. El sonido de un shamisen que sale de una ventana abierta. Si corres, no verás nada de esto. Mi consejo: elige un barrio, dedícale media mañana, y déjate perder.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Comprar en las tiendas locales
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mejor forma de apoyar al shitamachi es comprar en sus tiendas. Un paquete de senbei artesanal, un abanico pintado a mano, una bolsita de té de una tienda que lleva cien años vendiendo té. No son souvenirs. Son piezas de un mundo que se está desvaneciendo, y cada compra ayuda a que dure un poco más. Además, la calidad es extraordinaria. Estos artesanos y tenderos no han sobrevivido un siglo por casualidad.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Hablar con la gente (sí, en japonés básico)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En el shitamachi, un "konnichiwa" abre puertas que el dinero no puede abrir. La gente de estos barrios es cálida, curiosa y sorprendentemente dispuesta a comunicarse aunque no compartan idioma. He visto conversaciones de quince minutos entre un viajero argentino y una abuela de Yanaka que no hablaban ni una palabra del idioma del otro, y los dos terminaron riendo. Lleva algunas frases básicas aprendidas, una sonrisa sincera, y la disposición a hacer el ridículo. Eso es todo lo que necesitas.
            </p>

            {/* Mi ruta personal */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Mi ruta personal por el shitamachi de Tokio
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Medio día: Yanaka + Nezu + Sendagi
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la ruta que más recomiendo a quienes tienen poco tiempo. Empiezo en la estación de Nippori, bajo por la escalera de Yuyake Dandan (la "escalera del atardecer") hacia Yanaka Ginza. Recorro la calle comercial con calma, pruebo una croqueta de carne recién frita, y sigo hacia el cementerio de Yanaka, que, lejos de ser tétrico, es uno de los paseos más bonitos de Tokio, especialmente en temporada de cerezos. Después camino hasta Nezu, donde el santuario Nezu-jinja espera con sus miles de torii rojos (sí, como los de Kioto pero sin las multitudes). Termino en Sendagi, tomando un café en alguna de las cafeterías independientes que han ido apareciendo en los últimos años. Toda la ruta se hace en tres o cuatro horas, caminando despacio y parando a menudo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Día completo: añade Asakusa y Shibamata
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si tienes un día entero dedicado al <strong className="text-foreground">barrio antiguo tokio shitamachi</strong>, la ruta ideal combina la mañana en Yanaka-Nezu-Sendagi con una tarde en Asakusa, donde puedes ver el Senso-ji, perderte por los callejones de Hoppy-dori al atardecer, y cenar algo caliente en un puesto callejero. Y si eres de los que quieren ir más allá, toma la línea Keisei hasta Shibamata y descubrirás un Tokio que ni siquiera la mayoría de los japoneses conoce. Es un día largo pero profundamente satisfactorio. Si quieres hacerlo con un guía que conozca cada rincón, escríbeme. Este tipo de recorridos es lo que más disfruto.
            </p>

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas frecuentes sobre el shitamachi de Tokio
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Qué significa shitamachi?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Literalmente, "ciudad baja" (shita = abajo, machi = ciudad/barrio). Históricamente se refiere a las zonas bajas y llanas de Tokio donde vivían los comerciantes y artesanos durante el periodo Edo (1603-1868). Hoy se usa para describir los barrios que conservan ese espíritu popular, comunitario y tradicional.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Dónde está el shitamachi?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El shitamachi no tiene fronteras exactas, pero se concentra en la zona este y noreste de Tokio: Asakusa, Ueno, Yanaka, Nezu, Sendagi, Kuramae, Monzen-nakacho, Fukagawa y Shibamata son los barrios más representativos. Todos son accesibles en metro desde el centro de Tokio en menos de treinta minutos.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Puedo ir por mi cuenta?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Por supuesto. Los barrios del shitamachi son perfectamente accesibles para viajeros independientes. Sin embargo, gran parte de su riqueza está en las historias, los contextos y los detalles que no aparecen en ningún cartel ni en Google Maps. Un guía local puede transformar un paseo agradable en una experiencia que recordarás durante años.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Es seguro?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Absolutamente. Tokio es una de las ciudades más seguras del mundo, y el shitamachi no es la excepción. Son barrios residenciales tranquilos donde puedes caminar a cualquier hora sin preocupación. La única precaución es respetar la tranquilidad del vecindario: no hacer ruido excesivo ni bloquear callejones estrechos con grupos grandes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Merece la pena con guía?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Depende de lo que busques. Si quieres caminar y disfrutar del ambiente, puedes ir solo. Pero si quieres entender la historia detrás de cada calle, hablar con los artesanos, entrar a los talleres que no tienen cartel en inglés, y descubrir rincones que no aparecen en ninguna guía turística, entonces sí, un guía marca una diferencia enorme. Es la diferencia entre ver un barrio y comprenderlo.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres descubrir el shitamachi con alguien que lo conoce de verdad?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Te llevo por los callejones que no salen en las guías, te presento a los artesanos que siguen trabajando como hace un siglo, y te cuento las historias que hacen que cada esquina cobre vida. Un paseo por el shitamachi con un guía local es la mejor forma de entender el Tokio que existía antes de que llegara el futuro. Escríbeme y diseñamos una ruta a tu medida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/asakusa" className="btn-accent">
                  Explorar Tour por Asakusa
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Hacer una Pregunta
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["yanaka","asakusa"]} lang="es" />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "El Tokio de Antes: Guía del Shitamachi para Viajeros Curiosos",
            "description": "Shitamachi significa \"ciudad baja\". Es el Tokio que sobrevivió, el que los japoneses ya casi olvidaron. Un guía te lo explica y te lleva por él.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/shitamachi-tokio",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsShitamachiTokio;
