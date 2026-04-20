// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { QuickAnswerEs } from "@/components/blog/QuickAnswer";

const EsKamakuraConGuiaVsSolo = () => {
  return (
    <Layout>
      <SEO
        title="Kamakura desde Tokio 2026: ¿Con Guía o por tu Cuenta? Comparativa Real"
        description="Kamakura en un día: unos ¥4,000 por tu cuenta vs ¥70,000 con guía privado. Un guía con licencia compara los templos que casi nadie visita y cuándo compensa realmente ir con guía."
        canonicalPath="/es/blog/kamakura-con-guia-vs-solo"
        hreflang={[
          { lang: "en", path: "/blog/kamakura-day-trip-guide-vs-solo" },
          { lang: "es", path: "/es/blog/kamakura-con-guia-vs-solo" },
          { lang: "x-default", path: "/blog/kamakura-day-trip-guide-vs-solo" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Kamakura: Con Guía vs Solo" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/kamakura-great-buddha.webp"
          alt="Gran Buda de Kamakura (Kotoku-in)"
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
            <p className="text-label text-accent mb-3">Excursiones de un Día</p>
            <h1 className="heading-display text-foreground">
              Kamakura desde Tokio 2026: ¿Con Guía o por tu Cuenta? Comparativa Real
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                20 de abril de 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, Guía-Intérprete con Licencia Nacional (全国通訳案内士) que lleva regularmente excursiones a Kamakura desde Tokio.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Última actualización: abril de 2026</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <QuickAnswerEs
              answer="Por tu cuenta gana en puro coste — unos ¥4,000 por persona para la ruta clásica (Gran Buda, Hasedera, Tsurugaoka Hachimangu) desde Tokio. Con guía son ¥70,000 por tour (hasta 4 personas) y compensa de verdad en tres situaciones: la temporada de hortensias de junio en Hasedera (cuando las entradas con hora son casi imposibles de conseguir sin japonés), combinar Kamakura con Enoshima en un solo día, o cuando quieres los templos escondidos que casi ningún viajero solo visita."
              hook="Abajo el desglose real de coste — más las 3 partes de Kamakura que casi todos los viajeros se pierden por no saber que existen, y la pieza de reserva moderna que ha vuelto junio el mes más difícil para ir solo."
            />

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Kamakura es la única excursión desde Tokio donde te digo con sinceridad: para muchos viajeros, ir por su cuenta funciona perfectamente. Está cerca (una hora de Tokio), los sitios famosos están concentrados en una zona pequeña y la ruta principal está bien señalizada en inglés. Gran Buda, Hasedera y Tsurugaoka Hachimangu aparecen en cualquier guía y son fáciles de encontrar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pero "funcionar" no es lo mismo que "aprovechar lo mejor de Kamakura". Y hay situaciones concretas —sobre todo la temporada de hortensias— donde la logística de reservas se ha convertido en una barrera real para los viajeros sin japonés.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              He guiado esta excursión muchas veces. Abajo tienes una comparativa honesta con precios reales de 2026 para que decidas qué versión de Kamakura encaja con tu viaje.
            </p>

            {/* Qué hay en Kamakura */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué hay en Kamakura: las capas que se saltan casi todos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mayoría hace lo que yo llamo la "ruta trinidad": Gran Buda → Hasedera → Tsurugaoka Hachimangu. Son los tres sitios de cabecera, valen la pena, y se enlazan con breves trayectos del tren Enoden y caminatas en menos de 4 horas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que casi todos los viajeros independientes se saltan —no a propósito, sino porque no saben por delante de qué están pasando— es la capa más profunda de Kamakura que la convirtió en capital política de Japón de 1185 a 1333. Un pequeño bosque de bambú en Hokokuji que rivaliza con el de Arashiyama en Kioto pero con una fracción de la gente. El camino de piedra bordeado de hortensias en Meigetsu-in en junio. Un pequeño santuario sintoísta metido en una cueva en Zeniarai Benzaiten donde literalmente lavas tu dinero en agua de manantial (se dice que se duplica). No son secretos —están en guías— pero casi siempre se caen del itinerario rápido "ver los tres grandes y volver" que acaba siendo la ruta por defecto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si esa capa más profunda te importa es la pregunta real detrás de "con guía o solo". Si el Gran Buda es el objetivo principal y quieres un día relajado, solo funciona perfectamente. Si quieres sentir el peso de la era del shogunato de la ciudad, probablemente quieres un guía.
            </p>

            {/* Tabla comparativa */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Por tu cuenta vs con guía: de un vistazo
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Factor</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Solo (transporte público)</th>
                    <th className="text-left py-3 text-foreground font-medium">Con guía (tour privado)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Coste por persona (3 sitios)</td>
                    <td className="py-3 pr-4">~¥3,800</td>
                    <td className="py-3">¥70,000 por tour (hasta 4 pax)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Punto de equilibrio</td>
                    <td className="py-3 pr-4">Siempre más barato</td>
                    <td className="py-3">Con guía salen ~¥17,500/pax con 4 personas — el caso por coste no cierra. El de valor, sí.</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Duración total del día</td>
                    <td className="py-3 pr-4">8–10 h puerta a puerta</td>
                    <td className="py-3">7–8 h (flexible, admite Enoshima)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Los "tres grandes"</td>
                    <td className="py-3 pr-4">Fácil — bien señalizado en inglés</td>
                    <td className="py-3">Sobra guía para este alcance</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Templos escondidos (Hokokuji, Meigetsu-in, Zeniarai)</td>
                    <td className="py-3 pr-4">Alcanzables pero casi nunca en rutas solo</td>
                    <td className="py-3">Núcleo del tour</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Hortensias en Hasedera (junio)</td>
                    <td className="py-3 pr-4">Solo reserva online, franjas horarias, interfaz en japonés</td>
                    <td className="py-3">Gestionado por el guía</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Combinado Kamakura + Enoshima</td>
                    <td className="py-3 pr-4">Ajustado pero viable con el pase del Enoden</td>
                    <td className="py-3">Pensado para esta ruta</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Contexto histórico / cultural</td>
                    <td className="py-3 pr-4">Nivel guía de viaje</td>
                    <td className="py-3">Historia del shogunato, arquitectura y tradición zen en español</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Ruta solo */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              La ruta por tu cuenta (transporte público desde Tokio)
            </h2>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cómo llegar
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">JR Yokosuka Line desde Tokyo Station.</strong> Directo a Kamakura en unos 60 minutos. Tarifa IC alrededor de ¥945 por trayecto (unos ¥1,900 ida y vuelta). Es la ruta más habitual.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">JR Shonan-Shinjuku Line desde Shinjuku.</strong> 57–61 minutos directo, misma tarifa base. Buena opción si te alojas por Shinjuku o el lado oeste de Tokio.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Japan Rail Pass.</strong> Las dos rutas están totalmente cubiertas. No necesitas billetes adicionales.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cómo moverte una vez allí
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una vez en Kamakura, el pase local más útil es el <strong className="text-foreground">"Noriorikun"</strong> del Enoden, pase de 1 día (¥800 adulto / ¥400 niño). Permite subir y bajar sin límite del tren Enoden, que conecta la estación de Kamakura → Hase (para Hasedera y el Gran Buda) → hasta Enoshima. Para un día "Buda + Hasedera + Enoshima", se amortiza en uno o dos trayectos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El Enoden de Kamakura a Hase (Hasedera y Gran Buda) son unos 4–5 minutos. De Kamakura a Enoshima, unos 23 minutos por barrios costeros — un pequeño atractivo en sí.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para Tsurugaoka Hachimangu y los templos del este (Hokokuji, Sugimotodera) se va andando o en bus local desde la estación de Kamakura — no con el Enoden.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Entradas (2026)
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Gran Buda (Kotoku-in)</td>
                    <td className="py-2 text-right">¥300 adulto (+¥50 para entrar en el Buda)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Hasedera (estándar)</td>
                    <td className="py-2 text-right">¥400 adulto</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Hasedera — entrada del camino de hortensias (junio)</td>
                    <td className="py-2 text-right">+¥500 (separada, reserva online)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Tsurugaoka Hachimangu — santuario principal</td>
                    <td className="py-2 text-right">Gratis</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Tsurugaoka Hachimangu — museo del tesoro</td>
                    <td className="py-2 text-right">¥200 adulto</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Hokokuji (bosque de bambú)</td>
                    <td className="py-2 text-right">¥400 adulto (+¥600 con matcha)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Desglose de coste (1 persona, ruta clásica de 3 sitios)
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">JR ida y vuelta (Tokio ⇄ Kamakura)</td>
                    <td className="py-2 text-right">~¥1,900</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Pase Enoden Noriorikun</td>
                    <td className="py-2 text-right">¥800</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Gran Buda</td>
                    <td className="py-2 text-right">¥300</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Hasedera</td>
                    <td className="py-2 text-right">¥400</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Tsurugaoka Hachimangu</td>
                    <td className="py-2 text-right">Gratis</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">Subtotal (sin comida, fuera de temporada)</td>
                    <td className="py-2 text-right font-medium text-foreground">~¥3,400</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Añadiendo Hokokuji (¥400) y la entrada de hortensias (¥500 en junio) se queda en ~¥4,000–¥4,300 por persona. Comer en Kamakura suele sumar ¥1,500–¥3,000.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Las 3 cosas que casi todos los que van solos se pierden
            </h3>
            <ol className="space-y-3 mb-8 list-decimal list-inside">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">El grupo de templos del este (Hokokuji + Sugimotodera).</strong> Al estar a 5–10 minutos en bus al este de la estación de Kamakura —no sobre la línea del Enoden—, la mayoría con agenda ajustada los omite. El bosque de bambú de Hokokuji rivaliza con Arashiyama en Kioto y casi siempre con mucha menos gente. Es el "escondido a plena vista" más desperdiciado de un día solo en Kamakura.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Horarios de hortensias en Hasedera (solo junio).</strong> Desde 2021, Hasedera gestiona el camino de hortensias con entradas en franja horaria que se venden online el jueves de cada semana. La interfaz está en japonés, las entradas se agotan en minutos, y en los fines de semana pico son casi imposibles sin alguien local que lo gestione. Los viajeros por su cuenta llegan sin entrada, se encuentran la cola cerrada, y acaban saltándose la razón principal por la que habían ido en junio.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Las rutas a pie que conectan todo.</strong> El verdadero encanto de Kamakura está en las calles residenciales tranquilas, las escaleras de piedra con hortensias y los pequeños santuarios laterales entre los grandes sitios. Google Maps traza el camino más corto; no te lleva por el bonito. Un guía elige la ruta lenta, y eso cambia la sensación del día.
              </li>
            </ol>

            {/* Ruta con guía */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              La ruta con guía (qué pagas realmente)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una <Link to="/es/tours/kamakura-day-trip" className="text-accent hover:underline">excursión privada a Kamakura</Link> son ¥70,000 hasta 4 personas, incluyendo el guía y la mayoría de la logística. Entradas y comidas van aparte. Un día típico cubre:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                Encuentro en tu hotel en Tokio o en una estación de Tokio hacia las 8:30
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Tren directo a Kamakura con contexto histórico durante el trayecto
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Tsurugaoka Hachimangu con la historia política del shogunato que hace cobrar sentido a la geometría del santuario
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Bosque de bambú de Hokokuji (el "escondido" principal que se salta casi todo el mundo)
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Comida en un sitio local — sin colas ni adivinar al pedir
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Gran Buda y Hasedera vía Enoden, con el timing de la temporada (entradas de hortensias gestionadas con antelación en junio)
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Ampliación opcional a Enoshima y la costa para el atardecer
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Vuelta a Tokio a primera hora de la tarde/noche
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Por persona según tamaño del grupo:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="text-muted-foreground leading-relaxed">1 persona: ¥70,000 — rara vez tiene sentido frente a ir solo</li>
              <li className="text-muted-foreground leading-relaxed">2 personas: ¥35,000 cada una</li>
              <li className="text-muted-foreground leading-relaxed">3 personas: ~¥23,300 cada una</li>
              <li className="text-muted-foreground leading-relaxed">4 personas: ¥17,500 cada una — aún 4× el coste solo</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A diferencia de Nikko (donde el transporte puerta a puerta y las condiciones de carretera en invierno compensan el coste casi al 100% con 4 personas), la opción solo en Kamakura es genuinamente barata y se maneja bien en inglés. Así que el caso con guía no es "sale más barato con 4 personas", sino "vale pagar 4× el coste solo por lo que vas a ver y por cómo va a sentirse el día". Es un argumento distinto, y conviene ser honesto con uno mismo sobre si encaja con lo que buscas.
            </p>

            {/* Marco de decisión */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué opción te conviene
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Tu situación</th>
                    <th className="text-left py-3 text-foreground font-medium">Recomendación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Objetivo principal el Gran Buda; presupuesto ajustado</td>
                    <td className="py-3">Solo con el pase Noriorikun del Enoden</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Viaje en junio (hortensias)</td>
                    <td className="py-3">Con guía — la reserva con franja horaria de Hasedera es la pieza más difícil de Kamakura para quien no habla japonés</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Quieres Kamakura + Enoshima en un día</td>
                    <td className="py-3">Funcionan los dos; con guía se elimina el estrés del timing</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Quieres templos escondidos (Hokokuji, Meigetsu-in, Zeniarai Benzaiten)</td>
                    <td className="py-3">Con guía — aquí es donde la diferencia de precio empieza a ganarse su sitio</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Interés por la era del shogunato / budismo zen</td>
                    <td className="py-3">Con guía — las historias no están en ninguna señalización en inglés/español</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Padres mayores o problemas de movilidad</td>
                    <td className="py-3">Con guía — Kamakura tiene escaleras por todas partes; un guía esquiva las peores</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Lees japonés o ya has estado antes</td>
                    <td className="py-3">Solo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Nota estacional */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Nota sobre la temporada de hortensias (junio)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El camino de hortensias de Hasedera (unos 2.500 plantones) es una de las experiencias marca de junio en Japón. Desde que el templo pasó a un sistema de entrada con hora, sin embargo, la logística se ha apretado. Las entradas de cada semana se venden online el jueves anterior a las 10:00 (hora de Japón), y los turnos de fin de semana se agotan literalmente en minutos. La web está en japonés y la entrada es aparte de la entrada normal de ¥400 — se paga ¥500 adicionales por el camino de hortensias.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para viajeros por su cuenta, este es el punto de fallo nº1 que veo. Gente que planifica todo su día de Kamakura alrededor de las hortensias y llega para descubrir que su turno está agotado. La alternativa es ir entre semana, muy temprano (el templo abre 8:00 en junio) y tener un plan B listo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Las fechas exactas del periodo con entrada de hortensias cambian cada año según cuándo florecen; consulta la web oficial de Hasedera (hasedera.jp) a finales de mayo para el calendario del año.
            </p>

            {/* Relacionado */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Todavía dudando entre excursiones?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si también estás sopesando Hakone o Nikko frente a Kamakura, escribí una comparativa de las tres:{" "}
              <Link to="/es/blog/comparativa-excursiones" className="text-accent hover:underline font-medium">
                Kamakura vs Hakone vs Nikko
              </Link>
              . Y para la misma pregunta guía-vs-solo en Nikko, tienes aquí la versión dedicada:{" "}
              <Link to="/es/blog/nikko-con-guia-vs-solo" className="text-accent hover:underline font-medium">
                Nikko: Con Guía vs Solo
              </Link>
              .
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Planeando una excursión a Kamakura?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cuéntame cuántos sois, el mes de viaje y si Hokokuji o Enoshima están en vuestra lista, y os diré con sinceridad si os conviene ir por vuestra cuenta o con guía. En mi{" "}
                <Link to="/es/tours/kamakura-day-trip" className="text-accent hover:underline">
                  tour a Kamakura
                </Link>{" "}
                tienes el itinerario completo para comparar.
              </p>
              <Link
                to="/es/contact?utm_source=blog&utm_medium=cta&utm_campaign=kamakura-guia-vs-solo"
                className="btn-accent"
              >
                Consulta sobre tu viaje a Kamakura
              </Link>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Preguntas frecuentes</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Se puede ir a Kamakura en un día desde Tokio?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí, y es una de las más fáciles. La JR Yokosuka Line desde Tokyo Station llega a Kamakura en unos 60 minutos, y la Shonan-Shinjuku Line desde Shinjuku es similar. Un día completo cubre con comodidad el Gran Buda, Hasedera y Tsurugaoka Hachimangu.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Compensa el pase del Enoden?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Para un día clásico (Gran Buda + Hasedera + Enoshima opcional), sí — el Noriorikun de ¥800 se amortiza en dos o tres trayectos. Para solo los santuarios cercanos a la estación de Kamakura, sale más barato el billete por trayecto.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Compensa el Japan Rail Pass para Kamakura?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tanto la JR Yokosuka Line como la Shonan-Shinjuku Line están cubiertas por el JR Pass, así que si ya tienes uno, úsalo. Si no, el billete ida y vuelta cuesta ~¥1,900 — lo suficientemente barato para no justificar comprar un JR Pass solo por Kamakura.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuándo es la mejor época para visitar Kamakura?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Temporada de hortensias (mediados de junio) y hojas de otoño (finales de noviembre a principios de diciembre) son los dos picos fotográficos, pero ambos traen mucho público. Para una visita más tranquila con buen tiempo, finales de abril, principios de mayo o mediados de octubre. Los días laborables de invierno son maravillosamente tranquilos si no te importa el frío.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuántos sitios se pueden ver en un día?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Solo: cómodamente 4–5 sitios. Con guía: 5–7 sitios, porque se pierde menos tiempo en orientación, esperas de bus y buscar dónde comer. Si quieres Hokokuji + los tres grandes + Enoshima en un día, con guía es notablemente menos estresante.
                  </p>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>

      <RelatedTourCards
        tourIds={["kamakura-day-trip", "hakone-day-trip", "nikko-day-trip"]}
        showViewAll
        lang="es"
      />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Kamakura desde Tokio 2026: ¿Con Guía o por tu Cuenta? Comparativa Real",
            description:
              "Kamakura en un día: unos ¥4,000 por tu cuenta vs ¥70,000 con guía privado. Un guía con licencia compara los templos que casi nadie visita y cuándo compensa realmente ir con guía.",
            inLanguage: "es",
            author: {
              "@type": "Person",
              name: "Manabu",
              jobTitle: "National Government Licensed Guide Interpreter",
              url: "https://tanuki-tabi-travel.com/about",
            },
            datePublished: "2026-04-20",
            dateModified: "2026-04-20",
            publisher: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/kamakura-con-guia-vs-solo",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsKamakuraConGuiaVsSolo;
