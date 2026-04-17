import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { TouristTrip } from "@/components/StructuredData/TouristTrip";

const Tokyo5DayItinerary = () => {
  return (
    <Layout>
      <SEO
        title="5 Day Tokyo Itinerary 2026: Day-by-Day Guide with Times & Budget"
        description="The best 5 day Tokyo itinerary from a licensed local guide. Detailed schedules, IC card tips, ¥15,000–25,000/day budget breakdown, restaurants & must-see spots."
        canonicalPath="/blog/tokyo-5-day-itinerary"
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/shibuya-scramble-crossing.webp"
          alt="Shibuya Scramble Crossing – the defining image of modern Tokyo on any 5-day itinerary"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Article Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <p className="text-label text-accent mb-3">Itineraries</p>
            <h1 className="heading-display text-foreground">
              5 Days in Tokyo: A Licensed Guide's Day-by-Day Itinerary (2026)
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Licensed Tour Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 17, 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) with 500+ tours. Last updated: March 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">

            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Five days is the sweet spot for a first visit to Tokyo. Long enough to move slowly, short enough that you won't feel like you're treading water. After guiding over 500 private tours across this city, I've refined this tokyo itinerary 5 days into something I'm genuinely proud of: it covers the iconic sights, digs into neighborhoods most visitors miss, includes a day trip outside the city, and builds in the breathing room that transforms a good trip into a memorable one.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This 5 day Tokyo itinerary is organized geographically — each day clusters nearby attractions to cut transit time in half. I've included specific start times, honest budget estimates (¥15,000–25,000 per day), IC card transportation guidance, and restaurant recommendations at every price point. I've also flagged what to skip, because knowing what not to do is half the battle in a city this size.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Quick overview:</strong> Day 1 covers traditional Tokyo — Senso-ji temple and Asakusa before the crowds. Day 2 flips to modern Tokyo — Shibuya Crossing, Harajuku's Takeshita Street, Meiji Shrine. Day 3 is Tsukiji breakfast, the Imperial Palace East Gardens, and Ginza. Day 4 is a full day trip outside the city. Day 5 is Shinjuku, free time, and your departure. Each day stands alone, so feel free to rearrange.
            </p>

            {/* Getting Around: IC Card */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Before You Start: Your IC Card & Transportation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The single most important thing you can do before your first morning in Tokyo is load money onto an IC card (Suica or Pasmo). These rechargeable cards work on every train, subway, and bus in the city, and at most convenience stores and vending machines. You won't need to buy individual tickets for any journey in this itinerary.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pick up your IC card at Narita or Haneda airport on arrival — look for the ticket machines with the Suica (penguin) or Pasmo (circle) logo. Load ¥3,000–5,000 to start. You can top up at any station machine throughout the week. The average train fare within central Tokyo is ¥200–250, so ¥1,000–1,500 per day covers most transport.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground font-medium mb-1">Guide's tip: Japan Rail Pass vs. IC card</p>
              <p className="text-sm text-muted-foreground">
                For a 5-day Tokyo-only trip, the <Link to="/blog/japan-rail-pass-worth-it" className="text-accent hover:underline">Japan Rail Pass is not worth it</Link>. It only covers JR lines, not the Tokyo Metro or Toei subway lines you'll use most. Stick with your IC card. The JR Pass makes sense only if you're traveling between cities (Tokyo → Kyoto → Osaka).
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For this itinerary, you'll mostly use the Tokyo Metro and Toei Subway lines. The key lines to know:
            </p>
            <ul className="space-y-2 mb-8 text-muted-foreground">
              <li><strong className="text-foreground">Ginza Line (orange):</strong> connects Asakusa to Shibuya, passing through Ueno, Akihabara, and Ginza</li>
              <li><strong className="text-foreground">Yamanote Line (green):</strong> the JR loop line connecting Shinjuku, Shibuya, Harajuku, Tokyo Station, Ueno, and more</li>
              <li><strong className="text-foreground">Hibiya Line (gray):</strong> connects Tsukiji to Shibuya and Naka-Meguro</li>
              <li><strong className="text-foreground">Chiyoda Line (green, Tokyo Metro):</strong> useful for reaching Meiji-Jingumae (Harajuku) from eastern Tokyo</li>
            </ul>

            {/* Daily Budget */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Daily Budget Breakdown (¥15,000–25,000)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tokyo has a reputation for being expensive, but it's far more manageable than most visitors expect — especially for food. Here's what a realistic mid-range day looks like:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Category</th>
                    <th className="text-left py-3 pr-4 text-foreground font-medium">Budget (¥)</th>
                    <th className="text-left py-3 text-foreground font-medium">Mid-Range (¥)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Transportation</td>
                    <td className="py-3 pr-4">800–1,000</td>
                    <td className="py-3">1,000–1,500</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Breakfast</td>
                    <td className="py-3 pr-4">500–800</td>
                    <td className="py-3">1,000–1,500</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Lunch</td>
                    <td className="py-3 pr-4">800–1,200</td>
                    <td className="py-3">1,500–2,500</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Dinner</td>
                    <td className="py-3 pr-4">1,500–2,000</td>
                    <td className="py-3">3,000–6,000</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Attractions / Entry</td>
                    <td className="py-3 pr-4">0–500</td>
                    <td className="py-3">1,000–2,000</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4">Snacks / Drinks</td>
                    <td className="py-3 pr-4">500–800</td>
                    <td className="py-3">800–1,500</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="py-3 pr-4 text-foreground">Daily Total</td>
                    <td className="py-3 pr-4 text-foreground">¥4,100–6,300</td>
                    <td className="py-3 text-foreground">¥8,300–15,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For a comfortable mid-range experience with room for a nice dinner and a few paid attractions, budget ¥15,000–20,000 per day per person, excluding accommodation. Shopping, private guide fees, and splurge meals push this toward ¥25,000. Budget travelers who eat at convenience stores and ramen shops can manage on ¥8,000–10,000.
            </p>

            {/* Day 1 */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 1: Traditional Tokyo (Asakusa &amp; Senso-ji)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Start where Tokyo started. Asakusa is the oldest commercial district in the city, and <Link to="/blog/senso-ji-most-visited-temple" className="text-accent hover:underline">Senso-ji Temple</Link> — dating to 645 AD — is still its beating heart. Arriving early is the single biggest thing you can do to improve your Day 1 experience.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Morning (8:00–12:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">8:00 AM — Senso-ji Temple.</strong> Arrive at Kaminarimon (Thunder Gate) before 9 AM. The gate's iconic red lantern is one of the most photographed sights in Japan, and you'll actually be able to photograph it without crowds at this hour. Walk Nakamise-dori, the 250m shopping street leading to the main hall — the stalls don't open until 9–10 AM, but the architecture and atmosphere are better before they do.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Inside the main hall, you don't enter to pray — you stand before it, toss a coin into the offering box, clap twice, and bow. Watch what other visitors do and follow their lead. Read more in my guide to <Link to="/blog/japan-temple-shrine-etiquette" className="text-accent hover:underline">temple and shrine etiquette</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">9:30 AM — Nakamise shopping.</strong> As the stalls open, this is an excellent place to buy affordable, high-quality souvenirs: ningyo-yaki (small cakes filled with sweet bean paste), folding fans, yukata fabric goods, and traditional toys. Prices here are better than airport shops and the quality is genuine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">10:30 AM — Explore deeper Asakusa.</strong> Walk west from Senso-ji into the backstreets of <Link to="/blog/asakusa-guide" className="text-accent hover:underline">Asakusa</Link>. Hoppy Street has old-school izakaya that have been serving workers since the postwar period. The Kappabashi kitchen district (15-minute walk northwest) is where Tokyo's restaurants buy their equipment — a fascinating street even if you're not buying.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">Transport: Asakusa</p>
              <p className="text-sm text-muted-foreground">Asakusa Station is served by the Ginza Line (Tokyo Metro), Asakusa Line (Toei), and the Tobu Skytree Line. From most central hotels, the Ginza Line is the simplest option.</p>
            </div>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Lunch in Asakusa (12:00–13:30)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Ramen for lunch.</strong> Asakusa has several excellent ramen shops. Asakusa Kagari (near Senso-ji) specializes in tori paitan (creamy chicken broth) and is worth the short queue — roughly ¥1,000–1,300 per bowl. For a fuller experience, tendon (tempura rice bowl) shops like Daikokuya have been operating in Asakusa for over 100 years; expect ¥1,500–2,000 and a queue at peak hours.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Afternoon (13:30–18:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">13:30 — Ueno Park &amp; Tokyo National Museum.</strong> Take the Ginza Line one stop to Ueno (or walk 25 minutes through Taito Ward). Ueno Park is Japan's oldest public park — a vast green space that houses five major museums, a zoo, Shinobazu Pond, and several temples. The Tokyo National Museum (¥1,000 entry) is Japan's largest museum and holds over 110,000 items including samurai armor, woodblock prints, and ceramics spanning 10,000 years of Japanese history. Allow 2 hours minimum.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">16:00 — Ameyoko Market.</strong> A five-minute walk from Ueno Station, this covered street market started as a black market after WWII and still has that frenetic energy. Fresh seafood, dried goods, cosmetics, and street food. Try yakitori skewers (¥200–400 each) or takoyaki (octopus balls, ¥500 for 6). This is street food at its most authentic.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">Guide's tip:</p>
              <p className="text-sm text-muted-foreground">If you're jet-lagged (and you will be on Day 1), cut the afternoon shorter. See Ueno Park and the museum entrance hall, then rest. Pushing through exhaustion on Day 1 leads to a miserable Day 2. Your body adjusts fastest when you go to bed at local time — even if that means an 8 PM bedtime.</p>
            </div>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Dinner (18:30–20:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Return to Asakusa for dinner. <strong className="text-foreground">Sometaro</strong> (near Senso-ji) is a beloved okonomiyaki (savory pancake) restaurant where you cook your own at the table — great for a relaxed first evening, ¥1,500–2,000 per person. Alternatively, the izakaya alleys around Hoppy Street offer grilled skewers, cold beer, and an atmosphere that feels completely unlike anywhere in the Western world.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Day 1 estimated spend:</strong> transport ¥500, lunch ¥1,500, museum ¥1,000, dinner ¥2,500, snacks ¥800 = <strong className="text-foreground">¥6,300–8,500</strong> (budget to mid-range).
            </p>

            <InlineCTA message="Want a local guide for Day 1 in Asakusa?" href="/contact" />

            {/* Day 2 */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 2: Modern Tokyo (Shibuya &amp; Harajuku)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After yesterday's ancient Tokyo, today is the contrast: neon, fashion, forest, and the most photographed intersection on earth. The Shibuya–Harajuku corridor is Tokyo at its most modern and most recognizable. But there's more depth here than the Instagram photos suggest.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Morning (9:00–12:30)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">9:00 AM — Meiji Shrine.</strong> Start the day in the forest before the city wakes up. <Link to="/blog/shibuya-harajuku-guide" className="text-accent hover:underline">Meiji Shrine</Link> sits inside 70 hectares of forested land in the middle of the most commercial district in Tokyo. The 15-minute walk from Harajuku Station along the gravel path lined with giant torii gates and ancient cedar trees is one of the most powerful transitions in the city — from the chaos of Yamanote Line to complete quiet in under a minute.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Meiji Shrine is free to enter. The main shrine honors Emperor Meiji and Empress Shoken. On weekends, you may witness a traditional Shinto wedding procession — a rare and beautiful sight. Allow 45–60 minutes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">10:15 AM — Takeshita Street, Harajuku.</strong> Exit the shrine's south gate and cross into Harajuku's Takeshita Street: 350 meters of youth fashion, crepe shops, kawaii culture, and carefully curated weirdness. Even if you don't buy anything, walk the full length. The fashion here — Lolita, Decora, streetwear mashups — is nowhere else in the world. Grab a crepe (¥500–800) from one of the stands halfway down.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">11:30 AM — Omotesando.</strong> A five-minute walk from Takeshita brings you to Omotesando, Tokyo's most elegant shopping boulevard — the Paris of Tokyo, lined with flagship stores from every major luxury brand set inside architecturally notable buildings. You're not here to buy; you're here to see how Japanese retail design works. The Omotesando Hills complex (by Tadao Ando) is worth stepping inside even if you don't intend to shop.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Lunch near Harajuku (12:30–14:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Gyukatsu Motomura</strong> (Omotesando branch) serves beef katsu — panko-crusted beef cutlet that you finish cooking yourself on a small stone grill at the table. It's the best ¥2,000 lunch in this part of the city. Expect a short queue; it moves fast. Alternatively, the basement food hall at Omotesando Hills has excellent bento boxes and deli items for ¥1,000–1,500 if you'd rather eat on a bench in the sun.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Afternoon (14:00–18:30)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">14:00 — Shibuya Crossing.</strong> Walk south from Omotesando to Shibuya Station (15 minutes or one subway stop on the Ginza Line). The famous Scramble Crossing is outside the Hachiko exit. Cross it once — the experience of walking through 1,000 people all flowing in different directions from all angles simultaneously is genuinely disorienting and genuinely worth experiencing. The best view is from the second-floor window of the Starbucks above the crossing; it's crowded but effective.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">15:00 — Shibuya Stream &amp; Daikanyama.</strong> Walk along the newly redeveloped Shibuya Stream to Daikanyama — a neighborhood of boutique coffee shops, concept stores, and the extraordinary Tsutaya Books complex, a two-story bookshop designed by Klein Dytham Architecture that is genuinely one of the most beautiful spaces in Tokyo. Allow 90 minutes here; it's the kind of neighborhood you don't want to rush.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">17:00 — Return to Shibuya for golden hour.</strong> The light hits the glass skyscrapers of Shibuya differently at 5 PM. Walk through Shibuya Center-gai (the covered pedestrian street) for the full sensory experience of modern Tokyo at rush hour.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">What to skip in Shibuya:</p>
              <p className="text-sm text-muted-foreground">Shibuya Sky observation deck costs ¥2,000 and offers a view you can get for free from the Tokyo Metropolitan Government Building in Shinjuku (Day 5). Skip it here and save both the money and the queue time.</p>
            </div>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Dinner in Shibuya (19:00–21:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Yakiniku (Japanese BBQ)</strong> is the right dinner after a long day of walking. The Shibuya backstreets have dozens of yakiniku restaurants at every price point. <strong className="text-foreground">Niku no Sato</strong> near Shibuya Station offers quality beef at ¥3,000–4,000 per person including drinks. For ramen after all this, <strong className="text-foreground">Ichiran</strong> has a solo-booth format where you order from a menu card and eat facing a wooden screen — an only-in-Japan experience, ¥1,200–1,500.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Day 2 estimated spend:</strong> transport ¥800, lunch ¥2,000, dinner ¥3,500, crepe + snacks ¥1,000 = <strong className="text-foreground">¥7,300–10,000</strong>.
            </p>

            {/* Day 3 */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 3: Historic Core (Tsukiji, Imperial Palace &amp; Ginza)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Today covers the geographic and historical center of Tokyo — from the world's most famous fish market to the gardens surrounding the Emperor's residence to the glamour of Ginza. The three areas are walkable between each other, making this an efficient day with minimal transit.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Morning (7:30–12:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">7:30 AM — Tsukiji Outer Market breakfast.</strong> Arrive at <Link to="/blog/tsukiji-market-guide" className="text-accent hover:underline">Tsukiji Outer Market</Link> before 9 AM for the freshest food and the fewest tourists. The inner wholesale market moved to Toyosu in 2018, but the outer market — the restaurants and stalls that once fed market workers at dawn — is still operating and still extraordinary. Eat sushi for breakfast at one of the counter-style sushi bars: the standard set is 8–10 pieces for ¥1,500–2,500. This is not a tourist gimmick; Tokyo workers have been eating sushi at Tsukiji for breakfast for generations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Other essentials at Tsukiji: tamagoyaki (sweet egg omelette) on a stick from Marutake (¥200), fresh oysters from Oyster Bar (¥300 each), and tuna skewers from any of the seafood vendors. Budget ¥2,000–3,000 to graze properly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">10:00 AM — Imperial Palace East Gardens.</strong> Walk 20 minutes north (or take the Hibiya Line one stop to Hibiya) to reach the <strong className="text-foreground">Imperial Palace East Gardens</strong> — the only part of the Imperial Palace grounds open to the public, free of charge. These are the gardens of what was once Edo Castle, the seat of the Tokugawa shogunate. The stone walls and moats date to the 17th century. Particularly beautiful in spring (cherry blossoms) and autumn (momiji/maple leaves), but worth visiting in any season.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The gardens are open Tuesday–Sunday, 9 AM–4:30 PM (5 PM in summer), closed Monday. Allow 90 minutes to walk the full circuit. The Ninomaru Garden inside has a traditional Japanese garden layout with iris beds and stone lanterns.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">Guide's tip: Imperial Palace outer path</p>
              <p className="text-sm text-muted-foreground">After the East Gardens, walk the outer moat path — a 5km loop around the palace. Locals run it daily; it's a peaceful counterpoint to the urban intensity elsewhere and gives you a sense of the palace's true scale. You don't need to do the full loop; even 20 minutes on this path resets the energy.</p>
            </div>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Lunch near Marunouchi (12:30–14:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Marunouchi/Yurakucho area between the Imperial Palace and Ginza has excellent lunch options for every budget. The basement floor of the Kitte shopping complex (inside the historic Tokyo Post Office building opposite Tokyo Station) has some of the best lunch sets in the city — regional Japanese cuisine from across the country, most sets ¥1,000–1,800. Alternatively, the underground shopping streets of Yurakucho have old-school ramen and katsu curry shops that Tokyo salarimen have been eating at for decades.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Afternoon (14:00–18:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">14:00 — Ginza.</strong> Walk 10 minutes east from Marunouchi into Ginza, Tokyo's most prestigious shopping district. The main Chuo-dori boulevard is lined with flagship stores from Hermès (in a stunning building by Renzo Piano), Cartier, Chanel, and Apple alongside Japanese luxury brands like Mikimoto (pearls) and Shiseido. On weekends, Chuo-dori is pedestrianized between 12–6 PM and fills with families and tourists on foot.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For free cultural experience, Itoya Ginza (the iconic 12-floor stationery shop at Ginza 2-chome) is genuinely worth an hour. Each floor has a different category of Japanese stationery and craft goods. You won't find better quality washi paper or fountain pen culture anywhere.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">16:00 — Hamarikyu Gardens.</strong> Walk south 15 minutes to Hamarikyu — a tidal garden that dates to the Edo period, now surrounded by skyscrapers. It's one of the most dramatic contrasts in Tokyo: traditional Japanese garden with saltwater ponds and a teahouse, with the Shiodome high-rises reflected in the still water. Entry ¥300. A boat taxi runs from here along the Sumida River back to Asakusa (¥1,000, 40 minutes) — a lovely way to end the afternoon.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Dinner in Ginza or Yurakucho (19:00–21:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Yurakucho's yakitori alley</strong> (under the JR train tracks between Yurakucho and Hibiya stations) is the best honest dinner in this area: tiny restaurants serving grilled chicken skewers (¥200–400 each), cold beer, and salary-man energy. Expect to spend ¥3,000–4,000 per person. This is the old Tokyo that the Ginza boutiques across the street have been trying to replace for 50 years, and it's still there.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Day 3 estimated spend:</strong> transport ¥600, Tsukiji breakfast ¥2,500, lunch ¥1,500, Hamarikyu ¥300, dinner ¥3,500 = <strong className="text-foreground">¥8,400–10,000</strong>.
            </p>

            {/* Day 4 */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 4: Day Trip Outside Tokyo (Kamakura or Nikko)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A day trip on Day 4 does two things: it gives your city-legs a rest, and it shows you how different Japan looks outside the Tokyo megalopolis. Both Kamakura and Nikko are dramatically different from Tokyo in atmosphere, architecture, and pace. You'll come back to the city on Day 5 with fresh eyes.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Option A: Kamakura (1 hour from Tokyo)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Link to="/blog/kamakura-day-trip-from-tokyo" className="text-accent hover:underline">Kamakura</Link> was the political capital of Japan from 1185 to 1333 — a seaside mountain town ringed by Zen temples and trekking trails, and home to the giant Kotoku-in Buddha (¥300 entry). Take the JR Yokosuka Line from Tokyo Station to Kamakura (56 minutes, ¥940 with IC card).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Suggested Kamakura route: Kamakura Station → Tsurugaoka Hachimangu Shrine (free) → Komachi-dori shopping street (local snacks and crafts) → bus or walk to Kotoku-in Great Buddha → Hasedera Temple (¥400) → Yuigahama Beach → return from Kamakura Station. Full day, roughly 8–10km walking.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Kamakura budget:</strong> transport ¥1,880 round trip, entry fees ¥700–1,000, lunch ¥1,500, snacks ¥800 = ¥4,880–5,580 for transport and activities (plus meals).
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Option B: Nikko (2 hours from Tokyo)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <Link to="/blog/nikko-day-trip-from-tokyo" className="text-accent hover:underline">Nikko</Link> is for travelers who want dramatic architecture in a cedar mountain forest. The Tosho-gu Shrine complex is one of the most ornate Shinto shrines in Japan — lacquered in red, gold, and blue, covered in intricate carvings including the famous three wise monkeys. Take the Tobu Nikko Line from Asakusa Station (1 hour 50 minutes, ~¥1,360 with the Tobu discount pass).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nikko requires an early start (leave by 8 AM) to make the most of the day. The Nikko World Heritage Pass (¥2,500) covers entry to Tosho-gu, Taiyuin (Iemitsu Mausoleum), and Rinno-ji Temple.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-8">
              <p className="text-sm text-foreground font-medium mb-1">Kamakura vs. Nikko: which to choose?</p>
              <p className="text-sm text-muted-foreground">Choose Kamakura if you want nature, walking, and a beach option. Choose Nikko if you want spectacular religious architecture and don't mind a longer train ride. Both are excellent. For most first-time visitors, Kamakura is the easier and more varied day.</p>
            </div>

            {/* Day 5 */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 5: Final Discoveries (Shinjuku &amp; Departure)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The last day of a Tokyo itinerary should not feel rushed. No early alarms, no ambitious new itinerary. Day 5 is for deepening what you've already seen, shopping for last-minute items, and experiencing Shinjuku — the city's most complete neighborhood.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Morning (9:30–12:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">9:30 AM — Tokyo Metropolitan Government Building Observatory.</strong> Free. Opens at 9:30 AM. Takes you to the 45th floor (202m) in 55 seconds. From here you see all of Tokyo spread below: the bay to the south, Shinjuku's skyscrapers around you, the pale bulk of Mt. Fuji on clear winter mornings (October–March). This is the view people pay ¥2,000 for at Shibuya Sky or Tokyo Tower. It's free. Go here.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">10:30 AM — Shinjuku Gyoen.</strong> A 15-minute walk from the observatory. This is Tokyo's finest garden — a 58-hectare blend of French formal garden, English landscape garden, and Japanese garden within a 10-minute walk from one of the city's busiest train hubs. Entry ¥500. <Link to="/blog/shinjuku-guide" className="text-accent hover:underline">Shinjuku</Link> is worth understanding — Japan's most famous red-light district (Kabukicho) is two minutes from its most beautiful park.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Lunch in Shinjuku (12:30–14:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The basement floors of Isetan Shinjuku (Japan's finest department store) house an extraordinary food hall — this is the best last lunch in Tokyo. Sit-down restaurants on the upper floors, but the basement counters are better: fresh sushi, tonkatsu, soba, yakitori sets, all ¥1,500–2,500. Alternatively, Omoide Yokocho ("Memory Lane"), the narrow alley of yakitori stalls behind Shinjuku Station's west exit, serves lunch and is far less crowded at midday than in the evening.
            </p>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Afternoon: Souvenir Shopping (14:00–16:00)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The best souvenir shopping in Tokyo is in department store food halls (depachika). Isetan in Shinjuku and Takashimaya in Nihonbashi have beautifully packaged Japanese sweets, teas, sake, and condiments that make better gifts than anything in airport duty-free — at lower prices. Allow 60–90 minutes and a budget of ¥3,000–10,000 depending on your list.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For electronics and tech, Yodobashi Camera in Akihabara (15 minutes from Shinjuku by Sobu Line) has the widest selection in Japan with duty-free counters. For fashion, the side streets of Shinjuku around Takashimaya Times Square have excellent mid-range Japanese brands.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mb-4">
              <p className="text-sm text-foreground font-medium mb-1">Airport access from Shinjuku:</p>
              <p className="text-sm text-muted-foreground">Narita Airport: Narita Express (N'EX) from Shinjuku Station, 90 minutes, ¥3,070 with IC card. Haneda Airport: Keikyu Line or monorail from Hamamatsucho, 40 minutes, ¥600. Leave at least 3 hours before your flight for Narita, 2 hours for Haneda.</p>
            </div>

            <h3 className="text-lg font-medium text-foreground mt-8 mb-3">Optional: Yanaka & Old Tokyo</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If your flight is late and you have an extra afternoon, consider spending it in <Link to="/blog/yanaka-walking-tour-guide" className="text-accent hover:underline">Yanaka</Link> — the neighborhood that survived the 1923 earthquake and WWII bombing and still looks like Meiji-era Tokyo. A quiet, photogenic contrast to the intensity of the rest of the week. See the <Link to="/blog/old-tokyo-shitamachi" className="text-accent hover:underline">Shitamachi guide</Link> for context.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Day 5 estimated spend:</strong> transport ¥500, lunch ¥2,000, Gyoen ¥500, shopping ¥5,000, airport train ¥3,000 = <strong className="text-foreground">¥11,000–15,000</strong>.
            </p>

            {/* Cultural Tips */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Cultural Experiences &amp; Tips Throughout the Week
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Five days gives you enough time to engage with Tokyo's cultural rhythms rather than just photograph them. A few things I tell every client:
            </p>
            <ul className="space-y-4 mb-8 text-muted-foreground">
              <li>
                <strong className="text-foreground">Take your shoes off without being asked.</strong> When you see a slightly raised floor at a restaurant entrance with a row of slippers, that's your cue. Watch what locals do and follow.
              </li>
              <li>
                <strong className="text-foreground">Don't tip.</strong> <Link to="/blog/tipping-in-japan" className="text-accent hover:underline">Tipping is not part of Japanese service culture</Link> — it can cause confusion or embarrassment. The price on the menu is the price.
              </li>
              <li>
                <strong className="text-foreground">Use both hands to receive business cards, gifts, or change.</strong> It signals respect.
              </li>
              <li>
                <strong className="text-foreground">Stand on the left on escalators in Tokyo</strong> (the right in Osaka) and let people pass on the right.
              </li>
              <li>
                <strong className="text-foreground">Don't eat while walking</strong> (except at markets where it's expected). Japanese eating culture is sedentary — find a bench or eat at the counter where you bought your food.
              </li>
              <li>
                <strong className="text-foreground">Convenience stores are your friend.</strong> 7-Eleven, FamilyMart, and Lawson in Japan are genuinely good — onigiri (rice balls) are ¥150–200, sandwiches ¥250–350, hot oden dishes ¥100–150. Buy breakfast here on busy days to save time and money.
              </li>
            </ul>

            {/* CTA Box */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Want a local guide to bring this itinerary to life?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I offer private guided days for any part of this 5 day Tokyo itinerary. Most clients book 1–2 guided days and explore independently the rest. I'd recommend a guide for Day 1 (Asakusa context and temple etiquette) and Day 4 (day trip logistics and language barrier). Get in touch to discuss what works for your trip.
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
                  <h3 className="text-lg font-medium text-foreground mb-2">Is 5 days enough for Tokyo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes — 5 days is the ideal length for a first Tokyo visit. You'll cover the major neighborhoods (Asakusa, Shibuya, Harajuku, Shinjuku, Ginza), do one day trip outside the city, and still have breathing room for spontaneous exploration. If you can extend to 7 days, you gain a second day trip and time to revisit favorites. But 5 days in Tokyo, planned well, is a complete and satisfying trip.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">How much money do I need for 5 days in Tokyo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Budget ¥15,000–20,000 per person per day excluding accommodation — that covers transport (¥1,000–1,500), three meals (¥5,000–8,000), attraction entry fees (¥1,000–2,500), and snacks. For a 5-day trip that's ¥75,000–100,000 (roughly $500–700 USD) in daily spending. Add ¥20,000–50,000 for shopping depending on your habits. Budget travelers who eat convenience store meals and ramen can manage ¥8,000–10,000 per day.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">What are the best areas to stay in Tokyo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Asakusa is my top recommendation for first-time visitors: central to the eastern attractions, excellent local restaurants at every price point, and significantly cheaper than Shibuya or Shinjuku. Shinjuku is best if you want to be near the widest range of restaurants and nightlife. Shibuya suits travelers prioritizing the modern Tokyo experience. For the budget-conscious, Ueno and Akihabara have good-value accommodation within easy reach of major attractions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Do I need a Japan Rail Pass for 5 days in Tokyo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No. The Japan Rail Pass is not cost-effective for a Tokyo-only trip. It covers JR lines but not the Tokyo Metro or Toei subway, which are the lines you'll use most. An IC card (Suica or Pasmo, purchased at the airport) covers all transit in this itinerary. The JR Pass only makes financial sense if you're doing long-distance travel between cities — Tokyo to Kyoto, for example.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">When is the best time to visit Tokyo for 5 days?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Spring (late March–early April, cherry blossom season) and autumn (October–November, maple season) are the peak seasons for atmosphere — both are genuinely spectacular but also the most crowded and expensive for hotels. <Link to="/blog/best-time-to-visit-tokyo" className="text-accent hover:underline">The best time to visit Tokyo</Link> for a balance of good weather, manageable crowds, and lower prices is May (after Golden Week), September, or October. Avoid late July–August (extremely hot and humid) and Golden Week (late April–early May, when domestic tourism peaks).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Should I hire a private guide for my Tokyo itinerary?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You don't need a guide for every day — most of this itinerary is doable independently with a good map app. But a guide on 1–2 key days significantly deepens the experience. The first day (Asakusa) is the most valuable: understanding the historical context early shapes everything you'll see for the rest of the week. Day 4 day trips also benefit from guide support for language, logistics, and local knowledge at the destination. See more on <Link to="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" className="text-accent hover:underline">whether hiring a Tokyo tour guide is worth it</Link>.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["asakusa", "shibuya-harajuku", "imperial-palace", "custom"]} showViewAll />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "5 Days in Tokyo: A Licensed Guide's Day-by-Day Itinerary (2026)",
        description: "The best 5 day Tokyo itinerary from a licensed local guide. Detailed schedules, IC card tips, ¥15,000–25,000/day budget breakdown, restaurant picks, and must-see attractions.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-17",
        dateModified: "2026-03-17",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/tokyo-5-day-itinerary" },
        keywords: "5 day tokyo itinerary, 5 days in tokyo, tokyo itinerary 5 days, tokyo travel guide, asakusa senso-ji, shibuya harajuku, imperial palace tokyo"
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is 5 days enough for Tokyo?", acceptedAnswer: { "@type": "Answer", text: "Yes — 5 days is the ideal length for a first Tokyo visit. You'll cover the major neighborhoods, do one day trip outside the city, and still have breathing room for exploration." }},
          { "@type": "Question", name: "How much money do I need for 5 days in Tokyo?", acceptedAnswer: { "@type": "Answer", text: "Budget ¥15,000–20,000 per person per day excluding accommodation. For 5 days that's ¥75,000–100,000 in daily spending. Budget travelers can manage ¥8,000–10,000 per day." }},
          { "@type": "Question", name: "What are the best areas to stay in Tokyo?", acceptedAnswer: { "@type": "Answer", text: "Asakusa is best for first-timers: central, affordable, and close to eastern attractions. Shinjuku for nightlife and dining variety. Shibuya for modern Tokyo." }},
          { "@type": "Question", name: "Do I need a Japan Rail Pass for 5 days in Tokyo?", acceptedAnswer: { "@type": "Answer", text: "No. An IC card (Suica or Pasmo) covers all transit in this itinerary at a fraction of the JR Pass cost. The JR Pass is only worthwhile for multi-city travel." }},
          { "@type": "Question", name: "When is the best time to visit Tokyo for 5 days?", acceptedAnswer: { "@type": "Answer", text: "May, September, and October offer the best balance of weather, manageable crowds, and hotel prices. Avoid late July–August (very hot) and Golden Week (crowded and expensive)." }},
          { "@type": "Question", name: "Should I hire a private guide for my Tokyo itinerary?", acceptedAnswer: { "@type": "Answer", text: "Not for every day — but 1–2 guided days significantly deepen the experience. Day 1 in Asakusa and any day trips are the most valuable days to have a guide." }}
        ]
      })}} />

      <TouristTrip
        name="5 Day Tokyo Itinerary: A Licensed Guide's Plan (2026)"
        description="A comprehensive 5-day Tokyo itinerary with specific times, budget breakdown, IC card transport guide, restaurant recommendations, and cultural tips from a licensed local guide."
        url="https://tanuki-tabi-travel.com/blog/tokyo-5-day-itinerary"
        touristType="International first-time visitors to Tokyo"
        duration="P5D"
        days={[
          {
            name: "Day 1: Traditional Tokyo – Asakusa & Senso-ji",
            description: "Senso-ji Temple before crowds, Nakamise shopping, Tokyo National Museum in Ueno, Ameyoko Market. Old Shitamachi Tokyo at its most authentic.",
            places: ["Senso-ji Temple", "Nakamise-dori", "Kaminarimon Gate", "Ueno Park", "Tokyo National Museum", "Ameyoko Market"],
            recommendedDuration: "PT10H",
          },
          {
            name: "Day 2: Modern Tokyo – Shibuya & Harajuku",
            description: "Meiji Shrine forest, Takeshita Street youth fashion, Omotesando luxury boulevard, Shibuya Scramble Crossing, Daikanyama bookshops.",
            places: ["Meiji Shrine", "Harajuku Takeshita Street", "Omotesando", "Shibuya Scramble Crossing", "Daikanyama Tsutaya Books"],
            recommendedDuration: "PT11H",
          },
          {
            name: "Day 3: Historic Core – Tsukiji, Imperial Palace & Ginza",
            description: "Breakfast at Tsukiji Outer Market, Imperial Palace East Gardens, Ginza luxury shopping, Hamarikyu tidal garden.",
            places: ["Tsukiji Outer Market", "Imperial Palace East Gardens", "Ginza Chuo-dori", "Itoya Stationery", "Hamarikyu Gardens"],
            recommendedDuration: "PT11H",
          },
          {
            name: "Day 4: Day Trip – Kamakura or Nikko",
            description: "Escape to Kamakura's Great Buddha and Zen temples (1 hour by train) or Nikko's ornate Tosho-gu Shrine complex in cedar mountain forests (2 hours).",
            places: ["Kamakura", "Kotoku-in Great Buddha", "Tsurugaoka Hachimangu", "Nikko Tosho-gu Shrine"],
            recommendedDuration: "PT10H",
          },
          {
            name: "Day 5: Shinjuku & Departure",
            description: "Free observatory at Tokyo Metropolitan Government Building, Shinjuku Gyoen garden, Isetan depachika souvenir shopping, airport departure.",
            places: ["Tokyo Metropolitan Government Building Observatory", "Shinjuku Gyoen", "Isetan Shinjuku", "Omoide Yokocho"],
            recommendedDuration: "PT7H",
          },
        ]}
      />
    </Layout>
  );
};

export default Tokyo5DayItinerary;
