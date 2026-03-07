// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsTsukiji2026 = () => {
  return (
    <Layout>
      <SEO
        title="Tsukiji en 2026: mi ruta gastronómica como guía local"
        description="Un guía oficial de Tokio comparte su ruta personal por el mercado de Tsukiji en 2026: qué puestos visitar, qué probar primero y cómo comer como un japonés."
        canonicalPath="/es/blog/tsukiji-2026"
        hreflang={[
          { lang: "es", path: "/es/blog/tsukiji-2026" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/tsukiji-tamagoyaki.jpg"
          alt="Tamagoyaki en el mercado de Tsukiji 2026"
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
            <p className="text-label text-accent mb-3">Gastronomía Japonesa</p>
            <h1 className="heading-display text-foreground">
              Tsukiji en 2026: Mi Ruta Gastronómica Como Guía Local
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
              Voy a contarte algo que no suelo compartir con mis grupos: mi ruta personal por Tsukiji. No la ruta del guía turístico, sino la del tipo que lleva más de diez años caminando estos callejones y que sabe exactamente a qué puesto ir primero, qué bocado pedir en cada esquina y cuándo el mercado de Tsukiji en Tokio huele mejor que en ningún otro momento del día. Esto es lo que como yo cuando voy a Tsukiji por placer, no por trabajo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hay muchas guías sobre el mercado Tsukiji Tokio. Algunas te dan listas de tiendas, otras te cuentan la historia del mercado. Esta no es ninguna de esas. Esto es un diario gastronómico: una mañana conmigo, paso a paso, bocado a bocado. Porque la mejor forma de conocer Tsukiji no es leer sobre él, sino caminar a mi lado mientras desayuno.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Y una cosa más: todo lo que leerás aquí está actualizado a marzo de 2026. Los precios, los puestos, las novedades. El mercado Tsukiji Tokio cambia más rápido de lo que la gente cree, y si tu información tiene más de un año, probablemente ya no sirve.
            </p>

            {/* Mi mañana típica en Tsukiji */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Mi mañana típica en Tsukiji (el diario de un guía)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los días que no tengo tour, me gusta llegar temprano. No a las cinco de la mañana como un mayorista, pero sí antes de que los callejones se llenen. Tengo mi rutina, mis paradas fijas y mis pequeños rituales. Te los voy a contar como si caminaras conmigo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              7:30 — Llegada y primer café
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Llego por la salida A1 de la estación Tsukiji. El aire ya huele a carbón y salsa de soja. Antes de meterme en los callejones, me paro en una cafetería pequeña en la esquina de Harumi-dori que casi nadie conoce. No es bonita, no tiene Instagram, pero el café de filtro cuesta 250 yenes y está caliente y fuerte. Me lo tomo de pie, mirando cómo los comerciantes abren sus persianas. Este momento de calma antes del ruido es parte de la experiencia. No lo cambiaría por nada.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              8:00 — La primera parada: tamagoyaki recién hecho
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mi primera comida siempre es tamagoyaki. Siempre. Hay algo especial en comer una tortilla japonesa recién salida de la plancha, todavía humeante, con esa capa exterior ligeramente caramelizada y un interior esponjoso que se deshace en la boca. Voy a Yamachou o a Shouro, dependiendo de mi humor: Yamachou si quiero algo dulce, Shouro si me apetece la versión con dashi. Cuesta 150 yenes. Ciento cincuenta yenes. Por uno de los bocados más satisfactorios de Tokio. Me como el palito entero caminando hacia los callejones del interior, y la mañana empieza oficialmente.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              8:30 — El callejón del marisco a la parrilla
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aquí es donde Tsukiji pasa de mercado a fiesta gastronómica. El callejón central, el que está justo detrás de la calle principal, es un espectáculo para los sentidos a esta hora: el humo de las parrillas de carbón se mezcla con el vapor del arroz, los vendedores gritan sus ofertas y el olor a marisco fresco a la brasa te envuelve por completo. Yo me quedo parado frente a mi puesto favorito de vieiras — el de la esquina con el toldo azul — y espero a que las vieiras de Hokkaido caigan sobre la plancha. El sonido del chisporroteo. La mantequilla derritiéndose sobre la concha. El primer mordisco, con los dedos ligeramente quemados porque no puedo esperar. Esto es Tsukiji para mí.
            </p>

            {/* Los 7 bocados imprescindibles */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Los 7 bocados imprescindibles en 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de años probando prácticamente todo lo que ofrece el mercado Tsukiji Tokio, he reducido mi lista a siete bocados que nunca me salto. Cada uno tiene su momento y su puesto. Esta es mi selección personal, la que recomiendo a amigos, no a turistas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              1. Vieira de Hokkaido a la plancha
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La estrella indiscutible. Una vieira gigante de Hokkaido, abierta sobre la parrilla de carbón, con un chorrito de salsa de soja y una nuez de mantequilla que burbujea y se dora en la concha. La carne es dulce, firme y tiene ese punto de ahumado que solo consigues con el carbón binchotan. Entre 500 y 800 yenes según el tamaño. No te comas una — cómete dos. La primera la devoras, la segunda la saboreas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              2. Uni fresco (erizo de mar)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sé que el uni da miedo a mucha gente. Esa textura cremosa, ese color naranja intenso. Pero si alguna vez vas a probarlo, que sea aquí. El uni fresco del mercado Tsukiji Tokio no tiene nada que ver con el que has probado fuera de Japón. Busca cajitas individuales con lóbulos firmes, de color naranja brillante o amarillo dorado. Un buen uni sabe a océano concentrado, dulce y salino al mismo tiempo, con una textura que se disuelve en la lengua como mantequilla fría. Precio: 500 a 1.500 yenes según el origen. El de Hokkaido es el rey, pero el de Sanriku es mi secreto mejor guardado.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              3. Sushi de pie en barra
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Olvídate de las colas de dos horas en los restaurantes famosos. Mi forma favorita de comer sushi en Tsukiji es en las barras de pie — tachigui-zushi, como decimos en japonés. Te pones codo con codo con oficinistas y compradores del mercado, ves al itamae formar cada pieza a centímetros de tu cara, y comes sushi de una frescura absurda por 2.000 a 3.000 yenes el set de ocho a diez piezas. Sin reserva, sin espera, sin ceremonias. Solo pescado increíble y arroz perfectamente sazonado.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              4. Tamagoyaki de Yamachou
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ya lo mencioné, pero merece su propio punto. El tamagoyaki de Yamachou es dulce, ligeramente caramelizado por fuera y con una textura interior que recuerda a un bizcocho húmedo. Lo hacen capa a capa en sartenes rectangulares especiales, y puedes verlo en directo: cada capa se asa, se enrolla, se asa de nuevo. Es hipnótico. A 150 yenes el palito, es la mejor relación calidad-precio de todo el mercado. No te vayas de Tsukiji sin probarlo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              5. Wagyu en brocheta
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tsukiji no es solo marisco, y esta brocheta lo demuestra. Wagyu de grado A4 o A5, cortado en dados gruesos, asado al carbón y sazonado solo con sal. El marmolado se derrite en la lengua, dejando un sabor a mantequilla y carne que es difícil de describir si no lo has experimentado. Entre 800 y 1.500 yenes dependiendo del corte. Sí, es un capricho. Pero un capricho que merece cada yen.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              6. Dashimaki tamago (la versión salada)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si el tamagoyaki dulce de Yamachou es el postre, el dashimaki tamago es el plato principal. Esta versión salada está hecha con abundante caldo dashi, lo que le da una textura más jugosa y temblorosa — casi como un flan de huevo. Shouro lo hace especialmente bien. Es el bocado que pido cuando quiero algo reconfortante, algo que me recuerde a la cocina casera japonesa. Mismo precio, misma magia, sabor completamente diferente. Prueba los dos y decide tu favorito.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              7. Helado de matcha para cerrar
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de tanto salado y tanto umami, el cuerpo pide algo dulce y frío. Mi cierre perfecto es un helado soft de matcha en Matsueda. Usan matcha Uji de Kioto, el bueno de verdad, y se nota: el sabor es intenso, ligeramente amargo, con un aroma que te llena la nariz antes de que el helado toque tus labios. Un cono cuesta 400 a 500 yenes. Me lo como caminando hacia la salida del mercado, despacio, saboreando los últimos minutos de mi mañana en Tsukiji.
            </p>

            {/* Lo nuevo en Tsukiji este año */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Lo nuevo en Tsukiji este año
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El mercado Tsukiji Tokio no es un museo — es un organismo vivo que cambia constantemente. Cada vez que voy, noto algo nuevo: un puesto que no existía hace tres meses, un producto que antes no se ofrecía, un cambio sutil en la atmósfera. Esto es lo que he visto cambiar en los últimos meses.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Puestos que han abierto en 2025-2026
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Han aparecido al menos tres puestos nuevos que merecen atención. Uno se especializa en onigiri artesanales con rellenos de marisco del mercado — imagina un onigiri relleno de salmón ahumado con queso crema, o de atún con wasabi fresco rallado al momento. Otro es un puesto de gyutan (lengua de ternera) a la parrilla que ha traído la especialidad de Sendai al corazón de Tsukiji. Y el tercero es una pequeña barra de ramen de mariscos que usa un caldo hecho con cabezas de langostino y bonito — intenso, complejo y completamente adictivo. Los tres son puestos pequeños, sin pretensiones, con colas cortas y precios honestos.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lo que ha cambiado desde la pandemia
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El Tsukiji de 2026 es diferente al de 2019, y en muchos sentidos es mejor. La pandemia obligó a muchos puestos a reinventarse: algunos empezaron a ofrecer comida para llevar que antes solo servían sentado, otros incorporaron menús en inglés por primera vez, y casi todos actualizaron sus sistemas de pago. El mercado también es ligeramente menos caótico que antes — algunos de los callejones se han reorganizado para facilitar el flujo de personas, y hay más señalización. Pero la esencia no ha cambiado: sigue siendo un lugar donde puedes comer increíblemente bien, rodeado de comerciantes que llevan generaciones perfeccionando lo que hacen.
            </p>

            {/* Presupuesto real */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Presupuesto real: cuánto gasto yo en una mañana
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la pregunta que todo el mundo quiere hacer pero nadie se atreve. Así que voy a ser completamente transparente. Estos son mis gastos reales en una mañana típica en el mercado Tsukiji Tokio, desglosados en dos rutas según el presupuesto.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ruta económica (menos de 3,000 yenes)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Es perfectamente posible comer de maravilla en Tsukiji sin gastar una fortuna. Mi ruta económica: café de filtro (250 yenes), dos palitos de tamagoyaki (300 yenes), una brocheta de calamar a la parrilla (400 yenes), un onigiri artesanal (350 yenes) y un helado de matcha para cerrar (450 yenes). Total: 1.750 yenes. Sí, menos de 12 euros. Y si quieres añadir una vieira (600 yenes) o un par de piezas de sushi sueltas (500 yenes), sigues por debajo de los 3.000 yenes. La clave está en comer como un japonés: porciones pequeñas, variedad alta, y disfrutar caminando.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ruta gourmet (5,000-8,000 yenes)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando quiero darme un capricho — y seamos sinceros, Tsukiji es el lugar perfecto para eso — la cosa cambia. Set de sushi en barra (2.500 yenes), vieira gigante de Hokkaido (800 yenes), cajita de uni fresco (1.200 yenes), brocheta de wagyu A5 (1.500 yenes), dashimaki tamago (150 yenes) y helado de matcha (450 yenes). Total: alrededor de 6.600 yenes, unos 42 euros. Por ese precio, has comido sushi de primera, marisco a la brasa, la mejor ternera del mundo y un postre artesanal. En cualquier restaurante de Tokio, esa experiencia costaría el triple.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Efectivo vs. tarjeta en 2026
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Buenas noticias: la situación del pago en Tsukiji ha mejorado mucho. En 2026, estimo que el 60-70% de los puestos aceptan algún tipo de pago electrónico — ya sea tarjeta de crédito, Suica/Pasmo o PayPay. Pero mi consejo sigue siendo el mismo: <strong className="text-foreground">lleva al menos 3.000-5.000 yenes en efectivo</strong>. Algunos de los mejores puestos, especialmente los más antiguos y tradicionales, siguen siendo solo efectivo. Y no hay nada más frustrante que encontrar la vieira perfecta y no poder pagarla. Los cajeros automáticos más cercanos están en el 7-Eleven de Harumi-dori, a dos minutos del mercado.
            </p>

            {/* Preguntas frecuentes */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas frecuentes
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Cuánto tiempo necesito?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mínimo 90 minutos si quieres comer con calma y explorar los callejones principales. Lo ideal son dos a dos horas y media. Más de tres horas es excesivo a menos que seas un verdadero fanático de la gastronomía japonesa. Yo suelo estar entre hora y media y dos horas cuando voy por mi cuenta.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Puedo desayunar en Tsukiji?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Absolutamente, y de hecho es lo que recomiendo. Muchos puestos abren entre las 7:00 y las 8:00 AM, y a esa hora el mercado está tranquilo y la comida está en su punto más fresco. Llega con el estómago vacío. No desayunes en el hotel. Tu desayuno es Tsukiji.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Hay opciones sin pescado?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Más de las que imaginas. Tamagoyaki (huevo), wagyu en brocheta (ternera), onigiri artesanales (arroz con diversos rellenos), dorayaki (tortitas dulces con judías rojas), helado de matcha y café de especialidad. También hay puestos de encurtidos japoneses, frutas frescas de temporada y tofu artesanal. No es un mercado exclusivamente de pescado — es un mercado de comida japonesa en su sentido más amplio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Merece la pena un tour gastronómico?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Voy a ser honesto aunque me beneficie decir que sí: depende de ti. Si hablas algo de japonés, te sientes cómodo navegando espacios caóticos y no te importa probar cosas sin saber exactamente qué son, puedes disfrutar Tsukiji perfectamente por tu cuenta con esta guía. Pero si es tu primera vez en Japón, si quieres entender la historia detrás de cada bocado, o si simplemente prefieres que alguien te lleve directamente a los mejores puestos sin perder tiempo — entonces un{" "}
              <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">
                tour gastronómico por Tsukiji
              </Link>
              {" "}marca una diferencia enorme. Mis invitados comen mejor, gastan menos y se van con historias que no encontrarían en ninguna guía.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Tsukiji o Toyosu para comer?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tsukiji, sin duda. Toyosu es un mercado mayorista moderno con una plataforma de observación — interesante si quieres ver la subasta de atún, pero la experiencia gastronómica no se compara. Tsukiji tiene diez veces más variedad, cien veces más ambiente y precios más accesibles. Si tienes tiempo para ambos, haz Toyosu al amanecer para la subasta y Tsukiji para desayunar. Pero si solo puedes elegir uno, elige Tsukiji.
            </p>

            {/* Enlace interno adicional */}
            <p className="text-muted-foreground leading-relaxed mt-8 mb-8">
              Si quieres seguir explorando la gastronomía japonesa más allá de Tsukiji, te recomiendo mi{" "}
              <Link to="/es/blog/que-comer-en-japon" className="text-accent hover:underline">
                guía completa sobre qué comer en Japón
              </Link>
              . Cubre desde ramen hasta kaiseki, pasando por los platos regionales que la mayoría de turistas nunca descubren.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres vivir esta ruta gastronómica conmigo?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En nuestro Tour a Pie por Tsukiji y Ginza, te llevo por exactamente esta ruta — los mismos puestos, los mismos bocados, las mismas historias que he compartido contigo aquí, pero en persona. Comeremos juntos, te presentaré a los vendedores que conozco por nombre, y terminaremos con un paseo tranquilo por Ginza. Sin trampas para turistas, sin bocados desperdiciados — solo la auténtica experiencia del mercado Tsukiji Tokio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/tsukiji-ginza" className="btn-accent">
                  Reservar Tour Tsukiji y Ginza
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
            "headline": "Tsukiji en 2026: Mi Ruta Gastronómica Como Guía Local",
            "description": "Un guía oficial de Tokio comparte su ruta personal por el mercado de Tsukiji en 2026: qué puestos visitar, qué probar primero y cómo comer como un japonés.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/tsukiji-2026",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsTsukiji2026;
