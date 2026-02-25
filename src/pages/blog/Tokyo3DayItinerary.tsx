import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const Tokyo3DayItinerary = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo 3-Day Itinerary | A Local Guide's Recommendations | Tanuki Tabi Travel"
        description="Plan the perfect 3 days in Tokyo with insider tips from a licensed local guide. Covers Asakusa, Shibuya, Tsukiji, day trips, and hidden gems most tourists miss."
        canonicalPath="/blog/tokyo-3-day-itinerary"
      />

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
              The Perfect 3-Day Tokyo Itinerary — From a Local Guide
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Licensed Tour Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                February 25, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              After guiding over 500 tours in Tokyo, I've seen what works and what doesn't for first-time visitors. Some travelers try to cram everything into a single day and end up exhausted. Others miss hidden gems because they stick to the most obvious attractions. This 3-day itinerary balances must-see highlights with local experiences most tourists miss. Feel free to mix and match — every traveler is different, and the best itinerary is the one that excites you.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I've organized the three days geographically to minimize transit time and maximize exploration. Each day covers a different side of Tokyo — traditional east, modern west, and then your choice of central Tokyo or a day trip. Here's what I recommend based on years of walking these streets with travelers from around the world.
            </p>

            {/* Day 1 */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Day 1: East Tokyo — History & Tradition
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Morning: Asakusa — Where Old Tokyo Lives
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Start your Tokyo journey where the city itself began — Asakusa. This neighborhood is home to Senso-ji, Tokyo's oldest temple, founded in the 7th century. Walk through the iconic Kaminarimon (Thunder Gate) and down Nakamise-dori, a shopping street that has been serving visitors for centuries. For a deeper dive into the area, read our{" "}
              <Link to="/blog/asakusa-guide-what-to-see" className="text-accent hover:underline">
                complete Asakusa guide
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Local tip:</strong> Arrive before 9 AM to experience Senso-ji without the crowds. The morning light through the incense smoke creates a magical atmosphere that you simply cannot get later in the day. The temple grounds are open 24 hours, but the Nakamise shops open around 10 AM — so you get the best of both worlds if you time it right.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Don't just walk the main street — venture into the side alleys where you'll find traditional craft shops, small temples, and local eateries that have been in the same family for generations. The area around Dempoin Temple Garden is particularly beautiful and often overlooked by tourists rushing to Senso-ji.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you want a deeper exploration of Asakusa with cultural context and hidden spots, our{" "}
              <Link to="/tours/asakusa" className="text-accent hover:underline">
                Asakusa Walking Tour
              </Link>{" "}
              covers everything from temple rituals to the best street food stalls.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Late Morning: Walk to Tokyo Skytree via Sumida Park
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From Asakusa, take a scenic walk along the Sumida River toward Tokyo Skytree. The riverside promenade is one of Tokyo's most photogenic walks, with the traditional temple pagoda on one side and the futuristic Skytree tower on the other. In spring (late March to early April), this area is lined with cherry blossoms — it's one of the best viewing spots in the city.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You don't need to go up the Skytree (long queues and expensive), but the views from the base and the surrounding Solamachi shopping complex are worth the 15-minute walk. The complex also has some excellent food options if you're getting hungry.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lunch: Local Flavors Near Asakusa
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For lunch, I recommend trying one of Asakusa's traditional soba (buckwheat noodle) restaurants or a tempura spot. Asakusa has been famous for tempura since the Edo period, and there are still family-run restaurants here that have been perfecting their craft for over a century. If you're adventurous, try monjayaki — Tokyo's version of the Osaka okonomiyaki pancake, messier but delicious.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Afternoon: Yanaka — Tokyo's Nostalgic Old Town
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Take the train to Nippori Station (about 15 minutes) and step into Yanaka — one of the few Tokyo neighborhoods that survived both the 1923 earthquake and the WWII bombings. This is Tokyo as it used to be: narrow lanes, wooden houses, independent shops, and cats lounging on temple walls.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Walk down the Yanaka Ginza shopping street, where local vendors sell handmade goods, traditional snacks, and craft beer. Visit Tennoji Temple, wander through the atmospheric Yanaka Cemetery, and if the timing is right, watch the sunset from the famous Yuyake Dandan steps — it's truly a special moment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yanaka is a neighborhood that rewards slow exploration, and it's a place where most tourists never go. For the full experience, our{" "}
              <Link to="/tours/yanaka" className="text-accent hover:underline">
                Yanaka Walking Tour
              </Link>{" "}
              uncovers stories and spots you won't find in any guidebook.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Evening: Ueno Area — Ameyoko Market
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              End your first day at Ameyoko, the lively market street near Ueno Station. Originally a post-war black market, it's now a bustling strip of food stalls, seafood vendors, and discount shops. Great for street food — try the fresh seafood bowls, grilled meats on sticks, or chocolate-covered strawberries. The energy here is infectious and it's a perfect way to end your first day.
            </p>

            {/* Day 2 */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              Day 2: West Tokyo — Modern Culture & Energy
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Morning: Meiji Shrine — Peace in the City
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Start your second day at Meiji Shrine (Meiji Jingu), dedicated to Emperor Meiji and Empress Shoken. Arrive early (the shrine opens at sunrise) for the most peaceful experience. Walk through the towering torii gate and the 170-acre forest — it's hard to believe you're in the middle of Tokyo's busiest area. The forest was entirely planted by volunteers in the 1920s, with trees donated from every prefecture in Japan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Watch for wedding ceremonies if you visit on weekends — you might catch a traditional Shinto wedding procession. The shrine also has a beautiful iris garden (best in June) and a sake barrel display that tells the story of Japan's relationship with wine and spirits.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Late Morning: Harajuku — Youth Culture Explosion
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From Meiji Shrine's southern exit, you'll emerge directly onto Harajuku's famous Takeshita Street — one of the most dramatic transitions in Tokyo. In seconds, you go from a 100-year-old shrine forest to a neon-lit street packed with crepe shops, vintage clothing stores, and Japanese pop culture. See our{" "}
              <Link to="/blog/shibuya-harajuku-guide" className="text-accent hover:underline">
                Shibuya & Harajuku guide
              </Link>{" "}
              for all the insider tips.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Walk Takeshita Street for the sensory overload, then head to Omotesando — often called "Tokyo's Champs-Élysées" — for world-class architecture by Tadao Ando, Kengo Kuma, and Toyo Ito. The contrast between Harajuku's kawaii culture and Omotesando's sleek sophistication tells you everything about Tokyo's ability to contain multitudes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our{" "}
              <Link to="/tours/shibuya-harajuku" className="text-accent hover:underline">
                Shibuya & Harajuku Tour
              </Link>{" "}
              covers this area in depth — from hidden vintage shops to the stories behind Omotesando's architectural masterpieces.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Lunch: Shibuya Area
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Head to Shibuya for lunch. Skip the chain restaurants and look for local spots in the back streets. I recommend trying a proper ramen shop (the wait is worth it) or a Japanese curry restaurant — Shibuya has some of the best in the city. If you want something quick and quintessentially Japanese, try a gyudon (beef bowl) at a counter restaurant — fast, filling, and delicious.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Afternoon: Shibuya Crossing & Beyond
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No Tokyo visit is complete without experiencing Shibuya Crossing — the world's busiest pedestrian intersection, where up to 3,000 people cross at once. Cross it yourself, then head to the Shibuya Sky observation deck or the Starbucks above the crossing for the best overhead views. Visit the Hachiko statue (the famous loyal dog) and explore Center-gai for a taste of Tokyo's vibrant street culture.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have energy left, walk through the quieter neighborhoods behind the main streets. Tomigaya and Kamiyamacho are local favorites with excellent cafes, independent bookshops, and small restaurants that most tourists never discover.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Evening: Shinjuku Nightlife
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              End day two in Shinjuku, Tokyo's entertainment capital. For drinks, head to Golden Gai — a tiny network of over 200 small bars, each seating about 6-8 people. It's intimate, quirky, and a completely unique experience. Look for bars with English menus or "Foreigner Welcome" signs if you're nervous about the language barrier. Read our{" "}
              <Link to="/blog/shinjuku-guide" className="text-accent hover:underline">
                complete Shinjuku guide
              </Link>{" "}
              for more details on Golden Gai etiquette and the best food spots.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For dinner, try Omoide Yokocho ("Memory Lane") — a narrow alley of yakitori (grilled chicken) stalls that has been serving workers since the 1940s. It's smoky, crowded, and absolutely authentic. Vegetarians should note that options are limited here, but nearby Shinjuku has restaurants for every dietary need.
            </p>

            {/* Day 3 */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              Day 3: Choose Your Adventure
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Option A: Central Tokyo — Food, Gardens & History
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Morning — Tsukiji Outer Market:</strong> Even though the inner wholesale market moved to Toyosu, Tsukiji Outer Market is still the best food destination in Tokyo. Arrive by 8-9 AM for the freshest offerings: sushi for breakfast (yes, it's a thing), tamagoyaki (Japanese omelet), fresh oysters, and wagyu beef skewers. Take your time and graze — it's the best way to experience the market. Check our{" "}
              <Link to="/blog/tsukiji-guide-food-lover" className="text-accent hover:underline">
                Tsukiji food lover's guide
              </Link>{" "}
              for what to eat and what to skip.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For a guided food exploration, our{" "}
              <Link to="/tours/tsukiji-ginza" className="text-accent hover:underline">
                Tsukiji & Ginza Tour
              </Link>{" "}
              will help you navigate the best stalls and explain what you're eating.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Afternoon — Imperial Palace East Gardens:</strong> A peaceful contrast to the morning's market energy. These free-entry gardens were once the innermost circle of Edo Castle, the seat of Tokugawa shogunate power for over 250 years. The stone walls, moats, and garden design tell the story of samurai-era Japan. Walk through to the Marunouchi business district to see Tokyo's modern skyline framed by ancient castle walls.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Explore the area in depth with our{" "}
              <Link to="/tours/imperial-palace" className="text-accent hover:underline">
                Imperial Palace Tour
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Evening — Ginza:</strong> End your Tokyo stay in Ginza, the upscale shopping district. Even if you're not shopping, the department store food halls (depachika) in the basement floors are worth visiting — they're culinary wonderlands of beautifully packaged Japanese sweets, bento boxes, and gourmet treats. Perfect for picking up edible souvenirs.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Option B: Day Trip from Tokyo
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you've covered central Tokyo and want to see more of Japan, a day trip is an excellent use of your third day. Each destination offers something completely different from Tokyo:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <Link to="/tours/kamakura-day-trip" className="text-accent hover:underline font-medium">
                  Kamakura
                </Link>{" "}
                — Ancient temples, the Great Buddha, and coastal charm. Just 1 hour from Tokyo by train. The most well-rounded day trip for first-timers. Best in June for hydrangeas or November for autumn leaves.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <Link to="/tours/hakone-day-trip" className="text-accent hover:underline font-medium">
                  Hakone
                </Link>{" "}
                — Mt. Fuji views, hot springs, and a volcanic valley. Perfect for nature lovers and photographers. The transport system is complex, so a guide really helps here. Best October-February for Fuji visibility.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <Link to="/tours/nikko-day-trip" className="text-accent hover:underline font-medium">
                  Nikko
                </Link>{" "}
                — UNESCO World Heritage Toshogu Shrine, dramatic waterfalls, and mountain lake scenery. Further from Tokyo (2 hours) but less crowded and deeply rewarding for history enthusiasts. October-November is spectacular for autumn foliage.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Can't decide? Read our detailed comparison:{" "}
              <Link to="/blog/kamakura-vs-hakone-vs-nikko-day-trip" className="text-accent hover:underline">
                Kamakura vs Hakone vs Nikko — Which Day Trip Should You Choose?
              </Link>
            </p>

            {/* Practical Tips */}
            <h2 className="heading-section text-foreground mt-16 mb-6">
              Practical Tips for Your Tokyo Visit
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Getting Around
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Get a Suica or Pasmo IC card at any station — it works on all trains, subways, and buses in Tokyo. Just tap and go. You can also use it at convenience stores and vending machines. The Tokyo Metro and JR lines cover virtually everywhere you'll want to go, and Google Maps works perfectly for navigation in Japan.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Don't be intimidated by the train system — it's actually very intuitive once you understand that different companies operate different lines. Signs are in English, stations are announced in English, and trains are almost always on time. During rush hour (7:30-9 AM), avoid the busiest lines if possible, or travel in the opposite direction of commuter flow.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              When to Visit
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tokyo is a year-round destination. Spring (March-May) brings cherry blossoms and pleasant weather. Summer (June-August) is hot and humid but offers festivals and fireworks. Autumn (October-November) has stunning foliage and comfortable temperatures. Winter (December-February) is cold but clear, with fewer tourists and beautiful illuminations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Peak tourist seasons are cherry blossom season (late March to mid-April) and autumn foliage (mid-November to early December). Book accommodations and tours early during these periods. Golden Week (late April to early May) is a Japanese national holiday — domestic travel peaks and some businesses close. For a detailed month-by-month breakdown, see our{" "}
              <Link to="/blog/best-time-to-visit-tokyo" className="text-accent hover:underline">
                Best Time to Visit Tokyo guide
              </Link>
              .
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Money Matters
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japan is still more cash-dependent than many countries, especially at small restaurants, temples, and markets. Carry at least ¥10,000-20,000 in cash. 7-Eleven and Post Office ATMs accept international cards reliably. Credit cards are increasingly accepted at larger establishments, but don't rely on them exclusively. Your IC card (Suica/Pasmo) is the most convenient payment method for small purchases.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Temple & Shrine Etiquette
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At shrines: bow slightly before passing through the torii gate, walk on the sides (the center path is for the deity), purify your hands at the water basin, and bow-clap-bow when praying. At temples: remove shoes when entering buildings, don't point at statues, and speak quietly. Your guide will explain all customs in detail, but these basics will help you feel confident. For the full step-by-step guide, read our{" "}
              <Link to="/blog/japan-temple-shrine-etiquette" className="text-accent hover:underline">
                Temple & Shrine Etiquette guide
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The most important thing is simply to be respectful and observant. Japanese people are incredibly welcoming to tourists who show an interest in their culture, even if you don't get every custom perfectly right.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Want a local guide to bring this itinerary to life?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'd love to help you experience the best of Tokyo. Whether you want to follow this itinerary or create something completely custom, let's make your trip unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours" className="btn-accent">
                  Browse Our Tokyo Tours
                </Link>
                <Link to="/tours/custom" className="btn-outline">
                  Design a Custom Tour
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "The Perfect 3-Day Tokyo Itinerary — From a Local Guide",
            "description": "Plan the perfect 3 days in Tokyo with insider tips from a licensed local guide.",
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
              "@id": "https://tanuki-tabi-travel.com/blog/tokyo-3-day-itinerary",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default Tokyo3DayItinerary;
