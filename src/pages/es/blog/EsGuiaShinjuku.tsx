// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsGuiaShinjuku = () => {
  return (
    <Layout>
      <SEO
        title="Guía de Shinjuku — El Corazón de Tokio | Guía Local"
        description="Guía de Shinjuku escrita por un guía japonés nativo. Golden Gai, Omoide Yokocho, Kabukicho y los mejores lugares donde comer y beber como un local."
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
            <Link
              to="/es/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>
            <p className="text-label text-accent mb-3">Guías de Barrios de Tokio</p>
            <h1 className="heading-display text-foreground">
              Guía de Shinjuku — El Corazón Iluminado de Neón de Tokio
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

      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px]">
        <img
          src="/images/blog/shinjuku-guide-hero.jpg"
          alt="Guía de Shinjuku - navegando el corazón iluminado de neón de Tokio"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              La estación de Shinjuku gestiona 3,5 millones de pasajeros al día, lo que la convierte en el centro de transporte más transitado del planeta. Si llegas sin un plan, puede resultar genuinamente abrumador — la estación por sí sola tiene más de 200 salidas, y las calles de la superficie son un asalto sensorial de carteles de neón, viajeros apresurados y anuncios por altavoz compitiendo entre sí. Pero una vez que aprendes cómo está distribuido Shinjuku y entiendes lo que ofrece cada rincón del distrito, este barrio se transforma de un obstáculo caótico en una de las zonas más gratificantes de Tokio para explorar. Llevo años guiando visitantes por Shinjuku, y sigue siendo mi distrito favorito para mostrar a la gente por la noche. Simplemente no hay otro lugar en el mundo como este.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Esta guía cubre todo lo que necesitas para recorrer Shinjuku con confianza — desde el lado oeste lleno de rascacielos hasta el lado este repleto de entretenimiento, desde los diminutos bares de Golden Gai hasta la serena belleza de Shinjuku Gyoen. Compartiré los mismos consejos que doy a mis invitados en los tours: dónde ir, qué saltarse, cuánto presupuestar y la etiqueta que hará tu experiencia más fluida.
            </p>

            {/* Orientarse */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Orientarse: Los Dos Lados de Shinjuku
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La clave para entender Shinjuku es saber que las vías del tren lo dividen en dos mundos completamente diferentes.{" "}
              <strong className="text-foreground">Shinjuku Oeste</strong> es el distrito de negocios y gobierno — una cuadrícula de rascacielos imponentes, sedes corporativas y amplias avenidas que parecen casi americanas en su escala. El Edificio del Gobierno Metropolitano de Tokio domina el horizonte aquí, y sus dos miradores gemelos en el piso 45 ofrecen vistas panorámicas gratuitas de la ciudad. En días despejados, se puede ver el Monte Fuji a lo lejos. Aquí también encontrarás el Park Hyatt Tokyo, famoso por la película{" "}
              <em>Lost in Translation</em> — el New York Bar en el piso 52 vale la pena solo por la vista, aunque las bebidas empiezan alrededor de ¥2.500 y hay un cargo de entrada por la noche.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Shinjuku Este</strong> es donde vive la energía. Sal por la salida este y te verás inmediatamente arrastrado por un río de personas que fluyen hacia Kabukicho, Golden Gai y los innumerables restaurantes, izakayas y locales de entretenimiento que hacen que este lado de Shinjuku se sienta vivo las 24 horas del día. El lado este es más ruidoso, más desordenado, más colorido y mucho más interesante para la mayoría de los visitantes. Si solo tienes una noche en Shinjuku, pásala aquí.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Consejo de navegación:</strong> No intentes cruzar la estación caminando para ir de oeste a este. Usa el vestíbulo de la salida sur — conecta ambos lados a nivel de calle y es mucho menos confuso que los pasajes subterráneos. Alternativamente, la salida Southern Terrace cerca de Takashimaya Times Square te da un punto de orientación claro en el lado sur.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/shinjuku-golden-gai-bars.jpg"
                alt="Golden Gai - distrito de bares íntimos en Shinjuku"
                className="w-full rounded-lg"
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
              Golden Gai es diferente a todo lo que existe en la Tierra. Apiñados en seis estrechos callejones apenas lo suficientemente anchos para que pasen dos personas, encontrarás más de 200 diminutos bares — la mayoría con capacidad para no más de seis a ocho personas. No son elegantes coctelerías; son habitaciones estrechas, con carácter y aroma a humo, presididas por un único bartender-propietario, o "mama" o "master", que establece las reglas, la música y la atmósfera. Cada bar tiene su propia identidad — algunos se especializan en jazz, otros en películas de terror, punk rock, fotografía o simplemente en la conversación con el dueño.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">La etiqueta importa aquí.</strong> La mayoría de los bares cobran una entrada (normalmente ¥500-1.500), que está claramente indicada en o cerca de la puerta. Esta es una práctica estándar, no una estafa — el cargo de entrada ayuda a estos diminutos negocios a sobrevivir con solo un puñado de clientes por noche. Siempre revisa el cartel antes de entrar. Algunos bares son solo para habituales donde el dueño atiende al mismo pequeño grupo de amigos noche tras noche. Estos a veces tendrán un cartel indicando que son solo para miembros o simplemente se sentirán poco acogedores — no insistas. Pasa a la puerta siguiente. Muchos bares ahora dan la bienvenida activamente a los turistas y muestran menús en inglés o carteles de "Welcome". Empieza con esos si es tu primera visita.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Mejor momento para visitar:</strong> Noches entre semana entre las 8 PM y las 10 PM. Esta franja te da la atmósfera auténtica sin las multitudes del fin de semana, y la mayoría de los bares estarán abiertos pero aún no llenos. Los viernes y sábados por la noche después de las 10 PM pueden estar extremadamente concurridos, con colas formándose fuera de los locales más populares. Presupuesta alrededor de ¥1.000-2.000 por bar (cargo de entrada más una o dos bebidas), y planea visitar dos o tres bares a lo largo de la noche. Ese es el ritmo de Golden Gai — no estás destinado a pasar toda la noche en un solo lugar. La alegría está en ir de un sitio a otro, en descubrir, en las conversaciones aleatorias con desconocidos en un espacio tan pequeño que tus codos se tocan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una cosa más: no tomes fotos dentro sin preguntar. Muchos bartenders y habituales prefieren la privacidad. Los estrechos callejones en sí son territorio libre para la fotografía, y lucen espectaculares de noche con todos los carteles iluminados, pero una vez dentro deberías preguntar primero. Es un pequeño gesto que marca una gran diferencia.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/shinjuku-omoide-yokocho.jpg"
                alt="Omoide Yokocho Memory Lane - yakitori bajo las vías del tren"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Omoide Yokocho — humo, yakitori y cerveza fría bajo las vías
              </figcaption>
            </figure>

            {/* Omoide Yokocho */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Omoide Yokocho (Callejón de los Recuerdos)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ubicado justo al lado de la salida oeste de la estación de Shinjuku, Omoide Yokocho — también conocido por su apodo menos elegante "Callejón del Pis" — es una estrecha franja de puestos de yakitori y diminutos restaurantes que ha sobrevivido desde la era del mercado negro de posguerra de los años 1940. La atmósfera es el verdadero atractivo: humo elevándose de las parrillas de carbón, faroles balanceándose sobre las cabezas, el tintineo de los vasos de cerveza y el retumbar de los trenes pasando a apenas metros de altura. Al atardecer, cuando la luz dorada se filtra a través del vapor y el humo, Omoide Yokocho es uno de los lugares más fotogénicos de todo Tokio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Una evaluación honesta:</strong> La atmósfera es mucho mejor que la comida. El yakitori es decente pero no excepcional — puedes encontrar pollo a la parrilla superior en restaurantes especializados de yakitori en otras partes de Shinjuku a precios similares. Lo que estás pagando aquí es la experiencia de comer codo con codo con oficinistas en diminutos taburetes, bajo bombillas desnudas, en un entorno que parece un decorado de película de los años 1950. ¿Vale la pena? Absolutamente — solo ven con las expectativas adecuadas. Pide una cerveza, unas brochetas de piel de pollo y tsukune (albóndigas de pollo), y empápate del ambiente. Presupuesta alrededor de ¥1.500-2.500 por persona para unas brochetas y bebidas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Horario:</strong> Visita alrededor de las 5-6 PM para conseguir asiento fácilmente y captar la luz del atardecer. A las 7 PM, los puestos más populares están llenos y puede que tengas que esperar. Tarde por la noche (después de las 10 PM), se vacía de nuevo y adquiere un encanto diferente, más tranquilo.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/shinjuku-gyoen-garden.jpg"
                alt="Jardín Nacional Shinjuku Gyoen - un escape tranquilo en Tokio"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Shinjuku Gyoen — un escape tranquilo de la energía urbana circundante
              </figcaption>
            </figure>

            {/* Shinjuku Gyoen */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Shinjuku Gyoen: Un Oasis Inesperado
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Parece imposible que uno de los jardines más bellos de Tokio se encuentre a solo diez minutos a pie del caos de Kabukicho, pero ese contraste es parte de lo que hace especial a Shinjuku Gyoen. Originalmente residencia de un señor feudal durante el período Edo, luego jardín imperial, Shinjuku Gyoen abrió al público después de la Segunda Guerra Mundial y ahora abarca 58 hectáreas de paisajes meticulosamente mantenidos. El parque combina tres estilos de jardín distintos — formal francés, paisajístico inglés y japonés tradicional — cada uno fluyendo hacia el siguiente de manera tan natural que apenas notas las transiciones.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">La temporada de cerezos en flor</strong> es cuando Shinjuku Gyoen realmente brilla. Mientras que el Parque Ueno atrae multitudes masivas que pueden parecer más un festival de música que una experiencia de hanami (contemplación de flores), Shinjuku Gyoen aplica una estricta política de prohibición de alcohol y limita la entrada cuando se alcanza la capacidad. El resultado es una experiencia de contemplación de cerezos mucho más tranquila. El parque también cuenta con más de una docena de variedades de cerezo que florecen en diferentes momentos desde mediados de marzo hasta finales de abril, ofreciéndote una ventana de contemplación más amplia que la mayoría de otros lugares de la ciudad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La entrada cuesta ¥500 para adultos, y el parque está cerrado los lunes (o el día siguiente si el lunes es festivo). El horario varía según la temporada pero generalmente es de 9 AM a 4:30 PM (última entrada a las 4 PM). Trae un bento de un konbini cercano o un depachika y almuerza en la gran pradera — es la pausa perfecta a mediodía de la intensidad de Shinjuku. El invernadero cerca de la entrada principal alberga una impresionante colección de plantas tropicales si quieres extender tu visita.
            </p>

            {/* Kabukicho */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Kabukicho: La Capital del Entretenimiento de Tokio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kabukicho es el distrito de entretenimiento de Shinjuku, y lleva su reputación a todo volumen. El gigantesco arco de neón, las enormes pantallas de video, los sonidos compitiendo de los salones de pachinko y las cadenas de karaoke — es Tokio al máximo volumen. A pesar de su reputación algo turbia,{" "}
              <strong className="text-foreground">Kabukicho es generalmente seguro para los turistas</strong>, incluso tarde por la noche. La zona se ha limpiado considerablemente en los últimos años, con mayor presencia policial y el desarrollo de complejos de entretenimiento aptos para familias.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Estafas a las que estar atento:</strong> El principal riesgo en Kabukicho viene de los captadores — personas en la calle intentando atraerte a bares o clubes. La regla es simple: si alguien te aborda en la calle, declina y sigue caminando. Los establecimientos legítimos no necesitan reclutar clientes desde la acera. Ten especial cuidado con cualquiera que ofrezca bebidas "gratis" o ofertas sospechosamente baratas — estas casi siempre llevan a cuentas infladas. Quédate con los lugares que hayas investigado de antemano o que tengan precios claramente publicados, y estarás bien.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para entretenimiento, la zona tiene muchas opciones legítimas y divertidas. La cabeza de Godzilla sobre el Hotel Gracery es un hito imprescindible — la mejor vista es desde la calle de abajo o desde la terraza-café del hotel en el 8.º piso, donde puedes acercarte notablemente a la bestia. El karaoke también es una experiencia quintaesencial de Kabukicho — grandes cadenas como Big Echo y Karaoke Kan (el de <em>Lost in Translation</em>) ofrecen salas privadas a precios razonables, especialmente durante el día y las happy hours de la tarde. Si has oído hablar del Robot Restaurant, ten en cuenta que cerró permanentemente en 2021. El espacio ha sido reemplazado por otros locales de entretenimiento, pero nada iguala la absurdidad controlada del original.
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
              Los pisos del sótano de los grandes almacenes Isetan, Takashimaya y Odakyu son maravillas culinarias que la mayoría de los turistas pasan de largo. Los mercados gastronómicos de los grandes almacenes japoneses — llamados{" "}
              <strong className="text-foreground">depachika</strong> — ofrecen una gama extraordinaria de comida preparada, cajas de bento, wagashi (dulces tradicionales), productos frescos y delicias gourmet, todo presentado con el tipo de cuidado y arte que te hace sentir culpable al comerlo. El sótano de Isetan en particular es legendario entre los amantes de la gastronomía. Los precios son razonables para la calidad — una caja de bento bellamente elaborada cuesta ¥800-1.500, y puedes armar un pícnic increíble para Shinjuku Gyoen sin gastar mucho. Visita alrededor de las 6-7 PM para artículos con descuento cuando los puestos rebajan la comida no vendida antes del cierre.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ramen y Fideos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinjuku es territorio de ramen. En lugar de ir directamente a las conocidas "calles del ramen" que pueden tener esperas de una hora y están muy orientadas a turistas, busca locales independientes en las calles laterales al este de la estación. Fuunji, ubicado cerca de la salida sur, es famoso por sus tsukemen (fideos para mojar) concentrados y siempre tiene cola — pero avanza rápido y el bol vale la pena la espera. Para un ramen shoyu (salsa de soja) más tradicional al estilo de Tokio, los locales en los callejones detrás de la salida este ofrecen lo auténtico a precios honestos, normalmente ¥900-1.200 por bol.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Opciones para la Noche
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una de las mayores fortalezas de Shinjuku es que nunca cierra del todo. Después de medianoche, cuando los trenes dejan de funcionar y las multitudes se reducen ligeramente, la escena gastronómica nocturna de Shinjuku cobra vida para un público diferente — bartenders terminando sus turnos, trabajadores nocturnos y noctámbulos que saben que parte de la mejor comida aparece después del anochecer. Los izakayas (restaurantes tipo pub japoneses) por todo el este de Shinjuku sirven comida hasta las 2-3 AM o más tarde. Las cadenas 24 horas de gyudon (bol de ternera) como Matsuya y Yoshinoya son fiables, baratas y sorprendentemente satisfactorias a las 3 AM. Para algo más especial, busca barras de sushi nocturnas y tiendas de ramen que atienden al público de después de la bebida — la calidad es a menudo excelente porque la clientela es exigente.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Consejos de Presupuesto
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Máquinas expendedoras:</strong> Muchos restaurantes de ramen y restaurantes informales usan máquinas expendedoras para pedir. Compra tu ticket en la máquina junto a la puerta, entrégalo al personal y siéntate. No se requiere japonés — la mayoría de las máquinas tienen fotos.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Menús del día:</strong> Visita los restaurantes de alta gama a la hora del almuerzo en lugar de la cena. Muchos ofrecen menús de almuerzo al 30-50% del precio de la cena con la misma cocina y calidad.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tiendas de conveniencia:</strong> No subestimes el 7-Eleven, Lawson y FamilyMart por sus genuinamente buenos onigiri (bolas de arroz), sándwiches y comidas calientes. La comida de las tiendas de conveniencia japonesas está en una liga propia.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Bares de pie (tachinomi):</strong>{" "}
                Estos bares sin asientos cerca de la estación ofrecen bebidas y pequeños platos a precios mínimos — una cerveza y un aperitivo por menos de ¥500.
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
                <strong className="text-foreground">Último tren:</strong> Los trenes paran alrededor de medianoche. Comprueba la hora de tu último tren antes de salir por la noche. Si lo pierdes, tienes tres opciones: un taxi (caro, ¥3.000-10.000 según la distancia), un manga café o un hotel cápsula (¥1.500-3.000 para descansar hasta el primer tren de las 5 AM), o simplemente quedarte fuera toda la noche — Shinjuku es uno de los pocos lugares en Tokio donde esto es completamente viable.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mejor momento del día:</strong> Visita Shinjuku Gyoen por la mañana, explora los grandes almacenes y los mercados gastronómicos por la tarde, ve a Omoide Yokocho al atardecer, y reserva Golden Gai y Kabukicho para después del anochecer. Esta secuencia sigue el ritmo natural del distrito.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mirador gratuito:</strong> Los miradores del Edificio del Gobierno Metropolitano de Tokio están abiertos hasta las 11 PM (torre norte) y las 5:30 PM (torre sur). No se necesita reserva ni hay tarifa de entrada. La vista nocturna desde la torre norte es genuinamente impresionante y rivaliza con los miradores de pago de toda la ciudad.
              </li>
            </ul>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Descubre Shinjuku con un Local que Sabe Qué Puertas Abrir
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Shinjuku se experimenta mejor con un guía local que pueda navegar los callejones ocultos, presentarte a los acogedores dueños de bares en Golden Gai y alejarte de las trampas para turistas. Ya sea que quieras una velada curada por las callejuelas iluminadas de neón o una exploración de día completo del distrito, diseñaremos algo perfecto para ti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/custom" className="btn-accent">
                  Diseña un Tour Nocturno Personalizado
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Contáctanos
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
            "headline": "Guía de Shinjuku — El Corazón Iluminado de Neón de Tokio",
            "description":
              "Guía de Shinjuku escrita por un guía japonés nativo. Golden Gai, Omoide Yokocho, Kabukicho y los mejores lugares donde comer y beber como un local.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/guia-shinjuku",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsGuiaShinjuku;
