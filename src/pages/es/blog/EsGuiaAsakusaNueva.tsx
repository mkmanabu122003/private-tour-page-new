import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsGuiaAsakusaNueva = () => {
  return (
    <Layout>
      <SEO
        title="Guía Asakusa 2026: Qué Ver, Evitar y Secretos"
        description="La mayoría solo ve Senso-ji y se va. Un guía oficial comparte rincones ocultos, mejores horarios y 4 sitios que todos ignoran."
        canonicalPath="/es/blog/guia-asakusa-completa"
        hreflang={[
          { lang: "en", path: "/blog/asakusa-guide" },
          { lang: "es", path: "/es/blog/guia-asakusa-completa" },
          { lang: "x-default", path: "/blog/asakusa-guide" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/asakusa-guide-hero.webp"
          alt="Amanecer en el Templo Senso-ji en Asakusa antes de la llegada de las multitudes"
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
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><Link to="/es" className="hover:text-foreground transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/es/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground">Guía Asakusa</li>
              </ol>
            </nav>
            <p className="text-label text-accent mb-3">Guías de Barrios de Tokio</p>
            <h1 className="heading-display text-foreground">
              Guía de Asakusa: Qué Ver, Qué Evitar y Cómo Visitarlo Antes de las 9
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
            <p className="mt-4 text-sm text-muted-foreground italic">
              Última actualización: abril 2026
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Asakusa es el barrio que mejor conozco de todo Tokio. Llevo tours aquí casi a diario, y después de cientos de visitas sigo descubriendo cosas nuevas: la forma en que la luz de la mañana atraviesa el humo del incienso en Senso-ji, o un taller de artesanía que de algún modo nunca había visto. Pero también veo el mismo error repetirse entre los visitantes todos los días: llegan al mediodía, siguen a la multitud por la calle principal, se hacen una foto con el gran farolillo rojo y se van a los 45 minutos creyendo que ya "conocen" Asakusa. No han arañado ni la superficie.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Esta guía de Asakusa es la que me gustaría entregar a cada visitante antes de que baje del tren. Cubre lo que realmente importa, lo que puedes saltarte sin remordimientos y cómo planificar tu visita para vivir el barrio en su mejor momento. Tanto si preparas tu primer viaje a Tokio como si vuelves para profundizar en la ciudad vieja, aquí tienes todo lo que he aprendido en años sobre el terreno.
            </p>

            {/* Best Times Table */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Mejores Horarios para Visitar Asakusa
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead className="bg-secondary/60">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-foreground">Horario</th>
                    <th className="text-left px-4 py-3 font-medium text-foreground">Nivel de gente</th>
                    <th className="text-left px-4 py-3 font-medium text-foreground">Lo mejor de ese momento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 text-foreground font-medium">6:30 - 8:00</td>
                    <td className="px-4 py-3 text-muted-foreground">Casi vacío</td>
                    <td className="px-4 py-3 text-muted-foreground">Fotos sin nadie, ritual del incienso con locales, luz dorada</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-foreground font-medium">8:00 - 9:30</td>
                    <td className="px-4 py-3 text-muted-foreground">Poco tránsito</td>
                    <td className="px-4 py-3 text-muted-foreground">Nakamise abriendo, desayuno en cafeterías locales</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-foreground font-medium">10:00 - 15:00</td>
                    <td className="px-4 py-3 text-muted-foreground">Lleno (pico turístico)</td>
                    <td className="px-4 py-3 text-muted-foreground">Todas las tiendas abiertas, pero colas y aglomeraciones</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-foreground font-medium">15:00 - 17:00</td>
                    <td className="px-4 py-3 text-muted-foreground">Se va vaciando</td>
                    <td className="px-4 py-3 text-muted-foreground">Buena luz para fotos, ambiente más relajado</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-foreground font-medium">18:00 - 21:00</td>
                    <td className="px-4 py-3 text-muted-foreground">Tranquilo</td>
                    <td className="px-4 py-3 text-muted-foreground">Templo iluminado, Hoppy Street en su apogeo, cena izakaya</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mi recomendación personal: combina la primera franja (temprano por la mañana) con una visita nocturna. Son dos Asakusas completamente distintos en el mismo día.
            </p>

            {/* Section 1: Why I Always Start Tours at 7am */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Por Qué Siempre Empiezo los Tours a las 7 de la Mañana
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/asakusa-sensoji-pagoda.webp"
                alt="Recinto vacío del Templo Senso-ji al amanecer en Asakusa"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Senso-ji a las 7 de la mañana: una experiencia completamente distinta a la del mediodía
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La gente me mira raro cuando sugiero quedar a las 7 de la mañana. Lo entiendo. Estás de vacaciones y madrugar suena a lo contrario de descansar. Pero escúchame, porque este es el consejo más importante de toda esta guía de Asakusa: el barrio antes de las 9 y el barrio después de las 10 son dos lugares completamente distintos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A las 7 de la mañana, Senso-ji está casi vacío. El recinto del templo está abierto las 24 horas, y a primera hora solo encontrarás un puñado de vecinos haciendo sus plegarias diarias, algún corredor y algún fotógrafo ocasional. La calle comercial Nakamise está cerrada a cal y canto, con las persianas metálicas bajadas, y lo que ves en su lugar es la arquitectura en sí: los marcos de madera de las tiendas, los faroles de piedra, la disposición centenaria de la entrada. Sin multitudes, puedes sentir la escala de este lugar. Es enorme, es antiguo, y tiene una gravedad serena que desaparece por completo cuando llegan los autobuses turísticos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El caldero del incienso en el salón principal ya está encendido a primera hora. Los vecinos vienen como parte de su rutina diaria. Se llevan el humo hacia el cuerpo, dirigiéndolo a la parte que necesita curación. Una rodilla dolorida recibe el humo en la rodilla. Un dolor de cabeza, en la cabeza. No es una actuación para turistas; es una práctica espiritual viva que lleva ocurriendo cada mañana desde hace siglos. A las 7 de la mañana puedes colocarte junto al caldero, participar tú mismo del ritual y absorber la experiencia. Al mediodía, estarías luchando contra un muro de palos de selfie.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mi recomendación: llega a la estación de Asakusa a las 6:45. Camina hasta la Puerta Kaminarimon. Probablemente estarás a solas con ella, algo extraordinario si piensas que unos 30 millones de personas visitan este punto cada año. Tómate tu tiempo recorriendo la entrada vacía de Nakamise. Llega al salón principal a las 7, haz el ritual del incienso, saca una papeleta de la fortuna y explora el recinto. Hacia las 8:30 empieza a llegar la primera oleada de visitantes. A las 9:30, la transformación es total. Habrás vivido dos versiones distintas de Asakusa en una sola mañana, y entenderás perfectamente por qué insisto en empezar temprano.
            </p>

            {/* Section 2: Senso-ji */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Senso-ji: Lo Que Realmente Estás Viendo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mayoría de los visitantes trata Senso-ji como un fondo para fotos. Ven el gran farolillo rojo, la puerta colorida, la pagoda al fondo, y asumen que eso es toda la historia. Pero este templo lleva aquí desde el año 645 d.C., casi 1.400 años, y cada elemento que ves tiene capas y capas de significado. Una buena guía de Asakusa debería ayudarte a leer el lugar como un libro, así que te voy a explicar lo que realmente estás mirando.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Kaminarimon: La Puerta del Trueno.</strong> Esta es la entrada icónica, la del enorme farolillo rojo. Piensa en ella como la puerta principal de una catedral. Marca la transición del mundo cotidiano al espacio sagrado. La puerta está flanqueada por dos figuras guardianas feroces. A la derecha está Fujin, el dios del viento, y a la izquierda Raijin, el dios del trueno. Son protectores, porteros espirituales si quieres, que alejan el mal y la desgracia. Sus expresiones talladas son deliberadamente aterradoras, igual que las gárgolas de una catedral gótica sirven para ahuyentar demonios. El farolillo que cuelga entre ellos pesa unos 700 kilogramos y está pintado a mano. Ha sido destruido y reconstruido varias veces a lo largo de la historia, por incendios, terremotos y guerras, y cada vez el barrio ha reunido los fondos para reconstruirlo. El farolillo actual fue donado por la empresa Matsushita Electric (hoy Panasonic) en 1960. Fíjate en la parte inferior del farolillo y verás un dragón tallado, un detalle que casi nadie nota.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Hozomon: La Puerta de la Casa del Tesoro.</strong> Esta es la segunda puerta, más grande, por la que la mayoría pasa sin pensárselo dos veces. Se llama Puerta de la Casa del Tesoro porque los pisos superiores guardan una colección de sutras budistas antiguos. Mira hacia arriba cuando la atravieses. El techo tiene unos paneles pintados preciosos que pocos visitantes notan. En la cara trasera de esta puerta, mirando hacia el salón principal, encontrarás un par de sandalias de paja enormes (waraji). Miden unos 4,5 metros de alto y pesan alrededor de 500 kilogramos cada una. Fueron tejidas por voluntarios de la Prefectura de Yamagata como ofrenda al templo, y simbolizan el poder de los guardianes budistas. Vienen a decir: "Los protectores de este templo son tan enormes que estas son sus sandalias." Es una pieza maravillosa de narración visual.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Las Papeletas de la Fortuna (Omikuji).</strong> Sacar una fortuna en Senso-ji es casi obligatorio, y el proceso es sencillo: echa una moneda de 100 yenes en la caja, agita el cilindro de metal hasta que caiga un palito numerado, busca el cajón correspondiente y saca tu papeleta de la fortuna. Lo que hace únicas las fortunas de Senso-ji es que aproximadamente el 30% son de "mala suerte" (kyo), un porcentaje mucho más alto que en la mayoría de los templos de Japón. No es un error ni un truco para turistas. Así es como se calculaba tradicionalmente la distribución de fortunas. La mayoría de los otros templos han ajustado silenciosamente sus proporciones con los años para mantener contentos a los visitantes, pero Senso-ji mantiene las proporciones auténticas. Si te toca mala suerte, la tradición es doblar la papeleta y atarla a la rejilla metálica junto al puesto de fortunas. Literalmente dejas la mala suerte en el templo en vez de llevártela contigo. Si te toca buena suerte, guárdala en la cartera.
            </p>

            <InlineCTAEs message="¿Quieres descubrir las historias detrás de los templos de Asakusa?" href="/es/tours" />

            {/* Section 3: Beyond the Temple - What Most Tourists Miss */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Más Allá del Templo: Las Calles Que la Mayoría Se Pierde
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/asakusa-hoppy-street.webp"
                alt="Calle Hoppy en Asakusa con faroles e izakayas locales"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Hoppy Street, el corazón de la vida local de Asakusa, a pocos minutos de Senso-ji
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si Senso-ji es la puerta principal de Asakusa, las calles que lo rodean son el salón, y la mayoría de los visitantes nunca entra. Aquí es donde el viejo espíritu del shitamachi (el centro popular) de Tokio sigue vivo, en callejones estrechos y tiendas familiares que llevan aquí desde hace generaciones. Si quieres entender por qué este barrio importa más allá de su famoso templo, necesitas perderte un poco.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Hoppy Street (Hoppy-dori).</strong> Camina unos minutos al oeste de Senso-ji y encontrarás este callejón estrecho de izakayas al aire libre, pequeños bares japoneses que sacan sus mesas y sillas de plástico directamente a la acera. La calle toma su nombre de Hoppy, un sustituto de la cerveza con poco alcohol que se popularizó después de la guerra, cuando la cerveza de verdad era un lujo que la mayoría de familias trabajadoras no podían permitirse. La bebida se quedó, y la calle también. A partir de las 3 de la tarde las parrillas se encienden, los faroles se iluminan, y Hoppy Street se transforma en el rincón con más ambiente del barrio. Pide un "set de Hoppy" (Hoppy más un vaso de shochu), un estofado de tendón de ternera (nikomi) y un plato de brochetas de pollo a la parrilla. Siéntate al aire libre, contempla cómo el atardecer pinta el cielo sobre los tejados viejos, y entenderás cómo era Asakusa antes de convertirse en destino turístico. Es donde los locales se relajan, y están encantados de compartir el espacio contigo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Talleres de Artesanía y Artesanos de las Calles Traseras.</strong> Asakusa ha sido un centro de artesanía tradicional desde el período Edo, y si sabes dónde buscar, encontrarás talleres que siguen funcionando exactamente igual que hace cien años. Hay estudios de grabado en madera (ukiyo-e) donde los artesanos tallan e imprimen cada color a mano, capa por capa. Hay creadores de Edo kiriko, la intrincada tradición de cristal tallado que convierte vasos en obras de arte. Hay tiendas especializadas en horquillas de acero forjado a mano (kanzashi), textiles teñidos con índigo y sombrillas de papel hechas a mano. La mayoría de estos talleres no aparecen en los mapas turísticos ni tienen cartelería en inglés, lo cual forma parte de su encanto, y también de por qué contar con un guía que conozca el barrio marca tanta diferencia. Muchos artesanos están encantados de dejarte observar mientras trabajan si te acercas con educación.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Santuarios Escondidos y el Antiguo Barrio del Entretenimiento.</strong> Antes de ser un destino turístico, Asakusa era la capital del entretenimiento de Tokio. Durante el período Edo y hasta principios del siglo XX, este barrio albergaba teatros de kabuki, salas de comedia, cines y un próspero distrito de ocio. La mayoría de esos edificios ya no existen, pero quedan rastros si sabes dónde mirar. Escondidos entre bloques de apartamentos modernos encontrarás pequeños santuarios dedicados a actores y artistas. Hay callejones donde el trazado del antiguo distrito teatral sigue visible en la disposición de las calles. La zona de Rokku Broadway, el "Times Square de Tokio" de antaño, todavía conserva algunos cines retro y teatros de variedades resistiendo. Pasear por estas calles traseras con alguien que conoce la historia transforma una visita turística simple en una comprensión genuina del barrio. Para profundizar en esta vertiente de Tokio, nuestra{" "}
              <Link to="/es/blog/shitamachi-tokio" className="text-accent hover:underline">
                guía del Shitamachi y el Tokio Antiguo
              </Link>{" "}
              cubre la historia más amplia de la cultura del centro histórico de Tokio.
            </p>

            {/* CTA after "what most tourists miss" section */}
            <InlineCTAEs message="¿Quieres conocer los rincones que no salen en ninguna guía?" href="/es/tours" />

            {/* Section 4: Where to Eat */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Dónde Comer en Asakusa (Mis Recomendaciones Reales)
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/asakusa-street-food.webp"
                alt="Comida callejera tradicional y senbei (galletas de arroz) en Asakusa"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Senbei recién hecho a la parrilla y dulces tradicionales: los auténticos sabores de Asakusa
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como en Asakusa casi todos los días de trabajo, así que estas no son recomendaciones sacadas de una lista de "top 10". Son los sitios a los que voy de verdad, a los que llevo a amigos y familiares, y a los que les digo a mis clientes del tour cuando preguntan dónde comer después de que terminamos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Senbei (Galletas de Arroz).</strong> Verás tiendas de senbei repartidas por todo el barrio, y las mejores las asan frescas delante de ti sobre carbón. La diferencia entre un senbei recién asado y uno de paquete es como la diferencia entre pan recién salido del horno y una rebanada de plástico. Busca las tiendas donde puedas ver la parrilla y el humo. Esa es tu señal de calidad. La variedad clásica bañada en salsa de soja es la tradicional, pero a mí me pierden los que van envueltos en nori (alga) o espolvoreados con shichimi togarashi (mezcla de siete especias). Un senbei cuesta entre 100 y 300 yenes y es el snack perfecto para caminar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Tempura.</strong> Asakusa es famoso por la tempura desde el período Edo, y este es un plato que merece que te sientes y lo hagas bien aquí. Los mejores restaurantes de tempura del barrio son sitios pequeños, de barra, donde el chef fríe cada pieza individualmente y la coloca directamente en tu plato. Comes cada pieza según llega (gamba, luego raíz de loto, luego hoja de shiso, luego berenjena) y el rebozado es tan ligero que prácticamente se disuelve en la lengua. Estos sitios no son baratos (espera unos 2.000 a 4.000 yenes por un menú de tempura con arroz y sopa de miso), pero valen cada yen. Busca restaurantes en las calles laterales al sur y al oeste de Senso-ji que lleven abiertos al menos unas cuantas décadas. La longevidad es la mejor señal de calidad en este barrio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Monjayaki.</strong> Si has oído hablar del okonomiyaki (la tortilla salada de Osaka), el monjayaki es su primo tokiota, y Asakusa es uno de los mejores sitios para probarlo. La masa es mucho más líquida que la del okonomiyaki, y la cocinas tú mismo en una plancha caliente empotrada en tu mesa, usando pequeñas espátulas de metal para rascar los trocitos crujientes de los bordes. Tiene una pinta caótica, sabe increíble, y es una de las comidas más divertidas que puedes tener en Tokio. Los restaurantes de monjayaki agrupados cerca de la zona de Rokku son los que recomiendo. Están acostumbrados a visitantes primerizos y te enseñarán la técnica encantados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Comida Callejera que Merece una Parada.</strong> Más allá del senbei, los imprescindibles de comida callejera incluyen ningyo-yaki (pequeños pastelitos rellenos de pasta de judía roja, con forma de figuras del templo, horneados al momento), kibi-dango (bolitas de mijo blanditas con polvo de soja dulce, una tradición de Asakusa desde el período Edo) y melon-pan relleno de helado en los puestos cerca de Kaminarimon. Para algo salado, busca los puestos de age-manju. Son bollitos dulces fritos con una corteza crujiente y un interior suave, servidos hirviendo. Cuestan casi nada y son peligrosamente adictivos.
            </p>

            {/* Section 5: Asakusa in Different Seasons */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Asakusa en Cada Estación del Año
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Algo que sorprende a quienes repiten visita a Tokio es lo radicalmente que cambia Asakusa con las estaciones. No es solo cuestión de clima. El carácter entero del barrio se transforma a lo largo del año, y ciertos eventos y experiencias solo están disponibles en momentos concretos.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Primavera: Cerezos en Flor en el Río Sumida (finales de marzo a principios de abril).</strong> Las orillas del río Sumida, a solo cinco minutos a pie al este de Senso-ji, están bordeadas de cientos de cerezos. Cuando florecen, el efecto es impresionante: un túnel de flores rosas y blancas que se extiende a lo largo del paseo fluvial, con el Tokyo Skytree al fondo y los tradicionales yakatabune (barcos de recreo) deslizándose por el río. Es uno de los mejores puntos para ver los cerezos en flor de todo Tokio, y los locales lo saben. Los fines de semana durante el pico de la floración, el parque se llena de picnics de hanami (contemplación de los cerezos). Ven un día entre semana por la mañana si quieres la belleza sin las aglomeraciones. La combinación del recinto centenario de Senso-ji y los cerezos en flor a lo largo del río convierte la primavera en la época más fotogénica para usar esta guía de Asakusa. Nuestra{" "}
              <Link to="/es/blog/cerezos-en-flor-tokio" className="text-accent hover:underline">
                guía de cerezos en flor en Tokio
              </Link>{" "}
              tiene más detalles sobre las mejores fechas y ubicaciones.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Final de primavera: Sanja Matsuri (tercer fin de semana de mayo).</strong> Este es el grande. El Sanja Matsuri es uno de los tres grandes festivales sintoístas de Tokio, y transforma Asakusa en un frenesí de energía, música y devoción durante tres días seguidos. Más de cien altares portátiles (mikoshi) son transportados por las calles por equipos de participantes que cantan, sudan y celebran alimentados a sake. Los mikoshi se sacuden y zarandean deliberadamente. Cuanto más brusco el viaje, más se complace la deidad consagrada. Todo el barrio se paraliza para la procesión, y casi dos millones de personas abarrotan las calles durante el fin de semana. Es ruidoso, caótico, profundamente espiritual y absolutamente inolvidable. Si tu viaje coincide con el Sanja Matsuri, reorganiza tus planes para estar aquí. Nada en Tokio se le compara.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Verano: Fuegos Artificiales del Río Sumida (último sábado de julio).</strong> El Festival de Fuegos Artificiales del Río Sumida es uno de los espectáculos pirotécnicos más antiguos y grandes de Japón, con más de 20.000 fuegos artificiales lanzados sobre el río en un show de unos noventa minutos. La tradición se remonta a 1733, lo que la convierte en una celebración de casi tres siglos. Los locales reservan sitio en las orillas del río con horas de antelación. Algunos llegan por la mañana para un evento que es por la noche. Las mejores vistas gratuitas son desde el lado de Asakusa del río, pero prepárate para una multitud masiva. Si quieres una experiencia más cómoda, muchos restaurantes junto al río ofrecen paquetes especiales de observación, y las azoteas con bar de la zona se llenan rápido. Reserva con mucha antelación.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Invierno: Hatsumode en Año Nuevo.</strong> La primera visita al templo del Año Nuevo (hatsumode) es una de las tradiciones más importantes de Japón, y Senso-ji es uno de los destinos estrella en Tokio para ello. En los tres primeros días de enero, el templo recibe alrededor de 2,8 millones de visitantes. Sí, está lleno a un nivel difícil de imaginar. La cola para llegar al salón principal puede extenderse hasta la mismísima Kaminarimon. Pero la atmósfera vibra con esperanza y renovación. La gente viene vestida con kimono, compra amuletos de buena suerte (omamori) para el año que empieza, come comida festiva de las decenas de puestos temporales y reza por salud, felicidad y prosperidad. Si estás en Tokio en Año Nuevo, el hatsumode en Senso-ji es una experiencia que no olvidarás. Solo abrígate bien y prepárate para moverte muy despacio.
            </p>

            {/* FAQ Section */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas Frecuentes sobre Asakusa
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  ¿Cuánto tiempo debería dedicar a Asakusa?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  La mayoría de guías turísticas sugieren una o dos horas, pero creo que eso le queda corto al barrio. Si solo visitas Senso-ji y Nakamise-dori, dos horas son suficientes. Pero si quieres explorar Hoppy Street, curiosear los talleres de artesanía, pasear por el río Sumida y sentarte a comer como es debido, planifica al menos medio día. Un día entero es aún mejor si incluyes la cercana Kappabashi Kitchen Street o un crucero por el río. Cuanto más tiempo le dediques a Asakusa, más te recompensa.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  ¿Merece la pena visitar Asakusa si solo tengo un día en Tokio?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sin duda. Es uno de los primeros barrios que recomiendo para un viaje corto. Asakusa te da una dosis concentrada del Tokio tradicional: un templo importante, comida callejera, artesanía tradicional, el encanto de las calles traseras y vistas al río, todo en una zona compacta y caminable. Combínalo con un paseo corto hasta el Tokyo Skytree para el contraste moderno y habrás cubierto mucho terreno en un solo día.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  ¿Cuál es la mejor forma de llegar a Asakusa?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Las estaciones más prácticas son Asakusa Station en la línea Ginza del Tokyo Metro o la línea Tobu Skytree. Ambas te dejan a dos minutos a pie de la Puerta Kaminarimon. Si vienes desde Shibuya, toma la línea Ginza desde Shibuya (directo, unos 30 minutos). Desde Shinjuku, el metro vía línea Asakusa (unos 25 minutos con un transbordo). El Tsukuba Express también tiene una estación de Asakusa, aunque está un poco más al oeste.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  ¿Qué ver en Asakusa aparte de Senso-ji?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Asakusa tiene mucho más que su templo famoso. Hoppy Street es el alma del barrio para comer y beber al aire libre. Los talleres de artesanía tradicional (grabado en madera, cristal tallado Edo kiriko, textiles de índigo) siguen vivos en las calles traseras. El paseo fluvial del río Sumida ofrece vistas al Tokyo Skytree, y la calle Kappabashi, el mayor mercado de utensilios de cocina de Japón, está a diez minutos andando. El antiguo barrio de entretenimiento de Rokku Broadway también merece un paseo.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  ¿Se puede visitar el Templo Senso-ji de noche?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, y lo recomiendo mucho. El recinto del templo está abierto las 24 horas, y por la noche la Puerta Kaminarimon, la Puerta Hozomon y la pagoda de cinco pisos están iluminadas de forma preciosa. El salón principal cierra a última hora de la tarde, así que no puedes entrar, pero la atmósfera del recinto iluminado casi sin nadie alrededor es genuinamente mágica. Una visita nocturna combina perfectamente con una cena en Hoppy Street después.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  ¿Necesito un guía para Asakusa o puedo explorarlo por mi cuenta?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes disfrutar Asakusa perfectamente por tu cuenta. Esta guía de Asakusa te da una base sólida. Dicho esto, un guía local con licencia aporta capas de contexto imposibles de obtener en un artículo escrito: la historia detrás de tallas concretas, presentaciones a artesanos que no se anuncian, traducción en tiempo real en los puestos de comida, y el tipo de historias que solo salen de años trabajando en el barrio. Si quieres esa experiencia más profunda, nuestros{" "}
                  <Link to="/es/tours" className="text-accent hover:underline">
                    tours guiados
                  </Link>{" "}
                  están diseñados para darte exactamente eso.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Listo para Descubrir el Asakusa Que la Mayoría de Turistas Nunca Ve?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Escribí esta guía de Asakusa para ayudarte a planificar una visita mejor, pero nada sustituye a caminar por las calles con alguien que conoce cada callejón, cada santuario oculto y cada puesto de comida que merece una parada. En nuestros tours llevo a grupos pequeños por el barrio en el momento perfecto del día, con toda la historia y el contexto cultural que transforma el turismo en comprensión real. Ven a ver el Asakusa del que me enamoré.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Ver Tours
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Contacto
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
            "headline": "Guía de Asakusa: Qué Ver, Qué Evitar y Cómo Visitarlo Antes de las 9",
            "description": "Asakusa es el barrio más visitado de Tokio, y la mayoría lo ve mal. Un guía con licencia que trabaja aquí a diario te cuenta lo que realmente importa.",
            "image": "https://tanuki-tabi-travel.com/images/blog/asakusa-guide-hero.webp",
            "author": {
              "@type": "Person",
              "name": "Manabu",
            },
            "datePublished": "2026-03-07",
            "dateModified": "2026-04-06",
            "inLanguage": "es",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/guia-asakusa-completa",
            },
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto tiempo debería dedicar a Asakusa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La mayoría de guías turísticas sugieren una o dos horas, pero planifica al menos medio día si quieres explorar Hoppy Street, los talleres de artesanía, el río Sumida y sentarte a comer. Un día entero es aún mejor si incluyes Kappabashi Kitchen Street o un crucero por el río.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Merece la pena visitar Asakusa si solo tengo un día en Tokio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sin duda. Asakusa te da una dosis concentrada del Tokio tradicional: un templo importante, comida callejera, artesanía, calles traseras con encanto y vistas al río, todo en una zona compacta y caminable. Combínalo con el Tokyo Skytree para el contraste moderno.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la mejor forma de llegar a Asakusa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Las estaciones más prácticas son Asakusa Station en la línea Ginza del Tokyo Metro o la línea Tobu Skytree, ambas a dos minutos a pie de la Puerta Kaminarimon. Desde Shibuya, toma la línea Ginza directa (unos 30 minutos). Desde Shinjuku, el metro vía línea Asakusa (unos 25 minutos con un transbordo).",
                },
              },
              {
                "@type": "Question",
                "name": "¿Qué ver en Asakusa aparte de Senso-ji?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hoppy Street para comer y beber al aire libre, talleres de artesanía tradicional (grabado en madera, Edo kiriko, textiles de índigo), el paseo del río Sumida con vistas al Skytree, la calle Kappabashi de utensilios de cocina, y el antiguo barrio de entretenimiento Rokku Broadway.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Se puede visitar el Templo Senso-ji de noche?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. El recinto del templo está abierto las 24 horas, y por la noche la Puerta Kaminarimon, la Puerta Hozomon y la pagoda de cinco pisos están iluminadas de forma preciosa. El salón principal cierra por la tarde, pero la atmósfera nocturna es mágica.",
                },
              },
              {
                "@type": "Question",
                "name": "¿Necesito un guía para Asakusa o puedo explorarlo por mi cuenta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Puedes disfrutar Asakusa por tu cuenta, pero un guía local con licencia aporta contexto imposible de obtener en un artículo: historia de tallas concretas, presentaciones a artesanos, traducción en puestos de comida, y las historias que solo salen de años en el barrio.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default EsGuiaAsakusaNueva;
