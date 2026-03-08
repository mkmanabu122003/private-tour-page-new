// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Reservas y Precios",
    items: [
      {
        question: "¿Cuánto cuesta un tour privado?",
        answer: "Nuestros tours a pie por Tokio oscilan entre ¥25,000 y ¥40,000 por grupo, dependiendo del tour y la duración. Las excursiones de un día a Kamakura (¥50,000), Hakone (¥55,000) y Nikko (¥60,000) tienen precios diferentes. Consulta cada página de tour para tarifas específicas, o contáctanos para un presupuesto personalizado.",
      },
      {
        question: "¿Cómo reservo un tour?",
        answer: "Simplemente visita nuestra página de Contacto y cuéntanos tu fecha preferida, tamaño del grupo e intereses. Responderemos en un plazo de 24 horas con disponibilidad y un itinerario sugerido.",
      },
      {
        question: "¿Con cuánta antelación debo reservar?",
        answer: "Recomendamos reservar al menos 1-2 semanas antes, especialmente durante las temporadas altas (marzo-mayo para los cerezos en flor, octubre-noviembre para el otoño). Las reservas de último momento a veces son posibles. ¡Solo pregunta!",
      },
      {
        question: "¿Cuál es la política de cancelación?",
        answer: "Cancelación gratuita hasta 48 horas antes del tour. Las cancelaciones dentro de las 48 horas se cobran en su totalidad. En caso de alertas meteorológicas graves (tifones, etc.), recibirás un reembolso completo o la opción de reprogramar.",
      },
      {
        question: "¿Puedo reservar para una sola persona?",
        answer: "¡Sí! Los viajeros individuales son muy bienvenidos. El precio puede variar respecto a las tarifas de grupo, así que contáctanos para un presupuesto.",
      },
    ],
  },
  {
    title: "Sobre los Tours",
    items: [
      {
        question: '¿Qué es un "Guía con Licencia del Gobierno"?',
        answer: "El Intérprete-Guía con Licencia Nacional del Gobierno (全国通訳案内士) es una certificación nacional emitida por el gobierno japonés. Requiere aprobar exámenes rigurosos sobre historia, geografía, cultura japonesa y competencia en idiomas. Es la única certificación profesional de guía turístico reconocida a nivel nacional en Japón.",
      },
      {
        question: "¿Son privados sus tours?",
        answer: "Sí, todos nuestros tours son 100% privados. Solo estás tú y tu grupo con tu guía: sin desconocidos, sin horarios fijos. Tú marcas el ritmo.",
      },
      {
        question: "¿Qué pasa si llueve?",
        answer: "Los tours se realizan con lluvia o sol. Tokio tiene muchas zonas cubiertas, paradas interiores y pasajes subterráneos. Tu guía adaptará la ruta según el clima. Solo cancelamos por alertas meteorológicas graves (tifones, etc.), en cuyo caso recibirás un reembolso completo o podrás reprogramar.",
      },
      {
        question: "¿Pueden acomodar restricciones alimentarias?",
        answer: "Absolutamente. Avísanos con antelación y tu guía recomendará restaurantes que atienden necesidades vegetarianas, veganas, halal, sin gluten o con alergias específicas.",
      },
      {
        question: "¿Sus tours son aptos para niños?",
        answer: "¡Sí! Recibimos regularmente familias con niños de todas las edades. Nuestras rutas son mayormente planas y aptas para carritos. Tu guía ajustará el ritmo y el contenido para mantener a los viajeros más jóvenes interesados.",
      },
      {
        question: "¿Pueden acomodar usuarios de silla de ruedas?",
        answer: "Hacemos todo lo posible para que los tours sean accesibles. Por favor, avísanos con antelación y planificaremos una ruta que evite escaleras y use entradas accesibles. Algunos sitios históricos tienen accesibilidad limitada, pero tu guía planificará en consecuencia.",
      },
    ],
  },
  {
    title: "Excursiones de un Día",
    items: [
      {
        question: "¿Cómo llegamos a Kamakura / Hakone / Nikko?",
        answer: "En tren desde el centro de Tokio. Tu guía te recoge en tu hotel o en una estación conveniente y se encarga de toda la navegación. Los billetes de tren no están incluidos en el precio del tour, pero tu guía te ayudará a comprarlos.",
      },
      {
        question: "¿Vale la pena hacer una excursión con guía en vez de ir por mi cuenta?",
        answer: 'Aunque ciertamente puedes visitar estos destinos por tu cuenta, un guía aporta tres beneficios clave: (1) navegación eficiente de sistemas de transporte complejos, (2) contexto cultural e histórico profundo en cada sitio, y (3) flexibilidad para ajustar el itinerario según el clima, las multitudes y tu nivel de energía. La mayoría de los viajeros nos dicen que el guía transformó su experiencia de "visitar lugares" a "entender Japón."',
      },
      {
        question: "¿Puedo combinar una excursión con un tour por Tokio?",
        answer: "¡Sí! Muchos huéspedes reservan un tour a pie por Tokio un día y una excursión otro. Ofrecemos paquetes de varios días. Contáctanos para más detalles.",
      },
    ],
  },
  {
    title: "Información Práctica",
    items: [
      {
        question: "¿Dónde nos encontramos?",
        answer: "Tu guía puede recogerte en el vestíbulo de tu hotel, en una estación de tren cercana o en cualquier ubicación conveniente del centro de Tokio. Confirmaremos el punto de encuentro al reservar.",
      },
      {
        question: "¿Qué debo llevar puesto / traer?",
        answer: "Zapatos cómodos para caminar son esenciales. Recomendamos vestirse por capas (el clima de Tokio cambia rápidamente), una botella de agua y protección solar en verano. Tu guía te aconsejará sobre cualquier necesidad específica para el tour elegido.",
      },
      {
        question: "¿Debo dejar propina?",
        answer: "La propina no es costumbre en Japón y no se espera. Si disfrutaste del tour, ¡una reseña amable siempre se agradece!",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.items);

const EsFaq = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <Layout>
      <SEO
        title="Preguntas Frecuentes sobre Tours en Tokio en Español | Tanuki Tabi Travel"
        description="Respuestas a las preguntas más frecuentes sobre los tours privados en Tokio con Tanuki Tabi Travel: reservas, precios, cancelaciones y qué esperar del tour."
        canonicalPath="/es/faq"
        hreflang={[
          { lang: "en", path: "/faq" },
          { lang: "es", path: "/es/faq" },
          { lang: "x-default", path: "/faq" },
        ]}
      />

      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">Preguntas</p>
            <h1 className="heading-display text-foreground">
              Preguntas Frecuentes
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre nuestros tours.
              ¿No encuentras lo que buscas?{" "}
              <Link to="/es/contact" className="text-accent hover:underline">
                Contáctanos directamente
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container-section">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="heading-card text-foreground mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.items.map((faq, index) => {
                    const key = `${category.title}-${index}`;
                    return (
                      <div
                        key={key}
                        className="bg-card border border-border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(key)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                        >
                          <span className="text-lg font-medium text-foreground pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                              openIndex === key ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openIndex === key && (
                          <div className="px-6 pb-6 animate-fade-in">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-section text-center">
          <h2 className="heading-card text-foreground">¿Aún Tienes Preguntas?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Estaré encantado de responder cualquier otra pregunta que tengas sobre los tours o tu visita a Tokio.
          </p>
          <Link to="/es/contact" className="btn-accent mt-8 inline-flex">
            Contáctame
          </Link>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </Layout>
  );
};

export default EsFaq;
