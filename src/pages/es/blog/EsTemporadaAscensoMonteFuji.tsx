// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsTemporadaAscensoMonteFuji = () => {
  return (
    <Layout>
      <SEO
        title="Ascenso al Monte Fuji 2026: ¿Necesitas un Guía?"
        description="Un guía licenciado de Tokio explica la temporada 2026 del Fuji: fechas, la nueva reserva y tarifa de ¥4,000, y si de verdad necesitas un guía para subir."
        canonicalPath="/es/blog/temporada-ascenso-monte-fuji"
        hreflang={[
          { lang: "en", path: "/blog/mt-fuji-climbing-season-guide" },
          { lang: "es", path: "/es/blog/temporada-ascenso-monte-fuji" },
          { lang: "x-default", path: "/blog/mt-fuji-climbing-season-guide" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Ascenso al Monte Fuji 2026" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/mt-fuji-summit-sunrise.webp"
          imageAlt="Goraiko — el amanecer visto desde la cima del Monte Fuji sobre un mar de nubes"
          eyebrow="Temporada · Monte Fuji"
          title="Ascenso al Monte Fuji 2026: ¿Necesitas de Verdad un Guía?"
          subtitle="Las fechas de 2026, las nuevas reglas de reserva y tarifa, y una opinión honesta sobre quién debería subir solo y quién no."
          date="Julio 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Temporada y Rutas 2026", href: "#section-01-temporada-rutas" },
                { num: "02", label: "Las Nuevas Reglas y Tarifa", href: "#section-02-nuevas-reglas" },
                { num: "03", label: "¿Necesitas un Guía?", href: "#section-03-necesitas-guia" },
                { num: "04", label: "Ver el Fuji sin Subir", href: "#section-04-ver-el-fuji" },
                { num: "05", label: "Preguntas Frecuentes", href: "#section-05-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Respuesta rápida</p>
                  <h2>La mayoría de los adultos en forma y bien preparados pueden subir el Fuji sin guía, pero reserva una cabaña de montaña y no lo hagas de noche de un tirón.</h2>
                  <p>
                    <span className="hl-gold">La temporada 2026 va del 1 de julio al 10 de septiembre, y todos los senderistas de las cuatro rutas deben reservar en línea y pagar una tarifa de entrada de ¥4,000 por adelantado.</span> El Fuji es una caminata exigente, no una escalada técnica, así que un guía es opcional para senderistas con experiencia.
                  </p>
                  <p>
                    Contrata un ascenso guiado si es tu primera montaña, te preocupa el mal de altura, o te costaría una noche en una cabaña donde se habla poco inglés. El peligro real no es el terreno, sino la altitud y el clima que cambia rápido.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Cada julio y agosto recibo el mismo mensaje de mis clientes: <em>"¿Puedo subir el Monte Fuji por mi cuenta o necesito un guía?"</em>. Es una pregunta justa, y la respuesta honesta no es un simple sí o no. Yo mismo he subido por la ruta Yoshida y he ayudado a clientes a planear su ascenso —reservar cabañas, calcular el amanecer— y la decisión correcta depende por completo de quién pregunta.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Como guía licenciado, prefiero decirte la verdad antes que venderte un ascenso que no necesitas. Este artículo cubre las fechas de la temporada 2026, las nuevas reglas de reserva y tarifa que sorprenden a mucha gente, y mi opinión honesta sobre cuándo subir solo y cuándo ir con guía.
                </p>

                <InlineCTAEs
                  message="¿Quieres ayuda para planear un ascenso al Fuji, o un día del Fuji sin subir?"
                  linkText="Ver mis opciones de tour privado →"
                  href="/es/tours"
                />

                {/* Sección 01 — Temporada y rutas */}
                <div className="section-eyebrow"><span>Sección 01 · Temporada 2026 y las Cuatro Rutas</span></div>
                <h2 id="section-01-temporada-rutas" className="scroll-mt-20">
                  Cuándo Abre el Monte Fuji en 2026 y Qué Ruta Elegir
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Monte Fuji solo está abierto a los senderistas unas diez semanas al año. Fuera de esa ventana las cabañas están cerradas, el clima es peligroso y las rutas oficiales están cerradas. Para <strong className="text-foreground">2026, la temporada va de principios de julio al 10 de septiembre</strong>, con fechas de apertura ligeramente distintas según la ruta.
                </p>
                <figure className="my-6">
                  <img
                    src="/images/blog/mt-fuji-yoshida-trail.webp"
                    alt="Senderistas en las curvas de la ruta Yoshida en lo alto del Monte Fuji"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    La ruta Yoshida: la más popular y mejor equipada para subir el Monte Fuji
                  </figcaption>
                </figure>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Ruta</th>
                        <th>Abre 2026</th>
                        <th>Ideal para</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="scenario">Yoshida<span className="tag">La más popular</span></td><td className="bar-cell win">1 jul – 10 sep</td><td>Principiantes: más cabañas, mejor acceso desde Tokio</td></tr>
                      <tr><td className="scenario">Subashiri</td><td className="bar-cell">1 jul – 10 sep</td><td>Más tranquila, con bosque en la parte baja</td></tr>
                      <tr><td className="scenario">Fujinomiya</td><td className="bar-cell">10 jul – 10 sep</td><td>La ruta más corta, desde el lado de Shizuoka</td></tr>
                      <tr><td className="scenario">Gotemba</td><td className="bar-cell">10 jul – 10 sep</td><td>La más larga y dura: solo senderistas expertos</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para casi todo el que sube desde Tokio, la respuesta es la <strong className="text-foreground">ruta Yoshida</strong>. Tiene más cabañas de montaña, el sendero mejor señalizado y el acceso más simple: un autobús directo desde la zona de los Cinco Lagos del Fuji hasta la 5ª Estación, donde empieza el ascenso. También es la única ruta con un límite diario de senderistas, algo que veremos a continuación.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="hl-gold">Si es tu primer ascenso, no le des demasiadas vueltas a la ruta: elige Yoshida.</span> Las demás tienen su encanto, pero cuentan con menos cabañas y menos apoyo, lo cual importa más que el paisaje cuando estás cansado a 3,000 metros.
                </p>

                {/* Sección 02 — Nuevas reglas */}
                <div className="section-eyebrow"><span>Sección 02 · Las Nuevas Reglas: Permiso, Reserva y Límite Diario</span></div>
                <h2 id="section-02-nuevas-reglas" className="scroll-mt-20">
                  Las Reglas de 2026 que Sorprenden a Muchos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las reglas de ascenso del Fuji han cambiado mucho en las dos últimas temporadas, y en internet abunda la información desactualizada. Esto es lo que realmente aplica en 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Todos los senderistas deben reservar en línea y pagar una tarifa de entrada de ¥4,000 por adelantado</strong>, en las cuatro rutas, no solo en Yoshida. Completas la reserva y el pago antes de llegar, y recibes un permiso con código QR que muestras en la puerta del inicio del sendero. Ya no se paga en el sitio a la misma tarifa; la reserva en línea es el sistema actual.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Regla (2026)</th>
                        <th>Detalle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="scenario">Tarifa de entrada</td><td className="bar-cell win">¥4,000 por persona, las cuatro rutas, obligatoria</td></tr>
                      <tr><td className="scenario">Reserva</td><td className="bar-cell">En línea por adelantado → permiso con código QR en la puerta</td></tr>
                      <tr><td className="scenario">Límite diario Yoshida</td><td className="bar-cell">4,000 senderistas al día (otras rutas: sin límite)</td></tr>
                      <tr><td className="scenario">Horario de puertas</td><td className="bar-cell">Cerradas de 14:00 a 3:00, salvo huéspedes de cabaña</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esa última regla es la importante, y es la razón por la que disuado a tanta gente del plan con el que llega. Las <strong className="text-foreground">puertas de inicio están cerradas de las 14:00 a las 3:00 para quien no haya reservado una cabaña de montaña</strong>. Esto existe precisamente para frenar el <em>dangan tozan</em> —el "ascenso relámpago", subir toda la noche de un tirón para ahorrarse la cabaña.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Entiendo la tentación —una cabaña cuesta dinero y el amanecer en la cima es la meta. Pero el ascenso relámpago es justo la forma en que el mal de altura y el agotamiento convierten una caminata dura en una verdadera emergencia. <span className="hl-gold">Reserva una cabaña, duerme a medio camino y sube a la cima para el amanecer al día siguiente.</span> Los clientes que lo hacen así vuelven más felices y más seguros, siempre.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Confirma siempre la tarifa y el sistema de reserva actuales en la web oficial del <a href="https://www.fujisan-climb.jp/en/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ascenso al Monte Fuji</a> antes de reservar: estas reglas han cambiado cada año últimamente.
                </p>

                {/* Sección 03 — Necesitas guía */}
                <div className="section-eyebrow"><span>Sección 03 · ¿Necesitas un Guía?</span></div>
                <h2 id="section-03-necesitas-guia" className="scroll-mt-20">
                  Quién Debería Subir Solo y Quién No
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/mt-fuji-climbers-ascending.webp"
                    alt="Una fila de senderistas ascendiendo por las laderas altas del Monte Fuji"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    El Fuji es una caminata exigente, no una escalada técnica, pero la altitud y el clima son el verdadero reto
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Lo clave es entender esto: <strong className="text-foreground">el Monte Fuji no es una montaña técnica</strong>. No hay equipo de escalada, ni cuerdas, ni trepar: es una caminata larga, empinada y rocosa por un sendero bien marcado. Por eso mucha gente lo sube de forma independiente cada temporada. Lo que hace difícil al Fuji es la <strong className="text-foreground">altitud (3,776 m en la cima), el aire enrarecido y lo rápido que cambia el clima</strong>. Ese es el criterio que uso cuando un cliente pregunta si necesita un guía.
                </p>
                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">Solo está bien</p>
                    <h3>Puedes subir sin guía si…</h3>
                    <ul>
                      <li>Tienes experiencia senderista y una forma física razonable</li>
                      <li>Vas a reservar una cabaña y subir en dos días</li>
                      <li>Sabes gestionar tu propio ritmo para la altitud</li>
                      <li>Te apañas con una cabaña donde se habla poco inglés</li>
                      <li>Has mirado el pronóstico y darás la vuelta si empeora</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">Ve con guía</p>
                    <h3>Considera un guía o tour si…</h3>
                    <ul>
                      <li>Es tu primer ascenso de montaña de verdad</li>
                      <li>Te preocupa el mal de altura</li>
                      <li>La logística (permiso, cabaña, autobuses) te abruma</li>
                      <li>Quieres que alguien marque un ritmo seguro y vigile las señales</li>
                      <li>La tranquilidad vale más para ti que el coste</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un guía en el Fuji no está para navegar una ruta difícil —el sendero es obvio. Un buen guía gestiona tu <strong className="text-foreground">ritmo para que te aclimates, vigila los primeros síntomas del mal de altura, resuelve la cabaña y el permiso, y decide dar la vuelta si el clima empeora</strong>. Para un senderista con experiencia, nada de eso requiere pagar a alguien. Para un principiante nervioso, puede ser la diferencia entre un amanecer en la cima y una noche horrible.
                </p>

                {/* Sección 04 — Ver el Fuji */}
                <div className="section-eyebrow"><span>Sección 04 · ¿Prefieres no Subir? Ver el Fuji</span></div>
                <h2 id="section-04-ver-el-fuji" className="scroll-mt-20">
                  Si Prefieres no Subir: Cómo Disfrutar del Fuji
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Algo que digo a muchos clientes: <span className="hl-gold">la mejor vista del Monte Fuji no es desde la cima del Monte Fuji.</span> Desde arriba estás de pie sobre la montaña, así que no ves su famosa silueta en absoluto. Si lo que de verdad quieres es el cono icónico reflejado en un lago o enmarcando una pagoda, no necesitas subir nada.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El ascenso es un reto físico y un logro personal, valioso para la persona adecuada. Pero si tienes dudas, o viajas con gente que no puede hacer un ascenso de dos días, las opciones para verlo son preciosas y mucho más fáciles:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground leading-relaxed">
                  <li>Para los clásicos del lado norte con lago y pagoda, mira mi <Link to="/es/blog/monte-fuji-se-ve-desde-tokio" className="text-accent hover:underline">guía para ver el Monte Fuji desde Tokio</Link>.</li>
                  <li>¿Dudas entre las dos bases más fáciles para ver el Fuji? Mi <Link to="/es/blog/kawaguchiko-vs-hakone-monte-fuji" className="text-accent hover:underline">comparativa Kawaguchiko vs Hakone</Link> lo desglosa.</li>
                  <li>El momento importa más de lo que se cree: <Link to="/es/blog/mejor-epoca-visitar-tokio" className="text-accent hover:underline">la mejor época para visitar</Link> cubre cuándo es más probable ver el Fuji.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Y recuerda la ironía de la temporada de ascenso: julio y agosto son los <em>peores</em> meses del Fuji para verlo de lejos —húmedos, con calima y a menudo envuelto en nubes. Los senderistas en la montaña y los fotógrafos en los lagos quieren un clima completamente distinto.
                </p>

                <InlineCTAEs
                  message="¿Quieres un día del Fuji planeado para tu grupo, con o sin ascenso?"
                  linkText="Escríbeme para un tour a medida →"
                  href="/es/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Sección 05 · Preguntas Frecuentes</span></div>
                <h2 id="section-05-faq" className="scroll-mt-20">
                  Preguntas Frecuentes
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">¿Cuándo es la temporada de ascenso al Monte Fuji en 2026?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La temporada 2026 va del 1 de julio al 10 de septiembre para las rutas Yoshida y Subashiri, y del 10 de julio al 10 de septiembre para Fujinomiya y Gotemba. Fuera de esa ventana las cabañas están cerradas y subir es peligroso y está oficialmente desaconsejado.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Se necesita permiso o reserva para subir el Monte Fuji?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí. En 2026 todos los senderistas de las cuatro rutas deben reservar en línea por adelantado y pagar una tarifa de ¥4,000, que genera un permiso con código QR que se muestra en el inicio del sendero. La ruta Yoshida además tiene un límite diario de 4,000 senderistas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿De verdad necesito un guía para subir el Monte Fuji?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No. El Fuji es una caminata exigente por un sendero marcado, no una escalada técnica, así que los senderistas con experiencia pueden hacerlo por su cuenta. Considera un guía si es tu primera montaña, te preocupa la altitud, o la logística de permiso y cabaña te abruma.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Puedo subir el Fuji de noche sin dormir en una cabaña?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No. Para frenar el "ascenso relámpago", las puertas del sendero están cerradas de 14:00 a 3:00 para quien no tenga reserva de cabaña. Reserva una cabaña, duerme a medio camino y sube a la cima para el amanecer: es más seguro y más disfrutable.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Vale la pena subir el Fuji o mejor verlo de lejos?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      El ascenso es un logro personal, pero no puedes ver la famosa forma del Fuji desde su cima. Si tu meta es la vista icónica, los lagos y miradores son mucho más fáciles y fotogénicos. Si la meta es el reto y el amanecer, el ascenso lo cumple.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Listo para planear tu experiencia del Fuji a tu medida?"
                  linkText="Contáctame para un tour privado a medida →"
                  href="/es/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["hakone-day-trip", "custom", "nikko-day-trip"]} lang="es" showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              inLanguage: "es",
              headline: "Ascenso al Monte Fuji 2026: ¿Necesitas de Verdad un Guía?",
              description: "Un guía licenciado de Tokio explica la temporada 2026 del Fuji: fechas, la tarifa de ¥4,000, las reglas de reserva y si necesitas un guía para subir.",
              author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
              datePublished: "2026-07-20",
              dateModified: "2026-07-20",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/temporada-ascenso-monte-fuji" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              inLanguage: "es",
              mainEntity: [
                { "@type": "Question", name: "¿Cuándo es la temporada de ascenso al Monte Fuji en 2026?", acceptedAnswer: { "@type": "Answer", text: "La temporada 2026 va del 1 de julio al 10 de septiembre para las rutas Yoshida y Subashiri, y del 10 de julio al 10 de septiembre para Fujinomiya y Gotemba. Fuera de esa ventana las cabañas están cerradas y subir es peligroso." }},
                { "@type": "Question", name: "¿Se necesita permiso o reserva para subir el Monte Fuji?", acceptedAnswer: { "@type": "Answer", text: "Sí. En 2026 todos los senderistas de las cuatro rutas deben reservar en línea por adelantado y pagar una tarifa de 4,000 yenes, que genera un permiso con código QR. La ruta Yoshida tiene un límite diario de 4,000 senderistas." }},
                { "@type": "Question", name: "¿De verdad necesito un guía para subir el Monte Fuji?", acceptedAnswer: { "@type": "Answer", text: "No. El Fuji es una caminata exigente por un sendero marcado, no una escalada técnica, así que los senderistas con experiencia pueden hacerlo por su cuenta. Considera un guía si es tu primera montaña o te preocupa la altitud." }},
                { "@type": "Question", name: "¿Puedo subir el Fuji de noche sin dormir en una cabaña?", acceptedAnswer: { "@type": "Answer", text: "No. Para frenar el ascenso relámpago, las puertas del sendero están cerradas de 14:00 a 3:00 para quien no tenga reserva de cabaña. Reserva una cabaña, duerme a medio camino y sube a la cima para el amanecer." }},
                { "@type": "Question", name: "¿Vale la pena subir el Fuji o mejor verlo de lejos?", acceptedAnswer: { "@type": "Answer", text: "El ascenso es un logro personal, pero no puedes ver la famosa forma del Fuji desde su cima. Si tu meta es la vista icónica, los lagos y miradores son mucho más fáciles y fotogénicos." }},
              ],
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EsTemporadaAscensoMonteFuji;
