// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsItinerarioTokio5Dias = () => {
  return (
    <Layout>
      <SEO
        title="Itinerario en Tokio 5 Días 2026: Plan Día a Día (Guía Local)"
        description="Día 1: Asakusa y Ueno. Día 2: Tsukiji y Ginza. Día 3: Shibuya y Harajuku. Día 4: Excursión. Día 5: Joyas ocultas. Ruta probada de un guía oficial."
        canonicalPath="/es/blog/itinerario-tokio-5-dias"
        hreflang={[
          { lang: "es", path: "/es/blog/itinerario-tokio-5-dias" },
        ]}
      />

      <div className="prose-editorial">

            {/* Hero — overlaid title (BlogArticleHero) */}
      <BlogArticleHero
        image="/images/tours/shibuya-scramble-crossing.webp"
        imageAlt="Cruce de Shibuya, itinerario de 5 días por Tokio"
        eyebrow="Planifica tu Viaje"
        title="Itinerario Tokio 5 Días: La Ruta Que Yo Haría Como Guía"
        date="7 de marzo de 2026"
        backHref="/es/blog"
        backLabel="Volver al Blog"
      />

      

            <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
            <BlogArticleToc items={[
          { num: "01", label: "Antes de empezar", href: "#section-01-antes-de-empezar" },
          { num: "02", label: "Día 1: Asakusa, Ueno y el…", href: "#section-02-día-1-asakusa-ueno-y-el-tokio-tradicional" },
          { num: "03", label: "Día 2: Shibuya, Harajuku y…", href: "#section-03-día-2-shibuya-harajuku-y-shinjuku" },
          { num: "04", label: "Día 3: Tsukiji, Ginza y el…", href: "#section-04-día-3-tsukiji-ginza-y-el-tokio-elegante" },
          { num: "05", label: "Día 4: Excursión de un día", href: "#section-05-día-4-excursión-de-un-día" },
          { num: "06", label: "Día 5: Yanaka, Nezu y el…", href: "#section-06-día-5-yanaka-nezu-y-el-tokio-que-nadie-ve" },
          { num: "07", label: "FAQ", href: "#section-07-faq" }
            ]} />

            <article>

            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Si me pidieras diseñar el itinerario de Tokio para 5 días perfecto, el que yo mismo seguiría si tuviera solo cinco días y quisiera llevarlo todo: templos, comida callejera, barrios secretos y una excursión fuera de la ciudad, este es exactamente lo que te entregaría. No es un listado genérico copiado de una guía de viaje. Es la ruta que he pulido durante años llevando a viajeros reales por las calles de Tokio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como guía con licencia, he acompañado a cientos de personas en sus primeros días en Japón. He visto qué funciona, qué agota y qué deja a la gente con esa sonrisa de "esto es lo mejor que he hecho en mi vida". Este itinerario Tokio 5 días recoge todo ese aprendizaje. Cada día tiene un ritmo pensado: una mañana activa, un almuerzo en un lugar concreto y una tarde que puedes ajustar según tu energía.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Una cosa importante: este itinerario de Tokio para 5 días no pretende que corras de punto A a punto Z. Tokio se disfruta cuando te dejas perder un poco. Yo te doy la estructura; tú pones el ritmo.
            </p>

            {/* Antes de empezar */}
            <div className="section-eyebrow"><span>Section 01 · Antes de empezar</span></div>
            <h2 id="section-01-antes-de-empezar" className="scroll-mt-20">
              Antes de empezar: cómo usar este itinerario
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Antes de lanzarte al día 1, hay dos cosas que necesitas tener claras. Si las resuelves antes de aterrizar, tu itinerario Tokio 5 días fluirá sin fricciones.
            </p>

            <h3>
              Transporte: Suica y cómo moverte
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Olvídate del JR Pass si solo vas a estar en Tokio (más abajo respondo esta pregunta en detalle). Lo que sí necesitas es una <strong className="text-foreground">tarjeta Suica o Pasmo</strong>, que funciona como una tarjeta de transporte recargable para metro, trenes urbanos y autobuses. Desde 2024 también puedes añadir una Suica virtual a tu iPhone o Apple Watch, lo que simplifica todo enormemente. Con ella, literalmente solo acercas el teléfono al lector y pasas. Los trayectos en metro cuestan entre 170 y 320 yenes, así que para cinco días calcula unos 1.500 a 2.500 yenes en transporte dentro de la ciudad.
            </p>

            <h3>
              Ritmo del viaje: no intentes verlo todo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es el error número uno que veo en mis clientes. Llegan con una lista de 30 lugares y quieren meterlo todo en cinco días. El resultado: agotamiento el día 3 y una sensación de que Tokio es "estresante". No lo es. Tokio es una ciudad para saborear, no para tachar. Cada día de este itinerario tiene dos o tres zonas principales. Si llegas a todas, genial. Si una te atrapa y te quedas más rato, mejor todavía.
            </p>

            {/* Día 1 */}
            <div className="section-eyebrow"><span>Section 02 · Día 1: Asakusa, Ueno y el Tokio tradicional</span></div>
            <h2 id="section-02-día-1-asakusa-ueno-y-el-tokio-tradicional" className="scroll-mt-20">
              Día 1: Asakusa, Ueno y el Tokio tradicional
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <em>La mañana huele a incienso y los callejones tienen ese silencio que solo existe antes de que lleguen las multitudes.</em>
            </p>

            <h3>
              Mañana: Senso-ji antes de las multitudes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Empieza tu primer día en Tokio llegando al templo Senso-ji antes de las 8:00 AM. A esa hora, la calle Nakamise-dori todavía tiene las persianas bajadas y el recinto del templo está casi vacío. Puedes caminar por el enorme portón Kaminarimon sin pelearte por una foto y sentir la atmósfera real del lugar. Senso-ji es el templo más antiguo de Tokio (fundado en el año 645) y, aunque es tremendamente turístico al mediodía, a primera hora conserva una dignidad que merece la pena experimentar. Para más detalles sobre este barrio, consulta mi{" "}
              <Link to="/es/blog/asakusa-tokio-guia" className="text-accent hover:underline">
                guía completa de Asakusa
              </Link>.
            </p>

            <h3>
              Mediodía: almuerzo en Asakusa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando abran las tiendas de Nakamise (hacia las 10:00), pasea por los callejones laterales, que son mucho más interesantes que la calle principal. Para almorzar, te recomiendo <strong className="text-foreground">Sometaro</strong>, un restaurante de okonomiyaki donde tú mismo preparas tu tortilla japonesa en una plancha empotrada en la mesa. Es divertido, barato (alrededor de 1.200 yenes por persona) y te da una primera experiencia gastronómica interactiva que recordarás. Alternativa: si prefieres soba, <strong className="text-foreground">Namiki Yabusoba</strong> lleva sirviendo fideos desde 1913.
            </p>

            <h3>
              Tarde: Ueno y Ameyoko
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde Asakusa, camina o toma el metro una parada hasta Ueno. El parque de Ueno es enorme y tiene varios museos (el Museo Nacional de Tokio es espectacular si te interesa el arte japonés), pero lo que realmente recomiendo es bajar a <strong className="text-foreground">Ameyoko</strong>, el mercado callejero que corre bajo las vías del tren. Es ruidoso, caótico y completamente adictivo. Vendedores gritando precios de marisco, puestos de ropa a precios de ganga, y yakitori (brochetas de pollo) asándose en cada esquina. Ameyoko es Tokio en estado puro.
            </p>

            <div className="bg-accent/10 rounded-lg p-6 my-8">
              <p className="text-foreground font-medium mb-2">Tip del guía</p>
              <p className="text-muted-foreground leading-relaxed">
                No cambies dinero en el aeropuerto. Las tasas son terribles. En lugar de eso, usa los cajeros automáticos de los 7-Eleven o los de la cadena Lawson, que aceptan tarjetas extranjeras y el tipo de cambio es mucho mejor. Encontrarás un 7-Eleven literalmente en cada esquina de Tokio.
              </p>
            </div>

            {/* Día 2 */}
            <div className="section-eyebrow"><span>Section 03 · Día 2: Shibuya, Harajuku y Shinjuku</span></div>
            <h2 id="section-03-día-2-shibuya-harajuku-y-shinjuku" className="scroll-mt-20">
              Día 2: Shibuya, Harajuku y Shinjuku
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <em>Hoy toca el Tokio que sale en las películas: neones, cruces peatonales imposibles y callejones donde caben exactamente dos personas.</em>
            </p>

            <h3>
              Mañana: Meiji Jingu y Harajuku
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Empieza en el santuario <strong className="text-foreground">Meiji Jingu</strong>, que está rodeado de un bosque de 70 hectáreas en pleno centro de la ciudad. El paseo desde el torii de entrada hasta el santuario principal dura unos 10 minutos y funciona como una descompresión perfecta antes del caos de Harajuku. Si tienes suerte, podrás ver una boda sintoísta tradicional. Después, baja por <strong className="text-foreground">Takeshita-dori</strong> para ver la cultura kawaii en su máxima expresión: tiendas de crêpes, moda extravagante y adolescentes disfrazados. No es para todo el mundo, pero es un espectáculo antropológico fascinante.
            </p>

            <h3>
              Mediodía: Shibuya Crossing y almuerzo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Camina desde Harajuku hasta Shibuya (15 minutos a pie por Cat Street, una calle llena de tiendas independientes). El cruce de Shibuya es exactamente tan impresionante como parece en las fotos: en hora punta, hasta 3.000 personas cruzan a la vez desde todas las direcciones. Para verlo desde arriba, sube al Shibuya Sky o, más barato, al Starbucks del edificio TSUTAYA frente al cruce. Para almorzar, <strong className="text-foreground">Fuunji</strong> (en Shinjuku, pero lo menciono aquí como opción si avanzas rápido) hace uno de los mejores tsukemen (ramen de remojo) de Tokio. En Shibuya mismo, prueba <strong className="text-foreground">Ichiran Ramen</strong> para la experiencia de cabinas individuales.
            </p>

            <h3>
              Noche: Shinjuku Golden Gai y Omoide Yokocho
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Termina el día 2 en Shinjuku al anochecer, cuando los neones se encienden y la ciudad cambia completamente de personalidad. <strong className="text-foreground">Golden Gai</strong> es un laberinto de más de 200 bares diminutos, muchos con capacidad para solo 6 u 8 personas. No todos admiten extranjeros (busca los que tengan carta en inglés o un letrero de bienvenida), pero los que sí lo hacen ofrecen una experiencia íntima e irrepetible. Justo al lado, <strong className="text-foreground">Omoide Yokocho</strong> ("Callejón de los Recuerdos") es una hilera de puestos de yakitori bajo una nube de humo que parece sacada de los años 50. Pide unas brochetas, una cerveza y disfruta del momento.
            </p>

            <div className="bg-secondary/50 rounded-lg p-6 my-8">
              <p className="text-foreground font-medium mb-2">Tip del guía</p>
              <p className="text-muted-foreground leading-relaxed">
                En Golden Gai, muchos bares cobran un "charge" de entrada (500 a 1.500 yenes) además de las bebidas. Es completamente normal y no es una estafa: cubre el espacio y los aperitivos que te ponen. Pregunta siempre antes de sentarte para evitar sorpresas.
              </p>
            </div>

            <InlineCTAEs />

            {/* Día 3 */}
            <div className="section-eyebrow"><span>Section 04 · Día 3: Tsukiji, Ginza y el Tokio elegante</span></div>
            <h2 id="section-04-día-3-tsukiji-ginza-y-el-tokio-elegante" className="scroll-mt-20">
              Día 3: Tsukiji, Ginza y el Tokio elegante
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <em>Hoy desayunas sushi a las nueve de la mañana y nadie te mira raro. Bienvenido al tercer día de tu itinerario Tokio 5 días.</em>
            </p>

            <h3>
              Mañana: mercado de Tsukiji
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El mercado exterior de Tsukiji sigue siendo uno de los mejores lugares gastronómicos del mundo. Llega sobre las 9:00 AM, cuando todos los puestos están abiertos y el pescado está en su punto máximo de frescura. Come tamagoyaki en Yamachou, prueba las vieiras de Hokkaido a la parrilla y termina con un sushi de barra en cualquiera de los puestos de tachigui (de pie). Calcula unas dos horas para recorrerlo bien sin prisas. Evita los domingos y los miércoles, cuando muchos puestos cierran.
            </p>

            <h3>
              Mediodía: paseo a Ginza
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde Tsukiji, camina 10 minutos hasta Ginza. El contraste es brutal: pasas de callejones estrechos llenos de humo a avenidas amplias flanqueadas por tiendas de Chanel y Cartier. No hace falta que compres nada; Ginza se disfruta como paseo arquitectónico. No te pierdas el edificio <strong className="text-foreground">Ginza Six</strong> y su terraza en la azotea (gratuita), ni el teatro <strong className="text-foreground">Kabuki-za</strong>, donde puedes comprar entradas para un solo acto por menos de 2.000 yenes.
            </p>

            <h3>
              Tarde: Palacio Imperial o Akihabara
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aquí te doy dos opciones según tu interés. Si te gusta la historia y la calma, camina hasta los <strong className="text-foreground">jardines del Palacio Imperial</strong> (entrada gratuita, cerrados lunes y viernes). Si prefieres la cultura otaku, toma el metro hasta <strong className="text-foreground">Akihabara</strong>, el barrio de la electrónica, los videojuegos retro y el anime. Ambas opciones funcionan perfectamente como cierre del día 3.
            </p>

            {/* Día 4 */}
            <div className="section-eyebrow"><span>Section 05 · Día 4: Excursión de un día</span></div>
            <h2 id="section-05-día-4-excursión-de-un-día" className="scroll-mt-20">
              Día 4: Excursión de un día (Kamakura o Hakone)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <em>Hoy sales de Tokio. El tren atraviesa los suburbios y de repente aparece el verde. Los hombros se relajan.</em>
            </p>

            <h3>
              Opción A: Kamakura (cultura y playa)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A una hora en tren desde Tokio (línea JR Yokosuka desde Shinjuku o Tokio), Kamakura fue la capital del shogunato en el siglo XIII y conserva más de 65 templos. Lo imprescindible: el <strong className="text-foreground">Gran Buda de Kotoku-in</strong> (13 metros de bronce al aire libre), el templo <strong className="text-foreground">Hasedera</strong> con sus vistas al mar, y el santuario <strong className="text-foreground">Tsurugaoka Hachimangu</strong>. Si el tiempo acompaña, termina en la playa de Yuigahama con un café frente al mar. Para almorzar, Kamakura es famosa por su shirasu-don (bol de arroz con pequeñas sardinas blancas crudas o cocidas).
            </p>

            <h3>
              Opción B: Hakone (Monte Fuji y aguas termales)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si quieres ver el Monte Fuji y relajarte en aguas termales, Hakone es tu excursión. El <strong className="text-foreground">Hakone Free Pass</strong> (unos 6.100 yenes) incluye el tren desde Shinjuku y todos los transportes dentro de Hakone: teleférico, barco pirata por el lago Ashi y autobús. En un día claro, las vistas del Fuji desde Owakudani son espectaculares. Para una guía detallada de esta excursión, lee mi artículo sobre{" "}
              <Link to="/es/blog/monte-fuji-se-ve-desde-tokio" className="text-accent hover:underline">
                cómo ver el Monte Fuji desde Tokio
              </Link>.
            </p>

            <h3>
              Cómo elegir entre ambas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si te interesa la historia y los templos, elige Kamakura. Si quieres naturaleza, paisajes volcánicos y la posibilidad de un onsen (baño termal), elige Hakone. Si el día está nublado, Kamakura funciona mejor porque no dependes de ver el Fuji. En cualquier caso, ambas excursiones son factibles en un día completo y te devuelven a Tokio antes de las 7:00 PM.
            </p>

            <div className="bg-accent/10 rounded-lg p-6 my-8">
              <p className="text-foreground font-medium mb-2">Tip del guía</p>
              <p className="text-muted-foreground leading-relaxed">
                Consulta la previsión del tiempo la noche anterior. Si hay cielos despejados, ve a Hakone: las probabilidades de ver el Fuji son altas entre noviembre y marzo. Si está nublado, Kamakura te dará una experiencia más satisfactoria porque sus templos y calles no dependen del clima.
              </p>
            </div>

            {/* Día 5 */}
            <div className="section-eyebrow"><span>Section 06 · Día 5: Yanaka, Nezu y el Tokio que nadie ve</span></div>
            <h2 id="section-06-día-5-yanaka-nezu-y-el-tokio-que-nadie-ve" className="scroll-mt-20">
              Día 5: Yanaka, Nezu y el Tokio que nadie ve
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <em>El último día. Nada de prisas. Hoy caminas por un Tokio que parece haberse quedado en los años 60, donde los gatos duermen en los muros y las tiendas no tienen prisa por abrir.</em>
            </p>

            <h3>
              Mañana: Yanaka Ginza y los templos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yanaka es el barrio que la mayoría de los turistas nunca visita, y eso es exactamente lo que lo hace especial. Empieza en el cementerio de Yanaka (suena extraño, pero es un espacio verde precioso, especialmente en primavera con los cerezos) y baja por <strong className="text-foreground">Yanaka Ginza</strong>, una calle comercial donde todavía compran los vecinos del barrio. Aquí encontrarás cafeterías de especialidad, tiendas de artesanía y la famosa escultura del "gato de Yanaka" en lo alto de unas escaleras. El ritmo es completamente distinto al de Shibuya o Shinjuku. Es el Tokio que a mí, como guía, más me gusta enseñar.
            </p>

            <h3>
              Mediodía: Nezu y el santuario de las azaleas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Camina desde Yanaka hasta el barrio vecino de Nezu (15 minutos a pie). El <strong className="text-foreground">santuario Nezu-jinja</strong> es uno de los más antiguos de Tokio y, entre abril y mayo, su colina de azaleas en flor es un espectáculo de color que rivaliza con los cerezos. Incluso fuera de temporada, el santuario es precioso, con sus torii rojos alineados al estilo del Fushimi Inari de Kioto pero sin las multitudes. Para almorzar, prueba <strong className="text-foreground">Kamachiku</strong>, un restaurante de udon artesanal dentro de una antigua fábrica de tofu. El udon es grueso, masticable y servido con un caldo dashi que perfuma toda la sala.
            </p>

            <h3>
              Tarde: compras de último minuto y despedida
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si necesitas comprar souvenirs, toma el metro hasta la estación de Tokio y visita <strong className="text-foreground">Tokyo Character Street</strong> (bajo la estación) o la planta de alimentación de los grandes almacenes <strong className="text-foreground">Daimaru</strong>, donde encontrarás dulces japoneses perfectamente empaquetados para regalar. Si prefieres algo más auténtico, vuelve a Yanaka: las tiendas de artesanía del barrio venden cerámica, tenugui (toallas japonesas estampadas) y papelería hecha a mano que superan con creces cualquier souvenir de aeropuerto.
            </p>

            <div className="bg-secondary/50 rounded-lg p-6 my-8">
              <p className="text-foreground font-medium mb-2">Tip del guía</p>
              <p className="text-muted-foreground leading-relaxed">
                Si tu vuelo sale por la tarde, puedes dejar las maletas en una taquilla de monedas (coin locker) en la estación de Tokio y moverte ligero durante la mañana. Las taquillas grandes cuestan unos 700 yenes y caben maletas de hasta 28 pulgadas. Busca las que están en el piso B1 de la estación, que suelen estar menos saturadas.
              </p>
            </div>

            {/* FAQ */}
            <div className="section-eyebrow"><span>Section 07 · FAQ</span></div>
            <h2 id="section-07-faq" className="scroll-mt-20">
              Preguntas frecuentes sobre un itinerario de 5 días en Tokio
            </h2>

            <h3>
              ¿5 días son suficientes para Tokio?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sí, cinco días te permiten cubrir los barrios principales, hacer una excursión fuera de la ciudad y tener tiempo para perderte y descubrir cosas por tu cuenta. ¿Podrías pasar más tiempo? Por supuesto, Tokio tiene contenido para semanas. Pero con un buen itinerario Tokio 5 días como este, te llevas una experiencia completa y satisfactoria sin sentir que te has dejado lo esencial.
            </p>

            <h3>
              ¿Cuánto cuesta 5 días en Tokio?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un presupuesto medio-cómodo para cinco días en Tokio (sin contar vuelo ni alojamiento) ronda los 50.000 a 80.000 yenes por persona. Esto incluye transporte (unos 2.000 yenes diarios), comida (3.000 a 5.000 yenes al día si mezclas restaurantes locales con algún capricho) y entradas. Tokio puede ser sorprendentemente barata si comes en los mismos sitios que los locales.
            </p>

            <h3>
              ¿Necesito JR Pass para 5 días en Tokio?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No. El JR Pass solo merece la pena si vas a hacer viajes largos en shinkansen (tren bala) entre ciudades, por ejemplo, Tokio-Kioto-Osaka. Para moverte dentro de Tokio y hacer excursiones a Kamakura o Hakone, la tarjeta Suica y billetes individuales son más baratos. El JR Pass de 7 días cuesta más de 50.000 yenes; tu gasto en transporte con este itinerario Tokio 5 días será una fracción de eso.
            </p>

            <h3>
              ¿Puedo modificar el orden de los días?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Absolutamente. Los días 1 a 3 y el día 5 son intercambiables. La única recomendación fija es poner la excursión (día 4) hacia la mitad del viaje, porque funciona como un descanso del ritmo urbano. También te sugiero dejar Yanaka y Nezu para el último día: es el cierre perfecto, tranquilo y con sabor a despedida.
            </p>

            <h3>
              ¿Vale la pena un guía para todo el itinerario?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No necesitas un guía para los cinco días. Tokio es una ciudad segura, con señalización en inglés y un transporte público impecable. Pero un guía local marca la diferencia en uno o dos días clave, por ejemplo, el día 1 en Asakusa (para entender el contexto histórico y gastronómico) o el día 3 en Tsukiji (para que comas en los puestos correctos y no en las trampas para turistas). Es exactamente lo que ofrecemos en nuestros{" "}
              <Link to="/es/tours" className="text-accent hover:underline">
                tours privados por Tokio
              </Link>.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2>
                ¿Quieres que te ayude a personalizar tu itinerario de Tokio para 5 días?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cada viajero es distinto. Si este itinerario Tokio 5 días te sirve como base pero quieres ajustarlo a tus intereses (más gastronomía, más templos, más barrios ocultos), puedo diseñar una ruta a medida y acompañarte en los días que elijas. Sin prisas, sin grupos, solo tú y un guía que conoce cada callejón de esta ciudad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Ver Tours Privados
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

      <RelatedTourCards tourIds={["custom"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Itinerario Tokio 5 Días: La Ruta Que Yo Haría Como Guía",
            "description": "El itinerario de Tokio para 5 días que recomiendo a mis clientes: barrios, comida, transporte y los errores que evitar en cada día.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/itinerario-tokio-5-dias",
            },
          }),
        }}
      />
    </div>

      </Layout>
  );
};

export default EsItinerarioTokio5Dias;
