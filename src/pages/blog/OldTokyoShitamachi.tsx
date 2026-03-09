import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const OldTokyoShitamachi = () => {
  return (
    <Layout>
      <SEO
        title="Shitamachi Tokyo: Where to Find Old Tokyo in 2026"
        description="Explore Shitamachi, Tokyo's historic low city. A licensed guide maps Yanaka, Asakusa & hidden neighborhoods where Edo-era atmosphere still survives."
        canonicalPath="/blog/old-tokyo-shitamachi"
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/asakusa-backstreet-local.jpg"
          alt="Quiet backstreet in old Tokyo's Shitamachi district"
          className="w-full h-full object-cover"
          loading="eager"
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
            <p className="text-label text-accent mb-3">Tokyo Area Guides</p>
            <h1 className="heading-display text-foreground">
              Old Tokyo Still Exists: A Guide's Map to Shitamachi
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />Manabu, Licensed Tour Guide</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />March 7, 2026</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) with 500+ private tours completed in Tokyo.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A guest from London once looked at me halfway through a tour of Asakusa and asked: "Where did old Tokyo go?" It's a fair question. You land in a city of glass towers, LED screens, and train stations that process more passengers daily than most airports handle in a year. The Tokyo you see from the bullet train window looks like it was built last Tuesday.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              But old Tokyo didn't disappear. It retreated. And if you know where to look, and more importantly, what you're looking at, you can still find it. The old Tokyo neighborhood that preserves this character most vividly has a name: Shitamachi. And its story is the story of Tokyo itself.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              What Is Shitamachi? (And Why Tokyo Has Two Souls)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To understand Shitamachi, you need to understand that Tokyo has always been a city divided, not by a wall or a river, but by class. When Tokugawa Ieyasu established Edo (modern Tokyo) as his capital in 1603, he built his castle on the high ground. The samurai class (warriors, administrators, nobility) lived in the hills surrounding the castle. This area became known as Yamanote, literally "the hand of the mountain."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Below them, in the low-lying flatlands near the rivers and the bay, the merchants, craftsmen, and working class set up shop. This was Shitamachi, "the low city." Think of it as Tokyo's version of the distinction between uptown and downtown in old New York, or between the Right Bank and the Left Bank in Paris. Except in Edo, the divide was enforced by a rigid caste system that determined where you could live, what you could wear, and even what food you could eat.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here's the remarkable thing: this class divide from 400 years ago still shapes Tokyo today. The Yamanote neighborhoods (Roppongi, Shibuya, Shinjuku) became the modern, cosmopolitan, glass-and-steel Tokyo that visitors see first. The Shitamachi neighborhoods (Asakusa, Ueno, Yanaka, Nihonbashi) retained the character of the old Tokyo neighborhood: human-scale streets, family businesses passed down for generations, community festivals that haven't changed in centuries.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When I guide clients through Shitamachi, I'm not just showing them old buildings. I'm showing them the surviving heartbeat of Edo-period merchant culture, the class of people who invented sushi, developed kabuki theater, created the woodblock prints that inspired the Impressionists, and built the food culture that Tokyo is famous for today. The samurai got the hilltops. The merchants got everything else worth remembering.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              The Neighborhoods That Survived
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Survival is the right word. The 1923 Great Kanto Earthquake destroyed much of Shitamachi. The firebombing of March 10, 1945, burned most of what remained. And postwar redevelopment replaced much of what the fire didn't reach. But pockets survived, sometimes through geography, sometimes through luck, sometimes through the sheer stubbornness of communities that refused to sell.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Asakusa</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Asakusa is the most famous old Tokyo neighborhood, and it's where I start most of my tours. Senso-ji, Tokyo's oldest temple (founded in 645 AD), anchors the district, but Asakusa's real character lives in the narrow streets behind the temple: Hoppy Street with its open-air drinking stalls, the craft workshops that still produce handmade goods, and the shotengai (covered shopping arcades) where you can buy everything from kitchen knives to festival costumes. Asakusa was the entertainment capital of Edo. Think of it as Tokyo's Broadway of the 1800s, except with kabuki theaters and pleasure quarters.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Yanaka</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If Asakusa is Shitamachi's public face, Yanaka is its quiet soul. This residential neighborhood near Ueno survived the earthquake and the firebombing largely intact, making it the closest thing to a time capsule that Tokyo has. The Yanaka Cemetery, where Japan's last shogun is buried, is a green, peaceful space surrounded by dozens of small Buddhist temples. Yanaka Ginza, the main shopping street, slopes downhill past shops that have been family-owned for generations. I've written a full{" "}
              <Link to="/blog/yanaka-tokyo-walking-route" className="text-accent hover:underline">walking route for Yanaka</Link>{" "}
              that covers the best spots.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Ningyocho and Nihonbashi</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ningyocho was once Edo's theater district. Its name means "doll town," a reference to the puppet theaters that thrived here. Today it's a quiet commercial neighborhood where modern offices sit alongside shops that have been selling the same products for 200 years. Nihonbashi, the "Japan Bridge," was the official center of the Edo road system; every distance in Japan was measured from this bridge. The original wooden bridge was replaced with a stone one in 1911, and it now sits beneath an expressway overpass in one of Tokyo's most poignant contrasts between old and new.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Shibamata</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shibamata is the old Tokyo neighborhood that time truly forgot. Located on the far eastern edge of Tokyo, its approach to the Taishakuten temple looks almost exactly as it did in the early 1900s: a narrow lane lined with traditional shops selling dango (rice dumplings), senbei, and souvenirs. It's famous in Japan as the setting for the beloved "Tora-san" film series (imagine 48 films over 26 years, all set in this one neighborhood). Most foreign visitors have never heard of Shibamata, which is exactly why it retains its authenticity.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              What You'll Actually See (And What It Means)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Walking through an old Tokyo neighborhood without context is like visiting a cathedral without knowing what Christianity is. You can appreciate the architecture, but you'll miss why it matters. Here's what to look for:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Noren (fabric curtains in doorways):</strong> These aren't decorative. A noren hanging in a shop entrance means the shop is open. The design often indicates the business type and can be generations old. Pulling aside a noren and stepping through is like ringing a doorbell; it announces your arrival.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Jizo statues with red bibs:</strong> Small stone statues wearing red crocheted bibs, usually near temples or intersections. These are Jizo Bosatsu, a bodhisattva who protects travelers and children. The red bibs are offerings from parents, often for the health of living children or in memory of children who died young. Think of them like votive candles in a Catholic church. Each one represents a personal prayer.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Wooden buildings with lattice fronts:</strong> Traditional machiya, townhouse-style buildings designed for merchant families. The lattice (koushi) allowed light and air in while maintaining privacy. In Shitamachi, surviving machiya are being slowly converted into cafes and galleries, a form of preservation through adaptive reuse.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Festival decorations out of season:</strong> Paper lanterns, mikoshi (portable shrines) stored under tarps, or festival posters on community boards. All signs you're in a genuine Shitamachi neighborhood. Some festivals here have been celebrated continuously for over 300 years.
              </li>
            </ul>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              How to Visit Shitamachi Without a Guide
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can absolutely explore Shitamachi on your own. Tokyo is safe, navigation is straightforward, and most of these neighborhoods are accessible by subway.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Start in Asakusa.</strong> Take the Ginza Line to Asakusa Station. Walk through Senso-ji early morning (before 8 AM if possible), then explore the backstreets. My{" "}
                <Link to="/blog/tokyo-hidden-gems" className="text-accent hover:underline">Tokyo hidden gems guide</Link>{" "}
                covers several Shitamachi spots in detail.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Walk from Ueno to Yanaka.</strong> Ueno Park is the dividing line between Yamanote and Shitamachi. Walking from the park's western edge (museums) to its northern edge (Yanaka) takes you from one Tokyo to the other in fifteen minutes.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Visit the Shitamachi Museum in Ueno.</strong> This small museum near Shinobazu Pond recreates Shitamachi street scenes from the early 1900s: a merchant's shop, a coppersmith's workshop, a tenement apartment. Excellent primer before exploring the real neighborhoods.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Eat where the locals eat.</strong> Shitamachi neighborhoods are where Tokyo's food culture was born. Look for shops that are simple, busy with Japanese customers, and have been in the same spot for decades.
              </li>
            </ul>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Why I Always Bring Clients Here First
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When a guest books a multi-day tour with me, I almost always start in Shitamachi, usually Asakusa. There's a strategic reason: Shitamachi provides the historical foundation that makes the rest of Tokyo make sense.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Once a client understands the Shitamachi-Yamanote divide, they start seeing Tokyo differently. When we visit Shibuya or Shinjuku later, they notice the contrast: "This feels different, we're in Yamanote territory now, right?" When they see a festival in Asakusa, they understand it's not a tourist performance. It's a 300-year-old neighborhood tradition. When they eat at a sushi counter, they know they're participating in a food culture invented by Shitamachi merchants in the 1800s.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The old Tokyo neighborhood of Shitamachi isn't just a historical curiosity. It's the key that unlocks the whole city. Every modern thing about Tokyo has a Shitamachi origin story, and understanding those origins transforms your experience from sightseeing into comprehension.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              That guest from London? By the end of their second day, they stopped asking "where did old Tokyo go?" and started pointing things out to me: "That shop sign is hand-painted, isn't it? It must be really old." They were right. And they saw it because they had the context to recognize what they were looking at.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Want to explore old Tokyo with someone who knows its stories?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My Asakusa walking tour is centered in the heart of Shitamachi, where I bring four centuries of merchant culture to life. Browse my tours to find one that fits your trip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours" className="btn-accent">View All Tours</Link>
                <Link to="/contact" className="btn-outline">Contact Me</Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">What does "Shitamachi" mean?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shitamachi (下町) literally translates to "low city" or "downtown." It refers to the low-lying areas of Tokyo near the rivers and bay where merchants and craftsmen lived during the Edo period (1603–1868). Today it describes neighborhoods like Asakusa, Ueno, Yanaka, and Nihonbashi that retain the character of old Tokyo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is Shitamachi safe for tourists?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Extremely safe. These are established residential neighborhoods with active community associations. You can walk through any Shitamachi area at any time of day or night. Crime rates here are among the lowest in a city that already has one of the lowest crime rates in the world.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">How much time do I need to explore Shitamachi?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A half day (3–4 hours) covers one neighborhood well, such as Asakusa or Yanaka. A full day lets you combine two neighborhoods with lunch in between. If you're genuinely interested in old Tokyo, dedicate at least two half-days to Shitamachi areas during your trip.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">What's the difference between Shitamachi and Yamanote?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shitamachi ("low city") was the merchant and craftsman district in the flatlands. Yamanote ("mountain hand") was the samurai district on the hills. Today, Shitamachi areas like Asakusa retain traditional character, while Yamanote areas like Shibuya and Shinjuku are modern and commercial. The JR Yamanote Line roughly traces the boundary between the two.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Old Tokyo Still Exists: A Guide's Map to Shitamachi",
        description: "Shitamachi, Tokyo's 'low city,' survived bombs, earthquakes, and redevelopment. A licensed guide shows you what remains and why it still matters.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-07", dateModified: "2026-03-07",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/old-tokyo-shitamachi" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What does 'Shitamachi' mean?", acceptedAnswer: { "@type": "Answer", text: "Shitamachi (下町) means 'low city,' the low-lying areas where merchants lived during the Edo period. Today it describes neighborhoods like Asakusa and Yanaka." }},
          { "@type": "Question", name: "Is Shitamachi safe for tourists?", acceptedAnswer: { "@type": "Answer", text: "Extremely safe. These are established residential neighborhoods with some of the lowest crime rates in the world." }},
          { "@type": "Question", name: "How much time do I need?", acceptedAnswer: { "@type": "Answer", text: "A half day (3–4 hours) for one neighborhood. A full day to combine two. Dedicate at least two half-days for the best experience." }},
          { "@type": "Question", name: "What's the difference between Shitamachi and Yamanote?", acceptedAnswer: { "@type": "Answer", text: "Shitamachi was the merchant district in the flatlands. Yamanote was the samurai district on the hills. Today, Shitamachi retains traditional character while Yamanote is modern and commercial." }}
        ]
      })}} />
    </Layout>
  );
};

export default OldTokyoShitamachi;
