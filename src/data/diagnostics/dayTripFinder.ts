import type { DiagnosticConfig } from "@/components/blog/Diagnostic";

export const dayTripFinderConfig: DiagnosticConfig = {
  toolId: "day-trip-finder",
  language: "en",
  toolName: "Where I'd Take You",
  introHeadline:
    "Three questions, and I'll tell you which day trip I'd actually book for you.",
  introBody:
    "I've guided this trip 500+ times — Kamakura, Hakone, Nikko. Each one fits a very different traveler. Let me figure out which one is you.",
  ctaLabel: "Let's begin",
  questions: [
    {
      id: "duration",
      chapterLabel: "The time",
      question: "How much of your day can you give me?",
      options: [
        {
          headline: "Just a few hours",
          subtext: "Back in Tokyo by mid-afternoon. Kamakura is the only one this works for.",
          scores: { kamakura: 3, hakone: 0, nikko: 0 },
          eliminates: ["hakone", "nikko"],
        },
        {
          headline: "A full day (around 8 hours)",
          subtext: "Morning to early evening — the typical day trip.",
          scores: { kamakura: 2, hakone: 3, nikko: 1 },
        },
        {
          headline: "A long day, no rush",
          subtext: "I'd rather travel further for something unforgettable.",
          scores: { kamakura: 0, hakone: 1, nikko: 4 },
        },
      ],
    },
    {
      id: "interest",
      chapterLabel: "The mood",
      question: "What pulls you in the most?",
      options: [
        {
          headline: "Mt. Fuji and a hot spring",
          subtext: "Scenery and slow afternoons. Only Hakone delivers this.",
          scores: { kamakura: 0, hakone: 6, nikko: 0 },
        },
        {
          headline: "Old temples by the sea",
          subtext: "Ancient streets, ocean air, good food. This is Kamakura's identity.",
          scores: { kamakura: 6, hakone: 0, nikko: 0 },
        },
        {
          headline: "UNESCO shrines and forest",
          subtext: "Waterfalls, cedar trees, the most ornate shrine in Japan.",
          scores: { kamakura: 0, hakone: 0, nikko: 6 },
        },
      ],
    },
    {
      id: "group",
      chapterLabel: "The company",
      question: "Who's coming with you?",
      options: [
        {
          headline: "Just adults",
          subtext: "We can handle a long walk or two.",
          scores: { kamakura: 1, hakone: 1, nikko: 2 },
        },
        {
          headline: "Kids or seniors",
          subtext: "Easy logistics matter to us.",
          scores: { kamakura: 3, hakone: 2, nikko: 0 },
        },
        {
          headline: "We're here for photos",
          subtext: "The view is the whole point.",
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
        "You want history within reach, easy logistics, and a town small enough to feel its soul. Kamakura gives you 65 temples on a coastline, the Great Buddha sitting in the open air for 800 years, and a walkable street of shops where you can actually taste the local food. We can be back in Tokyo by dinner without rushing.",
      tourPath: "/tours/kamakura-day-trip",
      tourLabel: "Plan this day with me",
      readMoreLabel: "Read the full Kamakura guide",
      readMorePath: "/blog/kamakura-day-trip-from-tokyo",
      contactQuery: "kamakura-day-trip",
    },
    hakone: {
      id: "hakone",
      title: "Hakone.",
      heroImage: "/images/tours/hakone-lake-ashi-fuji.webp",
      narrative:
        "You came to Japan for Mt. Fuji and a slower afternoon. Hakone gives you the cable car, the ropeway, and the lake cruise — without a single long walk. The hot springs are real, the view is the one you've imagined, and we'll be back in Tokyo by the time you want dinner.",
      tourPath: "/tours/hakone-day-trip",
      tourLabel: "Plan this day with me",
      readMoreLabel: "Read the full Hakone guide",
      readMorePath: "/blog/hakone-day-trip-guide-vs-solo",
      contactQuery: "hakone-day-trip",
    },
    nikko: {
      id: "nikko",
      title: "Nikko.",
      heroImage: "/images/blog/nikko-toshogu-hero.webp",
      narrative:
        "You want the Japan that takes a little effort to reach. Nikko gives you Toshogu, the most ornate shrine in the country, set in cedar forest with waterfalls a short drive away. It's a long day, but it's the one travelers tell me they remember most. This is where I'd take you.",
      tourPath: "/tours/nikko-day-trip",
      tourLabel: "Plan this day with me",
      readMoreLabel: "Read the full Nikko guide",
      readMorePath: "/blog/nikko-day-trip-from-tokyo",
      contactQuery: "nikko-day-trip",
    },
  },
  resultLabel: "Here's where I'd take you",
  signature: "— Manabu",
};
