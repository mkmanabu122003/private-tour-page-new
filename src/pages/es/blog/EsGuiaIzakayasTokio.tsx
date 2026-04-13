import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { DiagnosticTrigger } from "@/components/blog/DiagnosticTrigger";
import { neighborhoodFinderEsConfig } from "@/data/diagnostics/neighborhoodFinderEs";

const EsGuiaIzakayasTokio = () => {
  return (
    <Layout>
      <SEO
        title="Guía de Izakayas en Tokio: Dónde Bebe un Guía Local (2026)"
        description="Un guía oficial de Tokio te revela los callejones de izakayas, las costumbres para pedir y los bares ocultos que no encontrarías solo. Golden Gai, Omoide Yokocho, Yurakucho y más."
        canonicalPath="/es/blog/guia-izakayas-tokio"
        hreflang={[
          { lang: "en", path: "/blog/tokyo-izakaya-guide" },
          { lang: "es", path: "/es/blog/guia-izakayas-tokio" },
          { lang: "x-default", path: "/blog/tokyo-izakaya-guide" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/night-tour-omoide-yokocho.webp"
          alt="Callejón de Omoide Yokocho en Shinjuku — humo, faroles e izakayas diminutas de noche"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link to="/es/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />Volver al Blog
            </Link>
            <p className="text-label text-accent mb-3">Comida y Vida Nocturna</p>
            <h1 className="heading-display text-foreground">
              Guía de Izakayas en Tokio: Dónde Bebe un Guía Local
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />Manabu, Guía con Licencia</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />Última actualización: abril 2026</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, guía con licencia nacional que ha pasado más noches en los callejones de izakayas de Tokio de las que le gustaría admitir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              El mes pasado, una pareja de Londres me dijo que lo mejor de sus dos semanas en Japón no fueron los templos. Tampoco el Monte Fuji. Fue un diminuto bar de yakitori con seis asientos bajo las vías del tren en Yurakucho, donde el dueño asaba pollo sobre carbón y les servía el sake que él mismo había elegido. Me dijeron que nunca lo habrían encontrado solos. No habrían sabido cómo pedir. Y desde luego no habrían entendido por qué el señor de al lado insistía en invitarles a una copa tras otra.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Eso es lo que hacen las izakayas. Son el lugar donde Tokio realmente come y bebe después del trabajo, donde las conversaciones surgen entre desconocidos y donde la comida es honesta, barata y a menudo extraordinaria. Pero para los viajeros, también son la parte más difícil de Tokio a la que acceder por tu cuenta. Esta guía es todo lo que les cuento a mis clientes antes de salir de noche.
            </p>

            {/* Qué es una izakaya */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Qué es exactamente una izakaya?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una izakaya (居酒屋) significa literalmente "tienda donde quedarse a beber". Piensa en ella como la versión japonesa de un bar de tapas o un gastropub, pero con su propia cultura. Pides bebidas y pequeños platos para compartir, comes a tu ritmo y te quedas todo el tiempo que quieras. No hay presión para irte después de un plato.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las izakayas van desde cadenas con luces fluorescentes (tipo Torikizoku, Watami) hasta locales sin ventanas con ocho asientos y un dueño de 70 años que recuerda a cada cliente habitual por su nombre. Las cadenas están bien. Pero la magia de verdad — el Tokio que los viajeros me recuerdan durante años — ocurre en las pequeñas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              El problema: las mejores izakayas a menudo no tienen cartel en inglés, ni carta en inglés, ni presencia online, y la puerta parece la entrada al apartamento de alguien. Eso no es casualidad. Estos locales sobreviven gracias a sus clientes habituales, no a los turistas. Ir con alguien que los conoce lo cambia todo.
            </p>

            {/* Las 5 zonas */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              5 zonas de izakayas a las que llevo a mis clientes
            </h2>

            {/* Golden Gai */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">1. Golden Gai (Shinjuku)</h3>
            <img
              src="/images/tours/night-tour-golden-gai.webp"
              alt="Callejón estrecho de Golden Gai con pequeños bares iluminados por faroles de papel en Shinjuku"
              className="w-full rounded-lg mb-4"
              loading="lazy"
              width={800}
              height={500}
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Unos 270 bares diminutos metidos en seis callejones estrechos, cada uno con capacidad para 5-10 personas. Cada bar tiene su propia personalidad: bares de jazz, de cine, de punk, bares donde el dueño solo se comunica a través de la música.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">La realidad:</strong> Golden Gai se ha vuelto más accesible para turistas en los últimos años, pero muchos bares todavía tienen carteles de "solo socios" o cobran entradas que intimidan a los que van por primera vez. Algunos cobran tarifas de mesa elevadas (¥1,000+) con bebidas mediocres. Con un guía, te saltas las trampas para turistas y entras en los bares que reciben bien a los nuevos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Presupuesto:</strong> Calcula ¥3,000-6,000 por bar incluyendo cargo de entrada y 2-3 bebidas. Solo efectivo en la mayoría de los bares.
            </p>

            {/* Omoide Yokocho */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">2. Omoide Yokocho — El Callejón de los Recuerdos (Shinjuku)</h3>
            <img
              src="/images/blog/shinjuku-yakitori-skewers.webp"
              alt="Brochetas de yakitori asándose sobre carbón en un puesto de Omoide Yokocho"
              className="w-full rounded-lg mb-4"
              loading="lazy"
              width={800}
              height={500}
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Unos 60 restaurantes diminutos apretados en callejones estrechos de posguerra, justo al oeste de la estación de Shinjuku. El olor a humo de yakitori te llega antes de doblar la esquina. Este lugar apenas ha cambiado desde los años 40.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué pedir:</strong> Yakitori (brochetas de pollo), motsu-ni (estofado de vísceras — mucho mejor de lo que suena) y cerveza fría. Siéntate en la barra, mira al cocinero trabajar y señala lo que esté comiendo la persona de al lado. Así funciona aquí.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Presupuesto:</strong> ¥2,000-4,000 para una comida completa con bebidas. Sin cargo de entrada en la mayoría de los puestos. Solo efectivo.
            </p>

            {/* Yurakucho */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">3. Yurakucho bajo las vías</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Casi 700 metros de restaurantes construidos bajo los arcos de ladrillo de la línea JR Yamanote, entre las estaciones de Yurakucho y Shinbashi. Se conoce como "gado-shita" (bajo la viga). Los trenes pasan retumbando cada pocos minutos. Tiene una atmósfera que ningún restaurante de diseño puede replicar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Por qué me encanta:</strong> Es donde los oficinistas de Tokio vienen a desconectar. Nada de turistas. Nada de menús en inglés. Solo asalariados aflojándose la corbata mientras comen pescado a la parrilla y beben highballs. El lado noroeste de la estación de Yurakucho tiene un aire más sofisticado, con bares de vino francés y locales italianos mezclados. El lado de Shinbashi es más rudo, más ruidoso y más divertido.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Presupuesto:</strong> ¥2,500-5,000 por persona dependiendo de cuánto te quedes.
            </p>

            {/* Shinbashi */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">4. Shinbashi Yokocho</h3>
            <img
              src="/images/blog/shinbashi-izakaya-exterior.webp"
              alt="Callejón estrecho de izakayas en Shinbashi con faroles rojos y oficinistas"
              className="w-full rounded-lg mb-4"
              loading="lazy"
              width={800}
              height={500}
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Si Yurakucho es donde los oficinistas empiezan a beber, Shinbashi es donde terminan. Los callejones alrededor de la estación de Shinbashi — especialmente "Shinbashi Yokocho" — están llenos de bares para beber de pie (tachinomi), locales de yakitori y restaurantes de barbacoa coreana que cierran tarde.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Ideal para:</strong> Viajeros que quieren la "auténtica experiencia del asalariado japonés" sin filtros. Shinbashi es la vida nocturna de Tokio en estado puro. Pide un lemon sour (lemon-chu-hai), coge una brocheta y quédate de pie en la barra.
            </p>

            {/* Ebisu */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">5. Ebisu Yokocho</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Un mercado gastronómico con más de 20 puestos diminutos dentro de un mismo edificio, cada uno especializado en una cosa: gyoza, oden, kushikatsu, sashimi. Está diseñado para recrear el ambiente de un yokocho antiguo, pero es más limpio, más accesible y todos los puestos son buenos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Ideal para:</strong> Viajeros que quieren la atmósfera de un yokocho pero prefieren un entorno algo más accesible. Genial para parejas y primerizos. No hace falta reservar, simplemente siéntate donde se libere un asiento.
            </p>

            {/* Cómo pedir */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo pedir en una izakaya (sin pasar vergüenza)
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">El otoshi (cargo de mesa)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando te sientes, aparecerá un platito que no has pedido. Esto es el <em>otoshi</em> — un cargo de mesa disfrazado de aperitivo. Normalmente cuesta entre ¥300 y ¥500 por persona. No es una estafa. Es lo normal en prácticamente todas las izakayas de Japón. Piensa en ello como un cargo de entrada que viene con comida. Cómetelo. Suele estar bueno.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Qué pedir primero</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Empieza por las bebidas. El primer pedido clásico es <strong className="text-foreground">Toriaezu nama</strong> ("Una caña de cerveza, por ahora"). Es la frase que usa todo japonés. Después, pide comida por rondas: 2-3 platitos, cómelos y luego pide más. No pidas todo a la vez — la cocina envía los platos según están listos, y parte de la experiencia es el ritmo de ir pidiendo durante toda la noche.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">5 cosas que siempre pido</h3>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Edamame</strong> — El aperitivo universal. Todas las mesas piden uno.</li>
              <li><strong className="text-foreground">Yakitori (negima)</strong> — Brochetas de pollo con cebolleta. El estilo más popular. Pídelo con sal (shio), no con salsa (tare), para un sabor más limpio.</li>
              <li><strong className="text-foreground">Agedashi tofu</strong> — Tofu frito en caldo dashi. Simple, perfecto y apto para vegetarianos.</li>
              <li><strong className="text-foreground">Karaage</strong> — Pollo frito japonés. Crujiente por fuera, jugoso por dentro. El plato de referencia de cualquier izakaya.</li>
              <li><strong className="text-foreground">Shime (el cierre)</strong> — Termina con un bol pequeño de ochazuke (arroz con té verde por encima) o una bola de arroz. Así es como los japoneses cierran una sesión de bebida.</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Nomihoudai (barra libre)</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Muchas izakayas ofrecen <em>nomihoudai</em> — bebidas ilimitadas durante un tiempo fijo (normalmente 90-120 minutos) a un precio cerrado, típicamente ¥1,500-2,500. Casi siempre merece la pena si piensas tomar más de tres copas. La selección suele incluir cerveza, highballs, shochu, sake y refrescos. El sake premium y los cócteles especiales pueden no estar incluidos.
            </p>

            {/* Cuánto gastar */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Cuánto cuesta?
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Izakaya informal (Omoide Yokocho, bares de pie)</span>
                  <span className="font-medium text-foreground">¥2,000-4,000/persona</span>
                </div>
                <div className="border-t border-border/40" />
                <div className="flex justify-between text-muted-foreground">
                  <span>Izakaya de gama media (Yurakucho, Ebisu Yokocho)</span>
                  <span className="font-medium text-foreground">¥3,000-5,000/persona</span>
                </div>
                <div className="border-t border-border/40" />
                <div className="flex justify-between text-muted-foreground">
                  <span>Golden Gai por bar (entrada + 2-3 bebidas)</span>
                  <span className="font-medium text-foreground">¥3,000-6,000/bar</span>
                </div>
                <div className="border-t border-border/40" />
                <div className="flex justify-between text-muted-foreground">
                  <span>Nomihoudai (barra libre, 90 min)</span>
                  <span className="font-medium text-foreground">¥1,500-2,500/persona</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Precios con impuestos incluidos. La mayoría de las izakayas pequeñas solo aceptan efectivo. Las cadenas aceptan tarjeta.
              </p>
            </div>

            {/* Por qué un guía */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Por qué en las izakayas es donde más importa tener un guía
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              He guiado tours gastronómicos, paseos por templos y excursiones de un día. Pero el feedback que recibo de las noches de izakaya es diferente. Es más emocional. La gente no solo dice "fue divertido". Dicen "fue la noche en la que entendí Japón".
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esto es lo que hace un guía en una izakaya que tú no puedes hacer solo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Lee el menú</strong> — La mayoría de las izakayas pequeñas solo tienen menús escritos a mano en japonés. Sin fotos. Sin traducciones.</li>
              <li><strong className="text-foreground">Conoce las costumbres</strong> — El otoshi, la etiqueta al servir bebidas, cómo llamar al camarero, cuándo pasar al siguiente bar.</li>
              <li><strong className="text-foreground">Abre puertas</strong> — Algunos de los mejores bares no tienen cartel y la puerta está cerrada. Entrar solo se siente imposible. Entrar con un local se siente natural.</li>
              <li><strong className="text-foreground">Traduce la conversación</strong> — El dueño empieza a hablar. La persona de al lado te propone un brindis. Sin guía, esos momentos se pierden. Con guía, se convierten en historias.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mi <Link to="/es/tours/tokyo-night-tour" className="text-accent hover:underline">Tour Nocturno por Tokio</Link> cubre 2-3 izakayas en una sola noche, incluyendo zonas de esta guía. Cada noche es diferente porque me adapto a lo que tú quieres: bares tranquilos, callejones animados o una mezcla de ambos.
            </p>

            {/* Consejos prácticos */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Consejos prácticos
            </h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Efectivo</strong> — Lleva al menos ¥10,000 en efectivo. La mayoría de las izakayas pequeñas no aceptan tarjeta.</li>
              <li><strong className="text-foreground">Horario</strong> — Las izakayas se llenan entre las 19:00 y las 21:00 entre semana. Llega a las 18:00 para asientos en la barra, o ve después de las 21:30 cuando se va la primera oleada.</li>
              <li><strong className="text-foreground">Zapatos</strong> — Algunas izakayas tradicionales piden quitarse los zapatos. Lleva calcetines que no te importe enseñar.</li>
              <li><strong className="text-foreground">Fumar</strong> — Las leyes antitabaco de interior en Japón varían. Muchos bares pequeños e izakayas antiguas todavía permiten fumar. Pregunta antes de sentarte si esto te importa.</li>
              <li><strong className="text-foreground">Último tren</strong> — El último tren en la mayoría de las líneas es alrededor de medianoche. Si lo pierdes, tus opciones son taxi o el primer tren de la mañana (5:00).</li>
            </ul>

            <div className="mt-16 p-8 bg-accent/5 border border-accent/20 rounded-lg text-center">
              <p className="text-lg font-semibold text-foreground mb-2">¿Listo para vivir Tokio de noche?</p>
              <p className="text-sm text-muted-foreground mb-6">
                Mi Tour Nocturno cubre Golden Gai, Omoide Yokocho e izakayas ocultas que no encontrarás en ninguna guía de viaje.
              </p>
              <Link to="/es/tours/tokyo-night-tour" className="btn-accent">
                Ver Detalles del Tour Nocturno
              </Link>
            </div>

          </article>
        </div>
      </section>

      <DiagnosticTrigger config={neighborhoodFinderEsConfig} />

      <RelatedTourCards tourIds={["tokyo-night-tour", "asakusa", "custom"]} showViewAll />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Guía de Izakayas en Tokio: Dónde Bebe un Guía Local",
        description: "Un guía oficial de Tokio te revela los callejones de izakayas, las costumbres para pedir y los bares ocultos que no encontrarías solo.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-04-13", dateModified: "2026-04-13",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/guia-izakayas-tokio" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué es el otoshi en una izakaya?", acceptedAnswer: { "@type": "Answer", text: "El otoshi es un pequeño plato que te sirven automáticamente al sentarte en una izakaya. Funciona como un cargo de mesa, normalmente entre ¥300 y ¥500 por persona. Es una práctica habitual en prácticamente todas las izakayas de Japón." }},
          { "@type": "Question", name: "¿Cuánto cuesta comer en una izakaya en Tokio?", acceptedAnswer: { "@type": "Answer", text: "Una comida informal con bebidas en una izakaya cuesta entre ¥2,000 y ¥4,000 por persona. Las izakayas de gama media cuestan entre ¥3,000 y ¥5,000. Los bares de Golden Gai cobran entre ¥3,000 y ¥6,000 por bar incluyendo entrada y bebidas." }},
          { "@type": "Question", name: "¿Necesito hablar japonés para ir a una izakaya?", acceptedAnswer: { "@type": "Answer", text: "Las cadenas de izakayas suelen tener menús con fotos o tabletas para pedir en inglés. Pero las mejores izakayas pequeñas normalmente solo tienen menús escritos a mano en japonés. Un guía o algunas frases básicas en japonés ayudan muchísimo." }},
          { "@type": "Question", name: "¿Qué es el nomihoudai?", acceptedAnswer: { "@type": "Answer", text: "Nomihoudai significa barra libre durante un tiempo limitado (normalmente 90-120 minutos) a un precio fijo de ¥1,500-2,500. Suele incluir cerveza, highballs, shochu, sake básico y refrescos." }}
        ]
      })}} />
    </Layout>
  );
};

export default EsGuiaIzakayasTokio;
