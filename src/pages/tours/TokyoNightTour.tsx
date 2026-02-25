import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const nightExperiences: {
  title: string;
  area: string;
  description: string;
  image?: string;
}[] = [
  {
    title: "Golden Gai Bar Hopping",
    area: "Shinjuku",
    description:
      "Over 200 tiny bars crammed into six narrow alleys, each seating just 5-10 people. Every bar has its own personality — jazz bars, punk bars, film bars, bars where the owner only speaks through a puppet. Your guide knows which ones welcome first-timers and which to skip.",
    image: "/images/tours/night-tour-golden-gai.jpg",
  },
  {
    title: "Omoide Yokocho",
    area: "Memory Lane, Shinjuku",
    description:
      "Yakitori smoke drifts through narrow lanes under the rumble of trains overhead. This postwar alley of tiny food stalls has barely changed since the 1940s. Order grilled chicken skewers and cold beer elbow-to-elbow with salarymen winding down their day.",
    image: "/images/tours/night-tour-omoide-yokocho.jpg",
  },
  {
    title: "Shibuya Crossing at Night",
    area: "Shibuya",
    description:
      "The world's busiest pedestrian crossing takes on a completely different energy after dark. Neon signs blaze from every building, giant screens pulse with light, and up to 3,000 people cross in a single green light. It's Tokyo at its most electric.",
    image: "/images/tours/night-tour-shibuya.jpg",
  },
  {
    title: "Yurakucho & Shinbashi",
    area: "Central Tokyo",
    description:
      "Tucked under the elevated train tracks, these open-air izakaya alleys are where office workers come to drink, eat, and decompress. This is authentic, unfiltered Tokyo nightlife — no tourists, no English menus, just real local culture. Your guide makes it accessible.",
  },
  {
    title: "Roppongi",
    area: "Minato",
    description:
      "Tokyo's international nightlife district offers rooftop bars with skyline views, world-class cocktail lounges, and late-night dining from every cuisine imaginable. Whether you want a sophisticated cocktail or a dance floor, Roppongi delivers.",
  },
  {
    title: "Nakamise & Senso-ji at Night",
    area: "Asakusa",
    description:
      "Tokyo's oldest temple is beautifully illuminated after the crowds leave. The massive red lantern of Kaminarimon Gate glows against the dark sky, and the main hall is dramatically lit with almost no one around. A completely different experience from the daytime visit.",
  },
];

const TokyoNightTour = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo Night Tour | Private Evening Experience | Tanuki Tabi Travel"
        description="Experience Tokyo after dark with a local guide. Explore neon-lit streets, hidden bars, izakayas, and nightlife spots safely with a licensed private guide."
        canonicalPath="/tours/tokyo-night-tour"
      />

      {/* Hero Section */}

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/tokyo-night-tour-hero.jpg"
          alt="Tokyo night tour - neon-lit streets of Shinjuku"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-label text-accent mb-3">Evening Tour</p>
            <h1 className="heading-display text-foreground">
              Tokyo Private Night Tour
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Tokyo transforms after dark. Let a local show you why.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When the sun sets, a different city emerges. Neon signs ignite
              narrow alleyways, izakaya lanterns flicker to life, and millions of
              Tokyoites pour into the streets for the night. This is the Tokyo
              most visitors miss — and it's the Tokyo you'll remember forever.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-accent">
                Book Your Night Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tokyo at Night? */}
      <section className="py-16">
        <div className="container-section">
          <div className="max-w-3xl">
            <h2 className="heading-section text-foreground mb-6">
              Why Tokyo at Night?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tokyo is a completely different city after sunset. The neon lights,
              the izakaya alleys, the energy of Shibuya Crossing at night —
              these are experiences you simply cannot get during the day. The
              daytime crowds thin out, the atmosphere shifts, and the city
              reveals a warmer, more intimate side that most tourists never see.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              But nighttime Tokyo can also be intimidating. Most bars are tiny,
              unmarked, and have no English signage. Some establishments are
              welcoming to visitors; others are not. Knowing the difference is
              everything — and that's exactly what a local guide provides.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a cocktail enthusiast, a street food lover, or
              someone who wants to understand how Tokyoites actually spend their
              evenings, this tour opens doors that would otherwise stay closed.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Night Experiences */}
      <section className="py-16 bg-secondary/30">
        <div className="container-section">
          <div className="mb-10">
            <p className="text-label text-accent mb-3">Where We Go</p>
            <h2 className="heading-section text-foreground">
              Sample Night Experiences
            </h2>
            <p className="mt-4 text-body max-w-2xl">
              Every night tour is customized to your interests. Here are some of
              the experiences we can include — we'll pick the perfect combination
              for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nightExperiences.map((experience) => (
              <div key={experience.title} className="card-elevated overflow-hidden">
                {experience.image && (
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <p className="text-label text-accent mb-2">
                    {experience.area}
                  </p>
                  <h3 className="heading-card text-foreground mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container-section">
          <div className="max-w-3xl">
            <h2 className="heading-section text-foreground mb-6">
              What to Expect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Your night tour is a relaxed, flexible evening out in Tokyo with a
              knowledgeable local by your side. Here's how it works.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Duration & Timing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Typically 3-4 hours, starting around 6 PM and wrapping up by
                  10 PM. We can adjust the start time based on your schedule and
                  the season — summer sunsets are later, so we might start at 7
                  PM. The pace is yours to set; we're not rushing through a
                  checklist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Your Guide Handles Everything
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Navigating Tokyo nightlife solo means deciphering handwritten
                  Japanese menus, figuring out unspoken bar etiquette, and hoping
                  you've chosen a place that welcomes visitors. Your guide
                  handles all of this — ordering in Japanese, explaining dishes
                  and drinks, managing cover charges, and reading the room so you
                  can simply enjoy the experience. Many of the best spots have no
                  English signage at all, and your guide's relationships with bar
                  owners open doors that guidebooks cannot.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Safety & Peace of Mind
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tokyo is one of the safest major cities in the world, even at
                  night. That said, a small number of establishments in
                  entertainment districts use aggressive touts or inflated
                  pricing aimed at tourists. Your guide knows exactly which areas
                  and venues to avoid, so you experience only the genuine side of
                  Tokyo's nightlife. You'll never need to worry about being
                  overcharged or ending up somewhere uncomfortable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Alcohol Entirely Optional
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  While Tokyo's bar scene is a highlight, non-drinking guests
                  enjoy this tour equally. Japan has a wonderful culture of
                  non-alcoholic beverages — from artisan teas and Japanese sodas
                  to elaborate mocktails. Many of our best nightlife spots are
                  actually about the food, the atmosphere, and the people
                  watching. The neon-lit streets, temple illuminations, and
                  energy of the city at night are spectacular whether you have a
                  cocktail or a Calpis soda in hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Notes */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-section">
          <h2 className="heading-section text-foreground mb-8">
            Practical Notes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Dress Code
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Smart casual is perfect. You'll be walking between venues, so
                comfortable shoes are essential. No need for anything formal —
                clean jeans and a nice top work well. Some upscale bars may have
                a slightly dressier atmosphere, which we'll factor into your
                route.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Budget for Food & Drinks
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Plan for approximately ~5,000-~8,000 per person for food and
                drinks throughout the evening. This typically covers 2-3 venues
                with food and beverages at each. Some Golden Gai bars have a
                small cover charge (~500-~1,000), which your guide will explain
                in advance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Last Train & Getting Home
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tokyo's last trains run between 11:30 PM and midnight. Your
                guide will make sure you know the exact last train time for your
                station and help you get to the platform. If you prefer to stay
                out later, we'll help arrange a taxi or explain the night bus
                options back to your hotel.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Pricing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tour pricing depends on group size and specific requests.{" "}
                <Link
                  to="/contact"
                  className="text-accent hover:underline font-medium"
                >
                  Contact us for a personalized quote
                </Link>
                . The guide fee covers planning, guiding, and all local
                expertise. Food and drink costs are paid directly at each venue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-section">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Ready for Tokyo After Dark?
            </h2>
            <p className="text-lg opacity-90 leading-relaxed mb-8">
              Tell us your style and we'll plan your perfect night. Whether
              you're drawn to hidden jazz bars, sizzling yakitori alleys, or the
              electric glow of Shibuya at midnight — we'll craft an evening
              you'll never forget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-accent bg-background text-foreground hover:bg-background/90"
              >
                Plan Your Night Tour
              </Link>
              <Link
                to="/tours"
                className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Browse All Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <div className="container-section">
          <h2 className="heading-section text-foreground mb-8">
            Related Tours & Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">
                Related Tours
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/tours/custom"
                    className="text-accent hover:underline font-medium"
                  >
                    Custom Private Tour
                  </Link>
                  <span className="text-muted-foreground">
                    {" "}
                    — Design your own Tokyo experience around any interest
                  </span>
                </li>
                <li>
                  <Link
                    to="/tours/shibuya-harajuku"
                    className="text-accent hover:underline font-medium"
                  >
                    Shibuya & Harajuku Tour
                  </Link>
                  <span className="text-muted-foreground">
                    {" "}
                    — Explore Tokyo's youth culture hub during the day
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">
                Read More
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/blog/shinjuku-guide"
                    className="text-accent hover:underline font-medium"
                  >
                    Shinjuku Area Guide
                  </Link>
                  <span className="text-muted-foreground">
                    {" "}
                    — Everything you need to know about Tokyo's busiest district
                  </span>
                </li>
                <li>
                  <Link
                    to="/blog/shibuya-harajuku-guide"
                    className="text-accent hover:underline font-medium"
                  >
                    Shibuya & Harajuku Guide
                  </Link>
                  <span className="text-muted-foreground">
                    {" "}
                    — A local's guide to Shibuya Crossing, Takeshita Street, and
                    beyond
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TouristTrip Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: "Tokyo Private Night Tour",
            description:
              "Private guided evening tour of Tokyo with a licensed guide",
            touristType: "Nightlife enthusiasts",
            provider: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "JPY",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default TokyoNightTour;
