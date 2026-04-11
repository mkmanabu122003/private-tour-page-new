import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
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
    category: "Tokyo Area Guides",
    image: "/images/blog/shibuya-harajuku-guide-hero.webp",
  },
  {
    slug: "shinjuku-guide",
    title: "Shinjuku Guide: Tokyo's Neon-Lit Heart",
    description:
      "Navigate Shinjuku like a local. A guide to Golden Gai, Omoide Yokocho, Kabukicho, Shinjuku Gyoen, and the best food spots in Tokyo's busiest district.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
    image: "/images/blog/shinjuku-guide-hero.webp",
  },
  // Day Trip Guides
  {
    slug: "kamakura-vs-hakone-vs-nikko-day-trip",
    title: "Kamakura vs Hakone vs Nikko: Which Day Trip Should You Choose?",
    description:
      "Can't decide between Kamakura, Hakone, or Nikko? A local guide compares travel time, highlights, and who each trip is best for to help you choose.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
    image: "/images/blog/hakone-fuji-comparison.webp",
  },
  // Planning Your Trip
  {
    slug: "tokyo-3-day-itinerary",
    title: "The Perfect 3-Day Tokyo Itinerary: From a Local Guide",
    description:
      "Plan the perfect 3 days in Tokyo with insider tips from a licensed local guide. Covers Asakusa, Shibuya, Tsukiji, day trips, and hidden gems most tourists miss.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
    image: "/images/tours/shibuya-crossing-tokyo.webp",
  },
  {
    slug: "best-time-to-visit-tokyo",
    title: "Best Time to Visit Tokyo: A Month-by-Month Guide",
    description:
      "When should you visit Tokyo? A local guide breaks down weather, events, crowds, and costs for every month to help you plan the perfect trip.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
    image: "/images/tours/meiji-shrine-torii-gate.webp",
  },
  {
    slug: "japan-temple-shrine-etiquette",
    title: "Temple & Shrine Etiquette in Japan: A Complete Guide",
    description:
      "Visiting temples and shrines in Japan? Learn the essential etiquette: how to pray, purify, bow, and behave respectfully from a licensed Japanese guide.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
    image: "/images/tours/senso-ji-temple-tokyo.webp",
  },
  // Tokyo Area Guides (new)
  {
    slug: "asakusa-guide",
    title: "Asakusa Guide: What to See and Skip",
    description:
      "Asakusa is Tokyo's most visited neighborhood, and most people see it wrong. A licensed guide who works there daily tells you what actually matters.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
    image: "/images/blog/asakusa-guide-hero.webp",
  },
  {
    slug: "old-tokyo-shitamachi",
    title: "Old Tokyo Still Exists: A Guide's Map to Shitamachi",
    description:
      "Shitamachi, Tokyo's 'low city', survived bombs, earthquakes, and redevelopment. A licensed guide shows you what remains and why it still matters.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
    image: "/images/tours/asakusa-backstreet-local.webp",
  },
  {
    slug: "yanaka-walking-tour-guide",
    title: "Yanaka Walking Tour: Tokyo's Best-Kept Secret Neighborhood",
    description:
      "Yanaka is old Tokyo at its finest — temples, shotengai, and no crowds. A local guide shares the best walking route through this hidden gem.",
    date: "March 8, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
    image: "/images/blog/yanaka-ginza-shopping-street.webp",
  },
  {
    slug: "yanaka-tokyo-walking-route",
    title: "Yanaka Tokyo: A Guide's 3-Hour Walking Route",
    description:
      "Yanaka survived the 1923 earthquake and WWII bombing. It's the closest thing to old Tokyo that still exists. Here's how to walk it properly.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
    image: "/images/tours/asakusa-kaminarimon-morning.webp",
  },
  {
    slug: "tokyo-hidden-gems",
    title: "Tokyo Hidden Gems: A Licensed Guide's Map",
    description:
      "After 500+ tours, these are the Tokyo spots I return to again and again, not because they're secret, but because most guides don't know why they matter.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
    image: "/images/blog/asakusa-hidden-shrine.webp",
  },
  {
    slug: "senso-ji-most-visited-temple",
    title: "Is Senso-ji the World's Most Visited Temple?",
    description:
      "You'll hear Senso-ji gets 30 million visitors a year. A licensed guide who works there daily examines the claim, and what it means for your visit.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
    image: "/images/blog/asakusa-sensoji-pagoda.webp",
  },
  {
    slug: "tsukiji-market-guide",
    title: "Tsukiji Market Guide 2026: What's Still Worth It",
    description:
      "The inner market closed in 2018. But the outer market is alive. A local guide explains what remains, what's worth eating, and how to visit right.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
    image: "/images/blog/tsukiji-outer-market-entrance.webp",
  },
  // Day Trip Guides (new)
  {
    slug: "kamakura-day-trip-from-tokyo",
    title: "Kamakura Day Trip from Tokyo: Guide's Plan",
    description:
      "Kamakura is an easy day trip from Tokyo, but most visitors miss what makes it special. A licensed guide explains what to see and whether to hire a guide.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
    image: "/images/tours/kamakura-great-buddha.webp",
  },
  {
    slug: "nikko-day-trip-from-tokyo",
    title: "Nikko Day Trip from Tokyo: Complete Guide (2025)",
    description:
      "Planning a Nikko day trip from Tokyo? A licensed guide covers trains, top sights, and why a private guided tour makes all the difference.",
    date: "March 8, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
    image: "/images/blog/nikko-toshogu-hero.webp",
  },
  {
    slug: "yokohama-day-trip-from-tokyo",
    title: "Yokohama Day Trip from Tokyo: Worth It?",
    description:
      "Yokohama is 30 minutes from Tokyo. But is it worth a full day? A licensed guide gives an honest answer, and what to combine it with.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
    image: "/images/blog/yokohama-minatomirai-hero.webp",
  },
  {
    slug: "kawagoe-day-trip-from-tokyo",
    title: "Kawagoe Day Trip from Tokyo: Little Edo Guide",
    description:
      "Kawagoe is 30 minutes from Tokyo and looks like feudal Japan. A licensed guide explains what to see, what to skip, and how to get the most out of one day.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
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
    category: "Planning Your Trip",
    image: "/images/tours/shibuya-scramble-crossing.webp",
  },
  {
    slug: "tokyo-on-a-budget",
    title: "Tokyo on a Budget: What a Local Guide Spends",
    description:
      "Tokyo is more affordable than its reputation. A licensed guide breaks down real daily costs (transport, food, entry fees) and where to save.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
    image: "/images/tours/asakusa-nakamise-street.webp",
  },
  {
    slug: "japan-rail-pass-worth-it",
    title: "Japan Rail Pass 2026: Is It Worth It?",
    description:
      "The JR Pass price went up significantly. Is it still worth buying? A licensed guide does the math for common itineraries and gives an honest answer.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
    image: "/images/blog/shinkansen-n700-tokyo-station.webp",
  },
  {
    slug: "tipping-in-japan",
    title: "Tipping in Japan: What You Need to Know",
    description:
      "Tipping isn't customary in Japan. Most Japanese people aren't used to receiving tips and may feel confused. A licensed guide explains why, and how to show appreciation.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
    image: "/images/tours/asakusa-kaminarimon-gate.webp",
  },
  // Food Guides
  {
    slug: "ramen-guide-tokyo",
    title: "Ramen Guide Tokyo: What a Local Guide Orders",
    description:
      "There are 10,000+ ramen shops in Tokyo. A licensed guide with 500+ tours cuts through the noise and tells you exactly what to order and where.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food Guides",
    image: "/images/blog/ramen-guide-hero.webp",
  },
  {
    slug: "sushi-guide-tokyo",
    title: "Sushi Guide Tokyo: What a Licensed Guide Orders",
    description:
      "Tokyo has more Michelin-starred sushi restaurants than anywhere. A local guide tells you what to order, where to go, and how not to embarrass yourself.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food Guides",
    image: "/images/blog/tsukiji-fresh-sushi.webp",
  },
  {
    slug: "vegetarian-food-tour-tokyo",
    title: "Vegetarian Food Tour Tokyo: A Complete Guide for Dietary Restrictions",
    description:
      "Worried about dietary restrictions in Tokyo? A licensed private guide shares the best vegetarian-friendly food spots and how to customize your tour.",
    date: "March 8, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food Guides",
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
    category: "Helpful Guides",
    image: "/images/tour-photos/group-photo.webp",
  },
  {
    slug: "tokyo-private-tour-guide-cost",
    title: "How Much Does a Private Tour Guide Cost in Tokyo? 2026",
    description:
      "Tokyo tour guide prices range from ¥15,000 to ¥80,000 per day. A licensed local guide explains what affects the cost and what you actually get.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Helpful Guides",
    image: "/images/tour-photos/tour-photo-2.webp",
  },
  {
    slug: "what-to-expect-private-tour",
    title: "What to Expect on a Private Tour in Tokyo (From Your Guide)",
    description:
      "Meeting point, pace, flexibility, food, rain plans. A Tokyo guide walks you through exactly what happens from start to finish.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Helpful Guides",
    image: "/images/tour-photos/tour-photo-1.webp",
  },
  {
    slug: "first-time-tokyo-local-guide",
    title: "First Time in Tokyo? Here's What a Local Guide Actually Does",
    description:
      "Beyond directions and translations. What a typical day with a Tokyo guide looks like, and an honest take on whether you need one.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Helpful Guides",
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
    category: "Day Trip Guides",
    image: "/images/tours/hakone-lake-ashi-fuji.webp",
  },
  // New Planning
  {
    slug: "tokyo-with-kids-family-tour",
    title: "Tokyo With Kids: Why Families Are Booking Private Guides (2026)",
    description:
      "Strollers on packed trains, meltdowns at shrines, kids who won't eat raw fish. A family-friendly guide shares how to make Tokyo work with children.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
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
    category: "Food Guides",
    image: "/images/blog/tsukiji-market-seafood-stalls.webp",
  },
  {
    slug: "tsukiji-to-ginza-food-walk",
    title: "Tsukiji to Ginza: The Food Walk Tokyo Locals Do on Their Day Off",
    description:
      "A 3-hour walking route from the fish market to Ginza's backstreet bars, with the stops locals actually make. No tourist traps.",
    date: "March 14, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food Guides",
    image: "/images/blog/tsukiji-food-guide-hero.webp",
  },
];

const categories = [
  "Tokyo Area Guides",
  "Day Trip Guides",
  "Planning Your Trip",
  "Food Guides",
  "Helpful Guides",
];

const BlogIndex = () => {
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

      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
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

      {/* Blog Posts by Category */}
      <section className="py-16">
        <div className="container-section">
          {categories.map((category) => {
            const postsInCategory = blogPosts.filter(
              (post) => post.category === category
            );
            if (postsInCategory.length === 0) return null;
            return (
              <div key={category} className="mb-16 last:mb-0">
                <h2 className="heading-section text-foreground mb-8">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {postsInCategory.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          width={800}
                          height={450}
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-label text-accent mb-2">
                          {post.category}
                        </p>
                        <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors mb-3">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-accent font-medium text-sm">
                          <span>Read Article</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
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
            <Link to="/tours" className="btn-accent">
              Browse Tours
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-300 ease-out hover:bg-primary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50"
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
