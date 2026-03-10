import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const JapanRailPass = () => {
  return (
    <Layout>
      <SEO
        title="JR Pass 2026: Price Breakdown & Is It Still Worth It?"
        description="The JR Pass jumped to ¥50,000. A licensed guide compares real route costs for Tokyo-Kyoto, Osaka & more. Find out if the pass saves you money in 2026."
        canonicalPath="/blog/japan-rail-pass-worth-it"
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/hakone-lake-ashi-fuji.jpg"
          alt="Lake Ashi and Mt. Fuji in Hakone, a popular JR Pass day trip from Tokyo"
          className="w-full h-full object-cover"
          loading="eager"
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
                src="/images/blog/shinkansen-n700-tokyo-station.jpg"
                alt="N700 Series Shinkansen bullet train at a station platform in Japan"
                loading="lazy"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                The N700 Series Shinkansen — the backbone of Japan's high-speed rail network covered by the JR Pass
              </figcaption>
            </figure>

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
              Remember: the JR Pass covers the Hikari and Kodama Shinkansen but NOT the Nozomi or Mizuho (the fastest trains on the Tokaido/Sanyo line). The Hikari gets you to Kyoto in 2 hours 20 minutes vs. the Nozomi's 2 hours 15 minutes, barely any difference.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              When the JR Pass IS Worth It (With Example Itineraries)
            </h2>
            <figure className="my-8">
              <img
                src="/images/blog/fushimi-inari-senbon-torii-kyoto.jpg"
                alt="Thousands of vermillion torii gates forming a tunnel at Fushimi Inari Shrine in Kyoto"
                loading="lazy"
                className="w-full rounded-lg"
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
                src="/images/blog/kinkakuji-golden-pavilion-kyoto.jpg"
                alt="Kinkaku-ji, the Golden Pavilion temple reflecting on a pond in Kyoto, Japan"
                loading="lazy"
                className="w-full rounded-lg"
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

            <h2 className="heading-section text-foreground mt-12 mb-6">
              When the JR Pass Is NOT Worth It
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tokyo-only trips:</strong> If you're staying in Tokyo for your entire visit, the JR Pass makes no sense. Tokyo's subway and metro systems (which the JR Pass doesn't cover) do most of the heavy lifting. Your daily JR usage in Tokyo might be ¥500–1,000.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Simple Tokyo → Kyoto → Tokyo round trip:</strong> Total Shinkansen cost: ¥27,700. The pass costs ¥50,000. You'd need ¥22,300 in additional JR rides to break even, which is unlikely unless you're doing multiple day trips.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Short stays (3–4 days):</strong> Even with a 7-day pass, if you're only traveling for half the window, you won't use enough rides to justify the cost. Individual tickets are almost always cheaper for short trips.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Itineraries using non-JR trains:</strong> Many popular routes use non-JR operators: the Odakyu Line to Hakone, the Tobu Line to Nikko, the Kintetsu Line in the Kansai region. The JR Pass doesn't cover these. If your itinerary relies heavily on private railways, the pass loses value.
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
                src="/images/blog/jr-okachimachi-station-entrance.jpg"
                alt="JR Okachimachi Station entrance in Tokyo showing the JR logo and ticket gates"
                loading="lazy"
                className="w-full rounded-lg"
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
              For planning your Tokyo itinerary specifically, check my{" "}
              <Link to="/blog/tokyo-itinerary-5-days" className="text-accent hover:underline">5-day Tokyo itinerary</Link>{" "}
              and{" "}
              <Link to="/blog/best-time-to-visit-tokyo" className="text-accent hover:underline">best time to visit Tokyo</Link>{" "}
              guides, which cover transportation logistics in detail.
            </p>

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
                    You can buy the JR Pass online through the official JR Pass website or authorized agents before arriving in Japan. You can also buy it at major JR stations in Japan (Tokyo, Osaka, Kyoto, airports), though it's slightly more convenient to arrange it before your trip. You'll need your passport for purchase and activation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Can I buy the JR Pass in Japan?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes. Since 2023, you can purchase the JR Pass at major JR stations and airports in Japan. The price is the same as buying online. You'll activate it at a JR ticket office by showing your passport and choosing your start date.
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
                    No. The JR Pass covers the Hikari and Kodama trains on the Tokaido/Sanyo Shinkansen, but not the Nozomi or Mizuho (the fastest services). In practice, the Hikari is only 5–10 minutes slower than the Nozomi on most routes, so this limitation is minor.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Japan Rail Pass in 2026: Is It Actually Worth It? (With Real Numbers)",
        description: "The JR Pass price went up significantly. Is it still worth buying? A licensed guide does the math for common itineraries.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-07", dateModified: "2026-03-07",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/japan-rail-pass-worth-it" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Where do I buy the Japan Rail Pass?", acceptedAnswer: { "@type": "Answer", text: "Online through the official JR Pass website or at major JR stations and airports in Japan. You need your passport." }},
          { "@type": "Question", name: "Can I buy the JR Pass in Japan?", acceptedAnswer: { "@type": "Answer", text: "Yes, at major JR stations and airports since 2023. Same price as online." }},
          { "@type": "Question", name: "What's the difference between IC card and JR Pass?", acceptedAnswer: { "@type": "Answer", text: "IC cards are pay-per-ride cards for all transit. JR Pass is unlimited but only covers JR trains. Most travelers need both." }},
          { "@type": "Question", name: "Does the JR Pass cover the Nozomi Shinkansen?", acceptedAnswer: { "@type": "Answer", text: "No. It covers Hikari and Kodama, which are only 5–10 minutes slower on most routes." }}
        ]
      })}} />
    </Layout>
  );
};

export default JapanRailPass;
