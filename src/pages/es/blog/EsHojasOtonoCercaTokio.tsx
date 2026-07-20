// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsHojasOtonoCercaTokio = () => {
  return (
    <Layout>
      <SEO
        title="Hojas de Otoño cerca de Tokio 2026: Dónde y Cuándo"
        description="El plan de otoño 2026 de un guía de Tokio: cuándo llega el pico en Nikko, Hakone y Kawaguchiko, y qué excursión de hojas otoñales elegir."
        canonicalPath="/es/blog/hojas-otono-cerca-tokio"
        hreflang={[
          { lang: "en", path: "/blog/autumn-leaves-around-tokyo" },
          { lang: "es", path: "/es/blog/hojas-otono-cerca-tokio" },
          { lang: "x-default", path: "/blog/autumn-leaves-around-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Hojas de Otoño cerca de Tokio 2026" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/autumn-nikko-chuzenji.webp"
          imageAlt="Follaje otoñal alrededor del lago Chuzenji en Nikko, con el monte Nantai detrás"
          eyebrow="Temporada · Otoño"
          title="Hojas de Otoño cerca de Tokio 2026: Dónde y Cuándo Ir"
          subtitle="Cuándo llegan al pico Nikko, Hakone y Kawaguchiko, y qué excursión de otoño vale tu único día."
          date="Julio 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Cuándo Llega el Pico", href: "#section-01-cuando-pico" },
                { num: "02", label: "Nikko", href: "#section-02-nikko" },
                { num: "03", label: "Hakone y Kawaguchiko", href: "#section-03-hakone-kawaguchiko" },
                { num: "04", label: "Otoño en Tokio", href: "#section-04-en-tokio" },
                { num: "05", label: "Preguntas Frecuentes", href: "#section-05-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Respuesta rápida</p>
                  <h2>Para una sola excursión de otoño, elige Nikko a finales de octubre por el koyo de montaña y las cascadas, o Hakone/Kawaguchiko a principios o mediados de noviembre si además quieres el Monte Fuji.</h2>
                  <p>
                    <span className="hl-gold">El color llega según la altitud: las montañas de Nikko cambian primero (mediados-finales de octubre), Hakone y Kawaguchiko después (principios-mediados de noviembre), y los jardines de Tokio son los últimos: finales de noviembre a principios de diciembre.</span>
                  </p>
                  <p>
                    Un verano cálido en 2026 hace probable que el pico caiga en la parte más tardía de estas ventanas. Ve entre semana y empieza temprano: los mismos dos fines de semana concentran a la multitud.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  El otoño es mi estación favorita para guiar. La luz es suave, el aire está limpio y el color baja por las montañas hacia Tokio a lo largo de unas seis semanas, lo que significa que, si sabes dónde mirar, puedes atrapar el follaje en su pico durante una ventana larga. El error en el que cae la mayoría es venir a los mismos uno o dos lugares famosos en los mismos uno o dos fines de semana. Esta guía trata de calcularlo mejor.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A continuación, cómo pienso yo la temporada de otoño de 2026: cuándo llega el pico a cada zona, qué excursión elegir y cómo esquivar lo peor de las multitudes.
                </p>

                <InlineCTAEs
                  message="¿Quieres una excursión de otoño planeada para el pico de color y con menos gente?"
                  linkText="Ver mis opciones de tour privado →"
                  href="/es/tours"
                />

                {/* Sección 01 — Cuándo pico */}
                <div className="section-eyebrow"><span>Sección 01 · Cuándo Llega el Pico cerca de Tokio</span></div>
                <h2 id="section-01-cuando-pico" className="scroll-mt-20">
                  El Momento: el Color Baja por las Montañas
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Lo más útil que hay que entender del otoño cerca de Tokio es que <strong className="text-foreground">la altitud escalona el color</strong>. Los lugares más altos y fríos cambian semanas antes que la ciudad. Eso es un regalo para el viajero: la "ventana de otoño" no es un fin de semana, sino más de un mes si estás dispuesto a moverte con ella.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Zona</th>
                        <th>Pico típico 2026</th>
                        <th>Qué encuentras</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="scenario">Oku-Nikko (lago Chuzenji)<span className="tag">El primero</span></td><td className="bar-cell win">Mediados–finales octubre</td><td>Koyo de montaña, cascadas, lago</td></tr>
                      <tr><td className="scenario">Pueblo de Nikko (Shinkyo)</td><td className="bar-cell">Principios noviembre</td><td>Santuarios + color</td></tr>
                      <tr><td className="scenario">Hakone / Kawaguchiko</td><td className="bar-cell">Principios–mediados noviembre</td><td>Fuji + follaje</td></tr>
                      <tr><td className="scenario">Jardines del centro de Tokio</td><td className="bar-cell">Finales nov–principios dic</td><td>Ginkgos, arces, iluminaciones</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Una advertencia importante para 2026: las previsiones oficiales de koyo de Japón no se publican hasta septiembre, y un <span className="hl-gold">verano más cálido de lo normal suele empujar el pico hacia la parte más tardía de cada ventana.</span> Toma las fechas de arriba como guía de planificación y consulta la previsión del año más cerca de tu viaje: yo actualizo mis recomendaciones a los clientes en cuanto salen las previsiones de septiembre.
                </p>

                {/* Sección 02 — Nikko */}
                <div className="section-eyebrow"><span>Sección 02 · Nikko — Koyo de Montaña y Cascadas</span></div>
                <h2 id="section-02-nikko" className="scroll-mt-20">
                  Nikko: el Más Temprano y Espectacular
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/autumn-nikko-irohazaka.webp"
                    alt="Colores de otoño en la sinuosa carretera de Irohazaka en Nikko"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    La carretera sinuosa de Irohazaka: la ruta de otoño más famosa de Nikko y también la más congestionada
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si quieres el paisaje otoñal más espectacular a distancia de excursión desde Tokio, <strong className="text-foreground">Oku-Nikko es la respuesta</strong>. Arriba, en torno al lago Chuzenji y las cataratas Kegon —a unos 1,300 metros de altitud—, las laderas cambian tres o cuatro semanas antes que la ciudad. El pico suele ser a <strong className="text-foreground">mediados-finales de octubre</strong>, y el pueblo en torno al puente Shinkyo le sigue a principios de noviembre.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El inconveniente es la <strong className="text-foreground">Irohazaka</strong>, la famosa carretera de curvas hasta el lago. En los fines de semana de pico se atasca mucho. Mi consejo a los clientes es simple: <span className="hl-gold">ve entre semana y empieza temprano; sube por la Irohazaka antes de media mañana, no después.</span> Para ver cómo se compara Nikko con otras excursiones, mira mi <Link to="/es/blog/excursion-nikko-desde-tokio" className="text-accent hover:underline">guía de excursión a Nikko</Link>.
                </p>

                {/* Sección 03 — Hakone y Kawaguchiko */}
                <div className="section-eyebrow"><span>Sección 03 · Hakone y Kawaguchiko — Otoño con el Fuji</span></div>
                <h2 id="section-03-hakone-kawaguchiko" className="scroll-mt-20">
                  Hakone y Kawaguchiko: Otoño con el Monte Fuji
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/autumn-kawaguchiko-fuji.webp"
                    alt="El Monte Fuji y el lago Kawaguchiko enmarcados por arces otoñales"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    El Corredor de Arces de Kawaguchiko combina arces otoñales con el Fuji reflejado: una combinación solo de noviembre
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si quieres color de otoño <em>y</em> el Monte Fuji en un mismo encuadre, esta es tu ventana. Tanto Hakone como los Cinco Lagos del Fuji llegan al pico a <strong className="text-foreground">principios-mediados de noviembre</strong>, algo más tarde que Nikko por estar a menor altitud.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mi tarde de otoño favorita cerca de Tokio es el <strong className="text-foreground">Corredor de Arces de Kawaguchiko (Momiji Kairo)</strong>, donde una avenida de arces se ilumina de noche durante el Festival de Hojas de Otoño de Fuji-Kawaguchiko, con el Monte Fuji reflejado en el lago detrás. La iluminación suele celebrarse durante todo noviembre (en 2025 fue del 1 al 30 de noviembre, del atardecer hasta las 22:00 aprox.); <span className="hl-gold">las fechas de 2026 se anuncian en la web oficial en otoño</span>, así que confírmalas antes de planear una tarde en torno a ella.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hakone te da follaje integrado en el día de onsen y teleférico por el que ya es conocido: mira mi <Link to="/es/blog/excursion-hakone-desde-tokio" className="text-accent hover:underline">guía de excursión a Hakone</Link>. ¿Dudas entre estas excursiones? Mi <Link to="/es/blog/comparativa-excursiones" className="text-accent hover:underline">comparativa Kamakura vs Hakone vs Nikko</Link> expone las diferencias.
                </p>

                {/* Sección 04 — En Tokio */}
                <div className="section-eyebrow"><span>Sección 04 · Otoño en Tokio (Sin Excursión)</span></div>
                <h2 id="section-04-en-tokio" className="scroll-mt-20">
                  Si Prefieres Quedarte en la Ciudad
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/autumn-rikugien-illumination.webp"
                    alt="Iluminación otoñal nocturna reflejada en el estanque del jardín Rikugien, Tokio"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    La iluminación otoñal de Rikugien: el follaje del centro de Tokio llega tarde, hasta principios de diciembre
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Si tu viaje cae a finales de noviembre o principios de diciembre —cuando las montañas ya están peladas— no te preocupes: <strong className="text-foreground">el centro de Tokio llega al pico el último.</strong> Los jardines y avenidas de la ciudad son el broche de toda la temporada.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">Rikugien</strong> — un clásico jardín-paseo de la era Edo, famoso por su iluminación otoñal nocturna, normalmente de finales de noviembre a principios de diciembre.</li>
                  <li><strong className="text-foreground">Avenida de ginkgos de Meiji Jingu Gaien</strong> — el túnel dorado de ginkgos que llena todas las fotos de "Tokio en otoño", con pico típico de finales de noviembre a principios de diciembre.</li>
                  <li><strong className="text-foreground">Parque Showa Kinen</strong> — un parque enorme con avenidas de ginkgos y arces, algo al oeste del centro, con pico a mediados-finales de noviembre.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para ver dónde encaja el otoño en el año, mira mi guía mes a mes de la <Link to="/es/blog/mejor-epoca-visitar-tokio" className="text-accent hover:underline">mejor época para visitar Tokio</Link>, y para el menú completo de excursiones, mis <Link to="/es/blog/mejores-excursiones-desde-tokio" className="text-accent hover:underline">mejores excursiones desde Tokio</Link>.
                </p>

                <InlineCTAEs
                  message="¿Quieres tus días de otoño planeados para el pico de color y la menor multitud?"
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
                    <h3 className="text-foreground">¿Cuándo llegan al pico las hojas de otoño cerca de Tokio en 2026?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      El color baja por altitud: Oku-Nikko (lago Chuzenji) a mediados-finales de octubre, el pueblo de Nikko y Hakone/Kawaguchiko a principios-mediados de noviembre, y los jardines del centro de Tokio de finales de noviembre a principios de diciembre. Un verano cálido en 2026 probablemente empuje los picos a la parte más tardía de cada ventana.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Cuál es la mejor excursión de otoño desde Tokio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Para koyo de montaña y cascadas espectaculares, Nikko a finales de octubre. Para color de otoño con el Monte Fuji, Hakone o Kawaguchiko a principios-mediados de noviembre. Si prefieres quedarte en la ciudad, los jardines de Tokio llegan al pico los últimos, a finales de noviembre.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Cómo evito las multitudes de otoño?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ve entre semana en vez de fin de semana, y empieza temprano, sobre todo por la carretera de Irohazaka en Nikko, que se atasca en los fines de semana de pico. Llegar antes de media mañana marca una diferencia real.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Habrá iluminación de otoño en Kawaguchiko en 2026?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La iluminación del Festival de Hojas de Otoño de Fuji-Kawaguchiko suele celebrarse durante todo noviembre (en 2025 fue del 1 al 30 de noviembre, del atardecer hasta las 22:00 aprox.). Las fechas de 2026 se anuncian en la web oficial en otoño, así que confírmalas antes de planear una tarde en torno a ella.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Puedo ver hojas de otoño a principios de diciembre?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí, en la propia Tokio. Los jardines y avenidas de ginkgos de la ciudad (Rikugien, Meiji Jingu Gaien, Parque Showa Kinen) son los últimos en cambiar, normalmente de finales de noviembre a principios de diciembre, cuando las montañas ya están peladas.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Listo para planear un viaje de otoño calculado para el pico de color?"
                  linkText="Contáctame para un tour privado a medida →"
                  href="/es/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["nikko-day-trip", "hakone-day-trip", "custom"]} lang="es" showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              inLanguage: "es",
              headline: "Hojas de Otoño cerca de Tokio 2026: Dónde y Cuándo Ir",
              description: "El plan de otoño 2026 de un guía licenciado de Tokio: cuándo llega el pico en Nikko, Hakone y Kawaguchiko, y qué excursión de hojas otoñales elegir.",
              author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
              datePublished: "2026-07-20",
              dateModified: "2026-07-20",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/hojas-otono-cerca-tokio" },
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
                { "@type": "Question", name: "¿Cuándo llegan al pico las hojas de otoño cerca de Tokio en 2026?", acceptedAnswer: { "@type": "Answer", text: "El color baja por altitud: Oku-Nikko (lago Chuzenji) a mediados-finales de octubre, el pueblo de Nikko y Hakone/Kawaguchiko a principios-mediados de noviembre, y los jardines del centro de Tokio de finales de noviembre a principios de diciembre. Un verano cálido en 2026 probablemente empuje los picos a la parte más tardía." }},
                { "@type": "Question", name: "¿Cuál es la mejor excursión de otoño desde Tokio?", acceptedAnswer: { "@type": "Answer", text: "Para koyo de montaña y cascadas, Nikko a finales de octubre. Para color con el Monte Fuji, Hakone o Kawaguchiko a principios-mediados de noviembre. Si prefieres la ciudad, los jardines de Tokio llegan al pico los últimos, a finales de noviembre." }},
                { "@type": "Question", name: "¿Cómo evito las multitudes de otoño cerca de Tokio?", acceptedAnswer: { "@type": "Answer", text: "Ve entre semana en vez de fin de semana, y empieza temprano, sobre todo por la carretera de Irohazaka en Nikko, que se atasca en los fines de semana de pico. Llegar antes de media mañana marca una diferencia real." }},
                { "@type": "Question", name: "¿Habrá iluminación de otoño en Kawaguchiko en 2026?", acceptedAnswer: { "@type": "Answer", text: "La iluminación del Festival de Hojas de Otoño de Fuji-Kawaguchiko suele celebrarse durante todo noviembre (en 2025 fue del 1 al 30 de noviembre). Las fechas de 2026 se anuncian en la web oficial en otoño, así que confírmalas antes de planear una tarde." }},
                { "@type": "Question", name: "¿Puedo ver hojas de otoño cerca de Tokio a principios de diciembre?", acceptedAnswer: { "@type": "Answer", text: "Sí, en la propia Tokio. Los jardines y avenidas de ginkgos de la ciudad (Rikugien, Meiji Jingu Gaien, Parque Showa Kinen) son los últimos en cambiar, normalmente de finales de noviembre a principios de diciembre." }},
              ],
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EsHojasOtonoCercaTokio;
