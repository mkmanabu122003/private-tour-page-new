import type { DiagnosticConfig } from "@/components/blog/Diagnostic";

export const neighborhoodFinderConfig: DiagnosticConfig = {
  toolId: "neighborhood-finder",
  language: "en",
  toolName: "Where to Walk",
  introHeadline:
    "Three questions, and I'll tell you which Tokyo neighborhood to explore first.",
  introBody:
    "Tokyo has 23 wards and hundreds of neighborhoods, but I keep sending travelers to the same five. Let me match you with yours.",
  ctaLabel: "Let's find out",
  triggerImage: "/images/tours/meiji-shrine-torii-gate.webp",
  triggerImageAlt: "Torii gate at Meiji Shrine — discover which Tokyo neighborhood fits you",
  questions: [
    {
      id: "draw",
      chapterLabel: "The draw",
      question: "What excites you most about Tokyo?",
      options: [
        {
          headline: "Ancient temples and street food",
          subtext:
            "Incense, wooden gates, and snacks from vendors who've been there for decades.",
          scores: { asakusa: 6, yanaka: 1, shibuya: 0, tsukiji: 1, imperial: 0 },
        },
        {
          headline: "Fashion, pop culture, and neon",
          subtext:
            "Harajuku crepes, Shibuya Crossing, and Meiji Shrine — all in one walk.",
          scores: { asakusa: 0, yanaka: 0, shibuya: 6, tsukiji: 0, imperial: 0 },
        },
        {
          headline: "The best food Tokyo has to offer",
          subtext:
            "Sushi at dawn, tamagoyaki stands, and the market that feeds the city.",
          scores: { asakusa: 1, yanaka: 0, shibuya: 0, tsukiji: 6, imperial: 0 },
        },
        {
          headline: "Quiet lanes nobody talks about",
          subtext:
            "Old wooden houses, temple cats, and a shopping street from another era.",
          scores: { asakusa: 0, yanaka: 6, shibuya: 0, tsukiji: 0, imperial: 0 },
        },
        {
          headline: "Imperial gardens and Japanese history",
          subtext:
            "Stone walls of Edo Castle, moats, and the quietest park in central Tokyo.",
          scores: { asakusa: 0, yanaka: 0, shibuya: 0, tsukiji: 0, imperial: 6 },
        },
      ],
    },
    {
      id: "pace",
      chapterLabel: "The pace",
      question: "What's your ideal vibe?",
      options: [
        {
          headline: "Buzzing — crowds are part of the fun",
          subtext: "I want to feel Tokyo's heartbeat.",
          scores: { asakusa: 2, yanaka: 0, shibuya: 3, tsukiji: 2, imperial: 0 },
        },
        {
          headline: "Slow and contemplative",
          subtext: "Gardens, tea, silence. I came to breathe.",
          scores: { asakusa: 0, yanaka: 3, shibuya: 0, tsukiji: 0, imperial: 4 },
        },
        {
          headline: "A rhythm — busy then quiet",
          subtext: "Start in the market, end on a peaceful street.",
          scores: { asakusa: 2, yanaka: 1, shibuya: 0, tsukiji: 3, imperial: 0 },
        },
      ],
    },
    {
      id: "company",
      chapterLabel: "The company",
      question: "Who's coming with you?",
      options: [
        {
          headline: "Just adults — we can walk all day",
          subtext: "No accessibility constraints.",
          scores: { asakusa: 1, yanaka: 2, shibuya: 1, tsukiji: 1, imperial: 1 },
        },
        {
          headline: "Kids or seniors",
          subtext: "Easy logistics and rest stops matter.",
          scores: { asakusa: 3, yanaka: 0, shibuya: 1, tsukiji: 1, imperial: 2 },
        },
        {
          headline: "Couple or solo",
          subtext: "I want something personal and memorable.",
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
        "You want the Tokyo that's been here for centuries. Asakusa gives you Senso-ji, the oldest temple in the city, a shopping street unchanged since the Edo period, and street food worth crossing the world for. It's busy, it's iconic, and with a guide, you'll see the parts most visitors walk right past.",
      tourPath: "/tours/asakusa",
      tourLabel: "Walk Asakusa with me",
      readMoreLabel: "Read the full Asakusa guide",
      readMorePath: "/blog/asakusa-guide-what-to-see",
      contactQuery: "asakusa",
    },
    yanaka: {
      id: "yanaka",
      title: "Yanaka.",
      heroImage: "/images/blog/yanaka-ginza-shotengai-entrance.webp",
      narrative:
        "You want the Tokyo that survived the war and the earthquakes — the one with wooden houses, temple cats, and a shotengai where the shopkeepers know each other by name. Yanaka is where I take travelers who've already done the famous spots and want something real. It's quiet, it's beautiful, and it's disappearing.",
      tourPath: "/tours/yanaka",
      tourLabel: "Walk Yanaka with me",
      readMoreLabel: "Read the full Yanaka guide",
      readMorePath: "/blog/yanaka-walking-tour-guide",
      contactQuery: "yanaka",
    },
    shibuya: {
      id: "shibuya",
      title: "Shibuya & Harajuku.",
      heroImage: "/images/tours/shibuya-crossing-tokyo.webp",
      narrative:
        "You want the Tokyo that moves — the crossing, the fashion, the energy of a city that reinvents itself every season. We'll start at Meiji Shrine in the forest, walk through Harajuku's back streets, and end at the most famous intersection in the world. It's the Tokyo you imagined before you got here.",
      tourPath: "/tours/shibuya-harajuku",
      tourLabel: "Walk Shibuya with me",
      readMoreLabel: "Read the full Shibuya & Harajuku guide",
      readMorePath: "/blog/shibuya-harajuku-guide",
      contactQuery: "shibuya-harajuku",
    },
    tsukiji: {
      id: "tsukiji",
      title: "Tsukiji & Ginza.",
      heroImage: "/images/tours/tsukiji-market-food-tokyo.webp",
      narrative:
        "You came to Tokyo to eat. Tsukiji Outer Market is where chefs still shop at dawn, where tamagoyaki is grilled in front of you, and where a ¥200 skewer can change what you think about Japanese food. After the market, we'll walk to Ginza — Tokyo's most elegant neighborhood, right next door.",
      tourPath: "/tours/tsukiji-ginza",
      tourLabel: "Walk Tsukiji with me",
      readMoreLabel: "Read the full Tsukiji guide",
      readMorePath: "/blog/tsukiji-guide-food-lover",
      contactQuery: "tsukiji-ginza",
    },
    imperial: {
      id: "imperial",
      title: "Imperial Palace & Marunouchi.",
      heroImage: "/images/tours/imperial-palace-gardens.webp",
      narrative:
        "You want the quiet power of old Edo. The Imperial Palace grounds sit on the ruins of the largest castle in the world, surrounded by moats and stone walls that have stood for 400 years. The East Gardens are free, uncrowded, and some of the most beautiful green space in Tokyo. This is where the city breathes.",
      tourPath: "/tours/imperial-palace",
      tourLabel: "Walk the Palace with me",
      readMoreLabel: "See tour details",
      readMorePath: "/tours/imperial-palace",
      contactQuery: "imperial-palace",
    },
  },
  resultLabel: "Here's where I'd take you",
  signature: "— Manabu",
  tieBreakerOrder: ["asakusa", "tsukiji", "yanaka", "shibuya", "imperial"],
};
