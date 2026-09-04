import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { AffiliateLink } from "@/components/AffiliateLink";
import { HubTable } from "@/components/logistics/HubTable";

const INQUIRY_PATH = "/contact";

const Logistics = () => {
  return (
    <Layout>
      <SEO
        title="Japan Logistics 2026: eSIM, Shinkansen & Airport"
        description="A practical checklist for eSIM or Pocket WiFi, Shinkansen, highway buses, and airport cars — then inquire about a private Tokyo sightseeing day."
        canonicalPath="/logistics"
        hreflang={[
          { lang: "en", path: "/logistics" },
          { lang: "es", path: "/es/logistics" },
          { lang: "x-default", path: "/logistics" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Logistics" },
        ]}
      />

      <div className="prose-editorial">
        <section className="pt-16 pb-12 bg-secondary/30">
          <div className="container-section">
            <div className="max-w-3xl">
              <p className="text-label text-accent mb-3">Trip planning</p>
              <h1 className="text-foreground">Plan the logistics — then enjoy the trip</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Almost everything that makes a Japan trip feel easy runs on two things: a data connection and a seat.
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                Last updated: September 2026
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(0,720px)_220px] gap-y-10 lg:gap-x-9 mx-auto max-w-3xl lg:max-w-[1180px]">
              <aside className="article-toc hidden lg:block">
                <p className="toc-label">On this page</p>
                <a href="#section-01"><span className="toc-num">01</span><span>Private tour</span></a>
                <a href="#section-02"><span className="toc-num">02</span><span>Disclosure</span></a>
                <a href="#section-03"><span className="toc-num">03</span><span>What you need</span></a>
                <a href="#section-04"><span className="toc-num">04</span><span>Stay online</span></a>
                <a href="#section-05"><span className="toc-num">05</span><span>Shinkansen</span></a>
                <a href="#section-06"><span className="toc-num">06</span><span>Highway bus</span></a>
                <a href="#section-07"><span className="toc-num">07</span><span>Airport car</span></a>
                <a href="#section-faq"><span className="toc-num">08</span><span>FAQ</span></a>
                <a href="#section-closing"><span className="toc-num">09</span><span>Closing</span></a>
              </aside>

              <article>
                <p>
                  Maps, translation, restaurant reservations, a QR code at a ticket gate, a message to say you're running late — all data. The Tokyo-to-Kyoto hop, the ride in from the airport with three suitcases and a tired child — all seats. Sort those two things out before you fly, and day one tends to feel calm instead of chaotic.
                </p>
                <p>
                  This page is a practical checklist, not a catalog. It walks through the four decisions most visitors face — how to get online, how to move between cities, whether a bus beats a train for a longer hop, and how to get from the airport to your first bed — and points to booking tools many travelers use. You book those tools yourself; we don't arrange transport or lodging. What we do is shape the sightseeing days.
                </p>

                <div className="section-eyebrow"><span>Section 01 · Private tour</span></div>
                <h2 id="section-01" className="scroll-mt-20">Start with a private tour</h2>
                <p>
                  Private days work best when the logistics underneath them are already settled: where you land, how you'll be online, how you'll move between cities. Once that's fixed, the sightseeing day can be built entirely around what you want to see — an early temple before the crowds, a long lunch, a neighborhood you read about once and can't name. Tell us the shape of the trip; we'll shape the day.
                </p>
                <p className="my-8">
                  <Link to={INQUIRY_PATH} className="btn-accent" data-cta="logistics-private-tour">
                    Inquire about a private tour →
                  </Link>
                </p>

                <div className="section-eyebrow"><span>Section 02 · Disclosure</span></div>
                <h2 id="section-02" className="scroll-mt-20">Affiliate disclosure</h2>
                <div className="affiliate-disclosure">
                  <p>
                    Some links below are affiliate links. If you book through them, Tanuki Tabi Travel may earn a commission at no extra cost to you.
                  </p>
                </div>

                <div className="section-eyebrow"><span>Section 03 · What you need</span></div>
                <h2 id="section-03" className="scroll-mt-20">Which of these do you actually need?</h2>
                <p>Not everyone needs all four. A quick match by trip type:</p>
                <HubTable caption="Match by trip type">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Your trip</th>
                        <th>Usually worth pre-booking</th>
                        <th>Can often skip</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Solo first-timer, phone-only, light bag</td>
                        <td>eSIM · Shinkansen seat if you travel on a weekend or holiday</td>
                        <td>Pocket WiFi · airport car</td>
                      </tr>
                      <tr>
                        <td className="scenario">Couple, two phones, medium bags</td>
                        <td>eSIM (one per phone) or one Pocket WiFi · Shinkansen</td>
                        <td>Airport car unless arriving late</td>
                      </tr>
                      <tr>
                        <td className="scenario">Family of 4, tablets + laptop</td>
                        <td>Pocket WiFi · Shinkansen (adjacent seats) · airport car</td>
                        <td>eSIM juggling on four devices</td>
                      </tr>
                      <tr>
                        <td className="scenario">Luggage-heavy (skis, golf, big cases)</td>
                        <td>Airport car · reserved Shinkansen seats [VERIFY: oversized luggage rules per line]</td>
                        <td>Highway bus [VERIFY: trunk limits per operator]</td>
                      </tr>
                      <tr>
                        <td className="scenario">Budget-first, flexible on time</td>
                        <td>eSIM · highway bus</td>
                        <td>Airport car · Shinkansen</td>
                      </tr>
                    </tbody>
                  </table>
                </HubTable>

                <div className="section-eyebrow"><span>Section 04 · Stay online</span></div>
                <h2 id="section-04" className="scroll-mt-20">1) Stay online: eSIM or Pocket WiFi?</h2>
                <p>
                  The single most common day-one problem is landing with no working data. You step off the plane, open Maps, and nothing loads. The fix is deciding <em>before</em> you fly whether your phone will carry its own connection (eSIM) or ride on a shared router (Pocket WiFi).
                </p>

                <h3 id="online-decision" className="scroll-mt-20">The decision in one table</h3>
                <HubTable caption="eSIM vs Pocket WiFi">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Traveler type</th>
                        <th>Usually better</th>
                        <th>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Solo / couple, eSIM-capable phone</td>
                        <td><strong>eSIM</strong></td>
                        <td>Install before you fly; nothing to pick up or return</td>
                      </tr>
                      <tr>
                        <td className="scenario">Family / 3+ devices</td>
                        <td><strong>Pocket WiFi</strong></td>
                        <td>One router shared across phones, tablets, laptops</td>
                      </tr>
                      <tr>
                        <td className="scenario">Carrier-locked phone</td>
                        <td><strong>Pocket WiFi</strong></td>
                        <td>Sidesteps eSIM hardware and lock restrictions</td>
                      </tr>
                      <tr>
                        <td className="scenario">Work laptop needs data on trains</td>
                        <td><strong>Pocket WiFi</strong> (or eSIM with hotspot [VERIFY: hotspot allowance per plan])</td>
                        <td>Laptops can't use an eSIM directly</td>
                      </tr>
                    </tbody>
                  </table>
                </HubTable>
                <p>
                  Two checks before you decide: (1) confirm your phone model supports eSIM, and (2) confirm it's unlocked.
                </p>

                <h3 id="esim" className="scroll-mt-20">eSIM — Japan Wireless</h3>
                <p>
                  An eSIM is a digital SIM profile you install by scanning a QR code. No physical card, no shop visit. Japan Wireless lists 5G unlimited and fixed-data plans on KDDI's network, plus 4G options [VERIFY: current plan matrix on japan-wireless.com/esim]. Hotspot/tethering is supported on their 5G plans; the high-speed hotspot allowance scales with plan length and speeds may drop after that allowance is used [VERIFY].
                </p>
                <p>
                  Their own materials also mention a <strong>free Pocket WiFi fallback</strong> if the eSIM can't connect after guided troubleshooting [VERIFY: still offered].
                </p>
                <p><strong>How it works, step by step</strong></p>
                <ol>
                  <li>Order online before departure and receive the QR code by email [VERIFY: delivery method].</li>
                  <li>Scan and install the profile while you're still on home WiFi — don't leave this for the airport.</li>
                  <li>On landing, select the Japan eSIM as your data line and turn on data roaming for that line.</li>
                  <li>Keep your home SIM active only for calls/SMS if you need them, with its data roaming off.</li>
                  <li>Done — your phone should connect within a minute or two of switching on [VERIFY: typical activation time].</li>
                </ol>
                <p>
                  <strong>Where people trip up:</strong> installing the profile on the plane with no WiFi; forgetting to enable data roaming on the new line; or picking the eSIM without checking that the phone is unlocked.
                </p>
                <p className="my-8">
                  <AffiliateLink slug="TODO_jw-esim" className="btn-outline">
                    Check Japan Wireless eSIM →
                  </AffiliateLink>
                </p>

                <h3 id="pocket-wifi" className="scroll-mt-20">Pocket WiFi — Japan Wireless</h3>
                <p>
                  One small router, one shared connection. Japan Wireless markets its "ONE Plan" as <strong>truly unlimited data with no FUP-style throttling</strong>, about 8–10 hours of battery, a free power bank, and up to <strong>8 devices</strong> at once [VERIFY: current marketing claims on japan-wireless.com/en]. Pickup is offered at major airports (Narita, Haneda, Kansai, Chubu, Fukuoka, New Chitose) or delivery to a hotel or residence; you return it in a prepaid envelope at any Japan postbox [VERIFY: pickup locations and return process]. They position themselves as operating since 2012 with 1.6M+ travelers [VERIFY].
                </p>
                <p><strong>How it works, step by step</strong></p>
                <ol>
                  <li>Order online and choose airport pickup or hotel delivery.</li>
                  <li>Collect the router (and power bank) at the counter or hotel front desk on arrival [VERIFY: counter locations/hours].</li>
                  <li>Switch it on, connect your devices to its network name and password.</li>
                  <li>Charge it every night — the power bank is for the long day out, not a substitute for a wall charger.</li>
                  <li>On your last day, seal it in the prepaid envelope and drop it in any postbox before your flight [VERIFY: return deadline].</li>
                </ol>
                <p>
                  <strong>Where people trip up:</strong> arriving on a late flight after the pickup counter has closed [VERIFY: counter hours]; forgetting the router in a hotel room; or splitting the group for the day and leaving one half with no connection.
                </p>
                <p className="my-8">
                  <AffiliateLink slug="TODO_jw-wifi" className="btn-outline">
                    Check Japan Wireless Pocket WiFi →
                  </AffiliateLink>
                </p>

                <h3 id="coverage" className="scroll-mt-20">Coverage note</h3>
                <p>
                  City-only itineraries are forgiving; almost any plan works in Tokyo, Kyoto, or Osaka. Rural, mountain, and island days are where differences between underlying networks show. If your route leaves the main tourist circuit — Japan Alps hiking, Setouchi islands, remote onsen — check which carrier's network your plan uses before you buy [VERIFY per plan].
                </p>

                <div className="section-eyebrow"><span>Section 05 · Shinkansen</span></div>
                <h2 id="section-05" className="scroll-mt-20">2) City to city: Shinkansen (Japan Bullet Train)</h2>
                <p>
                  Once you're online, the next fixed point is the big intercity hop. The Shinkansen is fast, frequent, and famously punctual — the friction is in getting the ticket, not the ride.
                </p>

                <h3 id="book-ahead" className="scroll-mt-20">Why book ahead</h3>
                <p>
                  At peak times, JR ticket windows can mean <strong>20–40 minutes</strong> of queuing. On busy weekends, cherry-blossom season, Golden Week, and year-end, reserved seats on popular departures can sell out, and adjacent seats for a family go first.
                </p>
                <p>
                  Japan Bullet Train is an English-first booking site for Shinkansen (and some express) tickets: you order online, receive a <strong>QR code</strong>, then collect paper tickets at a designated JR station. Support hours are listed as 8AM–11PM JST [VERIFY]. Same-day bookings are offered [VERIFY: same-day cutoff]. Popular corridors include Tokyo–Kyoto / Shin-Osaka / Nagoya / Hiroshima / Hakata and JR East routes north [VERIFY: route coverage for your dates].
                </p>

                <h3 id="train-vs-bus" className="scroll-mt-20">Train vs bus for the same hop</h3>
                <HubTable caption="Shinkansen vs highway bus">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Priority</th>
                        <th>Take the Shinkansen</th>
                        <th>Take the highway bus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">Time</td>
                        <td>2–3 hours Tokyo–Osaka [VERIFY: timetable]</td>
                        <td>Roughly 8–11 hours [VERIFY]</td>
                      </tr>
                      <tr>
                        <td className="scenario">Cost</td>
                        <td>Higher</td>
                        <td>Often a fraction of the train fare [VERIFY: live fares]</td>
                      </tr>
                      <tr>
                        <td className="scenario">Comfort with big luggage</td>
                        <td>Reserved seat + luggage space [VERIFY: oversized luggage rules]</td>
                        <td>Trunk limits vary [VERIFY per operator]</td>
                      </tr>
                      <tr>
                        <td className="scenario">Arriving fresh for a tour day</td>
                        <td>Yes</td>
                        <td>Overnight buses arrive early but tired</td>
                      </tr>
                    </tbody>
                  </table>
                </HubTable>

                <p><strong>How it works, step by step</strong></p>
                <ol>
                  <li>Book the route, date, and time online; choose reserved seats and how many travelers.</li>
                  <li>Receive a QR code confirmation by email [VERIFY: delivery method].</li>
                  <li>At the designated JR station, present the QR code and collect your paper tickets [VERIFY: which stations / counters].</li>
                  <li>Pass through the Shinkansen gates with the paper tickets and board your reserved car.</li>
                  <li>Keep the tickets until you exit at your destination.</li>
                </ol>

                <p><strong>When this helps most</strong></p>
                <ul>
                  <li>First Japan trip, English UI preferred over SmartEX / eki-net</li>
                  <li>Guaranteed reserved seats on busy weekends, cherry blossom, Golden Week, year-end</li>
                  <li>Family of four who want to sit together</li>
                  <li>Large luggage — reserved seats reduce standing-car stress [VERIFY: oversized luggage rules per line]</li>
                  <li>Tight connection: a private tour day in Kyoto starting mid-morning after a Tokyo departure</li>
                </ul>
                <p className="my-8">
                  <AffiliateLink slug="TODO_shinkansen" className="btn-outline">
                    Check Japan Bullet Train →
                  </AffiliateLink>
                </p>

                <div className="section-eyebrow"><span>Section 06 · Highway bus</span></div>
                <h2 id="section-06" className="scroll-mt-20">3) Budget longer hops: highway buses (Japan Bus Tickets)</h2>
                <p>
                  If the Shinkansen is the "fast and settled" option, the highway bus is the "slow and cheap" one.
                </p>
                <p>
                  Japan Bus Tickets aggregates <strong>1,000+ routes / 160+ suppliers</strong>, with same-day reservations and multilingual support [VERIFY: current figures]. Example "from" fares: Tokyo–Osaka from about <strong>¥5,000</strong> (~11h), Tokyo–Kawaguchiko from about <strong>¥2,600</strong> (~2h40m), Tokyo–Nagoya from about <strong>¥3,800</strong> [VERIFY: live fare on japan-bus-tickets.com].
                </p>

                <h3 id="bus-who" className="scroll-mt-20">Who it suits</h3>
                <ul>
                  <li>Solo or couple travelers with time and a daypack rather than a trunk</li>
                  <li>A Fuji-area day (Tokyo–Kawaguchiko) where the bus goes direct [VERIFY: route/time]</li>
                  <li>Overnight Tokyo–Osaka/Kyoto to save a hotel night — with the caveat below</li>
                </ul>

                <h3 id="overnight-bus" className="scroll-mt-20">Overnight-bus etiquette and reality</h3>
                <p>
                  Overnight buses are common on the Tokyo–Osaka/Kyoto corridor. Expect rest stops every 2–3 hours, lights-out rules after departure, and quiet expectations. You'll arrive early morning. Bring an eye mask and a neck pillow; check the seat type before booking [VERIFY: seat classes per operator].
                </p>
                <p><strong>How it works, step by step</strong></p>
                <ol>
                  <li>Search the route and date; compare departure times and seat types.</li>
                  <li>Book online and receive confirmation [VERIFY: e-ticket vs. printed voucher].</li>
                  <li>Find the boarding point — highway bus stops are sometimes a walk from the main station.</li>
                  <li>Show your confirmation to the driver, stow large bags in the trunk [VERIFY: trunk limits], keep valuables with you.</li>
                  <li>Ride, rest-stop, arrive.</li>
                </ol>
                <p className="my-8">
                  <AffiliateLink slug="TODO_highway-bus" className="btn-outline">
                    Check Japan Bus Tickets →
                  </AffiliateLink>
                </p>

                <div className="section-eyebrow"><span>Section 07 · Airport car</span></div>
                <h2 id="section-07" className="scroll-mt-20">4) Airport run: fixed-fare car (Airport Taxi)</h2>

                <h3 id="train-vs-car" className="scroll-mt-20">Train vs car from the airport</h3>
                <HubTable caption="Airport train vs fixed-fare car">
                  <table className="cost-table">
                    <thead>
                      <tr>
                        <th>Situation</th>
                        <th>Train / airport express</th>
                        <th>Pre-booked fixed-fare car</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="scenario">One person, carry-on only</td>
                        <td>Fine</td>
                        <td>Overkill</td>
                      </tr>
                      <tr>
                        <td className="scenario">Couple, two medium cases, arriving mid-day</td>
                        <td>Fine</td>
                        <td>Nice-to-have</td>
                      </tr>
                      <tr>
                        <td className="scenario">Family with kids, jet lag, evening arrival</td>
                        <td>Doable but tiring</td>
                        <td>Usually worth it</td>
                      </tr>
                      <tr>
                        <td className="scenario">3+ large suitcases, or gear (skis, golf)</td>
                        <td>Awkward on platforms and transfers</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td className="scenario">Late arrival after last train [VERIFY: last train times]</td>
                        <td>Not an option</td>
                        <td>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </HubTable>

                <h3 id="airport-taxi-offers" className="scroll-mt-20">What Airport Taxi offers</h3>
                <p>
                  Airport Taxi (airport-taxi.tokyo) advertises fixed fares with highway tolls, parking, and fuel included, Alphard-class vehicles, and multi-language support (JP/EN/ZH) [VERIFY: current listing]. Example listed fares: Haneda ↔ Tokyo 23 wards about <strong>¥14,700</strong>; Narita ↔ Tokyo 23 wards about <strong>¥22,700</strong> [VERIFY: live quote — rates change]. They also show Kansai / Itami routes [VERIFY].
                </p>

                <h3 id="immigration-buffer" className="scroll-mt-20">The immigration buffer</h3>
                <p>
                  For international arrivals, plan roughly 60–90 minutes for immigration, baggage, and customs before your pickup time. Waiting-time allowances are listed on their site [VERIFY: included wait time and overtime charges]. Give the driver your flight number so the pickup can adjust [VERIFY: flight-tracking policy].
                </p>
                <p><strong>How it works, step by step</strong></p>
                <ol>
                  <li>Book online with flight number, arrival date, passenger count, and luggage count.</li>
                  <li>Receive confirmation with the meeting point and driver contact details [VERIFY: meeting-point process].</li>
                  <li>Clear immigration and customs; message the driver if you're delayed [VERIFY: contact method].</li>
                  <li>Meet at the arrivals meeting point, load luggage, ride to your hotel.</li>
                  <li>Fare is fixed as quoted; confirm payment method at booking [VERIFY: payment options].</li>
                </ol>
                <p className="my-8">
                  <AffiliateLink slug="TODO_airport-taxi" className="btn-outline">
                    Check Airport Taxi →
                  </AffiliateLink>
                </p>

                <div className="section-eyebrow"><span>Section 08 · FAQ</span></div>
                <h2 id="section-faq" className="scroll-mt-20">FAQ</h2>
                <div className="faq-block space-y-8">
                  <div>
                    <h3>Do I need both an eSIM and a Pocket WiFi?</h3>
                    <p>
                      Usually no. Solo or couple with eSIM-capable phones: eSIM. Family or several devices: Pocket WiFi. Some families carry one of each so the group can split up for an afternoon.
                    </p>
                  </div>
                  <div>
                    <h3>What if my eSIM doesn't connect when I land?</h3>
                    <p>
                      Japan Wireless describes guided troubleshooting and a free Pocket WiFi fallback if it still won't connect [VERIFY: still offered]. Before you fly, the best prevention is installing the profile on home WiFi and confirming your phone is unlocked.
                    </p>
                  </div>
                  <div>
                    <h3>Can I buy Shinkansen tickets on the day?</h3>
                    <p>
                      Often yes, but on holiday weekends reserved seats — especially adjacent ones — can be gone, and window queues run 20–40 minutes at peak. If your dates are fixed and you're traveling as a group, booking ahead removes the gamble.
                    </p>
                  </div>
                  <div>
                    <h3>Is an overnight bus really worth it?</h3>
                    <p>
                      It saves a fare and a hotel night. It costs sleep quality. If the next morning is a big sightseeing day, many travelers prefer the train and a proper bed.
                    </p>
                  </div>
                  <div>
                    <h3>How early should I schedule the airport pickup after landing?</h3>
                    <p>
                      Around 60–90 minutes after scheduled landing for international flights, and give the driver your flight number so they can adjust [VERIFY: provider policy].
                    </p>
                  </div>
                  <div>
                    <h3>Does Tanuki Tabi Travel book any of this for me?</h3>
                    <p>
                      No. These are third-party tools you book directly. We shape the private sightseeing days; the logistics around them stay in your hands so you can change them freely.
                    </p>
                  </div>
                </div>

                <div className="section-eyebrow"><span>Section 09 · Closing</span></div>
                <h2 id="section-closing" className="scroll-mt-20">Closing note</h2>
                <p>
                  These are optional third-party tools for <strong>your own</strong> planning. Tanuki Tabi Travel does not arrange transport or lodging on your behalf — and that's deliberate: your flights, trains, and hotels should be yours to change without going through us. Prefer to lock in the memorable days first and fill in logistics afterward? Start with the private tour inquiry at the{" "}
                  <a href="#section-01" className="text-accent hover:underline">top of this page</a>.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Logistics;
