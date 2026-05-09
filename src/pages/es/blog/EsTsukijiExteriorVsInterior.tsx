import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsTsukijiExteriorVsInterior = () => {
  return (
    <Layout>
      <SEO
        title="Tsukiji Exterior vs Interior 2026: ¿Cuál Está Abierto?"
        description="El mercado interior se trasladó a Toyosu en 2018; el mercado exterior con 460+ puestos sigue en Tsukiji. Un guía con licencia explica qué cambió y dónde ir hoy."
        canonicalPath="/es/blog/tsukiji-mercado-exterior-vs-interior"
        hreflang={[
          { lang: "en", path: "/blog/tsukiji-outer-vs-inner-market" },
          { lang: "es", path: "/es/blog/tsukiji-mercado-exterior-vs-interior" },
          { lang: "x-default", path: "/blog/tsukiji-outer-vs-inner-market" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Tsukiji Exterior vs Interior" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/tsukiji-outer-market-entrance.webp"
          imageAlt="Entrada al Mercado Exterior de Tsukiji en 2026 — sigue abierto y lleno de vida"
          eyebrow="Guías Gastronómicas · Tokio"
          title="Mercado Exterior vs Interior de Tsukiji: ¿Cuál Es la Diferencia?"
          subtitle="Un guía con licencia explica qué pasó realmente en 2018, qué sigue en Tsukiji en 2026 y qué se trasladó a Toyosu."
          date="9 de mayo de 2026"
          backHref="/es/blog"
          backLabel="Volver al Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc
                label="En esta página"
                items={[
                  { num: "01", label: "Decisión rápida", href: "#section-01-decision-rapida" },
                  { num: "02", label: "Qué era cada uno", href: "#section-02-que-era-cada-uno" },
                  { num: "03", label: "Qué cambió en 2018", href: "#section-03-que-cambio" },
                  { num: "04", label: "Comparativa lado a lado", href: "#section-04-comparativa" },
                  { num: "05", label: "Qué hay en Tsukiji hoy", href: "#section-05-tsukiji-hoy" },
                  { num: "06", label: "Mitos comunes", href: "#section-06-mitos" },
                  { num: "07", label: "FAQ", href: "#section-07-faq" },
                ]}
              />

              <article>
                <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg mb-8">
                  <p className="font-semibold text-foreground mb-2">Respuesta rápida</p>
                  <p className="text-foreground leading-relaxed">
                    El <strong>mercado interior</strong> — la planta mayorista donde estaba la subasta de atún — se trasladó fuera de Tsukiji en octubre de 2018 y hoy es el Mercado de Toyosu. El <strong>mercado exterior</strong> — los 460+ tiendas, restaurantes y puestos de comida callejera — nunca se mudó y sigue muy presente en Tsukiji en 2026. Así que cuando alguien dice hoy "Mercado de Tsukiji", casi siempre se refiere al mercado exterior, que está abierto. Cuando alguien dice "subasta de atún" o "mercado mayorista", se refiere a Toyosu, aunque algunos artículos sigan llamándolo Tsukiji.
                  </p>
                  <p className="text-muted-foreground mt-3 text-sm italic">
                    La confusión de nombres es responsable de la mitad de los malos consejos en los blogs de viaje sobre Tokio. Abajo tienes el desglose correcto: qué era cada uno, qué se mudó y qué encontrarás en Tsukiji hoy.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Casi cada semana algún cliente me pregunta: "Espera, ¿no estaba Tsukiji cerrado?" Y cada semana doy la misma respuesta: <strong>Tsukiji son dos mercados, no uno</strong>, y solo uno se mudó. La confusión existe desde 2018 y los artículos de viajes la siguen repitiendo, así que déjame aclararla bien con la situación real en 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Soy Manabu, guía con licencia nacional en Tokio. Llevo a mis clientes al Mercado Exterior de Tsukiji con regularidad y he visto la subasta de Toyosu más veces de las que puedo contar. Los dos están abiertos. Los dos son geniales. Pero ahora están en partes completamente distintas de Tokio y atienden a públicos distintos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Aquí tienes la comparativa lado a lado que ojalá más artículos de viaje contaran bien.
                </p>

                <div className="section-eyebrow"><span>Sección 01 · Decisión rápida</span></div>
                <h2 id="section-01-decision-rapida" className="scroll-mt-20">
                  Decisión rápida: ¿qué buscas en realidad?
                </h2>
                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">Para el 99% de los viajeros</p>
                    <p className="choice-title">Buscas el Mercado Exterior…</p>
                    <ul>
                      <li>Comida callejera, barras de sushi, tiendas de cuchillos, tamagoyaki — todo sigue en Tsukiji.</li>
                      <li>460+ tiendas y puestos, sin reservas.</li>
                      <li>Abierto ~5:00–14:00, cerrado domingos y ciertos miércoles.</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">Para los curiosos por la subasta</p>
                    <p className="choice-title">El "mercado interior" es ahora Toyosu…</p>
                    <ul>
                      <li>Observación de la subasta de atún (lotería, ~100 personas/día).</li>
                      <li>Planta mayorista, instalaciones modernas en isla artificial.</li>
                      <li>Estación distinta (Yurikamome "Shijo-mae").</li>
                    </ul>
                  </div>
                </div>

                <div className="section-eyebrow"><span>Sección 02 · Qué era cada uno</span></div>
                <h2 id="section-02-que-era-cada-uno" className="scroll-mt-20">
                  Qué era cada uno antes de 2018
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tsukiji nunca fue un solo mercado. Desde 1935, el barrio albergaba dos operaciones distintas que compartían la misma zona pero atendían a clientes diferentes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El <strong>mercado mayorista interior</strong> (場内市場 / <em>jōnai shijō</em>) era la planta profesional donde los mayoristas con licencia subastaban y vendían marisco al por mayor cada madrugada. Este era el Tsukiji que veías en los documentales — la subasta de atún, los carritos turret cruzando pasillos estrechos, miles de toneladas de pescado cambiando de manos antes de las 8 de la mañana. Estaba estrictamente fuera del alcance del visitante casual durante las horas punta, e incluso cuando los turistas podían observar la subasta era de forma muy controlada.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El <strong>mercado exterior</strong> (場外市場 / <em>jōgai shijō</em>) era la red densa de tiendas minoristas, restaurantes y puestos de comida callejera que fue creciendo alrededor de la operación mayorista durante décadas. Estos negocios atendían a chefs locales buscando ingredientes, vecinos haciendo la compra y visitantes en busca de sushi y marisco a precios de venta directa. El mercado exterior siempre estuvo orientado al público. Los puestos de comida, las tiendas de cuchillos, los puestos de matcha, el tamagoyaki en brocheta — todo eso era el mercado exterior.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Geográficamente, los dos mercados estaban uno al lado del otro en el barrio de Tsukiji, en el distrito de Chuo. Logísticamente, estaban entrelazados: los vendedores del exterior solían abastecerse del mercado interior cada mañana. Pero operativa y legalmente eran dos cosas distintas.
                </p>

                <div className="section-eyebrow"><span>Sección 03 · Qué cambió</span></div>
                <h2 id="section-03-que-cambio" className="scroll-mt-20">
                  Qué cambió realmente en octubre de 2018
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tras años de retrasos políticos, preocupación medioambiental por el suelo del emplazamiento de Toyosu y un debate intenso sobre cómo preservar el patrimonio de Tsukiji, el Gobierno Metropolitano de Tokio finalmente trasladó <strong>solo el mercado mayorista interior</strong> a unas instalaciones nuevas en una isla artificial en la bahía de Tokio llamada Toyosu. La mudanza ocurrió en octubre de 2018. La planta mayorista cerró en Tsukiji un sábado y reabrió en Toyosu el jueves siguiente.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="hl-gold">El mercado exterior no se mudó</span>. Sus comerciantes no tenían motivos para irse. Sus clientes — restaurantes locales, vecinos y visitantes — seguían en el barrio de Tsukiji, y Toyosu, varios kilómetros más allá en una isla artificial, habría roto esas relaciones. Así que las aproximadamente 460 tiendas del mercado exterior se quedaron exactamente donde siempre habían estado.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En los meses posteriores a la mudanza, algunos artículos de viaje publicaron titulares como "Tsukiji cierra" o "Tsukiji se muda a Toyosu". Las dos cosas son falsas. Lo que cerró fue el mercado interior. Lo que se mudó fue el mercado interior. El mercado exterior — la parte que la inmensa mayoría de turistas visitaba y recordaba — nunca cerró ni se mudó.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  De hecho, desde 2018 el mercado exterior se ha expandido ligeramente. Han abierto nuevas tiendas en los huecos dejados por negocios que sí se mudaron, y la zona se ha vuelto notablemente más amigable para visitantes con mejor señalización, menús en inglés y centros de información. Los comerciantes con los que hablo hoy dicen que el mercado exterior post-2018 está, en muchos sentidos, más fuerte que antes.
                </p>

                <div className="section-eyebrow"><span>Sección 04 · Comparativa</span></div>
                <h2 id="section-04-comparativa" className="scroll-mt-20">
                  Comparativa lado a lado
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="text-left p-4 font-serif font-medium text-foreground">Característica</th>
                        <th className="text-left p-4 font-serif font-medium text-foreground">Tsukiji Mercado Exterior</th>
                        <th className="text-left p-4 font-serif font-medium text-foreground">"Mercado Interior" (ahora Toyosu)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4 font-medium text-foreground">Estado (2026)</td>
                        <td className="p-4 text-muted-foreground">Sigue en Tsukiji, abierto</td>
                        <td className="p-4 text-muted-foreground">Trasladado a Toyosu en oct 2018</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Tipo</td>
                        <td className="p-4 text-muted-foreground">Tiendas minoristas + comida callejera</td>
                        <td className="p-4 text-muted-foreground">Mercado mayorista + planta visitantes</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Puestos</td>
                        <td className="p-4 text-muted-foreground">~460 tiendas y puestos</td>
                        <td className="p-4 text-muted-foreground">Cientos de mayoristas; ~40 restaurantes para visitantes</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Horario</td>
                        <td className="p-4 text-muted-foreground">~5:00–14:00 (varía por tienda)</td>
                        <td className="p-4 text-muted-foreground">5:00–17:00, lun–sáb</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Días cerrados</td>
                        <td className="p-4 text-muted-foreground">Domingos y ciertos miércoles</td>
                        <td className="p-4 text-muted-foreground">Domingos, festivos, ciertos miércoles</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Subasta de atún</td>
                        <td className="p-4 text-muted-foreground">No (nunca la tuvo)</td>
                        <td className="p-4 text-muted-foreground">Sí — en Toyosu, solo con lotería</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Reserva</td>
                        <td className="p-4 text-muted-foreground">No</td>
                        <td className="p-4 text-muted-foreground">Sí (lotería de subasta), no para restaurantes</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Acceso</td>
                        <td className="p-4 text-muted-foreground">Estación Tsukiji (línea Hibiya) — 2 min</td>
                        <td className="p-4 text-muted-foreground">Estación Shijo-mae (línea Yurikamome)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Qué se hace</td>
                        <td className="p-4 text-muted-foreground">Comer, mirar tiendas, pasear</td>
                        <td className="p-4 text-muted-foreground">Mirar a través del cristal; comer sushi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="section-eyebrow"><span>Sección 05 · Tsukiji hoy</span></div>
                <h2 id="section-05-tsukiji-hoy" className="scroll-mt-20">
                  Qué encontrarás hoy en Tsukiji
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Entrar al Mercado Exterior de Tsukiji en 2026 no es notablemente distinto a entrar en 2017. Los callejones estrechos son los mismos. Los más de 460 puestos siguen ahí. El olor a parrillas de carbón, el ritmo del cuchillo descomponiendo un lomo de atún, el aroma dulce y caramelizado del tamagoyaki — todo igual. Encontrarás:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Comida callejera y barras de pie:</strong> tamagoyaki en brocheta (Yamachou para el dulce, Shouro para el salado), vieiras a la parrilla con mantequilla de soja, uni fresco en vasitos, puestos de ostras, brochetas de wagyu y barras de sushi de pie donde 8–10 piezas cuestan ¥2.000–3.000.
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Sushi y donburi sentado:</strong> una docena de restaurantes que van desde menús de almuerzo sólidos por ¥1.500 hasta menús a elección del chef por ¥5.000+. Las colas en los locales famosos pueden ser de 30–60 min; los restaurantes menos conocidos a una manzana de la calle principal suelen aceptar entrada directa.
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Cuchillos, cerámica, productos secos:</strong> las tiendas de cuchillos de Tsukiji abastecen a las cocinas profesionales de Tokio y son mundialmente conocidas por sus hojas de acero japonés forjadas a mano. También encontrarás laca, encurtidos tradicionales, katsuobushi (copos de bonito) seco, kombu (alga) y té japonés.
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Centro de información (Plat Tsukiji):</strong> el punto oficial de bienvenida, útil para coger un mapa actualizado y confirmar los miércoles que el mercado cierra.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  El mejor momento para visitarlo es alrededor de las 8:00 entre semana (martes, jueves o viernes funcionan mejor). Las parrillas están encendidas, los puestos completamente montados y las peores aglomeraciones de comida aún no han llegado. Hacia las 11:00 los callejones se espesan; hacia las 13:00 muchos puestos empiezan a cerrar. Para una guía más detallada, mira mi <Link to="/es/blog/guia-tsukiji" className="text-accent hover:underline">guía completa de Tsukiji</Link>.
                </p>

                <div className="section-eyebrow"><span>Sección 06 · Mitos comunes</span></div>
                <h2 id="section-06-mitos" className="scroll-mt-20">
                  Mitos que aclaro casi cada semana en los tours
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hay tres mitos que salen casi semanalmente con mis clientes y conviene desmontarlos aquí.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">"Tsukiji está cerrado."</strong> Falso. La operación mayorista cerró en Tsukiji y se trasladó a Toyosu en octubre de 2018. El mercado exterior con 460+ tiendas sigue en Tsukiji y muy abierto. Si tu artículo de viaje dice "Tsukiji está cerrado", está repitiendo un titular de 2018 que ya entonces era engañoso.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">"Hay que madrugar a las 4 para ver Tsukiji."</strong> Ese consejo era para la antigua planta mayorista que ya no existe. El mercado exterior hoy tiene su pico entre las 8:00 y las 10:00. Puedes presentarte a las 9:00 y vivir Tsukiji por completo. La alarma antes del amanecer solo es relevante ya si vas a la subasta de Toyosu.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">"La subasta de atún se mudó al mercado exterior de Tsukiji."</strong> No. La subasta nunca estuvo en el exterior. Las subastas solo ocurren en mercados mayoristas, y el único mercado mayorista de pescado de Tokio es ahora Toyosu. El exterior es una calle minorista de comida y siempre lo ha sido.
                </p>

                <div className="bg-secondary/50 rounded-lg p-8 mt-12 cta-block">
                  <h2 className="text-foreground mb-4 !text-[1.75rem] md:!text-[2rem] !leading-[1.2]">
                    ¿Quieres un guía que sepa leer los menús y encontrar los mejores puestos?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    En mi tour Tsukiji y Ginza te llevo por el mercado exterior como yo lo recorro — los mejores puestos, sin trampas para turistas y con las pequeñas historias de los vendedores que no saldrán en ninguna guía. Después caminamos 15 minutos hasta Ginza para el contraste perfecto.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/es/tours/tsukiji-ginza" className="btn-accent">
                      Tour Tsukiji y Ginza
                    </Link>
                    <Link to="/es/contact" className="btn-outline">
                      Contactar
                    </Link>
                  </div>
                </div>

                <div className="mt-16 faq-block">
                  <div className="section-eyebrow"><span>Sección 07 · FAQ</span></div>
                  <h2 id="section-07-faq" className="scroll-mt-20">Preguntas Frecuentes</h2>
                  <div className="faq-block space-y-8">
                    <div>
                      <h3 className="scroll-mt-20">¿El mercado interior de Tsukiji sigue abierto?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        No. El mercado mayorista interior — la parte de Tsukiji donde estaba la subasta de atún — cerró en octubre de 2018 y reabrió esa misma semana como Mercado de Toyosu. Toyosu es ahora el mercado mayorista oficial de pescado de Tokio. El mercado exterior, en cambio, nunca cerró y sigue en Tsukiji en 2026.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">¿Dónde está hoy la subasta de atún?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        En el Mercado de Pescado de Toyosu, en una isla artificial de la bahía de Tokio. Para verla necesitas ganar una lotería online mensual — solo se admiten unas 100 personas al día y la observación se hace desde una plataforma con cristal alrededor de las 5:30. No hay subasta de atún en Tsukiji desde 2018.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">¿Puedo seguir comiendo sushi en Tsukiji?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Sí — y la escena de sushi es una de las mejores partes del mercado exterior. Las barras de sushi de pie sirven pescado excelente a precios de venta directa (¥2.000–3.000 por 8–10 piezas), y hay restaurantes para sentarse con menús a elección del chef hasta ¥5.000+. Varios sushiya del exterior tienen reputación de décadas y aceptan entrada directa fuera de las horas punta.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">¿Tsukiji o Toyosu?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Para la mayoría de viajeros, el Mercado Exterior de Tsukiji es la mejor experiencia: más variedad gastronómica, más ambiente y sin reserva. Toyosu es la opción acertada si específicamente quieres la subasta de atún o un desayuno serio de sushi. Si tienes tiempo para los dos, la combinación fuerte es subasta de Toyosu al amanecer → Mercado Exterior de Tsukiji para desayunar → Ginza para ir de tiendas. Mira mi <Link to="/es/blog/tsukiji-vs-toyosu" className="text-accent hover:underline">comparativa Tsukiji vs Toyosu</Link> y mi guía dedicada <Link to="/es/blog/toyosu-vs-tsukiji-exterior" className="text-accent hover:underline">Toyosu vs Tsukiji Exterior</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-12">
                  Última actualización: mayo de 2026
                </p>
              </article>

              <BlogArticleAside
                guideNoteLabel="Nota del guía"
                glanceLabel="De un vistazo"
                guideNote="Cuando un cliente dice 'Tsukiji', asumo que se refiere al mercado exterior — la parte que sigue en Tsukiji y la que de verdad puedes recorrer y comer."
                glance={[
                  { label: "Mercado exterior", value: "Sigue en Tsukiji, abierto" },
                  { label: "Mercado interior", value: "Ahora Toyosu (desde 2018)" },
                  { label: "Subasta de atún", value: "Solo en Toyosu (lotería)" },
                  { label: "Mejor hora", value: "~8:00 entre semana" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      <RelatedTourCards tourIds={["tsukiji-ginza"]} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Mercado Exterior vs Interior de Tsukiji: ¿Cuál Es la Diferencia?",
        description: "El mercado interior se trasladó a Toyosu en octubre de 2018; el mercado exterior con 460+ puestos sigue en Tsukiji. Un guía con licencia explica qué cambió.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-05-09", dateModified: "2026-05-09",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/tsukiji-mercado-exterior-vs-interior" },
        inLanguage: "es"
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿El mercado interior de Tsukiji sigue abierto?", acceptedAnswer: { "@type": "Answer", text: "No. El mercado mayorista interior cerró en octubre de 2018 y reabrió esa misma semana como Mercado de Toyosu. Toyosu es ahora el mercado mayorista oficial de pescado de Tokio. El mercado exterior nunca cerró y sigue en Tsukiji en 2026." }},
          { "@type": "Question", name: "¿Dónde está hoy la subasta de atún?", acceptedAnswer: { "@type": "Answer", text: "En el Mercado de Pescado de Toyosu, en una isla artificial de la bahía de Tokio. Para verla necesitas ganar una lotería online mensual; solo se admiten unas 100 personas al día y la observación se hace desde una plataforma con cristal alrededor de las 5:30." }},
          { "@type": "Question", name: "¿Puedo seguir comiendo sushi en Tsukiji?", acceptedAnswer: { "@type": "Answer", text: "Sí — la escena de sushi es una de las mejores partes del mercado exterior. Las barras de sushi de pie sirven pescado excelente (¥2.000–3.000 por 8–10 piezas), y hay restaurantes con menús del chef hasta ¥5.000+." }},
          { "@type": "Question", name: "¿Tsukiji o Toyosu?", acceptedAnswer: { "@type": "Answer", text: "Para la mayoría de viajeros, el Mercado Exterior de Tsukiji es la mejor experiencia: más variedad gastronómica, más ambiente y sin reserva. Toyosu es la opción acertada si quieres la subasta de atún o un desayuno serio de sushi. La combinación fuerte: Toyosu al amanecer + Tsukiji exterior para desayunar." }}
        ]
      })}} />
    </Layout>
  );
};

export default EsTsukijiExteriorVsInterior;
