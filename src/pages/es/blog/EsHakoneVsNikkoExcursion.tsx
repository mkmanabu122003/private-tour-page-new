import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EsHakoneVsNikkoExcursion = () => {
  return (
    <Layout>
      <SEO
        title="Hakone vs Nikko: ¿Qué Excursión Desde Tokio Elegir? (2026)"
        description="Hakone (aguas termales, vistas al Monte Fuji, logística sencilla) o Nikko (templos UNESCO, cascadas, historia)? Una guía local compara ambas excursiones desde Tokio."
        canonicalPath="/es/blog/hakone-vs-nikko-excursion"
        hreflang={[
          { lang: "en", path: "/blog/hakone-vs-nikko-day-trip" },
          { lang: "es", path: "/es/blog/hakone-vs-nikko-excursion" },
          { lang: "x-default", path: "/blog/hakone-vs-nikko-day-trip" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Hakone vs Nikko" },
        ]}
      />

      <div className="prose-editorial">

      <BlogArticleHero
        image="/images/blog/hakone-fuji-comparison.webp"
        imageAlt="Hakone vs Nikko: excursión desde Tokio — Monte Fuji desde Hakone y santuario Toshogu en Nikko"
        eyebrow="Excursiones desde Tokio"
        title="Hakone vs Nikko: ¿Qué Excursión Desde Tokio Deberías Elegir? (2026)"
        date="9 de mayo de 2026"
        backHref="/es/blog"
        backLabel="Volver al Blog"
      />

      <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
            <BlogArticleToc items={[
              { num: "01", label: "Qué es Hakone", href: "#section-01-que-es-hakone" },
              { num: "02", label: "Qué es Nikko", href: "#section-02-que-es-nikko" },
              { num: "03", label: "Comparativa lado a lado", href: "#section-03-comparativa-lado-a-lado" },
              { num: "04", label: "Cuándo elegir Hakone", href: "#section-04-cuando-elegir-hakone" },
              { num: "05", label: "Cuándo elegir Nikko", href: "#section-05-cuando-elegir-nikko" },
              { num: "06", label: "Cómo llegar", href: "#section-06-como-llegar" },
              { num: "07", label: "Itinerario de un día", href: "#section-07-itinerario-de-un-dia" },
              { num: "08", label: "Preguntas Frecuentes", href: "#section-08-preguntas-frecuentes" },
            ]} />

            <article>

              {/* Quick Decision Box */}
              <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg mb-8">
                <p className="font-semibold text-foreground mb-2">Decisión rápida</p>
                <p className="text-foreground leading-relaxed mb-3">
                  <strong>Elige Hakone</strong> si quieres aguas termales, vistas al Monte Fuji en días claros, museos de arte y la logística más sencilla para una excursión de un día desde Tokio.
                </p>
                <p className="text-foreground leading-relaxed">
                  <strong>Elige Nikko</strong> si buscas templos y santuarios Patrimonio de la Humanidad UNESCO, cascadas, paseos por bosques y la experiencia histórica más profunda cerca de Tokio — con un viaje en tren más largo y madrugón obligatorio.
                </p>
                <p className="text-muted-foreground mt-3 text-sm italic">
                  Para la mayoría de viajeros con un día libre y primera visita a Japón, Hakone es la opción más segura. Nikko premia a quienes priorizan cultura e historia sobre comodidad.
                </p>
              </div>

              {/* Introducción */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                "¿Hakone o Nikko?" Es una de las preguntas que más recibo de viajeros que planifican su primera visita a Tokio, y no hay una respuesta única. Las dos son excursiones excelentes, pero ofrecen experiencias muy distintas. Hakone gira en torno a la naturaleza, las aguas termales y las vistas al Monte Fuji; Nikko gira en torno a templos, cascadas e historia japonesa en su versión más ornamentada.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Soy Manabu, guía nacional con licencia oficial radicado en Tokio. Llevo a clientes a ambos destinos cada semana, y la verdad honesta es que la elección correcta depende de tu estilo de viaje, la temporada y lo que ya hayas visto en Japón. Esta guía desglosa las diferencias como se las explicaría a mis propios huéspedes — sin paja, solo la comparación que necesitas para decidir.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Si estás considerando también Kamakura, mira mi{" "}
                <Link to="/es/blog/comparativa-excursiones" className="text-accent hover:underline">
                  comparativa de Kamakura, Hakone y Nikko
                </Link>. Si tu decisión ya está reducida a Hakone o Nikko, sigue leyendo.
              </p>

              {/* Sección 01: Qué es Hakone */}
              <div className="section-eyebrow"><span>Sección 01 · Qué es Hakone</span></div>
              <h2 id="section-01-que-es-hakone" className="scroll-mt-20">
                Qué es Hakone
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hakone es una zona montañosa a unos 90 minutos al suroeste de Tokio, situada dentro del cráter de un antiguo volcán. Lleva siglos siendo el destino de aguas termales por excelencia de Japón, con decenas de ryokan (posadas tradicionales con onsen) y baños públicos alimentados por agua geotérmica natural. En un día despejado, la vista del Monte Fuji desde el lago Ashi o desde el teleférico de Hakone es uno de los paisajes más fotografiados del país.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lo que hace que Hakone funcione tan bien como excursión de un día es su recorrido en bucle: la mayoría de visitantes hace un circuito usando el tren de cremallera Hakone Tozan, el teleférico de Hakone sobre el valle volcánico de Owakudani, el barco pirata por el lago Ashi y el autobús Hakone Tozan, todo con un solo billete llamado Hakone Free Pass. No necesitas coche, no necesitas planificar la logística con detalle, y el paisaje cambia cada 20 minutos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Más allá del bucle, Hakone tiene museos de arte de primer nivel: el Hakone Open-Air Museum y el Pola Museum of Art son referentes internacionales. Si quieres alargar el viaje a una noche, los ryokan de Hakone son una de las mejores formas de probar el onsen tradicional. Es un día tranquilo, sobre todo contemplativo, con vistas y aguas termales como protagonistas.
              </p>
              <figure className="my-8">
                <img
                  src="/images/tours/hakone-lake-ashi-fuji.webp"
                  alt="Lago Ashi con el Monte Fuji al fondo y el barco pirata de Hakone navegando"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                  loading="lazy"
                  width={800}
                  height={533}
                />
                <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                  Lago Ashi y Monte Fuji desde el barco pirata — la vista de Hakone que atrae a la mayoría de viajeros primerizos
                </figcaption>
              </figure>

              {/* Sección 02: Qué es Nikko */}
              <div className="section-eyebrow"><span>Sección 02 · Qué es Nikko</span></div>
              <h2 id="section-02-que-es-nikko" className="scroll-mt-20">
                Qué es Nikko
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nikko se encuentra a unas dos horas al norte de Tokio, en las montañas de la prefectura de Tochigi. Es famosa sobre todo por el santuario Toshogu, el mausoleo de Tokugawa Ieyasu — el shogún que unificó Japón en 1603 — junto con dos complejos de templos adyacentes que forman un sitio Patrimonio Mundial de la UNESCO. Las tallas, el pan de oro y la arquitectura lacada de Toshogu no se parecen a nada más en Japón: aquí los artesanos del país se lucieron para la familia más poderosa del momento.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pero Nikko es mucho más que sus santuarios. El parque nacional que la rodea incluye las cataratas Kegon (una de las tres grandes cascadas de Japón, con 97 metros de caída), el lago Chuzenji al final de una carretera de montaña con curvas, la zona termal volcánica de Yumoto y un colorido otoñal excepcional que atrae multitudes desde finales de octubre hasta principios de noviembre. Si tienes tiempo y energía para extender el día más allá de los templos, la cara natural de Nikko también impresiona.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La contrapartida: Nikko queda más lejos de Tokio que Hakone, el día implica más caminar, y la experiencia gravita fuertemente en historia y arquitectura. A los viajeros que no disfrutan leyendo paneles de templos o aprendiendo sobre la política del periodo Edo a veces les resulta menos accesible que la experiencia paisajística de Hakone. Pero para quienes quieren la profundidad de la cultura japonesa concentrada en una excursión accesible de un día, Nikko ofrece algo único.
              </p>
              <figure className="my-8">
                <img
                  src="/images/blog/nikko-toshogu-hero.webp"
                  alt="Puerta ornamentada del santuario Toshogu en Nikko con detalles en pan de oro y laca"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                  loading="lazy"
                  width={800}
                  height={533}
                />
                <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                  La puerta Yomeimon del santuario Toshogu — más de 500 tallas individuales cubren esta sola estructura
                </figcaption>
              </figure>

              {/* Sección 03: Comparativa */}
              <div className="section-eyebrow"><span>Sección 03 · Comparativa lado a lado</span></div>
              <h2 id="section-03-comparativa-lado-a-lado" className="scroll-mt-20">
                Comparativa lado a lado
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Esta es la comparativa rápida que doy a clientes que dudan entre las dos opciones. Los precios están actualizados a 2026.
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="text-left p-4 font-medium text-foreground">Característica</th>
                      <th className="text-left p-4 font-medium text-foreground">Hakone</th>
                      <th className="text-left p-4 font-medium text-foreground">Nikko</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-medium text-foreground">Distancia desde Tokio</td>
                      <td className="p-4 text-muted-foreground">~90 km al suroeste</td>
                      <td className="p-4 text-muted-foreground">~140 km al norte</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="p-4 font-medium text-foreground">Tiempo de viaje (ida)</td>
                      <td className="p-4 text-muted-foreground">~85 min (Romance Car desde Shinjuku)</td>
                      <td className="p-4 text-muted-foreground">~110 min (Tobu Spacia X desde Asakusa)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-foreground">Ideal para</td>
                      <td className="p-4 text-muted-foreground">Aguas termales, vistas al Fuji, museos, logística fácil</td>
                      <td className="p-4 text-muted-foreground">Templos UNESCO, cascadas, historia, otoño</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="p-4 font-medium text-foreground">Ambiente</td>
                      <td className="p-4 text-muted-foreground">Resort de montaña relajado</td>
                      <td className="p-4 text-muted-foreground">Peregrinación a un bosque sagrado</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-foreground">Pase con descuento</td>
                      <td className="p-4 text-muted-foreground">Hakone Free Pass — ¥7.100 (2 días desde Shinjuku)</td>
                      <td className="p-4 text-muted-foreground">Nikko Pass World Heritage Area — ¥3.000 (2 días desde Asakusa)</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="p-4 font-medium text-foreground">Suplemento tren rápido</td>
                      <td className="p-4 text-muted-foreground">Romance Car: +¥1.200 cada trayecto</td>
                      <td className="p-4 text-muted-foreground">Revaty: +~¥1.650 / Spacia X: +~¥1.940 cada trayecto</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-foreground">Atracción principal</td>
                      <td className="p-4 text-muted-foreground">Casi todo el bucle incluido en el pase</td>
                      <td className="p-4 text-muted-foreground">Santuario Toshogu: ¥1.300 (¥2.100 con museo del tesoro)</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="p-4 font-medium text-foreground">Caminata requerida</td>
                      <td className="p-4 text-muted-foreground">Ligera — sobre todo trenes, teleférico, barco</td>
                      <td className="p-4 text-muted-foreground">Moderada — el complejo de templos exige 2-3 horas a pie</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-foreground">Mejor temporada</td>
                      <td className="p-4 text-muted-foreground">Todo el año; vistas al Fuji más claras nov-feb</td>
                      <td className="p-4 text-muted-foreground">Finales oct-principios nov por el follaje; abr-may por el verde</td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="p-4 font-medium text-foreground">Apto para niños</td>
                      <td className="p-4 text-muted-foreground">Sí — barco pirata y teleférico son familiares</td>
                      <td className="p-4 text-muted-foreground">Solo para mayores de 8 años — caminatas largas, menos actividad</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-foreground">Hora más temprana de regreso a Tokio</td>
                      <td className="p-4 text-muted-foreground">~19:00</td>
                      <td className="p-4 text-muted-foreground">~20:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <InlineCTAEs />

              {/* Sección 04: Cuándo elegir Hakone */}
              <div className="section-eyebrow"><span>Sección 04 · Cuándo elegir Hakone</span></div>
              <h2 id="section-04-cuando-elegir-hakone" className="scroll-mt-20">
                Cuándo elegir Hakone
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hakone es la elección correcta cuando buscas un día relajado y panorámico con la mínima fricción logística. Estas son las situaciones en las que siempre dirijo a mis clientes hacia Hakone:
              </p>
              <h3>Quieres una oportunidad de ver el Monte Fuji</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La visibilidad del Monte Fuji es notoriamente caprichosa — incluso en días aparentemente despejados, la montaña se esconde a menudo tras nubes o calima. De noviembre a febrero, las estadísticas de visibilidad desde la zona de Hakone rondan el 40-60%, alcanzando su máximo en invierno cuando el aire frío y seco despeja el cielo. La foto clásica es desde el lago Ashi con el barco pirata en primer plano, pero el teleférico de Owakudani también ofrece vistas espectaculares en días claros. Si el Monte Fuji está en tu lista, Hakone te da bastante más probabilidad que Nikko, donde el Fuji simplemente no se ve.
              </p>
              <h3>Quieres probar un onsen (baño termal)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hakone tiene decenas de opciones de onsen, desde baños públicos de uso diario (¥1.000-2.500) hasta ryokan de lujo con baños privados al aire libre. Para quienes hacen excursión de un día, el balneario público Tenzan y el parque temático onsen Yunessun son populares. Si nunca has probado un baño termal japonés, Hakone es uno de los lugares más fáciles para experimentarlo sin tener que reservar noche. Nikko también tiene onsen — sobre todo en la zona de Yumoto — pero requieren un autobús adicional desde el complejo de templos y son más difíciles de encajar en un solo día.
              </p>
              <h3>Viajas con niños o personas mayores</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El bucle de Hakone es agradablemente pasivo: tomas un tren de cremallera, un funicular, un teleférico, un barco pirata y un autobús, y cada tramo te entrega su propio paisaje. Apenas hay caminata requerida más allá de moverte entre estaciones. Nikko, en cambio, implica largas caminatas por el complejo de templos, a menudo por escaleras y senderos de piedra. Las familias con cochecitos o abuelos con movilidad limitada encontrarán Hakone muchísimo más cómoda.
              </p>
              <h3>Te interesan el arte y el diseño</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El Hakone Open-Air Museum (con su pabellón Picasso y esculturas de Henry Moore repartidas por jardines de montaña) y el Pola Museum of Art (Monet, Cezanne, Van Gogh) son colecciones de primera. Ambos pueden añadirse al bucle de Hakone sin grandes complicaciones. Si eres viajero curioso por el arte, Hakone ofrece una profundidad que los templos de Nikko — preciosos como son — no replican.
              </p>

              <InlineCTAEs />

              {/* Sección 05: Cuándo elegir Nikko */}
              <div className="section-eyebrow"><span>Sección 05 · Cuándo elegir Nikko</span></div>
              <h2 id="section-05-cuando-elegir-nikko" className="scroll-mt-20">
                Cuándo elegir Nikko
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nikko es la elección correcta cuando quieres profundidad — histórica, cultural o natural — y estás dispuesto a sacrificar comodidad para conseguirla. Te empujo hacia Nikko cuando:
              </p>
              <h3>Te apasiona la historia o la arquitectura</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El santuario Toshogu es el complejo religioso más ornamentado de Japón. Solo la puerta Yomeimon tiene 508 tallas individuales — dragones, fénix, sabios, animales mitológicos — cubiertas de pan de oro y laca. Tokugawa Ieyasu, el shogún que se enterró aquí, puso fin al siglo de guerras civiles de Japón y estableció el periodo Edo que duró 265 años (1603-1868). Estar frente a su mausoleo es lo más cerca que puedes llegar al centro político del Japón premoderno. Si ya has visitado los santuarios y templos más sencillos de Tokio y Kioto y quieres algo con más intensidad visual, Nikko es la respuesta.
              </p>
              <h3>Quieres ver follaje otoñal</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La altitud de Nikko (el lago Chuzenji está a 1.269 metros) hace que los colores otoñales lleguen antes y duren más que en Tokio. Finales de octubre a principios de noviembre es la ventana óptima, con la carretera Iroha-zaka, las cataratas Kegon y el lago Chuzenji tiñéndose de carmesí y oro. Las multitudes en pico de follaje son intensas — conviene salir de Tokio antes de las 06:30 — pero la recompensa es uno de los mejores escenarios otoñales accesibles desde Tokio. Hakone también tiene colores de otoño, pero menos concentrados y menos espectaculares.
              </p>
              <h3>Quieres una cascada potente</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las cataratas Kegon caen 97 metros en un único salto desde el lago Chuzenji a un cañón boscoso. Es oficialmente una de las tres grandes cascadas de Japón, y un ascensor de pago (¥570) te baja a una plataforma en la base donde sientes el rocío. No hay nada comparable en la zona de Hakone. Si quieres un elemento natural potente que ancle tu día, las cascadas de Nikko entregan algo que el paisaje más suave de Hakone no.
              </p>
              <h3>Ya hiciste Hakone o ya viste el Monte Fuji</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los viajeros que repiten visita a Japón, o aquellos que ya vieron el Monte Fuji desde otro ángulo (lago Kawaguchi, el Shinkansen, la ventanilla del avión), suelen gravitar hacia Nikko en un segundo viaje. El complejo de templos ofrece algo que Hakone simplemente no tiene, y el viaje más largo pesa menos cuando no estás también persiguiendo la foto del Fuji.
              </p>

              {/* Sección 06: Cómo llegar */}
              <div className="section-eyebrow"><span>Sección 06 · Cómo llegar</span></div>
              <h2 id="section-06-como-llegar" className="scroll-mt-20">
                Cómo llegar
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ambos destinos están bien conectados con Tokio por sus respectivas líneas privadas de tren. Aquí tienes el desglose práctico.
              </p>

              <h3>De Tokio a Hakone</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La ruta por defecto es el <strong className="text-foreground">Romance Car de Odakyu</strong> desde la estación de Shinjuku hasta Hakone-Yumoto, en unos 85 minutos. El Romance Car es un tren expreso limitado cómodo, con asientos reclinables y ventanas grandes. La estructura tarifaria funciona en dos capas: un billete base (cubierto por el Hakone Free Pass) más un suplemento de expreso de ¥1.200 cada trayecto. Si no pagas el suplemento, puedes llegar a Hakone-Yumoto en la línea regular de Odakyu — solo tarda unas 2 horas con un transbordo en Odawara.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El <strong className="text-foreground">Hakone Free Pass</strong> desde Shinjuku cuesta ¥7.100 por 2 días e incluye el billete base ida y vuelta más uso ilimitado del tren Hakone Tozan, autobús Tozan, teleférico de Hakone y el barco pirata del lago Ashi. Es la única opción sensata para una excursión de un día — comprar billetes individuales para cada tramo del bucle sale considerablemente más caro.
              </p>

              <h3>De Tokio a Nikko</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La ruta por defecto es el <strong className="text-foreground">expreso limitado de Tobu</strong> (Spacia X o Revaty) desde la estación de Asakusa hasta Tobu-Nikko, en unos 1h 50min a 2h según el tipo de tren. Spacia X es el tren premium nuevo con servicio de cafetería. La tarifa total con asiento reservado ronda los ¥3.050 cada trayecto en Revaty/Kegon (¥1.400 base + ~¥1.650 suplemento expreso) y unos ¥3.340 cada trayecto en Spacia X (¥1.400 base + ~¥1.940 suplemento expreso). El tren Tobu regular tarda unas 2,5 horas con un transbordo y solo cuesta los ¥1.400 de billete base.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El <strong className="text-foreground">Nikko Pass World Heritage Area</strong> desde Asakusa cuesta ¥3.000 por 2 días e incluye el billete regular ida y vuelta de Tobu más buses ilimitados dentro del área Patrimonio. Este pase <em>no</em> incluye el suplemento de expreso limitado — si quieres tomar Spacia X o Revaty, pagas el suplemento aparte. Para la mayoría de excursiones de un día vale la pena pagar el expreso al menos en la ida para ahorrar tiempo de mañana.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si planeas extenderte más allá del área de templos al parque nacional (cataratas Kegon, lago Chuzenji, onsen Yumoto), el pase mayor <strong className="text-foreground">Nikko Pass All Area</strong> cubre las zonas de bus adicionales y vale la mejora.
              </p>

              {/* Sección 07: Itinerario */}
              <div className="section-eyebrow"><span>Sección 07 · Itinerario de un día</span></div>
              <h2 id="section-07-itinerario-de-un-dia" className="scroll-mt-20">
                Itinerario de un día
              </h2>

              <h3>Excursión a Hakone (ida y vuelta desde Shinjuku)</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">07:30</strong> — Romance Car de Shinjuku a Hakone-Yumoto</li>
                <li><strong className="text-foreground">09:00</strong> — Llegada a Hakone-Yumoto, transbordo al tren de cremallera Hakone Tozan</li>
                <li><strong className="text-foreground">09:45</strong> — Llegada a Gora, funicular Hakone Tozan hasta Sounzan</li>
                <li><strong className="text-foreground">10:15</strong> — Teleférico de Hakone sobre el valle volcánico de Owakudani (prueba un huevo negro si tienes hambre)</li>
                <li><strong className="text-foreground">11:30</strong> — Llegada a Togendai, embarque en el barco pirata del lago Ashi</li>
                <li><strong className="text-foreground">12:00</strong> — Llegada a Hakone-machi, almuerzo en uno de los restaurantes a orillas del lago</li>
                <li><strong className="text-foreground">13:30</strong> — Opcional: Hakone Open-Air Museum o baño onsen de uso diario</li>
                <li><strong className="text-foreground">16:30</strong> — Autobús Hakone Tozan de regreso a Hakone-Yumoto</li>
                <li><strong className="text-foreground">17:30</strong> — Romance Car a Shinjuku, llegada ~19:00</li>
              </ul>

              <h3>Excursión a Nikko (ida y vuelta desde Asakusa)</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">06:30</strong> — Spacia X de Asakusa a Tobu-Nikko</li>
                <li><strong className="text-foreground">08:30</strong> — Llegada a Tobu-Nikko, autobús World Heritage hasta Shinkyo</li>
                <li><strong className="text-foreground">09:00</strong> — Cruce del puente Shinkyo y subida a pie al complejo de templos</li>
                <li><strong className="text-foreground">09:30</strong> — Santuario Toshogu (deja al menos 90 minutos)</li>
                <li><strong className="text-foreground">11:30</strong> — Santuario Futarasan y templo Rinno-ji adyacentes</li>
                <li><strong className="text-foreground">12:30</strong> — Almuerzo en un restaurante local de Yuba (piel de tofu) cerca de los santuarios</li>
                <li><strong className="text-foreground">13:45</strong> — Autobús a las cataratas Kegon y al lago Chuzenji (45 min subiendo Iroha-zaka)</li>
                <li><strong className="text-foreground">15:00</strong> — Mirador de las cataratas Kegon, opcional ascensor a la base</li>
                <li><strong className="text-foreground">16:30</strong> — Autobús de regreso a Tobu-Nikko</li>
                <li><strong className="text-foreground">17:30</strong> — Spacia X de regreso a Asakusa, llegada ~19:30</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-8">
                El itinerario de Nikko es más ajustado — trabajas contra un trayecto más largo y un atardecer temprano, sobre todo en invierno. Si solo te da tiempo para el complejo de templos y no para el parque nacional, puedes salir de Tokio a las 07:30 y saltarte la parte del lago Chuzenji.
              </p>

              {/* CTA */}
              <div className="bg-secondary/50 rounded-lg p-8 mt-12">
                <h2>
                  ¿Quieres una excursión guiada a Hakone o Nikko — sin preocuparte por la logística?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Como guía oficial radicado en Tokio, organizo excursiones privadas de un día a ambos destinos. Yo me encargo de los billetes de tren, los tiempos, las reservas de almuerzo y la narración cultural que nunca conseguirías por tu cuenta. Llegas sin preparación y vuelves con una historia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/es/tours/custom" className="btn-accent">
                    Ver Tours a Medida
                  </Link>
                  <Link to="/es/contact" className="btn-outline">
                    Hacer una Pregunta
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-16">
                <div className="section-eyebrow"><span>Sección 08 · Preguntas Frecuentes</span></div>
                <h2 id="section-08-preguntas-frecuentes" className="scroll-mt-20">Preguntas Frecuentes</h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3>¿Es mejor Hakone o Nikko para una primera visita a Japón?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Para la mayoría de viajeros primerizos, Hakone es la opción más sencilla. El Hakone Free Pass simplifica la logística, el bucle perdona los retrasos, y tienes una posibilidad real de ver el Monte Fuji. Nikko es más recompensante para viajeros con interés fuerte en historia o arquitectura japonesa, pero el viaje más largo y la mayor caminata pueden ser duros con jet lag de primer día.
                    </p>
                  </div>
                  <div>
                    <h3>¿Puedo visitar Hakone y Nikko en el mismo viaje?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sí, pero no en días consecutivos a no ser que tengas al menos 7-8 días en Tokio. Ambos son días completos, y los madrugones consecutivos agotan. Suelo recomendar dejar al menos 2 días de separación con un día de descanso o de barrio en Tokio entre medias. Si solo tienes 5-6 días en Tokio, elige uno y aprovecha el día liberado para explorar Tokio con más profundidad.
                    </p>
                  </div>
                  <div>
                    <h3>¿Cuál es mejor en otoño — Hakone o Nikko?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nikko, por amplio margen. La carretera Iroha-zaka y la zona del lago Chuzenji ofrecen uno de los mejores follajes otoñales accesibles desde Tokio, con pico a finales de octubre y principios de noviembre. Hakone también tiene colores otoñales pero menos concentrados y menos espectaculares. Contrapartida en Nikko durante el pico: multitudes intensas y largas colas de autobús. Sal de Tokio antes de las 06:30 si visitas en noviembre.
                    </p>
                  </div>
                  <div>
                    <h3>¿Cuál es mejor en invierno?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hakone en la mayoría de los casos. La visibilidad del Monte Fuji alcanza su pico anual de diciembre a febrero (aire frío y seco que despeja la calima), y la experiencia onsen se aprecia más con frío. Nikko recibe nevadas serias y la zona del lago Chuzenji puede quedar inaccesible en autobús; el complejo de templos en sí permanece abierto, pero el parque nacional alrededor es más difícil de disfrutar. Si tu excursión de invierno gira en torno a vistas y baños termales, elige Hakone.
                    </p>
                  </div>
                  <div>
                    <h3>¿Cuánto debería presupuestar para una excursión a Hakone o a Nikko?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hakone desde Shinjuku: ¥7.100 (Hakone Free Pass) + ¥2.400 (suplemento Romance Car ida y vuelta) + ¥1.500-3.000 almuerzo + opcional ¥1.000-2.500 onsen = aproximadamente ¥12.000-15.000 por persona antes de souvenirs. Nikko desde Asakusa: ¥3.000 (Nikko Pass World Heritage) + ~¥3.300 (suplemento Revaty ida y vuelta) + ¥1.300 (entrada a Toshogu) + ¥1.500-2.500 almuerzo = aproximadamente ¥9.100-10.100 por persona. Nikko sale algo más barato en transporte pero acumula más entradas si visitas varios templos.
                    </p>
                  </div>
                  <div>
                    <h3>¿Necesito reservar el tren con antelación?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Para días laborables fuera de temporada, no — tanto el Romance Car como el Tobu Spacia X suelen tener asientos disponibles unas horas antes. Para fines de semana, festivos y temporada de follaje en Nikko, reserva al menos un día antes vía las apps oficiales de Odakyu y Tobu. El Hakone Free Pass y el Nikko Pass se pueden comprar el mismo día en las taquillas de la estación correspondiente o en línea.
                    </p>
                  </div>
                  <div>
                    <h3>¿Son buenas excursiones para niños?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hakone es excelente para niños — la variedad de transporte (tren, funicular, teleférico, barco pirata, autobús) los mantiene entretenidos, y el formato de bucle hace que haya algo nuevo cada 20 minutos. Nikko es mejor para niños a partir de 8 años que puedan apreciar las tallas; los más pequeños suelen encontrar el complejo de templos pesado. Con niños pequeños, ve por defecto a Hakone.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-12">
                Última actualización: mayo de 2026
              </p>
            </article>

            <BlogArticleAside />
          </div>
        </div>
      </section>

      <RelatedTourCards tourIds={["custom", "nikko", "tsukiji-ginza"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Hakone vs Nikko: ¿Qué Excursión Desde Tokio Deberías Elegir? (2026)",
        description: "Hakone (aguas termales, vistas al Monte Fuji, logística sencilla) o Nikko (templos UNESCO, cascadas, historia)? Una guía con licencia de Tokio compara ambas excursiones por coste, tiempo y tipo de viajero.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-05-09", dateModified: "2026-05-09",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/es/blog/hakone-vs-nikko-excursion" }
      })}} />

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Es mejor Hakone o Nikko para una primera visita a Japón?", acceptedAnswer: { "@type": "Answer", text: "Para la mayoría de viajeros primerizos, Hakone es la opción más sencilla. El Hakone Free Pass simplifica la logística y tienes una posibilidad real de ver el Monte Fuji. Nikko es más recompensante para viajeros con interés fuerte en historia japonesa pero el viaje más largo puede ser duro con jet lag." }},
          { "@type": "Question", name: "¿Puedo visitar Hakone y Nikko en el mismo viaje?", acceptedAnswer: { "@type": "Answer", text: "Sí, pero no en días consecutivos a no ser que tengas al menos 7-8 días en Tokio. Ambos son días completos. Deja al menos 2 días de separación con un día de descanso o de barrio en Tokio entre medias." }},
          { "@type": "Question", name: "¿Cuál es mejor en otoño — Hakone o Nikko?", acceptedAnswer: { "@type": "Answer", text: "Nikko, por amplio margen. La carretera Iroha-zaka y la zona del lago Chuzenji ofrecen uno de los mejores follajes otoñales accesibles desde Tokio, con pico a finales de octubre y principios de noviembre." }},
          { "@type": "Question", name: "¿Cuál es mejor en invierno — Hakone o Nikko?", acceptedAnswer: { "@type": "Answer", text: "Hakone en la mayoría de los casos. La visibilidad del Monte Fuji alcanza su pico anual de diciembre a febrero, y la experiencia onsen se aprecia más con frío. Nikko recibe nevadas serias y el lago Chuzenji puede quedar inaccesible." }},
          { "@type": "Question", name: "¿Cuánto debería presupuestar para una excursión a Hakone o a Nikko?", acceptedAnswer: { "@type": "Answer", text: "Hakone desde Shinjuku: aproximadamente ¥12.000-15.000 por persona (Hakone Free Pass ¥7.100 + suplemento Romance Car ¥2.400 + almuerzo + opcional onsen). Nikko desde Asakusa: aproximadamente ¥9.100-10.100 por persona (Nikko Pass ¥3.000 + suplemento Revaty ida y vuelta ~¥3.300 + entrada Toshogu ¥1.300 + almuerzo)." }},
          { "@type": "Question", name: "¿Necesito reservar el tren con antelación?", acceptedAnswer: { "@type": "Answer", text: "Para días laborables fuera de temporada, no — Romance Car y Spacia X suelen tener asientos disponibles unas horas antes. Para fines de semana, festivos y temporada de follaje en Nikko, reserva al menos un día antes vía las apps oficiales de Odakyu y Tobu." }},
          { "@type": "Question", name: "¿Son Hakone y Nikko buenas excursiones para niños?", acceptedAnswer: { "@type": "Answer", text: "Hakone es excelente para niños — la variedad de transporte (tren, funicular, teleférico, barco pirata, autobús) los mantiene entretenidos. Nikko es mejor para niños a partir de 8 años; los más pequeños suelen encontrar el complejo de templos pesado. Con niños pequeños, ve por defecto a Hakone." }}
        ]
      })}} />
      </div>
    </Layout>
  );
};

export default EsHakoneVsNikkoExcursion;
