import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";
import { QuickAnswer } from "@/components/blog/QuickAnswer";

const ToyosuVsTsukijiOuter = () => {
  return (
    <Layout>
      <SEO
        title="Toyosu vs Tsukiji Outer Market 2026: Which to Visit?"
        description="Toyosu (modern wholesale market with tuna auction) vs Tsukiji Outer Market (460+ retail stalls in 2026). A licensed Tokyo guide compares both, with hours, costs, and a same-morning itinerary."
        canonicalPath="/blog/toyosu-vs-tsukiji-outer"
        hreflang={[
          { lang: "en", path: "/blog/toyosu-vs-tsukiji-outer" },
          { lang: "es", path: "/es/blog/toyosu-vs-tsukiji-exterior" },
          { lang: "x-default", path: "/blog/toyosu-vs-tsukiji-outer" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Toyosu vs Tsukiji Outer Market" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/tsukiji-fresh-tuna-display.webp"
          imageAlt="Toyosu wholesale market and Tsukiji Outer Market — the two places to see Tokyo seafood in 2026"
          eyebrow="Food Guides · Tokyo"
          title="Toyosu Market vs Tsukiji Outer Market: Which to Visit in 2026?"
          subtitle="A licensed Tokyo guide's honest 2026 comparison of the wholesale market and the retail food street, with hours, costs, and a same-morning combo plan."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Quick decision", href: "#section-01-quick-decision" },
                { num: "02", label: "What each one is in 2026", href: "#section-02-what-each-is" },
                { num: "03", label: "Side-by-side comparison", href: "#section-03-comparison" },
                { num: "04", label: "When Toyosu wins", href: "#section-04-toyosu-wins" },
                { num: "05", label: "When Tsukiji Outer wins", href: "#section-05-tsukiji-wins" },
                { num: "06", label: "Same-morning combo plan", href: "#section-06-combo-plan" },
                { num: "07", label: "FAQ", href: "#section-07-faq" },
              ]} />

              <article>
                <QuickAnswer
                  answer="In 2026, Toyosu and Tsukiji Outer Market are the two main fish-market experiences in Tokyo, and they are complementary, not interchangeable. Toyosu is the wholesale operation: tuna auction (lottery only), serious sushi breakfast, modern facility, glass-walled visitor flow. Tsukiji Outer is the retail food street: 460+ shops and stalls, no reservation, peak around 8 AM, and the closest thing to the old pre-2018 Tsukiji vibe. For most travelers, pick Tsukiji Outer. For dedicated food fans, do both in one morning — the auction at 5:30 AM, then breakfast at the Outer Market 90 minutes later."
                  hook="If you want a 2026-specific decision (not the generic 'Tsukiji vs Toyosu' framing where 'Tsukiji' is ambiguous), this is the article. Below: hours that are actually current, the cost breakdown, and the exact route between them."
                />

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  When clients have already learned that the Inner Market moved to Toyosu in 2018, the question gets sharper: <strong>Toyosu or Tsukiji Outer Market in 2026?</strong> This is no longer a "what is Tsukiji" question — it's a real choice between two open, very different food destinations. So this is the comparison I give those clients.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm Manabu, a nationally licensed Tokyo guide. I've watched the Toyosu auction more times than I can count and I move through Tsukiji Outer Market most weeks with private tour groups. They serve different needs and reward different types of traveler. The good news: they are 20–25 minutes apart on the train, and you can see both in one morning if you're willing to start early.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  This piece is the 2026-specific decision guide — what's open, what costs what, and which one fits your trip. For the broader history of why Tsukiji has two markets in the first place, see my <Link to="/blog/tsukiji-outer-vs-inner-market" className="text-accent hover:underline">Tsukiji Outer vs Inner</Link> guide. For the older "Tsukiji as a whole" framing, see my <Link to="/blog/tsukiji-vs-toyosu" className="text-accent hover:underline">Tsukiji vs Toyosu</Link> comparison.
                </p>

                <div className="section-eyebrow"><span>Section 01 · Quick decision</span></div>
                <h2 id="section-01-quick-decision" className="scroll-mt-20">
                  Quick decision: which one fits your morning?
                </h2>
                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">Wholesale + auction</p>
                    <p className="choice-title">Choose Toyosu if…</p>
                    <ul>
                      <li>You won (or are applying for) the tuna-auction lottery.</li>
                      <li>You want a serious sushi breakfast at a restaurant with real wholesale supply.</li>
                      <li>You like clean, modern facilities and don't mind glass barriers.</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">Retail + street food</p>
                    <p className="choice-title">Choose Tsukiji Outer if…</p>
                    <ul>
                      <li>You want food variety, no reservation, and no 4 AM alarm.</li>
                      <li>You like browsing knives, ceramics, dried goods, and tea shops.</li>
                      <li>You're combining the morning with a 15-minute walk into Ginza.</li>
                    </ul>
                  </div>
                </div>

                <div className="section-eyebrow"><span>Section 02 · What each is</span></div>
                <h2 id="section-02-what-each-is" className="scroll-mt-20">
                  What each one is in 2026
                </h2>

                <h3 className="scroll-mt-20">Toyosu Market — wholesale, auction, modern</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Toyosu opened in October 2018 on a man-made island in Tokyo Bay and is now Tokyo's official wholesale fish market. It's a massive complex of three buildings connected by elevated covered walkways from Shijo-mae Station on the Yurikamome Line. The visitor experience runs through enclosed glass-walled corridors above the wholesale floor, plus a row of about 40 sit-down restaurants and a famous tuna-auction viewing deck.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  General visitor hours are roughly 5:00 AM to 5:00 PM, Monday through Saturday, with closures on Sundays, public holidays, and select Wednesdays following the wholesale calendar. The auction itself happens from about 5:30 AM to 6:30 AM on business days; <span className="hl-gold">viewing the auction requires winning a monthly online lottery</span> with only around 100 spots per day. In February 2024, a new visitor complex called <em>Senkyaku Banrai</em> opened across the street with around 70 restaurants and shops plus a hot-spring spa, giving Toyosu more reason to visit even without an auction ticket.
                </p>

                <h3 className="scroll-mt-20">Tsukiji Outer Market — retail, street food, traditional</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tsukiji's Outer Market is the 460+ shop neighborhood that grew up around the old Inner Wholesale Market over decades. When the Inner Market relocated to Toyosu in 2018, the Outer Market stayed exactly where it was. Today it's the closest thing to the old pre-2018 Tsukiji vibe, with narrow lanes packed with sushi counters, tamagoyaki vendors, knife shops, oyster stands, ceramics, dried goods, and tea shops.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Hours run roughly 5:00 AM to 2:00 PM, with each shop setting its own schedule. The peak window for visitors is 7:00–11:00 AM on weekdays. Most stalls close on Sundays and on select Wednesdays following the wholesale calendar — the official Tsukiji Outer Market site keeps a current calendar. No reservation is needed for anything except a handful of headline sushi restaurants. From central Tokyo, the closest station is Tsukiji on the Hibiya Line, a 2-minute walk from the market.
                </p>

                <div className="section-eyebrow"><span>Section 03 · Comparison</span></div>
                <h2 id="section-03-comparison" className="scroll-mt-20">
                  Side-by-side comparison
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="text-left p-4 font-serif font-medium text-foreground">Feature</th>
                        <th className="text-left p-4 font-serif font-medium text-foreground">Toyosu Market</th>
                        <th className="text-left p-4 font-serif font-medium text-foreground">Tsukiji Outer Market</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4 font-medium text-foreground">Status (2026)</td>
                        <td className="p-4 text-muted-foreground">Open since Oct 2018</td>
                        <td className="p-4 text-muted-foreground">Open; never moved</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Type</td>
                        <td className="p-4 text-muted-foreground">Wholesale + visitor floor</td>
                        <td className="p-4 text-muted-foreground">Retail + street food</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Vendors</td>
                        <td className="p-4 text-muted-foreground">~40 restaurants on visitor floor</td>
                        <td className="p-4 text-muted-foreground">~460 shops &amp; stalls</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Hours</td>
                        <td className="p-4 text-muted-foreground">5 AM–5 PM, Mon–Sat</td>
                        <td className="p-4 text-muted-foreground">~5 AM–2 PM (varies by shop)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Tuna auction</td>
                        <td className="p-4 text-muted-foreground">Yes — lottery only, 5:30 AM</td>
                        <td className="p-4 text-muted-foreground">No</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Reservation</td>
                        <td className="p-4 text-muted-foreground">Yes for auction; no for restaurants</td>
                        <td className="p-4 text-muted-foreground">None needed</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Atmosphere</td>
                        <td className="p-4 text-muted-foreground">Modern, clean, glass-walled</td>
                        <td className="p-4 text-muted-foreground">Bustling, narrow lanes, traditional</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Typical cost</td>
                        <td className="p-4 text-muted-foreground">Sushi meals ¥2,000–5,000+</td>
                        <td className="p-4 text-muted-foreground">Snacks ¥100–500; sushi ¥2,000–3,000</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Access</td>
                        <td className="p-4 text-muted-foreground">Yurikamome "Shijo-mae" (covered)</td>
                        <td className="p-4 text-muted-foreground">Hibiya Line "Tsukiji" (2 min walk)</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Best for</td>
                        <td className="p-4 text-muted-foreground">Tuna auction, sushi breakfast</td>
                        <td className="p-4 text-muted-foreground">Street food, shopping, atmosphere</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Time needed</td>
                        <td className="p-4 text-muted-foreground">1.5–2.5 hours</td>
                        <td className="p-4 text-muted-foreground">1.5–3 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="section-eyebrow"><span>Section 04 · When Toyosu wins</span></div>
                <h2 id="section-04-toyosu-wins" className="scroll-mt-20">
                  When Toyosu is the better choice
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  There are two situations where Toyosu clearly beats Tsukiji Outer Market. The first is when you specifically want to see the tuna auction. There is no other place in Tokyo to see it, full stop. If you've imagined a Tokyo trip with the auction at the center of it, you have to apply for the lottery a month before your travel dates and plan a 5:00 AM arrival at Shijo-mae Station. About 100 visitors per day are admitted; if you don't win, the visitor corridors above the intermediate wholesale area still give you a glimpse of how the market works, but it's significantly less dramatic.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The second situation is when you want a sushi breakfast at a restaurant with genuine wholesale supply. Several restaurants on Toyosu's visitor floor relocated from the old Tsukiji Inner Market and serve some of the city's best sushi at prices that are reasonable for what you get (¥2,000–5,000 for chef's-choice options). Lines for the famous spots can be 60+ minutes; lesser-known shops on the same floor are walk-in friendly and just as good.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The trade-off at Toyosu is sensory intimacy. The visitor flow is designed for hygiene and efficiency, which means glass barriers, signposted corridors, and no chance to talk directly to fishmongers or graze stall to stall. If your image of "Tokyo fish market" is the chaotic, smelly, sample-as-you-go version from documentaries, that's no longer at Toyosu. That's at the Outer Market.
                </p>

                <div className="section-eyebrow"><span>Section 05 · When Tsukiji Outer wins</span></div>
                <h2 id="section-05-tsukiji-wins" className="scroll-mt-20">
                  When Tsukiji Outer Market is the better choice
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tsukiji Outer Market is the better pick for the vast majority of visitors, and I say that as someone who genuinely respects what Toyosu is doing. The reasons are practical: no reservation, no 4 AM alarm, dramatically more food variety, and a sensory experience that actually feels like a market rather than a museum about a market.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Tsukiji Outer you can graze through tamagoyaki on a stick, fresh uni in a paper cup, grilled scallops basted in soy butter, oyster stands, wagyu skewers, and standing-sushi spots in any order you like. Most snacks run ¥100–500 a piece. Standing sushi for 8–10 pieces runs ¥2,000–3,000. There's nothing equivalent in scale or variety on Toyosu's visitor floor, where you're choosing one sit-down restaurant for one meal.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond the food, Tsukiji Outer is also where you'll find the famous knife shops that supply professional Tokyo kitchens, plus ceramics, lacquerware, dried katsuobushi (bonito flakes), kombu (kelp), and Japanese tea shops. None of that is at Toyosu in any meaningful way.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  And finally, geography. Tsukiji Outer is a 15-minute walk from Ginza, which makes it the natural front half of a half-day plan: market in the morning, Ginza for shopping or coffee in the late morning, lunch wherever you land. Toyosu is a 30+ minute round trip from central Tokyo on the Yurikamome and doesn't pair as cleanly with anything else most travelers want to see.
                </p>

                <div className="section-eyebrow"><span>Section 06 · Combo plan</span></div>
                <h2 id="section-06-combo-plan" className="scroll-mt-20">
                  Same-morning combo plan
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="hl-gold">Yes, you can do both in one morning</span> — and for serious food travelers, this is the right plan. The two markets are about 20–25 minutes apart by train, and their schedules complement each other.
                </p>
                <div className="route-timeline">
                  <div className="route-row">
                    <div className="route-time">5:00 AM</div>
                    <p className="route-desc">
                      <strong>Arrive at Toyosu (Shijo-mae Station).</strong> If you won the auction lottery, check in by 5:15 AM at the latest — bring your passport for ID verification. If not, the visitor corridors above the wholesale floor are still active.
                    </p>
                  </div>
                  <div className="route-row">
                    <div className="route-time">5:30–6:30 AM</div>
                    <p className="route-desc">
                      <strong>Watch the auction (or the wholesale floor).</strong> The auction itself runs about an hour. Take photos through the glass and appreciate the scale of Japan's seafood industry.
                    </p>
                  </div>
                  <div className="route-row">
                    <div className="route-time">6:45 AM</div>
                    <p className="route-desc">
                      <strong>Move to Tsukiji.</strong> The fastest option this early is a taxi direct from the auction to Tsukiji Outer Market — about 10–15 minutes and ¥1,500–2,000. Most subway lines aren't fully running yet at 6:45 AM. Later in the day the subway route is Yurikamome from Shijo-mae to Toyosu (1 stop, ~3 min) → Tokyo Metro Yurakucho Line to Shintomicho (2 stops, ~5 min) → 7-min walk to Tsukiji Outer Market.
                    </p>
                  </div>
                  <div className="route-row">
                    <div className="route-time">7:15–10:30</div>
                    <p className="route-desc">
                      <strong>Tsukiji Outer Market food crawl.</strong> This is where the real eating happens. Start with tamagoyaki, then standing sushi, then graze your way through whatever else looks good. Don't fill up on the first stall.
                    </p>
                  </div>
                  <div className="route-row">
                    <div className="route-time">10:30–11:30</div>
                    <p className="route-desc">
                      <strong>Walk into Ginza.</strong> Tsukiji to Ginza is a flat 15-minute walk via Harumi-dori. A natural next stop for coffee, shopping, or a slower mid-morning. See my <Link to="/blog/ginza-to-tsukiji-walking-route" className="text-accent hover:underline">Ginza–Tsukiji walking route</Link> for the reverse direction.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The catch is the wake-up. You'll need to leave your hotel by around 4:30 AM, which means going to bed early the night before. Most clients tell me afterwards the early start was absolutely worth it. If you can't face a 4:30 AM wake-up, skip Toyosu entirely and just do Tsukiji Outer at 8:00 AM. It's still the better market for most travelers.
                </p>

                <div className="bg-secondary/50 rounded-lg p-8 mt-12 cta-block">
                  <h2 className="text-foreground mb-4 !text-[1.75rem] md:!text-[2rem] !leading-[1.2]">
                    Want a guide to run this morning with you?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    On my Tsukiji &amp; Ginza tour, I take you through the Outer Market the way I move through it myself — best stalls, no tourist traps, and a clean walk into Ginza afterwards. If you want to combine with a Toyosu auction visit, I can help with the lottery application and meet you in Tsukiji after the auction.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/tours/tsukiji-ginza" className="btn-accent">
                      Tsukiji &amp; Ginza Tour
                    </Link>
                    <Link to="/tours/tokyo-food-tour" className="btn-outline">
                      Tokyo Food Tour
                    </Link>
                  </div>
                </div>

                <div className="mt-16 faq-block">
                  <div className="section-eyebrow"><span>Section 07 · FAQ</span></div>
                  <h2 id="section-07-faq" className="scroll-mt-20">Frequently Asked Questions</h2>
                  <div className="faq-block space-y-8">
                    <div>
                      <h3 className="scroll-mt-20">Is Tsukiji Outer Market still worth visiting in 2026?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Yes — and for most travelers it's the more memorable of the two markets. Tsukiji Outer Market has 460+ shops and stalls, no reservation requirement, and a sensory atmosphere that Toyosu's modern visitor floor can't replicate. It's also a 15-minute walk from Ginza, which makes it easy to combine with shopping or a lunch elsewhere.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">How do I apply for the Toyosu tuna auction lottery?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Apply online roughly one month before your visit through the official Toyosu Market lottery site. The application window opens for about a week each month for spots in the following month. You select three preferred dates; if selected, you'll be assigned one. Only about 100 visitors are admitted per auction day, viewing happens around 5:30 AM, and you'll need to bring your passport or ID for check-in.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">Can I visit Toyosu without winning the lottery?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Yes. During regular hours (5 AM–5 PM, Monday through Saturday), you can walk through the visitor corridors above the intermediate wholesale area without any reservation. You'll see vendors at work and get a sense of the scale of the operation, but you won't see the main tuna auction floor — that's lottery-only. The visitor restaurants on the upper floor are also open without reservation.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">Is Tsukiji Outer Market open on Sundays?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        No — most stalls are closed on Sundays. Tsukiji Outer is also closed on select Wednesdays following the wholesale calendar (not every Wednesday). The official Tsukiji Outer Market website (tsukiji.or.jp) keeps a current calendar of closed days, and your hotel concierge can confirm specific dates. For the best experience, plan your visit on a Tuesday, Thursday, or Friday morning.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-12">
                  Last updated: May 2026
                </p>
              </article>

              <BlogArticleAside
                guideNote="My default plan with food clients: Tsukiji Outer at 8 AM. We add a Toyosu dawn visit only if the auction lottery is in hand."
                glance={[
                  { label: "Best for most", value: "Tsukiji Outer Market" },
                  { label: "Best for auction", value: "Toyosu (lottery)" },
                  { label: "No reservation", value: "Tsukiji Outer" },
                  { label: "Best combo", value: "Toyosu 5:30 AM → Tsukiji 7:30 AM" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      <RelatedTourCards tourIds={["tsukiji-ginza", "tokyo-food-tour"]} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Toyosu Market vs Tsukiji Outer Market: Which to Visit in 2026?",
        description: "Toyosu (modern wholesale market with tuna auction) vs Tsukiji Outer Market (460+ retail stalls in 2026). A licensed Tokyo guide compares both with hours, costs, and a same-morning itinerary.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-05-09", dateModified: "2026-05-09",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/toyosu-vs-tsukiji-outer" }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is Tsukiji Outer Market still worth visiting in 2026?", acceptedAnswer: { "@type": "Answer", text: "Yes — and for most travelers it's the more memorable of the two markets. Tsukiji Outer Market has 460+ shops and stalls, no reservation requirement, and a sensory atmosphere that Toyosu's modern visitor floor can't replicate. It's also a 15-minute walk from Ginza." }},
          { "@type": "Question", name: "How do I apply for the Toyosu tuna auction lottery?", acceptedAnswer: { "@type": "Answer", text: "Apply online roughly one month before your visit through the official Toyosu Market lottery site. The application window opens for about a week each month. You select three preferred dates; if selected you'll be assigned one. Only about 100 visitors are admitted per auction day and viewing happens around 5:30 AM. Bring your passport for check-in." }},
          { "@type": "Question", name: "Can I visit Toyosu without winning the lottery?", acceptedAnswer: { "@type": "Answer", text: "Yes. During regular hours (5 AM–5 PM, Monday through Saturday), you can walk through visitor corridors above the intermediate wholesale area without reservation. You won't see the main tuna auction floor — that's lottery-only — but the visitor restaurants on the upper floor are open without reservation." }},
          { "@type": "Question", name: "Is Tsukiji Outer Market open on Sundays?", acceptedAnswer: { "@type": "Answer", text: "No — most stalls are closed on Sundays. Tsukiji Outer is also closed on select Wednesdays following the wholesale calendar (not every Wednesday). The official Tsukiji Outer Market website keeps a current calendar of closed days. Plan your visit on a Tuesday, Thursday, or Friday morning for the best experience." }}
        ]
      })}} />
    </Layout>
  );
};

export default ToyosuVsTsukijiOuter;
