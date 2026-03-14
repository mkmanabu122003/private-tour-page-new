import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { ArticleFooterCTA } from "@/components/blog/ArticleFooterCTA";
import { InlineCTA } from "@/components/blog/InlineCTA";

const JapanRailPass = () => {
  return (
    <Layout>
      <SEO
        title="JR Pass 2026: Price Breakdown & Is It Still Worth It?"
        description="JR Pass 2026 price increase: from ¥29,650 to ¥50,000. A licensed guide breaks down which itineraries still make it worth buying — and budget alternatives."
        canonicalPath="/blog/japan-rail-pass-worth-it"
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/hakone-lake-ashi-fuji.webp"
          alt="Lake Ashi and Mt. Fuji in Hakone, a popular JR Pass day trip from Tokyo"
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
              Japan Rail Pass in 2026: Is It Actually Worth It? (With Real Numbers)
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />Manabu, Licensed Tour Guide</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />March 7, 2026</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) who helps clients plan logistics for 500+ tours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              "Should I get the Japan Rail Pass?" is the second most common question I get from clients, right after "when should I visit?" And unlike the timing question, this one has a definitive mathematical answer, if you're willing to sit down with the actual numbers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The JR Pass underwent a significant price increase in October 2023, roughly 70% higher than the old price. A 7-day Ordinary pass now costs ¥50,000 (approximately $330 USD). This change flipped the calculation for a lot of travelers. Routes and itineraries that used to make the pass an obvious bargain now require more careful math.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm going to do that math for you, using real 2026 prices and the itineraries my clients actually travel. No affiliate links, no sponsored content. Just honest numbers from someone who helps travelers plan these trips every week.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Why the JR Pass Question Is More Complicated Now
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before the 2023 price increase, the Japan Rail Pass was worth it for almost any trip that included a round-trip Tokyo–Kyoto journey. The old 7-day pass cost ¥29,650, and a single round-trip Hikari ticket between Tokyo and Kyoto cost about ¥27,700. The math was simple: if you're going to Kyoto and back, get the pass.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At the new price of ¥50,000, that calculus changed. A round-trip Hikari Shinkansen between Tokyo and Kyoto costs about ¥27,700 (¥13,850 each way). The Nozomi is slightly more expensive at ¥14,170 each way, but the JR Pass doesn't cover it — only the Hikari (which is just 5 minutes slower). So the pass saves you nothing on a simple Tokyo–Kyoto round trip. You need additional travel to justify the cost.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Japan Rail Pass is still worth it for some itineraries. But "some" is doing more work than it used to. Let me show you exactly when it pays off and when it doesn't.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/shinkansen-n700-tokyo-station.webp"
                alt="N700 Series Shinkansen bullet train at a station platform in Japan"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                The N700 Series Shinkansen — the backbone of Japan's high-speed rail network covered by the JR Pass
              </figcaption>
            </figure>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              JR Pass Price Changes in 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The last JR Pass price increase took effect in October 2023 — a nearly 70% jump that fundamentally changed the math for travelers. As of March 2026, those prices remain unchanged. Here is a complete side-by-side comparison so you can see exactly how much the increase affected each pass type.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-muted-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Pass Type</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Before Oct 2023</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Current 2026 Price</th>
                    <th className="text-left py-3 text-foreground font-medium">% Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">7-day Ordinary</td>
                    <td className="py-3 pr-4">¥29,650</td>
                    <td className="py-3 pr-4">¥50,000</td>
                    <td className="py-3">+69%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">14-day Ordinary</td>
                    <td className="py-3 pr-4">¥47,250</td>
                    <td className="py-3 pr-4">¥80,000</td>
                    <td className="py-3">+69%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">21-day Ordinary</td>
                    <td className="py-3 pr-4">¥60,450</td>
                    <td className="py-3 pr-4">¥100,000</td>
                    <td className="py-3">+65%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">7-day Green Car</td>
                    <td className="py-3 pr-4">¥39,600</td>
                    <td className="py-3 pr-4">¥70,000</td>
                    <td className="py-3">+77%</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">14-day Green Car</td>
                    <td className="py-3 pr-4">¥64,120</td>
                    <td className="py-3 pr-4">¥113,000</td>
                    <td className="py-3">+76%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">21-day Green Car</td>
                    <td className="py-3 pr-4">¥83,390</td>
                    <td className="py-3 pr-4">¥143,000</td>
                    <td className="py-3">+71%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What this means in practice:</strong> at the old price, a single Tokyo–Kyoto round trip (¥27,700) almost paid for the 7-day pass. At ¥50,000, that same round trip covers only 55% of the pass cost. You now need two or more Shinkansen legs — plus local JR rides — to break even.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The pass still offers real value for multi-city itineraries. For Tokyo–Kyoto–Osaka–Hiroshima in 7 days, the numbers still work in its favor. But "when in doubt, buy it" is no longer sound advice. The sections below show you exactly which itineraries tip the scale — and budget-friendly alternatives when yours does not.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              How to Calculate If It's Worth It for Your Trip
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The formula is straightforward: add up the cost of every JR train ride you'd take during your 7-day (or 14-day/21-day) pass window. If the total exceeds the pass price, buy it. If not, buy individual tickets.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Key prices to know (2026, one-way, reserved seat):
            </p>
            <ul className="space-y-2 mb-8">
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Tokyo → Kyoto (Hikari):</strong> ¥13,850</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Tokyo → Osaka (Hikari):</strong> ¥14,400</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Tokyo → Hiroshima (Hikari + Sakura):</strong> ¥18,910</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Kyoto → Hiroshima (Sakura):</strong> ¥11,300</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Tokyo → Kanazawa (Hakutaka):</strong> ¥14,180</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Tokyo → Nikko (JR + Tobu):</strong> ~¥2,800 (JR portion only)</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Tokyo → Kamakura (JR):</strong> ¥940</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Remember: the JR Pass covers the Hikari and Kodama Shinkansen. For the Nozomi or Mizuho (the fastest trains), you'll need to purchase a supplementary ticket (about ¥4,960 for Tokyo–Kyoto). In practice, the Hikari gets you to Kyoto in about 2 hours 20 minutes vs. the Nozomi's 2 hours 15 minutes — barely any difference, so most travelers simply take the Hikari.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              When the JR Pass IS Worth It (With Example Itineraries)
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/fushimi-inari-senbon-torii-kyoto.webp"
                alt="Thousands of vermillion torii gates forming a tunnel at Fushimi Inari Shrine in Kyoto"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                The iconic senbon torii at Fushimi Inari, Kyoto — one of the top reasons travelers take the Shinkansen from Tokyo
              </figcaption>
            </figure>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Classic Route: Tokyo → Kyoto → Osaka → Hiroshima → Tokyo</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Individual ticket costs: Tokyo→Kyoto (¥13,850) + Kyoto→Hiroshima (¥11,300) + Hiroshima→Tokyo (¥18,910) = <strong className="text-foreground">¥44,060</strong>. Add local JR rides in each city and the total easily exceeds the ¥50,000 pass price. <strong className="text-foreground">Verdict: worth it.</strong>
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/kinkakuji-golden-pavilion-kyoto.webp"
                alt="Kinkaku-ji, the Golden Pavilion temple reflecting on a pond in Kyoto, Japan"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Kinkaku-ji (Golden Pavilion) in Kyoto — the classic route from Tokyo makes the JR Pass pay for itself
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Multi-City: Tokyo → Kanazawa → Kyoto → Tokyo</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tokyo→Kanazawa (¥14,180) + Kanazawa→Kyoto (¥7,720) + Kyoto→Tokyo (¥13,850) = <strong className="text-foreground">¥35,750</strong> in Shinkansen alone. Add Tokyo-area JR rides (Kamakura day trip: ¥1,880 round-trip, airport Narita Express: ¥3,070–3,250) and you're at ¥40,700+. Getting close to ¥50,000 but may not exceed it. <strong className="text-foreground">Verdict: borderline. Calculate your specific JR rides carefully.</strong>
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Extended: Tokyo → Kyoto → Osaka → Kanazawa → Tokyo (+ day trips)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Any itinerary with three or more Shinkansen legs plus local JR rides will almost certainly exceed ¥50,000. If you're doing the "Golden Route" with side trips, the 7-day pass pays for itself. <strong className="text-foreground">Verdict: definitely worth it.</strong>
            </p>

            <InlineCTA message="Need help planning your Japan logistics?" href="/contact" />

            <h2 className="heading-section text-foreground mt-12 mb-6">
              When the JR Pass Is NOT Worth It
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tokyo-only trips:</strong> If you're staying in Tokyo for your entire visit, the JR Pass makes no sense. Tokyo's subway and metro systems (which the JR Pass doesn't cover) do most of the heavy lifting. Your daily JR usage in Tokyo might be ¥500–1,000. Instead, invest your budget in experiences like a{" "}
                <Link to="/tours/tokyo-food-tour" className="text-accent hover:underline">private food tour</Link> to discover local culinary gems beyond the guidebooks.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Simple Tokyo → Kyoto → Tokyo round trip:</strong> Total Shinkansen cost: ¥27,700. The pass costs ¥50,000. You'd need ¥22,300 in additional JR rides to break even, which is unlikely unless you're doing multiple day trips.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Short stays (3–4 days):</strong> Even with a 7-day pass, if you're only traveling for half the window, you won't use enough rides to justify the cost. Individual tickets are almost always cheaper for short trips.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Itineraries using non-JR trains:</strong> Many popular routes use non-JR operators: the Odakyu Line to Hakone, the Tobu Line to Nikko, the Kintetsu Line in the Kansai region. The JR Pass doesn't cover these. If your itinerary relies heavily on private railways, the pass loses value. For day trips like{" "}
                <Link to="/tours/nikko-day-trip" className="text-accent hover:underline">Nikko</Link>, where transport logistics can be complex, a{" "}
                <Link to="/tours/nikko-day-trip" className="text-accent hover:underline">guided day trip</Link> handles all the transfers and lets you focus on the experience.
              </li>
            </ul>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Alternatives to the JR Pass
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If the nationwide JR Pass doesn't make sense for your trip, consider these alternatives:
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/jr-okachimachi-station-entrance.webp"
                alt="JR Okachimachi Station entrance in Tokyo showing the JR logo and ticket gates"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                A typical JR station in central Tokyo — IC cards work seamlessly at every gate
              </figcaption>
            </figure>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Regional JR Passes:</strong> JR East, JR West, and JR Central offer regional passes that are cheaper and cover specific areas. The JR East Nagano/Niigata pass, the JR West Kansai Area pass, and the JR Tohoku pass are all significantly less than the nationwide pass and perfect for focused regional travel.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">IC Cards (Suica/Pasmo):</strong> For travel within Tokyo and short trips to places like Kamakura or Yokohama, an IC card is all you need. Tap on, tap off, pay only for what you ride. No commitment, no calculation needed. I tell all my clients to get one regardless of whether they also buy a JR Pass.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Individual Shinkansen tickets:</strong> If you're making one or two long-distance trips, buying individual tickets is often cheaper than the pass. SmartEX (an app for booking Shinkansen tickets) sometimes offers early-bird discounts.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Highway buses:</strong> For budget travelers, overnight highway buses between Tokyo and Kyoto/Osaka cost ¥3,000–6,000, a fraction of the Shinkansen price. They're comfortable, safe, and save you a night of hotel costs. Not glamorous, but extremely practical.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Budget traveler strategy:</strong> the most cost-effective setup for most Tokyo-focused trips is a loaded Suica card for local transit, one or two individually purchased Shinkansen tickets booked through SmartEX for any long-distance hops, and overnight highway buses if you are flexible on timing. This combination will almost always beat the ¥50,000 pass cost unless you are traveling a classic multi-city Golden Route. A{" "}
              <Link to="/tours" className="text-accent hover:underline">private guided tour</Link>{" "}
              is another smart way to get expert local access without the overhead of pass logistics — all transportation is handled for you.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              For planning your Tokyo itinerary specifically, check my{" "}
              <Link to="/blog/tokyo-itinerary-5-days" className="text-accent hover:underline">5-day Tokyo itinerary</Link>{" "}
              and{" "}
              <Link to="/blog/best-time-to-visit-tokyo" className="text-accent hover:underline">best time to visit Tokyo</Link>{" "}
              guides, which cover transportation logistics in detail.
            </p>

            {/* Related Tours */}
            <div className="mt-16 border-t pt-12">
              <h2 className="heading-section text-foreground mb-4">
                Explore Tokyo With a Local Guide
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While the JR Pass gets you across Japan, the best Tokyo experiences happen on foot. Our private walking tours reveal the stories, flavors, and hidden corners that make Tokyo unforgettable.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="text-muted-foreground leading-relaxed">
                  <Link to="/tours/tokyo-food-tour" className="text-accent hover:underline font-medium">Tokyo Food Tour</Link> — Tsukiji, Ginza & beyond
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <Link to="/tours/nikko-day-trip" className="text-accent hover:underline font-medium">Nikko Day Trip</Link> — Shrines, nature & Edo history
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <Link to="/tours/tsukiji-ginza" className="text-accent hover:underline font-medium">Tsukiji & Ginza Walk</Link> — Markets, culture & cuisine
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Need help planning your Japan logistics?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                On my private tours, I handle all the transportation planning so you don't have to worry about train passes, transfers, or schedules. Browse my tours or get in touch for custom planning advice.
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
                  <h3 className="text-lg font-medium text-foreground mb-2">Where do I buy the Japan Rail Pass?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Since October 2023, the nationwide JR Pass can only be purchased online through the official JR Pass website or authorized agents. After purchasing online, you pick it up at a designated JR ticket office counter by showing your passport and choosing your start date. Note that regional JR passes (JR East Pass, JR West Pass, etc.) can still be purchased at station counters.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">What's the difference between an IC card and the JR Pass?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    An IC card (Suica or Pasmo) is a rechargeable transit card that works on virtually all trains, buses, and subways in Japan. You pay per ride. The JR Pass is an unlimited travel pass that covers only JR-operated trains. Most Tokyo travelers need an IC card regardless of whether they also have a JR Pass, because the JR Pass doesn't cover Tokyo Metro or private railway lines.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Does the JR Pass cover the Nozomi Shinkansen?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Not by default. However, since October 2023, JR Pass holders can purchase a supplementary "Nozomi/Mizuho Ticket" to ride these fastest trains. The supplement costs approximately ¥4,960 for Tokyo–Kyoto. Without the supplement, use the Hikari, which is only about 5 minutes slower on the same route.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Did the JR Pass price increase again in 2026?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No. As of March 2026, JR Pass prices remain at the levels set in October 2023. The last increase was approximately 70% — from ¥29,650 to ¥50,000 for the 7-day Ordinary pass. There are no officially announced increases for 2026. Always verify the latest prices on the official JR Pass website before purchasing.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is the JR Pass still worth buying after the 2023 price increase?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes — but only for the right itinerary. For multi-city routes covering Tokyo, Kyoto, Osaka, and Hiroshima in 7 days, the math still works in the pass's favor. For Tokyo-focused trips or itineraries with just one or two Shinkansen legs, individual tickets or regional passes are usually cheaper. Use the calculation approach in this article rather than buying the pass "just in case."
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">What are the cheapest ways to travel Japan without the JR Pass?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For budget travelers, the best alternatives are: (1) a Suica IC card for all local and metro travel, (2) individual Shinkansen tickets booked via SmartEX for long-distance trips — early bookings can include discounts, (3) overnight highway buses between Tokyo and Osaka/Kyoto for ¥3,000–6,000, and (4) regional JR passes (like the JR Kansai Area Pass from ¥2,400) if your trip is concentrated in one region. A{" "}
                    <Link to="/tours" className="text-accent hover:underline">private guided tour</Link>{" "}
                    removes the logistics entirely — transportation planning is handled as part of the experience.
                  </p>
                </div>
              </div>
            </div>
            <ArticleFooterCTA />
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["nikko-day-trip","tokyo-food-tour","tsukiji-ginza"]} showViewAll />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Japan Rail Pass in 2026: Is It Actually Worth It? (With Real Numbers)",
        description: "The JR Pass price went up significantly. Is it still worth buying? A licensed guide does the math for common itineraries.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-07", dateModified: "2026-03-14",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/japan-rail-pass-worth-it" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Where do I buy the Japan Rail Pass?", acceptedAnswer: { "@type": "Answer", text: "Since October 2023, the nationwide JR Pass can only be purchased online through the official website or authorized agents. You pick it up at a JR ticket office with your passport." }},
          { "@type": "Question", name: "What's the difference between IC card and JR Pass?", acceptedAnswer: { "@type": "Answer", text: "IC cards are pay-per-ride cards for all transit. JR Pass is unlimited but only covers JR trains. Most travelers need both." }},
          { "@type": "Question", name: "Does the JR Pass cover the Nozomi Shinkansen?", acceptedAnswer: { "@type": "Answer", text: "Not by default. Since October 2023, JR Pass holders can purchase a supplementary Nozomi/Mizuho Ticket (about ¥4,960 for Tokyo–Kyoto). Without the supplement, use the Hikari, which is only about 5 minutes slower." }},
          { "@type": "Question", name: "Did the JR Pass price increase again in 2026?", acceptedAnswer: { "@type": "Answer", text: "No. As of March 2026, JR Pass prices remain at the levels set in October 2023. The last increase was approximately 70% — from ¥29,650 to ¥50,000 for the 7-day Ordinary pass. There are no officially announced increases for 2026." }},
          { "@type": "Question", name: "Is the JR Pass still worth buying after the 2023 price increase?", acceptedAnswer: { "@type": "Answer", text: "Yes, but only for the right itinerary. For multi-city routes covering Tokyo, Kyoto, Osaka, and Hiroshima in 7 days, the math still works. For Tokyo-focused trips with one or two Shinkansen legs, individual tickets or regional passes are usually cheaper." }},
          { "@type": "Question", name: "What are the cheapest ways to travel Japan without the JR Pass?", acceptedAnswer: { "@type": "Answer", text: "Best budget alternatives: a Suica IC card for local travel, individual Shinkansen tickets via SmartEX for long-distance trips, overnight highway buses for ¥3,000–6,000, and regional JR passes like the JR Kansai Area Pass from ¥2,400." }}
        ]
      })}} />
    </Layout>
  );
};

export default JapanRailPass;
