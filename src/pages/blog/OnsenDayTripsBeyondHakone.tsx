import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { QuickAnswer } from "@/components/blog/QuickAnswer";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { GuideInsiderNote } from "@/components/blog/GuideInsiderNote";

const OnsenDayTripsBeyondHakone = () => {
  return (
    <Layout>
      <SEO
        title="5 Onsen Day Trips from Tokyo (Beyond Hakone) — 2026 Guide"
        description="Beyond Hakone: Kusatsu, Atami, Ikaho, Chichibu, and Tokyo's own onsen. A licensed guide compares access, cost, and tattoo policy for each."
        canonicalPath="/blog/onsen-day-trips-beyond-hakone"
        hreflang={[
          { lang: "en", path: "/blog/onsen-day-trips-beyond-hakone" },
          { lang: "x-default", path: "/blog/onsen-day-trips-beyond-hakone" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Onsen Day Trips Beyond Hakone" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/hakone-ropeway-owakudani.webp"
          alt="Onsen steam rising from the mountains — Hakone isn't the only option from Tokyo"
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
            <p className="text-label text-accent mb-3">Day Trips</p>
            <h1 className="heading-display text-foreground">
              5 Onsen Day Trips from Tokyo (That Aren't Hakone): 2026 Guide
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Licensed Tour Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                April 24, 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) who has guided onsen day trips across Kanto for years.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <article className="max-w-3xl mx-auto prose-custom">
            <QuickAnswer
              answer="Hakone is the default Tokyo onsen day trip for good reasons — easy access, Mt. Fuji views, and ryokan culture packed into 90 minutes from Shinjuku. But if you're on your second trip, in a crowd-avoiding mood, or specifically chasing tattoo-friendly options, these five alternatives are worth knowing: Atami (fastest, 50 min by Shinkansen), Kusatsu (Japan's most famous sulfur springs, 3 hours), Ikaho (reddish iron waters + 365 stone steps, 2.5 hours), Chichibu Matsuri no Yu (Tokyo's easiest day onsen, 80-120 min), and Tokyo's own city onsen (Thermae-Yu in Shinjuku, Spa LaQua, or Toshimaen Niwa-no-Yu) when you have zero time to leave."
              hook="Below: access times, real 2026 fares, tattoo policy per destination, and the single biggest mistake I see first-timers make when they try to squeeze any onsen into the same day as a Tokyo tour."
            />

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Hakone is the Tokyo onsen — you've probably already read about it. And if you've only got one shot at a day-trip onsen experience, it's still my default recommendation for most first-time visitors. But this article is for the travelers who've already done it, who want something different, or who need an option that better fits their specific circumstances: a shorter trip, a crowd-free soak, a tattoo-friendly bath, or just a mid-afternoon break without leaving the city.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I've led onsen day trips across the Kanto region for years, and I can tell you that every one of these five options serves a different traveler. Below are honest 2026 access details, cost breakdowns, and the real tradeoffs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Want the Hakone version? I've got a dedicated{" "}
              <Link to="/blog/hakone-day-trip-guide-vs-solo" className="text-accent hover:underline">
                Hakone Day Trip: Guided vs Solo
              </Link>
              {" "}guide for that. This article assumes you've already decided to look beyond it.
            </p>

            {/* Quick Comparison */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Quick Comparison Table
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="text-left p-3 font-serif font-medium text-foreground">Destination</th>
                    <th className="text-left p-3 font-serif font-medium text-foreground">Travel time</th>
                    <th className="text-left p-3 font-serif font-medium text-foreground">One-way fare</th>
                    <th className="text-left p-3 font-serif font-medium text-foreground">Day-trip difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium text-foreground">Atami</td>
                    <td className="p-3 text-muted-foreground">40-50 min</td>
                    <td className="p-3 text-muted-foreground">¥3,760-4,470</td>
                    <td className="p-3 text-muted-foreground">Easiest</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">Chichibu (Matsuri no Yu)</td>
                    <td className="p-3 text-muted-foreground">80-120 min</td>
                    <td className="p-3 text-muted-foreground">¥800-1,500 (+ entry ¥1,100)</td>
                    <td className="p-3 text-muted-foreground">Easy</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">Ikaho</td>
                    <td className="p-3 text-muted-foreground">2-2.5 hours</td>
                    <td className="p-3 text-muted-foreground">¥2,800-3,100 bus</td>
                    <td className="p-3 text-muted-foreground">Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">Kusatsu</td>
                    <td className="p-3 text-muted-foreground">3 hours</td>
                    <td className="p-3 text-muted-foreground">¥5,000-6,000</td>
                    <td className="p-3 text-muted-foreground">Full day only</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-foreground">Tokyo city onsen</td>
                    <td className="p-3 text-muted-foreground">10-30 min</td>
                    <td className="p-3 text-muted-foreground">¥200-500 + entry ¥2,400-3,500</td>
                    <td className="p-3 text-muted-foreground">Trivial</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InlineCTA
              message="Want a licensed guide to handle the logistics and translations?"
              linkText="See my private day-trip options →"
              href="/tours/hakone-day-trip"
            />

            {/* 1. Atami */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              1. Atami — The Shinkansen-Fast Onsen (50 Minutes from Tokyo)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Atami is the easiest onsen day trip in this list by a wide margin. It sits on the Izu Peninsula coast in Shizuoka Prefecture, and the Tokaido Shinkansen connects Tokyo Station to Atami Station in <strong className="text-foreground">40-50 minutes</strong> on Kodama or Hikari services (Nozomi doesn't stop here). One-way fare is <strong className="text-foreground">¥3,760 unreserved to ¥4,470 reserved</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What makes Atami stand out: you can be back in Tokyo in time for dinner. Many ryokan offer <strong className="text-foreground">higaeri (day-use) bath plans</strong> for ¥1,500-4,000, often including a meal. The town has ocean-view baths, a beach, and enough small-town charm to feel like a real escape without the half-day committee to travel there.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Day-use recommendations:</strong> Ooyu Kairoukan (public bathhouse near the station), or any of the ryokan offering daytime bath-and-lunch packages — most are bookable through concierge or on arrival.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Best for:</strong> half-day onsen chasers, couples who want a quick escape, travelers with Shinkansen access via JR Pass.{" "}
              <strong className="text-foreground">Tattoo note:</strong> Many private ryokan baths accept tattooed guests; ask at reception or book a ryokan listed specifically as tattoo-friendly.
            </p>

            {/* 2. Chichibu */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              2. Chichibu Matsuri no Yu — Tokyo's Easiest Onsen Day Trip
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you want a pure half-day onsen with minimal transit stress, Chichibu's <strong className="text-foreground">Matsuri no Yu</strong> is my top recommendation. It sits <strong className="text-foreground">directly in front of Seibu-Chichibu Station</strong> — step off the train and you're 60 seconds from the entrance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Access: <strong className="text-foreground">Seibu-Ikebukuro Line</strong> from Ikebukuro Station. The Red Arrow Limited Express reaches Seibu-Chichibu in about 80 minutes; local/semi-express trains take ~120 minutes. Limited Express round-trip runs around ¥3,000 total.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Facility details:</strong>{" "}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Entry fee: <strong className="text-foreground">¥1,100 weekday / ¥1,380 weekend</strong> (adults)</li>
              <li>Hours: <strong className="text-foreground">10:00-22:00</strong> (last entry 21:30)</li>
              <li>Hot spring source: 2,000 meters underground</li>
              <li>Highlight: open-air bath with <strong className="text-foreground">views of Mt. Buko</strong></li>
              <li>Themed around Chichibu's famous festivals — kids love it, adults find it pleasantly quirky</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Best for:</strong> first-time onsen visitors, travelers with limited time, families with kids, anyone who wants an onsen experience without the all-day commitment.{" "}
              <strong className="text-foreground">Tattoo note:</strong> Matsuri no Yu officially does not allow visible tattoos in the main baths — cover-up stickers are available at reception for small tattoos (palm-sized or smaller).
            </p>

            {/* 3. Ikaho */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              3. Ikaho Onsen — The 365 Stone Steps & Iron-Rich Waters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ikaho is a small mountain onsen town in Gunma Prefecture, famous for two things: its iconic <strong className="text-foreground">365-step stone staircase</strong> (one step per hopeful day of prosperity) lined with inns, shops, and cafes — and its reddish-brown, <strong className="text-foreground">iron-rich thermal waters</strong> (kogane-no-yu, "golden water") believed to help circulation and muscle recovery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Access — two options:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Direct highway bus:</strong> JR Shinjuku Highway Bus Terminal → Ikaho direct, about <strong className="text-foreground">2.5 hours, ¥2,800-3,100 one way</strong>, roughly 10 departures daily. Simplest option.</li>
              <li><strong className="text-foreground">Shinkansen combo:</strong> Tokyo → Takasaki (Jōetsu Shinkansen, ~50 min) → local train to Shibukawa → 25-min bus to Ikaho. More expensive but faster on paper.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Once you're there, everything is walkable from the bus terminal — the stone steps lead up through the heart of the town. Day-use options at multiple ryokan run ¥1,000-2,500. The iron water stains cloth reddish, so don't wear your best towel.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Best for:</strong> travelers who want a traditional onsen town atmosphere without Kusatsu's distance, photographers who love the illuminated evening steps.{" "}
              <strong className="text-foreground">Tattoo note:</strong> Ikaho has one of the better tattoo-friendly reputations in Gunma — many ryokan offer <strong className="text-foreground">kashikiri-buro</strong> (private rental baths) specifically for tattooed guests, and some day-use facilities welcome visible tattoos without restriction. Check current listings on tattoofriendlyonsen.com before you go.
            </p>

            {/* 4. Kusatsu */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              4. Kusatsu Onsen — Japan's Most Famous Hot Spring Town
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kusatsu tops most "best onsen in Japan" lists, and for legitimate reasons: the <strong className="text-foreground">Yubatake (hot water field)</strong> in the town center discharges over 4,000 liters of naturally flowing sulfurous spring water per minute, and the surrounding streets have the densest concentration of public baths in the country. The smell of sulfur is immediate and everywhere — for many Japanese travelers, it's the archetypal onsen smell.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Access — the honest picture:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Train + bus:</strong> Ueno → Limited Express Kusatsu to Naganohara-Kusatsuguchi (~2.5 hours) → JR Kanto bus to Kusatsu Onsen Bus Terminal (25 minutes, <strong className="text-foreground">¥710 one way</strong>). Total ~3 hours.</li>
              <li><strong className="text-foreground">Highway bus:</strong> Shinjuku (JR Bus Kanto) → Kusatsu Onsen direct, about 4 hours. Cheaper but slower.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Day trip realistic?</strong> Technically yes, but only if you leave Tokyo before 7 AM. You'll arrive around 10 AM, have 5-6 hours in town, and need to leave by 4 PM to get back by 7 PM. Most visitors find Kusatsu works better as an overnight: arrive late afternoon, enjoy evening illumination of the Yubatake, stay at a ryokan, soak in the morning, leave after lunch. If your schedule only allows a day trip, commit to the whole day and don't try to also do Tokyo sightseeing that evening.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What to do in town:</strong> Yubatake photo ops, Netsu-no-Yu traditional bath-temperature-regulation demonstration (timed shows), the public bath Otakinoyu, and the sulfur-scented main shopping street.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Best for:</strong> serious onsen enthusiasts, second-trip travelers, anyone who can commit a full day or overnight.{" "}
              <strong className="text-foreground">Tattoo note:</strong> Mixed. Some traditional baths still prohibit tattoos; newer ryokan and some day-use facilities accept them, particularly with cover stickers. Famous public baths like Otakinoyu have signs prohibiting tattoos — check before paying.
            </p>

            {/* 5. City Onsen */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              5. Tokyo's Own Onsen (When You Have Zero Time to Leave)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Not every onsen trip needs to be a trip. Tokyo itself sits on real hot-spring geology, and three facilities draw genuine natural hot spring water from deep underground. These aren't the same as a mountain onsen town experience, but they deliver the water and the ritual with 30 minutes of commute instead of three hours.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Thermae-Yu (Shinjuku Kabukicho)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Located at 1-1-2 Kabukicho, <strong className="text-foreground">Thermae-Yu is open 24 hours</strong>, never closes, and is the most foreigner-accessible of the city options. Multiple bath types, sauna, and rest areas. Entry fees run around ¥3,000-3,500 depending on time of day and weekday vs weekend.{" "}
              <strong className="text-foreground">Tattoo policy:</strong> visible tattoos generally prohibited in the main baths, but the site offers cover stickers for sale.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Spa LaQua (Tokyo Dome City)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Inside the LaQua complex at Tokyo Dome City, Spa LaQua uses natural hot spring water drawn from <strong className="text-foreground">1,700 meters underground</strong>. Open-air baths, multiple indoor baths, saunas, and relaxation areas. Entry around ¥3,000 daytime, higher late-night rates. Great location if you're already in the Korakuen area — easy to combine with a Tokyo Dome event.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Toshimaen Niwa-no-Yu (Nerima, west Tokyo)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The most ryokan-feeling of the three. Toshimaen Niwa-no-Yu is a quiet <strong className="text-foreground">adults-only (13+)</strong> facility with open-air baths facing a traditional Japanese garden. Natural hot spring water, no background music in most areas — you hear wind and birds instead. If you want the closest thing to a real onsen-town atmosphere without leaving Tokyo, this is it. Access: Toshimaen Station on the Seibu-Ikebukuro Line or Toei Oedo Line, ~30 min from central Tokyo.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Best for:</strong> travelers with tight schedules, evening soakers, anyone who needs a bath but has no transit appetite.{" "}
              <strong className="text-foreground">Important 2026 note:</strong> The old Oedo Onsen Monogatari theme-park onsen in Odaiba permanently closed in 2021 — if you see it recommended in old blogs, ignore. The three above are the current active alternatives.
            </p>

            <GuideInsiderNote date="April 2026">
              <p>
                The single biggest mistake I see: visitors trying to do a half-day Tokyo tour <em>and</em> an onsen trip on the same day. It doesn't work. An onsen isn't a museum — the point is slowing down, and you can't also be sprinting through Shinjuku in the same 10 hours.
              </p>
              <p>
                My recommended rule: <strong>onsen days are onsen days</strong>. Leave early, come back late, don't schedule anything demanding in between. For Hakone or Atami (sub-90-minute travel), you can add a light dinner in Tokyo afterward. For Kusatsu, Ikaho, or a full Hakone overnight, accept that the onsen claims the entire day.
              </p>
              <p>
                The second mistake: ignoring tattoo policy until you're standing at the bath entrance. Even a small ankle tattoo can get you turned away at strict facilities. If you have any visible ink, research the specific facility (not just the town) before you travel. Cover stickers help for small work; private rental baths (kashikiri-buro) help for larger work. Planning this ahead saves a genuinely disappointing experience.
              </p>
            </GuideInsiderNote>

            {/* Decision Matrix */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              How to Pick: A Simple Decision Path
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li>
                <strong className="text-foreground">You have under 3 hours and can't leave Tokyo →</strong> Thermae-Yu or Spa LaQua.
              </li>
              <li>
                <strong className="text-foreground">You want authentic onsen-town atmosphere in half a day →</strong> Chichibu Matsuri no Yu (easiest) or Atami (Shinkansen-fastest).
              </li>
              <li>
                <strong className="text-foreground">You're a photographer and value aesthetics →</strong> Ikaho (365 stone steps illuminated at night are spectacular).
              </li>
              <li>
                <strong className="text-foreground">You're a serious onsen enthusiast with a full day or overnight →</strong> Kusatsu. There's no substitute for standing at the Yubatake.
              </li>
              <li>
                <strong className="text-foreground">You have tattoos →</strong> Ikaho (best tattoo-friendly reputation), followed by Atami (private ryokan baths), then Spa LaQua and Toshimaen Niwa-no-Yu (check current policy).
              </li>
              <li>
                <strong className="text-foreground">It's your first-ever onsen experience →</strong> Chichibu Matsuri no Yu. Simple access, moderate price, not overwhelming for a first visit. Graduate to mountain onsens on trip #2.
              </li>
            </ul>

            <InlineCTA
              message="Want a guide to handle language, booking, and tattoo-friendly routing?"
              linkText="Book a Hakone private day trip →"
              href="/tours/hakone-day-trip"
            />

            {/* FAQ */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Is any onsen fully tattoo-friendly?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No single onsen town is 100% tattoo-friendly across every facility, but policies are shifting every year. The safest approach: book a ryokan that advertises private in-room baths (<em>kashikiri-buro</em>), and skip public baths at stricter facilities. Ikaho, Atami, and newer ryokan in Kusatsu increasingly accept tattooed guests. Thermae-Yu in Shinjuku offers cover stickers at reception for small work. The directory at tattoofriendlyonsen.com is the most current listing.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Can I do an onsen trip in the morning and Tokyo sightseeing in the afternoon?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  For Tokyo city onsen (Thermae-Yu, Spa LaQua, Toshimaen) — yes, easily. For Atami or Chichibu — yes, but tight; leave by 7 AM, be back in Tokyo by 2-3 PM for afternoon sightseeing. For Hakone, Ikaho, or Kusatsu — no, don't try. The commute plus the soak eats the whole day, and the entire point of onsen is the wind-down; you'll waste it if you're rushing to catch a train.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Do I need a swimsuit?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not for traditional onsen. Japanese onsen are bathed in nude, gender-separated, with a small modesty towel (sold or rented at facilities for ¥100-300). Entering a traditional onsen in a swimsuit is considered unsanitary and will get you stopped. The exception: some modern city spas and water-park style facilities have mixed-gender areas where swimsuits are required — the rules are always posted clearly in English.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  What should I bring?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A small modesty towel (hand-towel size) and a larger bathing towel. Most facilities rent both. Bring a change of clothes, especially if you're going to sweat on the train home. Skip jewelry — metal corrodes in sulfur water. Hair ties for longer hair (hair shouldn't touch the bath water). Don't bring a camera into the bath area — photography is strictly forbidden.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Is Hakone still the best default?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  For most first-time Tokyo visitors, yes. Hakone's combination of Mt. Fuji views, onsen variety, and the Hakone Free Pass transportation network is hard to beat on a single-day budget. I break down the full case in{" "}
                  <Link to="/blog/hakone-day-trip-guide-vs-solo" className="text-accent hover:underline">
                    Hakone Day Trip: Guided vs Solo
                  </Link>
                  . This article is for the situations where Hakone isn't the right fit — repeat visitors, tattoo concerns, shorter schedules, or specifically wanting something quieter.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Do you offer guided onsen day trips?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. My{" "}
                  <Link to="/tours/hakone-day-trip" className="text-accent hover:underline">
                    Hakone private day trip
                  </Link>
                  {" "}is the most established, and I can build a{" "}
                  <Link to="/tours/custom" className="text-accent hover:underline">
                    custom itinerary
                  </Link>
                  {" "}for Atami or Ikaho for clients who prefer a guided version of those. Kusatsu works best as an overnight with a dedicated guide.{" "}
                  <Link to="/contact" className="text-accent hover:underline">
                    Message me
                  </Link>
                  {" "}with your priorities and constraints — tattoo situation, travel companions, time budget — and I'll suggest the best fit.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Want a licensed guide for your onsen day trip — with the bath-etiquette, the bookings, and the language handled?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                On my private day trips, I handle the logistics that stress most visitors: the ticket machines, the facility selection, the tattoo-friendly routing, the ryokan lunch reservations, the safe-quiet-time navigation. You get a local guide who treats your onsen day as what it should be: a deliberate slowdown, not another item on the itinerary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours/hakone-day-trip" className="btn-accent">
                  Hakone Day Trip
                </Link>
                <Link to="/contact" className="btn-outline">
                  Custom Onsen Trip
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["hakone-day-trip", "custom"]} showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "5 Onsen Day Trips from Tokyo (That Aren't Hakone): 2026 Guide",
            "description": "Beyond Hakone: Kusatsu, Atami, Ikaho, Chichibu, and Tokyo's own onsen. A licensed guide compares access, cost, and tattoo policy for each.",
            "author": {
              "@type": "Person",
              "name": "Manabu",
            },
            "datePublished": "2026-04-24",
            "publisher": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/blog/onsen-day-trips-beyond-hakone",
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
            mainEntity: [
              {
                "@type": "Question",
                name: "Is any Japanese onsen fully tattoo-friendly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No single onsen town is 100% tattoo-friendly, but policies are shifting yearly. Safest approach: book a ryokan with private in-room baths (kashikiri-buro). Ikaho, Atami, and newer Kusatsu ryokan increasingly accept tattooed guests.",
                },
              },
              {
                "@type": "Question",
                name: "Can I do an onsen trip in the morning and Tokyo sightseeing in the afternoon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For Tokyo city onsen (Thermae-Yu, Spa LaQua) — yes, easily. For Atami or Chichibu — yes but tight. For Hakone, Ikaho, or Kusatsu — no, the commute plus soak eats the whole day.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a swimsuit at Japanese onsen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not for traditional onsen. Japanese onsen are bathed in nude, gender-separated, with a small modesty towel (rent for ¥100-300). Swimsuits are considered unsanitary at traditional facilities. Exception: mixed-gender modern water parks require them.",
                },
              },
              {
                "@type": "Question",
                name: "What should I bring to an onsen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A small hand-towel-sized modesty towel and a larger bathing towel (most facilities rent both). A change of clothes, hair ties for long hair, and no jewelry (metal corrodes in sulfur water). Photography is strictly forbidden in bath areas.",
                },
              },
              {
                "@type": "Question",
                name: "Is Hakone still the best default Tokyo onsen day trip?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For most first-time Tokyo visitors, yes. Hakone's combination of Mt. Fuji views, onsen variety, and the Hakone Free Pass transportation is hard to beat. The alternatives in this article suit repeat visitors, tattoo concerns, shorter schedules, or quieter preferences.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default OnsenDayTripsBeyondHakone;
