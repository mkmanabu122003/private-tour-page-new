import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EnglishFriendlyTokyoTips = () => {
  return (
    <Layout>
      <SEO
        title="English-Friendly Tokyo: 12 Tips That Make Tokyo Feel Easier"
        description="Translation apps that actually work, English menus, station signs, what to point at, when to use cash. A licensed Tokyo guide on the small things that make Tokyo feel manageable."
        canonicalPath="/blog/english-friendly-tokyo-tips"
        hreflang={[
          { lang: "en", path: "/blog/english-friendly-tokyo-tips" },
          { lang: "es", path: "/es/blog/tokio-para-no-anglohablantes" },
          { lang: "x-default", path: "/blog/english-friendly-tokyo-tips" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "English-Friendly Tokyo" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tours/tokyo-night-tour-hero.webp"
          imageAlt="Bright Tokyo street signage at night"
          eyebrow="Plan Your Trip"
          title="English-Friendly Tokyo: 12 Tips to Cross the Language Gap"
          subtitle="Apps that actually work, restaurant strategies, station navigation, and the small phrases that make Tokyo feel manageable when you don't speak Japanese."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "The Big Picture", href: "#section-01-big-picture" },
                { num: "02", label: "Apps That Work", href: "#section-02-apps" },
                { num: "03", label: "Station Navigation", href: "#section-03-stations" },
                { num: "04", label: "Restaurants", href: "#section-04-restaurants" },
                { num: "05", label: "Shopping & Convenience Stores", href: "#section-05-shopping" },
                { num: "06", label: "Emergency Words", href: "#section-06-emergency" },
                { num: "07", label: "When to Hire a Guide", href: "#section-07-guide" },
                { num: "08", label: "FAQ", href: "#section-08-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">The big picture</p>
                  <h2>Tokyo is more English-friendly than its reputation suggests — but only if you know which tools to lean on.</h2>
                  <p>
                    <span className="hl-gold">Major signs, train station displays, and chain restaurants now have English</span>. The hard parts are smaller local restaurants, taxis with older drivers, and very specific questions at customer service.
                  </p>
                  <p>
                    The right phone apps and a few survival phrases close almost every gap.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Language anxiety is the single biggest concern I hear from first-time Japan visitors. Most of it dissolves within two days of being in Tokyo — but the right preparation makes the first 48 hours much smoother. This guide is what I tell guests in their pre-tour emails when they ask "how worried should we be about the language?"
                </p>

                <InlineCTA
                  message="Want a Tokyo day where someone handles the Japanese for you?"
                  linkText="See my private tour options →"
                  href="/tours"
                />

                {/* Section 01 */}
                <div className="section-eyebrow"><span>Section 01 · Big Picture</span></div>
                <h2 id="section-01-big-picture" className="scroll-mt-20">
                  The Honest Big Picture
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most Tokyoites have studied English for six years in school but rarely use it. The result: many people understand more written English than they speak, and many will respond in basic English if you speak slowly. Younger people (especially in central Tokyo) are more comfortable. Older taxi drivers and shop owners may not be — but they're patient and good at gestures.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Where English coverage is good:</strong> JR train stations, Shinkansen, major hotels, chain restaurants in tourist areas, museums, the Imperial Palace, large department stores, airports.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Where English is sparse:</strong> Small local restaurants (especially counter sushi and izakaya), taxis with drivers over 50, pharmacy interactions, post office, traditional craft shops, small ryokan.
                </p>

                {/* Section 02 */}
                <div className="section-eyebrow"><span>Section 02 · Apps</span></div>
                <h2 id="section-02-apps" className="scroll-mt-20">
                  Apps That Actually Work
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Google Translate.</strong> The camera/photo translation works extremely well for restaurant menus, signs, and product labels. Conversation mode is good for back-and-forth with shop staff. Download Japanese for offline use before you arrive.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Google Maps.</strong> Train directions in English are exact, including platform numbers and transfer information. The walking directions are reliable. Save your hotel as "home" before you arrive.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Navitime for Japan Travel.</strong> Specifically built for foreign tourists. Better than Google Maps for some train edge cases (like the JR Pass coverage).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Currency converter.</strong> Any one will do. Pre-set JPY to your home currency before you arrive.
                </p>

                {/* Section 03 */}
                <div className="section-eyebrow"><span>Section 03 · Stations</span></div>
                <h2 id="section-03-stations" className="scroll-mt-20">
                  Train Station Navigation
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/jr-okachimachi-station-entrance.webp"
                    alt="A JR station entrance in Tokyo with dual English-Japanese signage"
                    className="w-full h-[380px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    Most Tokyo stations now have clear English signage and station codes (e.g. JY28 = Shibuya)
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every JR and Tokyo Metro station has dual English/Japanese signs, color-coded lines, and numbered station codes (e.g., Shibuya is JY20 on the Yamanote line). The station numbers are the easiest way to communicate routes when you don't know the Japanese names.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Practical tip:</strong> Screenshot your destination's station code (e.g., "JY28 — Shibuya") and show it to any train station staff. They'll point you to the right platform.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Suica/Pasmo IC cards:</strong> Get one at the airport — they're contactless prepaid cards that work on every train, bus, and many convenience stores. No language needed to use them.
                </p>

                {/* Section 04 */}
                <div className="section-eyebrow"><span>Section 04 · Restaurants</span></div>
                <h2 id="section-04-restaurants" className="scroll-mt-20">
                  Restaurants: The 3 Strategies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">1. Point at plastic food displays.</strong> Many restaurants have plastic food samples in the window. Point at what you want when ordering. This is universally accepted.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">2. Use the menu number.</strong> Most menus number each item. Just say the number ("ichi" = 1, "ni" = 2, "san" = 3, "yon" = 4, "go" = 5, "roku" = 6).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">3. Google Translate the menu.</strong> Open camera mode and point at the Japanese text. The translation appears overlaid in English. This works for handwritten menus too.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Survival phrase:</strong> "Sumimasen, eigo no menu arimasu ka?" (Excuse me, do you have an English menu?). Many restaurants do have one but only bring it out when asked.
                </p>

                {/* Section 05 */}
                <div className="section-eyebrow"><span>Section 05 · Shopping</span></div>
                <h2 id="section-05-shopping" className="scroll-mt-20">
                  Shopping & Convenience Stores
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Convenience stores (Family Mart, 7-Eleven, Lawson) are extremely tourist-friendly. You can buy hot food, basic toiletries, sandwiches, drinks — all without speaking a word of Japanese. The cashier may ask one or two yes/no questions; "ii desu" (it's fine) covers most situations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Department stores:</strong> Tax-free counters exist in every major store. Bring your passport. Most clerks at the tax-free counter speak basic English.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Cash vs cards:</strong> Cards work in most chain restaurants, hotels, and department stores. Smaller restaurants and traditional shops still require cash. Carry ¥10,000-20,000 in cash at all times — see also <Link to="/blog/tokyo-on-a-budget" className="text-accent hover:underline">my Tokyo on a budget guide</Link>.
                </p>

                {/* Section 06 */}
                <div className="section-eyebrow"><span>Section 06 · Emergency</span></div>
                <h2 id="section-06-emergency" className="scroll-mt-20">
                  Emergency Words to Know
                </h2>
                <ul className="list-disc pl-6 mb-8 space-y-2 text-muted-foreground leading-relaxed">
                  <li><strong>Sumimasen</strong> — "Excuse me / sorry" — the most useful word in Japanese</li>
                  <li><strong>Arigatou gozaimasu</strong> — "Thank you very much"</li>
                  <li><strong>Eigo wakarimasu ka?</strong> — "Do you understand English?"</li>
                  <li><strong>Toire wa doko desu ka?</strong> — "Where is the toilet?"</li>
                  <li><strong>Ikura desu ka?</strong> — "How much is it?"</li>
                  <li><strong>Tasukete kudasai</strong> — "Please help me"</li>
                  <li><strong>Byouin ni ikitai</strong> — "I want to go to a hospital"</li>
                </ul>

                {/* Section 07 */}
                <div className="section-eyebrow"><span>Section 07 · Guide</span></div>
                <h2 id="section-07-guide" className="scroll-mt-20">
                  When to Just Hire an English-Speaking Guide
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most of Tokyo is doable with apps and patience. But there are specific situations where having a guide who fluently bridges English and Japanese genuinely changes the trip:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground leading-relaxed">
                  <li>Counter sushi or small izakaya where you want to interact with the chef</li>
                  <li>Tea ceremonies or other cultural experiences with traditional hosts</li>
                  <li>Medical or pharmacy visits (translation apps struggle with medical terms)</li>
                  <li>Negotiating accommodation issues or hotel problems</li>
                  <li>Day trips outside Tokyo where English drops off (Nikko, Hakone interior)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  See <Link to="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" className="text-accent hover:underline">my "is a guide worth it" breakdown</Link> for the cost-benefit math.
                </p>

                <InlineCTA
                  message="Want a Tokyo day with the language handled for you?"
                  linkText="Hire me as your private guide →"
                  href="/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Section 08 · FAQ</span></div>
                <h2 id="section-08-faq" className="scroll-mt-20">
                  Frequently Asked Questions
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">Will most Tokyo restaurants have English menus?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Chain restaurants and tourist-area restaurants: yes. Small local restaurants: usually no, but Google Translate camera mode works on Japanese menus reliably.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Do taxi drivers speak English?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Generally no. Show drivers the destination in Japanese (Google Maps usually shows the Japanese name when you click), or use a hotel business card showing your destination.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Is the Japan Rail Pass purchase process in English?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, fully. JR offices at airports and major stations have English-speaking staff specifically for tourists. See <Link to="/blog/japan-rail-pass-worth-it" className="text-accent hover:underline">my JR Pass guide</Link>.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">What if I have a medical emergency?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Call 119 for ambulance, 110 for police. Many hospitals in Tokyo have English-speaking doctors — your hotel concierge can direct you. The phrase "Eigo no isha imasu ka?" means "is there an English-speaking doctor?"
                    </p>
                  </div>
                </div>

                <InlineCTA
                  message="Ready to plan a Tokyo trip with the language handled?"
                  linkText="Contact me →"
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
              headline: "English-Friendly Tokyo: 12 Tips That Make Tokyo Feel Easier",
              description: "A licensed Tokyo guide explains the apps, phrases, and strategies that close the language gap in Tokyo for non-Japanese speakers.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/english-friendly-tokyo-tips" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EnglishFriendlyTokyoTips;
