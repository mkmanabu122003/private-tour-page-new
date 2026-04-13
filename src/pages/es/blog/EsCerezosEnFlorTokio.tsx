import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsCerezosEnFlorTokio = () => {
  return (
    <Layout>
      <SEO
        title="Cerezos en Flor en Tokio 2026: Fechas, Mejores Lugares y Tips"
        description="Temporada de sakura en Tokio 2026: floración desde el 19 de marzo, plenitud el 27. Un guía local clasifica los 7 mejores lugares y comparte tips que no encontrarás en otras guías."
        canonicalPath="/es/blog/cerezos-en-flor-tokio"
        hreflang={[
          { lang: "en", path: "/blog/tokyo-cherry-blossom-guide" },
          { lang: "es", path: "/es/blog/cerezos-en-flor-tokio" },
          { lang: "x-default", path: "/blog/tokyo-cherry-blossom-guide" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/senso-ji-temple-tokyo.webp"
          alt="Cerezos en flor cerca del templo Senso-ji en Tokio"
          className="w-full h-full object-cover"
          loading="eager"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Article Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link to="/es/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>
            <p className="text-label text-accent mb-3">Planifica tu Viaje</p>
            <h1 className="heading-display text-foreground">
              Cerezos en Flor en Tokio 2026: Los Mejores Lugares Según un Guía Local
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />Manabu, Guía con Licencia</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />22 de marzo de 2026</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Última actualización: marzo 2026</p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, Guía Nacional con Licencia (全国通訳案内士) con más de 500 tours privados realizados en Tokio.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Cada primavera, mis clientes llegan a Tokio con la misma pregunta: "¿Llegamos demasiado pronto? ¿Demasiado tarde? ¿Adónde debemos ir?" La temporada del cerezo en Tokio es preciosa, pero también impredecible, abarrotada y sorprendentemente corta. La ventana entre la primera floración y la caída del último pétalo dura unas dos semanas, y el momento "perfecto" apenas cuatro o cinco días.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de guiar a cientos de visitantes durante la temporada del sakura, he aprendido que la diferencia entre una experiencia mágica y una frustrante se reduce a tres factores: el momento, el lugar y la hora del día. Esta guía cubre los tres.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Pronóstico de Cerezos en Flor en Tokio 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Según el último pronóstico de la Japan Meteorological Corporation (actualizado en marzo de 2026):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong>Primera floración (開花):</strong> 19 de marzo de 2026 — unos días antes de lo normal</li>
              <li><strong>Plena floración (満開):</strong> 27 de marzo de 2026</li>
              <li><strong>Mejor ventana de observación:</strong> 27 de marzo – 2 de abril</li>
              <li><strong>Caída de pétalos (桜吹雪):</strong> Alrededor del 3 al 7 de abril</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este año la floración es más temprana de lo habitual debido a temperaturas más cálidas en febrero. Si llegas a finales de marzo o principios de abril, estarás en el momento ideal. Si vienes después del 5 de abril, probablemente verás el final de la temporada — sigue siendo hermoso, especialmente con los pétalos flotando en ríos y estanques.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Los 7 Mejores Lugares para Ver Cerezos en Tokio
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              1. Río Meguro (目黒川) — La Mejor Experiencia General
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si solo tienes tiempo para un lugar, este es donde llevo a mis clientes. Más de 800 cerezos bordean ambas orillas del río Meguro a lo largo de 3,8 kilómetros. Durante la plena floración, las ramas forman un túnel rosado sobre el agua. Por la noche, los árboles se iluminan y el reflejo en el río es espectacular.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Mejor hora:</strong> Al atardecer y por la noche (16:00–20:00) para las iluminaciones</li>
              <li><strong>Acceso:</strong> Estación Nakameguro (Línea Tokyu Toyoko / Línea Hibiya)</li>
              <li><strong>Consejo:</strong> Camina río arriba desde Nakameguro — la mayoría de turistas se quedan cerca de la estación. El tramo hacia Ikejiri-Ohashi es más tranquilo</li>
            </ul>
            <figure className="my-8">
              <img
                src="/images/blog/meguro-river-cherry-blossoms.webp"
                alt="Cerezos en plena floración a ambos lados del río Meguro"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                El túnel de cerezos del río Meguro en plena floración — más de 800 árboles bordean ambas orillas
              </figcaption>
            </figure>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              2. Chidorigafuchi (千鳥ヶ淵) — El Más Fotogénico
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El foso del Palacio Imperial se convierte en un túnel de cerezos de 700 metros, y puedes alquilar botes de remos para recorrerlo. Durante el periodo de iluminación (26 de marzo – 6 de abril de 2026), los árboles brillan en rosa contra el agua oscura. Es la escena de sakura más fotogénica de Tokio.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Mejor hora:</strong> Temprano por la mañana (antes de las 8:00) o por la noche</li>
              <li><strong>Acceso:</strong> Estación Kudanshita (Líneas Tozai / Hanzomon / Shinjuku)</li>
              <li><strong>Alquiler de botes:</strong> ¥800 por 30 minutos. Espera de 60–90 minutos en fines de semana</li>
            </ul>

            <InlineCTAEs
              text="¿Quieres ver los cerezos en flor con un guía local que conoce los mejores momentos y lugares?"
              tourSlug="custom"
              tourName="Tour Personalizado de Primavera"
            />

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              3. Shinjuku Gyoen (新宿御苑) — El Mejor para Familias y Pícnic
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinjuku Gyoen cuenta con más de 1.000 cerezos de 65 variedades, lo que significa que siempre hay algo en flor desde mediados de marzo hasta finales de abril. Los amplios jardines son perfectos para hacer un pícnic hanami. No se permite alcohol, lo que mantiene el ambiente tranquilo y familiar.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Horario:</strong> 9:00–17:30 (última entrada 17:00). Cerrado los lunes</li>
              <li><strong>Entrada:</strong> ¥500 adultos, ¥250 estudiantes, gratis menores de 15 años</li>
              <li><strong>Acceso:</strong> Estación Shinjuku-Gyoenmae (Línea Marunouchi)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              4. Parque Ueno (上野公園) — El Mejor Ambiente Festivo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ueno es el lugar más famoso de Tokio para el hanami: más de 1.000 cerezos, 800 farolillos de papel iluminados por la noche, puestos de comida y un ambiente genuinamente festivo. Pero seré sincero: se llena muchísimo, sobre todo los fines de semana.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Mejor hora:</strong> Mañanas entre semana o después de las 19:00 con los farolillos</li>
              <li><strong>Acceso:</strong> Estación Ueno (JR / Líneas Ginza / Hibiya)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              5. Río Sumida (隅田川) — El Mejor Combinado con Asakusa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El paseo de sakura del río Sumida se extiende 1 kilómetro, con árboles en ambas orillas. Lo especial aquí es la combinación: cerezos en flor, el Tokyo Skytree de fondo y el barrio histórico de Asakusa a un paso.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Mejor hora:</strong> Por la tarde, combinado con un{" "}
                <Link to="/es/tours/asakusa" className="text-accent hover:underline">tour a pie por Asakusa</Link>
              </li>
              <li><strong>Acceso:</strong> Estación Asakusa (Líneas Ginza / Asakusa)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              6. Cementerio de Yanaka (谷中霊園) — La Joya Escondida
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es mi favorito personal. El camino principal del cementerio de Yanaka está bordeado de cerezos antiguos que forman un dosel completo. Es tranquilo, atmosférico y totalmente gratis. El barrio de{" "}
              <Link to="/es/blog/yanaka-tokio-itinerario" className="text-accent hover:underline">Yanaka</Link>
              {" "}alrededor es una de las zonas mejor conservadas del viejo Tokio.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Mejor hora:</strong> Cualquiera — nunca está tan lleno como los sitios famosos</li>
              <li><strong>Acceso:</strong> Estación Nippori (Línea JR Yamanote)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              7. Jardín Rikugien (六義園) — La Mejor Iluminación Nocturna
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rikugien es un jardín tradicional de la era Edo con un famoso cerezo llorón (shidarezakura) que se convierte en la estrella de un evento anual de iluminación. El árbol iluminado contra el jardín oscuro es verdaderamente impresionante.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Horario:</strong> 9:00–17:00 (ampliado hasta 21:00 durante la iluminación)</li>
              <li><strong>Entrada:</strong> ¥300</li>
              <li><strong>Acceso:</strong> Estación Komagome (Línea JR Yamanote / Línea Namboku)</li>
            </ul>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Consejos Prácticos para la Temporada de Cerezos
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong>Ve entre semana:</strong> Las multitudes del fin de semana pueden ser agobiantes</li>
              <li><strong>Mejor antes de las 9:00 o al atardecer</strong> para los lugares iluminados</li>
              <li><strong>No sacudas las ramas</strong> para las fotos — daña los árboles y se considera muy maleducado</li>
              <li><strong>Lleva capas de abrigo:</strong> Las noches de marzo en Tokio son frescas (8–12°C)</li>
              <li><strong>Recoge tu basura:</strong> Los parques japoneses tienen muy pocas papeleras</li>
              <li><strong>No te agobies con las fechas:</strong> La caída de pétalos (sakura fubuki) es tan fotogénica como la plena floración</li>
            </ul>

            {/* CTA */}
            <div className="my-12 p-8 bg-accent/5 border border-accent/20 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                ¿Quieres un Guía Local para la Temporada de Cerezos?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ofrezco tours personalizados de primavera que combinan los mejores lugares de sakura con las atracciones principales de Tokio, siempre evitando las multitudes. Desde un paseo matutino por el túnel de cerezos de Yanaka hasta un paseo en bote nocturno en Chidorigafuchi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/es/tours/custom" className="btn-accent inline-flex items-center gap-2">
                  Reservar un Tour de Primavera
                </Link>
                <Link to="/es/contact" className="btn-outline inline-flex items-center gap-2">
                  Hacer una Pregunta
                </Link>
              </div>
            </div>

            {/* Related Tours */}
            <div className="mt-12">
              <RelatedTourCards tourIds={["asakusa", "custom"]} lang="es" />
            </div>
          </article>
        </div>
      </section>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Cerezos en Flor en Tokio 2026: Los Mejores Lugares Según un Guía Local",
        datePublished: "2026-03-22",
        dateModified: "2026-03-22",
        author: { "@type": "Person", name: "Manabu", jobTitle: "Guía con Licencia" },
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel" },
        inLanguage: "es"
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Cuándo es la mejor época para ver cerezos en flor en Tokio en 2026?", acceptedAnswer: { "@type": "Answer", text: "La plena floración está prevista para el 27 de marzo de 2026. La mejor ventana de observación es aproximadamente del 27 de marzo al 2 de abril." }},
          { "@type": "Question", name: "¿Es gratis ver los cerezos en flor en Tokio?", acceptedAnswer: { "@type": "Answer", text: "La mayoría de los lugares son gratuitos, incluidos el río Meguro, Chidorigafuchi, el parque Ueno y el río Sumida. Shinjuku Gyoen cobra ¥500 y Rikugien ¥300." }},
          { "@type": "Question", name: "¿Y si no llego a la plena floración?", acceptedAnswer: { "@type": "Answer", text: "La caída de pétalos durante la primera semana de abril es igual de fotogénica. Shinjuku Gyoen tiene variedades tardías que florecen alrededor del 10-15 de abril." }},
          { "@type": "Question", name: "¿Cuál es el lugar menos masificado para ver cerezos en Tokio?", acceptedAnswer: { "@type": "Answer", text: "El cementerio de Yanaka es el secreto mejor guardado. El camino principal tiene cerezos magníficos con mucha menos gente que Ueno o Meguro." }}
        ]
      })}} />
    </Layout>
  );
};

export default EsCerezosEnFlorTokio;
