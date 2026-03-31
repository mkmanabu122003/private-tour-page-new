import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { QuickAnswer } from "@/components/blog/QuickAnswer";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { TouristTrip } from "@/components/StructuredData/TouristTrip";

const TokyoItinerary5Days = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo 5-Day Itinerary 2026: Day-by-Day Plan (Local Guide)"
        description="Day 1: Asakusa & Ueno. Day 2: Tsukiji & Ginza. Day 3: Shibuya & Harajuku. Day 4: Day trip. Day 5: Hidden gems. A licensed guide's tested 5-day route."
        canonicalPath="/blog/tokyo-itinerary-5-days"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Tokyo 5-Day Itinerary" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/shibuya-scramble-crossing.webp"
          alt="Shibuya Scramble Crossing, iconic Tokyo landmark for your 5-day itinerary"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>
            <p className="text-label text-accent mb-3">Planning Your Trip</p>
            <h1 className="heading-display text-foreground">
              Tokyo Itinerary 5 Days: What I'd Actually Plan as a Licensed Guide
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />Manabu, Licensed Tour Guide</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />March 7, 2026</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) with 500+ tours. This is the itinerary I give my private clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <QuickAnswer
              answer="5 days in Tokyo: Day 1 — Asakusa & Ueno (traditional). Day 2 — Tsukiji & Ginza (food & shopping). Day 3 — Shibuya & Harajuku (pop culture). Day 4 — Day trip (Kamakura, Hakone, or Nikko). Day 5 — Hidden gems & local neighborhoods."
              hook="But the biggest mistake in online itineraries is trying to cover too much. A local guide who plans 500+ trips explains the 'depth beats breadth' approach below."
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              After planning over 500 private tours in Tokyo, I've noticed the same mistake in nearly every 5-day Tokyo itinerary I see online: they try to cover everything. Shibuya on Monday, Asakusa on Tuesday, Harajuku on Wednesday, like checking boxes on a list. The result is exhausting, shallow, and leaves visitors feeling like they "saw Tokyo" without ever understanding it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Here's the Tokyo itinerary for 5 days that I actually give my clients. It's designed around a principle I've learned from guiding: depth beats breadth. You'll see fewer neighborhoods but understand them. You'll eat fewer restaurants but remember each one. And you'll leave Tokyo feeling like you know the city, not just its photo spots.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Before You Plan: The Mistake Most Visitors Make
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The biggest mistake is geographic. Visitors plot attractions on a map, see they're "only 30 minutes apart," and stack six of them into one day. What they don't account for: the 10-minute walk to the train station, the 5-minute wait for the train, the transfer at Shinjuku (which can take 15 minutes in that maze), the 10-minute walk from the destination station, and the mental energy of navigating an unfamiliar system in a foreign language. A "30-minute trip" becomes an hour, and six of them becomes a full day of transit.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My approach: organize each day by geography. Stay in one area for the morning, one connected area for the afternoon. Walk between sites when possible. Save train rides for the transition between morning and afternoon, and for getting home in the evening. This simple structure cuts transit time in half and doubles your actual experience time.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 1: Arrive and Orient (Asakusa, Ueno)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Morning:</strong> If you arrive early enough, head straight to Asakusa. Senso-ji temple is most magical before 9 AM. The Nakamise shopping street is quiet, the incense smoke curls through empty courtyards, and you can actually appreciate the architecture without being in a crowd. I start every Tokyo itinerary here because Asakusa is old Tokyo (Shitamachi), and understanding this layer first makes everything else you'll see this week make more sense.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Afternoon:</strong> Walk north to Ueno (20 minutes on foot or one subway stop). Ueno Park houses several world-class museums. The Tokyo National Museum is Japan's finest collection of art and artifacts. If you're jet-lagged, the park itself is a pleasant place to sit, people-watch, and adjust to the rhythm of the city.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">Guide's tip:</p>
              <p className="text-sm text-muted-foreground">Don't try to do too much on Day 1. Jet lag is real, and pushing through exhaustion leads to a miserable Day 2. Arrive, see Senso-ji, have a slow lunch, visit one museum, and go to bed early. You'll thank yourself tomorrow.</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What to skip:</strong> Ameyoko Market near Ueno is often recommended, but it's a chaotic discount shopping street that's more stressful than interesting for first-day visitors. Come back on Day 4 or 5 if you're curious.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 2: Old Tokyo and the Neighborhoods Tourists Miss
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Morning:</strong> Yanaka. Start at Nippori Station and walk south through this neighborhood that survived the 1923 earthquake and WWII bombing. Yanaka Cemetery (where Japan's last shogun is buried), small Buddhist temples with no tourists, Yanaka Ginza shopping street with its famous sunset view. This is the Tokyo that looks like it did 100 years ago.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Afternoon:</strong> Nezu Shrine (walking distance from Yanaka), then continue to Kagurazaka, Tokyo's old geisha district that became a French quarter. Explore the yokocho (narrow alleys) lined with traditional restaurants and stone paths. End the day with dinner in Kagurazaka. The mix of French and Japanese restaurants here is unlike anywhere else in Tokyo.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">Guide's tip:</p>
              <p className="text-sm text-muted-foreground">Day 2 is about context. You're building an understanding of what old Tokyo looked like before the modernization you'll see on Days 3–5. Without this foundation, Shibuya and Shinjuku are just neon. With it, they become the contrast that makes Tokyo fascinating.</p>
            </div>

            <InlineCTA message="Want a local guide to show you the real Tokyo?" href="/contact" />

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 3: Modern Tokyo and What It Means
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Morning:</strong> Tsukiji outer market for breakfast. Arrive by 8 AM for the freshest food and thinnest crowds. Eat sushi for breakfast (it's a Tokyo tradition, not a tourist gimmick). Then walk to the Imperial Palace East Gardens (free, beautiful, and nearly empty on weekday mornings).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Afternoon:</strong> Shibuya and Harajuku. See the famous crossing (it's worth seeing once), walk through Takeshita Street in Harajuku, then escape to Meiji Shrine, the forested sanctuary that sits in the middle of Tokyo's most commercial district. The contrast between Harajuku's retail chaos and Meiji's silent forest path is one of the most powerful moments in any Tokyo itinerary.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">Guide's tip:</p>
              <p className="text-sm text-muted-foreground">After Day 2 in old Tokyo, Day 3 in modern Tokyo creates the contrast that makes this city unique. When you walk from Meiji Shrine's ancient forest into Harajuku's neon streets, you'll feel the two Tokyos collide, and that's the moment most of my clients say the city "clicks."</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What to skip:</strong> Shibuya Sky observation deck, overpriced for a view you can get from many hotel lobbies. The Metropolitan Government Building in Shinjuku is free and equally good.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 4: Day Trip (Kamakura or Nikko)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A day trip breaks the rhythm of city exploration and gives you a completely different perspective on Japan. My top picks:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Kamakura</strong> (1 hour from Tokyo): Great Buddha, Zen temples, hiking trails, and a beach. Best for active travelers who want nature + culture. Full-day trip.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Nikko</strong> (2 hours from Tokyo): Lavish Tosho-gu Shrine, waterfalls, and cedar forests. Best for travelers who love ornate architecture and don't mind the longer commute.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground"><Link to="/blog/kawagoe-day-trip-from-tokyo" className="text-accent hover:underline">Kawagoe</Link></strong> (30 minutes from Tokyo): Edo-period warehouse district, sweet potato food culture, traditional candy street. Best for travelers who want an easy half-day trip or can't commit to a full day. Can be combined with a Shinjuku/Ikebukuro afternoon.
              </li>
            </ul>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">Guide's tip:</p>
              <p className="text-sm text-muted-foreground">If you're choosing between Kamakura and Nikko, think about what excites you more: Kamakura is relaxed, green, and walkable. Nikko is dramatic, ornate, and slightly more demanding logistically. Both are excellent. Check my day trip guides for details.</p>
            </div>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 5: Slow Morning, Last Wanders, Departure
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Morning:</strong> No alarm. Wake up naturally, have a slow breakfast, and revisit any neighborhood from earlier in the week that called to you. In my experience guiding 500+ groups, the most memorable moments of a Tokyo itinerary happen when people return to a place they've already seen, now with context, curiosity, and fewer questions about logistics.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you want a new experience: Shinjuku in the morning. The Metropolitan Government Building observatory opens at 9:30 AM (free), offering panoramic views that put your entire week in geographic context. On clear days, Mt. Fuji is visible. Then wander through Shinjuku Gyoen, one of Tokyo's most beautiful gardens, at your own pace.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Afternoon:</strong> Pack, shop for last-minute souvenirs in the basement food halls (depachika) of any major department store, and head to the airport. If you're flying from Narita, budget 90 minutes for the train. From Haneda, 40 minutes.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">Guide's tip:</p>
              <p className="text-sm text-muted-foreground">The best souvenir shopping in Tokyo is in department store food halls (depachika). Isetan in Shinjuku and Takashimaya in Nihonbashi have extraordinary selections of beautifully packaged Japanese sweets, teas, and food items that make perfect gifts. Better quality and lower prices than airport shops.</p>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Want this itinerary brought to life by a local guide?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I offer private guided days for any part of this Tokyo itinerary, from the Asakusa morning to the Kamakura day trip. You can book individual days or let me customize the entire 5 days around your interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours" className="btn-accent">View All Tours</Link>
                <Link to="/contact" className="btn-outline">Contact Me</Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is 5 days enough for Tokyo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Five days is a solid amount of time for a first visit. You'll see the major neighborhoods, do a day trip, and have enough time to explore at a comfortable pace. If you can extend to 7 days, you'll be able to add a second day trip and revisit favorites. But 5 days, well-planned, covers the essentials without feeling rushed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">How much should I budget per day in Tokyo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A comfortable mid-range budget is ¥15,000–20,000 per person per day (excluding hotel), covering transportation (¥1,000–1,500), meals (¥5,000–8,000), attractions (¥1,000–3,000), and miscellaneous expenses. Budget travelers can manage on ¥8,000–10,000 per day. Luxury travelers should budget ¥30,000+.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Do I need a guide for every day of a 5-day Tokyo itinerary?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No. Most of my clients book a guide for 1–2 days and explore independently the rest of the time. I'd recommend a guide for Day 1 (Asakusa context) and Day 4 (day trip logistics). Days 2, 3, and 5 are very doable on your own, especially if you've had a guided foundation on Day 1.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Where should I stay for a 5-day Tokyo trip?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Asakusa is my top recommendation: central to many attractions on this itinerary, close to subway lines, great local restaurants, and significantly cheaper than Shibuya or Shinjuku. Ueno is a solid second choice with excellent museum access. Shinjuku is best if you prioritize nightlife and restaurant variety.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["custom"]} showViewAll />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Tokyo Itinerary 5 Days: What I'd Actually Plan as a Licensed Guide",
        description: "Not the usual tourist circuit. A licensed Tokyo guide shares the 5-day itinerary he gives his private clients.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-07", dateModified: "2026-03-07",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/tokyo-itinerary-5-days" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is 5 days enough for Tokyo?", acceptedAnswer: { "@type": "Answer", text: "Yes. 5 days covers major neighborhoods, a day trip, and comfortable exploration. 7 days allows more depth." }},
          { "@type": "Question", name: "How much should I budget per day?", acceptedAnswer: { "@type": "Answer", text: "Mid-range: ¥15,000–20,000 per person per day excluding hotel. Budget: ¥8,000–10,000. Luxury: ¥30,000+." }},
          { "@type": "Question", name: "Do I need a guide every day?", acceptedAnswer: { "@type": "Answer", text: "No. Most clients book 1–2 guided days and explore independently the rest. Guide recommended for Day 1 and day trips." }},
          { "@type": "Question", name: "Where should I stay?", acceptedAnswer: { "@type": "Answer", text: "Asakusa: central, affordable, great restaurants. Ueno: museum access. Shinjuku: nightlife and dining variety." }}
        ]
      })}} />

      {/* TouristTrip Schema */}
      <TouristTrip
        name="Tokyo 5-Day Itinerary: A Licensed Guide's Plan"
        description="Not the usual tourist circuit. A licensed Tokyo guide shares the 5-day itinerary he gives his private clients, with honest notes on what to skip."
        url="https://tanuki-tabi-travel.com/blog/tokyo-itinerary-5-days"
        touristType="International first-time visitors to Tokyo"
        duration="P5D"
        days={[
          {
            name: "Day 1: Arrive and Orient – Asakusa & Ueno",
            description: "Ease into Tokyo with old Shitamachi. Senso-ji before the crowds, then Ueno Park and the Tokyo National Museum.",
            places: ["Senso-ji Temple, Asakusa", "Nakamise-dori", "Ueno Park", "Tokyo National Museum"],
            recommendedDuration: "PT8H",
          },
          {
            name: "Day 2: Old Tokyo – Yanaka & Kagurazaka",
            description: "Explore neighborhoods that survived earthquake and war: Yanaka's traditional lanes, Nezu Shrine, and Kagurazaka's old geisha district.",
            places: ["Yanaka", "Yanaka Cemetery", "Yanaka Ginza", "Nezu Shrine", "Kagurazaka"],
            recommendedDuration: "PT10H",
          },
          {
            name: "Day 3: Modern Tokyo – Tsukiji, Shibuya & Harajuku",
            description: "Breakfast at Tsukiji market, the calm of the Imperial Palace gardens, then the contrasts of Shibuya Crossing and Meiji Shrine's forest.",
            places: ["Tsukiji Outer Market", "Imperial Palace East Gardens", "Shibuya Crossing", "Harajuku Takeshita Street", "Meiji Shrine"],
            recommendedDuration: "PT12H",
          },
          {
            name: "Day 4: Day Trip – Kamakura or Nikko",
            description: "Escape the city: Kamakura's Great Buddha and Zen temples (1 hr from Tokyo) or Nikko's ornate Tosho-gu Shrine and cedar forests (2 hrs).",
            places: ["Kamakura", "Kotoku-in (Great Buddha)", "Nikko", "Tosho-gu Shrine"],
            recommendedDuration: "PT10H",
          },
          {
            name: "Day 5: Slow Morning & Departure – Shinjuku",
            description: "Free observatory at the Metropolitan Government Building, Shinjuku Gyoen garden, souvenir shopping at depachika, then the airport.",
            places: ["Tokyo Metropolitan Government Building Observatory", "Shinjuku Gyoen", "Shinjuku depachika"],
            recommendedDuration: "PT6H",
          },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Spend 5 Days in Tokyo",
        "description": "A day-by-day Tokyo itinerary planned by a licensed local guide, designed for depth over breadth.",
        "step": [
          { "@type": "HowToStep", "name": "Day 1: Traditional Tokyo", "text": "Explore Asakusa (Senso-ji Temple, Nakamise Street), walk to Ueno Park, and end in Yanaka's nostalgic backstreets." },
          { "@type": "HowToStep", "name": "Day 2: Food & Markets", "text": "Start early at Tsukiji Outer Market for breakfast, walk to Ginza for shopping and lunch, explore Nihonbashi in the afternoon." },
          { "@type": "HowToStep", "name": "Day 3: Pop Culture & Fashion", "text": "Morning at Meiji Shrine and Harajuku's Takeshita Street, afternoon in Shibuya (Crossing, Center-gai), evening in Shinjuku." },
          { "@type": "HowToStep", "name": "Day 4: Day Trip", "text": "Choose Kamakura (temples & Great Buddha), Hakone (Mt. Fuji views & hot springs), or Nikko (UNESCO shrines & nature)." },
          { "@type": "HowToStep", "name": "Day 5: Hidden Gems", "text": "Imperial Palace East Gardens in the morning, then explore a local neighborhood like Shimokitazawa, Yanaka, or Koenji." }
        ]
      })}} />
    </Layout>
  );
};

export default TokyoItinerary5Days;
