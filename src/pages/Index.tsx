import { Link } from "react-router-dom";
import { ArrowRight, Clock3, MessageSquare, ShieldCheck, Sparkles, Star, UsersRound, MapPin, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { trackBookNowClick } from "@/lib/ga4";
import { TourCard } from "@/components/tours/TourCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Hero image: group-photo.jpg from public/images/tour-photos/
const heroGroupPhoto = "/images/tour-photos/group-photo.webp";
import tourUeno from "@/assets/tour-ueno.webp";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";
import imperialPalace from "@/assets/imperial-palace.webp";

const tours = [
  {
    id: "asakusa",
    title: "Asakusa Walking Tour",
    description: "Discover the heart of old Tokyo. Visit Senso-ji Temple, explore traditional shops, and taste local street food.",
    duration: "3 hours",
    price: "¥45,000",
    difficulty: "Easy",
    image: "/images/tours/asakusa-kaminarimon-gate.webp",
  },
  {
    id: "yanaka",
    title: "Ueno & Yanaka Discovery",
    description: "Experience the nostalgic charm of old Tokyo neighborhoods, traditional temples, and hidden local spots.",
    duration: "4 hours",
    price: "¥50,000",
    difficulty: "Easy",
    image: tourUeno,
  },
  {
    id: "shibuya-harajuku",
    title: "Shibuya & Harajuku Tour",
    description: "Explore Tokyo's youth culture hub. From the famous Shibuya Crossing to trendy Harajuku streets and Meiji Shrine.",
    duration: "3.5 hours",
    price: "¥50,000",
    difficulty: "Easy",
    image: "/images/tours/shibuya-crossing-tokyo.webp",
  },
  {
    id: "tsukiji-ginza",
    title: "Tsukiji & Ginza Tour",
    description: "Experience Tokyo's culinary delights at Tsukiji Outer Market and stroll through the upscale Ginza shopping district.",
    duration: "3 hours",
    price: "¥45,000",
    difficulty: "Easy",
    image: "/images/tours/tsukiji-outer-market.webp",
  },
  {
    id: "imperial-palace",
    title: "Imperial Palace & Marunouchi",
    description: "Discover Tokyo's historical heart and modern business district. Walk through the East Gardens and see the Imperial Palace.",
    duration: "2.5 hours",
    price: "¥40,000",
    difficulty: "Easy",
    image: imperialPalace,
  },
  {
    id: "kamakura-day-trip",
    title: "Kamakura Day Trip",
    description: "Explore Kamakura's Great Buddha, ancient temples, and coastal charm on a private day trip from Tokyo.",
    duration: "7-8 hours",
    price: "¥70,000",
    difficulty: "Easy-Moderate",
    image: "/images/tours/kamakura-great-buddha.webp",
  },
  {
    id: "hakone-day-trip",
    title: "Hakone Day Trip",
    description: "See Mt. Fuji, cruise Lake Ashi, and experience hot spring culture on a private guided day trip from Tokyo.",
    duration: "8-10 hours",
    price: "¥80,000",
    difficulty: "Easy",
    image: "/images/tours/hakone-lake-ashi-fuji.webp",
  },
  {
    id: "nikko-day-trip",
    title: "Nikko Day Trip",
    description: "Visit UNESCO World Heritage Toshogu Shrine, stunning waterfalls, and mountain scenery on a day trip from Tokyo.",
    duration: "9-10 hours",
    price: "¥80,000",
    difficulty: "Moderate",
    image: "/images/tours/nikko-toshogu.webp",
  },
  {
    id: "custom",
    title: "Custom Private Tour",
    description: "Create your perfect Tokyo experience. Tell me your interests and I'll design a personalized itinerary just for you.",
    duration: "Flexible",
    price: "Tailored to your trip",
    difficulty: "Customizable",
    // TODO: replace with custom tour image (e.g. a map, planning scene, or collage)
    image: "/images/tour-photos/group-photo.webp",
  },
];

const testimonials = [
  {
    text: "We did 3 tours in Tokyo and Manabu's was by far the most informative and engaging. He was very clear in his delivery and offered interesting cultural insights as sidebars to each venue we visited. Highly recommended!",
    author: "Couple visiting Tokyo",
    rating: 5,
  },
  {
    text: "Manabu's tour was one of the best I've been on. He is professional, kind, very knowledgeable and an awesome story-teller. His route is well-planned and offers fun experiences. You can tell he is a full-time tour guide because of the effort he puts in.",
    author: "Solo traveler",
    rating: 5,
  },
  {
    text: "This was an excellent tour. Manabu was entertaining, charismatic and knowledgeable. All places visited were awesome and he provided very interesting tips. A great start to our Japan trip.",
    author: "First-time visitors to Japan",
    rating: 5,
  },
];

const heroTrustSignals = [
  {
    icon: ShieldCheck,
    label: "Licensed",
    value: "Government certified",
  },
  {
    icon: Sparkles,
    label: "4.86★",
    value: "Average rating",
  },
  {
    icon: UsersRound,
    label: "100%",
    value: "Private, never shared",
  },
  {
    icon: Clock3,
    label: "24h",
    value: "Typical reply time",
  },
];

const tourMatchCards = [
  {
    title: "First Time in Tokyo",
    description: "Start with Asakusa, temples, old streets, and essential cultural context.",
    image: "/images/tours/asakusa-kaminarimon-gate.webp",
    href: "/tours/asakusa",
  },
  {
    title: "Food & Markets",
    description: "Taste local flavors around Tsukiji, Ginza, and traditional food streets.",
    image: "/images/tours/tsukiji-outer-market.webp",
    href: "/tours/tsukiji-ginza",
  },
  {
    title: "Quiet Old Tokyo",
    description: "Slow down in Yanaka, Ueno, temples, and nostalgic neighborhoods.",
    image: "/images/blog/yanaka-ginza-shopping-street.webp",
    href: "/tours/yanaka",
  },
  {
    title: "Day Trips from Tokyo",
    description: "Explore Kamakura, Hakone, or Nikko with transport handled for you.",
    image: "/images/blog/hakone-fuji-comparison.webp",
    href: "/tours",
  },
];

// Custom thin-line gold SVG icons for the "How It Works" section
// (Plan A "Editorial Trust" idiom — Envelope / Itinerary scroll / Seal & ribbon)
const InquireIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 text-accent" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="10" y="18" width="44" height="30" rx="1.5" />
    <path d="M10 19 L32 36 L54 19" />
    <path d="M10 47 L24 32" strokeWidth="1.25" opacity="0.7" />
    <path d="M54 47 L40 32" strokeWidth="1.25" opacity="0.7" />
    <circle cx="46" cy="14" r="3" fill="currentColor" fillOpacity="0.55" strokeWidth="1.1" />
  </svg>
);

const PlanIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 text-accent" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="14" y="9" width="36" height="46" rx="1.5" />
    <line x1="20" y1="20" x2="44" y2="20" strokeWidth="1.4" />
    <line x1="20" y1="27" x2="44" y2="27" strokeWidth="1.4" />
    <line x1="20" y1="34" x2="36" y2="34" strokeWidth="1.4" />
    <line x1="20" y1="41" x2="40" y2="41" strokeWidth="1.4" />
    <circle cx="42" cy="50" r="5.5" fill="currentColor" fillOpacity="0.55" strokeWidth="1.6" />
    <path d="M39.2 50 L41.2 52 L45 47.5" stroke="#fffdf8" strokeWidth="1.75" />
  </svg>
);

const ConfirmIcon = () => (
  <svg viewBox="0 0 64 64" className="w-12 h-12 text-accent" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="32" cy="28" r="16" />
    <circle cx="32" cy="28" r="11" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M25 28 L30 33 L40 22" strokeWidth="2" />
    <path d="M22 42 L28 56 L32 50 L36 56 L42 42" fill="currentColor" fillOpacity="0.5" strokeWidth="1.4" />
  </svg>
);

const highlightStyle = { background: "linear-gradient(transparent 62%, #f4e5b6 62%)" };

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo Private Tour Guide | Custom Walking Tours | Tanuki Tabi Travel"
        description="Tokyo's licensed private tour guide with 500+ tours and 4.86★ rating. Custom walking tours for food, culture, history. Vegetarian & dietary needs welcome. Book direct."
        canonicalPath="/"
        hreflang={[
          { lang: "en", path: "/" },
          { lang: "es", path: "/es" },
          { lang: "x-default", path: "/" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[78vh] md:min-h-[82vh] flex items-center overflow-hidden">
        {/* Background image — clicking the visible area (around the headline)
            scrolls to Featured Tours, capturing dead-click intent observed in
            Clarity (PC dead click 17% in the 2026-04-26 window). The CTA
            buttons sit in a sibling <div> above this and remain unaffected. */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => {
            document
              .getElementById("featured-tours")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          role="button"
          tabIndex={0}
          aria-label="See featured tours"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              document
                .getElementById("featured-tours")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          <img
            src={heroGroupPhoto}
            alt="Group photo with guests during a private Tokyo walking tour"
            className="w-full h-full object-cover"
            fetchpriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.52)_42%,rgba(0,0,0,0.18)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        <div className="relative container-section py-20 md:py-24">
          <div className="max-w-[690px]">
            <h1
              className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl animate-fade-in-up"
              style={{
                animationDelay: "0.16s",
                textShadow: "0 1px 2px rgba(0,0,0,0.55), 0 2px 24px rgba(0,0,0,0.45)",
              }}
            >
              Tokyo Private Walking Tours{" "}
              <span className="text-[#f4e5b6]">with a Licensed Local Guide</span>
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg leading-[1.6] text-white/95 md:text-xl animate-fade-in-up"
              style={{
                animationDelay: "0.26s",
                textShadow: "0 1px 14px rgba(0,0,0,0.45)",
              }}
            >
              A private Tokyo tour shaped around your interests, pace, and questions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-in-up" style={{ animationDelay: "0.34s" }}>
              <Link to="/contact" data-cta="book-now-hero" className="btn-accent-lg" onClick={() => trackBookNowClick("Request Your Private Tour", "hero")}>
                Request Your Private Tour
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/tours" className="group inline-flex items-center justify-center rounded-full bg-[#fffdf8] px-7 py-4 text-base font-semibold text-[#171717] shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:bg-[#f8f7f1] hover:shadow-[0_6px_22px_rgba(0,0,0,0.30)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fffdf8]">
                See Tour Options
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-b border-border bg-card">
        <div className="container-section">
          <div
            className="grid gap-y-7 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border"
            aria-label="Trust signals"
          >
            {heroTrustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-5 lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-background border-[1.5px] border-border text-muted-foreground">
                  <signal.icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-serif text-[2rem] font-semibold leading-none tracking-tight text-foreground lining-nums">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {signal.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Meet Manabu — moved up to put the personal-brand differentiator
          right after Trust strip. Funnel: brand → credentials → person → voice
          (testimonials) → product. */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-accent mb-4">
                <span className="inline-block h-0.5 w-14 bg-accent" aria-hidden="true" />
                Your Guide
              </p>
              <h2 className="font-serif text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-foreground">
                Meet Manabu, Your Licensed Tokyo Guide
              </h2>
              <p className="mt-4 text-body">
                I'm Manabu, a National Government Licensed Guide Interpreter
                (全国通訳案内士) with over 500 tours completed and a 4.86-star
                average rating. Born in Kanazawa, raised in Kyoto, and now based
                in Tokyo, I bring insights from across Japan's rich cultural
                regions.
              </p>
              <p className="mt-4 text-body">
                My approach is simple: in the first 30 minutes, I learn what
                excites you, then{" "}
                <span className="font-semibold text-foreground" style={highlightStyle}>
                  I adapt the tour in real time.
                </span>{" "}
                It's not a lecture. It's a conversation.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-12 gap-y-5 py-5 border-y border-border">
                <div>
                  <p className="font-serif text-[2.25rem] font-semibold text-accent leading-none tracking-tight mb-1.5 lining-nums">500+</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-muted-foreground">Private tours</p>
                </div>
                <div>
                  <p className="font-serif text-[2.25rem] font-semibold text-accent leading-none tracking-tight mb-1.5">Native</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-muted-foreground">Japanese guide</p>
                </div>
                <div>
                  <p className="font-serif text-[2.25rem] font-semibold text-accent leading-none tracking-tight mb-1.5">EN · ES</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-muted-foreground">Languages</p>
                </div>
              </div>

              <Link to="/about" className="btn-outline mt-8 inline-flex">
                Learn more about your guide
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={guidePortrait}
                  alt="Manabu, government-licensed Tokyo tour guide, ready to lead a private walking tour"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — moved up from below Featured Tours so credibility
          via real guest words reaches users before the 30% scroll dropoff
          observed in Clarity. Replaces the Trust Signals stat row, whose
          content was already covered by the hero subtitle. */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="container-section">
          <div className="mb-12 max-w-3xl">
            <p className="inline-flex items-center gap-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-accent mb-4">
              <span className="inline-block h-0.5 w-14 bg-accent" aria-hidden="true" />
              Guest Reviews
            </p>
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-foreground">
              What Travelers Say
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <blockquote className="flex h-full flex-col overflow-hidden bg-background border border-border rounded-lg shadow-[var(--shadow-card)]">
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src="/images/tour-photos/asakusa-guest-selfie.webp"
                  alt="Manabu with guests during a private walking tour in Asakusa"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={900}
                  height={506}
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonials[0].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif leading-snug text-foreground">
                  "{testimonials[0].text}"
                </p>
                <footer className="mt-auto pt-6">
                  <div className="border-t border-border pt-5">
                  <cite className="not-italic font-medium text-foreground text-sm">
                    - {testimonials[0].author}
                  </cite>
                  </div>
                </footer>
              </div>
            </blockquote>

            <div className="grid gap-6">
              {testimonials.slice(1).map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="bg-background border border-border rounded-lg p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-[1.65] mb-4">
                  "{testimonial.text}"
                </p>
                <footer className="pt-4 border-t border-border">
                  <cite className="not-italic font-medium text-foreground text-sm">
                    - {testimonial.author}
                  </cite>
                </footer>
              </blockquote>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            500+ five-star reviews from travelers worldwide
          </p>
        </div>
      </section>

      {/* How It Works — moved up so the booking process appears before product
          discovery, removing friction ("is this complicated?") before users
          invest in evaluating tours. */}
      <section className="py-20 md:py-28 bg-accent/5 border-y border-accent/10">
        <div className="container-section">
          <div className="mb-14 max-w-3xl">
            <p className="inline-flex items-center gap-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-accent mb-4">
              <span className="inline-block h-0.5 w-14 bg-accent" aria-hidden="true" />
              Simple Booking
            </p>
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-foreground">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-accent/[0.06] border-[1.5px] border-accent/30 mx-auto mb-6 flex items-center justify-center shadow-[0_0_0_6px_rgba(201,168,76,0.05)]">
                <InquireIcon />
              </div>
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Step 1 · 2 min</p>
              <h3 className="font-serif text-2xl md:text-[1.625rem] font-semibold leading-[1.2] tracking-tight text-foreground mb-4">
                Send Your Request
              </h3>
              <p className="text-base text-muted-foreground leading-[1.65]">
                Tell me your dates and what excites you about Tokyo.{" "}
                <span className="font-semibold text-foreground" style={highlightStyle}>
                  Free to ask anything — no commitment.
                </span>
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-accent/[0.06] border-[1.5px] border-accent/30 mx-auto mb-6 flex items-center justify-center shadow-[0_0_0_6px_rgba(201,168,76,0.05)]">
                <PlanIcon />
              </div>
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Step 2 · Within 24h</p>
              <h3 className="font-serif text-2xl md:text-[1.625rem] font-semibold leading-[1.2] tracking-tight text-foreground mb-4">
                Get Your Custom Plan
              </h3>
              <p className="text-base text-muted-foreground leading-[1.65]">
                I reply within 24 hours with a personalized itinerary and quote. Adjust as much as you want before paying.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-accent/[0.06] border-[1.5px] border-accent/30 mx-auto mb-6 flex items-center justify-center shadow-[0_0_0_6px_rgba(201,168,76,0.05)]">
                <ConfirmIcon />
              </div>
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-3">Step 3 · Tour Day</p>
              <h3 className="font-serif text-2xl md:text-[1.625rem] font-semibold leading-[1.2] tracking-tight text-foreground mb-4">
                Confirm Your Day
              </h3>
              <p className="text-base text-muted-foreground leading-[1.65]">
                Approve the plan,{" "}
                <span className="font-semibold text-foreground" style={highlightStyle}>
                  pay only when you're ready,
                </span>{" "}
                then meet me in Tokyo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Finder */}
      <section className="py-16 md:py-20 bg-background border-b border-border">
        <div className="container-section">
          <div className="max-w-3xl mb-10">
            <p className="inline-flex items-center gap-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-accent mb-4">
              <span className="inline-block h-0.5 w-14 bg-accent" aria-hidden="true" />
              Start Here
            </p>
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-foreground">
              Which Tour Is Right for You?
            </h2>
            <p className="mt-5 text-[1.0625rem] md:text-[1.1875rem] leading-[1.6] text-muted-foreground max-w-2xl">
              Choose the kind of day you want first, then compare the full tour options below.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {tourMatchCards.map((card) => (
              <Link
                key={card.title}
                to={card.href}
                className="group grid overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[var(--shadow-card)] sm:grid-cols-[190px_1fr]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted sm:aspect-auto">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={520}
                    height={390}
                  />
                </div>
                <div className="flex min-h-[190px] flex-col p-6">
                  <h3 className="font-serif text-2xl font-semibold leading-[1.2] tracking-tight text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.6] text-muted-foreground">
                    {card.description}
                  </p>
                  <div className="mt-auto pt-6 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                    <span>See recommended tour</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <p className="text-sm leading-[1.6] text-muted-foreground">
              Not sure where to start? Tell me your dates, interests, and pace, and I will suggest a route.
            </p>
            <Link
              to="/tours/custom"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent sm:mt-0"
            >
              Custom private tour
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="featured-tours" className="py-20 md:py-28 bg-secondary/30 scroll-mt-20">
        <div className="container-section">
          <div className="mb-12 max-w-3xl">
            <p className="inline-flex items-center gap-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-accent mb-4">
              <span className="inline-block h-0.5 w-14 bg-accent" aria-hidden="true" />
              Explore Tokyo
            </p>
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-foreground">
              Featured Tours
            </h2>
            <p className="mt-5 text-[1.0625rem] md:text-[1.1875rem] leading-[1.6] text-muted-foreground max-w-2xl">
              Choose from carefully curated walking tours or create your own custom experience.
            </p>
          </div>

          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {tours.map((tour) => (
                  <CarouselItem key={tour.id} className="md:basis-1/2 lg:basis-1/3">
                    <TourCard {...tour} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="mt-12 text-center">
            <Link to="/tours" className="btn-outline">
              View All Tours
              <ArrowRight className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Photos */}
      <section aria-label="Tour photos" className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="mb-12 max-w-3xl">
            <p className="inline-flex items-center gap-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-accent mb-4">
              <span className="inline-block h-0.5 w-14 bg-accent" aria-hidden="true" />
              Real Tours
            </p>
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-foreground">
              Tours in Photos
            </h2>
          </div>

          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  { src: "/images/tour-photos/sumida-river-group-selfie.webp", alt: "Manabu and tour guests pose for a selfie along the Sumida River in Tokyo", caption: "Riverside walk with guests" },
                  { src: "/images/tour-photos/sumida-river-skytree-view.webp", alt: "Tour guests looking out at Tokyo Skytree from the Sumida River promenade", caption: "Skytree views from the Sumida riverside" },
                  { src: "/images/tour-photos/asakusa-incense-cauldron-guests.webp", alt: "Guests bathing in healing incense smoke at the Senso-ji main hall cauldron", caption: "Guiding the incense ritual at Senso-ji" },
                  { src: "/images/tour-photos/asakusa-kaminarimon-dragon-detail.webp", alt: "Manabu pointing out the hidden dragon carving beneath the Kaminarimon lantern in Asakusa", caption: "The hidden dragon under Kaminarimon" },
                  { src: "/images/tour-photos/asakusa-omikuji-fortune-drawing.webp", alt: "Tour guests drawing omikuji fortune slips at Senso-ji in Asakusa", caption: "Drawing fortunes at Senso-ji" },
                  { src: "/images/tour-photos/asakusa-nakamise-morning-walk.webp", alt: "Tour guests walking the Nakamise-dori shopping street in Asakusa", caption: "Quiet stroll on Nakamise-dori" },
                  { src: "/images/tour-photos/group-photo.webp", alt: "Group tour with guests at a Tokyo shrine", caption: "Group tour in Tokyo" },
                  { src: "/images/tour-photos/photo1.webp", alt: "Selfie with guests along the Sumida River with Tokyo Skytree in the background", caption: "Strolling along the Sumida River" },
                  { src: "/images/tour-photos/photo2.webp", alt: "Selfie with guests near Tokyo Skytree by the Sumida River", caption: "Near Tokyo Skytree with guests" },
                  { src: "/images/tour-photos/asakusa-guest-selfie.webp", alt: "Selfie with guests by the Sumida River near Asakusa with Asahi Beer Tower in the background", caption: "Exploring Asakusa with guests" },
                ].map((photo) => (
                  <CarouselItem key={photo.src} className="md:basis-1/2 lg:basis-1/3">
                    <figure className="flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          width={600}
                          height={450}
                        />
                      </div>
                      <figcaption className="mt-2 text-sm text-muted-foreground">{photo.caption}</figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <p className="inline-flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent mb-4">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Plan your Tokyo day
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight">Ready to Explore Tokyo?</h2>
          <p className="mt-4 text-primary-foreground/75 max-w-xl mx-auto">
            Tell me your dates and interests — I'll send a personalized itinerary within 24 hours.
            Pay only when the plan feels right.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-cta="book-now-footer"
              className="btn-accent-on-dark"
              onClick={() => trackBookNowClick("Request a Tour", "footer")}
            >
              Request a Tour
              <ArrowRight className="btn-arrow" />
            </Link>
            <Link to="/tours" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-full transition-all duration-300 ease-out hover:bg-primary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50">
              Browse Tours
            </Link>
          </div>
          <p className="mt-5 text-xs text-primary-foreground/55 tracking-wide">
            Reply within 24 hours · No deposit until you approve
          </p>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "TouristInformationCenter"],
            "name": "Tanuki Tabi Travel",
            "url": "https://tanuki-tabi-travel.com",
            "description": "Private walking tours of Tokyo led by Manabu, a government-licensed guide interpreter with 500+ tours and a 4.86★ rating.",
            "image": "https://tanuki-tabi-travel.com/assets/About_page_Manabu_team_photo-kZpmorG3.webp",
            "email": "info@tanuki-tabi-travel.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tokyo",
              "addressCountry": "JP",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.86",
              "reviewCount": "500",
            },
            "priceRange": "¥¥¥",
            "knowsLanguage": "en",
            "hasCredential": "National Government Licensed Guide Interpreter (全国通訳案内士)",
            "review": testimonials.map((t) => ({
              "@type": "Review",
              "reviewBody": t.text,
              "author": { "@type": "Person", "name": t.author },
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

export default Index;
