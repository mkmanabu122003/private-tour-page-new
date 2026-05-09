import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsToyosuVsUenoMercadoPescado = () => {
  return (
    <Layout>
      <SEO
        title="Toyosu vs Mercado Ueno 2026: ¿Qué Mercado de Pescado en Tokio?"
        description="Toyosu (mercado mayorista real, subasta de atún) vs Ameyoko en Ueno (calle abierta con puestos de marisco e izakayas). Un guía con licencia compara ambos."
        canonicalPath="/es/blog/toyosu-vs-ueno-mercado-pescado"
        hreflang={[
          { lang: "en", path: "/blog/toyosu-vs-ueno-fish-market" },
          { lang: "es", path: "/es/blog/toyosu-vs-ueno-mercado-pescado" },
          { lang: "x-default", path: "/blog/toyosu-vs-ueno-fish-market" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Toyosu vs Mercado Ueno" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/toyosu-senkyaku-banrai.webp"
          imageAlt="Toyosu y Ameyoko de Ueno — dos formas muy distintas de ver el marisco en Tokio"
          eyebrow="Guías Gastronómicas · Tokio"
          title="Toyosu vs Mercado de Ueno: ¿Qué Mercado de Pescado de Tokio Visitar?"
          subtitle="Comparativa honesta de un guía local entre el mercado mayorista de Toyosu y la calle abierta Ameyoko de Ueno, con horarios, precios y para quién es cada uno."
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
                  { num: "02", label: "Qué es cada uno", href: "#section-02-que-es-cada-uno" },
                  { num: "03", label: "Comparativa lado a lado", href: "#section-03-comparativa" },
                  { num: "04", label: "Cuándo elegir Toyosu", href: "#section-04-cuando-toyosu" },
                  { num: "05", label: "Cuándo elegir Ameyoko", href: "#section-05-cuando-ameyoko" },
                  { num: "06", label: "Cómo llegar", href: "#section-06-como-llegar" },
                  { num: "07", label: "FAQ", href: "#section-07-faq" },
                ]}
              />

              <article>
                <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg mb-8">
                  <p className="font-semibold text-foreground mb-2">Respuesta rápida</p>
                  <p className="text-foreground leading-relaxed">
                    No son el mismo tipo de sitio. <strong>Toyosu es el mercado mayorista de pescado real de Tokio</strong> — ahí ocurre la subasta de atún, ahí se abastecen los restaurantes y ahí vas si quieres ver la cadena de suministro en acción. <strong>Ameyoko en Ueno no es un mercado de pescado en el sentido técnico.</strong> Es una calle comercial al aire libre con más de 500 tiendas que va por debajo de las vías del JR entre Ueno y Okachimachi, donde el marisco es solo una de muchas categorías. Elige Toyosu para la subasta de atún o un desayuno serio de sushi. Elige Ameyoko para picar marisco casual, ir de izakayas y comida callejera barata en un ambiente totalmente distinto.
                  </p>
                  <p className="text-muted-foreground mt-3 text-sm italic">
                    La mayoría de las guías de viaje los presenta como si fueran alternativas. No lo son. Abajo verás qué es cada uno realmente — y por qué, según lo que hayas venido a ver a Tokio, igual te interesa hacer los dos.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Cuando un cliente me pregunta si debe "hacer el mercado de pescado en Ueno o en Toyosu", siempre paro y le pregunto qué se imagina viendo. Porque <strong>Ueno no tiene un mercado de pescado en el mismo sentido que Toyosu</strong>. Lo que la gente suele tener en la cabeza es Ameyoko — abreviatura de Ameya-Yokocho — una famosa calle comercial al aire libre que incluye puestos de marisco pero que en realidad es una calle-de-todo, no una operación mayorista.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Soy Manabu, guía con licencia nacional, y llevo a grupos por las dos zonas. Sirven necesidades completamente distintas. Si tu imagen de "mercado de pescado" viene de los documentales sobre subastas de atún y caos mayorista al amanecer, te refieres a Toyosu. Si tu imagen es comida callejera, calamares secos, ostras frescas en una barra de pie, y vendedores gritando precios bajo las vías del tren, te refieres a Ameyoko.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Aquí tienes la comparativa que les doy a mis clientes — qué es cada cosa, para quién es, y si puedes meter los dos en el mismo día en Tokio.
                </p>

                <div className="section-eyebrow"><span>Sección 01 · Decisión rápida</span></div>
                <h2 id="section-01-decision-rapida" className="scroll-mt-20">
                  Decisión rápida: ¿cuál encaja con tu viaje?
                </h2>
                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">Energía mayorista, subastas reales</p>
                    <p className="choice-title">Elige Toyosu si…</p>
                    <ul>
                      <li>Específicamente quieres ver la subasta de atún (solicita la lotería un mes antes).</li>
                      <li>Buscas un desayuno serio de sushi en un restaurante con verdadero suministro mayorista.</li>
                      <li>Eres profesional de la gastronomía o un viajero curioso por la industria.</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">Energía callejera, picar casual</p>
                    <p className="choice-title">Elige Ameyoko si…</p>
                    <ul>
                      <li>Quieres comida callejera, ostras frescas en barra y rondas de izakayas.</li>
                      <li>Ya estás explorando Ueno (el parque, los museos, el estanque Shinobazu).</li>
                      <li>Buscas marisco económico y no te importan las cadenas mayoristas ni las subastas.</li>
                    </ul>
                  </div>
                </div>

                <div className="section-eyebrow"><span>Sección 02 · Qué es cada uno</span></div>
                <h2 id="section-02-que-es-cada-uno" className="scroll-mt-20">
                  Qué es cada mercado realmente
                </h2>

                <h3 className="scroll-mt-20">Toyosu — la operación mayorista de verdad</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Toyosu abrió en octubre de 2018 como la nueva sede del antiguo mercado mayorista interior de Tsukiji. Está en una isla artificial de la bahía de Tokio y es, por volumen, uno de los mercados mayoristas de pescado más grandes del mundo. Aquí se abastecen los restaurantes, hoteles y pescaderías serias de Tokio. La famosa subasta de atún — atunes rojos congelados en filas, subastadores cantando pujas a toda velocidad antes del amanecer — ocurre aquí, no en Tsukiji y desde luego no en Ueno.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Como visitante experimentas Toyosu a través de pasillos cubiertos con paredes de cristal por encima de la planta mayorista, más unos 40 restaurantes en la planta de visitantes. <span className="hl-gold">Ver la subasta requiere ganar una lotería mensual</span> que se solicita por internet aproximadamente un mes antes — solo se admiten unas 100 personas al día y la observación se hace desde una plataforma con cristal alrededor de las 5:30. También puedes ir en horario normal (5:00 a 17:00, de lunes a sábado) sin lotería y ver la zona mayorista intermedia desde los pasillos. En febrero de 2024 abrió un nuevo complejo de visitantes llamado <em>Senkyaku Banrai</em> al otro lado de la calle, con alrededor de 70 restaurantes y tiendas, además de un onsen.
                </p>

                <h3 className="scroll-mt-20">Ameyoko de Ueno — calle abierta, no mercado de pescado</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ameya-Yokocho — abreviado Ameyoko — es una calle comercial al aire libre de unos 500 metros que recorre el bajo de las vías elevadas del JR entre las estaciones de Ueno y Okachimachi. Tiene aproximadamente entre 400 y 500 tiendas y puestos, según cómo cuentes, y la mezcla es muy diferente a cualquier cosa que veas en Toyosu. Encontrarás <strong>marisco</strong> (pescado fresco, calamares secos, ostras por unidad, cangrejo) justo al lado de <strong>tiendas de ropa</strong>, frutas secas, comestibles coreanos, zapatillas, cosméticos, dulces e izakayas. No es un "mercado de pescado" en ningún sentido riguroso. Es una calle comercial general donde el marisco resulta ser una categoría fuerte.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La mayoría de las tiendas de Ameyoko abre alrededor de las 10:00 y cierra hacia las 19:00–20:00, aunque algunos pescaderos abren antes y los izakayas siguen abiertos hasta más tarde. Muchas tiendas cierran ciertos miércoles, pero cada negocio fija su propio calendario, así que la calle como conjunto está abierta todos los días con algunos huecos. El ambiente es ruidoso, abarrotado y ligeramente caótico, especialmente los fines de semana y durante el frenesí de fin de año en diciembre, cuando se convierte en una de las escenas comerciales más fotografiadas de Tokio.
                </p>

                <div className="section-eyebrow"><span>Sección 03 · Comparativa</span></div>
                <h2 id="section-03-comparativa" className="scroll-mt-20">
                  Comparativa lado a lado
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="text-left p-4 font-serif font-medium text-foreground">Característica</th>
                        <th className="text-left p-4 font-serif font-medium text-foreground">Toyosu</th>
                        <th className="text-left p-4 font-serif font-medium text-foreground">Ameyoko (Ueno)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4 font-medium text-foreground">Tipo</td>
                        <td className="p-4 text-muted-foreground">Mercado mayorista + planta de visitantes</td>
                        <td className="p-4 text-muted-foreground">Calle comercial al aire libre</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Mejor para</td>
                        <td className="p-4 text-muted-foreground">Subasta de atún, desayuno de sushi</td>
                        <td className="p-4 text-muted-foreground">Comida callejera, izakaya, marisco casual</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Número de puestos</td>
                        <td className="p-4 text-muted-foreground">~40 restaurantes en planta visitantes</td>
                        <td className="p-4 text-muted-foreground">~400–500 tiendas y puestos</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Horario</td>
                        <td className="p-4 text-muted-foreground">5:00–17:00, lun–sáb (subasta 5:30)</td>
                        <td className="p-4 text-muted-foreground">10:00–19:00/20:00 (varía por tienda)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Días cerrados</td>
                        <td className="p-4 text-muted-foreground">Domingos, festivos, ciertos miércoles</td>
                        <td className="p-4 text-muted-foreground">Abierta a diario; algunas tiendas cierran miércoles</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">¿Reserva?</td>
                        <td className="p-4 text-muted-foreground">Sí — lotería de subasta; no para restaurantes</td>
                        <td className="p-4 text-muted-foreground">No</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Ambiente</td>
                        <td className="p-4 text-muted-foreground">Moderno, limpio, con cristales</td>
                        <td className="p-4 text-muted-foreground">Ruidoso, caótico, bajo las vías</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Coste típico</td>
                        <td className="p-4 text-muted-foreground">Sushi ¥2.000–5.000+</td>
                        <td className="p-4 text-muted-foreground">Aperitivos ¥300–1.500; izakaya ¥2.000+</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Acceso</td>
                        <td className="p-4 text-muted-foreground">Yurikamome "Shijo-mae" (pasarela cubierta)</td>
                        <td className="p-4 text-muted-foreground">JR Ueno o Okachimachi (1–2 min andando)</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Tiempo necesario</td>
                        <td className="p-4 text-muted-foreground">1,5–2,5 h</td>
                        <td className="p-4 text-muted-foreground">45 min–1,5 h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="section-eyebrow"><span>Sección 04 · Cuándo elegir Toyosu</span></div>
                <h2 id="section-04-cuando-toyosu" className="scroll-mt-20">
                  Cuándo Toyosu tiene más sentido
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Toyosu es la elección correcta cuando específicamente quieres ver cómo se mueve el marisco de Tokio antes de llegar a tu plato. La subasta es realmente impresionante — filas de atunes rojos congelados, cada uno potencialmente con un valor de decenas de miles de dólares, vendidos en pujas de pocos segundos — pero hay que planificarla. Solicitas la lotería por internet con un mes de antelación. Solo entran unas 100 personas al día. Si no te toca, puedes igualmente visitar el mercado en horario normal y observar la zona mayorista intermedia desde los pasillos acristalados, que es interesante pero no es el espectáculo principal.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La otra razón para ir a Toyosu es el sushi. Varios restaurantes de la planta de visitantes vienen del antiguo mercado interior de Tsukiji y tienen reputación de décadas. Las colas para los nombres famosos empiezan antes de las 7 de la mañana y pueden durar más de una hora. Cuenta con ¥2.000 para un chirashi básico hasta ¥5.000+ para un menú a elección del chef. El sushi es excelente. La barrera son la cola y el madrugón.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Lo que Toyosu no te da es intimidad sensorial. El recorrido del visitante está pensado para la higiene y la eficiencia: barreras de cristal, pasillos señalizados, sin ocasión de hablar con vendedores ni picar de un puesto a otro. Si viniste a Tokio esperando "mercado de pescado = caos y degustación", esa no es la experiencia Toyosu. Esa es la experiencia <Link to="/es/blog/guia-tsukiji" className="text-accent hover:underline">Tsukiji Mercado Exterior</Link> — una tercera opción que muchos viajeros pasan por alto al comparar Toyosu y Ueno.
                </p>

                <div className="section-eyebrow"><span>Sección 05 · Cuándo elegir Ameyoko</span></div>
                <h2 id="section-05-cuando-ameyoko" className="scroll-mt-20">
                  Cuándo Ameyoko tiene más sentido
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ameyoko es la elección correcta cuando no quieres planificar, no quieres levantarte a las 4 de la mañana y no te importa si el pescado salió esa misma mañana de un mercado mayorista "de verdad". Es informal, está a un paseo de cualquier parada importante de la línea Yamanote, y se combina de forma natural con cualquier otra cosa que estés haciendo en Ueno — el parque, el Museo Nacional, el estanque Shinobazu o un paseo hasta Yanaka.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mi secuencia habitual en Ameyoko con clientes: unas ostras en una pescadería con barra estilo standing-bar, una brocheta de vieiras a la parrilla, a veces un bol de chirashi fresco en un sitio tachigui (sushi de pie), y una cerveza en uno de los izakayas bajo las vías donde acabas en la misma barra que desconocidos. El gasto total suele rondar los ¥3.000–5.000 por persona y la parada entera dura menos de 90 minutos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La pega es que Ameyoko no es específicamente un mercado de pescado. Verás puestos de marisco, pero también pasarás junto a tiendas de zapatillas y comestibles coreanos y un señor vendiendo mango seco. A algunos viajeros esa mezcla les encanta. Otros salen pensando "esto no era lo que me prometieron". Si estás reservando un vuelo específicamente para ver un mercado de pescado en Tokio, Ameyoko sola te decepcionará. Si ya estás en Ueno y quieres una calle divertida para picar con mucho marisco, es perfecta.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Una última nota honesta: Ameyoko a finales de diciembre (la avalancha de compras de fin de año) es una de las escenas más fotografiadas de Tokio. Si por casualidad estás en la ciudad entre el 27 y el 31 de diciembre, la energía se duplica y los pescaderos están en su punto más ruidoso y teatral. Merece el desvío solo por el ambiente.
                </p>

                <div className="section-eyebrow"><span>Sección 06 · Cómo llegar</span></div>
                <h2 id="section-06-como-llegar" className="scroll-mt-20">
                  Cómo llegar a cada uno
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Toyosu</strong> se llega más fácilmente por la línea Yurikamome — bájate en la estación Shijo-mae, y la entrada al mercado está conectada por pasarelas peatonales cubiertas directamente desde los tornos. No tienes que salir al exterior. Desde el centro de Tokio, se transborda al Yurikamome en la estación de Shimbashi. Desde la mayoría de hoteles céntricos, el trayecto puerta a puerta es de 30–40 minutos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A <strong>Ameyoko</strong> se llega desde la estación JR de Ueno (salida Hirokoji) o desde la estación JR Okachimachi (salida norte) — ambas en las líneas Yamanote y Keihin-Tohoku. El paseo desde cualquiera de las dos estaciones hasta Ameyoko es de menos de 2 minutos. Desde el centro de Tokio, puerta a puerta son 15–25 minutos según el hotel.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Hacer los dos en el mismo día es posible pero poco eficiente: Toyosu queda al sureste, Ameyoko al norte, y la tarde natural en la zona de Ueno viene tras una mañana en Toyosu. Una combinación más práctica para la mayoría de viajeros es <strong>subasta de Toyosu al amanecer → Mercado Exterior de Tsukiji para desayunar → Ginza para ir de tiendas</strong>, dejando Ueno/Ameyoko para otro día.
                </p>

                <div className="bg-secondary/50 rounded-lg p-8 mt-12 cta-block">
                  <h2 className="text-foreground mb-4 !text-[1.75rem] md:!text-[2rem] !leading-[1.2]">
                    ¿Quieres un guía que recorra contigo la escena gastronómica de Tokio?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    En mis tours privados adapto la mañana a lo que de verdad quieres — un desayuno por el Mercado Exterior de Tsukiji, una noche casual estilo Ameyoko por izakayas o la experiencia completa de la subasta de Toyosu antes del amanecer. Yo me ocupo del idioma, las colas y la etiqueta local para que tú te concentres en comer bien.
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
                      <h3 className="scroll-mt-20">¿Hay un mercado de pescado de verdad en Ueno?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        En el sentido mayorista no. Ameyoko en Ueno es una calle comercial al aire libre con unas 400–500 tiendas, incluyendo puestos de marisco, productos secos, izakayas, ropa y comestibles. Es genial para comer marisco de manera informal, pero no es un mercado mayorista de pescado como Toyosu. Para una operación mayorista de verdad con subastas de atún ve a Toyosu. Para un mercado retail con más de 460 puestos, ve al Mercado Exterior de Tsukiji.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">¿Puedo ver una subasta de atún en Ameyoko?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        No. Las subastas de atún solo ocurren en el Mercado de Pescado de Toyosu. Para verla necesitas ganar una lotería mensual que se solicita por internet aproximadamente un mes antes de tu visita. Se admiten unas 100 personas al día y la observación se hace desde una plataforma con cristal alrededor de las 5:30. Ameyoko no tiene subastas de ningún tipo — es una calle de venta minorista y restauración informal.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">¿Qué es más barato, Toyosu o Ameyoko?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ameyoko es más barato para comer informalmente. Aperitivos y brochetas cuestan ¥300–1.500, una noche en izakaya suele salir por ¥2.000–3.500 por persona y las ostras de barra empiezan en torno a ¥300 la pieza. La planta de restaurantes de Toyosu es más cara — la mayoría de menús de sushi empiezan en ¥2.000 y los locales populares superan fácilmente los ¥5.000 por persona. La entrada en ambos es gratis.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">¿Toyosu, Ameyoko o el Mercado Exterior de Tsukiji?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Para la mayoría de los viajeros que visitan Tokio por primera vez, el Mercado Exterior de Tsukiji es la mejor experiencia "mercado de pescado": más de 460 puestos, sin reserva y fácil de combinar con Ginza. Toyosu es la mejor opción si específicamente quieres la subasta de atún o un desayuno serio de sushi. Ameyoko es la mejor opción si ya estás en Ueno y quieres comida callejera con un toque de marisco. Si tienes tiempo para dos, la combinación fuerte es Toyosu (al amanecer) + Mercado Exterior de Tsukiji (desayuno). Para más contexto, mira <Link to="/es/blog/tsukiji-vs-toyosu" className="text-accent hover:underline">Tsukiji vs Toyosu</Link> y <Link to="/es/blog/toyosu-vs-tsukiji-exterior" className="text-accent hover:underline">Toyosu vs Tsukiji Exterior</Link>.
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
                guideNote="Mi opinión honesta: la mayoría de los que dudan entre 'Toyosu o Ueno' en realidad dudan entre 'mayorista o callejero'. Elige según la experiencia que de verdad quieras."
                glance={[
                  { label: "Mercado real de pescado", value: "Toyosu (mayorista + subasta)" },
                  { label: "Picar casual", value: "Ameyoko (calle abierta)" },
                  { label: "Más barato", value: "Ameyoko" },
                  { label: "Mejor combinación", value: "Toyosu + Tsukiji Exterior" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      <RelatedTourCards tourIds={["tsukiji-ginza"]} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Toyosu vs Mercado de Ueno: ¿Qué Mercado de Pescado de Tokio Visitar?",
        description: "Toyosu (mercado mayorista real con subasta de atún) vs Ameyoko en Ueno (calle abierta con puestos de marisco e izakayas). Un guía con licencia compara ambos.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-05-09", dateModified: "2026-05-09",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/toyosu-vs-ueno-mercado-pescado" },
        inLanguage: "es"
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hay un mercado de pescado de verdad en Ueno?", acceptedAnswer: { "@type": "Answer", text: "En el sentido mayorista no. Ameyoko en Ueno es una calle comercial al aire libre con unas 400–500 tiendas, incluyendo puestos de marisco, productos secos, izakayas, ropa y comestibles. Para una operación mayorista de verdad con subastas de atún ve a Toyosu. Para un mercado retail con más de 460 puestos, ve al Mercado Exterior de Tsukiji." }},
          { "@type": "Question", name: "¿Puedo ver una subasta de atún en Ameyoko?", acceptedAnswer: { "@type": "Answer", text: "No. Las subastas de atún solo ocurren en el Mercado de Pescado de Toyosu. Para verla necesitas ganar una lotería mensual que se solicita por internet aproximadamente un mes antes. Se admiten unas 100 personas al día y la observación se hace desde una plataforma con cristal alrededor de las 5:30." }},
          { "@type": "Question", name: "¿Qué es más barato, Toyosu o Ameyoko?", acceptedAnswer: { "@type": "Answer", text: "Ameyoko es más barato. Aperitivos y brochetas cuestan ¥300–1.500, una noche en izakaya suele salir por ¥2.000–3.500 por persona y las ostras de barra empiezan en torno a ¥300 la pieza. La planta de restaurantes de Toyosu es más cara, con menús de sushi típicamente entre ¥2.000 y ¥5.000+." }},
          { "@type": "Question", name: "¿Toyosu, Ameyoko o el Mercado Exterior de Tsukiji?", acceptedAnswer: { "@type": "Answer", text: "Para la mayoría de los viajeros, el Mercado Exterior de Tsukiji es la mejor experiencia: 460+ puestos, sin reserva y fácil de combinar con Ginza. Toyosu es la mejor opción si quieres la subasta de atún o un desayuno serio de sushi. Ameyoko es ideal si ya estás en Ueno y buscas comida callejera con marisco." }}
        ]
      })}} />
    </Layout>
  );
};

export default EsToyosuVsUenoMercadoPescado;
