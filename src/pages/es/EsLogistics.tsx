import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AffiliateLink } from "@/components/AffiliateLink";
import { HubTable } from "@/components/logistics/HubTable";

const INQUIRY_PATH = "/es/contact";

const EsLogistics = () => {
  return (
    <Layout>
      <SEO
        title="Logística Japón 2026: eSIM, shinkansen y aeropuerto"
        description="Lista práctica: eSIM o Pocket WiFi, shinkansen, autobús y auto de aeropuerto. Después, consulten un tour privado por Tokio."
        canonicalPath="/es/logistics"
        hreflang={[
          { lang: "en", path: "/logistics" },
          { lang: "es", path: "/es/logistics" },
          { lang: "x-default", path: "/logistics" },
        ]}
        breadcrumbs={[
          { name: "Inicio", path: "/es" },
          { name: "Logística" },
        ]}
      />

      <div className="prose-editorial">
        <section className="pt-16 pb-12 bg-secondary/30">
          <div className="container-section">
            <div className="max-w-3xl">
              <p className="text-label text-accent mb-3">Planificación del viaje</p>
              <h1 className="text-foreground">Armén la logística — después disfruten el viaje</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Casi todo lo que hace que un viaje a Japón se sienta fácil depende de dos cosas: una conexión de datos y un asiento.
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                Última actualización: septiembre 2026
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <aside className="article-toc hidden lg:block">
                <p className="toc-label">En esta página</p>
                <a href="#section-01"><span className="toc-num">01</span><span>Tour privado</span></a>
                <a href="#section-02"><span className="toc-num">02</span><span>Divulgación</span></a>
                <a href="#section-03"><span className="toc-num">03</span><span>Qué necesitan</span></a>
                <a href="#section-04"><span className="toc-num">04</span><span>Conexión</span></a>
                <a href="#section-05"><span className="toc-num">05</span><span>Shinkansen</span></a>
                <a href="#section-06"><span className="toc-num">06</span><span>Autobús</span></a>
                <a href="#section-07"><span className="toc-num">07</span><span>Auto de aeropuerto</span></a>
                <a href="#section-faq"><span className="toc-num">08</span><span>Preguntas frecuentes</span></a>
                <a href="#section-closing"><span className="toc-num">09</span><span>Nota final</span></a>
              </aside>

              <article>
                <p>
                  Mapas, traducción, reservas de restaurante, un código QR en el torniquete, un mensaje para avisar que van tarde: todo es datos. El salto Tokio–Kioto, el traslado desde el aeropuerto con tres maletas y un niño cansado: todo es asientos. Resuelvan esas dos cosas antes de volar y el primer día suele sentirse tranquilo en lugar de caótico.
                </p>
                <p>
                  Esta página es una lista práctica, no un catálogo. Recorre las cuatro decisiones que enfrentan casi todos los visitantes — cómo conectarse, cómo moverse entre ciudades, si el autobús le gana al tren en un trayecto largo, y cómo llegar del aeropuerto a la primera cama — y señala herramientas de reserva que muchos viajeros usan. Esas herramientas las reservan ustedes mismos; el transporte y el alojamiento quedan en sus manos. Lo que hacemos es armar los días de sightseeing.
                </p>

                <div className="section-eyebrow"><span>Sección 01 · Tour privado</span></div>
                <h2 id="section-01" className="scroll-mt-20">Primero, un tour privado</h2>
                <p>
                  Los días privados funcionan mejor cuando la logística de abajo ya está resuelta: dónde aterrizan, cómo estarán conectados, cómo se moverán entre ciudades. Con eso fijo, el día de sightseeing se puede construir completamente alrededor de lo que quieren ver — un templo temprano antes de la multitud, un almuerzo largo, un barrio del que leyeron una vez y no recuerdan el nombre. Cuéntenos la forma del viaje; nosotros armamos el día.
                </p>
                <p className="my-8">
                  <Link to={INQUIRY_PATH} className="btn-accent" data-cta="logistics-private-tour">
                    Consultar un tour privado →
                  </Link>
                </p>

                <div className="section-eyebrow"><span>Sección 02 · Divulgación</span></div>
                <h2 id="section-02" className="scroll-mt-20">Divulgación de afiliados</h2>
                <div className="affiliate-disclosure">
                  <p>
                    Algunos enlaces de abajo son de afiliados. Si reservan a través de ellos, Tanuki Tabi Travel puede recibir una comisión sin costo adicional para ustedes.
                  </p>
                </div>

                <div className="section-eyebrow"><span>Sección 03 · Qué necesitan</span></div>
                <h2 id="section-03" className="scroll-mt-20">¿Cuáles de estas herramientas necesitan realmente?</h2>
                <HubTable caption="Según el tipo de viaje">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Su viaje</th>
                        <th>Suele valer la pena reservar</th>
                        <th>Suelen poder saltarse</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Solo, primera vez, solo celular, equipaje ligero</td>
                        <td>eSIM · asiento de shinkansen si viajan en fin de semana o feriado</td>
                        <td>Pocket WiFi · auto de aeropuerto</td>
                      </tr>
                      <tr>
                        <td className="scenario">Pareja, dos celulares, maletas medianas</td>
                        <td>eSIM (una por celular) o un Pocket WiFi · shinkansen</td>
                        <td>Auto de aeropuerto salvo llegada tarde</td>
                      </tr>
                      <tr>
                        <td className="scenario">Familia de 4, tabletas + laptop</td>
                        <td>Pocket WiFi · shinkansen (asientos juntos) · auto de aeropuerto</td>
                        <td>Malabares con eSIM en cuatro dispositivos</td>
                      </tr>
                      <tr>
                        <td className="scenario">Mucho equipaje (esquís, golf, maletas grandes)</td>
                        <td>Auto de aeropuerto · asientos reservados de shinkansen [VERIFY: reglas de equipaje grande por línea]</td>
                        <td>Autobús [VERIFY: límites de maletero por operador]</td>
                      </tr>
                      <tr>
                        <td className="scenario">Presupuesto primero, flexibles con el tiempo</td>
                        <td>eSIM · autobús</td>
                        <td>Auto de aeropuerto · shinkansen</td>
                      </tr>
                    </tbody>
                  </table>
                </HubTable>

                <div className="section-eyebrow"><span>Sección 04 · Conexión</span></div>
                <h2 id="section-04" className="scroll-mt-20">1) Conexión: ¿eSIM o Pocket WiFi?</h2>
                <p>
                  El problema más común del primer día es aterrizar sin datos. Bajan del avión, abren Maps y no carga nada. La solución es decidir <em>antes</em> de volar si el celular llevará su propia conexión (eSIM) o se colgará de un router compartido (Pocket WiFi).
                </p>

                <h3 id="online-decision" className="scroll-mt-20">La decisión en una tabla</h3>
                <HubTable caption="eSIM vs Pocket WiFi">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Tipo de viajero</th>
                        <th>Suele convenir</th>
                        <th>Por qué</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Solo / pareja, celular compatible con eSIM</td>
                        <td><strong>eSIM</strong></td>
                        <td>Se instala antes de volar; nada que recoger ni devolver</td>
                      </tr>
                      <tr>
                        <td className="scenario">Familia / 3+ dispositivos</td>
                        <td><strong>Pocket WiFi</strong></td>
                        <td>Un router compartido entre celulares, tabletas y laptops</td>
                      </tr>
                      <tr>
                        <td className="scenario">Celular bloqueado por operadora</td>
                        <td><strong>Pocket WiFi</strong></td>
                        <td>Evita límites de hardware y de bloqueo</td>
                      </tr>
                      <tr>
                        <td className="scenario">Laptop de trabajo con datos en el tren</td>
                        <td><strong>Pocket WiFi</strong> (o eSIM con hotspot [VERIFY: franquicia de hotspot por plan])</td>
                        <td>Una laptop no usa eSIM directamente</td>
                      </tr>
                    </tbody>
                  </table>
                </HubTable>

                <h3 id="esim" className="scroll-mt-20">eSIM — Japan Wireless</h3>
                <p>
                  Una eSIM es un perfil SIM digital que se instala escaneando un código QR. Japan Wireless publica planes 5G ilimitados y de datos fijos en la red KDDI, más opciones 4G [VERIFY: matriz actual en japan-wireless.com/esim]. El hotspot está soportado en sus planes 5G; la franquicia de alta velocidad escala con la duración del plan y la velocidad puede bajar después de usarla [VERIFY].
                </p>
                <p>
                  También mencionan un <strong>Pocket WiFi de respaldo gratis</strong> si la eSIM no conecta tras el soporte guiado [VERIFY: sigue vigente].
                </p>
                <p><strong>Cómo funciona, paso a paso</strong></p>
                <ol>
                  <li>Pidan en línea antes de salir y reciban el código QR por correo [VERIFY: método de entrega].</li>
                  <li>Escaneen e instalen el perfil mientras todavía están en el WiFi de casa — no lo dejen para el aeropuerto.</li>
                  <li>Al aterrizar, seleccionen la eSIM de Japón como línea de datos y activen el roaming de datos en esa línea.</li>
                  <li>Mantengan la SIM de casa activa solo para llamadas/SMS si la necesitan, con su roaming de datos apagado.</li>
                  <li>Listo — el celular debería conectarse en uno o dos minutos [VERIFY: tiempo típico de activación].</li>
                </ol>
                <p className="my-8">
                  <AffiliateLink slug="TODO_jw-esim" className="btn-outline">
                    Ver Japan Wireless eSIM →
                  </AffiliateLink>
                </p>

                <h3 id="pocket-wifi" className="scroll-mt-20">Pocket WiFi — Japan Wireless</h3>
                <p>
                  Un router pequeño, una conexión compartida. Japan Wireless presenta su plan "ONE" como <strong>datos realmente ilimitados sin throttling tipo FUP</strong>, batería de ~8–10 h, power bank gratis y hasta <strong>8 dispositivos</strong> a la vez [VERIFY: afirmaciones actuales en japan-wireless.com/en]. Ofrecen recogida en aeropuertos principales (Narita, Haneda, Kansai, Chubu, Fukuoka, New Chitose) o envío a hotel/residencia; la devolución es por sobre prepago en cualquier buzón de Japón [VERIFY: puntos de recogida y proceso de devolución]. Se presentan como operando desde 2012 con 1.6M+ viajeros [VERIFY].
                </p>
                <p><strong>Cómo funciona, paso a paso</strong></p>
                <ol>
                  <li>Pidan en línea y elijan recogida en aeropuerto o envío al hotel.</li>
                  <li>Recojan el router (y el power bank) en el mostrador o en la recepción del hotel al llegar [VERIFY: ubicación/horarios de mostradores].</li>
                  <li>Enciéndanlo y conecten sus dispositivos al nombre de red y contraseña.</li>
                  <li>Cárguenlo cada noche — el power bank es para el día largo afuera, no reemplaza el cargador de pared.</li>
                  <li>El último día, séllenlo en el sobre prepago y déjenlo en cualquier buzón antes del vuelo [VERIFY: plazo de devolución].</li>
                </ol>
                <p className="my-8">
                  <AffiliateLink slug="TODO_jw-wifi" className="btn-outline">
                    Ver Japan Wireless Pocket WiFi →
                  </AffiliateLink>
                </p>

                <h3 id="coverage" className="scroll-mt-20">Nota de cobertura</h3>
                <p>
                  En circuitos solo urbanos casi cualquier plan sirve. En montaña, zonas rurales e islas es donde se notan las diferencias entre redes. Si su ruta sale del circuito turístico principal — senderismo en los Alpes japoneses, islas del Setouchi, onsen remotos — confirmen qué red de operadora usa el plan antes de comprar [VERIFY por plan].
                </p>

                <div className="section-eyebrow"><span>Sección 05 · Shinkansen</span></div>
                <h2 id="section-05" className="scroll-mt-20">2) Entre ciudades: shinkansen (Japan Bullet Train)</h2>

                <h3 id="book-ahead" className="scroll-mt-20">Por qué reservar con anticipación</h3>
                <p>
                  En horas pico, las ventanillas JR pueden implicar <strong>20–40 minutos</strong> de fila. En fines de semana concurridos, temporada de cerezos, Golden Week y fin de año, los asientos reservados pueden agotarse.
                </p>
                <p>
                  Japan Bullet Train es un sitio en inglés para reservar shinkansen (y algunos express): piden en línea, reciben un <strong>código QR</strong> y canjean los boletos en papel en una estación JR designada. El soporte figura de 8:00 a 23:00 JST [VERIFY]. Hay reservas el mismo día [VERIFY: hora límite]. Corredores frecuentes: Tokyo–Kyoto / Shin-Osaka / Nagoya / Hiroshima / Hakata y rutas JR East al norte [VERIFY: cobertura de rutas para sus fechas].
                </p>

                <h3 id="train-vs-bus" className="scroll-mt-20">Tren vs autobús</h3>
                <HubTable caption="Shinkansen vs autobús">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Prioridad</th>
                        <th>Tomen el shinkansen</th>
                        <th>Tomen el autobús</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Tiempo</td>
                        <td>2–3 horas Tokio–Osaka [VERIFY: horarios]</td>
                        <td>Aprox. 8–11 horas [VERIFY]</td>
                      </tr>
                      <tr>
                        <td className="scenario">Costo</td>
                        <td>Más alto</td>
                        <td>A menudo una fracción del tren [VERIFY: tarifas en vivo]</td>
                      </tr>
                      <tr>
                        <td className="scenario">Comodidad con equipaje grande</td>
                        <td>Asiento reservado + espacio [VERIFY: reglas de equipaje grande]</td>
                        <td>Límites de maletero variables [VERIFY por operador]</td>
                      </tr>
                      <tr>
                        <td className="scenario">Llegar frescos a un día de tour</td>
                        <td>Sí</td>
                        <td>El nocturno llega temprano pero cansados</td>
                      </tr>
                    </tbody>
                  </table>
                </HubTable>

                <p><strong>Cómo funciona, paso a paso</strong></p>
                <ol>
                  <li>Reserven ruta, fecha y hora en línea; elijan asientos reservados y cantidad de viajeros.</li>
                  <li>Reciban la confirmación con código QR por correo [VERIFY: método de entrega].</li>
                  <li>En la estación JR designada, presenten el QR y recojan los boletos en papel [VERIFY: estaciones/mostradores].</li>
                  <li>Pasen los torniquetes del shinkansen con los boletos en papel y aborden su vagón reservado.</li>
                  <li>Guarden los boletos hasta salir en destino.</li>
                </ol>
                <p className="my-8">
                  <AffiliateLink slug="TODO_shinkansen" className="btn-outline">
                    Ver Japan Bullet Train →
                  </AffiliateLink>
                </p>

                <div className="section-eyebrow"><span>Sección 06 · Autobús</span></div>
                <h2 id="section-06" className="scroll-mt-20">3) Trayectos largos con presupuesto: autobús (Japan Bus Tickets)</h2>
                <p>
                  Japan Bus Tickets agrega <strong>1,000+ rutas / 160+ operadores</strong>, con reserva el mismo día y soporte multilingüe [VERIFY: cifras actuales]. Ejemplos "desde": Tokyo–Osaka desde ~<strong>¥5,000</strong> (~11 h), Tokyo–Kawaguchiko desde ~<strong>¥2,600</strong> (~2h40), Tokyo–Nagoya desde ~<strong>¥3,800</strong> [VERIFY: tarifa en vivo en japan-bus-tickets.com].
                </p>

                <h3 id="bus-who" className="scroll-mt-20">A quién le conviene</h3>
                <ul>
                  <li>Viajeros solos o parejas con tiempo y una mochila</li>
                  <li>Un día en la zona del Fuji (Tokyo–Kawaguchiko) donde el autobús va directo [VERIFY: ruta/tiempo]</li>
                  <li>Nocturno Tokyo–Osaka/Kyoto para ahorrar una noche de hotel</li>
                </ul>

                <h3 id="overnight-bus" className="scroll-mt-20">Etiqueta y realidad del autobús nocturno</h3>
                <p>
                  Los nocturnos son habituales en el corredor Tokyo–Osaka/Kyoto. Esperen paradas cada 2–3 h, reglas de luces apagadas y silencio. Lleven antifaz y almohada de cuello; revisen el tipo de asiento antes de reservar [VERIFY: clases de asiento por operador].
                </p>
                <p><strong>Cómo funciona, paso a paso</strong></p>
                <ol>
                  <li>Busquen ruta y fecha; comparen horarios y tipos de asiento.</li>
                  <li>Reserven en línea y reciban la confirmación [VERIFY: e-ticket vs. voucher impreso].</li>
                  <li>Ubiquen el punto de abordaje.</li>
                  <li>Muestren la confirmación al conductor, guarden el equipaje grande en el maletero [VERIFY: límites], lleven los objetos de valor con ustedes.</li>
                  <li>Viaje, parada de descanso, llegada.</li>
                </ol>
                <p className="my-8">
                  <AffiliateLink slug="TODO_highway-bus" className="btn-outline">
                    Ver Japan Bus Tickets →
                  </AffiliateLink>
                </p>

                <div className="section-eyebrow"><span>Sección 07 · Auto de aeropuerto</span></div>
                <h2 id="section-07" className="scroll-mt-20">4) Aeropuerto: auto a tarifa fija (Airport Taxi)</h2>

                <h3 id="train-vs-car" className="scroll-mt-20">Tren vs auto desde el aeropuerto</h3>
                <HubTable caption="Tren vs auto desde el aeropuerto">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Situación</th>
                        <th>Tren / expreso de aeropuerto</th>
                        <th>Auto pre-reservado a tarifa fija</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Una persona, solo equipaje de mano</td>
                        <td>Funciona</td>
                        <td>Excesivo</td>
                      </tr>
                      <tr>
                        <td className="scenario">Pareja, dos maletas medianas, llegada de día</td>
                        <td>Funciona</td>
                        <td>Cómodo pero no esencial</td>
                      </tr>
                      <tr>
                        <td className="scenario">Familia con niños, jet lag, llegada de noche</td>
                        <td>Posible pero agotador</td>
                        <td>Suele valer la pena</td>
                      </tr>
                      <tr>
                        <td className="scenario">3+ maletas grandes o equipo (esquís, golf)</td>
                        <td>Incómodo en andenes y trasbordos</td>
                        <td>Sí</td>
                      </tr>
                      <tr>
                        <td className="scenario">Llegada tarde tras el último tren [VERIFY: horarios]</td>
                        <td>No es opción</td>
                        <td>Sí</td>
                      </tr>
                    </tbody>
                  </table>
                </HubTable>

                <h3 id="airport-taxi-offers" className="scroll-mt-20">Qué ofrece Airport Taxi</h3>
                <p>
                  Airport Taxi (airport-taxi.tokyo) anuncia tarifas fijas con peajes, estacionamiento y combustible incluidos, vehículos clase Alphard y soporte JP/EN/ZH [VERIFY: listado actual]. Ejemplos: Haneda ↔ 23 distritos de Tokio ~<strong>¥14,700</strong>; Narita ↔ 23 distritos ~<strong>¥22,700</strong> [VERIFY: cotización en vivo — las tarifas cambian]. También muestran rutas Kansai / Itami [VERIFY].
                </p>

                <h3 id="immigration-buffer" className="scroll-mt-20">El margen de inmigración</h3>
                <p>
                  Tras un vuelo internacional, calculen ~60–90 minutos de inmigración, equipaje y aduana antes de la hora de recogida [VERIFY: espera incluida y cargos extra]. Den el número de vuelo al reservar [VERIFY: política de seguimiento de vuelos].
                </p>
                <p><strong>Cómo funciona, paso a paso</strong></p>
                <ol>
                  <li>Reserven en línea con número de vuelo, fecha, cantidad de pasajeros y de maletas.</li>
                  <li>Reciban la confirmación con punto de encuentro y contacto del conductor [VERIFY: proceso de punto de encuentro].</li>
                  <li>Pasen inmigración y aduana; avisen al conductor si hay demora [VERIFY: método de contacto].</li>
                  <li>Encuentro en llegadas, carga de equipaje, viaje al hotel.</li>
                  <li>La tarifa es la cotizada; confirmen el método de pago al reservar [VERIFY: opciones de pago].</li>
                </ol>
                <p className="my-8">
                  <AffiliateLink slug="TODO_airport-taxi" className="btn-outline">
                    Ver Airport Taxi →
                  </AffiliateLink>
                </p>

                <div className="section-eyebrow"><span>Sección 08 · Preguntas frecuentes</span></div>
                <h2 id="section-faq" className="scroll-mt-20">Preguntas frecuentes</h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3>¿Necesitamos eSIM y Pocket WiFi a la vez?</h3>
                    <p>
                      Normalmente no. Solo o pareja con celulares compatibles: eSIM. Familia o varios dispositivos: Pocket WiFi.
                    </p>
                  </div>
                  <div>
                    <h3>¿Y si la eSIM no conecta al aterrizar?</h3>
                    <p>
                      Japan Wireless describe soporte guiado y un Pocket WiFi de respaldo gratis si sigue sin conectar [VERIFY: sigue vigente].
                    </p>
                  </div>
                  <div>
                    <h3>¿Podemos comprar boletos de shinkansen el mismo día?</h3>
                    <p>
                      Muchas veces sí, pero en fines de semana feriados los asientos reservados pueden agotarse, y las filas llegan a 20–40 minutos.
                    </p>
                  </div>
                  <div>
                    <h3>¿Vale la pena el autobús nocturno?</h3>
                    <p>
                      Ahorra un pasaje y una noche de hotel. Cuesta calidad de sueño. Si la mañana siguiente es un gran día de sightseeing, muchos viajeros prefieren el tren y una cama de verdad.
                    </p>
                  </div>
                  <div>
                    <h3>¿Con cuánta anticipación programamos la recogida en el aeropuerto?</h3>
                    <p>
                      Unos 60–90 minutos después del aterrizaje programado en vuelos internacionales, y den el número de vuelo [VERIFY: política del proveedor].
                    </p>
                  </div>
                  <div>
                    <h3>¿Tanuki Tabi Travel reserva algo de esto por nosotros?</h3>
                    <p>
                      No. Son herramientas de terceros que reservan directamente. Nosotros armamos los días de sightseeing privados; la logística alrededor queda en sus manos para que puedan cambiarla libremente.
                    </p>
                  </div>
                </div>

                <div className="section-eyebrow"><span>Sección 09 · Nota final</span></div>
                <h2 id="section-closing" className="scroll-mt-20">Nota final</h2>
                <p>
                  Son herramientas de terceros opcionales para <strong>su</strong> planificación. Tanuki Tabi Travel no gestiona transporte ni alojamiento por ustedes — y es a propósito. ¿Prefieren fijar primero los días memorables y completar la logística después? Empiecen con la consulta de tour privado al{" "}
                  <a href="#section-01" className="text-accent hover:underline">inicio de esta página</a>.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EsLogistics;
