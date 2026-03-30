import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";

const TsukijiMarketGuide = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo Fish Market Guide 2026: Tsukiji Hours & Tips"
        description="Tsukiji Outer Market: 460+ shops, open 5AM–2PM, closed Sundays. A local guide's picks for best food, must-try stalls, and tips to skip the crowds."
        canonicalPath="/blog/tsukiji-market-guide"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Tsukiji Market Guide" },
        ]}
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
            <p className="text-label text-accent mb-3">Tokyo Area Guides</p>
            <h1 className="heading-display text-foreground">
              Tsukiji Outer Market Guide 2026: Yes, It's Still Open
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Licensed Tour Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 7, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px]">
        <img
          src="/images/blog/tsukiji-market-seafood-stalls.webp"
          alt="Seafood skewer stalls at Tsukiji Outer Market in Tokyo"
          className="w-full h-full object-cover"
          fetchpriority="high"
          width={1600}
          height={900}
        />
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Quick Answer Box — Featured Snippet target */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-10">
              <p className="text-foreground leading-relaxed">
                <strong>Is Tsukiji Outer Market still open in 2026?</strong> Yes! Tsukiji Outer Market remains fully open with 460+ shops, restaurants, and street food stalls. Only the inner wholesale auction moved to Toyosu Fish Market in October 2018. The outer market operates daily from around 5:00 AM, with most shops closing by 2:00 PM. Closed on Sundays and select Wednesdays — check the{" "}
                <a href="https://www.tsukiji.or.jp/english/calendar/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">official market calendar</a>
                {" "}before your visit.
              </p>
            </div>

            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              "Isn't Tsukiji closed?" I hear this question at least once a week from visitors planning their Tokyo itinerary. And I understand the confusion. The headlines from 2018 were everywhere: Tsukiji Market closes, the tuna auctions move to Toyosu, an era ends. But here's what those headlines got wrong, or at least left out. Only the inner wholesale market moved. The outer market, the part that matters most to visitors, never closed. It's still here, still thriving, and still one of the best food experiences in Tokyo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Manabu, a nationally licensed tour guide, and I walk through Tsukiji's outer market several times each week with guests from around the world. This tsukiji guide is everything I wish visitors knew before arriving: what actually happened to the market, what's still worth seeing, what to eat, and how to time your visit so you get the best experience possible. Whether you're a serious food lover or simply curious about one of Tokyo's most storied neighborhoods, this tsukiji guide will help you make the most of your morning.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Let me walk you through it the same way I walk my tour guests through the market: honestly, with no hype, and with the kind of detail you can only get from someone who's been doing this for years.
            </p>

            {/* Section 1: What Happened */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              What Happened to Tsukiji (The Quick Version)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tsukiji Market opened in 1935, built after the Great Kanto Earthquake destroyed the previous fish market at Nihonbashi. For over 80 years, it served as the world's largest wholesale fish market, a cavernous, chaotic space where thousands of tons of seafood were auctioned and sold before dawn every single day. The inner market was where the famous tuna auctions happened, where licensed wholesalers in rubber boots raced around on motorized carts called turret trucks, and where the sheer scale of Japan's seafood industry was on full display.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By the 2000s, the inner market's facilities were aging badly. The buildings were decades past their intended lifespan, sanitation standards were difficult to maintain, and the narrow lanes made modern refrigerated logistics nearly impossible. After years of political debate and delays, the inner wholesale market officially relocated to Toyosu, a modern facility on a man-made island in Tokyo Bay, in October 2018.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              But here's the crucial distinction that gets lost in the retelling: the inner market and the outer market were always two separate entities. The inner market was the wholesale floor, professionals only, with limited tourist access. The outer market was (and remains) a dense network of retail shops, restaurants, and food stalls that grew up around the wholesale operation over decades. When the inner market moved, the outer market stayed put. The roughly 400 shops and restaurants that line Tsukiji's narrow streets had no reason to leave. Their customers were locals, chefs, and food-loving visitors, not wholesale buyers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              So if someone tells you "Tsukiji is closed," they're repeating a half-truth. The wholesale floor is gone. The soul of the market, the part you can actually taste, touch, and experience as a visitor, is very much alive. And in some ways, it's better than before. With the wholesale operation gone, the outer market has leaned even further into its identity as a food destination. New shops have opened, existing ones have expanded, and the overall experience is more visitor-friendly than it was a decade ago. Any good tsukiji guide will tell you the same thing: the outer market is the real draw.
            </p>

            {/* Section 2: The Outer Market */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              What's Still There: The Outer Market
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The outer market occupies a compact grid of narrow lanes just south of the former inner market site. It's walkable in 20 minutes if you're in a hurry, but I've never met anyone who could get through it that fast. There's too much to see, smell, and taste. Over 400 shops and restaurants are packed into these few blocks, and the density is part of the charm. You'll turn a corner and find yourself face-to-face with a vendor slicing a tuna head the size of a small dog, or a grandmother grilling tamagoyaki on a rectangular pan that's older than you are.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The types of businesses here fall into a few categories. <strong className="text-foreground">Fresh seafood shops</strong> sell everything from whole fish to prepared sashimi, uni boxes, and dried goods like katsuobushi (bonito flakes) and kombu (kelp). <strong className="text-foreground">Kitchen supply stores</strong> carry Japanese knives, ceramics, lacquerware, and cooking tools. Many of these shops have been supplying professional chefs for generations. <strong className="text-foreground">Food stalls and street vendors</strong> grill scallops, squid, and wagyu skewers to order, fill paper cups with fresh uni and ikura, and hand you sticks of golden tamagoyaki still warm from the pan. And then there are the <strong className="text-foreground">sit-down restaurants</strong>, ranging from tiny sushi counters with six seats to proper seafood restaurants serving elaborate kaisendon (seafood rice bowls) and set meals.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What strikes me every time I walk through is how alive it all is. This isn't a museum or a tourist recreation. It's a working market where local chefs still come to source ingredients, where neighborhood residents buy their groceries, and where the vendors know their products with an expertise that borders on obsessive. The fishmonger who sells you a piece of otoro (fatty tuna belly) can tell you which ocean it came from, when it was caught, and how many days it's been aging. That level of knowledge and pride is what makes Tsukiji special, and no relocation can take that away.
            </p>
            <figure className="my-8">
              <img
                src="/images/tours/tsukiji-outer-market.webp"
                alt="Narrow lanes of Tsukiji outer market with food stalls"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                The outer market's narrow lanes, over 400 shops packed into a few walkable blocks
              </figcaption>
            </figure>

            {/* Section 3: What to Eat */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              What to Eat and Where (My Personal Picks)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is the part of my tsukiji guide where I get to share what I actually eat when I'm here, not as a guide performing for clients, but as someone who genuinely loves this market and has strong opinions about its food. Come hungry. Seriously. Skip breakfast at the hotel. You'll want the stomach space.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Tamagoyaki: The Icon
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If Tsukiji has a signature food, it's tamagoyaki, the thick, layered Japanese egg omelette cooked in a rectangular pan. Two shops dominate the tamagoyaki scene: Yamachou and Shouro. Yamachou's version is sweeter, almost dessert-like, with a caramelized exterior that cracks slightly when you bite into it. Shouro's is more savory, with a prominent dashi flavor that appeals to people who find the sweet version too much. A stick costs around 100 to 200 yen, and watching the cook build it layer by layer (pouring batter, rolling, pouring again) is half the experience. I eat tamagoyaki almost every time I'm at the market. It never gets old.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/tsukiji-tamagoyaki-on-stick.webp"
                alt="Golden tamagoyaki egg omelette on a stick at Tsukiji outer market"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Tsukiji's iconic tamagoyaki — golden, fluffy, and best eaten straight from the grill
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Fresh Sushi: Standing Up, As It Should Be
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tsukiji's standing sushi counters (tachigui-zushi) are where I send every visitor who asks me about sushi in Tokyo. The fish is sourced directly from wholesalers, in some cases from the same families who used to work the inner market floor, and the quality is extraordinary for the price. A set of 8 to 10 pieces runs about 2,000 to 3,000 yen, and you're eating elbow-to-elbow with salarymen and local chefs on their day off. The famous sit-down spots like Sushi Dai have two-hour queues and international reputations, but honestly, the lesser-known standing counters serve fish that's just as fresh at half the wait. If you want deeper recommendations on sushi across the city, I've written a separate{" "}
              <Link to="/blog/sushi-guide-tokyo" className="text-accent hover:underline">
                sushi guide for Tokyo
              </Link>{" "}
              that goes into much more detail.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/tsukiji-fresh-maguro-sashimi.webp"
                alt="Fresh sliced maguro tuna sashimi served at Tsukiji market"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Freshly sliced maguro at Tsukiji — sourced directly from the wholesalers that morning
              </figcaption>
            </figure>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Seafood Rice Bowls (Kaisendon)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you want a proper sit-down meal rather than grazing on street food, a kaisendon (a bowl of warm sushi rice topped with an assortment of raw seafood) is the way to go. The best versions feature glistening slices of maguro (tuna), salmon, hamachi (yellowtail), ikura (salmon roe), and sometimes uni, all arranged over perfectly seasoned rice. Expect to pay 1,500 to 3,000 yen depending on the toppings. My advice: go to the shops set back from the main tourist lanes. The restaurants at the market's edges charge premium prices for the same fish you can get for less deeper inside. Quality is consistent across the market. Location is the markup.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Pickles and Dried Goods: The Souvenirs Worth Buying
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not everything at Tsukiji needs to be eaten on the spot. The pickle shops (tsukemono-ya) sell an astonishing variety of Japanese pickled vegetables, from classic cucumber and daikon to more unusual items like pickled plums, wasabi-marinated lotus root, and sake-lees pickled turnips. Most shops offer free samples, and the vendors are patient with curious visitors. Dried goods shops carry katsuobushi, kombu, nori, and dried shrimp, the building blocks of Japanese cooking. If you want to take the flavors of Japan home with you, these are the souvenirs that actually matter. They're lightweight, packaged for travel, and will transform your home cooking in ways that a keychain from the airport never could.
            </p>
            <figure className="my-8">
              <img
                src="/images/blog/tsukiji-dried-goods-souvenirs.webp"
                alt="Tsukiji market stall displaying wasabi sesame seeds and specialty dried goods souvenirs"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                width={800}
                height={533}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Wasabi sesame, dried seasonings, and other Tsukiji-exclusive souvenirs that pack more flavor than any airport gift shop
              </figcaption>
            </figure>

            <InlineCTA message="Want to explore Tsukiji with a guide who knows every stall?" href="/tours/tsukiji-ginza" />

            {/* Section 4: Getting There */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              How to Get There and When to Arrive
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Timing is everything at Tsukiji, and this is where a proper tsukiji guide earns its value. The market operates on a rhythm shaped by decades of tradition. Arrive at the right time and you'll have an extraordinary experience. Arrive too late and you'll find shuttered stalls and picked-over displays.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Arrive by 8:00 AM.</strong> This is the sweet spot. The stalls are fully set up and stocked, the grills are fired up, the fish is at peak freshness, and the crowds haven't yet built to their midday density. By 8 AM, you'll have room to browse, ask questions, take photos, and eat without feeling rushed. Between 9 and 10 AM is still good but noticeably busier. After 11 AM, you're competing with lunch crowds. By 1 to 2 PM, many stalls begin closing, and by 3 PM the market is largely shut down for the day.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Getting there:</strong> The easiest route is the <strong className="text-foreground">Tokyo Metro Hibiya Line</strong> to Tsukiji Station (Exit 1). You'll be at the market's edge in a two-minute walk. Alternatively, the Oedo Line stops at Tsukiji-shijo Station, which is slightly closer to the former inner market site. From most central Tokyo hotels, the journey takes 15 to 25 minutes by subway.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Best days to visit:</strong> Weekday mornings are ideal. Tuesday, Thursday, and Friday give you the best combination of full stock and manageable crowds. Saturdays are doable but significantly more crowded, especially after 9 AM. <strong className="text-foreground">Avoid Sundays and select Wednesdays</strong>. Most stalls are closed on Sundays and on certain Wednesdays that follow the Tokyo Central Wholesale Market calendar (not every Wednesday). Always check the <a href="https://www.tsukiji.or.jp/english/calendar/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">market's official calendar</a> before your visit, as additional closure days occur around holidays. If you only have one morning in Tokyo for food, make it a Tuesday, Thursday, or Friday at Tsukiji.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Plan to spend 90 minutes to two hours for a thorough visit. That gives you enough time to walk the full market, eat three or four things, browse the knife shops and pickle vendors, and leave satisfied rather than overwhelmed. If you're interested in pairing your market visit with ramen later in the day, my{" "}
              <Link to="/blog/ramen-guide-tokyo" className="text-accent hover:underline">
                Tokyo ramen guide
              </Link>{" "}
              has neighborhood-specific recommendations that work well as a Tsukiji follow-up.
            </p>

            {/* Section 5: Tsukiji vs Toyosu */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Tsukiji vs. Toyosu: Should You Visit Both?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is the question I get asked more than any other in my tsukiji guide conversations with visitors, so let me give you an honest comparison. Both markets have value, but they offer fundamentally different experiences, and most visitors only need one.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Tsukiji Outer Market</strong> is about food, atmosphere, and sensory immersion. You walk through narrow lanes, eat from stalls, interact with vendors, and experience the market on a human scale. It's tactile, immediate, and deeply satisfying. No reservation is needed. You show up, you eat, you explore. The experience is organic and personal. Every visit is slightly different depending on what's in season, what catches your eye, and which vendor decides to offer you a free sample of their best uni.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Toyosu Market</strong> is about spectacle and scale. The main attraction is the tuna auction, which takes place at dawn and is genuinely impressive. Watching auctioneers sell multi-million-yen bluefin tuna in a matter of seconds is unlike anything else in the world. But the experience is observed from behind glass on elevated walkways. You're watching, not participating. The auction requires winning a <strong className="text-foreground">monthly lottery</strong> (applied online, with winners chosen at random — not first-come-first-served). Only about 100 visitors are admitted per day, and applications open roughly one month in advance. The market itself is a modern, sterile facility that lacks the atmospheric charm of Tsukiji's weathered lanes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My honest recommendation: <strong className="text-foreground">if you only have time for one, choose Tsukiji</strong>. The food is better for visitors, the atmosphere is richer, and the experience requires zero advance planning. If you're a serious seafood enthusiast and can secure a Toyosu auction reservation, do both: Toyosu at dawn for the auction, then Tsukiji by 8 AM for breakfast. It makes for an unforgettable morning, though an exhausting one.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              One thing I tell all my guests: Tsukiji's outer market is not a consolation prize for the inner market's departure. It's the main event. Always has been, even when the wholesale floor was still operating next door. The inner market was fascinating for industry insiders, but the outer market is where the food is, and food is what brings people to Tsukiji in the first place.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Want to experience Tsukiji with a local who knows every stall?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                On our walking tours, I take you through the market the way I experience it myself: no tourist traps, no overpriced bowls at the entrance, just the best food and the stories behind the vendors who make it. I'll help you navigate the lanes, order with confidence, and eat things you'd never find on your own. Tsukiji is best experienced with someone who knows it by heart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours" className="btn-accent">
                  View All Tours
                </Link>
                <Link to="/contact" className="btn-outline">
                  Ask a Question
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is Tsukiji Market still open in 2026?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes. The inner wholesale market moved to Toyosu in 2018, but the outer market, with over 400 shops, restaurants, and food stalls, remains open and thriving. It's one of the best food destinations in Tokyo and well worth a morning visit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">What time should I arrive at Tsukiji?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Aim for 8:00 AM. The stalls are fully stocked, the grills are hot, and the crowds are still manageable. Between 9 and 10 AM is acceptable but busier. Most stalls begin closing by 1 to 2 PM, so this is strictly a morning destination.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is Tsukiji open on weekends?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Saturday mornings are open but very crowded with both tourists and local shoppers. Most stalls are closed on Sundays and on select Wednesdays (following the wholesale market calendar — not every Wednesday). Weekday mornings (Tuesday, Thursday, and Friday) offer the best experience: full selection, fewer crowds, and a more relaxed atmosphere. Check the official market calendar before your visit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Should I visit Tsukiji or Toyosu?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For most visitors, Tsukiji is the better choice. The food variety is greater, the atmosphere is more immersive, and no reservation is needed. Toyosu is worth visiting only if you specifically want to see the tuna auction, which requires winning a monthly lottery (not a simple reservation). If you have time, you can do both in one morning: Toyosu at dawn, Tsukiji by 8 AM.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">How do I get to Tsukiji Market?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Take the Tokyo Metro Hibiya Line to Tsukiji Station (Exit 1). The outer market is a two-minute walk from the station. Alternatively, the Oedo Line stops at Tsukiji-shijo Station. From most central Tokyo hotels, the journey takes 15 to 25 minutes by subway.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["tsukiji-ginza","tokyo-food-tour"]} />

      {/* BlogPosting Schema */}

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Tsukiji Outer Market Guide 2026: Yes, It's Still Open (Hours & Tips)",
        description: "The inner market closed in 2018. But the outer market is alive. A local guide explains what remains, what's worth eating, and how to visit right.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-07", dateModified: "2026-03-07",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/tsukiji-market-guide" }
      })}} />
      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Is Tsukiji Outer Market still open after the Toyosu move?", acceptedAnswer: { "@type": "Answer", text: "Yes. The inner wholesale market moved to Toyosu in 2018, but Tsukiji Outer Market with over 400 shops, restaurants, and food stalls remains open and thriving in 2026." }},
          { "@type": "Question", name: "What time should I arrive at Tsukiji?", acceptedAnswer: { "@type": "Answer", text: "Aim for 8:00 AM. Stalls are fully stocked, grills are hot, and crowds are manageable. Most stalls close by 1-2 PM." }},
          { "@type": "Question", name: "Is Tsukiji open on weekends?", acceptedAnswer: { "@type": "Answer", text: "Saturday mornings are open but crowded. Most stalls are closed on Sundays and select Wednesdays. Weekday mornings (Tuesday, Thursday, Friday) are best. Check the official market calendar." }},
          { "@type": "Question", name: "Should I visit Tsukiji or Toyosu?", acceptedAnswer: { "@type": "Answer", text: "For most visitors, Tsukiji is the better choice for food variety and atmosphere. Toyosu is worth it only for the tuna auction, which requires winning a monthly lottery." }},
          { "@type": "Question", name: "How do I get to Tsukiji Market?", acceptedAnswer: { "@type": "Answer", text: "Take the Tokyo Metro Hibiya Line to Tsukiji Station (Exit 1). The outer market is a 2-minute walk. Journey from central Tokyo: 15-25 minutes." }}
        ]
      })}} />
    </Layout>
  );
};

export default TsukijiMarketGuide;
