// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsYanakaTokio = () => {
  return (
    <Layout>
      <SEO
        title="Yanaka, el Tokio auténtico: ruta de 3 horas con guía japonés"
        description="Yanaka es el barrio que sobrevivió a los bombardeos de la guerra. Un guía oficial te lleva por sus calles, templos y la vida que desapareció del resto de Tokio."
        canonicalPath="/es/blog/yanaka-tokio-itinerario"
        hreflang={[
          { lang: "es", path: "/es/blog/yanaka-tokio-itinerario" },
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
            <p className="text-label text-accent mb-3">Guías de Barrios de Tokio</p>
            <h1 className="heading-display text-foreground">
              Yanaka, el Tokio Auténtico: Ruta de 3 Horas con un Guía Japonés
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
              Hay un Tokio que la mayoría de los viajeros nunca ven. No está en Shibuya, ni en Shinjuku, ni en las calles eléctricas de Akihabara. Está en Yanaka, un barrio donde el tiempo decidió detenerse hace décadas y donde todavía es posible caminar por calles que tienen el mismo aspecto que en los años cincuenta. Si tuviera que explicarlo con una imagen que un hispanohablante entienda, diría que Yanaka es como el Albaicín de Granada o el barrio de San Telmo en Buenos Aires — un lugar que se resiste al paso del tiempo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Llevo años caminando por este barrio como guía con licencia, y cada vez que traigo a alguien por primera vez, la reacción es la misma: silencio. No el silencio incómodo, sino el de quien descubre algo que no esperaba encontrar. En este artículo te comparto mi <strong className="text-foreground">yanaka tokio itinerario</strong> completo de tres horas, paso a paso, con los detalles que solo conoce alguien que ha recorrido estas calles cientos de veces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Yanaka no tiene rascacielos, ni luces de neón, ni tiendas de electrónica. Lo que tiene es algo mucho más difícil de encontrar: autenticidad. Y eso, en una megalópolis de catorce millones de personas, es un tesoro.
            </p>

            {/* Por qué Yanaka es diferente */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              ¿Por qué Yanaka es diferente al resto de Tokio?
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El barrio que los bombardeos no destruyeron
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para entender Yanaka hay que entender lo que le pasó a Tokio. En marzo de 1945, los bombardeos incendiarios destruyeron la mayor parte de la ciudad. Barrios enteros desaparecieron en una sola noche. Pero Yanaka, por una combinación de suerte geográfica y densidad de templos budistas que los bombarderos evitaron, sobrevivió casi intacto. Mientras el resto de Tokio se reconstruía con hormigón y acero, Yanaka siguió ahí, con sus casas de madera, sus callejones estrechos y sus pequeños comercios familiares.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Eso convierte a Yanaka en algo extraordinario: un fragmento vivo del Tokio de antes de la guerra. Cuando caminas por sus calles, no estás viendo una reconstrucción ni un museo al aire libre. Estás viendo el Tokio real, el que existía antes de que la modernidad lo transformara todo. Este es el punto de partida de cualquier <strong className="text-foreground">yanaka tokio itinerario</strong> que merezca la pena.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              La vida que desapareció del resto de la ciudad
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que más me conmueve de Yanaka no son los edificios. Son las personas. Aquí todavía viven las señoras que barren la entrada de su casa cada mañana, los abuelos que se sientan en bancos de piedra a charlar con los vecinos, los gatos que duermen al sol sin que nadie los moleste. Hay una floristería que lleva cuatro generaciones en la misma esquina. Hay una tienda de incienso que abre desde la era Meiji. Esta es la vida cotidiana japonesa que desapareció de Shibuya, de Roppongi, de casi todos los barrios que los turistas visitan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Cuando mis invitados me preguntan dónde pueden ver "el Japón de verdad", los traigo aquí. No a un templo famoso, no a un espectáculo de geishas. Los traigo a Yanaka, donde la verdad de Japón está en los detalles cotidianos: en el sonido de una campana de templo a las seis de la mañana, en el olor a arroz recién cocido que sale de una ventana abierta, en la reverencia silenciosa que hace un vecino al pasar frente a un jizo de piedra.
            </p>

            {/* Ruta de 3 horas */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Mi ruta de 3 horas por Yanaka (paso a paso)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es el <strong className="text-foreground">yanaka tokio itinerario</strong> exacto que hago con mis invitados. Tres horas a paso tranquilo, con paradas para comer, para contemplar y para entender la historia que hay detrás de cada rincón.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Inicio: Estación de Nippori y la salida norte
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Empezamos siempre en la estación de Nippori, salida norte. Es accesible con la línea JR Yamanote, lo que la hace fácil de alcanzar desde cualquier punto de Tokio. Nada más salir de la estación, el cambio es inmediato. Desaparece el ruido del tren y aparece un silencio que no esperarías encontrar a veinte minutos de Shinjuku. Aquí nos orientamos, miro a mis invitados a los ojos y les digo: "A partir de ahora, vamos a caminar despacio. Yanaka no se visita con prisa."
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Yanaka Ginza: la calle comercial de otro tiempo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La primera parada es Yanaka Ginza, una calle comercial de unos 170 metros que parece sacada de una película de Ozu. No te dejes confundir por el nombre: esta Ginza no tiene nada que ver con el distrito de lujo del centro. Aquí hay tiendas diminutas con toldos de tela, escaparates que se abren directamente a la calle y vendedores que gritan los precios del día como se hacía hace sesenta años. Hay carnicerías, tiendas de dulces tradicionales, pequeños puestos de menchi-katsu que llevan décadas friendo croquetas con la misma receta. El olor a aceite caliente y a salsa tonkatsu te acompaña toda la calle.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que hace especial a Yanaka Ginza es que no fue diseñada para turistas. Sus clientes son los vecinos del barrio: las señoras que compran el tofu para la cena, los padres que llevan a sus hijos a comprar un helado después del colegio. Tú, como visitante, eres un invitado en su vida cotidiana. Y eso es exactamente lo que hace que la experiencia sea tan auténtica.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El cementerio de Yanaka (sí, es un paseo)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sé lo que estás pensando: ¿un cementerio? En Japón, los cementerios no son lugares sombríos ni deprimentes. Son parques. El cementerio de Yanaka es uno de los más antiguos de Tokio, y en primavera se convierte en uno de los mejores lugares para ver cerezos en flor, mucho menos concurrido que Ueno o Shinjuku Gyoen. Entre las tumbas hay árboles centenarios, caminos de piedra y un silencio que invita a la reflexión. Aquí están enterrados samuráis del período Edo, artistas, escritores y personas que construyeron el Tokio moderno.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yo siempre me detengo junto a la tumba de Tokugawa Yoshinobu, el último shogún de Japón. Es una lápida modesta para un hombre que tuvo en sus manos el destino de un imperio. Les cuento a mis invitados su historia — cómo entregó el poder al emperador, cómo vivió sus últimos años pintando y haciendo fotografía — y siempre veo cómo la historia de Japón cobra vida de una manera que ningún libro de texto puede lograr.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Los templos escondidos del barrio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yanaka tiene más de setenta templos budistas concentrados en un área que puedes cruzar caminando en quince minutos. No son templos turísticos con entrada de pago y tienda de souvenirs. Son templos de barrio, donde los monjes viven, donde los vecinos van a rezar, donde los gatos duermen en los jardines de musgo. Cada uno tiene su propia personalidad: Tennoji con su gran Buda de bronce, Jokoji con su campana que marca las horas, Kannonji con su jardín de piedra escondido detrás de un muro que la mayoría de los visitantes pasan de largo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo que hago con mis invitados es elegir tres o cuatro templos según la temporada y el estado de ánimo del grupo. No se trata de ver todos, sino de entender cómo el budismo se integra en la vida diaria japonesa de una manera que los grandes templos turísticos de Kioto ya no pueden mostrar. En Yanaka, la espiritualidad no es un espectáculo: es parte del tejido del barrio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Yuyake Dandan: el mirador del atardecer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La ruta termina en Yuyake Dandan, una escalera de piedra que baja desde la zona alta del barrio hacia Yanaka Ginza. "Yuyake" significa "atardecer" y "dandan" significa "escalones". Los vecinos le pusieron ese nombre porque desde aquí se ven las puestas de sol más bonitas del barrio, con los tejados bajos de las casas recortados contra un cielo naranja. Si puedes planificar tu visita para llegar aquí a última hora de la tarde, la recompensa es extraordinaria. Es uno de esos momentos en los que entiendes por qué este <strong className="text-foreground">yanaka tokio itinerario</strong> es tan especial.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En los escalones suele haber gatos — Yanaka es famoso por sus gatos callejeros, y hay hasta una escultura de un gato tallada en madera en uno de los postes. Los vecinos los cuidan, les ponen agua y comida, y los gatos se dejan acariciar por los visitantes como si fueran los verdaderos dueños del barrio. Que, pensándolo bien, probablemente lo son.
            </p>

            {/* Qué comer */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué comer en Yanaka
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yanaka no es un barrio gastronómico como Tsukiji, pero tiene algo mejor: comida honesta, hecha por las mismas manos desde hace décadas, sin pretensiones ni precios inflados.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Los croquetas de menchi-katsu
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En Yanaka Ginza hay varias carnicerías que venden menchi-katsu recién frito: croquetas de carne picada empanadas y crujientes por fuera, jugosas por dentro. Cuestan entre 150 y 250 yenes y se comen de pie, envueltas en un papel que absorbe el aceite. Son la comida callejera perfecta del barrio — nada sofisticada, absolutamente deliciosa. Yo siempre compro una al inicio del paseo y otra al final. Es mi ritual.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Helado de sabores japoneses
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hay una heladería en Yanaka Ginza que ofrece sabores que no encontrarás en ningún otro lugar: sakura (flor de cerezo), kurogoma (sésamo negro), murasaki imo (boniato morado) y matcha intenso. Un cucurucho cuesta unos 350 yenes. Es especialmente perfecto en los meses cálidos, cuando el paseo por el barrio te deja con ganas de algo fresco. Pero incluso en invierno, los japoneses comen helado — no preguntes por qué, simplemente únete a la costumbre.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Los dulces tradicionales de las abuelas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hay tiendas de wagashi (dulces japoneses tradicionales) en Yanaka que llevan generaciones en la misma familia. Venden dorayaki, daifuku, manju y senbei hechos a mano cada mañana. Los precios son ridículamente bajos — 100 a 300 yenes por pieza — y la calidad es la misma que encontrarías en una tienda de wagashi de lujo en Ginza, pero sin la etiqueta de precio ni la pretensión. Muchas de estas tiendas están atendidas por señoras mayores que te envuelven cada dulce con un cuidado que te hace sentir que estás recibiendo un regalo, no comprando un producto.
            </p>

            {/* Cuándo ir */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cuándo ir a Yanaka
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Primavera: cerezos en el cementerio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De finales de marzo a principios de abril, el cementerio de Yanaka se transforma en un túnel de cerezos en flor. Los pétalos caen sobre las tumbas y los caminos de piedra, y la luz filtrada a través de las flores crea una atmósfera que es difícil de describir con palabras. Lo mejor de ver los cerezos aquí en lugar de en los parques más famosos es la tranquilidad: mientras miles de personas se amontonan en Ueno, en Yanaka puedes caminar bajo los cerezos prácticamente solo. Es, en mi opinión, el secreto mejor guardado de la temporada de sakura en Tokio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Otoño: el mejor momento
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si me preguntas cuándo hacer un <strong className="text-foreground">yanaka tokio itinerario</strong>, te diré que en otoño. De mediados de noviembre a principios de diciembre, los arces japoneses se tiñen de rojo y naranja, la temperatura es perfecta para caminar, y la luz de la tarde dorada convierte cada callejón en una postal. Es la temporada en la que Yanaka muestra su mejor versión, y es cuando yo más disfruto guiando aquí.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Entre semana vs. fin de semana
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Siempre entre semana.</strong> Los fines de semana, especialmente los sábados por la mañana, Yanaka Ginza se llena de visitantes japoneses y la experiencia pierde parte de su encanto íntimo. Entre semana, sobre todo por la mañana, el barrio es tuyo: las calles están tranquilas, las tiendas tienen menos cola, y puedes hablar con los vendedores sin prisa. Si tu viaje solo te permite ir en fin de semana, intenta llegar antes de las 10 de la mañana o después de las 3 de la tarde.
            </p>

            {/* Para viajeros repetidores */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Yanaka para el viajero que ya conoce Tokio
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Por qué este barrio enamora a los viajeros repetidores
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muchos de mis invitados son personas que ya han estado en Tokio dos, tres, incluso cinco veces. Han visto Senso-ji, han cruzado Shibuya, han comido en Tsukiji. Vienen a Yanaka buscando algo diferente, y lo encuentran. No es mejor ni peor que el Tokio moderno — es otro Tokio, uno que existía antes de los trenes bala y los rascacielos, y que sigue existiendo gracias a los vecinos que se niegan a dejar que desaparezca.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si es tu primer viaje a Tokio, este <strong className="text-foreground">yanaka tokio itinerario</strong> te dará una perspectiva que cambiará completamente tu forma de entender la ciudad. Y si ya conoces Tokio, te mostrará la capa más profunda, la que está debajo de las luces y el ruido. Puedes combinar esta ruta con otros barrios de la zona — en mi{" "}
              <Link to="/es/blog/itinerario-tokio-5-dias" className="text-accent hover:underline">
                itinerario de 5 días por Tokio
              </Link>
              {" "}explico cómo encajar Yanaka en un viaje más amplio.
            </p>

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas frecuentes sobre Yanaka
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Cómo llego a Yanaka?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La forma más fácil es tomar la línea JR Yamanote hasta la estación de Nippori y usar la salida norte. Desde Tokio Station son unos 12 minutos, desde Shinjuku unos 20 minutos. También puedes llegar a la estación de Sendagi en la línea Chiyoda del metro, que te deja más cerca del cementerio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Cuánto tiempo necesito?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un mínimo de dos horas para ver lo esencial. Tres horas si quieres comer con calma y entrar en algunos templos. Medio día si quieres combinar Yanaka con el cercano parque de Ueno. Mi <strong className="text-foreground">yanaka tokio itinerario</strong> guiado dura tres horas, que es el tiempo ideal para absorber el barrio sin agotarte.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Hay tiendas en inglés/español?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No. Y esa es parte de su encanto. Yanaka es un barrio japonés para japoneses. Los carteles están en japonés, los vendedores hablan japonés, y los menús están en japonés. Es precisamente por eso que un <strong className="text-foreground">yanaka tokio itinerario</strong> con guía tiene tanto valor: yo me encargo de traducir, explicar y conectarte con las personas del barrio de una manera que sería imposible por tu cuenta.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Se puede combinar con otros barrios?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sí. Yanaka está a diez minutos a pie del parque de Ueno, lo que permite combinar ambos en un día completo. También puedes conectar con Nezu y Sendagi, que junto con Yanaka forman el área conocida como "Yanesen" — tres barrios tradicionales que conservan la misma atmósfera. En nuestro tour cubrimos los puntos más interesantes de esta zona extendida.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Merece la pena un tour guiado?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Soy guía, así que mi respuesta puede parecer parcial, pero voy a ser honesto: Yanaka se puede visitar por libre. Puedes caminar por Yanaka Ginza, comprar un menchi-katsu y hacer unas fotos bonitas. Sin embargo, la diferencia entre pasear por Yanaka solo y hacerlo con alguien que conoce cada templo, cada historia y cada rincón escondido es enorme. Con un guía, el barrio te habla. Sin un guía, es bonito pero mudo. Tú decides qué experiencia prefieres.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres descubrir el Tokio que sobrevivió al tiempo?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En nuestro tour por Yanaka, te llevaré por los callejones, templos y rincones que no aparecen en ninguna guía. Te contaré las historias que hacen que cada piedra y cada puerta tengan sentido. Caminaremos despacio, comeremos lo que comen los vecinos, y terminaremos viendo el atardecer desde Yuyake Dandan. Sin prisas, sin multitudes — solo el Tokio auténtico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/yanaka" className="btn-accent">
                  Reservar Tour por Yanaka
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
            "headline": "Yanaka, el Tokio Auténtico: Ruta de 3 Horas con un Guía Japonés",
            "description": "Yanaka es el barrio que sobrevivió a los bombardeos de la guerra. Un guía oficial te lleva por sus calles, templos y la vida que desapareció del resto de Tokio.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/yanaka-tokio-itinerario",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsYanakaTokio;
