import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const HowToChoosePrivateTokyoGuide = () => {
  return (
    <Layout>
      <SEO
        title="How to Choose a Private Tokyo Guide: 7 Questions to Ask Before Booking"
        description="Licensed vs unlicensed, agency vs direct, group size limits, refund terms — a licensed Tokyo guide explains what to ask before paying ¥40,000+ for a private tour."
        canonicalPath="/blog/how-to-choose-private-tokyo-guide"
        hreflang={[
          { lang: "en", path: "/blog/how-to-choose-private-tokyo-guide" },
          { lang: "es", path: "/es/blog/como-elegir-guia-privado-tokio" },
          { lang: "x-default", path: "/blog/how-to-choose-private-tokyo-guide" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "How to Choose a Tokyo Guide" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tour-photos/sumida-river-group-selfie.webp"
          imageAlt="Manabu with private tour guests by the Sumida River — close-up rapport you only get with a private guide"
          eyebrow="Decision Helpers"
          title="How to Choose a Private Tokyo Guide: 7 Questions to Ask"
          subtitle="A licensed Tokyo guide on the differences nobody explains: licensed vs unlicensed, agency vs direct, group size limits, and the red flags that mean you should walk away."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Quick Checklist", href: "#section-01-checklist" },
                { num: "02", label: "Licensed or Not", href: "#section-02-licensed" },
                { num: "03", label: "Agency vs Direct", href: "#section-03-agency-direct" },
                { num: "04", label: "Group Size Limits", href: "#section-04-group-size" },
                { num: "05", label: "The 7 Questions", href: "#section-05-the-7-questions" },
                { num: "06", label: "Red Flags", href: "#section-06-red-flags" },
                { num: "07", label: "FAQ", href: "#section-07-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Quick checklist</p>
                  <h2>Three things matter most: license, party-size flexibility, and clear refund terms.</h2>
                  <p>
                    <span className="hl-gold">A licensed national-government interpreter guide (全国通訳案内士) is the only category authorized to do paid guiding in Japan</span> — but enforcement is loose and many unlicensed guides operate openly. The license is one signal among several.
                  </p>
                  <p>
                    The 7 questions below are what I'd ask before paying ¥40,000+ for a half-day private tour.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  This guide is what I wish travelers had when they were vetting me. Private guides in Tokyo charge ¥40,000–80,000 for a single day — that's a significant chunk of any travel budget, and the booking-platform listings make almost every guide look identical. They're not.
                </p>

                <InlineCTA
                  message="Want to verify a Tokyo guide's credentials? Start with mine."
                  linkText="See my licensed guide profile →"
                  href="/about"
                />

                {/* Section 01 */}
                <div className="section-eyebrow"><span>Section 01 · Quick Checklist</span></div>
                <h2 id="section-01-checklist" className="scroll-mt-20">
                  The Quick Pre-Booking Checklist
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Before you book, verify these five basics on the guide's website or listing:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground leading-relaxed">
                  <li>Licensed National Government Guide Interpreter (全国通訳案内士)</li>
                  <li>Direct booking option (not only through Viator/GetYourGuide)</li>
                  <li>Clear maximum party size policy</li>
                  <li>Refund/reschedule terms stated in writing</li>
                  <li>Real photos and identifiable bio (not stock images)</li>
                </ul>

                {/* Section 02 */}
                <div className="section-eyebrow"><span>Section 02 · Licensed or Not</span></div>
                <h2 id="section-02-licensed" className="scroll-mt-20">
                  Licensed or Not: What That Actually Means
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The <strong className="text-foreground">National Government Licensed Guide Interpreter</strong> certification is administered by Japan's Japan Tourism Agency (JTA) under the Ministry of Land, Infrastructure, Transport and Tourism. It requires passing a multi-part exam covering Japanese history, geography, general knowledge, and the language of guiding (Japanese, English, Spanish, Chinese, Korean, etc.). The pass rate is typically under 10% in any given year — fewer than 1 in 10 applicants succeed.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Until January 2018, only licensed guides could legally accept paid guiding work in Japan. Since the 2018 deregulation, unlicensed guides can operate too — but the title "通訳案内士" (Tsuyaku Annaishi / Licensed Guide Interpreter) remains protected. Only licensed guides can use that title or related government-credential language. The license still signals formal study of Japanese history, geography, and guiding ethics.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For a deeper explanation of the legal distinction, see my <Link to="/blog/licensed-vs-unlicensed-tour-guides-japan" className="text-accent hover:underline">licensed vs unlicensed guide comparison</Link>.
                </p>

                {/* Section 03 */}
                <div className="section-eyebrow"><span>Section 03 · Agency vs Direct</span></div>
                <h2 id="section-03-agency-direct" className="scroll-mt-20">
                  Agency vs Direct Booking
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tokyo guides are booked through three main channels: <strong className="text-foreground">large agencies</strong> (Viator, GetYourGuide, Klook), <strong className="text-foreground">small local agencies</strong>, and <strong className="text-foreground">direct from the guide</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Large agencies typically charge 20-25% commission, which is built into the price you pay. The benefit is a known refund process and a customer-service buffer. The downside is you don't always know which specific guide you'll get, and the agency rules can prevent the guide from customizing the tour to your interests.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Direct booking from the guide's own website means you pay roughly 20-25% less for the same experience, and you communicate directly with the person who will guide you. The trade-off is no third-party arbitration if something goes wrong — but for licensed guides this is rarely an issue in practice.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For the full platform comparison, see <Link to="/blog/viator-vs-getyourguide-vs-direct-tokyo" className="text-accent hover:underline">Viator vs GetYourGuide vs direct booking</Link>.
                </p>

                {/* Section 04 */}
                <div className="section-eyebrow"><span>Section 04 · Group Size</span></div>
                <h2 id="section-04-group-size" className="scroll-mt-20">
                  Group Size Limits Matter More Than You Think
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A "private" tour with a max of 12 people is operationally a small-group tour. A "private" tour with a max of 4-6 people is a real private experience. This distinction matters because it determines pace, restaurant access, and the level of personal attention you get.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">My standard:</strong> 6 people maximum. Beyond that, the experience degrades — you can't fit at a typical counter sushi restaurant, the small backstreet stops become impractical, and the conversation flattens.
                </p>

                {/* Section 05 */}
                <div className="section-eyebrow"><span>Section 05 · The 7 Questions</span></div>
                <h2 id="section-05-the-7-questions" className="scroll-mt-20">
                  The 7 Questions to Ask Before Booking
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/tour-photos/asakusa-matcha-shop-guiding.webp"
                    alt="Manabu explaining a traditional matcha shop on a private Asakusa tour"
                    className="w-full h-[380px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    A licensed guide can explain the small details — and answer these 7 questions before you book
                  </figcaption>
                </figure>
                <ol className="list-decimal pl-6 space-y-4 mb-8 text-muted-foreground leading-relaxed">
                  <li>
                    <strong className="text-foreground">Are you a licensed National Government Guide Interpreter?</strong> If yes, ask for the license number — they should provide it without hesitation.
                  </li>
                  <li>
                    <strong className="text-foreground">How many people max per group, including my party?</strong> 6 or fewer is real private. 8+ is operationally a small-group tour.
                  </li>
                  <li>
                    <strong className="text-foreground">Can you customize the route to my interests?</strong> If the answer is "we follow a fixed itinerary," you're booking a packaged tour, not a private guide.
                  </li>
                  <li>
                    <strong className="text-foreground">What happens if it rains?</strong> A good guide has a wet-weather alternative plan ready. If they say "the tour proceeds as planned," they don't.
                  </li>
                  <li>
                    <strong className="text-foreground">What's your refund and reschedule policy?</strong> Get this in writing. Standard is full refund 48+ hours, partial 24-48, none under 24 — but variations are everywhere.
                  </li>
                  <li>
                    <strong className="text-foreground">Will it be you guiding, or someone else?</strong> Agency listings often show one face and assign a different guide on the day. Confirm in writing.
                  </li>
                  <li>
                    <strong className="text-foreground">Do you handle dietary restrictions or accessibility needs?</strong> If anyone in your party has allergies, vegetarian/vegan diet, or mobility issues, ask specifically. A good guide will already know the right places.
                  </li>
                </ol>

                {/* Section 06 */}
                <div className="section-eyebrow"><span>Section 06 · Red Flags</span></div>
                <h2 id="section-06-red-flags" className="scroll-mt-20">
                  Red Flags That Mean Walk Away
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">No license, no portfolio, no reviews under their own name.</strong> A real guide has at least one of these. Most have all three.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">"Private" tours listed at suspiciously low prices.</strong> Below ¥30,000 for a half-day in Tokyo is below operating cost for a licensed guide. Either it's not actually private, or there's a hidden upcharge.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Refusal to confirm group size in writing.</strong> If they evade this question, they're planning to add other people to your "private" tour.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">No real photos of past tours.</strong> Stock images of Tokyo with no people in them is a sign that this is a re-seller, not an actual guide.
                </p>

                <InlineCTA
                  message="I'm a licensed guide who's happy to answer all 7 questions before you book."
                  linkText="Ask me your 7 questions →"
                  href="/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Section 07 · FAQ</span></div>
                <h2 id="section-07-faq" className="scroll-mt-20">
                  Frequently Asked Questions
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">How do I verify a Japanese tour guide's license?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Japan Tourism Agency maintains a public registry of licensed guides. You can also ask the guide to send a photo of their license card — it has a unique number and the guide's photo.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Are unlicensed guides illegal?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No, not since 2018. The exclusive monopoly was removed. But the license still signals formal training and accountability that unlicensed guides may not have.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Is a higher price always better?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Above ~¥80,000 per half-day, the premium often goes to agency overhead rather than the guide. Direct booking with a licensed guide in the ¥40,000–60,000 range usually delivers the best quality-to-price ratio.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">How far in advance should I book?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For cherry blossom season (late March-early April) and autumn (October-November), 2-3 months ahead. Other times of year, 3-4 weeks is usually enough.
                    </p>
                  </div>
                </div>

                <InlineCTA
                  message="Ready to book a licensed Tokyo guide who answers every question?"
                  linkText="Get in touch →"
                  href="/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["custom", "asakusa", "tsukiji-ginza"]} showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "How to Choose a Private Tokyo Guide: 7 Questions to Ask Before Booking",
              description: "A licensed Tokyo guide explains how to evaluate private tour guides: licensed vs unlicensed, agency vs direct, group size limits, and the red flags to walk away from.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/how-to-choose-private-tokyo-guide" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default HowToChoosePrivateTokyoGuide;
