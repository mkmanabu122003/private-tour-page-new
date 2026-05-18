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

const EsTourPrivadoMonteFuji2026 = () => {
  return (
    <Layout>
      <SEO
        title="Tour Privado al Monte Fuji desde Tokio 2026: Guía Oficial"
        description="Compara tours privados al Monte Fuji desde Tokio en 2026. Guía oficial explica 3 rutas, costes reales (¥30.000–¥120.000), qué incluye y Viator vs privado."
        canonicalPath="/es/blog/tour-privado-monte-fuji-2026"
        hreflang={[
          { lang: "en", path: "/blog/private-mount-fuji-tour-2026" },
          { lang: "es", path: "/es/blog/tour-privado-monte-fuji-2026" },
          { lang: "x-default", path: "/blog/private-mount-fuji-tour-2026" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Tour Privado Monte Fuji 2026" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tours/hakone-lake-ashi-fuji.webp"
          imageAlt="Monte Fuji sobre el lago Ashi en Hakone — una parada habitual del tour privado al Monte Fuji desde Tokio"
          eyebrow="Guía de Reserva · Tours Privados"
          title="Tour Privado al Monte Fuji desde Tokio 2026: Guía de un Guía Oficial"
          subtitle="Escrito por Manabu, Guía Intérprete Oficial Nacional (全国通訳案内士) que organiza tours privados de día completo al Monte Fuji desde Tokio durante todo el año."
          date="mayo de 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc
                items={[
                  { num: "01", label: "Por qué reservar un tour privado", href: "#section-01-por-que-privado" },
                  { num: "02", label: "Costes reales en 2026", href: "#section-02-costes" },
                  { num: "03", label: "Qué incluye realmente", href: "#section-03-incluye" },
                  { num: "04", label: "Las 3 mejores rutas", href: "#section-04-rutas" },
                  { num: "05", label: "Guía oficial vs Viator", href: "#section-05-vs-viator" },
                  { num: "06", label: "Cuándo reservar y el clima", href: "#section-06-cuando" },
                  { num: "07", label: "Cómo organizo mi tour", href: "#section-07-como" },
                  { num: "08", label: "FAQ", href: "#section-08-faq" },
                ]}
              />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Decisión rápida</p>
                  <h2>Para la mayoría de viajeros, un tour privado al Monte Fuji desde Tokio cuesta entre <span className="hl-gold">¥30.000 y ¥120.000 para todo el grupo</span> en un día completo.</h2>
                  <p>
                    Con 2 personas es caro por cabeza. Con 4 personas se acerca a lo que cuesta un autobús de grupo por persona — con flexibilidad total, una ruta adaptada al clima y un guía oficial que lee el pronóstico de la mañana.
                  </p>
                  <p>
                    Si te basta con sentarte en un autobús con desconocidos y hacer una foto estándar, los tours de grupo OTA están bien. Si has venido a Japón con una sola oportunidad de ver el Fuji y no quieres jugártela, quieres un guía privado.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Este artículo es la guía práctica de logística y precios que complementa mi otra entrada{" "}
                  <Link to="/es/blog/monte-fuji-se-ve-desde-tokio" className="text-accent hover:underline">
                    ¿Se ve el Monte Fuji desde Tokio?
                  </Link>
                  . Aquélla responde a <em>dónde</em> se ve el Fuji. Ésta responde a <em>qué tour reservar</em> en 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Monte Fuji es la razón principal por la que mis clientes internacionales añaden un día a su itinerario de Tokio. También es el día sobre el que reciben los consejos más contradictorios. ¿Autobús o tren? ¿Hakone o Kawaguchiko? ¿Por qué el mismo tour cuesta ¥10.000 en Viator y ¥80.000 en la web de un operador privado? He hecho este día con cientos de viajeros y, una vez entiendes los compromisos, la decisión es más simple de lo que parece.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Todo lo que sigue refleja precios de 2026, la nueva tasa de ascenso de ¥4.000 que entró en vigor en 2025, el sistema actual de autobuses lanzadera de la Fuji Subaru Line, y los precios reales de las OTA con los que mis clientes me comparan.
                </p>

                <div className="guide-note-callout">
                  <div
                    className="gn-portrait"
                    style={{ backgroundImage: `url(${manabuPortrait})` }}
                  />
                  <div>
                    <p className="gn-label">La visión de Manabu</p>
                    <h3>Con dos personas, el tour privado se gana su precio. Con cuatro, simplemente tiene sentido económico.</h3>
                    <p>
                      No trato de vender un tour privado a cada visitante. El mismo día que le digo a un mochilero solo con presupuesto ajustado que coja el tren Fuji Excursion y se salte el guía, también le digo a una familia de cinco que el tour privado les saldrá más barato por persona que tres asientos de Viator — y les dará una vía de escape si las nubes aparecen a mediodía.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Quieres este día planificado según el tamaño de tu grupo, las fechas y lo que realmente quieres ver?"
                  linkText="Ver mi excursión a Hakone →"
                  href="/es/tours/hakone-day-trip"
                />

                {/* ---------- SECCIÓN 01 ---------- */}
                <div className="section-eyebrow"><span>Sección 01 · Por Qué Privado</span></div>
                <h2 id="section-01-por-que-privado" className="scroll-mt-20">
                  Por qué reservar un tour privado al Monte Fuji (y cuándo no)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La mayoría de viajeros se queda con una de dos opciones cuando busca "Monte Fuji desde Tokio": un autobús de grupo tipo Viator o un viaje por libre con el tren Fuji Excursion. Ambos son válidos. Un tour privado resuelve un problema concreto que ninguna de las otras dos resuelve — el problema de <strong className="text-foreground">una sola oportunidad, mal tiempo, y un grupo cuyo ritmo no puedes controlar</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Monte Fuji es famosamente visible <span className="hl-gold">solo el 40–60% de los días de invierno, bajando al 10–20% en verano</span>. En un autobús de grupo, estás atrapado en una ruta y unas paradas fotográficas fijas. Si las nubes se asientan sobre la cumbre en el mirador previsto, te llevas a casa la foto de una montaña que no aparece. Con un guía privado, la comprobación matinal del clima cambia la ruta — Hakone en lugar de Kawaguchiko, un mirador interior en lugar de uno junto al lago, o un giro limpio hacia el onsen y un pueblo a pie si el día está perdido.
                </p>

                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">Opción por defecto</p>
                    <h3>Elige autobús de grupo si…</h3>
                    <ul>
                      <li>Viajas solo o en pareja con presupuesto justo</li>
                      <li>Aceptas un horario fijo y un grupo grande</li>
                      <li>No te importa una recogida a las 7:30 en Shinjuku</li>
                      <li>Solo quieres la foto de prueba del Fuji</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">Vale la pena en estos casos</p>
                    <h3>Elige tour privado si…</h3>
                    <ul>
                      <li>Grupo de 3–6 (el coste por cabeza se acerca al de grupo)</li>
                      <li>Viajas con niños, mayores o cualquiera que necesite un ritmo más lento</li>
                      <li>Quieres un guía que lea el clima y cambie la ruta</li>
                      <li>Quieres profundidad cultural, no solo un mirador</li>
                      <li>Necesidades dietéticas o de accesibilidad que un grupo no puede cubrir</li>
                    </ul>
                  </div>
                </div>

                <h3>Dónde fallan los tours privados sin que se note</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Veo dos modos de fallo a menudo. Primero: un "tour privado" vendido como servicio de coche con chófer angloparlante, comercializado al mismo precio que un tour con guía oficial — el cliente cree que va a recibir explicaciones culturales y solo recibe un chófer. Segundo: viajeros solos pagando tarifas de grupo privado y sintiendo el sobreprecio por cabeza sin recibir el valor por cabeza. Si viajas solo y con presupuesto justo, el tren Fuji Excursion más un billete de bus de medio día por Kawaguchiko casi siempre es la respuesta correcta.
                </p>

                {/* ---------- SECCIÓN 02 ---------- */}
                <div className="section-eyebrow"><span>Sección 02 · Costes Reales</span></div>
                <h2 id="section-02-costes" className="scroll-mt-20">
                  Costes reales en 2026: privado vs grupo vs por libre
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Lo que sigue es lo que realmente veo en el mercado en 2026. Los precios de autobús de grupo son el rango público en Viator, GetYourGuide y Klook para tours de día completo al Monte Fuji. Los precios privados son los del segmento medio de operadores con guía oficial en Tokio — no concierge de lujo.
                </p>

                <div className="cost-table-cap"><span>Día completo al Monte Fuji desde Tokio · coste por grupo en 2026</span></div>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Opción</th>
                        <th>2 personas</th>
                        <th>4 personas</th>
                        <th>Por persona <span className="sub">con 4 pax</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Por libre (tren + bus)<span className="tag">El más barato</span></td>
                        <td className="bar-cell">¥14.000<span className="bar"><i style={{ width: '12%' }} /></span></td>
                        <td className="bar-cell">¥28.000<span className="bar"><i style={{ width: '23%' }} /></span></td>
                        <td className="savings">¥7.000</td>
                      </tr>
                      <tr>
                        <td className="scenario">Autobús de grupo Viator/GetYourGuide</td>
                        <td className="bar-cell">¥24.000<span className="bar"><i style={{ width: '20%' }} /></span></td>
                        <td className="bar-cell">¥48.000<span className="bar"><i style={{ width: '40%' }} /></span></td>
                        <td className="savings">¥12.000</td>
                      </tr>
                      <tr>
                        <td className="scenario">Solo chófer angloparlante</td>
                        <td className="bar-cell">¥50.000<span className="bar"><i style={{ width: '42%' }} /></span></td>
                        <td className="bar-cell">¥60.000<span className="bar"><i style={{ width: '50%' }} /></span></td>
                        <td className="savings">¥15.000</td>
                      </tr>
                      <tr>
                        <td className="scenario">Privado con guía oficial<span className="tag">Recomendado con 4+</span></td>
                        <td className="bar-cell win">¥70.000<span className="bar"><i style={{ width: '58%' }} /></span></td>
                        <td className="bar-cell win">¥90.000<span className="bar"><i style={{ width: '75%' }} /></span></td>
                        <td className="savings">¥22.500</td>
                      </tr>
                      <tr>
                        <td className="scenario">Concierge premium + vehículo</td>
                        <td className="bar-cell">¥120.000<span className="bar"><i style={{ width: '100%' }} /></span></td>
                        <td className="bar-cell">¥150.000<span className="bar"><i style={{ width: '125%' }} /></span></td>
                        <td className="savings">¥37.500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  La cuenta que sorprende: con 4 personas, un tour privado con guía oficial a ¥22.500 por cabeza es menos del doble que un asiento de grupo Viator (¥12.000 por cabeza). Por ese 1,9× de prima cambias el grupo de 30+ desconocidos, el horario fijo y los comentarios superficiales por tu propio vehículo, una ruta a medida, comentarios completos en inglés (o español si el guía lo habla) y la capacidad de cambiar el plan si el clima no acompaña.
                </p>

                <blockquote className="pull-quote">
                  Con cuatro personas, la prima del tour privado sobre el autobús de grupo es el precio de una cena en Tokio por cabeza — y te compra el día entero.
                </blockquote>

                <h3>El coste oculto en los viajes por libre</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El tren Fuji Excursion desde Shinjuku a Kawaguchiko cuesta <strong className="text-foreground">¥4.200 por trayecto</strong> (¥2.580 de tarifa base + ¥1.620 de suplemento de exprés limitado), opera con cuatro idas y vueltas al día y tarda aproximadamente 1 hora 55 minutos. Súmale un Hakone Free Pass de <strong className="text-foreground">unos ¥6.100 por adulto</strong> si vas vía Hakone, más el teleférico (¥3.000 ida y vuelta de la línea completa) y el barco pirata (unos ¥2.220 ida y vuelta), más comida y el autobús lanzadera de la 5ª estación si aplica, y un día por libre para una persona se queda alrededor de ¥14.000–¥17.000. Dos personas: aproximadamente ¥28.000–¥34.000. Para una pareja, ir por libre sigue ganando en precio; el valor real del privado aparece a partir de tres personas.
                </p>

                {/* ---------- SECCIÓN 03 ---------- */}
                <div className="section-eyebrow"><span>Sección 03 · Qué Incluye</span></div>
                <h2 id="section-03-incluye" className="scroll-mt-20">
                  Qué incluye realmente (y qué silenciosamente no)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aquí es donde los operadores privados más se diferencian. La tarifa anunciada es una cosa; si incluye entradas al teleférico, comida y recogida es otra. Antes de reservar, pide la lista de inclusiones por escrito — la mayoría de operadores te la envía sin problema.
                </p>

                <h3>Habitualmente incluido en un tour privado con guía oficial</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Guía oficial angloparlante (o hispanohablante si lo encuentras) durante todo el día (normalmente 10–11 horas hotel-a-hotel)</li>
                  <li>Planificación del itinerario previa al viaje, con ajuste de ruta por la mañana según el clima</li>
                  <li>Encuentro en tu hotel de Tokio; viajamos juntos desde allí</li>
                  <li>Transporte, comidas y entradas del propio guía</li>
                  <li>Paradas fotográficas en miradores menos masificados que los del autobús</li>
                </ul>

                <h3>Frecuentemente <em>no</em> incluido (confírmalo antes de reservar)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Transporte de los clientes</strong> — billetes de tren, Hakone Free Pass o alquiler de vehículo suelen facturarse a coste o como línea separada</li>
                  <li><strong className="text-foreground">Entradas del teleférico y el barco pirata</strong> — habitualmente se compran el mismo día; ~¥3.000 + ~¥2.220 por persona en Hakone</li>
                  <li><strong className="text-foreground">Comida</strong> — el guía te recomendará un sitio, tú pagas tu cuenta</li>
                  <li><strong className="text-foreground">Tasa de ascenso al Fuji de ¥4.000</strong> — solo si vas a ascender físicamente en julio–septiembre; los tours estándar no la pagan</li>
                  <li><strong className="text-foreground">Lanzadera a la 5ª estación</strong> (~¥1.500–¥1.800 por persona y trayecto durante la temporada de ascenso, cuando se prohíben los coches privados)</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  El encuadre honesto: una cotización de ¥80.000 que excluye transporte y entradas para una familia de 4 que va a Hakone probablemente acabará en ¥95.000–¥105.000 todo incluido una vez sumadas las entradas. Una cotización de ¥10.000 por persona en Viator que incluye comida y entradas se acerca más al precio real todo incluido. Compara siempre manzanas con manzanas.
                </p>

                <GuideInsiderNoteEs date="abril de 2026">
                  <p>
                    La semana pasada una pareja me reservó para Hakone y me preguntó si debían comprar el Hakone Free Pass en Shinjuku o pagar en el día. Revisé su itinerario — crucero por el Lago Ashi y teleférico, sin extras — y les dije que se saltaran el pase. Pagar a la carta en cada entrada (¥5.220 por persona en total para ambos) salió mejor que los ¥6.100 del Free Pass cada uno, y evitaron pagar transporte que no iban a usar. Es el tipo de aritmética por líneas que importa cuando ya estás pagando una tarifa privada.
                  </p>
                </GuideInsiderNoteEs>

                {/* ---------- SECCIÓN 04 ---------- */}
                <div className="section-eyebrow"><span>Sección 04 · Las 3 Rutas</span></div>
                <h2 id="section-04-rutas" className="scroll-mt-20">
                  Las 3 mejores rutas privadas al Monte Fuji desde Tokio
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Realmente solo hay tres rutas de día completo que merezcan la pena como tour privado. Cada una tiene un caso de uso claro. Yo opero las tres; la correcta depende de lo que le importe a tu grupo y del clima del día.
                </p>

                <h3>Ruta A — Hakone + Lago Ashi (la clásica)</h3>
                <figure className="my-6">
                  <img
                    src="/images/blog/private-fuji-route-a-hakone.jpg"
                    alt="El Monte Fuji detrás del torii rojo del Santuario de Hakone en el Lago Ashi — una parada fotográfica típica de la Ruta A"
                    className="w-full aspect-[3/2] object-cover rounded-lg"
                    loading="lazy"
                    width={1500}
                    height={1000}
                  />
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Paradas:</strong> Owakudani (cráter volcánico activo en el teleférico), barco pirata del Lago Ashi a Moto-Hakone, torii rojo del Santuario de Hakone dentro del lago, Museo al Aire Libre de Hakone u onsen si queda tiempo. Vistas del Fuji desde el Lago Ashi y desde el punto intermedio del teleférico en días despejados.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Por qué elegirla:</strong> La ruta más fiable para quienes visitan Japón por primera vez. Profundidad cultural (santuario, pueblo de aguas termales, historia de los onsen) más paisaje volcánico más vistas del Fuji en un solo día. Funciona todo el año; sin restricciones de temporada de ascenso.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Compromiso:</strong> Aquí el Fuji es telón de fondo, no el protagonista. Si tu prioridad es la foto clásica de "Fuji sobre un lago", Kawaguchiko entrega mejor ese plano. Mira mi{" "}
                  <Link to="/es/tours/hakone-day-trip" className="text-accent hover:underline">
                    excursión a Hakone
                  </Link>{" "}
                  para la versión completa de esta ruta.
                </p>

                <h3>Ruta B — Kawaguchiko + Pagoda Chureito (la postal)</h3>
                <figure className="my-6">
                  <img
                    src="/images/blog/private-fuji-route-b-chureito.jpg"
                    alt="La Pagoda Chureito enmarcada por cerezos en flor con el Monte Fuji al fondo — el mirador icónico de la Ruta B"
                    className="w-full aspect-[3/2] object-cover rounded-lg"
                    loading="lazy"
                    width={1500}
                    height={1000}
                  />
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Paradas:</strong> Pagoda Chureito desde Shimoyoshida (la foto icónica de la pagoda con el Fuji al fondo), Parque Oishi en la orilla norte del Lago Kawaguchi, Bosque Musical de Kawaguchiko o Museo Itchiku Kubota, 5ª estación de la Fuji Subaru Line opcional (solo en temporada de ascenso, con autobús lanzadera).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Por qué elegirla:</strong> Si has venido a Japón específicamente por la foto del Fuji, esta es la ruta. La vista de la Pagoda Chureito con el Fuji enmarcado por una pagoda de cinco pisos aparece en cada póster turístico de Japón por una razón. La floración de lavanda en el Parque Oishi suele ser de <strong className="text-foreground">finales de junio a mediados de julio</strong> (el Kawaguchiko Herb Festival cae aproximadamente en esa ventana cada año), y los cerezos rodean el lago a principios o mediados de abril.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Compromiso:</strong> Menos profundidad cultural que Hakone; el riesgo climático es mayor porque el primer plano solo funciona si el Fuji está visible. La subida a la Chureito son <strong className="text-foreground">398 escalones</strong> desde la entrada del santuario — bien para la mayoría de adultos pero no apta para carritos.
                </p>

                <h3>Ruta C — Oshino Hakkai + Gotemba (el día tranquilo)</h3>
                <figure className="my-6">
                  <img
                    src="/images/blog/private-fuji-route-c-oshino.jpg"
                    alt="Turistas en Oshino Hakkai — los ocho estanques cristalinos y el pueblo tradicional a los pies del Monte Fuji en la Ruta C"
                    className="w-full aspect-[3/2] object-cover rounded-lg"
                    loading="lazy"
                    width={1500}
                    height={1000}
                  />
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Paradas:</strong> Oshino Hakkai (ocho estanques alimentados por el deshielo del Fuji, pueblo tradicional con tejados de paja y el Fuji de fondo en días claros), un mirador interior menos masificado, opcional Gotemba Premium Outlets si hay compras en la lista, ranchos del lado de Susono con el Fuji como protagonista.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Por qué elegirla:</strong> Visitantes que repiten y ya han hecho Hakone. Fotógrafos que quieren el mismo Fuji desde otro ángulo sin las masas de Kawaguchiko. Familias con niños que no aguantan el ritmo de un día-maratón de miradores.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Compromiso:</strong> Menos evidente si nunca has estado. Las paradas "wow" son más sutiles que un barco pirata o una pagoda. Mejor como segunda visita, no como primer día en Japón.
                </p>

                <div className="cost-table-cap"><span>Qué ruta encaja contigo</span></div>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Si tu prioridad es…</th>
                        <th>Ruta A (Hakone)</th>
                        <th>Ruta B (Kawaguchiko)</th>
                        <th>Ruta C (Oshino)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">La foto icónica de pagoda + Fuji</td>
                        <td className="bar-cell">○</td>
                        <td className="bar-cell win">◎ Mejor</td>
                        <td className="bar-cell">×</td>
                      </tr>
                      <tr>
                        <td className="scenario">Profundidad cultural + onsen</td>
                        <td className="bar-cell win">◎ Mejor</td>
                        <td className="bar-cell">○</td>
                        <td className="bar-cell">○</td>
                      </tr>
                      <tr>
                        <td className="scenario">Primer día en Japón</td>
                        <td className="bar-cell win">◎ Mejor</td>
                        <td className="bar-cell">◎</td>
                        <td className="bar-cell">△</td>
                      </tr>
                      <tr>
                        <td className="scenario">Segunda visita a la zona</td>
                        <td className="bar-cell">△</td>
                        <td className="bar-cell">○</td>
                        <td className="bar-cell win">◎ Mejor</td>
                      </tr>
                      <tr>
                        <td className="scenario">Fiable con mal tiempo</td>
                        <td className="bar-cell win">◎ Mejor</td>
                        <td className="bar-cell">△</td>
                        <td className="bar-cell">○</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <InlineCTAEs
                  message="¿No estás seguro de qué ruta encaja con tu viaje?"
                  linkText="Cuéntame tus fechas y te sugiero una →"
                  href="/es/contact"
                />

                {/* ---------- SECCIÓN 05 ---------- */}
                <div className="section-eyebrow"><span>Sección 05 · vs Viator</span></div>
                <h2 id="section-05-vs-viator" className="scroll-mt-20">
                  Guía oficial vs Viator y GetYourGuide
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Es la comparación que los clientes piden con más frecuencia. Un tour en autobús de grupo en Viator o GetYourGuide aparece en torno a <strong className="text-foreground">¥10.000–¥18.000 por persona</strong>, y el precio anunciado siempre vencerá al de un tour privado con guía oficial. La pregunta es qué estás comprando realmente.
                </p>

                <div className="cost-table-cap"><span>Qué estás pagando</span></div>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Característica</th>
                        <th>Autobús de grupo OTA</th>
                        <th>Privado con guía oficial</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Tamaño del grupo</td>
                        <td className="bar-cell">20–45 desconocidos</td>
                        <td className="bar-cell win">Solo tu grupo</td>
                      </tr>
                      <tr>
                        <td className="scenario">Cualificación del guía</td>
                        <td className="bar-cell">Variable, a menudo sin licencia</td>
                        <td className="bar-cell win">Oficial nacional (全国通訳案内士)</td>
                      </tr>
                      <tr>
                        <td className="scenario">Flexibilidad del itinerario</td>
                        <td className="bar-cell">Fijo</td>
                        <td className="bar-cell win">A medida + adaptable al clima</td>
                      </tr>
                      <tr>
                        <td className="scenario">Lugar de recogida</td>
                        <td className="bar-cell">Solo Shinjuku/Hamamatsucho</td>
                        <td className="bar-cell win">Tu hotel</td>
                      </tr>
                      <tr>
                        <td className="scenario">Flexibilidad para comer</td>
                        <td className="bar-cell">Menú fijo de grupo</td>
                        <td className="bar-cell win">Tu elección</td>
                      </tr>
                      <tr>
                        <td className="scenario">Profundidad de los comentarios</td>
                        <td className="bar-cell">Superficial</td>
                        <td className="bar-cell win">Completa</td>
                      </tr>
                      <tr>
                        <td className="scenario">Coste por persona (4 pax)</td>
                        <td className="bar-cell win">¥12.000</td>
                        <td className="bar-cell">¥22.500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>Dónde los tours tipo Viator están perfectamente bien</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se lo digo directamente a los viajeros solos y a las parejas con presupuesto justo: para una o dos personas con presupuesto fijo, un autobús de grupo es la respuesta correcta. Verás el Fuji (si el clima lo permite), harás las paradas estándar y gastarás un tercio de lo que cuesta un privado. El compromiso es real — grupo de autobús, horario fijo, comentarios superficiales — pero la matemática no miente.
                </p>

                <h3>La cuestión del "guía oficial" que sí importa</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En Japón, "guía con licencia" se refiere específicamente a la cualificación de <strong className="text-foreground">Guía Intérprete Oficial Nacional (全国通訳案内士)</strong> — un examen estatal que cubre historia, geografía y cultura japonesa, además del idioma destino. Es la única cualificación de guía legalmente reconocida en Japón. Muchos tours comercializados como "privados con guía" los lleva gente local entusiasta sin esta credencial. No siempre es un problema (algunos guías sin licencia son excelentes), pero conviene saber por qué estás pagando. Escribí sobre ello con detalle en{" "}
                  <Link to="/es/blog/guia-licencia-oficial-japon" className="text-accent hover:underline">
                    Guía con licencia vs sin licencia en Japón
                  </Link>
                  .
                </p>

                {/* ---------- SECCIÓN 06 ---------- */}
                <div className="section-eyebrow"><span>Sección 06 · Cuándo Reservar</span></div>
                <h2 id="section-06-cuando" className="scroll-mt-20">
                  Cuándo reservar y plan B si el clima falla
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La visibilidad del Monte Fuji es la mayor variable de este día. Elegir el mes correcto sube tus probabilidades del 10% al 60%; elegir la hora del día acertada las pasa de medias a nítidas. El patrón, simplificado:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Noviembre a febrero:</strong> Mejores meses. Aire seco invernal, ~40–60% de los días con vistas claras. Mañanas frías, sin acceso para ascender.</li>
                  <li><strong className="text-foreground">Marzo–abril:</strong> Cerezos en flor alrededor de Kawaguchiko a principios y mediados de abril. La visibilidad baja al ~30% de los días.</li>
                  <li><strong className="text-foreground">Mayo–junio:</strong> Pretemporada de lluvias; lavanda en el Parque Oishi a finales de junio. Visibilidad ~20%.</li>
                  <li><strong className="text-foreground">Julio–septiembre:</strong> Se abre la temporada de ascenso (Sendero Yoshida <strong>1 de julio – 10 de septiembre</strong> en 2026). La visibilidad baja al ~10–20%. Humedad y nubes vespertinas dominan.</li>
                  <li><strong className="text-foreground">Octubre:</strong> Hojas otoñales alrededor de los lagos, visibilidad recuperándose. El punto dulce de la temporada media si las fechas son flexibles.</li>
                </ul>

                <h3>La hora del día importa más de lo que la gente cree</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Incluso en un día bueno para el Fuji, la montaña se ve mejor por la mañana. A media tarde, las nubes cúmulos crecen sobre la cumbre y a menudo el Fuji desaparece por completo. Una salida de Tokio a las 7:30 te pone en Hakone o Kawaguchiko a las 9:30, que es cuando las vistas son más nítidas. Los autobuses turísticos rellenan ese hueco con extras y a menudo llegan a los miradores a media mañana; un tour privado puede ajustarse exactamente a la ventana matinal.
                </p>

                <h3>Con cuánta antelación reservar</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tours privados con guía oficial: <strong className="text-foreground">reserva con 4–8 semanas de antelación</strong> en temporadas altas (cerezos en flor, hojas otoñales de mediados de noviembre, fines de semana de temporada de ascenso, semana de Año Nuevo). Para días de semana en invierno suele bastar con 2 semanas. La mayoría de mis reservas para Fuji entran 4–6 semanas antes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los autobuses de grupo tienen más flexibilidad — los operadores listados en Viator suelen tener disponibilidad para la misma semana — pero los mejores operadores con guías angloparlantes se llenan primero.
                </p>

                <h3>El plan B climático que realmente uso</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mi regla la mañana del tour: si el pronóstico de nubes sobre el Fuji es malo y el radar muestra lluvia, mando un mensaje al cliente antes de las 7 de la mañana y propongo un cambio. Los más comunes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Nublado pero seco:</strong> Hakone en vez de Kawaguchiko — onsen, santuario y museo funcionan sin Fuji visible.</li>
                  <li><strong className="text-foreground">Lluvia fuerte:</strong> Reprogramar el día Fuji a otra fecha del viaje, sustituirlo hoy por un tour por barrios de Tokio.</li>
                  <li><strong className="text-foreground">Tormenta:</strong> Cancelar con reembolso según política de cancelación.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Los autobuses de grupo no cambian de plan. Salen llueva o haga sol, por la ruta que está en el folleto.
                </p>

                {/* ---------- SECCIÓN 07 ---------- */}
                <div className="section-eyebrow"><span>Sección 07 · Cómo Lo Organizo</span></div>
                <h2 id="section-07-como" className="scroll-mt-20">
                  Cómo organizo mi día privado al Monte Fuji
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para que se entienda cómo es en la práctica un privado de gama media con guía oficial, te cuento mi propio formato. No lo pongo como argumento de venta — hay varios guías oficiales excelentes en Tokio — sino para que los números y compromisos de arriba estén anclados en algo concreto.
                </p>

                <h3>La forma del día</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">06:30:</strong> Reviso el pronóstico de nubes sobre el Fuji y el radar de Hakone.</li>
                  <li><strong className="text-foreground">07:00:</strong> Mensaje al cliente confirmando la ruta o proponiendo el cambio si el clima es malo.</li>
                  <li><strong className="text-foreground">07:30–08:00:</strong> Nos encontramos en tu hotel de Tokio y salimos juntos.</li>
                  <li><strong className="text-foreground">09:30–10:00:</strong> Primera parada en mirador — Lago Ashi o Chureito según la ruta.</li>
                  <li><strong className="text-foreground">12:30:</strong> Comida en un sitio que sé que abre y sirve algo más que la comida turística estándar.</li>
                  <li><strong className="text-foreground">14:00–16:00:</strong> Segunda y tercera paradas — santuario, teleférico, museo o mirador tranquilo.</li>
                  <li><strong className="text-foreground">18:00–19:00:</strong> De vuelta en el centro de Tokio, cerca de tu hotel.</li>
                </ul>

                <h3>Qué es realmente diferente</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tres cosas que no aparecen en la comparación de precios:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Planificación por correo antes del viaje.</strong> Pregunto por el ritmo del grupo, preferencias dietéticas, prioridades fotográficas y qué ya habéis hecho en Tokio. El itinerario se cierra antes de la recogida, no en el autobús.</li>
                  <li><strong className="text-foreground">El cambio de ruta matinal por clima.</strong> Aproximadamente 1 de cada 5 días propongo una ruta distinta a la acordada, basada en el clima. Los clientes casi siempre dicen que sí; la alternativa es un día Fuji desperdiciado.</li>
                  <li><strong className="text-foreground">Contexto cultural, no solo datos.</strong> Por qué el Santuario de Hakone le importa a los japoneses, no solo cuándo se fundó. Por qué el Fuji aparece en todas las épocas del arte japonés. El tipo de contexto que convierte un mirador en una historia.</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Si esto encaja con lo que buscas, mi{" "}
                  <Link to="/es/tours/hakone-day-trip" className="text-accent hover:underline">
                    página de excursión a Hakone
                  </Link>{" "}
                  tiene la versión de la Ruta A con precio y qué incluye. Para rutas Kawaguchiko u Oshino, el camino más fácil es{" "}
                  <Link to="/es/contact" className="text-accent hover:underline">
                    un mensaje rápido por el formulario de contacto
                  </Link>{" "}
                  con tus fechas y tamaño de grupo.
                </p>

                <InlineCTAEs
                  message="¿Quieres este día planificado a la medida de tu grupo?"
                  linkText="Reserva un tour privado al Monte Fuji →"
                  href="/es/tours/hakone-day-trip"
                />

                {/* ---------- SECCIÓN 08 FAQ ---------- */}
                <div className="section-eyebrow"><span>Sección 08 · FAQ</span></div>
                <h2 id="section-08-faq" className="scroll-mt-20">
                  Preguntas Frecuentes
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">¿Cuánto cuesta un tour privado al Monte Fuji desde Tokio en 2026?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Un tour privado de día completo con guía oficial cuesta aproximadamente ¥70.000–¥120.000 por grupo según el tamaño, el vehículo y la ruta. Los servicios de solo chófer salen por ¥50.000–¥60.000. El concierge premium empieza en torno a ¥120.000 y sube. Los tours en autobús de grupo en Viator y GetYourGuide cuestan ¥10.000–¥18.000 por persona.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Merece la pena un tour privado al Monte Fuji para 2 personas?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Para 2 personas con presupuesto justo, un autobús de grupo o un viaje por libre suele ser la mejor opción — la prima por cabeza del privado es más alta con este tamaño de grupo. El privado empieza a tener sentido a partir de 3 personas, cuando el coste por cabeza se acerca al de un grupo OTA pero ganas ruta a medida, flexibilidad climática y comentarios completos en inglés.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Qué es mejor para ver el Fuji, Hakone o Kawaguchiko?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kawaguchiko entrega las fotos con el Fuji en primer plano (Pagoda Chureito, Parque Oishi, reflejos en el Lago Kawaguchi). Hakone ofrece al Fuji como telón de fondo más profundidad cultural (onsen, santuarios, museos) y resiste mejor el mal tiempo porque el día funciona aunque el Fuji esté oculto. Los que visitan Japón por primera vez suelen querer Hakone; los viajeros motivados por la foto suelen preferir Kawaguchiko.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Se puede ascender al Monte Fuji en un tour privado?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí, pero solo durante la temporada de ascenso (Sendero Yoshida: 1 de julio – 10 de septiembre en 2026). Todos los senderos requieren ahora una tasa de entrada de ¥4.000, y el Yoshida limita a 4.000 alpinistas al día con reserva online en fujisan-climb.jp. La puerta del Yoshida cierra a las 14:00; sin reserva confirmada en una cabaña de montaña, no hay acceso nocturno. La mayoría de tours privados se centran en la 5ª estación y los miradores en vez de en el ascenso completo — ascender es un compromiso aparte, de varios días.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Cuánto dura un tour privado al Monte Fuji desde Tokio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Normalmente 10–11 horas hotel-a-hotel. La mayoría de operadores recogen entre las 7:30 y las 8:00 y devuelven entre las 18:00 y las 19:00. La ventana importa: las primeras horas dan la mejor visibilidad del Fuji, así que salir pronto de Tokio no es negociable en un día Fuji serio.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿El tour privado al Monte Fuji incluye la comida?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Habitualmente no. La mayoría de tours privados con guía oficial incluyen la comida del propio guía pero facturan al cliente su comida aparte. El compromiso es elección — el guía recomienda un sitio que encaje con tus preferencias en lugar de un menú fijo de grupo. La comida suele costar ¥1.500–¥3.500 por persona en los restaurantes de Hakone o Kawaguchiko.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Qué pasa si llueve el día de mi tour al Fuji?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La mayoría de operadores privados con guía oficial tienen plan B climático. Mi enfoque: días nublados pero secos cambio a Hakone (santuario, onsen, museos siguen funcionando); lluvia fuerte reprograma el día Fuji si tu viaje lo permite; tormentas cancelan con reembolso. Revisa la política de cancelación antes de reservar — los autobuses de grupo en general salen llueva o haga sol sin cambiar el plan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Se puede ver el Monte Fuji desde Tokio sin tour?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí, en días claros de invierno desde el Edificio del Gobierno Metropolitano de Tokio, Roppongi Hills o la salida correcta de Shinjuku. Mira{" "}
                      <Link to="/es/blog/monte-fuji-se-ve-desde-tokio" className="text-accent hover:underline">
                        ¿Se ve el Monte Fuji desde Tokio?
                      </Link>{" "}
                      para los cinco miradores que realmente funcionan en 2026. Un tour solo es necesario si quieres acercarte a la montaña.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Listo para reservar un día Fuji que encaje con tu viaje?"
                  linkText="Ver mi excursión a Hakone →"
                  href="/es/tours/hakone-day-trip"
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

export default EsTourPrivadoMonteFuji2026;
