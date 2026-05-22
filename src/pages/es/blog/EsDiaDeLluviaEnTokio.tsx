// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsDiaDeLluviaEnTokio = () => {
  return (
    <Layout>
      <SEO
        title="Día de Lluvia en Tokio: 14 Cosas que Hacer Cuando el Clima Cambia"
        description="Mercados cubiertos, museos, miradores, cafés — y 3 lugares que son mejores bajo la lluvia. Un guía oficial de Tokio sobre rescatar días lluviosos."
        canonicalPath="/es/blog/dia-de-lluvia-en-tokio"
        hreflang={[
          { lang: "en", path: "/blog/rainy-day-tokyo" },
          { lang: "es", path: "/es/blog/dia-de-lluvia-en-tokio" },
          { lang: "x-default", path: "/blog/rainy-day-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Día de Lluvia en Tokio" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/night-shibuya-crossing.jpg"
          imageAlt="Neón del cruce de Shibuya reflejado en el pavimento mojado de noche — Tokio en una tarde de lluvia"
          eyebrow="Planifica Tu Viaje"
          title="Día de Lluvia en Tokio: 14 Cosas que Hacer Cuando el Clima Cambia"
          subtitle="Mercados cubiertos, museos, cafés escondidos — y tres lugares que son genuinamente mejores bajo la lluvia. De un guía oficial de Tokio."
          date="Mayo 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Opciones Rápidas", href: "#section-01-rapidas" },
                { num: "02", label: "Mercados Cubiertos", href: "#section-02-mercados" },
                { num: "03", label: "Museos", href: "#section-03-museos" },
                { num: "04", label: "Miradores", href: "#section-04-miradores" },
                { num: "05", label: "Depachika", href: "#section-05-depachika" },
                { num: "06", label: "3 Lugares Mejores con Lluvia", href: "#section-06-mejores" },
                { num: "07", label: "Onsen como Plan B", href: "#section-07-onsen" },
                { num: "08", label: "Preguntas Frecuentes", href: "#section-08-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Opciones rápidas</p>
                  <h2>Si llueve, cambia a mercados cubiertos, museos o depachika. No insistas en templos al aire libre bajo la lluvia.</h2>
                  <p>
                    <span className="hl-gold">Tokio tiene más profundidad bajo techo que cualquier otra ciudad japonesa</span> — barrios enteros conectados por pasajes subterráneos, museos de clase mundial y pisos de comida de grandes almacenes que son una experiencia de 2 horas en sí mismos.
                  </p>
                  <p>
                    Tres lugares son realmente mejores bajo la lluvia: el Cementerio de Yanaka, el bosque de Meiji Jingu y el Museo al Aire Libre de Hakone si ya estás allí.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  La temporada de lluvias de Tokio (tsuyu) corre de mediados de junio a mediados de julio, y la temporada de tifones de agosto a octubre. Pero la lluvia puede ocurrir en cualquier mes. La buena noticia es que Tokio está construido para ello.
                </p>

                <InlineCTAEs
                  message="¿Quieres un plan de día lluvioso construido para tus fechas?"
                  linkText="Ver mis opciones de tour privado →"
                  href="/es/tours"
                />

                {/* Sección 01 */}
                <div className="section-eyebrow"><span>Sección 01 · Rápidas</span></div>
                <h2 id="section-01-rapidas" className="scroll-mt-20">
                  Opciones Rápidas: 14 Cosas que Funcionan con Lluvia
                </h2>
                <ol className="list-decimal pl-6 mb-8 space-y-2 text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">Mercado Ameyoko</strong> (Ueno) — calle cubierta</li>
                  <li><strong className="text-foreground">Mercado Exterior Tsukiji</strong> — muchos puestos están cubiertos; ver <Link to="/es/blog/guia-tsukiji" className="text-accent hover:underline">mi guía de Tsukiji</Link></li>
                  <li><strong className="text-foreground">Museo Nacional de Tokio</strong> (Ueno) — el más grande de Japón</li>
                  <li><strong className="text-foreground">teamLab Planets / Borderless</strong> — totalmente interior</li>
                  <li><strong className="text-foreground">Mirador Shibuya Sky</strong> — nivel inferior interior</li>
                  <li><strong className="text-foreground">Depachika</strong> de grandes almacenes — exploración gastronómica</li>
                  <li><strong className="text-foreground">Paseo Cementerio Yanaka</strong> — mejor bajo lluvia ligera</li>
                  <li><strong className="text-foreground">Complejo Tokyo Skytree</strong> — mirador + Solamachi mall</li>
                  <li><strong className="text-foreground">Museo Edo-Tokio</strong> — historia de la ciudad</li>
                  <li><strong className="text-foreground">Museo Ghibli</strong> — reservar con anticipación</li>
                  <li><strong className="text-foreground">Mori Art Museum</strong> (Roppongi) — arte + vista de la ciudad</li>
                  <li><strong className="text-foreground">Museo Nacional de Arte Occidental</strong> — edificio de Le Corbusier</li>
                  <li><strong className="text-foreground">Origami Kaikan</strong> — talleres en un edificio tranquilo</li>
                  <li><strong className="text-foreground">Excursión a onsen / sentō</strong></li>
                </ol>

                {/* Sección 02 */}
                <div className="section-eyebrow"><span>Sección 02 · Mercados</span></div>
                <h2 id="section-02-mercados" className="scroll-mt-20">
                  Mercados Cubiertos
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Ameyoko (Ueno).</strong> Un mercado al aire libre bajo vías de tren elevadas, así que gran parte está naturalmente cubierto. Alrededor de 400 tiendas de pescado fresco, productos secos, ropa y comida callejera.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Mercado Exterior Tsukiji.</strong> Muchos puestos tienen toldos. La mayoría opera sin importar el clima.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Yanaka Ginza.</strong> Calle comercial cubierta con encanto del Tokio antiguo. Ver mi <Link to="/es/blog/yanaka-tokio-itinerario" className="text-accent hover:underline">ruta a pie de Yanaka</Link>.
                </p>

                {/* Sección 03 */}
                <div className="section-eyebrow"><span>Sección 03 · Museos</span></div>
                <h2 id="section-03-museos" className="scroll-mt-20">
                  Museos que Valen la Pena en un Día Lluvioso
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Museo Nacional de Tokio (Ueno).</strong> El más grande de Japón con la colección histórica más importante — armaduras samurái, escultura budista, grabados ukiyo-e.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Mori Art Museum (Roppongi).</strong> Arte contemporáneo con exhibiciones rotativas, más un mirador de 360 grados en el mismo boleto.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">teamLab Planets (Toyosu).</strong> Instalación inmersiva de arte digital. Reserva con anticipación.
                </p>

                {/* Sección 04 */}
                <div className="section-eyebrow"><span>Sección 04 · Miradores</span></div>
                <h2 id="section-04-miradores" className="scroll-mt-20">
                  Miradores (Niveles Interiores)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Tokyo Skytree.</strong> Dos niveles de observación (350m y 450m), ambos totalmente cerrados. Incluso con lluvia, las nubes dinámicas crean vistas dramáticas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Shibuya Sky.</strong> El nivel inferior interior permanece abierto incluso cuando el techo exterior cierra por clima.
                </p>

                {/* Sección 05 */}
                <div className="section-eyebrow"><span>Sección 05 · Depachika</span></div>
                <h2 id="section-05-depachika" className="scroll-mt-20">
                  Depachika: Pisos de Comida de Grandes Almacenes
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Esta es una actividad de día lluvioso únicamente japonesa. Los pisos de comida subterráneos de los grandes almacenes principales — Isetan Shinjuku, Mitsukoshi Nihonbashi, Takashimaya — son mercados gourmet densos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pasa dos horas explorando, probando y armando un almuerzo tipo picnic.
                </p>
                <blockquote className="pull-quote">
                  Depachika es más interesante que la mitad de los museos en las listas de "top 10 de Tokio", y los turistas rara vez encuentran su camino abajo.
                </blockquote>

                {/* Sección 06 */}
                <div className="section-eyebrow"><span>Sección 06 · Mejores</span></div>
                <h2 id="section-06-mejores" className="scroll-mt-20">
                  Tres Lugares que Son Realmente Mejores con Lluvia
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/meiji-shrine-forest.webp"
                    alt="Sendero del bosque del Santuario Meiji — silencioso y atmosférico con lluvia ligera"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    El sendero del bosque de Meiji Jingu — los sonidos amortiguados y el torii goteando hacen de la lluvia parte de la experiencia
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">1. Cementerio Yanaka.</strong> El paseo atmosférico que es parte de <Link to="/es/blog/yanaka-tokio-itinerario" className="text-accent hover:underline">mi ruta de Yanaka</Link> toma una calidad diferente bajo lluvia ligera. Las linternas de piedra y los cerezos son más silenciosos, la fotografía más cinematográfica.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">2. Bosque del Santuario Meiji.</strong> El acceso al bosque al Santuario Meiji es denso, oscuro y de otro mundo bajo la lluvia.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">3. Museo al Aire Libre de Hakone (si ya estás allí).</strong> El pabellón de Picasso es interior, pero las esculturas al aire libre lucen diferentes bajo la lluvia.
                </p>

                {/* Sección 07 */}
                <div className="section-eyebrow"><span>Sección 07 · Onsen</span></div>
                <h2 id="section-07-onsen" className="scroll-mt-20">
                  Onsen como Plan B
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los días de lluvia son los mejores para el onsen. El contraste entre la lluvia fría y el agua caliente es el punto de la experiencia.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Spa LaQua (Tokyo Dome).</strong> Central, fácil de alcanzar, múltiples baños en un edificio de aguas termales.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Excursión a Hakone.</strong> Si estás comprometido a una experiencia de onsen, Hakone es a 2 horas. Ver mi <Link to="/es/blog/excursion-hakone-desde-tokio" className="text-accent hover:underline">guía de Hakone</Link>.
                </p>

                <InlineCTAEs
                  message="¿Quieres un plan de día lluvioso personalizado para tu viaje?"
                  linkText="Contáctame para diseñar uno →"
                  href="/es/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Sección 08 · Preguntas Frecuentes</span></div>
                <h2 id="section-08-faq" className="scroll-mt-20">
                  Preguntas Frecuentes
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">¿Cuándo es la temporada de lluvias de Tokio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mediados de junio a mediados de julio es tsuyu, la temporada oficial de lluvias. Los tifones ocurren de agosto a octubre. Diciembre-febrero es el período más seco.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Llevar impermeable o paraguas?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ambos funcionan, pero los paraguas transparentes de plástico (¥500 en cualquier tienda de conveniencia) son el estándar universal de Tokio. No traigas un paraguas voluminoso de casa.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Los templos cierran con lluvia fuerte?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No, pero visitarlos bajo lluvia torrencial es incómodo. Las salas de templo interiores siguen siendo refugios pacíficos.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Debería cancelar una excursión si se pronostica lluvia?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kawaguchiko sí (el valor es la vista). Hakone no (mucho que hacer interior). Kamakura depende — lluvia ligera está bien, lluvia fuerte limita. Ver mi <Link to="/es/blog/mejores-excursiones-desde-tokio" className="text-accent hover:underline">ranking de excursiones</Link>.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Listo para rescatar tu viaje a Tokio con lluvia?"
                  linkText="Contáctame →"
                  href="/es/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["asakusa", "tsukiji-ginza", "custom"]} lang="es" showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              inLanguage: "es",
              headline: "Día de Lluvia en Tokio: 14 Cosas que Hacer Cuando el Clima Cambia",
              description: "Un guía oficial de Tokio clasifica 14 actividades interiores y compatibles con lluvia, más tres lugares que realmente son mejores bajo la lluvia.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/dia-de-lluvia-en-tokio" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EsDiaDeLluviaEnTokio;
