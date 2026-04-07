import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTAEs } from "@/components/blog/InlineCTAEs";

const EsExcursionKawagoeDesdeTokio = () => {
  return (
    <Layout>
      <SEO
        title="Kawagoe desde Tokio 2026: La Pequeña Edo a 30 min"
        description="Kawagoe, la Pequeña Edo, está a 30 minutos de Ikebukuro. Ruta completa, dulces de boniato, precios de transporte y cómo evitar las multitudes."
        canonicalPath="/es/blog/excursion-kawagoe-desde-tokio"
        hreflang={[
          { lang: "en", path: "/blog/kawagoe-day-trip-from-tokyo" },
          { lang: "es", path: "/es/blog/excursion-kawagoe-desde-tokio" },
          { lang: "x-default", path: "/blog/kawagoe-day-trip-from-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/es" },
          { name: "Blog", path: "/es/blog" },
          { name: "Excursión Kawagoe" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/kawagoe-kurazukuri-hero.webp"
          alt="Calle histórica de almacenes kurazukuri en Kawagoe, la Pequeña Edo"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Article Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link
              to="/es/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>
            <p className="text-label text-accent mb-3">Guías de Excursiones</p>
            <h1 className="heading-display text-foreground">
              Kawagoe desde Tokio: La Pequeña Edo Que la Mayoría de Turistas No Conoce
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                7 de marzo de 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, Guía-Intérprete con Licencia Nacional del Gobierno de Japón (全国通訳案内士) con más de 500 tours privados completados.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-sm text-muted-foreground mb-8">Última actualización: abril 2026</p>

            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Treinta minutos. Eso es todo lo que necesitas para pasar del caos de la estación de Ikebukuro a una calle que parece sacada del Japón de 1850. Sin billete de tren bala, sin transbordos complicados, sin comprometer un día entero. Solo un tren directo en la línea Tobu Tojo y, de repente, estás frente a almacenes de paredes de arcilla que los comerciantes del período Edo construyeron para proteger sus mercancías del fuego, y que siguen en pie hoy porque cumplieron su función.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kawagoe ha ganado muchísima popularidad en los últimos dos años. El interés de búsqueda por "excursión Kawagoe desde Tokio" ha crecido aproximadamente un 900% interanual, pero sigue siendo mucho menos concurrida que Kamakura o Nikko. La mayoría de los visitantes internacionales ni siquiera la conocen. Eso está cambiando rápido, y si planeas un viaje a Tokio en 2026, esta es la excursión de un día que yo pondría en lo más alto de tu lista.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Aquí tienes todo lo que necesitas para planear una <strong className="text-foreground">excursión a Kawagoe desde Tokio</strong>, contado por un guía que lleva clientes aquí regularmente y sigue descubriendo nuevas razones para volver.
            </p>

            {/* Por qué se llama Pequeña Edo */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Por qué Kawagoe se llama "la Pequeña Edo"
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Durante el período Edo (1603-1868), Kawagoe era una de las ciudades castillo más importantes cerca de la capital. Abastecía a Edo (la actual Tokio) de mercancías a través del río Shingashi, y sus comerciantes se enriquecieron con ese comercio. Construyeron sus almacenes en un estilo a prueba de incendios llamado kurazukuri: gruesas paredes de arcilla, pesados tejados de teja y contraventanas reforzadas con hierro. Estos edificios estaban diseñados para sobrevivir a los incendios que destruían regularmente las ciudades japonesas de madera.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La ironía es que mientras el antiguo Edo, la ciudad a la que servían estos almacenes, fue casi completamente destruido por terremotos y bombardeos, Kawagoe sobrevivió. Hoy, su barrio de almacenes se parece más al viejo Edo que cualquier lugar en la Tokio actual. Caminar por la calle principal es como adentrarse en un grabado ukiyo-e. Edificios kurazukuri de dos plantas flanquean ambos lados, con sus paredes oscuras de arcilla y sus pesadas puertas de madera sin cambios desde la era Meiji.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yo se lo explico así a mis clientes: si quieres entender cómo era realmente la Tokio del período Edo, las calles de los comerciantes, el comercio, la arquitectura, Kawagoe es lo más cerca que vas a estar. La propia Tokio siguió adelante. Kawagoe recordó. Para los amantes de la historia, es como encontrar una cápsula del tiempo perfectamente conservada a media hora de la metrópoli más moderna del mundo.
            </p>

            {/* Cómo llegar */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo llegar (y qué tren tomar)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hay tres formas de llegar a Kawagoe desde el centro de Tokio, y la que elijas importa más de lo que piensas:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Línea Tobu Tojo desde Ikebukuro (recomendada):</strong> 30 minutos en el expreso (kyuko), unos ¥480. Directo, sencillo, y te deja en la estación de Kawagoe. Es la opción más rápida y la que uso con mis clientes.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Línea Seibu Shinjuku desde la estación Seibu-Shinjuku:</strong> Unos 60 minutos en expreso, ¥500. Ojo: NO es la estación de Shinjuku normal. Es una estación separada, a 5 minutos a pie al norte. Llega a la estación Hon-Kawagoe, que en realidad está más cerca del barrio de almacenes.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Línea JR Kawagoe desde Shinjuku (vía Saikyo Line):</strong> Unos 50 minutos, cubierto por el JR Pass. Llega a la estación de Kawagoe. Solo elige esta opción si tienes un JR Pass y quieres aprovecharlo. Si no, la línea Tobu es más rápida.
              </li>
            </ul>

            {/* Comparación de costes de transporte */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Comparación de costes de transporte (ida y vuelta)
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground font-medium">Ruta</th>
                    <th className="text-left py-3 px-4 text-foreground font-medium">Tiempo</th>
                    <th className="text-left py-3 px-4 text-foreground font-medium">Coste ida/vuelta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Tobu Tojo (Ikebukuro)</td>
                    <td className="py-3 px-4 text-muted-foreground">30 min</td>
                    <td className="py-3 px-4 text-muted-foreground">~¥960</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">Seibu Shinjuku</td>
                    <td className="py-3 px-4 text-muted-foreground">60 min</td>
                    <td className="py-3 px-4 text-muted-foreground">~¥1.000</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">JR Kawagoe Line (Shinjuku)</td>
                    <td className="py-3 px-4 text-muted-foreground">50 min</td>
                    <td className="py-3 px-4 text-muted-foreground">Incluido con JR Pass</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Kawagoe Discount Pass (Tobu)</td>
                    <td className="py-3 px-4 text-muted-foreground">30 min</td>
                    <td className="py-3 px-4 text-muted-foreground">¥700 (tren + bus ilimitado)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Como ves, Kawagoe es una de las excursiones más económicas desde Tokio. Por menos de ¥1.000 ida y vuelta, estás en otra época. En comparación, ir a Nikko cuesta alrededor de ¥5.000 y a Kamakura unos ¥2.000. Si buscas un escapada asequible y rápida, Kawagoe no tiene competencia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Consejo del guía:</strong> El Kawagoe Discount Pass (¥700 de Tobu) incluye el trayecto de ida y vuelta en tren más autobús ilimitado dentro de Kawagoe. Merece la pena si quieres usar el autobús circular entre el barrio de almacenes y la zona de templos. Si prefieres caminar, puedes saltarte el pase. Toda la ciudad se recorre cómodamente a pie.
            </p>

            {/* Qué ver */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué ver: El barrio de almacenes, la torre de campana y el callejón de los dulces
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">El barrio de almacenes kurazukuri</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta es la atracción principal y la razón de hacer una <strong className="text-foreground">excursión a Kawagoe desde Tokio</strong>. Unos treinta almacenes kurazukuri bordean la calle Ichibangai, la mayoría convertidos en tiendas, cafeterías y galerías que conservan sus fachadas originales. El efecto es como caminar por un museo viviente. Los edificios son estructuras auténticas de la era Edo-Meiji, pero son negocios en funcionamiento, no piezas de exposición detrás de un cristal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fíjate en los detalles: las contraventanas a prueba de incendios que podían sellarse durante los fuegos, los emblemas familiares (kamon) tallados sobre las puertas y las variaciones en el grosor de los muros que delatan la riqueza de cada comerciante. Cuanto más gruesos los muros, más rica la familia. Un seguro contra incendios medido en arcilla.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Toki no Kane (la torre de campana)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La icónica torre de campana de madera de Kawagoe lleva marcando las horas desde el siglo XVII, y todavía suena cuatro veces al día (6:00, 12:00, 15:00 y 18:00). La estructura actual fue reconstruida tras un incendio en 1893, pero la tradición permanece intacta. Es el símbolo de Kawagoe, y escucharla sonar mientras estás entre los almacenes es uno de esos momentos en los que los siglos se comprimen y sientes una conexión genuina con el pasado.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Kashiya Yokocho (el callejón de los dulces)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un estrecho callejón con unas veinte tiendas que venden dulces tradicionales japoneses: caramelos duros artesanales, galletas de arroz, karinto y los famosísimos piruletas gigantes de ¥200 que son toda una institución en Kawagoe. Esto no es un invento para turistas: Kawagoe es un centro de fabricación de dulces desde la era Meiji, cuando el gran incendio de Tokio de 1923 interrumpió la industria dulcera de la capital y Kawagoe ocupó su lugar. Las tiendas de aquí son las herederas de aquella época.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Templo Kitain</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A menudo ignorado por los excursionistas que se centran en el barrio de almacenes, Kitain es uno de los templos más importantes históricamente de la región de Kanto. Contiene las únicas habitaciones que se conservan del Castillo de Edo original, trasladadas aquí en el siglo XVII después de que un incendio destruyera el castillo. Esto significa que estás caminando por las habitaciones donde nació Tokugawa Iemitsu, el tercer shogun. Déjalo asimilar: esas habitaciones ya no existen en Tokio, pero existen en Kawagoe. Kitain también tiene 540 estatuas de piedra rakan (discípulos de Buda) únicas, cada una con una expresión facial diferente. Encontrar la que "se parece a alguien que conoces" es una tradición muy querida.
            </p>

            {/* Qué comer */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Qué comer en Kawagoe (boniato en todas las formas imaginables)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El ingrediente estrella de Kawagoe es el boniato (satsumaimo), y la ciudad ha convertido este humilde tubérculo en una forma de arte. Encontrarás boniato en todas las formas posibles: chips, helado, cerveza, café, croquetas, tarta de queso, tartas y el tradicional imo-kenpi (bastones de boniato caramelizado). La variedad local, Kawagoe imo, se cultiva aquí desde el período Edo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los favoritos de mis clientes: boniatos recién asados de los vendedores callejeros (lo mejor en otoño/invierno), helado suave de boniato en las tiendas de Kashiya Yokocho y los chips de boniato que son adictivos. Para el almuerzo, prueba el unagi (anguila a la parrilla). Kawagoe es una ciudad con tradición de comer anguila, y varios restaurantes cerca del barrio de almacenes la sirven desde hace generaciones.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En mis tours, siempre reservo tiempo para comer en Kawagoe porque la cultura gastronómica aquí es diferente a la de Tokio: más pausada, más tradicional y profundamente conectada con la agricultura local. Es un bocado de cómo comía Japón antes de las tiendas de conveniencia y las cadenas de restaurantes.
            </p>

            <InlineCTAEs
              message="¿Te gustaría descubrir Kawagoe con un guía local?"
              linkText="Consulta nuestros tours privados ->"
              href="/es/tours"
            />

            {/* Kawagoe vs Nikko vs Kamakura */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Kawagoe vs. Nikko vs. Kamakura: ¿Qué excursión es la adecuada para ti?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Me lo preguntan constantemente, así que aquí va mi comparación honesta para cualquiera que esté decidiendo entre una <strong className="text-foreground">excursión a Kawagoe desde Tokio</strong> y las otras opciones populares:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Kawagoe:</strong> 30 minutos desde Tokio, centrada en la cultura mercantil y la arquitectura del período Edo, escena gastronómica excelente, se recorre a pie, posible en medio día. Ideal para: viajeros que quieren una excursión fácil y relajada con auténtica atmósfera histórica sin las exigencias físicas del senderismo ni la complejidad logística de destinos lejanos.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground"><Link to="/es/blog/kamakura-desde-tokio" className="text-accent hover:underline">Kamakura</Link>:</strong> 60 minutos desde Tokio, centrada en templos y el Gran Buda, con rutas de senderismo y playa. Ideal para: viajeros que quieren una mezcla de cultura, naturaleza y exploración activa. Más concurrida que Kawagoe.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground"><Link to="/es/blog/excursion-nikko-desde-tokio" className="text-accent hover:underline">Nikko</Link>:</strong> 2 horas desde Tokio, centrada en el santuario Tosho-gu (uno de los más ornamentados de Japón), paisajes naturales y cascadas. Ideal para: viajeros que quieren arquitectura religiosa espectacular y no les importa el trayecto más largo. Requiere un día completo.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si solo tienes tiempo para una excursión, Kamakura es la opción "segura" porque ofrece más variedad. Pero si quieres algo menos concurrido, más enfocado en la gastronomía y genuinamente sorprendente, Kawagoe es la elección inteligente. Y si dispones de dos excursiones, combina Kawagoe (medio día) con Kamakura o Nikko (día completo) para cubrir tanto la cultura mercantil como la cultura samurái y religiosa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para una comparación más detallada de todas las excursiones desde Tokio, consulta nuestra{" "}
              <Link to="/es/blog/comparativa-excursiones" className="text-accent hover:underline">
                guía comparativa de excursiones
              </Link>.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres un guía para tu excursión a Kawagoe?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ofrezco excursiones personalizadas a Kawagoe donde doy vida a la historia de los comerciantes, navego la escena gastronómica contigo y te llevo a rincones que la mayoría de visitantes pasa de largo. Ponte en contacto para planear tu escapada a la Pequeña Edo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">Ver Todos los Tours</Link>
                <Link to="/es/contact" className="btn-outline">Contactar</Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Preguntas frecuentes sobre Kawagoe desde Tokio</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuánto tiempo necesito para una excursión a Kawagoe desde Tokio?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Medio día (4-5 horas incluyendo el transporte) cubre cómodamente el barrio de almacenes, la torre de campana y el callejón de los dulces. Un día completo (6-8 horas) te permite añadir el templo Kitain, explorar callejuelas secundarias y comer sin prisas. La mayoría de mis clientes hacen la visita de medio día y quedan satisfechos.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿El JR Pass sirve para llegar a Kawagoe?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí, la línea JR Kawagoe cubre la ruta desde Shinjuku (vía Saikyo Line) hasta la estación de Kawagoe. Sin embargo, la línea Tobu Tojo desde Ikebukuro es más rápida y no está cubierta por el JR Pass. A menos que vayas a usar activamente el JR Pass ese día, la línea Tobu es mejor opción.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Cuál es la mejor época para visitar Kawagoe?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Las mañanas entre semana son ideales para evitar multitudes. El otoño (octubre-noviembre) es perfecto por el clima y la temporada de boniato. El Festival de Kawagoe a mediados de octubre, uno de los festivales de carrozas más impresionantes de Japón, es espectacular pero atrae a enormes multitudes. La primavera y el invierno también son buenas épocas; el verano es caluroso pero manejable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Merece la pena visitar Kawagoe si ya voy a Kamakura?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sí, son experiencias completamente diferentes. Kamakura gira en torno a templos, naturaleza y el Gran Buda. Kawagoe se centra en la cultura mercantil, la arquitectura del período Edo y la gastronomía. Se complementan a la perfección. Muchos de mis clientes hacen ambas en días diferentes y dicen que Kawagoe fue la sorpresa inesperada del viaje.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">¿Es Kawagoe la auténtica "Pequeña Edo" de Japón?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kawagoe es la ciudad que más legítimamente se ha ganado el título de Pequeña Edo (Koedo). Mientras que otras localidades usan el apodo por marketing, Kawagoe conserva auténticos almacenes del período Edo construidos por los comerciantes que abastecían la capital. Es el único lugar cerca de Tokio donde puedes ver cómo era realmente una calle mercantil de la era Edo, con edificios originales que siguen en uso.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["custom"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Kawagoe desde Tokio: La Pequeña Edo Que la Mayoría de Turistas No Conoce",
            description: "Kawagoe, la Pequeña Edo, está a 30 minutos de Ikebukuro. Ruta completa, dulces de boniato, precios de transporte y cómo evitar las multitudes.",
            author: {
              "@type": "Person",
              name: "Manabu",
              jobTitle: "Guía-Intérprete con Licencia Nacional del Gobierno de Japón",
              url: "https://tanuki-tabi-travel.com/about",
            },
            datePublished: "2026-03-07",
            dateModified: "2026-04-06",
            publisher: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/excursion-kawagoe-desde-tokio",
            },
            inLanguage: "es",
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto tiempo necesito para una excursión a Kawagoe desde Tokio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Medio día (4-5 horas) cubre los puntos principales. Un día completo (6-8 horas) te permite añadir el templo y comer sin prisas.",
                },
              },
              {
                "@type": "Question",
                name: "¿El JR Pass sirve para llegar a Kawagoe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, por la línea JR Kawagoe desde Shinjuku. Pero la línea Tobu Tojo desde Ikebukuro es más rápida y no está cubierta por el JR Pass.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuál es la mejor época para visitar Kawagoe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mañanas entre semana. El otoño es ideal por el clima y la temporada de boniato. El festival de octubre es espectacular pero muy concurrido.",
                },
              },
              {
                "@type": "Question",
                name: "¿Merece la pena visitar Kawagoe si ya voy a Kamakura?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, son experiencias completamente diferentes. Kamakura es templos y naturaleza; Kawagoe es cultura mercantil y gastronomía. Se complementan perfectamente.",
                },
              },
              {
                "@type": "Question",
                name: "¿Es Kawagoe la auténtica Pequeña Edo de Japón?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, Kawagoe conserva auténticos almacenes del período Edo y es el único lugar cerca de Tokio donde se puede ver una calle mercantil original de esa era.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default EsExcursionKawagoeDesdeTokio;
