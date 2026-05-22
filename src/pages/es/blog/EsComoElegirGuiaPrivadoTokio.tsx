// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsComoElegirGuiaPrivadoTokio = () => {
  return (
    <Layout>
      <SEO
        title="Cómo Elegir un Guía Privado en Tokio: 7 Preguntas Antes de Reservar"
        description="Licenciado vs no licenciado, agencia vs directo, tamaño del grupo, política de reembolsos — un guía oficial de Tokio explica qué preguntar antes de pagar ¥40.000+."
        canonicalPath="/es/blog/como-elegir-guia-privado-tokio"
        hreflang={[
          { lang: "en", path: "/blog/how-to-choose-private-tokyo-guide" },
          { lang: "es", path: "/es/blog/como-elegir-guia-privado-tokio" },
          { lang: "x-default", path: "/blog/how-to-choose-private-tokyo-guide" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Cómo Elegir un Guía Privado" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tour-photos/sumida-river-group-selfie.webp"
          imageAlt="Manabu con huéspedes de tour privado junto al río Sumida — la cercanía que solo da un guía privado"
          eyebrow="Ayuda en la Decisión"
          title="Cómo Elegir un Guía Privado en Tokio: 7 Preguntas Antes de Reservar"
          subtitle="Un guía oficial de Tokio sobre las diferencias que nadie explica: licenciado vs no licenciado, agencia vs directo, tamaño del grupo y las señales para alejarse."
          date="Mayo 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Checklist Rápido", href: "#section-01-checklist" },
                { num: "02", label: "Licenciado o No", href: "#section-02-licencia" },
                { num: "03", label: "Agencia vs Directo", href: "#section-03-agencia" },
                { num: "04", label: "Tamaño del Grupo", href: "#section-04-tamano" },
                { num: "05", label: "Las 7 Preguntas", href: "#section-05-preguntas" },
                { num: "06", label: "Señales de Alerta", href: "#section-06-alertas" },
                { num: "07", label: "Preguntas Frecuentes", href: "#section-07-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Checklist rápido</p>
                  <h2>Tres cosas importan más: licencia, flexibilidad de grupo, y términos claros de reembolso.</h2>
                  <p>
                    <span className="hl-gold">Un Guía Intérprete Nacional licenciado por el gobierno (全国通訳案内士) es la única categoría autorizada para hacer guía pagado en Japón</span> — pero la regulación es laxa y muchos guías no licenciados operan abiertamente. La licencia es una señal entre varias.
                  </p>
                  <p>
                    Las 7 preguntas abajo son las que yo haría antes de pagar ¥40.000+ por un tour privado de medio día.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Esta guía es lo que desearía que los viajeros tuvieran cuando me estaban evaluando a mí. Los guías privados en Tokio cobran ¥40.000–80.000 por un solo día — eso es una parte significativa de cualquier presupuesto de viaje, y los listados de plataformas hacen que casi todos los guías se vean idénticos. No lo son.
                </p>

                <InlineCTAEs
                  message="¿Quieres verificar las credenciales de un guía de Tokio? Empieza con las mías."
                  linkText="Ver mi perfil de guía oficial →"
                  href="/es/about"
                />

                {/* Sección 01 */}
                <div className="section-eyebrow"><span>Sección 01 · Checklist</span></div>
                <h2 id="section-01-checklist" className="scroll-mt-20">
                  Checklist Rápido Antes de Reservar
                </h2>
                <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground leading-relaxed">
                  <li>Guía Intérprete Nacional licenciado (全国通訳案内士)</li>
                  <li>Opción de reserva directa (no solo vía Viator/GetYourGuide)</li>
                  <li>Política clara de tamaño máximo de grupo</li>
                  <li>Términos de reembolso/reprogramación por escrito</li>
                  <li>Fotos reales y bio identificable (no imágenes de stock)</li>
                </ul>

                {/* Sección 02 */}
                <div className="section-eyebrow"><span>Sección 02 · Licencia</span></div>
                <h2 id="section-02-licencia" className="scroll-mt-20">
                  Licenciado o No: Qué Significa Realmente
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La certificación de <strong className="text-foreground">Guía Intérprete Nacional Licenciado</strong> es administrada por la Agencia de Turismo de Japón (JTA), bajo el Ministerio de Tierras, Infraestructura, Transporte y Turismo. Requiere aprobar un examen multipartito que cubre historia japonesa, geografía, conocimientos generales y el idioma de guía (japonés, español, inglés, chino, coreano, etc.). La tasa de aprobación suele ser inferior al 10% cada año — menos de 1 de cada 10 candidatos lo logra.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hasta enero de 2018, solo los guías licenciados podían aceptar legalmente trabajo de guía pagado en Japón. Desde la desregulación de 2018, los guías no licenciados también pueden operar — pero el título "通訳案内士" (Tsuyaku Annaishi / Guía Intérprete Licenciado) sigue protegido. Solo los guías licenciados pueden usar ese título o lenguaje similar de credencial oficial.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ver mi <Link to="/es/blog/guia-licencia-oficial-japon" className="text-accent hover:underline">comparación de guías licenciados vs no licenciados</Link>.
                </p>

                {/* Sección 03 */}
                <div className="section-eyebrow"><span>Sección 03 · Agencia</span></div>
                <h2 id="section-03-agencia" className="scroll-mt-20">
                  Agencia vs Reserva Directa
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los guías de Tokio se reservan por tres canales principales: <strong className="text-foreground">agencias grandes</strong> (Viator, GetYourGuide, Klook), <strong className="text-foreground">agencias locales pequeñas</strong>, y <strong className="text-foreground">directo del guía</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Las agencias grandes típicamente cobran 20-25% de comisión, que se integra al precio que pagas. El beneficio es un proceso de reembolso conocido y un amortiguador de servicio al cliente. La desventaja es que no siempre sabes qué guía específico tendrás.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reservar directamente del sitio del guía significa que pagas aproximadamente 20-25% menos por la misma experiencia. Ver mi <Link to="/es/blog/viator-vs-getyourguide-vs-directo-tokio" className="text-accent hover:underline">comparación Viator vs GetYourGuide vs directo</Link>.
                </p>

                {/* Sección 04 */}
                <div className="section-eyebrow"><span>Sección 04 · Tamaño</span></div>
                <h2 id="section-04-tamano" className="scroll-mt-20">
                  El Tamaño del Grupo Importa Más de lo que Crees
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Un tour "privado" con máximo de 12 personas es operacionalmente un tour de grupo pequeño. Un tour "privado" con máximo de 4-6 personas es una experiencia privada real. Esta distinción determina ritmo, acceso a restaurantes y el nivel de atención personal.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Mi estándar:</strong> 6 personas máximo. Más allá, la experiencia se degrada — no caben en un mostrador de sushi típico, las paradas en callejones pequeños se vuelven impracticables y la conversación se aplana.
                </p>

                {/* Sección 05 */}
                <div className="section-eyebrow"><span>Sección 05 · Preguntas</span></div>
                <h2 id="section-05-preguntas" className="scroll-mt-20">
                  Las 7 Preguntas Antes de Reservar
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/tour-photos/asakusa-matcha-shop-guiding.webp"
                    alt="Manabu explicando una tienda tradicional de matcha en un tour privado de Asakusa"
                    className="w-full h-[380px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    Un guía licenciado puede explicar los pequeños detalles — y responder estas 7 preguntas antes de reservar
                  </figcaption>
                </figure>
                <ol className="list-decimal pl-6 space-y-4 mb-8 text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">¿Eres Guía Intérprete Nacional Licenciado?</strong> Si sí, pide el número de licencia — deberían proporcionarlo sin dudar.</li>
                  <li><strong className="text-foreground">¿Cuántas personas máximo por grupo, incluyendo el mío?</strong> 6 o menos es privado real. 8+ es operacionalmente un tour de grupo pequeño.</li>
                  <li><strong className="text-foreground">¿Puedes personalizar la ruta?</strong> Si la respuesta es "seguimos un itinerario fijo", estás reservando un tour empaquetado, no un guía privado.</li>
                  <li><strong className="text-foreground">¿Qué pasa si llueve?</strong> Un buen guía tiene un plan alternativo para clima adverso listo.</li>
                  <li><strong className="text-foreground">¿Cuál es tu política de reembolso?</strong> Consíguelo por escrito.</li>
                  <li><strong className="text-foreground">¿Tú serás quien guíe, o alguien más?</strong> Los listados de agencia a menudo muestran una cara y asignan a otro guía. Confirma por escrito.</li>
                  <li><strong className="text-foreground">¿Manejas restricciones alimentarias o de movilidad?</strong> Si hay alergias, dietas o problemas de movilidad, pregunta específicamente.</li>
                </ol>

                {/* Sección 06 */}
                <div className="section-eyebrow"><span>Sección 06 · Alertas</span></div>
                <h2 id="section-06-alertas" className="scroll-mt-20">
                  Señales de Alerta para Alejarse
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Sin licencia, sin portafolio, sin reseñas con nombre real.</strong> Un guía real tiene al menos una de estas. La mayoría tiene las tres.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Tours "privados" listados a precios sospechosamente bajos.</strong> Menos de ¥30.000 por medio día en Tokio es por debajo del costo operativo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Rechazo a confirmar el tamaño del grupo por escrito.</strong> Si evaden esta pregunta, planean añadir personas a tu tour "privado".
                </p>

                <InlineCTAEs
                  message="Soy un guía licenciado feliz de responder las 7 preguntas antes de que reserves."
                  linkText="Hazme tus 7 preguntas →"
                  href="/es/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Sección 07 · Preguntas Frecuentes</span></div>
                <h2 id="section-07-faq" className="scroll-mt-20">
                  Preguntas Frecuentes
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">¿Cómo verifico la licencia de un guía japonés?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La Agencia de Turismo de Japón mantiene un registro público de guías licenciados. También puedes pedirle al guía una foto de su tarjeta de licencia.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Los guías no licenciados son ilegales?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No, no desde 2018. Pero la licencia aún señala entrenamiento formal y responsabilidad que los no licenciados pueden no tener.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Siempre es mejor un precio más alto?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Por encima de ¥80.000 por medio día, el premium a menudo va a gastos de agencia, no al guía. La reserva directa con un guía licenciado en el rango ¥40.000–60.000 suele dar la mejor relación calidad-precio.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Con cuánta anticipación reservar?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Para temporada de cerezos (finales de marzo-principios de abril) y otoño (octubre-noviembre), 2-3 meses. Otros meses, 3-4 semanas suele bastar.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Listo para reservar un guía licenciado de Tokio?"
                  linkText="Contáctame →"
                  href="/es/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["custom", "asakusa", "tsukiji-ginza"]} lang="es" showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              inLanguage: "es",
              headline: "Cómo Elegir un Guía Privado en Tokio: 7 Preguntas Antes de Reservar",
              description: "Un guía oficial de Tokio explica cómo evaluar guías privados: licenciado vs no licenciado, agencia vs directo, tamaño del grupo y señales de alerta.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/como-elegir-guia-privado-tokio" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EsComoElegirGuiaPrivadoTokio;
