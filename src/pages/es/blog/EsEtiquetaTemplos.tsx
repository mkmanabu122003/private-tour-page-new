// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsEtiquetaTemplos = () => {
  return (
    <Layout>
      <SEO
        title="Cómo Rezar en un Santuario Japonés: Reverencia-Aplauso y 5 Errores"
        description="Paso a paso: purificación en el temizuya, la secuencia de dos reverencias, dos aplausos y una reverencia, normas de fotos y vestimenta. Lo que un guía oficial en Tokio ve hacer mal a los turistas cada día."
        canonicalPath="/es/blog/etiqueta-templos-santuarios"
        hreflang={[
          { lang: "en", path: "/blog/japan-temple-shrine-etiquette" },
          { lang: "es", path: "/es/blog/etiqueta-templos-santuarios" },
          { lang: "x-default", path: "/blog/japan-temple-shrine-etiquette" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/senso-ji-temple-tokyo.webp"
          alt="Templo Senso-ji en Tokio, etiqueta en templos japoneses"
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
            <p className="text-label text-accent mb-3">Planifica tu Viaje</p>
            <h1 className="heading-display text-foreground">
              Cómo Rezar en un Santuario y Templo Japonés: La Forma Correcta (De un Guía Oficial)
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía Turístico con Licencia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                25 de febrero de 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, Guía Intérprete con Licencia del Gobierno Nacional (全国通訳案内士) con más de 500 tours por los templos y santuarios de Tokio.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Una de las preguntas más frecuentes que escucho en mis tours es: "¿Lo estoy haciendo bien?" Ya sea frente a un santuario preguntándose cuántas veces aplaudir, o dudando en la entrada de un templo sin saber si hacer una reverencia, los visitantes suelen preocuparse por cometer errores en los lugares sagrados de Japón. Entiendo perfectamente esa sensación; nadie quiere ofender sin querer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La buena noticia es que los japoneses aprecian genuinamente cualquier esfuerzo que hagas por participar de forma respetuosa. No necesitas ser perfecto. El simple hecho de que estés leyendo esta guía ya demuestra el tipo de consideración que los locales notan y valoran. La mayoría de los visitantes japoneses tampoco conocen todos los detalles de cada ritual; simplemente se acercan a estos lugares con una actitud tranquila y sincera.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dicho esto, conocer lo básico hará que tu experiencia sea mucho más significativa. En lugar de quedarte parado incómodamente mientras otros rezan, podrás participar y entender lo que estás haciendo. Esta guía cubre todo lo que necesitas saber, desde la diferencia fundamental entre templos y santuarios, hasta instrucciones paso a paso para la oración, la purificación y el comportamiento general. Empecemos por la pregunta más básica de todas.
            </p>

            {/* Temple vs Shrine */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Templo vs Santuario: ¿Cuál es la Diferencia?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Antes de profundizar en la etiqueta, es esencial entender la distinción entre templos y santuarios, porque las costumbres en cada uno son diferentes. Este es el punto más importante que debes comprender, y una vez que lo hagas, todo lo demás encajará de forma natural.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Los templos (寺 / tera)</strong> son budistas. Puedes identificarlos por sus grandes puertas de entrada llamadas <strong className="text-foreground">sanmon</strong>, la presencia de quemadores de incienso, estatuas de Buda o bodhisattvas, y pagodas. La atmósfera tiende a ser contemplativa y silenciosa. Ejemplos famosos incluyen Senso-ji en Asakusa, Kinkaku-ji (el Pabellón Dorado) en Kioto, y Kotoku-in en Kamakura, hogar del Gran Buda. Los nombres de los templos suelen terminar en "-ji," "-dera," o "-in."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Los santuarios (神社 / jinja)</strong> son sintoístas, de la tradición espiritual autóctona de Japón. La marca inconfundible de un santuario es la puerta <strong className="text-foreground">torii</strong>, esa icónica puerta bermellón que aparece en innumerables fotos de Japón. También verás shimenawa (cuerdas trenzadas sagradas), komainu (estatuas guardianas de leones-perro) y una sensación distintivamente abierta y conectada con la naturaleza. Los nombres de los santuarios suelen terminar en "-jinja," "-jingu," "-taisha," o "-gu." El Santuario Meiji en Harajuku y Fushimi Inari en Kioto son quizás los más famosos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Algo que sorprende a muchos visitantes: <strong className="text-foreground">muchos lugares sagrados contienen tanto un templo como un santuario</strong>. El budismo y el sintoísmo han coexistido en Japón durante más de mil años, y las dos tradiciones a menudo comparten el mismo recinto. Un ejemplo perfecto es la{" "}
              <Link to="/es/tours/asakusa" className="text-accent hover:underline">
                zona de Asakusa
              </Link>
              , donde el famoso Templo Senso-ji se encuentra justo al lado del Santuario de Asakusa. A primera vista parecen similares, pero los rituales son diferentes, y precisamente por eso es importante conocer la distinción.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Una regla sencilla: si ves una puerta torii, es un santuario. Si ves una gran estatua de Buda o un quemador de incienso, es un templo. En caso de duda, busca la señalización; la mayoría de los sitios principales tienen paneles informativos en inglés cerca de la entrada.
            </p>

            {/* Shrine Step-by-Step */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              En un Santuario: Paso a Paso
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los santuarios sintoístas siguen una secuencia específica de rituales que ha permanecido prácticamente igual durante siglos. Aquí tienes el proceso completo desde el momento en que llegas hasta el momento en que te vas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Entrar por la Puerta Torii
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Al acercarte a la puerta torii, detente brevemente y haz una <strong className="text-foreground">reverencia ligera</strong> antes de pasar. Este es tu saludo al kami (deidad) que reside en el recinto del santuario. Piensa en ello como llamar a la puerta antes de entrar en la casa de alguien. Una vez que hayas cruzado la puerta, <strong className="text-foreground">camina por los lados del sendero de acceso</strong>, no por el centro. El centro del camino, llamado <strong className="text-foreground">sei-chu</strong>, se considera el camino de la deidad. Caminar por el lado izquierdo o derecho muestra respeto al dejar libre el camino de la deidad. Notarás que la mayoría de los visitantes japoneses se desplazan naturalmente hacia un lado.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/nikko-toshogu-stone-torii-gate.webp"
                alt="Visitantes cruzando la puerta torii de piedra en el santuario Nikko Toshogu con la puerta Yomeimon al fondo"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Cruzando el torii de piedra en Nikko Toshogu — observa cómo los visitantes caminan naturalmente por los lados, dejando libre el camino central
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Temizu: La Purificación de Manos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Antes de acercarte al salón principal, encontrarás un pabellón de agua llamado <strong className="text-foreground">temizuya</strong> (o chozuya). Aquí es donde te purificas antes de encontrarte con la deidad. El ritual representa lavar las impurezas del mundo exterior. Esta es la secuencia correcta:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Paso 1:</strong> Toma el cucharón (hishaku) con la mano derecha y recoge agua de la pila.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Paso 2:</strong> Vierte agua sobre tu mano izquierda, dejándola fluir por las puntas de los dedos.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Paso 3:</strong> Pasa el cucharón a tu mano izquierda y vierte agua sobre tu mano derecha.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Paso 4:</strong> Pasa el cucharón de nuevo a tu mano derecha, recoge una pequeña cantidad de agua en la palma de tu mano izquierda y úsala para enjuagarte la boca. (No bebas directamente del cucharón.) Escupe el agua discretamente al lado de la pila, no dentro de ella.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Paso 5:</strong> Inclina el cucharón verticalmente para que el agua restante corra por el mango, limpiándolo para la siguiente persona. Coloca el cucharón boca abajo en el soporte.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No te preocupes por memorizar cada detalle; muchos temizuya ahora tienen carteles con instrucciones en inglés, y desde la pandemia, algunos han sido cerrados o simplificados. Si el agua no está fluyendo o los cucharones han sido retirados, simplemente puedes saltarte este paso.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/shrine-chozuya-dragon-purification.webp"
                alt="Fuente de purificación chozuya con caño en forma de dragón y cucharones de bambú en un santuario japonés"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Un chozuya con caño de dragón — busca los cucharones de bambú y sigue los cinco pasos de purificación
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Oración: Ni-hai, Ni-hakushu, Ichi-hai
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En el salón principal (haiden), verás una caja de ofrendas de madera (saisen-bako) y una cuerda gruesa con una campana. Este es el ritual estándar de oración:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Lanza una moneda</strong> en la caja de ofrendas. La moneda de <strong className="text-foreground">¥5</strong> es la tradicional, ya que la palabra para cinco yenes, "go-en," es homófona de "buena conexión" o "buena fortuna." Pero cualquier cantidad está bien.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Toca la campana</strong> agitando suavemente la cuerda (si la hay). Esto alerta a la deidad de tu presencia.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Haz dos reverencias profundas</strong> (ni-hai), aproximadamente en un ángulo de 90 grados desde la cintura.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aplaude dos veces</strong> (ni-hakushu): mantén las manos a la altura del pecho y aplaude con firmeza. Se dice que el sonido atrae la atención de la deidad y expresa alegría.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Con las manos juntas, ofrece un momento de oración silenciosa o reflexión.</strong> Puedes pedir un deseo, expresar gratitud o simplemente despejar tu mente.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Haz una reverencia profunda más</strong> (ichi-hai) para concluir.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La frase para recordar es <strong className="text-foreground">ni-hai, ni-hakushu, ichi-hai</strong>: dos reverencias, dos aplausos, una reverencia. Un pequeño número de santuarios tienen sus propias variaciones (Izumo Taisha usa cuatro aplausos en lugar de dos), pero 2-2-1 es lo correcto en la gran mayoría de los santuarios de todo Japón.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Omikuji y Ema
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de rezar, muchos visitantes disfrutan de dos actividades populares del santuario. Los <strong className="text-foreground">omikuji</strong> son papelitos de la fortuna que se sacan al azar (normalmente por ¥100-200). Las fortunas van desde dai-kichi (gran bendición) hasta dai-kyo (gran maldición). Si sacas una buena fortuna, llévala contigo como amuleto de la suerte. Si sacas una mala fortuna, la tradición es <strong className="text-foreground">atarla en el soporte de alambre designado o en las ramas de los árboles</strong> del santuario, dejando simbólicamente la mala suerte atrás. Se cree que el poder espiritual del santuario la neutraliza.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Los <strong className="text-foreground">ema</strong> son pequeñas tablillas de madera donde escribes un deseo o una oración. Compra una en la oficina del santuario (normalmente ¥500-1,000), escribe tu deseo en el lado en blanco (está perfectamente bien escribir en español o inglés, los kami entienden todos los idiomas), y cuélgala en el soporte designado para ema. Verás cientos de deseos colgados juntos, lo cual es en sí mismo una vista hermosa. Tómate un momento para leer algunos: encontrarás de todo, desde oraciones para exámenes hasta deseos de salud y esperanzas de matrimonio, lo que te ofrece una conmovedora ventana a lo que importa a las personas.
            </p>

            <InlineCTAEs />

            {/* Temple Step-by-Step */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              En un Templo: Paso a Paso
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La etiqueta en los templos budistas coincide en algunos aspectos con las costumbres de los santuarios, pero difiere en varios puntos importantes. La atmósfera general tiende a ser más silenciosa y contemplativa, reflejando el énfasis del budismo en la paz interior y la atención plena.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/nikko-ornate-temple-hall.webp"
                alt="Salón de templo budista ornamentado en Nikko con pilares rojos, detalles dorados y linternas de piedra"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Un salón de templo ricamente decorado en Nikko — los templos budistas suelen ser más ornamentados y contemplativos que los santuarios sintoístas
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Incienso: Purificación con Humo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muchos templos tienen un gran quemador de incienso (jokoro) cerca de la entrada del salón principal. Esta es una de las experiencias más distintivas de un templo. Compra una varilla de incienso en el puesto cercano (normalmente ¥100), enciéndela con la llama comunal y colócala vertical en el quemador lleno de arena. Luego, usa tus manos para <strong className="text-foreground">abanicarte el humo hacia ti</strong>. Se cree que el humo tiene propiedades curativas, así que dirígelo hacia cualquier parte de tu cuerpo que necesite atención. Muchos visitantes se abanizan el humo hacia la cabeza para la sabiduría, o hacia una zona lesionada para la curación. Verás a los visitantes locales haciendo esto con entusiasmo, y es un momento encantador de ritual compartido.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una nota importante: al encender el incienso, si la llama no se apaga sola, <strong className="text-foreground">agita la varilla suavemente para extinguir la llama</strong> en lugar de soplarla. En la tradición budista japonesa, soplar con la boca se considera impuro porque el aliento lleva las "impurezas" del cuerpo. Es un detalle pequeño, pero los locales lo notan y lo aprecian.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Oración: Silenciosa y Respetuosa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En un templo, el ritual de oración es diferente al de un santuario. Acércate al salón principal, lanza una moneda en la caja de ofrendas, y luego <strong className="text-foreground">junta las palmas de las manos (gassho) e inclina la cabeza en silencio</strong>. Cierra los ojos y ofrece un momento de oración silenciosa o reflexión. <strong className="text-foreground">No aplaudas</strong>, ya que aplaudir es una tradición sintoísta exclusiva de los santuarios. Este es el error más común que cometen los visitantes, y ahora que conoces la diferencia, estarás por delante de muchos turistas. En un templo: silencio. En un santuario: aplausos. Así de sencillo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Algunos templos, particularmente los de la tradición Zen, también pueden tener áreas específicas de meditación sentada donde puedes sentarte tranquilamente durante unos minutos. Si se ofrecen sesiones de meditación, son una manera maravillosa de experimentar la práctica budista directamente, pero siempre sigue las instrucciones del personal del templo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Quitarse los Zapatos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muchos templos requieren que te <strong className="text-foreground">quites los zapatos</strong> antes de entrar en las áreas interiores, particularmente los salones principales, las salas de tatami y las zonas de contemplación del jardín. Busca filas de zapatos cerca de la entrada o un zapatero; son señales claras de que debes quitarte los tuyos. La mayoría de los templos proporcionan bolsas de plástico para llevar tus zapatos o disponen de taquillas. Llevar calcetines limpios y sin agujeros es un consejo práctico que te ahorrará posibles momentos de vergüenza. En los meses más fríos, los suelos de los templos pueden ser bastante fríos, así que unos calcetines abrigados son un verdadero confort.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Normas de Fotografía
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las políticas de fotografía varían ampliamente entre templos. Las áreas exteriores y los jardines casi siempre se pueden fotografiar. Sin embargo, muchos templos <strong className="text-foreground">prohíben la fotografía dentro de sus salones principales</strong>, particularmente cerca de las zonas del altar y las estatuas sagradas. Busca siempre la señalización: el icono de una cámara con una línea roja es universal. En caso de duda, pregunta a un miembro del personal o a un monje. Incluso donde la fotografía esté permitida, usa tu cámara con respeto: sin flash, sin palos de selfie cerca de objetos sagrados, y sin poses que puedan considerarse irrespetuosas (apoyarse en estatuas, imitar poses budistas como broma, etc.). Silencia también el sonido del obturador, ya que el clic repetido de las cámaras en un salón de oración silencioso es realmente molesto.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/kamakura-serene-temple-garden.webp"
                alt="Jardín sereno de templo japonés en Kamakura con casa de té tradicional y flores de camelia"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Un jardín de templo en Kamakura — estos espacios tranquilos invitan a la contemplación silenciosa, no a las sesiones de selfies
              </figcaption>
            </figure>

            {/* General Etiquette */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Etiqueta General para Templos y Santuarios
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Más allá de los rituales específicos de cada tipo de lugar sagrado, hay varias normas universales de comportamiento que se aplican vayas donde vayas. Estos son los fundamentos que te permitirán visitar cualquier templo o santuario en Japón con confianza.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Código de Vestimenta
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japón no impone códigos de vestimenta estrictos en la mayoría de los templos y santuarios como lo hacen algunos sitios religiosos en otros países. No te rechazarán por llevar pantalones cortos o una camiseta de tirantes. Dicho esto, <strong className="text-foreground">cubrir los hombros y las rodillas se considera respetuoso</strong> en los sitios principales, especialmente si planeas entrar en los salones interiores o asistir a una ceremonia. La ropa casual y cómoda está perfectamente bien; solo evita cualquier cosa que pueda considerarse demasiado reveladora o irrespetuosa. Los sombreros deben quitarse al entrar en áreas interiores y durante la oración.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ruido y Comportamiento
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mantén la voz baja.</strong> Los templos y santuarios son lugares de culto, no atracciones turísticas, aunque millones de turistas los visiten. Muchos visitantes japoneses vienen a rezar con sinceridad, y una conversación en voz alta puede interrumpir su experiencia. No necesitas susurrar, pero sé consciente de tu volumen, especialmente dentro de los salones y cerca de las áreas de oración. Pon el teléfono en silencio. Si viajas con niños, anímales con amabilidad a usar un tono de voz bajo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ofrendas y Dinero
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como se mencionó antes, <strong className="text-foreground">las monedas de ¥5 se consideran la ofrenda de mejor suerte</strong> porque "go-en" suena como la palabra japonesa para "buena conexión" o "buena fortuna." Algunas personas ofrecen ¥50 (para más suerte) o ¥25 ("doble buena fortuna"). Evita las monedas de ¥10 si eres supersticioso, ya que "to-en" puede sonar como "conexión lejana," implicando desconexión. En la práctica, cualquier cantidad es perfectamente aceptable y apreciada. Solo asegúrate de tener monedas pequeñas preparadas antes de acercarte a la caja de ofrendas, ya que rebuscar en la cartera frente al área de oración retiene la fila.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cosas que Evitar
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No señales estatuas ni objetos sagrados.</strong> Señalar con el dedo se considera generalmente descortés en Japón, y doblemente cuando se dirige a una deidad o imagen sagrada. Si necesitas indicar algo, usa la mano abierta.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No toques objetos sagrados</strong> a menos que te inviten explícitamente a hacerlo. Algunos templos tienen estatuas específicas que se anima a los visitantes a tocar (como el humo curativo en Senso-ji), pero están claramente señalizadas.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No comas ni bebas mientras caminas</strong> dentro del recinto del templo o santuario. Esto incluye las botellas de agua; si necesitas beber, apártate a un lado y quédate de pie. Comer mientras se camina (tabearuki) está generalmente mal visto en Japón, pero es especialmente inapropiado en terreno sagrado.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No pises los umbrales.</strong> Al entrar por una puerta de templo o un edificio, pasa por encima del umbral elevado de madera en la parte inferior del marco de la puerta, no lo pises. El umbral se considera un límite entre mundos, y pisarlo es una falta de respeto.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No tires basura ni fumes</strong> en el recinto. Esto debería ser evidente, pero vale la pena mencionarlo. Muchos recintos de templos y santuarios son mantenidos por voluntarios y monjes que se enorgullecen enormemente de su limpieza.
              </li>
            </ul>

            {/* Famous Temples & Shrines */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Templos y Santuarios Famosos para Visitar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ahora que conoces la etiqueta, ¿dónde ponerla en práctica? Aquí tienes algunos de los lugares sagrados más emblemáticos de Japón que visitamos frecuentemente en nuestros tours, y cada uno ofrece una experiencia única y la oportunidad de aplicar lo que has aprendido.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Templo Senso-ji, Asakusa:</strong> El templo más antiguo y visitado de Tokio, que data del año 645 d.C. La enorme Kaminarimon (Puerta del Trueno) con su gigantesco farol rojo es uno de los monumentos más reconocibles de Japón. La calle de acceso Nakamise-dori está repleta de tiendas tradicionales que venden aperitivos, recuerdos y artesanías. A pesar de las multitudes, Senso-ji conserva una poderosa atmósfera espiritual, especialmente temprano por la mañana o por la noche cuando los faroles brillan. Nuestro{" "}
                <Link to="/es/tours/asakusa" className="text-accent hover:underline">
                  tour a pie por Asakusa
                </Link>{" "}
                incluye tanto Senso-ji como el adyacente Santuario de Asakusa, dándote la oportunidad perfecta para practicar la etiqueta tanto de templos como de santuarios en una sola visita.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Santuario Meiji, Harajuku:</strong> Dedicado al Emperador Meiji y la Emperatriz Shoken, este gran santuario sintoísta se encuentra en medio de un bosque de 70 hectáreas justo en el corazón de Tokio. Al caminar a través de la imponente puerta torii y por el sendero de grava rodeado de árboles centenarios, olvidarás que estás en una de las ciudades más ajetreadas del mundo. El Santuario Meiji es ideal para experimentar el acceso por torii, la purificación temizu y el ritual completo de oración 2-2-1. Lo visitamos en nuestro{" "}
                <Link to="/es/tours/shibuya-harajuku" className="text-accent hover:underline">
                  tour por Shibuya y Harajuku
                </Link>
                , combinando la experiencia del santuario con la energía eléctrica de la calle Takeshita y el cruce de Shibuya.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tsurugaoka Hachimangu, Kamakura:</strong> El santuario más importante de Kamakura, establecido originalmente en 1063. Un espectacular camino de acceso bordeado de árboles conduce desde la costa hasta el santuario en la ladera, pasando a través de enormes puertas torii. El santuario está dedicado a Hachiman, la deidad patrona de los guerreros, y su historia está profundamente entrelazada con la cultura samurái del Japón medieval. Explóralo en nuestro{" "}
                <Link to="/es/tours/kamakura-day-trip" className="text-accent hover:underline">
                  viaje de un día a Kamakura
                </Link>
                , que también incluye el Gran Buda y serenos bosques de bambú.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Santuario Toshogu, Nikko:</strong> Patrimonio de la Humanidad de la UNESCO y el santuario más lujosamente decorado de todo Japón. Construido como mausoleo de Tokugawa Ieyasu, el fundador del shogunato Tokugawa, Toshogu presenta más de 5,000 tallas intrincadas, incluyendo los famosos monos de "no ver el mal, no hablar el mal, no escuchar el mal" y el legendario Gato Durmiente (Nemuri-neko). La maestría artística aquí es asombrosa, y un guía es esencial para descifrar las capas de simbolismo en cada panel. Únete a nuestro{" "}
                <Link to="/es/tours/nikko-day-trip" className="text-accent hover:underline">
                  viaje de un día a Nikko
                </Link>{" "}
                para experimentar esta obra maestra junto con un impresionante paisaje natural.
              </li>
            </ul>

            {/* Common Mistakes */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Los Errores Más Comunes que Cometen los Turistas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de guiar más de 500 tours por los templos y santuarios de Tokio, he visto los mismos errores repetirse una y otra vez. Ninguno es una falta grave (los japoneses son comprensivos con los visitantes extranjeros), pero evitarlos hará que tu experiencia sea más fluida y respetuosa.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No hacer reverencia antes de cruzar la puerta torii.</strong> Muchos visitantes pasan directamente sin detenerse. Una breve reverencia al llegar al torii es la forma más sencilla de mostrar respeto; piensa en ello como decir "con permiso" antes de entrar en la casa de alguien.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Equivocarse en el orden del lavado de manos en el temizuya.</strong> El error más frecuente es verter agua directamente del cucharón a la boca, o lavarse ambas manos al mismo tiempo. Sigue la secuencia derecha-izquierda-boca-mango descrita anteriormente, y destacarás como alguien que se tomó el tiempo de aprender.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tomar demasiadas fotos en el salón principal.</strong> Aunque la fotografía en exteriores casi siempre está permitida, muchos visitantes pasan tanto tiempo fotografiando que se pierden la experiencia real. Siempre les digo a mis invitados: toma una o dos fotos, luego guarda la cámara y vive el momento. El recuerdo de participar en el ritual durará mucho más que cualquier foto.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Malentender las cantidades de ofrendas.</strong> Algunos blogs de viajes sugieren ofrecer ¥537 u otras combinaciones específicas para la suerte, pero esto es en gran medida un mito de internet. En la práctica, una simple moneda de ¥5 (go-en = buena conexión) es la ofrenda más significativa. No le des demasiadas vueltas; la sinceridad importa mucho más que la cantidad.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Evitar el humo del incienso en Senso-ji.</strong> A menudo veo visitantes alejarse del jokoro (quemador de incienso) porque no entienden para qué sirve. Se cree que el humo tiene propiedades curativas, así que abanícatelo hacia ti, dirigiéndolo a cualquier parte del cuerpo que necesite atención. Es uno de los rituales más participativos al alcance de los visitantes, y saltárselo significa perderse un momento verdaderamente especial.
              </li>
            </ul>

            {/* Detailed Differences */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Diferencias entre Templos Budistas y Santuarios Sintoístas
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aunque ya cubrí lo básico anteriormente, muchos visitantes en mis tours me piden más detalles sobre cómo distinguir templos de santuarios, y por qué los métodos de oración son diferentes. Aquí tienes una comparación más completa, la misma que comparto con mis invitados durante los recorridos.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Identificación Visual
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Las puertas torii</strong> son exclusivas de los santuarios. Si ves una, estás en un santuario sintoísta. Los templos tienen puertas sanmon, estructuras más grandes y arquitectónicas, a menudo con estatuas de feroces guardianes (Nio) a cada lado.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Los quemadores de incienso (jokoro)</strong> se encuentran en los templos, no en los santuarios. El gran quemador comunal donde los visitantes se abanizan el humo hacia sí mismos es una tradición exclusivamente budista.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">El shimenawa (cuerda sagrada)</strong> y los shide (tiras de papel en zigzag) indican un santuario. Marcan los límites sagrados en la tradición sintoísta y nunca se encuentran en templos budistas.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Las pagodas y estatuas de Buda</strong> indican un templo. Aunque algunos santuarios tienen estructuras en forma de torre, la clásica pagoda de varios pisos es un elemento arquitectónico budista.
              </li>
            </ul>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Métodos de Oración Comparados
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la diferencia práctica más importante para los visitantes:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">En un santuario:</strong> Ni-hai, ni-hakushu, ichi-hai, es decir, dos reverencias, dos aplausos, una reverencia. El aplauso es exclusivo del sintoísmo y se cree que llama la atención del kami (deidad) y expresa alegría.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">En un templo:</strong> Gassho, junta las palmas de las manos en silencio e inclina la cabeza. Sin aplausos. La tradición budista enfatiza la quietud interior y la reflexión silenciosa.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como guía, la pregunta que más me hacen es: "¿Qué pasa si aplaudo por error en un templo?" La respuesta honesta es: no pasa nada malo. Nadie se ofenderá ni habrá ninguna consecuencia espiritual. Pero conocer la diferencia demuestra un respeto genuino y te permite conectar de forma más auténtica con cada tradición. Es el tipo de detalle que te transforma de un observador pasivo en un participante activo.
            </p>

            {/* Senso-ji 30 Million */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Templo Senso-ji: Lo que Realmente Significa la Cifra de 30 Millones de Visitantes Anuales
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Es habitual ver que Senso-ji se describe como un templo que recibe "30 millones de visitantes al año," lo que lo convierte en uno de los sitios religiosos más visitados del mundo. Pero, ¿es precisa esta cifra? Como alguien que visita Senso-ji varias veces por semana con grupos de tour, puedo ofrecer algo de contexto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La cifra de 30 millones proviene de encuestas realizadas por la Oficina de Asuntos Industriales y Laborales del Gobierno Metropolitano de Tokio (ahora Oficina de Turismo y Economía Local), que registra el número de visitantes en los principales destinos turísticos de la ciudad. Este número incluye tanto turistas extranjeros como visitantes japoneses nacionales, además de los visitantes recurrentes a lo largo del año. Se trata de una estimación, no de un recuento exacto (Senso-ji no tiene torniquetes), pero se basa en una metodología de encuestas sistemática y es ampliamente citada en las estadísticas oficiales de turismo de Tokio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ¿Qué significa esto en la práctica? En una tarde ajetreada de fin de semana, la calle de acceso Nakamise-dori puede sentirse realmente abarrotada, con multitudes hombro con hombro desde Kaminarimon hasta el salón principal. Sin embargo, la experiencia varía drásticamente según la hora y el día en que visites.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mejores Horarios para Visitar Senso-ji (Consejos de Manabu)
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Temprano por la mañana (6:00–7:30 AM):</strong> Los terrenos del templo están abiertos las 24 horas, y el salón principal abre a las 6:00 AM (6:30 AM de octubre a marzo). A esta hora, compartirás el espacio con apenas un puñado de madrugadores y fieles locales. La luz de la mañana sobre la pagoda es espectacular, y podrás experimentar los rituales en un silencio casi absoluto. Esta es mi recomendación número uno.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mañanas entre semana (antes de las 10 AM):</strong> Las multitudes aún son manejables. Puedes recorrer Nakamise-dori con comodidad y tomar fotos sin aglomeraciones de fondo.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Por la noche (después de las 5 PM):</strong> Las tiendas de Nakamise cierran entre las 5 y las 6 PM, pero los terrenos del templo permanecen abiertos. La Kaminarimon y la pagoda de cinco pisos iluminadas por la noche son verdaderamente mágicas, y las multitudes disminuyen significativamente después del cierre de las tiendas.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Evita:</strong> Las tardes de fin de semana (especialmente sábados de 11 AM a 3 PM), los días festivos nacionales, y los tres primeros días de enero (hatsumode, la tradicional visita de Año Nuevo al santuario, que atrae a millones de personas).
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En mi{" "}
              <Link to="/es/tours/asakusa" className="text-accent hover:underline">
                tour privado a pie por Asakusa
              </Link>
              , siempre programo nuestra visita para evitar las peores aglomeraciones, y conozco los rincones más tranquilos del complejo que la mayoría de los visitantes pasan por alto. Experimentar Senso-ji con la guía de un experto marca la diferencia entre sentirte abrumado por las multitudes y apreciar verdaderamente lo que hace especial a este templo de 1,400 años de antigüedad.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres visitar los templos y santuarios de Tokio con un guía experto?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Conocer la etiqueta es una cosa, pero tener a alguien a tu lado que te explique la historia, el simbolismo y los detalles ocultos da vida a estos lugares sagrados. En nuestros tours, te guío paso a paso por cada ritual, comparto historias que las guías de viaje no incluyen y respondo todas tus preguntas en tiempo real. Ya sea tu primera visita a un santuario o la décima, siempre hay algo nuevo por descubrir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Ver Tours Privados en Tokio
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Contactar
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Se pueden visitar templos y santuarios gratis?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La mayoría de los templos y santuarios de Tokio son de entrada gratuita. Lugares emblemáticos como Senso-ji, el Santuario Meiji y el Santuario de Asakusa no cobran entrada. Algunos templos cobran una pequeña tarifa de admisión (normalmente ¥300–500) para jardines interiores especiales, salas del tesoro o exposiciones de temporada. En general, las áreas principales de culto siempre son gratuitas: puedes participar en los rituales de oración, comprar omikuji y disfrutar del ambiente sin coste alguno.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Qué debo vestir para visitar un templo o santuario en Japón?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No existe un código de vestimenta estricto en la mayoría de los templos y santuarios de Tokio. No te negarán la entrada por llevar ropa casual, pantalones cortos o sandalias. Dicho esto, cubrir los hombros y las rodillas se considera respetuoso, especialmente si planeas entrar en los salones interiores o asistir a una ceremonia. El calzado cómodo para caminar es imprescindible, ya que muchos recintos tienen caminos de grava y escaleras. Lleva calcetines limpios y sin agujeros, ya que es posible que tengas que quitarte los zapatos en algunos templos. Los sombreros deben quitarse al entrar en las áreas de culto interiores.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Es irrespetuoso tomar fotos en los templos?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Las normas de fotografía varían según el lugar. Las áreas exteriores, los jardines y las fachadas de los edificios casi siempre se pueden fotografiar. Muchos templos prohíben la fotografía dentro de los salones principales y cerca de las estatuas sagradas; busca el icono de una cámara con una línea roja. Incluso donde esté permitida, actúa con discreción: sin flash, sin palos de selfie cerca de objetos sagrados, y silencia el sonido del obturador. En caso de duda, pregunta a un miembro del personal. Lo más importante es estar presente y ser respetuoso, en lugar de tratar la visita exclusivamente como una oportunidad fotográfica.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Cuál es la forma correcta de rezar en un santuario japonés?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    La práctica estándar en los santuarios sintoístas se llama ni-hai, ni-hakushu, ichi-hai: dos reverencias profundas, dos aplausos, y una reverencia final. Antes de rezar, lanza una moneda (la de ¥5 es la tradicional) en la caja de ofrendas y toca la campana si la hay. En los templos budistas, el ritual es diferente: junta las palmas en silencio (gassho) e inclina la cabeza sin aplaudir. Lo más importante es acercarse con sinceridad. Los japoneses aprecian genuinamente que los visitantes extranjeros hagan el esfuerzo de participar con respeto.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["asakusa","imperial-palace"]} lang="es" />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Etiqueta en Templos y Santuarios de Japón: Guía Completa",
            "description": "Etiqueta en templos y santuarios de Japón explicada por un guía de Tokio con licencia y más de 500 tours. Errores comunes, consejos prácticos y guía experta para visitar Senso-ji y más.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
              "jobTitle": "National Government Licensed Guide Interpreter",
              "url": "https://tanuki-tabi-travel.com/about",
            },
            "datePublished": "2026-02-25",
            "dateModified": "2026-03-07",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/etiqueta-templos-santuarios",
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
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Se pueden visitar templos y santuarios gratis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La mayoría de los templos y santuarios de Tokio son de entrada gratuita. Lugares emblemáticos como Senso-ji, el Santuario Meiji y el Santuario de Asakusa no cobran entrada. Algunos templos cobran una pequeña tarifa de admisión (normalmente ¥300–500) para jardines interiores especiales, salas del tesoro o exposiciones de temporada. En general, las áreas principales de culto siempre son gratuitas.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Qué debo vestir para visitar un templo o santuario en Japón?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No existe un código de vestimenta estricto en la mayoría de los templos y santuarios de Tokio. No te negarán la entrada por llevar ropa casual. Cubrir los hombros y las rodillas se considera respetuoso, especialmente si planeas entrar en los salones interiores. El calzado cómodo es imprescindible, y lleva calcetines limpios ya que es posible que tengas que quitarte los zapatos en algunos templos.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Es irrespetuoso tomar fotos en los templos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Las normas de fotografía varían según el lugar. Las áreas exteriores casi siempre se pueden fotografiar. Muchos templos prohíben la fotografía dentro de los salones principales y cerca de las estatuas sagradas. Incluso donde esté permitida, actúa con discreción: sin flash, sin palos de selfie cerca de objetos sagrados, y silencia el sonido del obturador. En caso de duda, pregunta a un miembro del personal.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la forma correcta de rezar en un santuario japonés?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La práctica estándar en los santuarios sintoístas es ni-hai, ni-hakushu, ichi-hai: dos reverencias profundas, dos aplausos, y una reverencia final. Lanza una moneda en la caja de ofrendas y toca la campana antes de rezar. En los templos budistas, junta las palmas en silencio (gassho) e inclina la cabeza sin aplaudir.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default EsEtiquetaTemplos;
