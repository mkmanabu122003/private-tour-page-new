import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const EnoshimaDayTripFromTokyo = () => {
  return (
    <Layout>
      <SEO
        title="Enoshima Day Trip from Tokyo 2026: Beaches, Shrines, Kamakura Combo"
        description="Enoshima is 1h from Tokyo: shrine cave, beach, sunset views, Mt Fuji on clear days. A licensed guide on combining with Kamakura, what to eat, and avoiding tourist traps."
        canonicalPath="/blog/enoshima-day-trip-from-tokyo"
        hreflang={[
          { lang: "en", path: "/blog/enoshima-day-trip-from-tokyo" },
          { lang: "es", path: "/es/blog/excursion-enoshima-desde-tokio" },
          { lang: "x-default", path: "/blog/enoshima-day-trip-from-tokyo" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Enoshima Day Trip" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/blog/enoshima-island-hero.webp"
          imageAlt="Enoshima island viewed from the beach with the Sea Candle observation tower on top"
          eyebrow="Day Trips"
          title="Enoshima Day Trip from Tokyo: Beach, Shrines, and Sunset Views"
          subtitle="A small island, a sacred cave, a beach sunset, and Mt Fuji on a clear day — all within an hour of Tokyo. Plus how to combine it with Kamakura."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc items={[
                { num: "01", label: "Quick Plan", href: "#section-01-quick-plan" },
                { num: "02", label: "Why Enoshima", href: "#section-02-why-enoshima" },
                { num: "03", label: "How to Get There", href: "#section-03-getting-there" },
                { num: "04", label: "1-Day Walking Route", href: "#section-04-walking-route" },
                { num: "05", label: "Combining with Kamakura", href: "#section-05-kamakura-combo" },
                { num: "06", label: "What to Eat", href: "#section-06-what-to-eat" },
                { num: "07", label: "FAQ", href: "#section-07-faq" }
              ]} />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Quick plan</p>
                  <h2>Take the Odakyu line from Shinjuku, walk the island, and time your day around sunset.</h2>
                  <p>
                    <span className="hl-gold">Enoshima is best as a half-day combined with Kamakura</span>, not a full day on its own. The two are connected by the Enoden line in 25 minutes, and most visitors do both in roughly 8 hours.
                  </p>
                  <p>
                    Go on a clear afternoon for the Mt Fuji silhouette at sunset. Skip it entirely if the weather is bad — the island's appeal is mostly the views.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Enoshima is the small island I send guests to when they want a coastal break from Tokyo without committing to a full beach trip. It's a hour from Shinjuku, has a sacred cave that's been a pilgrimage site for over 1,400 years, and on a clear day gives you a Mt Fuji silhouette across Sagami Bay. It's also one of the few places near Tokyo where you can watch the sun set over the Pacific.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Most international guidebooks treat Enoshima as a footnote next to Kamakura. That's not wrong — Kamakura is the bigger destination — but it understates what makes Enoshima worth your time, which is a specific kind of coastal Japanese experience you can't get in Tokyo itself.
                </p>

                <InlineCTA
                  message="Want a guided Kamakura + Enoshima day with the train logistics handled?"
                  linkText="See my Kamakura day trip options →"
                  href="/tours/kamakura-day-trip"
                />

                {/* Section 01 */}
                <div className="section-eyebrow"><span>Section 01 · Quick Plan</span></div>
                <h2 id="section-01-quick-plan" className="scroll-mt-20">
                  Quick Plan: The 8-Hour Enoshima Day
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you're reading this with limited patience, here's the plan I'd give you: take the 10 AM Odakyu Romancecar from Shinjuku, arrive at Katase-Enoshima around 11:15 AM, walk across the bridge, climb the island to Iwaya Cave, then ride the Enoden line to Kamakura for the afternoon. End the day with sunset at Yuigahama Beach and dinner in Kamakura before heading back to Tokyo.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Total cost: roughly ¥3,500-4,500 in transport, plus food and a few small attractions. Total time: about 8 hours door-to-door from Tokyo.
                </p>

                {/* Section 02 */}
                <div className="section-eyebrow"><span>Section 02 · Why Enoshima</span></div>
                <h2 id="section-02-why-enoshima" className="scroll-mt-20">
                  Why Enoshima Is Worth a Detour
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The island is tiny — you can walk across it in 20 minutes — but it's stacked with things to see. <strong className="text-foreground">Enoshima Shrine</strong> is split across three sub-shrines on the island and is dedicated to Benzaiten, the goddess of music, art, and prosperity. The shrines aren't visually spectacular (these are functional working shrines, not Toshogu-level architecture), but the walking path through them is part of the experience.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Iwaya Cave</strong> at the far end of the island is the real reason to come. It's a coastal cave that's been a religious site since the 6th century, with paths lit by candles and statues of the goddess. The walk to reach it traces the cliff edge of the island and gives you the most photogenic Pacific Ocean views of the day.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Sea Candle observation tower</strong> rises from the center of the island and on a clear day shows Mt Fuji across the bay. There's an escalator (the Enoshima Escar) that takes you most of the way up if you don't want to climb the stairs — it's a small paid ride but worth it for first-time visitors.
                </p>
                <figure className="my-6">
                  <img
                    src="/images/blog/enoshima-sea-candle.webp"
                    alt="The Sea Candle observation tower on Enoshima island"
                    className="w-full h-[380px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    The Sea Candle observation tower in the middle of Enoshima
                  </figcaption>
                </figure>
                <figure className="my-6">
                  <img
                    src="/images/blog/enoshima-cliff.webp"
                    alt="Coastal cliffs near Iwaya Cave on Enoshima"
                    className="w-full h-[380px] object-cover rounded-lg shadow-md"
                    loading="lazy"
                    width={800}
                    height={533}
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    The cliff path leading to Iwaya Cave at the far end of the island
                  </figcaption>
                </figure>

                {/* Section 03 */}
                <div className="section-eyebrow"><span>Section 03 · Getting There</span></div>
                <h2 id="section-03-getting-there" className="scroll-mt-20">
                  How to Get There from Tokyo
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">From Shinjuku (recommended):</strong> Odakyu Romancecar to Katase-Enoshima, ~65–70 minutes, about ¥1,400 one-way (¥650 base fare + ¥750 limited-express surcharge). This is the fastest, most comfortable option.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">From Shinjuku (cheaper):</strong> Odakyu local line to Fujisawa, transfer to the Enoden line to Enoshima Station. Around 90 minutes total, ~¥640 one-way. Slower but considerably cheaper.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">From Kamakura:</strong> Enoden line, 25 minutes, ¥260. This is what makes the Kamakura + Enoshima combo so efficient — the train ride itself runs along the coast and is part of the experience.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you're doing both, consider the <strong className="text-foreground">Enoshima Kamakura Free Pass</strong> from Odakyu (~¥1,640 from Shinjuku) which covers round-trip transport plus unlimited Enoden rides.
                </p>

                {/* Section 04 */}
                <div className="section-eyebrow"><span>Section 04 · Walking Route</span></div>
                <h2 id="section-04-walking-route" className="scroll-mt-20">
                  Suggested Walking Route on the Island
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>1.</strong> Cross Benten Bridge from the mainland (10 minutes on foot). The view back at the bridge with Mt Fuji in the distance is a classic photo. <strong>2.</strong> Walk up Nakamise-dori, the shop-lined street leading to the first shrine. Stop for <em>shirasu</em> (whitebait) snacks. <strong>3.</strong> Hetsunomiya Shrine, the first of three. <strong>4.</strong> Sea Candle observation tower for the panoramic view. <strong>5.</strong> Nakatsunomiya and Okutsunomiya Shrines. <strong>6.</strong> Down the back side of the island to Iwaya Cave. <strong>7.</strong> Return via the same path or take the boat back to the main bridge (¥400, weather-dependent).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Total walking time: 2.5-3 hours including stops. The island has stairs and slopes — the Escar escalator (¥360) saves your legs on the steepest section.
                </p>

                {/* Section 05 */}
                <div className="section-eyebrow"><span>Section 05 · Kamakura Combo</span></div>
                <h2 id="section-05-kamakura-combo" className="scroll-mt-20">
                  Combining with Kamakura
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most of my guests find Enoshima slightly underwhelming on its own. It's beautiful, but it's small. The smarter play is to use Enoshima as the morning half of a Kamakura day — see the cave and the sea before lunch, then take the Enoden to Kamakura and spend the afternoon at the Great Buddha, Hokoku-ji Bamboo Temple, and Komachi-dori shopping street.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For the full Kamakura plan, see my <Link to="/blog/kamakura-day-trip-from-tokyo" className="text-accent hover:underline">Kamakura day trip guide</Link>. For how this compares to other day trips, see my <Link to="/blog/best-day-trips-from-tokyo" className="text-accent hover:underline">best day trips ranking</Link>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pro tip: the Enoden train ride between the two destinations is the most-photographed seaside railway in Japan. Sit on the right side coming from Enoshima for the best ocean views.
                </p>

                {/* Section 06 */}
                <div className="section-eyebrow"><span>Section 06 · What to Eat</span></div>
                <h2 id="section-06-what-to-eat" className="scroll-mt-20">
                  What to Eat on Enoshima
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Shirasu-don</strong> (whitebait rice bowl) — the local specialty. Tiny silver fish served raw or boiled over rice. Available everywhere along Nakamise-dori. Look for shops with lines of Japanese tourists (a reliable signal).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Tako-senbei</strong> — a whole octopus pressed flat into a giant cracker. It's a tourist-stunt food but genuinely tasty and unique to Enoshima.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">Soft-serve ice cream</strong> with shirasu on top is a real thing here. I'm telling you so you can decide for yourself.
                </p>

                <InlineCTA
                  message="Want this day routed and timed for your trip dates?"
                  linkText="Contact me to plan a Kamakura + Enoshima day →"
                  href="/contact"
                />

                {/* FAQ */}
                <div className="section-eyebrow"><span>Section 07 · FAQ</span></div>
                <h2 id="section-07-faq" className="scroll-mt-20">
                  Frequently Asked Questions
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">Is Enoshima worth a full day?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      For most visitors, no. Enoshima is best as a half-day combined with Kamakura. The island itself takes 3 hours to walk fully, and there's not enough else to fill a separate day.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Can you see Mt Fuji from Enoshima?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, on a clear day, especially in winter mornings. The view from the Sea Candle observation tower and the cliffs near Iwaya Cave shows Fuji across Sagami Bay. Visibility is similar to Kamakura — clearer in winter, hazier in summer.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">When is the best time to visit Enoshima?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Late autumn through winter (November-February) for the clearest views. Avoid August weekends — the beach gets very crowded with day-trippers from Tokyo. Spring sakura is also lovely along the Enoden line.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Is there a beach worth swimming at?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Katase-Higashihama Beach next to the island is officially open mid-July to August. The water isn't crystal-clear, but it's an easy swim if you're visiting in summer.
                    </p>
                  </div>
                </div>

                <InlineCTA
                  message="Ready to design a coastal day around Tokyo?"
                  linkText="Plan a private Kamakura + Enoshima tour →"
                  href="/contact"
                />
              </article>

              <BlogArticleAside />
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["kamakura-day-trip", "hakone-day-trip", "custom"]} showViewAll />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: "Enoshima Day Trip from Tokyo 2026: Beaches, Shrines, Kamakura Combo",
              description: "Enoshima is 1h from Tokyo: shrine cave, beach, sunset views, Mt Fuji on clear days. A licensed guide on combining with Kamakura, what to eat, and avoiding tourist traps.",
              author: { "@type": "Person", name: "Manabu" },
              datePublished: "2026-05-22",
              dateModified: "2026-05-22",
              publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
              mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/enoshima-day-trip-from-tokyo" },
            }),
          }}
        />
      </div>
    </Layout>
  );
};

export default EnoshimaDayTripFromTokyo;
