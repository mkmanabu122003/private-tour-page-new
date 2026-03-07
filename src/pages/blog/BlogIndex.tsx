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
}

const blogPosts: BlogPost[] = [
  // Tokyo Area Guides
  {
    slug: "asakusa-guide-what-to-see",
    title: "Asakusa Guide — What to See Beyond Senso-ji Temple",
    description:
      "A local guide's insider tips for exploring Asakusa. Go beyond Senso-ji Temple to discover hidden shrines, street food spots, and the best times to visit.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  {
    slug: "shibuya-harajuku-guide",
    title: "Shibuya & Harajuku — A Local Guide to Tokyo's Modern Side",
    description:
      "Explore Shibuya and Harajuku like a local. Insider tips on Shibuya Crossing, Takeshita Street, hidden cafes, and the best photo spots from a licensed guide.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  {
    slug: "shinjuku-guide",
    title: "Shinjuku Guide — Tokyo's Neon-Lit Heart",
    description:
      "Navigate Shinjuku like a local. A guide to Golden Gai, Omoide Yokocho, Kabukicho, Shinjuku Gyoen, and the best food spots in Tokyo's busiest district.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  {
    slug: "tsukiji-guide-food-lover",
    title: "Tsukiji Market Guide — A Food Lover's Walkthrough",
    description:
      "A local guide to Tsukiji Outer Market. What to eat, what to skip, best times to visit, and how to combine with Ginza for a perfect Tokyo food day.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  // Day Trip Guides
  {
    slug: "kamakura-vs-hakone-vs-nikko-day-trip",
    title: "Kamakura vs Hakone vs Nikko — Which Day Trip Should You Choose?",
    description:
      "Can't decide between Kamakura, Hakone, or Nikko? A local guide compares travel time, highlights, and who each trip is best for to help you choose.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
  },
  // Planning Your Trip
  {
    slug: "tokyo-3-day-itinerary",
    title: "The Perfect 3-Day Tokyo Itinerary — From a Local Guide",
    description:
      "Plan the perfect 3 days in Tokyo with insider tips from a licensed local guide. Covers Asakusa, Shibuya, Tsukiji, day trips, and hidden gems most tourists miss.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
  },
  {
    slug: "best-time-to-visit-tokyo",
    title: "Best Time to Visit Tokyo — A Month-by-Month Guide",
    description:
      "When should you visit Tokyo? A local guide breaks down weather, events, crowds, and costs for every month to help you plan the perfect trip.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
  },
  {
    slug: "japan-temple-shrine-etiquette",
    title: "Temple & Shrine Etiquette in Japan — A Complete Guide",
    description:
      "Visiting temples and shrines in Japan? Learn the essential etiquette — how to pray, purify, bow, and behave respectfully from a licensed Japanese guide.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
  },
  // Tokyo Area Guides (new)
  {
    slug: "asakusa-guide",
    title: "Asakusa Guide: What to See and Skip",
    description:
      "Asakusa is Tokyo's most visited neighborhood — and most people see it wrong. A licensed guide who works there daily tells you what actually matters.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  {
    slug: "old-tokyo-shitamachi",
    title: "Old Tokyo Still Exists: A Guide's Map to Shitamachi",
    description:
      "Shitamachi — Tokyo's 'low city' — survived bombs, earthquakes, and redevelopment. A licensed guide shows you what remains and why it still matters.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  {
    slug: "yanaka-tokyo-walking-route",
    title: "Yanaka Tokyo: A Guide's 3-Hour Walking Route",
    description:
      "Yanaka survived the 1923 earthquake and WWII bombing. It's the closest thing to old Tokyo that still exists. Here's how to walk it properly.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  {
    slug: "tokyo-hidden-gems",
    title: "Tokyo Hidden Gems: A Licensed Guide's Map",
    description:
      "After 500+ tours, these are the Tokyo spots I return to again and again — not because they're secret, but because most guides don't know why they matter.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  {
    slug: "senso-ji-most-visited-temple",
    title: "Is Senso-ji the World's Most Visited Temple?",
    description:
      "You'll hear Senso-ji gets 30 million visitors a year. A licensed guide who works there daily examines the claim — and what it means for your visit.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  {
    slug: "tsukiji-market-guide",
    title: "Tsukiji Market Guide 2026: What's Still Worth It",
    description:
      "The inner market closed in 2018. But the outer market is alive. A local guide explains what remains, what's worth eating, and how to visit right.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Tokyo Area Guides",
  },
  // Day Trip Guides (new)
  {
    slug: "kamakura-day-trip-from-tokyo",
    title: "Kamakura Day Trip from Tokyo: Guide's Plan",
    description:
      "Kamakura is an easy day trip from Tokyo — but most visitors miss what makes it special. A licensed guide explains what to see and whether to hire a guide.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
  },
  {
    slug: "nikko-day-trip-from-tokyo",
    title: "Nikko Day Trip from Tokyo: 2026 Guide",
    description:
      "Nikko is 2 hours from Tokyo and one of Japan's most ornate shrine complexes. A licensed guide explains how to get there, what to see, and how to plan.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
  },
  {
    slug: "yokohama-day-trip-from-tokyo",
    title: "Yokohama Day Trip from Tokyo: Worth It?",
    description:
      "Yokohama is 30 minutes from Tokyo. But is it worth a full day? A licensed guide gives an honest answer — and what to combine it with.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
  },
  {
    slug: "kawagoe-day-trip-from-tokyo",
    title: "Kawagoe Day Trip from Tokyo: Little Edo Guide",
    description:
      "Kawagoe is 30 minutes from Tokyo and looks like feudal Japan. A licensed guide explains what to see, what to skip, and how to get the most out of one day.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trip Guides",
  },
  // Planning Your Trip (new)
  {
    slug: "tokyo-itinerary-5-days",
    title: "Tokyo 5 Day Itinerary: A Licensed Guide's Plan",
    description:
      "Not the usual tourist circuit. A licensed Tokyo guide shares the 5-day itinerary he gives his private clients — with honest notes on what to skip.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
  },
  {
    slug: "tokyo-on-a-budget",
    title: "Tokyo on a Budget: What a Local Guide Spends",
    description:
      "Tokyo is more affordable than its reputation. A licensed guide breaks down real daily costs — transport, food, entry fees — and where to save.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
  },
  {
    slug: "japan-rail-pass-worth-it",
    title: "Japan Rail Pass 2026: Is It Worth It?",
    description:
      "The JR Pass price went up significantly. Is it still worth buying? A licensed guide does the math for common itineraries and gives an honest answer.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
  },
  {
    slug: "tipping-in-japan",
    title: "Tipping in Japan: Why You Shouldn't",
    description:
      "In Japan, tipping is considered rude — not generous. A licensed Japanese guide explains the cultural reason behind this, and what to do instead.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Planning Your Trip",
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
  },
  {
    slug: "sushi-guide-tokyo",
    title: "Sushi Guide Tokyo: What a Licensed Guide Orders",
    description:
      "Tokyo has more Michelin-starred sushi restaurants than anywhere. A local guide tells you what to order, where to go, and how not to embarrass yourself.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Food Guides",
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
  },
  {
    slug: "licensed-tour-guide-japan",
    title: "What Is a Licensed Tour Guide in Japan?",
    description:
      "Japan has a national licensing exam for tour guides. Here's what separates a licensed guide from an unlicensed one — and why it matters for your trip.",
    date: "March 7, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Helpful Guides",
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
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10"
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
