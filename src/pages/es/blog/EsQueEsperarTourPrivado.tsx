import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsQueEsperarTourPrivado = () => {
  return (
    <Layout>
      <SEO
        title="Qué Esperar en un Tour Privado en Tokio (2026)"
        description="Punto de encuentro, ritmo, flexibilidad, comida y plan de lluvia. Tu guía en Tokio te explica paso a paso cómo es un día de tour privado."
        canonicalPath="/es/blog/que-esperar-tour-privado-tokio"
        hreflang={[
          { lang: "en", path: "/blog/what-to-expect-private-tour-tokyo" },
          { lang: "es", path: "/es/blog/que-esperar-tour-privado-tokio" },
          { lang: "x-default", path: "/blog/what-to-expect-private-tour-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Qué Esperar" },
        ]}
      />

      {/* Imagen Hero */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tour-photos/tour-photo-1.webp"
          alt="Guía liderando un tour privado a pie por las calles de Tokio"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Encabezado del Artículo */}
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
            <p className="text-label text-accent mb-3">Consejos de Viaje</p>
            <h1 className="heading-display text-foreground">
              Qué Esperar en un Tour Privado en Tokio (Contado por Tu Guía)
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
              Escrito por Manabu, Guía Intérprete con Licencia del Gobierno Nacional de Japón (全国通訳案内士), con más de 500 tours privados completados en Tokio.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Última actualización: abril 2026
            </p>
          </div>
        </div>
      </section>

      {/* Contenido del Artículo */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Has decidido reservar un tour privado en Tokio. Pero, ¿qué pasa exactamente? ¿Dónde te encuentras con tu guía? ¿A qué ritmo se camina? ¿Y si llueve? ¿Y si necesitas un descanso o un baño?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Son las preguntas que nadie hace antes de reservar pero que todos desearían haber hecho después. Aquí te cuento, paso a paso, cómo es un día de tour privado de principio a fin. Sin misterios, sin letra pequeña.
            </p>

            {/* Antes del Tour */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Antes del Tour
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cómo Funciona la Reserva
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando me contactas, lo primero que te pregunto es: ¿Qué es lo que más te interesa? ¿Cuántas personas sois? ¿Alguna restricción alimentaria? ¿Cuál es vuestro nivel de energía (¿queréis caminar 15.000 pasos o preferís tomároslo con calma)? ¿Cuántos días tenéis en Tokio?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Con tus respuestas, te sugiero un formato de tour y creo un itinerario personalizado. No es una ruta estándar. Si te apasiona la gastronomía, dedicamos tiempo a restaurantes de callejón. Si te interesa la historia, profundizamos en los barrios de templos. Si viajas con niños, incluyo tiempo de juego y paradas para picar algo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo que Preparo Entre Bastidores
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Reviso la previsión meteorológica, verifico que todos los lugares planificados estén abiertos (los cierres por festivos son muy habituales en Japón), investigo exposiciones o eventos de temporada a lo largo de la ruta y preparo alternativas para cada parada importante. Si vamos a hacer un tour gastronómico, repaso mentalmente qué puestos y restaurantes están mejor en ese momento, porque la calidad en las zonas de mercado puede cambiar con la temporada.
            </p>

            <InlineCTAEs
              message="¿Ya tienes fecha para tu viaje a Tokio?"
              linkText="Reserva tu tour privado y diseñamos juntos tu día ideal →"
              href="/es/tours"
            />

            {/* La Mañana del Tour */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              La Mañana del Tour
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Dónde Nos Encontramos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Normalmente en el vestíbulo de tu hotel o en una estación cercana. Elijo puntos de encuentro que sean fáciles de identificar y que no resulten agobiantes. Si empezamos en una zona concreta como Asakusa, te propongo quedar junto a un punto de referencia visible cerca de la estación, no dentro de la estación en sí (las estaciones de tren en Tokio pueden ser auténticos laberintos).
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Qué Llevar
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Calzado cómodo.</strong> En un tour típico caminamos entre 8.000 y 15.000 pasos. Zapatos planos y ya usados son imprescindibles.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Efectivo.</strong> Muchas tiendas pequeñas, puestos de mercado y restaurantes tradicionales en Tokio todavía no aceptan tarjeta. Llevar entre ¥10.000 y ¥20.000 en efectivo es una cantidad segura para un día completo, incluyendo comida y compras pequeñas.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tarjeta IC (Suica/Pasmo).</strong> Para el tren y las tiendas de conveniencia. Si no tienes una, te ayudo a conseguirla al inicio del tour.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Una capa ligera.</strong> Los templos y algunos restaurantes pueden estar frescos incluso cuando hace calor afuera.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              De Lo que NO Tienes que Preocuparte
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              No necesitas estudiar el mapa del metro, memorizar frases en japonés ni reservar restaurantes. Para eso estoy yo, literalmente. Ven tal como eres.
            </p>

            {/* Durante el Tour */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Durante el Tour
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El Ritmo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vamos a tu ritmo, no al mío. Si quieres quedarte más rato en un sitio, nos quedamos. Si quieres avanzar rápido por una zona, seguimos adelante. Leo la situación constantemente. Si noto que alguien está cansado, sugiero una pausa en una cafetería antes de que nadie tenga que pedirlo. Si alguien está fascinado con algo, dejo que el momento respire.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esto es algo que mis clientes destacan una y otra vez: la diferencia entre un tour privado y un tour grupal es que aquí nadie te mete prisa. Si tus hijos necesitan un descanso, paramos. Si tus padres prefieren un ritmo más pausado, nos adaptamos. El tour se construye alrededor de ti, no al revés.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              La Comida
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En los tours de día completo, el almuerzo está integrado en el itinerario. No te llevo a restaurantes trampa para turistas. Te llevo a sitios donde yo como en mi día libre. A veces es un diminuto mostrador de ramen con 8 asientos, a veces una sobería de barrio, a veces sushi de pie donde el pescado llegó esa misma mañana. Siempre pregunto por restricciones alimentarias con antelación y tengo opciones planificadas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ¿Tienes alergia al marisco? ¿Eres vegetariano? ¿Viajas con alguien celíaco? No hay problema. Conozco los ingredientes de los platos locales y puedo comunicarme directamente con la cocina en japonés para asegurarme de que todo esté bien. Es una de las ventajas menos obvias de ir con un guía local.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Baños y Cuestiones Prácticas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sé dónde está cada baño limpio a lo largo de nuestra ruta. Los baños públicos de Tokio son en general excelentes (especialmente en los grandes almacenes y las estaciones de tren), pero algunos son más fáciles de encontrar que otros. Incluyo pausas naturales en el itinerario para que nadie tenga que pedirlo con incomodidad.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Fotos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Conozco los mejores puntos para fotos en cada lugar, incluidos los ángulos y los horarios que evitan las multitudes. Estoy encantado de haceros fotos de grupo durante todo el día. Si la fotografía es una prioridad, dímelo con antelación y diseñaré la ruta para pasar por los rincones más fotogénicos en los mejores momentos del día.
            </p>

            <InlineCTAEs
              message="Después de más de 500 tours, cada día sigue siendo diferente."
              linkText="Echa un vistazo a nuestros tours y elige el tuyo →"
              href="/es/tours"
            />

            {/* Flexibilidad */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              El Factor Flexibilidad
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la mayor diferencia entre un tour privado y cualquier otro tipo de tour. Todo puede cambiar, y ese es precisamente el objetivo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Plan de Lluvia
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si empieza a llover, tengo rutas alternativas para cada tour que priorizan zonas cubiertas: calles comerciales con techo, los pisos subterráneos de alimentación de los grandes almacenes (depachika), pasillos cubiertos de templos y mercados interiores. Algunos de mis mejores tours han sido en días lluviosos, porque las alternativas suelen ser más locales y menos turísticas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cierres Inesperados
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japón tiene muchos festivos irregulares, y los lugares populares a veces cierran sin previo aviso por eventos o mantenimiento. Verifico todo la mañana del tour, pero si algo está cerrado cuando llegamos, cambio de plan al instante. Nunca te quedarás frente a una puerta cerrada preguntándote qué hacer.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Desvíos Espontáneos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si nos topamos con un festival local, una ceremonia en un templo o una tienda con artesanía increíble, podemos detenernos y vivirlo. Algunos de los momentos más memorables de mis tours no estaban planeados. Esa es la magia de un tour privado que ningún itinerario fijo puede ofrecer.
            </p>
            <figure className="my-8">
              <img
                src="/images/tour-photos/asakusa-guest-selfie.webp"
                alt="Manabu con invitados disfrutando de un tour privado junto al río Sumida en Asakusa"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Cada tour es una conversación — aquí con invitados junto al río Sumida en Asakusa
              </figcaption>
            </figure>

            {/* Lo que No Hago */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Lo que No Hago
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No corro por un checklist.</strong> Si tu objetivo es ver 15 atracciones en un día, un tour privado no es el formato adecuado. Mis tours priorizan la profundidad sobre la cantidad. Verás menos lugares, pero los entenderás mucho mejor.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No llevo a tiendas por comisión.</strong> Jamás te llevaré a una tienda porque me pagan por llevar turistas. Cada recomendación es genuina. Si te sugiero un sitio, es porque creo que de verdad te va a gustar.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No recito discursos de memoria.</strong> No repito párrafos memorizados en cada parada. Hablo contigo, respondo preguntas, adapto lo que cuento según lo que te interesa y comparto historias que conectan los lugares con la vida real.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No miro el móvil.</strong> Cuando te guío, estoy presente al cien por cien. Mi teléfono es para la navegación y para consultar horarios, no para uso personal.
              </li>
            </ul>

            {/* Después del Tour */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Después del Tour
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El tour no termina cuando nos despedimos. Te envío:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Recomendaciones de restaurantes</strong> para el resto de tu viaje, basadas en lo que aprendí sobre tus gustos durante el tour
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Sugerencias de barrios</strong> para zonas que no cubrimos pero que encajan con tus intereses
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Consejos de transporte</strong> para llegar a tus próximos destinos por tu cuenta
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Respuestas a preguntas</strong> que surjan más adelante durante tu viaje. Escríbeme cuando quieras.
              </li>
            </ul>

            {/* Objeciones comunes */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Dudas Habituales (y Mis Respuestas Directas)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de más de 500 tours, estas son las preguntas que más me hacen antes de reservar. Te las respondo con total transparencia.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              "¿Y si no hablo nada de japonés?"
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No necesitas hablar japonés. Yo soy tu puente lingüístico. Pido en restaurantes, pregunto en tiendas, negocio en mercados y traduzco carteles, menús y señalizaciones. Muchos de mis clientes me dicen que lo que más valoran es poder relajarse sabiendo que alguien se encarga de la comunicación. Es una de esas cosas que no aprecias hasta que la experimentas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              "¿El tour es apto para niños?"
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Absolutamente. Adapto el tour a la edad de los niños: historias de samuráis y ninjas para los más pequeños, detalles de cultura pop y tecnología para los adolescentes. Incluyo paradas en parques, tiendas de gachapon (las máquinas de cápsulas que les fascinan) y snacks divertidos. Además, conozco todos los baños y zonas de descanso de la ruta, que con niños es información imprescindible.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              "¿Qué pasa si alguien del grupo tiene movilidad reducida?"
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Diseño rutas accesibles. Tokio tiene ascensores en la mayoría de estaciones y muchas zonas son planas. Ajusto el itinerario para minimizar escaleras, cuestas y distancias largas sin sacrificar la experiencia. Dímelo al reservar y lo planifico todo con antelación.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              "¿Y si queremos cambiar el plan a mitad de tour?"
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cambiamos. Así de sencillo. Es un tour privado, no una excursión en autobús. Si a mitad de camino decidís que preferís explorar un barrio diferente, probar más comida callejera o simplemente sentaros en una cafetería a descansar, nos adaptamos. La flexibilidad no es un extra: es la esencia misma de un tour privado.
            </p>

            {/* Preguntas Frecuentes */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Qué incluye un tour privado en Tokio?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Incluye un guía con licencia oficial dedicado exclusivamente a tu grupo, un itinerario diseñado a medida según tus intereses, acompañamiento en transporte público, recomendaciones gastronómicas personalizadas, ayuda con el idioma y un seguimiento posterior con recomendaciones para el resto de tu viaje. Los gastos de transporte, comidas y entradas corren por cuenta del visitante. Consulta nuestras{" "}
                    <Link to="/es/tours" className="text-accent hover:underline">
                      páginas de tours
                    </Link>{" "}
                    para ver los detalles y precios de cada experiencia.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Cómo es la experiencia con un guía privado en Tokio?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Imagina tener un amigo local que conoce cada rincón de la ciudad, habla el idioma y adapta el día a lo que tú quieres. No hay grupo al que seguir, no hay horario rígido, no hay prisas. Tú decides el ritmo, los temas y las paradas. Es la forma más personal y relajada de descubrir Tokio.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Cuánto se camina en un tour privado?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Entre 8.000 y 15.000 pasos en un tour típico, dependiendo de la duración y tus preferencias. Siempre adaptamos el ritmo a tu grupo. Si prefieres caminar menos, usamos más transporte público o incluimos más pausas. Nadie termina el día arrastrando los pies a menos que quiera.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Puedo reservar un tour para un solo día?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Por supuesto. De hecho, muchos viajeros empiezan con un solo día y luego reservan más. Un tour de día completo suele ser suficiente para orientarte en la ciudad, resolver tus dudas sobre transporte, cultura y comida, y darte la confianza para explorar el resto por tu cuenta. Si quieres más días, perfecto. Si con uno es suficiente, también.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Qué pasa si llueve el día del tour?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tengo rutas alternativas preparadas para cada tour que priorizan zonas cubiertas: mercados interiores, depachika (pisos gastronómicos de grandes almacenes), pasillos de templos y galerías comerciales. Algunos de mis mejores tours han sido en días de lluvia. Tokio bajo la lluvia tiene un encanto especial que la mayoría de turistas se pierde.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Necesito hablar japonés o inglés para el tour?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ofrezco tours en inglés y en español. Al ser guía con licencia nacional, mi nivel de idioma está verificado por examen gubernamental. Tú habla en el idioma que prefieras y yo me encargo de toda la comunicación con locales en japonés.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Listo para Vivir Tokio Así?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cuéntame sobre tu viaje y te sugiero el tour que mejor encaja con tus intereses, tu ritmo y tu grupo. Más de 500 grupos ya han vivido esta experiencia. El siguiente puedes ser tú.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/es/tours"
                  className="btn-accent"
                >
                  Reserva Tu Tour
                </Link>
                <Link
                  to="/es/contact?utm_source=blog&utm_medium=cta&utm_campaign=que-esperar"
                  className="btn-outline"
                >
                  Escríbeme Tus Dudas
                </Link>
              </div>
            </div>

          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["asakusa", "tsukiji-ginza", "custom"]} lang="es" showViewAll />

      {/* Esquema BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Qué Esperar en un Tour Privado en Tokio (Contado por Tu Guía)",
            description:
              "Punto de encuentro, ritmo, flexibilidad, comida y plan de lluvia. Tu guía en Tokio te explica paso a paso cómo es un día de tour privado.",
            author: {
              "@type": "Person",
              name: "Manabu",
              jobTitle: "Guía Intérprete con Licencia del Gobierno Nacional",
              url: "https://tanuki-tabi-travel.com/es/about",
            },
            datePublished: "2026-03-14",
            dateModified: "2026-04-06",
            publisher: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/que-esperar-tour-privado-tokio",
            },
          }),
        }}
      />

      {/* Esquema FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué incluye un tour privado en Tokio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Incluye un guía con licencia oficial dedicado a tu grupo, itinerario a medida, acompañamiento en transporte, recomendaciones gastronómicas, ayuda con el idioma y seguimiento posterior. Los gastos de transporte, comidas y entradas corren por cuenta del visitante.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo es la experiencia con un guía privado en Tokio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Es como tener un amigo local que conoce cada rincón de la ciudad, habla el idioma y adapta el día a lo que tú quieres. No hay grupo, no hay horario rígido, no hay prisas. Tú decides el ritmo, los temas y las paradas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto se camina en un tour privado en Tokio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Entre 8.000 y 15.000 pasos en un tour típico. Siempre adaptamos el ritmo a tu grupo. Si prefieres caminar menos, usamos más transporte público o incluimos más pausas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo reservar un tour para un solo día?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Muchos viajeros empiezan con un solo día y luego reservan más. Un tour de día completo suele ser suficiente para orientarte en la ciudad y darte confianza para explorar el resto por tu cuenta.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pasa si llueve el día del tour?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tenemos rutas alternativas para cada tour que priorizan zonas cubiertas: mercados interiores, depachika, pasillos de templos y galerías comerciales. Tokio bajo la lluvia tiene un encanto especial.",
                },
              },
              {
                "@type": "Question",
                name: "¿Necesito hablar japonés para el tour?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Ofrecemos tours en inglés y español. El guía se encarga de toda la comunicación con locales en japonés. Su nivel de idioma está verificado por examen gubernamental.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default EsQueEsperarTourPrivado;
