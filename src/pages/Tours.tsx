import { Layout } from "@/components/layout/Layout";
import { TourCard } from "@/components/tours/TourCard";
import tourAsakusa from "@/assets/tour-asakusa.jpg";
import tourUeno from "@/assets/tour-ueno.jpg";
import shibuyaCrossing from "@/assets/shibuya-crossing.jpg";
import tsukijiMarket from "@/assets/tsukiji-market.jpg";
import imperialPalace from "@/assets/imperial-palace.jpg";
import hamarikyu from "@/assets/hamarikyu.jpg";

const tours = [
  {
    id: "asakusa",
    title: "Asakusa Walking Tour",
    description: "Discover the heart of old Tokyo. Visit Senso-ji Temple, explore traditional shops along Nakamise Street, and taste authentic local street food.",
    duration: "3 hours",
    price: "¥30,000",
    difficulty: "Easy",
    image: tourAsakusa,
  },
  {
    id: "yanaka",
    title: "Ueno & Yanaka Discovery",
    description: "Experience the nostalgic charm of old Tokyo neighborhoods. Wander through traditional temples, cemetery paths, and discover hidden local cafes.",
    duration: "4 hours",
    price: "¥40,000",
    difficulty: "Easy",
    image: tourUeno,
  },
  {
    id: "shibuya-harajuku",
    title: "Shibuya & Harajuku Tour",
    description: "Explore Tokyo's youth culture hub. From the famous Shibuya Crossing to trendy Harajuku streets, and find peace at the serene Meiji Shrine.",
    duration: "3.5 hours",
    price: "¥35,000",
    difficulty: "Easy",
    image: shibuyaCrossing,
  },
  {
    id: "tsukiji-ginza",
    title: "Tsukiji & Ginza Tour",
    description: "Experience Tokyo's culinary delights at Tsukiji Outer Market and stroll through the upscale Ginza shopping district with its blend of tradition and luxury.",
    duration: "3 hours",
    price: "¥30,000",
    difficulty: "Easy",
    image: tsukijiMarket,
  },
  {
    id: "imperial-palace",
    title: "Imperial Palace & Marunouchi",
    description: "Discover Tokyo's historical heart and modern business district. Walk through the beautiful East Gardens and see the majestic Imperial Palace grounds.",
    duration: "2.5 hours",
    price: "¥25,000",
    difficulty: "Easy",
    image: imperialPalace,
  },
  {
    id: "custom",
    title: "Custom Private Tour",
    description: "Create your perfect Tokyo experience. Share your interests—food, history, photography, anime—and I'll design a personalized itinerary just for you.",
    duration: "Flexible",
    price: "From ¥10,000/hour",
    difficulty: "Customizable",
    image: hamarikyu,
  },
];

const Tours = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">Explore Tokyo</p>
            <h1 className="heading-display text-foreground">Walking Tours</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Discover Tokyo's rich culture and hidden gems through immersive 
              walking tours led by a local professional guide.
            </p>
          </div>
        </div>
      </section>

      {/* Tour Grid */}
      <section className="py-16">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-section">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                What's Included
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Professional local guide</li>
                <li>• Cultural insights & local stories</li>
                <li>• Photo opportunities</li>
                <li>• Flexible pace & stops</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                Tour Details
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Private tours only</li>
                <li>• English guided</li>
                <li>• Morning or afternoon slots</li>
                <li>• Rain or shine (with adjustments)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                Booking Info
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Book at least 48 hours ahead</li>
                <li>• Free cancellation up to 24h</li>
                <li>• Payment on the day</li>
                <li>• Custom tours available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tours;
