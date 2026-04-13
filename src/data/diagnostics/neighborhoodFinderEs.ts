import type { DiagnosticConfig } from "@/components/blog/Diagnostic";

export const neighborhoodFinderEsConfig: DiagnosticConfig = {
  toolId: "neighborhood-finder",
  language: "es",
  toolName: "Dónde Caminar",
  introHeadline:
    "Tres preguntas, y te digo qué barrio de Tokio explorar primero.",
  introBody:
    "Tokio tiene 23 distritos y cientos de barrios, pero siempre recomiendo los mismos cinco. Déjame encontrar el tuyo.",
  ctaLabel: "Descubrirlo",
  triggerImage: "/images/tours/meiji-shrine-torii-gate.webp",
  triggerImageAlt: "Torii del Santuario Meiji — descubre qué barrio de Tokio va contigo",
  questions: [
    {
      id: "draw",
      chapterLabel: "La atracción",
      question: "¿Qué es lo que más te emociona de Tokio?",
      options: [
        {
          headline: "Templos antiguos y comida callejera",
          subtext:
            "Incienso, puertas de madera y puestos de comida con décadas de historia.",
          scores: { asakusa: 6, yanaka: 1, shibuya: 0, tsukiji: 1, imperial: 0 },
        },
        {
          headline: "Moda, cultura pop y neones",
          subtext:
            "Crepes en Harajuku, el cruce de Shibuya y el Santuario Meiji — todo en una caminata.",
          scores: { asakusa: 0, yanaka: 0, shibuya: 6, tsukiji: 0, imperial: 0 },
        },
        {
          headline: "La mejor comida de Tokio",
          subtext:
            "Sushi al amanecer, puestos de tamagoyaki y el mercado que alimenta la ciudad.",
          scores: { asakusa: 1, yanaka: 0, shibuya: 0, tsukiji: 6, imperial: 0 },
        },
        {
          headline: "Callejones tranquilos que nadie menciona",
          subtext:
            "Casas de madera antiguas, gatos de templo y una calle comercial de otra época.",
          scores: { asakusa: 0, yanaka: 6, shibuya: 0, tsukiji: 0, imperial: 0 },
        },
        {
          headline: "Jardines imperiales e historia japonesa",
          subtext:
            "Los muros del Castillo Edo, fosos y el parque más tranquilo del centro de Tokio.",
          scores: { asakusa: 0, yanaka: 0, shibuya: 0, tsukiji: 0, imperial: 6 },
        },
      ],
    },
    {
      id: "pace",
      chapterLabel: "El ritmo",
      question: "¿Cuál es tu ambiente ideal?",
      options: [
        {
          headline: "Con vida — la multitud es parte de la diversión",
          subtext: "Quiero sentir el latido de Tokio.",
          scores: { asakusa: 2, yanaka: 0, shibuya: 3, tsukiji: 2, imperial: 0 },
        },
        {
          headline: "Tranquilo y contemplativo",
          subtext: "Jardines, té, silencio. Vine a respirar.",
          scores: { asakusa: 0, yanaka: 3, shibuya: 0, tsukiji: 0, imperial: 4 },
        },
        {
          headline: "Un ritmo variado — primero movido, luego calma",
          subtext: "Empezar en el mercado, terminar en una calle tranquila.",
          scores: { asakusa: 2, yanaka: 1, shibuya: 0, tsukiji: 3, imperial: 0 },
        },
      ],
    },
    {
      id: "company",
      chapterLabel: "La compañía",
      question: "¿Con quién vas?",
      options: [
        {
          headline: "Solo adultos — podemos caminar todo el día",
          subtext: "Sin limitaciones de movilidad.",
          scores: { asakusa: 1, yanaka: 2, shibuya: 1, tsukiji: 1, imperial: 1 },
        },
        {
          headline: "Niños o personas mayores",
          subtext: "Importa que sea fácil y con descansos.",
          scores: { asakusa: 3, yanaka: 0, shibuya: 1, tsukiji: 1, imperial: 2 },
        },
        {
          headline: "En pareja o solo/a",
          subtext: "Quiero algo personal e inolvidable.",
          scores: { asakusa: 0, yanaka: 2, shibuya: 0, tsukiji: 2, imperial: 1 },
        },
      ],
    },
  ],
  results: {
    asakusa: {
      id: "asakusa",
      title: "Asakusa.",
      heroImage: "/images/tours/asakusa-kaminarimon-gate.webp",
      narrative:
        "Quieres el Tokio que lleva aquí siglos. Asakusa te da Senso-ji, el templo más antiguo de la ciudad, una calle comercial que no ha cambiado desde la época Edo, y comida callejera por la que merece la pena cruzar el mundo. Es animado, es icónico, y con un guía verás las partes que la mayoría de visitantes se pierden.",
      tourPath: "/es/tours/asakusa",
      tourLabel: "Recorrer Asakusa conmigo",
      readMoreLabel: "Leer la guía de Asakusa",
      readMorePath: "/es/blog/guia-asakusa",
      contactQuery: "asakusa",
    },
    yanaka: {
      id: "yanaka",
      title: "Yanaka.",
      heroImage: "/images/blog/yanaka-ginza-shotengai-entrance.webp",
      narrative:
        "Quieres el Tokio que sobrevivió a la guerra y los terremotos — el de las casas de madera, gatos de templo y una calle comercial donde los tenderos se conocen por su nombre. Yanaka es donde llevo a los viajeros que ya han hecho los sitios famosos y quieren algo auténtico. Es tranquilo, es precioso, y está desapareciendo.",
      tourPath: "/es/tours/yanaka",
      tourLabel: "Recorrer Yanaka conmigo",
      readMoreLabel: "Leer la guía de Yanaka",
      readMorePath: "/es/blog/yanaka-tokio",
      contactQuery: "yanaka",
    },
    shibuya: {
      id: "shibuya",
      title: "Shibuya y Harajuku.",
      heroImage: "/images/tours/shibuya-crossing-tokyo.webp",
      narrative:
        "Quieres el Tokio que se mueve — el cruce, la moda, la energía de una ciudad que se reinventa cada temporada. Empezaremos en el Santuario Meiji en medio del bosque, caminaremos por las calles traseras de Harajuku y terminaremos en la intersección más famosa del mundo. Es el Tokio que imaginabas antes de llegar.",
      tourPath: "/es/tours/shibuya-harajuku",
      tourLabel: "Recorrer Shibuya conmigo",
      readMoreLabel: "Leer la guía de Shibuya y Harajuku",
      readMorePath: "/es/blog/guia-shibuya-harajuku",
      contactQuery: "shibuya-harajuku",
    },
    tsukiji: {
      id: "tsukiji",
      title: "Tsukiji y Ginza.",
      heroImage: "/images/tours/tsukiji-market-food-tokyo.webp",
      narrative:
        "Viniste a Tokio a comer. El Mercado Exterior de Tsukiji es donde los chefs siguen comprando al amanecer, donde el tamagoyaki se hace delante de ti, y donde un pincho de ¥200 puede cambiar lo que piensas de la comida japonesa. Después del mercado, caminaremos a Ginza — el barrio más elegante de Tokio, justo al lado.",
      tourPath: "/es/tours/tsukiji-ginza",
      tourLabel: "Recorrer Tsukiji conmigo",
      readMoreLabel: "Leer la guía de Tsukiji",
      readMorePath: "/es/blog/guia-tsukiji",
      contactQuery: "tsukiji-ginza",
    },
    imperial: {
      id: "imperial",
      title: "Palacio Imperial y Marunouchi.",
      heroImage: "/images/tours/imperial-palace-gardens.webp",
      narrative:
        "Quieres el poder silencioso del viejo Edo. El Palacio Imperial se levanta sobre las ruinas del castillo más grande del mundo, rodeado de fosos y muros de piedra que llevan 400 años en pie. Los Jardines del Este son gratuitos, poco concurridos y uno de los espacios verdes más bonitos de Tokio. Aquí es donde la ciudad respira.",
      tourPath: "/es/tours/imperial-palace",
      tourLabel: "Recorrer el Palacio conmigo",
      readMoreLabel: "Ver detalles del tour",
      readMorePath: "/es/tours/imperial-palace",
      contactQuery: "imperial-palace",
    },
  },
  resultLabel: "Aquí es donde te llevaría",
  signature: "— Manabu",
  tieBreakerOrder: ["asakusa", "tsukiji", "yanaka", "shibuya", "imperial"],
};
