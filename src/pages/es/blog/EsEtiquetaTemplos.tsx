// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsEtiquetaTemplos = () => {
  return (
    <Layout>
      <SEO
        title="Etiqueta en Templos y Santuarios de Japón | Guía Local"
        description="¿Vas a visitar templos y santuarios en Japón? Aprende la etiqueta esencial — cómo rezar, purificarte, hacer reverencia y comportarte con respeto. Guía de un guía japonés con licencia."
        canonicalPath="/es/blog/etiqueta-templos-santuarios"
        hreflang={[
          { lang: "en", path: "/blog/japan-temple-shrine-etiquette" },
          { lang: "es", path: "/es/blog/etiqueta-templos-santuarios" },
          { lang: "x-default", path: "/blog/japan-temple-shrine-etiquette" },
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
            <p className="text-label text-accent mb-3">Planifica tu Viaje</p>
            <h1 className="heading-display text-foreground">
              Etiqueta en Templos y Santuarios de Japón — Guía Completa
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
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Una de las preguntas más frecuentes que escucho en mis tours es: "¿Lo estoy haciendo bien?" Ya sea frente a un santuario preguntándose cuántas veces aplaudir, o dudando en la entrada de un templo sin saber si hacer una reverencia, los visitantes suelen preocuparse por cometer errores en los lugares sagrados de Japón. Entiendo perfectamente esa sensación — nadie quiere ofender sin querer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La buena noticia es que los japoneses aprecian genuinamente cualquier esfuerzo que hagas por participar de forma respetuosa. No necesitas ser perfecto. El simple hecho de que estés leyendo esta guía ya demuestra el tipo de consideración que los locales notan y valoran. La mayoría de los visitantes japoneses tampoco conocen todos los detalles de cada ritual — simplemente se acercan a estos lugares con una actitud tranquila y sincera.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dicho esto, conocer lo básico hará que tu experiencia sea mucho más significativa. En lugar de quedarte parado incómodamente mientras otros rezan, podrás participar y entender lo que estás haciendo. Esta guía cubre todo lo que necesitas saber — desde la diferencia fundamental entre templos y santuarios, hasta instrucciones paso a paso para la oración, la purificación y el comportamiento general. Empecemos por la pregunta más básica de todas.
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
              <strong className="text-foreground">Los santuarios (神社 / jinja)</strong> son sintoístas, de la tradición espiritual autóctona de Japón. La marca inconfundible de un santuario es la puerta <strong className="text-foreground">torii</strong> — esa icónica puerta bermellón que aparece en innumerables fotos de Japón. También verás shimenawa (cuerdas trenzadas sagradas), komainu (estatuas guardianas de leones-perro) y una sensación distintivamente abierta y conectada con la naturaleza. Los nombres de los santuarios suelen terminar en "-jinja," "-jingu," "-taisha," o "-gu." El Santuario Meiji en Harajuku y Fushimi Inari en Kioto son quizás los más famosos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Algo que sorprende a muchos visitantes: <strong className="text-foreground">muchos lugares sagrados contienen tanto un templo como un santuario</strong>. El budismo y el sintoísmo han coexistido en Japón durante más de mil años, y las dos tradiciones a menudo comparten el mismo recinto. Un ejemplo perfecto es la{" "}
              <Link to="/es/tours/asakusa" className="text-accent hover:underline">
                zona de Asakusa
              </Link>
              , donde el famoso Templo Senso-ji se encuentra justo al lado del Santuario de Asakusa. A primera vista parecen similares, pero los rituales son diferentes — y precisamente por eso es importante conocer la distinción.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Una regla sencilla: si ves una puerta torii, es un santuario. Si ves una gran estatua de Buda o un quemador de incienso, es un templo. En caso de duda, busca la señalización — la mayoría de los sitios principales tienen paneles informativos en inglés cerca de la entrada.
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
              No te preocupes por memorizar cada detalle — muchos temizuya ahora tienen carteles con instrucciones en inglés, y desde la pandemia, algunos han sido cerrados o simplificados. Si el agua no está fluyendo o los cucharones han sido retirados, simplemente puedes saltarte este paso.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Oración: Ni-hai, Ni-hakushu, Ichi-hai
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En el salón principal (haiden), verás una caja de ofrendas de madera (saisen-bako) y una cuerda gruesa con una campana. Este es el ritual estándar de oración:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Lanza una moneda</strong> en la caja de ofrendas. La moneda de <strong className="text-foreground">¥5</strong> es la tradicional — la palabra para cinco yenes, "go-en," es homófona de "buena conexión" o "buena fortuna." Pero cualquier cantidad está bien.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Toca la campana</strong> agitando suavemente la cuerda (si la hay). Esto alerta a la deidad de tu presencia.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Haz dos reverencias profundas</strong> (ni-hai) — aproximadamente en un ángulo de 90 grados desde la cintura.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aplaude dos veces</strong> (ni-hakushu) — mantén las manos a la altura del pecho y aplaude con firmeza. Se dice que el sonido atrae la atención de la deidad y expresa alegría.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Con las manos juntas, ofrece un momento de oración silenciosa o reflexión.</strong> Puedes pedir un deseo, expresar gratitud o simplemente despejar tu mente.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Haz una reverencia profunda más</strong> (ichi-hai) para concluir.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La frase para recordar es <strong className="text-foreground">ni-hai, ni-hakushu, ichi-hai</strong> — dos reverencias, dos aplausos, una reverencia. Un pequeño número de santuarios tienen sus propias variaciones (Izumo Taisha usa cuatro aplausos en lugar de dos), pero 2-2-1 es lo correcto en la gran mayoría de los santuarios de todo Japón.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Omikuji y Ema
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de rezar, muchos visitantes disfrutan de dos actividades populares del santuario. Los <strong className="text-foreground">omikuji</strong> son papelitos de la fortuna que se sacan al azar (normalmente por ¥100-200). Las fortunas van desde dai-kichi (gran bendición) hasta dai-kyo (gran maldición). Si sacas una buena fortuna, llévala contigo como amuleto de la suerte. Si sacas una mala fortuna, la tradición es <strong className="text-foreground">atarla en el soporte de alambre designado o en las ramas de los árboles</strong> del santuario, dejando simbólicamente la mala suerte atrás. Se cree que el poder espiritual del santuario la neutraliza.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Los <strong className="text-foreground">ema</strong> son pequeñas tablillas de madera donde escribes un deseo o una oración. Compra una en la oficina del santuario (normalmente ¥500-1,000), escribe tu deseo en el lado en blanco (está perfectamente bien escribir en español o inglés — los kami entienden todos los idiomas), y cuélgala en el soporte designado para ema. Verás cientos de deseos colgados juntos, lo cual es en sí mismo una vista hermosa. Tómate un momento para leer algunos — encontrarás de todo, desde oraciones para exámenes hasta deseos de salud y esperanzas de matrimonio, ofreciéndote una conmovedora ventana a lo que importa a las personas.
            </p>

            {/* Temple Step-by-Step */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              En un Templo: Paso a Paso
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La etiqueta en los templos budistas coincide en algunos aspectos con las costumbres de los santuarios, pero difiere en varios puntos importantes. La atmósfera general tiende a ser más silenciosa y contemplativa, reflejando el énfasis del budismo en la paz interior y la atención plena.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Incienso: Purificación con Humo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muchos templos tienen un gran quemador de incienso (jokoro) cerca de la entrada del salón principal. Esta es una de las experiencias más distintivas de un templo. Compra una varilla de incienso en el puesto cercano (normalmente ¥100), enciéndela con la llama comunal y colócala vertical en el quemador lleno de arena. Luego, usa tus manos para <strong className="text-foreground">abanicarte el humo hacia ti</strong>. Se cree que el humo tiene propiedades curativas — dirígelo hacia cualquier parte de tu cuerpo que necesite atención. Muchos visitantes se abanizan el humo hacia la cabeza para la sabiduría, o hacia una zona lesionada para la curación. Verás a los visitantes locales haciendo esto con entusiasmo, y es un momento encantador de ritual compartido.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una nota importante: al encender el incienso, si la llama no se apaga sola, <strong className="text-foreground">agita la varilla suavemente para extinguir la llama</strong> en lugar de soplarla. En la tradición budista japonesa, soplar con la boca se considera impuro porque el aliento lleva las "impurezas" del cuerpo. Es un detalle pequeño, pero los locales lo notan y lo aprecian.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Oración: Silenciosa y Respetuosa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En un templo, el ritual de oración es diferente al de un santuario. Acércate al salón principal, lanza una moneda en la caja de ofrendas, y luego <strong className="text-foreground">junta las palmas de las manos (gassho) e inclina la cabeza en silencio</strong>. Cierra los ojos y ofrece un momento de oración silenciosa o reflexión. <strong className="text-foreground">No aplaudas</strong> — aplaudir es una tradición sintoísta exclusiva de los santuarios. Este es el error más común que cometen los visitantes, y ahora que conoces la diferencia, estarás por delante de muchos turistas. En un templo: silencio. En un santuario: aplausos. Así de sencillo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Algunos templos, particularmente los de la tradición Zen, también pueden tener áreas específicas de meditación sentada donde puedes sentarte tranquilamente durante unos minutos. Si se ofrecen sesiones de meditación, son una manera maravillosa de experimentar la práctica budista directamente — pero siempre sigue las instrucciones del personal del templo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Quitarse los Zapatos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muchos templos requieren que te <strong className="text-foreground">quites los zapatos</strong> antes de entrar en las áreas interiores, particularmente los salones principales, las salas de tatami y las zonas de contemplación del jardín. Busca filas de zapatos cerca de la entrada o un zapatero — son señales claras de que debes quitarte los tuyos. La mayoría de los templos proporcionan bolsas de plástico para llevar tus zapatos o disponen de taquillas. Llevar calcetines limpios y sin agujeros es un consejo práctico que te ahorrará posibles momentos de vergüenza. En los meses más fríos, los suelos de los templos pueden ser bastante fríos, así que unos calcetines abrigados son un verdadero confort.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Normas de Fotografía
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las políticas de fotografía varían ampliamente entre templos. Las áreas exteriores y los jardines casi siempre se pueden fotografiar. Sin embargo, muchos templos <strong className="text-foreground">prohíben la fotografía dentro de sus salones principales</strong>, particularmente cerca de las zonas del altar y las estatuas sagradas. Busca siempre la señalización — el icono de una cámara con una línea roja es universal. En caso de duda, pregunta a un miembro del personal o a un monje. Incluso donde la fotografía esté permitida, usa tu cámara con respeto: sin flash, sin palos de selfie cerca de objetos sagrados, y sin poses que puedan considerarse irrespetuosas (apoyarse en estatuas, imitar poses budistas como broma, etc.). Silencia también el sonido del obturador — el clic repetido de las cámaras en un salón de oración silencioso es realmente molesto.
            </p>

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
              Japón no impone códigos de vestimenta estrictos en la mayoría de los templos y santuarios como lo hacen algunos sitios religiosos en otros países. No te rechazarán por llevar pantalones cortos o una camiseta de tirantes. Dicho esto, <strong className="text-foreground">cubrir los hombros y las rodillas se considera respetuoso</strong> en los sitios principales, especialmente si planeas entrar en los salones interiores o asistir a una ceremonia. La ropa casual y cómoda está perfectamente bien — solo evita cualquier cosa que pueda considerarse demasiado reveladora o irrespetuosa. Los sombreros deben quitarse al entrar en áreas interiores y durante la oración.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ruido y Comportamiento
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mantén la voz baja.</strong> Los templos y santuarios son lugares de culto, no atracciones turísticas — aunque millones de turistas los visiten. Muchos visitantes japoneses vienen a rezar con sinceridad, y una conversación en voz alta puede interrumpir su experiencia. No necesitas susurrar, pero sé consciente de tu volumen, especialmente dentro de los salones y cerca de las áreas de oración. Pon el teléfono en silencio. Si viajas con niños, anímales con amabilidad a usar un tono de voz bajo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ofrendas y Dinero
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como se mencionó antes, <strong className="text-foreground">las monedas de ¥5 se consideran la ofrenda de mejor suerte</strong> porque "go-en" suena como la palabra japonesa para "buena conexión" o "buena fortuna." Algunas personas ofrecen ¥50 (para más suerte) o ¥25 ("doble buena fortuna"). Evita las monedas de ¥10 si eres supersticioso — "to-en" puede sonar como "conexión lejana," implicando desconexión. En la práctica, cualquier cantidad es perfectamente aceptable y apreciada. Solo asegúrate de tener monedas pequeñas preparadas antes de acercarte a la caja de ofrendas — rebuscar en la cartera frente al área de oración retiene la fila.
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
                <strong className="text-foreground">No comas ni bebas mientras caminas</strong> dentro del recinto del templo o santuario. Esto incluye las botellas de agua — si necesitas beber, apártate a un lado y quédate de pie. Comer mientras se camina (tabearuki) está generalmente mal visto en Japón, pero es especialmente inapropiado en terreno sagrado.
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
              Ahora que conoces la etiqueta, ¿dónde ponerla en práctica? Aquí tienes algunos de los lugares sagrados más emblemáticos de Japón que visitamos frecuentemente en nuestros tours — cada uno ofrece una experiencia única y la oportunidad de aplicar lo que has aprendido.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Templo Senso-ji, Asakusa</strong> — El templo más antiguo y visitado de Tokio, que data del año 645 d.C. La enorme Kaminarimon (Puerta del Trueno) con su gigantesco farol rojo es uno de los monumentos más reconocibles de Japón. La calle de acceso Nakamise-dori está repleta de tiendas tradicionales que venden aperitivos, recuerdos y artesanías. A pesar de las multitudes, Senso-ji conserva una poderosa atmósfera espiritual, especialmente temprano por la mañana o por la noche cuando los faroles brillan. Nuestro{" "}
                <Link to="/es/tours/asakusa" className="text-accent hover:underline">
                  tour a pie por Asakusa
                </Link>{" "}
                incluye tanto Senso-ji como el adyacente Santuario de Asakusa, dándote la oportunidad perfecta para practicar la etiqueta tanto de templos como de santuarios en una sola visita.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Santuario Meiji, Harajuku</strong> — Dedicado al Emperador Meiji y la Emperatriz Shoken, este gran santuario sintoísta se encuentra en medio de un bosque de 70 hectáreas justo en el corazón de Tokio. Al caminar a través de la imponente puerta torii y por el sendero de grava rodeado de árboles centenarios, olvidarás que estás en una de las ciudades más ajetreadas del mundo. El Santuario Meiji es ideal para experimentar el acceso por torii, la purificación temizu y el ritual completo de oración 2-2-1. Lo visitamos en nuestro{" "}
                <Link to="/es/tours/shibuya-harajuku" className="text-accent hover:underline">
                  tour por Shibuya y Harajuku
                </Link>
                , combinando la experiencia del santuario con la energía eléctrica de la calle Takeshita y el cruce de Shibuya.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tsurugaoka Hachimangu, Kamakura</strong> — El santuario más importante de Kamakura, establecido originalmente en 1063. Un espectacular camino de acceso bordeado de árboles conduce desde la costa hasta el santuario en la ladera, pasando a través de enormes puertas torii. El santuario está dedicado a Hachiman, la deidad patrona de los guerreros, y su historia está profundamente entrelazada con la cultura samurái del Japón medieval. Explóralo en nuestro{" "}
                <Link to="/es/tours/kamakura-day-trip" className="text-accent hover:underline">
                  viaje de un día a Kamakura
                </Link>
                , que también incluye el Gran Buda y serenos bosques de bambú.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Santuario Toshogu, Nikko</strong> — Patrimonio de la Humanidad de la UNESCO y el santuario más lujosamente decorado de todo Japón. Construido como mausoleo de Tokugawa Ieyasu, el fundador del shogunato Tokugawa, Toshogu presenta más de 5,000 tallas intrincadas, incluyendo los famosos monos de "no ver el mal, no hablar el mal, no escuchar el mal" y el legendario Gato Durmiente (Nemuri-neko). La maestría artística aquí es asombrosa, y un guía es esencial para descifrar las capas de simbolismo en cada panel. Únete a nuestro{" "}
                <Link to="/es/tours/nikko-day-trip" className="text-accent hover:underline">
                  viaje de un día a Nikko
                </Link>{" "}
                para experimentar esta obra maestra junto con un impresionante paisaje natural.
              </li>
            </ul>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres visitar templos y santuarios con un guía que te explique cada ritual?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Conocer la etiqueta es una cosa — tener a alguien a tu lado que te explique la historia, el simbolismo y los detalles ocultos da vida a estos lugares sagrados. En nuestros tours, te guío paso a paso por cada ritual, comparto historias que las guías de viaje no incluyen y respondo todas tus preguntas en tiempo real. Ya sea tu primera visita a un santuario o la décima, siempre hay algo nuevo por descubrir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Ver Tours a Pie
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Contactar
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
            "headline": "Etiqueta en Templos y Santuarios de Japón — Guía Completa",
            "description": "¿Vas a visitar templos y santuarios en Japón? Aprende la etiqueta esencial — cómo rezar, purificarte, hacer reverencia y comportarte con respeto. Guía de un guía japonés con licencia.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/etiqueta-templos-santuarios",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsEtiquetaTemplos;
