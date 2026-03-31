import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";


const EsCuantoCuestaGuiaPrivadoTokio = () => {
  return (
    <Layout>
      <SEO
        title="¿Cuánto Cuesta un Guía Privado en Tokio? Precios Reales 2026"
        description="Un guía local con licencia oficial te explica los precios reales: desde ¥40,000 hasta ¥80,000. Sin comisiones de agencia. Qué incluye y cómo elegir."
        canonicalPath="/es/blog/cuanto-cuesta-guia-privado-tokio"
        hreflang={[
          { lang: "en", path: "/blog/tokyo-private-tour-guide-cost" },
          { lang: "es", path: "/es/blog/cuanto-cuesta-guia-privado-tokio" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tour-photos/group-photo.webp"
          alt="Grupo de turistas con guía privado en Tokio"
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
            <p className="text-label text-accent mb-3">Guías Útiles</p>
            <h1 className="heading-display text-foreground">
              ¿Cuánto Cuesta un Guía Privado en Tokio? Precios Reales 2026
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
              Escrito por Manabu, guía-intérprete con licencia nacional (全国通訳案内士) que trabaja en Tokio. Estos son precios reales de alguien que hace esto cada día, no de una plataforma de reservas.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Respuesta directa */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Un guía privado en Tokio cuesta entre ¥40,000 y ¥50,000 por grupo para un tour de medio día, y entre ¥50,000 y ¥80,000 para un día completo. Son precios por grupo, no por persona. Una familia de cuatro paga lo mismo que una pareja.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {/* <!-- VERIFIED: 1 EUR ≈ 182 JPY, 1 USD ≈ 160 JPY as of March 2026. Checked: 2026-03-14 --> */}
              En euros, eso equivale aproximadamente a entre 220 y 275 euros por grupo (medio día) y entre 330 y 440 euros por grupo (día completo). En dólares, entre 250 y 315 USD (medio día).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Escribo esto como guía que hace este trabajo cada día en Tokio, no como alguien que te redirige a una plataforma de reservas para llevarse una comisión. Voy a ser completamente transparente con los números, incluyendo mis propias tarifas, para que puedas tomar una decisión informada.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si te preguntas si merece la pena el gasto, también escribí un artículo sobre{" "}
              <Link to="/es/blog/vale-la-pena-guia-privado-tokio" className="text-accent hover:underline">
                si vale la pena contratar un guía privado en Tokio
              </Link>
              . Aquí nos centramos en los precios.
            </p>

            {/* Tabla comparativa */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Tabla de Precios: Todas las Opciones Comparadas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estas son las opciones que encontrarás en 2026 si buscas un guía en Tokio, desde lo más económico hasta lo premium.
            </p>

            <div className="my-8 overflow-x-auto">
              <div className="min-w-[700px] border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-5 bg-secondary/70 text-foreground font-medium text-sm">
                  <div className="p-4 border-r border-border">Tipo de guía</div>
                  <div className="p-4 border-r border-border">Precio (yenes)</div>
                  <div className="p-4 border-r border-border">Aprox. en EUR</div>
                  <div className="p-4 border-r border-border">Grupo</div>
                  <div className="p-4">Qué incluye</div>
                </div>
                <div className="grid grid-cols-5 text-sm text-muted-foreground border-t border-border">
                  <div className="p-4 border-r border-border">Free walking tours (GuruWalk, etc.)</div>
                  <div className="p-4 border-r border-border">Gratis (propina)</div>
                  <div className="p-4 border-r border-border">Gratis</div>
                  <div className="p-4 border-r border-border">10-30 personas</div>
                  <div className="p-4">Ruta fija, 2-3 horas, sin personalización</div>
                </div>
                <div className="grid grid-cols-5 text-sm text-muted-foreground border-t border-border bg-secondary/20">
                  <div className="p-4 border-r border-border">Tours grupales via Civitatis/Viator</div>
                  {/* <!-- VERIFIED: Group tour prices ¥5,000-15,000/person — confirmed via Viator/Civitatis. Checked: 2026-03-14 --> */}
                  <div className="p-4 border-r border-border">¥5,000-15,000/persona</div>
                  <div className="p-4 border-r border-border">~30-80 EUR/persona</div>
                  <div className="p-4 border-r border-border">8-20 personas</div>
                  <div className="p-4">Itinerario fijo, guía, a veces almuerzo</div>
                </div>
                <div className="grid grid-cols-5 text-sm text-muted-foreground border-t border-border">
                  <div className="p-4 border-r border-border">Privado via plataformas (OTA)</div>
                  {/* <!-- VERIFIED: OTA private tour prices ¥20,000-50,000 — confirmed via GoWithGuide/Viator. Checked: 2026-03-14 --> */}
                  <div className="p-4 border-r border-border">¥20,000-50,000/grupo</div>
                  <div className="p-4 border-r border-border">~110-275 EUR/grupo</div>
                  <div className="p-4 border-r border-border">1-6 personas</div>
                  <div className="p-4">Guía, algo de personalización, soporte plataforma</div>
                </div>
                <div className="grid grid-cols-5 text-sm text-muted-foreground border-t border-border bg-secondary/20">
                  <div className="p-4 border-r border-border">Guía independiente con licencia</div>
                  <div className="p-4 border-r border-border">¥40,000-80,000/grupo</div>
                  <div className="p-4 border-r border-border">~220-440 EUR/grupo</div>
                  <div className="p-4 border-r border-border">1-8 personas</div>
                  <div className="p-4">Itinerario personalizado, profundidad cultural, planificación previa</div>
                </div>
                <div className="grid grid-cols-5 text-sm text-muted-foreground border-t border-border">
                  <div className="p-4 border-r border-border">Agencias de lujo</div>
                  {/* <!-- VERIFIED: Luxury agency prices ¥80,000+ — consistent with Walk Japan/Artisans of Leisure ranges. Checked: 2026-03-14 --> */}
                  <div className="p-4 border-r border-border">¥80,000+/grupo</div>
                  <div className="p-4 border-r border-border">~440+ EUR/grupo</div>
                  <div className="p-4 border-r border-border">1-4 personas</div>
                  <div className="p-4">Coche privado, reservas exclusivas, todo incluido</div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Un dato clave: las plataformas como Civitatis, Viator o GetYourGuide cobran una comisión del 20-30% al guía. Eso significa que o el guía cobra menos (y posiblemente ofrece menos), o tú pagas más. Reservar directamente con un guía independiente suele dar mejor relación calidad-precio.
              {/* <!-- VERIFIED: OTA commission 20-30% confirmed (Viator ~20-25%, GetYourGuide ~20-30%). Checked: 2026-03-14 --> */}
            </p>

            {/* Por qué los guías en español son más escasos */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Por Qué los Guías en Español Son Más Escasos (y Qué Significa para el Precio)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es un factor que afecta directamente a los hispanohablantes y que pocas guías de viaje mencionan: hay muy pocos guías con licencia que hablen español en Tokio. La gran mayoría trabaja en inglés, chino o coreano.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No es una estrategia de marketing. Es un hecho: la oferta de guías hispanohablantes es limitada, y la demanda de turistas de España y Latinoamérica crece cada año. Esto significa que los guías que ofrecemos servicio en español podemos tener tarifas ligeramente más altas, simplemente porque hay menos opciones.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si tu grupo se maneja bien en inglés, tendrás más opciones y posiblemente precios algo más bajos. Pero si prefieres la experiencia completa en español, sin tener que traducir mentalmente todo lo que te explican, la diferencia de precio suele merecer la pena.
            </p>

            {/* Qué está incluido */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Qué Está Incluido en el Precio? (Y Qué No)
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo Que Incluye un Tour Privado
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tiempo del guía</strong> durante toda la duración del tour (normalmente 3-4 horas para medio día, 7-10 horas para día completo)
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Itinerario personalizado</strong> planificado según tus intereses, ritmo y composición del grupo
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Contexto cultural</strong> en cada parada: no solo nombres y fechas, sino las historias detrás de lo que ves
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Recomendaciones de restaurantes</strong> adaptadas a tus preferencias y restricciones alimentarias
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Navegación</strong> por el sistema de trenes, callejones y barrios de Tokio
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Comunicación previa al tour</strong> para planificar y resolver dudas sobre tu viaje
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo Que NO Incluye (Casi Nunca)
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Transporte:</strong> Billetes de tren, metro y bus para ti y para el guía
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Comida y bebida:</strong> Tus comidas y las del guía
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Entradas:</strong> Templos, museos y atracciones
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En un día típico en Tokio, calcula entre ¥2,000 y ¥5,000 adicionales por persona para transporte, comida y entradas. Para excursiones de un día (Hakone, Kamakura, Nikko), el transporte solo puede sumar ¥5,000-8,000 por persona.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Sobre la Organización del Transporte
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En Japón, organizar el transporte para clientes requiere una licencia de agencia de viajes. Yo no puedo reservar trenes o autobuses por ti, pero te enseño exactamente cómo funciona el sistema y te recomiendo las mejores opciones. La mayoría de guías independientes trabajan igual. Si una empresa te ofrece organizar todo el transporte, es porque tienen licencia de agencia o trabajan con un socio que la tiene.
            </p>

            {/* Qué afecta el precio */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Qué Determina el Precio?
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tamaño del Grupo (Tarifa Plana)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mayoría de guías privados cobramos por grupo, no por persona. Para un grupo de cuatro pagando ¥45,000 por un tour, son ¥11,250 por persona. Para una pareja, ¥22,500 cada uno. Cuanto más grande el grupo, más rentable resulta.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Duración
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tours de medio día (3-4 horas) en Tokio central: ¥40,000-50,000 por grupo. Día completo (6-8 horas): ¥60,000-80,000. Excursiones a{" "}
              <Link to="/es/tours/hakone-day-trip" className="text-accent hover:underline">
                Hakone
              </Link>
              ,{" "}
              <Link to="/es/tours/kamakura-day-trip" className="text-accent hover:underline">
                Kamakura
              </Link>
              {" "}o{" "}
              <Link to="/es/tours/nikko-day-trip" className="text-accent hover:underline">
                Nikko
              </Link>
              : ¥70,000-80,000 por las horas extra y la logística de transporte.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Licencia vs. Sin Licencia
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La{" "}
              <Link to="/es/blog/guia-licencia-oficial-japon" className="text-accent hover:underline">
                licencia nacional de guía-intérprete
              </Link>
              {" "}(全国通訳案内士) requiere pasar un examen del gobierno japonés que cubre historia, geografía, cultura y dominio avanzado de un idioma extranjero. La tasa de aprobación ronda el 10-20% dependiendo del año. Los guías con licencia cobramos más porque hemos invertido años de formación y ofrecemos un nivel de conocimiento verificado.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Temporada
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Temporada de cerezos en flor (finales de marzo a mediados de abril) y follaje de otoño (mediados de noviembre a principios de diciembre) son las épocas de mayor demanda. Los guías se reservan con semanas de antelación. Si tus fechas son flexibles, mayo, junio, septiembre y octubre ofrecen la misma calidad con más disponibilidad y a veces mejores precios.
            </p>

            {/* ¿Merece la pena? */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Merece la Pena el Gasto? (Respuesta Honesta)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No siempre. Y eso lo digo como alguien que se gana la vida haciendo esto.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Merece la Pena Para...
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Familias con niños:</strong> Gestionar cochecitos en trenes llenos, encontrar restaurantes con sillas altas, mantener el ritmo de todos. Un guía se encarga de la logística para que los padres disfruten. Los niños no tienen coste adicional en mis tours porque cobro por grupo.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Primer viaje a Japón con pocos días:</strong> Si tienes 3-5 días en Tokio, cada hora cuenta. Un guía elimina el tiempo que pasarías descifrando el mapa del metro, caminando en la dirección equivocada y esperando en sitios turísticos que no merecen tanto tiempo.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Grupos de 3+ personas:</strong> A ¥45,000 por grupo, una familia de cuatro paga ¥11,250 cada uno (unos 62 EUR). Comparable a un tour grupal pero con experiencia totalmente personalizada.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Amantes de la gastronomía:</strong> La mejor comida de Tokio está en sitios sin carta en inglés, en sótanos y callejones estrechos. Un guía te abre puertas que son genuinamente difíciles de encontrar solo.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Probablemente No Necesitas un Guía Si...
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ya conoces Japón:</strong> Si has visitado Tokio antes y dominas el sistema de trenes, un guía para las atracciones principales es innecesario
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Te defiendes bien en inglés:</strong> Si el idioma no es una barrera, tendrás más opciones y precios algo menores
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Presupuesto ajustado:</strong> Esos ¥40,000-80,000 pueden financiar varios días de comida, transporte y alojamiento. No voy a intentar convencerte de algo que no necesitas
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Disfrutas perderte:</strong> Si tu estilo de viaje es improvisar y descubrir por tu cuenta, un tour guiado puede sentirse restrictivo
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Mi recomendación para la mayoría de hispanohablantes que visitan Tokio por primera vez: contrata un guía 1-2 días (el primer día para orientarte y quizás una excursión como Kamakura o Hakone). Los días restantes, explora por tu cuenta con la confianza que da haber entendido cómo funciona la ciudad. Es un cálculo de valor por hora de viaje, no solo de coste absoluto.
            </p>

            {/* Cómo elegir */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo Elegir Bien (Checklist)
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Pregunta por la Licencia
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No es obligatoria, pero es el único indicador oficial de calidad en Japón. Si un guía tiene la licencia nacional, sabes que ha pasado un examen riguroso. Pregúntalo directamente. Un guía con licencia no tendrá problema en confirmarlo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lee las Reseñas en Detalle
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No te quedes con la puntuación general. Busca reseñas de viajeros con un perfil similar al tuyo: familias si viajas con niños, parejas si vais dos, personas que mencionen el idioma español. Las reseñas genéricas tipo "great tour" no dicen mucho.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Compara Lo Que Incluye, No Solo el Precio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un guía que cobra ¥40,000 con itinerario personalizado, soporte previo al viaje y 8 horas de servicio puede ser mejor inversión que uno que cobra ¥20,000 por 4 horas sin planificación. Haz las cuentas completas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cuidado con las Plataformas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Las plataformas tipo Viator o Civitatis son cómodas, pero recuerda que cobran una comisión importante al guía. Eso puede significar que el guía gana menos (y posiblemente se esfuerza menos) o que el precio que ves ya incluye ese sobrecargo. Reservar directamente con un guía independiente suele ofrecer mejor valor.
            </p>

            {/* Mis tarifas */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Mis Tarifas (Con Total Transparencia)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como este artículo trata de precios, aquí van los míos. Todos son por grupo, no por persona. Los niños no tienen coste adicional.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tours a pie por Tokio:</strong> ¥40,000-¥50,000 por grupo (2.5-4 horas). Esto incluye zonas como{" "}
                <Link to="/es/tours/asakusa" className="text-accent hover:underline">
                  Asakusa
                </Link>
                ,{" "}
                <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">
                  Tsukiji y Ginza
                </Link>
                ,{" "}
                <Link to="/es/tours/shibuya-harajuku" className="text-accent hover:underline">
                  Shibuya y Harajuku
                </Link>
                .
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Excursiones de un día:</strong> ¥70,000-¥80,000 por grupo (7-10 horas) a{" "}
                <Link to="/es/tours/kamakura-day-trip" className="text-accent hover:underline">
                  Kamakura
                </Link>
                ,{" "}
                <Link to="/es/tours/hakone-day-trip" className="text-accent hover:underline">
                  Hakone
                </Link>
                {" "}o{" "}
                <Link to="/es/tours/nikko-day-trip" className="text-accent hover:underline">
                  Nikko
                </Link>
                .
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tours personalizados:</strong> Desde{" "}
                <Link to="/es/tours/custom" className="text-accent hover:underline">
                  ¥10,000~ por hora
                </Link>
                . Tú diseñas el día, yo me encargo de la ejecución.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Puedes ver el desglose completo en mis{" "}
              <Link to="/es/tours" className="text-accent hover:underline">
                páginas de tours
              </Link>
              . Sin costes ocultos. El precio que ves es el precio que pagas.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Tienes Dudas Sobre Precios o Tu Itinerario?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Si estás planificando tu viaje a Tokio y no tienes claro si un guía encaja en tu presupuesto o itinerario, escríbeme sin compromiso. Te daré una respuesta honesta. A veces esa respuesta es "no necesitas un guía para lo que quieres hacer." Prefiero que tomes una buena decisión a que reserves con dudas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/es/contact?utm_source=blog&utm_medium=cta&utm_campaign=guia-privado-precio"
                  className="btn-accent"
                >
                  Pregúntame Sin Compromiso
                </Link>
                <Link to="/es/tours" className="btn-outline">
                  Ver Tarifas y Tours
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿El precio es por persona o por grupo?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La mayoría de guías privados en Tokio cobran por grupo, no por persona. Una familia de cuatro paga la misma tarifa total que una pareja. Es una de las grandes ventajas del tour privado frente al grupal.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Hay guías que hablen español en Tokio?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí, pero somos pocos. La mayoría de guías con licencia en Tokio trabajan en inglés, chino o coreano. Los guías en español existimos pero la oferta es limitada, así que te recomiendo reservar con antelación, especialmente en temporada alta.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Qué diferencia hay entre un guía con licencia y sin licencia?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Los guías con licencia hemos aprobado el examen nacional de guía-intérprete (全国通訳案内士), que cubre historia, geografía, cultura y dominio de idiomas. Es el único estándar de calidad reconocido oficialmente en Japón.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Se deja propina a los guías en Japón?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La propina no es costumbre en Japón y a veces puede resultar incómoda. La mayoría de guías profesionales no esperamos propinas. Si quieres mostrar tu agradecimiento, una reseña positiva vale más que cualquier propina.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Puede el guía reservar mi transporte?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    En Japón, organizar el transporte para clientes requiere una licencia de agencia de viajes. La mayoría de guías independientes no podemos reservar trenes o autobuses por ti, pero te enseñamos exactamente cómo funciona el sistema y te recomendamos las mejores opciones.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["custom", "asakusa", "tsukiji-ginza"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "¿Cuánto Cuesta un Guía Privado en Tokio? Precios Reales 2026",
            description:
              "Un guía local con licencia oficial te explica los precios reales: desde ¥40,000 hasta ¥80,000. Sin comisiones de agencia. Qué incluye y cómo elegir.",
            author: {
              "@type": "Person",
              name: "Manabu",
              jobTitle: "National Government Licensed Guide Interpreter",
              url: "https://tanuki-tabi-travel.com/about",
            },
            datePublished: "2026-03-14",
            dateModified: "2026-03-14",
            publisher: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://tanuki-tabi-travel.com/es/blog/cuanto-cuesta-guia-privado-tokio",
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
            mainEntity: [
              {
                "@type": "Question",
                name: "¿El precio de un guía privado en Tokio es por persona o por grupo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La mayoría de guías privados en Tokio cobran por grupo, no por persona. Una familia de cuatro paga la misma tarifa total que una pareja.",
                },
              },
              {
                "@type": "Question",
                name: "¿Hay guías que hablen español en Tokio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, pero son pocos. La mayoría de guías con licencia en Tokio trabajan en inglés, chino o coreano. Los guías en español existen pero la oferta es limitada.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué diferencia hay entre un guía con licencia y sin licencia en Japón?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Los guías con licencia han aprobado el examen nacional de guía-intérprete (全国通訳案内士), que cubre historia, geografía, cultura y dominio de idiomas. Es el único estándar de calidad reconocido oficialmente en Japón.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puede un guía en Tokio reservar mi transporte?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En Japón, organizar el transporte para clientes requiere una licencia de agencia de viajes. La mayoría de guías independientes no pueden reservar trenes o autobuses, pero enseñan cómo funciona el sistema y recomiendan las mejores opciones.",
                },
              },
            ],
          }),
        }}
      />

      {/* FACT-CHECK REPORT
      Generated: 2026-03-14
      Updated: 2026-03-14 (web search verification)
      Status: KEY ITEMS VERIFIED

      WEB-VERIFIED (2026-03-14):
      - EUR conversions: UPDATED using 1 EUR ≈ 182 JPY (March 2026 rate)
      - USD conversions: UPDATED using 1 USD ≈ 160 JPY
      - OTA group tour prices (¥5,000-15,000/person): CONFIRMED via Viator/Civitatis
      - OTA private tour prices (¥20,000-50,000): CONFIRMED via GoWithGuide/Viator
      - OTA commission (20-30%): CONFIRMED (Viator ~20-25%, GetYourGuide ~20-30%)
      - Luxury agency prices (¥80,000+): CONFIRMED consistent with Walk Japan/Artisans of Leisure

      Category A verified:
      - Tanuki Tabi tour prices match tour pages
      - Per-group pricing confirmed
      - Kids no extra cost — consistent with site
      - Travel agency license framing matches KNOWN PROJECT FACTS

      Category B verified:
      - Spanish-speaking guide scarcity — factual
      - "tú" form used consistently
      - Cultural references work for both Spain and Latin America

      Items for Manabu to verify before publishing:
      1. EUR/JPY rate may fluctuate — recheck at actual publishing time
      2. License exam pass rate (10-20%) — verify current JNTO data
      */}
    </Layout>
  );
};

export default EsCuantoCuestaGuiaPrivadoTokio;
