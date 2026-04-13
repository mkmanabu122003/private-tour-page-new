import type { DiagnosticConfig } from "@/components/blog/Diagnostic";

export const foodFinderConfig: DiagnosticConfig = {
  toolId: "food-finder",
  language: "en",
  toolName: "What to Eat",
  introHeadline:
    "Three questions, and I'll tell you how to eat your way through Tokyo.",
  introBody:
    "Ramen alleys, dawn markets, hidden izakaya, plant-based gems — Tokyo has it all. But where you start depends on who you are. Let me match you.",
  ctaLabel: "Let's find out",
  triggerImage: "/images/tours/tsukiji-street-food.webp",
  triggerImageAlt: "Street food stalls in Tokyo — find your perfect food experience",
  questions: [
    {
      id: "dream",
      chapterLabel: "The craving",
      question: "What's your food dream in Tokyo?",
      options: [
        {
          headline: "Slurp ramen, grab yakitori, eat standing up",
          subtext: "Cheap, fast, delicious. The way Tokyo actually eats.",
          scores: { streetfood: 6, tsukiji: 1, izakaya: 0, dietary: 0 },
        },
        {
          headline: "Walk a market where chefs shop at dawn",
          subtext: "Fresh seafood, tamagoyaki stands, and food as sightseeing.",
          scores: { streetfood: 0, tsukiji: 6, izakaya: 0, dietary: 0 },
        },
        {
          headline: "Tiny bars, local sake, food you'd never find alone",
          subtext: "The Tokyo that only opens up at night.",
          scores: { streetfood: 0, tsukiji: 0, izakaya: 6, dietary: 0 },
        },
        {
          headline: "Great food that fits my dietary needs",
          subtext: "Vegetarian, vegan, halal, or allergy-friendly — without compromise.",
          scores: { streetfood: 0, tsukiji: 0, izakaya: 0, dietary: 6 },
        },
      ],
    },
    {
      id: "time",
      chapterLabel: "The hour",
      question: "When do you want to eat?",
      options: [
        {
          headline: "Morning — I'll wake up at 5 AM for food",
          subtext: "The early bird gets the freshest tuna.",
          scores: { streetfood: 0, tsukiji: 4, izakaya: 0, dietary: 0 },
        },
        {
          headline: "Afternoon — walking and grazing",
          subtext: "A bite here, a snack there, keep moving.",
          scores: { streetfood: 3, tsukiji: 1, izakaya: 0, dietary: 1 },
        },
        {
          headline: "Night — that's when Tokyo really eats",
          subtext: "Lanterns, smoke, cold beer, no rush.",
          scores: { streetfood: 1, tsukiji: 0, izakaya: 4, dietary: 0 },
        },
      ],
    },
    {
      id: "priority",
      chapterLabel: "The priority",
      question: "What matters most?",
      options: [
        {
          headline: "Price — I want to eat a lot for less",
          subtext: "Under ¥1,000 per meal? Challenge accepted.",
          scores: { streetfood: 4, tsukiji: 0, izakaya: 0, dietary: 0 },
        },
        {
          headline: "Authenticity — where do locals actually go?",
          subtext: "No tourist menus. The real thing.",
          scores: { streetfood: 1, tsukiji: 1, izakaya: 3, dietary: 0 },
        },
        {
          headline: "The story — I want to learn, not just eat",
          subtext: "History, culture, the craft behind the food.",
          scores: { streetfood: 0, tsukiji: 3, izakaya: 1, dietary: 0 },
        },
        {
          headline: "Accommodation — my dietary needs come first",
          subtext: "I need someone who understands what I can and can't eat.",
          scores: { streetfood: 0, tsukiji: 0, izakaya: 0, dietary: 5 },
        },
      ],
    },
  ],
  results: {
    streetfood: {
      id: "streetfood",
      title: "Street Food & Ramen.",
      heroImage: "/images/blog/ramen-guide-hero.webp",
      narrative:
        "You want to eat the way Tokyo eats every day — standing at a ramen counter, grabbing yakitori from a stall, pointing at things you can't read and trusting the cook. Tokyo's best meals often cost under ¥1,000, and the best streets for finding them are in Asakusa, Ueno, and the alleys around Shinjuku Station. I'll show you the stalls worth lining up for and the ones where there's never a line because only locals know about them.",
      tourPath: "/tours/asakusa",
      tourLabel: "Eat Asakusa with me",
      readMoreLabel: "Read the Ramen Guide",
      readMorePath: "/blog/ramen-guide-tokyo",
      contactQuery: "street-food-tour",
    },
    tsukiji: {
      id: "tsukiji",
      title: "Tsukiji Market.",
      heroImage: "/images/tours/tsukiji-market-food-tokyo.webp",
      narrative:
        "You want to be where the food comes from. Tsukiji Outer Market is where chefs still shop at dawn, where tamagoyaki is grilled in front of you on a copper pan that's been used for decades, and where a ¥200 skewer of grilled scallop can rewrite what you think seafood should taste like. After the market, we'll walk to Ginza — Tokyo's most elegant neighborhood, right next door.",
      tourPath: "/tours/tsukiji-ginza",
      tourLabel: "Walk Tsukiji with me",
      readMoreLabel: "Read the Tsukiji Guide",
      readMorePath: "/blog/tsukiji-guide-food-lover",
      contactQuery: "tsukiji-ginza",
    },
    izakaya: {
      id: "izakaya",
      title: "Izakaya & Night Food.",
      heroImage: "/images/tours/night-tour-omoide-yokocho.webp",
      narrative:
        "You want the Tokyo that opens up after dark — the yakitori smoke in Omoide Yokocho, the six-seat bars in Golden Gai, the standing izakaya under the train tracks in Yurakucho where salarymen loosen their ties over highballs and grilled chicken. These places often have no English menu, no online presence, and a door that looks like it leads to someone's apartment. Going with a local changes everything.",
      tourPath: "/tours/tokyo-night-tour",
      tourLabel: "Eat Tokyo at night with me",
      readMoreLabel: "Read the Izakaya Guide",
      readMorePath: "/blog/tokyo-izakaya-guide",
      contactQuery: "night-food-tour",
    },
    dietary: {
      id: "dietary",
      title: "Dietary-Conscious Foodie.",
      heroImage: "/images/blog/asakusa-street-food.webp",
      narrative:
        "You want to eat well in Tokyo without worrying about what's in the food. Whether you're vegetarian, vegan, halal, or managing allergies, Tokyo has more options than you'd expect — but finding them alone requires reading Japanese labels and understanding hidden ingredients like dashi and mirin. I'll plan a route where every stop is safe, delicious, and chosen specifically for you.",
      tourPath: "/tours/custom",
      tourLabel: "Plan my food tour",
      readMoreLabel: "Read the Vegetarian Guide",
      readMorePath: "/blog/vegetarian-food-tour-tokyo",
      contactQuery: "dietary-food-tour",
    },
  },
  resultLabel: "Here's how I'd feed you",
  signature: "— Manabu",
  tieBreakerOrder: ["izakaya", "tsukiji", "streetfood", "dietary"],
};
