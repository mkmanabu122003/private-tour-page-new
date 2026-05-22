// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsMejoresExcursionesDesdeTokio = () => {
  return (
    <Layout>
      <SEO
        title="9 Mejores Excursiones desde Tokio (Ranking de un Guía Oficial, 2026)"
        description="Kamakura, Hakone, Nikko, Monte Fuji, Kawagoe, Enoshima, Yokohama, Monte Takao, Kawaguchiko — un guía oficial de Tokio las ordena por tiempo, qué ves y a quién le conviene cada una."
        canonicalPath="/es/blog/mejores-excursiones-desde-tokio"
        hreflang={[
          { lang: "en", path: "/blog/best-day-trips-from-tokyo" },
          { lang: "es", path: "/es/blog/mejores-excursiones-desde-tokio" },
          { lang: "x-default", path: "/blog/best-day-trips-from-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Mejores Excursiones desde Tokio" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/shinkansen-n700-tokyo-station.webp"
          imageAlt="Shinkansen N700 en la estación de Tokio — la puerta de entrada a las excursiones por Japón"
          eyebrow="Excursiones de un día"
          title="9 Mejores Excursiones desde Tokio: Ranking de un Guía Oficial"
          subtitle="Tiempo de viaje, lo que verás y a quién le conviene cada una — de un guía oficial de Tokio que ha hecho todas estas excursiones decenas de veces."
          date="Mayo 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Decisión Rápida", href: "#section-01-decision-rapida" },
                { num: "02", label: "1 Hora desde Tokio", href: "#section-02-una-hora" },
                { num: "03", label: "2 Horas desde Tokio", href: "#section-03-dos-horas" },
                { num: "04", label: "2.5 Horas: Monte Fuji", href: "#section-04-monte-fuji" },
                { num: "05", label: "Excursión de Medio Día", href: "#section-05-medio-dia" },
                { num: "06", label: "Cuál Elegir", href: "#section-06-cual-elegir" },
                { num: "07", label: "Preguntas Frecuentes", href: "#section-07-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Decisión rápida</p>
                  <h2>Si solo tienes un día fuera de Tokio, ve a Kamakura.</h2>
                  <p>
                    <span className="hl-gold">Kamakura te da templos, playa, el Gran Buda y un pueblo de la era Edo</span> a una hora de la estación de Tokio. Es la única excursión que entrega cuatro experiencias completamente distintas en un solo lugar.
                  </p>
                  <p>
                    Si ya conoces Kamakura, o si específicamente quieres vistas del Monte Fuji o un onsen, las recomendaciones cambian. Sigue leyendo para el ranking completo.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Tokio es un destino completo por sí mismo, pero la mayoría de mis huéspedes quiere al menos un día fuera de la ciudad. La pregunta es cuál. Hay nueve destinos a aproximadamente dos horas y media de Tokio que recomendaría, y la elección correcta depende de qué quieres ver, cuánto tiempo tienes y qué has hecho ya en Tokio.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Este es el ranking que les doy a mis clientes antes de reservar, ordenado por tiempo de viaje desde la estación de Tokio y por lo que cada destino realmente ofrece. He guiado cada una de estas excursiones decenas de veces, así que los pros y contras vienen de la experiencia real, no de un resumen de Wikipedia.
                </p>

                <InlineCTAEs
                  message="¿Quieres ayuda para integrar una excursión a un plan de varios días en Tokio?"
                  linkText="Ver mis tours privados y opciones de itinerario →"
                  href="/es/tours"
                />

                {/* Sección 01 */}
                <div className="section-eyebrow"><span>Sección 01 · Decisión Rápida</span></div>
                <h2 id="section-01-decision-rapida" className="scroll-mt-20">
                  Matriz de Decisión Rápida: Elige por lo que Quieras Ver
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aquí tienes la versión corta. Elige la fila que coincide con tu prioridad y tienes tu excursión.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Lo que quieres…</th>
                        <th>Mejor opción</th>
                        <th>Tiempo de viaje</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="scenario">Templos, playa, Japón antiguo</td><td>Kamakura</td><td>~1 hora</td></tr>
                      <tr><td className="scenario">Onsen, arte, lago</td><td>Hakone</td><td>~2 horas</td></tr>
                      <tr><td className="scenario">Patrimonio mundial + naturaleza</td><td>Nikko</td><td>~2 horas</td></tr>
                      <tr><td className="scenario">Monte Fuji más cercano</td><td>Kawaguchiko</td><td>~2 horas</td></tr>
                      <tr><td className="scenario">Calles de Edo, bajo presupuesto</td><td>Kawagoe</td><td>~30 minutos</td></tr>
                      <tr><td className="scenario">Playa, atardecer, relax</td><td>Enoshima</td><td>~1 hora</td></tr>
                      <tr><td className="scenario">Ciudad portuaria, Chinatown</td><td>Yokohama</td><td>~30 minutos</td></tr>
                      <tr><td className="scenario">Caminata de medio día</td><td>Monte Takao</td><td>~50 minutos</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Sección 02 */}
                <div className="section-eyebrow"><span>Sección 02 · 1 Hora</span></div>
                <h2 id="section-02-una-hora" className="scroll-mt-20">
                  Excursiones de 1 Hora: Kawagoe, Yokohama, Enoshima
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estas tres son las opciones más cercanas, todas accesibles en aproximadamente una hora desde el centro de Tokio. Tienen sentido cuando no quieres pasar la mitad del día en un tren, o cuando quieres regresar a Tokio para la cena.
                </p>

                <h3>Kawagoe — "Pequeña Edo"</h3>
                <figure className="my-6">
                  <img
                    src="/images/blog/kawagoe-kurazukuri-hero.webp"
                    alt="Calle Kurazukuri en Kawagoe — almacenes de mercaderes del período Edo"
                    className="w-full h-[360px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    La calle Kurazukuri de Kawagoe aún luce como el Tokio del período Edo
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aproximadamente 30 minutos desde Ikebukuro en la línea Tobu Tojo. Kawagoe es lo más cercano que estarás a un paisaje urbano del período Edo sin salir del área metropolitana de Tokio. La calle Kurazukuri tiene almacenes de comerciantes del siglo XIX, y la famosa Torre de la Campana (Toki no Kane) suena cuatro veces al día. Más detalles en mi <Link to="/es/blog/excursion-kawagoe-desde-tokio" className="text-accent hover:underline">guía de Kawagoe</Link>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">Ideal para:</strong> Viajeros con presupuesto ajustado o aquellos que ya vieron Asakusa y quieren otro ángulo del Tokio antiguo.
                </p>

                <h3>Yokohama — Ciudad Portuaria de Tokio</h3>
                <figure className="my-6">
                  <img
                    src="/images/blog/yokohama-minatomirai-hero.webp"
                    alt="Paseo marítimo de Yokohama Minato Mirai"
                    className="w-full h-[360px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    Minato Mirai — el renovado paseo marítimo de Yokohama, a 30 minutos de Shibuya
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aproximadamente 30 minutos desde Shibuya. Yokohama es la segunda ciudad más grande de Japón y tiene el Chinatown más grande del país, además de un paseo marítimo renovado (Minato Mirai) con el Museo de Fideos Instantáneos, el Almacén de Ladrillo Rojo y los Jardines Sankeien. Ver <Link to="/es/blog/excursion-yokohama-desde-tokio" className="text-accent hover:underline">mi guía de Yokohama</Link>.
                </p>

                <h3>Enoshima — Playa, Atardecer, Santuarios</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aproximadamente 1 hora desde Shinjuku vía el Odakyu Romancecar. Enoshima es una pequeña isla conectada al continente por un puente, con una cueva-santuario, una torre mirador y, en días despejados, vistas del Monte Fuji a través de la bahía. Se combina muy bien con Kamakura porque están en la misma línea Enoden — muchos huéspedes hacen ambas en un solo día. Detalles en mi <Link to="/es/blog/excursion-enoshima-desde-tokio" className="text-accent hover:underline">guía de Enoshima</Link>.
                </p>

                {/* Sección 03 */}
                <div className="section-eyebrow"><span>Sección 03 · 2 Horas</span></div>
                <h2 id="section-03-dos-horas" className="scroll-mt-20">
                  Excursiones de 2 Horas: Kamakura, Hakone, Nikko
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estas son las tres excursiones que recomiendo con más frecuencia. Cada una es famosa por una razón, pero ofrecen experiencias muy diferentes. Si solo tienes tiempo para una, aquí es donde se decide.
                </p>

                <h3>Kamakura — Mi Recomendación Predeterminada</h3>
                <figure className="my-6">
                  <img
                    src="/images/blog/kamakura-serene-temple-garden.webp"
                    alt="Un sereno jardín de templo en Kamakura — la antigua capital de Japón, a una hora de Tokio"
                    className="w-full h-[360px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    Un jardín tranquilo de templo en Kamakura, a una hora de la estación de Tokio
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="hl-gold">Para visitantes primerizos que solo pueden hacer una excursión, Kamakura casi siempre es la respuesta correcta.</span> Para una comparación más profunda con las dos opciones siguientes, consulta mi <Link to="/es/blog/comparativa-excursiones" className="text-accent hover:underline">comparativa Kamakura vs Hakone vs Nikko</Link>.
                </p>

                <h3>Hakone — Onsen, Arte, Monte Fuji (a veces)</h3>
                <figure className="my-6">
                  <img
                    src="/images/blog/hakone-fuji-comparison.webp"
                    alt="Monte Fuji visto desde el lago Ashi en Hakone con el torii del Santuario Hakone"
                    className="w-full h-[360px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    La icónica vista del lago Ashi en Hakone — el Monte Fuji depende del clima
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aproximadamente 80 minutos desde Shinjuku en el Odakyu Romancecar hasta Hakone-Yumoto. Hakone es el destino de onsen y arte: el Museo al Aire Libre, el lago Ashi con sus barcos pirata, el valle volcánico de Owakudani y decenas de ryokan con aguas termales. Detalles en mi <Link to="/es/blog/excursion-hakone-desde-tokio" className="text-accent hover:underline">guía de Hakone</Link>.
                </p>

                <h3>Nikko — Templos Patrimonio Mundial</h3>
                <figure className="my-6">
                  <img
                    src="/images/blog/nikko-toshogu-hero.webp"
                    alt="Santuario Toshogu de Nikko — Patrimonio Mundial UNESCO y el santuario más ornamentado de Japón"
                    className="w-full h-[360px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    El Santuario Toshogu de Nikko, lugar de descanso de Tokugawa Ieyasu
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aproximadamente 2 horas desde Asakusa. El Santuario Toshogu de Nikko es uno de los complejos religiosos más ornamentados de Japón, sitio del Patrimonio Mundial de la UNESCO y lugar de descanso de Tokugawa Ieyasu, fundador del shogunato Edo. Ver <Link to="/es/blog/excursion-nikko-desde-tokio" className="text-accent hover:underline">mi guía de Nikko</Link>.
                </p>

                {/* Sección 04 */}
                <div className="section-eyebrow"><span>Sección 04 · Monte Fuji</span></div>
                <h2 id="section-04-monte-fuji" className="scroll-mt-20">
                  2.5 Horas: Kawaguchiko para el Monte Fuji
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/private-fuji-route-b-chureito.jpg"
                    alt="Monte Fuji enmarcado por el Pagoda Chureito cerca de Kawaguchiko"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    La vista del Pagoda Chureito del Monte Fuji desde Kawaguchiko — el ángulo más fotografiado de Japón
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kawaguchiko es el lago a los pies del Monte Fuji y te da las vistas más cercanas, claras y fotogénicas de la montaña disponibles como excursión de un día desde Tokio. Ver <Link to="/es/blog/kawaguchiko-vs-hakone-monte-fuji" className="text-accent hover:underline">mi guía Kawaguchiko vs Hakone</Link> para una comparación detallada.
                </p>

                {/* Sección 05 */}
                <div className="section-eyebrow"><span>Sección 05 · Medio Día</span></div>
                <h2 id="section-05-medio-dia" className="scroll-mt-20">
                  Excursión de Medio Día: Monte Takao
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/mt-takao-hike.webp"
                    alt="Un sendero de montaña en el Monte Takao — la excursión de medio día más accesible desde Tokio"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    Monte Takao — pico de 599m, a 50 minutos de Shinjuku, con senderos y un templo en la cima
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Monte Takao es una montaña de 599m, a unos 50 minutos de Shinjuku. Tiene ocho senderos de diferente dificultad, un complejo de templos en la cima, un teleférico para quienes no quieren subir y, en raros días despejados de invierno, vistas del Monte Fuji desde la cima.
                </p>

                {/* Sección 06 */}
                <div className="section-eyebrow"><span>Sección 06 · Cuál Elegir</span></div>
                <h2 id="section-06-cual-elegir" className="scroll-mt-20">
                  Cómo Elegir: Un Árbol de Decisión Sencillo
                </h2>
                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">Por defecto para primerizos</p>
                    <h3>Elige Kamakura si…</h3>
                    <ul>
                      <li>Solo tienes una excursión disponible</li>
                      <li>Quieres templos + playa + pueblo en un solo lugar</li>
                      <li>Aún no has visto un sitio espiritual japonés importante</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">Necesidad específica</p>
                    <h3>Elige otra si…</h3>
                    <ul>
                      <li>Necesitas fotos del Monte Fuji → Kawaguchiko</li>
                      <li>Necesitas onsen → Hakone</li>
                      <li>Presupuesto ajustado → Kawagoe</li>
                      <li>Ya conoces Kamakura → Nikko</li>
                    </ul>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Quieres un viaje a Tokio que integre estas excursiones en un solo plan coherente?"
                  linkText="Ver mis opciones de tour privado personalizado →"
                  href="/es/tours/custom"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Sección 07 · Preguntas Frecuentes</span></div>
                <h2 id="section-07-faq" className="scroll-mt-20">
                  Preguntas Frecuentes
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">¿Cuál es la excursión más fácil para primerizos?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kamakura. Es aproximadamente una hora en JR, no requiere pase especial y combina templos, el Gran Buda y una playa en un área compacta y caminable.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Vale la pena el Japan Rail Pass solo para excursiones?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Para la mayoría de excursiones, no. Ver <Link to="/es/blog/japan-rail-pass-vale-la-pena" className="text-accent hover:underline">mi análisis del JR Pass</Link> — los boletos individuales suelen ser más baratos a menos que también hagas un viaje largo a Kioto u Osaka.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Puedo hacer dos excursiones en un día?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kamakura más Enoshima es la única combinación dos en uno realista porque están en la misma línea de tren. Cualquier otra combinación implicará más tiempo en transporte que viendo lugares.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Debo tomar un tour o ir solo?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Para Kamakura, Kawagoe y Yokohama, ir solo está bien. Para Nikko y Hakone, un guía ahorra tiempo significativo en logística y añade contexto histórico que no está disponible en español en el sitio.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Listo para definir tu plan de excursiones desde Tokio?"
                  linkText="Contáctame para diseñar un tour privado →"
                  href="/es/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["kamakura-day-trip", "hakone-day-trip", "nikko-day-trip", "custom"]} lang="es" showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              inLanguage: "es",
              headline: "9 Mejores Excursiones desde Tokio (Ranking de un Guía Oficial, 2026)",
              description: "Un guía oficial de Tokio ordena Kamakura, Hakone, Nikko, Monte Fuji, Kawagoe, Enoshima, Yokohama, Monte Takao y Kawaguchiko por tiempo de viaje, qué verás y a quién le conviene cada una.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/mejores-excursiones-desde-tokio" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EsMejoresExcursionesDesdeTokio;
