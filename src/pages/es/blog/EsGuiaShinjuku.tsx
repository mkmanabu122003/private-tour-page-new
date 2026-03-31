// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsGuiaShinjuku = () => {
  return (
    <Layout>
      <SEO
        title="Qué Ver en Shinjuku 2026: Guía Local de Barrio"
        description="Shinjuku es mucho más que rascacielos y neón. Un guía oficial te lleva por Golden Gai, Omoide Yokocho, el mirador gratuito y rincones que no salen en las guías."
        canonicalPath="/es/blog/guia-shinjuku"
        hreflang={[
          { lang: "en", path: "/blog/shinjuku-guide" },
          { lang: "es", path: "/es/blog/guia-shinjuku" },
          { lang: "x-default", path: "/blog/shinjuku-guide" },
        ]}
      />

      {/* Article Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><Link to="/es" className="hover:text-foreground transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/es/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground">Guía de Shinjuku</li>
              </ol>
            </nav>
            <p className="text-label text-accent mb-3">Guías de Barrios de Tokio</p>
            <h1 className="heading-display text-foreground">
              Guía de Shinjuku: El Corazón Iluminado de Neón de Tokio
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
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, Guía Intérprete con Licencia del Gobierno Nacional residente en Tokio, que ha recorrido las calles de Shinjuku con cientos de visitantes internacionales.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px]">
        <img
          src="/images/blog/shinjuku-guide-hero.webp"
          alt="Guía de Shinjuku - navegando el corazón iluminado de neón de Tokio"
          className="w-full h-full object-cover"
          fetchpriority="high"
          width={1600}
          height={900}
        />
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La estación de Shinjuku gestiona 3,5 millones de pasajeros al día, lo que la convierte en el centro de transporte más transitado del planeta. Si llegas sin un plan, puede resultar genuinamente abrumador. La estación por sí sola tiene más de 200 salidas, y las calles de la superficie son un asalto sensorial de carteles de neón, viajeros apresurados y anuncios por altavoz compitiendo entre sí. Pero una vez que aprendes cómo está distribuido Shinjuku y entiendes lo que ofrece cada rincón del distrito, este barrio se transforma de un obstáculo caótico en una de las zonas más gratificantes de Tokio para explorar. Llevo años guiando visitantes por Shinjuku, y sigue siendo mi distrito favorito para mostrar a la gente por la noche. Simplemente no hay otro lugar en el mundo como este.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Esta guía cubre todo lo que necesitas para recorrer Shinjuku con confianza, desde el lado oeste lleno de rascacielos hasta el lado este repleto de entretenimiento, desde los diminutos bares de Golden Gai hasta la serena belleza de Shinjuku Gyoen. Compartiré los mismos consejos que doy a mis invitados en los tours: dónde ir, qué saltarse, cuánto presupuestar y la etiqueta que hará tu experiencia más fluida.
            </p>

            {/* Orientarse */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Orientarse: Los Dos Lados de Shinjuku
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La clave para entender Shinjuku es saber que las vías del tren lo dividen en dos mundos completamente diferentes.{" "}
              <strong className="text-foreground">Shinjuku Oeste</strong> es el distrito de negocios y gobierno, una cuadrícula de rascacielos imponentes, sedes corporativas y amplias avenidas que parecen casi americanas en su escala. El Edificio del Gobierno Metropolitano de Tokio domina el horizonte aquí, y sus dos miradores gemelos en el piso 45 ofrecen vistas panorámicas gratuitas de la ciudad. En días despejados, se puede ver el Monte Fuji a lo lejos. Aquí también encontrarás el Park Hyatt Tokyo, famoso por la película{" "}
              <em>Lost in Translation</em>. El New York Bar en el piso 52 vale la pena solo por la vista, aunque las bebidas empiezan alrededor de ¥2.500 y hay un cargo de entrada por la noche.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Shinjuku Este</strong> es donde vive la energía. Sal por la salida este y te verás inmediatamente arrastrado por un río de personas que fluyen hacia Kabukicho, Golden Gai y los innumerables restaurantes, izakayas y locales de entretenimiento que hacen que este lado de Shinjuku se sienta vivo las 24 horas del día. El lado este es más ruidoso, más desordenado, más colorido y mucho más interesante para la mayoría de los visitantes. Si solo tienes una noche en Shinjuku, pásala aquí.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Consejo de navegación:</strong> No intentes cruzar la estación caminando para ir de oeste a este. Usa el vestíbulo de la salida sur, que conecta ambos lados a nivel de calle y es mucho menos confuso que los pasajes subterráneos. Alternativamente, la salida Southern Terrace cerca de Takashimaya Times Square te da un punto de orientación claro en el lado sur.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/shinjuku-golden-gai-bars.webp"
                alt="Golden Gai - distrito de bares íntimos en Shinjuku"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Los estrechos callejones de Golden Gai albergan más de 200 diminutos bares
              </figcaption>
            </figure>

            {/* Golden Gai */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Golden Gai: El Distrito de Bares Más Íntimo del Mundo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Golden Gai es diferente a todo lo que existe en la Tierra. Apiñados en seis estrechos callejones apenas lo suficientemente anchos para que pasen dos personas, encontrarás más de 200 diminutos bares, la mayoría con capacidad para no más de seis a ocho personas. No son elegantes coctelerías; son habitaciones estrechas, con carácter y aroma a humo, presididas por un único bartender-propietario, o "mama" o "master", que establece las reglas, la música y la atmósfera. Cada bar tiene su propia identidad: algunos se especializan en jazz, otros en películas de terror, punk rock, fotografía o simplemente en la conversación con el dueño.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">La etiqueta importa aquí.</strong> La mayoría de los bares cobran una entrada (normalmente ¥500-1.500), que está claramente indicada en o cerca de la puerta. Esta es una práctica estándar, no una estafa. El cargo de entrada ayuda a estos diminutos negocios a sobrevivir con solo un puñado de clientes por noche. Siempre revisa el cartel antes de entrar. Algunos bares son solo para habituales donde el dueño atiende al mismo pequeño grupo de amigos noche tras noche. Estos a veces tendrán un cartel indicando que son solo para miembros o simplemente se sentirán poco acogedores. No insistas. Pasa a la puerta siguiente. Muchos bares ahora dan la bienvenida activamente a los turistas y muestran menús en inglés o carteles de "Welcome". Empieza con esos si es tu primera visita.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mejor momento para visitar:</strong> Noches entre semana entre las 8 PM y las 10 PM. Esta franja te da la atmósfera auténtica sin las multitudes del fin de semana, y la mayoría de los bares estarán abiertos pero aún no llenos. Los viernes y sábados por la noche después de las 10 PM pueden estar extremadamente concurridos, con colas formándose fuera de los locales más populares. Presupuesta alrededor de ¥1.000-2.000 por bar (cargo de entrada más una o dos bebidas), y planea visitar dos o tres bares a lo largo de la noche. Ese es el ritmo de Golden Gai: no estás destinado a pasar toda la noche en un solo lugar. La alegría está en ir de un sitio a otro, en descubrir, en las conversaciones aleatorias con desconocidos en un espacio tan pequeño que tus codos se tocan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una cosa más: no tomes fotos dentro sin preguntar. Muchos bartenders y habituales prefieren la privacidad. Los estrechos callejones en sí son territorio libre para la fotografía, y lucen espectaculares de noche con todos los carteles iluminados, pero una vez dentro deberías preguntar primero. Es un pequeño gesto que marca una gran diferencia.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/shinjuku-omoide-yokocho.webp"
                alt="Omoide Yokocho Memory Lane - yakitori bajo las vías del tren"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Omoide Yokocho: humo, yakitori y cerveza fría bajo las vías
              </figcaption>
            </figure>

            <InlineCTAEs />

            {/* Omoide Yokocho */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Omoide Yokocho (Callejón de los Recuerdos)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ubicado justo al lado de la salida oeste de la estación de Shinjuku, Omoide Yokocho, también conocido por su apodo menos elegante "Callejón del Pis", es una estrecha franja de puestos de yakitori y diminutos restaurantes que ha sobrevivido desde la era del mercado negro de posguerra de los años 1940. La atmósfera es el verdadero atractivo: humo elevándose de las parrillas de carbón, faroles balanceándose sobre las cabezas, el tintineo de los vasos de cerveza y el retumbar de los trenes pasando a apenas metros de altura. Al atardecer, cuando la luz dorada se filtra a través del vapor y el humo, Omoide Yokocho es uno de los lugares más fotogénicos de todo Tokio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Una evaluación honesta:</strong> La atmósfera es mucho mejor que la comida. El yakitori es decente pero no excepcional; puedes encontrar pollo a la parrilla superior en restaurantes especializados de yakitori en otras partes de Shinjuku a precios similares. Lo que estás pagando aquí es la experiencia de comer codo con codo con oficinistas en diminutos taburetes, bajo bombillas desnudas, en un entorno que parece un decorado de película de los años 1950. ¿Vale la pena? Absolutamente, solo ven con las expectativas adecuadas. Pide una cerveza, unas brochetas de piel de pollo y tsukune (albóndigas de pollo), y empápate del ambiente. Presupuesta alrededor de ¥1.500-2.500 por persona para unas brochetas y bebidas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Horario:</strong> Visita alrededor de las 5-6 PM para conseguir asiento fácilmente y captar la luz del atardecer. A las 7 PM, los puestos más populares están llenos y puede que tengas que esperar. Tarde por la noche (después de las 10 PM), se vacía de nuevo y adquiere un encanto diferente, más tranquilo.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/shinjuku-gyoen-garden.webp"
                alt="Jardín Nacional Shinjuku Gyoen - un escape tranquilo en Tokio"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Shinjuku Gyoen, un escape tranquilo de la energía urbana circundante
              </figcaption>
            </figure>

            {/* Shinjuku Gyoen */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Shinjuku Gyoen: Un Oasis Inesperado
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Parece imposible que uno de los jardines más bellos de Tokio se encuentre a solo diez minutos a pie del caos de Kabukicho, pero ese contraste es parte de lo que hace especial a Shinjuku Gyoen. Originalmente residencia de un señor feudal durante el período Edo, luego jardín imperial, Shinjuku Gyoen abrió al público después de la Segunda Guerra Mundial y ahora abarca 58 hectáreas de paisajes meticulosamente mantenidos. El parque combina tres estilos de jardín distintos: formal francés, paisajístico inglés y japonés tradicional, cada uno fluyendo hacia el siguiente de manera tan natural que apenas notas las transiciones.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">La temporada de cerezos en flor</strong> es cuando Shinjuku Gyoen realmente brilla. Mientras que el Parque Ueno atrae multitudes masivas que pueden parecer más un festival de música que una experiencia de hanami (contemplación de flores), Shinjuku Gyoen aplica una estricta política de prohibición de alcohol y limita la entrada cuando se alcanza la capacidad. El resultado es una experiencia de contemplación de cerezos mucho más tranquila. El parque también cuenta con más de una docena de variedades de cerezo que florecen en diferentes momentos desde mediados de marzo hasta finales de abril, ofreciéndote una ventana de contemplación más amplia que la mayoría de otros lugares de la ciudad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La entrada cuesta ¥500 para adultos, y el parque está cerrado los lunes (o el día siguiente si el lunes es festivo). El horario varía según la temporada pero generalmente es de 9 AM a 4:30 PM (última entrada a las 4 PM). Trae un bento de un konbini cercano o un depachika y almuerza en la gran pradera. Es la pausa perfecta a mediodía de la intensidad de Shinjuku. El invernadero cerca de la entrada principal alberga una impresionante colección de plantas tropicales si quieres extender tu visita.
            </p>

            {/* Kabukicho */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Kabukicho: La Capital del Entretenimiento de Tokio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kabukicho es el distrito de entretenimiento de Shinjuku, y lleva su reputación a todo volumen. El gigantesco arco de neón, las enormes pantallas de video, los sonidos compitiendo de los salones de pachinko y las cadenas de karaoke... es Tokio al máximo volumen. A pesar de su reputación algo turbia,{" "}
              <strong className="text-foreground">Kabukicho es generalmente seguro para los turistas</strong>, incluso tarde por la noche. La zona se ha limpiado considerablemente en los últimos años, con mayor presencia policial y el desarrollo de complejos de entretenimiento aptos para familias.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Estafas a las que estar atento:</strong> El principal riesgo en Kabukicho viene de los captadores, personas en la calle intentando atraerte a bares o clubes. La regla es simple: si alguien te aborda en la calle, declina y sigue caminando. Los establecimientos legítimos no necesitan reclutar clientes desde la acera. Ten especial cuidado con cualquiera que ofrezca bebidas "gratis" o ofertas sospechosamente baratas, que casi siempre llevan a cuentas infladas. Quédate con los lugares que hayas investigado de antemano o que tengan precios claramente publicados, y estarás bien.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para entretenimiento, la zona tiene muchas opciones legítimas y divertidas. La cabeza de Godzilla sobre el Hotel Gracery es un hito imprescindible. La mejor vista es desde la calle de abajo o desde la terraza-café del hotel en el 8.º piso, donde puedes acercarte notablemente a la bestia. El karaoke también es una experiencia quintaesencial de Kabukicho. Grandes cadenas como Big Echo y Karaoke Kan (el de <em>Lost in Translation</em>) ofrecen salas privadas a precios razonables, especialmente durante el día y las happy hours de la tarde. Si has oído hablar del Robot Restaurant, ten en cuenta que cerró permanentemente en 2021. El espacio ha sido reemplazado por otros locales de entretenimiento, pero nada iguala la absurdidad controlada del original.
            </p>

            {/* Dónde Comer */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Dónde Comer en Shinjuku
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinjuku tiene miles de restaurantes, lo que hace que elegir uno sea tanto emocionante como paralizante. Aquí van mis mejores recomendaciones por categoría para ayudarte a decidir.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mercados Gastronómicos en Sótanos de Grandes Almacenes (Depachika)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los pisos del sótano de los grandes almacenes Isetan, Takashimaya y Odakyu son maravillas culinarias que la mayoría de los turistas pasan de largo. Los mercados gastronómicos de los grandes almacenes japoneses, llamados{" "}
              <strong className="text-foreground">depachika</strong>, ofrecen una gama extraordinaria de comida preparada, cajas de bento, wagashi (dulces tradicionales), productos frescos y delicias gourmet, todo presentado con el tipo de cuidado y arte que te hace sentir culpable al comerlo. El sótano de Isetan en particular es legendario entre los amantes de la gastronomía. Los precios son razonables para la calidad: una caja de bento bellamente elaborada cuesta ¥800-1.500, y puedes armar un pícnic increíble para Shinjuku Gyoen sin gastar mucho. Visita alrededor de las 6-7 PM para artículos con descuento cuando los puestos rebajan la comida no vendida antes del cierre.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ramen y Fideos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinjuku es territorio de ramen. En lugar de ir directamente a las conocidas "calles del ramen" que pueden tener esperas de una hora y están muy orientadas a turistas, busca locales independientes en las calles laterales al este de la estación. Fuunji, ubicado cerca de la salida sur, es famoso por sus tsukemen (fideos para mojar) concentrados y siempre tiene cola, pero avanza rápido y el bol vale la pena la espera. Para un ramen shoyu (salsa de soja) más tradicional al estilo de Tokio, los locales en los callejones detrás de la salida este ofrecen lo auténtico a precios honestos, normalmente ¥900-1.200 por bol.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Opciones para la Noche
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una de las mayores fortalezas de Shinjuku es que nunca cierra del todo. Después de medianoche, cuando los trenes dejan de funcionar y las multitudes se reducen ligeramente, la escena gastronómica nocturna de Shinjuku cobra vida para un público diferente: bartenders terminando sus turnos, trabajadores nocturnos y noctámbulos que saben que parte de la mejor comida aparece después del anochecer. Los izakayas (restaurantes tipo pub japoneses) por todo el este de Shinjuku sirven comida hasta las 2-3 AM o más tarde. Las cadenas 24 horas de gyudon (bol de ternera) como Matsuya y Yoshinoya son fiables, baratas y sorprendentemente satisfactorias a las 3 AM. Para algo más especial, busca barras de sushi nocturnas y tiendas de ramen que atienden al público de después de la bebida. La calidad es a menudo excelente porque la clientela es exigente.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Consejos de Presupuesto
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Máquinas expendedoras:</strong> Muchos restaurantes de ramen y restaurantes informales usan máquinas expendedoras para pedir. Compra tu ticket en la máquina junto a la puerta, entrégalo al personal y siéntate. No se requiere japonés; la mayoría de las máquinas tienen fotos.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Menús del día:</strong> Visita los restaurantes de alta gama a la hora del almuerzo en lugar de la cena. Muchos ofrecen menús de almuerzo al 30-50% del precio de la cena con la misma cocina y calidad.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tiendas de conveniencia:</strong> No subestimes el 7-Eleven, Lawson y FamilyMart por sus genuinamente buenos onigiri (bolas de arroz), sándwiches y comidas calientes. La comida de las tiendas de conveniencia japonesas está en una liga propia.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Bares de pie (tachinomi):</strong>{" "}
                Estos bares sin asientos cerca de la estación ofrecen bebidas y pequeños platos a precios mínimos: una cerveza y un aperitivo por menos de ¥500.
              </li>
            </ul>

            {/* Consejos Prácticos */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Consejos Prácticos para Visitar Shinjuku
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Navegación por la estación:</strong> Usa la salida este para Golden Gai, Kabukicho y la vida nocturna. Usa la salida oeste para el edificio del gobierno y los rascacielos. Usa la nueva salida sur para Takashimaya Times Square y Shinjuku Gyoen.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Último tren:</strong> Los trenes paran alrededor de medianoche. Comprueba la hora de tu último tren antes de salir por la noche. Si lo pierdes, tienes tres opciones: un taxi (caro, ¥3.000-10.000 según la distancia), un manga café o un hotel cápsula (¥1.500-3.000 para descansar hasta el primer tren de las 5 AM), o simplemente quedarte fuera toda la noche. Shinjuku es uno de los pocos lugares en Tokio donde esto es completamente viable.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mejor momento del día:</strong> Visita Shinjuku Gyoen por la mañana, explora los grandes almacenes y los mercados gastronómicos por la tarde, ve a Omoide Yokocho al atardecer, y reserva Golden Gai y Kabukicho para después del anochecer. Esta secuencia sigue el ritmo natural del distrito.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mirador gratuito:</strong> Los miradores del Edificio del Gobierno Metropolitano de Tokio están abiertos hasta las 11 PM (torre norte) y las 5:30 PM (torre sur). No se necesita reserva ni hay tarifa de entrada. La vista nocturna desde la torre norte es genuinamente impresionante y rivaliza con los miradores de pago de toda la ciudad.
              </li>
            </ul>

            {/* Shinjuku según la Hora del Día */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Shinjuku según la Hora del Día: La Agenda de un Local
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una de las preguntas que más me hacen los viajeros en mis tours es: "¿Cuándo debería visitar Shinjuku?" La respuesta depende completamente de lo que quieras experimentar. Así planificaría yo un día completo si fuera mi primera vez.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mañana (7:00–9:00): Paseo Matutino por Shinjuku Gyoen
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Empieza el día con la calma que precede a la tormenta. Shinjuku Gyoen abre a las 9 AM (pero los alrededores son tranquilos y agradables para un paseo temprano). Llega justo cuando abran las puertas para disfrutar de los jardines en casi total soledad. El contraste con el caos que experimentarás más tarde hace que este momento sea especialmente gratificante. La luz de la mañana a través del jardín japonés es perfecta para la fotografía, y tendrás las amplias praderas prácticamente para ti solo.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mediodía (12:00–14:00): Estrategia de Almuerzo en Depachika
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dirígete al sótano de los grandes almacenes Isetan o Takashimaya para vivir la experiencia depachika. El truco está en el horario: llega justo antes de la avalancha del almuerzo (sobre las 11:30) o un poco después (13:30) para encontrar la mejor selección sin aglomeraciones. Arma una caja de bento con acompañamientos por una fracción de lo que costaría en un restaurante. Si hace buen tiempo, lleva tu botín del depachika de vuelta a Shinjuku Gyoen para un pícnic. Es exactamente lo que hacen muchos oficinistas tokiotas, y es una de las experiencias de almuerzo más placenteras de la ciudad.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tarde (17:00–19:00): Omoide Yokocho a la Hora Dorada
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la ventana mágica para Omoide Yokocho. Los puestos de yakitori empiezan a encender las brasas, los oficinistas comienzan a llegar tras la jornada laboral, y el sol poniente baña todo con esa luz cálida perfecta que se filtra entre el humo y el vapor. Siéntate en un taburete en uno de los puestos abiertos, pide una cerveza y unas brochetas, y contempla la transición del día a la noche. La atmósfera a esta hora no tiene igual, animada pero aún no agobiante, auténtica y llena de carácter.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Noche (19:00 en adelante): Kabukicho y Golden Gai
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cuando cae la oscuridad, Shinjuku se transforma. Los carteles de neón cobran vida y la energía cambia del comercio diurno al entretenimiento nocturno. Empieza con un paseo por Kabukicho para absorber el espectáculo sensorial: la cabeza gigante de Godzilla, las pantallas monumentales, el bullicio de la gente. Después dirígete a Golden Gai sobre las 8-9 PM, cuando los bares están abiertos pero todavía no abarrotados. Cierra la velada con un ramen nocturno en alguno de los locales de las calles laterales al este de la estación. El día perfecto en Shinjuku termina con un humeante bol de fideos hacia las 11 PM.
            </p>

            {/* Lugares Ocultos */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Lugares Ocultos de Shinjuku que la Mayoría de los Turistas se Pierden
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de años guiando tours por Shinjuku, he recopilado un conjunto de rincones que nunca aparecen en las guías convencionales pero que siempre sorprenden y encantan a mis invitados. Estos son mis favoritos.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">El Santuario Hanazono de noche.</strong> Escondido justo detrás del caos neón de Kabukicho, el Santuario Hanazono es un remanso de serenidad por el que la mayoría de los turistas pasan de largo. El santuario se ilumina por la noche con suaves faroles rojos, creando un contraste surrealista con el distrito de entretenimiento a escasos metros. Visítalo después de las 8 PM para experimentar el efecto completo; pasarás de la sobrecarga sensorial a la contemplación tranquila en unos 30 segundos. El santuario también alberga un popular mercadillo los domingos.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">El mirador sur del Edificio del Gobierno Metropolitano al atardecer.</strong> La mayoría de los visitantes conocen los miradores gratuitos, pero pocos saben que la torre sur cierra a las 5:30 PM mientras la torre norte permanece abierta hasta las 11 PM. La jugada estratégica es visitar la torre sur sobre las 4:30 PM para las vistas del atardecer hacia el oeste (Monte Fuji en días despejados), y luego caminar hasta la torre norte después del anochecer para el paisaje urbano nocturno. Dos miradores, dos experiencias completamente diferentes, cero coste.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">El pasaje subterráneo desde la estación Shinjuku-sanchome.</strong> En lugar de navegar el caos de la estación de Shinjuku, los locales expertos usan la estación Shinjuku-sanchome de la línea Marunouchi, que tiene una conexión subterránea directa con los grandes almacenes Isetan y sale a una zona mucho más tranquila del este de Shinjuku. Este simple consejo puede ahorrarte 15 minutos de deambular confundido por la estación principal.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">La terraza del Takashimaya Times Square.</strong> En las plantas superiores de Takashimaya hay una pequeña terraza en la azotea que ofrece una perspectiva completamente diferente del horizonte de Shinjuku. Casi ningún turista la conoce. Toma el ascensor hasta la última planta, busca la salida a la terraza y disfruta de un momento de calma por encima del caos. Lo mejor es visitarla al final de la tarde.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">El distrito de cámaras de Nishi-Shinjuku.</strong> Las calles inmediatamente al oeste de la estación de Shinjuku (antes de llegar a la zona de rascacielos) albergan varias tiendas de cámaras de segunda mano: Kitamura Camera, Map Camera y otras. Aunque no vayas a comprar, curiosear por estas tiendas es una experiencia genuinamente japonesa, con cámaras y objetivos vintage impecables expuestos como joyas. Los fotógrafos en mis tours siempre me agradecen este desvío.
              </li>
            </ul>

            {/* Shinjuku vs. Shibuya */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Shinjuku vs. Shibuya: ¿Cuál Deberías Visitar?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es una de las preguntas más frecuentes que recibo de los viajeros que planifican su itinerario por Tokio. Ambos barrios son icónicos, pero ofrecen experiencias muy diferentes. Aquí va mi comparación honesta.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Para gastronomía y vida nocturna:</strong> Gana Shinjuku. Golden Gai, Omoide Yokocho y la densidad absoluta de restaurantes y bares hacen de Shinjuku el destino nocturno superior. Shibuya tiene buenas opciones para cenar, pero la variedad y la atmósfera de Shinjuku no tienen rival.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Para compras:</strong> Shibuya lleva ventaja, sobre todo en moda. Shibuya 109, el complejo Miyashita Park y la cercana calle Takeshita de Harajuku ofrecen una experiencia de compras más joven y a la vanguardia de las tendencias.{" "}
                <Link to="/es/tours/shibuya-harajuku" className="text-accent hover:underline">
                  Nuestro tour por Shibuya y Harajuku
                </Link>{" "}
                cubre lo mejor de esta zona. Los grandes almacenes de Shinjuku (Isetan, Takashimaya) son mejores para compras de gama alta y lujo.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Para fotos de Instagram:</strong> Shibuya tiene el famoso Cruce de Scramble, que merece verse al menos una vez. Los callejones iluminados de neón de Shinjuku (Golden Gai, la entrada de Kabukicho) ofrecen fotos igual de espectaculares pero con un carácter más crudo y atmosférico.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Para espacios verdes:</strong> Shinjuku gana con facilidad gracias a Shinjuku Gyoen. Shibuya tiene el Parque Yoyogi y el bosque del Santuario Meiji cerca, pero Shinjuku Gyoen ofrece una experiencia de jardín superior.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mi recomendación si vas a visitar ambos:</strong> Visita Shibuya y Harajuku durante el día (conectan de forma natural), y luego dirígete a Shinjuku a última hora de la tarde para pasar allí la velada. Las dos zonas están separadas por una sola parada en la línea JR Yamanote, lo que hace esta combinación fácil y eficiente.
            </p>

            {/* Guía de Supervivencia de la Estación */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Moverse por Shinjuku: Guía de Supervivencia de la Estación
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La estación de Shinjuku es oficialmente la estación de tren más transitada del mundo, con más de 3,5 millones de pasajeros diarios. Está servida por JR East, Odakyu, Keio, Tokyo Metro y Toei Subway, con más de 200 salidas conectadas a un laberinto subterráneo de pasillos comerciales. Incluso los tokiotas se pierden aquí a veces. Así es como puedes navegarla como un profesional.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Las Cuatro Salidas Clave
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Salida Este (東口 / Higashi-guchi):</strong> Úsala para Kabukicho, Golden Gai, el Santuario Hanazono y la zona de restaurantes del este de Shinjuku. Es la salida que más usarás para la vida nocturna y la gastronomía.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Salida Oeste (西口 / Nishi-guchi):</strong> Úsala para el Edificio del Gobierno Metropolitano de Tokio (miradores gratuitos), el distrito de rascacielos, Omoide Yokocho y los hoteles de la zona. El lado oeste es más tranquilo y corporativo.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Salida Sur (南口 / Minami-guchi):</strong> Úsala para Takashimaya Times Square, el paseo Southern Terrace y el acceso a Shinjuku Gyoen (a unos 10 minutos a pie). La zona de la salida sur es un buen punto de encuentro porque tiene referencias claras y espacio abierto.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Nueva Salida Sur (新南口 / Shin-minami-guchi):</strong> Úsala para la Terminal de Autobuses de Shinjuku (Busta Shinjuku), que gestiona autobuses de larga distancia a destinos por todo Japón. También es útil para acceder a la zona de Shinjuku Gyoen desde un ángulo ligeramente diferente.
              </li>
            </ul>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Consejos de Supervivencia para la Estación
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Sigue los carteles de colores.</strong> Cada compañía ferroviaria usa un color diferente (JR es verde, Odakyu es azul, Keio es rosa/rojo, Metro usa varios colores según la línea). Sigue el color que necesites e ignora todo lo demás.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Usa la navegación interior de Google Maps.</strong> Google Maps tiene mapas interiores detallados de la estación de Shinjuku. Introduce tu destino y te guiará hasta la salida correcta. Esto solo puede ahorrarte 20 minutos de deambular perdido.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Evita la hora punta.</strong> Entre las 7:30–9:00 AM y las 5:30–7:30 PM, la estación se convierte en una marea humana de viajeros. Si es posible, programa tus trayectos fuera de estas franjas. La estación es mucho más tranquila (y navegable) fuera de las horas pico.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Si te pierdes, sube.</strong> Si estás desorientado bajo tierra, busca cualquier escalera que suba y sal a nivel de calle. Una vez en la superficie, puedes reorientarte usando los rascacielos (oeste) o los carteles de neón (este) como referencia, y volver a entrar a la estación por la entrada correcta.
              </li>
            </ul>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres explorar Shinjuku con un guía experto que conoce cada rincón oculto?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Shinjuku se experimenta mejor con un guía local que pueda navegar los callejones ocultos, presentarte a los acogedores dueños de bares en Golden Gai y alejarte de las trampas para turistas. Ya sea que quieras una velada curada por las callejuelas iluminadas de neón o una exploración de día completo del distrito, diseñaremos algo perfecto para ti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/custom" className="btn-accent">
                  Ver Opciones de Tour Personalizado
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Contáctanos
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
                    ¿Es seguro Shinjuku por la noche?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí, Shinjuku es en general muy seguro por la noche, incluyendo el distrito de entretenimiento de Kabukicho. Japón tiene una de las tasas de criminalidad más bajas del mundo, y los delitos violentos contra turistas son extremadamente raros. Lo principal a lo que hay que prestar atención son los captadores que intentan atraerte a bares con precios inflados. Simplemente rechaza y sigue caminando. Quédate en calles bien iluminadas, no aceptes bebidas de desconocidos y usa el sentido común. Guío regularmente tours nocturnos por Shinjuku y nunca he tenido un incidente de seguridad.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Cuánto tiempo debería pasar en Shinjuku?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Para una visita completa, planifica entre medio día y un día entero. Si vas corto de tiempo, una visita nocturna (a partir de las 5 PM) captura Shinjuku en su momento más atmosférico: empieza con Omoide Yokocho al atardecer, explora Kabukicho y Golden Gai tras el anochecer, y termina con un ramen nocturno. Si puedes dedicar un día completo, añade tiempo por la mañana en Shinjuku Gyoen y una tarde explorando los grandes almacenes y los mercados gastronómicos.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Por qué es más conocido Shinjuku?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shinjuku es más conocido por su vibrante vida nocturna (Golden Gai y Kabukicho), la estación de tren más transitada del mundo, las impresionantes vistas gratuitas desde los miradores del Edificio del Gobierno Metropolitano de Tokio, el Jardín Nacional Shinjuku Gyoen y su increíble densidad de restaurantes y bares. Es esencialmente Tokio a máxima intensidad: luces de neón, edificios imponentes y opciones de entretenimiento interminables concentrados en un solo barrio.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    ¿Es seguro Kabukicho para los turistas?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kabukicho es seguro para los turistas y se ha limpiado considerablemente en los últimos años con mayor presencia policial y desarrollos aptos para familias. El principal riesgo es ser abordado por captadores que intentan atraerte a bares o clubes con promesas de bebidas baratas, que suelen acabar en cuentas infladas. La regla simple es: si alguien te aborda en la calle, rechaza educadamente y sigue adelante. Quédate con establecimientos que tengan precios claramente publicados y buenas reseñas, y pasarás un rato estupendo.
                  </p>
                </div>
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
            "headline": "Guía de Shinjuku: El Corazón Iluminado de Neón de Tokio",
            "description":
              "La guía completa de Shinjuku escrita por un guía de Tokio con licencia. Lugares ocultos, mejores horarios, cómo sobrevivir a la estación y consejos que no encontrarás en ninguna guía.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/guia-shinjuku",
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
                "name": "¿Es seguro Shinjuku por la noche?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, Shinjuku es en general muy seguro por la noche, incluyendo Kabukicho. Japón tiene una de las tasas de criminalidad más bajas del mundo. Lo principal a lo que hay que prestar atención son los captadores que intentan atraerte a bares con precios inflados. Simplemente rechaza y sigue caminando. Usa el sentido común y quédate en calles bien iluminadas.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Cuánto tiempo debería pasar en Shinjuku?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Planifica entre medio día y un día entero para una visita completa. Si vas corto de tiempo, una visita nocturna (a partir de las 5 PM) captura Shinjuku en su momento más atmosférico. Para un día completo, añade tiempo por la mañana en Shinjuku Gyoen y una tarde explorando los grandes almacenes y los mercados gastronómicos.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Por qué es más conocido Shinjuku?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shinjuku es más conocido por su vibrante vida nocturna (Golden Gai y Kabukicho), la estación de tren más transitada del mundo, los miradores gratuitos del Edificio del Gobierno Metropolitano de Tokio, el Jardín Nacional Shinjuku Gyoen y su increíble densidad de restaurantes y bares.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Es seguro Kabukicho para los turistas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kabukicho es seguro para los turistas y se ha limpiado considerablemente en los últimos años. El principal riesgo son los captadores que te abordan en la calle para atraerte a bares. Simplemente rechaza y sigue caminando. Quédate con establecimientos que tengan precios claramente publicados y buenas reseñas.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default EsGuiaShinjuku;
