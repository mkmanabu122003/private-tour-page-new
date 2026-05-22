// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsExcursionEnoshimaDesdeTokio = () => {
  return (
    <Layout>
      <SEO
        title="Excursión a Enoshima desde Tokio 2026: Playas, Santuarios, Combinar con Kamakura"
        description="Enoshima está a 1h de Tokio: cueva-santuario, playa, atardecer, Monte Fuji en días despejados. Un guía oficial sobre combinar con Kamakura y qué comer."
        canonicalPath="/es/blog/excursion-enoshima-desde-tokio"
        hreflang={[
          { lang: "en", path: "/blog/enoshima-day-trip-from-tokyo" },
          { lang: "es", path: "/es/blog/excursion-enoshima-desde-tokio" },
          { lang: "x-default", path: "/blog/enoshima-day-trip-from-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Excursión a Enoshima" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/enoshima-island-hero.webp"
          imageAlt="La isla de Enoshima vista desde la playa con la torre mirador Sea Candle"
          eyebrow="Excursiones de un Día"
          title="Excursión a Enoshima desde Tokio: Playa, Santuarios y Atardecer"
          subtitle="Una isla pequeña, una cueva sagrada, un atardecer en la playa y el Monte Fuji en días despejados — todo a una hora de Tokio. Más cómo combinarla con Kamakura."
          date="Mayo 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Plan Rápido", href: "#section-01-plan" },
                { num: "02", label: "Por Qué Enoshima", href: "#section-02-por-que" },
                { num: "03", label: "Cómo Llegar", href: "#section-03-llegar" },
                { num: "04", label: "Ruta a Pie", href: "#section-04-ruta" },
                { num: "05", label: "Combinar con Kamakura", href: "#section-05-kamakura" },
                { num: "06", label: "Qué Comer", href: "#section-06-comer" },
                { num: "07", label: "Preguntas Frecuentes", href: "#section-07-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Plan rápido</p>
                  <h2>Toma la línea Odakyu desde Shinjuku, recorre la isla y organiza el día alrededor del atardecer.</h2>
                  <p>
                    <span className="hl-gold">Enoshima funciona mejor como medio día combinado con Kamakura</span>, no como día completo por sí sola. Están conectadas por la línea Enoden en 25 minutos, y la mayoría de visitantes hace ambas en unas 8 horas.
                  </p>
                  <p>
                    Ve en una tarde despejada para ver la silueta del Monte Fuji al atardecer. Sáltala si el clima está malo — el atractivo de la isla son sobre todo las vistas.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Enoshima es la pequeña isla a la que envío a mis huéspedes cuando quieren un descanso costero de Tokio sin comprometerse con una excursión de playa completa. Está a una hora de Shinjuku, tiene una cueva sagrada que ha sido sitio de peregrinación por más de 1.400 años y, en un día despejado, da una silueta del Monte Fuji a través de la bahía de Sagami.
                </p>

                <InlineCTAEs
                  message="¿Quieres un día guiado de Kamakura + Enoshima con la logística resuelta?"
                  linkText="Ver mis opciones de excursión a Kamakura →"
                  href="/es/tours/kamakura-day-trip"
                />

                {/* Sección 01 */}
                <div className="section-eyebrow"><span>Sección 01 · Plan Rápido</span></div>
                <h2 id="section-01-plan" className="scroll-mt-20">
                  Plan Rápido: El Día de 8 Horas en Enoshima
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Plan recomendado: toma el Odakyu Romancecar de las 10:00 desde Shinjuku, llega a Katase-Enoshima alrededor de las 11:15, camina por el puente, sube la isla hasta la Cueva Iwaya, luego toma la línea Enoden hacia Kamakura para la tarde. Termina el día con el atardecer en la playa Yuigahama y cena en Kamakura antes de volver a Tokio.
                </p>

                {/* Sección 02 */}
                <div className="section-eyebrow"><span>Sección 02 · Por Qué</span></div>
                <h2 id="section-02-por-que" className="scroll-mt-20">
                  Por Qué Enoshima Vale el Desvío
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La isla es pequeña — la puedes cruzar a pie en 20 minutos — pero está llena de cosas que ver. El <strong className="text-foreground">Santuario Enoshima</strong> se divide en tres subsantuarios y está dedicado a Benzaiten, la diosa de la música, el arte y la prosperidad.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La <strong className="text-foreground">Cueva Iwaya</strong> al fondo de la isla es la razón real para venir. Es una cueva costera que ha sido sitio religioso desde el siglo VI, con caminos iluminados por velas y estatuas de la diosa.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La torre mirador <strong className="text-foreground">Sea Candle</strong> se eleva desde el centro de la isla y en días despejados muestra el Monte Fuji a través de la bahía.
                </p>
                <figure className="my-6">
                  <img
                    src="/images/blog/enoshima-sea-candle.webp"
                    alt="La torre mirador Sea Candle en la isla de Enoshima"
                    className="w-full h-[380px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    La torre Sea Candle en el centro de Enoshima
                  </figcaption>
                </figure>
                <figure className="my-6">
                  <img
                    src="/images/blog/enoshima-cliff.webp"
                    alt="Acantilados costeros cerca de la Cueva Iwaya en Enoshima"
                    className="w-full h-[380px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    El sendero de acantilado que conduce a la Cueva Iwaya en el extremo de la isla
                  </figcaption>
                </figure>

                {/* Sección 03 */}
                <div className="section-eyebrow"><span>Sección 03 · Llegar</span></div>
                <h2 id="section-03-llegar" className="scroll-mt-20">
                  Cómo Llegar desde Tokio
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Desde Shinjuku (recomendado):</strong> Odakyu Romancecar a Katase-Enoshima, ~65–70 minutos, aproximadamente ¥1.400 ida (¥650 tarifa base + ¥750 suplemento de expreso limitado).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Desde Shinjuku (más barato):</strong> Odakyu línea local a Fujisawa, transbordo a la línea Enoden a Enoshima. Alrededor de 90 minutos, ~¥640 ida.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Desde Kamakura:</strong> Línea Enoden, 25 minutos, ¥260.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Si haces ambos, considera el <strong className="text-foreground">Enoshima Kamakura Free Pass</strong> de Odakyu (~¥1.640 desde Shinjuku) que cubre ida y vuelta más viajes ilimitados en Enoden.
                </p>

                {/* Sección 04 */}
                <div className="section-eyebrow"><span>Sección 04 · Ruta</span></div>
                <h2 id="section-04-ruta" className="scroll-mt-20">
                  Ruta a Pie en la Isla
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>1.</strong> Cruza el puente Benten desde tierra firme (10 minutos a pie). <strong>2.</strong> Sube por Nakamise-dori, la calle comercial. Para por <em>shirasu</em> (anchoas). <strong>3.</strong> Santuario Hetsunomiya. <strong>4.</strong> Torre mirador Sea Candle. <strong>5.</strong> Santuarios Nakatsunomiya y Okutsunomiya. <strong>6.</strong> Bajada hasta la Cueva Iwaya. <strong>7.</strong> Regreso por el mismo camino o en barco (¥400).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Tiempo total a pie: 2,5-3 horas incluyendo paradas. La isla tiene escaleras y pendientes — la escalera mecánica Escar (¥360) salva las piernas en la parte más empinada.
                </p>

                {/* Sección 05 */}
                <div className="section-eyebrow"><span>Sección 05 · Kamakura</span></div>
                <h2 id="section-05-kamakura" className="scroll-mt-20">
                  Combinar con Kamakura
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La mayoría de mis huéspedes encuentra Enoshima un poco modesta por sí sola. Es bonita, pero pequeña. La jugada más inteligente es usar Enoshima como la mitad matutina de un día en Kamakura — ver la cueva y el mar antes del almuerzo, luego tomar el Enoden a Kamakura para pasar la tarde en el Gran Buda, el Templo de Bambú Hokoku-ji y la calle comercial Komachi-dori.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para el plan completo de Kamakura, ver mi <Link to="/es/blog/kamakura-desde-tokio" className="text-accent hover:underline">guía de Kamakura</Link>. Para comparación con otras excursiones, ver mi <Link to="/es/blog/mejores-excursiones-desde-tokio" className="text-accent hover:underline">ranking de mejores excursiones</Link>.
                </p>

                {/* Sección 06 */}
                <div className="section-eyebrow"><span>Sección 06 · Comer</span></div>
                <h2 id="section-06-comer" className="scroll-mt-20">
                  Qué Comer en Enoshima
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Shirasu-don</strong> (cuenco de arroz con anchoas crudas o hervidas) — la especialidad local. Disponible en Nakamise-dori. Busca locales con cola de turistas japoneses.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Tako-senbei</strong> — un pulpo entero prensado en una galleta gigante. Comida de espectáculo turístico pero genuinamente sabrosa.
                </p>

                <InlineCTAEs
                  message="¿Quieres este día ajustado a tus fechas de viaje?"
                  linkText="Contáctame para planear un día de Kamakura + Enoshima →"
                  href="/es/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Sección 07 · Preguntas Frecuentes</span></div>
                <h2 id="section-07-faq" className="scroll-mt-20">
                  Preguntas Frecuentes
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">¿Vale la pena Enoshima un día completo?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Para la mayoría de visitantes, no. Enoshima funciona mejor como medio día combinado con Kamakura. La isla en sí toma 3 horas a pie, y no hay suficiente como para llenar un día separado.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Se puede ver el Monte Fuji desde Enoshima?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí, en días despejados, sobre todo en mañanas de invierno. La vista desde la torre Sea Candle y los acantilados cerca de la Cueva Iwaya muestra el Fuji a través de la bahía de Sagami.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Cuándo es la mejor época para visitar?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Otoño tardío a invierno (noviembre-febrero) para las vistas más claras. Evita los fines de semana de agosto — la playa se llena de excursionistas de Tokio.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Hay una playa donde se pueda nadar?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La playa Katase-Higashihama junto a la isla abre oficialmente de mediados de julio a agosto. El agua no es cristalina, pero es una buena opción en verano.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Listo para diseñar un día costero alrededor de Tokio?"
                  linkText="Planear un tour privado a Kamakura + Enoshima →"
                  href="/es/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["kamakura-day-trip", "hakone-day-trip", "custom"]} lang="es" showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              inLanguage: "es",
              headline: "Excursión a Enoshima desde Tokio 2026: Playas, Santuarios, Combinar con Kamakura",
              description: "Enoshima está a 1h de Tokio: cueva-santuario, playa, atardecer, Monte Fuji en días despejados. Un guía oficial sobre combinarla con Kamakura y qué comer.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/excursion-enoshima-desde-tokio" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EsExcursionEnoshimaDesdeTokio;
