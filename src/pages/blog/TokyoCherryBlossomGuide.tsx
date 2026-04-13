import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";

const TokyoCherryBlossomGuide = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo Cherry Blossoms 2026: Best Spots & Dates"
        description="Tokyo sakura season 2026: bloom starts March 19, full bloom March 27. A local guide ranks the 7 best spots and shares timing tips most visitors miss."
        canonicalPath="/blog/tokyo-cherry-blossom-guide"
        hreflang={[
          { lang: "en", path: "/blog/tokyo-cherry-blossom-guide" },
          { lang: "es", path: "/es/blog/cerezos-en-flor-tokio" },
          { lang: "x-default", path: "/blog/tokyo-cherry-blossom-guide" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/senso-ji-temple-tokyo.webp"
          alt="Cherry blossom trees in bloom near Senso-ji Temple, Tokyo"
          className="w-full h-full object-cover"
          loading="eager"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Article Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <p className="text-label text-accent mb-3">Planning Your Trip</p>
            <h1 className="heading-display text-foreground">
              Tokyo Cherry Blossoms 2026: A Local Guide's Honest Ranking of the Best Spots
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />Manabu, Licensed Tour Guide</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />March 22, 2026</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) who has guided 500+ private tours through Tokyo's cherry blossom season.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Every spring, I get the same question from guests arriving in Tokyo: "Are we too early? Too late? Where should we go?" Cherry blossom season in Tokyo is beautiful, but it's also unpredictable, crowded, and surprisingly short. The window between first bloom and the last petals falling is roughly two weeks, and the "perfect" moment lasts maybe four or five days.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After guiding hundreds of visitors through sakura season, I've learned that the difference between a magical experience and a frustrating one comes down to three things: timing, location, and time of day. This guide covers all three.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              2026 Cherry Blossom Forecast for Tokyo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              According to the Japan Meteorological Corporation's latest forecast (updated March 2026):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong>First bloom (開花):</strong> March 19, 2026 — a few days earlier than average</li>
              <li><strong>Full bloom (満開):</strong> March 27, 2026</li>
              <li><strong>Best viewing window:</strong> March 27 – April 2</li>
              <li><strong>Petal fall (桜吹雪):</strong> Around April 3–7</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This year's bloom is earlier than usual due to warmer-than-average temperatures in February. If you're arriving in late March or early April, you're in the sweet spot. If you're coming after April 5, you'll likely catch the tail end — still beautiful, especially with petals floating on rivers and ponds, but not full canopy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Important:</strong> These dates are forecasts and can shift by 2–3 days. Different tree varieties bloom at different times. Shinjuku Gyoen, for example, has early and late-blooming varieties that extend the viewing window by a week or more.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              The 7 Best Cherry Blossom Spots in Tokyo (Ranked by a Guide)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm ranking these based on the overall experience — not just the trees, but the atmosphere, accessibility, crowd levels, and how the spot photographs. Every list you'll find online puts Ueno Park at the top. I don't.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              1. Meguro River (目黒川) — Best Overall Experience
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you only have time for one cherry blossom spot, this is where I take my tour guests. Over 800 cherry trees line both banks of the Meguro River for about 3.8 kilometers. During peak bloom, the branches form a pink tunnel over the water. In the evening, the trees are illuminated, and the reflection on the river is genuinely stunning.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Best time:</strong> Late afternoon into evening (4–8 PM) for illuminations</li>
              <li><strong>Access:</strong> Nakameguro Station (Tokyu Toyoko Line / Hibiya Line)</li>
              <li><strong>Crowd tip:</strong> Walk upstream from Nakameguro — most tourists stay near the station. The stretch toward Ikejiri-Ohashi is quieter and just as beautiful</li>
              <li><strong>Food:</strong> Dozens of street food vendors line the river during the festival</li>
            </ul>
            <figure className="my-8">
              <img
                src="/images/blog/meguro-river-cherry-blossoms.webp"
                alt="Cherry blossom trees in full bloom lining both sides of the Meguro River"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                The Meguro River cherry blossom tunnel at peak bloom — over 800 trees lining both banks
              </figcaption>
            </figure>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              2. Chidorigafuchi (千鳥ヶ淵) — Most Photogenic
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The moat along the Imperial Palace becomes a 700-meter tunnel of cherry blossoms, and you can rent rowboats to paddle through it. During the illumination period (March 26 – April 6, 2026), the trees glow pink against the dark water. This is the single most photogenic cherry blossom scene in Tokyo.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Best time:</strong> Early morning (before 8 AM) for no crowds, or evening for illuminations</li>
              <li><strong>Access:</strong> Kudanshita Station (Tozai / Hanzomon / Shinjuku Lines)</li>
              <li><strong>Boat rental:</strong> ¥800 for 30 minutes. Expect a 60–90 minute wait during peak weekends</li>
              <li><strong>Combine with:</strong> Walk to Yasukuni Shrine's cherry trees (5 minutes away)</li>
            </ul>

            <InlineCTA
              text="Want to see cherry blossoms with a local who knows the best spots and timing?"
              tourSlug="custom"
              tourName="Custom Cherry Blossom Tour"
            />

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              3. Shinjuku Gyoen (新宿御苑) — Best for Families & Hanami Picnics
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinjuku Gyoen has over 1,000 cherry trees across 65 types, which means something is always blooming from mid-March through late April. The expansive lawns are perfect for hanami picnics — unlike most spots, you can actually sit comfortably here. Alcohol is prohibited, which keeps the atmosphere calm and family-friendly.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Hours:</strong> 9:00 AM – 5:30 PM (last entry 5:00 PM). Closed Mondays</li>
              <li><strong>Admission:</strong> ¥500 adults, ¥250 students, free for children under 15</li>
              <li><strong>Access:</strong> Shinjuku-Gyoenmae Station (Marunouchi Line)</li>
              <li><strong>Pro tip:</strong> The late-blooming Ichiyo and Kanzan varieties here peak around April 10–15, perfect if you arrive after the main season</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              4. Ueno Park (上野公園) — Best for Festival Atmosphere
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ueno is Tokyo's most famous hanami spot, and for good reason: 1,000+ cherry trees, 800 paper lanterns lit at night, food stalls, and a genuinely festive atmosphere. But I'll be honest — it gets extremely crowded, especially on weekends. The ground under the trees is claimed by picnicking groups from early morning.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Best time:</strong> Weekday mornings or after 7 PM when the lanterns are lit</li>
              <li><strong>Access:</strong> Ueno Station (JR / Ginza / Hibiya Lines)</li>
              <li><strong>Combine with:</strong> The{" "}
                <Link to="/blog/senso-ji-most-visited-temple" className="text-accent hover:underline">Senso-ji area</Link>
                {" "}and Yanaka Cemetery (another excellent, crowd-free cherry blossom spot)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              5. Sumida River (隅田川) — Best Combination with Asakusa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Sumida River sakura walk stretches about 1 kilometer from Azumabashi Bridge to Sakurabashi Bridge, with trees lining both banks. What makes this spot special is the combination: cherry blossoms, Tokyo Skytree in the background, and the historic Asakusa neighborhood right there. The evening illuminations are free and beautiful.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Best time:</strong> Late afternoon to combine with an{" "}
                <Link to="/tours/asakusa" className="text-accent hover:underline">Asakusa walking tour</Link>
              </li>
              <li><strong>Access:</strong> Asakusa Station (Ginza / Asakusa Lines)</li>
              <li><strong>Pro tip:</strong> Walk the east bank (Sumida Park side) for the best Skytree + sakura photo angle</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              6. Yanaka Cemetery (谷中霊園) — Best Hidden Gem
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is my personal favorite, and where I go when I want to see cherry blossoms without the crowds. The main path through Yanaka Cemetery is lined with magnificent old cherry trees that form a complete canopy. It's quiet, atmospheric, and completely free. The{" "}
              <Link to="/blog/yanaka-tokyo-walking-route" className="text-accent hover:underline">Yanaka neighborhood</Link>
              {" "}around it is one of old Tokyo's best-preserved areas.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Best time:</strong> Anytime — it's never as crowded as the famous spots</li>
              <li><strong>Access:</strong> Nippori Station (JR Yamanote Line)</li>
              <li><strong>Combine with:</strong> A walk through{" "}
                <Link to="/blog/old-tokyo-shitamachi" className="text-accent hover:underline">Shitamachi Tokyo</Link>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              7. Rikugien Garden (六義園) — Best for Evening Illumination
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rikugien is a traditional Edo-period garden with one famous weeping cherry tree (shidarezakura) that becomes the centerpiece of an annual light-up event. The illuminated tree against the dark garden is genuinely breathtaking. This is a smaller, more intimate experience than the river walks.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong>Hours:</strong> 9:00 AM – 5:00 PM (extended to 9:00 PM during illumination period)</li>
              <li><strong>Admission:</strong> ¥300</li>
              <li><strong>Access:</strong> Komagome Station (JR Yamanote Line / Namboku Line)</li>
            </ul>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              A Guide's Practical Tips for Cherry Blossom Season
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Timing Your Visit
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong>Best days:</strong> Weekdays, always. Weekend crowds at popular spots can be overwhelming</li>
              <li><strong>Best hours:</strong> Before 9 AM or after sunset for illuminated spots</li>
              <li><strong>Don't panic about timing:</strong> Even if you miss full bloom by a few days, the petal-fall (桜吹雪, sakura fubuki) is arguably more beautiful — cherry petals floating on rivers and covering paths like pink snow</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              What to Bring for Hanami
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>A blue tarp or picnic sheet (available at any convenience store for ¥300–500)</li>
              <li>Food and drinks from a depachika (department store basement) or konbini</li>
              <li>Warm layers — March evenings in Tokyo are still cool (8–12°C)</li>
              <li>A portable phone charger — you'll take more photos than you expect</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Cherry Blossom Etiquette
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong>Don't shake the branches</strong> for photos — this damages the trees and is considered very rude</li>
              <li><strong>Don't reserve spots with tarps and leave</strong> — this is frowned upon, especially at popular parks</li>
              <li><strong>Clean up completely</strong> — bring your trash with you. Japanese parks have very few trash bins</li>
              <li><strong>Keep music low</strong> — hanami is about enjoying nature, not outdoor concerts</li>
            </ul>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              How to Combine Cherry Blossoms with Sightseeing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cherry blossom viewing doesn't have to be a standalone activity. Here's how I structure a spring day for my tour guests:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong>Morning:</strong> Chidorigafuchi walk (before the crowds) → Imperial Palace East Gardens</li>
              <li><strong>Lunch:</strong> Head to{" "}
                <Link to="/blog/tsukiji-market-guide" className="text-accent hover:underline">Tsukiji Market</Link>
                {" "}for fresh seafood</li>
              <li><strong>Afternoon:</strong> Shinjuku Gyoen for a relaxed hanami picnic</li>
              <li><strong>Evening:</strong> Meguro River illuminations or Chidorigafuchi night boats</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For a{" "}
              <Link to="/blog/tokyo-3-day-itinerary" className="text-accent hover:underline">3-day Tokyo itinerary</Link>
              {" "}during cherry blossom season, simply swap one afternoon activity each day for the nearest sakura spot. The blossoms are everywhere — you'll see them just walking between neighborhoods.
            </p>

            {/* CTA */}
            <div className="my-12 p-8 bg-accent/5 border border-accent/20 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Want a Local Guide for Cherry Blossom Season?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I offer custom spring tours that combine the best cherry blossom spots with Tokyo's top sightseeing — timed to avoid the crowds. Whether it's a morning walk through Yanaka's sakura tunnel or an evening boat ride at Chidorigafuchi, I'll plan the perfect spring day for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/tours/custom"
                  className="btn-accent inline-flex items-center gap-2"
                >
                  Book a Custom Spring Tour
                </Link>
                <Link
                  to="/contact"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  Ask a Question
                </Link>
              </div>
            </div>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">When is the best time to see cherry blossoms in Tokyo in 2026?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Full bloom is forecast for March 27, 2026. The best viewing window is approximately March 27 – April 2. However, different varieties bloom at different times, so you can enjoy cherry blossoms from mid-March through mid-April at Shinjuku Gyoen.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Are cherry blossoms free to see in Tokyo?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most spots are completely free — including Meguro River, Chidorigafuchi, Ueno Park, Sumida River, and Yanaka Cemetery. Shinjuku Gyoen charges ¥500 and Rikugien charges ¥300 for admission.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">What if I miss peak bloom?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Don't worry. The petal fall (sakura fubuki) during the first week of April is arguably more photogenic than full bloom. And Shinjuku Gyoen has late-blooming varieties that peak around April 10–15. Cherry blossom season in Tokyo is more forgiving than people think.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Where is the least crowded cherry blossom spot in Tokyo?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yanaka Cemetery is the best-kept secret among locals. The main path is lined with magnificent old trees, and you'll share it with far fewer people than Ueno or Meguro. The surrounding Yanaka neighborhood is one of Tokyo's most charming areas.
            </p>

            {/* Related Tours */}
            <div className="mt-12">
              <RelatedTourCards tourIds={["asakusa", "custom"]} />
            </div>
          </article>
        </div>
      </section>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Tokyo Cherry Blossoms 2026: A Local Guide's Honest Ranking of the Best Spots",
        datePublished: "2026-03-22",
        dateModified: "2026-03-22",
        author: { "@type": "Person", name: "Manabu", jobTitle: "Licensed Tour Guide" },
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "When is the best time to see cherry blossoms in Tokyo in 2026?", acceptedAnswer: { "@type": "Answer", text: "Full bloom is forecast for March 27, 2026. The best viewing window is approximately March 27 – April 2." }},
          { "@type": "Question", name: "Are cherry blossoms free to see in Tokyo?", acceptedAnswer: { "@type": "Answer", text: "Most spots are free, including Meguro River, Chidorigafuchi, Ueno Park, and Sumida River. Shinjuku Gyoen charges ¥500 and Rikugien charges ¥300." }},
          { "@type": "Question", name: "What if I miss peak bloom?", acceptedAnswer: { "@type": "Answer", text: "The petal fall during the first week of April is arguably more photogenic. Shinjuku Gyoen has late-blooming varieties that peak around April 10–15." }},
          { "@type": "Question", name: "Where is the least crowded cherry blossom spot in Tokyo?", acceptedAnswer: { "@type": "Answer", text: "Yanaka Cemetery is the best-kept secret. The main path has magnificent old trees with far fewer crowds than Ueno or Meguro." }}
        ]
      })}} />
    </Layout>
  );
};

export default TokyoCherryBlossomGuide;
