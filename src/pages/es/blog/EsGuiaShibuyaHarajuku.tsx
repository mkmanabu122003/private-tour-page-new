// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";

const EsGuiaShibuyaHarajuku = () => {
  return (
    <Layout>
      <SEO
        title="Guía de Shibuya y Harajuku | Qué Ver y Hacer en Tokio"
        description="Todo lo que necesitas saber sobre Shibuya y Harajuku escrito por un guía local. Cruce de Shibuya, Takeshita Street, Santuario Meiji y mucho más."
        canonicalPath="/es/blog/guia-shibuya-harajuku"
        hreflang={[
          { lang: "en", path: "/blog/shibuya-harajuku-guide" },
          { lang: "es", path: "/es/blog/guia-shibuya-harajuku" },
          { lang: "x-default", path: "/blog/shibuya-harajuku-guide" },
        ]}
      />

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
            <p className="text-label text-accent mb-3">Guías de Barrios de Tokio</p>
            <h1 className="heading-display text-foreground">
              Shibuya y Harajuku: Guía Local del Tokio Moderno
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                25 de febrero de 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Imagen Principal */}
      <div className="w-full h-[300px] md:h-[400px]">
        <img
          src="/images/blog/shibuya-harajuku-guide-hero.webp"
          alt="Guía de Shibuya y Harajuku - el lado moderno de Tokio"
          className="w-full h-full object-cover"
          fetchpriority="high"
          width={1600}
          height={900}
        />
      </div>

      {/* Contenido del Artículo */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Si Asakusa representa el viejo Tokio, los templos, las tradiciones, los rituales tranquilos de otra era, entonces Shibuya y Harajuku son el pulso creativo de la ciudad. Estos distritos vecinos se encuentran en el lado oeste del centro de Tokio, conectados por un corto paseo o una sola parada de tren, y sin embargo cada uno transmite una energía completamente diferente. Shibuya es frenético, comercial y vibrante con neón y ruido. Harajuku es un lugar de subculturas, experimentos de moda y declaraciones arquitectónicas. Juntos forman lo que muchos visitantes imaginan cuando piensan en el Tokio moderno.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Pero aquí va algo que la mayoría de las guías de viaje no te dirán: estos barrios están en constante evolución. Lo que estaba de moda el año pasado puede haber desaparecido hoy, reemplazado por algo más nuevo, más extraño o más interesante. El Shibuya y el Harajuku por los que guío a la gente ahora se ven bastante diferentes de los que mostraba a los visitantes hace cinco años. Manzanas enteras se han reconstruido, nuevos complejos se han levantado, y la cultura juvenil ha evolucionado de maneras que solo los locales pueden seguir. Esta guía cubre lo que realmente merece tu tiempo ahora mismo, no los consejos anticuados que encontrarás reciclados por todo internet.
            </p>

            {/* Cruce de Shibuya */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cruce de Shibuya: Cómo Disfrutarlo de Verdad
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Empecemos por lo obvio. El Cruce de Shibuya es la intersección peatonal más transitada del mundo, y sí, está a la altura de las expectativas, pero solo si lo vives correctamente. Demasiados visitantes cruzan una vez, se toman un selfie y siguen adelante. Eso es perder el sentido por completo. El cruce es una pieza viva de teatro urbano, y la mejor forma de apreciarlo es desde arriba antes de sumergirte en él tú mismo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Los mejores puntos de observación:</strong> El mirador más famoso es el Starbucks en la segunda planta del edificio Tsutaya, directamente frente al cruce. Es icónico, pero espera cola para un asiento junto a la ventana en horas punta. Una opción mejor para muchos visitantes es Mag's Park, el espacio de observación en la azotea del edificio Magnet by Shibuya 109. Es gratuito, menos concurrido de lo que esperarías, y te da una perspectiva de gran angular que fotografía de maravilla. Para el panorama definitivo, Shibuya Sky, el mirador en la cima del edificio Shibuya Scramble Square, ofrece una vista de 360 grados desde 230 metros de altura. Requiere entrada y es popular, así que reserva online con antelación, especialmente para los horarios al atardecer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Cuándo cruzar:</strong> Si quieres la sobrecarga sensorial total, ven un viernes o sábado por la noche entre las 7 y las 9 PM. Es cuando el tráfico peatonal alcanza su máximo y hasta 3.000 personas inundan la intersección en cada cambio de semáforo. Los reflejos del neón en el pavimento después de la lluvia dan fotos especialmente dramáticas. Las mañanas entre semana, por el contrario, son sorprendentemente tranquilas; puedes cruzar casi con calma y ver la intersección como la viven los commuters locales.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/shibuya-crossing-guide.webp"
                alt="Cómo disfrutar del Cruce de Shibuya - mejores puntos de observación"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                El Cruce de Shibuya desde arriba. Hasta 3.000 personas cruzan en cada cambio de semáforo
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pero el cruce es solo el principio. Demasiada gente trata el cruce como el destino en lugar de la puerta de entrada. Una vez que lo has observado, cruzado y capturado tus fotos, el verdadero Shibuya comienza en las calles entrelazadas que irradian hacia fuera desde esta famosa intersección. Ahí es donde esta guía realmente entra en juego.
            </p>

            {/* Más Allá del Cruce */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Más Allá del Cruce: Los Secretos Mejor Guardados de Shibuya
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mayoría de visitantes nunca se aventura más allá de una o dos manzanas del cruce, lo que significa que se pierden los barrios que le dan a Shibuya su verdadero carácter. Aquí están los lugares a los que llevo a la gente en mis tours, los sitios que premian la curiosidad y la disposición a explorar.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Nonbei Yokocho: El Callejón de los Bebedores
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Escondido detrás de las vías del tren a solo dos minutos a pie de la salida norte de la estación de Shibuya, Nonbei Yokocho es una estrecha callejuela de diminutos bares que parece pertenecer a otra década. Piensa en él como la respuesta de Shibuya al Golden Gai de Shinjuku: pequeños y atmosféricos establecimientos de bebidas con capacidad para unas seis u ocho personas cada uno. La diferencia es que Nonbei Yokocho es mucho menos turístico y tiene un ambiente más relajado y acogedor. Algunos de estos bares han sido regentados por los mismos propietarios durante 40 o 50 años. Las noches son el mejor momento para visitarlo, y no tengas miedo de entrar en un lugar que te llame la atención. La mayoría da la bienvenida a los recién llegados, incluso a los que no hablan japonés. Un simple "osusume kudasai" (su recomendación, por favor) te pondrá en marcha.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Center-gai y las Calles Laterales
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Center-gai (oficialmente renombrada "Basketball Street", aunque nadie la llama así) es la principal calle peatonal comercial de Shibuya, ruidosa y concurrida con cadenas de comida rápida y tiendas de ropa. Merece un paseo por el ambiente, pero los verdaderos hallazgos están en las estrechas calles laterales que se ramifican desde ella. Estos callejones más pequeños esconden izakayas con menús escritos a mano, diminutas barras de ramen con colas hasta la puerta, y tiendas de ropa vintage donde puedes encontrar piezas únicas. La regla general en Shibuya es simple: si una calle parece demasiado estrecha para molestarse, probablemente merezca la pena explorarla.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Shibuya Stream y la Zona del Río
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una de las transformaciones más dramáticas recientes de Shibuya es la zona alrededor del río Shibuya, al sur de la estación. El complejo Shibuya Stream se inauguró en 2018 y convirtió lo que era un cauce oculto cubierto de hormigón en un paseo ribereño al aire libre con restaurantes, cafeterías y zonas de descanso público. Es donde los oficinistas almuerzan y donde las parejas pasean los fines de semana por la tarde. La vibra es completamente diferente del caos del cruce: moderna, relajada, casi europea en sensación. Sigue el paseo del río hacia el sur y te encontrarás en una zona residencial sorprendentemente tranquila que la mayoría de turistas ni sabe que existe.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Dogenzaka: Más de lo que Aparenta
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dogenzaka es la calle en pendiente que sube la colina desde el cruce, y tiene fama de ser el distrito de los love hotels de Shibuya. Esa fama está justificada (verás muchas fachadas coloridas con tarifas por horas), pero Dogenzaka también alberga algunas de las mejores tiendas de ropa vintage y de segunda mano de Tokio. Tiendas como Ragtag, Flamingo y docenas de establecimientos independientes más pequeños venden desde marcas de diseñador a una fracción del precio de venta hasta americana vintage perfectamente seleccionada. Si te interesa la moda o el thrifting, Dogenzaka merece una tarde de exploración. Los love hotels, por cierto, son una parte fascinante de la cultura urbana japonesa, y con gusto explico su historia y papel social durante el tour; es más interesante de lo que podrías pensar.
            </p>

            {/* Harajuku */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Harajuku: Más que la Calle Takeshita
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Harajuku es sinónimo de cultura juvenil japonesa, y para muchos visitantes es el barrio que más les entusiasma ver. Pero Harajuku es mucho más que la única calle que la mayoría visita. Permíteme desglosar lo que hay aquí y cómo sacarle el máximo partido.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Calle Takeshita: Un Baño de Realidad
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Takeshita-dori es la famosa calle peatonal que va desde la estación de Harajuku hacia el sur hasta Meiji-dori. Es colorida, ruidosa y está repleta de creperies, puestos de bubble tea, tiendas de disfraces y merchandising kawaii. Esta es mi opinión sincera: es muy concurrida y muy turística, pero sigue siendo divertida. La clave es gestionar las expectativas. Esto no es un "auténtico secreto local", es un espectáculo, y los espectáculos tienen su propio valor. Visítala un día entre semana por la mañana si quieres poder moverte libremente, o atrévete con las multitudes del fin de semana si quieres la experiencia completa. En cualquier caso, dedícale entre 30 y 45 minutos. Es suficiente para empaparte sin que la sobrecarga sensorial se vuelva agotadora.
            </p>

            <figure className="my-8">
              <img
                src="/images/tours/harajuku-takeshita-street.webp"
                alt="Cat Street en Harajuku - la verdadera calle de la moda"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Cat Street, la verdadera calle de la moda de Harajuku, lejos de las multitudes de Takeshita
              </figcaption>
            </figure>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cat Street: La Verdadera Calle de la Moda
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Corriendo aproximadamente paralela a la calle Takeshita pero una manzana al sur, Cat Street (Kyuushibuya-gawa Yuuhodou) es donde los locales de Harajuku con conciencia de la moda realmente compran. Construida a lo largo de un antiguo cauce fluvial, es una calle sinuosa flanqueada por árboles con boutiques independientes, tiendas insignia de diseñadores, tiendas vintage y algunos de los mejores cafés de la zona. La atmósfera es completamente diferente de Takeshita: relajada, cuidada y genuinamente estilosa. Aquí es donde las marcas japonesas de streetwear prueban nuevos conceptos, donde diseñadores emergentes abren sus primeras tiendas, y donde verás locales vanguardistas montando conjuntos que no desentonarían en una revista. Si solo tienes tiempo para una calle de Harajuku, que sea Cat Street.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Omotesando: Un Paseo Arquitectónico
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Omotesando es el bulevar arbolado que va desde Harajuku hacia Aoyama, y es una de las calles más significativas arquitectónicamente del mundo. Prácticamente todas las grandes marcas de lujo han encargado a un arquitecto de talla mundial su tienda insignia aquí. Tadao Ando diseñó el complejo Omotesando Hills, con su característica rampa espiral de hormigón. Shigeru Ban creó el Nicolas G. Hayek Center con su fachada de cristal y acero que se abre completamente a la calle. El edificio de Dior por SANAA brilla como una cortina translúcida. Incluso si no te interesa ir de compras, pasear por Omotesando como galería de arquitectura al aire libre es una experiencia extraordinaria. Siempre les digo a los visitantes que miren hacia arriba: las fachadas de los edificios cuentan historias que los escaparates a nivel de calle nunca revelan.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/meiji-shrine-forest.webp"
                alt="Camino boscoso en el Santuario Meiji - escape tranquilo cerca de Harajuku"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                El camino arbolado hacia el Santuario Meiji, un mundo aparte de las multitudes de Harajuku
              </figcaption>
            </figure>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Santuario Meiji: Un Contraste Apacible
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A solo cinco minutos a pie del caos neón de la calle Takeshita, el Santuario Meiji (Meiji Jingu) se encuentra dentro de un parque boscoso de 70 hectáreas que parece un mundo completamente diferente. Dedicado al Emperador Meiji y a la Emperatriz Shoken, el santuario es uno de los sitios sintoístas más importantes de Tokio. La transición del exceso de cultura pop de Harajuku a los imponentes torii y los caminos de grava del santuario es uno de los contrastes más dramáticos de todo Tokio, y captura perfectamente lo que hace a esta ciudad tan interminablemente fascinante. Llega temprano por la mañana para la experiencia más serena, y estate atento a las procesiones nupciales tradicionales los fines de semana.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Parque Yoyogi: El Salón de Tokio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Adyacente al Santuario Meiji, el Parque Yoyogi es donde Tokio viene a relajarse, ensayar y actuar. Especialmente los fines de semana, encontrarás músicos callejeros, grupos de baile practicando coreografías, cosplayers posando para fotos y familias haciendo picnic en el césped. Durante la temporada de cerezos en flor es uno de los puntos de hanami (contemplación de flores) más populares de la ciudad. El parque es gratuito, abierto y ofrece una perspectiva completamente diferente de la vida en Tokio, una que tiene menos que ver con el consumo y más con la comunidad. Trae una manta y algo de beber, y simplemente siéntate un rato. Verás un lado de Tokio que la mayoría de itinerarios nunca menciona.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si quieres experimentar todo esto con un local que pueda conectar los puntos y compartir las historias detrás de lo que estás viendo, nuestro{" "}
              <Link to="/es/tours/shibuya-harajuku" className="text-accent hover:underline">
                Tour a Pie por Shibuya y Harajuku
              </Link>{" "}
              cubre estos barrios en profundidad, desde callejones traseros ocultos hasta el contexto cultural que transforma un simple paseo en una verdadera comprensión del Tokio moderno.
            </p>

            {/* Dónde Comer */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Dónde Comer
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una de las mejores cosas de Shibuya y Harajuku es la enorme densidad de opciones gastronómicas, desde aperitivos callejeros baratos hasta restaurantes de primer nivel. Aquí están mis recomendaciones para visitantes que quieren comer bien sin depender de los primeros resultados de Google (que tienden a llevarte a trampas para turistas).
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Comida Callejera de Harajuku: Los Clásicos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los crepes de Harajuku son una institución tokiota. Los crepes finos y doblados, rellenos de nata montada, fruta fresca, chocolate y helado, han sido un pilar de la calle Takeshita desde los años 70. Marion Crepes y Angels Heart son los originales, y siguen siendo buenos. Las tiendas de algodón de azúcar han explotado en popularidad en los últimos años, con locales que ofrecen enormes nubes coloridas de azúcar hilado que son tanto por la foto de Instagram como por el sabor. Son divertidas, efímeras y perfectamente Harajuku. Para algo más sustancioso, las calles laterales alrededor de Takeshita esconden excelentes puestos de takoyaki (bolas de pulpo) y pequeños restaurantes de curry que atienden a locales hambrientos en lugar de turistas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ramen de Shibuya y Más
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shibuya tiene algunos restaurantes de ramen genuinamente excepcionales, pero los mejores rara vez son los más visibles. Busca los lugares con cortas filas de oficinistas japoneses a la hora del almuerzo: esa es tu señal. Fuunji, justo al norte de la estación, es legendario por su tsukemen (fideos para mojar) con un caldo rico y concentrado. Para algo diferente, las calles traseras detrás de Shibuya 109 esconden excelentes barras de gyudon, establecimientos de soba de pie, y pequeños locales de curry donde un almuerzo contundente cuesta menos de 1.000 yenes. Las calles traseras de Omotesando, especialmente en dirección a Aoyama, albergan algunas de las cafeterías de almuerzo más encantadoras de Tokio. Estos pequeños locales independientes sirven hermosos menús del día (teishoku) con ingredientes de temporada, a menudo en espacios que parecen más el salón de alguien que un restaurante. Espera pagar entre 1.500 y 2.500 yenes por un almuerzo que costaría tres veces más en las zonas comerciales principales.
            </p>

            {/* Planes Nocturnos */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Planes Nocturnos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shibuya se transforma después del anochecer. El neón se intensifica, las multitudes pasan de compradores a juerguistas, y la energía del barrio cambia por completo. Si quieres vivir la vida nocturna de Tokio, Shibuya es uno de los mejores puntos de partida, y así es como disfrutarla de forma segura y agradable.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Puntos de Partida para la Vida Nocturna en Shibuya
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para una velada relajada, empieza en Nonbei Yokocho (el callejón que mencioné antes) o en uno de los bares de cerveza artesanal cerca de la estación. Shibuya tiene una excelente escena de cerveza artesanal, con locales como Mikkeller Tokyo y Goodbeer Faucets que ofrecen microcervecerías japonesas e internacionales en ambientes con estilo. Si buscas algo más animado, las calles alrededor de Center-gai tienen docenas de izakayas donde puedes pedir rondas de bebidas y pequeños platos al clásico estilo japonés de beber. Para ir de clubs, Shibuya alberga algunos de los locales más emblemáticos de Tokio, aunque la escena empieza tarde, típicamente después de medianoche.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Consejos de Seguridad para Ir de Bares como Turista
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tokio es una de las ciudades más seguras del mundo para la vida nocturna, pero unos pocos consejos de sentido común mejorarán tu experiencia. Quédate en lugares con menús visibles y precios publicados; esto evita cualquier cargo sorpresa. Ten cuidado con los captadores en la calle que te invitan a bares "especiales"; los establecimientos legítimos no necesitan reclutar clientes desde la acera. Muchos bares pequeños tienen un cargo por mesa (otoshi) de 300 a 500 yenes por persona, que típicamente incluye un pequeño aperitivo. Esto es práctica estándar, no una estafa. Si no estás seguro de un lugar, pregunta en la recepción de tu hotel o busca sitios con reseñas en inglés en Google Maps.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Último Tren: Conoce Tus Límites
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El consejo más importante sobre vida nocturna que le doy a cada visitante: conoce la hora de tu último tren. La mayoría de las líneas de tren y metro dejan de funcionar entre las 12 y las 12:30 AM, con las últimas salidas desde la estación de Shibuya variando según la línea y la dirección. Si pierdes el último tren, te enfrentas a un costoso viaje en taxi (de 3.000 a 10.000 yenes dependiendo de la distancia), quedarte fuera hasta que los primeros trenes se reanuden alrededor de las 5 AM, o encontrar un manga café o un hotel cápsula por unas horas. La primera opción cuesta dinero, la segunda cuesta energía, y la tercera es una aventura en sí misma. Mi recomendación: pon una alarma a las 11:30 PM. Eso te da un margen cómodo para terminar tu bebida, despedirte y llegar al andén sin correr. Si decides pasar toda la noche fuera, Shibuya tiene muchos establecimientos abiertos 24 horas, solo dosifícate.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres explorar Shibuya y Harajuku con un local que conoce cada callejón?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Desde tiendas vintage ocultas hasta las historias detrás de las obras maestras arquitectónicas de Omotesando, nuestro tour a pie da vida a estos barrios de una forma que ninguna guía puede igualar. Deja que un guía local con licencia te enseñe el Shibuya y Harajuku que la mayoría de visitantes nunca ve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/shibuya-harajuku" className="btn-accent">
                  Reservar Tour por Shibuya y Harajuku
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Hacer una Pregunta
                </Link>
              </div>
            </div>
          </article>
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
            "headline": "Shibuya y Harajuku: Guía Local del Tokio Moderno",
            "description": "Explora Shibuya y Harajuku como un local. Consejos de un guía con licencia sobre el Cruce de Shibuya, la Calle Takeshita, cafés ocultos y los mejores spots para fotos.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
            },
            "datePublished": "2026-02-25",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/guia-shibuya-harajuku",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsGuiaShibuyaHarajuku;
