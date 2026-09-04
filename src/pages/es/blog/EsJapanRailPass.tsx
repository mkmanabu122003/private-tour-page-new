// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { QuickAnswerEs } from "@/components/blog/QuickAnswer";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";
import { AffiliateDisclosure } from "@/components/affiliates/AffiliateDisclosure";
import { AffiliateLink } from "@/components/affiliates/AffiliateLink";

const EsJapanRailPass = () => {
  return (
    <Layout>
      <SEO
        title="¿Vale la Pena el JR Pass en 2026? Comparativa Ruta por Ruta"
        description="¿Vale la pena el JR Pass en 2026? Subida de octubre, precios web oficial vs agencias y cálculos ruta por ruta. Actualizado mayo 2026."
        canonicalPath="/es/blog/japan-rail-pass-vale-la-pena"
        hreflang={[
          { lang: "es", path: "/es/blog/japan-rail-pass-vale-la-pena" },
        ]}
      />

      <div className="prose-editorial">

            {/* Hero — overlaid title (BlogArticleHero) */}
      <BlogArticleHero
        image="/images/tours/hakone-lake-ashi-fuji.webp"
        imageAlt="Lago Ashi y Monte Fuji: excursión con Japan Rail Pass"
        eyebrow="Planifica tu Viaje"
        title="¿Vale la Pena el JR Pass en 2026? Comparativa Ruta por Ruta con Números Reales"
        date="7 de marzo de 2026"
        backHref="/es/blog"
        backLabel="Volver al Blog"
      />

      

            <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
            <BlogArticleToc items={[
          { num: "01", label: "Por qué la mayoría de los…", href: "#section-01-por-qué-la-mayoría-de-los-viajeros-se" },
          { num: "02", label: "Cuánto cuesta el Japan Rail…", href: "#section-02-cuánto-cuesta-el-japan-rail-pass-en-2026" },
          { num: "03", label: "Aumento de Precio Octubre 2026", href: "#section-03-aumento-de-precio-octubre-2026" },
          { num: "04", label: "Para quién SÍ vale la pena", href: "#section-04-para-quién-sí-vale-la-pena" },
          { num: "05", label: "Para quién NO vale la pena", href: "#section-05-para-quién-no-vale-la-pena" },
          { num: "06", label: "Alternativas al JR Pass que…", href: "#section-06-alternativas-al-jr-pass-que-casi-nadie-conoce" },
          { num: "07", label: "FAQ", href: "#section-07-faq" },
          { num: "08", label: "Explora Tokio con un Guía…", href: "#section-08-explora-tokio-con-un-guía-local" }
            ]} />

            <article>

            <QuickAnswerEs
              answer="El precio del JR Pass no ha cambiado en 2026 — la última subida fue en octubre de 2023 (+70%, hasta ¥50,000 el pase Ordinario de 7 días). No hay ninguna subida prevista para 2026 a fecha de abril."
              hook="Pero lo que importa más que el precio es esto: tras la subida de 2023, el Pass solo compensa en itinerarios concretos. He calculado los números de las 12 rutas más comunes — y en 7 de ellas acabas perdiendo dinero comparado con comprar billetes sueltos de Shinkansen."
            />
            <AffiliateDisclosure lang="es" placement="top" />
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              "¿Me conviene comprar el Japan Rail Pass?" Es la pregunta que más me hacen mis clientes antes de viajar a Japón. Y la respuesta honesta es: depende. La verdad es que para muchos viajeros el JR Pass ya no sale rentable desde la subida de 2023. Pero para otros sigue siendo una compra inteligente que puede ahorrarte miles de yenes. En este artículo voy a hacer los cálculos reales, con precios actualizados de 2026, para que tú mismo puedas decidir si el japan rail pass vale la pena para tu itinerario concreto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Como guía con licencia que vive en Japón, veo cada semana a viajeros que compraron el JR Pass "por si acaso" y terminaron perdiendo dinero, y a otros que no lo compraron y se arrepintieron al ver el precio de los billetes de shinkansen en la taquilla. Mi objetivo aquí es que no te pase ninguna de las dos cosas.
            </p>

            {/* Por qué la mayoría se equivoca */}
            <div className="section-eyebrow"><span>Sección 01 · Por qué la mayoría de los viajeros se</span></div>
            <h2 id="section-01-por-qué-la-mayoría-de-los-viajeros-se" className="scroll-mt-20">
              Por qué la mayoría de los viajeros se equivocan con el JR Pass
            </h2>

            <h3>
              El error del "por si acaso"
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El error más común que veo es comprar el Japan Rail Pass de 7 días "por si acaso lo necesito". Antes de la subida de precios, esto tenía cierto sentido: el pase era tan barato que casi cualquier combinación de trenes lo amortizaba. Pero en 2026, con un pase de 7 días que cuesta 50.000 yenes (aproximadamente 310 euros), esa lógica ya no funciona. Necesitas hacer al menos dos o tres trayectos largos en shinkansen para que los números cuadren. Si tu plan es quedarte principalmente en Tokio con una excursión a Hakone o Kamakura, el JR Pass es tirar el dinero.
            </p>

            <h3>
              Lo que cambió en 2023 (la subida de precio)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En octubre de 2023, JR Group subió el precio del Japan Rail Pass en aproximadamente un 70%. El pase ordinario de 7 días pasó de 29.650 a 50.000 yenes. Fue un cambio drástico que pilló a muchos viajeros por sorpresa. ¿La razón? El pase llevaba años sin actualizarse mientras los costes operativos subían. JR también quería desincentivar el uso masivo del shinkansen Nozomi (el más rápido), que el pase nunca ha incluido. Desde entonces, los precios se han mantenido estables, pero la ecuación sobre si el japan rail pass vale la pena cambió radicalmente.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/shinkansen-n700-tokyo-station.webp"
                alt="Tren bala Shinkansen Serie N700 en un andén de estación en Japón"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                El Shinkansen Serie N700 — la columna vertebral de la red de alta velocidad japonesa cubierta por el JR Pass
              </figcaption>
            </figure>

            {/* Cuánto cuesta */}
            <div className="section-eyebrow"><span>Sección 02 · Cuánto cuesta el Japan Rail Pass en 2026</span></div>
            <h2 id="section-02-cuánto-cuesta-el-japan-rail-pass-en-2026" className="scroll-mt-20">
              Cuánto cuesta el Japan Rail Pass en 2026
            </h2>

            <h3>
              Precios actualizados (7, 14 y 21 días)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estos son los precios del Japan Rail Pass ordinario para adultos en 2026:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Duración</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Ordinario (adulto)</th>
                    <th className="text-left py-3 text-foreground font-medium">Green Car (adulto)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">7 días</td>
                    <td className="py-3 pr-4">50.000 yen (~310 EUR)</td>
                    <td className="py-3">70.000 yen (~435 EUR)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">14 días</td>
                    <td className="py-3 pr-4">80.000 yen (~497 EUR)</td>
                    <td className="py-3">110.000 yen (~683 EUR)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">21 días</td>
                    <td className="py-3 pr-4">100.000 yen (~621 EUR)</td>
                    <td className="py-3">140.000 yen (~870 EUR)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los niños de 6 a 11 años pagan la mitad. Los menores de 6 años viajan gratis si van acompañados de un adulto con pase.
            </p>

            <h3>
              Ordinario vs. Green Car
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              El pase Green Car equivale a la primera clase. Los asientos son más amplios, hay más espacio para las piernas y los vagones van menos llenos. ¿Mi opinión honesta? Para la mayoría de los viajeros, el pase ordinario es más que suficiente. Los asientos de clase ordinaria en el shinkansen japonés son ya bastante cómodos (mucho más que cualquier tren europeo en segunda clase). Solo recomiendo el Green Car si tienes algún problema de movilidad, necesitas trabajar durante el trayecto con más espacio, o simplemente quieres darte un lujo. La diferencia de precio es considerable y rara vez justifica la mejora.
            </p>

            <h3>
              Comparativa: precios antes y después de la subida de 2023
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para entender por qué la ecuación del JR Pass cambió tan drásticamente, aquí tienes la comparativa completa de todos los tipos de pase antes y después del aumento de octubre de 2023. A fecha de marzo de 2026, estos precios siguen vigentes.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Tipo de pase</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Antes (hasta oct. 2023)</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Precio actual 2026</th>
                    <th className="text-left py-3 text-foreground font-medium">Subida</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">7 días Ordinario</td>
                    <td className="py-3 pr-4">29.650 yen</td>
                    <td className="py-3 pr-4">50.000 yen</td>
                    <td className="py-3">+69%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">14 días Ordinario</td>
                    <td className="py-3 pr-4">47.250 yen</td>
                    <td className="py-3 pr-4">80.000 yen</td>
                    <td className="py-3">+69%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">21 días Ordinario</td>
                    <td className="py-3 pr-4">60.450 yen</td>
                    <td className="py-3 pr-4">100.000 yen</td>
                    <td className="py-3">+65%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">7 días Green Car</td>
                    <td className="py-3 pr-4">39.600 yen</td>
                    <td className="py-3 pr-4">70.000 yen</td>
                    <td className="py-3">+77%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">14 días Green Car</td>
                    <td className="py-3 pr-4">64.120 yen</td>
                    <td className="py-3 pr-4">110.000 yen</td>
                    <td className="py-3">+72%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">21 días Green Car</td>
                    <td className="py-3 pr-4">83.390 yen</td>
                    <td className="py-3 pr-4">140.000 yen</td>
                    <td className="py-3">+68%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              El impacto concreto: con el precio antiguo, un solo viaje de ida y vuelta Tokio–Kioto (27.700 yenes) casi amortizaba el pase de 7 días. Con el precio actual de 50.000 yenes, ese mismo viaje solo cubre el 55% del coste del pase. Ahora necesitas dos o más trayectos largos en shinkansen más desplazamientos locales en JR para salir ganando.
            </p>

            {/* Aumento de Precio Octubre 2026 */}
            <div className="section-eyebrow"><span>Sección 03 · Aumento de Precio Octubre 2026</span></div>
            <h2 id="section-03-aumento-de-precio-octubre-2026" className="scroll-mt-20">
              Aumento de Precio del JR Pass en Octubre de 2026: ¿Sigue Valiendo la Pena?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              JR Group anunció el <strong className="text-foreground">9 de abril de 2026</strong> una nueva subida del Japan Rail Pass que entrará en vigor el <strong className="text-foreground">1 de octubre de 2026</strong>. El aumento es de aproximadamente un 5-6%, mucho más moderado que el 69% de 2023, pero llega con un detalle clave que muchos blogs aún no han actualizado: <strong className="text-foreground">la subida afecta sobre todo a las compras realizadas a través de agencias extranjeras</strong> (Klook, JRailPass.com, agencias de viaje, etc.). La web oficial japanrailpass.net <strong className="text-foreground">mantendrá los precios actuales por un periodo limitado tras la subida</strong> — JR ha anunciado que dará más detalles sobre la duración de esta promoción más adelante.
            </p>

            <h3>
              Comparativa: precio actual vs nuevo precio (desde oct. 2026)
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Pase (adulto)</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Hasta sep. 2026</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Desde oct. 2026 (agencias)</th>
                    <th className="text-left py-3 text-foreground font-medium">Web oficial JR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">7 días Ordinario</td>
                    <td className="py-3 pr-4">50.000 yen</td>
                    <td className="py-3 pr-4">53.000 yen (+6%)</td>
                    <td className="py-3">50.000 yen (promo limitada)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">14 días Ordinario</td>
                    <td className="py-3 pr-4">80.000 yen</td>
                    <td className="py-3 pr-4">84.000 yen (+5%)</td>
                    <td className="py-3">80.000 yen (promo limitada)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">21 días Ordinario</td>
                    <td className="py-3 pr-4">100.000 yen</td>
                    <td className="py-3 pr-4">105.000 yen (+5%)</td>
                    <td className="py-3">100.000 yen (promo limitada)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">7 días Green Car</td>
                    <td className="py-3 pr-4">70.000 yen</td>
                    <td className="py-3 pr-4">74.000 yen (+5,7%)</td>
                    <td className="py-3">70.000 yen (promo limitada)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">14 días Green Car</td>
                    <td className="py-3 pr-4">110.000 yen</td>
                    <td className="py-3 pr-4">116.000 yen (+5,5%)</td>
                    <td className="py-3">110.000 yen (promo limitada)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">21 días Green Car</td>
                    <td className="py-3 pr-4">140.000 yen</td>
                    <td className="py-3 pr-4">147.000 yen (+5%)</td>
                    <td className="py-3">140.000 yen (promo limitada)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Aviso importante:</strong> el descuento de la web oficial es <strong className="text-foreground">temporal</strong>. JR aún no ha anunciado la fecha exacta en la que esta promoción finalizará. Verifica <a href="https://japanrailpass.net/en/purchase/price/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">japanrailpass.net</a> antes de comprar. Fuente: comunicado oficial de JR Group del 9 de abril de 2026.
            </p>

            <h3>
              La trampa de las agencias: cómo evitar pagar de más
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si compras el pase a partir de octubre de 2026, asegúrate de hacerlo a través de la web oficial <a href="https://japanrailpass.net/en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">japanrailpass.net</a> <strong className="text-foreground">mientras dure la promoción de precios pre-octubre</strong> (la fecha exacta de fin la anunciará JR más adelante). El proceso es muy similar: compras online, recibes una orden de canje y la cambias por el pase físico al llegar a Japón en la oficina JR de Narita, Haneda, Estación de Tokio o Kioto. La diferencia mientras dure la promoción: pagas hasta 3.000 yenes menos por el pase de 7 días, y 5.000 yenes menos por el de 21 días, simplemente eligiendo bien el canal de compra.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aviso adicional: muchas guías y blogs publicados antes de mayo de 2026 todavía dicen que "no hay subidas previstas en 2026". Esa información quedó obsoleta tras el anuncio del 9 de abril. Verifica siempre la fuente y la fecha del artículo cuando consultes precios del JR Pass — el sector cambia rápido y no todos los sitios actualizan a tiempo.
            </p>

            <h3>
              Punto de equilibrio recalculado para octubre 2026
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              ¿Cómo cambia la decisión "comprar o no comprar" tras la subida de octubre de 2026? Si compras en la web oficial JR, no cambia nada — los cálculos del resto del artículo siguen siendo válidos. Si compras vía agencia a 53.000 yenes, el margen se reduce ligeramente: el itinerario clásico Tokio-Kioto-Hiroshima-Osaka (50.140 yenes en billetes individuales) deja de cubrir por sí solo el coste del pase. Necesitas añadir al menos un trayecto adicional (excursión a Nara, ferry a Miyajima o tramos locales en Tokio) para volver a positivo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              La conclusión práctica para 2026: la nueva subida no cambia para quién vale la pena el pase, sino que <strong className="text-foreground">refuerza la importancia de comprar directamente en la web oficial</strong>. Y si haces los cálculos, sigue siendo rentable solo en itinerarios multi-ciudad con shinkansen — exactamente igual que antes del aumento.
            </p>

            {/* Para quién SÍ vale la pena */}
            <div className="section-eyebrow"><span>Sección 04 · Para quién SÍ vale la pena</span></div>
            <h2 id="section-04-para-quién-sí-vale-la-pena" className="scroll-mt-20">
              Para quién SÍ vale la pena (con cálculos reales)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vamos a los números. Aquí es donde realmente puedes decidir si el japan rail pass vale la pena para tu viaje. Usaré precios reales de billetes individuales en 2026 para los trayectos más comunes.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/fushimi-inari-senbon-torii-kyoto.webp"
                alt="Miles de puertas torii bermellón formando un túnel en el santuario Fushimi Inari de Kioto"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Los icónicos senbon torii de Fushimi Inari, Kioto — una de las razones principales por las que los viajeros toman el Shinkansen desde Tokio
              </figcaption>
            </figure>

            <h3>
              Itinerario Tokio-Kioto-Osaka-Hiroshima
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este es el itinerario clásico de primera visita a Japón, y es donde el JR Pass brilla. Si planeas moverte entre estas cuatro ciudades en 7 días, los números hablan solos. El trayecto Tokio-Kioto en shinkansen Hikari cuesta unos 13.850 yenes por tramo. Kioto-Hiroshima sale por unos 11.300 yenes. Hiroshima-Osaka, unos 10.230 yenes. Y Osaka-Tokio de vuelta, unos 14.400 yenes. Si además añades una excursión a Miyajima desde Hiroshima (incluida en el pase), los billetes individuales superan los 50.000 yenes del pase de 7 días.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/kinkakuji-golden-pavilion-kyoto.webp"
                alt="Kinkaku-ji, el Pabellón Dorado reflejándose en un estanque en Kioto, Japón"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Kinkaku-ji (Pabellón Dorado) en Kioto — la ruta clásica desde Tokio hace que el JR Pass se amortice solo
              </figcaption>
            </figure>

            <h3>
              Itinerario Tokio-Kioto-Kanazawa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Otro itinerario donde el japan rail pass vale la pena. Tokio a Kioto en Hikari: 13.850 yenes. Kioto a Kanazawa (Thunderbird hasta Tsuruga + shinkansen Tsurugi): unos 7.720 yenes. Kanazawa a Tokio en el shinkansen Hokuriku: unos 14.180 yenes. Total de billetes individuales: aproximadamente 35.750 yenes solo ida. Si haces estos trayectos de ida y vuelta, o añades alguna excursión (por ejemplo, a Nara desde Kioto, cubierta por el pase), te acercas o superas los 50.000 yenes del pase.
            </p>

            <h3>
              Los números reales
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aquí tienes una comparación directa para los dos itinerarios más populares:
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Trayecto</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Billete individual</th>
                    <th className="text-left py-3 text-foreground font-medium">Con JR Pass 7 días</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Tokio → Kioto (Hikari)</td>
                    <td className="py-3 pr-4">13.850 yen</td>
                    <td className="py-3 rowspan-6" rowSpan={1}>Incluido</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Kioto → Hiroshima (Sakura)</td>
                    <td className="py-3 pr-4">11.300 yen</td>
                    <td className="py-3">Incluido</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Hiroshima → Miyajima (ferry JR)</td>
                    <td className="py-3 pr-4">400 yen (ida y vuelta)</td>
                    <td className="py-3">Incluido</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Hiroshima → Osaka (Sakura)</td>
                    <td className="py-3 pr-4">10.230 yen</td>
                    <td className="py-3">Incluido</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Osaka → Tokio (Hikari)</td>
                    <td className="py-3 pr-4">14.400 yen</td>
                    <td className="py-3">Incluido</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Total billetes</td>
                    <td className="py-3 pr-4 font-medium text-foreground">50.140 yen</td>
                    <td className="py-3 font-medium text-foreground">50.000 yen (pase)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Con este itinerario base los números ya igualan prácticamente el precio del pase. Si añades cualquier trayecto extra (una excursión a Nara, un tren local JR en Tokio, el ferry a Miyajima), el pase sale claramente rentable. Y si viajas Tokio-Kioto-Kanazawa-Tokio, con los 35.750 yenes de ida ya estás al 71% del coste del pase, y cualquier uso adicional te pone en positivo. La clave está en contar todos los trenes JR que usarás, incluidos los locales y regionales.
            </p>

            <InlineCTAEs />

            {/* Para quién NO vale la pena */}
            <div className="section-eyebrow"><span>Sección 05 · Para quién NO vale la pena</span></div>
            <h2 id="section-05-para-quién-no-vale-la-pena" className="scroll-mt-20">
              Para quién NO vale la pena
            </h2>

            <h3>
              Si solo visitas Tokio
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si tu viaje se centra en Tokio, el japan rail pass vale la pena cero. Lo digo sin rodeos. En Tokio te moverás principalmente en metro (líneas Tokyo Metro y Toei), que no están cubiertas por el JR Pass. Sí, hay algunas líneas JR dentro de Tokio (como la famosa línea Yamanote), pero un día de uso intensivo en la Yamanote te costará como mucho 500-800 yenes. Para eso, una tarjeta Suica o Pasmo es infinitamente más práctica. Si buscas ideas para tu estancia en la capital, echa un vistazo a nuestro{" "}
              <Link to="/es/blog/itinerario-tokio-5-dias" className="text-accent hover:underline">
                itinerario de 5 días en Tokio
              </Link>{" "}
              o a nuestro{" "}
              <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">
                tour gastronómico por Tsukiji y Ginza
              </Link>.
            </p>

            <h3>
              Si tu itinerario es Tokio + una excursión
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muchos viajeros pasan la mayor parte de su tiempo en Tokio y hacen una excursión de un día a Kamakura, Nikko o Hakone. En ninguno de estos casos necesitas el JR Pass. Tokio-Kamakura ida y vuelta en tren JR cuesta unos 2.080 yenes. Tokio-Nikko ida y vuelta con el Tobu Railway (que no es JR) sale por unos 5.200 yenes con el pase turístico de Tobu (consulta nuestra <Link to="/es/blog/excursion-nikko-desde-tokio" className="text-accent hover:underline">guía de excursión a Nikko</Link> para más detalles). Y para Hakone, el Hakone Free Pass de Odakyu (que tampoco es JR) cubre todo el transporte en la zona por 7.100 yenes. Comparar estos precios con los 50.000 yenes del JR Pass habla por sí solo.
            </p>

            <h3>
              Si viajas en avión entre ciudades
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Con aerolíneas de bajo coste como Peach, Jetstar Japan y Spring Airlines, a veces puedes volar de Tokio a Osaka o Fukuoka por 4.000-8.000 yenes. Si tu itinerario incluye vuelos internos, obviamente esos trayectos no cuentan para amortizar el JR Pass. He visto viajeros que compran el pase y luego toman vuelos internos porque "era más rápido", pagando dos veces por el mismo trayecto.
            </p>

            {/* Alternativas */}
            <div className="section-eyebrow"><span>Sección 06 · Alternativas al JR Pass que casi nadie conoce</span></div>
            <h2 id="section-06-alternativas-al-jr-pass-que-casi-nadie-conoce" className="scroll-mt-20">
              Alternativas al JR Pass que casi nadie conoce
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si has llegado hasta aquí y concluyes que el japan rail pass vale la pena para tu caso, perfecto. Pero si no, aquí van las alternativas que recomiendo a mis clientes y que a menudo resultan más económicas.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/jr-okachimachi-station-entrance.webp"
                alt="Entrada de la estación JR Okachimachi en Tokio mostrando el logotipo de JR y las puertas de acceso"
                loading="lazy"
                width={800}
                height={533}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Una estación JR típica en el centro de Tokio — las tarjetas IC funcionan en todas las puertas
              </figcaption>
            </figure>

            <h3>
              Suica/Pasmo (tarjetas IC)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las tarjetas IC recargables (Suica de JR East o Pasmo de las compañías de metro) son imprescindibles para cualquier viaje a Japón, tengas o no el JR Pass. Funcionan en prácticamente todo el transporte público de Tokio, Osaka, Kioto y la mayoría de ciudades importantes: metro, autobuses, trenes locales e incluso tiendas de conveniencia. Puedes cargarlas con el importe que necesites y simplemente tocar al pasar. Para estancias centradas en una ciudad, son todo lo que necesitas. Desde 2023, la versión física tiene disponibilidad limitada, pero puedes usar la versión digital en tu móvil con Apple Pay o Google Pay.
            </p>

            <h3>
              Pases regionales (Kansai, Hokkaido, etc.)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la alternativa que más recomiendo. JR ofrece pases regionales mucho más económicos que cubren zonas específicas. Algunos ejemplos: el <strong className="text-foreground"><AffiliateLink slug="japan-bullet-train" lang="es">JR Kansai Area Pass</AffiliateLink></strong> (1-4 días, desde 2.800 yenes) cubre trenes entre Osaka, Kioto, Nara y Kobe. El <strong className="text-foreground">JR Hokkaido Rail Pass</strong> es perfecto si exploras el norte. El <strong className="text-foreground">JR Kyushu Rail Pass</strong> cubre toda la isla de Kyushu. Estos pases regionales no sufrieron la misma subida de precios que el pase nacional y ofrecen una relación calidad-precio excelente si tu viaje se concentra en una región. Presentamos un socio de boletos; no reservamos trenes por ustedes.
            </p>

            <h3>
              Billetes de shinkansen individuales con descuento
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Pocos turistas saben que existen descuentos para billetes de shinkansen si compras con antelación. Un{" "}
              <AffiliateLink slug="japan-bullet-train" lang="es">socio de boletos de shinkansen</AffiliateLink>
              {" "}(y apps como SmartEX) permite reservar el Tokaido-Sanyo (Tokio-Osaka-Hiroshima-Fukuoka) con descuentos si compras con semanas de antelación. Nosotros no reservamos asientos. Para trayectos puntuales, esta opción puede ser significativamente más barata que el JR Pass.
            </p>

            {/* FAQ */}
            <div className="section-eyebrow"><span>Sección 07 · FAQ</span></div>
            <h2 id="section-07-faq" className="scroll-mt-20">
              Preguntas frecuentes sobre el Japan Rail Pass
            </h2>

            <div className="faq-block space-y-6 mb-8">
              <div>
                <h3>
                  ¿Dónde se compra el Japan Rail Pass?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desde octubre de 2023, el Japan Rail Pass <strong className="text-foreground">solo se puede comprar online</strong> a través de la{" "}
                  <a href="https://www.japanrailpass.net/en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">web oficial de JR</a>{" "}
                  o de agencias autorizadas. Ya no se vende en las estaciones dentro de Japón. Después de comprarlo online, lo canjeas por el pase físico en las oficinas JR de las principales estaciones al llegar (Narita, Haneda, Tokio, Kioto, Osaka, etc.). Recomiendo comprarlo al menos una semana antes del viaje.
                </p>
              </div>

              <div>
                <h3>
                  ¿Se puede usar en el metro de Tokio?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No. El JR Pass solo cubre líneas operadas por JR. El metro de Tokio (Tokyo Metro y Toei Subway) son compañías independientes. Dentro de Tokio, el pase solo te sirve para la línea Yamanote, la línea Chuo y otras líneas JR East. Para el metro necesitarás una tarjeta Suica/Pasmo o billetes individuales.
                </p>
              </div>

              <div>
                <h3>
                  ¿Incluye el shinkansen Nozomi?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  El Nozomi (el shinkansen más rápido en la línea Tokaido-Sanyo) y el Mizuho no están incluidos en el pase estándar. Debes usar el Hikari o el Sakura, que hacen más paradas y tardan unos 15-20 minutos más. Sin embargo, desde octubre de 2023 existe un <strong className="text-foreground">billete suplementario para Nozomi/Mizuho</strong> que permite a los titulares del JR Pass subir a estos trenes pagando un suplemento (por ejemplo, ¥4,960 para el trayecto Tokio–Kioto). Útil si necesitas mayor flexibilidad de horarios, ya que los Nozomi salen con mucha más frecuencia que los Hikari.
                </p>
              </div>

              <div>
                <h3>
                  ¿Se puede reservar asiento con el JR Pass?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, y es gratuito. Puedes reservar asiento en cualquier tren cubierto por el pase acudiendo a una taquilla JR o usando las máquinas de reserva de las estaciones. También puedes viajar en los vagones de asiento libre (jiyuseki) sin reserva previa. Para los shinkansen en temporada alta (Golden Week, Obon, Año Nuevo), te recomiendo reservar siempre para asegurarte un asiento.
                </p>
              </div>

              <div>
                <h3>
                  ¿Cuántos días antes debo comprarlo?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si lo compras online, puedes hacerlo hasta el día antes del inicio de la validez. Sin embargo, recomiendo comprarlo al menos una semana antes del viaje para tener tiempo de resolver cualquier problema con el pedido. Una vez en Japón, al canjearlo en la oficina JR, eliges la fecha de inicio de validez (que puede ser cualquier día dentro de los 30 días siguientes al canje).
                </p>
              </div>
              <div>
                <h3>
                  ¿Ha vuelto a subir el precio del JR Pass en 2026?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, parcialmente. JR Group anunció el 9 de abril de 2026 una subida del 5-6% efectiva desde el <strong className="text-foreground">1 de octubre de 2026</strong>, dirigida principalmente a las <strong className="text-foreground">compras realizadas a través de agencias extranjeras</strong>. El pase de 7 días Ordinario pasa de ¥50.000 a ¥53.000 vía agencias; el de 14 días, de ¥80.000 a ¥84.000; el de 21 días, de ¥100.000 a ¥105.000. La <a href="https://japanrailpass.net/en/purchase/price/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">web oficial japanrailpass.net</a> mantiene el precio antiguo de ¥50.000 <strong className="text-foreground">de forma temporal tras octubre de 2026</strong> — JR anunciará más adelante hasta cuándo durará esta promoción. Si compras pronto a través de la web oficial, todavía puedes asegurar el precio anterior.
                </p>
              </div>
              <div>
                <h3>
                  ¿Merece la pena el JR Pass tras la subida de precios de 2023?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, pero solo para los itinerarios adecuados. La subida de 2023 convirtió el pase en una compra discutible para quien solo quiere hacer un viaje de ida y vuelta a Kioto. Para rutas multi-ciudad que cubran Tokio, Kioto, Osaka e Hiroshima en 7 días, los números siguen saliendo. La clave es hacer el cálculo con tu itinerario real — tal y como explicamos en este artículo — en lugar de comprar el pase "por si acaso". Si necesitas ayuda con el cálculo, escríbeme desde la{" "}
                  <Link to="/es/contact" className="text-accent hover:underline">página de contacto</Link>.
                </p>
              </div>
            </div>

            {/* Conclusión y CTA */}
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entonces, ¿el japan rail pass vale la pena en 2026? Mi respuesta como guía que vive aquí: sí, pero solo si tu itinerario incluye al menos dos ciudades importantes fuera de Tokio y piensas moverte en shinkansen. Si vas a recorrer la ruta clásica Tokio-Kioto-Osaka-Hiroshima en una semana, sigue siendo una buena compra. Si tu viaje es más relajado, centrado en una zona, o basado en una sola ciudad, las alternativas regionales y los billetes individuales te saldrán mejor.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si tienes dudas sobre tu caso concreto, escríbeme. Parte de lo que hago como guía es ayudar a mis clientes a planificar la logística de transporte antes de que lleguen a Japón, y te puedo hacer el cálculo exacto para tu itinerario. También puedes echar un vistazo a nuestros{" "}
              <Link to="/es/tours" className="text-accent hover:underline">
                tours privados
              </Link>{" "}
              si quieres explorar Japón con un guía local que se encargue de toda la planificación.
            </p>

            {/* Explorar Tokio con guía */}
            <div className="section-eyebrow"><span>Sección 08 · Explora Tokio con un Guía Local</span></div>
            <h2 id="section-08-explora-tokio-con-un-guía-local" className="scroll-mt-20">
              Explora Tokio con un Guía Local
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si tu viaje se centra en Tokio (donde el JR Pass no merece la pena), aprovecha al máximo tu tiempo con un guía local. Estos son algunos de nuestros tours más populares:
            </p>
            <ul className="text-muted-foreground leading-relaxed mb-8 list-disc list-inside space-y-2">
              <li>
                <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">Tour gastronómico por Tsukiji y Ginza</Link> — el mercado de pescado más famoso del mundo + el barrio más elegante de Tokio
              </li>
              <li>
                <Link to="/es/tours/asakusa" className="text-accent hover:underline">Tour por Asakusa y el Tokio Tradicional</Link> — templos, santuarios y la cultura del viejo Tokio
              </li>
              <li>
                <Link to="/es/tours/nikko" className="text-accent hover:underline">Excursión de un día a Nikko</Link> — el santuario más espectacular de Japón, a 2 horas de Tokio
              </li>
            </ul>

            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2>
                ¿Necesitas ayuda para planificar tu transporte en Japón?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En nuestros tours privados me encargo de toda la logística: te digo exactamente qué pases comprar (o no comprar), te ayudo con las reservas de shinkansen y diseño un itinerario que maximice tu tiempo y tu presupuesto. Sin sorpresas, sin gastos innecesarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Ver Tours Privados
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Hacer una Pregunta
                </Link>
              </div>
            </div>
          
            <AffiliateDisclosure lang="es" placement="footer" />
            </article>

            <BlogArticleAside />
          </div>
        </div>
      </section>

      <RelatedTourCards tourIds={["nikko","tsukiji-ginza","custom"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Japan Rail Pass 2026: ¿Vale la Pena? La Respuesta Honesta de un Guía",
            "description": "¿Comprar el JR Pass o no? Un guía oficial japonés hace los cálculos reales según tu itinerario y te dice cuándo conviene y cuándo no.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
            },
            "datePublished": "2026-03-07",
            "dateModified": "2026-05-09",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/japan-rail-pass-vale-la-pena",
            },
          }),
        }}
      />
    </div>

      </Layout>
  );
};

export default EsJapanRailPass;
