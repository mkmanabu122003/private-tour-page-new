import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const ShinjukuGuide = () => {
  return (
    <Layout>
      <SEO
        title="Shinjuku Guide: Best Things to Do | Local Expert Tips"
        description="Plan your Shinjuku visit with insider tips from a licensed Tokyo guide. Explore Golden Gai, Omoide Yokocho, Gyoen Garden, and more hidden spots most tourists miss."
        canonicalPath="/blog/shinjuku-guide"
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
              Shinjuku Guide: What a Licensed Guide Actually Shows Clients
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
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a Tokyo-based National Government Licensed Guide Interpreter who has walked Shinjuku's streets with hundreds of international visitors.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full h-[300px] md:h-[400px]">
        <img
          src="/images/blog/shinjuku-guide-hero.jpg"
          alt="Shinjuku guide - navigating Tokyo's neon-lit heart"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Shinjuku Station handles 3.5 million passengers daily, making it the busiest
              transport hub on the planet. If you arrive without a plan, it can feel
              genuinely overwhelming. The station alone has over 200 exits, and the streets
              above are a sensory assault of neon signage, rushing commuters, and competing
              loudspeaker announcements. But once you learn how Shinjuku is laid out and
              understand what each pocket of the district offers, this neighborhood transforms
              from chaotic obstacle into one of Tokyo's most rewarding areas to explore. I've
              been guiding visitors through Shinjuku for years, and it remains my favorite
              district to show people at night. There is simply nowhere else in the world
              quite like it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This guide covers everything you need to navigate Shinjuku with confidence,
              from the skyscraper-lined west side to the entertainment-packed east side, from
              tiny Golden Gai bars to the serene beauty of Shinjuku Gyoen. I'll share the
              same tips I give my tour guests: where to go, what to skip, how much to budget,
              and the etiquette that will make your experience smoother.
            </p>

            {/* Getting Oriented */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Getting Oriented: Shinjuku's Two Sides
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The key to understanding Shinjuku is knowing that the train tracks divide
              it into two completely different worlds.{" "}
              <strong className="text-foreground">West Shinjuku</strong> is the business
              and government district, a grid of towering skyscrapers, corporate
              headquarters, and wide avenues that feel almost American in their scale.
              The Tokyo Metropolitan Government Building dominates the skyline here, and
              its twin observation decks on the 45th floor offer free panoramic views of
              the city. On clear days, you can see Mt. Fuji in the distance. This is also
              where you'll find the Park Hyatt Tokyo, made famous by the film{" "}
              <em>Lost in Translation</em>. The New York Bar on the 52nd floor is worth
              a visit for the view alone, though drinks start around ¥2,500 and there is
              a cover charge in the evening.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">East Shinjuku</strong> is where the
              energy lives. Step out of the east exit and you're immediately pulled into
              a river of people flowing toward Kabukicho, Golden Gai, and the countless
              restaurants, izakayas, and entertainment venues that make this side of
              Shinjuku feel alive 24 hours a day. The east side is louder, messier, more
              colorful, and vastly more interesting for most visitors. If you only have
              one evening in Shinjuku, spend it here.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Navigation tip:</strong> Don't try to
              walk through the station to get from west to east. Use the south exit
              concourse. It connects both sides at street level and is far less
              confusing than the underground passages. Alternatively, the Southern
              Terrace exit near Takashimaya Times Square gives you a clear orientation
              point on the south side.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/shinjuku-golden-gai-bars.jpg"
                alt="Golden Gai - intimate bar district in Shinjuku"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Golden Gai's narrow alleys are home to over 200 tiny bars
              </figcaption>
            </figure>

            {/* Golden Gai */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Golden Gai: The World's Most Intimate Bar District
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Golden Gai is unlike anything else on Earth. Packed into six narrow alleys
              barely wide enough for two people to pass, you'll find over 200 tiny bars,
              most seating no more than six to eight people. These aren't sleek cocktail
              lounges; they're cramped, characterful, smoke-scented rooms presided over
              by a single bartender-owner, or "mama" or "master," who sets the rules, the
              music, and the atmosphere. Each bar has its own identity. Some specialize
              in jazz, others in horror movies, punk rock, photography, or simply
              conversation with the owner.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Etiquette matters here.</strong> Most
              bars charge a cover (typically ¥500-1,500), which is clearly posted on or
              near the door. This is standard practice, not a scam. The cover charge
              helps these tiny businesses survive on just a handful of customers per
              night. Always check the sign before entering. Some bars are regulars-only
              spots where the owner serves the same small group of friends night after
              night. These will sometimes have a sign indicating they're members-only or
              will simply feel unwelcoming. Don't force it. Move to the next door. Many
              bars now actively welcome tourists and display English menus or "Welcome"
              signs. Start with those if you're visiting for the first time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Best time to visit:</strong> Weekday
              evenings between 8 PM and 10 PM. This window gives you the authentic
              atmosphere without the weekend crowds, and most bars will be open but not
              yet packed. Friday and Saturday nights after 10 PM can be extremely
              crowded, with lines forming outside the more popular spots. Budget around
              ¥1,000-2,000 per bar (cover charge plus one or two drinks), and plan to
              visit two or three bars over the course of an evening. That's the Golden
              Gai rhythm. You're not meant to spend all night in one place. The joy is
              in the hopping, the discovering, the random conversations with strangers
              in a space so small your elbows are touching.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One more thing: don't take photos inside without asking. Many bartenders
              and regulars prefer privacy. The narrow alleys themselves are fair game
              for photography, and they look spectacular at night with all the signs
              glowing, but step inside and you should ask first. It's a small gesture
              that goes a long way.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/shinjuku-omoide-yokocho.jpg"
                alt="Omoide Yokocho Memory Lane - yakitori under the train tracks"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Omoide Yokocho: smoke, yakitori, and cold beer under the tracks
              </figcaption>
            </figure>

            {/* Omoide Yokocho */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Omoide Yokocho (Memory Lane)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tucked directly beside Shinjuku Station's west exit, Omoide Yokocho, also
              known by its less polite nickname "Piss Alley," is a narrow strip of
              yakitori stalls and tiny eateries that has survived since the post-war
              black market era of the 1940s. The atmosphere is the real draw here: smoke
              rising from charcoal grills, lanterns swaying overhead, the clatter of
              beer glasses, and the rumble of trains passing just meters above. At sunset,
              when the golden light filters through the steam and smoke, Omoide Yokocho
              is one of the most photogenic spots in all of Tokyo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">An honest assessment:</strong> The
              atmosphere is far better than the food. The yakitori is decent but not
              exceptional. You can find superior grilled chicken at dedicated yakitori
              restaurants elsewhere in Shinjuku for similar prices. What you're paying
              for here is the experience of eating elbow-to-elbow with salarymen on tiny
              stools, under bare light bulbs, in a setting that looks like a movie set
              from the 1950s. Is it worth it? Absolutely, just come with the right
              expectations. Order a beer, a few skewers of chicken skin and tsukune
              (chicken meatball), and soak in the ambiance. Budget around ¥1,500-2,500
              per person for a few skewers and drinks.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Timing:</strong> Visit around 5-6 PM
              to grab a seat easily and catch the sunset light. By 7 PM, the most
              popular stalls are packed and you may have to wait. Late at night (after
              10 PM), it thins out again and takes on a different, quieter charm.
            </p>

            <figure className="my-8">
              <img
                src="/images/blog/shinjuku-gyoen-garden.jpg"
                alt="Shinjuku Gyoen National Garden - peaceful escape in Tokyo"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                Shinjuku Gyoen, a peaceful escape from the surrounding urban energy
              </figcaption>
            </figure>

            {/* Shinjuku Gyoen */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Shinjuku Gyoen: An Unexpected Oasis
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              It seems impossible that one of Tokyo's most beautiful gardens sits just
              a ten-minute walk from the chaos of Kabukicho, but that contrast is part
              of what makes Shinjuku Gyoen special. Originally a feudal lord's residence
              during the Edo period, then an imperial garden, Shinjuku Gyoen opened to
              the public after World War II and now spans 144 acres of meticulously
              maintained landscapes. The park blends three distinct garden styles:
              formal French, English landscape, and traditional Japanese, each flowing
              into the next so naturally you barely notice the transitions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Cherry blossom season</strong> is when
              Shinjuku Gyoen truly shines. While Ueno Park draws massive crowds that can
              feel more like a music festival than a hanami (flower viewing) experience,
              Shinjuku Gyoen enforces a strict no-alcohol policy and limits entry when
              capacity is reached. The result is a far more peaceful blossom-viewing
              experience. The park also has over a dozen cherry tree varieties that bloom
              at different times from mid-March through late April, giving you a longer
              viewing window than most other spots in the city.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entry is ¥500 for adults, and the park is closed on Mondays (or the
              following day if Monday is a holiday). Hours vary by season but generally
              run from 9 AM to 4:30 PM (last entry at 4 PM). Bring a bento from a
              nearby convenience store or depachika and have lunch on the great lawn.
              It's the perfect midday break from Shinjuku's intensity. The greenhouse
              near the main gate houses an impressive tropical plant collection if you
              want to extend your visit.
            </p>

            {/* Kabukicho */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Kabukicho: Tokyo's Entertainment Capital
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kabukicho is Shinjuku's entertainment district, and it wears its reputation
              loudly. The giant neon gateway arch, the towering video screens, the
              competing sounds from pachinko parlors and karaoke chains. It's Tokyo at
              maximum volume. Despite its somewhat seedy reputation,{" "}
              <strong className="text-foreground">Kabukicho is generally safe for
              tourists</strong>, even late at night. The area has been heavily cleaned up
              in recent years, with increased police presence and the development of
              family-friendly entertainment complexes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Scams to watch for:</strong> The main
              risk in Kabukicho comes from touts, people on the street trying to lure
              you into bars or clubs. The rule is simple: if someone approaches you on
              the street, decline and keep walking. Legitimate establishments don't need
              to recruit customers from the sidewalk. Be especially cautious of anyone
              offering "free" drinks or suspiciously cheap deals. These almost always
              lead to inflated bills. Stick to places you've researched in advance or
              that have clearly posted prices, and you'll be fine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For entertainment, the area has plenty of legitimate and fun options. The
              Godzilla head perched atop Hotel Gracery is a must-see landmark. The best
              view is from the street below or from the hotel's terrace cafe on the 8th
              floor, where you can get remarkably close to the beast. Karaoke is also a
              quintessential Kabukicho experience. Large chains like Big Echo and
              Karaoke Kan (the one from <em>Lost in Translation</em>) offer private rooms
              at reasonable rates, especially during daytime and early evening happy
              hours. If you've heard of the Robot Restaurant, note that it closed
              permanently in 2021. The space has been replaced by other entertainment
              venues, but nothing quite matches the original's controlled absurdity.
            </p>

            {/* Where to Eat */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Where to Eat in Shinjuku
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinjuku has thousands of restaurants, which makes choosing one both
              exciting and paralysing. Here are my top recommendations by category to
              help you narrow it down.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Department Store Basement Food Halls (Depachika)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The basement floors of Isetan, Takashimaya, and Odakyu department stores
              are culinary wonderlands that most tourists walk right past. Japanese
              department store food halls, called{" "}
              <strong className="text-foreground">depachika</strong>, stock an
              extraordinary range of prepared foods, bento boxes, wagashi (traditional
              sweets), fresh produce, and gourmet treats, all presented with the kind
              of care and artistry that makes you feel guilty eating them. Isetan's
              basement in particular is legendary among food lovers. Prices are
              reasonable for the quality. A beautifully composed bento box runs
              ¥800-1,500, and you can assemble an incredible picnic for Shinjuku Gyoen
              without spending much at all. Visit around 6-7 PM for discounted items
              as stalls mark down unsold food before closing.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Ramen and Noodles
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinjuku is ramen territory. Rather than heading straight for the
              well-known "ramen streets" that can have hour-long waits and cater
              heavily to tourists, seek out standalone shops on the side streets east
              of the station. Fuunji, located near the south exit, is famous for its
              concentrated tsukemen (dipping noodles) and draws a constant line, but
              it moves fast and the bowl is worth the wait. For a more traditional
              Tokyo-style shoyu (soy sauce) ramen, the shops in the alleys behind the
              east exit offer the real deal at honest prices, usually ¥900-1,200 per
              bowl.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Late-Night Options
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One of Shinjuku's greatest strengths is that it never truly closes. After
              midnight, when the trains stop running and the crowds thin slightly,
              Shinjuku's late-night dining scene comes alive for a different audience:
              bartenders finishing their shifts, night workers, and night owls who know
              that some of the best food appears after dark. Izakayas (Japanese pub-style
              restaurants) throughout east Shinjuku serve food until 2-3 AM or later.
              The 24-hour gyudon (beef bowl) chains like Matsuya and Yoshinoya are
              reliable, cheap, and surprisingly satisfying at 3 AM. For something more
              special, look for late-night sushi counters and ramen shops that cater
              to the post-drinking crowd, and the quality is often excellent because the
              clientele is discerning.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Budget Tips
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Ticket machines:</strong> Many
                ramen shops and casual restaurants use vending machine ordering. Buy
                your ticket at the machine by the door, hand it to the staff, and sit
                down. No Japanese required, most machines have photos.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Lunch sets:</strong> Visit
                high-end restaurants at lunch instead of dinner. Many offer lunch
                courses at 30-50% of dinner prices with the same kitchen and quality.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Convenience stores:</strong> Don't
                overlook 7-Eleven, Lawson, and FamilyMart for genuinely good onigiri
                (rice balls), sandwiches, and hot foods. Japanese convenience store
                food is in a league of its own.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Standing bars (tachinomi):</strong>{" "}
                These no-seat bars near the station offer drinks and small plates at
                rock-bottom prices, a beer and a snack for under ¥500.
              </li>
            </ul>

            {/* Practical Tips */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Practical Tips for Visiting Shinjuku
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Station navigation:</strong> Use
                the east exit for Golden Gai, Kabukicho, and nightlife. Use the west
                exit for the government building and skyscrapers. Use the new south
                exit for Takashimaya Times Square and Shinjuku Gyoen.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Last train:</strong> Trains stop
                around midnight. Check your last train time before heading out for
                the evening. If you miss it, you have three options: a taxi (expensive,
                ¥3,000-10,000 depending on distance), a manga cafe or capsule hotel
                (¥1,500-3,000 to rest until the 5 AM first train), or simply staying
                out all night. Shinjuku is one of the few places in Tokyo where this
                is entirely viable.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Best time of day:</strong> Visit
                Shinjuku Gyoen in the morning, explore the department stores and food
                halls in the afternoon, hit Omoide Yokocho at sunset, and save Golden
                Gai and Kabukicho for after dark. This sequence follows the natural
                rhythm of the district.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Free observation deck:</strong> The
                Tokyo Metropolitan Government Building observation decks are open until
                11 PM (north tower) and 5:30 PM (south tower). No reservation needed,
                no entry fee. The night view from the north tower is genuinely stunning
                and rivals paid observation decks across the city.
              </li>
            </ul>

            {/* Shinjuku by Time of Day */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Shinjuku by Time of Day: A Local's Schedule
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One of the most common questions I get from tour guests is: "When should I visit Shinjuku?" The answer depends entirely on what you want to experience. Here's how I'd plan a full day if I were visiting for the first time.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Morning (7:00–9:00 AM): Shinjuku Gyoen Morning Walk
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Start your day with the calm before the storm. Shinjuku Gyoen opens at 9 AM (but the surrounding area is quiet and pleasant for an early walk). Arrive right when the gates open to enjoy the gardens in near-solitude. The contrast with the chaos you'll experience later makes this especially rewarding. The morning light through the Japanese garden is perfect for photography, and you'll have the wide lawns almost to yourself.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Midday (12:00–2:00 PM): Depachika Lunch Strategy
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Head to the basement floor of Isetan or Takashimaya department stores for the depachika experience. The trick is timing: arrive just before the lunch rush (around 11:30 AM) or slightly after (1:30 PM) for the best selection without crowds. Assemble a bento box and side dishes for a fraction of restaurant prices. If the weather is good, take your depachika haul back to Shinjuku Gyoen for a picnic. This is exactly what many Tokyo office workers do, and it's one of the most pleasant lunch experiences in the city.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Late Afternoon (5:00–7:00 PM): Omoide Yokocho at Golden Hour
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is the magic window for Omoide Yokocho. The yakitori stalls are firing up, the after-work crowd is just starting to trickle in, and the setting sun casts that perfect warm light through the smoke and steam. Grab a stool at one of the open-front stalls, order a beer and a few skewers, and watch the transition from day to night. The atmosphere at this hour is unmatched: bustling but not yet overwhelming, authentic and full of character.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Evening (7:00 PM onwards): Kabukicho and Golden Gai
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As darkness falls, Shinjuku transforms. The neon signs come alive, and the energy shifts from daytime commerce to nighttime entertainment. Start with a walk through Kabukicho to take in the sensory spectacle: the giant Godzilla head, the towering screens, the buzzing crowds. Then head to Golden Gai around 8–9 PM when the bars are open but not yet packed. End the evening with late-night ramen at one of the side-street shops east of the station. The perfect Shinjuku day ends with a steaming bowl of noodles around 11 PM.
            </p>

            {/* Hidden Spots */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Shinjuku's Hidden Spots That Most Tourists Miss
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After years of guiding tours through Shinjuku, I've collected a set of spots that never appear in the standard guidebooks but consistently surprise and delight my guests. Here are my favorites.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Hanazono Shrine at night.</strong> Tucked right behind Kabukicho's neon chaos, Hanazono Shrine is a pocket of serenity that most tourists walk right past. The shrine is illuminated at night with soft red lanterns, creating a surreal contrast with the entertainment district just meters away. Visit after 8 PM for the full effect. You'll go from sensory overload to peaceful contemplation in about 30 seconds. The shrine is also the site of a popular flea market on Sundays.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The Tokyo Metropolitan Government Building South Observatory at sunset.</strong> Most visitors know about the free observation decks, but few realize the south tower closes at 5:30 PM while the north tower stays open until 11 PM. The strategic play is to visit the south tower around 4:30 PM for the west-facing sunset views (Mt. Fuji on clear days), then walk over to the north tower after dark for the night cityscape. Two observation decks, two completely different experiences, zero cost.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The underground passage from Shinjuku-sanchome Station.</strong> Rather than navigating the chaos of Shinjuku Station, savvy locals use the Marunouchi Line's Shinjuku-sanchome Station, which has a direct underground connection to Isetan department store and emerges in a much calmer part of east Shinjuku. This single tip can save you 15 minutes of confused wandering through the main station.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">The rooftop garden at Takashimaya Times Square.</strong> On the upper floors of Takashimaya, there's a small rooftop terrace that offers a completely different perspective of Shinjuku's skyline. Almost no tourists know about it. Take the elevator to the top floor, find the exit to the terrace, and enjoy a quiet moment above the chaos. Best visited in the late afternoon.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Nishi-Shinjuku's camera district.</strong> The streets immediately west of Shinjuku Station (before you reach the skyscraper area) are home to several second-hand camera shops like Kitamura Camera, Map Camera, and others. Even if you're not buying, browsing these shops is a uniquely Japanese experience, with pristine vintage cameras and lenses displayed like jewelry. Photographers on my tours always thank me for this detour.
              </li>
            </ul>

            {/* Shinjuku vs Shibuya */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Shinjuku vs. Shibuya: Which Should You Visit?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is one of the most frequent questions I hear from visitors planning their Tokyo itinerary. Both districts are iconic, but they offer very different experiences. Here's my honest comparison.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">For food and nightlife:</strong> Shinjuku wins. Golden Gai, Omoide Yokocho, and the sheer density of restaurants and bars make Shinjuku the superior evening destination. Shibuya has good dining options, but Shinjuku's variety and atmosphere are unmatched.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">For shopping:</strong> Shibuya edges ahead, especially for fashion. Shibuya 109, the Miyashita Park complex, and nearby Harajuku's Takeshita Street offer a younger, trend-forward shopping experience.{" "}
                <Link to="/tours/shibuya-harajuku" className="text-accent hover:underline">
                  Our Shibuya & Harajuku tour
                </Link>{" "}
                covers the best of this area. Shinjuku's department stores (Isetan, Takashimaya) are better for upscale and luxury shopping.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">For Instagram-worthy moments:</strong> Shibuya has the famous Scramble Crossing, which is worth seeing at least once. Shinjuku's neon-lit alleys (Golden Gai, Kabukicho entrance) offer equally dramatic photos but with a grittier, more atmospheric quality.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">For green space:</strong> Shinjuku wins easily with Shinjuku Gyoen. Shibuya has Yoyogi Park and Meiji Shrine's forest nearby, but Shinjuku Gyoen is the superior garden experience.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">My recommendation if you're visiting both:</strong> Visit Shibuya and Harajuku during the day (they connect naturally), then head to Shinjuku in the late afternoon and spend the evening there. The two areas are only one stop apart on the JR Yamanote Line, making this combination easy and efficient.
            </p>

            {/* What I Show Clients */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Why Hire a Guide in Shinjuku: What I Actually Show Clients
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When I bring private tour clients to Shinjuku, I don't just show them the neon signs and say "here's the famous crossing." I show them why Shinjuku looks the way it does, and how it connects to the rest of Tokyo's story.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinjuku is pure Yamanote, the "high city" side of Tokyo's ancient class divide. While the{" "}
              <Link to="/blog/tokyo-hidden-gems" className="text-accent hover:underline">
                neighborhoods I cover in my Tokyo hidden gems guide
              </Link>
              {" "}represent old Shitamachi merchant culture, Shinjuku represents what happened when those merchant traditions met 20th-century capitalism. The department stores, the entertainment district, the sheer commercial intensity: this is the energy of Edo-period merchants channeled through modern Japanese ambition.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Understanding this context changes how you see Shinjuku. Golden Gai isn't just "a cool bar alley." It's the last surviving fragment of the black market economy that sprang up after WWII, when this area was bombed flat and rebuilt by entrepreneurs with nothing to lose. Omoide Yokocho isn't just "a food alley." It's a memory of post-war street vendors who fed a starving city and never left. When I explain this history to my clients, Shinjuku stops being overwhelming and starts being fascinating.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're building a{" "}
              <Link to="/blog/tokyo-itinerary-5-days" className="text-accent hover:underline">
                5-day Tokyo itinerary
              </Link>
              , I recommend saving Shinjuku for the evening of Day 3 or later, after you've already seen old Tokyo in Asakusa and Yanaka. The contrast makes Shinjuku's modern energy far more striking.
            </p>

            {/* Station Survival Guide */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Getting Around Shinjuku: The Station Survival Guide
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shinjuku Station is officially the world's busiest railway station, handling over 3.5 million passengers daily. It's served by JR East, Odakyu, Keio, Tokyo Metro, and Toei Subway, with over 200 exits connecting to an underground maze of shopping corridors. Even Tokyo locals sometimes get lost here. Here's how to navigate it like a pro.
            </p>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              The Four Key Exits
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">East Exit (東口 / Higashi-guchi):</strong> Use this for Kabukicho, Golden Gai, Hanazono Shrine, and east Shinjuku's restaurant scene. This is the exit you'll use most for nightlife and dining.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">West Exit (西口 / Nishi-guchi):</strong> Use this for the Tokyo Metropolitan Government Building (free observation decks), the skyscraper district, Omoide Yokocho, and hotel clusters. The west side is calmer and more corporate.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">South Exit (南口 / Minami-guchi):</strong> Use this for Takashimaya Times Square, the Southern Terrace walkway, and access to Shinjuku Gyoen (about a 10-minute walk). The south exit area is a good meeting point because it has clear landmarks and open space.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">New South Exit (新南口 / Shin-minami-guchi):</strong> Use this for the Shinjuku Expressway Bus Terminal (Busta Shinjuku), which handles highway buses to destinations across Japan. Also useful for accessing the Shinjuku Gyoen area from a slightly different angle.
              </li>
            </ul>
            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Survival Tips for the Station
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Follow the colored signs.</strong> Each railway company uses a different color (JR is green, Odakyu is blue, Keio is pink/red, Metro is various colors by line). Follow the color you need and ignore everything else.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Use Google Maps indoor navigation.</strong> Google Maps has detailed indoor maps of Shinjuku Station. Enter your destination and it will guide you to the correct exit. This alone can save you 20 minutes of wandering.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Avoid rush hour.</strong> Between 7:30–9:00 AM and 5:30–7:30 PM, the station becomes a tidal wave of commuters. If possible, time your transit to avoid these windows. The station is much calmer (and more navigable) outside peak hours.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">When lost, go up.</strong> If you're disoriented underground, find any staircase going up and exit to street level. Once above ground, you can reorient using the skyscrapers (west) or the neon signs (east) as landmarks, and re-enter the station through the correct entrance.
              </li>
            </ul>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Want to explore Shinjuku with an expert guide who knows every hidden corner?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Shinjuku is best experienced with a local guide who can navigate the hidden alleys, introduce you to welcoming bar owners in Golden Gai, and steer you away from tourist traps. Whether you want a curated evening through the neon-lit backstreets or a full-day exploration of the district, we'll design something perfect for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours/custom" className="btn-accent">
                  View Custom Tour Options
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Is Shinjuku safe at night?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, Shinjuku is generally very safe at night, including the Kabukicho entertainment district. Japan has one of the lowest crime rates in the world, and violent crime against tourists is extremely rare. The main things to watch for are touts trying to lure you into overpriced bars. Simply decline and keep walking. Stick to well-lit streets, don't accept drinks from strangers, and use common sense. I regularly guide evening tours through Shinjuku and have never had a safety incident.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    How long should I spend in Shinjuku?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For a thorough visit, plan half a day to a full day. If you're short on time, an evening visit (5 PM onwards) captures Shinjuku at its most atmospheric: start with Omoide Yokocho at sunset, explore Kabukicho and Golden Gai after dark, and end with late-night ramen. If you can spend a full day, add morning time at Shinjuku Gyoen and an afternoon exploring the department stores and food halls.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    What is Shinjuku best known for?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Shinjuku is best known for its vibrant nightlife (Golden Gai and Kabukicho), the world's busiest train station, stunning city views from the free Tokyo Metropolitan Government Building observation decks, Shinjuku Gyoen National Garden, and its incredible density of restaurants and bars. It's essentially Tokyo at maximum intensity: neon lights, towering buildings, and endless entertainment options packed into one district.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Is Kabukicho safe for tourists?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kabukicho is safe for tourists and has been significantly cleaned up in recent years with increased police presence and family-friendly developments. The main risk is being approached by touts who try to lure you into bars or clubs with promises of cheap drinks. These often lead to inflated bills. The simple rule is: if someone approaches you on the street, decline politely and move on. Stick to establishments with clearly posted prices and good reviews, and you'll have a great time.
                  </p>
                </div>
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
            "headline": "Shinjuku Guide: What a Licensed Guide Actually Shows Clients",
            "description": "Shinjuku is Tokyo's most overwhelming neighborhood. A licensed guide who brings clients here weekly explains what's worth your time, and what to skip.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
              "jobTitle": "National Government Licensed Guide Interpreter",
              "url": "https://tanuki-tabi-travel.com/about",
            },
            "datePublished": "2026-02-25",
            "dateModified": "2026-03-07",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/blog/shinjuku-guide",
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Shinjuku safe at night?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Shinjuku is generally very safe at night, including Kabukicho. Japan has one of the lowest crime rates in the world. The main things to watch for are touts trying to lure you into overpriced bars. Simply decline and keep walking. Use common sense and stick to well-lit streets.",
                },
              },
              {
                "@type": "Question",
                "name": "How long should I spend in Shinjuku?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plan half a day to a full day for a thorough visit. If short on time, an evening visit (5 PM onwards) captures Shinjuku at its most atmospheric. For a full day, add morning time at Shinjuku Gyoen and afternoon exploration of department stores and food halls.",
                },
              },
              {
                "@type": "Question",
                "name": "What is Shinjuku best known for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shinjuku is best known for its vibrant nightlife (Golden Gai and Kabukicho), the world's busiest train station, free observation decks at the Tokyo Metropolitan Government Building, Shinjuku Gyoen National Garden, and its incredible density of restaurants and bars.",
                },
              },
              {
                "@type": "Question",
                "name": "Is Kabukicho safe for tourists?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kabukicho is safe for tourists and has been significantly cleaned up in recent years. The main risk is touts who approach you on the street to lure you into bars. Simply decline and keep walking. Stick to establishments with clearly posted prices and good reviews.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default ShinjukuGuide;
