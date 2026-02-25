import { Link } from "react-router-dom";
import {
  ArrowRight,
  UtensilsCrossed,
  MapPin,
  Clock,
  Users,
  Heart,
  Sparkles,
  ShieldCheck,
  Leaf,
  WheatOff,
  AlertTriangle,
  Check,
  X,
  BookOpen,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const features = [
  {
    icon: Heart,
    title: "Not a Fixed Menu",
    description:
      "Your guide adapts to your tastes and dietary needs in real time. Love spicy food? We'll find the best tantanmen shop. Prefer sweets? We'll detour to a hidden wagashi artisan. This tour is built around you.",
  },
  {
    icon: MapPin,
    title: "Local Spots Only",
    description:
      "No tourist-trap restaurants with plastic food displays and English menus marked up 40%. We go where locals eat — the ramen counter with eight stools, the tempura shop that's been family-run for three generations.",
  },
  {
    icon: BookOpen,
    title: "Cultural Context",
    description:
      "Learn why each dish matters. Why is tsukemono served with every meal? What makes Edomae sushi different? How did ramen go from Chinese import to Japanese obsession? Every bite comes with a story.",
  },
  {
    icon: Sparkles,
    title: "Flexible Timing",
    description:
      "Choose a morning market crawl starting at dawn, a midday lunch tour through bustling neighborhoods, or an evening izakaya hop through lantern-lit alleyways. Your schedule, your pace.",
  },
];

const foodExperiences: {
  title: string;
  foods: string;
  description: string;
  image?: string;
}[] = [
  {
    title: "Tsukiji Outer Market Morning Crawl",
    foods: "Sushi, tamagoyaki, seafood skewers, fresh wasabi",
    image: "/images/tours/food-tour-tsukiji.jpg",
    description:
      "Start your day where Tokyo's chefs start theirs. The Tsukiji Outer Market is still the beating heart of Tokyo's food culture, even after the inner wholesale market moved to Toyosu. We'll navigate the narrow lanes together, tasting freshly grilled scallops from vendors who've been here for decades, watching masters slice maguro with single-stroke precision, and trying tamagoyaki — the sweet, layered egg omelet that's been perfected here over generations. Your guide will explain the market's 90-year history and help you order confidently at stalls where the menu is only in Japanese.",
  },
  {
    title: "Asakusa Traditional Street Food",
    foods: "Ningyo-yaki, melon-pan, hand-pulled soba, age-manju",
    description:
      "Asakusa is Tokyo's old downtown, and its food reflects centuries of tradition. Along Nakamise Street and the surrounding backstreets, we'll try ningyo-yaki — small cakes filled with sweet red bean paste, baked in molds shaped like the Seven Lucky Gods. We'll find the best melon-pan (crispy-topped sweet bread) fresh from the oven, visit a soba shop where noodles are still made by hand daily, and discover age-manju — deep-fried steamed buns with a satisfying crunch that gives way to soft, sweet filling. This is comfort food with centuries of history behind it.",
  },
  {
    title: "Ramen Discovery Tour",
    foods: "Tonkotsu, shoyu, miso, tsukemen, gyoza",
    image: "/images/tours/food-tour-ramen-tokyo.jpg",
    description:
      "Tokyo is arguably the ramen capital of the world, with over 10,000 ramen shops across the city. Each neighborhood has its loyalties, each shop its closely guarded recipe. We'll explore the major styles — rich, creamy tonkotsu from Kyushu, clear and elegant shoyu from Tokyo's own tradition, bold miso ramen born in Hokkaido — and we'll visit shops where the master has spent years perfecting a single bowl. Your guide will teach you proper ramen etiquette (yes, slurping is not just acceptable, it's expected) and help you customize your order with confidence.",
  },
  {
    title: "Izakaya Evening Experience",
    foods: "Yakitori, sake flights, edamame, karaage, small plates",
    image: "/images/tours/food-tour-izakaya.jpg",
    description:
      "As the lanterns flicker on in Tokyo's yokocho (alleyway bar districts), a different food world comes alive. Izakaya are Japan's answer to the gastropub — informal, convivial, and bursting with flavor. We'll visit izakaya where salarymen unwind after work, tasting perfectly charcoal-grilled yakitori (each cut of chicken has its own name and ideal preparation), sipping through a curated sake flight, and sharing small plates that showcase seasonal ingredients. Your guide handles all ordering and explains the unwritten rules that make izakaya culture uniquely Japanese.",
  },
  {
    title: "Depachika Tour",
    foods: "Wagashi, bento boxes, French pastries, pickles, seasonal sweets",
    image: "/images/tours/food-tour-depachika.jpg",
    description:
      "The basement floors of Tokyo's department stores — known as depachika — are food wonderlands that most tourists walk right past. These are not ordinary food courts. They're curated collections of Japan's finest food artisans, from wagashi (traditional sweets) makers who've held imperial warrants for centuries to French-trained pastry chefs creating Tokyo-exclusive confections. We'll sample our way through exquisite bento boxes, discover regional specialties from across Japan, and find the perfect edible souvenirs to bring home.",
  },
];

const dietaryOptions = [
  {
    icon: Leaf,
    title: "Vegetarian & Vegan",
    description:
      "Tokyo's food scene has embraced plant-based dining with creativity and care. We know shojin ryori (Buddhist temple cuisine) restaurants, dedicated vegan ramen shops, and traditional spots that naturally feature vegetable-forward dishes. Your guide ensures every stop works for you.",
  },
  {
    icon: ShieldCheck,
    title: "Halal",
    description:
      "Finding halal food in Tokyo can be challenging without local knowledge. We'll guide you to certified halal restaurants and street food vendors, and we know which traditional dishes are naturally halal-friendly. No guesswork, no language barriers.",
  },
  {
    icon: WheatOff,
    title: "Gluten-Free",
    description:
      "Soy sauce is in almost everything in Japanese cooking, and it contains wheat. But with a knowledgeable guide, gluten-free dining in Tokyo is absolutely possible. We'll navigate menus, communicate with chefs, and find naturally gluten-free options like sashimi, rice dishes, and yakitori with salt seasoning.",
  },
  {
    icon: AlertTriangle,
    title: "Allergies & Restrictions",
    description:
      "Shellfish, nuts, eggs, dairy — whatever your allergy, your guide will communicate directly with each vendor and restaurant in Japanese to ensure your safety. We carry allergy cards in Japanese and know how to ask the right questions. Your peace of mind is non-negotiable.",
  },
];

const relatedTours = [
  {
    title: "Tsukiji & Ginza Tour",
    path: "/tours/tsukiji-ginza",
    description: "Explore Tsukiji Market's food culture and Ginza's upscale dining scene.",
  },
  {
    title: "Custom Private Tour",
    path: "/tours/custom",
    description: "Build a fully personalized Tokyo experience around your interests.",
  },
  {
    title: "Asakusa Walking Tour",
    path: "/tours/asakusa",
    description: "Discover old Tokyo's temples, streets, and traditional food culture.",
  },
];

const relatedArticles = [
  {
    title: "A Food Lover's Guide to Tsukiji Market",
    path: "/blog/tsukiji-guide-food-lover",
    description: "What to eat, when to go, and how to navigate Tokyo's iconic market.",
  },
  {
    title: "What to See in Asakusa — A Local's Guide",
    path: "/blog/asakusa-guide-what-to-see",
    description: "Temple visits, street food, and hidden spots most tourists miss.",
  },
];

const TokyoFoodTour = () => {
  return (
    <Layout>
      <SEO
        title="Tokyo Food Tour | Private Guided Food Experience | Tanuki Tabi Travel"
        description="Taste Tokyo's best food with a local licensed guide. From Tsukiji street food to hidden ramen shops, customize your private food tour experience."
        canonicalPath="/tours/tokyo-food-tour"
      />

      {/* Hero Section */}
      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px]">
        <img
          src="/images/tours/tokyo-food-tour-hero.jpg"
          alt="Private Tokyo food tour - taste authentic Japanese cuisine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">Food Tours</p>
            <h1 className="heading-display text-foreground">
              Tokyo Private Food Tour
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Discover Tokyo's culinary soul — from street food stalls to
              neighborhood favorites. A private, guided journey through the
              flavors that define this city, tailored entirely to your tastes.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-accent">
                Book Your Food Tour
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Tour Special */}
      <section className="py-16">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Why This Tour</p>
            <h2 className="heading-section text-foreground">
              What Makes This Tour Special
            </h2>
            <p className="mt-4 text-body">
              This is not a cookie-cutter food tour with fixed stops and a
              rehearsed script. It is a personalized food adventure guided by
              someone who knows where locals actually eat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-elevated p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="heading-card text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Food Experiences */}
      <section className="py-16 bg-secondary/30">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Taste Tokyo</p>
            <h2 className="heading-section text-foreground">
              Sample Food Experiences
            </h2>
            <p className="mt-4 text-body">
              Every food tour is customized, but here are some of the
              experiences we can build your day around. Mix and match, or let
              your guide surprise you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodExperiences.map((experience) => (
              <div key={experience.title} className="card-elevated overflow-hidden">
                {experience.image && (
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <UtensilsCrossed className="w-5 h-5 text-accent flex-shrink-0" />
                    <h3 className="heading-card text-foreground">
                      {experience.title}
                    </h3>
                  </div>
                  <p className="text-xs text-accent font-medium uppercase tracking-widest mb-3">
                    {experience.foods}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Accommodations */}
      <section className="py-16">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-label text-accent mb-3">Everyone Welcome</p>
            <h2 className="heading-section text-foreground">
              Dietary Accommodations
            </h2>
            <p className="mt-4 text-body">
              Navigating dietary restrictions in Japan can feel daunting — the
              language barrier is real, ingredients are not always obvious, and
              many dishes contain hidden allergens. That is exactly why having a
              local guide matters. We handle everything so you can eat with
              confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dietaryOptions.map((option) => (
              <div key={option.title} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <option.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-card text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-section">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-section text-foreground">Tour Details</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-medium text-foreground">
                  Duration
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Half day:</strong> 3-4
                  hours
                </li>
                <li>
                  <strong className="text-foreground">Full day:</strong> 6-7
                  hours
                </li>
                <li>Morning, afternoon, or evening start times available</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-medium text-foreground">Price</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>Private tour — contact for a personalized quote</li>
                <li>Pricing depends on duration, group size, and areas covered</li>
                <li>
                  <Link
                    to="/contact"
                    className="text-accent hover:underline font-medium"
                  >
                    Request a quote
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-medium text-foreground">
                  Included
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  Licensed local guide
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  Customized route planning
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  Cultural context and food stories
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                  Restaurant navigation and ordering help
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <X className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-xl font-medium text-foreground">
                  Not Included
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  Food and drinks (pay as you go)
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                  Transportation costs
                </li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Food budget:</strong>{" "}
                Expect to spend around ¥3,000-5,000 per person depending on
                the tour type and your appetite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-section text-center">
          <h2 className="heading-section">
            Tell Us What You Love to Eat
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
            Whether you are a sushi purist, a ramen fanatic, or someone who
            wants to try everything — we will create your perfect Tokyo food
            day. Share your preferences, dietary needs, and food dreams, and
            your guide will handle the rest.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Plan Your Food Tour
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/tours"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10"
            >
              Browse All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Related Tours */}
            <div>
              <p className="text-label text-accent mb-3">Related Tours</p>
              <h2 className="heading-section text-foreground mb-6">
                Explore More Tokyo Tours
              </h2>
              <div className="space-y-4">
                {relatedTours.map((tour) => (
                  <Link
                    key={tour.path}
                    to={tour.path}
                    className="block card-elevated p-5 group hover:border-accent/30 transition-colors"
                  >
                    <h3 className="heading-card text-foreground group-hover:text-accent transition-colors">
                      {tour.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tour.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Articles */}
            <div>
              <p className="text-label text-accent mb-3">Read More</p>
              <h2 className="heading-section text-foreground mb-6">
                From the Blog
              </h2>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.path}
                    to={article.path}
                    className="block card-elevated p-5 group hover:border-accent/30 transition-colors"
                  >
                    <h3 className="heading-card text-foreground group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {article.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TouristTrip Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Tokyo Private Food Tour",
            "description":
              "Private guided food tour of Tokyo with a licensed guide",
            "touristType": "Food enthusiasts",
            "provider": {
              "@type": "Organization",
              "name": "Tanuki Tabi Travel",
              "url": "https://tanuki-tabi-travel.com",
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "JPY",
              "availability": "https://schema.org/InStock",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default TokyoFoodTour;
