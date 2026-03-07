// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsQueSecomeEnJapon = () => {
  return (
    <Layout>
      <SEO
        title="¿Qué se come en Japón? La guía de comida japonesa que nadie más te da"
        description="Más allá del sushi y el ramen: un guía local japonés te explica qué comer realmente en Japón, dónde encontrarlo y qué evitar como turista."
        canonicalPath="/es/blog/que-se-come-en-japon"
        hreflang={[
          { lang: "es", path: "/es/blog/que-se-come-en-japon" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/tokyo-food-tour-hero.jpg"
          alt="Tour gastronómico en Tokio — qué se come en Japón"
          className="w-full h-full object-cover"
          loading="eager"
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
            <p className="text-label text-accent mb-3">Gastronomía Japonesa</p>
            <h1 className="heading-display text-foreground">
              ¿Qué Se Come en Japón? La Guía de Comida Japonesa Que Nadie Más Te Da
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
              "¿Qué se come en Japón aparte de sushi?" Es la pregunta que más me hacen mis clientes antes de llegar a Tokio. Y lo entiendo perfectamente: la comida japonesa que conoces en España o en Latinoamérica tiene muy poco que ver con lo que realmente se come aquí a diario. Después de años guiando a viajeros hispanohablantes por los mercados, callejones e izakayas de Tokio, he escrito esta guía para contarte lo que de verdad vas a encontrar en tu plato cuando aterrices en Japón.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              No te voy a dar una lista genérica de Wikipedia. Te voy a contar, desde mi experiencia como guía local con licencia, qué se come en Japón de verdad, cuánto cuesta, dónde encontrar los mejores platos y qué errores evitar. Si vienes con la mente abierta y el estómago vacío, Japón te va a cambiar la forma de entender la comida para siempre.
            </p>

            {/* Lo que comes en Japón vs. lo que comes en tu país */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Lo que comes en Japón vs. lo que comes en tu país como "japonés"
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Antes de hablar de platos concretos, necesito ser honesto contigo: lo que la mayoría de restaurantes "japoneses" sirven fuera de Japón tiene una relación lejana con la comida real del país. No digo que sea malo, pero es diferente. Muy diferente.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El sushi de verdad no es lo que piensas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El sushi que se come en Japón rara vez incluye aguacate, queso crema o salsas dulces por encima. Aquí el sushi es minimalista: un trozo de pescado fresco sobre arroz sazonado con vinagre, punto. La estrella es el ingrediente, no la salsa. Un buen itamae (maestro sushi) ajusta la temperatura del arroz, el corte del pescado y la cantidad de wasabi según cada pieza. Es una experiencia completamente distinta a pedir un "roll" en Madrid o Ciudad de México. Y lo mejor: un almuerzo de sushi de calidad en un restaurante de barrio puede costarte solo 1.500 a 2.500 yenes (unos 10-16 euros). No necesitas gastar una fortuna para comer sushi auténtico.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              El ramen tampoco (y hay cientos de estilos)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El ramen instantáneo no tiene nada que ver con un buen cuenco de ramen artesanal. En Japón, cada región tiene su estilo: el tonkotsu de Fukuoka tiene un caldo de cerdo cremoso y espeso, el miso ramen de Sapporo es robusto y reconfortante, el shoyu ramen de Tokio es ligero y elegante. Hay ramenyas (restaurantes de ramen) donde el chef ha dedicado décadas a perfeccionar una sola receta de caldo. Un cuenco cuesta entre 800 y 1.200 yenes, y te cambia la vida. Muchos de mis clientes me confiesan que el ramen fue su comida favorita de todo el viaje, incluso por encima del sushi.
            </p>

            {/* Desayuno, almuerzo y cena */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Desayuno, almuerzo y cena japonesa típica
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entender qué se come en Japón significa entender el ritmo de las tres comidas. Y es muy diferente al ritmo español o latinoamericano.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Desayuno japonés (sí, incluye pescado y arroz)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El desayuno japonés tradicional sorprende a casi todos mis clientes. Incluye arroz blanco, sopa de miso, un trozo de pescado a la parrilla (normalmente salmón o caballa), encurtidos, tofu y natto (soja fermentada, con un olor potente y textura viscosa que divide opiniones). No hay tostadas ni cereales. Muchos hoteles de estilo japonés (ryokan) sirven este desayuno completo, y te recomiendo probarlo al menos una vez. Cadenas como Yoshinoya y Matsuya ofrecen desayunos japoneses completos desde 400 yenes. Eso sí, si el natto te resulta demasiado intenso, no te preocupes: la mayoría de japoneses entienden perfectamente que es un gusto adquirido.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Almuerzo: el arte del teishoku (menú del día)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              El teishoku es como el menú del día en España, pero japonés. Es un set que incluye un plato principal (tonkatsu, pescado a la parrilla, pollo frito), arroz, sopa de miso, ensalada y encurtidos. Se sirve todo junto en una bandeja, normalmente por 800 a 1.200 yenes. Es la forma más habitual de almorzar para los japoneses que trabajan, y es una de las mejores relaciones calidad-precio que encontrarás. Cadenas como Ootoya y Yayoiken se especializan en teishoku casero y son excelentes opciones para probar comida cotidiana japonesa sin gastar de más. Siempre llevo a mis clientes a almorzar un teishoku al menos una vez durante el tour, porque es la forma más auténtica de entender qué se come en Japón a diario.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cena: desde izakaya hasta kaiseki
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La cena en Japón abarca un rango enorme. En el extremo informal tienes la izakaya, que es como un bar de tapas japonés: pides varios platos pequeños (edamame, karaage, sashimi, yakitori) para compartir mientras bebes cerveza o sake. Es ruidoso, informal y tremendamente divertido. Una cena en izakaya con bebidas cuesta unos 2.500 a 4.000 yenes por persona. En el otro extremo está el kaiseki, la alta cocina japonesa: una sucesión de platos pequeños y elaborados que siguen la estacionalidad y se presentan como obras de arte. Un kaiseki puede costar de 10.000 a 30.000 yenes, pero es una experiencia gastronómica que no existe en ningún otro país del mundo.
            </p>

            {/* Los 10 platos que recomiendo */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Los 10 platos que recomiendo a mis clientes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Después de años escuchando las opiniones de cientos de viajeros hispanohablantes, esta es mi lista de los 10 platos imprescindibles. Para cada uno te explico qué es, cómo se compara con algo que ya conoces, dónde comerlo y cuánto cuesta.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              1. Ramen
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Fideos de trigo en caldo caliente (de cerdo, pollo, soja o miso) con toppings como huevo marinado, chashu (cerdo estofado), nori y cebolleta. <strong className="text-foreground">Comparación:</strong> Imagina un cocido o un caldo gallego, pero con fideos y llevado al extremo. <strong className="text-foreground">Dónde:</strong> Las ramenyas pequeñas de barrio son las mejores. Busca las que tienen cola en la puerta. <strong className="text-foreground">Precio:</strong> 800-1.200 yenes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              2. Soba
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Fideos finos de trigo sarraceno, servidos fríos con salsa de soja para mojar o calientes en caldo. <strong className="text-foreground">Comparación:</strong> Los fideos fríos con salsa son algo que no tiene equivalente directo, pero piensa en una ensalada de pasta fría elevada al arte. <strong className="text-foreground">Dónde:</strong> Los restaurantes de soba artesanal donde muelen el trigo sarraceno a mano son los mejores. <strong className="text-foreground">Precio:</strong> 700-1.500 yenes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              3. Udon
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Fideos gruesos y masticables de trigo, en caldo caliente o fríos. La prefectura de Kagawa (Shikoku) es la meca del udon. <strong className="text-foreground">Comparación:</strong> La textura es parecida a un buen fideo fresco casero, pero más grueso y con más mordida. <strong className="text-foreground">Dónde:</strong> Cadenas como Marugame Seimen sirven udon decente y barato en todo Japón. <strong className="text-foreground">Precio:</strong> 300-800 yenes. Uno de los platos más baratos del país.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              4. Tempura
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Verduras y mariscos rebozados en una masa ligera y crujiente, fritos al momento. <strong className="text-foreground">Comparación:</strong> Parecido a una fritura andaluza, pero la masa es mucho más fina y crujiente, casi etérea. <strong className="text-foreground">Dónde:</strong> Los restaurantes especializados en tempura (tempura-ya) lo fríen pieza a pieza delante de ti. <strong className="text-foreground">Precio:</strong> Un set de tempura con arroz, 1.000-2.000 yenes. Un restaurante de alta gama, 5.000-10.000 yenes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              5. Tonkatsu
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Chuleta de cerdo empanada y frita hasta quedar dorada y crujiente por fuera, jugosa por dentro. Se sirve con col rallada, arroz y sopa de miso. <strong className="text-foreground">Comparación:</strong> Es como un cachopo o un escalope de Milán, pero la técnica de empanado japonés (panko) lo hace increíblemente crujiente. <strong className="text-foreground">Dónde:</strong> Cadenas como Maisen y Wako son excelentes. <strong className="text-foreground">Precio:</strong> 1.000-2.000 yenes por un set completo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              6. Yakitori
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Brochetas de pollo a la parrilla con carbón. Se usan todas las partes del pollo: pechuga, muslo, piel, corazón, cartílago. <strong className="text-foreground">Comparación:</strong> Como pinchos morunos, pero de pollo y con una técnica de parrilla sobre carbón binchotan que les da un sabor ahumado único. <strong className="text-foreground">Dónde:</strong> Las yakitoryas debajo de las vías del tren en zonas como Yurakucho son las más auténticas. <strong className="text-foreground">Precio:</strong> 100-200 yenes por brocheta.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              7. Okonomiyaki
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Una especie de tortilla-crepe gruesa rellena de col, carne o marisco, cocinada en plancha y cubierta con salsa, mayonesa y katsuobushi (virutas de bonito seco). <strong className="text-foreground">Comparación:</strong> Piensa en una tortilla de patatas mezclada con una pizza, cocinada en plancha. Suena raro, sabe increíble. <strong className="text-foreground">Dónde:</strong> Osaka y Hiroshima son las capitales del okonomiyaki. En Tokio, el barrio de Tsukishima tiene buenos locales. <strong className="text-foreground">Precio:</strong> 800-1.500 yenes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              8. Gyoza
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Empanadillas japonesas rellenas de cerdo y verduras, fritas por un lado y al vapor por el otro. <strong className="text-foreground">Comparación:</strong> Como unas empanadillas argentinas o unas empanadas gallegas, pero más pequeñas, más finas y con esa base crujiente que las hace adictivas. <strong className="text-foreground">Dónde:</strong> Cualquier ramenya las sirve como acompañamiento. Las cadenas Ohsho y Gyoza no Ohsho son especialistas. <strong className="text-foreground">Precio:</strong> 250-500 yenes por una ración de 6 piezas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              9. Curry japonés
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Un curry suave, espeso y ligeramente dulce servido con arroz y normalmente acompañado de tonkatsu o verduras. No pica como el curry indio o tailandés. <strong className="text-foreground">Comparación:</strong> Es como un estofado suave con especias. Los japoneses lo consideran comfort food, como las lentejas para un español. <strong className="text-foreground">Dónde:</strong> CoCo Ichibanya es la cadena más popular y te permite personalizar el nivel de picante y los toppings. <strong className="text-foreground">Precio:</strong> 600-1.000 yenes.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              10. Onigiri
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Qué es:</strong> Bolas o triángulos de arroz rellenos (de salmón, atún con mayonesa, ciruela umeboshi, etc.) y envueltos en alga nori. <strong className="text-foreground">Comparación:</strong> Es como un sándwich rápido japonés. Es lo que los japoneses comen cuando tienen prisa, cuando viajan o cuando necesitan algo rápido y satisfactorio. <strong className="text-foreground">Dónde:</strong> Cualquier konbini (7-Eleven, Lawson, FamilyMart). Los onigiri de konbini son sorprendentemente buenos. <strong className="text-foreground">Precio:</strong> 120-250 yenes. Probablemente la comida más barata y práctica de Japón.
            </p>

            {/* Dónde comer sin pagar de más */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Dónde comer sin pagar de más
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una de las grandes sorpresas para mis clientes es descubrir que comer bien en Japón puede ser muy barato. La clave es saber dónde buscar y evitar las trampas turísticas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Konbini (tiendas de conveniencia): tu mejor aliado
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Las konbini japonesas (7-Eleven, Lawson, FamilyMart) no tienen nada que ver con un supermercado de conveniencia occidental. Aquí venden onigiri recién hechos, sándwiches con pan de leche increíblemente suave, ensaladas de pasta, pollo karaage crujiente, nikuman (bollos de carne al vapor) y postres que rivalizan con los de una pastelería. Todo por precios que van de 100 a 500 yenes. Mis clientes siempre se sorprenden cuando les llevo a un 7-Eleven por primera vez y descubren que un onigiri de salmón de 150 yenes es genuinamente delicioso. Las konbini están abiertas 24 horas y hay una literalmente en cada esquina. Son tu red de seguridad gastronómica en Japón.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Depachika (sótanos de grandes almacenes)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los depachika son los sótanos gastronómicos de los grandes almacenes japoneses (Isetan, Mitsukoshi, Takashimaya), y son uno de los secretos mejor guardados de la gastronomía japonesa. Imagina un mercado gourmet subterráneo con decenas de puestos vendiendo bentō (cajas de almuerzo) preparados por restaurantes famosos, wagashi (dulces tradicionales), frutas perfectas, quesos, carnes y mariscos. La calidad es excepcional y, sorprendentemente, los precios no son desorbitados: un bentō de alta calidad cuesta 800 a 1.500 yenes. Además, a partir de las 7 de la tarde, muchos puestos aplican descuentos del 20-50% en los productos del día. Consejo de local: ve al depachika de Isetan en Shinjuku al atardecer para cazar ofertas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cadenas de restaurantes que no son trampas turísticas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A diferencia de otros países donde "cadena" equivale a comida mediocre, en Japón muchas cadenas mantienen una calidad impresionante. Ichiran y Ippudo sirven ramen excelente. Sushiro y Kura Sushi ofrecen sushi de cinta transportadora sorprendentemente fresco por 100-300 yenes el plato. Yoshinoya y Sukiya sirven gyudon (bol de ternera) por 400-500 yenes. Tenya hace tempura de calidad por menos de 1.000 yenes. Ninguna de estas es una trampa turística: están llenas de japoneses que comen allí a diario. Si ves cola de locales, es buena señal.
            </p>

            {/* Alergias e intolerancias */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Alergias e intolerancias en Japón (la guía práctica)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Saber qué se come en Japón también significa saber cómo navegar las restricciones alimentarias, y aquí tengo que ser honesto: no siempre es fácil.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Vegetarianos y veganos: la verdad difícil
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japón es un país complicado para vegetarianos y veganos. El dashi (caldo base que se usa en casi todo) se hace con katsuobushi (bonito seco), así que incluso platos que parecen vegetarianos como la sopa de miso o el tofu en salsa suelen llevar pescado. Dicho esto, la situación ha mejorado mucho en los últimos años, especialmente en Tokio. Existen restaurantes vegetarianos y veganos dedicados, y el shojin ryori (cocina budista vegetariana) es una tradición centenaria. Aplicaciones como HappyCow te ayudarán a encontrar opciones. Mi consejo: lleva una tarjeta explicativa en japonés y avisa siempre al restaurante antes de pedir.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Alergia al gluten en Japón
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La salsa de soja contiene trigo, y la salsa de soja está en todas partes. Esto hace que comer sin gluten en Japón sea un reto serio. El ramen, el udon, la tempura, el tonkatsu y muchos otros platos populares contienen gluten. Sin embargo, el arroz es naturalmente sin gluten, al igual que el sashimi (sin salsa de soja) y muchos platos a la parrilla con sal. Existen marcas de salsa de soja sin gluten (tamari) pero la mayoría de restaurantes no las tienen. De nuevo, una tarjeta en japonés explicando tu alergia es esencial. Si tienes enfermedad celíaca, te recomiendo preparar el viaje con antelación y tener siempre opciones de emergencia en la mochila.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tarjetas de alergia en japonés
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una de las mejores herramientas que puedes llevar es una tarjeta de alergia impresa en japonés que explique claramente qué no puedes comer. Hay webs como Just Hungry y aplicaciones como Allergy Translation que generan estas tarjetas gratuitamente. Yo siempre ayudo a mis clientes a preparar las suyas antes del tour. Los restaurantes japoneses toman las alergias muy en serio una vez que entienden la situación, así que no tengas miedo de mostrar la tarjeta. Es mucho mejor ser claro que pasar un mal rato.
            </p>

            {/* Preguntas frecuentes */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Preguntas frecuentes sobre la comida en Japón
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Es caro comer en Japón?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No necesariamente. Se puede comer muy bien por 500 a 1.500 yenes por comida (3-10 euros aproximadamente). Japón tiene una de las mejores relaciones calidad-precio gastronómicas del mundo, especialmente en cadenas de restaurantes y konbinis. Solo es caro si buscas restaurantes de alta gama o zonas muy turísticas. Un viajero con presupuesto moderado puede comer increíblemente bien gastando 3.000 a 5.000 yenes al día en comida.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Puedo pedir comida sin hablar japonés?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sí. Muchos restaurantes tienen menús con fotos o pantallas táctiles con imágenes. Las máquinas expendedoras de tickets (muy comunes en ramenyas) tienen botones con fotos del plato. Google Translate con la cámara funciona razonablemente bien para traducir menús. Y en las zonas turísticas de Tokio, Kioto y Osaka, muchos restaurantes tienen menú en inglés. Dicho esto, aprender unas pocas frases básicas como "kore kudasai" (esto, por favor) o "okanjo kudasai" (la cuenta, por favor) te facilitará mucho la vida.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Qué como si soy vegetariano?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Opciones hay, pero requieren planificación. Puedes comer onigiri vegetarianos (umeboshi, kombu), edamame, ensaladas, arroz con curry de verduras, zaru soba (fideos fríos de trigo sarraceno) y buscar restaurantes de shojin ryori. En las konbini siempre hay opciones vegetarianas como onigiri de ciruela y ensaladas. Te recomiendo instalar HappyCow antes de viajar. También puedes leer nuestra guía de{" "}
              <Link to="/es/blog/comida-callejera-tokio" className="text-accent hover:underline">
                comida callejera en Tokio
              </Link>
              {" "}para más ideas.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Cuál es el plato más popular en Japón?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Según encuestas nacionales, el curry japonés y el ramen compiten constantemente por el primer puesto como comida favorita de los japoneses, por encima del sushi. El curry es la comfort food nacional: se sirve en colegios, empresas, cuarteles militares y hogares. Es omnipresente, barato y universalmente querido. Si quieres comer como come un japonés de verdad, pide un curry con tonkatsu en cualquier cadena de curry.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              ¿Es seguro comer pescado crudo?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Extremadamente seguro. Japón tiene los estándares de seguridad alimentaria más estrictos del mundo para el pescado crudo. Los procesos de inspección, cadena de frío y manipulación son rigurosos. En décadas de guiar turistas, nunca he tenido un cliente que se haya intoxicado por comer sashimi o sushi en un restaurante japonés. Esto no significa que debas comprar pescado crudo en un puesto callejero a las 3 de la tarde en pleno agosto, pero en cualquier restaurante o mercado establecido, puedes comer pescado crudo con total confianza.
            </p>

            {/* Explorando Tsukiji */}
            <p className="text-muted-foreground leading-relaxed mb-4 mt-8">
              Si quieres vivir la experiencia de explorar uno de los mercados de comida más impresionantes del mundo, te invito a leer nuestra guía completa del{" "}
              <Link to="/es/tours/tsukiji-ginza" className="text-accent hover:underline">
                tour por Tsukiji y Ginza
              </Link>
              , donde te llevo personalmente a descubrir los mejores puestos del mercado exterior.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                ¿Quieres descubrir qué se come en Japón con un guía local?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La mejor forma de explorar la gastronomía japonesa es con alguien que conozca cada callejón, cada puesto y cada plato secreto. En nuestros tours gastronómicos te llevo a los sitios donde comen los locales, te explico cada plato, te ayudo con las alergias y me aseguro de que cada bocado merezca la pena. Sin intermediarios, sin trampas turísticas, solo comida auténtica japonesa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/es/tours/" className="btn-accent">
                  Ver Nuestros Tours
                </Link>
                <Link to="/es/contact" className="btn-outline">
                  Hacer una Pregunta
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "¿Qué Se Come en Japón? La Guía de Comida Japonesa Que Nadie Más Te Da",
            "description": "Más allá del sushi y el ramen: un guía local japonés te explica qué comer realmente en Japón, dónde encontrarlo y qué evitar como turista.",
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
              "@id": "https://tanuki-tabi-travel.com/es/blog/que-se-come-en-japon",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default EsQueSecomeEnJapon;
