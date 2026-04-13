import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { DiagnosticTrigger } from "@/components/blog/DiagnosticTrigger";
import { neighborhoodFinderConfig } from "@/data/diagnostics/neighborhoodFinder";

const TokyoIzakayaGuide = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo Izakaya Guide: Where a Local Guide Drinks (2026)"
        description="A licensed Tokyo guide reveals the izakaya alleys, ordering customs, and hidden bars tourists can't find alone. Golden Gai, Omoide Yokocho, Yurakucho & more."
        canonicalPath="/blog/tokyo-izakaya-guide"
        hreflang={[
          { lang: "en", path: "/blog/tokyo-izakaya-guide" },
          { lang: "es", path: "/es/blog/guia-izakayas-tokio" },
          { lang: "x-default", path: "/blog/tokyo-izakaya-guide" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/night-tour-omoide-yokocho.webp"
          alt="Omoide Yokocho alley in Shinjuku — smoke, lanterns, and tiny izakaya stalls at night"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>
            <p className="text-label text-accent mb-3">Food & Nightlife</p>
            <h1 className="heading-display text-foreground">
              Tokyo Izakaya Guide: Where a Local Guide Actually Drinks
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />Manabu, Licensed Tour Guide</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />Last updated: April 2026</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide who has spent more evenings in Tokyo's izakaya alleys than he'd like to admit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Last month, a couple from London told me the highlight of their two-week Japan trip wasn't the temples. It wasn't Mt. Fuji. It was a tiny, six-seat yakitori bar under the train tracks in Yurakucho, where the owner grilled chicken over charcoal and poured them sake he'd chosen himself. They said they never would have found it alone. They wouldn't have known how to order. And they definitely wouldn't have understood why the man next to them kept insisting on buying them drinks.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              That's what izakaya do. They're where Tokyo actually eats and drinks after work, where conversations happen between strangers, and where the food is honest, cheap, and often extraordinary. But for travelers, they're also the hardest part of Tokyo to access alone. This guide is everything I tell my clients before we go out at night.
            </p>

            {/* What is an izakaya */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              What Is an Izakaya, Exactly?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              An izakaya (居酒屋) literally means "stay-drink-shop." Think of it as Japan's answer to a pub, tapas bar, or gastropub — but with its own distinct culture. You order drinks and small shared plates, eat at your own pace, and stay as long as you like. There's no pressure to leave after one course.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Izakaya range from fluorescent-lit chains (think: Torikizoku, Watami) to windowless holes-in-the-wall with eight seats and a 70-year-old owner who remembers every regular by name. The chains are fine. But the real magic — the Tokyo that travelers tell me about for years — happens in the small ones.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The problem: the best izakaya often have no English sign, no English menu, no online presence, and a door that looks like it leads to someone's apartment. That's not an accident. These places survive on regulars, not tourists. Going with someone who knows them changes everything.
            </p>

            {/* The 5 areas */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              5 Izakaya Areas I Take Clients To
            </h2>

            {/* Golden Gai */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">1. Golden Gai (Shinjuku)</h3>
            <img
              src="/images/tours/night-tour-golden-gai.webp"
              alt="Golden Gai narrow alley with tiny bars lit by paper lanterns in Shinjuku"
              className="w-full rounded-lg mb-4"
              loading="lazy"
              width={800}
              height={500}
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What it is:</strong> About 270 tiny bars crammed into six narrow alleys, each seating 5–10 people. Every bar has a personality: jazz bars, film bars, punk bars, bars where the owner communicates only through music.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">The reality:</strong> Golden Gai has become more tourist-friendly in recent years, but many bars still have "members only" signs or cover charges that feel hostile to first-timers. A few charge steep table fees (¥1,000+) with mediocre drinks. With a guide, you'll skip the tourist traps and walk into the bars that welcome newcomers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Budget:</strong> Expect ¥3,000–6,000 per bar including cover charge and 2–3 drinks. Cash only at most bars.
            </p>

            {/* Omoide Yokocho */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">2. Omoide Yokocho — Memory Lane (Shinjuku)</h3>
            <img
              src="/images/blog/shinjuku-yakitori-skewers.webp"
              alt="Yakitori skewers grilling over charcoal at an Omoide Yokocho stall"
              className="w-full rounded-lg mb-4"
              loading="lazy"
              width={800}
              height={500}
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What it is:</strong> About 60 tiny restaurants packed into narrow postwar alleys just west of Shinjuku Station. The smell of yakitori smoke hits you before you even turn the corner. This place has barely changed since the 1940s.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What to order:</strong> Yakitori (chicken skewers), motsu-ni (stewed offal — much better than it sounds), and cold beer. Sit at the counter, watch the cook work, and point at what the person next to you is eating. That's how it works here.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Budget:</strong> ¥2,000–4,000 for a filling meal with drinks. No cover charge at most stalls. Cash only.
            </p>

            {/* Yurakucho */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">3. Yurakucho Under the Tracks</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What it is:</strong> Nearly 700 meters of restaurants built under the brick arches of the JR Yamanote Line between Yurakucho and Shinbashi stations. Known as "gado-shita" (below the girder). Trains rumble overhead every few minutes. It's atmospheric in a way that no designed restaurant can replicate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Why I love it:</strong> This is where Tokyo's office workers come to decompress. No tourists. No English menus. Just salarymen loosening their ties over grilled fish and highballs. The northwest side of Yurakucho Station has a more upscale feel, with French wine bars and Italian spots mixed in. The Shinbashi side is rougher, louder, and more fun.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Budget:</strong> ¥2,500–5,000 per person depending on how long you stay.
            </p>

            {/* Shinbashi */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">4. Shinbashi Yokocho</h3>
            <img
              src="/images/blog/shinbashi-izakaya-exterior.webp"
              alt="Narrow izakaya alley in Shinbashi with red lanterns and salary workers"
              className="w-full rounded-lg mb-4"
              loading="lazy"
              width={800}
              height={500}
            />
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What it is:</strong> If Yurakucho is where office workers start drinking, Shinbashi is where they end up. The alleys around Shinbashi Station — especially "Shinbashi Yokocho" — are packed with standing bars (tachinomi), yakitori joints, and Korean BBQ spots that stay open late.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Best for:</strong> Travelers who want the "real salaryman experience" without the polish. Shinbashi is unfiltered Tokyo nightlife. Order a lemon sour (lemon-chu-hai), grab a skewer, and stand at the counter.
            </p>

            {/* Ebisu */}
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">5. Ebisu Yokocho</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What it is:</strong> A curated food court of 20+ tiny stalls inside one building, each specializing in one thing — gyoza, oden, kushikatsu, sashimi. It's designed to feel like an old-school yokocho, but it's cleaner, more accessible, and every stall is good.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Best for:</strong> Travelers who want the yokocho atmosphere but prefer a slightly more approachable setting. Great for couples and first-timers. No reservations, just grab a seat wherever one opens up.
            </p>

            {/* How to order */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              How to Order at an Izakaya (Without Embarrassing Yourself)
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">The Otoshi (Table Charge)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you sit down, a small dish will appear that you didn't order. This is the <em>otoshi</em> — a table charge disguised as an appetizer. It typically costs ¥300–500 per person. It's not a scam. It's standard at virtually every izakaya in Japan. Think of it as a cover charge that comes with food. Eat it. It's usually good.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">What to Order First</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Start with drinks. The classic first order is <strong className="text-foreground">Toriaezu nama</strong> ("A draft beer for now"). It's the phrase every Japanese person uses. After that, order food in waves: 2–3 small plates, eat them, then order more. Don't order everything at once — the kitchen sends dishes as they're ready, and part of the experience is the rhythm of ordering throughout the night.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">5 Things I Always Order</h3>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Edamame</strong> — The universal starter. Every table gets one.</li>
              <li><strong className="text-foreground">Yakitori (negima)</strong> — Chicken and green onion skewers. The most popular style. Order with salt (shio), not sauce (tare), for cleaner flavor.</li>
              <li><strong className="text-foreground">Agedashi tofu</strong> — Deep-fried tofu in dashi broth. Simple, perfect, vegetarian-friendly.</li>
              <li><strong className="text-foreground">Karaage</strong> — Japanese fried chicken. Crispy outside, juicy inside. The benchmark dish of any izakaya.</li>
              <li><strong className="text-foreground">Shime (the closer)</strong> — End with a small bowl of ochazuke (rice with tea poured over it) or a rice ball. This is how Japanese people close out a drinking session.</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Nomihoudai (All-You-Can-Drink)</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Many izakaya offer <em>nomihoudai</em> — unlimited drinks for a set time (usually 90–120 minutes) at a fixed price, typically ¥1,500–2,500. It's almost always worth it if you plan to have more than three drinks. The selection usually covers beer, highballs, shochu, sake, and soft drinks. Premium sake and cocktails may not be included.
            </p>

            {/* How much to spend */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              What to Expect to Pay
            </h2>
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Casual izakaya (Omoide Yokocho, standing bars)</span>
                  <span className="font-medium text-foreground">¥2,000–4,000/person</span>
                </div>
                <div className="border-t border-border/40" />
                <div className="flex justify-between text-muted-foreground">
                  <span>Mid-range izakaya (Yurakucho, Ebisu Yokocho)</span>
                  <span className="font-medium text-foreground">¥3,000–5,000/person</span>
                </div>
                <div className="border-t border-border/40" />
                <div className="flex justify-between text-muted-foreground">
                  <span>Golden Gai per bar (cover + 2–3 drinks)</span>
                  <span className="font-medium text-foreground">¥3,000–6,000/bar</span>
                </div>
                <div className="border-t border-border/40" />
                <div className="flex justify-between text-muted-foreground">
                  <span>Nomihoudai (all-you-can-drink, 90 min)</span>
                  <span className="font-medium text-foreground">¥1,500–2,500/person</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Prices include tax. Most small izakaya are cash only. Chains accept cards.
              </p>
            </div>

            {/* Why a guide */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Why Izakaya Is Where a Guide Matters Most
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I've guided food tours, temple walks, and day trips. But the feedback I get from izakaya nights is different. It's more emotional. People don't just say "that was fun." They say "that was the night I understood Japan."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here's what a guide does at an izakaya that you can't do alone:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Reads the menu</strong> — Most small izakaya only have handwritten Japanese menus. No photos. No translations.</li>
              <li><strong className="text-foreground">Knows the customs</strong> — Otoshi, pouring etiquette, how to call the staff, when to move to the next bar.</li>
              <li><strong className="text-foreground">Opens doors</strong> — Some of the best bars have no sign and a closed door. Walking in alone feels impossible. Walking in with a local feels natural.</li>
              <li><strong className="text-foreground">Translates the conversation</strong> — The owner starts talking. The person next to you offers a toast. Without a guide, these moments slip away. With one, they become stories.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My <Link to="/tours/tokyo-night-tour" className="text-accent hover:underline">Tokyo Night Tour</Link> covers 2–3 izakaya spots in one evening, including areas from this guide. Every night is different because I adapt to what you want — quiet bars, lively alleys, or a mix of both.
            </p>

            {/* Practical tips */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Practical Tips
            </h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li><strong className="text-foreground">Cash</strong> — Bring at least ¥10,000 in cash. Most small izakaya don't take cards.</li>
              <li><strong className="text-foreground">Timing</strong> — Izakaya fill up 7–9 PM on weekdays. Arrive at 6 PM for counter seats, or go after 9:30 PM when the first wave leaves.</li>
              <li><strong className="text-foreground">Shoes</strong> — Some traditional izakaya require removing shoes. Wear socks you're comfortable showing.</li>
              <li><strong className="text-foreground">Smoking</strong> — Japan's indoor smoking laws vary. Many small bars and older izakaya still allow smoking. Ask before sitting if this matters to you.</li>
              <li><strong className="text-foreground">Last train</strong> — The last train on most lines is around midnight. If you miss it, taxis or the morning train (5 AM) are your options.</li>
            </ul>

            <div className="mt-16 p-8 bg-accent/5 border border-accent/20 rounded-lg text-center">
              <p className="text-lg font-semibold text-foreground mb-2">Ready to experience Tokyo at night?</p>
              <p className="text-sm text-muted-foreground mb-6">
                My Night Tour covers Golden Gai, Omoide Yokocho, and hidden izakaya you won't find in any guidebook.
              </p>
              <Link to="/tours/tokyo-night-tour" className="btn-accent">
                See Night Tour Details
              </Link>
            </div>

          </article>
        </div>
      </section>

      <DiagnosticTrigger config={neighborhoodFinderConfig} />

      <RelatedTourCards tourIds={["tokyo-night-tour", "asakusa", "custom"]} showViewAll />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Tokyo Izakaya Guide: Where a Local Guide Actually Drinks",
        description: "A licensed Tokyo guide reveals the izakaya alleys, ordering customs, and hidden bars tourists can't find alone.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-04-13", dateModified: "2026-04-13",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/tokyo-izakaya-guide" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is otoshi at an izakaya?", acceptedAnswer: { "@type": "Answer", text: "Otoshi is a small dish served automatically when you sit down at an izakaya. It functions as a table charge, typically costing ¥300-500 per person. It's standard practice at virtually all izakaya in Japan." }},
          { "@type": "Question", name: "How much does an izakaya meal cost in Tokyo?", acceptedAnswer: { "@type": "Answer", text: "A casual izakaya meal with drinks costs ¥2,000-4,000 per person. Mid-range izakaya run ¥3,000-5,000. Golden Gai bars charge ¥3,000-6,000 per bar including cover and drinks." }},
          { "@type": "Question", name: "Do I need to speak Japanese to visit an izakaya?", acceptedAnswer: { "@type": "Answer", text: "Chain izakaya often have picture menus or tablet ordering in English. But the best small izakaya typically have handwritten Japanese-only menus. A guide or basic Japanese phrases help enormously." }},
          { "@type": "Question", name: "What is nomihoudai?", acceptedAnswer: { "@type": "Answer", text: "Nomihoudai means all-you-can-drink for a fixed time period (usually 90-120 minutes) at a set price of ¥1,500-2,500. It typically covers beer, highballs, shochu, basic sake, and soft drinks." }}
        ]
      })}} />
    </Layout>
  );
};

export default TokyoIzakayaGuide;
