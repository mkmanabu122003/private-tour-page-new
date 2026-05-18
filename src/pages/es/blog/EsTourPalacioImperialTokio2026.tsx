// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { GuideInsiderNoteEs } from "@/components/blog/GuideInsiderNote";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc } from "@/components/blog/BlogArticleSidebar";
import manabuPortrait from "@/assets/About_page_Manabu_team_photo.webp";

const EsTourPalacioImperialTokio2026 = () => {
  return (
    <Layout>
      <SEO
        title="Tour del Palacio Imperial de Tokio 2026: Guía Oficial"
        description="Cómo visitar el Palacio Imperial de Tokio en 2026: tour oficial (gratis, reserva a las 5 AM JST), Jardines del Este (sin reserva) o tour privado con guía oficial."
        canonicalPath="/es/blog/tour-palacio-imperial-tokio-2026"
        hreflang={[
          { lang: "en", path: "/blog/imperial-palace-tokyo-tour-2026" },
          { lang: "es", path: "/es/blog/tour-palacio-imperial-tokio-2026" },
          { lang: "x-default", path: "/blog/imperial-palace-tokyo-tour-2026" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Tour Palacio Imperial Tokio 2026" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tours/imperial-palace-gardens.webp"
          imageAlt="Los Jardines del Este del Palacio Imperial — abiertos al público y donde un guía oficial sí puede acompañarte"
          eyebrow="Guía de Reserva · Palacio Imperial"
          title="Tour del Palacio Imperial de Tokio 2026: Guía Completa de un Guía Oficial"
          subtitle="Escrito por Manabu, Guía Intérprete Oficial Nacional (全国通訳案内士) que recorre los terrenos del Palacio Imperial con clientes casi cada semana."
          date="mayo de 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc
                items={[
                  { num: "01", label: "3 formas de visitarlo en 2026", href: "#section-01-tres-formas" },
                  { num: "02", label: "Tour oficial: la trampa de las 5 AM JST", href: "#section-02-tour-oficial" },
                  { num: "03", label: "Jardines del Este (sin reserva)", href: "#section-03-jardines" },
                  { num: "04", label: "La ruta a pie que uso", href: "#section-04-ruta" },
                  { num: "05", label: "2 de enero (一般参賀)", href: "#section-05-enero-2" },
                  { num: "06", label: "Guía oficial vs audio tour", href: "#section-06-vs-audio" },
                  { num: "07", label: "Cómo organizo mi tour", href: "#section-07-como" },
                  { num: "08", label: "FAQ", href: "#section-08-faq" },
                ]}
              />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Decisión rápida</p>
                  <h2>Para la mayoría de visitantes, la respuesta correcta son los <span className="hl-gold">Jardines del Este (gratis, sin reserva)</span> con un guía oficial — no el tour oficial de la Agencia de la Casa Imperial.</h2>
                  <p>
                    El tour oficial del palacio de 1 hora es gratuito e impresionante, pero requiere reserva online a las 5:00 AM JST el día 1 de cada mes (una hora dura para la mayoría de zonas horarias internacionales), pasaporte original en la puerta y — sobre todo — <strong className="text-foreground">los guías oficiales no pueden acompañar a grupos comerciales en el tour oficial</strong>. Los Jardines del Este no tienen esa restricción.
                  </p>
                  <p>
                    Si quieres ver el palacio por dentro con agenda apretada y con guía, planifica Jardines del Este + el recorrido exterior. Si quieres la experiencia oficial de los terrenos interiores, planifica reservar tú mismo con un mes de antelación.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  El Palacio Imperial de Tokio confunde a casi todos los visitantes primerizos. La Agencia de la Casa Imperial (kunaicho.go.jp) organiza un tour oficial gratuito. También hay un jardín público gratuito (Jardines del Este) dentro de los terrenos del palacio. También existe un popular circuito exterior alrededor de los fosos que no requiere entrar a nada. Tres cosas distintas, tres reglas distintas, tres definiciones distintas de "visitar el Palacio Imperial".
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Este artículo las aclara. Organizo tours privados a pie que incluyen los terrenos del Palacio Imperial casi cada semana, y siempre aparecen las mismas preguntas: <em>¿Puedo entrar de verdad? ¿Con cuánta antelación debo reservar? ¿Por qué el guía no puede venir al tour oficial?</em> Las respuestas cortas están abajo; el detalle está en las secciones que siguen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Todo refleja los procedimientos de 2026 de la Agencia de la Casa Imperial, el calendario de los Jardines del Este, y los límites prácticos de lo que un guía oficial puede y no puede hacer en estos terrenos.
                </p>

                <div className="guide-note-callout">
                  <div
                    className="gn-portrait"
                    style={{ backgroundImage: `url(${manabuPortrait})` }}
                  />
                  <div>
                    <p className="gn-label">La visión de Manabu</p>
                    <h3>El tour oficial es una experiencia única en el viaje — pero para la mayoría de agendas, los Jardines del Este con guía dan el 90% del valor sin la fricción.</h3>
                    <p>
                      Los clientes que intentan reservar el tour oficial desde el extranjero a menudo no llegan a tiempo a la ventana de las 5 AM JST y luego se presentan sin ID original y los rechazan en Kikyo-mon. Mientras tanto, los Jardines del Este están abiertos la mayoría de días, son gratis, y puedo recorrerlos contigo una hora explicando lo que ves — algo que el tour oficial tampoco permite.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Quieres esto planificado según tus fechas y lo que realmente quieres ver?"
                  linkText="Ver mi Tour del Palacio Imperial →"
                  href="/es/contact"
                />

                {/* SECCIÓN 01 */}
                <div className="section-eyebrow"><span>Sección 01 · 3 Formas</span></div>
                <h2 id="section-01-tres-formas" className="scroll-mt-20">
                  3 formas de visitar el Palacio Imperial en 2026
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cuando alguien busca "tour del Palacio Imperial Tokio", imagina una sola cosa — pero detrás de esa frase se esconden tres experiencias completamente distintas. Si eliges la equivocada, llegas a una puerta cerrada o a un tour al que no puedes traer guía.
                </p>

                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">El tour oficial de los terrenos interiores</p>
                    <h3>Tour de la Agencia de la Casa Imperial</h3>
                    <ul>
                      <li>Gratis, ~1 hora, ruta de 2,2 km dentro del palacio</li>
                      <li>Reserva online a las 5:00 AM JST el día 1 del mes</li>
                      <li>ID original obligatorio en la puerta</li>
                      <li><strong>Los guías oficiales no pueden acompañarte</strong></li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">La opción flexible</p>
                    <h3>Jardines del Este (recomendado para la mayoría)</h3>
                    <ul>
                      <li>Gratis, sin reserva</li>
                      <li>Abiertos la mayoría de días desde las 9:00 (cerrado lunes y viernes)</li>
                      <li>El guía puede acompañarte plenamente</li>
                      <li>Ruinas del Honmaru, muros de piedra del castillo de Edo, jardines estacionales</li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Y la tercera opción, a menudo olvidada:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Circuito exterior a pie</strong> — bucle de 5 km alrededor de los fosos, gratis, abierto 24/7, sin reserva. Nijubashi (Puente Doble), Sakurada-mon, vistas desde el lado de Marunouchi. La opción por defecto para corredores y fotógrafos, válida para un paseo de 60–90 minutos si los Jardines del Este están cerrados.</li>
                </ul>

                <h3>Cuál encaja contigo</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si tienes <strong className="text-foreground">fechas flexibles y reservas con un mes de antelación</strong>, el tour oficial vale la pena una vez. Si tienes <strong className="text-foreground">fechas ajustadas y quieres guía</strong>, Jardines del Este. Si los <strong className="text-foreground">Jardines del Este están cerrados</strong> (lunes, viernes, fin de año), el recorrido exterior más las fotos de Nijubashi es una alternativa respetable.
                </p>

                {/* SECCIÓN 02 */}
                <div className="section-eyebrow"><span>Sección 02 · Tour Oficial</span></div>
                <h2 id="section-02-tour-oficial" className="scroll-mt-20">
                  La reserva del tour oficial: la trampa de las 5 AM JST
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La Agencia de la Casa Imperial organiza dos tours gratuitos al día (mañana y tarde), cada uno de aproximadamente una hora, cubriendo 2,2 km de los terrenos interiores normalmente cerrados al público. El truco es el sistema de reservas, que confunde a casi todos los visitantes del extranjero.
                </p>

                <h3>Cuándo abren las reservas</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las reservas abren <strong className="text-foreground">a las 5:00 AM JST el día 1 del mes anterior a tu visita</strong> y cierran a las <strong className="text-foreground">23:59 JST, 4 días antes</strong> de tu fecha elegida. Las fechas populares (semana de los cerezos, semana del color otoñal, Golden Week) se llenan en minutos. Desde el este de Estados Unidos, las 5 AM JST son las 16:00 del día anterior — manejable. Desde el oeste, son las 12:00 del día anterior. Desde Europa, es muy de noche. Desde Australia, es temprano por la mañana. Pon una alarma.
                </p>

                <h3>Alternativa de entrada el mismo día</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los tickets del mismo día se reparten en la <strong className="text-foreground">puerta Kikyo-mon</strong>: tickets de la mañana desde las 9:00, de la tarde desde las 12:30. Hay un tope estricto de <strong className="text-foreground">300 personas por tour</strong>. Un día laborable típico, llegar a las 9:00 en punto suele funcionar; los fines de semana en temporada alta, compites por los mismos 300 cupos en persona.
                </p>

                <h3>Requisitos de ID</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Debes llevar <strong className="text-foreground">pasaporte, carnet de conducir o carnet estudiantil original</strong> — fotocopias y fotos del documento en el móvil <em>no</em> se aceptan. He visto rechazar clientes en Kikyo-mon por mostrar una foto del pasaporte en el teléfono. El guardia de la puerta no negocia esto.
                </p>

                <h3>⚠️ El problema del guía</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Es lo que la mayoría no ve. <span className="hl-gold">Los operadores turísticos comerciales y partes relacionadas no están permitidos en el tour oficial.</span> Eso me incluye a mí. La política de la Agencia de la Casa Imperial es que el tour oficial es una relación directa entre la agencia y el visitante — sin comentarios de terceros, sin grupos con guía. Si reservas el tour oficial, entras solo (con tu grupo/familia, pero sin guía profesional).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Lo que esto significa en la práctica: si quieres <em>tanto</em> el tour interior como un guía oficial para contexto, los haces en días diferentes. O — lo que eligen la mayoría de mis clientes — saltas el tour interior y haces Jardines del Este + recorrido exterior con guía.
                </p>

                <GuideInsiderNoteEs date="marzo de 2026">
                  <p>
                    Una familia de cuatro me reservó un día del Palacio Imperial en marzo. Habían reservado el tour oficial de la mañana a las 10:00 con semanas de antelación. Nos encontramos en su hotel a las 8:30, paseamos por el Parque de la Fuente Wadakura, los dejé en Kikyo-mon para el tour oficial a las 9:50, y los recogí a la salida a las 11:30. Después recorrimos los Jardines del Este juntos durante 90 minutos, comimos en Marunouchi, y terminamos con el circuito fotográfico exterior. Esa es la forma de combinar las tres opciones en un solo día — pero solo funciona si el tour oficial está reservado con un mes de antelación.
                  </p>
                </GuideInsiderNoteEs>

                {/* SECCIÓN 03 */}
                <div className="section-eyebrow"><span>Sección 03 · Jardines del Este</span></div>
                <h2 id="section-03-jardines" className="scroll-mt-20">
                  Jardines del Este: la alternativa sin reserva
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los Jardines del Este del Palacio Imperial (皇居東御苑) son la única parte de los terrenos del palacio abierta al público sin reserva. Son gratis, grandes (unas 21 hectáreas), y contienen las ruinas del Honmaru — el torreón central del castillo de Edo, la fortaleza original en este lugar antes de que la Restauración Meiji trasladara aquí al emperador en 1869.
                </p>

                <h3>Horarios de apertura (2026)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">9:00 – 17:00</strong> (1 de marzo – 14 de abril, y todo septiembre)</li>
                  <li><strong className="text-foreground">9:00 – 18:00</strong> (15 de abril – agosto)</li>
                  <li><strong className="text-foreground">9:00 – 16:30</strong> (octubre)</li>
                  <li><strong className="text-foreground">9:00 – 16:00</strong> (noviembre – febrero)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las entradas se cierran <strong className="text-foreground">30 minutos antes</strong> del cierre indicado, y los jardines <strong className="text-foreground">cierran cada lunes y viernes</strong> más el período de Año Nuevo (28 de diciembre – 3 de enero). Si tus fechas en Tokio caen solo de lunes a viernes, planifica alrededor de esto.
                </p>

                <h3>Qué se ve realmente</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Ruinas del Honmaru</strong> — la base de piedra del torreón principal del castillo de Edo, destruido en un incendio de 1657 y nunca reconstruido. La vista desde arriba es uno de los pocos lugares en el centro de Tokio donde caminas sobre una estructura del siglo XVII.</li>
                  <li><strong className="text-foreground">Jardín Ninomaru</strong> — un jardín japonés clásico con un estanque, restaurado en la posguerra.</li>
                  <li><strong className="text-foreground">Casa de té Suwa y antiguas casetas de guardia</strong> — estructuras de la era Edo aún en sus posiciones originales.</li>
                  <li><strong className="text-foreground">Flores estacionales</strong> — cerezos en flor (finales de marzo – principios de abril), azaleas, iris, colores otoñales (mediados de noviembre).</li>
                </ul>

                <h3>Cuánto tiempo presupuestar</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un paseo enfocado lleva 60–75 minutos. Con guía, 90 minutos encaja bien — lo suficiente para cubrir la historia del castillo de Edo, la transición Meiji y cómo vive la familia imperial en estos terrenos hoy. Ir más rápido no añade mucho; ir más lento significa que has visto todo dos veces.
                </p>

                {/* SECCIÓN 04 */}
                <div className="section-eyebrow"><span>Sección 04 · La Ruta</span></div>
                <h2 id="section-04-ruta" className="scroll-mt-20">
                  La ruta a pie que la mayoría de guías oficiales recomienda
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para clientes que quieren "la experiencia completa del Palacio Imperial" sin reserva del tour oficial, esta es la ruta de 2,5–3 horas que uso más a menudo. Conecta los tres puntos fotográficos icónicos con los Jardines del Este en un único bucle.
                </p>

                <figure className="my-6">
                  <img
                    src="/images/blog/imperial-nijubashi.jpg"
                    alt="Nijubashi (Puente Doble) con la torre Fushimi Yagura detrás — la parada fotográfica icónica del Palacio Imperial"
                    className="w-full aspect-[3/2] object-cover rounded-lg"
                    loading="lazy"
                    width={1500}
                    height={1000}
                  />
                </figure>

                <h3>La ruta</h3>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Nijubashi (Puente Doble)</strong> — el icónico puente de piedra sobre el foso interior, con la torre Fushimi Yagura detrás. La foto clásica del Palacio Imperial. 10 minutos para la foto y la historia.</li>
                  <li><strong className="text-foreground">Puerta Sakurada-mon</strong> — escenario del asesinato de Ii Naosuke en 1860 (Incidente de Sakuradamon), un momento clave en la caída del shogunato Tokugawa. 5 minutos más comentarios.</li>
                  <li><strong className="text-foreground">Parque de la Fuente Wadakura</strong> — parque moderno tranquilo entre el foso y Marunouchi, con una de las mejores vistas de la estación de Tokio desde el sur. 10 minutos.</li>
                  <li><strong className="text-foreground">Jardines del Este vía Otemon</strong> — entrada por la puerta Otemon (la más cercana a la estación de Tokio), 90 minutos dentro.</li>
                  <li><strong className="text-foreground">Salida por Hirakawa-mon</strong> — salida por el lado norte y paseo hasta el parque Kitanomaru (cerezos en temporada) o vuelta hacia Otemachi para el tren.</li>
                </ol>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Distancia total: unos 4 km. Tiempo total con guía: ~3 horas. Sin reserva, sin problemas de ID, sin la restricción de operadores comerciales. Esto es lo que hacen la mayoría de mis clientes del Palacio Imperial.
                </p>

                {/* SECCIÓN 05 */}
                <div className="section-eyebrow"><span>Sección 05 · 2 de Enero</span></div>
                <h2 id="section-05-enero-2" className="scroll-mt-20">
                  2 de enero: el único día en que el Emperador aparece en persona
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Una vez al año, los terrenos interiores del palacio — normalmente cerrados salvo por tour oficial — se abren al público general para el <strong className="text-foreground">Saludo de Año Nuevo (新年一般参賀)</strong>. El Emperador y la Emperatriz aparecen en el balcón de la sala Chowa-Den y se dirigen al público reunido en la Corte Oriental.
                </p>

                <h3>Programa de 2026 (referencia)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En 2026, el Saludo de Año Nuevo tuvo lugar el <strong className="text-foreground">2 de enero</strong>. La puerta principal de entrada (Nijubashi) estuvo abierta de 9:30 a 14:10. La Familia Imperial realizó cinco apariciones en el balcón a lo largo del día (aproximadamente a las 10:10, 11:00, 11:50, 13:30 y 14:20). Las puertas de salida incluyeron Sakashita-mon, Kikyo-mon, Ote-mon e Inui-mon.
                </p>

                <h3>Qué esperar</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Control de seguridad fuerte en la puerta (inspección de bolsos, sin equipaje grande)</li>
                  <li>Multitudes de decenas de miles a lo largo del día</li>
                  <li>Cada aparición en el balcón dura unos minutos; se pide a los visitantes que asistan solo a una aparición para dejar sitio a otros</li>
                  <li>Sin sistema de comentarios, sin guías permitidos (similar a la regla del tour oficial)</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Es la única época del año en que puedes entrar a los terrenos interiores del palacio sin reserva. Si estás en Tokio el 2 de enero y quieres un momento único en la vida, vale la pena ir temprano. Para todos los demás, esto es contexto interesante pero no una consideración de planificación.
                </p>

                {/* SECCIÓN 06 */}
                <div className="section-eyebrow"><span>Sección 06 · vs Audio Tour</span></div>
                <h2 id="section-06-vs-audio" className="scroll-mt-20">
                  Guía oficial vs audio tour autoguiado
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Varias OTAs venden audio tours autoguiados de la zona del Palacio Imperial por ¥1.000–¥2.500 por persona — básicamente una app de smartphone con comentarios activados por GPS. Sirven para una narrativa básica. No son lo mismo que un guía oficial privado.
                </p>

                <div className="cost-table-cap"><span>Qué estás pagando</span></div>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Característica</th>
                        <th>Audio autoguiado</th>
                        <th>Privado con guía oficial</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Coste (grupo de 2)</td>
                        <td className="bar-cell win">¥3.000</td>
                        <td className="bar-cell">¥40.000–¥60.000</td>
                      </tr>
                      <tr>
                        <td className="scenario">Ruta personalizada</td>
                        <td className="bar-cell">No (guion fijo)</td>
                        <td className="bar-cell win">Sí</td>
                      </tr>
                      <tr>
                        <td className="scenario">Preguntas respondidas</td>
                        <td className="bar-cell">No</td>
                        <td className="bar-cell win">Sí</td>
                      </tr>
                      <tr>
                        <td className="scenario">Profundidad cultural</td>
                        <td className="bar-cell">Superficial</td>
                        <td className="bar-cell win">Completa</td>
                      </tr>
                      <tr>
                        <td className="scenario">Adaptación al clima</td>
                        <td className="bar-cell">Ninguna</td>
                        <td className="bar-cell win">Sí</td>
                      </tr>
                      <tr>
                        <td className="scenario">Combinable con otras paradas en Tokio</td>
                        <td className="bar-cell">No</td>
                        <td className="bar-cell win">Sí (extiende a Marunouchi, Ginza)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>Cuándo el audio basta</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Viajeros solos con presupuesto que pasen 1–2 horas en los terrenos del palacio. La app de audio da una narrativa nivel Wikipedia por el precio de un café. No te dirá por qué una piedra concreta lleva la marca de un samurai, pero sí en qué año ardió el castillo de Edo.
                </p>

                <h3>Cuándo el privado vale la prima</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Grupos de 2+ que quieran el Palacio Imperial como parte de un día cultural más largo en Tokio. Una vez lo combinas con la historia de Marunouchi, la arquitectura de la estación de Tokio y un paseo por Ginza, el coste por persona se acerca al del audio tour de todas formas — y obtienes respuestas a lo que realmente te preguntes.
                </p>

                {/* SECCIÓN 07 */}
                <div className="section-eyebrow"><span>Sección 07 · Cómo Lo Organizo</span></div>
                <h2 id="section-07-como" className="scroll-mt-20">
                  Cómo organizo mi día de Palacio Imperial + Jardines del Este
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Como referencia, esta es la forma típica de una media jornada en el Palacio Imperial con guía oficial. El formato siguiente asume que los Jardines del Este están abiertos (martes, miércoles, jueves, sábado, domingo); si no, sustituimos por el circuito exterior a pie más largo.
                </p>

                <h3>La forma de la mañana</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">08:30:</strong> Reviso el calendario de los Jardines del Este confirmando que es un día de apertura.</li>
                  <li><strong className="text-foreground">09:00:</strong> Nos encontramos en tu hotel de Tokio; tomamos el tren hasta la estación de Tokio.</li>
                  <li><strong className="text-foreground">09:30:</strong> Caminamos desde la estación de Tokio hasta Nijubashi para la foto icónica del palacio y la historia del puente.</li>
                  <li><strong className="text-foreground">10:00:</strong> Sakurada-mon y los comentarios del Incidente de Sakuradamon.</li>
                  <li><strong className="text-foreground">10:30:</strong> Entrada a los Jardines del Este por Otemon; 90 minutos dentro cubriendo las ruinas del Honmaru, el Jardín Ninomaru y las piedras del castillo de Edo.</li>
                  <li><strong className="text-foreground">12:00:</strong> Salida por Hirakawa-mon, comida en Marunouchi o extensión al parque Kitanomaru.</li>
                  <li><strong className="text-foreground">13:00–14:00:</strong> Vuelta a la zona de tu hotel, o continuamos a Ginza/Akihabara/Asakusa para una extensión de día completo.</li>
                </ul>

                <h3>Qué es diferente a una visita autoguiada</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Planificación por correo antes del viaje.</strong> Confirmo que los Jardines del Este están abiertos en tu fecha; si además quieres el tour interior oficial, te ayudo a reservarlo en kunaicho.go.jp.</li>
                  <li><strong className="text-foreground">Comentarios con historia.</strong> Por qué el emperador Meiji se mudó aquí en 1869, por qué el Honmaru nunca se reconstruyó tras 1657, cómo vive hoy la familia imperial detrás de los muros interiores. Esa es la capa que convierte un paseo en historia.</li>
                  <li><strong className="text-foreground">Tokio adyacente combinado.</strong> El Palacio Imperial encaja de forma natural como mitad matinal de una ruta de día completo — Marunouchi, Ginza o Akihabara por la tarde según tus intereses.</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Para los detalles de reserva, lo más fácil es{" "}
                  <Link to="/es/contact" className="text-accent hover:underline">
                    un mensaje rápido por el formulario de contacto
                  </Link>{" "}
                  con tus fechas y tamaño de grupo. Si quieres combinar el palacio con otros barrios de Tokio, indícalo.
                </p>

                <InlineCTAEs
                  message="¿Quieres un día del Palacio Imperial planificado para tu viaje?"
                  linkText="Reserva un tour privado del Palacio Imperial →"
                  href="/es/contact"
                />

                {/* SECCIÓN 08 FAQ */}
                <div className="section-eyebrow"><span>Sección 08 · FAQ</span></div>
                <h2 id="section-08-faq" className="scroll-mt-20">
                  Preguntas Frecuentes
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">¿Es gratis el tour del Palacio Imperial?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      El tour oficial de la Agencia de la Casa Imperial es gratis, dura aproximadamente 1 hora y cubre una ruta de 2,2 km dentro de los terrenos del palacio. Los Jardines del Este también son gratis sin necesidad de reserva. Solo los tours privados con guía oficial tienen coste (¥40.000–¥60.000 por grupo para una media jornada que cubre la ruta exterior + Jardines del Este).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Cómo reservo el tour oficial del Palacio Imperial?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Solicítalo online en sankan.kunaicho.go.jp empezando a las 5:00 AM JST el día 1 del mes anterior a tu visita, cerrando 4 días antes de tu fecha elegida. También hay tickets del mismo día en la puerta Kikyo-mon (reparto a las 9:00 por la mañana, 12:30 por la tarde; tope de 300 por tour). Lleva pasaporte o ID original — fotocopias no se aceptan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Puede acompañarme un guía turístico en el tour oficial del Palacio Imperial?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No. La Agencia de la Casa Imperial no permite operadores turísticos comerciales en el tour oficial. Entras con tu grupo pero sin guía profesional. Si quieres ambos —el tour interior y un guía— el enfoque típico es hacer el tour oficial solo y contar con un guía oficial para los Jardines del Este + el recorrido exterior antes o después.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Merece la pena visitar los Jardines del Este?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí, especialmente con guía. Los Jardines del Este contienen las ruinas del Honmaru del castillo de Edo (el torreón central de la fortaleza que definió Tokio durante 260 años), el jardín Ninomaru, antiguas casetas de guardia de la era Edo, y cerezos en flor o colores otoñales estacionales. Un paseo guiado de 90 minutos cubre todo; una visita en solitario enfocada lleva 60 minutos.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Cuándo cierran los Jardines del Este del Palacio Imperial?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Los Jardines del Este cierran todos los lunes y viernes, más el período de Año Nuevo (28 de diciembre – 3 de enero) y días puntuales por ceremonias imperiales. Los horarios varían por temporada: 9:00–18:00 en verano (15 de abril – agosto), 9:00–17:00 en primavera/septiembre, 9:00–16:30 en octubre, y 9:00–16:00 en invierno (noviembre – febrero). Las entradas cierran 30 minutos antes del cierre indicado.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Se puede ver al Emperador en el Palacio Imperial?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Solo el 2 de enero (Saludo de Año Nuevo / 新年一般参賀), cuando el Emperador y la Emperatriz aparecen en el balcón de la sala Chowa-Den y se dirigen al público desde la Corte Oriental. La puerta principal (Nijubashi) abre a las 9:30, con cinco apariciones en balcón a lo largo del día. Control de seguridad fuerte; tampoco se admiten guías en los terrenos interiores ese día.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Cuánto dura un tour del Palacio Imperial?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      El tour interior oficial es de 1 hora, 2,2 km. Jardines del Este autoguiados: 60–75 minutos. Jardines del Este con guía oficial: 90 minutos. Bucle exterior completo solo: 60–90 minutos. La combinación de Jardines del Este + puntos fotográficos exteriores con guía suele ser de 2,5–3 horas, que es lo que hacen la mayoría de mis clientes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Dónde se hace la foto icónica del Palacio Imperial?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      El mirador de Nijubashi (Puente Doble) desde la plaza exterior es la toma clásica — puente de piedra en primer plano con la torre Fushimi Yagura detrás. Abierto 24/7, gratis, sin reserva. La mejor luz es a media mañana cuando el puente mira al este hacia el sol. La vista del palacio más fotografiada de Tokio y la única que puedes hacer sin entrar a ninguna zona restringida.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Listo para reservar un día del Palacio Imperial que encaje con tu viaje?"
                  linkText="Reserva un tour privado del Palacio Imperial →"
                  href="/es/contact"
                />
              </article>
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["custom"]} lang="es" showViewAll />
      </div>
    </Layout>
  );
};

export default EsTourPalacioImperialTokio2026;
