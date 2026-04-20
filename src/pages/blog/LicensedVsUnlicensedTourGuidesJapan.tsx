import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { RelatedTourCards } from "@/components/blog/RelatedTourCards";
import { QuickAnswer } from "@/components/blog/QuickAnswer";

const LicensedVsUnlicensedTourGuidesJapan = () => {
  return (
    <Layout>
      <SEO
        title="Licensed vs Unlicensed Tour Guides in Japan (2026): The One Thing Most Travelers Don't Know"
        description="Japan has a national exam for tour guides. Since 2018 the license is no longer legally required — but the difference between a licensed guide and an unlicensed one is larger than most travelers realize."
        canonicalPath="/blog/licensed-vs-unlicensed-tour-guides-japan"
        hreflang={[
          { lang: "en", path: "/blog/licensed-vs-unlicensed-tour-guides-japan" },
          { lang: "es", path: "/es/blog/guia-licencia-oficial-japon" },
          { lang: "x-default", path: "/blog/licensed-vs-unlicensed-tour-guides-japan" },
        ]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: "Licensed vs Unlicensed Tour Guides in Japan" },
        ]}
      />

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tour-photos/tour-photo-1.webp"
          alt="A licensed tour guide leading a private tour in Tokyo"
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
            <p className="text-label text-accent mb-3">Helpful Guides</p>
            <h1 className="heading-display text-foreground">
              Licensed vs Unlicensed Tour Guides in Japan: The One Thing Most Travelers Don't Know (2026)
            </h1>
            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Manabu, Licensed Tour Guide
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                April 20, 2026
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Written by Manabu, a National Government Licensed Guide Interpreter (全国通訳案内士) registered in Tokyo.
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
              answer="Japan has a single national license for tour guides — 全国通訳案内士 (National Government Licensed Guide Interpreter) — run by the government with a ~10% pass rate. Since January 2018 the license is no longer legally required to guide paid tours, but only licensed guides may call themselves 'licensed / government-certified / national' guides under the law, and the verified breadth of knowledge behind the license is real."
              hook="Here's what the license actually covers, what changed in 2018, and the specific situations where choosing a licensed guide changes your day — plus the 3 direct questions that instantly tell you whether a guide is licensed or just describing themselves as one."
            />

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              There's something most travelers don't know before coming to Japan: there is a national exam to become a tour guide. Not a two-day online course. Not a certificate you buy. A government exam with historically low pass rates, covering Japanese history, geography, laws, culture, and advanced foreign-language fluency. I passed it. And in this article I want to explain exactly what it means to be a <strong className="text-foreground">licensed tour guide in Japan</strong>, why it should matter to you as a traveler, and be completely honest about how this industry actually works.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Think of it like a board-certified doctor: you can see someone without the credential, but would you want to? With tour guides in Japan the situation is similar, except most tourists don't even know the distinction exists. I'm going to change that.
            </p>

            {/* What the license is */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              What is the official tour guide license in Japan?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The license is formally called <strong className="text-foreground">全国通訳案内士 (Zenkoku Tsūyaku Annai-shi)</strong> — "National Government Licensed Guide Interpreter" in the official English translation used by the Japan National Tourism Organization (JNTO) and the Japan Tourism Agency. That "Zenkoku" (national) prefix was added with the 2018 legal reform; before that it was simply Tsūyaku Annai-shi. It is the only nationally recognized credential for tour guides in Japan.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              The national exam
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The exam is administered by the JNTO under the oversight of the Ministry of Land, Infrastructure, Transport and Tourism (MLIT). It has two stages: a written exam and an oral exam. The written portion covers Japanese history (from the Jōmon era to the present), national geography, the tourism industry, tourism-related laws, and general Japanese culture. All of that on top of demonstrating advanced fluency in the foreign language you're testing in (in my case, English and Spanish).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The oral stage is a live interview where examiners assess your ability to explain aspects of Japanese culture to foreign visitors clearly, accurately, and naturally. It's not enough to know the facts — you have to be able to communicate them in a way a traveler will actually understand and enjoy.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              What it takes to pass (real numbers)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              According to the JNTO's official figures for the 2024 exam, the overall pass rate was <strong className="text-foreground">10.0%</strong> — Spanish 12.1%, English approximately 10.0%. For some languages it has dipped below 10%. Serious preparation typically takes between one and three years of dedicated study. It is not something you pass casually. Most candidates are Japanese nationals with excellent foreign-language ability, foreigners with years of residency in Japan, or both. Many sit the exam multiple times before passing.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              How many licensed guides are there in Japan?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              According to the Japan Tourism Agency's published figures, as of April 1, 2025 there were approximately <strong className="text-foreground">27,950 licensed guides registered nationwide</strong> (counting registrations by language — a single person can be registered in more than one language). That number is misleading, though: the vast majority are registered for English. For Spanish, the number is significantly smaller — we're talking a few hundred nationwide. If you specifically need a <strong className="text-foreground">licensed guide in Japan</strong> who speaks Spanish, the supply is genuinely limited. That's not marketing. That's the market.
            </p>

            {/* What changed in 2018 */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              What changed in 2018 (and what it means for you)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'll be direct: <strong className="text-foreground">since January 4, 2018, it is no longer legally required to hold a license to guide paid tours in Japan.</strong> The revised Licensed Guide Interpreter Act (通訳案内士法) changed the license from an "exclusive-work" credential (業務独占) to a "name-only" credential (名称独占). This is the single most important legal fact travelers should know — and it's one of the things the industry tends not to advertise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What this means in practice: anyone can now offer themselves as a paid tour guide in Japan. A university student, an expatriate who has been here six months, someone who just knows their neighborhood. And some of them are genuinely good at it. But the legal framework still gives the license one thing: <strong className="text-foreground">only licensed guides may use the titles "National Government Licensed Guide Interpreter," "Regional Licensed Guide Interpreter," or any similar "government / certified / national" formulations</strong>. Misusing those titles is a violation of the revised Act. So when a guide describes themselves as "licensed," "government-certified," or "national," that's a claim you can verify.
            </p>

            {/* Licensed vs unlicensed */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Licensed vs unlicensed guide: the real differences
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Government-verified knowledge
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A licensed guide has demonstrated, in front of government examiners, a broad and verified knowledge of the country's history, geography, culture, and laws. This is not an opinion; it is a documented and registered fact. When I explain the difference between a Shinto shrine and a Buddhist temple, or why a tea ceremony is structured the way it is, or how the han system worked during the Edo period, I'm not repeating what I read on Wikipedia the night before. It's knowledge that has been assessed and certified.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Legal accountability and insurance
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Licensed guides are registered with the prefectural authorities where they operate. That means there's a framework for accountability: if something goes wrong, there's a record, there's an entity to turn to. Many licensed guides also carry professional liability insurance. An unlicensed guide operating informally has none of these protections, for themselves or for you.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              What a licensed guide can do that an unlicensed one often can't
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Even though the law no longer requires the license for guiding, in practice there are real operational differences. Some historic sites, temples, and museums give priority or exclusive access to licensed guides. High-end hotels and international agencies frequently only work with licensed guides. And when incidents happen (a traveler falls ill, a transport problem, an emergency), the training that's part of the licensing process makes a real difference in how you respond.
            </p>

            {/* What about SGG volunteers */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              A note on volunteer guides (SGG clubs)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You'll sometimes see Japanese volunteers offering free guided walks under the banner of Systematized Goodwill Guide (SGG) clubs. These started around the 1964 Tokyo Olympics and are coordinated under the JNTO. They are genuinely free (you cover admissions and any transport), they are run by enthusiastic locals with real interest in sharing their culture, and they are explicitly <strong className="text-foreground">not</strong> the same thing as licensed guides. Many SGG volunteers have never sat the national exam; some have. The value proposition is totally different: SGG is "meet a friendly local for the afternoon." Licensed private guiding is "work with a professional whose knowledge base has been certified by the national government."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Both have their place. But don't conflate them. A free SGG walk is a lovely way to see a neighborhood at surface level. It is not a replacement for a professional tour when you want depth, customization, or reliability for a complex day trip.
            </p>

            {/* Why it should matter */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Why should this matter to you as a traveler?
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              The difference in the tour experience
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The most tangible difference is depth. An unlicensed guide can take you from point A to point B and tell you basic facts. A licensed guide can answer your unexpected questions, connect what you're seeing to a broader historical context, and adapt to your interests in real time. If mid-tour in Asakusa you ask me about the relationship between Buddhism and Shinto in Japan, I can give you a nuanced twenty-minute explanation — not because I memorized an answer, but because I understand the subject at the depth the exam required.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Real moments: what my clients didn't expect
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A couple from Barcelona hired me for a day in Tokyo. Halfway through, the husband casually mentioned he was an architect. I shifted the focus entirely: took them to the Nakagin Capsule Tower site, explained the Metabolist movement and its influence on European architecture, and ended at Tadao Ando's building in Omotesando discussing how reinforced concrete can carry spirituality. They told me it was the best day of their trip. That kind of adaptation doesn't come from a script; it comes from years of study and preparation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Another family from Mexico booked me for a Tsukiji food tour. Their 8-year-old daughter was allergic to shellfish. Instead of canceling or improvising, I rerouted the whole tour around grilled meat, tamagoyaki, seasonal fruit, and traditional sweets — keeping her safely fed while the rest of the family could still enjoy seafood at separate stalls. Handling situations like this is part of what training and experience give you.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Safety and trust
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Japan is one of the safest countries in the world, so talking about safety can feel unnecessary. But "safety" isn't just avoiding crime. It's knowing what to do if there's an earthquake during the tour. It's knowing which hospitals are nearby and being able to communicate with medical staff. It's understanding the warning signs on hiking trails. It's knowing that certain foods can trigger allergic reactions visitors don't anticipate. A licensed guide has trained on all of these areas.
            </p>

            {/* How to verify */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              How to verify whether a guide is licensed
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              The official badge
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every licensed guide is issued a government badge with a unique registration number and is expected to have it available during tours. If you don't see one, ask. A legitimate licensed guide won't have a problem showing it — most are proud to.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              The government registry
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Licensed guides are registered in the databases of the prefectures where they operate. You can verify a guide's registration by contacting the prefecture's tourism office. JNTO also maintains directories of registered guides. It's not a complicated process, and any licensed guide should help you verify if you ask.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              The 3 questions that instantly reveal the answer
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're evaluating guides, these direct questions make the distinction clear:
            </p>
            <ol className="space-y-3 mb-8 list-decimal list-inside">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">"Do you hold the Zenkoku Tsūyaku Annai-shi (全国通訳案内士) license?"</strong> This is the exact legal name. Licensed guides answer yes without hesitation.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">"Can you share your registration number and the prefecture you're registered in?"</strong> Licensed guides have both. It's a specific number tied to a specific prefecture.
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">"Do you carry professional liability insurance for tours?"</strong> Most licensed guides do; it's standard. Many unlicensed operators don't.
              </li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A guide who gets defensive or redirects the conversation when asked these things is telling you something.
            </p>

            {/* My experience */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              My own experience getting the license
            </h2>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              Why I decided to take the exam
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I had been guiding informally for years when I realized I wanted to do this seriously — as a profession, not a side activity. And if I was going to ask someone to trust their experience in Japan to my hands, I felt I should back that trust with something more than my word. I wanted to be able to say "I hold the national license" and have that mean something verifiable. Not every guide thinks this way, and I respect the different perspectives, but for me it mattered.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              The hardest part of the process
              </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Without question, the Japanese history section. Not from lack of interest — I love the subject — but because of the depth and breadth the exam requires. You have to know everything from the details of the 7th-century Taika Reforms to postwar economic policy, the different schools of Buddhism that developed in Japan and how they influenced architecture, art, and daily life in each period. I studied for two years with a fairly disciplined method: three hours on weekday evenings plus weekends. There were moments I thought about quitting, especially after failing on my first attempt.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-8 mb-4">
              What changed after I got it
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Professionally, doors opened that had been closed. Luxury hotels, international agencies, corporate clients — many require or prefer licensed guides. But the bigger change was personal: preparing for the exam forced me to study aspects of Japan I would never have explored on my own. Today I can talk with knowledge about Japanese ceramics, the differences between Kyoto and Kanazawa gardens, the history of sake, the evolution of the rail system. All of that makes every tour richer — not just for my clients but for me.
            </p>

            {/* Related */}
            <h2 className="heading-section text-foreground mt-12 mb-6">
              Already decided you want a guide?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              If you're past the "should I hire a guide" question and want to think about how to choose, see my related articles:{" "}
              <Link to="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" className="text-accent hover:underline font-medium">
                Is It Worth Hiring a Tour Guide in Tokyo?
              </Link>{" "}
              covers the "should I" case, and{" "}
              <Link to="/blog/tokyo-private-tour-guide-cost" className="text-accent hover:underline font-medium">
                Tokyo Private Tour Guide Cost
              </Link>{" "}
              breaks down what typical pricing actually looks like.
            </p>

            {/* CTA */}
            <div className="bg-secondary/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Looking for a licensed English-speaking guide in Japan?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Manabu, a National Government Licensed Guide Interpreter registered in Tokyo. I offer private tours in English (and Spanish) across Tokyo and nearby areas. Every tour is built around your interests, your pace, and what you actually want to see — no big groups, no generic routes. Just you, your party, and a guide whose knowledge of this country has been tested and certified.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tours" className="btn-accent">
                  View Available Tours
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Directly
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <h2 className="heading-section text-foreground mb-8">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Is a license legally required to be a tour guide in Japan?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Since January 2018, no. Before that date, the Tsūyaku Annai-shi license was legally required to guide foreign tourists for a fee. The law was reformed to expand the supply of guides in response to tourism growth. However, the license still exists as the highest credential and remains the only nationally recognized credential issued by the Japanese government.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">How many languages does a licensed guide speak?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The license is obtained for a specific language, but many guides test in more than one. The exam is available in ten languages, including English, Spanish, French, Chinese, Korean, and Portuguese. I'm licensed in both English and Spanish.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Does a licensed guide cost more?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Generally yes, but the difference is smaller than you might think. A licensed guide typically charges 10–30% more than an unlicensed guide for a comparable tour. The difference is justified by depth of knowledge, professional training, insurance, and peace of mind. It's like the difference between a business hotel and a boutique hotel — both give you a bed, but the experience is different.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">How do I find a licensed English-speaking guide in Japan?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The most direct options are consulting the JNTO directory, or contacting tour operators that specifically state they work with licensed guides. If you're reading this, you've already found one. You can see our{" "}
                    <Link to="/tours" className="text-accent hover:underline">
                      available tours here
                    </Link>
                    .
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Can I travel Japan without a guide?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Absolutely. Japan is one of the easiest and safest countries to travel independently. Public transport is excellent, signage increasingly accommodates multiple languages, and people are extraordinarily helpful. A guide is not a necessity — it's a choice that enriches the experience. The question is not whether you can travel without a guide, but whether you want to understand Japan at a level deeper than an audio guide or app can offer. If the answer is yes, a{" "}
                    <Link to="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" className="text-accent hover:underline">
                      licensed guide makes a real difference
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>

      <RelatedTourCards tourIds={["custom", "asakusa", "tsukiji-ginza"]} showViewAll />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Licensed vs Unlicensed Tour Guides in Japan: The One Thing Most Travelers Don't Know (2026)",
            description:
              "Japan has a national exam for tour guides. Since 2018 the license is no longer legally required — but the difference between a licensed guide and an unlicensed one is larger than most travelers realize.",
            author: {
              "@type": "Person",
              name: "Manabu",
              jobTitle: "National Government Licensed Guide Interpreter",
              url: "https://tanuki-tabi-travel.com/about",
            },
            datePublished: "2026-04-20",
            dateModified: "2026-04-20",
            publisher: {
              "@type": "Organization",
              name: "Tanuki Tabi Travel",
              url: "https://tanuki-tabi-travel.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://tanuki-tabi-travel.com/blog/licensed-vs-unlicensed-tour-guides-japan",
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
                name: "Is a license legally required to be a tour guide in Japan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Since January 2018, no. Before that date, the Tsūyaku Annai-shi license was legally required to guide foreign tourists for a fee. The license still exists as the highest credential and the only nationally recognized credential issued by the Japanese government.",
                },
              },
              {
                "@type": "Question",
                name: "How do I verify whether a tour guide in Japan is licensed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ask for their Zenkoku Tsūyaku Annai-shi (全国通訳案内士) registration number and the prefecture they're registered in. Licensed guides also carry a government-issued badge. You can cross-check with the prefecture's tourism office or JNTO directories.",
                },
              },
              {
                "@type": "Question",
                name: "How many licensed tour guides are there in Japan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "According to the Japan Tourism Agency, approximately 27,950 licensed guides were registered nationwide as of April 1, 2025 (counting registrations by language). The majority are registered for English; Spanish and other languages have significantly fewer.",
                },
              },
            ],
          }),
        }}
      />

      {/*
        FACT-CHECK REPORT
        Generated: 2026-04-20
        Sources verified via web search on 2026-04-20 (Japan Tourism Agency, JNTO).

        VERIFIED (2026-04-20):
        - 2018 reform: enforced 2018-01-04. Changed from "exclusive-work" (業務独占)
          to "name-only" (名称独占). Paid unlicensed guiding legalized.
        - Name change: 通訳案内士 → 全国通訳案内士 (Zenkoku Tsūyaku Annai-shi) in 2018.
        - 2024 exam pass rates: overall 10.0%, Spanish 12.1%, English ~10.0%.
        - Registered guides: 27,950 total as of 2025-04-01 (Japan Tourism Agency).
        - Official English term: "National Government Licensed Guide Interpreter"
          (JNTO and Tourism Agency usage).
        - Exam structure: 5 written subjects + oral. Administered by JNTO under MLIT.
        - SGG (Systematized Goodwill Guide): founded around 1964 Tokyo Olympics,
          coordinated under JNTO.
        - Name protection: under revised Act, only licensed guides may use titles
          like 全国通訳案内士, 認定ガイド (certified guide), national / government /
          prefectural guide. Violations subject to penalties.

        DELIBERATELY ABSTRACTED:
        - Language-by-language registered guide counts (English vs Spanish specifics)
          not publicly broken down in verifiable form — article says "majority English,
          a few hundred Spanish".
        - Specific penalty amounts for title misuse not quoted — article says
          "subject to penalties" without numeric detail.
        - No unified individual "approved guide" mark exists beyond the government
          badge; article mentions the badge only.
      */}
    </Layout>
  );
};

export default LicensedVsUnlicensedTourGuidesJapan;
