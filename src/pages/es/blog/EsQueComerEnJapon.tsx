// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { DiagnosticTrigger } from "@/components/blog/DiagnosticTrigger";
import { foodFinderEsConfig } from "@/data/diagnostics/foodFinderEs";

const EsQueComerEnJapon = () => {
  return (
    <Layout>
      <SEO
        title="Qué Comer en Japón 2026: 15 Platos Imprescindibles (Guía Local)"
        description="Sushi, ramen, tempura y mucho más. Un guía oficial con 500+ tours te dice qué pedir, dónde encontrarlo y en qué orden probarlo. Lista definitiva."
        canonicalPath="/es/blog/que-comer-en-japon"
        hreflang={[
          { lang: "es", path: "/es/blog/que-comer-en-japon" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/food-tour-izakaya.webp"
          alt="Izakaya japonés: qué comer en Japón"
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
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li><Link to="/es" className="hover:text-foreground transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/es/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground">Qué Comer en Japón</li>
              </ol>
            </nav>
            <p className="text-label text-accent mb-3">Gastronomía Japonesa</p>
            <h1 className="heading-display text-foreground">
              Qué Comer en Japón: 15 Platos Que No Puedes Perderte
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
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introducción */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Después de más de 500 tours guiando a viajeros de todo el mundo por Japón, hay una pregunta que me hacen absolutamente todos: "Manabu, ¿qué comer en Japón?" Y la verdad es que la respuesta no es sencilla, porque la gastronomía japonesa va mucho más allá del sushi y el ramen. Es un universo enorme donde cada momento del día tiene sus propios platos, sus propios rituales y sus propios sabores.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Por eso he creado esta guía diferente. En lugar de darte una lista aleatoria de platos, he organizado los 15 imprescindibles por momento del día: desayuno, almuerzo, cena y snacks para picar entre comidas. Así sabrás exactamente qué pedir en cada ocasión y no desperdiciarás ni un solo bocado de tu viaje.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Si ya sabes qué comer en Japón en general pero te interesa más la escena callejera de Tokio, echa un vistazo a mi{" "}
              <Link to="/es/blog/comida-callejera-tokio" className="text-accent hover:underline">
                guía de comida callejera en Tokio
              </Link>
              . Pero si quieres una visión completa de los platos esenciales, estás en el lugar correcto.
            </p>

            {/* Cómo usar esta guía */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cómo Usar Esta Guía (Organizada por Momento del Día)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La comida japonesa está profundamente ligada al momento del día. Un japonés nunca comería ramen para desayunar (bueno, quizás después de una noche de fiesta), ni pediría un tamago kake gohan a la hora de cenar. Entender este ritmo es clave para comer como un local.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              He numerado los 15 platos del 1 al 15 y los he agrupado por el momento ideal para disfrutarlos. Al final encontrarás mi plan de 5 días para que puedas probarlos todos sin agobios. Cada plato incluye precio aproximado en yenes y un consejo para pedirlo incluso sin hablar japonés.
            </p>

            {/* Desayuno */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Para el Desayuno (Platos 1-3)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El desayuno japonés es una de las grandes sorpresas del viaje. Olvídate de las tostadas con mermelada: aquí la mañana empieza con sabores umami, arroz caliente y proteínas. Pero no te preocupes, también hay opciones más suaves para estómagos que necesitan despertar poco a poco.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              1. Tamago Kake Gohan (TKG)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Arroz caliente recién hecho con un huevo crudo batido encima, un chorrito de salsa de soja y a veces unas escamas de bonito. Suena simple. Es simple. Y es absolutamente delicioso. El huevo crudo se cocina ligeramente con el calor del arroz, creando una textura sedosa y reconfortante que te prepara para el día. En Japón los huevos son extremadamente frescos y se pueden consumir crudos con total seguridad. Precio: 300-500 yenes en una cadena como Yoshinoya o Sukiya. Mi consejo: pide "TKG set" y te lo traerán completo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              2. Onigiri de Konbini
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las tiendas de conveniencia japonesas (konbini) son un mundo aparte. Un onigiri de 7-Eleven, Lawson o FamilyMart cuesta entre 120 y 200 yenes y es una bola de arroz prensada envuelta en alga nori crujiente, rellena de salmón, atún con mayonesa, umeboshi (ciruela encurtida) u otros ingredientes. El ingenioso envoltorio mantiene el alga separada del arroz hasta que la abres, así siempre está crujiente. Para un desayuno rápido, dos onigiri y un café en lata caliente del konbini son la combinación perfecta. Busca los de la gama "premium": cuestan 50 yenes más y la diferencia es notable.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              3. Tostada Japonesa (Shokupan)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si necesitas algo más familiar para empezar el día, el shokupan te encantará. Es un pan de molde japonés ultraesponjoso, cortado en rebanadas gruesas, tostado hasta que la superficie está crujiente pero el interior sigue siendo casi como un algodón de azúcar. En las kissaten (cafeterías tradicionales), lo sirven con mantequilla y a veces con pasta de judías rojas dulces (ogura toast). Es una experiencia que no tiene nada que ver con el pan de molde occidental. Precio: 400-700 yenes con café incluido en un set de morning (desayuno). En Nagoya, la cultura del morning es tan fuerte que muchas cafeterías te dan el desayuno gratis al pedir un café.
            </p>

            {/* Almuerzo */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Para el Almuerzo (Platos 4-8)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El almuerzo es el momento estrella de la gastronomía japonesa cotidiana. Los japoneses se toman el almuerzo muy en serio: hay restaurantes que solo abren para el servicio de mediodía y ofrecen platos de una calidad increíble a precios que, comparados con Europa o Latinoamérica, parecen de broma. Aquí es donde realmente entenderás qué comer en Japón con el mejor equilibrio entre precio y calidad.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              4. Ramen
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El plato que todos asocian con Japón y que, sin embargo, pocos han probado en su versión auténtica. El ramen japonés no tiene absolutamente nada que ver con los fideos instantáneos del paquete. Hay cuatro grandes familias de caldo: <strong className="text-foreground">shoyu</strong> (soja, el más clásico de Tokio), <strong className="text-foreground">shio</strong> (sal, más ligero), <strong className="text-foreground">miso</strong> (fermentado, cremoso, típico de Sapporo) y <strong className="text-foreground">tonkotsu</strong> (hueso de cerdo hervido durante horas, originario de Fukuoka). Cada cuenco lleva fideos hechos ese mismo día, toppings como chashu (cerdo braseado), huevo marinado, nori y cebolleta. Precio: 800-1.200 yenes. Ve a un restaurante especializado, no a un sitio que sirve "de todo". Y un truco: si la cola llega a la calle, probablemente merece la pena.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              5. Tonkatsu
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chuleta de cerdo empanada y frita hasta que el exterior está dorado y crujiente como el cristal, mientras el interior permanece jugoso y tierno. Se sirve sobre una rejilla (para que no pierda el crujiente), acompañada de arroz, sopa de miso, col rallada con un aliño ligeramente ácido y la famosa salsa tonkatsu, dulce, densa y con un toque de fruta. El set de almuerzo (teishoku) en un buen restaurante de tonkatsu es una de las mejores comidas que puedes hacer en Japón por 1.000-1.500 yenes. Busca cadenas especializadas como Maisen o Wako, o pregunta a cualquier local por su tonkatsu-ya favorito.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              6. Soba
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fideos finos de trigo sarraceno, servidos fríos con una salsa de inmersión (zaru soba) o calientes en un caldo aromático. La soba fría es perfecta para el verano japonés: sumerges los fideos en la tsuyu (salsa a base de dashi, soja y mirin), los sorbes con fuerza (sí, en Japón sorber los fideos es de buena educación y ayuda a enfriarlos) y repites. Un plato de soba hecha a mano cuesta entre 700 y 1.000 yenes. Para la experiencia completa, busca un restaurante donde hagan la soba delante de ti (teuchi soba).
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              7. Udon
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Si la soba es la elegancia, el udon es el abrazo reconfortante. Fideos gruesos, blancos, masticables, servidos en un caldo caliente con diferentes toppings. El kitsune udon lleva una pieza de tofu frito dulce, el tempura udon viene con una gamba en tempura crujiente. En Kagawa (la "capital del udon"), la gente se toma este plato tan en serio que hay más restaurantes de udon per cápita que en cualquier otro lugar del mundo. Precio: 400-800 yenes. Es posiblemente la comida más barata y satisfactoria que puedes encontrar cuando estés decidiendo qué comer en Japón con presupuesto ajustado.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              8. Curry Japonés
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aquí viene una de las mayores sorpresas: el curry japonés no tiene nada que ver con el curry indio. Es más como un guiso suave, ligeramente dulce, con una salsa espesa y oscura que se sirve sobre arroz. La consistencia recuerda a un potaje casero, y el nivel de picante es muy bajo (a menos que lo pidas extra picante). Se puede pedir con tonkatsu encima (katsu curry, una combinación celestial), con verduras o con carne estofada. Las cadenas como CoCo Ichibanya te permiten personalizar el nivel de picante, la cantidad de arroz y los toppings. Precio: 700-1.000 yenes. Es comfort food en estado puro y uno de los platos más populares entre los propios japoneses.
            </p>

            {/* Cena */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Para la Cena (Platos 9-12)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La cena en Japón es un asunto social. Es cuando los japoneses salen con compañeros de trabajo, amigos o familia a disfrutar de la comida con más calma, a menudo acompañada de cerveza, sake o highball (whisky con soda). Los restaurantes nocturnos ofrecen experiencias que simplemente no existen durante el día.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              9. Yakitori
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Brochetas de pollo a la parrilla de carbón, pero llevadas a un nivel de arte que no imaginas. En un buen yakitori-ya, cada parte del pollo tiene su propia brocheta: momo (muslo), negima (muslo con puerro), tsukune (albóndiga), kawa (piel crujiente), nankotsu (cartílago crujiente) y hasta corazón y hígado para los más aventureros. Se piden en tandas de dos o tres brochetas, con sal (shio) o con salsa dulce (tare). Acompáñalas con una cerveza fría y estás viviendo una noche japonesa auténtica. Precio: 100-200 yenes por brocheta; una cena completa con bebida sale por unos 2.000-3.000 yenes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              10. Okonomiyaki
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A menudo la describen como "pizza japonesa" o "tortilla japonesa", pero la verdad es que el okonomiyaki es su propia categoría. Es una masa de harina con col, huevo y los ingredientes que elijas (cerdo, marisco, queso, mochi), cocinada en una plancha caliente delante de ti y cubierta con salsa okonomiyaki, mayonesa japonesa, escamas de bonito danzantes y alga nori en polvo. En Hiroshima, la versión local lleva fideos yakisoba dentro y se construye por capas. En Osaka, todo se mezcla junto. Ambas están increíbles. Precio: 800-1.500 yenes. El proceso de verlo cocinar es la mitad de la experiencia.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              11. Shabu-shabu
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una olla con caldo hirviendo en el centro de la mesa y láminas finísimas de ternera o cerdo que sumerges durante unos segundos. "Shabu shabu" es literalmente la onomatopeya del sonido que hace la carne al pasar por el caldo. La carne sale tierna e increíblemente suave, y la mojas en salsa de sésamo (goma-dare) o salsa ponzu (cítrica). Es una cena tranquila, casi meditativa, perfecta para cuando quieres algo ligero pero especial. Con wagyu, es una experiencia sublime. Precio: 2.500-5.000 yenes por persona en un restaurante de nivel medio.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              12. Sushi de Verdad
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dejo el sushi para la cena a propósito. Sí, puedes comer sushi a cualquier hora, pero la experiencia definitiva es sentarte en una barra de sushi por la noche, pedir omakase (a elección del chef) y dejar que el itamae te sorprenda pieza a pieza. El sushi auténtico en Japón no lleva salsas extrañas ni ingredientes de fusión: es arroz sazonado con vinagre a la temperatura corporal, una pieza de pescado impecablemente fresco y a veces un toque de wasabi real (rallado de la raíz, no del tubo). Para una primera experiencia, los kaiten-zushi (sushi de cinta transportadora) como Sushiro o Kurazushi ofrecen calidad sorprendente por 100-200 yenes el plato. Para una experiencia memorable, un omakase de nivel medio cuesta 5.000-10.000 yenes. Si buscas una experiencia aún más auténtica, puedo llevarte a los mejores puestos en nuestro{" "}
              <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">
                tour por Tsukiji y Ginza
              </Link>
              .
            </p>

            {/* Picar entre comidas */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Para Picar Entre Comidas (Platos 13-15)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La comida callejera japonesa es un capítulo aparte. No es tan omnipresente como en el sudeste asiático, pero cuando la encuentras, en mercados, festivales, zonas turísticas y ciertos barrios, es absolutamente extraordinaria. Estos tres son los imprescindibles que siempre recomiendo cuando me preguntan qué comer en Japón entre horas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              13. Takoyaki
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bolitas de masa crujientes por fuera y cremosas por dentro, con un trozo de pulpo en el centro, cubiertas de salsa, mayonesa, escamas de bonito y alga nori. Nacieron en Osaka, donde literalmente cada barrio tiene su puesto de takoyaki favorito. Cuidado: están ardiendo por dentro. Los recién hechos son tan calientes que los japoneses tienen una expresión para esa danza que haces al intentar no quemarte la boca. Precio: 500-700 yenes por una ración de 6-8 bolitas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              14. Taiyaki
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un gofre con forma de pez (tai = dorada, un pez de buena suerte en Japón) relleno de anko (pasta de judías rojas dulces). La versión clásica es perfecta en su simplicidad, pero hoy encontrarás variantes con crema pastelera, chocolate, boniato o incluso queso. Lo importante es que esté recién hecho, con la masa caliente y crujiente. Precio: 200-400 yenes. Los encontrarás especialmente en zonas como Asakusa y Yanaka, perfectos para comer mientras paseas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              15. Mochi
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pastelitos de arroz glutinoso machacado con una textura elástica y masticable que no se parece a nada occidental. Los daifuku mochi vienen rellenos de pasta de judías rojas, y las versiones modernas incluyen fresa (ichigo daifuku, una combinación que parece extraña pero es genial), helado o matcha. Los encontrarás en wagashi-ya (tiendas de dulces tradicionales), konbini y prácticamente en cualquier lugar. Precio: 150-400 yenes por pieza. Un consejo: los mochi frescos de una tienda tradicional son incomparablemente mejores que los envasados.
            </p>

            {/* Plan de 5 días */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              En Qué Orden Probar Todo (Mi Plan de 5 Días)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de guiar cientos de tours, he perfeccionado un plan para que puedas probar estos 15 platos sin sentirte abrumado. La clave es no intentar comer todo el primer día. Tu estómago necesita adaptarse y, sobre todo, cada plato merece ser disfrutado con calma.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Día 1:</strong> Onigiri de konbini para desayuno (suave, fácil). Ramen para almuerzo (tu primer gran plato). Yakitori para cena (casual, divertido, perfecto para jet lag).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Día 2:</strong> Tamago kake gohan para desayuno (más aventurero). Tonkatsu para almuerzo. Okonomiyaki para cena. Taiyaki como snack por la tarde.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Día 3:</strong> Shokupan en una kissaten para desayuno. Soba para almuerzo. Shabu-shabu para cena. Takoyaki como snack.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Día 4:</strong> Repite tu desayuno favorito. Udon para almuerzo. Sushi omakase para cena (el gran evento). Mochi de postre.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Día 5:</strong> Repite tu desayuno favorito. Curry japonés para almuerzo (comfort food para el último día). Cena libre para repetir tu plato favorito de la semana. Así habrás probado los 15 y sabrás exactamente qué comer en Japón en tu próxima visita.
            </p>

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas Frecuentes
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Cuál es el plato más popular?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entre los propios japoneses, el curry japonés y el ramen compiten constantemente por el primer puesto en las encuestas de comida favorita. Para los viajeros, el ramen suele ser el que más impacta porque la diferencia entre el ramen auténtico y el instantáneo es abismal. Pero si tuviera que elegir el plato que más sonrisas genera en mis tours, diría que el tonkatsu. A todo el mundo le encanta.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Cuánto cuesta comer al día?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japón es sorprendentemente asequible para comer. Un presupuesto cómodo es de 3.000-5.000 yenes al día (unos 20-35 euros) si comes en restaurantes locales, cadenas y konbini. Esto incluye desayuno en konbini (300-500 yenes), almuerzo en un restaurante de ramen o tonkatsu (800-1.500 yenes) y cena en un izakaya o yakitori-ya (1.500-3.000 yenes). Si quieres una cena de sushi omakase, sube el presupuesto ese día a 8.000-12.000 yenes en total. Comer de lujo en Japón es caro, pero comer bien es increíblemente barato.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Puedo ser vegetariano en Japón?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sí, pero requiere planificación. La cocina japonesa usa dashi (caldo de bonito) en casi todo, así que incluso platos que parecen vegetarianos pueden contener pescado. Sin embargo, las cosas han mejorado mucho en los últimos años. En Tokio y Kioto hay restaurantes vegetarianos excelentes, los templos budistas sirven shojin ryori (cocina vegetariana monástica), y cada vez más restaurantes regulares ofrecen opciones sin carne. Mi consejo: lleva una tarjeta en japonés que explique tus restricciones dietéticas. Puedo prepararte una durante nuestros tours.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Cómo pido comida sin hablar japonés?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Más fácil de lo que piensas. Muchos restaurantes tienen máquinas expendedoras de tickets en la entrada: pones el dinero, pulsas el botón del plato que quieres (casi siempre con foto), y le entregas el ticket al cocinero. Sin palabras necesarias. Los restaurantes con carta suelen tener fotos o réplicas de plástico en la vitrina. Y en los konbini, todo tiene foto en el envase. Si todo lo demás falla, Google Translate con la cámara del móvil funciona bastante bien con los menús japoneses. Pero lo más fácil: únete a uno de nuestros tours y yo pido por ti.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿La comida japonesa es picante?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En general, no. La gastronomía japonesa se basa en el umami, la sal, la dulzura y la acidez, pero rara vez en el picante. El wasabi tiene un picor nasal momentáneo (no en la lengua como el chile), y el shichimi togarashi (mezcla de siete especias) añade un calor suave a algunos platos. Pero en comparación con la cocina coreana, tailandesa o mexicana, la comida japonesa es muy poco picante. Es perfecto para viajeros que no toleran bien el picante: puedes comer prácticamente todo sin preocuparte.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres descubrir qué comer en Japón con un guía local que conoce los mejores rincones?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En mis tours gastronómicos, te llevo a los restaurantes y puestos que los turistas no encuentran solos. Te enseño a usar las máquinas de tickets, a leer los menús, a sorber los fideos correctamente y, sobre todo, a disfrutar cada plato con el contexto cultural que lo hace especial. Desde mercados de barrio hasta izakayas escondidas bajo las vías del tren, cada tour es una aventura culinaria que recordarás mucho después de volver a casa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours" className="btn-accent">
                  Ver Todos los Tours
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Hacer una Pregunta
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <DiagnosticTrigger config={foodFinderEsConfig} />

      <RelatedTourCards tourIds={["custom"]} lang="es" showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Qué Comer en Japón: 15 Platos Que No Puedes Perderte",
            "description": "Sushi, ramen, tempura y mucho más. Un guía oficial con 500+ tours te dice qué pedir, dónde encontrarlo y en qué orden probarlo. Lista definitiva.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
            },
            "datePublished": "2026-03-07",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/es/blog/que-comer-en-japon",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsQueComerEnJapon;
