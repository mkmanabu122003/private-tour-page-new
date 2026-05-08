import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { GuideInsiderNote } from "@/components/blog/GuideInsiderNote";
import manabuPortrait from "@/assets/About_page_Manabu_team_photo.webp";

const NaritaVsHaneda = () => {
  return (
    <Layout>
      <SEO
        title="Narita vs Haneda: Which Tokyo Airport Is Better in 2026?"
        description="Haneda is closer and cheaper to reach. Narita has more flights and LCCs. A licensed Tokyo guide compares both by cost, time, and arrival-day practicality."
        canonicalPath="/blog/narita-vs-haneda"
        hreflang={[
          { lang: "en", path: "/blog/narita-vs-haneda" },
          { lang: "x-default", path: "/blog/narita-vs-haneda" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Narita vs Haneda" },
        ]}
      />

      <div className="prose-editorial">
      {/* Hero with overlaid title — Plan A overlay */}
      <section className="relative w-full h-[540px] md:h-[620px] lg:h-[660px] overflow-hidden">
        <img
          src="/images/blog/shinkansen-n700-tokyo-station.webp"
          alt="Tokyo arrival — the moment that sets up your entire trip"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width={1600}
          height={900}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/15"
          aria-hidden="true"
        />

        {/* Floating breadcrumb */}
        <div className="absolute top-6 left-0 right-0 z-10">
          <div className="container-section">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors backdrop-blur-sm bg-black/25 px-3 py-1.5 rounded-md"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Bottom-aligned hero text */}
        <div className="relative h-full container-section flex flex-col justify-end pb-14 md:pb-16">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent mb-4">
              Planning Your Trip · Tokyo
            </p>
            <h1
              className="text-white"
              style={{ textShadow: "0 2px 32px rgba(0,0,0,0.45)" }}
            >
              Narita vs Haneda: Which Tokyo Airport Is Actually Better in 2026?
            </h1>
            <p className="mt-6 text-xl text-white/85 leading-relaxed max-w-2xl">
              Haneda is closer and cheaper to reach. Narita has more flights and LCCs. A licensed Tokyo guide compares both by cost, time, and arrival-day practicality.
            </p>
            <div className="mt-7 flex items-center flex-wrap gap-x-1 gap-y-2 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By Manabu, Licensed Tour Guide
              </span>
              <span className="meta-dot-light"></span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last updated April 2026
              </span>
              <span className="meta-dot-light"></span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
            {/* Left: Sticky TOC */}
            <aside className="article-toc hidden lg:block">
              <p className="toc-label">On this page</p>
              <a href="#section-verdict"><span className="toc-num">01</span><span>Quick verdict</span></a>
              <a href="#section-distance"><span className="toc-num">02</span><span>Distance & baseline</span></a>
              <a href="#section-narita-access"><span className="toc-num">03</span><span>Narita access</span></a>
              <a href="#section-haneda-access"><span className="toc-num">04</span><span>Haneda access</span></a>
              <a href="#section-hidden"><span className="toc-num">05</span><span>Hidden factors</span></a>
              <a href="#section-exception"><span className="toc-num">06</span><span>When Narita wins</span></a>
              <a href="#section-cost"><span className="toc-num">07</span><span>The real cost</span></a>
              <a href="#section-faq"><span className="toc-num">08</span><span>FAQ</span></a>
            </aside>

            {/* Middle: Article */}
            <article id="quick-decision">
            {/* Quick Decision — Plan A module */}
            <div className="quick-decision">
              <p className="qd-eyebrow">Quick decision</p>
              <h2>If your flight lets you choose, pick Haneda.</h2>
              <p>
                <span className="hl-gold">It's 20 km from central Tokyo vs 60-70 km for Narita.</span> The cheapest train is just ¥519 (Monorail to Hamamatsucho, 13-20 minutes), and the Limousine Bus to Shinjuku is ¥1,400 vs ¥3,200 from Narita.
              </p>
              <p>
                The catch: Narita handles more LCCs (Jetstar, Peach, ZIPAIR) and the lowest fares from North America and Europe. For Narita-only flights, the Skyliner reaches central Tokyo in 36-41 minutes — the time penalty is smaller than most travelers expect.
              </p>
            </div>

            <p className="text-muted-foreground mb-4">
              "Should I fly into Narita or Haneda?" I get this question from almost every client before their Tokyo trip — usually along with screenshots of two flight options that differ by ¥15,000. The answer isn't just about the airport. It's about <strong className="text-foreground">what happens in the first three hours after your plane lands.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I've met clients at arrivals gates at both airports for years, and I can tell you the arrival-day mistake is almost always the same: people optimize for flight price and ignore transit cost, jet lag, and what Tokyo's rail system does after 11:48 PM. This article fixes that.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Below are real 2026 fares, travel times, and the tradeoffs that actually matter when you're tired and dragging two suitcases through a foreign train station.
            </p>

            {/* Manabu's take — guide-note callout */}
            <div className="guide-note-callout">
              <div
                className="gn-portrait"
                style={{ backgroundImage: `url(${manabuPortrait})` }}
              />
              <div>
                <p className="gn-label">Manabu's take</p>
                <h3>Pick the airport that fits your first three hours, not your flight price.</h3>
                <p>
                  A ¥10,000 cheaper flight that lands at Narita past midnight is rarely actually cheaper. By the time you've added a taxi, a night-bus stress, and a half-functional first morning, you've spent your savings.
                </p>
              </div>
            </div>

            <InlineCTA
              message="Arriving jet-lagged and want a gentle first day in Tokyo?"
              linkText="See my private tour options →"
              href="/tours"
            />

            {/* Quick Verdict */}
            <div className="section-eyebrow"><span>Section 01 · Quick Verdict</span></div>
            <h2 id="section-verdict" className="text-foreground mb-6">
              Who Should Pick Which Airport
            </h2>

            <div className="choice-grid">
              <div className="choice-card">
                <p className="choice-label">Default for most travelers</p>
                <h3>Choose Haneda if…</h3>
                <ul>
                  <li>Flights are similar in price.</li>
                  <li>You're arriving jet-lagged with heavy luggage.</li>
                  <li>Your flight lands after 11:00 PM.</li>
                  <li>You're planning to take a taxi (¥6,000-10,000 vs ¥25,000+).</li>
                </ul>
              </div>
              <div className="choice-card">
                <p className="choice-label">Worth it in these cases</p>
                <h3>Choose Narita if…</h3>
                <ul>
                  <li>Narita saves you ¥15,000+ per ticket.</li>
                  <li>You're flying an LCC (Jetstar, Peach, ZIPAIR, AirAsia).</li>
                  <li>You're staying in Ueno, Asakusa, or northeast Tokyo (Skyliner can actually be faster).</li>
                </ul>
              </div>
            </div>

            {/* Distance & Reality */}
            <div className="section-eyebrow"><span>Section 02 · Distance</span></div>
            <h2 id="section-distance" className="text-foreground mb-6">
              Distance & the Baseline Reality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The geographical difference is larger than most first-time visitors realize:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Haneda:</strong> ~20 km south of central Tokyo, inside Tokyo Bay. Train access runs 15-45 minutes depending on mode. Three terminals: T1 (JAL domestic), T2 (ANA domestic), and T3 (international, where you'll arrive).</li>
              <li><strong className="text-foreground">Narita:</strong> ~60-70 km east of central Tokyo, in neighboring Chiba Prefecture. Train access runs 36 minutes to over 2 hours depending on mode. Three terminals: T1 (Star Alliance + SkyTeam), T2 (mostly oneworld + some Star Alliance), and T3 (low-cost carriers).</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The time and cost gap isn't abstract. For a party of two, the airport choice typically changes your arrival-day transit spend by ¥2,000-6,000 and your door-to-hotel time by 30-60 minutes. Across an entire Tokyo trip, those are meaningful numbers.
            </p>

            {/* Narita Access */}
            <div className="section-eyebrow"><span>Section 03 · Narita Access</span></div>
            <h2 id="section-narita-access" className="text-foreground mb-6">
              Narita Access in 2026: Four Ways to Central Tokyo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Narita has four realistic transit options, and each makes sense for a different scenario. Exact 2026 fares and times below.
            </p>

            <h3>
              1. Keisei Skyliner (the fastest, best value)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Skyliner runs directly to <strong className="text-foreground">Nippori in 36 minutes</strong> and <strong className="text-foreground">Ueno in 41 minutes</strong> for <strong className="text-foreground">¥2,470</strong>. Trains depart every 20 minutes. At Nippori, you transfer to the JR Yamanote Line, which connects to Shinjuku, Shibuya, and everywhere else in central Tokyo in under 25 minutes. This is my default recommendation for clients staying anywhere on the Yamanote loop, particularly the east and north sides. It's nearly always the fastest option and the cheapest premium service.
            </p>

            <h3>
              2. Narita Express / N'EX (best for west-side hotels)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The JR Narita Express goes directly to Tokyo, Shinagawa, Shibuya, Shinjuku, Ikebukuro, and Yokohama without transfers. Ordinary class to Shinjuku is <strong className="text-foreground">¥3,250</strong>; Green Car (first class with wider seats) is <strong className="text-foreground">¥4,020</strong>. Travel time is <strong className="text-foreground">60-98 minutes</strong> depending on the stop. All seats are reserved; departures are every 30-60 minutes. Worth knowing: the <strong className="text-foreground">N'EX Tokyo Round Trip Ticket</strong> is ¥5,000 for non-Japanese passport holders, saving about ¥1,500 over two separate one-way tickets if you're flying in and out of Narita.
            </p>

            <h3>
              3. Airport Limousine Bus (the hotel-door option)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Limousine Bus drops you directly at your hotel's front door — no transfers, no dragging suitcases through Shinjuku Station. Fare to Shinjuku-area hotels is typically <strong className="text-foreground">¥3,200</strong>, with 2-4 buses per hour between 7 AM and 10 PM. Journey time is <strong className="text-foreground">90-120 minutes</strong> depending on traffic. This is the option I recommend for elderly travelers, families with small children, or anyone who hates navigating unfamiliar train systems on arrival day. Book online in advance during peak season.
            </p>

            <h3>
              4. Fixed-Rate Taxi (only if you must)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Narita offers fixed-rate taxi service to Tokyo's 23 wards — the exact fare depends on your destination zone. As a representative example, Narita to Adachi-ku is around <strong className="text-foreground">¥28,770</strong>, plus expressway tolls (~¥2,000-3,000) and a <strong className="text-foreground">20% late-night surcharge between 22:00 and 5:00</strong>. A typical arrival-day taxi to central Tokyo runs <strong className="text-foreground">¥25,000-32,000 including tolls</strong>. Rarely worth it unless you're traveling with four people, heavy luggage, and special circumstances.
            </p>

            {/* Haneda Access */}
            <div className="section-eyebrow"><span>Section 04 · Haneda Access</span></div>
            <h2 id="section-haneda-access" className="text-foreground mb-6">
              Haneda Access in 2026: Four Ways (All Cheaper)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every single transit option from Haneda costs less and takes less time than its Narita equivalent. Here's the full picture.
            </p>

            <h3>
              1. Keikyu Airport Line (fastest to Shinagawa and beyond)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Keikyu Line reaches <strong className="text-foreground">Shinagawa in 11-13 minutes</strong> for around ¥330. From Shinagawa, transfer to the JR Yamanote Line or Shinkansen as needed. Trains run every few minutes, and many continue through as Toei Asakusa Line trains reaching Shimbashi, Nihonbashi, and Asakusa without a transfer — a useful quirk if you know your hotel is on that line.
            </p>

            <h3>
              2. Tokyo Monorail (scenic, Yamanote transfer)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Monorail runs from Haneda T3 to <strong className="text-foreground">Hamamatsucho in 13-20 minutes</strong> for <strong className="text-foreground">¥519</strong> (IC card). The Haneda Express variant does it in 13 minutes. Hamamatsucho connects to the JR Yamanote Line (Tokyo, Shinjuku, Shibuya all within 10-20 minutes). The elevated rails give surprisingly nice views of Tokyo Bay. This is my default for clients staying on the Yamanote Line west side — cheaper than Keikyu + Yamanote combined in many cases.
            </p>

            <h3>
              3. Airport Limousine Bus (the sleeper deal)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Haneda's Limousine Bus to <span className="hl-gold">Shinjuku Station West Exit is ¥1,400 one way</span>, takes about 45 minutes, and runs every 20 minutes. At less than half the price of Narita's Limousine Bus and less than a third of Narita's N'EX, this is one of the best-value transit options in all of Tokyo. For anyone staying in Shinjuku with luggage, this is usually my top recommendation from Haneda.
            </p>

            <h3>
              4. Taxi (actually reasonable from Haneda)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Haneda taxi to central Tokyo is the only scenario where I don't flinch at recommending an airport cab. Expect <strong className="text-foreground">¥6,000-10,000</strong> depending on destination and traffic, plus the 20% late-night surcharge (22:00-5:00). For a family of four arriving jet-lagged, that's competitive with four train tickets once you add IC-card fiddling and the luggage headache. Trip time 20-40 minutes.
            </p>

            {/* Hidden Factors */}
            <div className="section-eyebrow"><span>Section 05 · Hidden Factors</span></div>
            <h2 id="section-hidden" className="text-foreground mb-6">
              The Hidden Factors That Change the Equation
            </h2>

            <h3>
              Immigration: Visit Japan Web changes everything
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Immigration wait times in 2026 average <strong className="text-foreground">48 minutes at Haneda</strong> and <strong className="text-foreground">41 minutes at Narita</strong>. That's before you even reach a train. The single best productivity hack is <strong className="text-foreground">Visit Japan Web</strong> (vjw-lp.digital.go.jp): fill out your immigration and customs declarations online before you fly, and you'll get a QR code that routes you through an express lane where <span className="hl-gold">processing takes under 5 minutes</span>. Paper-form travelers wait 30-70 minutes. Do this on the plane or during layover; it's the cheapest hour of your trip.
            </p>

            <blockquote className="pull-quote">
              Visit Japan Web cuts immigration from 48 minutes to under 5. It's the cheapest hour of your trip.
            </blockquote>

            <h3>
              Late-night arrivals: Haneda wins, but only barely
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tokyo's rail network shuts down roughly midnight to 5 AM. At Haneda, the last Monorail departs <strong className="text-foreground">23:44</strong> and the last Keikyu train <strong className="text-foreground">23:48</strong>. Miss them, and you have three options: night bus (four departures at <strong className="text-foreground">00:20, 01:00, 01:40, and 02:20 — to Shinjuku and Ikebukuro only</strong>), a taxi, or sleeping at the airport (First Cabin Haneda in T1 is a capsule hotel option). Narita has similar timing but fewer fallback buses, which is why I flatly recommend against landing at Narita after 11:00 PM if you have any flight flexibility.
            </p>

            <h3>
              Luggage volume matters more than people think
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're traveling with a large suitcase per person plus carry-ons, the "cheapest option" breaks down fast. Keikyu and Monorail trains have luggage racks but they fill up, and moving through Shinagawa or Hamamatsucho with three bags is genuinely unpleasant. The Limousine Bus stores your bags in the underside compartment and drops you at the hotel door. My rule of thumb: 2+ large suitcases per person → Limousine Bus or taxi, regardless of airport.
            </p>

            <h3>
              Peak-hour warnings
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Narita's peak arrival windows are <strong className="text-foreground">5-8 AM and 4-7 PM on weekdays</strong>, plus Friday afternoons and Sunday evenings. Immigration waits balloon 30-50% during these. Haneda sees similar Tuesday/Wednesday lulls. If you have flight flexibility, a Tuesday or Wednesday mid-morning arrival at either airport gives you the smoothest ride in.
            </p>

            {/* Surprise: Narita Wins Sometimes */}
            <div className="section-eyebrow"><span>Section 06 · The Exception</span></div>
            <h2 id="section-exception" className="text-foreground mb-6">
              When Narita Is Actually Faster (Yes, Really)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every Tokyo guide writes "Haneda is closer, so always Haneda." That's wrong for one specific scenario: if you're staying in the northeast corner of central Tokyo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Staying in Ueno, Nippori, Asakusa, or anywhere along the JR Yamanote east arc?</strong> Keisei Skyliner to Nippori is 36 minutes. From Nippori, Ueno is 2 minutes (¥140), Asakusa is 15 minutes (Yamanote to Tawaramachi area). Total airport-to-hotel: about 40-50 minutes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Haneda to Ueno requires Monorail (13-20 min) plus Yamanote transfer at Hamamatsucho (3 minute wait + 17 min train), totaling <strong className="text-foreground">~45-55 minutes</strong> including transfer friction. The time difference is wash, and Narita (Skyliner at ¥2,470) is cheaper than Haneda (Monorail ¥519 + Yamanote ~¥200 = ¥719, but only if you want to drag luggage through a transfer at 2 PM).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <span className="hl-gold">The practical point: don't automatically pick Haneda if you're staying east-northeast.</span> Do the math for your specific hotel's nearest station.
            </p>

            <GuideInsiderNote date="April 2026">
              <p>
                The single biggest arrival-day mistake I see: clients scheduling their first guided tour on the same day they land. Jet lag plus the immigration-to-hotel churn eats 5-6 hours. If you land at 3 PM from the East Coast US, you're not starting a tour at 5 PM — you're starting a nap.
              </p>
              <p>
                My rule of thumb: <strong>schedule nothing demanding in the 3 hours after your scheduled arrival time, then give yourself an additional 90 minutes if you're crossing 8+ time zones.</strong> For a 3 PM Haneda arrival, that means a 7:30 PM light dinner at earliest. For a 3 PM Narita arrival, an 8:30 PM dinner and nothing else.
              </p>
              <p>
                The second biggest mistake: trying to do Tokyo's train system on day one with heavy luggage. The Limousine Bus exists precisely for this. Yes, it's slower in raw minutes than the train, but "arrived at hotel lobby with 0 stress" vs "arrived at hotel lobby after a Shinjuku Station stair sequence" isn't really a comparison. Save the public-transit immersion for day 2 when you're rested.
              </p>
            </GuideInsiderNote>

            {/* Cost Comparison */}
            <div className="section-eyebrow"><span>Section 07 · The Real Cost</span></div>
            <h2 id="section-cost" className="text-foreground mb-6">
              The Real Cost of Choice (2 People, Round Trip)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To put the difference in concrete terms, here's what transit costs for a party of two, round trip:
            </p>
            <div className="cost-table-cap"><span>Round-trip cost · 2 people</span></div>
            <div className="overflow-x-auto mb-8">
              <table className="cost-table">
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Narita</th>
                    <th>Haneda</th>
                    <th>Savings <span className="sub">picking Haneda</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="scenario">Train<span className="tag">Cheapest</span></td>
                    <td className="bar-cell">¥9,880<span className="meta">(Skyliner×4)</span><span className="bar"><i style={{ width: '100%' }} /></span></td>
                    <td className="bar-cell win">¥2,076<span className="meta">(Monorail×4)</span><span className="bar"><i style={{ width: '21%' }} /></span></td>
                    <td className="savings">¥7,800</td>
                  </tr>
                  <tr>
                    <td className="scenario">N'EX Round Trip<span className="tag">Tourist deal</span></td>
                    <td className="bar-cell">¥10,000<span className="meta">(N'EX RTT×2)</span><span className="bar"><i style={{ width: '100%' }} /></span></td>
                    <td className="bar-cell muted">—</td>
                    <td className="muted">—</td>
                  </tr>
                  <tr>
                    <td className="scenario">Limousine Bus<span className="tag">Hotel-door</span></td>
                    <td className="bar-cell">¥12,800<span className="bar"><i style={{ width: '100%' }} /></span></td>
                    <td className="bar-cell win">¥5,600<span className="bar"><i style={{ width: '44%' }} /></span></td>
                    <td className="savings">¥7,200</td>
                  </tr>
                  <tr>
                    <td className="scenario">Taxi<span className="tag">One-way only</span></td>
                    <td className="bar-cell">¥25,000–32,000<span className="bar"><i style={{ width: '100%' }} /></span></td>
                    <td className="bar-cell win">¥6,000–10,000<span className="bar"><i style={{ width: '28%' }} /></span></td>
                    <td className="savings">¥19,000–22,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For most travelers, the round-trip difference is <strong className="text-foreground">¥5,000-8,000 per couple</strong>. If your Narita flight saves you more than that, book it without second-guessing. If it saves less, Haneda is the better choice once you factor in the time cost.
            </p>

            <InlineCTA
              message="Want a private guide who plans your arrival day around your actual jet lag?"
              linkText="Book a custom Tokyo tour →"
              href="/tours/custom"
            />

            {/* FAQ */}
            <div className="faq-block">
            <div className="section-eyebrow"><span>Section 08 · FAQ</span></div>
            <h2 id="section-faq" className="text-foreground mb-6">
              Frequently Asked Questions
            </h2>

            <div className="faq-block space-y-6 mb-8">
              <div>
                <h3 className="text-foreground">
                  Which airport is better for low-cost carriers (LCCs)?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Narita, by a wide margin. Jetstar Japan, Peach, ZIPAIR, AirAsia, Scoot, and most Asian LCCs operate out of Narita Terminal 3. Haneda has occasional LCC service but the international LCC ecosystem is concentrated at Narita. If you're flying an LCC from Bangkok, Singapore, Seoul, or Taipei for under $200, odds are it lands at Narita T3 — plan transit costs accordingly.
                </p>
              </div>

              <div>
                <h3 className="text-foreground">
                  Can I fly into one airport and out of the other?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, and it's often smart. A popular combination: fly into Haneda (smooth arrival with jet lag), fly out of Narita (LCC return ticket, or a cheaper flight home). The two airports don't charge any penalty for mixed bookings — it's purely a matter of total flight cost. The only caveat is luggage: you handle it yourself between airports, so plan accordingly.
                </p>
              </div>

              <div>
                <h3 className="text-foreground">
                  Is Narita fully English-friendly for first-timers?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Both airports have excellent English signage, immigration counters with English-speaking staff, and the trains (Skyliner, N'EX, Keikyu, Monorail) all have English announcements and electronic displays. Narita feels slightly larger and more walk-intensive between terminals, but navigation-wise it's on par with Haneda. The Visit Japan Web QR lane is clearly signposted in English at both airports.
                </p>
              </div>

              <div>
                <h3 className="text-foreground">
                  What's the best option with heavy luggage?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Airport Limousine Bus at either airport — bags go in the underside compartment, and you step off at your hotel's front door. Haneda's Limousine Bus at ¥1,400 to Shinjuku is one of Tokyo's best travel values. Alternative for long stays: <strong className="text-foreground">Yamato Takkyubin</strong> (bag forwarding) — ship your bags from the airport to your hotel for around ¥2,500 per large suitcase, and travel light on the train. Bags arrive the next day.
                </p>
              </div>

              <div>
                <h3 className="text-foreground">
                  When is a taxi actually worth it?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From Haneda: almost always reasonable for 2+ travelers with luggage, especially at night. ¥6,000-10,000 for a door-to-door ride is competitive with four train tickets plus stress. From Narita: only if you have four travelers going to the same hotel, or if you're arriving past midnight with no late-night bus option to your stay area.
                </p>
              </div>

              <div>
                <h3 className="text-foreground">
                  Is Haneda open 24 hours?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Terminal 3 (international) is open 24 hours for transit passengers and arrivals. Food, shops, and most services close around 22:00-23:00, but convenience stores and seating areas stay open. You can legally sleep in the terminal if needed, though First Cabin Haneda in T1 (capsule hotel) is more comfortable if you have a few hours before the first morning train.
                </p>
              </div>

              <div>
                <h3 className="text-foreground">
                  Do you offer arrival-day tours or pickup?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. For clients who want a low-effort first day, I offer{" "}
                  <Link to="/tours/custom" className="text-accent hover:underline">
                    custom tours
                  </Link>
                  {" "}built around your arrival time — typically a short neighborhood walk, an early dinner, and an easy evening that keeps you moving without overwhelming jet-lagged senses.{" "}
                  <Link to="/contact" className="text-accent hover:underline">
                    Message me
                  </Link>
                  {" "}with your flight details and we'll figure out the right shape for your first day.
                </p>
              </div>
            </div>
            </div>

            {/* CTA */}
            <div className="cta-block">
              <h2 className="text-foreground">
                Want your Tokyo trip to start right — without the arrival-day mess?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                On my private tours, I plan your first full day around your actual arrival time and jet-lag profile. You get a local guide who has met clients at both airports hundreds of times, who reads the day's weather and transit status before you land, and who builds a schedule that respects the fact that the first 24 hours in Tokyo are different from the rest of your trip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours" className="btn-accent">
                  View Private Tours
                </Link>
                <Link to="/contact" className="btn-outline">
                  Ask a Question
                </Link>
              </div>
            </div>
            </article>

            {/* Right: Sidebar — Guide Note + At a Glance */}
            <aside className="article-sidebar hidden lg:flex">
              <div className="sidebar-card">
                <div
                  className="sb-portrait"
                  style={{ backgroundImage: `url(${manabuPortrait})` }}
                />
                <p className="sb-label">Guide Note</p>
                <p>
                  I've met clients at arrivals gates at both airports for years. My default plan: Haneda for similar fares; Narita only if it saves ¥15K+ or it's an LCC.
                </p>
              </div>

              <div className="sidebar-card">
                <p className="sb-label">At a Glance</p>
                <div className="fact-list">
                  <div><strong>Cheapest transit</strong>Haneda Monorail ¥519</div>
                  <div><strong>Most LCCs</strong>Narita Terminal 3</div>
                  <div><strong>Late-night safe</strong>Haneda</div>
                  <div><strong>NE Tokyo hotels</strong>Narita Skyliner</div>
                  <div><strong>Pre-arrival hack</strong>Visit Japan Web</div>
                </div>
              </div>
            </aside>
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
            "headline": "Narita vs Haneda: Which Tokyo Airport Is Actually Better in 2026?",
            "description": "Haneda is closer and cheaper to reach. Narita has more flights and LCCs. A licensed Tokyo guide compares both by cost, time, and arrival-day practicality.",
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
              "@id": "https://tanuki-tabi-travel.com/blog/narita-vs-haneda",
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
                name: "Which Tokyo airport is better for low-cost carriers (LCCs)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Narita by a wide margin. Jetstar Japan, Peach, ZIPAIR, AirAsia, and Scoot all operate out of Narita Terminal 3. Haneda has limited LCC service.",
                },
              },
              {
                "@type": "Question",
                name: "Can I fly into Haneda and out of Narita?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A popular combination is Haneda in (smooth arrival) and Narita out (cheaper LCC return). Airlines don't penalize mixed bookings — it's purely a matter of total flight cost.",
                },
              },
              {
                "@type": "Question",
                name: "What's the fastest way from Narita to central Tokyo in 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Keisei Skyliner reaches Nippori in 36 minutes and Ueno in 41 minutes for ¥2,470, with departures every 20 minutes. From Nippori, Yamanote Line connects to all central stations within 25 minutes.",
                },
              },
              {
                "@type": "Question",
                name: "What's the cheapest way from Haneda to Shinjuku?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Airport Limousine Bus at ¥1,400 one way, 45 minutes, every 20 minutes — delivering you directly to Shinjuku Station West Exit. Monorail to Hamamatsucho is ¥519 but requires a Yamanote Line transfer.",
                },
              },
              {
                "@type": "Question",
                name: "How can I cut Japan immigration wait time from 48 minutes to under 5?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use Visit Japan Web (vjw-lp.digital.go.jp) before your flight to complete immigration and customs declarations online. You'll get a QR code that routes you through an express lane processing in under 5 minutes.",
                },
              },
              {
                "@type": "Question",
                name: "Is Haneda Airport open 24 hours?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Terminal 3 (international) stays open 24 hours for transit passengers and arrivals. Most shops close around 22:00-23:00, but convenience stores and seating areas remain open. First Cabin Haneda in Terminal 1 offers capsule-hotel accommodation.",
                },
              },
            ],
          }),
        }}
      />
    </Layout>
  );
};

export default NaritaVsHaneda;
