import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Footprints, Key, Star, MessageSquare, MapPin, CheckCircle2 } from "lucide-react";
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
import heroImage from "@/assets/sumida.webp";

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
    image: "/images/tours/tsukiji-market-food-tokyo.webp",
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
    price: "¥70,000",
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
    price: "From ¥10,000~/hour",
    difficulty: "Customizable",
    // TODO: replace with custom tour image (e.g. a map, planning scene, or collage)
    image: "/images/tour-photos/group-photo.webp",
  },
];

const trustSignals = [
  {
    icon: BadgeCheck,
    stat: "Licensed",
    label: "Government Certified",
    description: "National Guide Interpreter (全国通訳案内士)",
  },
  {
    icon: Footprints,
    stat: "500+",
    label: "Tours Completed",
    description: "Since 2018, guests from 40+ countries",
  },
  {
    icon: Star,
    stat: "4.86★",
    label: "Average Rating",
    description: "From verified guest reviews",
  },
  {
    icon: Key,
    stat: "100%",
    label: "Private Tours",
    description: "Just your group. No strangers.",
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
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroGroupPhoto}
            alt="Group photo with guests during a private Tokyo walking tour"
            className="w-full h-full object-cover"
            fetchpriority="high"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative container-section py-20">
          <div className="max-w-2xl">
            <h1 className="heading-display text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Tokyo Private Walking Tours{" "}
              <span className="text-accent">with a Licensed Local Guide</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              500+ tours completed. 4.86★ average rating. Government-licensed guide.
            </p>
            <p className="mt-3 text-base text-white/70 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              Every tour starts with a simple question: What excites you most about
              Tokyo? From there, the route is yours. I don't follow a script. I
              follow your curiosity.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact" data-cta="book-now-hero" className="btn-accent-lg" onClick={() => trackBookNowClick("Request Your Private Tour", "hero")}>
                Request Your Private Tour
                <ArrowRight className="btn-arrow" />
              </Link>
              <Link to="/tours/custom" className="group inline-flex items-center justify-center px-8 py-4 text-base bg-transparent border-[1.5px] border-white text-white font-semibold tracking-wide rounded-md transition-all duration-300 ease-out hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Custom Tour
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="container-section">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <signal.icon className="w-6 h-6 text-accent mx-auto mb-4" strokeWidth={1.75} />
                <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {signal.stat}
                </div>
                <div className="mt-2 text-sm font-medium text-foreground/80 tracking-wide uppercase">
                  {signal.label}
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-4">Explore Tokyo</p>
            <div className="w-10 h-px bg-accent mx-auto mb-6" />
            <h2 className="heading-section text-foreground">Featured Tours</h2>
            <p className="mt-4 text-body">
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

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-4">Guest Reviews</p>
            <div className="w-10 h-px bg-accent mx-auto mb-6" />
            <h2 className="heading-section text-foreground">What Travelers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
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

          <p className="mt-8 text-center text-sm text-muted-foreground">
            500+ five-star reviews from travelers worldwide
          </p>
        </div>
      </section>

      {/* Tour Photos */}
      <section aria-label="Tour photos" className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-section text-foreground">Tours in Photos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/images/tour-photos/group-photo.webp", alt: "Group tour with guests at a Tokyo shrine", caption: "Group tour in Tokyo" },
              { src: "/images/tour-photos/photo1.webp", alt: "Selfie with guests along the Sumida River with Tokyo Skytree in the background", caption: "Strolling along the Sumida River" },
              { src: "/images/tour-photos/photo2.webp", alt: "Selfie with guests near Tokyo Skytree by the Sumida River", caption: "Near Tokyo Skytree with guests" },
              { src: "/images/tour-photos/asakusa-guest-selfie.webp", alt: "Selfie with guests by the Sumida River near Asakusa with Asahi Beer Tower in the background", caption: "Exploring Asakusa with guests" },
            ].map((photo) => (
              <div key={photo.src} className="flex flex-col">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={600}
                    height={450}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-accent/5 border-y border-accent/10">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-label text-accent mb-4">Simple Booking</p>
            <div className="w-10 h-px bg-accent mx-auto mb-6" />
            <h2 className="heading-section text-foreground">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 mx-auto mb-5 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">Step 1</p>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Send Your Request
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tell me your dates and what excites you about Tokyo. Takes 2 minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 mx-auto mb-5 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">Step 2</p>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Get Your Custom Plan
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I reply within 24 hours with a personalized itinerary and quote.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-accent/10 mx-auto mb-5 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">Step 3</p>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Confirm & Pay
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Secure your tour with payment, then meet me in Tokyo for your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (short) */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label text-accent mb-4">Your Guide</p>
              <div className="w-10 h-px bg-accent mb-6" />
              <h2 className="heading-section text-foreground">
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
                excites you, then I adapt the tour in real time. It's not a
                lecture. It's a conversation.
              </p>
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

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">Ready to Explore Tokyo?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Let's create an unforgettable experience together. Tell me your interests
            and I'll design a personalized itinerary just for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" data-cta="book-now-footer" className="btn-accent" onClick={() => trackBookNowClick("Request a Tour", "footer")}>
              Request a Tour
              <ArrowRight className="btn-arrow" />
            </Link>
            <Link to="/tours" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-300 ease-out hover:bg-primary-foreground/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/50">
              Browse Tours
            </Link>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/50">
            Reply within 24 hours
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
