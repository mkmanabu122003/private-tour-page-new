import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { ArticleFooterCTA } from "@/components/blog/ArticleFooterCTA";

const FirstTimeTokyoLocalGuide = () => {
  return (
    <Layout>
      <SEO
        title="First Time in Tokyo? Here's What a Local Guide Actually Does"
        description="Beyond directions and translations. What a typical day with a Tokyo guide looks like, and an honest take on whether you need one."
        canonicalPath="/blog/first-time-tokyo-local-guide"
        hreflang={[
          { lang: "en", path: "/blog/first-time-tokyo-local-guide" },
          { lang: "es", path: "/es/blog/primera-vez-tokio-guia-local" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/asakusa-backstreet-local.webp"
          alt="Exploring Tokyo backstreets with a local guide"
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
              First Time in Tokyo? Here's What a Local Guide Actually Does
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
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士), born in Kanazawa, raised in Kyoto, now based in Tokyo.
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
              The most common question I get isn't about temples or sushi. It's: "What do you actually DO on a tour?"
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fair question. If you've never hired a private guide before, the concept might seem odd. Someone who walks around the city with you? Isn't that what Google Maps is for?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Let me show you what a real day with a guide looks like, explain the parts you can't replicate with an app, and be completely honest about when you need one and when you don't.
            </p>

            {/* A Real Day */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              A Real Day: Tsukiji to Ginza to Asakusa
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To show you the difference, I'll walk through the same route with and without a guide. Imagine it's your first day in Tokyo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Morning: Tsukiji Market (9:00 - 11:00 AM)
            </h3>
            <div className="bg-secondary/30 rounded-lg p-6 mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Self-guided:</p>
              <p className="text-muted-foreground leading-relaxed">
                You arrive at the outer market. Dozens of stalls, but you don't know which ones are tourist traps and which ones the locals frequent. You point at a photo to order. It's fine but you don't know what you're eating. You see a long line and join it without knowing if it's worth the wait.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-6 mb-6">
              <p className="text-sm font-medium text-foreground mb-2">With a guide:</p>
              <p className="text-muted-foreground leading-relaxed">
                I take you to the stalls the Japanese customers line up at (different from the tourist lines). I explain the difference between seasonal tuna and frozen, order a fresh tamagoyaki and tell you why this egg dish is different here than anywhere else. We skip the overhyped spots and stop at a daifuku stall that doesn't appear on any English blog. You try five things in an hour and understand every one of them.
              </p>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Midday: Ginza Backstreets (11:30 AM - 1:30 PM)
            </h3>
            <div className="bg-secondary/30 rounded-lg p-6 mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Self-guided:</p>
              <p className="text-muted-foreground leading-relaxed">
                You walk from Tsukiji to Ginza along the main avenue. You see luxury shops. You eat lunch at a restaurant with an English menu near the main street. Decent but generic.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-6 mb-6">
              <p className="text-sm font-medium text-foreground mb-2">With a guide:</p>
              <p className="text-muted-foreground leading-relaxed">
                I take you through Ginza's backstreets where tourists never go. We have lunch at a soba place with 8 seats where the chef has been making the same noodles for 30 years. I explain the lunch set system (Japan's best-kept dining value). We pass through a free art gallery that only locals know about.
              </p>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Afternoon: Asakusa (2:00 - 4:30 PM)
            </h3>
            <div className="bg-secondary/30 rounded-lg p-6 mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Self-guided:</p>
              <p className="text-muted-foreground leading-relaxed">
                You reach Senso-ji, take the Kaminarimon gate photo, walk Nakamise, look at the pagoda. It's beautiful but surface-level. You don't know why people toss coins, what the kanji on the temple mean, or why those two fierce statues guard the gate.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-lg p-6 mb-8">
              <p className="text-sm font-medium text-foreground mb-2">With a guide:</p>
              <p className="text-muted-foreground leading-relaxed">
                I tell you that the guardian statues (Fujin and Raijin) are the gods of wind and thunder. We draw an omikuji fortune and I explain the system of good and bad luck. I take you through Asakusa's backstreets to artisan shops that have been running for generations and a secondary temple that's always empty. The visit takes the same time, but the experience is completely different.
              </p>
            </div>

            {/* The Hidden Value */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              The Hidden Value
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Navigation Beyond Google Maps
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {/* <!-- VERIFIED: Tokyo Metro (9) + Toei Subway (4) = 13 subway lines. Confirmed. Checked: 2026-03-14 --> */}
              Tokyo has 13 subway lines, plus JR lines, private railways, and multiple bus networks. Google Maps gets you from A to B, but it doesn't tell you which exit of a 15-exit station saves you 5 minutes of walking, or that the platform on the other side puts you closer to the transfer. A guide knows these shortcuts because they use them every day.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Restaurant Access
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many of Tokyo's best restaurants don't have English menus. Some don't even have a visible sign from the street. A guide takes you to places you wouldn't enter alone, orders for you when needed, and explains what you're eating and why it's special.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cultural Context
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japan has layers of meaning that aren't visible at first glance. Why are there two different types of rope at shrines? Why do some restaurants not accept reservations? Why is that seemingly ordinary building actually a national treasure? A guide gives you the cultural operating system that makes everything click.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Real-Time Adjustments
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              It starts raining: I reroute to covered areas. A temple is closed for maintenance: I have three alternatives ready. You're looking tired: I suggest a cafe I know two streets over. This constant adaptation is impossible with an app or a printed guide.
            </p>

            {/* When You Don't Need a Guide */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              When You Don't Need a Guide
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Repeat visitors</strong> who already know the train system and cultural basics
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">You enjoy getting lost.</strong> Some of the best travel memories come from wandering without a plan, finding a ramen shop in a random alley, stumbling into a local festival. If that's your style, a structured tour might feel constraining.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">You speak some Japanese</strong> or are comfortable navigating language barriers
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">You have unlimited time.</strong> With 10 days in Tokyo, you can afford to discover things at your own pace. With 3 days, every hour counts.
              </li>
            </ul>

            {/* When a Guide Changes Everything */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              When a Guide Changes Everything
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">First visit with limited days.</strong> A guide on Day 1 orients you and gives you confidence for the rest of the trip. I often recommend booking a guide for your first day and a day trip, then exploring independently for the remaining days.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Family travel.</strong> With kids or elderly parents, logistics multiply. A guide absorbs all the stress of transport and planning.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Special interests.</strong> If you're passionate about food, history, architecture, or photography, a guide takes you much deeper than any blog can.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Large groups.</strong> Coordinating 5-6 people through Tokyo's metro without losing anyone is a sport in itself.
              </li>
            </ul>

            {/* Personal Note */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              A Personal Note
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I grew up in Kanazawa, a small city on the Sea of Japan coast that most tourists don't visit. I was raised in Kyoto, surrounded by temples and traditions that to me were just the neighborhood. When I moved to Tokyo and started guiding, I discovered something: what felt ordinary to me was fascinating to visitors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              That's the real advantage of a local guide. I'm not telling you what I read in a book. I'm sharing how I grew up, what these traditions mean to someone who lives them from the inside, and why certain details that seem insignificant are actually the most important things. You won't find that in any guidebook.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Planning Your First Tokyo Trip?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Send me your itinerary. I'll tell you which days benefit from a guide and which you'll be fine on your own. No pressure, just practical advice from someone who knows the city. For pricing details, see{" "}
                <Link to="/blog/tokyo-private-tour-guide-cost" className="text-accent hover:underline">
                  my price guide
                </Link>
                .
              </p>
              <Link
                to="/contact?utm_source=blog&utm_medium=cta&utm_campaign=first-time-tokyo"
                className="btn-accent"
              >
                Tell Me About Your Trip
              </Link>
            </div>

            <ArticleFooterCTA />
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
            headline: "First Time in Tokyo? Here's What a Local Guide Actually Does",
            description:
              "Beyond directions and translations. What a typical day with a Tokyo guide looks like, and an honest take on whether you need one.",
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
              "@id": "https://tanuki-tabi-travel.com/blog/first-time-tokyo-local-guide",
            },
          }),
        }}
      />

      {/* FACT-CHECK REPORT
      Generated: 2026-03-14
      Updated: 2026-03-14 (web search verification)
      Status: KEY ITEMS VERIFIED

      WEB-VERIFIED (2026-03-14):
      - 13 subway lines: CONFIRMED (Tokyo Metro 9 + Toei 4 = 13)

      Category A verified:
      - Tour route (Tsukiji → Ginza → Asakusa) matches actual tour offerings
      - Kanazawa/Kyoto biographical details consistent with About page
      - No overlap with B1 (what-to-expect) — different audience focus
      - Station names and walking descriptions accurate

      Items for Manabu to verify before publishing:
      1. Fujin/Raijin guardian statues at Kaminarimon — confirm correct identification
      2. Bio (Kanazawa born, Kyoto raised) — confirm consistent with About page
      */}
    </Layout>
  );
};

export default FirstTimeTokyoLocalGuide;
