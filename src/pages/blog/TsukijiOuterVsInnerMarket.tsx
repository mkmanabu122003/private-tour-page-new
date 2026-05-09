import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";
import { QuickAnswer } from "@/components/blog/QuickAnswer";

const TsukijiOuterVsInnerMarket = () => {
  return (
    <Layout>
      <SEO
        title="Tsukiji Outer vs Inner Market 2026: What's the Difference?"
        description="The Inner Market moved to Toyosu in 2018; the Outer Market with 460+ stalls is still in Tsukiji. A licensed guide explains what changed and where to go now."
        canonicalPath="/blog/tsukiji-outer-vs-inner-market"
        hreflang={[
          { lang: "en", path: "/blog/tsukiji-outer-vs-inner-market" },
          { lang: "es", path: "/es/blog/tsukiji-mercado-exterior-vs-interior" },
          { lang: "x-default", path: "/blog/tsukiji-outer-vs-inner-market" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Tsukiji Outer vs Inner Market" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/tsukiji-outer-market-entrance.webp"
          imageAlt="The entrance to Tsukiji Outer Market in 2026 — still open, still busy"
          eyebrow="Food Guides · Tokyo"
          title="Tsukiji Outer Market vs Inner Market: What's the Difference?"
          subtitle="A licensed Tokyo guide explains what really happened in 2018, what's still in Tsukiji in 2026, and what moved to Toyosu."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Quick decision", href: "#section-01-quick-decision" },
                { num: "02", label: "What each one was", href: "#section-02-what-each-one-was" },
                { num: "03", label: "What changed in 2018", href: "#section-03-what-changed" },
                { num: "04", label: "Side-by-side comparison", href: "#section-04-comparison" },
                { num: "05", label: "What's at Tsukiji now", href: "#section-05-tsukiji-now" },
                { num: "06", label: "Common misconceptions", href: "#section-06-misconceptions" },
                { num: "07", label: "FAQ", href: "#section-07-faq" },
              ]} />

              <article>
                <QuickAnswer
                  answer="The Inner Market — the wholesale floor where the tuna auction happened — moved out of Tsukiji in October 2018 and is now Toyosu Market. The Outer Market — the 460+ shops, restaurants, and street-food stalls — never moved and is still very much in Tsukiji in 2026. So when someone today says 'Tsukiji Market,' they almost always mean the Outer Market that is open right now. When someone says 'tuna auction' or 'wholesale fish market,' they mean Toyosu, even if older articles still call it Tsukiji."
                  hook="The naming confusion is responsible for half the bad advice on Tokyo food blogs. Below is the actually-correct breakdown of what each one is, what moved, and what you'll find at Tsukiji today."
                />

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Almost every week I have a client ask me, "Wait — isn't Tsukiji closed?" And every week I give the same answer: <strong>Tsukiji is two markets, not one</strong>, and only one of them moved. The mix-up has been around since 2018 and travel articles keep repeating it, so let me clear it up properly with what the situation actually looks like in 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm Manabu, a nationally licensed Tokyo guide. I take clients to Tsukiji's Outer Market regularly, and I've watched the Toyosu auction more times than I can count. Both are open. Both are great. But they are now in completely different parts of Tokyo, and they serve completely different audiences.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Here's the side-by-side that I wish more travel articles got right.
                </p>

                <div className="section-eyebrow"><span>Section 01 · Quick decision</span></div>
                <h2 id="section-01-quick-decision" className="scroll-mt-20">
                  Quick decision: which one are you actually looking for?
                </h2>
                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">For 99% of travelers</p>
                    <p className="choice-title">You want the Outer Market…</p>
                    <ul>
                      <li>Street food, sushi counters, knife shops, tamagoyaki — all still in Tsukiji.</li>
                      <li>460+ shops and stalls, no reservation needed.</li>
                      <li>Open ~5 AM to 2 PM, closed Sundays and select Wednesdays.</li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">For the auction-curious</p>
                    <p className="choice-title">The "Inner Market" is now Toyosu…</p>
                    <ul>
                      <li>Tuna auction viewing (lottery only, ~100 visitors/day).</li>
                      <li>Wholesale floor, modern facility on a man-made island.</li>
                      <li>Different station entirely (Yurikamome "Shijo-mae").</li>
                    </ul>
                  </div>
                </div>

                <div className="section-eyebrow"><span>Section 02 · What each one was</span></div>
                <h2 id="section-02-what-each-one-was" className="scroll-mt-20">
                  What each one was, before 2018
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tsukiji was never one market. From 1935 onward, the neighborhood housed two distinct operations sharing the same area but serving different customers.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The <strong>Inner Wholesale Market</strong> (場内市場 / <em>jōnai shijō</em>) was a professional-only floor where licensed wholesalers auctioned and traded seafood in bulk every morning before dawn. This was the Tsukiji you saw in documentaries — the tuna auction, the turret trucks weaving through narrow aisles, thousands of tons of fish changing hands before 8 AM. It was strictly off-limits to casual visitors during prime hours, and even when tourists could observe the auction, it was on a tightly controlled basis.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The <strong>Outer Market</strong> (場外市場 / <em>jōgai shijō</em>) was the dense network of retail shops, restaurants, and street-food stalls that grew up around the wholesale operation over decades. These businesses served local chefs sourcing ingredients, residents buying groceries, and visitors looking for sushi and seafood at retail prices. The Outer Market was always public-facing. The food vendors, the knife shops, the matcha stands, the tamagoyaki on a stick — all of that was the Outer Market.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Geographically, the two markets sat next to each other in the Tsukiji neighborhood of Chuo Ward. Logistically, they were intertwined: the Outer Market's vendors often sourced their fish from the Inner Market's wholesalers each morning. But operationally and legally, they were two different things.
                </p>

                <div className="section-eyebrow"><span>Section 03 · What changed</span></div>
                <h2 id="section-03-what-changed" className="scroll-mt-20">
                  What actually changed in October 2018
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  After years of political delays, environmental concerns about the Toyosu site's soil, and intense debate over preserving Tsukiji's heritage, the Tokyo Metropolitan Government finally moved <strong>only the Inner Wholesale Market</strong> to a brand-new facility on a reclaimed island in Tokyo Bay called Toyosu. The move happened in October 2018. The wholesale floor closed at Tsukiji on a Saturday and reopened at Toyosu the following Thursday.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="hl-gold">The Outer Market did not move</span>. Its vendors had no reason to. Their customers — local restaurants, residents, and visitors — were still in the Tsukiji neighborhood, and Toyosu, several kilometers away on a remote man-made island, would have severed those relationships. So the Outer Market's roughly 460 shops simply stayed exactly where they had always been.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In the months after the move, some travel articles ran headlines like "Tsukiji Closes" or "Tsukiji Moves to Toyosu." Both are wrong. What closed was the Inner Market. What moved was the Inner Market. The Outer Market — the part the vast majority of tourists actually visited and remembered — never closed and never moved.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  In fact, since 2018 the Outer Market has expanded slightly. New shops opened in spaces left vacant by businesses that did relocate, and the area has become noticeably more visitor-friendly with better signage, English menus, and information centers. The vendors I talk to today say the post-2018 Outer Market is in many ways stronger than before.
                </p>

                <div className="section-eyebrow"><span>Section 04 · Comparison</span></div>
                <h2 id="section-04-comparison" className="scroll-mt-20">
                  Side-by-side comparison
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="text-left p-4 font-serif font-medium text-foreground">Feature</th>
                        <th className="text-left p-4 font-serif font-medium text-foreground">Tsukiji Outer Market</th>
                        <th className="text-left p-4 font-serif font-medium text-foreground">"Inner Market" (now Toyosu)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4 font-medium text-foreground">Status (2026)</td>
                        <td className="p-4 text-muted-foreground">Still in Tsukiji, fully open</td>
                        <td className="p-4 text-muted-foreground">Moved to Toyosu in Oct 2018</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Type</td>
                        <td className="p-4 text-muted-foreground">Retail shops + street food</td>
                        <td className="p-4 text-muted-foreground">Wholesale market + visitor floor</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Vendors</td>
                        <td className="p-4 text-muted-foreground">~460 shops &amp; stalls</td>
                        <td className="p-4 text-muted-foreground">Hundreds of wholesalers; ~40 restaurants for visitors</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Hours</td>
                        <td className="p-4 text-muted-foreground">~5 AM–2 PM (varies by shop)</td>
                        <td className="p-4 text-muted-foreground">5 AM–5 PM, Mon–Sat</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Closed days</td>
                        <td className="p-4 text-muted-foreground">Sundays + select Wednesdays</td>
                        <td className="p-4 text-muted-foreground">Sundays, holidays, select Wednesdays</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Tuna auction</td>
                        <td className="p-4 text-muted-foreground">No (never had one)</td>
                        <td className="p-4 text-muted-foreground">Yes — at Toyosu, lottery only</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">Reservation</td>
                        <td className="p-4 text-muted-foreground">No</td>
                        <td className="p-4 text-muted-foreground">Yes (auction lottery), no for restaurants</td>
                      </tr>
                      <tr className="bg-secondary/20">
                        <td className="p-4 font-medium text-foreground">Access</td>
                        <td className="p-4 text-muted-foreground">Tsukiji Sta. (Hibiya Line) — 2 min</td>
                        <td className="p-4 text-muted-foreground">Shijo-mae Sta. (Yurikamome Line)</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-foreground">What you do there</td>
                        <td className="p-4 text-muted-foreground">Eat, browse, shop, walk around</td>
                        <td className="p-4 text-muted-foreground">Watch through glass; eat sushi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="section-eyebrow"><span>Section 05 · Tsukiji now</span></div>
                <h2 id="section-05-tsukiji-now" className="scroll-mt-20">
                  What you'll actually find at Tsukiji today
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Walking into Tsukiji's Outer Market in 2026 is not noticeably different from walking into it in 2017. The narrow lanes are the same. The 460+ shops are still there. The smell of charcoal grills, the rhythmic thwack of a knife breaking down a tuna loin, the sweet caramel scent of tamagoyaki — all unchanged. You'll find:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Street food and standing counters:</strong> tamagoyaki on a stick (Yamachou for sweet, Shouro for savory), grilled scallops basted in soy butter, fresh uni in paper cups, oyster stands, wagyu skewers, and standing-sushi spots where 8–10 pieces run ¥2,000–3,000.
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Sit-down sushi and donburi:</strong> a dozen restaurants ranging from solid lunch sets at ¥1,500 up to chef's-choice courses at ¥5,000+. The lines for famous spots can be 30–60 minutes; lesser-known spots a block off the main lane are usually walk-in friendly.
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Knife shops, ceramics, dried goods:</strong> Tsukiji's knife shops supply professional kitchens across Tokyo and are world-famous for hand-forged Japanese steel. You'll also find lacquerware, traditional pickles, dried katsuobushi (bonito flakes), kombu (kelp), and Japanese tea.
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">An information center (Plat Tsukiji):</strong> the official welcome point, useful for picking up a current map and confirming Wednesday closures.
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The sweet spot for visiting is around 8:00 AM on a weekday (Tuesday, Thursday, or Friday work best). The grills are fired, the stalls are fully set up, and the worst of the lunch crowds haven't yet arrived. By 11:00 AM the lanes get noticeably thicker; by 1:00 PM many stalls are starting to close. For a deeper guide, see my <Link to="/blog/tsukiji-market-guide" className="text-accent hover:underline">complete Tsukiji Market Guide</Link>.
                </p>

                <div className="section-eyebrow"><span>Section 06 · Misconceptions</span></div>
                <h2 id="section-06-misconceptions" className="scroll-mt-20">
                  Common misconceptions I correct on tours
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Three myths come up almost weekly with my clients, and they're worth flagging here.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">"Tsukiji is closed."</strong> Wrong. The wholesale operation closed at Tsukiji and moved to Toyosu in October 2018. The Outer Market with 460+ shops is still in Tsukiji and very much open. If your travel article says "Tsukiji is closed," it's repeating a 2018 headline that was misleading even then.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">"You need to wake up at 4 AM to see Tsukiji."</strong> That advice was for the old wholesale floor that no longer exists. The Outer Market today peaks around 8:00 to 10:00 AM. You can show up at 9:00 AM and have a full Tsukiji experience. The pre-dawn alarm clock is now only relevant if you're going to the Toyosu auction.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">"The tuna auction moved to Tsukiji's Outer Market."</strong> No. The tuna auction has never been at the Outer Market. Auctions only happen at wholesale markets, and the only wholesale fish market in Tokyo is now Toyosu. The Outer Market is a retail food street and always has been.
                </p>

                <div className="bg-secondary/50 rounded-lg p-8 mt-12 cta-block">
                  <h2 className="text-foreground mb-4 !text-[1.75rem] md:!text-[2rem] !leading-[1.2]">
                    Want a guide who can read the menus and find the best stalls?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    On my Tsukiji &amp; Ginza tour, I take you through the Outer Market the way I move through it myself — best stalls, no tourist traps, and the small-vendor stories you'd never get from a guidebook. Then we walk 15 minutes into Ginza for the perfect contrast.
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
                      <h3 className="scroll-mt-20">Is Tsukiji's Inner Market still open?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        No. The Inner Wholesale Market — the part of Tsukiji where the tuna auction took place — closed in October 2018 and reopened the same week as Toyosu Market. Toyosu is now Tokyo's official wholesale fish market. The Outer Market, however, never closed and is still in Tsukiji in 2026.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">Where is the tuna auction now?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        At Toyosu Fish Market, on a man-made island in Tokyo Bay. To watch it, you need to win a monthly online lottery — only about 100 visitors per day are admitted, and viewing happens from a glass-walled deck around 5:30 AM. There has not been a tuna auction at Tsukiji since 2018.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">Can I still eat sushi in Tsukiji?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Yes — and the sushi scene is one of the best parts of the Outer Market. Standing sushi counters serve excellent fish at retail prices (8–10 pieces for ¥2,000–3,000), and there are sit-down restaurants offering chef's-choice courses up to ¥5,000+. Several Outer Market sushi shops have decades-long reputations and are walk-in friendly outside of peak lunch hours.
                      </p>
                    </div>
                    <div>
                      <h3 className="scroll-mt-20">Should I visit Tsukiji or Toyosu?</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        For most visitors, Tsukiji's Outer Market is the better experience: more food variety, more atmosphere, no reservation needed. Toyosu is the right pick if you specifically want the tuna auction or a serious sushi breakfast. If you have time for both, the strong combo is Toyosu auction at dawn → Tsukiji Outer Market for breakfast → Ginza for shopping. See my full <Link to="/blog/tsukiji-vs-toyosu" className="text-accent hover:underline">Tsukiji vs Toyosu comparison</Link> and my dedicated <Link to="/blog/toyosu-vs-tsukiji-outer" className="text-accent hover:underline">Toyosu vs Tsukiji Outer guide</Link> for more.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-12">
                  Last updated: May 2026
                </p>
              </article>

              <BlogArticleAside
                guideNote="When clients say 'Tsukiji,' I assume they mean the Outer Market — that's the part still in Tsukiji and the part you can actually walk into and eat at."
                glance={[
                  { label: "Outer Market", value: "Still in Tsukiji, open" },
                  { label: "Inner Market", value: "Now Toyosu (since 2018)" },
                  { label: "Tuna auction", value: "Toyosu only (lottery)" },
                  { label: "Best time", value: "Around 8:00 AM weekday" },
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      <RelatedTourCards tourIds={["tsukiji-ginza", "tokyo-food-tour"]} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Tsukiji Outer Market vs Inner Market: What's the Difference?",
        description: "The Inner Market moved to Toyosu in October 2018; the Outer Market with 460+ stalls is still in Tsukiji. A licensed Tokyo guide explains what changed.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-05-09", dateModified: "2026-05-09",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/tsukiji-outer-vs-inner-market" }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is Tsukiji's Inner Market still open?", acceptedAnswer: { "@type": "Answer", text: "No. The Inner Wholesale Market — the part of Tsukiji where the tuna auction took place — closed in October 2018 and reopened the same week as Toyosu Market. Toyosu is now Tokyo's official wholesale fish market. The Outer Market never closed and is still in Tsukiji in 2026." }},
          { "@type": "Question", name: "Where is the tuna auction now?", acceptedAnswer: { "@type": "Answer", text: "At Toyosu Fish Market, on a man-made island in Tokyo Bay. To watch it you need to win a monthly online lottery — only about 100 visitors per day are admitted, and viewing happens from a glass-walled deck around 5:30 AM. There has not been a tuna auction at Tsukiji since 2018." }},
          { "@type": "Question", name: "Can I still eat sushi in Tsukiji?", acceptedAnswer: { "@type": "Answer", text: "Yes — the sushi scene is one of the best parts of the Outer Market. Standing sushi counters serve excellent fish at retail prices (¥2,000–3,000 for 8–10 pieces), and sit-down restaurants offer chef's-choice courses up to ¥5,000+." }},
          { "@type": "Question", name: "Should I visit Tsukiji or Toyosu?", acceptedAnswer: { "@type": "Answer", text: "For most visitors, Tsukiji's Outer Market is the better experience: more food variety, more atmosphere, no reservation needed. Toyosu is the right pick if you specifically want the tuna auction or a serious sushi breakfast. The combo of Toyosu at dawn plus Tsukiji Outer for breakfast is the strongest option for serious food travelers." }}
        ]
      })}} />
    </Layout>
  );
};

export default TsukijiOuterVsInnerMarket;
