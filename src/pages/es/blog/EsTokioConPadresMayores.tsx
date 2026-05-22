// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsTokioConPadresMayores = () => {
  return (
    <Layout>
      <SEO
        title="Tokio con Padres Mayores: Rutas Accesibles e Ideas para 3 Generaciones"
        description="Rutas en silla de ruedas, consejos de ascensores en estaciones, ritmo de medio día. Un guía oficial explica cómo planear Tokio con padres de 70 o 80 años."
        canonicalPath="/es/blog/tokio-con-padres-mayores"
        hreflang={[
          { lang: "en", path: "/blog/tokyo-with-elderly-parents" },
          { lang: "es", path: "/es/blog/tokio-con-padres-mayores" },
          { lang: "x-default", path: "/blog/tokyo-with-elderly-parents" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Tokio con Padres Mayores" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tours/imperial-palace-gardens.webp"
          imageAlt="Jardines Este del Palacio Imperial — planos, caminables, accesibles"
          eyebrow="Planifica Tu Viaje"
          title="Tokio con Padres Mayores: Rutas Accesibles para Viajes de 3 Generaciones"
          subtitle="Un guía oficial de Tokio sobre ritmo, estaciones aptas para sillas de ruedas, planes de medio día y los pequeños ajustes que hacen que Tokio funcione para padres de 70 o 80 años."
          date="Mayo 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "El Ritmo Primero", href: "#section-01-ritmo" },
                { num: "02", label: "Mejores Zonas", href: "#section-02-zonas" },
                { num: "03", label: "Estaciones a Evitar", href: "#section-03-estaciones" },
                { num: "04", label: "Restaurantes Accesibles", href: "#section-04-restaurantes" },
                { num: "05", label: "Itinerarios de Medio Día", href: "#section-05-medio-dia" },
                { num: "06", label: "Onsen", href: "#section-06-onsen" },
                { num: "07", label: "Preguntas Frecuentes", href: "#section-07-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Plan rápido</p>
                  <h2>Reduce tu itinerario a la mitad. Aloja cerca de ascensores. Almuerza en lugares planos con sillas.</h2>
                  <p>
                    <span className="hl-gold">Tokio es genuinamente accesible — el sistema de Shinkansen es apto para silla de ruedas, la mayoría de estaciones principales tienen ascensores y los grandes templos tienen rampas</span>. El reto no es la accesibilidad, es el volumen y ritmo que funcionan para viajeros más jóvenes.
                  </p>
                  <p>
                    El ajuste más importante: solo mañanas de medio día. Las tardes deben ser flexibles. Dos lugares por día, no cinco.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  He guiado familias de tres generaciones en Tokio muchas veces, con padres desde activos de 70 hasta en silla de ruedas de 80. La planificación que funciona para viajeros jóvenes fracasa con padres mayores — pero el viaje que funciona para padres mayores puede ser maravilloso para todos si lo planeas bien.
                </p>

                <InlineCTAEs
                  message="¿Quieres un tour diseñado al ritmo real de tus padres?"
                  linkText="Ver opciones de tour privado accesible →"
                  href="/es/contact"
                />

                {/* Sección 01 */}
                <div className="section-eyebrow"><span>Sección 01 · Ritmo</span></div>
                <h2 id="section-01-ritmo" className="scroll-mt-20">
                  El Ritmo Primero: La Regla del Medio Día
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Reduce el número de actividades por día a la mitad de lo que planearías para ti mismo.</strong> Dos lugares destacados por día es un día real para viajeros de finales de 70. Tres es ambicioso. Cinco es el tipo de itinerario que termina en llanto.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mi estructura habitual: <strong className="text-foreground">una actividad matutina (9-12), almuerzo sentado (12-13:30), una tarde tranquila (museo o jardín, opcional)</strong> y de vuelta al hotel a las 16:00. Cualquiera que quiera más puede separarse en la tarde.
                </p>

                {/* Sección 02 */}
                <div className="section-eyebrow"><span>Sección 02 · Zonas</span></div>
                <h2 id="section-02-zonas" className="scroll-mt-20">
                  Mejores Zonas para Tokio Accesible
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/imperial-nijubashi.jpg"
                    alt="Puente Nijubashi del Palacio Imperial — plano, accesible, rodeado de bancos"
                    className="w-full h-[380px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    Zona del Palacio Imperial — senderos planos, muchos bancos y acceso por ascensor en el lado Marunouchi de la estación de Tokio
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Ueno.</strong> Plano, gran parque, múltiples museos con ascensores. Caminable y no abarrotado.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Jardines Este del Palacio Imperial.</strong> Senderos amplios y planos, muchos bancos, ambiente de jardín. Perfecto para una mañana de 1-2 horas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Acercamiento principal a Senso-ji Asakusa.</strong> Plano, el templo tiene rampas. Evita los escalones de la Puerta Hozomon usando la rampa lateral.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Jardín Nacional Shinjuku Gyoen.</strong> Senderos amplios y planos, muchos asientos.
                </p>

                {/* Sección 03 */}
                <div className="section-eyebrow"><span>Sección 03 · Estaciones</span></div>
                <h2 id="section-03-estaciones" className="scroll-mt-20">
                  Estaciones a Evitar (o Planear con Cuidado)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Difíciles:</strong> Shinjuku (transferencias complejas), Shibuya (andenes profundos), Estación Tokio lado Yaesu (pasillos largos).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Más fáciles:</strong> Ueno (compacto), Estación Tokio lado Marunouchi (bien señalizado), Asakusa línea Tobu (estación pequeña).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Estrategia:</strong> Planea días que minimicen transferencias. Una ruta solo Yamanote desde Estación Tokio → Ueno → Asakusa (taxi desde Ueno) es más fácil.
                </p>

                {/* Sección 04 */}
                <div className="section-eyebrow"><span>Sección 04 · Restaurantes</span></div>
                <h2 id="section-04-restaurantes" className="scroll-mt-20">
                  Restaurantes Accesibles
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Muchos restaurantes tradicionales requieren sentarse en el suelo (zashiki). Para padres mayores busca:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground leading-relaxed">
                  <li><strong>Pisos de restaurantes de grandes almacenes</strong> (depachika) — siempre con sillas, menús en inglés</li>
                  <li><strong>Restaurantes de hotel</strong> para almuerzo relajado — accesibles, servicio en inglés</li>
                  <li><strong>Sushi de barra</strong> — pick con taburetes regulares, no de barra baja</li>
                  <li><strong>Restaurantes yoshoku</strong> (fusión japonesa-occidental) — siempre con mesas</li>
                </ul>

                {/* Sección 05 */}
                <div className="section-eyebrow"><span>Sección 05 · Medio Día</span></div>
                <h2 id="section-05-medio-dia" className="scroll-mt-20">
                  Tres Itinerarios de Medio Día que Funcionan
                </h2>
                <h3>Día A: Palacio Imperial + Almuerzo Marunouchi</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  9:30 Jardines Este Palacio Imperial (1,5 horas). 11:00 Caminata a Marunouchi (10 minutos plano). 11:30 Almuerzo en restaurante de edificio Marunouchi. 13:00 De vuelta al hotel para descansar.
                </p>
                <h3>Día B: Senso-ji + Almuerzo Asakusa</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  10:00 Llegada Asakusa (línea Tobu Sky Tree). 10:15 Caminata calle Nakamise. 11:00 Sala principal Senso-ji (rampa). 12:00 Almuerzo de tempura. 13:30 Caminata opcional río Sumida o vuelta al hotel.
                </p>
                <h3>Día C: Museo Ueno + Parque</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  10:00 Museo Nacional de Tokio (ascensores, bancos). 12:00 Almuerzo en restaurante del Parque Ueno. 13:30 Caminata Parque Ueno. 14:30 De vuelta al hotel.
                </p>

                {/* Sección 06 */}
                <div className="section-eyebrow"><span>Sección 06 · Onsen</span></div>
                <h2 id="section-06-onsen" className="scroll-mt-20">
                  Consideraciones de Onsen
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Muchos padres mayores quieren onsen, pero los onsen estándar requieren sentarse en taburetes pequeños para lavarse. <strong className="text-foreground">Si hay problemas de movilidad:</strong>
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground leading-relaxed">
                  <li>Elige <strong>ryokan con baños en habitación</strong> (kashikiri)</li>
                  <li>Busca onsen con <strong>elevadores</strong> o diseño sin barreras (algunos Hakone)</li>
                  <li>Considera <strong>onsen de día</strong> (super-sento) con barandas y escaleras anchas</li>
                  <li>Las políticas de tatuajes aún aplican</li>
                </ul>

                <InlineCTAEs
                  message="¿Quieres un día accesible en Tokio diseñado para tus padres?"
                  linkText="Envíame tu situación y lo planeo →"
                  href="/es/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Sección 07 · Preguntas Frecuentes</span></div>
                <h2 id="section-07-faq" className="scroll-mt-20">
                  Preguntas Frecuentes
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">¿Tokio es accesible en silla de ruedas?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí, más de lo que esperan la mayoría de viajeros. Todas las grandes estaciones JR tienen ascensores, la mayoría de líneas de metro son accesibles y las grandes atracciones tienen rampas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Los taxis son buena opción para padres mayores?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí, no dudes en usarlos. Los taxis de Tokio son limpios, puerta automática y razonablemente baratos para recorridos cortos (¥500-1.500).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Deberíamos alquilar una silla de ruedas en Tokio?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La mayoría de grandes estaciones y atracciones tienen sillas para prestar gratis. Los conserjes de hotel también pueden organizar alquileres.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">¿Vale la pena un guía privado para un viaje con padres mayores?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí, más que para cualquier otro tipo de viaje. Ver mi <Link to="/es/blog/vale-la-pena-guia-privado-tokio" className="text-accent hover:underline">"¿vale la pena?" honesto</Link>.
                    </p>
                  </div>
                </div>

                <InlineCTAEs
                  message="¿Listo para planear un viaje accesible a Tokio con la familia?"
                  linkText="Contáctame →"
                  href="/es/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["custom", "asakusa", "imperial-palace"]} lang="es" showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              inLanguage: "es",
              headline: "Tokio con Padres Mayores: Rutas Accesibles e Ideas para 3 Generaciones",
              description: "Un guía oficial de Tokio sobre ritmo, estaciones aptas para sillas de ruedas, restaurantes accesibles, itinerarios de medio día y opciones de onsen para viajeros de 70 y 80 años.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/tokio-con-padres-mayores" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EsTokioConPadresMayores;
