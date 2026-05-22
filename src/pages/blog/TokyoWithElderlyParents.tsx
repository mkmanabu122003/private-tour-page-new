import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const TokyoWithElderlyParents = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo with Elderly Parents: Accessible Routes & 3-Generation Trip Ideas"
        description="Wheelchair-friendly Tokyo routes, elevators-not-stairs station tips, half-day pacing. A licensed guide explains how to plan Tokyo with parents in their 70s or 80s."
        canonicalPath="/blog/tokyo-with-elderly-parents"
        hreflang={[
          { lang: "en", path: "/blog/tokyo-with-elderly-parents" },
          { lang: "es", path: "/es/blog/tokio-con-padres-mayores" },
          { lang: "x-default", path: "/blog/tokyo-with-elderly-parents" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Tokyo with Elderly Parents" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tours/imperial-palace-gardens.webp"
          imageAlt="The Imperial Palace East Gardens — flat, walkable, accessible"
          eyebrow="Plan Your Trip"
          title="Tokyo with Elderly Parents: Accessible Routes for 3-Generation Trips"
          subtitle="A licensed Tokyo guide on pacing, wheelchair-friendly stations, half-day plans, and the small adjustments that make Tokyo work for parents in their 70s or 80s."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Pacing First", href: "#section-01-pacing" },
                { num: "02", label: "Best Areas", href: "#section-02-best-areas" },
                { num: "03", label: "Avoid These Stations", href: "#section-03-avoid-stations" },
                { num: "04", label: "Accessible Restaurants", href: "#section-04-restaurants" },
                { num: "05", label: "Half-Day Examples", href: "#section-05-half-day" },
                { num: "06", label: "Onsen Considerations", href: "#section-06-onsen" },
                { num: "07", label: "FAQ", href: "#section-07-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Quick plan</p>
                  <h2>Cut your itinerary in half. Stay near elevators. Eat lunch at flat, table-seating places.</h2>
                  <p>
                    <span className="hl-gold">Tokyo is genuinely accessible — Japan's bullet train system is wheelchair-friendly, most major stations have elevators, and the largest temples have ramps</span>. The challenge isn't accessibility, it's the volume and pace that work for younger travelers.
                  </p>
                  <p>
                    The single biggest adjustment: do half-day mornings only. Afternoons should be flexible. Two highlights a day, not five.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I've guided three-generation families in Tokyo many times, with parents ranging from active 70-somethings to wheelchair-bound 80-somethings. The trip planning that works for younger travelers fails completely with elderly parents in the group — but the trip that works for elderly parents can still be wonderful for everyone if you plan it correctly.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  This guide is for the adult kids organizing the trip. Most Tokyo travel content assumes a baseline of mobility that doesn't apply to 75+ travelers, so here's what actually works.
                </p>

                <InlineCTA
                  message="Want a Tokyo tour designed around your parents' actual pace?"
                  linkText="See accessible private tour options →"
                  href="/contact"
                />

                {/* Section 01 */}
                <div className="section-eyebrow"><span>Section 01 · Pacing</span></div>
                <h2 id="section-01-pacing" className="scroll-mt-20">
                  Pacing Comes First: The Half-Day Rule
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The single most important thing to understand: <strong className="text-foreground">cut the number of activities per day in half compared to what you'd plan for yourself.</strong> Two highlights per day is a real day for travelers in their late 70s. Three is ambitious. Five is the kind of itinerary that ends in tears.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My usual structure with three-generation families: <strong className="text-foreground">a morning activity (9 AM–12 PM), a sit-down lunch (12–1:30 PM), a calm afternoon (museum or garden, optional)</strong>, and back at the hotel by 4 PM for rest before dinner. Anyone who wants to do more can split off in the afternoon. The elderly parents have done a complete Tokyo day by 4 PM.
                </p>

                {/* Section 02 */}
                <div className="section-eyebrow"><span>Section 02 · Best Areas</span></div>
                <h2 id="section-02-best-areas" className="scroll-mt-20">
                  Best Areas for Accessible Tokyo
                </h2>
                <figure className="my-6">
                  <img
                    src="/images/blog/imperial-nijubashi.jpg"
                    alt="Imperial Palace Nijubashi bridge — flat, accessible, surrounded by benches"
                    className="w-full h-[380px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    Imperial Palace area — flat paths, plenty of benches, and elevator access at Tokyo Station's Marunouchi side
                  </figcaption>
                </figure>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Ueno.</strong> Flat, large park area, multiple major museums with elevators (Tokyo National Museum, Museum of Western Art), easy benches. The neighborhood is genuinely walkable and not crowded.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Imperial Palace East Gardens.</strong> Wide flat paths, plenty of benches, garden setting. Perfect for a 1-2 hour morning. Access via Tokyo Station (large elevators, good signage in English).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Marunouchi area around Tokyo Station.</strong> Modern, wide sidewalks, accessible everywhere, beautiful tree-lined streets, good for slow walks.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Asakusa Senso-ji main approach.</strong> Flat, the temple itself has ramps. Avoid Hozomon Gate steps by using the side ramp. The main Nakamise shopping street is wide and easy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Shinjuku Gyoen national garden.</strong> Wide flat paths, well-maintained, plenty of seating, multiple entrances.
                </p>

                {/* Section 03 */}
                <div className="section-eyebrow"><span>Section 03 · Avoid Stations</span></div>
                <h2 id="section-03-avoid-stations" className="scroll-mt-20">
                  Stations to Avoid (or Plan Carefully)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tokyo's train stations vary enormously in accessibility. Most are now equipped with elevators, but the layout can mean walking 5-10 minutes between elevators to change lines.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Difficult:</strong> Shinjuku (massive, complex transfers between lines), Shibuya (deep platforms, many escalators), Akasaka-mitsuke (multiple levels), Tokyo Station Yaesu side (long passages).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Easier:</strong> Ueno (compact), Tokyo Station Marunouchi side (well-signed, elevators), Asakusa Tobu line (small station), Roppongi (newer accessibility).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Strategy:</strong> Plan day trips that minimize line transfers. A Yamanote-line-only day from Tokyo Station → Ueno → Asakusa (taxi from Ueno) is easier than a multi-transfer route.
                </p>

                {/* Section 04 */}
                <div className="section-eyebrow"><span>Section 04 · Restaurants</span></div>
                <h2 id="section-04-restaurants" className="scroll-mt-20">
                  Accessible Restaurants
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Many traditional Japanese restaurants require sitting on the floor (zashiki) or at low tables. For elderly parents, look for:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground leading-relaxed">
                  <li><strong>Department store restaurant floors</strong> (depachika) — always table seating, often English menus</li>
                  <li><strong>Hotel restaurants</strong> for a relaxed lunch — accessible, English service, predictable quality</li>
                  <li><strong>Counter sushi</strong> — easier than floor seating; pick a place with regular bar stools, not low counters</li>
                  <li><strong>Yoshoku restaurants</strong> (Japanese-Western fusion) — always tables, familiar food options for picky eaters</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Avoid:</strong> tatami-only restaurants, izakaya with floor seating, ramen counters where seating turnover is fast.
                </p>

                {/* Section 05 */}
                <div className="section-eyebrow"><span>Section 05 · Half-Day</span></div>
                <h2 id="section-05-half-day" className="scroll-mt-20">
                  Three Half-Day Itineraries That Work
                </h2>
                <h3>Day A: Imperial Palace + Marunouchi Lunch</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  9:30 AM Imperial Palace East Gardens (1.5 hours, flat paths, benches). 11:00 AM walk to Marunouchi (10 minutes on flat sidewalks). 11:30 AM lunch at a Marunouchi building restaurant. 1:00 PM back to hotel for rest.
                </p>
                <h3>Day B: Senso-ji + Asakusa Lunch</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  10:00 AM arrive Asakusa (use Tobu Sky Tree Line). 10:15 AM walk Nakamise shopping street (slow pace, plenty of benches). 11:00 AM Senso-ji main hall (ramp access). 12:00 PM lunch at one of the older tempura restaurants. 1:30 PM optional Sumida River walk or back to hotel.
                </p>
                <h3>Day C: Ueno Museum + Park</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  10:00 AM Tokyo National Museum (elevators, benches, manageable pace). 12:00 PM lunch at a Ueno Park restaurant. 1:30 PM Ueno Park walk (flat, easy). 2:30 PM back to hotel.
                </p>

                {/* Section 06 */}
                <div className="section-eyebrow"><span>Section 06 · Onsen</span></div>
                <h2 id="section-06-onsen" className="scroll-mt-20">
                  Onsen Considerations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Many elderly parents are interested in onsen, but standard onsen require sitting on small wooden stools to wash beforehand, and the baths themselves are deep. <strong className="text-foreground">If your parents have mobility issues:</strong>
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground leading-relaxed">
                  <li>Choose <strong>ryokan with in-room baths</strong> (kashikiri) — many newer Hakone/Atami ryokan have these</li>
                  <li>Look for onsen with <strong>chair lifts</strong> or barrier-free designs (some Hakone ryokan)</li>
                  <li>Consider <strong>onsen day-trip facilities</strong> (super-sento) that have railings and wider stairs</li>
                  <li>Tattoo policies still apply — check ahead if relevant</li>
                </ul>

                <InlineCTA
                  message="Want me to plan an accessible Tokyo day around your parents' specific needs?"
                  linkText="Send me your situation and I'll plan it →"
                  href="/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Section 07 · FAQ</span></div>
                <h2 id="section-07-faq" className="scroll-mt-20">
                  Frequently Asked Questions
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">Is Tokyo wheelchair accessible?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, more than most travelers expect. All major JR stations have elevators, most subway lines are accessible, and major attractions (Senso-ji, Imperial Palace, museums) have ramps. The challenge is route planning rather than absolute access.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Are taxis a good option for elderly parents?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, and don't hesitate to use them. Tokyo taxis are clean, automatic-door, and reasonably priced for short hops (¥500-1,500 most rides). They save energy that trains drain.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Should we rent a wheelchair in Tokyo?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Most major train stations and large attractions have wheelchairs you can borrow free for the day. Hotel concierges can also arrange rentals. Don't bring one from home unless you need a specific type.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Is a private guide worth it for an elderly parent trip?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, more than for any other trip type. The pacing, restaurant selection, and station navigation are exactly what licensed guides do well. See <Link to="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" className="text-accent hover:underline">my honest "is it worth it" breakdown</Link>.
                    </p>
                  </div>
                </div>

                <InlineCTA
                  message="Ready to plan an accessible Tokyo trip with the family?"
                  linkText="Get in touch →"
                  href="/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["custom", "asakusa", "imperial-palace"]} showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Tokyo with Elderly Parents: Accessible Routes & 3-Generation Trip Ideas",
              description: "A licensed Tokyo guide on pacing, wheelchair-friendly stations, accessible restaurants, half-day itineraries, and onsen options for travelers in their 70s and 80s.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/tokyo-with-elderly-parents" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default TokyoWithElderlyParents;
