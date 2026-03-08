import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const SushiGuideTokyo = () => {
  return (
    <Layout>
      <SEO
        title="Sushi Guide Tokyo: What a Licensed Guide Orders"
        description="Tokyo has more Michelin-starred sushi restaurants than anywhere. A local guide tells you what to order, where to go, and how not to embarrass yourself."
        canonicalPath="/blog/sushi-guide-tokyo"
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/blog/tsukiji-fresh-sushi.jpg"
          alt="Fresh sushi in Tokyo, a guide to the best sushi experience"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>
            <p className="text-label text-accent mb-3">Food Guides</p>
            <h1 className="heading-display text-foreground">
              Sushi Guide Tokyo: What a Licensed Guide Orders (And What to Avoid)
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />Manabu, Licensed Tour Guide</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />March 7, 2026</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a guide who grew up eating sushi in Tokyo and has spent the last decade showing visitors where to find the real thing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I once sat next to a couple at a sushi counter in Ginza. They'd booked the restaurant months in advance, flown fourteen hours, and were clearly excited. Then they dunked each piece of sushi rice-side-down into a pool of soy sauce, mixed wasabi into it until it looked like pond water, and stacked pickled ginger on top of every piece like a garnish. The chef said nothing, but I could see his expression. It wasn't anger. It was sadness.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              That moment is why I wrote this sushi guide for Tokyo. Not to be a snob about rules, but because understanding sushi (how it works, what to order, how to eat it) transforms the experience from "nice raw fish" into something genuinely unforgettable. Tokyo has more Michelin-starred sushi restaurants than any city on Earth. But you don't need a Michelin star to eat incredible sushi here. You just need to know what you're looking at.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              The Sushi You Think You Know vs. What's Actually Served in Tokyo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If your sushi experience so far has been California rolls, spicy tuna, and dragon rolls covered in mayo, I have news: none of those exist in traditional Tokyo sushi restaurants. They're American inventions, and I say that without judgment, because some of them are delicious. But they're a different food entirely.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What you'll find in Tokyo is <strong className="text-foreground">Edomae sushi</strong>, the original style, born in Tokyo (then called Edo) in the early 1800s. Before refrigeration existed, sushi chefs preserved fish using vinegar, salt, soy sauce, and kombu (kelp). The technique wasn't about showing off the fish raw. It was about transforming it. Even today, the best Edomae sushi chefs spend as much time preparing the fish as they do selecting it. Aging, marinating, torching, and seasoning each piece so that when it arrives at your seat, it's already perfect. No soy sauce needed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The other thing that surprises visitors: sushi in Tokyo is seasonal. You won't find the same fish in January as you will in August. In winter, it's fatty tuna (toro), yellowtail (buri), and mackerel. In summer, it's sea bream (tai), octopus (tako), and conger eel (anago). A good sushi guide for Tokyo would tell you that the best piece of sushi is whatever's in season that week, not whatever you saw on a "top 10" list written in March about fish that peaks in September.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Types of Sushi Restaurants (And Which to Pick)
            </h2>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Kaiten-zushi (Conveyor Belt Sushi)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Plates of sushi rotating on a belt, color-coded by price (usually ¥100–500 per plate). This is casual, fun, and a great way to try many types without committing. The quality at the best chains (Sushiro, Kura Sushi, Hamazushi) is genuinely good, especially for the price. Don't let anyone tell you it's "not real sushi." It is. It's just the casual version. Think diner versus fine dining. Both serve food, both can be excellent in their own context.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Omakase Counter Sushi</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is the experience most people picture when they think of sushi in Tokyo: sitting at a wooden counter, watching the chef prepare each piece by hand, and eating it within seconds of it being placed in front of you. "Omakase" means "I'll leave it to you," and the chef decides what you eat based on what's best that day. It's intimate, theatrical, and the sushi equivalent of a tasting menu. Prices range from ¥5,000 at neighborhood spots to ¥50,000+ at Ginza temples of sushi.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Tachi-gui (Standing Sushi)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Standing sushi bars are Tokyo's best-kept secret for sushi guide Tokyo visitors who want quality without the price tag. You stand at a counter, order individual pieces, and eat quickly. No reservations, no ceremony, just excellent fish at 30–50% less than a seated omakase. Some of my favorite sushi experiences have been at standing bars near Tsukiji's outer market and in train station basements. The fish is the same quality; you're just paying less because there's no chair.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Supermarket Sushi</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Don't laugh. Supermarket sushi in Tokyo is better than restaurant sushi in most other countries. After 7 PM, many supermarkets discount their sushi platters by 20–50%. A ¥500 pack of nigiri from a Tokyo supermarket at closing time is an absurdly good meal. I eat it at least once a week. It's not a "sushi experience," it's just good, honest, inexpensive fish on rice.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              What to Order as a First-Timer
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're sitting at a sushi counter for the first time in Tokyo, here's my advice: <strong className="text-foreground">start with tamago (egg)</strong>. This might sound strange. You've traveled thousands of miles and I'm telling you to order an egg? Yes. Because tamago is the test of a sushi chef. It's a sweet, layered omelet made with dashi stock, and every chef has their own recipe. Some are fluffy, some are dense, some are caramelized on the outside. Ordering tamago first tells the chef you know what you're doing. It also gives you a benchmark for the meal.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After tamago, follow the traditional progression: start with lighter, white-fleshed fish (tai, hirame), move to richer fish (salmon, hamachi), then fatty cuts (chutoro, otoro), and finish with maki rolls or tamago again. This progression exists because lighter flavors get overwhelmed by heavier ones. You want to taste the delicate sea bream before the unctuous fatty tuna coats your palate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              But honestly? If you're at an omakase counter, just say "omakase de onegaishimasu," meaning "chef's choice, please." The chef knows the progression better than you do. He's been doing this for decades. Trust him. This is, in my experience as a sushi guide in Tokyo, the approach that leads to the best meals. Surrender control and let the expert work.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Seasonal picks I love:</strong> In winter, ask for engawa (the fin muscle of flounder). It's buttery, slightly chewy, and not something you'll find easily outside Japan. In summer, try shima-aji (striped jack), clean, bright, and incredibly fresh. Year-round, uni (sea urchin) from Hokkaido is world-class, but only if it's domestic. Imported uni is a different animal entirely.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              Sushi Etiquette: The Rules That Matter
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm going to spare you the twenty-rule etiquette list you've seen online. Most of those "rules" are either outdated, overly strict, or only apply to ultra-formal Ginza counters. Here are the ones that actually matter in real life:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Use your fingers. It's encouraged.</strong> Nigiri sushi was originally street food, eaten with hands. Chopsticks are fine too, but if you're struggling to pick up a piece without it falling apart, switch to fingers. No one will judge you. The chef will probably respect you more for it.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Soy sauce goes on the fish, not the rice.</strong> This is the single most important rule. Flip the nigiri upside down and lightly, lightly, touch the fish side to the soy sauce. If you dip the rice, it absorbs the soy sauce like a sponge, falls apart, and all you taste is salt. At high-end counters, the chef has already seasoned each piece with the exact right amount of soy sauce. Don't add more unless you feel it needs it.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ginger is a palate cleanser, not a topping.</strong> The pickled ginger (gari) between pieces of sushi resets your palate between different fish. It doesn't go on top of the sushi. Eating ginger on your sushi is like pouring ketchup on a steak: technically possible, culturally painful.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Don't mix wasabi into your soy sauce.</strong> At a good sushi restaurant, the chef has already placed the right amount of wasabi between the fish and the rice. Adding more, especially by dissolving it into soy sauce, overpowers the fish. If you want extra wasabi, that's fine, but place it on the fish directly rather than creating a wasabi-soy slurry.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One more thing: eat each piece in one bite if possible. Nigiri is constructed as a single unit, and the balance of fish, rice, and wasabi is designed for one mouthful. Biting it in half disrupts that balance and usually results in it falling apart. If the piece is too large (some chefs make them big), it's okay to ask the chef to make them smaller. A good chef will appreciate that you care.
            </p>

            <h2 className="heading-section text-foreground mt-12 mb-6">
              My Picks by Budget
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Any honest sushi guide for Tokyo needs to address money. Sushi here spans an enormous price range, and more expensive doesn't always mean better. Here's how I think about it:
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Budget: ¥1,500–3,000 per person</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Conveyor belt sushi and standing sushi bars. At this price, you'll eat 8–15 pieces of genuinely good nigiri. The fish is fresh, the rice is properly seasoned, and the experience is fun. Sushiro and Kura Sushi are the big chains; both are excellent for the price. For standing sushi, look near major train stations. There's almost always a tachi-gui spot in the basement food floor. If you're on a budget and you hit a standing sushi bar near the old Tsukiji outer market area around 11 AM, you're eating some of the freshest fish in the world for less than a fast-food meal in New York.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Mid-Range: ¥5,000–10,000 per person</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is the sweet spot. At this price, you can get an omakase lunch at a neighborhood sushi counter, usually 10–12 pieces plus miso soup and a small appetizer. These are the restaurants where the chef trained at a famous place, broke off on his own, and charges fair prices because he doesn't have Ginza rent. The fish quality is often identical to places charging three times as much. Lunch omakase is almost always cheaper than dinner; some shops offer the same menu at 40% less during the day. I take most of my tour clients to restaurants in this range.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">Splurge: ¥15,000+ per person</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              High-end omakase in Ginza, Roppongi, or Nishi-Azabu. At this level, you're paying for the best seasonal fish available, a master chef's decades of technique, premium ingredients (aged soy sauce, hand-grated real wasabi, rare vinegars), and an intimate atmosphere that usually seats 6–10 people. The sushi is extraordinary, each piece a small masterpiece, but the law of diminishing returns applies. The jump from ¥3,000 to ¥8,000 is enormous in quality. The jump from ¥15,000 to ¥30,000 is noticeable but not life-changing. If you're going to splurge, I'd suggest one high-end meal in the ¥15,000–20,000 range and spending the rest of your sushi budget at mid-range and standing spots.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Reservations:</strong> Budget and mid-range spots rarely need them. High-end omakase often requires booking 1–3 months ahead, and many only accept reservations through a Japanese phone number or concierge service. Your hotel concierge can usually help, or I can arrange it as part of a tour.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4 mt-8">
              If you're building a full food itinerary, pair this sushi guide with my{" "}
              <Link to="/blog/ramen-guide-tokyo" className="text-accent hover:underline">ramen guide for Tokyo</Link>{" "}
              . Ramen and sushi are the two pillars of Tokyo's food identity. And for neighborhoods worth exploring beyond the food scene, check out my{" "}
              <Link to="/blog/tokyo-hidden-gems" className="text-accent hover:underline">Tokyo hidden gems</Link>{" "}
              article, which covers some of the quieter areas where the best local restaurants hide.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Eat sushi with a guide who knows the chefs
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                On my tours, I take clients to sushi counters where I know the chef personally, places that don't appear on English-language lists and don't need to. I'll handle the ordering, explain each piece, and make sure you have the kind of sushi experience that people fly to Tokyo for. Food is never an afterthought on my tours. It's the highlight.
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
                  <h3 className="text-lg font-medium text-foreground mb-2">Do I need a reservation for sushi in Tokyo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    It depends on the tier. Conveyor belt and standing sushi bars are walk-in only. Mid-range omakase counters sometimes take reservations but often have space at lunch. High-end Ginza-level restaurants almost always require booking 1–3 months in advance, and many only accept reservations in Japanese. Your hotel concierge or a licensed guide can help with this.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is it rude to order sushi with chopsticks instead of fingers?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Not at all. Both are perfectly acceptable. Fingers are traditional and often easier for nigiri (less risk of the piece falling apart), but chopsticks are equally fine. The chef won't judge you either way. What matters more is how you dip: fish side into soy sauce, not rice side.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">What's the best time of year for sushi in Tokyo?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every season offers different fish, so there's no single "best" time. Winter (December–February) is prime for fatty tuna and yellowtail. Spring brings red snapper and shellfish. Summer features sea bream and octopus. Autumn offers saury and salmon roe. The best strategy is to eat omakase and let the chef serve whatever's peaking that day.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Can I get good sushi in Tokyo on a budget?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Absolutely. Standing sushi bars serve excellent nigiri for ¥100–300 per piece, and conveyor belt chains like Sushiro offer quality that would pass for a good sushi restaurant in most other countries, at ¥100–150 per plate. Even supermarket sushi in Tokyo, especially after the evening discount, is remarkably good. You can eat world-class sushi for under ¥2,000.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: "Sushi Guide Tokyo: What a Licensed Guide Orders (And What to Avoid)",
        description: "Tokyo has more Michelin-starred sushi restaurants than anywhere. A local guide tells you what to order, where to go, and how not to embarrass yourself.",
        author: { "@type": "Person", name: "Manabu", jobTitle: "National Government Licensed Guide Interpreter", url: "https://tanuki-tabi-travel.com/about" },
        datePublished: "2026-03-07", dateModified: "2026-03-07",
        publisher: { "@type": "Organization", name: "Tanuki Tabi Travel", url: "https://tanuki-tabi-travel.com" },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://tanuki-tabi-travel.com/blog/sushi-guide-tokyo" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Do I need a reservation for sushi in Tokyo?", acceptedAnswer: { "@type": "Answer", text: "Conveyor belt and standing sushi bars are walk-in. Mid-range omakase sometimes takes reservations. High-end Ginza restaurants require booking 1-3 months ahead, often only in Japanese." }},
          { "@type": "Question", name: "Is it rude to order sushi with chopsticks instead of fingers?", acceptedAnswer: { "@type": "Answer", text: "Not at all. Both are perfectly acceptable. Fingers are traditional and often easier for nigiri, but chopsticks are equally fine." }},
          { "@type": "Question", name: "What's the best time of year for sushi in Tokyo?", acceptedAnswer: { "@type": "Answer", text: "Every season offers different fish. Winter has fatty tuna and yellowtail, spring brings shellfish, summer features sea bream, autumn offers salmon roe. Eat omakase and let the chef choose." }},
          { "@type": "Question", name: "Can I get good sushi in Tokyo on a budget?", acceptedAnswer: { "@type": "Answer", text: "Yes. Standing sushi bars serve excellent nigiri for ¥100-300 per piece. Conveyor belt chains offer great quality at ¥100-150 per plate. Even supermarket sushi in Tokyo is remarkably good." }}
        ]
      })}} />
    </Layout>
  );
};

export default SushiGuideTokyo;
