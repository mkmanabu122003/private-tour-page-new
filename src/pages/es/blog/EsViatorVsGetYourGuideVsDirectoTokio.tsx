// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsViatorVsGetYourGuideVsDirectoTokio = () => {
  return (
    <Layout>
      <SEO
        title="Viator vs GetYourGuide vs Reserva Directa: Tours en Tokio Comparados (2026)"
        description="Viator y GetYourGuide añaden aproximadamente 20-30% de comisión. Un guía oficial de Tokio compara ambos con la reserva directa — costo real, reembolsos y qué obtienes."
        canonicalPath="/es/blog/viator-vs-getyourguide-vs-directo-tokio"
        hreflang={[
          { lang: "en", path: "/blog/viator-vs-getyourguide-vs-direct-tokyo" },
          { lang: "es", path: "/es/blog/viator-vs-getyourguide-vs-directo-tokio" },
          { lang: "x-default", path: "/blog/viator-vs-getyourguide-vs-direct-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Viator vs GetYourGuide vs Directo" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tour-photos/photo1.webp"
          imageAlt="Un tour privado en Tokio reservado directamente — pareja con Manabu junto al río Sumida"
          eyebrow="Ayuda en la Decisión"
          title="Viator vs GetYourGuide vs Directo: Cómo Reservar un Tour en Tokio en 2026"
          subtitle="Un guía oficial de Tokio que ha provisto tours en las tres plataformas explica las diferencias reales en precio, política de reembolsos y qué obtienes."
          date="Mayo 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Veredicto", href: "#section-01-veredicto" },
                { num: "02", label: "Comparación Real de Precios", href: "#section-02-precios" },
                { num: "03", label: "Reembolsos", href: "#section-03-reembolsos" },
                { num: "04", label: "Qué Ganas/Pierdes", href: "#section-04-ganas-pierdes" },
                { num: "05", label: "Cuándo Gana Cada Uno", href: "#section-05-cuando" },
                { num: "06", label: "Por Qué Prefiero Directo", href: "#section-06-directo" },
                { num: "07", label: "Preguntas Frecuentes", href: "#section-07-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Veredicto rápido</p>
                  <h2>La reserva directa es aproximadamente 20-30% más barata por el mismo tour, mismo guía, misma experiencia.</h2>
                  <p>
                    <span className="hl-gold">Viator y GetYourGuide son excelentes para descubrir guías y para un proceso de reembolso conocido</span> — pero el tour en sí es idéntico al que obtendrías reservando directo, solo a un precio mayor.
                  </p>
                  <p>
                    Usa las plataformas para encontrar al guía. Luego revisa si está disponible reserva directa antes de pagar.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  La mayoría de viajeros usa Viator o GetYourGuide por defecto porque eso es lo que aparece cuando buscas "tour privado en Tokio" en Google. Esos listados son geniales para explorar — pero están construidos sobre un modelo de comisión que añade aproximadamente 20-30% al precio comparado con reservar directamente con el mismo guía.
                </p>

                <InlineCTAEs
                  message="Mira cómo se ve la reserva directa con un guía oficial de Tokio."
                  linkText="Ver mis tours y precios directos →"
                  href="/es/tours"
                />

                {/* Sección 01 */}
                <div className="section-eyebrow"><span>Sección 01 · Veredicto</span></div>
                <h2 id="section-01-veredicto" className="scroll-mt-20">
                  Veredicto por Canal de Reserva
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Plataforma</th>
                        <th>Recargo típico</th>
                        <th>Ideal para</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="scenario">Viator</td><td>~20-30%</td><td>Protección de reembolso, comprador en EE.UU.</td></tr>
                      <tr><td className="scenario">GetYourGuide</td><td>~20%</td><td>Compradores europeos, app móvil</td></tr>
                      <tr><td className="scenario">Klook</td><td>~15-20%</td><td>Viajeros asiáticos, paquetes de atracciones</td></tr>
                      <tr><td className="scenario">Reserva directa</td><td>0%</td><td>Mejor precio, comunicación directa</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Sección 02 */}
                <div className="section-eyebrow"><span>Sección 02 · Precios</span></div>
                <h2 id="section-02-precios" className="scroll-mt-20">
                  Comparación Real de Precios (Mismo Tour)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ejemplo real: el mismo tour privado a pie de medio día en Tokio, listado en tres canales y reservable directo desde mi propio sitio. Precios típicos para grupo de 4.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Medio día · 4 horas · grupo de 4</th>
                        <th>Precio que pagas</th>
                        <th>Lo que recibo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="scenario">Viator</td><td>~¥55.000</td><td>~¥42.000</td></tr>
                      <tr><td className="scenario">GetYourGuide</td><td>~¥53.000</td><td>~¥42.500</td></tr>
                      <tr><td className="scenario">Reserva directa</td><td>~¥45.000</td><td>~¥45.000</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Sección 03 */}
                <div className="section-eyebrow"><span>Sección 03 · Reembolsos</span></div>
                <h2 id="section-03-reembolsos" className="scroll-mt-20">
                  Términos de Reembolso y Reprogramación
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aquí es donde las plataformas genuinamente añaden valor. <strong className="text-foreground">Viator</strong> ofrece política de "cancelación gratuita" hasta 24 horas antes para la mayoría de tours.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Los términos de reembolso directo dependen del guía individual. Mi política estándar: reembolso completo 48+ horas antes, 50% dentro de 24-48 horas, 0% dentro de 24 horas — pero siempre negociable para emergencias reales.
                </p>

                {/* Sección 04 */}
                <div className="section-eyebrow"><span>Sección 04 · Ganas</span></div>
                <h2 id="section-04-ganas-pierdes" className="scroll-mt-20">
                  Qué Te Da Cada Canal (y Qué Te Quita)
                </h2>
                <h3>Viator / GetYourGuide / Klook</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Ganas:</strong> Checkout familiar, protección de tarjeta de crédito, comparar múltiples listados, proceso de reembolso vía plataforma, app móvil con confirmación, recordatorios automáticos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Pierdes:</strong> Comunicación directa pre-tour con el guía, personalización completa, 20-30% del precio que no necesitabas pagar.
                </p>
                <h3>Reserva Directa</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Ganas:</strong> ~20-30% menos en precio, email/WhatsApp directo con el guía real, flexibilidad completa para personalizar, respuesta más rápida, experiencia más personal.
                </p>

                {/* Sección 05 */}
                <div className="section-eyebrow"><span>Sección 05 · Cuándo</span></div>
                <h2 id="section-05-cuando" className="scroll-mt-20">
                  Cuándo Gana Cada Canal
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Usa Viator/GetYourGuide si:</strong> Reservas con mucha anticipación y las fechas pueden cambiar; quieres el tour estándar exactamente como listado; te incomoda comunicarte en español/inglés directo con un guía japonés.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Reserva directo si:</strong> Quieres personalización (comida específica, barrios específicos, ritmo específico); viajas con niños, padres mayores, o restricciones dietarias; quieres comunicarte con el guía real antes de reservar.
                </p>

                {/* Sección 06 */}
                <div className="section-eyebrow"><span>Sección 06 · Directo</span></div>
                <h2 id="section-06-directo" className="scroll-mt-20">
                  Por Qué Prefiero Directo (y Cuándo Tú También Deberías)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La reserva directa me permite hablar contigo antes del día. Podemos intercambiar emails, me cuentas tus intereses, necesidades dietarias, el abuelo en tu grupo, el niño que odia el marisco — y construyo el día alrededor de eso.
                </p>
                <blockquote className="pull-quote">
                  Usa las plataformas para descubrir al guía. Luego revisa si la reserva directa está disponible antes de pagar.
                </blockquote>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para más sobre cómo evaluar guías, ver <Link to="/es/blog/como-elegir-guia-privado-tokio" className="text-accent hover:underline">cómo elegir un guía privado en Tokio</Link>. Para si vale la pena un tour privado, ver mi <Link to="/es/blog/vale-la-pena-guia-privado-tokio" className="text-accent hover:underline">"¿vale la pena?" honesto</Link>.
                </p>

                <InlineCTAEs
                  message="¿Curioso por saber qué cuesta la reserva directa para tu viaje específico?"
                  linkText="Obtener una cotización directa →"
                  href="/es/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Sección 07 · Preguntas Frecuentes</span></div>
                <h2 id="section-07-faq" className="scroll-mt-20">
                  Preguntas Frecuentes
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">¿Por qué la reserva directa es más barata si el guía es el mismo?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Las plataformas cobran una comisión (típicamente 20-30%) integrada al precio. Cuando reservas directo, tú y el guía dividen ese ahorro — pagas menos, el guía no pierde ingresos.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Es seguro pagar a un guía japonés directamente?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Con guías licenciados, sí. Busca un número de licencia de la Agencia de Turismo de Japón, reseñas con nombre real y un sitio web real. Paga vía Wise, PayPal o transferencia bancaria.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Viator maneja mejor los problemas?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ligeramente. Viator tiene un equipo de servicio al cliente. Pero la mayoría de problemas de reserva directa se resuelven por el guía mismo en horas, ya que su reputación depende.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Puedo reservar vía Viator y cambiar a directo?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La mayoría de plataformas lo prohíben en sus términos. El enfoque correcto es descubrir al guía vía plataforma y luego revisar su sitio para ver si ofrece reserva directa antes de ordenar.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Quieres saltarte las plataformas? Reserva directo."
                  linkText="Contáctame directamente para un tour en Tokio →"
                  href="/es/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["custom", "tsukiji-ginza", "asakusa"]} lang="es" showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              inLanguage: "es",
              headline: "Viator vs GetYourGuide vs Reserva Directa: Tours en Tokio Comparados (2026)",
              description: "Un guía oficial de Tokio compara Viator, GetYourGuide, Klook y reserva directa: precios reales, política de reembolsos y cuándo elegir cada uno.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/viator-vs-getyourguide-vs-directo-tokio" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EsViatorVsGetYourGuideVsDirectoTokio;
