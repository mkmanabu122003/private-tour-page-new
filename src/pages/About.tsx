import { Link } from "react-router-dom";
import { Award, Globe, Briefcase, Heart, MapPin, Languages } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import guidePortrait from "@/assets/guide-portrait.jpg";
import heroImage from "@/assets/hero-asakusa.jpg";

const stats = [
  { label: "Years Guiding", value: "10+" },
  { label: "Happy Guests", value: "500+" },
  { label: "TOEIC Score", value: "950" },
  { label: "Tour Areas", value: "5+" },
];

const credentials = [
  {
    icon: Award,
    title: "Licensed Tour Guide",
    description: "Nationally certified professional tour guide with comprehensive training in Japanese history and culture.",
  },
  {
    icon: Globe,
    title: "International Experience",
    description: "Extensive overseas work experience bringing global perspective and cross-cultural communication skills.",
  },
  {
    icon: Briefcase,
    title: "Business Background",
    description: "Professional business experience ensures smooth, well-organized tours with excellent communication.",
  },
  {
    icon: Languages,
    title: "Language Skills",
    description: "TOEIC 950 certified. Fluent English communication for seamless, enjoyable tour experiences.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary/30">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label text-accent mb-3">About Your Guide</p>
              <h1 className="heading-display text-foreground">
                Hello, I'm <span className="text-accent">Manabu</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                I'm a licensed professional tour guide based in Tokyo. For over 
                a decade, I've had the privilege of sharing the beauty, history, 
                and hidden gems of this incredible city with visitors from around 
                the world.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                My journey to becoming a guide started with my own curiosity about 
                the stories behind Tokyo's temples, neighborhoods, and traditions. 
                Combined with my international business experience and passion for 
                cross-cultural exchange, guiding became my calling.
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
                  alt="Manabu - Tokyo Tour Guide"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Became a Guide */}
      <section className="py-20">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-label text-accent mb-3">My Story</p>
            <h2 className="heading-section text-foreground">
              Why I Became a Guide
            </h2>
            <div className="mt-8 text-muted-foreground leading-relaxed space-y-4 text-left">
              <p>
                Growing up in Japan, I always felt a deep connection to the traditions 
                and stories passed down through generations. But it wasn't until I 
                started working internationally that I truly understood how unique 
                and fascinating Japanese culture appears to people from other countries.
              </p>
              <p>
                My years in business gave me the opportunity to travel and work with 
                people from diverse backgrounds. I noticed how visitors to Japan often 
                missed the context and meaning behind what they were seeing—the "why" 
                that makes experiences truly memorable.
              </p>
              <p>
                That's when I decided to combine my professional skills with my passion 
                for sharing Japan. I obtained my national tour guide license and dedicated 
                myself to creating authentic, insightful experiences that go beyond 
                typical sightseeing.
              </p>
              <p className="font-medium text-foreground">
                Today, nothing brings me more joy than seeing the moment of understanding 
                in a guest's eyes—when a temple isn't just old stones, but a living 
                connection to centuries of belief and craftsmanship.
              </p>
            </div>
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

      {/* Tour Areas */}
      <section className="py-20">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-lg overflow-hidden shadow-[var(--shadow-medium)]">
                <img
                  src={heroImage}
                  alt="Tokyo tour experience"
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
                {["Asakusa & Sumida", "Ueno & Yanaka", "Nihonbashi & Ginza", "Shibuya & Harajuku", "Custom Areas Available"].map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>

              <Link to="/tours" className="btn-accent mt-8 inline-flex">
                Explore Tours
              </Link>
            </div>
          </div>
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
          <Link to="/contact" className="btn-accent mt-8 inline-flex">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
