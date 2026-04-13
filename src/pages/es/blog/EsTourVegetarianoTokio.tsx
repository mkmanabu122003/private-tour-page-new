import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { DiagnosticTrigger } from "@/components/blog/DiagnosticTrigger";
import { foodFinderEsConfig } from "@/data/diagnostics/foodFinderEs";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsTourVegetarianoTokio = () => {
  return (
    <Layout>
      <SEO
        title="Tour Vegetariano Tokio 2026: Guía Completa"
        description="Ser vegetariano en Japón no tiene por qué ser difícil. Un guía con licencia te muestra los mejores restaurantes, platos y cómo pedir en japonés."
        canonicalPath="/es/blog/tour-vegetariano-tokio"
        hreflang={[
          { lang: "en", path: "/blog/vegetarian-food-tour-tokyo" },
          { lang: "es", path: "/es/blog/tour-vegetariano-tokio" },
          { lang: "x-default", path: "/blog/vegetarian-food-tour-tokyo" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/vegetarian-matcha-wagashi.webp"
          alt="Té matcha y wagashi tradicionales, una experiencia perfecta para vegetarianos en Tokio"
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
                <li className="text-foreground">Tour Vegetariano</li>
              </ol>
            </nav>
            <p className="text-label text-accent mb-3">Gastronomía y Cultura</p>
            <h1 className="heading-display text-foreground">
              Tour Gastronómico Vegetariano en Tokio: La Guía Definitiva para Comer Sin Preocupaciones
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia Nacional
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                8 de marzo de 2026
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Última actualización: abril 2026
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción - gancho de dolor */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              "Soy vegetariano, ¿voy a poder comer en Japón?" Es la pregunta que más escucho antes de que mis invitados reserven un tour gastronómico conmigo. Y lo entiendo perfectamente. Cuando buscas "comida japonesa" en internet, todo parece girar alrededor del sushi, el ramen con caldo de cerdo y las brochetas de yakitori. La reputación de Japón como paraíso de la carne y el pescado es tan fuerte que muchos viajeros vegetarianos sienten verdadera ansiedad antes de llegar. Pero después de guiar cientos de tours gastronómicos por Tokio a lo largo de los años, te puedo decir con total seguridad: los viajeros vegetarianos y veganos pueden comer extraordinariamente bien aquí. Solo necesitas saber dónde buscar, qué pedir y cómo comunicar tus necesidades. Y ahí es exactamente donde entra un guía que habla japonés.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Esta guía recoge todo lo que he aprendido durante años personalizando tours para invitados con restricciones alimentarias. Da igual si eres vegano estricto, ovolactovegetariano, pescetariano, celíaco o si tienes alergias específicas: Tokio tiene mucho más que ofrecerte de lo que imaginas. La clave está en la preparación, y eso es exactamente lo que este artículo te va a dar.
            </p>

            {/* Sección 1: ¿Se puede hacer un tour gastronómico como vegetariano? */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Se puede hacer un tour gastronómico en Tokio siendo vegetariano?
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/tokyo-street-snack.webp"
                alt="Monaka de helado tradicional japonés, un snack callejero vegano popular en Tokio"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                La escena gastronómica de Tokio ofrece muchas más opciones vegetales de las que la mayoría espera
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La respuesta corta es sí, absolutamente. La respuesta larga es que requiere algo más de planificación que un tour estándar, pero el resultado puede ser igual de rico y satisfactorio, a veces incluso más, porque te obliga a explorar rincones de la cocina japonesa que la mayoría de turistas nunca descubre. Cuando guío un tour gastronómico vegetariano, no me limito a quitar la carne y el pescado del itinerario habitual y cruzar los dedos. Diseño una experiencia completamente diferente alrededor de la increíble profundidad de la cocina vegetal que ha existido en Japón durante siglos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japón tiene una larga tradición de cocina vegetariana budista llamada <strong>shojin ryori</strong> (精進料理). Es la comida que los monjes de los templos zen llevan preparando desde hace más de 700 años, y es una de las formas más refinadas e intencionadas de cocina vegetal en todo el mundo. El shojin ryori trata las verduras, el tofu y los ingredientes de temporada con la misma reverencia que un maestro de sushi le da a un trozo de atún. Cada plato está diseñado para resaltar el sabor natural, la textura y el color de sus ingredientes, sin ajo, sin cebolla y sin exceso de condimentos que enmascaren el gusto puro de la comida. Cuando llevo a mis invitados vegetarianos a un restaurante de shojin ryori auténtico, se quedan asombrados por la complejidad y la belleza de lo que llega a la mesa. Una sola comida puede incluir ocho o diez pequeños platos: <strong>goma-dofu</strong> (tofu de sésamo) con un glaseado de jengibre, setas <strong>maitake</strong> a la parrilla con salsa <strong>miso dengaku</strong>, verduras de montaña encurtidas, <strong>yuba</strong> (piel de tofu) frita que cruje como la tempura más ligera, y un cuenco de arroz aromático cocido con castañas o boniato según la estación.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Más allá del shojin ryori, la cultura culinaria cotidiana de Japón está llena de platos naturalmente vegetarianos que muchos visitantes pasan por alto. El <strong>inari-zushi</strong>, esos saquitos dulces de piel de tofu rellenos de arroz avinagrado, son completamente vegetales. La <strong>tempura de verduras</strong>, cuando se fríe en una masa con aceite vegetal y se sirve con sal en vez de la salsa tentsuyu a base de dashi, es vegana. Los <strong>onigiri</strong> (bolas de arroz) vienen con rellenos como ciruela encurtida (umeboshi), alga (kombu) y arroz sazonado, todos sin carne. Incluso en una konbini (tienda de conveniencia), que podría parecer un lugar improbable para buena comida vegetariana, puedo guiar a mis invitados entre las opciones e identificar qué onigiri, sándwiches y snacks son seguros. El problema no es la falta de opciones. El problema es que ingredientes como el <strong>dashi</strong>, un caldo hecho con copos de bonito (pescado), se esconde en lugares que no esperarías. Y ahí es donde tener un guía que habla el idioma y conoce la cocina al dedillo marca toda la diferencia.
            </p>

            <InlineCTAEs
              message="¿Te preocupa comer bien siendo vegetariano en Tokio?"
              linkText="Descubre nuestro tour gastronómico adaptado a tu dieta →"
              href="/es/tours"
            />

            {/* Sección 2: Mejores zonas para comida vegetariana */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Mejores zonas para comida vegetariana (Asakusa, Tsukiji, Shinjuku)
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/tsukiji-daifuku-mochi-shop.webp"
                alt="Mochi daifuku de colores y dulces de fresa en el Mercado Exterior de Tsukiji"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                El Mercado Exterior de Tsukiji: sorpresas vegetarianas junto al famoso marisco
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando diseño un tour gastronómico vegetariano, suelo construir la ruta alrededor de tres barrios que ofrecen algo completamente diferente entre sí. Asakusa, Tsukiji y Shinjuku son mis zonas preferidas, y cada una aporta un sabor distinto a la experiencia. La ventaja de un tour privado es que puedo ajustar la ruta sobre la marcha según lo que mis invitados quieran probar, cuánto quieran caminar y qué restricciones específicas tengan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Asakusa</strong> es donde suelo empezar, especialmente con invitados que quieren combinar gastronomía con inmersión cultural. Las calles alrededor del templo Senso-ji están llenas de tiendas de snacks tradicionales, y muchas son naturalmente vegetarianas. Las galletas de arroz <strong>senbei</strong> recién tostadas y pintadas con salsa de soja, los pasteles <strong>ningyo-yaki</strong> rellenos de pasta de judía roja dulce, y los <strong>kibi-dango</strong> (bolitas de mijo) cubiertos con polvo de soja son todos vegetales y se venden aquí desde hace generaciones. Me gusta llevar a mis invitados por las callejuelas detrás del templo, donde las multitudes de turistas desaparecen y aparecen las casas de té del barrio. Hay una cafetería de matcha metida en una calle lateral tranquila donde sirven <strong>matcha</strong> espeso, batido a mano, junto con dulces <strong>wagashi</strong> de temporada. Los wagashi están hechos artesanalmente, son completamente vegetales y casi demasiado bonitos para comérselos. Casi. Para los invitados que quieren una comida más sustancial en Asakusa, hay excelentes restaurantes de fideos <strong>soba</strong> que preparan platos con un caldo a base de <strong>kombu</strong> (alga) en vez del habitual dashi de katsuobushi, si se pide correctamente. Y yo siempre me aseguro de comunicar la petición con claridad para que no haya malentendidos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El <strong>Mercado Exterior de Tsukiji</strong> sorprende a mis invitados vegetarianos cada vez que los llevo. Sí, Tsukiji es famoso por el marisco, pero el mercado es mucho más diverso de lo que sugiere su reputación. Hay puestos que venden <strong>tamagoyaki</strong> (la tortilla japonesa dulce, apta para ovolactovegetarianos), tiendas especializadas en verduras encurtidas y <strong>tsukemono</strong> con décadas de historia, vendedores de fruta fresca en palito, y puestos que sirven <strong>age-dashi tofu</strong> bien caliente. Una de mis paradas favoritas es una pequeña tienda familiar que hace leche de soja y <strong>yuba</strong> fresca in situ. Puedes ver cómo levantan la delicada piel de tofu de la superficie de la leche de soja hirviendo y comerla momentos después con solo un toque de salsa de soja y wasabi. Es uno de esos bocados simples y perfectos que se quedan contigo mucho después de que termine el tour. Para los invitados veganos, sé qué puestos de tamagoyaki saltarnos y qué vendedores de encurtidos no usan condimentos a base de pescado en sus recetas, detalles que son casi imposibles de averiguar por tu cuenta sin hablar japonés.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Shinjuku</strong> ofrece una energía completamente diferente, y suelo dejarlo para la parte final del tour, cuando mis invitados están listos para sentarse a comer. La zona alrededor de la estación de Shinjuku tiene una enorme concentración de restaurantes, y entre esa maraña hay establecimientos vegetarianos y veganos realmente excelentes. Hay izakayas (tabernas japonesas) que sirven menús completamente vegetales con platos creativos como <strong>nasu dengaku</strong> (berenjena glaseada con miso), <strong>tempura de aguacate</strong> en rollitos, y <strong>nabe de setas</strong> (estofado caliente) que satisfarían hasta al más convencido de los carnívoros. Shinjuku también alberga varios restaurantes indios y nepalíes que sirven curris y naan vegetarianos de confianza, lo cual puede ser un cambio bienvenido para los invitados que llevan varios días comiendo comida japonesa y quieren algo familiar. También he encontrado un <strong>teishoku-ya</strong> (restaurante de menú del día) notable cerca de la salida oeste que hace un set de almuerzo centrado en verduras con seis o siete platos pequeños de temporada, un cuenco de arroz y sopa de miso hecha con un caldo de alga y setas. Es el tipo de sitio por el que pasarías de largo sin mirar dos veces si no supieras que está ahí.
            </p>

            {/* Sección 3: Qué esperar en un tour privado vegetariano */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué esperar en un tour gastronómico vegetariano privado
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/izakaya-dining-atmosphere.webp"
                alt="Ambiente íntimo de una izakaya en Tokio, donde los tours gastronómicos privados incluyen servicio personalizado"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Los callejones gastronómicos de Shinjuku, donde te esperan joyas ocultas
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cada tour vegetariano que guío es diferente porque cada invitado es diferente. Antes del tour, siempre hago preguntas detalladas sobre tus restricciones alimentarias concretas. ¿Eres ovolactovegetariano o vegano estricto? ¿Evitas el dashi de bonito? ¿Hay alergias que deba conocer, como soja, trigo o frutos secos? ¿Tienes alguna restricción relacionada con el gluten? Esta conversación es fundamental porque "vegetariano" significa cosas distintas para cada persona, y en Japón las diferencias importan enormemente. Un plato que parece vegetariano a simple vista puede contener dashi, mirin con trazas de ingredientes derivados del pescado, o una salsa espesada con gelatina de origen animal. Necesito saber exactamente dónde están tus límites para poder navegar el paisaje gastronómico en tu nombre con total confianza.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El día del tour, <strong>yo me encargo de toda la comunicación con el personal de los restaurantes y los vendedores</strong>. Es aquí donde el valor de un guía privado se hace más evidente. Tu guía pide por ti en japonés, explicando tus necesidades alimentarias en términos precisos que no dejan margen a la ambigüedad. No me limito a decir "sin carne", porque en Japón esa frase por sí sola no excluye el pescado, el caldo de pescado ni los condimentos de origen animal. En su lugar, especifico exactamente qué ingredientes hay que evitar: nada de carne, nada de pescado, nada de marisco, nada de dashi de bonito, nada de gelatina animal, y lo que aplique a tu situación concreta. La reacción del personal del restaurante cuando escucha la petición explicada con claridad en su propio idioma es siempre positiva. La hospitalidad japonesa, el <strong>omotenashi</strong>, significa que una vez que el chef entiende tus necesidades, hará todo lo posible por atenderte. He visto a chefs preparar platos completamente personalizados para mis invitados vegetarianos, creando elaboraciones fuera de carta simplemente porque querían ofrecer la mejor experiencia posible. Ese nivel de atención personalizada no ocurre cuando estás señalando una tarjeta de traducción y cruzando los dedos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un tour típico dura entre cuatro y cinco horas e incluye de cinco a siete paradas gastronómicas, dependiendo de las raciones y de tu apetito. Nos movemos a un ritmo cómodo, y voy intercalando contexto cultural a lo largo del recorrido: por qué el tofu ocupa un lugar tan importante en la cocina japonesa, cómo la conciencia estacional (<strong>shun</strong>) dicta lo que aparece en los menús, por qué los principios dietéticos budistas dieron forma a toda una tradición culinaria, y qué hace que los encurtidos japoneses sean algunos de los alimentos fermentados más complejos del mundo. También cubro técnicas de supervivencia prácticas para que puedas comer con confianza por tu cuenta después de que termine el tour. Cuando nos despidamos, sabrás leer kanji clave en los menús, qué artículos de las konbini son seguros y qué cadenas de restaurantes tienen opciones vegetarianas fiables. Los invitados celíacos reciben orientación adicional, porque la salsa de soja contiene trigo, y les muestro dónde encontrar <strong>tamari</strong> (salsa de soja sin trigo) y qué platos abordar con precaución.
            </p>

            <InlineCTAEs
              message="Tu guía pide por ti en japonés: sin estrés, sin errores."
              linkText="Reserva tu tour gastronómico vegetariano →"
              href="/es/tours"
            />

            {/* Sección 4: Cómo comunicar restricciones alimentarias */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo comunicar restricciones alimentarias en Japón
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/yanaka-street-food-display.webp"
                alt="Exhibición de comida callejera japonesa tradicional con senbei y mochi, todo apto para vegetarianos"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                La comunicación clara con el personal es la clave para comer con seguridad si tienes restricciones alimentarias en Japón
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Incluso si no vas a unirte a un tour guiado, saber cómo comunicar tus restricciones alimentarias en japonés mejorará drásticamente tu experiencia en Tokio. Las tarjetas de alergia en inglés y las apps de traducción han mejorado con los años, pero nada sustituye a decir tú mismo unas cuantas frases clave. El esfuerzo demuestra respeto, y el personal de los restaurantes japoneses responde con calidez genuina y atención extra.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La frase más importante para los vegetarianos es <strong>"Watashi wa bejitarian desu"</strong> (私はベジタリアンです), que simplemente significa "Soy vegetariano". Sin embargo, esta frase sola no siempre basta porque el concepto de vegetarianismo aún no se entiende de forma universal en Japón como en los países occidentales. Muchos japoneses escuchan "vegetariano" y piensan que significa que evitas la carne pero sigues comiendo pescado, porque el pescado a menudo se categoriza aparte de la "carne" (niku) en el pensamiento culinario japonés. Para ser más preciso, añade <strong>"Niku to sakana wa taberaremasen"</strong> (肉と魚は食べられません), que significa "No puedo comer carne ni pescado". Para los invitados veganos, recomiendo decir <strong>"Niku, sakana, tamago, nyuseihin wa taberaremasen"</strong> (肉、魚、卵、乳製品は食べられません), que cubre carne, pescado, huevos y productos lácteos. Si el dashi es un problema, y debería serlo para los vegetarianos estrictos, di <strong>"Katsuo dashi mo dame desu"</strong> (かつおだしもだめです), que significa "El caldo de bonito tampoco está bien". Para los invitados con problemas de gluten, <strong>"Komugi arerugi ga arimasu"</strong> (小麦アレルギーがあります) le dice al personal que tienes alergia al trigo, algo que los restaurantes japoneses se toman muy en serio porque la comunicación de alergias está bien establecida en el sector de la restauración aquí.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              También te recomiendo escribir estas frases en una tarjeta o guardarlas en el móvil para mostrárselas al personal. Una nota escrita en japonés suele ser más efectiva que una frase hablada, especialmente en un restaurante ruidoso o cuando tratas con personal que puede ponerse nervioso al intentar entender japonés con acento extranjero. En mis tours, preparo una tarjeta de restricciones alimentarias personalizada para cada invitado que escribo en japonés natural y educado. Esta tarjeta explica tus necesidades concretas en términos claros e incluye una nota que dice "Muchas gracias por su ayuda" (ご協力ありがとうございます), que siempre arranca una sonrisa. Varios de mis invitados anteriores me han dicho que solo esa tarjeta ya valió el precio del tour porque la usaron todos los días durante el resto de su viaje. La realidad es que Japón es un país increíblemente servicial una vez que la gente entiende lo que necesitas. La barrera casi nunca es la falta de voluntad, es la comunicación. Supera esa barrera y comerás de maravilla.
            </p>

            {/* Platos vegetarianos imprescindibles */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Platos vegetarianos japoneses que no te puedes perder
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si quieres aprovechar al máximo tu viaje, estos son los platos que siempre recomiendo a mis invitados vegetarianos. No son adaptaciones forzadas: son platos que llevan siglos siendo vegetales.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong>Goma-dofu (胡麻豆腐)</strong> - Tofu de sésamo, cremoso y denso, típico del shojin ryori. Se sirve frío con salsa de soja y wasabi.</li>
              <li><strong>Yudofu (湯豆腐)</strong> - Tofu cocido suavemente en caldo de alga kombu. Simple, reconfortante y 100% vegetal.</li>
              <li><strong>Nasu dengaku (茄子田楽)</strong> - Berenjena asada glaseada con pasta de miso dulce. Una explosión de umami sin nada animal.</li>
              <li><strong>Zaru soba (ざるそば)</strong> - Fideos de alforfón fríos. Pide que la salsa sea a base de kombu y no de bonito.</li>
              <li><strong>Inari-zushi (稲荷寿司)</strong> - Bolsitas de tofu frito dulce rellenas de arroz avinagrado. Disponibles en cualquier konbini.</li>
              <li><strong>Kuri gohan (栗ご飯)</strong> - Arroz cocido con castañas, típico del otoño. Estacional y delicioso.</li>
              <li><strong>Wagashi (和菓子)</strong> - Dulces tradicionales hechos con pasta de judía roja, arroz glutinoso y matcha. Casi siempre veganos.</li>
              <li><strong>Yuba sashimi (湯葉刺し)</strong> - Piel de tofu fresca servida como sashimi, con salsa de soja y wasabi. Una delicadeza que solo encontrarás en sitios especializados.</li>
            </ul>

            {/* CTA final */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Reserva tu tour gastronómico vegetariano a medida
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Escribí esta guía para demostrarte que los viajeros vegetarianos y veganos pueden disfrutar a fondo de Tokio, pero leer sobre ello y probarlo son dos cosas muy diferentes. En un tour privado conmigo, cada parada está seleccionada para tus necesidades alimentarias específicas, cada conversación con el personal del restaurante se maneja en japonés fluido, y cada plato viene acompañado de la historia cultural que hay detrás. Da igual si eres vegano estricto, celíaco o algo intermedio: yo diseño un tour que te permite vivir la cultura gastronómica de Tokio sin un solo momento de preocupación. Ven con hambre y vete asombrado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Ver Tours
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Contáctanos
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas frecuentes sobre comida vegetariana en Japón
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Es difícil encontrar comida vegetariana en Japón?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No tanto como parece, pero requiere preparación. El principal desafío es el dashi (caldo de bonito), que se usa en muchos platos aparentemente vegetarianos. Con un guía que hable japonés, este problema desaparece porque comunicamos tus necesidades directamente al chef. Japón tiene una tradición centenaria de cocina vegetal (shojin ryori) y cada vez más restaurantes veganos, especialmente en Tokio.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Hay restaurantes veganos en Tokio?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, y cada año hay más. Shinjuku, Shibuya y Roppongi tienen restaurantes 100% veganos con menús creativos. Además, muchos restaurantes tradicionales pueden adaptar sus platos si se les explica correctamente en japonés. En nuestros tours, nos aseguramos de que cada parada sea completamente segura para tu dieta.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Qué es el shojin ryori y dónde puedo probarlo?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  El shojin ryori es la cocina vegetariana budista que los monjes zen llevan practicando más de 700 años. Es completamente vegetal, sin ajo ni cebolla, y destaca por la delicadeza de sus sabores. Puedes probarlo en restaurantes especializados en Tokio o en templos como Kenchoji en Kamakura. En nuestro{" "}
                  <Link to="/es/tours" className="text-accent hover:underline">
                    tour gastronómico
                  </Link>
                  , te llevamos a probarlo con todas las explicaciones culturales.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Puedo encontrar comida vegetariana en las konbini (tiendas de conveniencia)?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, aunque hay que saber leer las etiquetas. Los onigiri de umeboshi (ciruela encurtida) y kombu (alga) suelen ser vegetarianos. También hay opciones como edamame, fruta fresca y ciertos sándwiches. En el tour, te enseño a identificar los kanji clave para que puedas comprar con confianza durante el resto de tu viaje.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Cuánto cuesta un tour gastronómico vegetariano privado en Tokio?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consulta nuestra{" "}
                  <Link to="/es/tours" className="text-accent hover:underline">
                    página de tours
                  </Link>
                  {" "}para ver los precios actualizados. El precio incluye la guía personalizada durante 4-5 horas, la tarjeta de restricciones alimentarias en japonés y toda la comunicación con los restaurantes. La comida se paga aparte para que puedas elegir exactamente lo que quieras probar.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <DiagnosticTrigger config={foodFinderEsConfig} />

      <RelatedTourCards tourIds={["tokyo-food-tour"]} />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Tour Gastronómico Vegetariano en Tokio: La Guía Definitiva para Comer Sin Preocupaciones",
            "description": "Ser vegetariano en Japón no tiene por qué ser difícil. Un guía con licencia te muestra los mejores restaurantes, platos y cómo pedir en japonés sin estrés.",
            "image": "https://tanuki-tabi-travel.com/images/blog/vegetarian-matcha-wagashi.webp",
            "author": {
              "@type": "Person",
              "name": "Manabu",
            },
            "datePublished": "2026-03-08",
            "dateModified": "2026-04-06",
            "inLanguage": "es",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/tour-vegetariano-tokio",
            },
          }),
        }}
      />

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
                "name": "¿Es difícil encontrar comida vegetariana en Japón?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No tanto como parece, pero requiere preparación. El principal desafío es el dashi (caldo de bonito), que se usa en muchos platos aparentemente vegetarianos. Con un guía que hable japonés, este problema desaparece. Japón tiene una tradición centenaria de cocina vegetal (shojin ryori) y cada vez más restaurantes veganos en Tokio.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Hay restaurantes veganos en Tokio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, y cada año hay más. Shinjuku, Shibuya y Roppongi tienen restaurantes 100% veganos con menús creativos. Además, muchos restaurantes tradicionales pueden adaptar sus platos si se les explica correctamente en japonés.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Qué es el shojin ryori y dónde puedo probarlo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El shojin ryori es la cocina vegetariana budista que los monjes zen llevan practicando más de 700 años. Es completamente vegetal, sin ajo ni cebolla, y destaca por la delicadeza de sus sabores. Se puede probar en restaurantes especializados en Tokio o en templos como Kenchoji en Kamakura.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Puedo encontrar comida vegetariana en las konbini de Japón?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, aunque hay que saber leer las etiquetas. Los onigiri de umeboshi (ciruela encurtida) y kombu (alga) suelen ser vegetarianos. También hay edamame, fruta fresca y ciertos sándwiches.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta un tour gastronómico vegetariano privado en Tokio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Consulta la página de tours de Tanuki Tabi Travel para precios actualizados. El precio incluye guía personalizada durante 4-5 horas, tarjeta de restricciones alimentarias en japonés y comunicación con los restaurantes. La comida se paga aparte.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default EsTourVegetarianoTokio;
