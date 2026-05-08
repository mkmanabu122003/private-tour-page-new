import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsDeGinzaATsukijiAPie = () => {
  return (
    <Layout>
      <SEO
        title="De Ginza a Tsukiji a Pie 2026: 3 Rutas (3-15 min)"
        description="Camina de Ginza a Tsukiji en 15 min por Harumi-dori, pasando por el Teatro Kabukiza y Tsukiji Hongan-ji. Guía local con 3 rutas, salidas y horarios."
        canonicalPath="/es/blog/de-ginza-a-tsukiji-a-pie"
        hreflang={[
          { lang: "en", path: "/blog/ginza-to-tsukiji-walking-route" },
          { lang: "es", path: "/es/blog/de-ginza-a-tsukiji-a-pie" },
          { lang: "x-default", path: "/blog/ginza-to-tsukiji-walking-route" },
        ]}
      />

      <div className="prose-editorial">

        {/* Hero — overlaid title (BlogArticleHero) */}
        <BlogArticleHero
          image="/images/blog/ginza-shopping-street.webp"
          imageAlt="Calle comercial de Ginza, el inicio de la ruta a pie hacia Tsukiji"
          eyebrow="Guías de Barrios de Tokio"
          title="De Ginza a Tsukiji a Pie: 3 Rutas Comparadas (2026)"
          subtitle="Escrito por Manabu, guía-intérprete con licencia nacional (全国通訳案内士) que hace esta ruta con clientes cada semana."
          date="Última actualización: mayo de 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        {/* Contenido del artículo */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Comparación rápida", href: "#section-01-comparacion-rapida" },
                { num: "02", label: "Ruta 1: Estación Ginza", href: "#section-02-ruta-1-estacion-ginza" },
                { num: "03", label: "Ruta 2: Higashi-Ginza", href: "#section-03-ruta-2-higashi-ginza" },
                { num: "04", label: "Ruta 3: Ginza-Itchome", href: "#section-04-ruta-3-ginza-itchome" },
                { num: "05", label: "Qué verás en el camino", href: "#section-05-que-veras-en-el-camino" },
                { num: "06", label: "Cuándo caminar", href: "#section-06-cuando-caminar" },
                { num: "07", label: "Cuándo NO caminar", href: "#section-07-cuando-no-caminar" },
                { num: "08", label: "¿Volver a pie?", href: "#section-08-volver-a-pie" },
                { num: "09", label: "Preguntas frecuentes", href: "#section-09-preguntas-frecuentes" },
                { num: "10", label: "Artículos relacionados", href: "#section-10-articulos-relacionados" },
              ]} />

              <article>

                {/* Respuesta rápida */}
                <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg mb-8">
                  <p className="font-semibold text-foreground mb-2">Respuesta rápida</p>
                  <p className="text-foreground leading-relaxed mb-2">
                    Desde la <strong>estación de Ginza al Mercado Exterior de Tsukiji son unos 15 minutos a pie (1,0 km)</strong> &mdash; llano, recto hacia el este por Harumi-dori, pasando por el Teatro Kabukiza y Tsukiji Hongan-ji.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Desde la <strong>salida 3 de la estación Higashi-Ginza son apenas 3 minutos</strong> (según el sitio oficial del Mercado Exterior de Tsukiji). La estación Ginza-Itchome queda algo más al noroeste &mdash; unos 12 a 15 minutos. Las rutas, salidas y horarios, abajo.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Esta es una de las preguntas que recibo casi todas las semanas de clientes que se hospedan en hoteles de Ginza: <em>"¿Mejor caminar a Tsukiji o tomar el metro?"</em> La respuesta honesta depende de qué estación de Ginza estés usando &mdash; y la mayoría de las indicaciones online tratan las tres como si fueran el mismo trayecto. No lo son.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Esta guía cubre los tres puntos de partida realistas, qué verás en el camino y cuándo el metro tiene más sentido.
                </p>

                {/* Sección 01: Comparación rápida */}
                <div className="section-eyebrow"><span>Section 01 · Comparación rápida</span></div>
                <h2 id="section-01-comparacion-rapida" className="scroll-mt-20">
                  Comparación rápida: 3 puntos de partida
                </h2>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-medium text-foreground">Estación de partida</th>
                        <th className="text-left p-3 font-medium text-foreground">Líneas</th>
                        <th className="text-left p-3 font-medium text-foreground">Tiempo / Distancia</th>
                        <th className="text-left p-3 font-medium text-foreground">Qué verás en el camino</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3 text-foreground"><strong>Higashi-Ginza</strong> Salida 3</td>
                        <td className="p-3 text-muted-foreground">Toei Asakusa (A11), Tokyo Metro Hibiya (H10)</td>
                        <td className="p-3 text-muted-foreground"><strong className="text-foreground">3 min</strong> (~250 m)</td>
                        <td className="p-3 text-muted-foreground">Teatro Kabukiza (junto a la salida)</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3 text-foreground"><strong>Ginza</strong> Salida A2</td>
                        <td className="p-3 text-muted-foreground">Tokyo Metro Ginza (G09), Marunouchi (M16), Hibiya (H09)</td>
                        <td className="p-3 text-muted-foreground"><strong className="text-foreground">15 min</strong> (~1,0 km)</td>
                        <td className="p-3 text-muted-foreground">Kabukiza, Tsukiji Hongan-ji</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-foreground"><strong>Ginza-Itchome</strong></td>
                        <td className="p-3 text-muted-foreground">Tokyo Metro Yurakucho (Y19)</td>
                        <td className="p-3 text-muted-foreground"><strong className="text-foreground">12&ndash;15 min</strong> (~1,1 km)</td>
                        <td className="p-3 text-muted-foreground">Cruce de Showa-dori, Tsukiji Hongan-ji</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground italic mb-8">
                  Higashi-Ginza es la "estación de acceso" oficial que figura en el{" "}
                  <a href="https://www.tsukiji.or.jp/english/access/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    sitio del Mercado Exterior de Tsukiji
                  </a>
                  . Las otras dos suponen caminar un poco más, pero son útiles si ya estás en pleno Ginza o llegas por la línea Yurakucho.
                </p>

                {/* Ruta 1: desde la estación Ginza */}
                <div className="section-eyebrow"><span>Section 02 · Ruta 1 &mdash; Estación Ginza</span></div>
                <h2 id="section-02-ruta-1-estacion-ginza" className="scroll-mt-20">
                  Ruta 1 &mdash; Desde la estación Ginza (15 min, la caminata clásica)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esta es la ruta que la mayoría de los viajeros realmente quiere hacer. Estás en el cruce de Ginza 4-chome &mdash; el corazón del barrio &mdash; y quieres caminar hasta Tsukiji mientras todavía es de mañana.
                </p>
                <p className="text-foreground font-medium mb-3">Paso a paso:</p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>
                    Sal por la <strong className="text-foreground">salida A2 de la estación Ginza</strong> (o la A3 &mdash; ambas dan al cruce de Ginza 4-chome donde Chuo-dori se encuentra con Harumi-dori).
                  </li>
                  <li>
                    Camina <strong className="text-foreground">hacia el este por Harumi-dori (晴海通り)</strong>. La acera es ancha y llana en todo el trayecto.
                  </li>
                  <li>
                    A los <strong className="text-foreground">3 o 4 minutos</strong>, verás el Teatro Kabukiza a tu izquierda &mdash; el ornamentado teatro de kabuki en blanco y negro. Aunque no veas una función, la galería del 5.º piso y el jardín de la azotea son gratuitos y valen un desvío de 5 minutos.
                  </li>
                  <li>
                    Sigue hacia el este. Pasarás junto a las entradas de la estación Higashi-Ginza (este es tu atajo para días de lluvia, ver más abajo).
                  </li>
                  <li>
                    Cruza <strong className="text-foreground">Showa-dori (昭和通り)</strong>, una avenida más ancha. Aquí termina Ginza y empieza Tsukiji.
                  </li>
                  <li>
                    Unos 2 minutos después de Showa-dori, aparece a tu izquierda el <strong className="text-foreground">Templo Tsukiji Hongan-ji</strong> &mdash; con su característica arquitectura de inspiración india y entrada gratuita.
                  </li>
                  <li>
                    El <strong className="text-foreground">Mercado Exterior de Tsukiji</strong> está una calle al norte del templo. Has llegado.
                  </li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">Tiempo total:</strong> ~15 minutos sin paradas, ~25 minutos con una pausa para fotos en Kabukiza y una breve visita al Hongan-ji.
                </p>

                {/* Ruta 2: desde Higashi-Ginza */}
                <div className="section-eyebrow"><span>Section 03 · Ruta 2 &mdash; Higashi-Ginza</span></div>
                <h2 id="section-03-ruta-2-higashi-ginza" className="scroll-mt-20">
                  Ruta 2 &mdash; Desde Higashi-Ginza (3 min, prácticamente has llegado)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si tu hotel está cerca de la estación Higashi-Ginza, o tomaste la línea Hibiya/Asakusa una parada desde Ginza, no necesitas mucha guía:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Toma la <strong className="text-foreground">salida 3</strong> (la misma salida pegada al Kabukiza).</li>
                  <li>Camina <strong className="text-foreground">hacia el este por Harumi-dori</strong> durante 3 minutos.</li>
                  <li>Llegarás al borde occidental del Mercado Exterior de Tsukiji.</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Este es el trayecto que publica el{" "}
                  <a href="https://www.tsukiji.or.jp/english/access/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    sitio oficial del Mercado Exterior de Tsukiji
                  </a>
                  {" "}("3 minutos a pie" desde Higashi-Ginza). Algunas webs de viajes citan 5 o 6 minutos desde la salida 3 porque cuentan el trayecto subterráneo dentro de la estación &mdash; una vez en la calle, son 3.
                </p>

                {/* Ruta 3: desde Ginza-Itchome */}
                <div className="section-eyebrow"><span>Section 04 · Ruta 3 &mdash; Ginza-Itchome</span></div>
                <h2 id="section-04-ruta-3-ginza-itchome" className="scroll-mt-20">
                  Ruta 3 &mdash; Desde Ginza-Itchome (~12&ndash;15 min, la opción tranquila)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ginza-Itchome se ubica en el <strong className="text-foreground">extremo noroeste</strong> del barrio de Ginza, sobre la línea Yurakucho. La ruta hace un pequeño rodeo hacia el sur para conectar con Harumi-dori:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Sal por el lado de Chuo-dori de la estación.</li>
                  <li>Camina <strong className="text-foreground">hacia el sur por Chuo-dori</strong> unos 5 minutos hasta el cruce de Ginza 4-chome.</li>
                  <li>Gira <strong className="text-foreground">a la izquierda (este) en Harumi-dori</strong> y sigue la Ruta 1 desde el paso 3.</li>
                </ol>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Total: ~12&ndash;15 minutos. Suma unos minutos al recorrido, pero te permite recorrer <strong className="text-foreground">la calle comercial principal de Ginza primero</strong>, algo que muchos viajeros disfrutan como preludio al mercado.
                </p>

                {/* Qué verás en el camino */}
                <div className="section-eyebrow"><span>Section 05 · Qué verás en el camino</span></div>
                <h2 id="section-05-que-veras-en-el-camino" className="scroll-mt-20">
                  Dos lugares gratuitos que pasarás
                </h2>

                <h3>Teatro Kabukiza (歌舞伎座)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El teatro de azulejos negros en la esquina de Higashi-Ginza es la sede del kabuki en Tokio. No necesitas entrada para ver lo que más suele interesar a quien lo descubre por primera vez:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>
                    <strong className="text-foreground">Galería Kabukiza (5.º piso):</strong> pequeño museo sobre vestuario, atrezzo e historia del kabuki. Entrada gratuita.
                  </li>
                  <li>
                    <strong className="text-foreground">Jardín de la azotea (5.º piso):</strong> escondido detrás de la galería &mdash; un rincón verde justo encima de Ginza, con vistas fotogénicas sobre Harumi-dori.
                  </li>
                  <li>
                    <strong className="text-foreground">Funciones:</strong> en general hay una matiné a las 11:00 y una función vespertina a las 16:30. Las entradas para un solo acto se venden el mismo día en la taquilla del nivel B2 &mdash; útil si quieres probar 30 a 60 minutos de espectáculo sin comprometerte con las 4 horas completas.
                  </li>
                </ul>

                <h3>Templo Tsukiji Hongan-ji (築地本願寺)</h3>
                <figure className="my-6">
                  <img
                    src="/images/blog/tsukiji-honganji-interior.webp"
                    alt="Interior dorado y ornamentado del Templo Tsukiji Honganji con elaborada decoración budista"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    Interior del Tsukiji Hongan-ji &mdash; arquitectura de inspiración india que no encontrarás en ningún otro templo de Tokio
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un templo budista de la escuela Jodo Shinshu como ningún otro en Japón &mdash; el arquitecto Itō Chūta lo diseñó en 1934 con un exterior de piedra de estilo indio, vidrieras y un órgano de tubos en el interior.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong className="text-foreground">Horario:</strong> abril&ndash;septiembre 6:00&ndash;17:30, octubre&ndash;marzo 6:00&ndash;17:00</li>
                  <li><strong className="text-foreground">Entrada:</strong> gratuita</li>
                  <li><strong className="text-foreground">Iluminación nocturna:</strong> desde el atardecer hasta las 21:00, todos los días</li>
                  <li>El servicio matutino (en torno a las 7:00) está abierto a visitantes</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8 italic">
                  Si caminas hacia Tsukiji para el mercado de la mañana, calcula llegar al Hongan-ji hacia las 6:30 &mdash; vacío, iluminado y con un momento de calma antes del bullicio del mercado.
                </p>

                {/* Cuándo caminar */}
                <div className="section-eyebrow"><span>Section 06 · Cuándo caminar</span></div>
                <h2 id="section-06-cuando-caminar" className="scroll-mt-20">
                  Cuándo caminar: consejos de horario
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La caminata solo "funciona" si la sincronizas con el horario del mercado.
                </p>
                <p className="text-foreground font-medium mb-3">
                  Horario del Mercado Exterior de Tsukiji (según el{" "}
                  <a href="https://www.tsukiji.or.jp/english/calendar/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    calendario oficial
                  </a>
                  ):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>La mayoría de los puestos: <strong className="text-foreground">5:00&ndash;14:00</strong></li>
                  <li>Hora punta de mayoristas: 6:00&ndash;9:00</li>
                  <li>Mejor franja para visitantes: <strong className="text-foreground">7:00&ndash;10:00</strong></li>
                  <li>Después de las 11:00: la mitad de los mejores puestos ya están cerrando</li>
                  <li><strong className="text-foreground">Cerrado:</strong> domingos y algunos miércoles (consulta el calendario antes de ir)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">Mi recomendación:</strong> sal de tu hotel de Ginza hacia las 7:30 y camina. Llegarás cerca de las 8:00 &mdash; lo bastante temprano para ver el mercado en plena actividad, lo bastante tarde para que el caos mayorista ya se haya disipado.
                </p>

                {/* Cuándo NO caminar */}
                <div className="section-eyebrow"><span>Section 07 · Cuándo NO caminar</span></div>
                <h2 id="section-07-cuando-no-caminar" className="scroll-mt-20">
                  Cuándo NO caminar: la alternativa de 5 minutos en metro
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sáltate la caminata y toma la <strong className="text-foreground">línea Hibiya una parada de Ginza a Higashi-Ginza</strong> cuando:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Esté lloviendo fuerte</li>
                  <li>Sea una tarde de julio o agosto (entre Ginza y Tsukiji apenas hay sombra)</li>
                  <li>Vayas con niños muy pequeños o tengas dificultades de movilidad</li>
                  <li>Vayas justo de tiempo y quieras estar en el mercado en 8 minutos exactos</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  <strong className="text-foreground">Coste:</strong> 180 yenes por persona en la línea Hibiya del Tokyo Metro.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">Tiempo total:</strong> 1 minuto en el tren + 3 minutos a pie desde la salida 3 de Higashi-Ginza = unos <strong className="text-foreground">5 minutos puerta a puerta</strong>.
                </p>

                {/* ¿Volver a pie? */}
                <div className="section-eyebrow"><span>Section 08 · ¿Volver a pie?</span></div>
                <h2 id="section-08-volver-a-pie" className="scroll-mt-20">
                  ¿Volver a pie de Tsukiji a Ginza?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si haces el trayecto en el sentido <em>contrario</em> &mdash; terminas en Tsukiji y caminas a Ginza para almorzar o ir de compras &mdash; ese es otro artículo. La dirección inversa suele empezar más tarde y la ruta que recomiendo no es exactamente la misma.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">Sigue leyendo:</strong>{" "}
                  <Link to="/es/blog/ruta-gastronomica-tsukiji-ginza" className="text-accent hover:underline">
                    De Tsukiji a Ginza: La ruta gastronómica que hacen los locales en su día libre
                  </Link>
                  {" "}&mdash; un recorrido de 3 horas comiendo y paseando por Tsukiji, Ginza y los izakayas de Shimbashi.
                </p>

                {/* Preguntas frecuentes */}
                <div className="section-eyebrow"><span>Section 09 · Preguntas frecuentes</span></div>
                <h2 id="section-09-preguntas-frecuentes" className="scroll-mt-20">
                  Preguntas frecuentes
                </h2>

                <h3>¿Cuánto se tarda caminando de Ginza a Tsukiji?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unos 15 minutos desde la estación Ginza (1,0 km), 12 a 15 desde Ginza-Itchome o solo 3 minutos desde la estación Higashi-Ginza (la "estación de acceso" oficial que indica el Mercado Exterior de Tsukiji).
                </p>

                <h3>¿Qué salida de la estación Ginza debo usar para ir a Tsukiji a pie?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  La salida A2 &mdash; te deja en el cruce de Ginza 4-chome mirando al este por Harumi-dori, la ruta directa hacia Tsukiji.
                </p>

                <h3>¿Puedo caminar lo bastante temprano para la apertura del mercado a las 5:00?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sí &mdash; la ruta está bien iluminada y es segura a cualquier hora. Aunque, en realidad, no necesitas estar allí a las 5:00. La mayoría de puestos amigables para turistas abren entre las 6:00 y las 7:30. Apunta a salir de Ginza entre las 6:30 y las 7:30.
                </p>

                <h3>¿La ruta es accesible para sillas de ruedas y carritos de bebé?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sí, todo el trayecto es por aceras anchas y llanas con rebajes en cada cruce. El propio Mercado Exterior de Tsukiji tiene callejones estrechos entre los puestos &mdash; una silla de ruedas cabe, pero las multitudes en hora punta pueden complicar el paso. Las primeras horas (7:00&ndash;8:00) son más cómodas.
                </p>

                <h3>¿Conviene volver caminando a Ginza después de comer en Tsukiji?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Es una gran combinación &mdash; y existe una "ruta gastronómica de los locales" de 3 horas sobre la que escribí aparte:{" "}
                  <Link to="/es/blog/ruta-gastronomica-tsukiji-ginza" className="text-accent hover:underline">
                    De Tsukiji a Ginza: la ruta gastronómica
                  </Link>
                  .
                </p>

                <h3>¿Cuál es la mejor época del año para hacer este recorrido a pie?</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  De marzo a mayo y de octubre a noviembre. Junio (temporada de lluvias) y julio&ndash;agosto (calor y humedad, a veces más de 35 °C) hacen la caminata menos agradable &mdash; mejor toma el metro una parada.
                </p>

                {/* CTA */}
                <div className="bg-secondary/50 rounded-lg p-8 mt-12">
                  <h2>¿Quieres que te acompañe alguien?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Esta caminata es fácil de hacer por tu cuenta, pero si prefieres olvidarte del mapa y tener a un guía con licencia que te explique lo que estás viendo &mdash; desde los detalles ocultos en la fachada del Kabukiza hasta qué puestos sirven realmente el mejor uni &mdash; ofrezco un tour a pie por Tsukiji y Ginza diseñado exactamente alrededor de esta ruta.
                  </p>
                  <Link
                    to="/es/tours/tsukiji-ginza?utm_source=blog&utm_medium=cta&utm_campaign=de-ginza-a-tsukiji-a-pie"
                    className="btn-accent"
                  >
                    Ver el tour de Tsukiji y Ginza
                  </Link>
                </div>

                {/* Artículos relacionados */}
                <div className="section-eyebrow"><span>Section 10 · Artículos relacionados</span></div>
                <h2 id="section-10-articulos-relacionados" className="scroll-mt-20">
                  Artículos relacionados
                </h2>
                <ul className="space-y-3 mb-8">
                  <li>
                    <Link to="/es/blog/guia-tsukiji" className="text-accent hover:underline">
                      Guía del Mercado de Tsukiji 2026: Horarios, mejores puestos y consejos
                    </Link>
                    <span className="text-muted-foreground"> &mdash; la guía completa del mercado una vez que llegues</span>
                  </li>
                  <li>
                    <Link to="/es/blog/tsukiji-vs-toyosu" className="text-accent hover:underline">
                      Tsukiji vs Toyosu 2026: ¿Qué mercado de pescado visitar?
                    </Link>
                    <span className="text-muted-foreground"> &mdash; cómo elegir entre los dos mercados de Tokio</span>
                  </li>
                  <li>
                    <Link to="/es/blog/ruta-gastronomica-tsukiji-ginza" className="text-accent hover:underline">
                      De Tsukiji a Ginza: la ruta gastronómica
                    </Link>
                    <span className="text-muted-foreground"> &mdash; el sentido contrario, ruta de 3 horas para locales</span>
                  </li>
                </ul>
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["tsukiji-ginza", "custom"]} showViewAll />

        {/* BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              inLanguage: "es",
              headline: "De Ginza a Tsukiji a Pie: 3 Rutas Comparadas (2026)",
              description:
                "Camina de Ginza a Tsukiji en 15 min por Harumi-dori, pasando por el Teatro Kabukiza y Tsukiji Hongan-ji. Guía local con 3 rutas, salidas y horarios.",
              author: {
                "@type": "Person",
                name: "Manabu",
                jobTitle: "National Government Licensed Guide Interpreter",
                url: "https://tanuki-tabi-travel.com/about",
              },
              datePublished: "2026-05-09",
              dateModified: "2026-05-09",
              publisher: {
                "@type": "Organization",
                name: "Tanuki Tabi Travel",
                url: "https://tanuki-tabi-travel.com",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://tanuki-tabi-travel.com/es/blog/de-ginza-a-tsukiji-a-pie",
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
              inLanguage: "es",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuánto se tarda caminando de Ginza a Tsukiji?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Unos 15 minutos desde la estación Ginza (1,0 km), 12 a 15 desde Ginza-Itchome o solo 3 minutos desde la estación Higashi-Ginza (la estación de acceso oficial que indica el Mercado Exterior de Tsukiji).",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué salida de la estación Ginza debo usar para ir a Tsukiji a pie?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La salida A2 — te deja en el cruce de Ginza 4-chome mirando al este por Harumi-dori, la ruta directa hacia Tsukiji.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo caminar lo bastante temprano para la apertura del mercado a las 5:00?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí — la ruta está bien iluminada y es segura a cualquier hora. La mayoría de puestos amigables para turistas abren entre las 6:00 y las 7:30. Apunta a salir de Ginza entre las 6:30 y las 7:30.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La ruta es accesible para sillas de ruedas y carritos de bebé?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, todo el trayecto es por aceras anchas y llanas con rebajes en cada cruce. El propio Mercado Exterior de Tsukiji tiene callejones estrechos entre los puestos — una silla de ruedas cabe, pero las multitudes en hora punta pueden complicar el paso. Las primeras horas (7:00-8:00) son más cómodas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es la mejor época del año para hacer este recorrido a pie?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "De marzo a mayo y de octubre a noviembre. Junio (temporada de lluvias) y julio-agosto (calor y humedad, a veces más de 35 °C) hacen la caminata menos agradable — mejor toma el metro una parada.",
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EsDeGinzaATsukijiAPie;
