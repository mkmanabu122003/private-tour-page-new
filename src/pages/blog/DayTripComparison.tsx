import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { DiagnosticTrigger } from "@/components/blog/DiagnosticTrigger";
import { dayTripFinderConfig } from "@/data/diagnostics/dayTripFinder";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc, BlogArticleAside } from "@/components/blog/BlogArticleSidebar";

const DayTripComparison = () => {
  return (
    <Layout>
      <SEO
        title="Kamakura Day Trip vs Hakone vs Nikko: Best Pick 2026"
        description="Can't decide between Kamakura, Hakone, or Nikko? A licensed local guide compares the Kamakura day trip with Hakone and Nikko on time, highlights, and fit."
        canonicalPath="/blog/kamakura-vs-hakone-vs-nikko-day-trip"
      />

      <div className="prose-editorial">
      {/* Hero — overlaid title */}
      <BlogArticleHero
        image="/images/blog/nikko-toshogu-hero.webp"
        imageAlt="Kamakura vs Hakone vs Nikko - best day trips from Tokyo"
        eyebrow="Day Trips"
        title="Kamakura vs Hakone vs Nikko: Which Day Trip Should You Choose?"
        date="February 25, 2026"
        backHref="/blog"
        backLabel="Back to Blog"
      />

      <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
            <BlogArticleToc items={[
              { num: "01", label: "Quick Comparison", href: "#section-01-quick-comparison" },
              { num: "02", label: "Kamakura", href: "#section-02-kamakura" },
              { num: "03", label: "Kamakura Day Trip", href: "#section-03-kamakura-day-trip" },
              { num: "04", label: "Hakone", href: "#section-04-hakone" },
              { num: "05", label: "Nikko", href: "#section-05-nikko" },
              { num: "06", label: "Can I Do Two?", href: "#section-06-can-i-do-two" },
              { num: "07", label: "My Recommendation", href: "#section-07-my-recommendation" },
              { num: "08", label: "FAQ", href: "#section-08-faq" },
            ]} />

            <article>
            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              "Which day trip should I do?" I get this question on almost every tour. It's one of the most common dilemmas facing Tokyo visitors, and the answer is genuinely different for every traveler.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kamakura, Hakone, and Nikko are the three most popular day trip destinations from Tokyo, and each offers a completely different experience. Having guided hundreds of travelers to all three, I can tell you that there's no single "best" choice. It depends on what you're looking for, how much time you have, and what kind of experience excites you.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Here's an honest, detailed comparison to help you decide. And if you still can't choose after reading this, that's what custom itineraries are for.
            </p>

            {/* Interactive Diagnostic Tool — opens in modal */}
            <DiagnosticTrigger config={dayTripFinderConfig} />
            {/* Quick Comparison Table */}
            <div className="section-eyebrow"><span>Section 01 · Quick Comparison</span></div>
            <h2 id="section-01-quick-comparison" className="scroll-mt-20">
              Quick Comparison
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left p-4 font-serif font-medium text-foreground"></th>
                    <th className="text-left p-4 font-serif font-medium text-foreground">Kamakura</th>
                    <th className="text-left p-4 font-serif font-medium text-foreground">Hakone</th>
                    <th className="text-left p-4 font-serif font-medium text-foreground">Nikko</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium text-foreground">Travel time</td>
                    <td className="p-4 text-muted-foreground">~1 hour</td>
                    <td className="p-4 text-muted-foreground">~1.5 hours</td>
                    <td className="p-4 text-muted-foreground">~2 hours</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Main draw</td>
                    <td className="p-4 text-muted-foreground">Ancient temples, coastal town</td>
                    <td className="p-4 text-muted-foreground">Mt. Fuji views, hot springs</td>
                    <td className="p-4 text-muted-foreground">UNESCO shrine, nature</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Best for</td>
                    <td className="p-4 text-muted-foreground">History lovers, foodies</td>
                    <td className="p-4 text-muted-foreground">Nature & relaxation</td>
                    <td className="p-4 text-muted-foreground">History + nature combo</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Difficulty</td>
                    <td className="p-4 text-muted-foreground">Easy</td>
                    <td className="p-4 text-muted-foreground">Easy</td>
                    <td className="p-4 text-muted-foreground">Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Best season</td>
                    <td className="p-4 text-muted-foreground">June (hydrangeas), year-round</td>
                    <td className="p-4 text-muted-foreground">Oct-Feb (Fuji views)</td>
                    <td className="p-4 text-muted-foreground">Oct-Nov (autumn leaves)</td>
                  </tr>
                  <tr className="bg-secondary/20">
                    <td className="p-4 font-medium text-foreground">Transport cost</td>
                    <td className="p-4 text-muted-foreground">~¥1,500 RT</td>
                    <td className="p-4 text-muted-foreground">~¥6,100 (Hakone Pass)</td>
                    <td className="p-4 text-muted-foreground">~¥5,000-8,000 RT</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Kamakura */}
            <div className="section-eyebrow"><span>Section 02 · Kamakura</span></div>
            <h2 id="section-02-kamakura" className="scroll-mt-20">
              Kamakura: Japan's Ancient Capital by the Sea
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kamakura was Japan's political capital from 1185 to 1333, when the Kamakura shogunate ruled the country. Today, it's a small, walkable coastal city with over 65 temples and shrines packed into a remarkably compact area. The combination of ancient history, natural beauty, and excellent food makes it the most well-rounded day trip option.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/kamakura-buddha-comparison.webp"
                alt="Great Buddha in Kamakura - popular day trip from Tokyo"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                The Great Buddha of Kamakura, one of Japan's most iconic landmarks
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The star attraction is the Great Buddha (Daibutsu) at Kotoku-in, a 13-meter bronze statue from the 13th century that originally sat inside a massive wooden hall. Typhoons and tsunamis destroyed the hall centuries ago, and the Buddha has sat serenely in the open air ever since. There's something deeply moving about seeing this ancient figure sitting peacefully against the sky, weathering the same storms for 800 years.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond the Great Buddha, Kamakura offers Hasedera Temple (spectacular ocean views and a famous golden Kannon statue), Tsurugaoka Hachimangu Shrine (the city's most important shrine, with a dramatic approach road), and Hokokuji Temple (a serene bamboo grove where you can enjoy matcha tea). The Komachi-dori shopping street near the station is perfect for lunch and snacking. Try the local shirasu (baby sardines) that Kamakura is famous for.
            </p>

            <h3>
              Best For
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              History lovers, first-time Japan visitors who want a well-rounded experience, families (easy terrain, lots of variety), and food enthusiasts. Kamakura is also the easiest day trip logistically: simple train connections, compact walking area, and well-signed paths.
            </p>

            <h3>
              What Most People Don't Know
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most tourists follow the same route (Station → Hachimangu → Great Buddha → Station), but Kamakura's real magic is in the smaller temples tucked into the surrounding hills. Zuisen-ji Temple has a stunning rock garden that receives a fraction of the visitors. The hiking trails between temples offer ocean views and forest walks. And in June, Kamakura transforms into a hydrangea paradise. Meigetsu-in Temple's blue hydrangea garden is one of the most photographed spots in Japan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For a deeper dive on Kamakura specifically, see my{" "}
              <Link to="/blog/kamakura-day-trip-from-tokyo" className="text-accent hover:underline font-medium">
                full Kamakura day trip from Tokyo guide
              </Link>
              {" "}— with route, timing, and the temples most visitors miss. Or{" "}
              <Link to="/tours/kamakura-day-trip" className="text-accent hover:underline font-medium">
                view the Kamakura Day Trip tour details
              </Link>.
            </p>

            {/* Kamakura Day Trip Deep Dive */}
            <div className="section-eyebrow"><span>Section 03 · Kamakura Day Trip</span></div>
            <h2 id="section-03-kamakura-day-trip" className="scroll-mt-20">
              Is Kamakura Worth a Day Trip From Tokyo?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Short answer: yes, and it's the day trip I recommend most often to first-time Tokyo visitors. A Kamakura day trip from Tokyo gives you ancient temples, a 13-meter bronze Buddha, ocean views, and excellent local food — all within about an hour of central Tokyo. Of the three options compared in this guide, Kamakura is the lowest-friction choice, and for many travelers it's also the most rewarding.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Below is what you actually need to plan a Kamakura day trip: how to get there, where to spend your hours, and a sample itinerary I use with clients.
            </p>

            <h3>How to Get to Kamakura From Tokyo</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The simplest route is the <strong>JR Yokosuka Line</strong> from Tokyo Station or Shinagawa Station direct to Kamakura Station — about 55–60 minutes, no transfers, around ¥940 one-way, and covered by JR Pass. Once you arrive, the <strong>Enoden (Enoshima Electric Railway)</strong> is a charming local tram that runs from Kamakura Station along the coast to Hase (the Great Buddha area) and Enoshima. Most of Kamakura's main sights are walkable from either Kamakura Station or Hase Station on the Enoden, so a Kamakura day trip rarely involves more than two short train rides total.
            </p>

            <h3>Top 5 Spots for a Kamakura Day Trip</h3>
            <ol className="space-y-3 mb-4 list-decimal list-outside ml-6">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Great Buddha (Kotoku-in):</strong> Kamakura's icon — a 13-meter bronze Buddha cast in 1252. Admission ¥300 for adults, plus ¥50 to step inside the hollow statue. Open 8:00–17:30 (April–September) / 8:00–17:00 (October–March), last entry 15 minutes before close. About a 5-minute walk from Hase Station on the Enoden.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Tsurugaoka Hachimangu Shrine:</strong> Kamakura's most important shrine, founded in 1180 by Minamoto no Yoritomo, the first shogun. Free entry, open from early morning (5:00 April–September / 6:00 October–March) until 21:00. The wide ceremonial approach (Wakamiya Oji) running from the beach to the shrine is a sight in itself.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hasedera Temple:</strong> Hillside temple with sweeping ocean views and a famous 9-meter wooden Kannon statue. Admission ¥400 for adults. Open 8:00–17:00 (July–March) / 8:00–17:30 (April–June). A short walk from Hase Station.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hokokuji Temple (Bamboo Grove):</strong> A small Zen temple with a quiet bamboo grove and a tea house where you can drink matcha while looking into the bamboo. Admission ¥400 (or ¥1,000 with matcha included). Open 9:00–16:00. Quieter than the headline spots — worth the extra walk if you want a contemplative pause.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Yuigahama Beach:</strong> Free, open year-round. A 5–10 minute walk from Hase Station, this is where Kamakura locals come to surf, swim in summer, and walk in any season. A natural place to slow down between temples — especially with a shirasu (whitebait) rice bowl in hand.
              </li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm italic">
              Hours, fares, and admission can change on short notice — confirm on the official temple sites and JR East before you go.
            </p>

            <h3>Sample Kamakura Day Trip Itinerary</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here's a realistic Kamakura day trip itinerary I use with clients. It assumes a roughly 8:30 AM departure from central Tokyo and a return by 5:30–6:00 PM, giving you about 7–8 hours total including transit.
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Morning (8:30–12:00):</strong> Depart Tokyo Station 8:30 → Arrive Kita-Kamakura ~9:30 → Engaku-ji Temple (1 hour) → Daibutsu Hiking Course (90 minutes) → Great Buddha at Kotoku-in.</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Lunch (12:30–13:30):</strong> Shirasu (whitebait) rice bowl near Hase Station, or handmade soba on Komachi-dori.</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Afternoon (13:30–16:30):</strong> Hasedera Temple (ocean views, Kannon hall) → Enoden ride to Yuigahama Beach → walk back via Komachi-dori → Tsurugaoka Hachimangu Shrine.</li>
              <li className="text-muted-foreground leading-relaxed"><strong className="text-foreground">Return (16:30–17:30):</strong> Depart Kamakura Station → arrive Tokyo Station ~17:30.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This Kamakura day trip itinerary covers the headline sights without rushing. If hiking isn't your thing, swap the trail for an extra temple — Hokokuji's bamboo grove pairs well with a quiet lunch in the same area. For a much deeper breakdown — including the temples most visitors skip — see my{" "}
              <Link to="/blog/kamakura-day-trip-from-tokyo" className="text-accent hover:underline font-medium">
                full Kamakura day trip from Tokyo guide
              </Link>.
            </p>

            {/* Hakone */}
            <div className="section-eyebrow"><span>Section 04 · Hakone</span></div>
            <h2 id="section-04-hakone" className="scroll-mt-20">
              Hakone: Hot Springs & the Iconic Fuji View
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hakone is where Tokyo residents go to escape the city, and it's been a popular retreat for centuries. Located in the mountains southwest of Tokyo, it offers a unique combination of natural beauty, volcanic geology, and traditional hot spring culture. The famous "Hakone Loop," a circuit of trains, cable cars, ropeways, cruise ships, and buses, is both a transportation system and an attraction in itself.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/hakone-fuji-comparison.webp"
                alt="Mt Fuji from Hakone - scenic day trip from Tokyo"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Mt. Fuji from Lake Ashi, Hakone's most sought-after view
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The highlight for most visitors is the view of Mt. Fuji across Lake Ashi. When conditions are right (clear winter mornings are best), the snow-capped peak reflected in the lake is one of Japan's most iconic images. The Hakone Ropeway carries you high over Owakudani, an active volcanic valley where you can see sulfurous steam rising from the ground and try the famous black eggs, regular eggs boiled in the volcanic hot springs that turn the shell black. Legend says each one adds seven years to your life.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hakone Shrine, with its red torii gate standing in the lake, is one of Japan's most photographed spiritual sites. The approach through the ancient cedar forest is atmospheric, and the lakeside torii creates a stunning composition. Beyond the main attractions, Hakone offers the Open-Air Museum (impressive sculpture garden with Picasso pavilion), traditional ryokan inns, and of course, onsen, the natural hot spring baths that are central to Japanese relaxation culture.
            </p>

            <h3>
              Best For
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nature lovers, photographers (especially those chasing the Fuji shot), couples seeking a romantic experience, and anyone who wants a complete change of scenery from Tokyo's urban energy. If seeing Mt. Fuji is on your bucket list, Hakone is your best bet for a day trip (though weather cooperation is required. Fuji is visible roughly 60-70% of clear days in winter, less in summer).
            </p>

            <h3>
              Insider Tip: The Fuji Factor
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here's what most travel guides won't tell you: Mt. Fuji visibility is highly unpredictable and changes throughout the day. Morning is generally better than afternoon, and winter months (October to February) offer significantly better odds than summer. Cloud cover can roll in within minutes. This is exactly why a guide is valuable in Hakone. I check weather conditions in real-time and rearrange the itinerary to maximize your chances. If Fuji is visible in the morning, we do the lake cruise first instead of saving it for later.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The transport system is also genuinely complex. The Hakone Free Pass is the most economical option, but figuring out the right combination of transportation, timing, and routing on your own takes significant planning. A guide eliminates this cognitive load entirely.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For Hakone-specific planning (transport pass math, guided vs solo, weather strategy), see my{" "}
              <Link to="/blog/hakone-day-trip-guide-vs-solo" className="text-accent hover:underline font-medium">
                Hakone day trip guide
              </Link>
              . Or{" "}
              <Link to="/tours/hakone-day-trip" className="text-accent hover:underline font-medium">
                view the Hakone Day Trip tour details
              </Link>.
            </p>

            {/* Nikko */}
            <div className="section-eyebrow"><span>Section 05 · Nikko: The Hidden UNESCO Masterpiece</span></div>
            <h2 id="section-05-nikko" className="scroll-mt-20">
              Nikko: The Hidden UNESCO Masterpiece
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If Kamakura is Japan's accessible ancient capital and Hakone is its scenic playground, Nikko is the hidden masterpiece that rewards those willing to make the longer journey. Located about two hours north of Tokyo in the mountains of Tochigi Prefecture, Nikko is home to the most ornate shrine complex in Japan, and some of the country's most spectacular natural scenery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Toshogu Shrine is the mausoleum of Tokugawa Ieyasu, the founder of the Tokugawa shogunate that ruled Japan for over 250 years. Unlike the austere simplicity of most Japanese shrines, Toshogu is deliberately, almost overwhelmingly ornate. Over 5,000 intricate carvings cover every surface: mythological creatures, natural scenes, philosophical allegories, and historical narratives. The "see no evil, speak no evil, hear no evil" monkeys that you see on souvenirs worldwide? The original carving is here, and it's part of a larger series depicting the stages of human life.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond the shrine complex, Nikko offers the dramatic Kegon Falls, a 97-meter waterfall that you can view from an observation platform reached by elevator inside the cliff. Lake Chuzenji, at 1,269 meters elevation, offers a completely different climate and atmosphere from Tokyo. In autumn (October to November), the mountainside transforms into a tapestry of red, orange, and gold that rivals any foliage display in the world.
            </p>

            <h3>
              Best For
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              History buffs who want to understand the Tokugawa era, nature lovers (especially in autumn), UNESCO heritage enthusiasts, and photographers. Nikko is also significantly less crowded than Kamakura or Hakone, which is a major advantage for those who prefer a more peaceful experience.
            </p>

            <h3>
              Why It's Less Crowded Than the Others
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The longer travel time (about 2 hours each way) means fewer tourists make the trip, especially on day visits. This works in your favor: you'll have more space at the shrine, shorter queues for the falls elevator, and a more contemplative experience overall. The trade-off is a longer day. You'll need to leave Tokyo earlier and return later. But for travelers who value depth over convenience, Nikko delivers an experience that the closer destinations simply can't match.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A guide is particularly valuable at Nikko because Toshogu's carvings are a visual encyclopedia that requires explanation to appreciate. Without context, you'll see "pretty decorations." With a guide, you'll understand the political messages, Buddhist symbolism, and Confucian philosophy embedded in every panel. It's the difference between looking at the Sistine Chapel and understanding what Michelangelo was trying to say.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For full Nikko logistics (Tobu vs JR, ¥12,000 solo budget vs guided), see my{" "}
              <Link to="/blog/nikko-day-trip-from-tokyo" className="text-accent hover:underline font-medium">
                Nikko day trip from Tokyo guide
              </Link>
              . Or{" "}
              <Link to="/tours/nikko-day-trip" className="text-accent hover:underline font-medium">
                view the Nikko Day Trip tour details
              </Link>.
            </p>

            {/* Can I Do Two? */}
            <div className="section-eyebrow"><span>Section 06 · Can I Do Two in One Trip?</span></div>
            <h2 id="section-06-can-i-do-two" className="scroll-mt-20">
              Can I Do Two in One Trip?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have multiple days available, you can absolutely combine day trips. The most popular combinations are:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Kamakura + Hakone</strong>. The most popular combo. Both are south/southwest of Tokyo, and you could even stay overnight in Hakone at a ryokan for the ultimate hot spring experience.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Kamakura + Nikko</strong>. Great for history enthusiasts. Kamakura (Kamakura shogunate) and Nikko (Tokugawa shogunate) together tell the story of 700 years of Japanese military government.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hakone + Nikko</strong>. For nature lovers who want maximum scenery variety. Mountains, lakes, volcanoes, waterfalls, everything Japan's geography has to offer.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer multi-day packages that combine Tokyo walking tours with day trips. This is the best value option and allows us to build a comprehensive itinerary that covers different aspects of Japan's culture and nature.{" "}
              <Link to="/contact" className="text-accent hover:underline">
                Contact us
              </Link>{" "}
              to discuss multi-day options.
            </p>

            {/* My Recommendation */}
            <div className="section-eyebrow"><span>Section 07 · My Recommendation</span></div>
            <h2 id="section-07-my-recommendation" className="scroll-mt-20">
              My Recommendation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After hundreds of day trips with travelers, here's my honest recommendation:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">If you only have 1 day:</strong> Go to Kamakura. It's the easiest, most well-rounded experience with the shortest travel time. You'll see ancient temples, a world-famous Buddha statue, ocean views, and excellent food, all in a comfortable 7-8 hour day.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">If you want nature + relaxation:</strong> Choose Hakone. The combination of Mt. Fuji views, volcanic valley, lake cruise, and potential onsen experience creates a day that feels like a complete escape from Tokyo.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">If you love history and don't mind a longer ride:</strong> Nikko is the answer. Toshogu Shrine alone justifies the trip, and the natural scenery is a bonus that makes the longer travel time worthwhile.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">If you have 2+ days for day trips:</strong> Do Kamakura + Hakone (most popular combination) or Kamakura + Nikko (for history lovers). Each destination offers something the others don't, so you won't feel like you're repeating the experience.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The most important thing is to choose based on what excites you, not what's "most popular." If you're genuinely passionate about history, Nikko will blow your mind even though it's the least-visited of the three. If you dream of seeing Mt. Fuji, Hakone is your best shot. And if you want the most balanced, easy-going experience, Kamakura delivers every time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Timing also matters, and each destination has an optimal season. For a complete breakdown of when to plan your trip, check out our{" "}
              <Link to="/blog/best-time-to-visit-tokyo" className="text-accent hover:underline">
                Best Time to Visit Tokyo guide
              </Link>
              .
            </p>

            {/* FAQ */}
            <div className="section-eyebrow"><span>Section 08 · FAQ</span></div>
            <h2 id="section-08-faq" className="scroll-mt-20">
              Frequently Asked Questions
            </h2>
            <div className="faq-block space-y-8">
              <div>
                <h3>How long is a day trip from Tokyo to Kamakura?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Plan for 7–8 hours total including transit. The JR Yokosuka Line takes about 55–60 minutes each way, leaving 5–6 hours in Kamakura — enough to see the Great Buddha, two or three temples, walk part of a hiking trail, and have lunch. An 8:30 AM Tokyo departure with a 5:00–6:00 PM return is a comfortable rhythm.
                </p>
              </div>
              <div>
                <h3>What's the best day trip from Tokyo: Kamakura or Hakone?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  It depends on what you want. Kamakura is the better day trip for first-time visitors who want temples, history, and food in one walkable area, with the shortest travel time (about 1 hour). Hakone is the better day trip if seeing Mt. Fuji, soaking in onsen, or experiencing volcanic landscapes is your priority — but it requires good weather and roughly 90 minutes of travel each way. If you can only choose one and you're not sure, Kamakura is the safer bet.
                </p>
              </div>
              <div>
                <h3>How do I get to Kamakura from Tokyo?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The fastest and simplest route is the JR Yokosuka Line direct from Tokyo Station or Shinagawa Station to Kamakura Station — about 55–60 minutes with no transfers, around ¥940 one-way, covered by JR Pass. Inside Kamakura, the Enoden (Enoshima Electric Railway) connects Kamakura Station with Hase Station (the Great Buddha area) and Enoshima along the coast, and is part of the experience.
                </p>
              </div>
              <div>
                <h3>Is Kamakura worth a day trip from Tokyo?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Yes. Of the three popular Tokyo day trip destinations (Kamakura, Hakone, Nikko), Kamakura is the most well-rounded option for a single day. You get ancient capital history, an iconic Buddha statue, ocean views, hiking trails, and notable food — all within an hour of central Tokyo. It's particularly worth it for first-time Japan visitors, history-curious travelers, and anyone who prefers a walkable, lower-friction day to a logistics-heavy one.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2>
                Ready to explore beyond Tokyo?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Check out our day trip tours, or contact us to build a custom multi-day itinerary that combines the best of Tokyo and surrounding destinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours" className="btn-accent">
                  Browse Day Trips
                </Link>
                <Link to="/contact" className="btn-outline">
                  Plan a Multi-Day Trip
                </Link>
              </div>
            </div>
            </article>

            <BlogArticleAside />
          </div>
        </div>
      </section>
      </div>

      <RelatedTourCards tourIds={["custom"]} showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Kamakura vs Hakone vs Nikko: Which Day Trip Should You Choose?",
            "description": "Can't decide between Kamakura, Hakone, or Nikko? A local guide compares travel time, highlights, and who each trip is best for.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
            },
            "datePublished": "2026-02-25",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/blog/kamakura-vs-hakone-vs-nikko-day-trip",
            },
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long is a day trip from Tokyo to Kamakura?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plan for 7–8 hours total including transit. The JR Yokosuka Line takes about 55–60 minutes each way, leaving 5–6 hours in Kamakura — enough to see the Great Buddha, two or three temples, walk part of a hiking trail, and have lunch.",
                },
              },
              {
                "@type": "Question",
                "name": "What's the best day trip from Tokyo: Kamakura or Hakone?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kamakura is the better day trip for first-time visitors who want temples, history, and food in one walkable area, with the shortest travel time (about 1 hour). Hakone is the better day trip for Mt. Fuji views and onsen, but requires good weather and roughly 90 minutes of travel each way.",
                },
              },
              {
                "@type": "Question",
                "name": "How do I get to Kamakura from Tokyo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The fastest route is the JR Yokosuka Line direct from Tokyo Station or Shinagawa Station to Kamakura Station — about 55–60 minutes, no transfers, around ¥940 one-way, covered by JR Pass.",
                },
              },
              {
                "@type": "Question",
                "name": "Is Kamakura worth a day trip from Tokyo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Kamakura is the most well-rounded Tokyo day trip — ancient temples, the Great Buddha, ocean views, and notable food, all within an hour of central Tokyo. It's particularly worth it for first-time Japan visitors and history-curious travelers.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default DayTripComparison;
