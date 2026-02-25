import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const blogPosts = [
  {
    slug: "tokyo-3-day-itinerary",
    title: "The Perfect 3-Day Tokyo Itinerary — From a Local Guide",
    description:
      "Plan the perfect 3 days in Tokyo with insider tips from a licensed local guide. Covers Asakusa, Shibuya, Tsukiji, day trips, and hidden gems most tourists miss.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Itineraries",
  },
  {
    slug: "is-it-worth-hiring-a-tour-guide-in-tokyo",
    title: "Is It Worth Hiring a Private Tour Guide in Tokyo?",
    description:
      "Wondering if a private tour guide in Tokyo is worth the cost? A licensed guide explains when it makes sense, what you get, and who benefits most.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Travel Tips",
  },
  {
    slug: "kamakura-vs-hakone-vs-nikko-day-trip",
    title: "Kamakura vs Hakone vs Nikko — Which Day Trip Should You Choose?",
    description:
      "Can't decide between Kamakura, Hakone, or Nikko? A local guide compares travel time, highlights, and who each trip is best for to help you choose.",
    date: "February 25, 2026",
    author: "Manabu, Licensed Tour Guide",
    category: "Day Trips",
  },
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

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6">
                  <p className="text-label text-accent mb-2">{post.category}</p>
                  <h2 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors mb-3">
                    {post.title}
                  </h2>
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
