import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Shield, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { TourCard } from "@/components/tours/TourCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/sumida.jpg";

// Hero image: group-photo.jpg from public/images/tour-photos/
const heroGroupPhoto = "/images/tour-photos/group-photo.jpg";
import tourUeno from "@/assets/tour-ueno.jpg";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";
import imperialPalace from "@/assets/imperial-palace.jpg";
import hamarikyu from "@/assets/hamarikyu.jpg";

const tours = [
  {
    id: "asakusa",
    title: "Asakusa Walking Tour",
    description: "Discover the heart of old Tokyo. Visit Senso-ji Temple, explore traditional shops, and taste local street food.",
    duration: "3 hours",
    price: "¥30,000",
    difficulty: "Easy",
    image: "/images/tours/asakusa-kaminarimon-gate.jpg",
  },
  {
    id: "yanaka",
    title: "Ueno & Yanaka Discovery",
    description: "Experience the nostalgic charm of old Tokyo neighborhoods, traditional temples, and hidden local spots.",
    duration: "4 hours",
    price: "¥40,000",
    difficulty: "Easy",
    image: tourUeno,
  },
  {
    id: "shibuya-harajuku",
    title: "Shibuya & Harajuku Tour",
    description: "Explore Tokyo's youth culture hub. From the famous Shibuya Crossing to trendy Harajuku streets and Meiji Shrine.",
    duration: "3.5 hours",
    price: "¥35,000",
    difficulty: "Easy",
    image: "/images/tours/shibuya-crossing-tokyo.jpg",
  },
  {
    id: "tsukiji-ginza",
    title: "Tsukiji & Ginza Tour",
    description: "Experience Tokyo's culinary delights at Tsukiji Outer Market and stroll through the upscale Ginza shopping district.",
    duration: "3 hours",
    price: "¥30,000",
    difficulty: "Easy",
    image: "/images/tours/tsukiji-market-food-tokyo.jpg",
  },
  {
    id: "imperial-palace",
    title: "Imperial Palace & Marunouchi",
    description: "Discover Tokyo's historical heart and modern business district. Walk through the East Gardens and see the Imperial Palace.",
    duration: "2.5 hours",
    price: "¥25,000",
    difficulty: "Easy",
    image: imperialPalace,
  },
  {
    id: "kamakura-day-trip",
    title: "Kamakura Day Trip",
    description: "Explore Kamakura's Great Buddha, ancient temples, and coastal charm on a private day trip from Tokyo.",
    duration: "7-8 hours",
    price: "¥50,000",
    difficulty: "Easy-Moderate",
    image: "/images/tours/kamakura-great-buddha.jpg",
  },
  {
    id: "hakone-day-trip",
    title: "Hakone Day Trip",
    description: "See Mt. Fuji, cruise Lake Ashi, and experience hot spring culture on a private guided day trip from Tokyo.",
    duration: "8-10 hours",
    price: "¥55,000",
    difficulty: "Easy",
    image: "/images/tours/hakone-lake-ashi-fuji.jpg",
  },
  {
    id: "nikko-day-trip",
    title: "Nikko Day Trip",
    description: "Visit UNESCO World Heritage Toshogu Shrine, stunning waterfalls, and mountain scenery on a day trip from Tokyo.",
    duration: "9-10 hours",
    price: "¥60,000",
    difficulty: "Moderate",
    // TODO: replace with Nikko image (e.g. toshogu shrine, kegon falls)
    image: hamarikyu,
  },
  {
    id: "custom",
    title: "Custom Private Tour",
    description: "Create your perfect Tokyo experience. Tell me your interests and I'll design a personalized itinerary just for you.",
    duration: "Flexible",
    price: "From ¥10,000/hour",
    difficulty: "Customizable",
    // TODO: replace with custom tour image (e.g. a map, planning scene, or collage)
    image: "/images/tour-photos/group-photo.jpg",
  },
];

const trustSignals = [
  {
    icon: Shield,
    title: "Government-Licensed Guide",
    description: "National Government Licensed Guide Interpreter (全国通訳案内士) — the highest guiding credential in Japan.",
  },
  {
    icon: Star,
    title: "500+ Tours Completed",
    description: "Trusted by hundreds of travelers from around the world for quality, authenticity, and personalized experiences.",
  },
  {
    icon: Award,
    title: "4.86★ Average Rating",
    description: "Consistently top-rated for quality, cultural depth, and guest satisfaction.",
  },
  {
    icon: Users,
    title: "Private & Personalized",
    description: "Every tour is exclusively yours. No strangers, no rigid schedules — just your group and your guide.",
  },
];

const testimonials = [
  {
    text: "We did 3 tours in Tokyo and Manabu's was by far the most informative and engaging. He was very clear in his delivery and offered interesting cultural insights as sidebars to each venue we visited. Highly recommended!",
    author: "Couple visiting Tokyo",
    rating: 5,
  },
  {
    text: "Manabu's tour was one of the best I've been on — he is professional, kind, very knowledgeable and an awesome story-teller. His route is well-planned and offers fun experiences. You can tell he is a full-time tour guide because of the effort he puts in.",
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
        description="Explore Tokyo with Manabu, a government-licensed guide with 500+ tours and a 4.86★ rating. Private walking tours of Asakusa, Shibuya, and beyond — tailored to you."
        canonicalPath="/"
        hreflang={[
          { lang: "en", path: "/" },
          { lang: "es", path: "/es/" },
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
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative container-section py-20">
          <div className="max-w-2xl">
            <h1 className="heading-display text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Tokyo Walks with Manabu —{" "}
              <span className="text-accent">Your Licensed Local Guide</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              500+ tours completed. 4.86★ average rating. Government-licensed guide.
            </p>
            <p className="mt-3 text-base text-white/70 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              Every tour starts with a simple question: What excites you most about
              Tokyo? From there, the route is yours. I don't follow a script — I
              follow your curiosity.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/tours" className="btn-accent">
                See Available Tours
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/tours/custom" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/70 text-white font-medium rounded-md transition-all duration-200 hover:bg-white/10 hover:border-white">
                Tell Me What You're Looking For →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-20 bg-card border-b border-border">
        <div className="container-section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="text-center group">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <signal.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {signal.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Script Section */}
      <section className="py-20 md:py-28 bg-accent/5 border-y border-accent/10">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section text-foreground">
              No Script. No Rush. Just Your Kind of Tokyo.
            </h2>
            <div className="mt-8 text-muted-foreground leading-relaxed space-y-4 text-left">
              <p>
                Most tour guides follow a fixed route. I don't.
              </p>
              <p>
                In the first 30 minutes, I ask what matters to you — the food, the
                history, the hidden spots, the photo opportunities. Then I adapt as we
                go. If you want to linger at a temple, we linger. If you want to skip
                ahead to lunch, we skip.
              </p>
              <p>
                That's why guests from over 30 countries have called this the best
                tour of the trip — not just of Tokyo, but of their entire journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Explore Tokyo</p>
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
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section (short) */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label text-accent mb-3">Your Guide</p>
              <h2 className="heading-section text-foreground">
                Meet Manabu — Your Licensed Tokyo Guide
              </h2>
              <p className="mt-4 text-body">
                I'm Manabu, a National Government Licensed Guide Interpreter
                (全国通訳案内士) with over 500 tours completed and a 4.86-star
                average rating. Born in Kanazawa, raised in Kyoto, and now based
                in Tokyo — I bring insights from across Japan's rich cultural
                regions.
              </p>
              <p className="mt-4 text-body">
                My approach is simple: in the first 30 minutes, I learn what
                excites you, then I adapt the tour in real time. It's not a
                lecture — it's a conversation.
              </p>
              <Link to="/about" className="btn-outline mt-8 inline-flex">
                Learn more about your guide
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={guidePortrait}
                  alt="Manabu, government-licensed Tokyo tour guide, ready to lead a private walking tour"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Simple Booking</p>
            <h2 className="heading-section text-foreground">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-semibold">
                1
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Choose a Tour
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Browse our curated tours or request a custom itinerary tailored to your interests.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-semibold">
                2
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Share Your Interests
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell us what excites you — food, history, photography, pop culture — and we'll personalize your experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-semibold">
                3
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Explore Tokyo
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Meet your guide and discover Tokyo at your own pace. No crowds, no rush — just an authentic experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Photos */}
      <section aria-label="Tour photos" className="py-20 md:py-28">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-section text-foreground">Tours in Photos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/images/tour-photos/group-photo.jpg", alt: "Group photo with guests during a private Tokyo walking tour", caption: "Private tour in Tokyo" },
              { src: "/images/tour-photos/photo1.jpg", alt: "Exploring Tokyo's cultural landmarks on a guided tour", caption: "Exploring old Tokyo together" },
              { src: "/images/tour-photos/photo2.jpg", alt: "Discovering hidden gems of Tokyo with a local guide", caption: "Discovering Tokyo" },
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

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Guest Reviews</p>
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
                    — {testimonial.author}
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

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">Ready to Explore Tokyo?</h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Let's create an unforgettable experience together. Book your private
            tour or reach out to discuss a custom itinerary.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Book Your Tour
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">
              Learn More About Me
            </Link>
          </div>
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
