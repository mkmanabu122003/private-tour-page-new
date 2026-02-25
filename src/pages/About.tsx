import { Link } from "react-router-dom";
import { Award, Globe, Briefcase, Heart, MapPin, Languages, Shield, Users, BookOpen, Utensils, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";
import heroImage from "@/assets/hero-asakusa.jpg";

const stats = [
  { label: "Tours Completed", value: "516+" },
  { label: "Average Rating", value: "4.86★" },
  { label: "Languages", value: "3" },
  { label: "Tour Areas", value: "5+" },
];

const credentials = [
  {
    icon: Shield,
    title: "Government-Licensed Guide",
    description: "National Government Licensed Guide Interpreter (全国通訳案内士) — the highest professional guiding certification in Japan, requiring extensive knowledge of history, culture, geography, and fluency in English.",
  },
  {
    icon: Globe,
    title: "International Experience",
    description: "Extensive overseas work experience bringing global perspective and cross-cultural communication skills to every tour.",
  },
  {
    icon: Briefcase,
    title: "Business Background",
    description: "Professional business experience ensures smooth, well-organized tours with excellent communication and attention to detail.",
  },
  {
    icon: Languages,
    title: "Multilingual",
    description: "Fluent in Japanese, English, and Spanish for seamless communication with guests worldwide.",
  },
];

const whyChooseGuide = [
  {
    icon: Users,
    title: "Your Pace, Your Way",
    description: "Private tours mean no waiting for strangers. Walk at your speed, linger where you're curious, and skip what doesn't interest you.",
  },
  {
    icon: Shield,
    title: "Certified Quality",
    description: "A nationally licensed guide has passed rigorous government exams covering Japanese history, geography, culture, and language proficiency.",
  },
  {
    icon: BookOpen,
    title: "Beyond the Guidebook",
    description: "Discover hidden temples, local-only shops, and neighborhood stories that you won't find in any travel app or blog.",
  },
  {
    icon: Utensils,
    title: "Full Travel Support",
    description: "From restaurant reservations and train navigation to cultural etiquette tips — your guide handles the details so you can enjoy the journey.",
  },
];

const platforms = [
  {
    name: "GuruWalk",
    url: "https://www.guruwalk.com/",
    description: "Free walking tour platform",
  },
  {
    name: "GetYourGuide",
    url: "https://www.getyourguide.com/",
    description: "Global tours and activities",
  },
  {
    name: "GoWithGuide",
    url: "https://www.gowithguide.com/",
    description: "Licensed private guide booking",
  },
];

const allReviews = [
  {
    text: "We did 3 tours in Tokyo and Manabu's was by far the most informative and engaging. He was very clear in his delivery and offered interesting cultural insights as sidebars to each venue we visited. Highly recommended!",
    author: "Couple visiting Tokyo",
  },
  {
    text: "Manabu's tour was one of the best I've been on — he is professional, kind, very knowledgeable and an awesome story-teller. His route is well-planned and offers fun experiences. You can tell he is a full-time tour guide because of the effort he puts in.",
    author: "Solo traveler",
  },
  {
    text: "This was an excellent tour. Manabu was entertaining, charismatic and knowledgeable. All places visited were awesome and he provided very interesting tips. A great start to our Japan trip.",
    author: "First-time visitors to Japan",
  },
  {
    text: "Manabu was simply amazing! He speaks a very good level of English, so he's very clear in the explanations. He shared interesting insights about Japanese culture that I really appreciated. The tour points of interest are the ones to be seen and with him I was able to notice things I'd have never understood.",
    author: "Traveler from Italy",
  },
  {
    text: "We are from Europe and enjoyed a lot of walking tours. Here in Japan they are not so spread yet, but Manabu's is one of the best we ever had! Perfect length and rhythm, with great tips about food, local culture, and curiosities about Asakusa. Extremely recommended.",
    author: "Couple from Europe",
  },
  {
    text: "Our family did a walking tour with Manabu and it was a fantastic experience. The route is very child friendly, mostly on flat ground and suitable for prams. We have learned a lot about Japan and the Japanese people. He made sure he gave his attention to everyone in the group. Highly recommended.",
    author: "Family group",
  },
  {
    text: "As a group with a wheelchair user in our party, he really made sure to take the time to make sure we had got back to the group, especially in areas like Senso-ji which was very crowded. As a result, we felt included and that we didn't miss out on any information either! 10/10",
    author: "Group from the UK",
  },
  {
    text: "This is my second tour with Manabu so that's saying something! Really enjoyed his engaging, cultural anecdotes. He was very professional and easy to listen to.",
    author: "Repeat visitor",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Your Guide Manabu | Licensed Tokyo Tour Guide | Tanuki Tabi Travel"
        description="Meet Manabu, a government-licensed tour guide (全国通訳案内士) with 516+ tours and 4.86★ rating. Discover why travelers trust Tanuki Tabi Travel."
        canonicalPath="/about"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-secondary/30">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label text-accent mb-3">About Your Guide</p>
              <h1 className="heading-display text-foreground">
                Meet Your Guide: <span className="text-accent">Manabu</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                I'm Manabu, a National Government Licensed Guide Interpreter
                (全国通訳案内士) based in Tokyo. This is a national certification
                issued by the Japanese government, requiring extensive knowledge
                of Japanese history, culture, geography, and fluency in English.
                Only certified guides are legally recognized as professional
                tour guides in Japan.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Born in Kanazawa, raised in Kyoto, and now living in Tokyo — I
                bring a unique perspective from Japan's most culturally rich
                regions. With over 516 tours completed and a 4.86-star average
                rating, I'm passionate about sharing Japan's stories with
                travelers from around the world.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="text-2xl font-serif font-semibold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={guidePortrait}
                  alt="Manabu, government-licensed Tokyo private tour guide"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Guiding Philosophy */}
      <section className="py-20">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-label text-accent mb-3">My Approach</p>
            <h2 className="heading-section text-foreground">
              How I Guide
            </h2>
            <div className="mt-8 text-muted-foreground leading-relaxed space-y-4 text-left">
              <p>
                My guiding philosophy is built on one principle: <strong className="text-foreground">every traveler
                is different</strong>. In the first 30 minutes of every tour, I pay close
                attention to what excites you — whether it's architecture, street
                food, historical trivia, or photography — and I adapt the route
                in real time.
              </p>
              <p>
                I don't deliver scripted monologues. My tours are conversations.
                I'll share stories and cultural context, but I also want to hear
                your questions, your observations, and what surprises you about
                Japan. That back-and-forth is what makes the experience memorable.
              </p>
              <p>
                My years in business gave me the opportunity to travel and work with
                people from diverse backgrounds. I noticed how visitors to Japan often
                missed the context and meaning behind what they were seeing — the "why"
                that makes experiences truly meaningful.
              </p>
              <p className="font-medium text-foreground">
                Today, nothing brings me more joy than seeing the moment of understanding
                in a guest's eyes — when a temple isn't just old stones, but a living
                connection to centuries of belief and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose a Licensed Private Guide */}
      <section className="py-20 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Advantages</p>
            <h2 className="heading-section text-foreground">
              Why Choose a Licensed Private Guide?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseGuide.map((item) => (
              <div key={item.title} className="flex gap-5 p-6 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Credentials</p>
            <h2 className="heading-section text-foreground">
              Professional Background
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((item) => (
              <div key={item.title} className="flex gap-5 p-6 bg-background rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where I've Been Featured / My Platforms */}
      <section className="py-20">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Featured On</p>
            <h2 className="heading-section text-foreground">
              Where You Can Find Me
            </h2>
            <p className="mt-4 text-body">
              I'm active on multiple booking platforms. You can read reviews and
              book tours on any of these:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-card border border-border rounded-lg text-center hover:border-accent/50 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {platform.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Areas */}
      <section className="py-20 bg-secondary/30">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={heroImage}
                  alt="Historic Asakusa district in Tokyo with Senso-ji temple and traditional architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-label text-accent mb-3">Expertise</p>
              <h2 className="heading-section text-foreground">
                Areas I Know Best
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Each neighborhood in Tokyo has its own character and stories.
                Here are the areas where I've developed deep knowledge and local
                connections:
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { area: "Asakusa & Sumida", link: "/tours/asakusa" },
                  { area: "Ueno & Yanaka", link: "/tours/yanaka" },
                  { area: "Tsukiji & Ginza", link: "/tours/tsukiji-ginza" },
                  { area: "Shibuya & Harajuku", link: "/tours/shibuya-harajuku" },
                  { area: "Imperial Palace & Marunouchi", link: "/tours/imperial-palace" },
                ].map((item) => (
                  <Link
                    key={item.area}
                    to={item.link}
                    className="flex items-center gap-3 group"
                  >
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-foreground group-hover:text-accent transition-colors">
                      {item.area}
                    </span>
                  </Link>
                ))}
              </div>

              <Link to="/tours" className="btn-accent mt-8 inline-flex">
                Explore Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Guest Reviews</p>
            <h2 className="heading-section text-foreground">What Travelers Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {allReviews.map((review) => (
              <blockquote
                key={review.author}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  "{review.text}"
                </p>
                <footer>
                  <cite className="not-italic font-medium text-foreground text-sm">
                    — {review.author}
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            <a
              href="https://www.guruwalk.com/guruwalkers/manabu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              500+ five-star reviews on GuruWalk →
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 text-accent" />
          <h2 className="heading-section">Let's Explore Tokyo Together</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            I look forward to sharing my favorite places and the stories that
            make Tokyo such a special city. Let's create memories together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours" className="btn-accent">
              Browse Tours
            </Link>
            <Link to="/tours/custom" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">
              Book a Custom Tour
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tanuki Tabi Travel",
            "url": "https://tanuki-tabi-travel.com",
            "review": allReviews.map((r) => ({
              "@type": "Review",
              "reviewBody": r.text,
              "author": { "@type": "Person", "name": r.author },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
              },
            })),
          }),
        }}
      />
    </Layout>
  );
};

export default About;
