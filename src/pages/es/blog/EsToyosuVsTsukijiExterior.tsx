import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsToyosuVsTsukijiExterior = () => {
  return (
    <Layout>
      <SEO
        title="Toyosu vs Tsukiji Exterior 2026: ¿Cuál Visitar?"
        description="Toyosu (mercado mayorista moderno con subasta de atún) vs Mercado Exterior de Tsukiji (460+ puestos minoristas en 2026). Comparativa con horarios, precios y plan de mañana combinada."
        canonicalPath="/es/blog/toyosu-vs-tsukiji-exterior"
        hreflang={[
          { lang: "en", path: "/blog/toyosu-vs-tsukiji-outer" },
          { lang: "es", path: "/es/blog/toyosu-vs-tsukiji-exterior" },
          { lang: "x-default", path: "/blog/toyosu-vs-tsukiji-outer" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Toyosu vs Tsukiji Exterior" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/tsukiji-fresh-tuna-display.webp"
          imageAlt="Mercado mayorista de Toyosu y Mercado Exterior de Tsukiji — los dos sitios para ver el marisco de Tokio en 2026"
          eyebrow="Guías Gastronómicas · Tokio"
          title="Mercado de Toyosu vs Mercado Exterior de Tsukiji: ¿Cuál Visitar en 2026?"
          subtitle="Comparativa honesta de un guía con licencia entre el mercado mayorista y la calle minorista de comida, con horarios, precios y un plan de mañana combinada."
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
                  { num: "02", label: "Qué es cada uno en 2026", href: "#section-02-que-es-cada-uno" },
                  { num: "03", label: "Comparativa lado a lado", href: "#section-03-comparativa" },
                  { num: "04", label: "Cuándo gana Toyosu", href: "#section-04-toyosu-gana" },
                  { num: "05", label: "Cuándo gana Tsukiji Exterior", href: "#section-05-tsukiji-gana" },
                  { num: "06", label: "Plan de mañana combinada", href: "#section-06-plan-combinado" },
                  { num: "07", label: "FAQ", href: "#section-07-faq" },
                ]}
              />

              <article>
                <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg mb-8">
                  <p className="font-semibold text-foreground mb-2">Respuesta rápida</p>
                  <p className="text-foreground leading-relaxed">
                    En 2026, Toyosu y el Mercado Exterior de Tsukiji son las dos experiencias principales de mercado de pescado en Tokio, y son <strong>complementarias, no intercambiables</strong>. Toyosu es la operación mayorista: subasta de atún (solo con lotería), desayuno serio de sushi, instalaciones modernas, recorrido detrás de cristales. Tsukiji Exterior es la calle minorista de comida: más de 460 tiendas y puestos, sin reserva, pico hacia las 8:00 de la mañana, y lo más cercano al ambiente de Tsukiji previo a 2018. Para la mayoría de viajeros, elige Tsukiji Exterior. Para los más entusiastas de la gastronomía, haz los dos en una mañana — la subasta a las 5:30 y el desayuno en el exterior 90 minutos después.
                  </p>
                  <p className="text-muted-foreground mt-3 text-sm italic">
                    Si quieres una decisión específica para 2026 (no la versión genérica "Tsukiji vs Toyosu" donde "Tsukiji" es ambiguo), este es el artículo. Abajo: horarios actualizados, desglose de precios y la ruta exacta entre los dos mercados.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Cuando un cliente ya sabe que el mercado interior se mudó a Toyosu en 2018, la pregunta se afila: <strong>¿Toyosu o Mercado Exterior de Tsukiji en 2026?</strong> Ya no es una pregunta sobre "qué es Tsukiji" — es una elección real entre dos destinos gastronómicos abiertos y muy distintos. Esta es la comparativa que les doy a esos clientes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Soy Manabu, guía con licencia nacional en Tokio. He visto la subasta de Toyosu más veces de las que puedo contar y recorro el Mercado Exterior de Tsukiji casi todas las semanas con grupos privados. Atienden necesidades distintas y premian a tipos de viajero distintos. La buena noticia: están a 20–25 minutos en tren, y se pueden ver los dos en una sola mañana si te animas a madrugar.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Esta pieza es la guía de decisión específica para 2026 — qué está abierto, qué cuesta cuánto y cuál encaja con tu viaje. Para el contexto histórico de por qué Tsukiji tiene dos mercados, mira mi guía <Link to="/es/blog/tsukiji-mercado-exterior-vs-interior" className="text-accent hover:underline">Tsukiji Exterior vs Interior</Link>. Para la versión más antigua "Tsukiji como un todo", mira mi <Link to="/es/blog/tsukiji-vs-toyosu" className="text-accent hover:underline">Tsukiji vs Toyosu</Link>.
                </p>

                <div className="section-eyebrow"><span>Sección 01 · Decisión rápida</span></div>
                <h2 id="section-01-decision-rapida" className="scroll-mt-20">
                  Decisión rápida: ¿qué encaja con tu mañana?
                </h2>
                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">Mayorista + subasta</p>
                    <p className="choice-title">Elige Toyosu si…</p>
                    <ul>
                      <li>Has ganado (o vas a solicitar) la lotería de la subasta de atún.</li>
                      <li>Buscas un desayuno serio de sushi en un restaurante con verdadero suministro mayorista.</li>
                      <li>Te gustan las instalaciones limpias y modernas y no te molestan las barreras de cristal.</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">Minorista + comida callejera</p>
                    <p className="choice-title">Elige Tsukiji Exterior si…</p>
                    <ul>
                      <li>Quieres variedad gastronómica, sin reserva y sin alarma a las 4 de la mañana.</li>
                      <li>Te apetece curiosear cuchillos, cerámica, productos secos y tiendas de té.</li>
                      <li>Vas a combinar la mañana con un paseo de 15 minutos hasta Ginza.</li>
                    </ul>
                  </div>
                </div>

                <div className="section-eyebrow"><span>Sección 02 · Qué es cada uno</span></div>
                <h2 id="section-02-que-es-cada-uno" className="scroll-mt-20">
                  Qué es cada uno en 2026
                </h2>

                <h3 className="scroll-mt-20">Mercado de Toyosu — mayorista, subasta, moderno</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Toyosu abrió en octubre de 2018 sobre una isla artificial en la bahía de Tokio y es ahora el mercado mayorista oficial de pescado de la ciudad. Es un complejo enorme de tres edificios conectados por pasarelas elevadas y cubiertas desde la estación Shijo-mae de la línea Yurikamome. La experiencia del visitante transcurre por pasillos cerrados con paredes de cristal sobre la planta mayorista, además de unos 40 restaurantes para sentarse y la famosa plataforma de observación de la subasta de atún.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El horario general para visitantes es aproximadamente de 5:00 a 17:00 de lunes a sábado, con cierres los domingos, festivos y ciertos miércoles según el calendario mayorista. La subasta en sí ocurre entre las 5:30 y las 6:30 los días laborables; <span className="hl-gold">verla requiere ganar una lotería online mensual</span> con solo unas 100 plazas al día. En febrero de 2024 abrió un nuevo complejo para visitantes llamado <em>Senkyaku Banrai</em> al otro lado de la calle, con alrededor de 70 restaurantes y tiendas además de un onsen, lo que da más razones para visitar Toyosu incluso sin entrada para la subasta.
                </p>

                <h3 className="scroll-mt-20">Mercado Exterior de Tsukiji — minorista, comida callejera, tradicional</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Mercado Exterior de Tsukiji es el barrio de 460+ tiendas que creció alrededor del antiguo mercado mayorista interior durante décadas. Cuando el mercado interior se trasladó a Toyosu en 2018, el exterior se quedó exactamente donde estaba. Hoy es lo más cercano al ambiente de Tsukiji previo a 2018, con callejones estrechos llenos de barras de sushi, vendedores de tamagoyaki, tiendas de cuchillos, puestos de ostras, cerámica, productos secos y tiendas de té.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  El horario va aproximadamente de 5:00 a 14:00, y cada tienda fija el suyo. La franja punta para visitantes es entre 7:00 y 11:00 entre semana. La mayoría de los puestos cierra los domingos y ciertos miércoles según el calendario mayorista — el sitio oficial del Mercado Exterior de Tsukiji mantiene un calendario actualizado. No hace falta reserva para nada salvo para un puñado de restaurantes de sushi famosos. Desde el centro de Tokio, la estación más cercana es Tsukiji en la línea Hibiya, a 2 minutos andando del mercado.
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
                        <th className="text-left p-4 font-serif font-medium text-foreground">Tsukiji Exterior</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4 font-medium text-foreground">Estado (2026)</td>
                        <td className="p-4 text-muted-foreground">Abierto desde oct 2018</td>
                        <td className="p-4 text-muted-foreground">Abierto; nunca se mudó</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Tipo</td>
                        <td className="p-4 text-muted-foreground">Mayorista + planta visitantes</td>
                        <td className="p-4 text-muted-foreground">Minorista + comida callejera</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Puestos</td>
                        <td className="p-4 text-muted-foreground">~40 restaurantes en planta visitantes</td>
                        <td className="p-4 text-muted-foreground">~460 tiendas y puestos</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Horario</td>
                        <td className="p-4 text-muted-foreground">5:00–17:00, lun–sáb</td>
                        <td className="p-4 text-muted-foreground">~5:00–14:00 (varía por tienda)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Subasta de atún</td>
                        <td className="p-4 text-muted-foreground">Sí — solo con lotería, 5:30</td>
                        <td className="p-4 text-muted-foreground">No</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Reserva</td>
                        <td className="p-4 text-muted-foreground">Sí para subasta; no para restaurantes</td>
                        <td className="p-4 text-muted-foreground">Ninguna</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Ambiente</td>
                        <td className="p-4 text-muted-foreground">Moderno, limpio, con cristales</td>
                        <td className="p-4 text-muted-foreground">Animado, callejones estrechos, tradicional</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Coste típico</td>
                        <td className="p-4 text-muted-foreground">Sushi ¥2.000–5.000+</td>
                        <td className="p-4 text-muted-foreground">Snacks ¥100–500; sushi ¥2.000–3.000</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Acceso</td>
                        <td className="p-4 text-muted-foreground">Yurikamome "Shijo-mae" (cubierto)</td>
                        <td className="p-4 text-muted-foreground">Línea Hibiya "Tsukiji" (2 min)</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Mejor para</td>
                        <td className="p-4 text-muted-foreground">Subasta de atún, desayuno de sushi</td>
                        <td className="p-4 text-muted-foreground">Comida callejera, tiendas, ambiente</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Tiempo necesario</td>
                        <td className="p-4 text-muted-foreground">1,5–2,5 h</td>
                        <td className="p-4 text-muted-foreground">1,5–3 h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="section-eyebrow"><span>Sección 04 · Cuándo gana Toyosu</span></div>
                <h2 id="section-04-toyosu-gana" className="scroll-mt-20">
                  Cuándo Toyosu es la mejor elección
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hay dos situaciones en las que Toyosu gana claramente al Mercado Exterior. La primera es cuando específicamente quieres ver la subasta de atún. No hay otro sitio en Tokio donde verla, punto. Si te imaginas un viaje a Tokio con la subasta como protagonista, hay que solicitar la lotería un mes antes de las fechas y planificar llegar a la estación Shijo-mae a las 5:00 de la mañana. Solo se admiten unas 100 personas al día; si no te toca, los pasillos sobre la zona mayorista intermedia siguen dando una idea de cómo funciona el mercado, pero el espectáculo es claramente menor.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La segunda situación es cuando quieres un desayuno de sushi en un restaurante con verdadero suministro mayorista. Varios locales de la planta de visitantes vinieron del antiguo mercado interior de Tsukiji y sirven algunos de los mejores sushi de la ciudad a precios razonables para lo que son (¥2.000–5.000 por menús a elección del chef). Las colas para los nombres famosos pueden superar los 60 minutos; los locales menos conocidos en la misma planta aceptan entrada directa y son igual de buenos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  El sacrificio en Toyosu es la intimidad sensorial. El recorrido del visitante está pensado para la higiene y la eficiencia, lo que significa barreras de cristal, pasillos señalizados y cero ocasión de hablar directamente con los pescaderos o picar de un puesto a otro. Si tu imagen de "mercado de pescado de Tokio" es la versión caótica, olorosa y degustativa de los documentales, ya no está en Toyosu. Está en el mercado exterior.
                </p>

                <div className="section-eyebrow"><span>Sección 05 · Cuándo gana Tsukiji Exterior</span></div>
                <h2 id="section-05-tsukiji-gana" className="scroll-mt-20">
                  Cuándo el Mercado Exterior de Tsukiji es la mejor elección
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  El Mercado Exterior de Tsukiji es la mejor opción para la inmensa mayoría de visitantes, y lo digo como alguien que respeta de verdad lo que hace Toyosu. Las razones son prácticas: nada de reservas, nada de alarmas a las 4 de la mañana, mucha más variedad de comida y una experiencia sensorial que se siente como un mercado, no como un museo sobre un mercado.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En el Tsukiji Exterior puedes picar tamagoyaki en brocheta, uni fresco en vasitos, vieiras a la parrilla con mantequilla de soja, ostras de barra, brochetas de wagyu y barras de sushi de pie en cualquier orden. La mayoría de aperitivos cuestan entre ¥100 y ¥500 por unidad. El sushi de pie con 8–10 piezas sale por ¥2.000–3.000. No hay nada equivalente en escala o variedad en la planta de visitantes de Toyosu, donde tienes que elegir un solo restaurante para una sola comida.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Más allá de la comida, Tsukiji Exterior es también donde están las famosas tiendas de cuchillos que abastecen a las cocinas profesionales de Tokio, además de cerámica, lacas, katsuobushi seco (copos de bonito), kombu (alga) y tiendas de té japonés. Nada de eso existe en Toyosu de forma significativa.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Y por último, la geografía. Tsukiji Exterior está a 15 minutos andando de Ginza, lo que lo convierte en la primera mitad natural de un plan de medio día: mercado por la mañana, Ginza para tiendas o café a media mañana, comer donde te apetezca. Toyosu son 30+ minutos de ida y vuelta desde el centro en el Yurikamome y no se combina tan limpiamente con casi nada que la mayoría de viajeros quiera ver.
                </p>

                <div className="section-eyebrow"><span>Sección 06 · Plan combinado</span></div>
                <h2 id="section-06-plan-combinado" className="scroll-mt-20">
                  Plan de mañana combinada
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="hl-gold">Sí, los dos se pueden hacer en una mañana</span> — y para los viajeros más entusiastas de la gastronomía, este es el plan correcto. Los dos mercados están a 20–25 minutos en tren y sus horarios se complementan.
                </p>
                <div className="route-timeline">
                  <div className="route-row">
                    <div className="route-time">5:00</div>
                    <p className="route-desc">
                      <strong>Llegada a Toyosu (estación Shijo-mae).</strong> Si has ganado la lotería, regístrate como muy tarde a las 5:15 — lleva el pasaporte para verificar la identidad. Si no, los pasillos sobre la planta mayorista siguen activos.
                    </p>
                  </div>
                  <div className="route-row">
                    <div className="route-time">5:30–6:30</div>
                    <p className="route-desc">
                      <strong>Observa la subasta (o la planta mayorista).</strong> La subasta dura aproximadamente una hora. Haz fotos a través del cristal y aprecia la escala de la industria del marisco japonesa.
                    </p>
                  </div>
                  <div className="route-row">
                    <div className="route-time">6:45</div>
                    <p className="route-desc">
                      <strong>Traslado a Tsukiji.</strong> A esta hora lo más rápido es un taxi directo desde la subasta hasta el Mercado Exterior de Tsukiji — unos 10–15 minutos y ¥1.500–2.000. La mayoría de las líneas de metro aún no funcionan plenamente a las 6:45. Más tarde en el día la ruta de metro es Yurikamome desde Shijo-mae a Toyosu (1 parada, ~3 min) → Tokyo Metro línea Yurakucho a Shintomicho (2 paradas, ~5 min) → 7 min andando hasta el Mercado Exterior de Tsukiji.
                    </p>
                  </div>
                  <div className="route-row">
                    <div className="route-time">7:15–10:30</div>
                    <p className="route-desc">
                      <strong>Crawling gastronómico por el Mercado Exterior de Tsukiji.</strong> Aquí ocurre el verdadero comer. Empieza por el tamagoyaki, sigue con sushi de pie y luego picotea por lo que vaya apareciendo. No te llenes en el primer puesto.
                    </p>
                  </div>
                  <div className="route-row">
                    <div className="route-time">10:30–11:30</div>
                    <p className="route-desc">
                      <strong>Caminata hasta Ginza.</strong> Tsukiji a Ginza son 15 minutos planos por Harumi-dori. Una continuación natural para café, tiendas o una mañana más tranquila. Mira mi <Link to="/es/blog/de-ginza-a-tsukiji-a-pie" className="text-accent hover:underline">ruta de Ginza a Tsukiji a pie</Link> para la dirección inversa.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  La pega es el madrugón. Tendrás que salir del hotel hacia las 4:30 de la mañana, lo que implica acostarse pronto la noche anterior. La mayoría de los clientes me dicen después que el madrugón mereció totalmente la pena. Si no te ves capaz de levantarte a las 4:30, descarta Toyosu y haz solo el Tsukiji Exterior a las 8:00. Sigue siendo el mejor mercado para la mayoría de viajeros.
                </p>

                <div className="bg-secondary/50 rounded-lg p-8 mt-12 cta-block">
                  <h2 className="text-foreground mb-4 !text-[1.75rem] md:!text-[2rem] !leading-[1.2]">
                    ¿Quieres un guía que organice esta mañana contigo?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    En mi tour Tsukiji y Ginza te llevo por el Mercado Exterior como yo lo recorro — los mejores puestos, sin trampas para turistas y un paseo limpio hasta Ginza después. Si quieres combinarlo con una visita a la subasta de Toyosu, te puedo ayudar con la solicitud de la lotería y nos encontramos en Tsukiji al terminar.
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
                      <h3 className="scroll-mt-20">¿Sigue mereciendo la pena visitar el Mercado Exterior de Tsukiji en 2026?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Sí — y para la mayoría de viajeros es el más memorable de los dos mercados. El Mercado Exterior de Tsukiji tiene 460+ tiendas y puestos, no exige reserva y ofrece una atmósfera sensorial que la planta de visitantes de Toyosu no puede replicar. Además está a 15 minutos andando de Ginza, lo que facilita combinarlo con tiendas o un almuerzo en otro sitio.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">¿Cómo solicito la lotería de la subasta de atún de Toyosu?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Solicítala por internet aproximadamente un mes antes de tu visita en el sitio oficial de la lotería del Mercado de Toyosu. La ventana de solicitud abre durante una semana cada mes para plazas del mes siguiente. Eliges tres fechas preferidas; si te seleccionan, te asignan una. Solo se admiten unas 100 personas al día, la observación se hace a las 5:30 y necesitas llevar el pasaporte para el registro.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">¿Puedo visitar Toyosu sin ganar la lotería?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Sí. En horario normal (5:00–17:00, de lunes a sábado) puedes recorrer los pasillos sobre la zona mayorista intermedia sin reserva alguna. Verás vendedores trabajando y tendrás una idea de la escala, pero no verás la planta principal de la subasta de atún — esa es solo con lotería. Los restaurantes de la planta visitantes también están abiertos sin reserva.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">¿El Mercado Exterior de Tsukiji abre los domingos?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        No — la mayoría de los puestos cierra los domingos. Tsukiji Exterior cierra también ciertos miércoles según el calendario mayorista (no todos los miércoles). El sitio oficial del Mercado Exterior de Tsukiji (tsukiji.or.jp) mantiene un calendario actualizado y la conserjería de tu hotel puede confirmar fechas concretas. Para la mejor experiencia, planifica martes, jueves o viernes por la mañana.
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
                guideNote="Mi plan por defecto con clientes gastronómicos: Tsukiji Exterior a las 8:00. Solo añadimos Toyosu al amanecer si tenemos la entrada de la subasta en la mano."
                glance={[
                  { label: "Mejor para casi todos", value: "Tsukiji Exterior" },
                  { label: "Mejor para subasta", value: "Toyosu (lotería)" },
                  { label: "Sin reserva", value: "Tsukiji Exterior" },
                  { label: "Mejor combinación", value: "Toyosu 5:30 → Tsukiji 7:30" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      <RelatedTourCards tourIds={["tsukiji-ginza"]} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Mercado de Toyosu vs Mercado Exterior de Tsukiji: ¿Cuál Visitar en 2026?",
        description: "Toyosu (mercado mayorista moderno con subasta de atún) vs Mercado Exterior de Tsukiji (460+ puestos minoristas en 2026). Comparativa con horarios, precios y plan de mañana combinada.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-05-09", dateModified: "2026-05-09",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/toyosu-vs-tsukiji-exterior" },
        inLanguage: "es"
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Sigue mereciendo la pena visitar el Mercado Exterior de Tsukiji en 2026?", acceptedAnswer: { "@type": "Answer", text: "Sí — y para la mayoría de viajeros es el más memorable de los dos mercados. Tiene 460+ tiendas y puestos, no exige reserva y ofrece una atmósfera sensorial que la planta de visitantes de Toyosu no puede replicar. Está además a 15 minutos andando de Ginza." }},
          { "@type": "Question", name: "¿Cómo solicito la lotería de la subasta de atún de Toyosu?", acceptedAnswer: { "@type": "Answer", text: "Por internet aproximadamente un mes antes en el sitio oficial de la lotería del Mercado de Toyosu. La ventana abre una semana cada mes. Eliges tres fechas preferidas; si te seleccionan, te asignan una. Se admiten unas 100 personas al día y la observación es a las 5:30. Lleva el pasaporte." }},
          { "@type": "Question", name: "¿Puedo visitar Toyosu sin ganar la lotería?", acceptedAnswer: { "@type": "Answer", text: "Sí. En horario normal (5:00–17:00, lun–sáb) puedes recorrer los pasillos sobre la zona mayorista intermedia sin reserva. No verás la planta principal de la subasta — eso es solo con lotería — pero los restaurantes de la planta visitantes están abiertos sin reserva." }},
          { "@type": "Question", name: "¿El Mercado Exterior de Tsukiji abre los domingos?", acceptedAnswer: { "@type": "Answer", text: "No — la mayoría cierra domingos. También cierra ciertos miércoles según el calendario mayorista. El sitio oficial mantiene un calendario actualizado. Planifica martes, jueves o viernes por la mañana para la mejor experiencia." }}
        ]
      })}} />
    </Layout>
  );
};

export default EsToyosuVsTsukijiExterior;
