import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const RainyDayTokyo = () => {
  return (
    <Layout>
      <SEO
        title="Rainy Day in Tokyo: 14 Things to Do When the Weather Turns"
        description="Indoor markets, museums, observation decks, cafes — and 3 places that are actually better in the rain. A licensed Tokyo guide on rescuing rainy days."
        canonicalPath="/blog/rainy-day-tokyo"
        hreflang={[
          { lang: "en", path: "/blog/rainy-day-tokyo" },
          { lang: "es", path: "/es/blog/dia-de-lluvia-en-tokio" },
          { lang: "x-default", path: "/blog/rainy-day-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Rainy Day Tokyo" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/night-shibuya-crossing.jpg"
          imageAlt="Shibuya Crossing neon lights reflected on damp pavement at night — Tokyo on a rainy evening"
          eyebrow="Plan Your Trip"
          title="Rainy Day Tokyo: 14 Things to Do When the Weather Turns"
          subtitle="Indoor markets, museums, hidden cafes — and three places that are genuinely better in the rain. From a licensed Tokyo guide who's run more wet-weather days than dry ones."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Quick Picks", href: "#section-01-quick-picks" },
                { num: "02", label: "Indoor Markets", href: "#section-02-markets" },
                { num: "03", label: "Museums Worth It", href: "#section-03-museums" },
                { num: "04", label: "Observation Decks", href: "#section-04-decks" },
                { num: "05", label: "Department Store Food Floors", href: "#section-05-depachika" },
                { num: "06", label: "3 Places Better in Rain", href: "#section-06-better-in-rain" },
                { num: "07", label: "Onsen as Plan B", href: "#section-07-onsen" },
                { num: "08", label: "FAQ", href: "#section-08-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Quick picks</p>
                  <h2>If it's raining, switch to indoor markets, museums, or depachika. Don't try to push through outdoor temples in the rain.</h2>
                  <p>
                    <span className="hl-gold">Tokyo has more indoor depth than any other Japanese city</span> — entire neighborhoods are connected by underground passages, the museums are world-class, and the department store food floors are a 2-hour experience in themselves.
                  </p>
                  <p>
                    Three places are actually better in the rain: Yanaka Cemetery, Meiji Shrine forest, and Hakone Open-Air Museum if you're already there. The rest is about finding the right indoor pivot.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Tokyo's rainy season (tsuyu) runs roughly mid-June to mid-July, and typhoon season runs August-October. But rain can happen any month. The good news is Tokyo is built for it — sub-station underground passages connect entire neighborhoods, almost every major attraction has covered approaches, and many things people travel to Tokyo for are actually better indoors anyway.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  This is the rainy-day playbook I run when guests ask "can we still do something today?" The answer is almost always yes — with the right pivot.
                </p>

                <InlineCTA
                  message="Want a rainy-day Tokyo plan built around your specific dates?"
                  linkText="See my private tour options →"
                  href="/tours"
                />

                {/* Section 01 */}
                <div className="section-eyebrow"><span>Section 01 · Quick Picks</span></div>
                <h2 id="section-01-quick-picks" className="scroll-mt-20">
                  Quick Picks: 14 Things That Work in the Rain
                </h2>
                <ol className="list-decimal pl-6 mb-8 space-y-2 text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">Ameyoko market arcade</strong> (Ueno) — covered shopping street</li>
                  <li><strong className="text-foreground">Tsukiji Outer Market</strong> — many stalls are covered; see <Link to="/blog/tsukiji-market-guide" className="text-accent hover:underline">my Tsukiji guide</Link></li>
                  <li><strong className="text-foreground">Tokyo National Museum</strong> (Ueno) — Japan's largest, easy half-day</li>
                  <li><strong className="text-foreground">teamLab Planets / Borderless</strong> — fully indoor, world-famous</li>
                  <li><strong className="text-foreground">Shibuya Sky observation deck</strong> — indoor lower level even if outdoor closed</li>
                  <li><strong className="text-foreground">Department store depachika</strong> — food-floor exploration; see #5 below</li>
                  <li><strong className="text-foreground">Yanaka Cemetery walk</strong> — see #6 below, genuinely better in light rain</li>
                  <li><strong className="text-foreground">Tokyo Skytree complex</strong> — observation + Solamachi mall</li>
                  <li><strong className="text-foreground">Edo-Tokyo Museum</strong> — when reopened, the city's history palace</li>
                  <li><strong className="text-foreground">Ghibli Museum</strong> — book ahead, indoor wonderland</li>
                  <li><strong className="text-foreground">Mori Art Museum</strong> (Roppongi) — contemporary art + city view</li>
                  <li><strong className="text-foreground">National Museum of Western Art</strong> — Le Corbusier building alone is worth it</li>
                  <li><strong className="text-foreground">Origami Kaikan</strong> — workshops in a quiet building</li>
                  <li><strong className="text-foreground">Onsen / sentō day trip</strong> — covered in section 7</li>
                </ol>

                {/* Section 02 */}
                <div className="section-eyebrow"><span>Section 02 · Markets</span></div>
                <h2 id="section-02-markets" className="scroll-mt-20">
                  Indoor and Covered Markets
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Ameyoko (Ueno).</strong> An open-air market under elevated train tracks, so much of it is naturally covered. About 400 shops selling fresh fish, dried goods, clothing, and street food. A great rainy-day stop because you can walk for hours without getting wet.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Tsukiji Outer Market.</strong> Many stalls have awnings or are inside small buildings. The covered arcade sections are easy to navigate in the rain. Most of the food stalls operate regardless of weather.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Yanaka Ginza.</strong> Covered shotengai (shopping street) with old-school Tokyo charm. See my <Link to="/blog/yanaka-tokyo-walking-route" className="text-accent hover:underline">Yanaka walking route</Link> — the cemetery part works in light rain, the Ginza part covers you.
                </p>

                {/* Section 03 */}
                <div className="section-eyebrow"><span>Section 03 · Museums</span></div>
                <h2 id="section-03-museums" className="scroll-mt-20">
                  Museums Worth the Rainy Day
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tokyo's museum density is excellent. A few standouts:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Tokyo National Museum (Ueno).</strong> Japan's largest museum with the most important historical collection — samurai armor, Buddhist sculpture, ukiyo-e prints. Easy half-day. English audio guides excellent.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Mori Art Museum (Roppongi).</strong> Contemporary art with rotating exhibitions, plus a 360-degree city observation deck on the same ticket. Two attractions in one building.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">teamLab Planets (Toyosu).</strong> Immersive digital art installation. Book ahead — sells out routinely. Fully indoor, but you walk through water installations so wear shorts or roll up your pants.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Edo-Tokyo Museum.</strong> Reopened on March 31, 2026 after a four-year renovation. An unmatched look at the history of Tokyo as a city, with a full-scale recreation of the Edo-period Hattori Watch Shop and new large-scale screens recreating Edo and modern Tokyo skies.
                </p>

                {/* Section 04 */}
                <div className="section-eyebrow"><span>Section 04 · Decks</span></div>
                <h2 id="section-04-decks" className="scroll-mt-20">
                  Observation Decks (Indoor Levels)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Tokyo Skytree.</strong> Two observation levels (350m and 450m), both fully enclosed. Even in rain, the dynamic clouds and weather create dramatic views. Tokyo Solamachi at the base is a full shopping/dining mall.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Shibuya Sky.</strong> Indoor lower level remains open even when the outdoor roof closes for weather. Worth visiting for the Shibuya Crossing aerial view alone.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Tokyo Tower Top Deck.</strong> Smaller and less visited than Skytree. Indoor views over Tokyo. Worth it as a quieter alternative.
                </p>

                {/* Section 05 */}
                <div className="section-eyebrow"><span>Section 05 · Depachika</span></div>
                <h2 id="section-05-depachika" className="scroll-mt-20">
                  Depachika: Department Store Food Floors
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This is a uniquely Japanese rainy-day activity. The underground food floors of major department stores — Isetan Shinjuku, Mitsukoshi Nihonbashi, Takashimaya in Shinjuku and Nihonbashi — are dense gourmet markets selling everything from foie gras to handmade mochi.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Spend two hours wandering, sampling, and assembling a picnic-style lunch you can take back to your hotel. The Takashimaya in Shinjuku alone has 100+ food vendors. The quality is consistently excellent, the air conditioning is welcome, and you'll see how Tokyo's middle class eats.
                </p>
                <blockquote className="pull-quote">
                  Depachika is more interesting than half the museums on most "Tokyo top 10" lists, and tourists rarely find their way down.
                </blockquote>

                {/* Section 06 */}
                <div className="section-eyebrow"><span>Section 06 · Better in Rain</span></div>
                <h2 id="section-06-better-in-rain" className="scroll-mt-20">
                  Three Places That Are Actually Better in the Rain
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/meiji-shrine-forest.webp"
                    alt="Meiji Shrine forest path — quiet and atmospheric in light rain"
                    className="w-full h-[400px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    The Meiji Shrine forest approach — the muted sounds and dripping torii make rain part of the experience
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">1. Yanaka Cemetery.</strong> The atmospheric cemetery walk that's part of <Link to="/blog/yanaka-tokyo-walking-route" className="text-accent hover:underline">my Yanaka route</Link> takes on a different quality in light rain. The stone lanterns and cherry trees are quieter, the photography is more cinematic, and the small temples nearby become cozier refuges.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">2. Meiji Shrine forest.</strong> The forest approach to Meiji Shrine is dense, dark, and otherworldly in rain. The torii dripping with water, the gravel path leading deeper into the forest, the muted sounds — it's a more contemplative experience than the bright clear-day version.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">3. Hakone Open-Air Museum (if you're already there).</strong> The Picasso pavilion is indoor, but the outdoor sculptures look different in the rain — more reflective surfaces, fewer crowds, and a Mt Fuji that occasionally breaks through the cloud cover dramatically.
                </p>

                {/* Section 07 */}
                <div className="section-eyebrow"><span>Section 07 · Onsen</span></div>
                <h2 id="section-07-onsen" className="scroll-mt-20">
                  Onsen as Plan B
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Rainy days are the best days for onsen. The contrast between cold rain and hot water is the point of the experience. Tokyo has several day-trip onsen options:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Spa LaQua (Tokyo Dome).</strong> Central, easy to reach, multiple baths in a hot spring building.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Note:</strong> The famous Oedo-Onsen Monogatari in Odaiba permanently closed in September 2021 — guidebooks still list it incorrectly. For a similar day-trip onsen, head to Spa LaQua at Tokyo Dome (above) or to Hakone (below).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Hakone day trip.</strong> If you're committed to an onsen experience, Hakone is a 2-hour ride and gives you a real ryokan-style onsen day. See <Link to="/blog/hakone-day-trip-guide-vs-solo" className="text-accent hover:underline">my Hakone day trip guide</Link>.
                </p>

                <InlineCTA
                  message="Want a rainy-day Tokyo plan custom to your trip?"
                  linkText="Contact me to design one →"
                  href="/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Section 08 · FAQ</span></div>
                <h2 id="section-08-faq" className="scroll-mt-20">
                  Frequently Asked Questions
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">When is Tokyo's rainy season?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mid-June to mid-July is tsuyu, the official rainy season. Typhoons happen August-October. December-February is the driest period.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Should I bring a raincoat or an umbrella?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Both work, but transparent plastic umbrellas (¥500 at any convenience store) are the universal Tokyo standard. Don't bring a bulky travel umbrella from home — buy one when you arrive.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Are temples closed in heavy rain?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No, but visiting them in pouring rain is uncomfortable. Smaller indoor temple halls remain peaceful refuges, but the photogenic outdoor architecture loses much of its appeal.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Should I cancel a day trip if rain is forecast?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Kawaguchiko yes (the value is the view). Hakone no (plenty to do indoors). Kamakura depends — light rain is okay, heavy rain limits the temple-walking experience. See <Link to="/blog/best-day-trips-from-tokyo" className="text-accent hover:underline">my day trip ranking</Link>.
                    </p>
                  </div>
                </div>

                <InlineCTA
                  message="Ready to rescue your rainy-day Tokyo trip?"
                  linkText="Get in touch →"
                  href="/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["asakusa", "tsukiji-ginza", "custom"]} showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Rainy Day in Tokyo: 14 Things to Do When the Weather Turns",
              description: "A licensed Tokyo guide ranks 14 indoor and rain-friendly activities, plus three places that are actually better in the rain.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/rainy-day-tokyo" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default RainyDayTokyo;
