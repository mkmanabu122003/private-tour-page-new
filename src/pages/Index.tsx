import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Globe, Heart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { TourCard } from "@/components/tours/TourCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-asakusa.jpg";
import tourAsakusa from "@/assets/tour-asakusa.jpg";
import tourYanaka from "@/assets/tour-yanaka.jpg";
import tourUeno from "@/assets/tour-ueno.jpg";
import guidePortrait from "@/assets/guide-portrait.jpg";

const tours = [
  {
    id: "asakusa",
    title: "Asakusa Walking Tour",
    description: "Discover the heart of old Tokyo. Visit Senso-ji Temple, explore traditional shops, and taste local street food.",
    duration: "3 hours",
    price: "¥12,000",
    difficulty: "Easy",
    image: tourAsakusa,
  },
  {
    id: "yanaka",
    title: "Ueno & Yanaka Discovery",
    description: "Experience the nostalgic charm of old Tokyo neighborhoods, traditional temples, and hidden local spots.",
    duration: "4 hours",
    price: "¥15,000",
    difficulty: "Easy",
    image: tourYanaka,
  },
  {
    id: "shibuya-harajuku",
    title: "Shibuya & Harajuku Tour",
    description: "Explore Tokyo's youth culture hub. From the famous Shibuya Crossing to trendy Harajuku streets and Meiji Shrine.",
    duration: "3.5 hours",
    price: "¥13,000",
    difficulty: "Easy",
    image: tourUeno,
  },
  {
    id: "tsukiji-ginza",
    title: "Tsukiji & Ginza Tour",
    description: "Experience Tokyo's culinary delights at Tsukiji Outer Market and stroll through the upscale Ginza shopping district.",
    duration: "3 hours",
    price: "¥14,000",
    difficulty: "Easy",
    image: tourAsakusa,
  },
  {
    id: "imperial-palace",
    title: "Imperial Palace & Marunouchi",
    description: "Discover Tokyo's historical heart and modern business district. Walk through the East Gardens and see the Imperial Palace.",
    duration: "2.5 hours",
    price: "¥11,000",
    difficulty: "Easy",
    image: tourYanaka,
  },
  {
    id: "custom",
    title: "Custom Private Tour",
    description: "Create your perfect Tokyo experience. Tell me your interests and I'll design a personalized itinerary just for you.",
    duration: "Flexible",
    price: "¥18,000",
    difficulty: "Customizable",
    image: tourUeno,
  },
];

const features = [
  {
    icon: Award,
    title: "Licensed Guide",
    description: "Nationally certified tour guide with years of professional experience in Tokyo.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate private tours for a personalized experience tailored to your interests.",
  },
  {
    icon: Globe,
    title: "English Fluent",
    description: "TOEIC 950 with extensive international business experience for seamless communication.",
  },
  {
    icon: Heart,
    title: "Local Insights",
    description: "Discover hidden gems, local stories, and cultural context beyond the guidebooks.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Tokyo Tour Guide with guests at temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative container-section py-20">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Licensed Tokyo Tour Guide
            </p>
            <h1 className="heading-display text-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Explore Tokyo with a{" "}
              <span className="text-accent">Local Professional</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Discover the authentic side of Tokyo through immersive walking tours. 
              From ancient temples to hidden alleyways, experience the stories that 
              make this city unforgettable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/tours" className="btn-accent">
                View Tours
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Book Now
              </Link>
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

      {/* Why Choose Me */}
      <section className="py-20 md:py-28">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label text-accent mb-3">Why Choose Me</p>
              <h2 className="heading-section text-foreground">
                Your Trusted Guide to Authentic Tokyo
              </h2>
              <p className="mt-4 text-body">
                With years of experience guiding visitors from around the world, 
                I bring together local knowledge, cultural insights, and genuine 
                passion for sharing Tokyo's stories.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="group">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={guidePortrait}
                  alt="Manabu - Tokyo Tour Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-[var(--shadow-medium)] max-w-xs">
                <p className="font-serif text-lg font-medium text-foreground">Manabu</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Licensed Tour Guide · Tokyo
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">TOEIC 950</span>
                  <span className="text-xs px-2 py-1 bg-highlight/10 text-highlight rounded-full">10+ Years</span>
                </div>
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
    </Layout>
  );
};

export default Index;
