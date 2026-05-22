import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const ViatorVsGetYourGuideVsDirectTokyo = () => {
  return (
    <Layout>
      <SEO
        title="Viator vs GetYourGuide vs Direct Booking: Tokyo Tours Compared (2026)"
        description="Viator and GetYourGuide add roughly 20–25% commission. A licensed Tokyo guide compares both with direct booking — real cost, refund terms, and what you actually get."
        canonicalPath="/blog/viator-vs-getyourguide-vs-direct-tokyo"
        hreflang={[
          { lang: "en", path: "/blog/viator-vs-getyourguide-vs-direct-tokyo" },
          { lang: "es", path: "/es/blog/viator-vs-getyourguide-vs-directo-tokio" },
          { lang: "x-default", path: "/blog/viator-vs-getyourguide-vs-direct-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Viator vs GetYourGuide vs Direct" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tour-photos/photo1.webp"
          imageAlt="A directly-booked private Tokyo tour — couple with Manabu by the Sumida River"
          eyebrow="Decision Helpers"
          title="Viator vs GetYourGuide vs Direct: How to Book a Tokyo Tour in 2026"
          subtitle="A licensed Tokyo guide who's provided tours on all three platforms explains the real differences in price, refund terms, and what you actually get."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Quick Verdict", href: "#section-01-quick-verdict" },
                { num: "02", label: "Real Price Comparison", href: "#section-02-real-price" },
                { num: "03", label: "Refund & Reschedule", href: "#section-03-refund" },
                { num: "04", label: "What You Get/Lose", href: "#section-04-get-lose" },
                { num: "05", label: "When Each Wins", href: "#section-05-when-each-wins" },
                { num: "06", label: "Why I Prefer Direct", href: "#section-06-direct" },
                { num: "07", label: "FAQ", href: "#section-07-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Quick verdict</p>
                  <h2>Direct booking is roughly 20-30% cheaper for the same tour, same guide, same experience.</h2>
                  <p>
                    <span className="hl-gold">Viator and GetYourGuide are great for discovery and a known refund process</span> — but the tour itself is identical to what you'd get booking the guide directly, just at a higher price.
                  </p>
                  <p>
                    Use the platforms to find the guide. Then check if direct booking is available before you pay.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Most travelers default to Viator or GetYourGuide because that's what shows up when you Google "Tokyo private tour." Those listings are great for browsing — but they're built on a commission model that adds roughly 20-30% to the price compared to booking directly with the same guide. This article explains what the commission actually buys you, when it's worth paying, and when it isn't.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I run tours through all three channels, so the numbers below are from inside the business, not guesswork.
                </p>

                <InlineCTA
                  message="See what direct booking looks like with a licensed Tokyo guide."
                  linkText="View my tours and direct pricing →"
                  href="/tours"
                />

                {/* Section 01 */}
                <div className="section-eyebrow"><span>Section 01 · Quick Verdict</span></div>
                <h2 id="section-01-quick-verdict" className="scroll-mt-20">
                  Quick Verdict by Booking Channel
                </h2>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Platform</th>
                        <th>Typical price markup</th>
                        <th>Best for</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="scenario">Viator</td><td>~20-30%</td><td>Refund protection, US-based buyer</td></tr>
                      <tr><td className="scenario">GetYourGuide</td><td>~20%</td><td>European buyers, mobile app</td></tr>
                      <tr><td className="scenario">Klook</td><td>~15-20%</td><td>Asian travelers, attraction bundles</td></tr>
                      <tr><td className="scenario">Direct booking</td><td>0%</td><td>Best price, direct guide communication</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Section 02 */}
                <div className="section-eyebrow"><span>Section 02 · Real Price</span></div>
                <h2 id="section-02-real-price" className="scroll-mt-20">
                  Real Price Comparison (Same Tour)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Here's an actual example: the same half-day Tokyo private walking tour, listed on three channels and bookable direct from my own site. Prices are typical group-of-4 rates.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Half-day · 4 hours · group of 4</th>
                        <th>Price you pay</th>
                        <th>What I receive</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="scenario">Viator</td><td className="bar-cell">~¥55,000<span className="bar"><i style={{ width: '100%' }} /></span></td><td>~¥42,000</td></tr>
                      <tr><td className="scenario">GetYourGuide</td><td className="bar-cell">~¥53,000<span className="bar"><i style={{ width: '96%' }} /></span></td><td>~¥42,500</td></tr>
                      <tr><td className="scenario">Direct booking</td><td className="bar-cell win">~¥45,000<span className="bar"><i style={{ width: '82%' }} /></span></td><td>~¥45,000</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The math is straightforward. Platforms charge the buyer more so they can take 20-30% off the top. The guide gets paid the same regardless — but you pay less when you book direct.
                </p>

                {/* Section 03 */}
                <div className="section-eyebrow"><span>Section 03 · Refund & Reschedule</span></div>
                <h2 id="section-03-refund" className="scroll-mt-20">
                  Refund & Reschedule Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This is where platforms genuinely add value. <strong className="text-foreground">Viator</strong> offers a "free cancellation" policy up to 24 hours before most tours, with a refund processed through them. <strong className="text-foreground">GetYourGuide</strong> matches this in most cases. <strong className="text-foreground">Klook</strong> varies by listing.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Direct booking refund terms depend on the individual guide. My standard policy: full refund 48+ hours before, 50% within 24-48, 0% within 24 hours — but always negotiable for genuine emergencies. Most licensed guides offer something similar.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">The real question:</strong> is the refund cushion worth ~¥10,000 of overpaid commission? For most travelers who don't cancel, no. For travelers booking 3-6 months ahead with uncertain plans, possibly yes.
                </p>

                {/* Section 04 */}
                <div className="section-eyebrow"><span>Section 04 · What You Get/Lose</span></div>
                <h2 id="section-04-get-lose" className="scroll-mt-20">
                  What Each Channel Gives You (and Takes Away)
                </h2>
                <h3>Viator / GetYourGuide / Klook</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">You get:</strong> Familiar checkout, credit-card buyer protection, ability to compare multiple listings, refund process via the platform, mobile app with confirmation, automated reminders.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">You lose:</strong> Direct pre-tour communication with the guide (everything routes through the platform's messaging), full customization (platforms often require sticking to the listed itinerary), 20-30% in price you didn't need to pay.
                </p>
                <h3>Direct Booking</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">You get:</strong> ~20-30% lower price, direct email/WhatsApp with the actual guide, full flexibility to customize the tour, faster response time, often a more personal experience because the guide is incentivized to delight you.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">You lose:</strong> Platform refund automation, the comfort of a known third-party brand, automated reminders (you'll exchange one or two emails directly).
                </p>

                {/* Section 05 */}
                <div className="section-eyebrow"><span>Section 05 · When Each Wins</span></div>
                <h2 id="section-05-when-each-wins" className="scroll-mt-20">
                  When Each Channel Actually Wins
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Use Viator/GetYourGuide if:</strong> You're booking far in advance and your dates may shift; you want the standard tour exactly as listed; you're uncomfortable communicating in English directly with a Japanese guide; you specifically want third-party refund mediation.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Use Klook if:</strong> You're already buying attraction tickets through them and want everything in one place.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Book direct if:</strong> You want customization (specific food, specific neighborhoods, specific pace); you're traveling with kids, elderly parents, or dietary restrictions; you've already found the guide and just want the lowest price; you want to communicate with the actual guide before booking.
                </p>

                {/* Section 06 */}
                <div className="section-eyebrow"><span>Section 06 · Direct</span></div>
                <h2 id="section-06-direct" className="scroll-mt-20">
                  Why I Prefer Direct (And When You Should Too)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Direct booking lets me actually talk to you before the day. We can swap a few emails, you can tell me about your interests, dietary needs, the elderly grandparent in your party, the kid who hates seafood — and I can build the day around that. Through a platform, all of this either takes longer or doesn't happen at all.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Direct booking also means you get my full attention. When a guide gets paid 75% via a platform vs 100% direct, the math affects how much customization, follow-up, and care you receive. It shouldn't, but it does.
                </p>
                <blockquote className="pull-quote">
                  Use the platforms to discover the guide. Then check if direct booking is available before you pay.
                </blockquote>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For more on how to evaluate guides, see <Link to="/blog/how-to-choose-private-tokyo-guide" className="text-accent hover:underline">how to choose a private Tokyo guide</Link>. For whether a private tour is worth it at all, see <Link to="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" className="text-accent hover:underline">my honest "is it worth it" breakdown</Link>.
                </p>

                <InlineCTA
                  message="Curious what direct booking costs for your specific Tokyo trip?"
                  linkText="Get a direct quote →"
                  href="/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Section 07 · FAQ</span></div>
                <h2 id="section-07-faq" className="scroll-mt-20">
                  Frequently Asked Questions
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">Why is direct booking cheaper if the guide is the same?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Platforms charge a commission (typically 20-30%) that's baked into the price. When you book direct, you and the guide split that savings — you pay less, the guide doesn't lose income.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Is it safe to pay a Japanese guide directly?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      With licensed guides, yes. Look for a Japan Tourism Agency license number on the guide's profile, reviews under their real name, and a real website (not just an email). Pay via Wise, PayPal, or bank transfer — all reversible if needed.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Does Viator handle problems better?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Slightly. Viator has a customer service team for disputes. But most direct-booking issues are resolved by the guide themselves within hours, since their reputation depends on it.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Can I book through Viator then switch to direct?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Most platforms forbid this in their terms of service. The right approach is to discover the guide through a platform, then check their own website to see if direct booking is offered before placing the order.
                    </p>
                  </div>
                </div>

                <InlineCTA
                  message="Want to skip the platforms? Book direct."
                  linkText="Contact me directly for a Tokyo tour →"
                  href="/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["custom", "tsukiji-ginza", "asakusa"]} showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Viator vs GetYourGuide vs Direct Booking: Tokyo Tours Compared (2026)",
              description: "A licensed Tokyo guide compares Viator, GetYourGuide, Klook, and direct booking: real pricing, refund terms, what each channel gives you, and when to choose each.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/viator-vs-getyourguide-vs-direct-tokyo" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default ViatorVsGetYourGuideVsDirectTokyo;
