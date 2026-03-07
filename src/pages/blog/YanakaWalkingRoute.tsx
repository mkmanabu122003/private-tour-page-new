import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const YanakaWalkingRoute = () => {
  return (
    <Layout>
      <SEO
        title="Yanaka Tokyo: A Guide's 3-Hour Walking Route"
        description="Yanaka survived the 1923 earthquake and WWII bombing. It's the closest thing to old Tokyo that still exists. Here's how to walk it properly."
        canonicalPath="/blog/yanaka-tokyo-walking-route"
      />

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
              Yanaka Tokyo: A Licensed Guide's 3-Hour Walking Route
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />Manabu, Licensed Tour Guide</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />March 7, 2026</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu — a National Government Licensed Guide Interpreter (全国通訳案内士) with 500+ private tours completed in Tokyo.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              There's a moment on every Yanaka tour I lead when a guest stops walking and just looks around. They've been in Tokyo for a day or two already — they've seen the neon of Shinjuku, the scramble crossing in Shibuya, the towering skyscrapers of Marunouchi. And then they step into Yanaka and something shifts. The buildings are low, wooden, weathered. Cats sleep on walls. An elderly woman sweeps the sidewalk in front of a shop that her grandmother opened. Nobody is rushing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              "This doesn't feel like Tokyo," they say. But it is Tokyo — it's just the Tokyo that existed before everything else was built on top of it. And this yanaka tokyo walking route is how I show it to them, every time, because it works. Three hours, one straight line from Nippori to Nezu, and by the end you'll understand why this neighborhood matters more than most guidebooks let on.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Why Yanaka Survived When the Rest of Tokyo Didn't
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tokyo has been destroyed twice in the last century. The Great Kanto Earthquake of 1923 flattened much of the eastern lowlands and the fires that followed burned for days. Then on March 10, 1945, American B-29 bombers dropped incendiary bombs across the Shitamachi flatlands in what remains the single most destructive air raid in human history — more immediately deadly than either atomic bomb. Over 100,000 people died in one night, and sixteen square miles of the city were incinerated.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yanaka survived both. The reasons are part geography, part luck, and part community stubbornness. Geographically, Yanaka sits on slightly elevated ground on the western edge of what was traditionally Shitamachi territory. The 1923 earthquake fires spread primarily through the dense flatlands to the east and south — Yanaka's position on higher ground and its proximity to the wide-open spaces of Ueno Park created a natural firebreak. In 1945, the firebombing targeted the industrial and residential flatlands along the Sumida River. Yanaka, tucked behind the hill, was simply not in the target zone.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              But survival through disaster doesn't explain why Yanaka looks the way it does today. Postwar redevelopment erased far more of old Tokyo than the bombs did. What saved Yanaka from the bulldozers was its residents. This was — and still is — a neighborhood of temples, small family businesses, and tight-knit community associations. When developers came knocking in the 1960s and 1970s, offering to buy up blocks and build apartment towers, the community largely said no. The temples refused to sell. The shopkeepers stayed. The neighborhood associations pushed back against rezoning.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The result is that Yanaka today is the closest thing to pre-war Tokyo that still exists as a living neighborhood — not a museum, not a reconstruction, but an actual community where people live and work in buildings that their great-grandparents would recognize. That's what makes any yanaka tokyo walking route worth your time. You're not visiting a preserved relic. You're walking through a neighborhood that simply never stopped being itself.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              The 3-Hour Route (With Map Notes)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I've refined this yanaka tokyo walking route over hundreds of tours. It moves in a roughly straight line from north to south, which means you're never backtracking, and it's almost entirely flat despite Yanaka's hillside position. You'll cover about three kilometers at a pace that allows for plenty of stopping, looking, photographing, and eating.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Start: Nippori Station (West Exit)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Take the JR Yamanote Line to Nippori Station and use the west exit. You'll emerge onto a quiet street that immediately feels different from the station areas in Shinjuku or Shibuya. No department stores, no crowds, no electronic billboards. Just a residential neighborhood. Turn left and walk south — within two minutes you'll reach the entrance to Yanaka Cemetery.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Yanaka Cemetery (30 minutes)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I know — a cemetery sounds like an unusual start to a walking tour. But Yanaka Cemetery is nothing like what most Western visitors expect. It's a sprawling, tree-lined space that functions more like a public park than a graveyard. Locals walk their dogs here. Families picnic under the cherry trees in spring. The main path — a wide, paved avenue lined with enormous cherry trees — is one of Tokyo's most beautiful walks during sakura season.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The cemetery holds over 7,000 graves, including that of Tokugawa Yoshinobu, the fifteenth and last shogun of Japan. I always stop at his grave to explain the end of the Edo period — how this man voluntarily surrendered power in 1868, ending 260 years of military rule and launching Japan into the modern era. He retired to a quiet life and was eventually buried here, in a neighborhood that, fittingly, still feels like the Edo era he left behind.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Temple Row (45 minutes)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Exiting the cemetery's southern edge, you enter what I call "temple row" — a stretch of residential streets that contains over 70 Buddhist temples within a few blocks. Yanaka has the highest concentration of temples of any neighborhood in Tokyo, a legacy of Edo-period policies that relocated temples to the city's outskirts. Each temple is small, quiet, and often tended by a single priest and their family. Most are open to walk through — you'll pass through wooden gates into moss-covered courtyards where stone lanterns lean with age and incense drifts from darkened halls.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I don't try to visit every temple. Instead, I pick three or four based on what the guest is interested in. Tenno-ji has a seated bronze Buddha that predates the neighborhood. Kyoo-ji has a painted ceiling with a dragon that watches you from every angle. Joko-ji is tiny and easy to miss, but its garden is one of the most peaceful spaces in Tokyo.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Yanaka Ginza (45 minutes)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The route brings you to the top of the Yuyake Dandan — a flight of stairs famous for its sunset views over the rooftops of Yanaka. At the bottom of those stairs begins Yanaka Ginza, a 170-meter shopping street that is the heart of the neighborhood. This isn't a tourist shopping street. It's where residents buy their groceries, their household goods, their daily snacks.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The street is narrow, lined with small shops on both sides, many with hand-painted signs and wooden facades. You'll find a butcher selling hand-formed croquettes, a pickle shop with barrels of vegetables fermenting in the doorway, a rice cracker maker who toasts each piece over charcoal. This is where I build in time for eating — and I'll cover the food in detail below.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Backstreets to Nezu (45 minutes)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From Yanaka Ginza, the route threads through residential backstreets toward Nezu. This is the most rewarding section for photography and quiet observation. You'll pass wooden houses with potted plants overflowing onto narrow lanes, workshops where craftspeople still make things by hand, and community bulletin boards advertising neighborhood festivals. The streets are barely wide enough for a single car, and most traffic is bicycles and pedestrians.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The walk ends at Nezu Station on the Chiyoda Line, but before you descend into the subway, I always take guests to Nezu Shrine — one of Tokyo's oldest Shinto shrines, famous for its tunnel of vermillion torii gates and its azalea garden that erupts in color every April. It's a fitting end to a route that has moved from a cemetery of shoguns through streets of temples and into a living neighborhood that refuses to become anything other than what it has always been.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              What You're Looking At — The Details That Matter
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On any yanaka tokyo walking route, the big landmarks are easy to find. But the real character of Yanaka is in the details that most visitors walk past without noticing. Here's what I point out on my tours:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Old wooden houses (machiya):</strong> Look for buildings with dark-stained wooden facades, sliding doors, and tiled roofs with slightly curved edges. These are traditional merchant houses, many dating to the early 1900s. The wood darkens naturally with age — if a building is nearly black, it's genuinely old, not artificially stained.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Temple gates (sanmon):</strong> Each temple entrance tells you something about the temple's status and sect. A simple wooden gate with a tiled roof suggests a modest neighborhood temple. Larger gates with guardian figures (nio) indicate a temple of higher rank. Notice whether the gate's wood is painted or left natural — this often indicates the Buddhist sect.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Cat statues and real cats:</strong> Yanaka is famous for its cats, both living and sculpted. You'll find carved wooden cats on shop signs, ceramic cats in temple gardens, and actual cats lounging on walls and in doorways. The neighborhood has embraced its reputation — there's even a cat-shaped donut shop. The real cats are community cats, fed and cared for by residents.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hand-painted signs:</strong> In most of Tokyo, shop signs are mass-produced vinyl or LED. In Yanaka, many shops still use hand-painted wooden signs — some beautiful, some charmingly amateur. These aren't nostalgic affectations. They're signs made by people who never saw a reason to replace them. A hand-painted sign that's faded and weathered is a sign that's been there for decades.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Potted plant gardens:</strong> Space is precious in Tokyo, and Yanaka residents have turned the narrow strips between their houses and the street into miniature gardens. Some are elaborate — bonsai collections, seasonal flowers rotated monthly, climbing vines trained up trellises. These personal gardens are a form of community art, maintained for the enjoyment of passersby as much as for the homeowner.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Understanding these details is what separates a pleasant walk from a meaningful one. If you've read my piece on{" "}
              <Link to="/blog/old-tokyo-shitamachi" className="text-accent hover:underline">Shitamachi and old Tokyo</Link>
              , you'll recognize Yanaka as one of the best-preserved examples of everything that article describes.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Where to Eat and Drink in Yanaka
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Part of what makes this yanaka tokyo walking route so satisfying is the food. Yanaka Ginza is essentially an edible street — you can graze your way from one end to the other and call it lunch.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Meat croquettes (menchi katsu):</strong> Several butchers on Yanaka Ginza sell hand-formed, freshly fried croquettes for around 200 yen each. They're crispy, juicy, and designed to be eaten while walking. I usually get one from the shop at the bottom of the Yuyake Dandan steps — the line moves fast and they fry them to order.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Yakitori and skewers:</strong> A few shops sell grilled chicken skewers and other items on sticks — perfect walking food. Look for the places with the most smoke coming out of the front.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Traditional sweets (wagashi):</strong> Yanaka has several shops selling traditional Japanese confections — dorayaki (red bean pancakes), taiyaki (fish-shaped cakes filled with sweet bean paste), and seasonal mochi. These shops often have just three or four items, all made fresh that morning.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Craft beer:</strong> Yanaka Beer Hall, located just off the main Ginza street, serves local craft beers in a renovated old building. It's a surprisingly modern addition to a traditional neighborhood, and it works beautifully — cold beer on a warm afternoon after a long walk through temples and backstreets.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Coffee and kissaten:</strong> Several small cafes — both modern pour-over spots and old-fashioned kissaten (traditional Japanese coffee shops) — are scattered through the backstreets. The kissaten are worth seeking out: dark wood interiors, classical music, hand-dripped coffee served in china cups. They feel like stepping into the 1960s.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For more ideas on where to eat across Tokyo's traditional neighborhoods, my{" "}
              <Link to="/blog/tokyo-hidden-gems" className="text-accent hover:underline">Tokyo hidden gems guide</Link>{" "}
              covers several spots that pair well with a Yanaka visit.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Best Time to Visit Yanaka
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yanaka is good year-round, but some times are better than others. Here's what I recommend based on walking this yanaka tokyo walking route in every season and every condition over the past several years:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best overall: weekday mornings.</strong> Arrive at Nippori Station around 9:30 AM on a Tuesday, Wednesday, or Thursday. The cemetery will be quiet, the temples will be open but empty, and you'll reach Yanaka Ginza around 11:00 AM just as the shops are opening and the street food is freshest. Weekends — especially Sunday afternoons — bring crowds that change the neighborhood's character entirely.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Cherry blossom season (late March to early April):</strong> The cemetery's main avenue becomes a tunnel of pink blossoms, and it's genuinely one of Tokyo's most beautiful hanami spots — far less crowded than Ueno Park or Meguro River. If your trip overlaps with sakura season, this yanaka tokyo walking route should be a top priority.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Autumn (mid-November to early December):</strong> The ginkgo and maple trees in the cemetery and temple grounds turn gold and red. The light is warm and low. The air is cool enough for comfortable walking but not cold enough to cut the tour short. Autumn is my personal favorite time to guide here.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Summer considerations:</strong> July and August are hot and humid. If you visit in summer, start early — 8:30 AM — and plan to finish before the midday heat. The shade from the cemetery trees and temple grounds helps, but Yanaka Ginza is fully exposed.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Rainy days:</strong> Don't skip Yanaka because of rain. The wet wooden buildings and stone temple paths are beautiful in the rain, and you'll have the neighborhood almost entirely to yourself. Just bring an umbrella and shoes with good grip.
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I've walked this route in typhoon remnants and in August heat and in February cold. Yanaka doesn't have a bad season — it just has different moods. The neighborhood changes with the light and the weather the way a face changes with expression. It's always the same place, but it's never quite the same experience twice.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              That's ultimately why this yanaka tokyo walking route has become one of my most-requested tours. Yanaka doesn't try to impress you. It doesn't perform. It's just a neighborhood that's been here for a very long time, doing what it's always done — living quietly, maintaining its temples, feeding its cats, and selling croquettes to anyone who walks by. In a city that reinvents itself every decade, that kind of constancy is the most remarkable thing of all.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Walk Yanaka with a licensed guide who knows every backstreet
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My private Yanaka walking tour covers this entire route — plus the stories, history, and hidden details that don't fit in a blog post. I adjust the pace and focus based on your interests, and I handle all the logistics so you can just enjoy the walk.
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
                  <h3 className="text-lg font-medium text-foreground mb-2">How do I get to the start of the Yanaka walking route?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Take the JR Yamanote Line to Nippori Station and use the west exit. The station is about 10 minutes from Ueno and 25 minutes from Shinjuku. From the west exit, the entrance to Yanaka Cemetery is a two-minute walk to the south.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is the Yanaka walking route suitable for children or elderly visitors?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes. The route is almost entirely flat, well-paved, and only about three kilometers total. The Yuyake Dandan staircase is the only significant elevation change, and it has handrails. I've walked this route with guests in their 80s and with families with young children — the pace is gentle and there are plenty of places to sit and rest.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Are shops in Yanaka open on weekends?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most shops on Yanaka Ginza are open daily, though individual shops may close on different days of the week (usually Monday or Tuesday). Weekend afternoons are the busiest time. For a quieter experience, visit on a weekday morning.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Can I combine Yanaka with other nearby areas?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Absolutely. Yanaka connects naturally to Ueno (museums, Ameyoko market) to the south and Nezu (Nezu Shrine, residential backstreets) at the route's end. Together, the Yanaka-Nezu-Sendagi area is known as "Yanesen" and makes a full-day outing. My Shitamachi tour often combines Yanaka with Asakusa for a comprehensive old Tokyo experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Do I need to book temple visits in advance?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No. The temples along the Yanaka walking route are open to the public and free to enter. You can walk into the grounds and courtyards at any time during daylight hours. Some interior halls may be closed to visitors, but the gardens and grounds are always accessible.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Yanaka Tokyo: A Guide's 3-Hour Walking Route",
        description: "Yanaka survived the 1923 earthquake and WWII bombing. It's the closest thing to old Tokyo that still exists. Here's how to walk it properly.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-07", dateModified: "2026-03-07",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/yanaka-tokyo-walking-route" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How do I get to the start of the Yanaka walking route?", acceptedAnswer: { "@type": "Answer", text: "Take the JR Yamanote Line to Nippori Station and use the west exit. The entrance to Yanaka Cemetery is a two-minute walk to the south." }},
          { "@type": "Question", name: "Is the Yanaka walking route suitable for children or elderly visitors?", acceptedAnswer: { "@type": "Answer", text: "Yes. The route is almost entirely flat, well-paved, and about three kilometers total. The pace is gentle with plenty of places to rest." }},
          { "@type": "Question", name: "Are shops in Yanaka open on weekends?", acceptedAnswer: { "@type": "Answer", text: "Most shops on Yanaka Ginza are open daily. Weekend afternoons are busiest. For a quieter experience, visit on a weekday morning." }},
          { "@type": "Question", name: "Can I combine Yanaka with other nearby areas?", acceptedAnswer: { "@type": "Answer", text: "Yes. Yanaka connects to Ueno and Nezu. Together, the Yanaka-Nezu-Sendagi area is known as 'Yanesen' and makes a full-day outing." }},
          { "@type": "Question", name: "Do I need to book temple visits in advance?", acceptedAnswer: { "@type": "Answer", text: "No. Temples along the route are open to the public and free to enter during daylight hours. No advance booking is needed." }}
        ]
      })}} />
    </Layout>
  );
};

export default YanakaWalkingRoute;
