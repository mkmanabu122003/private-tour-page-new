import type { DiagnosticConfig } from "@/components/blog/Diagnostic";

export const foodFinderEsConfig: DiagnosticConfig = {
  toolId: "food-finder",
  language: "es",
  toolName: "Qué Comer",
  introHeadline:
    "Tres preguntas, y te digo cómo comerte Tokio.",
  introBody:
    "Callejones de ramen, mercados al amanecer, izakayas ocultas, opciones veganas... Tokio lo tiene todo. Pero por dónde empezar depende de ti.",
  ctaLabel: "Descubrirlo",
  triggerImage: "/images/tours/tsukiji-street-food.webp",
  triggerImageAlt: "Puestos de comida callejera en Tokio — encuentra tu experiencia gastronómica ideal",
  questions: [
    {
      id: "dream",
      chapterLabel: "El antojo",
      question: "¿Cuál es tu sueño gastronómico en Tokio?",
      options: [
        {
          headline: "Sorber ramen, picar yakitori, comer de pie",
          subtext: "Barato, rápido y delicioso. Así come Tokio de verdad.",
          scores: { streetfood: 6, tsukiji: 1, izakaya: 0, dietary: 0 },
        },
        {
          headline: "Recorrer el mercado donde compran los chefs al amanecer",
          subtext: "Marisco fresco, puestos de tamagoyaki y comida como espectáculo.",
          scores: { streetfood: 0, tsukiji: 6, izakaya: 0, dietary: 0 },
        },
        {
          headline: "Bares diminutos, sake local, sitios que no encontrarías solo",
          subtext: "El Tokio que solo se abre de noche.",
          scores: { streetfood: 0, tsukiji: 0, izakaya: 6, dietary: 0 },
        },
        {
          headline: "Buena comida que se adapte a mis necesidades dietéticas",
          subtext: "Vegetariano, vegano, halal o alergias — sin compromisos.",
          scores: { streetfood: 0, tsukiji: 0, izakaya: 0, dietary: 6 },
        },
      ],
    },
    {
      id: "time",
      chapterLabel: "La hora",
      question: "¿Cuándo quieres comer?",
      options: [
        {
          headline: "Por la mañana — me levanto a las 5 sin problema",
          subtext: "A quien madruga, el atún más fresco le ayuda.",
          scores: { streetfood: 0, tsukiji: 4, izakaya: 0, dietary: 0 },
        },
        {
          headline: "Por la tarde — caminar y picar",
          subtext: "Un bocado aquí, otro allá, sin parar.",
          scores: { streetfood: 3, tsukiji: 1, izakaya: 0, dietary: 1 },
        },
        {
          headline: "De noche — cuando Tokio realmente come",
          subtext: "Farolillos, humo, cerveza fría, sin prisa.",
          scores: { streetfood: 1, tsukiji: 0, izakaya: 4, dietary: 0 },
        },
      ],
    },
    {
      id: "priority",
      chapterLabel: "La prioridad",
      question: "¿Qué es lo más importante para ti?",
      options: [
        {
          headline: "Precio — quiero comer mucho por poco",
          subtext: "¿Menos de ¥1,000 por comida? Reto aceptado.",
          scores: { streetfood: 4, tsukiji: 0, izakaya: 0, dietary: 0 },
        },
        {
          headline: "Autenticidad — donde van los locales de verdad",
          subtext: "Sin menús turísticos. Lo auténtico.",
          scores: { streetfood: 1, tsukiji: 1, izakaya: 3, dietary: 0 },
        },
        {
          headline: "La historia — quiero aprender, no solo comer",
          subtext: "Historia, cultura, el oficio detrás de la comida.",
          scores: { streetfood: 0, tsukiji: 3, izakaya: 1, dietary: 0 },
        },
        {
          headline: "Adaptación — mis necesidades dietéticas son lo primero",
          subtext: "Necesito a alguien que entienda lo que puedo y no puedo comer.",
          scores: { streetfood: 0, tsukiji: 0, izakaya: 0, dietary: 5 },
        },
      ],
    },
  ],
  results: {
    streetfood: {
      id: "streetfood",
      title: "Comida Callejera y Ramen.",
      heroImage: "/images/blog/ramen-guide-hero.webp",
      narrative:
        "Quieres comer como come Tokio cada día — de pie en un mostrador de ramen, cogiendo yakitori de un puesto, señalando cosas que no puedes leer y confiando en el cocinero. Las mejores comidas de Tokio cuestan menos de ¥1,000, y las mejores calles para encontrarlas están en Asakusa, Ueno y los callejones alrededor de la estación de Shinjuku. Te enseñaré los puestos donde merece la pena hacer cola y los que nunca tienen cola porque solo los conocen los locales.",
      tourPath: "/es/tours/asakusa",
      tourLabel: "Comer Asakusa conmigo",
      readMoreLabel: "Leer la Guía de Ramen",
      readMorePath: "/es/blog/guia-ramen-tokio",
      contactQuery: "street-food-tour",
    },
    tsukiji: {
      id: "tsukiji",
      title: "Mercado de Tsukiji.",
      heroImage: "/images/tours/tsukiji-market-food-tokyo.webp",
      narrative:
        "Quieres estar donde nace la comida. El Mercado Exterior de Tsukiji es donde los chefs siguen comprando al amanecer, donde el tamagoyaki se cocina delante de ti en una sartén de cobre que lleva décadas de uso, y donde una brocheta de vieira a ¥200 puede cambiar lo que piensas que el marisco debería saber. Después del mercado, caminaremos a Ginza — el barrio más elegante de Tokio, justo al lado.",
      tourPath: "/es/tours/tsukiji-ginza",
      tourLabel: "Recorrer Tsukiji conmigo",
      readMoreLabel: "Leer la Guía de Tsukiji",
      readMorePath: "/es/blog/guia-tsukiji",
      contactQuery: "tsukiji-ginza",
    },
    izakaya: {
      id: "izakaya",
      title: "Izakaya y Comida Nocturna.",
      heroImage: "/images/tours/night-tour-omoide-yokocho.webp",
      narrative:
        "Quieres el Tokio que se abre cuando oscurece — el humo de yakitori en Omoide Yokocho, los bares de seis asientos en Golden Gai, las izakayas de pie bajo las vías del tren en Yurakucho donde los oficinistas se aflojan la corbata con un highball y pollo a la parrilla. Estos sitios a menudo no tienen menú en inglés, ni presencia online, y una puerta que parece la de un apartamento. Ir con un local lo cambia todo.",
      tourPath: "/es/tours/tokyo-night-tour",
      tourLabel: "Comer de noche en Tokio conmigo",
      readMoreLabel: "Leer la Guía de Izakayas",
      readMorePath: "/es/blog/guia-izakayas-tokio",
      contactQuery: "night-food-tour",
    },
    dietary: {
      id: "dietary",
      title: "Foodie con Necesidades Dietéticas.",
      heroImage: "/images/blog/asakusa-street-food.webp",
      narrative:
        "Quieres comer bien en Tokio sin preocuparte por lo que lleva la comida. Ya seas vegetariano, vegano, halal o tengas alergias, Tokio tiene más opciones de las que imaginas — pero encontrarlas solo requiere leer etiquetas en japonés y entender ingredientes ocultos como el dashi y el mirin. Planificaré una ruta donde cada parada sea segura, deliciosa y elegida específicamente para ti.",
      tourPath: "/es/tours/custom",
      tourLabel: "Planear mi tour gastronómico",
      readMoreLabel: "Leer la Guía Vegetariana",
      readMorePath: "/es/blog/tour-vegetariano-tokio",
      contactQuery: "dietary-food-tour",
    },
  },
  resultLabel: "Así te alimentaría",
  signature: "— Manabu",
  tieBreakerOrder: ["izakaya", "tsukiji", "streetfood", "dietary"],
};
