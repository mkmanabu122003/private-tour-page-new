import type { DiagnosticConfig } from "@/components/blog/Diagnostic";

export const dayTripFinderConfigEs: DiagnosticConfig = {
  toolId: "day-trip-finder-es",
  language: "es",
  toolName: "Adónde te llevaría",
  introHeadline:
    "Tres preguntas, y te diré qué excursión reservaría yo para ti.",
  introBody:
    "He guiado este recorrido más de 500 veces — Kamakura, Hakone, Nikko. Cada uno encaja con un viajero muy diferente. Déjame averiguar cuál eres tú.",
  ctaLabel: "Empecemos",
  questions: [
    {
      id: "duration",
      chapterLabel: "El tiempo",
      question: "¿Cuánto tiempo me puedes dar?",
      options: [
        {
          headline: "Solo unas horas",
          subtext: "Volver a Tokio antes de media tarde. Solo Kamakura es posible en este caso.",
          scores: { kamakura: 3, hakone: 0, nikko: 0 },
          eliminates: ["hakone", "nikko"],
        },
        {
          headline: "Un día completo (unas 8 horas)",
          subtext: "De la mañana a la tarde — la excursión típica.",
          scores: { kamakura: 2, hakone: 3, nikko: 1 },
        },
        {
          headline: "Un día largo, sin prisa",
          subtext: "Prefiero ir más lejos por algo inolvidable.",
          scores: { kamakura: 0, hakone: 1, nikko: 4 },
        },
      ],
    },
    {
      id: "interest",
      chapterLabel: "El ambiente",
      question: "¿Qué es lo que más te atrae?",
      options: [
        {
          headline: "Monte Fuji y aguas termales",
          subtext: "Paisaje y tardes tranquilas. Solo Hakone te ofrece esto.",
          scores: { kamakura: 0, hakone: 6, nikko: 0 },
        },
        {
          headline: "Templos antiguos junto al mar",
          subtext: "Calles antiguas, brisa marina, buena comida. Esa es la identidad de Kamakura.",
          scores: { kamakura: 6, hakone: 0, nikko: 0 },
        },
        {
          headline: "Santuarios UNESCO y bosque",
          subtext: "Cascadas, cedros, el santuario más ornamentado de Japón.",
          scores: { kamakura: 0, hakone: 0, nikko: 6 },
        },
      ],
    },
    {
      id: "group",
      chapterLabel: "La compañía",
      question: "¿Con quién vienes?",
      options: [
        {
          headline: "Solo adultos",
          subtext: "Podemos caminar bastante sin problema.",
          scores: { kamakura: 1, hakone: 1, nikko: 2 },
        },
        {
          headline: "Niños o personas mayores",
          subtext: "La logística fácil es importante para nosotros.",
          scores: { kamakura: 3, hakone: 2, nikko: 0 },
        },
        {
          headline: "Venimos por las fotos",
          subtext: "La vista lo es todo.",
          scores: { kamakura: 1, hakone: 3, nikko: 2 },
        },
      ],
    },
  ],
  results: {
    kamakura: {
      id: "kamakura",
      title: "Kamakura.",
      heroImage: "/images/blog/kamakura-buddha-comparison.webp",
      narrative:
        "Quieres historia accesible, logística fácil y un pueblo lo bastante pequeño para sentir su alma. Kamakura te da más de 65 templos junto al mar, el Gran Buda sentado al aire libre desde hace 800 años, y una calle llena de tiendas donde puedes probar la comida local de verdad. Volveremos a Tokio para cenar sin prisa.",
      tourPath: "/es/tours/kamakura-day-trip",
      tourLabel: "Planeamos este día juntos",
      readMoreLabel: "Leer la guía completa de Kamakura",
      readMorePath: "/es/blog/kamakura-desde-tokio",
      contactQuery: "kamakura-day-trip",
    },
    hakone: {
      id: "hakone",
      title: "Hakone.",
      heroImage: "/images/tours/hakone-lake-ashi-fuji.webp",
      narrative:
        "Viniste a Japón por el Monte Fuji y por una tarde tranquila. Hakone te da el funicular, el teleférico y el crucero por el lago — sin una sola caminata larga. Las aguas termales son auténticas, la vista es la que has imaginado, y volveremos a Tokio justo a tiempo para cenar.",
      tourPath: "/es/tours/hakone-day-trip",
      tourLabel: "Planeamos este día juntos",
      readMoreLabel: "Leer la guía completa de Hakone",
      readMorePath: "/es/blog/excursion-hakone-desde-tokio",
      contactQuery: "hakone-day-trip",
    },
    nikko: {
      id: "nikko",
      title: "Nikko.",
      heroImage: "/images/blog/nikko-toshogu-hero.webp",
      narrative:
        "Quieres ese Japón al que cuesta un poco llegar. Nikko te da Toshogu, el santuario más ornamentado del país, en medio de un bosque de cedros con cascadas a poca distancia. Es un día largo, pero es el que los viajeros me recuerdan más cuando me escriben después. Aquí es donde te llevaría.",
      tourPath: "/es/tours/nikko-day-trip",
      tourLabel: "Planeamos este día juntos",
      readMoreLabel: "Leer la guía completa de Nikko",
      readMorePath: "/es/blog/excursion-nikko-desde-tokio",
      contactQuery: "nikko-day-trip",
    },
  },
  resultLabel: "Aquí es donde te llevaría",
  signature: "— Manabu",
};
