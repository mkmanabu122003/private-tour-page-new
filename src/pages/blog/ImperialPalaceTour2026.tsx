import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { InlineCTA } from "@/components/blog/InlineCTA";
import { GuideInsiderNote } from "@/components/blog/GuideInsiderNote";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogArticleToc } from "@/components/blog/BlogArticleSidebar";
import manabuPortrait from "@/assets/About_page_Manabu_team_photo.webp";

const ImperialPalaceTour2026 = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo Imperial Palace Tour 2026: A Licensed Guide's Complete Guide"
        description="How to visit Tokyo Imperial Palace in 2026: official tour (free, 5 AM JST month-start booking), East Gardens (no reservation), or licensed private walking tour."
        canonicalPath="/blog/imperial-palace-tokyo-tour-2026"
        hreflang={[
          { lang: "en", path: "/blog/imperial-palace-tokyo-tour-2026" },
          { lang: "es", path: "/es/blog/tour-palacio-imperial-tokio-2026" },
          { lang: "x-default", path: "/blog/imperial-palace-tokyo-tour-2026" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Imperial Palace Tour 2026" },
        ]}
      />

      <div className="prose-editorial">
        <BlogArticleHero
          image="/images/tours/imperial-palace-gardens.webp"
          imageAlt="The Imperial Palace East Gardens — open to the public and where a licensed guide can actually accompany you"
          eyebrow="Booking Guide · Imperial Palace"
          title="Tokyo Imperial Palace Tour 2026: A Licensed Guide's Complete Guide"
          subtitle="Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) who walks the Imperial Palace grounds with clients almost weekly."
          date="May 2026"
          backHref="/blog"
          backLabel="Back to Blog"
        />

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <BlogArticleToc
                items={[
                  { num: "01", label: "3 ways to visit in 2026", href: "#section-01-three-ways" },
                  { num: "02", label: "Official tour: the 5 AM JST trap", href: "#section-02-official-tour" },
                  { num: "03", label: "East Gardens (no reservation)", href: "#section-03-east-gardens" },
                  { num: "04", label: "The walking route I use", href: "#section-04-walking-route" },
                  { num: "05", label: "January 2 (一般参賀)", href: "#section-05-january-2" },
                  { num: "06", label: "Licensed guide vs audio tour", href: "#section-06-vs-audio" },
                  { num: "07", label: "How I run my tour", href: "#section-07-how-i-run" },
                  { num: "08", label: "FAQ", href: "#section-08-faq" },
                ]}
              />

              <article>
                <div className="quick-decision">
                  <p className="qd-eyebrow">Quick decision</p>
                  <h2>For most visitors, the right answer is the <span className="hl-gold">East Gardens (free, no reservation needed)</span> with a licensed guide — not the official Imperial Household Agency tour.</h2>
                  <p>
                    The official 1-hour palace tour is free and impressive, but it requires online booking at 5:00 AM JST on the 1st of each month (a punishing time for most international time zones), an ID original at the gate, and — critically — <strong className="text-foreground">licensed guides cannot accompany commercial groups on the official tour</strong>. East Gardens has no such restriction.
                  </p>
                  <p>
                    If you want to see the palace from the inside on a tight schedule with a guide, plan East Gardens + the outer walk. If you want the official inner-grounds experience, plan to book it yourself a month ahead.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The Tokyo Imperial Palace confuses almost every first-time visitor. The Imperial Household Agency (kunaicho.go.jp) runs a free official tour. There's also a free public garden (East Gardens) inside the palace grounds. There's also a popular outer walking circuit around the moats that doesn't require entering anything. Three different things, three different rules, three different definitions of "visiting the Imperial Palace."
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This article sorts them out. I run private walking tours that include the Imperial Palace grounds nearly every week, and the same questions come up: <em>Can I actually go inside? How early should I book? Why can't the guide come on the official tour?</em> The short answers are below; the detail is in the sections that follow.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Everything reflects 2026 procedures from the Imperial Household Agency, the East Gardens schedule, and the practical limits of what a licensed guide can and can't do on these grounds.
                </p>

                <div className="guide-note-callout">
                  <div
                    className="gn-portrait"
                    style={{ backgroundImage: `url(${manabuPortrait})` }}
                  />
                  <div>
                    <p className="gn-label">Manabu's take</p>
                    <h3>The official tour is a once-in-a-trip experience — but for most schedules, East Gardens with a guide gets you 90% of the value at none of the friction.</h3>
                    <p>
                      Clients who try to book the official tour from overseas often miss the 5 AM JST opening window, then arrive without ID originals and get turned away at Kikyo-mon. Meanwhile, the East Gardens are open most days, free, and I can walk them with you for an hour explaining what you're actually looking at — which is something the official tour doesn't allow either way.
                    </p>
                  </div>
                </div>

                <InlineCTA
                  message="Want this planned around your dates and what you actually want to see?"
                  linkText="See my Imperial Palace Tour →"
                  href="/tours/imperial-palace"
                />

                {/* SECTION 01 */}
                <div className="section-eyebrow"><span>Section 01 · 3 Ways</span></div>
                <h2 id="section-01-three-ways" className="scroll-mt-20">
                  3 ways to visit the Imperial Palace in 2026
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When people search "Imperial Palace tour Tokyo," they're picturing one thing — but there are three completely different experiences hiding behind that phrase. Pick the wrong one and you arrive at a closed gate or a tour you can't bring a guide to.
                </p>

                <div className="choice-grid">
                  <div className="choice-card">
                    <p className="choice-label">The official inner-grounds tour</p>
                    <h3>Imperial Household Agency tour</h3>
                    <ul>
                      <li>Free, ~1 hour, 2.2 km route inside palace grounds</li>
                      <li>Must book online at 5:00 AM JST on the 1st of the month</li>
                      <li>ID original required at the gate</li>
                      <li><strong>Licensed guides cannot accompany you</strong></li>
                    </ul>
                  </div>
                  <div className="choice-card">
                    <p className="choice-label">The flexible option</p>
                    <h3>East Gardens (recommended for most)</h3>
                    <ul>
                      <li>Free, no reservation</li>
                      <li>Open most days 9:00 onwards (closed Mon &amp; Fri)</li>
                      <li>Guide can accompany you fully</li>
                      <li>Honmaru ruins, Edo Castle stone walls, seasonal gardens</li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  And the third option, often overlooked:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Outer walking circuit</strong> — 5 km loop around the moats, free, open 24/7, no reservation. Nijubashi (Double Bridge), Sakurada-mon, Marunouchi side views. The default for runners and photographers, fine for a 60–90 minute walk if the East Gardens are closed.</li>
                </ul>

                <h3>Which one fits you</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have <strong className="text-foreground">flexible dates and book a month ahead</strong>, the official tour is worth it once. If you have <strong className="text-foreground">tight dates and want a guide</strong>, East Gardens. If the <strong className="text-foreground">East Gardens are closed</strong> (Mondays, Fridays, year-end), the outer walk plus Nijubashi photos is a respectable backup.
                </p>

                {/* SECTION 02 */}
                <div className="section-eyebrow"><span>Section 02 · Official Tour</span></div>
                <h2 id="section-02-official-tour" className="scroll-mt-20">
                  The official tour reservation: the 5 AM JST trap
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Imperial Household Agency runs two free tours daily (morning and afternoon), each lasting about an hour and covering 2.2 km of inner palace grounds normally closed to the public. The catch is the booking system, which trips up almost every overseas visitor.
                </p>

                <h3>When applications open</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Applications open <strong className="text-foreground">at 5:00 AM JST on the 1st of the month before your visit</strong> and close at <strong className="text-foreground">11:59 PM JST, 4 days before</strong> your chosen date. Popular dates (cherry blossom week, autumn leaf week, Golden Week) fill within minutes. From the United States East Coast, the 5 AM JST opening is the previous afternoon at 4 PM — manageable. From the West Coast, it's noon the previous day. From Europe, it's late evening. From Australia, it's early morning. Set a calendar alarm.
                </p>

                <h3>Same-day walk-in alternative</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Same-day tickets are distributed at <strong className="text-foreground">Kikyo-mon Gate</strong>: morning tickets from 9:00, afternoon tickets from 12:30. There's a hard cap of <strong className="text-foreground">300 people per tour</strong>. On a typical weekday, walking up at 9:00 sharp usually works; on weekends in peak seasons, you're competing for the same 300 slots in person.
                </p>

                <h3>ID requirements</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You must bring an <strong className="text-foreground">original passport, driver's license, or student ID</strong> — photocopies and phone photos of the document are <em>not</em> accepted. I've seen clients turned away at Kikyo-mon for showing a passport photo on their phone. The guard at the gate is not negotiable on this.
                </p>

                <h3>⚠️ The guide problem</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This is the one most people miss. <span className="hl-gold">Commercial sightseeing operators and related parties are not permitted on the official tour.</span> That includes me. The Imperial Household Agency's policy is that the official tour is a direct relationship between the agency and the visitor — no third-party commentary, no guide groups. If you book the official tour, you go in alone (with your group/family, but no professional guide).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  What this means in practice: if you want <em>both</em> the inner-grounds tour and a licensed guide for context, you do them on different days. Or — what most of my clients choose — skip the inner tour and do East Gardens + outer walk with a guide instead.
                </p>

                <GuideInsiderNote date="March 2026">
                  <p>
                    A family of four booked me for an Imperial Palace day in March. They'd reserved the morning official tour at 10:00 weeks in advance. We met at their hotel at 8:30, walked through Wadakura Fountain Park, dropped them at Kikyo-mon for the official tour at 9:50, and I met them at the exit at 11:30. We then walked East Gardens together for 90 minutes, ate lunch in Marunouchi, and finished with the outer-moat photo loop. That's the way to combine all three options in one day — but it only works if the official tour is locked in a month in advance.
                  </p>
                </GuideInsiderNote>

                {/* SECTION 03 */}
                <div className="section-eyebrow"><span>Section 03 · East Gardens</span></div>
                <h2 id="section-03-east-gardens" className="scroll-mt-20">
                  East Gardens: the no-reservation alternative
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Imperial Palace East Gardens (皇居東御苑) are the only part of the palace grounds open to the public without reservation. They're free, large (about 21 hectares), and contain the ruins of the Honmaru — the central donjon of Edo Castle, the original fortress on this site before the Meiji Restoration moved the emperor here in 1869.
                </p>

                <h3>Opening hours (2026)</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">9:00 – 17:00</strong> (March 1 – April 14, and all of September)</li>
                  <li><strong className="text-foreground">9:00 – 18:00</strong> (April 15 – August)</li>
                  <li><strong className="text-foreground">9:00 – 16:30</strong> (October)</li>
                  <li><strong className="text-foreground">9:00 – 16:00</strong> (November – February)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Admission closes <strong className="text-foreground">30 minutes before</strong> the listed close time, and the gardens are <strong className="text-foreground">closed every Monday and Friday</strong> plus the New Year period (December 28 – January 3). If your Tokyo dates land Monday-Friday only, plan around this.
                </p>

                <h3>What you actually see</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Honmaru ruins</strong> — the stone foundation of Edo Castle's main donjon, destroyed in a 1657 fire and never rebuilt. The view from the top is one of the few places in central Tokyo where you stand on a 17th-century structure.</li>
                  <li><strong className="text-foreground">Ninomaru Garden</strong> — a classical Japanese garden with a pond, restored in the postwar era.</li>
                  <li><strong className="text-foreground">Suwa Tea House and old guardhouses</strong> — Edo-era structures still in their original positions.</li>
                  <li><strong className="text-foreground">Seasonal flowers</strong> — cherry blossoms (late March – early April), azalea, iris, autumn colors (mid-November).</li>
                </ul>

                <h3>How long to budget</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A focused walk takes 60–75 minutes. With a guide, 90 minutes feels right — long enough to cover the history of Edo Castle, the Meiji transition, and how the imperial family actually lives on these grounds today. Going faster doesn't gain you much; going slower means you've seen everything twice.
                </p>

                {/* SECTION 04 */}
                <div className="section-eyebrow"><span>Section 04 · The Walking Route</span></div>
                <h2 id="section-04-walking-route" className="scroll-mt-20">
                  The walking route most licensed guides recommend
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For clients who want "the full Imperial Palace experience" without an official-tour reservation, here's the 2.5–3 hour route I use most often. It connects the three iconic photo points with East Gardens in a single loop.
                </p>

                <figure className="my-6">
                  <img
                    src="/images/blog/imperial-nijubashi.jpg"
                    alt="Nijubashi (Double Bridge) with Fushimi Yagura tower behind — the iconic Imperial Palace photo stop"
                    className="w-full aspect-[3/2] object-cover rounded-lg"
                    loading="lazy"
                    width={1500}
                    height={1000}
                  />
                </figure>

                <h3>The route</h3>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Nijubashi (Double Bridge)</strong> — the iconic stone bridge over the inner moat, with Fushimi Yagura tower behind it. The classic Imperial Palace photo. 10 minutes for the photo and the history.</li>
                  <li><strong className="text-foreground">Sakurada-mon Gate</strong> — site of the 1860 assassination of Ii Naosuke (Sakuradamon Incident), a pivotal moment in the fall of the Tokugawa shogunate. 5 minutes plus commentary.</li>
                  <li><strong className="text-foreground">Wadakura Fountain Park</strong> — quiet modern park between the moat and Marunouchi, with one of the best Tokyo Station views from the south. 10 minutes.</li>
                  <li><strong className="text-foreground">East Gardens via Otemon</strong> — enter at Otemon Gate (closest to Tokyo Station), spend 90 minutes inside.</li>
                  <li><strong className="text-foreground">Exit at Hirakawa-mon</strong> — exit on the north side and walk to Kitanomaru Park (cherry blossoms in season) or back toward Otemachi for the train.</li>
                </ol>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Total distance: about 4 km. Total time with a guide: ~3 hours. No reservation required, no ID issues, no commercial-operator restriction. This is what most of my Imperial Palace clients actually do.
                </p>

                {/* SECTION 05 */}
                <div className="section-eyebrow"><span>Section 05 · January 2</span></div>
                <h2 id="section-05-january-2" className="scroll-mt-20">
                  January 2: the one day the Emperor appears in person
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Once a year, the inner palace grounds — normally closed except by official tour — are opened to the general public for the <strong className="text-foreground">New Year Greeting (新年一般参賀)</strong>. The Emperor and Empress appear on a balcony of the Chowa-Den hall and address the crowd assembled in the East Court.
                </p>

                <h3>2026 schedule (reference)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In 2026, the New Year Greeting took place on <strong className="text-foreground">January 2</strong>. The main entrance gate (Nijubashi) was open from 9:30 AM to 2:10 PM. The Imperial Family made five balcony appearances throughout the day (approximately 10:10, 11:00, 11:50, 13:30, and 14:20). Exit gates included Sakashita-mon, Kikyo-mon, Ote-mon, and Inui-mon.
                </p>

                <h3>What to expect</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>Heavy security screening at the gate (bag inspection, no large luggage)</li>
                  <li>Crowds in the tens of thousands across the day</li>
                  <li>Each balcony appearance lasts a few minutes; visitors are asked to attend only one appearance to make room for others</li>
                  <li>No commentary system, no guides allowed (similar to the official tour rule)</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  This is the only time of year you can walk into the inner palace grounds without a reservation. If you're in Tokyo on January 2 and want a once-in-a-lifetime moment, it's worth going early. For everyone else, this is interesting context but not a planning consideration.
                </p>

                {/* SECTION 06 */}
                <div className="section-eyebrow"><span>Section 06 · vs Audio Tour</span></div>
                <h2 id="section-06-vs-audio" className="scroll-mt-20">
                  Licensed guide vs self-guided audio tour
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Several OTAs sell self-guided audio tours of the Imperial Palace area for ¥1,000–¥2,500 per person — basically a smartphone app with GPS-triggered commentary. They're fine for getting a basic narrative. They're not the same as a private licensed guide.
                </p>

                <div className="cost-table-cap"><span>What you're paying for</span></div>
                <div className="overflow-x-auto mb-8">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Self-guided audio</th>
                        <th>Licensed-guide private</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Cost (group of 2)</td>
                        <td className="bar-cell win">¥3,000</td>
                        <td className="bar-cell">¥40,000–¥60,000</td>
                      </tr>
                      <tr>
                        <td className="scenario">Custom routing</td>
                        <td className="bar-cell">No (fixed script)</td>
                        <td className="bar-cell win">Yes</td>
                      </tr>
                      <tr>
                        <td className="scenario">Questions answered</td>
                        <td className="bar-cell">No</td>
                        <td className="bar-cell win">Yes</td>
                      </tr>
                      <tr>
                        <td className="scenario">Cultural context depth</td>
                        <td className="bar-cell">Surface</td>
                        <td className="bar-cell win">Full</td>
                      </tr>
                      <tr>
                        <td className="scenario">Weather adaptation</td>
                        <td className="bar-cell">None</td>
                        <td className="bar-cell win">Yes</td>
                      </tr>
                      <tr>
                        <td className="scenario">Combines with other Tokyo stops</td>
                        <td className="bar-cell">No</td>
                        <td className="bar-cell win">Yes (extend to Marunouchi, Ginza)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>When audio is enough</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Solo budget travelers spending 1–2 hours on the palace grounds. The audio app gives you a Wikipedia-grade narrative for the price of a coffee. It won't tell you why a specific stone has a samurai era mark on it, but it will tell you what year Edo Castle burned down.
                </p>

                <h3>When private is worth the premium</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Groups of 2+ who want the Imperial Palace as part of a longer Tokyo cultural day. Once you combine it with Marunouchi history, Tokyo Station architecture, and Ginza walking, the per-person cost approaches the audio tour anyway — and you get answers to whatever you actually wonder about.
                </p>

                {/* SECTION 07 */}
                <div className="section-eyebrow"><span>Section 07 · How I Run It</span></div>
                <h2 id="section-07-how-i-run" className="scroll-mt-20">
                  How I run my Imperial Palace + East Gardens day
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For reference, here's the typical shape of an Imperial Palace half-day with a licensed guide. The format below assumes East Gardens are open (Tuesday, Wednesday, Thursday, Saturday, Sunday); if not, we substitute the longer outer walking circuit.
                </p>

                <h3>The shape of the morning</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">08:30:</strong> I check the East Gardens schedule confirming it's an open day.</li>
                  <li><strong className="text-foreground">09:00:</strong> Meet you at your Tokyo hotel; we take the train to Tokyo Station.</li>
                  <li><strong className="text-foreground">09:30:</strong> Walk from Tokyo Station to Nijubashi for the iconic palace photo and the bridge history.</li>
                  <li><strong className="text-foreground">10:00:</strong> Sakurada-mon and the Sakuradamon Incident commentary.</li>
                  <li><strong className="text-foreground">10:30:</strong> Enter East Gardens via Otemon; 90 minutes inside covering Honmaru ruins, Ninomaru Garden, and Edo Castle stones.</li>
                  <li><strong className="text-foreground">12:00:</strong> Exit at Hirakawa-mon, lunch in Marunouchi or extend to Kitanomaru Park.</li>
                  <li><strong className="text-foreground">13:00–14:00:</strong> Return to your hotel area, or continue to Ginza/Akihabara/Asakusa for a full-day extension.</li>
                </ul>

                <h3>What's different from a self-guided visit</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li><strong className="text-foreground">Pre-trip planning over email.</strong> I confirm East Gardens is open on your date; if you also want the official inner tour, I help you book it through kunaicho.go.jp.</li>
                  <li><strong className="text-foreground">Story-driven commentary.</strong> Why the Meiji emperor moved here in 1869, why the Honmaru was never rebuilt after 1657, how the imperial family lives behind the inner walls today. This is the layer that turns a walk into history.</li>
                  <li><strong className="text-foreground">Adjacent Tokyo combined.</strong> Imperial Palace makes natural sense as the morning half of a full-day route — Marunouchi, Ginza, or Akihabara in the afternoon depending on your interests.</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  My{" "}
                  <Link to="/tours/imperial-palace" className="text-accent hover:underline">
                    Imperial Palace Tour page
                  </Link>{" "}
                  has the booking details. For a custom plan combining the palace with other Tokyo districts, the easiest path is{" "}
                  <Link to="/contact" className="text-accent hover:underline">
                    a quick contact form
                  </Link>{" "}
                  with your dates and group size.
                </p>

                <InlineCTA
                  message="Want an Imperial Palace day planned around your trip?"
                  linkText="Book a private Imperial Palace tour →"
                  href="/tours/imperial-palace"
                />

                {/* SECTION 08 FAQ */}
                <div className="section-eyebrow"><span>Section 08 · FAQ</span></div>
                <h2 id="section-08-faq" className="scroll-mt-20">
                  Frequently Asked Questions
                </h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3 className="text-foreground">Is the Imperial Palace tour free?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The official Imperial Household Agency tour is free, lasts about 1 hour, and covers a 2.2 km route inside the palace grounds. The East Gardens are also free with no reservation required. Only private licensed-guide tours have a cost (¥40,000–¥60,000 per group for a half-day visit covering the outer route + East Gardens).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">How do I book the Imperial Palace official tour?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Apply online at sankan.kunaicho.go.jp starting at 5:00 AM JST on the 1st of the month before your visit, closing 4 days before your chosen date. Same-day walk-in tickets are also available at Kikyo-mon Gate (morning 9:00 distribution, afternoon 12:30; cap of 300 per tour). Bring an original passport or ID — photocopies are not accepted.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Can a tour guide accompany me on the official Imperial Palace tour?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No. The Imperial Household Agency does not permit commercial sightseeing operators on the official tour. You go in with your party but without a professional guide. If you want both the inner tour and a guide, the typical approach is to do the official tour solo and have a licensed guide for the East Gardens + outer route either before or after.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Is the East Gardens worth visiting?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, especially with a guide. The East Gardens contain the ruins of the Edo Castle Honmaru (the central donjon of the fortress that defined Tokyo for 260 years), the Ninomaru Garden, original Edo-era guardhouses, and seasonal cherry blossoms or autumn colors. A 90-minute guided walk covers everything; a focused solo visit takes 60 minutes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">When is the Imperial Palace East Gardens closed?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The East Gardens are closed every Monday and Friday, plus the New Year period (December 28 – January 3) and occasional days for imperial ceremonies. Opening hours vary by season: 9:00–18:00 in summer (April 15 – August), 9:00–17:00 in spring/September, 9:00–16:30 in October, and 9:00–16:00 in winter (November – February). Admission closes 30 minutes before listed close time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Can you see the Emperor at the Imperial Palace?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Only on January 2 (New Year Greeting / 新年一般参賀), when the Emperor and Empress appear on a balcony of the Chowa-Den hall and address the public from the East Court. The main gate (Nijubashi) opens at 9:30 AM, with five balcony appearances throughout the day. Heavy security screening, no guides allowed on the inner grounds that day either.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">How long does an Imperial Palace tour take?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The official inner tour is 1 hour, 2.2 km. East Gardens self-guided: 60–75 minutes. East Gardens with a licensed guide: 90 minutes. Full outer walking loop alone: 60–90 minutes. The combination of East Gardens + outer photo points with a guide is typically 2.5–3 hours, which is what most of my clients do.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground">Where do I take the iconic Imperial Palace photo?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The Nijubashi (Double Bridge) viewpoint from the outer plaza is the classic shot — stone bridge in foreground with Fushimi Yagura tower behind. It's open 24/7, free, no reservation. Best light is mid-morning when the bridge faces east toward the sun. Tokyo's most photographed palace view, and the only one you can take without entering any restricted area.
                    </p>
                  </div>
                </div>

                <InlineCTA
                  message="Ready to lock in an Imperial Palace day that fits your trip?"
                  linkText="See my Imperial Palace Tour →"
                  href="/tours/imperial-palace"
                />
              </article>
            </div>
          </div>
        </section>

        <RelatedTourCards tourIds={["imperial-palace", "custom"]} showViewAll />
      </div>
    </Layout>
  );
};

export default ImperialPalaceTour2026;
