import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsTsukijiVsToyosu = () => {
  return (
    <Layout>
      <SEO
        title="Tsukiji vs Toyosu 2026: Mercado de Pescado Tokio"
        description="Tsukiji (comida callejera, +460 puestos) vs Toyosu (subasta de atún). Un guía local compara ambos mercados y te dice cuál visitar en 2026."
        canonicalPath="/es/blog/tsukiji-vs-toyosu"
        hreflang={[
          { lang: "en", path: "/blog/tsukiji-vs-toyosu" },
          { lang: "es", path: "/es/blog/tsukiji-vs-toyosu" },
          { lang: "x-default", path: "/blog/tsukiji-vs-toyosu" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Tsukiji vs Toyosu" },
        ]}
      />

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
            <p className="text-label text-accent mb-3">Guías Gastronómicas</p>
            <h1 className="heading-display text-foreground">
              Tsukiji vs Toyosu: ¿Qué Mercado de Pescado de Tokio Deberías Visitar?
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia Nacional
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                31 de marzo de 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px]">
        <img
          src="/images/blog/tsukiji-market-seafood-stalls.webp"
          alt="Tsukiji vs Toyosu — comparativa de los dos mercados de pescado de Tokio"
          className="w-full h-full object-cover"
          fetchpriority="high"
          width={1600}
          height={900}
        />
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Quick Answer Box */}
            <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg mb-8">
              <p className="font-semibold text-foreground mb-2">Respuesta rápida</p>
              <p className="text-foreground leading-relaxed">
                <strong>Para la mayoría de los visitantes: ve a Tsukiji.</strong> Tiene más variedad gastronómica, más ambiente y no necesitas reserva. Toyosu solo merece la pena si quieres ver la subasta de atún (requiere ganar una lotería mensual).
              </p>
              <p className="text-muted-foreground mt-3 text-sm italic">
                Pero la realidad tiene más matices. Como guía que lleva a sus clientes a ambos mercados regularmente, te explico cuándo Toyosu tiene más sentido y cómo puedes combinar los dos en una sola mañana.
              </p>
            </div>

            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              "¿Debería ir a Tsukiji o a Toyosu?" Es una de las preguntas que más me hacen los viajeros cuando planifican su itinerario por Tokio, y entiendo perfectamente la confusión. Internet está lleno de información contradictoria. Algunas páginas dicen que Tsukiji está cerrado. Otras aseguran que Toyosu lo reemplazó. Unas pocas afirman que necesitas reserva para ambos. Casi ninguna te da la imagen completa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Soy Manabu, guía turístico con licencia nacional, y llevo a mis clientes a ambos mercados de forma habitual. He recorrido los callejones de Tsukiji cientos de veces y he visto la subasta de atún en Toyosu más veces de las que puedo contar. La respuesta corta es que son dos experiencias radicalmente distintas, y cuál deberías visitar depende por completo del tipo de viajero que seas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Déjame darte la comparativa honesta y detallada que comparto con mis clientes de tour: sin exageraciones, sin información obsoleta, solo la perspectiva de un guía local sobre dos de los destinos gastronómicos más famosos de Tokio.
            </p>

            {/* Section 1: The Confusion */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              La confusión: ¿Qué se trasladó realmente en 2018?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para entender el debate Tsukiji vs Toyosu, necesitas saber qué pasó en octubre de 2018, porque ahí es donde empezó toda la confusión. Tsukiji nunca fue un solo mercado. En realidad eran dos operaciones distintas que compartían el mismo barrio: el mercado mayorista interior y el mercado minorista exterior.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El <strong className="text-foreground">mercado mayorista interior</strong> era la enorme planta profesional donde los mayoristas con licencia subastaban y vendían marisco al por mayor cada madrugada. Aquí tenían lugar las famosas subastas de atún, donde los carritos turret corrían por pasillos estrechos y toneladas de pescado cambiaban de manos antes de que la mayor parte de Tokio se despertase. Las instalaciones envejecían, mantener la higiene era cada vez más difícil, y tras años de retrasos y debates políticos, toda la operación mayorista se trasladó a Toyosu, unas instalaciones modernas construidas en una isla artificial en la bahía de Tokio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El <strong className="text-foreground">mercado exterior</strong> era (y sigue siendo) una densa red de más de 460 tiendas, restaurantes y puestos de comida callejera que fueron creciendo alrededor de la operación mayorista a lo largo de décadas. Estos negocios atendían a un público diferente: chefs locales buscando ingredientes, vecinos del barrio haciendo la compra y visitantes amantes de la comida en busca del sushi y el marisco más fresco de la ciudad. Cuando el mercado interior se mudó, el exterior no tenía razón para seguirle. Sus clientes estaban aquí. Así que se quedó.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Y aquí está el punto crucial que la mayoría de los artículos de viaje pasan por alto: la parte de Tsukiji que los turistas visitaban y disfrutaban — los puestos de comida, las barras de sushi, las tiendas de cuchillos, los vendedores de tamagoyaki — nunca se movió. Sigue exactamente donde siempre estuvo, sigue en pleno apogeo y, en muchos sentidos, está mejor que antes de la partida del mercado interior. Se han abierto nuevas tiendas en los espacios que quedaron libres, y la zona se ha vuelto aún más acogedora para los visitantes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Así que cuando alguien te diga "Tsukiji está cerrado", está repitiendo una verdad a medias que ha confundido a millones de viajeros. La planta mayorista se fue. El alma del mercado — la parte que puedes saborear, tocar y vivir — está muy viva.
            </p>

            {/* Section 2: Comparison Table */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Comparativa lado a lado
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left p-4 font-serif font-medium text-foreground">Característica</th>
                    <th className="text-left p-4 font-serif font-medium text-foreground">Tsukiji (Mercado Exterior)</th>
                    <th className="text-left p-4 font-serif font-medium text-foreground">Toyosu (Mercado de Pescado)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium text-foreground">Estado (2026)</td>
                    <td className="p-4 text-muted-foreground">Totalmente abierto</td>
                    <td className="p-4 text-muted-foreground">Totalmente abierto</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Ideal para</td>
                    <td className="p-4 text-muted-foreground">Comida callejera y compras</td>
                    <td className="p-4 text-muted-foreground">Ver la subasta de atún</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">N.º de vendedores</td>
                    <td className="p-4 text-muted-foreground">+460 tiendas y puestos</td>
                    <td className="p-4 text-muted-foreground">~40 restaurantes en zona de visitantes</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Horario</td>
                    <td className="p-4 text-muted-foreground">~5:00 - 14:00 (varía por tienda)</td>
                    <td className="p-4 text-muted-foreground">Subasta: 5:30 (lotería obligatoria)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Días de cierre</td>
                    <td className="p-4 text-muted-foreground">Domingos + algunos miércoles</td>
                    <td className="p-4 text-muted-foreground">Domingos + festivos</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">¿Necesitas reserva?</td>
                    <td className="p-4 text-muted-foreground">No</td>
                    <td className="p-4 text-muted-foreground">Sí (lotería para subasta)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Variedad gastronómica</td>
                    <td className="p-4 text-muted-foreground">Sushi, sashimi, tamagoyaki, marisco a la brasa, wagashi, cuchillos, utensilios</td>
                    <td className="p-4 text-muted-foreground">Restaurantes de sushi (plataforma de visitantes)</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Ambiente</td>
                    <td className="p-4 text-muted-foreground">Bullicioso, tradicional, callejones estrechos</td>
                    <td className="p-4 text-muted-foreground">Moderno, limpio, espacioso</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Cómo llegar</td>
                    <td className="p-4 text-muted-foreground">Estación Tsukiji (Línea Hibiya), 2 min a pie</td>
                    <td className="p-4 text-muted-foreground">Estación Shijo-mae (Línea Yurikamome)</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Coste</td>
                    <td className="p-4 text-muted-foreground">Entrada gratis, comida desde ~¥100</td>
                    <td className="p-4 text-muted-foreground">Entrada gratis, comidas desde ~¥2.000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Tiempo necesario</td>
                    <td className="p-4 text-muted-foreground">1,5 - 3 horas</td>
                    <td className="p-4 text-muted-foreground">1 - 2 horas</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Valoración del guía</td>
                    <td className="p-4 text-muted-foreground">5 de 5</td>
                    <td className="p-4 text-muted-foreground">3 de 5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 3: Tsukiji */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              Mercado Exterior de Tsukiji: Qué esperar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entrar en el mercado exterior de Tsukiji es un asalto a los sentidos en el mejor sentido posible. Lo primero que te golpea es el olor: parrillas de carbón encendiéndose, la brisa limpia y salada del marisco fresco, caldo dashi hirviendo a fuego lento en ollas enormes y el dulce aroma caramelizado del tamagoyaki cocinándose en las sartenes rectangulares. Después los sonidos: vendedores pregonando sus ofertas matutinas, el golpe rítmico de un cuchillo cortando un lomo de atún, el chisporroteo de las vieiras al caer sobre la parrilla. Y finalmente la vista: más de 460 tiendas y puestos apretados en una retícula de callejones estrechos, cada uno rebosante de color y actividad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La variedad de comida es asombrosa. Puedes empezar la mañana con un palito de tamagoyaki dorado de uno de los legendarios vendedores de huevo (Yamachou para la versión dulce, Shouro para el estilo salado con dashi), seguido de un vaso de papel rebosante de uni fresco (erizo de mar), luego unas hotate (vieiras) a la parrilla bañadas en mantequilla y soja, una brocheta de wagyu y una taza de matcha en una de las casas de té tradicionales. Y todo eso antes de sentarte a comer sushi. Las barras de sushi de pie sirven pescado procedente directamente de los mayoristas a precios impensables en un restaurante con asiento en Ginza, a solo 15 minutos a pie.
            </p>
            <figure className="my-8">
              <img
                src="/images/tours/tsukiji-outer-market.webp"
                alt="Callejones estrechos del mercado exterior de Tsukiji con puestos de comida y vendedores"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Los estrechos callejones de Tsukiji — más de 460 tiendas en unas pocas manzanas
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Más allá de la comida, Tsukiji es un tesoro para cualquier persona interesada en la cultura culinaria japonesa. Las tiendas de cuchillos abastecen a chefs profesionales de todo Tokio y son famosas en el mundo entero por sus hojas de acero japonés forjadas a mano. Si buscas un recuerdo de cocina que te dure toda la vida, un cuchillo de Tsukiji es la respuesta. También encontrarás tiendas de cerámica, laca, productos secos como katsuobushi (copos de bonito) y kombu (alga kelp), y una variedad increíble de encurtidos japoneses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">El horario importa.</strong> El momento ideal es a las 8:00 de la mañana. Los puestos ya están completamente montados, las parrillas encendidas y las multitudes aún no han alcanzado su punto máximo. Entre las 9 y las 10 sigue bien, pero se nota más gente. Después de las 11 ya compites con las multitudes del almuerzo, y entre la 1 y las 2 de la tarde muchos puestos empiezan a cerrar. Las mañanas entre semana (especialmente martes, jueves y viernes) dan la mejor experiencia. Los sábados por la mañana se abre pero hay más gente. La mayoría de los puestos cierran los domingos y algunos miércoles seleccionados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que me encanta de Tsukiji, y lo que me hace volver semana tras semana con mis clientes, es que se siente vivo. Esto no es una atracción turística disfrazada de mercado. Es un mercado en funcionamiento que da la bienvenida a los visitantes. Los vendedores conocen sus productos con una pericia que roza la obsesión, y esa pasión es contagiosa. Cuando un pescadero te explica de qué océano viene tu otoro y cuántos días lleva madurando, estás vislumbrando una cultura gastronómica con siglos de historia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para una guía completa de todo lo que puedes comer y hacer en Tsukiji, lee mi{" "}
              <Link to="/es/blog/guia-tsukiji" className="text-accent hover:underline">
                guía detallada del Mercado de Tsukiji
              </Link>
              . Y si quieres vivir el mercado con un guía que conoce cada puesto, echa un vistazo a nuestro{" "}
              <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline font-medium">
                tour por Tsukiji y Ginza
              </Link>
              .
            </p>

            <InlineCTAEs
              message="¿Quieres descubrir Tsukiji sin perderte nada?"
              href="/es/tours/tsukiji-ginza"
              linkText="Ver nuestro tour Tsukiji & Ginza →"
            />

            {/* Section 4: Toyosu */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              Mercado de Pescado de Toyosu: Qué esperar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El Mercado de Toyosu abrió en octubre de 2018 como el sustituto del mercado mayorista interior de Tsukiji. Está situado en una isla artificial en la bahía de Tokio, y el contraste con Tsukiji no podría ser más marcado. Donde Tsukiji es desgastado, caótico y orgánico, Toyosu es reluciente, ordenado e institucional. Las instalaciones son enormes: tres grandes edificios conectados por pasarelas peatonales que albergan la sala de subastas de atún, los mayoristas intermediarios y una fila de restaurantes y tiendas para visitantes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La atracción principal para los visitantes es la <strong className="text-foreground">subasta de atún</strong>, y no voy a negar que es realmente impresionante. Ver filas de atún rojo congelado dispuestos en el suelo de la sala de subastas, cada uno potencialmente valorado en decenas de miles de dólares, siendo vendidos en pujas rapidísimas que duran apenas segundos por pieza, es una experiencia única en el mundo. La escala de la operación — toda la cadena de suministro de marisco de Japón en acción — te da una apreciación visceral de lo en serio que este país se toma su pescado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pero esto es lo que necesitas saber: la experiencia del visitante en Toyosu es fundamentalmente <strong className="text-foreground">de observación, no de participación</strong>. Ves la subasta detrás de un cristal en una plataforma elevada. Caminas por corredores cerrados sobre la planta mayorista, mirando hacia abajo a través de ventanas la actividad de abajo. El diseño prioriza la higiene y la eficiencia (que es exactamente lo que un mercado mayorista de pescado debería hacer), pero significa que siempre estás separado del mercado real por una barrera. Miras, pero no tocas, no pruebas, no interactúas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La <strong className="text-foreground">visita a la subasta requiere ganar una lotería mensual</strong>. No es una simple reserva: solicitas online aproximadamente un mes antes, y los ganadores se seleccionan al azar. Solo se admiten unas 100 personas por día de subasta, y la visita tiene lugar alrededor de las 5:30 de la mañana. Si no ganas la lotería, hay una plataforma para visitantes donde puedes observar la zona mayorista intermedia durante las horas de mercado, pero no verás la subasta principal de atún.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hay una planta de restaurantes con unas 40 establecimientos, incluyendo varios que se trasladaron desde el antiguo mercado interior de Tsukiji. El sushi aquí es excelente — algunos de estos restaurantes tienen reputaciones de décadas — pero espera pagar precios altos (la mayoría de las comidas empiezan en torno a ¥2.000 y los sitios populares pueden superar los ¥5.000) y lidiar con largas colas en los nombres más famosos. La planta de restaurantes es la única zona donde puedes comer; aquí no hay escena de comida callejera, no hay picoteo de puesto en puesto como en Tsukiji.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Quiero ser honesto con mi valoración: Toyosu es una operación logística impresionante y la subasta de atún es un espectáculo genuino, pero como experiencia para el visitante, es más aséptica que satisfactoria. La mayoría de mis clientes que visitan Toyosu salen diciendo "ha sido interesante" en vez de "ha sido increíble". Las barreras de cristal, la arquitectura institucional y la falta de inmersión sensorial hacen que se sienta más como visitar un museo sobre el pescado que visitar un mercado de pescado. Si eres un entusiasta serio de la industria del marisco o un profesional gastronómico, Toyosu es fascinante. Para el viajero medio amante de la comida, Tsukiji ofrece una experiencia mucho más rica.
            </p>

            {/* Section 5: Both in One Day */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              ¿Se pueden visitar los dos en un día?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sí, y de hecho puede ser una mañana increíble si estás dispuesto a madrugar. Los dos mercados están a unos 20 minutos en tren el uno del otro, y sus horarios se complementan a la perfección. Este es el itinerario que recomiendo a mis clientes que quieren la experiencia completa de los mercados de pescado de Tokio:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">5:30 — Subasta de atún en Toyosu.</strong> Si has ganado la lotería, llega al Mercado de Toyosu antes de las 5:15. La visita a la subasta dura unos 45 minutos a una hora. Observa a los subastadores en acción, haz fotos a través del cristal y aprecia la escala de la industria del marisco de Japón. Incluso sin la lotería, la zona mayorista intermedia está activa y merece la pena observar desde los corredores de visitantes.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">7:00 — Desayuno en Toyosu (opcional).</strong> Si tienes hambre, puedes tomar un sushi rápido en uno de los restaurantes. Pero sinceramente, te recomendaría guardar el apetito para Tsukiji.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">8:00 — Dirección Tsukiji.</strong> Toma la línea Yurikamome desde la estación Shijo-mae hasta Shimbashi, luego haz trasbordo a la línea Hibiya una parada hasta la estación Tsukiji. El trayecto completo dura unos 20 minutos.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">8:30 - 11:00 — Ruta gastronómica por Tsukiji.</strong> Aquí es donde empieza la comida de verdad. Picotea por el mercado exterior a tu ritmo: tamagoyaki, uni fresco, vieiras a la brasa, sushi de barra, encurtidos japoneses, matcha. Tómate tu tiempo, habla con los vendedores y come hasta que no puedas más.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">11:00 — Paseo hasta Ginza para comer o comprar.</strong> Tsukiji está a 15 minutos a pie de Ginza, el distrito de compras de lujo de Tokio. Es la siguiente parada natural y supone una transición muy satisfactoria de la energía castiza del mercado a la elegancia pulida de Ginza.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este itinerario combinado te da lo mejor de ambos mundos: el espectáculo de la operación mayorista de Toyosu y la inmersión sensorial de la escena gastronómica de Tsukiji. El único inconveniente es el madrugón: tendrás que salir de tu hotel a las 5:00 como máximo, lo que significa acostarse pronto la noche anterior. La mayoría de mis clientes me dicen que el madrugón mereció absolutamente la pena, pero pasa factura si ya estás luchando con el jet lag.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si solo tienes tiempo para un mercado (y para la mayoría de los visitantes, ese es el caso), siempre recomiendo Tsukiji. Solo la variedad gastronómica ya lo convierte en la mejor opción para cualquiera que quiera comer bien y vivir el ambiente de un mercado japonés auténtico.
            </p>

            {/* Section 6: My Recommendation */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              Mi recomendación honesta
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tras guiar a cientos de visitantes a ambos mercados, este es mi consejo directo:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Si te encanta la comida y quieres la mejor experiencia de mercado:</strong> Ve a Tsukiji. Sin discusión. La variedad gastronómica es incomparablemente mayor, el ambiente es electrizante y no necesitas reservas ni suerte en la lotería. Solo preséntate con hambre un día de diario por la mañana y deja que tus sentidos te guíen. Esta es la experiencia del mercado de pescado de Tokio que está a la altura de las expectativas.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Si eres un apasionado serio del marisco o la industria alimentaria:</strong> Haz los dos. Empieza con la subasta de Toyosu al amanecer y luego ve a Tsukiji a desayunar. Verás el ciclo de vida completo de la industria del marisco de Japón, desde la subasta mayorista hasta el consumo minorista, en una sola mañana.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Si específicamente quieres ver la subasta de atún:</strong> Planifica con antelación para Toyosu. Solicita la lotería al menos un mes antes de tu viaje. Pero ten Tsukiji como plan B — y sinceramente, es posible que acabes disfrutándolo más que la propia subasta.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Si tienes tiempo limitado en Tokio:</strong> Tsukiji, sin dudarlo. Puedes combinarlo con un paseo hasta Ginza después para una media jornada que cubra dos de los barrios más emblemáticos de Tokio. Nuestro{" "}
                <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">
                  tour por Tsukiji y Ginza
                </Link>{" "}
                hace exactamente eso.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Algo que siempre digo a mis clientes: el mercado exterior de Tsukiji no es un premio de consolación por la partida del mercado interior. Es el plato principal. Siempre lo ha sido, incluso cuando la planta mayorista seguía al lado. El mercado interior era fascinante para los profesionales del sector, pero el mercado exterior es donde está la comida — y la comida es lo que atrae a la gente a un mercado de pescado.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres vivir los mercados de pescado de Tokio con un guía local?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En nuestro tour por Tsukiji y Ginza, te llevo por el mercado de la forma en que yo lo vivo: sin trampas para turistas, sin puestos caros de la entrada, solo la mejor comida y las historias detrás de los vendedores que la preparan. Te ayudo a orientarte por los callejones, pedir con confianza y probar cosas que jamás encontrarías por tu cuenta.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nuestro{" "}
                <Link to="/es/tours" className="text-accent hover:underline font-medium">
                  food tour por Tokio
                </Link>{" "}
                cuesta ¥45.000 por grupo (no por persona) e incluye Tsukiji como parada estrella. Es la forma más auténtica y económica de descubrir la gastronomía callejera de la capital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/tsukiji-ginza" className="btn-accent">
                  Tour Tsukiji & Ginza
                </Link>
                <Link to="/es/tours" className="btn-outline">
                  Ver Todos los Tours
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Preguntas Frecuentes</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿El mercado de Tsukiji está cerrado?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Solo parcialmente. El mercado mayorista interior (subastas de atún, vendedores al por mayor) se trasladó a Toyosu en octubre de 2018. Pero el mercado exterior — con más de 460 tiendas, restaurantes y puestos de comida — nunca cerró. Sigue siendo uno de los mejores destinos gastronómicos de Tokio y está completamente abierto en 2026. El mercado exterior es la parte que la mayoría de los turistas visitaban y disfrutaban, y sigue exactamente donde siempre estuvo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿La subasta de atún está en Tsukiji o en Toyosu?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La subasta de atún está en el Mercado de Pescado de Toyosu. Se trasladó allí desde Tsukiji en 2018. Para ver la subasta, necesitas ganar una lotería mensual: solicitas online aproximadamente un mes antes. Solo se admiten unas 100 personas por día de subasta, y la visita se realiza desde detrás de un cristal en una plataforma elevada a partir de las 5:30 de la mañana.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Qué mercado tiene mejor sushi?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ambos mercados sirven sushi excelente, pero las experiencias son muy diferentes. Tsukiji ofrece más variedad y mejor relación calidad-precio: las barras de sushi de pie sirven pescado excepcional a precios razonables (8-10 piezas por unos ¥2.000 a ¥3.000), además puedes picotear otros mariscos de los puestos. Toyosu tiene unos 40 restaurantes con mesa con precios más altos (comidas de ¥2.000 a ¥5.000+) y colas más largas. Para la mayoría de los visitantes, la escena del sushi en Tsukiji es más accesible y más divertida.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Necesito reservar con antelación para alguno de los mercados?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tsukiji no requiere reserva alguna: simplemente preséntate un día que el mercado esté abierto (cierra los domingos y algunos miércoles). La subasta de atún de Toyosu requiere ganar una lotería mensual, solicitada online aproximadamente un mes antes. La planta de restaurantes y los pasillos de visitantes de Toyosu están abiertos sin reserva, pero los restaurantes populares tienen largas colas. Para la mejor experiencia en Tsukiji, recomiendo llegar a las 8:00 de la mañana un día entre semana.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Tsukiji sigue abierto en 2026?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí, absolutamente. El mercado exterior de Tsukiji con sus más de 460 puestos de comida, restaurantes y tiendas sigue abierto y en plena actividad en 2026. Lo que se trasladó a Toyosu en 2018 fue únicamente el mercado mayorista interior. La parte que los turistas visitan y disfrutan — la comida callejera, el sushi, los cuchillos — nunca se movió.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuánto cuesta un tour privado por el mercado de pescado de Tokio?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestro tour gastronómico privado por Tokio, que incluye Tsukiji como parada principal, cuesta ¥45.000 por grupo (no por persona), lo que lo convierte en una opción muy asequible para parejas, familias o grupos pequeños. El tour incluye orientación personalizada del mercado, recomendaciones de comida adaptadas a tus gustos y explicaciones culturales que no encontrarás en ninguna guía escrita.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-12">
              Última actualización: abril 2026
            </p>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["tsukiji-ginza", "tokyo-food-tour"]} />

      {/* BlogPosting Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Tsukiji vs Toyosu 2026: ¿Qué Mercado de Pescado de Tokio Deberías Visitar?",
        description: "Tsukiji (comida callejera, +460 puestos) vs Toyosu (subasta de atún, instalaciones modernas). Un guía local compara ambos mercados y te dice cuál elegir.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "Guía Intérprete con Licencia Nacional", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-31", dateModified: "2026-04-06",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/tsukiji-vs-toyosu" },
        inLanguage: "es"
      })}} />

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿El mercado de Tsukiji está cerrado?", acceptedAnswer: { "@type": "Answer", text: "Solo parcialmente. El mercado mayorista interior se trasladó a Toyosu en octubre de 2018, pero el mercado exterior con más de 460 tiendas, restaurantes y puestos de comida nunca cerró. Sigue completamente abierto en 2026 y es uno de los mejores destinos gastronómicos de Tokio." }},
          { "@type": "Question", name: "¿La subasta de atún está en Tsukiji o en Toyosu?", acceptedAnswer: { "@type": "Answer", text: "La subasta de atún está en el Mercado de Pescado de Toyosu. Se trasladó desde Tsukiji en 2018. Para verla hay que ganar una lotería mensual solicitada online un mes antes. Solo se admiten unas 100 personas por día de subasta." }},
          { "@type": "Question", name: "¿Qué mercado tiene mejor sushi?", acceptedAnswer: { "@type": "Answer", text: "Ambos sirven sushi excelente. Tsukiji ofrece más variedad y valor con barras de sushi de pie (8-10 piezas por ¥2.000-3.000) más picoteo callejero. Toyosu tiene restaurantes con mesa a precios más altos (¥2.000-5.000+) y colas más largas. Para la mayoría, Tsukiji es más accesible y divertido." }},
          { "@type": "Question", name: "¿Necesito reservar con antelación para alguno de los mercados?", acceptedAnswer: { "@type": "Answer", text: "Tsukiji no requiere reserva: simplemente preséntate (cierra domingos y algunos miércoles). La subasta de Toyosu requiere ganar una lotería mensual solicitada online un mes antes. La planta de restaurantes de Toyosu está abierta sin reserva pero los sitios populares tienen largas colas." }},
          { "@type": "Question", name: "¿Tsukiji sigue abierto en 2026?", acceptedAnswer: { "@type": "Answer", text: "Sí, absolutamente. El mercado exterior de Tsukiji con sus más de 460 puestos sigue abierto y en plena actividad en 2026. Solo el mercado mayorista interior se trasladó a Toyosu en 2018." }},
          { "@type": "Question", name: "¿Cuánto cuesta un tour privado por el mercado de pescado de Tokio?", acceptedAnswer: { "@type": "Answer", text: "Nuestro tour gastronómico privado por Tokio, que incluye Tsukiji, cuesta ¥45.000 por grupo (no por persona), ideal para parejas, familias o grupos pequeños." }}
        ]
      })}} />
    </Layout>
  );
};

export default EsTsukijiVsToyosu;
