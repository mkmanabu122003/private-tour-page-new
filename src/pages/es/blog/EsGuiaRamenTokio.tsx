import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { DiagnosticTrigger } from "@/components/blog/DiagnosticTrigger";
import { foodFinderEsConfig } from "@/data/diagnostics/foodFinderEs";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsGuiaRamenTokio = () => {
  return (
    <Layout>
      <SEO
        title="Guía Ramen Tokio 2026: Lo Que Pide un Guía Local"
        description="Tokio tiene más de 10.000 ramen-ya. Un guía oficial con más de 500 tours te dice exactamente qué pedir, dónde ir y cómo pedirlo como un local."
        canonicalPath="/es/blog/guia-ramen-tokio"
        hreflang={[
          { lang: "en", path: "/blog/ramen-guide-tokyo" },
          { lang: "es", path: "/es/blog/guia-ramen-tokio" },
          { lang: "x-default", path: "/blog/ramen-guide-tokyo" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/ramen-guide-hero.webp"
          alt="Un bol de ramen de Tokio con sésamo, verduras y toppings"
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
                <li className="text-foreground">Guía Ramen</li>
              </ol>
            </nav>
            <p className="text-label text-accent mb-3">Gastronomía Japonesa</p>
            <h1 className="heading-display text-foreground">
              Guía de Ramen en Tokio: Lo Que Pide un Guía Local (y Dónde)
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia Nacional
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                7 de marzo de 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, un guía que come ramen al menos dos veces por semana desde hace 15 años y lleva a sus clientes a sus locales favoritos durante los tours.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Última actualización: abril 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              El año pasado, un cliente de Nueva York (un tipo serio con la comida, tenía su propio restaurante, sabía de lo que hablaba) me pidió que lo llevara al "mejor ramen de Tokio". Me detuve un momento. "El mejor ramen de Tokio depende de qué tipo de ramen te refieras", le dije. "Es como pedir la mejor pizza de Nueva York sin especificar si quieres masa fina, siciliana o napolitana."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tokio tiene más de 10.000 ramen-ya (tiendas de ramen). Ninguna lista puede cubrirlos todos, y los artículos de "mejor ramen" que encuentras online suelen estar patrocinados, desactualizados o reflejan la preferencia de un solo escritor. Esta guía de ramen para Tokio es diferente: está organizada por estilos, basada en más de 15 años comiendo ramen en esta ciudad, y pensada para ayudarte a entender lo que estás pidiendo, no solo dónde hacer cola.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Por Qué las Listas de "Mejor Ramen en Tokio" Están (Casi Siempre) Equivocadas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El problema con la mayoría de guías de ramen en Tokio es que tratan el ramen como si fuera una sola cosa. Y no lo es. El ramen es una categoría que contiene docenas de estilos distintos, cada uno con su propia historia, origen regional y legión de seguidores. Recomendar una tienda de tonkotsu a alguien que prefiere caldos ligeros y transparentes es como llevar a un amante del vino que bebe Pinot Grigio a una cata de Cabernet intenso.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El segundo problema: los locales famosos no siempre son los mejores. Algunas de las ramen-ya más populares de Tokio viven de su reputación de 2015. El local con 90 minutos de cola en Shinjuku puede servir buen ramen, pero el que está tres calles más allá sin cola puede servir uno mejor. Simplemente no tienen presencia viral en Instagram. En mis tours, llevo a los clientes a ambos tipos, y los locales "descubrimiento" casi siempre causan más impacto.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Los 4 Estilos Principales de Ramen (y Qué Barrio de Tokio los Hace Mejor)
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Shoyu Ramen (a base de salsa de soja)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es el estilo original de ramen de Tokio: un caldo transparente o ligeramente marrón, elaborado con fondo de pollo o marisco y sazonado con salsa de soja. El sabor es limpio, sabroso y deja que la calidad de los fideos brille por sí sola. Piensa en él como el ramen en su forma más refinada, sin sabores pesados detrás de los que esconderse. Los fideos son finos y ondulados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mejores barrios:</strong> El lado este de Tokio (Asakusa, Ueno y las antiguas zonas de Shitamachi) es donde el shoyu ramen tiene sus raíces más profundas. Muchos locales aquí llevan sirviendo esencialmente la misma receta desde hace 40-60 años.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Tonkotsu Ramen (caldo de hueso de cerdo)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El caldo espeso, cremoso y opaco que se obtiene hirviendo huesos de cerdo durante 12-20 horas. Nació en Fukuoka (Kyushu) y conquistó Tokio en los años 2000. El caldo es intenso, con sabor porcino y una textura casi láctea. Los fideos son finos y rectos, servidos firmes (kata) por defecto. Este es el estilo que la mayoría de extranjeros imaginan cuando piensan en "ramen".
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mejores barrios:</strong> Ikebukuro y Shinjuku tienen la mayor concentración de tiendas de tonkotsu de calidad, muchas regentadas por chefs nacidos en Kyushu que trajeron sus recetas a Tokio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Miso Ramen</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nació en Sapporo (Hokkaido) y viajó al sur hasta Tokio. El caldo es contundente, complejo y ligeramente dulce, con la pasta de miso aportando profundidad y umami. Se sirve a menudo con maíz, mantequilla y brotes de soja, toppings que reflejan sus orígenes norteños. Los fideos son gruesos y rizados para retener mejor el caldo denso.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mejores barrios:</strong> Las tiendas de miso ramen están repartidas por todo Tokio sin un centro geográfico claro. Algunas de las mejores están en barrios residenciales lejos de las zonas turísticas, el tipo de sitios que solo encontrarías con un guía local o con mucha investigación.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Tsukemen (ramen para mojar)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una invención propiamente tokiota. Los fideos y el caldo se sirven por separado. Mojas los fideos fríos o a temperatura ambiente en un caldo concentrado e intensamente sabroso. El caldo es más espeso y potente que el de un ramen normal porque está diseñado como salsa para mojar, no como sopa. Se inventó en los años 60 en Ikebukuro.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mejores barrios:</strong> Ikebukuro (donde nació), además de Shinjuku y Shibuya. El tsukemen es especialmente bueno en verano, cuando un bol caliente de ramen en sopa resulta demasiado.
            </p>

            <InlineCTAEs
              message="En nuestro food tour te llevamos a los que no salen en Google Maps."
              linkText="Descubre nuestros tours gastronómicos →"
              href="/es/tours"
            />

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Mis Favoritos Personales por Barrio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No voy a nombrar tiendas concretas a propósito. Las ramen-ya en Tokio abren y cierran constantemente, los chefs se mueven entre locales, y una recomendación de marzo puede estar desactualizada en septiembre. En su lugar, te cuento qué buscar en cada zona. En mis tours, llevo a los clientes a mis favoritos actuales y actualizo la lista cada mes.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Zona Asakusa/Ueno:</strong> Shoyu ramen clásico. Busca locales con fachadas antiguas y solo barra. Si hay fotos del dueño con famosos en la pared, suele ser buena señal. Significa que el local lleva el tiempo suficiente para acumular fama.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Shinjuku:</strong> De todo. Shinjuku es la diversidad del ramen en formato concentrado. La zona alrededor de la salida sur de la estación tiene una docena de tiendas en 5 minutos a pie cubriendo todos los estilos. En mi guía de ramen para clientes de Tokio, Shinjuku es donde envío a la gente que quiere comparar estilos uno tras otro.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ikebukuro:</strong> Tonkotsu y tsukemen. Este es el epicentro de ambos estilos en Tokio. La zona de la salida oeste tiene una de las concentraciones de ramen más competitivas de la ciudad.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ramen Street (Estación de Tokio):</strong> Una selección curada de ramen-ya famosas dentro de la Estación de Tokio. No es mala opción para un bol rápido cuando estás de paso, aunque las colas son más largas y el ambiente es más "food court" que "local auténtico de barrio".
              </li>
            </ul>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo Pedir Ramen en Japón Sin Hablar Japonés
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mayoría de ramen-ya en Tokio usan una máquina expendedora de tickets (shokkenki) cerca de la entrada. Compras tu comida en la máquina antes de sentarte. Así funciona:
            </p>
            <ol className="space-y-3 mb-8 list-decimal list-inside">
              <li className="text-muted-foreground leading-relaxed">Introduce dinero en la máquina (monedas o billetes; muchas ya aceptan también tarjetas IC como Suica o Pasmo).</li>
              <li className="text-muted-foreground leading-relaxed">Pulsa el botón de tu ramen. El botón de arriba a la izquierda suele ser la especialidad de la casa (el que pide casi todo el mundo). Las fotos o maquetas de plástico ayudan a identificar las opciones.</li>
              <li className="text-muted-foreground leading-relaxed">Recoge tu ticket y entrégalo al personal cuando te sientes.</li>
              <li className="text-muted-foreground leading-relaxed">Espera. Come. Vete. Sin propinas, sin conversación obligatoria.</li>
            </ol>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Personaliza tu Bol Como un Local</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muchas tiendas te preguntarán sobre tres cosas que puedes personalizar. Aquí tienes las palabras clave que necesitas:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Firmeza de los fideos:</strong> katame (firmes), futsu (normal), yawarakame (blandos). Si no sabes qué elegir, di "futsu".
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Intensidad del caldo:</strong> kotteri (intenso/cremoso), assari (ligero). Para tu primera vez, prueba el término medio o "futsu".
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Toppings extra:</strong> ajitama (huevo marinado), chashu (cerdo), nori (alga), menma (brotes de bambú). El huevo siempre merece la pena.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si no hablas japonés, señalar las palabras en la hoja de pedido o decir "futsu" (normal) para todo funciona perfectamente. El personal está acostumbrado a clientes internacionales.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Sorber está bien visto.</strong> En Japón, sorber los fideos no es mala educación. Es como se come el ramen. El sonido airea los fideos y el caldo, los enfría y potencia el sabor. Piensa en ello como agitar una copa de vino: funcional, no solo teatral.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué Comer con tu Ramen (Los Extras que Nadie te Cuenta)
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Gyoza (empanadillas a la plancha):</strong> El acompañamiento clásico del ramen. Casi todas las ramen-ya las ofrecen, y casi siempre están buenas. Pide un plato de 5-6 y comparte.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Kaedama (fideos extra):</strong> En las tiendas de tonkotsu, puedes pedir una ración extra de fideos (suele costar entre 100 y 200 yenes) para añadir al caldo que te queda. Es práctica habitual y no se considera glotonería. Las porciones están diseñadas para ello.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Arroz (gohan):</strong> Algunos locales ofrecen un bol pequeño de arroz, solo o con toppings. Échalo en el caldo que te quede al final para un risotto improvisado. Esto se llama "shime" y es como muchos japoneses terminan su comida de ramen.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ajitama (huevo marinado):</strong> Si no viene incluido en tu pedido base, añade uno. Los huevos están marinados en salsa de soja y mirin, lo que les da una yema cremosa como un flan y un exterior sabroso. Es la mejor mejora de 100 yenes que existe en la gastronomía japonesa.
              </li>
            </ul>

            <InlineCTAEs
              message="En nuestro food tour probamos ramen, sushi y comida callejera que no encontrarás en las guías."
              linkText="Ver nuestro tour gastronómico →"
              href="/es/tours"
            />

            <p className="text-muted-foreground leading-relaxed mb-4">
              Para más recomendaciones gastronómicas en Tokio, consulta mi{" "}
              <Link to="/es/blog/guia-tsukiji" className="text-accent hover:underline">guía de Tsukiji</Link>{" "}
              y mi artículo sobre{" "}
              <Link to="/es/blog/tesoros-ocultos-tokio" className="text-accent hover:underline">tesoros ocultos de Tokio</Link>, que incluye algunos de los barrios gastronómicos que más me gustan.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres un guía que sepa dónde se come de verdad?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En mis tours, la comida nunca es un detalle secundario. Es parte de la experiencia cultural. Llevo a mis clientes a ramen-ya, barras de sushi y puestos callejeros que he probado personalmente durante más de 15 años comiendo en Tokio. En nuestro food tour te llevamos a los que no salen en Google Maps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">Ver Todos los Tours</Link>
                <Link to="/es/contact" className="btn-outline">Contactar</Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Preguntas Frecuentes</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuál es la diferencia entre shoyu y tonkotsu ramen?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    El shoyu (salsa de soja) tiene un caldo transparente o marrón claro hecho con fondo de pollo o marisco. Es limpio y sabroso. El tonkotsu (hueso de cerdo) tiene un caldo espeso, cremoso y blanco opaco, resultado de hervir huesos de cerdo durante más de 12 horas. Es intenso y contundente. Son experiencias completamente distintas. El shoyu es el whisky elegante; el tonkotsu es la cerveza artesanal.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuáles son los tipos de ramen en Japón?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Los cuatro estilos principales son: shoyu (salsa de soja, caldo transparente), tonkotsu (hueso de cerdo, caldo cremoso y blanco), miso (pasta de miso, caldo espeso y complejo) y tsukemen (fideos para mojar en un caldo concentrado aparte). Cada estilo tiene su origen regional: el shoyu nació en Tokio, el tonkotsu en Fukuoka, el miso en Sapporo, y el tsukemen en Ikebukuro. Además existen variantes como shio (sal), tantanmen (picante con sésamo) y muchas más.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cómo pedir ramen en Japón si no hablo japonés?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La mayoría de ramen-ya usan una máquina expendedora de tickets (shokkenki). Introduces dinero, pulsas el botón de tu ramen (el de arriba a la izquierda suele ser la especialidad de la casa), recoges el ticket y lo entregas al personal. Si te preguntan por la personalización, di "futsu" (normal) para todo. No hace falta hablar japonés; el sistema está diseñado para ser rápido y sencillo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Se deja propina en los restaurantes de ramen en Tokio?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No. La propina no se practica en ningún restaurante de Japón. El precio del ticket es el precio total. Sin cargo por servicio, sin propina esperada ni deseada. Para más información, lee mi artículo sobre{" "}
                    <Link to="/es/blog/propinas-en-japon" className="text-accent hover:underline">propinas en Japón</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Hay opciones de ramen vegetariano en Tokio?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí, aunque son menos comunes que las opciones con carne. Varios locales se especializan en ramen con caldo de verduras (yasai ramen), y la oferta está creciendo. Algunos ofrecen caldos a base de leche de soja que son sorprendentemente ricos. Busca tiendas que anuncien opciones "vegan" o "shojin" (vegetariano budista). Existen en la mayoría de barrios principales.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuánto cuesta un bol de ramen en Tokio?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Un bol estándar cuesta entre 800 y 1.200 yenes. Los locales premium y los boles especiales pueden llegar a 1.500-2.000 yenes. Los toppings (huevo, chashu extra, nori) cuestan entre 100 y 300 yenes cada uno. Una comida completa de ramen con toppings y gyoza suele costar entre 1.200 y 1.800 yenes por persona, uno de los mejores precios de Tokio por lo que recibes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuál es el mejor ramen de Tokio?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No existe "el mejor ramen de Tokio" en singular, porque depende totalmente del estilo que prefieras. Si te gustan los caldos ligeros, el shoyu clásico de la zona de Asakusa es imbatible. Si prefieres algo cremoso e intenso, el tonkotsu de Ikebukuro o Shinjuku es tu mejor apuesta. Lo importante es saber qué estilo te atrae y luego buscar los mejores exponentes de ese estilo. En mis tours, te ayudo a descubrir tu favorito.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <DiagnosticTrigger config={foodFinderEsConfig} />

      <RelatedTourCards tourIds={["custom"]} lang="es" showViewAll />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Guía de Ramen en Tokio: Lo Que Pide un Guía Local (y Dónde)",
        description: "Tokio tiene más de 10.000 ramen-ya. Un guía oficial te dice exactamente qué pedir, dónde ir y cómo pedirlo como un local.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-07", dateModified: "2026-04-06",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/guia-ramen-tokio" },
        inLanguage: "es"
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Cuál es la diferencia entre shoyu y tonkotsu ramen?", acceptedAnswer: { "@type": "Answer", text: "El shoyu tiene un caldo transparente a base de salsa de soja y fondo de pollo. El tonkotsu tiene un caldo espeso, cremoso y blanco de huesos de cerdo hervidos más de 12 horas. Son estilos completamente distintos." }},
          { "@type": "Question", name: "¿Cuáles son los tipos de ramen en Japón?", acceptedAnswer: { "@type": "Answer", text: "Los cuatro principales son shoyu (soja), tonkotsu (hueso de cerdo), miso y tsukemen (fideos para mojar). Cada uno tiene su origen regional y sabor característico." }},
          { "@type": "Question", name: "¿Cómo pedir ramen en Japón sin hablar japonés?", acceptedAnswer: { "@type": "Answer", text: "La mayoría de tiendas usan máquinas expendedoras de tickets. Introduce dinero, pulsa el botón de arriba a la izquierda (la especialidad de la casa), recoge el ticket y entrégalo al personal. Di 'futsu' (normal) para la personalización." }},
          { "@type": "Question", name: "¿Se deja propina en restaurantes de ramen?", acceptedAnswer: { "@type": "Answer", text: "No. La propina no se practica en ningún restaurante de Japón. El precio del ticket es el precio total." }},
          { "@type": "Question", name: "¿Hay ramen vegetariano en Tokio?", acceptedAnswer: { "@type": "Answer", text: "Sí, aunque menos común. Hay tiendas con caldo de verduras o leche de soja. Busca opciones 'vegan' o 'shojin' (vegetariano budista)." }},
          { "@type": "Question", name: "¿Cuánto cuesta el ramen en Tokio?", acceptedAnswer: { "@type": "Answer", text: "Entre 800 y 1.200 yenes el bol estándar. Una comida completa con toppings y gyoza: 1.200-1.800 yenes. Uno de los mejores precios de Tokio." }},
          { "@type": "Question", name: "¿Cuál es el mejor ramen de Tokio?", acceptedAnswer: { "@type": "Answer", text: "Depende del estilo. Para caldos ligeros, el shoyu de Asakusa. Para cremoso e intenso, el tonkotsu de Ikebukuro o Shinjuku. Lo clave es saber qué estilo prefieres." }}
        ]
      })}} />
    </Layout>
  );
};

export default EsGuiaRamenTokio;
