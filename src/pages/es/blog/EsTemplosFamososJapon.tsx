// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsTemplosFamososJapon = () => {
  return (
    <Layout>
      <SEO
        title="Los templos más famosos de Japón: guía para entenderlos de verdad"
        description="Senso-ji, Fushimi Inari, Kinkaku-ji... Un guía oficial explica qué ver, cómo comportarse y qué significa cada elemento en los templos japoneses."
        canonicalPath="/es/blog/templos-famosos-japon"
        hreflang={[
          { lang: "es", path: "/es/blog/templos-famosos-japon" },
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
            <p className="text-label text-accent mb-3">Cultura Japonesa</p>
            <h1 className="heading-display text-foreground">
              Los Templos Más Famosos de Japón: Guía para Entenderlos de Verdad
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
              Cada vez que acompaño a un grupo por Kioto o Tokio, alguien me pregunta: "Manabu, ¿esto es un templo o un santuario?" Y no es una pregunta tonta. Al contrario, es probablemente la pregunta más importante que puedes hacerte antes de visitar los <strong className="text-foreground">templos famosos de Japón</strong>. Porque si no entiendes la diferencia, todo lo que veas — las puertas, los rituales, las estatuas — se convierte en un decorado bonito pero vacío.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Piénsalo así: un templo budista es como una iglesia católica, un santuario sintoísta es como una ermita o capilla del pueblo. Ambos son lugares sagrados, pero pertenecen a religiones completamente distintas, tienen arquitectura diferente y los rituales que se practican en cada uno no tienen nada que ver entre sí. Japón tiene más de 77.000 templos budistas y 80.000 santuarios sintoístas. Conviven en las mismas calles, a veces comparten el mismo recinto, y eso es precisamente lo que confunde a los visitantes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En esta guía voy a explicarte cuáles son los templos famosos de Japón que realmente merece la pena visitar, qué los hace especiales, y cómo comportarte en cada uno para que tu visita sea respetuosa y significativa. No es una lista de Wikipedia — es lo que yo, como guía con licencia nacional, les cuento a mis invitados sobre el terreno.
            </p>

            {/* Templo vs. Santuario */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Templo vs. Santuario: la Diferencia que Casi Nadie Entiende
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Antes de hablar de lugares concretos, necesitas entender esta distinción fundamental. No es un detalle técnico para eruditos: es la clave para que todo lo que veas en tu viaje tenga sentido.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Templos Budistas (tera/ji): Qué Son
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un templo budista — llamado <em>tera</em> o <em>ji</em> en japonés — es un lugar de culto budista. El budismo llegó a Japón desde China y Corea en el siglo VI, y con él vino toda una arquitectura y una estética que probablemente ya asocias con Japón: los Budas dorados, el incienso, las pagodas de varios pisos, los jardines zen de piedra y arena. Si vienes del mundo católico, piensa en un templo como una iglesia: hay un altar principal con una imagen sagrada (un Buda o un bodhisattva), los monjes viven y rezan allí, y los fieles acuden a pedir por sus difuntos o a meditar. De hecho, la mayoría de los funerales japoneses son budistas, exactamente igual que en España o Latinoamérica la mayoría de los funerales son católicos aunque mucha gente no vaya a misa regularmente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los templos suelen tener una puerta principal llamada <em>sanmon</em> (puerta de la montaña), a menudo custodiada por estatuas de guardianes feroces. Dentro encontrarás el <em>hondo</em> (salón principal), quemadores de incienso, campanas de bronce, y a veces cementerios adyacentes. Si ves una pagoda, estás en un templo. Si hueles incienso, estás en un templo. Si ves monjes con la cabeza rapada, estás en un templo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Santuarios Sintoístas (jinja): Qué Son
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un santuario sintoísta — <em>jinja</em> en japonés — es el lugar de culto del sintoísmo, la religión nativa de Japón. El sintoísmo no tiene fundador, no tiene libro sagrado, no tiene mandamientos. Es una religión animista que venera a los <em>kami</em>, que podríamos traducir como "espíritus" o "divinidades" de la naturaleza: el espíritu de una montaña, de un río, de un árbol centenario, del arroz, del viento. Si el templo budista es como una iglesia, el santuario sintoísta es como esas ermitas o capillas rurales que hay en cada pueblo de España, dedicadas a un santo patrón local. Pero en lugar de un santo, hay un kami — un espíritu del lugar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los santuarios se reconocen por la puerta <em>torii</em>, esa estructura en forma de letra griega pi (normalmente roja o naranja) que marca la frontera entre el mundo profano y el sagrado. Dentro del santuario hay un salón principal que alberga un objeto sagrado — un espejo, una espada o una joya — que representa al kami, pero que nunca se muestra al público. En los santuarios no hay monjes sino sacerdotes (<em>kannushi</em>), a menudo vestidos de blanco, y las sacerdotisas (<em>miko</em>) con sus hakama rojas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cómo Distinguirlos a Simple Vista (torii vs. mon)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              La regla más sencilla: si ves un <strong className="text-foreground">torii</strong> (la puerta con dos postes y dos travesaños), es un santuario sintoísta. Si ves una <strong className="text-foreground">mon</strong> (puerta grande con tejado y a menudo con estatuas de guardianes), es un templo budista. Otra pista: los nombres. Si el lugar termina en <em>-ji</em>, <em>-dera</em> o <em>-in</em>, es un templo budista (Senso-ji, Kiyomizu-dera, Byodo-in). Si termina en <em>-jinja</em>, <em>-taisha</em>, <em>-jingu</em> o <em>-gu</em>, es un santuario sintoísta (Fushimi Inari Taisha, Meiji Jingu, Toshogu). Ahora que tienes esta base, podemos hablar de los lugares concretos.
            </p>

            {/* Los 5 templos más famosos */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Los 5 Templos Más Famosos de Japón
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estos son los templos budistas que considero imprescindibles, tanto por su belleza como por lo que representan históricamente. Son algunos de los templos famosos de Japón que mis invitados nunca olvidan.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Senso-ji (Tokio) — El Más Visitado
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Senso-ji es el templo más antiguo de Tokio, fundado en el año 645. Está en Asakusa, y recibe unos 30 millones de visitantes al año. La entrada se hace a través de Kaminarimon, la "Puerta del Trueno", con su enorme farol rojo que probablemente ya hayas visto en fotos. Después cruzas Nakamise-dori, una calle comercial de 250 metros con tiendas de recuerdos y dulces tradicionales, hasta llegar al salón principal. Lo que mucha gente no sabe es que Senso-ji fue completamente destruido en los bombardeos de 1945 y reconstruido en los años 50. Pero eso no le resta autenticidad: para los japoneses, reconstruir un templo es un acto de fe, no una falsificación. Mi consejo: ve al amanecer, antes de las 7 AM. Tendrás el recinto casi para ti solo, y la luz sobre los techos curvos del templo es espectacular.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Kinkaku-ji (Kioto) — El Pabellón Dorado
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kinkaku-ji, el Pabellón Dorado, es probablemente la imagen más icónica de Kioto. Los dos pisos superiores están cubiertos de pan de oro real, y el reflejo en el estanque que lo rodea es, sencillamente, una de las vistas más bellas que he visto en mis años como guía. Originalmente fue la villa de retiro de un shogún del siglo XIV que, al morir, pidió que se convirtiera en templo zen. También fue incendiado — en este caso por un monje perturbado en 1950, un suceso que Mishima Yukio inmortalizó en su novela "El pabellón de oro". La versión actual es de 1955. Lo que recomiendo a mis invitados: no te limites a la foto del estanque. Recorre el jardín completo, fíjate en los pinos japoneses cuidadosamente podados y en la casa de té al fondo, donde puedes tomar matcha con vistas al recinto.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Todai-ji (Nara) — El Buda Gigante
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Todai-ji alberga el Daibutsu, un Buda de bronce de 15 metros de altura que pesa 500 toneladas. Es la estatua de Buda en bronce más grande del mundo, dentro del edificio de madera más grande del mundo (aunque la estructura actual, del siglo XVIII, es un 30% más pequeña que la original). Cuando entras al salón y ves al Buda por primera vez, la escala es genuinamente sobrecogedora — es de esos momentos en los que ninguna foto prepara para la realidad. Nara está a 45 minutos en tren desde Kioto, y la visita se combina perfectamente con un paseo por el Parque de Nara, donde más de mil ciervos caminan libres entre los visitantes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Kiyomizu-dera (Kioto) — La Terraza Sobre el Bosque
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kiyomizu-dera es famoso por su terraza de madera que sobresale 13 metros sobre la ladera de una montaña cubierta de árboles. La estructura se sostiene sin un solo clavo — toda la terraza descansa sobre 139 pilares de madera ensamblados a presión, una hazaña de ingeniería del siglo VIII. En otoño, cuando los arces se tiñen de rojo y naranja, las vistas desde la terraza son de las más espectaculares de todo Japón. En primavera, los cerezos en flor crean un efecto similar. El nombre Kiyomizu significa "agua pura" y hace referencia a la cascada Otowa que nace en el recinto, donde los visitantes beben agua con unos cazos largos para recibir bendiciones de salud, éxito en los estudios o suerte en el amor.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Byodo-in (Uji) — El que Sale en las Monedas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si sacas una moneda de 10 yenes de tu bolsillo, verás el Byodo-in grabado en la parte trasera. Este templo del siglo XI, en la pequeña ciudad de Uji (entre Kioto y Nara), fue diseñado para representar el paraíso budista en la tierra. El Salón del Fénix, con sus alas extendidas reflejándose en el estanque, es una obra maestra de la arquitectura Heian. Uji también es la capital japonesa del té verde, así que la visita se combina perfectamente con una degustación de matcha en alguna de las casas de té centenarias del pueblo. Es un destino que pocas guías turísticas priorizan, pero que mis invitados siempre agradecen haber conocido.
            </p>

            {/* Los 5 santuarios */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Los 5 Santuarios que Debes Conocer
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ahora pasamos al otro lado de la moneda: los santuarios sintoístas. Son igual de impresionantes que los templos famosos de Japón, pero la atmósfera es completamente diferente — más conectada con la naturaleza, más silenciosa, más misteriosa.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Fushimi Inari (Kioto) — Los Mil Torii Rojos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fushimi Inari Taisha es el santuario más fotografiado de Japón, y con razón. Miles de torii de color bermellón forman túneles que serpentean montaña arriba durante más de 4 kilómetros. Cada torii fue donado por una empresa o familia como ofrenda al kami Inari, deidad del arroz, la fertilidad y los negocios. Lo que la mayoría de los turistas no sabe es que la subida completa toma unas dos horas y que el 90% de los visitantes se da la vuelta en los primeros 20 minutos. Si sigues adelante, llegarás a zonas del sendero donde estarás prácticamente solo, rodeado de bambú y luz filtrada. Está abierto las 24 horas — una visita nocturna, con los torii iluminados solo por pequeñas linternas, es una experiencia sobrenatural.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Meiji Jingu (Tokio) — El Bosque en la Ciudad
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Meiji Jingu es un santuario dedicado al Emperador Meiji y a la Emperatriz Shoken, los artífices de la modernización de Japón a finales del siglo XIX. Lo extraordinario de Meiji Jingu no es el edificio en sí, sino el bosque que lo rodea: 70 hectáreas de árboles plantados artificialmente en 1920 por voluntarios de todo el país, que hoy forman un bosque maduro y denso en pleno centro de Tokio, a dos pasos de Shibuya y Harajuku. Cruzar el enorme torii de madera de ciprés (el más grande de Japón) y caminar por el sendero de grava entre los árboles es una de las transiciones más impactantes que puedes experimentar en Tokio: del caos urbano al silencio sagrado en cuestión de segundos.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Itsukushima (Miyajima) — El Torii en el Agua
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El torii flotante de Itsukushima, en la isla de Miyajima (cerca de Hiroshima), es una de las tres vistas más famosas de Japón según la tradición. Con la marea alta, el torii de 16 metros de altura parece flotar sobre el agua del mar. Con la marea baja, puedes caminar hasta su base. El santuario en sí también está construido sobre pilotes, de modo que con la marea alta parece emerger del agua como una aparición. La isla entera está considerada sagrada — históricamente no se permitían nacimientos ni muertes en ella, y los ciervos que la habitan se consideran mensajeros de los kami. La visita se combina naturalmente con Hiroshima, y es una excursión de un día que recomiendo siempre.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Sengen Taisha (Monte Fuji)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fujisan Hongu Sengen Taisha es el santuario principal dedicado al Monte Fuji, y técnicamente su jurisdicción abarca toda la cima de la montaña sagrada. Se encuentra en Fujinomiya, al sur del Fuji, y es el punto de partida espiritual de la peregrinación a la montaña más famosa de Japón. El recinto tiene una pagoda roja de cinco pisos (sí, un elemento budista dentro de un santuario sintoísta, porque durante siglos las dos religiones convivieron mezcladas) y unos cerezos que en primavera enmarcan al Monte Fuji de una forma que parece diseñada por un director de cine. Es un lugar poco visitado por los turistas internacionales, y precisamente por eso lo incluyo aquí.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Toshogu (Nikko) — El Mausoleo de un Shogun
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Toshogu es el mausoleo de Tokugawa Ieyasu, el shogún que unificó Japón y fundó la dinastía que gobernó durante 260 años de paz. A diferencia de la sobriedad zen que domina la mayoría de los templos famosos de Japón, Toshogu es una explosión de color, oro y ornamentación barroca. Más de 5.000 tallas decoran sus edificios: dragones, elefantes, aves del paraíso y, la más famosa, los tres monos sabios que "no ven, no oyen, no hablan". Nikko está a dos horas en tren desde Tokio y puede visitarse como excursión de un día. El bosque de cedros centenarios que rodea el complejo añade una capa de majestuosidad que ninguna foto consigue capturar.
            </p>

            {/* Cómo comportarse */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo Comportarse en Templos y Santuarios
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Uno de los aspectos que más valoran mis invitados es entender los rituales. No basta con ver un lugar bonito — cuando sabes qué hacer y por qué, la experiencia cambia completamente. Para una guía más detallada, puedes leer mi artículo sobre{" "}
              <Link to="/es/blog/etiqueta-templos-santuarios" className="text-accent hover:underline">
                etiqueta en templos y santuarios
              </Link>
              , pero aquí tienes lo esencial.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              La Purificación (temizu) — Como el Agua Bendita
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tanto en templos como en santuarios encontrarás una fuente de piedra con cazos de bambú o metal cerca de la entrada. Es el <em>temizuya</em>, y su función es ritual: purificarte antes de entrar al espacio sagrado. Es exactamente como la pila de agua bendita a la entrada de una iglesia católica — no es para beber, sino para limpiarte simbólicamente. El procedimiento es sencillo: tomas el cazo con la mano derecha y te lavas la mano izquierda, luego cambias de mano y te lavas la derecha, te enjuagas la boca discretamente (sin tragar) y finalmente inclinas el cazo para que el agua restante limpie el mango. Todo el proceso dura diez segundos y los japoneses lo valoran muchísimo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cómo Rezar Correctamente
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aquí es donde templos y santuarios divergen por completo. En un <strong className="text-foreground">templo budista</strong>, te acercas al altar, echas una moneda en la caja de ofrendas, juntas las palmas de las manos en silencio (sin dar palmadas) e inclinas la cabeza brevemente. Es como santiguarse y rezar una oración silenciosa. En un <strong className="text-foreground">santuario sintoísta</strong>, el protocolo es diferente: echas la moneda, haces dos reverencias profundas, das dos palmadas fuertes (para llamar la atención del kami), rezas en silencio y terminas con una reverencia final. La regla mnemotécnica que uso con mis invitados: "dos-dos-uno" — dos reverencias, dos palmadas, una reverencia final.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Los Goshuin — Como el Sello del Camino de Santiago
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Los <em>goshuin</em> son sellos caligráficos que los templos y santuarios estampan en un cuadernillo especial (<em>goshuincho</em>) como recuerdo de tu visita. Es un concepto muy similar a los sellos de la credencial del Camino de Santiago: vas coleccionando sellos en cada lugar sagrado que visitas. Cada goshuin es único, escrito a mano con tinta y pincel por un monje o sacerdote, e incluye el nombre del templo, la fecha y caracteres auspiciosos. Cuestan entre 300 y 500 yenes, y son, en mi opinión, el mejor recuerdo que puedes llevarte de los templos famosos de Japón. El goshuincho se compra en cualquier templo o santuario por unos 1.500 yenes.
            </p>

            {/* Recomendación según itinerario */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Mi Recomendación: Cuáles Visitar Según tu Itinerario
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Si solo tienes un día en Tokio:</strong> Senso-ji por la mañana temprano y Meiji Jingu por la tarde. Son dos experiencias completamente distintas — un templo bullicioso y festivo frente a un santuario sereno y boscoso — y juntas dan una visión muy completa de la espiritualidad japonesa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Si solo tienes un día en Kioto:</strong> Kinkaku-ji por la mañana, Fushimi Inari por la tarde (empieza la subida sobre las 15:00 para evitar las masas y llegar arriba al atardecer). Si te sobra tiempo, añade Kiyomizu-dera al caer la tarde — el barrio de Higashiyama que lo rodea es precioso para pasear.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Si tienes una semana completa:</strong> Añade Todai-ji y Nara como excursión de un día desde Kioto, Nikko como excursión desde Tokio, y si tu ruta incluye Hiroshima, Miyajima es una parada obligatoria. Byodo-in en Uji se visita fácilmente en la ruta entre Kioto y Nara.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sea cual sea tu itinerario, en nuestros{" "}
              <Link to="/es/tours/" className="text-accent hover:underline">
                tours privados
              </Link>
              {" "}siempre incluimos visitas a templos y santuarios con explicaciones detalladas de su historia, su arquitectura y sus rituales. No es lo mismo ver un torii que entender por qué está ahí.
            </p>

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas Frecuentes Sobre los Templos Famosos de Japón
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Cuánto cuesta entrar a los templos y santuarios?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La mayoría de los santuarios sintoístas son de acceso gratuito. Los templos budistas suelen cobrar una entrada de entre 300 y 600 yenes (2-4 euros aproximadamente). Algunos, como Senso-ji, son gratuitos. Kinkaku-ji cobra 500 yenes, Kiyomizu-dera 400 yenes y Todai-ji 600 yenes. Son precios muy accesibles comparados con las atracciones turísticas europeas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿A qué hora abren los templos y santuarios?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La mayoría abren entre las 6:00 y las 9:00 de la mañana y cierran entre las 16:30 y las 17:00. Fushimi Inari es una excepción notable porque está abierto las 24 horas. Los santuarios con recintos abiertos, como Meiji Jingu, suelen abrir al amanecer y cerrar al atardecer. Mi consejo general: llega a primera hora para evitar multitudes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Puedo hacer fotos en los templos?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  En los recintos exteriores, sí, casi siempre. En los interiores de los salones principales, generalmente no — busca carteles con una cámara tachada. Lo más importante: no uses flash, no hagas fotos a personas rezando sin su permiso, y no te pongas a grabar TikToks con gestos teatrales delante de un altar. El sentido común y el respeto son la mejor guía.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Necesito cubrirme para entrar?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A diferencia de las iglesias o mezquitas, los templos y santuarios japoneses no tienen código de vestimenta estricto. No necesitas cubrirte los hombros ni las piernas. Dicho esto, ropa excesivamente reveladora o camisetas con mensajes ofensivos pueden resultar irrespetuosas. Usa el sentido común: vistes para visitar un lugar sagrado, no para ir a la playa. Y recuerda que en algunos templos tendrás que quitarte los zapatos para entrar a los salones interiores, así que lleva calcetines limpios.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  ¿Cuál es el templo más importante de Japón?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Depende de a quién preguntes. En términos históricos, Todai-ji en Nara fue durante siglos el centro del budismo japonés. En términos de devoción popular, Senso-ji en Tokio recibe más peregrinos que ningún otro. En el ámbito sintoísta, el Gran Santuario de Ise (no incluido en esta lista porque requiere un viaje aparte) es el más sagrado. Para el viajero, no hay uno "más importante" — cada uno ofrece una experiencia distinta, y eso es precisamente lo que hace que visitar los templos famosos de Japón sea tan fascinante.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres visitar estos templos con un guía que te explique todo lo que estás viendo?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En nuestros tours privados por Tokio, Kioto y Nara, te llevo a los templos y santuarios más importantes con explicaciones detalladas de su historia, sus rituales y su significado. No es una visita turística al uso — es una inmersión cultural que transforma la manera en que ves Japón. Cada tour se adapta a tus intereses y a tu ritmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/" className="btn-accent">
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
            "headline": "Los Templos Más Famosos de Japón: Guía para Entenderlos de Verdad",
            "description": "Senso-ji, Fushimi Inari, Kinkaku-ji... Un guía oficial explica qué ver, cómo comportarse y qué significa cada elemento en los templos japoneses.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/templos-famosos-japon",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsTemplosFamososJapon;
