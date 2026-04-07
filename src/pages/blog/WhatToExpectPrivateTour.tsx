import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";


const WhatToExpectPrivateTour = () => {
  return (
    <Layout>
      <SEO
        title="What to Expect on a Private Tour in Tokyo (From Your Guide)"
        description="Meeting point, pace, flexibility, food, rain plans. A Tokyo guide walks you through exactly what happens from start to finish."
        canonicalPath="/blog/what-to-expect-private-tour-tokyo"
        hreflang={[
          { lang: "en", path: "/blog/what-to-expect-private-tour-tokyo" },
          { lang: "es", path: "/es/blog/que-esperar-tour-privado-tokio" },
          { lang: "x-default", path: "/blog/what-to-expect-private-tour-tokyo" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tour-photos/tour-photo-1.webp"
          alt="Guide leading a private walking tour through Tokyo streets"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Article Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <p className="text-label text-accent mb-3">Travel Tips</p>
            <h1 className="heading-display text-foreground">
              What to Expect on a Private Tour in Tokyo (From Your Guide)
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Licensed Tour Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 14, 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) who has completed hundreds of private tours in Tokyo.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              You've decided to book a private tour in Tokyo. But what actually happens? Where do you meet? How fast do you walk? What if it rains? What if you need a bathroom break?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              These are the questions people don't ask before booking but wish they had asked after. Here's a complete walkthrough of what a private tour day looks like from start to finish.
            </p>

            {/* Before the Tour */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Before the Tour
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              How Booking Works
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you contact me, the first thing I ask is: What are you most interested in? How many people? Any dietary restrictions? What's your energy level like (do you want to walk 15,000 steps or take it easy)? How long are you in Tokyo?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Based on your answers, I suggest a tour format and build a custom itinerary. This isn't a one-size-fits-all route. If you're food-focused, we spend time in backstreet restaurants. If you're into history, we go deeper into temple districts. If you have kids, I build in play time and snack stops.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              What I Plan Behind the Scenes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I check the weather forecast, verify that all planned venues are open (holidays and closures are common in Japan), research current exhibitions or seasonal events along the route, and identify backup options for every major stop. If we're doing a food tour, I mentally review which stalls and restaurants are best right now, since quality in market areas can shift seasonally.
            </p>

            {/* The Morning Of */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              The Morning Of
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Where We Meet
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Usually at your hotel lobby or a nearby station. I choose meeting points that are easy to find and not overwhelming. If we're starting at a specific area like Asakusa, I'll suggest meeting at a clear landmark near the station rather than inside the station itself (train stations in Tokyo can be confusing labyrinths).
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              What to Bring
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Comfortable walking shoes.</strong> We walk 8,000-15,000 steps on a typical tour. Flat, broken-in shoes are essential.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Cash.</strong> Many small shops, market stalls, and traditional restaurants in Tokyo still don't accept cards. ¥10,000-20,000 in cash is a safe amount for a full day including food and small purchases.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">IC card (Suica/Pasmo).</strong> For trains and convenience stores. If you don't have one, I'll help you get one at the start.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">A light layer.</strong> Temples and some restaurants can be chilly even when it's warm outside.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              What NOT to Worry About
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              You don't need to study the train map, memorize Japanese phrases, or pre-book restaurants. That's literally what I'm here for. Come as you are.
            </p>

            {/* During the Tour */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              During the Tour
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              The Pace
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We go at your pace, not mine. If you want to linger at a spot, we linger. If you want to move quickly through an area, we move on. I read the room constantly. If I notice someone looking tired, I suggest a cafe break before anyone has to ask. If someone's captivated by something, I let the moment breathe.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lunch
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On full-day tours, lunch is built into the itinerary. I don't take you to tourist-trap restaurants. I take you to places I'd eat at on my own day off. Sometimes that's a tiny ramen counter with 8 seats, sometimes it's a neighborhood soba shop, sometimes it's standing sushi where the fish was delivered that morning. I always ask about dietary restrictions in advance and have options planned.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Bathroom Breaks and Practical Stuff
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I know where every clean restroom is along our route. Tokyo's public restrooms are generally excellent (especially in department stores and train stations), but some are easier to find than others. I build natural break points into the itinerary so nobody has to awkwardly ask.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Photos
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I know the best photo spots at every location, including the angles and timing that avoid crowds. I'm happy to take group photos for you throughout the day. If photography is a priority, tell me in advance and I'll route us through the most photogenic spots at the best times of day.
            </p>

            {/* Flexibility */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              The Flexibility Factor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is the single biggest difference between a private tour and any other kind of tour. Everything can change, and that's the point.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Rain Plans
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If it starts raining, I have backup routes for every tour that emphasize covered areas: shopping streets, department store basement food floors (depachika), covered temple corridors, and indoor markets. Some of my best tours have been on rainy days because the backup spots tend to be more local and less touristy.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Unexpected Closures
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japan has many irregular holidays, and popular spots sometimes close unexpectedly for events or maintenance. I check everything the morning of the tour, but if something is closed when we arrive, I pivot immediately. You'll never stand in front of a locked gate wondering what to do next.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Spontaneous Detours
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If we stumble upon a local festival, a temple ceremony, or a shop with incredible craftsmanship, we can stop and experience it. Some of the most memorable moments on my tours have been unplanned. That's the magic of private touring that no fixed itinerary can offer.
            </p>
            <figure className="my-8">
              <img
                src="/images/tour-photos/asakusa-guest-selfie.webp"
                alt="Manabu with guests enjoying a private tour by the Sumida River in Asakusa"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Every tour is a conversation — here with guests along the Sumida River in Asakusa
              </figcaption>
            </figure>

            {/* What I Don't Do */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              What I Don't Do
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No rushing through checklists.</strong> If seeing 15 attractions in one day is your goal, a private tour isn't the right format. My tours prioritize depth over quantity. You'll see fewer places but understand them much better.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No commission shops.</strong> I will never take you to a store because they pay me to bring tourists. Every recommendation is genuine. If I suggest a shop, it's because I think you'll actually like it.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No scripted speeches.</strong> I don't recite memorized paragraphs at each stop. I talk with you, answer questions, adjust what I share based on what interests you, and tell stories that connect the places to real life.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">No phone scrolling.</strong> When I'm guiding you, I'm fully present. My phone is for navigation and checking times, not for personal use.
              </li>
            </ul>

            {/* After the Tour */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              After the Tour
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The tour doesn't end when we say goodbye. I'll send you:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Restaurant recommendations</strong> for the rest of your trip, based on what I learned about your tastes during the tour
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Neighborhood suggestions</strong> for areas we didn't cover that match your interests
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Transit tips</strong> for getting to your next destinations independently
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Answers to questions</strong> that come up later in your trip. Feel free to message me.
              </li>
            </ul>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Ready to Plan Your Day?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tell me about your trip and I'll suggest a tour that fits your interests, pace, and group. Or if you have questions about what a tour day actually looks like, just ask. I'm happy to explain.
              </p>
              <Link
                to="/contact?utm_source=blog&utm_medium=cta&utm_campaign=what-to-expect"
                className="btn-accent"
              >
                Start Planning Your Tour
              </Link>
            </div>

          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["asakusa", "tsukiji-ginza", "custom"]} showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "What to Expect on a Private Tour in Tokyo (From Your Guide)",
            description:
              "Meeting point, pace, flexibility, food, rain plans. A Tokyo guide walks you through exactly what happens from start to finish.",
            author: {
              "@type": "Person",
              name: "Manabu",
              jobTitle: "National Government Licensed Guide Interpreter",
              url: "https://tanuki-tabi-travel.com/about",
            },
            datePublished: "2026-03-14",
            dateModified: "2026-03-14",
            publisher: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/blog/what-to-expect-private-tour-tokyo",
            },
          }),
        }}
      />

      {/* FACT-CHECK REPORT
      Generated: 2026-03-14
      Status: READY FOR REVIEW

      Category A verified:
      - No specific prices mentioned (refers to tour pages)
      - "No commission shops" claim — based on Manabu's actual practice
      - Meeting point descriptions are generic (won't become outdated)
      - No promises about specific experiences that can't be guaranteed

      Category A needs human check:
      - Cash recommendation (¥10,000-20,000) — confirm this is still accurate for a full day
      - IC card (Suica/Pasmo) — verify current availability and setup process

      Category B verified:
      - General description of tour process — based on actual practice
      - Depachika/covered areas as rain backup — accurate
      - Photo stops and restroom knowledge — based on guide experience

      Items for Manabu to verify before publishing:
      1. Confirm that after-tour follow-up (restaurant recs, messages) matches actual practice
      2. Walking step count (8,000-15,000) — confirm this is accurate for typical tours
      3. Suica/Pasmo setup process — verify current availability for tourists
      */}
    </Layout>
  );
};

export default WhatToExpectPrivateTour;
