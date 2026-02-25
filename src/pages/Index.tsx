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
import tourAsakusa from "@/assets/tour-asakusa.jpg";
import tourUeno from "@/assets/tour-ueno.jpg";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";
import shibuyaCrossing from "@/assets/shibuya-crossing.jpg";
import tsukijiMarket from "@/assets/tsukiji-market.jpg";
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
    image: tourAsakusa,
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
    image: shibuyaCrossing,
  },
  {
    id: "tsukiji-ginza",
    title: "Tsukiji & Ginza Tour",
    description: "Experience Tokyo's culinary delights at Tsukiji Outer Market and stroll through the upscale Ginza shopping district.",
    duration: "3 hours",
    price: "¥30,000",
    difficulty: "Easy",
    image: tsukijiMarket,
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
    image: hamarikyu,
  },
  {
    id: "hakone-day-trip",
    title: "Hakone Day Trip",
    description: "See Mt. Fuji, cruise Lake Ashi, and experience hot spring culture on a private guided day trip from Tokyo.",
    duration: "8-10 hours",
    price: "¥55,000",
    difficulty: "Easy",
    image: hamarikyu,
  },
  {
    id: "nikko-day-trip",
    title: "Nikko Day Trip",
    description: "Visit UNESCO World Heritage Toshogu Shrine, stunning waterfalls, and mountain scenery on a day trip from Tokyo.",
    duration: "9-10 hours",
    price: "¥60,000",
    difficulty: "Moderate",
    image: hamarikyu,
  },
  {
    id: "custom",
    title: "Custom Private Tour",
    description: "Create your perfect Tokyo experience. Tell me your interests and I'll design a personalized itinerary just for you.",
    duration: "Flexible",
    price: "From ¥10,000/hour",
    difficulty: "Customizable",
    image: hamarikyu,
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
    title: "516+ Tours Completed",
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
        title="Tokyo Private Tour Guide | Licensed Walking Tours | Tanuki Tabi Travel"
        description="Explore Tokyo with a government-licensed private tour guide. 516+ tours completed with 4.86★ rating. Custom walking tours of Asakusa, Shibuya, Ginza & more. Book your personal Tokyo experience."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Scenic view of Tokyo's Sumida River with traditional and modern skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative container-section py-20">
          <div className="max-w-2xl">
            <h1 className="heading-display text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Private Walking Tours of Tokyo with a{" "}
              <span className="text-accent">Licensed Local Guide</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              516+ tours completed. 4.86★ average rating. Government-licensed guide.
            </p>
            <p className="mt-3 text-base text-white/70 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
              Discover the authentic side of Tokyo through immersive walking tours.
              From ancient temples to hidden alleyways, experience the stories that
              make this city unforgettable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/tours" className="btn-accent">
                Browse Tours
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/tours/custom" className="btn-outline">
                Book a Custom Tour
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
                (全国通訳案内士) with over 516 tours completed and a 4.86-star
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
            "@type": "LocalBusiness",
            "name": "Tanuki Tabi Travel",
            "description": "Private walking tours of Tokyo with a government-licensed guide",
            "url": "https://tanuki-tabi-travel.com",
            "email": "info@tanuki-tabi-travel.com",
            "areaServed": {
              "@type": "City",
              "name": "Tokyo",
              "addressCountry": "JP",
            },
            "founder": {
              "@type": "Person",
              "name": "Manabu",
              "jobTitle": "Government-Licensed Tour Guide",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.86",
              "reviewCount": "516",
              "bestRating": "5",
            },
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
