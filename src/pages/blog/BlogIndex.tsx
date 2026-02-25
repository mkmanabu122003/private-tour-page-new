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
];

const categories = [
  "Tokyo Area Guides",
  "Day Trip Guides",
  "Planning Your Trip",
  "Helpful Guides",
];

const BlogIndex = () => {
  return (
    <Layout>
      <SEO
        title="Blog | Tokyo Travel Tips & Guide Stories | Tanuki Tabi Travel"
        description="Travel tips, itineraries, and insider recommendations from a licensed Tokyo tour guide. Plan your perfect Tokyo trip with local knowledge."
        canonicalPath="/blog"
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
