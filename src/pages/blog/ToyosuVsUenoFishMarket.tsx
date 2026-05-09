import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";
import { QuickAnswer } from "@/components/blog/QuickAnswer";

const ToyosuVsUenoFishMarket = () => {
  return (
    <Layout>
      <SEO
        title="Toyosu vs Ueno Market 2026: Which Tokyo Fish Market?"
        description="Toyosu (real wholesale market, tuna auction) vs Ueno's Ameyoko (open-air street with seafood stalls and izakaya). A licensed Tokyo guide compares both."
        canonicalPath="/blog/toyosu-vs-ueno-fish-market"
        hreflang={[
          { lang: "en", path: "/blog/toyosu-vs-ueno-fish-market" },
          { lang: "es", path: "/es/blog/toyosu-vs-ueno-mercado-pescado" },
          { lang: "x-default", path: "/blog/toyosu-vs-ueno-fish-market" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Toyosu vs Ueno Fish Market" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/toyosu-senkyaku-banrai.webp"
          imageAlt="Toyosu and Ueno Ameyoko — two very different ways to see seafood in Tokyo"
          eyebrow="Food Guides · Tokyo"
          title="Toyosu vs Ueno Market: Which Tokyo Fish Market Should You Visit?"
          subtitle="A licensed guide's honest comparison of Tokyo's wholesale tuna market and Ueno's open-air seafood street, with hours, costs, and who each one actually fits."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Quick decision", href: "#section-01-quick-decision" },
                { num: "02", label: "What each market actually is", href: "#section-02-what-each-market-is" },
                { num: "03", label: "Side-by-side comparison", href: "#section-03-comparison" },
                { num: "04", label: "When to choose Toyosu", href: "#section-04-when-toyosu" },
                { num: "05", label: "When to choose Ameyoko", href: "#section-05-when-ameyoko" },
                { num: "06", label: "How to get to each", href: "#section-06-getting-there" },
                { num: "07", label: "FAQ", href: "#section-07-faq" },
              ]} />

              <article>
                <QuickAnswer
                  answer="They are not the same kind of place. Toyosu is the actual wholesale fish market for Tokyo — that's where the tuna auction happens, where restaurants source their fish, and where you go if you want to see the supply chain itself. Ueno's Ameyoko is not a fish market at all in the technical sense. It's a 500+ shop open-air shopping street running under the JR tracks between Ueno and Okachimachi, and seafood is just one of many things sold there. Pick Toyosu for tuna auction viewing or a serious sushi breakfast. Pick Ameyoko for casual seafood snacking, izakaya hopping, and budget street food in a totally different vibe."
                  hook="Most travel articles list these as if they're alternatives. They aren't. Below is what each one actually is — and why, depending on what you came to Tokyo for, you might want both."
                />

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  When clients ask me whether they should "do the fish market in Ueno or in Toyosu," I always slow down and ask what they imagine seeing. Because <strong>Ueno does not have a fish market in the same sense Toyosu does</strong>. What people are usually thinking of is Ameyoko — short for Ameya-Yokocho — a famously chaotic open-air shopping street that includes seafood vendors, but is fundamentally an everything-store-row, not a wholesale operation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm Manabu, a nationally licensed guide, and I take groups through both areas. They serve completely different needs. If your image of "fish market" comes from documentaries about tuna auctions and pre-dawn wholesale chaos, you mean Toyosu. If your image is street food, dried squid, fresh oysters at a standing bar, and shopkeepers shouting prices at you under the train tracks, you mean Ameyoko.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Here's the comparison I give my tour clients — what each is, who it's for, and whether you can fit both into one day in Tokyo.
                </p>

                <div className="section-eyebrow"><span>Section 01 · Quick decision</span></div>
                <h2 id="section-01-quick-decision" className="scroll-mt-20">
                  Quick decision: which one fits your trip?
                </h2>
                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">Wholesale energy, real auctions</p>
                    <p className="choice-title">Choose Toyosu if…</p>
                    <ul>
                      <li>You specifically want to see the tuna auction (apply for the lottery a month ahead).</li>
                      <li>You want a serious sushi breakfast at a restaurant with real wholesale supply.</li>
                      <li>You're a food professional or industry-curious traveler.</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">Street energy, casual snacking</p>
                    <p className="choice-title">Choose Ameyoko if…</p>
                    <ul>
                      <li>You want street food, fresh oysters at a standing counter, and izakaya hopping.</li>
                      <li>You're already exploring Ueno (the park, museums, Shinobazu Pond).</li>
                      <li>You want budget seafood and don't care about wholesale chains or auctions.</li>
                    </ul>
                  </div>
                </div>

                <div className="section-eyebrow"><span>Section 02 · What each market is</span></div>
                <h2 id="section-02-what-each-market-is" className="scroll-mt-20">
                  What each market actually is
                </h2>

                <h3 className="scroll-mt-20">Toyosu Fish Market — the real wholesale operation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Toyosu Market opened in October 2018 as the relocated home of what used to be the Tsukiji Inner Wholesale Market. It sits on a man-made island in Tokyo Bay and is, by volume, one of the largest wholesale fish markets in the world. This is where Tokyo's restaurants, hotels, and serious fishmongers buy their seafood. The famous tuna auction — frozen bluefin laid out in rows, auctioneers calling rapid bids before dawn — happens here, not at Tsukiji and certainly not in Ueno.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a visitor, you experience Toyosu through enclosed glass-walled corridors above the wholesale floor, plus a row of about 40 sit-down restaurants on the visitor floor. <span className="hl-gold">Auction viewing requires winning a monthly lottery</span> applied for online roughly one month in advance — only around 100 visitors per day are admitted, and viewing is from a deck behind glass starting around 5:30 AM. You can also visit during regular hours (5:00 AM to 5:00 PM, Monday through Saturday) without the lottery and see the intermediate wholesale area from corridors. In February 2024, a new visitor complex called <em>Senkyaku Banrai</em> opened across the street with 60+ restaurants, shops, and a hot-spring spa.
                </p>

                <h3 className="scroll-mt-20">Ueno's Ameyoko — open-air street, not a fish market</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ameya-Yokocho — usually shortened to Ameyoko — is a roughly 500-meter open-air market street that runs under the elevated JR tracks between Ueno Station and Okachimachi Station. It has approximately 400 to 500 shops and stalls, depending on how you count, and the mix is very different from anything you'd see in Toyosu. You'll find <strong>seafood</strong> (fresh fish, dried squid, oysters by the piece, crab) right next to <strong>clothing outlets</strong>, dried fruits, Korean groceries, sneakers, cosmetics, sweets, and izakayas. It is not in any meaningful sense a "fish market." It's a general shopping street where seafood happens to be one strong category.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most Ameyoko shops open around 10:00 AM and close by 7:00–8:00 PM, although some seafood vendors open earlier and izakayas stay open later. Many shops close on select Wednesdays, but each business sets its own schedule, so the street as a whole is open every day with some gaps. The vibe is loud, crowded, and slightly chaotic, especially on weekends and during the December year-end push when it becomes one of Tokyo's most photographed shopping scenes.
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
                        <th className="text-left p-4 font-serif font-medium text-foreground">Ueno Ameyoko</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4 font-medium text-foreground">Type</td>
                        <td className="p-4 text-muted-foreground">Wholesale fish market + visitor floor</td>
                        <td className="p-4 text-muted-foreground">Open-air shopping street</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Best for</td>
                        <td className="p-4 text-muted-foreground">Tuna auction viewing, sushi breakfast</td>
                        <td className="p-4 text-muted-foreground">Street food, izakaya, casual seafood</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Number of vendors</td>
                        <td className="p-4 text-muted-foreground">~40 restaurants on the visitor floor</td>
                        <td className="p-4 text-muted-foreground">~400–500 shops &amp; stalls</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Hours</td>
                        <td className="p-4 text-muted-foreground">5 AM–5 PM, Mon–Sat (auction 5:30 AM)</td>
                        <td className="p-4 text-muted-foreground">10 AM–7/8 PM (varies by shop)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Closed days</td>
                        <td className="p-4 text-muted-foreground">Sundays, holidays, select Wednesdays</td>
                        <td className="p-4 text-muted-foreground">Open daily; some shops close Wed</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Reservation needed</td>
                        <td className="p-4 text-muted-foreground">Yes — auction lottery; restaurants no</td>
                        <td className="p-4 text-muted-foreground">No</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Atmosphere</td>
                        <td className="p-4 text-muted-foreground">Modern, clean, glass-walled</td>
                        <td className="p-4 text-muted-foreground">Loud, chaotic, under train tracks</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Typical cost</td>
                        <td className="p-4 text-muted-foreground">Sushi meals ¥2,000–5,000+</td>
                        <td className="p-4 text-muted-foreground">Snacks ¥300–1,500; izakaya ¥2,000+</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Access</td>
                        <td className="p-4 text-muted-foreground">Yurikamome "Shijo-mae" (covered walkway)</td>
                        <td className="p-4 text-muted-foreground">JR Ueno or Okachimachi (1–2 min walk)</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Time needed</td>
                        <td className="p-4 text-muted-foreground">1.5–2.5 hours</td>
                        <td className="p-4 text-muted-foreground">45 min–1.5 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="section-eyebrow"><span>Section 04 · When to choose Toyosu</span></div>
                <h2 id="section-04-when-toyosu" className="scroll-mt-20">
                  When Toyosu makes more sense
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Toyosu is the right pick when you specifically want to see how Tokyo's seafood actually moves before it reaches your plate. The auction is genuinely impressive — rows of frozen bluefin, each potentially worth tens of thousands of dollars, sold in seconds-long bidding bursts — but you have to plan for it. You apply online about a month ahead. Only around 100 people are picked per day. If you don't win, you can still visit during normal hours and watch the intermediate wholesale area from glass corridors, which is interesting but not the main spectacle.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The other reason to come to Toyosu is the sushi. Several restaurants on the visitor floor relocated from the old Tsukiji Inner Market and have decades-long reputations. Lines for the famous names start before 7:00 AM and can stretch over an hour. Expect ¥2,000 for a basic chirashi up to ¥5,000+ for a chef's-choice course. The sushi is excellent. The barrier is the queue and the pre-dawn alarm clock.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  What Toyosu doesn't give you is sensory intimacy. The visitor flow is designed for hygiene and efficiency: glass barriers, signposted corridors, no chance to talk to vendors or graze from stall to stall. If you came to Tokyo expecting "fish market = chaos and food sampling," that's not the Toyosu experience. That's the <Link to="/blog/tsukiji-market-guide" className="text-accent hover:underline">Tsukiji Outer Market</Link> experience — which is a third option many travelers overlook when comparing Toyosu and Ueno.
                </p>

                <div className="section-eyebrow"><span>Section 05 · When to choose Ameyoko</span></div>
                <h2 id="section-05-when-ameyoko" className="scroll-mt-20">
                  When Ameyoko makes more sense
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ameyoko is the right pick when you don't want to plan, don't want to wake up at 4 AM, and don't particularly care whether the fish came from a "real" wholesale market that morning. It's casual, walkable from any major Yamanote line stop, and pairs naturally with whatever else you're doing in Ueno — the park, the National Museum, Shinobazu Pond, or a stroll up to Yanaka.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My usual Ameyoko sequence with clients: a few oysters from a standing-bar style seafood shop, a skewer of grilled scallops, sometimes a bowl of fresh chirashi from a tachigui (standing) sushi spot, and a beer at one of the under-the-tracks izakayas where strangers end up at the same counter. The total spend is usually ¥3,000–5,000 per person, and the whole stop takes under 90 minutes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The trade-off is that Ameyoko is not specifically a fish market. You'll see seafood vendors, but you'll also walk past sneaker shops and Korean groceries and a guy selling dried mango. Some travelers love that mix. Others come away thinking "this isn't what I was promised." If you're booking a flight specifically to see a Tokyo fish market, Ameyoko alone will disappoint you. If you're already in Ueno and want a fun snacking street with lots of seafood, it's perfect.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  One more honest note: Ameyoko in late December (the year-end shopping push) is one of the most photographed scenes in Tokyo. If you happen to be in town between December 27 and 31, the energy doubles and the seafood vendors are at their loudest and most theatrical. Worth a detour for the atmosphere alone.
                </p>

                <div className="section-eyebrow"><span>Section 06 · Getting there</span></div>
                <h2 id="section-06-getting-there" className="scroll-mt-20">
                  How to get to each
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Toyosu</strong> is easiest from the Yurikamome Line — get off at Shijo-mae Station, and the market entrance is connected by covered pedestrian walkways directly from the ticket gates. You don't go outside. Coming from central Tokyo, transfer to the Yurikamome at Shimbashi Station. From most central hotels, the door-to-door time is 30–40 minutes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Ameyoko</strong> is reached from JR Ueno Station (Hirokoji exit) or JR Okachimachi Station (north exit) — both stations are on the Yamanote Line and the Keihin-Tohoku Line. The walk from either station entrance into Ameyoko itself is under 2 minutes. From central Tokyo, door-to-door is 15–25 minutes depending on your hotel.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Doing both in one day is possible but not very efficient: Toyosu is in the southeast, Ameyoko in the north, and the natural Ueno-area afternoon comes after a Toyosu morning. A more practical pairing for most travelers is <strong>Toyosu auction at dawn → Tsukiji Outer Market for breakfast → Ginza for shopping</strong>, treating Ueno/Ameyoko as a separate day's plan.
                </p>

                <div className="bg-secondary/50 rounded-lg p-8 mt-12 cta-block">
                  <h2 className="text-foreground mb-4 !text-[1.75rem] md:!text-[2rem] !leading-[1.2]">
                    Want a guide to navigate Tokyo's food scene with you?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    On my private tours, I tailor the morning to what you actually want — a Tsukiji Outer breakfast crawl, a casual Ameyoko-style izakaya night, or the full pre-dawn Toyosu auction experience. I'll handle the language, the queues, and the local etiquette so you can focus on eating well.
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
                      <h3 className="scroll-mt-20">Is there a real fish market in Ueno?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Not in the wholesale sense, no. Ueno's Ameyoko is an open-air shopping street with around 400–500 shops, including seafood vendors, dried-goods stalls, izakayas, clothing outlets, and groceries. It's a great place to eat fresh seafood casually, but it isn't a wholesale fish market like Toyosu. For a true wholesale operation with tuna auctions, go to Toyosu. For a retail food market with 460+ stalls, go to Tsukiji Outer Market.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">Can I see a tuna auction at Ameyoko?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        No. Tuna auctions only happen at Toyosu Fish Market. To watch the auction, you need to win a monthly lottery applied for online roughly a month before your visit. About 100 visitors per day are admitted, and viewing takes place from a glass-walled deck around 5:30 AM. Ameyoko has no auctions of any kind — it's a retail and casual-dining street.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">Which is cheaper — Toyosu or Ameyoko?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ameyoko is cheaper for casual eating. Snacks and skewers run ¥300–1,500, izakaya tabs typically come out to ¥2,000–3,500 per person, and oyster-stand prices start around ¥300 per piece. Toyosu's restaurant floor is higher-end — most sushi meals start around ¥2,000 and popular shops easily exceed ¥5,000 per person. Entry to both is free.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">Should I visit Toyosu, Ameyoko, or Tsukiji Outer Market?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        For most first-time visitors, Tsukiji Outer Market is the best fish-market experience — 460+ stalls, no reservation, easy to combine with Ginza. Toyosu is best if you specifically want the tuna auction or a serious sushi breakfast. Ameyoko is best if you're already in Ueno and want street food with a side of seafood. If you have time for two, the strong combo is Toyosu (dawn) + <Link to="/blog/tsukiji-market-guide" className="text-accent hover:underline">Tsukiji Outer</Link> (breakfast). For full context, see <Link to="/blog/tsukiji-vs-toyosu" className="text-accent hover:underline">Tsukiji vs Toyosu</Link> and <Link to="/blog/toyosu-vs-tsukiji-outer" className="text-accent hover:underline">Toyosu vs Tsukiji Outer</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-12">
                  Last updated: May 2026
                </p>
              </article>

              <BlogArticleAside
                guideNote="My honest take: most travelers asking 'Toyosu or Ueno' are really asking 'wholesale or street.' Pick one based on which experience you actually want."
                glance={[
                  { label: "Real fish market", value: "Toyosu (wholesale + auction)" },
                  { label: "Casual snacking", value: "Ameyoko (open-air street)" },
                  { label: "Cheapest", value: "Ameyoko" },
                  { label: "Best combo", value: "Toyosu + Tsukiji Outer" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      <RelatedTourCards tourIds={["tsukiji-ginza", "tokyo-food-tour"]} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Toyosu vs Ueno Market: Which Tokyo Fish Market Should You Visit?",
        description: "Toyosu (real wholesale market with tuna auction) vs Ueno's Ameyoko (open-air street with seafood stalls and izakaya). A licensed Tokyo guide compares both.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-05-09", dateModified: "2026-05-09",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/toyosu-vs-ueno-fish-market" }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is there a real fish market in Ueno?", acceptedAnswer: { "@type": "Answer", text: "Not in the wholesale sense. Ueno's Ameyoko is an open-air shopping street with around 400–500 shops, including seafood vendors, dried-goods stalls, izakayas, clothing outlets, and groceries. For a true wholesale operation with tuna auctions, go to Toyosu. For a retail food market with 460+ stalls, go to Tsukiji Outer Market." }},
          { "@type": "Question", name: "Can I see a tuna auction at Ameyoko?", acceptedAnswer: { "@type": "Answer", text: "No. Tuna auctions only happen at Toyosu Fish Market. To watch the auction you need to win a monthly online lottery; about 100 visitors per day are admitted and viewing takes place from a glass-walled deck around 5:30 AM. Ameyoko has no auctions." }},
          { "@type": "Question", name: "Which is cheaper, Toyosu or Ameyoko?", acceptedAnswer: { "@type": "Answer", text: "Ameyoko is cheaper for casual eating. Snacks and skewers run ¥300–1,500, izakaya tabs are typically ¥2,000–3,500 per person, and oyster-stand prices start around ¥300 per piece. Toyosu's restaurant floor is higher-end with sushi meals usually ¥2,000–5,000+." }},
          { "@type": "Question", name: "Should I visit Toyosu, Ameyoko, or Tsukiji Outer Market?", acceptedAnswer: { "@type": "Answer", text: "For most first-time visitors Tsukiji Outer Market is the best fish-market experience: 460+ stalls, no reservation, and easy to pair with Ginza. Toyosu is best if you specifically want the tuna auction or a serious sushi breakfast. Ameyoko is best if you're already in Ueno and want street food with a side of seafood." }}
        ]
      })}} />
    </Layout>
  );
};

export default ToyosuVsUenoFishMarket;
