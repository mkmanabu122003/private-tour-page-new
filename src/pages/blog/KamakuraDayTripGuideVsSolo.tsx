import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { QuickAnswer } from "@/components/blog/QuickAnswer";

const KamakuraDayTripGuideVsSolo = () => {
  return (
    <Layout>
      <SEO
        title="Kamakura Day Trip 2026: Guided Tour vs Going Solo (Honest Comparison)"
        description="Kamakura from Tokyo: around ¥4,000 solo vs ¥70,000 guided. A licensed guide compares the temples most visitors miss, hydrangea season logistics, and when guided actually pays off."
        canonicalPath="/blog/kamakura-day-trip-guide-vs-solo"
        hreflang={[
          { lang: "en", path: "/blog/kamakura-day-trip-guide-vs-solo" },
          { lang: "es", path: "/es/blog/kamakura-con-guia-vs-solo" },
          { lang: "x-default", path: "/blog/kamakura-day-trip-guide-vs-solo" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Kamakura: Guided vs Solo" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/kamakura-great-buddha.webp"
          alt="The Great Buddha of Kamakura (Kotoku-in)"
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
            <p className="text-label text-accent mb-3">Day Trips</p>
            <h1 className="heading-display text-foreground">
              Kamakura Day Trip 2026: Guided Tour vs Going Solo (Honest Comparison)
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Licensed Tour Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                April 20, 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) who leads regular day trips from Tokyo to Kamakura.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <QuickAnswer
              answer="Solo wins on pure cost — about ¥4,000 per person for the classic route (Great Buddha, Hasedera, Tsurugaoka Hachimangu) from Tokyo. Guided is ¥70,000 for up to 4 people and only really pays off in three situations: the June hydrangea season at Hasedera (when timed entry tickets are nearly impossible to secure in English), combining Kamakura with Enoshima in one day, or when you want the hidden temples that most day-trippers walk right past."
              hook="Here's the real cost breakdown — plus the 3 parts of Kamakura that most solo visitors miss completely, and the one piece of modern reservation logistics that's quietly made June the hardest month to do solo."
            />

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Kamakura is the one day trip from Tokyo where I'll tell you honestly: for many travelers, going solo works just fine. It's close (about an hour from Tokyo Station), the famous sights are clustered in a small area, and the main route is well-signposted in English. The Great Buddha, Hasedera, and Tsurugaoka Hachimangu are on every guidebook list and easy to find.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              But "works fine" isn't the same as "gets the best of Kamakura." And there are specific situations — hydrangea season especially — where the reservation logistics have quietly become a real barrier for solo travelers without Japanese.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I've led this trip regularly. Below is an honest comparison with real 2026 prices, so you can decide which version of Kamakura fits your trip.
            </p>

            {/* What's in Kamakura */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              What's in Kamakura: The Layers Most Day-Trippers Skip
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most first-time visitors do what I call the "trinity route": Great Buddha → Hasedera → Tsurugaoka Hachimangu. These are the three headline sights, and they're genuinely worth seeing. Walking and short Enoden train rides link them in under 4 hours.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What most solo visitors skip — not intentionally, but because they don't know what they're walking past — is the deeper layer of Kamakura that made it Japan's political capital from 1185 to 1333. A small bamboo grove at Hokokuji that rivals Kyoto's Arashiyama but with a fraction of the crowds. The hydrangea-lined stone path at Meigetsu-in in June. A small Shinto shrine tucked into a cave at Zeniarai Benzaiten where you literally wash your money in spring water (it's said to double in value). These aren't secrets — they're in guidebooks — but they're almost always omitted from the rushed "hit the three big sights and leave" itinerary that day-trippers default to.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether that deeper Kamakura matters to you is the real question behind "guided or solo." If the Great Buddha is the main draw and you want a relaxing day, solo is perfectly fine. If you want to feel the shogunate-era weight of the city, you probably want a guide.
            </p>

            {/* Side-by-side comparison */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Solo vs Guided: At a Glance
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Factor</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Solo (public transit)</th>
                    <th className="text-left py-3 text-foreground font-medium">Guided (private tour)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Cost per person (3 sites)</td>
                    <td className="py-3 pr-4">~¥3,800</td>
                    <td className="py-3">¥70,000 per tour (up to 4 pax)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Break-even point</td>
                    <td className="py-3 pr-4">Always cheapest</td>
                    <td className="py-3">Guided still ~¥17,500/pax even at 4 people — the cost case doesn't close. The value case has to.</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Total day length</td>
                    <td className="py-3 pr-4">8–10 h door-to-door</td>
                    <td className="py-3">7–8 h (flexible, can add Enoshima)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">The "big 3" (Buddha, Hasedera, Hachimangu)</td>
                    <td className="py-3 pr-4">Easy — well signposted in English</td>
                    <td className="py-3">Over-engineered for this scope</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Hidden temples (Hokokuji, Meigetsu-in, Zeniarai)</td>
                    <td className="py-3 pr-4">Reachable but rarely included in solo routes</td>
                    <td className="py-3">Core of the tour</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Hydrangea season at Hasedera (Jun)</td>
                    <td className="py-3 pr-4">Online reservation only, timed slots, Japanese interface</td>
                    <td className="py-3">Handled by the guide</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium text-foreground">Kamakura + Enoshima combo</td>
                    <td className="py-3 pr-4">Tight but doable with Enoden day pass</td>
                    <td className="py-3">Built for this route</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Historical / cultural context</td>
                    <td className="py-3 pr-4">Guidebook-level</td>
                    <td className="py-3">Shogunate history, architecture, Zen tradition in English</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* The Solo Route */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              The Solo Route (Public Transit from Tokyo)
            </h2>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Getting there
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">JR Yokosuka Line from Tokyo Station.</strong> Direct to Kamakura in about 60 minutes. IC fare around ¥945 one way (roughly ¥1,900 round-trip). The most common route.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">JR Shonan-Shinjuku Line from Shinjuku.</strong> About 57–61 minutes direct, same fare. Good if you're staying in Shinjuku or the west side.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Japan Rail Pass.</strong> Both routes above are fully covered. No extra ticketing needed.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Getting around once you're there
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Once you're in Kamakura, the most useful local pass is the Enoden <strong className="text-foreground">"Noriorikun"</strong> one-day pass (¥800 adult / ¥400 child). It lets you hop on and off the Enoden train line, which connects Kamakura Station → Hase (for Hasedera and the Great Buddha) → all the way to Enoshima. For a "Buddha + Hasedera + Enoshima" day it pays for itself in one or two rides.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Enoden from Kamakura to Hase Station (Hasedera and the Great Buddha) takes about 4–5 minutes. Kamakura to Enoshima is about 23 minutes through seaside neighborhoods — a small attraction in itself.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For Tsurugaoka Hachimangu and the eastern temples (Hokokuji, Sugimotodera), you walk or take a local bus from Kamakura Station — not the Enoden.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Admission fees (2026)
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Great Buddha (Kotoku-in)</td>
                    <td className="py-2 text-right">¥300 adult (+¥50 to enter the Buddha)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Hasedera (standard)</td>
                    <td className="py-2 text-right">¥400 adult</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Hasedera hydrangea path ticket (June)</td>
                    <td className="py-2 text-right">+¥500 (separate, online reservation)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Tsurugaoka Hachimangu main shrine</td>
                    <td className="py-2 text-right">Free</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Tsurugaoka Hachimangu treasure hall</td>
                    <td className="py-2 text-right">¥200 adult</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Hokokuji (bamboo grove)</td>
                    <td className="py-2 text-right">¥400 adult (+¥600 for matcha)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Cost breakdown (1 person, classic 3-site route)
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">JR round-trip (Tokyo ⇄ Kamakura)</td>
                    <td className="py-2 text-right">~¥1,900</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Enoden Noriorikun 1-day pass</td>
                    <td className="py-2 text-right">¥800</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Great Buddha</td>
                    <td className="py-2 text-right">¥300</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Hasedera</td>
                    <td className="py-2 text-right">¥400</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 pr-4">Tsurugaoka Hachimangu</td>
                    <td className="py-2 text-right">Free</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-foreground">Subtotal (no lunch, off-season)</td>
                    <td className="py-2 text-right font-medium text-foreground">~¥3,400</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Add Hokokuji (¥400) and the hydrangea ticket (¥500 in June) and you land around ¥4,000–¥4,300 per person. Lunch in Kamakura typically adds ¥1,500–¥3,000.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              The 3 things solo visitors usually miss
            </h3>
            <ol className="space-y-3 mb-8 list-decimal list-inside">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The eastern temple cluster (Hokokuji + Sugimotodera).</strong> Because these are a 5–10 minute bus ride east of Kamakura Station rather than on the Enoden line, most day-trippers with a tight schedule skip them entirely. Hokokuji's bamboo grove rivals Arashiyama in Kyoto and is almost always less crowded. This is the single biggest "hidden in plain sight" miss of a solo Kamakura day.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hasedera hydrangea timing (June only).</strong> Since 2021, Hasedera has run the hydrangea path on timed entry tickets sold online the Thursday before each week. The interface is Japanese-only, tickets disappear within minutes, and during peak weekends they're nearly impossible to get without a local handling it. Solo visitors routinely show up without a ticket, find the queue full, and have to skip the main reason they came in June.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The walking routes that connect everything.</strong> Kamakura's real charm is the quiet residential streets, hydrangea-lined stone steps, and small side shrines you pass between the big sites. Google Maps plots the shortest path between points; it doesn't route you through the pretty one. A guide walks the slow route, and it changes the feel of the day.
              </li>
            </ol>

            {/* The Guided Route */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              The Guided Route (What You're Actually Paying For)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A private <Link to="/tours/kamakura-day-trip" className="text-accent hover:underline">Kamakura day trip</Link> is ¥70,000 for up to 4 people, including the guide and most of the logistics. Admissions and meals are separate. A typical full day covers:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground leading-relaxed">
                Meet at your Tokyo hotel or a Tokyo station around 8:30 AM
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Direct train to Kamakura with historical context on the ride
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Tsurugaoka Hachimangu with the shogunate-era political story that makes the geometry of the shrine make sense
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Hokokuji bamboo grove (the "hidden" highlight most solo visitors skip)
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Lunch at a local spot — no queues, no guesswork about ordering
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Great Buddha and Hasedera via the Enoden with seasonal timing (hydrangea tickets handled in advance in June)
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Optional extension to Enoshima and the coast for sunset
              </li>
              <li className="text-muted-foreground leading-relaxed">
                Return to Tokyo by early evening
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Per-person math:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="text-muted-foreground leading-relaxed">1 person: ¥70,000 — rarely makes sense vs solo</li>
              <li className="text-muted-foreground leading-relaxed">2 people: ¥35,000 each</li>
              <li className="text-muted-foreground leading-relaxed">3 people: ~¥23,300 each</li>
              <li className="text-muted-foreground leading-relaxed">4 people: ¥17,500 each — still 4× the solo cost</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unlike Nikko (where a guide's door-to-door transport and winter road handling roughly offsets the cost at 4 people), Kamakura's solo option is genuinely cheap and well-supported in English. So the guided case isn't "it's actually cheaper at 4 people" — it's "it's worth paying 4× solo cost because of what you'll actually see and how the day will feel." That's a different sell, and you should be clear with yourself about whether it matches what you want.
            </p>

            {/* Decision framework */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Which One You Should Choose
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Your situation</th>
                    <th className="text-left py-3 text-foreground font-medium">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Main goal is the Great Buddha; budget matters</td>
                    <td className="py-3">Solo with the Enoden Noriorikun pass</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Visiting in June (hydrangea season)</td>
                    <td className="py-3">Guided — the Hasedera timed-ticket reservation is the single hardest logistics piece in Kamakura for non-Japanese speakers</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Want Kamakura + Enoshima in one day</td>
                    <td className="py-3">Either works; guided removes timing stress</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Want hidden temples (Hokokuji, Meigetsu-in, Zeniarai Benzaiten)</td>
                    <td className="py-3">Guided — these are where the price difference starts to earn its keep</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Interested in shogunate-era history / Zen Buddhism</td>
                    <td className="py-3">Guided — the stories aren't on any English signage</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Elderly parents or mobility concerns</td>
                    <td className="py-3">Guided — Kamakura has stairs everywhere; a guide can route around the worst ones</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">You read Japanese or have been before</td>
                    <td className="py-3">Solo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Seasonal note */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              A Note on Hydrangea Season (June)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hasedera's hydrangea path (約2,500株) is one of Japan's signature June experiences. Since the temple moved to a timed-entry system, though, the logistics have tightened. Each week's tickets go on sale online on the Thursday before at 10:00 AM Japan time, and popular weekend slots typically sell out within minutes. The reservation site runs in Japanese, and the ticket is separate from the regular ¥400 temple admission — you pay an extra ¥500 for the hydrangea path.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For solo travelers, this is the #1 failure point I see. People plan their whole Kamakura day around the hydrangea and arrive to find the hydrangea path fully booked out for their timeslot. The workaround is to go on a weekday, very early (the temple opens 8:00 AM in June), and have a Plan B ready.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The exact dates of the paid hydrangea-ticket period shift each year based on when the flowers actually bloom; check Hasedera's official site (hasedera.jp) in late May for the current year's schedule.
            </p>

            {/* Related */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Still Choosing Between Day Trips?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If you're weighing Kamakura against Hakone or Nikko, I wrote a full three-way comparison:{" "}
              <Link to="/blog/kamakura-vs-hakone-vs-nikko-day-trip" className="text-accent hover:underline font-medium">
                Kamakura vs Hakone vs Nikko
              </Link>
              . And for the parallel guide-vs-solo question for the other two, see:{" "}
              <Link to="/blog/hakone-day-trip-guide-vs-solo" className="text-accent hover:underline font-medium">
                Hakone: Guided vs Solo
              </Link>{" "}
              and{" "}
              <Link to="/blog/nikko-day-trip-guide-vs-solo" className="text-accent hover:underline font-medium">
                Nikko: Guided vs Solo
              </Link>
              .
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Planning a Kamakura Day Trip?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tell me your group size, your month of travel, and whether Hokokuji or Enoshima are on your list, and I'll tell you honestly whether solo or guided makes more sense for you. My{" "}
                <Link to="/tours/kamakura-day-trip" className="text-accent hover:underline">
                  Kamakura Day Trip tour
                </Link>{" "}
                page has the full itinerary if you want to compare.
              </p>
              <Link
                to="/contact?utm_source=blog&utm_medium=cta&utm_campaign=kamakura-guide-vs-solo"
                className="btn-accent"
              >
                Ask About Your Kamakura Trip
              </Link>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Can you do Kamakura as a day trip from Tokyo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, and it's one of the easiest. The JR Yokosuka Line from Tokyo Station reaches Kamakura in about 60 minutes, and the Shonan-Shinjuku Line from Shinjuku is roughly the same time. A full day comfortably covers the Great Buddha, Hasedera, and Tsurugaoka Hachimangu.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is the Enoden day pass worth buying?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For a classic Kamakura day (Great Buddha + Hasedera + optional Enoshima), yes — the ¥800 Noriorikun pays for itself in two or three rides. For just the shrines near Kamakura Station, a per-ride ticket is cheaper.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is the Japan Rail Pass worth it for Kamakura?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Both the JR Yokosuka Line and the Shonan-Shinjuku Line are covered by the JR Pass, so if you have one, use it. If you don't, round-trip JR tickets run about ¥1,900 — cheap enough that buying a JR Pass just for Kamakura doesn't make sense.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">When is the best time to visit Kamakura?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hydrangea season (mid-June) and autumn leaves (late November to early December) are the two photographic peaks, but both bring serious crowds. For a quieter visit with good weather, aim for late April, early May, or mid-October. Winter weekdays are wonderfully uncrowded if you don't mind cool weather.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">How many sites can you realistically see in one day?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Solo: comfortably 4–5 sites. Guided: 5–7 sites, because less time is lost on navigation, bus waits, and searching for lunch. If you want Hokokuji + the big three + Enoshima in one day, guided is noticeably less stressful.
                  </p>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>

      <RelatedTourCards
        tourIds={["kamakura-day-trip", "hakone-day-trip", "nikko-day-trip"]}
        showViewAll
      />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Kamakura Day Trip 2026: Guided Tour vs Going Solo (Honest Comparison)",
            description:
              "Kamakura from Tokyo: around ¥4,000 solo vs ¥70,000 guided. A licensed guide compares the temples most visitors miss, hydrangea season logistics, and when guided actually pays off.",
            author: {
              "@type": "Person",
              name: "Manabu",
              jobTitle: "National Government Licensed Guide Interpreter",
              url: "https://tanuki-tabi-travel.com/about",
            },
            datePublished: "2026-04-20",
            dateModified: "2026-04-20",
            publisher: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/blog/kamakura-day-trip-guide-vs-solo",
            },
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can you do Kamakura as a day trip from Tokyo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The JR Yokosuka Line from Tokyo Station reaches Kamakura in about 60 minutes. A full day comfortably covers the Great Buddha, Hasedera, and Tsurugaoka Hachimangu.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Enoden day pass worth buying?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For a Great Buddha + Hasedera + Enoshima day, yes — the ¥800 Noriorikun pays for itself in two or three rides.",
                },
              },
              {
                "@type": "Question",
                name: "When is the best time to visit Kamakura?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hydrangea season (mid-June) and autumn leaves (late November) are the peaks but bring crowds. For quieter visits, aim for late April, early May, or mid-October.",
                },
              },
            ],
          }),
        }}
      />

      {/*
        FACT-CHECK REPORT
        Generated: 2026-04-20
        Sources verified via web search on 2026-04-20.

        VERIFIED (2026-04-20):
        - JR Yokosuka Line Tokyo → Kamakura: ~60 min, IC ~¥945 one way (JR East 2026-03-14 fare revision reflected)
        - JR Shonan-Shinjuku Line Shinjuku → Kamakura: ~57–61 min, same base fare
        - Enoden 1-day pass "Noriorikun": ¥800 adult / ¥400 child (enoden.co.jp)
        - Great Buddha (Kotoku-in): ¥300 adult + ¥50 to enter the Buddha body
        - Hasedera: ¥400 adult (2025-04 revised), hydrangea ticket +¥500 (separate, online reserved)
        - Tsurugaoka Hachimangu: main shrine free, treasure hall ¥200
        - Hokokuji: ¥400 adult, matcha +¥600
        - Enoden Kamakura → Hase: ~4–5 min; Kamakura → Enoshima: ~23 min
        - Hydrangea ticket: released online each Thursday 10:00 AM for the following week, 60-minute slots

        DELIBERATELY UNCONFIRMED / ABSTRACTED:
        - 2026 specific hydrangea-ticket start/end dates — article says "check hasedera.jp in late May for the current year's schedule"
        - JR 2026-03-14 revised fare is reflected; final Tokyo→Kamakura PDF not individually accessed
      */}
    </Layout>
  );
};

export default KamakuraDayTripGuideVsSolo;
