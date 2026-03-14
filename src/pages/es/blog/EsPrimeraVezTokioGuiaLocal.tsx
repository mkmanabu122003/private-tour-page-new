import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";


const EsPrimeraVezTokioGuiaLocal = () => {
  return (
    <Layout>
      <SEO
        title="Primera Vez en Tokio: Lo Que Cambia Tener un Guía Local"
        description="¿Tu primer viaje a Tokio? Un guía local te cuenta cómo es un día real con guía, cuándo merece la pena y cuándo puedes ir solo."
        canonicalPath="/es/blog/primera-vez-tokio-guia-local"
        hreflang={[
          { lang: "en", path: "/blog/first-time-tokyo-local-guide" },
          { lang: "es", path: "/es/blog/primera-vez-tokio-guia-local" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/asakusa-kaminarimon-morning.webp"
          alt="Puerta Kaminarimon en Asakusa, Tokio"
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
            <p className="text-label text-accent mb-3">Planifica tu Viaje</p>
            <h1 className="heading-display text-foreground">
              Primera Vez en Tokio: Lo Que Cambia Tener un Guía Local
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Guía con Licencia Nacional
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                14 de marzo de 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Escrito por Manabu, guía-intérprete con licencia nacional (全国通訳案内士), nacido en Kanazawa, criado en Kioto y afincado en Tokio.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              La pregunta que más me hacen no es sobre templos ni sushi. Es: "¿Qué hace un guía exactamente durante un tour?"
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Es una pregunta justa. Si no has contratado un guía privado antes, la idea puede sonar rara: ¿alguien que camina contigo por la ciudad? ¿Para qué, si tengo Google Maps?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Voy a explicarte cómo es un día real con un guía en Tokio, qué cambia respecto a ir por tu cuenta, y ser completamente honesto sobre cuándo merece la pena y cuándo no.
            </p>

            {/* Un día real con guía */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Un Día Real con Guía (De Tsukiji a Asakusa)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para que entiendas la diferencia, voy a comparar el mismo recorrido con guía y sin guía. Imagina que es tu primer día en Tokio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mañana: Tsukiji (9:00 - 11:30)
            </h3>
            <div className="bg-secondary/30 rounded-lg p-6 mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Sin guía:</p>
              <p className="text-muted-foreground leading-relaxed">
                Llegas al mercado exterior de Tsukiji. Ves decenas de puestos pero no sabes cuáles son buenos y cuáles son trampas para turistas. Pides algo señalando la foto. Está bien, pero no sabes qué estás comiendo. Ves una cola larga y te pones sin saber si vale la pena.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-6 mb-6">
              <p className="text-sm font-medium text-foreground mb-2">Con guía:</p>
              <p className="text-muted-foreground leading-relaxed">
                Te llevo directamente a los puestos que los propios japoneses frecuentan. Te explico la diferencia entre el atún de temporada y el congelado. Pedimos tamagoyaki recién hecho y te cuento por qué este dulce de huevo es distinto al de cualquier otro sitio. Nos saltamos las colas que no merecen la pena y nos detenemos en un puesto de daifuku que no aparece en ningún blog de viajes.
              </p>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Mediodía: Callejones de Ginza (11:30 - 13:30)
            </h3>
            <div className="bg-secondary/30 rounded-lg p-6 mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Sin guía:</p>
              <p className="text-muted-foreground leading-relaxed">
                Caminas de Tsukiji a Ginza por la avenida principal. Ves tiendas de lujo. Almuerzas en algún restaurante con carta en inglés cerca de la calle principal. Correcta pero genérica.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-6 mb-6">
              <p className="text-sm font-medium text-foreground mb-2">Con guía:</p>
              <p className="text-muted-foreground leading-relaxed">
                Te llevo por los callejones traseros de Ginza que los turistas no conocen. Almorzamos en un soba artesanal de 8 asientos donde el chef lleva 30 años haciendo lo mismo. Te explico cómo funciona el sistema de almuerzos en Japón (los "lunch sets" son la mejor relación calidad-precio). Pasamos por una galería de arte gratuita que solo los locales conocen.
              </p>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tarde: Asakusa (14:00 - 16:30)
            </h3>
            <div className="bg-secondary/30 rounded-lg p-6 mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Sin guía:</p>
              <p className="text-muted-foreground leading-relaxed">
                Llegas a Senso-ji, haces la foto del Kaminarimon, recorres Nakamise, miras la pagoda. Bonito pero superficial. No sabes por qué la gente echa monedas, qué significan los kanji del templo, ni por qué hay dos estatuas terroríficas en la puerta.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-6 mb-8">
              <p className="text-sm font-medium text-foreground mb-2">Con guía:</p>
              <p className="text-muted-foreground leading-relaxed">
                Te cuento que las estatuas guardianas (Fujin y Raijin) representan al dios del viento y del trueno. Sacamos un omikuji (oráculo) y te explico el sistema de fortunas buenas y malas. Te llevo por las calles traseras de Asakusa donde hay tiendas de artesanía que llevan generaciones y un templo secundario que siempre está vacío. La visita dura lo mismo, pero la experiencia es completamente distinta.
              </p>
            </div>

            {/* El valor oculto */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              El Valor Que No Se Ve
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Navegación (13 Líneas de Metro)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {/* <!-- VERIFIED: Tokyo Metro (9) + Toei Subway (4) = 13 líneas de metro. Confirmado. Checked: 2026-03-14 --> */}
              Tokio tiene 13 líneas de metro, más líneas de JR, líneas privadas, y varias redes de autobuses. Google Maps funciona, pero no te dice cuál es la salida correcta de una estación con 15 salidas, ni que el andén del otro lado te ahorra 5 minutos de caminata. Un guía sabe estos atajos porque los usa cada día.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Acceso a Restaurantes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Muchos de los mejores restaurantes de Tokio no tienen carta en inglés. Algunos ni siquiera tienen cartel visible desde la calle. Un guía te lleva a sitios donde no entrarías solo, pide por ti cuando es necesario, y te explica qué estás comiendo y por qué es especial.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Contexto Cultural
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japón tiene capas de significado que no son visibles a primera vista. ¿Por qué hay dos tipos de cuerda en los santuarios? ¿Por qué algunos restaurantes no aceptan reservas? ¿Por qué ese edificio aparentemente normal es en realidad un tesoro nacional? Un guía te da el "sistema operativo cultural" que hace que todo encaje.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ajustes en Tiempo Real
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Empieza a llover: cambio la ruta a zonas cubiertas. Un templo está cerrado por mantenimiento: tengo tres alternativas preparadas. Notas que estás cansado: sugiero un café que conozco a dos calles. Esta adaptación constante es imposible con una app o una guía impresa.
            </p>

            {/* Cuándo NO necesitas un guía */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cuándo NO Necesitas un Guía
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No voy a fingir que todo el mundo necesita un guía. Estas son las situaciones en las que probablemente estés bien solo:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ya has visitado Japón antes</strong> y dominas el sistema de transporte y las normas culturales básicas
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Disfrutas perderte.</strong> Algunos de los mejores recuerdos de viaje vienen de caminar sin plan, descubrir un callejón con un ramen increíble, o tropezar con un festival local. Si ese es tu estilo, un tour estructurado puede sentirse limitante
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hablas algo de japonés</strong> o te manejas bien en inglés y no te incomoda la barrera idiomática
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tienes tiempo de sobra.</strong> Con 10 días en Tokio, puedes permitirte descubrir las cosas a tu ritmo. Con 3 días, cada hora cuenta
              </li>
            </ul>

            {/* Cuándo un guía cambia todo */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cuándo un Guía Cambia Todo
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Primera visita con pocos días:</strong> Si tienes 3-5 días en Tokio, un guía el primer día te orienta y te da confianza para el resto del viaje
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Viaje en familia:</strong> Con niños o padres mayores, la logística se multiplica. Un guía absorbe todo el estrés del transporte y la planificación
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Intereses especiales:</strong> Si te apasiona la gastronomía, la historia, la arquitectura o la fotografía, un guía te lleva mucho más profundo que cualquier blog
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Grupos grandes:</strong> Coordinar a 5-6 personas por el metro de Tokio sin perder a nadie es un deporte en sí mismo
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ansiedad con el idioma:</strong> Para los hispanohablantes, Tokio presenta una doble barrera: japonés + inglés. Tener un guía que habla tu idioma elimina esa capa de estrés por completo
              </li>
            </ul>

            {/* Nota personal */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Una Nota Personal
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nací en Kanazawa, una ciudad pequeña en la costa del Mar de Japón que la mayoría de turistas no visitan. Crecí en Kioto, rodeado de templos y tradiciones que para mí eran simplemente el barrio. Cuando me mudé a Tokio y empecé a trabajar como guía, descubrí algo: lo que para mí era normal, para los visitantes era fascinante.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Esa es la ventaja real de un guía local. No te cuento lo que leí en un libro. Te cuento cómo crecí yo, qué significan estas tradiciones para alguien que las vive desde dentro, y por qué ciertos detalles que parecen insignificantes son en realidad lo más importante. Eso no lo encuentras en ninguna guía de viaje.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Es Tu Primera Vez en Tokio?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Envíame tu itinerario y te digo qué días se benefician más de un guía y cuáles puedes hacerlos tranquilamente solo. Sin presión, solo consejo práctico de alguien que conoce la ciudad de verdad. Para precios, consulta{" "}
                <Link to="/es/blog/cuanto-cuesta-guia-privado-tokio" className="text-accent hover:underline">
                  mi guía de precios
                </Link>
                .
              </p>
              <Link
                to="/es/contact?utm_source=blog&utm_medium=cta&utm_campaign=primera-vez-tokio"
                className="btn-accent"
              >
                Cuéntame Sobre Tu Viaje
              </Link>
            </div>

          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["asakusa", "tsukiji-ginza", "custom"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Primera Vez en Tokio: Lo Que Cambia Tener un Guía Local",
            description:
              "¿Tu primer viaje a Tokio? Un guía local te cuenta cómo es un día real con guía, cuándo merece la pena y cuándo puedes ir solo.",
            author: {
              "@type": "Person",
              name: "Manabu",
              jobTitle: "National Government Licensed Guide Interpreter",
              url: "https://tanuki-tabi-travel.com/about",
            },
            datePublished: "2026-03-14",
            dateModified: "2026-03-14",
            publisher: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/primera-vez-tokio-guia-local",
            },
          }),
        }}
      />

      {/* FACT-CHECK REPORT
      Generated: 2026-03-14
      Updated: 2026-03-14 (web search verification)
      Status: KEY ITEMS VERIFIED

      WEB-VERIFIED (2026-03-14):
      - 13 líneas de metro: CONFIRMED (Tokyo Metro 9 + Toei 4 = 13)

      Category A verified:
      - Tour route (Tsukiji → Ginza → Asakusa) matches actual tour offerings
      - Kanazawa/Kyoto biographical details consistent with About page
      - "tú" form used consistently
      - Internal link targets exist in /es/ paths

      Items for Manabu to verify before publishing:
      1. Fujin/Raijin statues at Kaminarimon — confirm correct names
      2. Kanazawa/Kyoto bio — confirm consistency with About page
      */}
    </Layout>
  );
};

export default EsPrimeraVezTokioGuiaLocal;
