// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsPropinasenJapon = () => {
  return (
    <Layout>
      <SEO
        title="Propinas en Japón: lo que necesitas saber (lo explica un guía local)"
        description="En Japón no es costumbre dejar propina. La mayoría de japoneses no están acostumbrados a recibirla y pueden sentirse confundidos. Un guía oficial explica por qué y cómo mostrar agradecimiento."
        canonicalPath="/es/blog/propinas-en-japon"
        hreflang={[
          { lang: "es", path: "/es/blog/propinas-en-japon" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/asakusa-kaminarimon-gate.jpg"
          alt="Puerta Kaminarimon en Asakusa, entendiendo la cultura de las propinas en Japón"
          className="w-full h-full object-cover"
          loading="eager"
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
            <p className="text-label text-accent mb-3">Cultura Japonesa</p>
            <h1 className="heading-display text-foreground">
              Propinas en Japón: Lo Que Necesitas Saber
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
            {/* La primera vez que intenté rechazar una propina */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              La primera vez que intenté rechazar una propina
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Fue en 2019, un día caluroso de agosto en Asakusa. Acababa de terminar un tour de seis horas con una familia encantadora de la Ciudad de México: papá, mamá, dos hijos adolescentes y la abuela, doña Carmen, que a sus 74 años caminó más que todos nosotros juntos. Habíamos recorrido Senso-ji, cruzado el barrio de Yanaka, almorzado ramen en un sitio diminuto donde la abuela declaró que "esto sí es caldo de verdad", y terminamos el día viendo el atardecer desde el mirador del Tokyo Skytree.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando nos despedimos, el papá, Roberto, lo recuerdo perfectamente, me extendió un sobre. Lo abrí pensando que era una tarjeta de agradecimiento. Dentro había 10.000 yenes. "Para ti, Manabu, te lo mereces", me dijo con una sonrisa enorme. Y ahí empezó una de las situaciones más incómodas de mi carrera como guía.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Intenté devolverlo. Roberto insistía. Yo declinaba. La abuela intervino: "Muchacho, en México esto es lo normal, no seas grosero". Y ahí estaba yo, un guía japonés, intentando explicar en español por qué aceptar esa propina me hacía sentir genuinamente incómodo, mientras una señora mexicana de 74 años me llamaba "grosero" por no aceptarla. La escena duró cinco minutos. Los hijos se reían. Yo sudaba más que durante todo el verano de Tokio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Finalmente logré explicarles, con mucho cariño y algo de torpeza, que en Japón las propinas no funcionan como en México, España o Argentina. No es que no las queramos. Es que nuestra cultura tiene una forma completamente distinta de entender el servicio, la hospitalidad y el agradecimiento. Y eso es exactamente lo que quiero explicarte hoy: todo lo que necesitas saber sobre las <strong className="text-foreground">propinas en Japón</strong>.
            </p>

            {/* ¿Por qué no se dan propinas en Japón? */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Por qué no se dan propinas en Japón?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si vienes de un país hispanohablante, la idea de no dejar propina probablemente te resulte extraña. En México, dejar el 10-15% es casi obligatorio. En España, redondear la cuenta o dejar unas monedas es lo habitual. En Argentina, el 10% es la norma. Pero en Japón, la costumbre es radicalmente diferente, y la razón es más profunda de lo que imaginas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El concepto de "omotenashi" (hospitalidad japonesa)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En japonés existe una palabra que no tiene traducción exacta al español: <strong className="text-foreground">omotenashi</strong>. Se traduce a menudo como "hospitalidad", pero es mucho más que eso. Omotenashi significa anticiparse a las necesidades del otro sin esperar nada a cambio. Es un servicio que nace del respeto, no de la expectativa de una recompensa económica.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando un camarero en Tokio te sirve con una atención impecable, cuando el taxista abre la puerta automáticamente y maneja con guantes blancos, cuando la recepcionista del hotel se inclina y te acompaña hasta el ascensor... no lo hacen pensando en la propina. Lo hacen porque ese nivel de servicio es su estándar profesional. Es su orgullo. Para un japonés, ofrecer un servicio excelente no es un extra que merece una recompensa adicional: es lo mínimo que debe hacerse.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esto contrasta muchísimo con la cultura de servicio en Latinoamérica o España, donde, seamos honestos, a veces la calidad del servicio está directamente ligada a la propina esperada. En Japón, esa conexión simplemente no existe. El buen servicio es una obligación moral, no una transacción.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El precio ya incluye el servicio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hay también una razón práctica. En Japón, el precio que ves en el menú o en la tarifa del taxi es el precio final. No hay cargos ocultos por servicio (salvo en algunos restaurantes de alta gama que cobran un "otoshi" o aperitivo de cortesía, pero eso es otro tema). Los salarios de los trabajadores de servicios ya están calculados dentro del precio del producto. Cuando pides un ramen de 1.000 yenes, ese precio incluye el coste del ingrediente, el alquiler del local, el salario justo del cocinero y su equipo. No falta nada. No necesitas añadir nada.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Compara esto con países donde los camareros dependen de las propinas para completar un salario mínimo insuficiente. En Japón, el sistema está diseñado para que el trabajador reciba una compensación digna sin depender de la generosidad variable del cliente.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Dar propina causa confusión... ¿de verdad?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la parte que más sorprende a mis invitados hispanohablantes. Dejar <strong className="text-foreground">propinas en Japón</strong> no es que sea ofensivo ni grosero, es que los japoneses simplemente no están acostumbrados a recibirlas. Nunca ha sido parte de su cultura ni de su sistema laboral. Cuando alguien intenta dejar una propina, la reacción más común no es enfado, sino genuina confusión: "¿Se olvidó el cambio? ¿Me cobré de menos?".
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              He visto a camareros correr detrás de turistas por la calle para devolverles el dinero que dejaron en la mesa, pensando que se lo habían olvidado. Es una escena que ocurre más de lo que crees, y siempre me hace sonreír porque refleja perfectamente el choque cultural.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Imagina que un compañero de trabajo te da un billete después de una reunión que fue bien. No te enfadarías, pero te quedarías desconcertado, simplemente no es así como funcionan las cosas en tu entorno. Eso es exactamente lo que sienten muchos japoneses al recibir una propina: desconcierto, no ofensa.
            </p>

            {/* ¿Y en hoteles de lujo? ¿Y en ryokan? */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Y en hoteles de lujo? ¿Y en ryokan?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La regla general de no dejar <strong className="text-foreground">propinas en Japón</strong> tiene algunos matices según el tipo de alojamiento. Vamos a verlos uno por uno.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Hoteles internacionales
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En cadenas hoteleras internacionales como el Ritz-Carlton, el Four Seasons o el Park Hyatt de Tokio (sí, el del "Lost in Translation"), el personal está acostumbrado a recibir huéspedes de todo el mundo. Si dejas propina, no se ofenderán. Probablemente la acepten con una inclinación cortés. Pero no es esperada ni necesaria. Estos hoteles ya incluyen cargos de servicio del 10-15% en la factura. Estás cubierto.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ryokan tradicional (la excepción que confirma la regla)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aquí viene la parte interesante. En los ryokan tradicionales, esas posadas japonesas con tatami, futon, onsen y cena kaiseki servida en tu habitación, existe una costumbre que se parece un poco a la propina, pero que en realidad es otra cosa: el <strong className="text-foreground">"kokorozuke"</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El kokorozuke es un gesto de agradecimiento anticipado que se entrega al nakai-san (la persona que atiende tu habitación) al inicio de tu estancia, no al final. Se coloca dinero, generalmente entre 1.000 y 5.000 yenes, dentro de un sobre decorado llamado "pochibukuro", y se entrega con ambas manos y una inclinación. No es obligatorio, y muchos ryokan modernos lo rechazan educadamente. Pero en ryokan de alta gama muy tradicionales, es un gesto que se aprecia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La diferencia clave con la propina occidental es el momento: se da antes del servicio, no después. No es una recompensa por un buen servicio recibido, sino una muestra de respeto y confianza por adelantado. Es sutil pero importante.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/ryokan-nakai-kimono-greeting.jpg"
                alt="Una nakai-san en elegante kimono recibiendo a los huéspedes en la entrada de un ryokan tradicional japonés"
                loading="lazy"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Una nakai-san en un ryokan tradicional — el kokorozuke es el único contexto donde un regalo monetario puede ser apropiado
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Restaurantes y taxis
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En restaurantes y taxis, la respuesta es sencilla: no dejes propina. Nunca. En los restaurantes, paga exactamente lo que dice la cuenta. En los taxis, el taxímetro marca el precio final, no redondees hacia arriba, no dejes el cambio. De hecho, los taxis japoneses tienen un sistema de cambio automático y el conductor te devolverá hasta el último yen. Intentar dejar propina en un taxi puede crear una confusión incómoda, especialmente si hay barrera de idioma. Simplemente paga, di "arigatou gozaimasu" y bájate. Perfecto.
            </p>
            <figure className="my-8">
              <img
                src="/images/tours/night-tour-omoide-yokocho.jpg"
                alt="Mostrador animado de yakitori en Omoide Yokocho en Shinjuku con comensales y cocineros en ambiente ahumado"
                loading="lazy"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Una izakaya típica de mostrador en Shinjuku — la intimidad entre cocinero y cliente forma parte de la experiencia, y la propina rompería esa dinámica
              </figcaption>
            </figure>

            {/* Cómo mostrar agradecimiento sin propina */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo mostrar agradecimiento sin propina
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entiendo la frustración. Vienes de una cultura donde la propina es la forma natural de decir "hiciste un trabajo increíble". Y de repente estás en Japón, recibes el mejor servicio de tu vida, y no puedes dejar ni una moneda. ¿Qué haces? Hay formas de agradecer que en Japón valen más que cualquier billete.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Palabras mágicas en japonés
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nada nos alegra más que un visitante que intenta hablar algo de japonés. Un simple <strong className="text-foreground">"arigatou gozaimasu"</strong> (muchas gracias) dicho con sinceridad vale más que 10.000 yenes en un sobre. Si quieres subir de nivel, prueba con <strong className="text-foreground">"gochisousama deshita"</strong> al salir de un restaurante. Significa algo como "fue un festín, gracias por la comida" y es lo que decimos los japoneses al terminar de comer. Te garantizo que el chef te mirará con sorpresa y una sonrisa enorme.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Otra expresión poderosa: <strong className="text-foreground">"osewa ni narimashita"</strong>, que significa "gracias por cuidar de mí". Es perfecta al despedirte de un guía, del personal de un ryokan o de cualquier persona que te haya atendido con dedicación. Es formal, respetuosa y demuestra que entiendes algo de la cultura japonesa.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Una carta o regalo pequeño
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En Japón, la cultura del regalo (omiyage) es profundísima. Si quieres agradecer de forma especial a alguien (el personal de un ryokan, un guía turístico, un profesor), un pequeño regalo de tu país es infinitamente más valioso que dinero. Puede ser algo sencillo: una caja de chocolates, un llavero típico, unas galletas artesanales de tu región. Lo importante no es el valor económico, sino el gesto de haber pensado en esa persona.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Y si no trajiste nada de tu país, una carta escrita a mano, incluso en español, incluso con errores, es un tesoro. Yo guardo cada carta que he recibido de mis invitados. Las releo cuando tengo un día difícil. Un billete de 10.000 yenes se gasta. Una carta se guarda para siempre.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/japanese-elegant-gift-wrapping.jpg"
                alt="Cajas de regalo japonesas elegantemente envueltas con lazos de cinta azul, representando el arte del regalo en Japón"
                loading="lazy"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                En Japón, la presentación importa tanto como el regalo — un pequeño obsequio bellamente envuelto dice más que el dinero
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Una reseña online (lo que más valoran hoy)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En el mundo actual, una reseña honesta y detallada en Google, TripAdvisor o en la plataforma que sea tiene un impacto enorme. Para un pequeño restaurante en Tokio, una reseña en español de un viajero hispanohablante puede atraer a decenas de nuevos clientes. Para un guía turístico como yo, una reseña es lo que me permite seguir haciendo lo que amo. Si el servicio fue excepcional, escríbelo. Menciona nombres, describe lo que te gustó, sé específico. Eso sí que es la mejor "propina" que puedes dar en Japón en 2026.
            </p>

            {/* Lo que sí puedes hacer */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Lo que sí puedes hacer (y que los japoneses valoran más)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Más allá de las <strong className="text-foreground">propinas en Japón</strong>, o la ausencia de ellas, hay comportamientos que los japoneses apreciamos profundamente en nuestros visitantes. Son pequeños gestos que demuestran respeto y que, créeme, no pasan desapercibidos.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ser puntual y respetuoso
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En Japón, llegar puntual no es una virtud: es lo mínimo. Llegar cinco minutos antes es lo ideal. Llegar tarde, aunque sea cinco minutos, sin avisar es considerado una falta de respeto significativa. Sé que en muchos países hispanohablantes la relación con el tiempo es más flexible (la famosa "hora latina"), y no hay nada malo en eso en su contexto. Pero cuando estés en Japón, hacer el esfuerzo de ser puntual comunica más respeto que cualquier propina.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Intentar usar palillos (de verdad, nos alegramos)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No tienes que ser un experto. No importa si se te cae el arroz. Lo que importa es el intento. Cuando un visitante agarra los palillos e intenta comer como lo hacemos nosotros, aunque sea con dificultad y risas, nos encanta. Es una señal de curiosidad y respeto por nuestra cultura. Y si realmente no puedes, no pasa nada: pide un tenedor sin vergüenza. Pero inténtalo primero. Si quieres practicar, te recomiendo empezar con el edamame, es el modo fácil de los palillos.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Aprender dos o tres frases
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ya mencioné "arigatou gozaimasu" y "gochisousama deshita". Añade <strong className="text-foreground">"sumimasen"</strong> (disculpe/perdón, usado para llamar la atención del camarero o pedir paso) e <strong className="text-foreground">"itadakimasu"</strong> (se dice antes de comer, como un "buen provecho" pero dirigido a la comida y a quienes la prepararon). Con estas cuatro frases, te garantizo que recibirás sonrisas por todo Japón. Es como cuando un turista japonés llega a España y dice "muchas gracias" o "está delicioso" con acento, te derrite el corazón, ¿verdad? Pues funciona exactamente igual aquí. Si quieres descubrir más sobre la gastronomía japonesa y qué probar durante tu viaje, echa un vistazo a nuestra{" "}
              <Link to="/es/blog/que-se-come-en-japon" className="text-accent hover:underline">
                guía sobre qué se come en Japón
              </Link>
              .
            </p>

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas frecuentes sobre las propinas en Japón
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Es obligatorio dejar propina en Japón?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No. En Japón no existe la costumbre de dejar propina en ningún servicio cotidiano: ni en restaurantes, ni en taxis, ni en hoteles, ni en peluquerías. El servicio está incluido en el precio y los trabajadores reciben salarios que no dependen de propinas. No dejar propina es lo normal y lo esperado.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Qué pasa si dejo propina?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  En la mayoría de los casos, el personal intentará devolvértela. Pueden correr detrás de ti pensando que olvidaste tu cambio. En hoteles internacionales probablemente la acepten sin problema, pero en restaurantes locales, izakayas o taxis, lo más probable es que genere confusión, simplemente no están acostumbrados. No te preocupes: nadie se enfadará contigo, pero es mejor tenerlo en cuenta.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Y en un tour privado?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A diferencia de restaurantes o taxis, los guías turísticos trabajamos en un espacio intercultural donde el tema de las propinas surge naturalmente. La respuesta honesta: las propinas son absolutamente bienvenidas y las recibimos con gratitud. Si tuviste una gran experiencia en el tour y quieres mostrar tu agradecimiento con una propina, no dudes en hacerlo, estaré encantado de aceptarla. Dicho esto, nunca son esperadas ni obligatorias. Y lo que también valoramos enormemente es una reseña sincera, una recomendación a tus amigos, o esa carta escrita a mano que mencioné antes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Existe alguna excepción?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La única excepción notable es el kokorozuke en ryokan tradicionales de alta gama, donde se puede entregar un sobre con 1.000-5.000 yenes al nakai-san al inicio de tu estancia. También, en algunos restaurantes de alta cocina, el personal puede aceptar un gesto de agradecimiento si se presenta de forma discreta y envuelto en un sobre. Pero incluso en estos casos, no es obligatorio ni esperado.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Cómo se dice "gracias" en japonés?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La forma más común y educada es <strong className="text-foreground">"arigatou gozaimasu"</strong> (se pronuncia a-ri-ga-to go-zai-mas). La versión informal entre amigos es simplemente "arigatou". Después de comer, di "gochisousama deshita". Y al despedirte de alguien que te ha atendido, "osewa ni narimashita" es perfecta. Con estas tres expresiones, comunicarás más gratitud que con cualquier billete.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres descubrir Japón con un guía local que habla tu idioma?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ahora que sabes que no necesitas preocuparte por las <strong className="text-foreground">propinas en Japón</strong>, lo único que te queda es disfrutar. En nuestros tours privados te acompaño personalmente por Tokio, Kioto y más allá, explicándote no solo los lugares sino la cultura que hay detrás, como esta historia de las propinas. Sin prisas, sin grupos grandes, y con toda la autenticidad de un guía japonés con licencia oficial. La mejor forma de agradecerme será esa sonrisa cuando pruebes tu primer ramen de verdad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Ver Nuestros Tours Privados
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Hacer una Pregunta
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Propinas en Japón: Lo Que Necesitas Saber",
            "description": "En Japón no es costumbre dejar propina. La mayoría de japoneses no están acostumbrados a recibirla y pueden sentirse confundidos. Un guía oficial explica por qué y cómo mostrar agradecimiento.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/propinas-en-japon",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsPropinasenJapon;
