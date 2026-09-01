import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ArrowUp, Calendar, Sparkles, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  // Tokyo Area Guides
  {
    slug: "shibuya-harajuku-guide",
    title: "Shibuya & Harajuku: A Local Guide to Tokyo's Modern Side",
    description:
      "Explore Shibuya and Harajuku like a local. Insider tips on Shibuya Crossing, Takeshita Street, hidden cafes, and the best photo spots from a licensed guide.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/blog/shibuya-harajuku-guide-hero.webp",
  },
  {
    slug: "shinjuku-guide",
    title: "Shinjuku Guide: Tokyo's Neon-Lit Heart",
    description:
      "Navigate Shinjuku like a local. A guide to Golden Gai, Omoide Yokocho, Kabukicho, Shinjuku Gyoen, and the best food spots in Tokyo's busiest district.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/blog/shinjuku-guide-hero.webp",
  },
  {
    slug: "harajuku-vs-shibuya-vs-shinjuku",
    title: "Harajuku vs Shibuya vs Shinjuku: Which Tokyo Neighborhood Fits Your Trip?",
    description:
      "3 neighborhoods, 7 minutes apart. A licensed Tokyo guide compares Harajuku, Shibuya, and Shinjuku by vibe, time needed, and who each one is actually for.",
    date: "April 23, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/tours/harajuku-takeshita-street.webp",
  },
  // Day Trip Guides
  {
    slug: "kamakura-vs-hakone-vs-nikko-day-trip",
    title: "Kamakura vs Hakone vs Nikko: Which Day Trip Should You Choose?",
    description:
      "Can't decide between Kamakura, Hakone, or Nikko? A local guide compares travel time, highlights, and who each trip is best for to help you choose.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/blog/hakone-fuji-comparison.webp",
  },
  {
    slug: "hakone-vs-nikko-day-trip",
    title: "Hakone vs Nikko: Which Day Trip From Tokyo Should You Choose? (2026)",
    description:
      "Hakone (hot springs, Mt Fuji views, easy logistics) or Nikko (UNESCO temples, waterfalls, history depth)? A licensed Tokyo guide compares both day trips for cost, time, and traveler type.",
    date: "May 9, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/blog/hakone-fuji-comparison.webp",
  },
  {
    slug: "onsen-day-trips-beyond-hakone",
    title: "5 Onsen Day Trips from Tokyo (That Aren't Hakone): 2026 Guide",
    description:
      "Beyond Hakone: Kusatsu, Atami, Ikaho, Chichibu, and Tokyo's own onsen. A licensed guide compares access, cost, and tattoo policy for each.",
    date: "April 24, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/tours/hakone-ropeway-owakudani.webp",
  },
  // Planning Your Trip
  {
    slug: "tokyo-3-day-itinerary",
    title: "The Perfect 3-Day Tokyo Itinerary: From a Local Guide",
    description:
      "Plan the perfect 3 days in Tokyo with insider tips from a licensed local guide. Covers Asakusa, Shibuya, Tsukiji, day trips, and hidden gems most tourists miss.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/shibuya-crossing-tokyo.webp",
  },
  {
    slug: "best-time-to-visit-tokyo",
    title: "Best Time to Visit Tokyo: A Month-by-Month Guide",
    description:
      "When should you visit Tokyo? A local guide breaks down weather, events, crowds, and costs for every month to help you plan the perfect trip.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/meiji-shrine-torii-gate.webp",
  },
  {
    slug: "tokyo-cherry-blossom-guide",
    title: "Tokyo Cherry Blossoms 2026: Best Spots & Dates",
    description:
      "Tokyo sakura season 2026: bloom starts March 19, full bloom March 27. A local guide ranks the 7 best spots and shares timing tips most visitors miss.",
    date: "March 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/blog/meguro-river-cherry-blossoms.webp",
  },
  {
    slug: "japan-temple-shrine-etiquette",
    title: "Temple & Shrine Etiquette in Japan: A Complete Guide",
    description:
      "Visiting temples and shrines in Japan? Learn the essential etiquette: how to pray, purify, bow, and behave respectfully from a licensed Japanese guide.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/senso-ji-temple-tokyo.webp",
  },
  {
    slug: "mount-fuji-from-tokyo",
    title: "Can You See Mt. Fuji from Tokyo? A Guide's 2026 Answer",
    description:
      "Yes — 40-60% of winter days. A licensed Tokyo guide reveals 5 viewpoints that work in 2026, monthly visibility data, and the free spot currently closed.",
    date: "April 23, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/hakone-pirate-ship-ashi.webp",
  },
  {
    slug: "private-mount-fuji-tour-2026",
    title: "Private Mt. Fuji Tour from Tokyo 2026: A Licensed Guide's Guide",
    description:
      "Compare private Mt. Fuji tours from Tokyo in 2026. Licensed guide breaks down 3 routes, real costs (¥30,000–¥120,000), what's included, and Viator vs private alternatives.",
    date: "May 18, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/hakone-lake-ashi-fuji.webp",
  },
  {
    slug: "best-tokyo-night-tour-2026",
    title: "Best Tokyo Night Tour 2026: A Licensed Guide's Honest Pick",
    description:
      "Compare private Tokyo night tours in 2026. Licensed guide breaks down 4 routes (Shinjuku, Shibuya, Asakusa, Roppongi), real costs, and Viator vs licensed alternatives.",
    date: "May 18, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/blog/shinjuku-kabukicho-nightlife.webp",
  },
  {
    slug: "imperial-palace-tokyo-tour-2026",
    title: "Tokyo Imperial Palace Tour 2026: A Licensed Guide's Complete Guide",
    description:
      "How to visit Tokyo Imperial Palace in 2026: official tour (free, 5 AM JST month-start booking), East Gardens (no reservation), or licensed private walking tour.",
    date: "May 18, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/imperial-palace-gardens.webp",
  },
  {
    slug: "narita-vs-haneda",
    title: "Narita vs Haneda: Which Tokyo Airport Is Better in 2026?",
    description:
      "Haneda is closer and cheaper to reach. Narita has more flights and LCCs. A licensed Tokyo guide compares both by cost, time, and arrival-day practicality.",
    date: "April 24, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/blog/tokyo-airport-terminal.webp",
  },
  // Tokyo Area Guides (new)
  {
    slug: "asakusa-guide",
    title: "Asakusa Guide: What to See and Skip",
    description:
      "Asakusa is Tokyo's most visited neighborhood, and most people see it wrong. A licensed guide who works there daily tells you what actually matters.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/blog/asakusa-guide-hero.webp",
  },
  {
    slug: "old-tokyo-shitamachi",
    title: "Old Tokyo Still Exists: A Guide's Map to Shitamachi",
    description:
      "Shitamachi, Tokyo's 'low city', survived bombs, earthquakes, and redevelopment. A licensed guide shows you what remains and why it still matters.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/tours/asakusa-backstreet-local.webp",
  },
  {
    slug: "yanaka-walking-tour-guide",
    title: "Yanaka Walking Tour: Tokyo's Best-Kept Secret Neighborhood",
    description:
      "Yanaka is old Tokyo at its finest — temples, shotengai, and no crowds. A local guide shares the best walking route through this hidden gem.",
    date: "March 8, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/blog/yanaka-ginza-shopping-street.webp",
  },
  {
    slug: "yanaka-tokyo-walking-route",
    title: "Yanaka Tokyo: A Guide's 3-Hour Walking Route",
    description:
      "Yanaka survived the 1923 earthquake and WWII bombing. It's the closest thing to old Tokyo that still exists. Here's how to walk it properly.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/tours/asakusa-kaminarimon-morning.webp",
  },
  {
    slug: "tokyo-hidden-gems",
    title: "Tokyo Hidden Gems: A Licensed Guide's Map",
    description:
      "After 500+ tours, these are the Tokyo spots I return to again and again, not because they're secret, but because most guides don't know why they matter.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/blog/asakusa-hidden-shrine.webp",
  },
  {
    slug: "senso-ji-most-visited-temple",
    title: "Is Senso-ji the World's Most Visited Temple?",
    description:
      "You'll hear Senso-ji gets 30 million visitors a year. A licensed guide who works there daily examines the claim, and what it means for your visit.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/blog/asakusa-sensoji-pagoda.webp",
  },
  {
    slug: "tsukiji-market-guide",
    title: "Tsukiji Market Guide 2026: What's Still Worth It",
    description:
      "The inner market closed in 2018. But the outer market is alive. A local guide explains what remains, what's worth eating, and how to visit right.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/blog/tsukiji-market-seafood-stalls.webp",
  },
  // Day Trip Guides (new)
  {
    slug: "kamakura-day-trip-from-tokyo",
    title: "Kamakura Day Trip from Tokyo: Guide's Plan",
    description:
      "Kamakura is an easy day trip from Tokyo, but most visitors miss what makes it special. A licensed guide explains what to see and whether to hire a guide.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/tours/kamakura-hasedera-temple.webp",
  },
  {
    slug: "nikko-day-trip-from-tokyo",
    title: "Nikko Day Trip from Tokyo: Complete Guide (2025)",
    description:
      "Planning a Nikko day trip from Tokyo? A licensed guide covers trains, top sights, and why a private guided tour makes all the difference.",
    date: "March 8, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/blog/nikko-shinkyo-bridge-daiya-river.webp",
  },
  {
    slug: "yokohama-day-trip-from-tokyo",
    title: "Yokohama Day Trip from Tokyo: Worth It?",
    description:
      "Yokohama is 30 minutes from Tokyo. But is it worth a full day? A licensed guide gives an honest answer, and what to combine it with.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/blog/yokohama-minatomirai-hero.webp",
  },
  {
    slug: "kawagoe-day-trip-from-tokyo",
    title: "Kawagoe Day Trip from Tokyo: Little Edo Guide",
    description:
      "Kawagoe is 30 minutes from Tokyo and looks like feudal Japan. A licensed guide explains what to see, what to skip, and how to get the most out of one day.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/blog/kawagoe-kurazukuri-hero.webp",
  },
  // Planning Your Trip (new)
  {
    slug: "tokyo-itinerary-5-days",
    title: "Tokyo 5 Day Itinerary: A Licensed Guide's Plan",
    description:
      "Not the usual tourist circuit. A licensed Tokyo guide shares the 5-day itinerary he gives his private clients, with honest notes on what to skip.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/shibuya-scramble-crossing.webp",
  },
  {
    slug: "tokyo-on-a-budget",
    title: "Tokyo on a Budget: What a Local Guide Spends",
    description:
      "Tokyo is more affordable than its reputation. A licensed guide breaks down real daily costs (transport, food, entry fees) and where to save.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/blog/tokyo-street-snack.webp",
  },
  {
    slug: "japan-rail-pass-worth-it",
    title: "Japan Rail Pass 2026: Is It Worth It?",
    description:
      "The JR Pass price went up significantly. Is it still worth buying? A licensed guide does the math for common itineraries and gives an honest answer.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/blog/shinkansen-n700-tokyo-station.webp",
  },
  {
    slug: "tipping-in-japan",
    title: "Tipping in Japan: What You Need to Know",
    description:
      "Tipping isn't customary in Japan. Most Japanese people aren't used to receiving tips and may feel confused. A licensed guide explains why, and how to show appreciation.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/blog/ryokan-nakai-kimono-greeting.webp",
  },
  // Food Guides
  {
    slug: "tokyo-izakaya-guide",
    title: "Tokyo Izakaya Guide: Where a Local Guide Drinks",
    description:
      "A licensed Tokyo guide reveals the izakaya alleys, ordering customs, and hidden bars tourists can't find alone. Golden Gai, Omoide Yokocho, Yurakucho & more.",
    date: "April 13, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food & Drink",
    image: "/images/tours/night-tour-omoide-yokocho.webp",
  },
  {
    slug: "ramen-guide-tokyo",
    title: "Ramen Guide Tokyo: What a Local Guide Orders",
    description:
      "There are 10,000+ ramen shops in Tokyo. A licensed guide with 500+ tours cuts through the noise and tells you exactly what to order and where.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food & Drink",
    image: "/images/blog/ramen-guide-hero.webp",
  },
  {
    slug: "sushi-guide-tokyo",
    title: "Sushi Guide Tokyo: What a Licensed Guide Orders",
    description:
      "Tokyo has more Michelin-starred sushi restaurants than anywhere. A local guide tells you what to order, where to go, and how not to embarrass yourself.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food & Drink",
    image: "/images/blog/tokyo-sushi-nigiri-platter.webp",
  },
  {
    slug: "vegetarian-food-tour-tokyo",
    title: "Vegetarian Food Tour Tokyo: A Complete Guide for Dietary Restrictions",
    description:
      "Worried about dietary restrictions in Tokyo? A licensed private guide shares the best vegetarian-friendly food spots and how to customize your tour.",
    date: "March 8, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food & Drink",
    image: "/images/blog/vegetarian-matcha-wagashi.webp",
  },
  // Helpful Guides
  {
    slug: "is-it-worth-hiring-a-tour-guide-in-tokyo",
    title: "Is It Worth Hiring a Private Tour Guide in Tokyo?",
    description:
      "Wondering if a private tour guide in Tokyo is worth the cost? A licensed guide explains when it makes sense, what you get, and who benefits most.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Decision Helpers",
    image: "/images/tour-photos/tour-photo-1.webp",
  },
  {
    slug: "tokyo-private-tour-guide-cost",
    title: "How Much Does a Private Tour Guide Cost in Tokyo? 2026",
    description:
      "Tokyo tour guide prices range from ¥15,000 to ¥80,000 per day. A licensed local guide explains what affects the cost and what you actually get.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Decision Helpers",
    image: "/images/blog/tipping-japan-hero.webp",
  },
  {
    slug: "free-walking-tour-vs-private-tokyo",
    title: "Free Walking Tour vs Private Guide in Tokyo: The Honest Math (2026)",
    description:
      "Free Tokyo walking tours expect ¥1,000–2,000 in tips per person. A licensed private guide is ¥45,000 per group. A guide explains when each is the right call.",
    date: "April 30, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Decision Helpers",
    image: "/images/tour-photos/sumida-river-group-selfie.webp",
  },
  {
    slug: "what-to-expect-private-tour-tokyo",
    title: "What to Expect on a Private Tour in Tokyo (From Your Guide)",
    description:
      "Meeting point, pace, flexibility, food, rain plans. A Tokyo guide walks you through exactly what happens from start to finish.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Decision Helpers",
    image: "/images/tour-photos/tour-photo-2.webp",
  },
  {
    slug: "first-time-tokyo-local-guide",
    title: "First Time in Tokyo? Here's What a Local Guide Actually Does",
    description:
      "Beyond directions and translations. What a typical day with a Tokyo guide looks like, and an honest take on whether you need one.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Decision Helpers",
    image: "/images/tour-photos/tour-photo-3.webp",
  },
  // New Day Trip Guides
  {
    slug: "hakone-day-trip-guide-vs-solo",
    title: "Hakone Day Trip: Do You Need a Guide or Can You Go Alone? (2026)",
    description:
      "The Hakone Loop is doable solo, but timing is tricky. A local guide explains when going alone works and when a guide saves your day.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/tours/hakone-lake-ashi-fuji.webp",
  },
  {
    slug: "nikko-day-trip-guide-vs-solo",
    title: "Nikko Day Trip 2026: Guided Tour vs Going Solo (Honest Comparison)",
    description:
      "Nikko from Tokyo: around ¥12,000 solo by public transit vs ¥80,000 guided. A licensed guide compares cost, language barriers, and what you actually see in each.",
    date: "April 20, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/blog/nikko-toshogu-hero.webp",
  },
  {
    slug: "kamakura-day-trip-guide-vs-solo",
    title: "Kamakura Day Trip 2026: Guided Tour vs Going Solo (Honest Comparison)",
    description:
      "Kamakura from Tokyo: around ¥4,000 solo vs ¥70,000 guided. A licensed guide compares the temples most visitors miss, hydrangea season logistics, and when guided actually pays off.",
    date: "April 20, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/tours/kamakura-great-buddha.webp",
  },
  {
    slug: "licensed-vs-unlicensed-tour-guides-japan",
    title: "Licensed vs Unlicensed Tour Guides in Japan: The One Thing Most Travelers Don't Know (2026)",
    description:
      "Japan has a national exam for tour guides. Since 2018 the license is no longer legally required — but the difference between licensed and unlicensed is larger than most travelers realize.",
    date: "April 20, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Decision Helpers",
    image: "/images/blog/shinbashi-taiyaki-shop.webp",
  },
  // New Planning
  {
    slug: "tokyo-with-kids-family-tour",
    title: "Tokyo With Kids: Why Families Are Booking Private Guides (2026)",
    description:
      "Strollers on packed trains, meltdowns at shrines, kids who won't eat raw fish. A family-friendly guide shares how to make Tokyo work with children.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/asakusa-nakamise-street.webp",
  },
  // New Food Guides
  {
    slug: "tsukiji-vs-toyosu",
    title: "Tsukiji vs Toyosu: Which Tokyo Fish Market Should You Visit?",
    description:
      "Tsukiji Outer Market (street food, 460+ stalls) vs Toyosu Fish Market (tuna auction, modern facility). A local guide compares both and tells you which to choose.",
    date: "March 31, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food & Drink",
    image: "/images/blog/toyosu-senkyaku-banrai.webp",
  },
  {
    slug: "toyosu-vs-ueno-fish-market",
    title: "Toyosu vs Ueno Market: Which Tokyo Fish Market Should You Visit?",
    description:
      "Toyosu (real wholesale market with tuna auction) vs Ueno's Ameyoko (open-air street with seafood stalls and izakaya). A licensed Tokyo guide compares both.",
    date: "May 9, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food & Drink",
    image: "/images/blog/toyosu-senkyaku-banrai.webp",
  },
  {
    slug: "tsukiji-outer-vs-inner-market",
    title: "Tsukiji Outer vs Inner Market: What's the Difference?",
    description:
      "The Inner Market moved to Toyosu in October 2018; the Outer Market with 460+ stalls is still in Tsukiji. A licensed Tokyo guide explains what changed.",
    date: "May 9, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food & Drink",
    image: "/images/blog/tsukiji-outer-market-entrance.webp",
  },
  {
    slug: "toyosu-vs-tsukiji-outer",
    title: "Toyosu vs Tsukiji Outer Market: Which to Visit in 2026?",
    description:
      "Toyosu (modern wholesale market with tuna auction) vs Tsukiji Outer Market (460+ retail stalls in 2026). A guide's comparison with hours, costs, and a same-morning combo.",
    date: "May 9, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food & Drink",
    image: "/images/blog/tsukiji-fresh-tuna-display.webp",
  },
  {
    slug: "tsukiji-to-ginza-food-walk",
    title: "Tsukiji to Ginza: The Food Walk Tokyo Locals Do on Their Day Off",
    description:
      "A 3-hour walking route from the fish market to Ginza's backstreet bars, with the stops locals actually make. No tourist traps.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food & Drink",
    image: "/images/blog/ginza-backstreet-buildings.webp",
  },
  {
    slug: "ginza-to-tsukiji-walking-route",
    title: "Walking from Ginza to Tsukiji: 3 Routes Compared (2026)",
    description:
      "Walk Ginza to Tsukiji in 15 min along Harumi-dori, past Kabukiza & Tsukiji Hongan-ji. A licensed Tokyo guide on 3 routes, exits, and timing.",
    date: "May 8, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Neighborhoods",
    image: "/images/blog/ginza-shopping-street.webp",
  },
  // 2026-05 batch: Day Trip + Decision Helper + Practical
  {
    slug: "best-day-trips-from-tokyo",
    title: "9 Best Day Trips from Tokyo (Ranked by a Licensed Guide, 2026)",
    description:
      "Kamakura, Hakone, Nikko, Mt Fuji, Kawagoe, Enoshima, Yokohama, Mt Takao, Kawaguchiko — a licensed Tokyo guide ranks each by travel time and who they suit.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/tours/hakone-lake-ashi-fuji.webp",
  },
  {
    slug: "kawaguchiko-vs-hakone-for-mt-fuji",
    title: "Kawaguchiko vs Hakone for Mt Fuji: Which to Pick (Local Guide, 2026)",
    description:
      "Kawaguchiko = closer views. Hakone = more to do but the Fuji view is conditional. A licensed Tokyo guide compares both for first-time visitors.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/tours/hakone-lake-ashi-fuji.webp",
  },
  {
    slug: "enoshima-day-trip-from-tokyo",
    title: "Enoshima Day Trip from Tokyo 2026: Beaches, Shrines, Kamakura Combo",
    description:
      "Enoshima is 1h from Tokyo: shrine cave, beach, sunset views, Mt Fuji on clear days. How to combine with Kamakura and what to eat.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/tours/kamakura-great-buddha.webp",
  },
  {
    slug: "group-vs-private-tour-tokyo",
    title: "Group vs Private Tour in Tokyo: Which Saves Time, Money, or Sanity?",
    description:
      "Group ¥3,000–5,000/person, private ¥40,000–80,000/group. A licensed guide explains when group beats private, and the 4 trips where private is the only option.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tour-photos/group-photo.webp",
  },
  {
    slug: "how-to-choose-private-tokyo-guide",
    title: "How to Choose a Private Tokyo Guide: 7 Questions to Ask Before Booking",
    description:
      "Licensed vs unlicensed, agency vs direct, group size limits, refund terms — what to ask before paying ¥40,000+ for a private Tokyo tour.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tour-photos/group-photo.webp",
  },
  {
    slug: "viator-vs-getyourguide-vs-direct-tokyo",
    title: "Viator vs GetYourGuide vs Direct Booking: Tokyo Tours Compared (2026)",
    description:
      "Viator and GetYourGuide add ~20–25% commission. A licensed Tokyo guide compares all three with direct booking — real cost, refund terms, and what you get.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tour-photos/group-photo.webp",
  },
  {
    slug: "where-to-stay-in-tokyo-area-guide",
    title: "Where to Stay in Tokyo 2026: 7 Areas Ranked by What You're Doing",
    description:
      "Shinjuku for nightlife, Asakusa for old Tokyo, Ginza for shopping, Shibuya for first-time. A licensed Tokyo guide picks the area that matches your trip.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/blog/shibuya-harajuku-guide-hero.webp",
  },
  {
    slug: "tokyo-with-elderly-parents",
    title: "Tokyo with Elderly Parents: Accessible Routes & 3-Generation Trip Ideas",
    description:
      "Wheelchair-friendly Tokyo routes, station tips, half-day pacing, accessible restaurants and onsen. A licensed guide on planning Tokyo for travelers in their 70s and 80s.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/imperial-palace-gardens.webp",
  },
  {
    slug: "english-friendly-tokyo-tips",
    title: "English-Friendly Tokyo: 12 Tips That Make Tokyo Feel Easier",
    description:
      "Translation apps that work, station signs, restaurant strategies, emergency words. A licensed Tokyo guide on the small things that close the language gap.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/tokyo-night-tour-hero.webp",
  },
  {
    slug: "rainy-day-tokyo",
    title: "Rainy Day in Tokyo: 14 Things to Do When the Weather Turns",
    description:
      "Indoor markets, museums, observation decks, depachika — and 3 places that are actually better in the rain. A licensed Tokyo guide on rescuing rainy days.",
    date: "May 22, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/tours/tokyo-night-tour-hero.webp",
  },
  // 2026-05-23 batch (from daily brief Routine)
  {
    slug: "is-hakone-worth-visiting",
    title: "Is Hakone Worth Visiting? A Private Guide's Honest Take (2026)",
    description:
      "Hakone promises Mt. Fuji views — but the mountain hides more than you'd think. A licensed Tokyo guide shares 50+ tours of insight on when Hakone shines.",
    date: "May 23, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/blog/private-fuji-route-a-hakone.jpg",
  },
  // 2026-07-20 batch (Tier 1 data-driven)
  {
    slug: "mt-fuji-climbing-season-guide",
    title: "Mt Fuji Climbing Season 2026: Do You Actually Need a Guide?",
    description:
      "A licensed Tokyo guide on Mt. Fuji's 2026 climbing season — the dates, the new ¥4,000 permit and reservation rules, and whether you actually need a guide.",
    date: "July 20, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Decision Helpers",
    image: "/images/blog/mt-fuji-summit-sunrise.webp",
  },
  {
    slug: "teamlab-planets-vs-borderless",
    title: "teamLab Planets vs Borderless: Which One Should You Pick?",
    description:
      "Two very different digital-art museums in Tokyo. A licensed guide compares teamLab Planets and Borderless in 2026 — location, tickets, and which fits your trip.",
    date: "July 20, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Plan Your Trip",
    image: "/images/blog/teamlab-planets-universe.webp",
  },
  {
    slug: "autumn-leaves-around-tokyo",
    title: "Autumn Leaves Near Tokyo 2026: Where & When to Go",
    description:
      "A licensed Tokyo guide's 2026 autumn-leaves plan — when Nikko, Hakone and Kawaguchiko peak, and which fall-foliage day trip to pick from Tokyo.",
    date: "July 20, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips from Tokyo",
    image: "/images/blog/autumn-nikko-chuzenji.webp",
  },
];

// Order = funnel stage. Decision-stage first (highest CV per inventory data),
// generic Plan-Your-Trip last.
const categories = [
  "Decision Helpers",
  "Day Trips from Tokyo",
  "Tokyo Neighborhoods",
  "Food & Drink",
  "Plan Your Trip",
] as const;

type CategoryName = (typeof categories)[number];

const CATEGORY_META: Record<CategoryName, { anchor: string; description: string }> = {
  "Decision Helpers": {
    anchor: "decision-helpers",
    description:
      "Should you hire a guide? How much should it cost? Honest answers from a licensed local before you book.",
  },
  "Day Trips from Tokyo": {
    anchor: "day-trips",
    description:
      "Kamakura, Hakone, Nikko, Yokohama and more — compare day trips from Tokyo and decide what's worth your day.",
  },
  "Tokyo Neighborhoods": {
    anchor: "tokyo-neighborhoods",
    description:
      "Area guides for Asakusa, Shibuya, Yanaka, Shinjuku and beyond, written by a guide who works these streets daily.",
  },
  "Food & Drink": {
    anchor: "food-and-drink",
    description:
      "Where a Tokyo local eats and drinks — sushi, ramen, izakaya, and the markets worth a detour.",
  },
  "Plan Your Trip": {
    anchor: "plan-your-trip",
    description:
      "Itineraries, best time to visit, JR Pass, etiquette, budget — the practical layer of planning Tokyo.",
  },
};

// Slugs of articles pinned to "Most Read" — based on GSC + GA4 28-day conversion data
// (see docs/seo/2026-04_inventory.md §3.1).
const popularSlugs = [
  "kamakura-vs-hakone-vs-nikko-day-trip",
  "is-it-worth-hiring-a-tour-guide-in-tokyo",
  "tokyo-private-tour-guide-cost",
];

const BASE_URL = "https://tanuki-tabi-travel.com";

interface PostCardProps {
  post: BlogPost;
  showPopularBadge?: boolean;
}

const PostCard = ({ post, showPopularBadge }: PostCardProps) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 transition-all duration-300"
  >
    <div className="aspect-[16/9] overflow-hidden relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width={800}
        height={450}
      />
      {showPopularBadge && (
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-highlight text-highlight-foreground text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
          <Sparkles className="w-3 h-3" />
          Most Read
        </span>
      )}
    </div>
    <div className="p-6">
      <p className="text-label text-accent mb-3">{post.category}</p>
      <h3 className="heading-card text-foreground group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-body line-clamp-3">
        {post.description}
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <User className="w-3 h-3" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
        <span>Read Article</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </Link>
);

const BlogIndex = () => {
  const popularPosts = popularSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p));

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${BASE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <Layout>
      <SEO
        title="Tokyo Travel Blog | Tips & Guides | Tanuki Tabi Travel"
        description="Travel tips, neighborhood guides, and Tokyo itineraries written by a licensed local guide. Plan your Tokyo trip with insider knowledge you won't find in guidebooks."
        canonicalPath="/blog"
        hreflang={[
          { lang: "en", path: "/blog" },
          { lang: "es", path: "/es/blog" },
          { lang: "x-default", path: "/blog" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      {/* Header */}
      <section id="top" className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">From Your Guide</p>
            <h1 className="heading-display text-foreground">Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Travel tips, itineraries, and insider recommendations to help you
              plan the perfect Tokyo experience.
            </p>
          </div>
        </div>
      </section>

      {/* Most Read — pinned winners (highest CV per inventory) */}
      {popularPosts.length > 0 && (
        <section className="py-12 bg-accent/5 border-b border-border/40">
          <div className="container-section">
            <div className="mb-8 max-w-2xl">
              <p className="text-label text-accent mb-3 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Start Here
              </p>
              <h2 className="heading-section text-foreground">Most Read</h2>
              <p className="mt-4 text-body">
                The three articles travelers cite most often when they reach out about a private tour.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularPosts.map((post) => (
                <PostCard key={post.slug} post={post} showPopularBadge />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse by Topic — anchor pills */}
      <section className="py-8 border-b border-border/40">
        <div className="container-section">
          <p className="text-label text-accent mb-3">Browse by Topic</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const meta = CATEGORY_META[category];
              const count = blogPosts.filter((p) => p.category === category).length;
              return (
                <a
                  key={category}
                  href={`#${meta.anchor}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-foreground bg-secondary/60 hover:bg-secondary border border-border/60 rounded-full transition-colors"
                >
                  {category}
                  <span className="text-xs text-muted-foreground">({count})</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts by Category */}
      <section className="py-16">
        <div className="container-section">
          {categories.map((category) => {
            const postsInCategory = blogPosts.filter(
              (post) => post.category === category
            );
            if (postsInCategory.length === 0) return null;
            const meta = CATEGORY_META[category];
            return (
              <div key={category} id={meta.anchor} className="mb-16 last:mb-0 scroll-mt-24">
                <div className="mb-8 max-w-3xl">
                  <p className="text-label text-accent mb-3">Topic</p>
                  <h2 className="heading-section text-foreground">
                    {category}{" "}
                    <span className="text-muted-foreground font-normal text-base align-middle">
                      ({postsInCategory.length})
                    </span>
                  </h2>
                  <p className="mt-4 text-body">
                    {meta.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {postsInCategory.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
                <div className="mt-8 text-right">
                  <a
                    href="#top"
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ArrowUp className="w-3 h-3" />
                    Back to top
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">Ready to Explore Tokyo?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Turn these travel tips into real experiences with a private guided tour.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours" className="btn-accent-on-dark">
              Browse Tours
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-full transition-all duration-300 ease-out hover:bg-primary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogIndex;
