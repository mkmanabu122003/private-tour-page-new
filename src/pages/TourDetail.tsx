import { useParams, Link } from "react-router-dom";
import { Clock, Users, MapPin, Check, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import tourAsakusa from "@/assets/tour-asakusa.jpg";
import tourYanaka from "@/assets/tour-yanaka.jpg";
import tourUeno from "@/assets/tour-ueno.jpg";

const tourData = {
  asakusa: {
    title: "Asakusa Walking Tour",
    subtitle: "Discover the heart of old Tokyo",
    description: "Experience the magic of Tokyo's oldest and most traditional district. This immersive walking tour takes you through the iconic Senso-ji Temple, the bustling Nakamise shopping street, and hidden corners that only locals know.",
    duration: "3 hours",
    price: "¥12,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "10:00 AM or 2:00 PM",
    meetingPoint: "Asakusa Station, Exit 1",
    image: tourAsakusa,
    highlights: [
      "Senso-ji Temple - Tokyo's oldest and most famous temple",
      "Kaminarimon Gate - The iconic Thunder Gate",
      "Nakamise Shopping Street - Traditional snacks and souvenirs",
      "Hidden back streets and local spots",
      "Sumida River views and Skytree photo spots",
    ],
    itinerary: [
      { time: "10:00", activity: "Meet at Asakusa Station" },
      { time: "10:15", activity: "Kaminarimon Gate & Nakamise Street" },
      { time: "10:45", activity: "Senso-ji Temple exploration" },
      { time: "11:30", activity: "Hidden back streets & local shops" },
      { time: "12:15", activity: "Sumida River walk & photo spots" },
      { time: "13:00", activity: "Tour ends at Asakusa Station" },
    ],
    includes: [
      "Licensed English-speaking guide",
      "Cultural commentary and local stories",
      "Photo assistance at key spots",
      "Temple etiquette guidance",
      "Local food recommendations",
    ],
    suitableFor: [
      "First-time visitors to Tokyo",
      "Families with children",
      "Seniors (easy walking pace)",
      "Photography enthusiasts",
      "History and culture lovers",
    ],
  },
  yanaka: {
    title: "Ueno & Yanaka Discovery",
    subtitle: "Step back in time to old Tokyo",
    description: "Escape the modern city and discover Tokyo's most nostalgic neighborhood. Yanaka survived the war and earthquakes, preserving the atmosphere of old Tokyo with its wooden houses, traditional shops, and peaceful temples.",
    duration: "4 hours",
    price: "¥15,000",
    difficulty: "Easy",
    groupSize: "1-4 people",
    startTime: "9:30 AM or 1:30 PM",
    meetingPoint: "Nippori Station, North Exit",
    image: tourYanaka,
    highlights: [
      "Yanaka Ginza - Charming retro shopping street",
      "Historic temples and graveyards",
      "Traditional craft shops and cafes",
      "Cat-watching in Japan's cat neighborhood",
      "Stunning sunset views from Yuyake Dandan steps",
    ],
    itinerary: [
      { time: "9:30", activity: "Meet at Nippori Station" },
      { time: "9:45", activity: "Yanaka Cemetery & historic temples" },
      { time: "10:30", activity: "Traditional craft shops exploration" },
      { time: "11:15", activity: "Yanaka Ginza shopping street" },
      { time: "12:00", activity: "Local lunch break (optional)" },
      { time: "13:00", activity: "Ueno Park highlights" },
      { time: "13:30", activity: "Tour ends at Ueno Station" },
    ],
    includes: [
      "Licensed English-speaking guide",
      "Deep cultural insights and history",
      "Local cafe and food recommendations",
      "Temple and shrine etiquette guidance",
      "Photography tips and assistance",
    ],
    suitableFor: [
      "Repeat visitors to Tokyo",
      "Those seeking authentic experiences",
      "Cat lovers",
      "Photography enthusiasts",
      "Anyone who loves quiet, charming neighborhoods",
    ],
  },
  "shibuya-harajuku": {
    title: "Shibuya & Harajuku Tour",
    subtitle: "Experience Tokyo's vibrant youth culture",
    description: "Dive into the heart of modern Tokyo where fashion, technology, and tradition coexist. From the world's busiest crossing to peaceful shrine grounds, this tour showcases Tokyo's dynamic energy and cultural contrasts.",
    duration: "3.5 hours",
    price: "¥13,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "10:30 AM or 2:30 PM",
    meetingPoint: "Shibuya Station, Hachiko Exit",
    image: tourUeno,
    highlights: [
      "Shibuya Crossing - The world's busiest pedestrian crossing",
      "Hachiko Statue - Tokyo's most famous meeting spot",
      "Harajuku's Takeshita Street - Teen fashion paradise",
      "Meiji Shrine - Peaceful oasis in the city",
      "Omotesando - Tokyo's Champs-Élysées",
    ],
    itinerary: [
      { time: "10:30", activity: "Meet at Hachiko Statue, Shibuya Station" },
      { time: "10:45", activity: "Experience Shibuya Crossing & observation points" },
      { time: "11:15", activity: "Walk to Harajuku via Omotesando" },
      { time: "11:45", activity: "Explore Takeshita Street & Harajuku fashion" },
      { time: "12:30", activity: "Meiji Shrine visit & forest walk" },
      { time: "13:45", activity: "Omotesando architecture & boutiques" },
      { time: "14:00", activity: "Tour ends at Harajuku/Omotesando Station" },
    ],
    includes: [
      "Licensed English-speaking guide",
      "Youth culture & fashion insights",
      "Shrine etiquette guidance",
      "Photo opportunities at famous spots",
      "Trendy cafe and restaurant recommendations",
    ],
    suitableFor: [
      "First-time visitors to Tokyo",
      "Fashion and pop culture enthusiasts",
      "Families with teenagers",
      "Photography lovers",
      "Those interested in modern Japanese culture",
    ],
  },
  "tsukiji-ginza": {
    title: "Tsukiji & Ginza Tour",
    subtitle: "From market delights to upscale elegance",
    description: "Experience two sides of Tokyo in one tour. Start at the bustling Tsukiji Outer Market for fresh seafood and local delicacies, then stroll through sophisticated Ginza with its luxury shops, art galleries, and architectural gems.",
    duration: "3 hours",
    price: "¥14,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "9:00 AM or 1:00 PM",
    meetingPoint: "Tsukiji Market Station, Exit A1",
    image: tourAsakusa,
    highlights: [
      "Tsukiji Outer Market - Fresh seafood and street food",
      "Local food tastings - Seasonal Japanese delicacies",
      "Ginza shopping district - From luxury brands to traditional shops",
      "Historic Kabuki-za Theatre",
      "Hidden alleys and local izakayas",
    ],
    itinerary: [
      { time: "9:00", activity: "Meet at Tsukiji Market Station" },
      { time: "9:15", activity: "Tsukiji Outer Market exploration & tastings" },
      { time: "10:15", activity: "Walk through築地 Honganji Temple" },
      { time: "10:45", activity: "Ginza main street architecture tour" },
      { time: "11:15", activity: "Traditional shops & department stores" },
      { time: "11:45", activity: "Hidden backstreets & local gems" },
      { time: "12:00", activity: "Tour ends at Ginza Station" },
    ],
    includes: [
      "Licensed English-speaking guide",
      "Market food tastings (¥500-800 worth)",
      "Shopping and dining recommendations",
      "Cultural insights on Japanese cuisine",
      "Photo assistance at key locations",
    ],
    suitableFor: [
      "Food lovers and culinary enthusiasts",
      "Shopping enthusiasts",
      "Those interested in Japanese cuisine",
      "Photography enthusiasts",
      "Culture and history lovers",
    ],
  },
  "imperial-palace": {
    title: "Imperial Palace & Marunouchi",
    subtitle: "Discover Tokyo's historical and modern heart",
    description: "Walk through centuries of history at the Imperial Palace East Gardens, then contrast it with the gleaming skyscrapers of Marunouchi. This tour perfectly balances Tokyo's imperial heritage with its role as a modern business capital.",
    duration: "2.5 hours",
    price: "¥11,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "10:00 AM or 2:00 PM",
    meetingPoint: "Tokyo Station, Marunouchi North Exit",
    image: tourYanaka,
    highlights: [
      "Imperial Palace East Gardens - Beautiful Japanese gardens",
      "Historic castle foundations and moats",
      "Nijubashi Bridge - Iconic double bridge",
      "Marunouchi business district architecture",
      "Tokyo Station's restored red brick building",
    ],
    itinerary: [
      { time: "10:00", activity: "Meet at Tokyo Station Marunouchi North Exit" },
      { time: "10:15", activity: "Imperial Palace Plaza & Nijubashi Bridge" },
      { time: "10:45", activity: "East Gardens exploration & history" },
      { time: "11:30", activity: "Former castle grounds & stone walls" },
      { time: "12:00", activity: "Marunouchi district & modern architecture" },
      { time: "12:20", activity: "Tokyo Station building tour" },
      { time: "12:30", activity: "Tour ends at Tokyo Station" },
    ],
    includes: [
      "Licensed English-speaking guide",
      "Japanese history and imperial culture insights",
      "Garden and architecture photography tips",
      "Local lunch spot recommendations",
      "Seasonal highlights (cherry blossoms, autumn leaves)",
    ],
    suitableFor: [
      "History enthusiasts",
      "First-time visitors to Tokyo",
      "Those seeking peaceful urban gardens",
      "Architecture lovers",
      "Photography enthusiasts",
    ],
  },
  custom: {
    title: "Custom Private Tour",
    subtitle: "Your perfect Tokyo experience",
    description: "Tell me your interests, and I'll create a personalized itinerary just for you. Whether you're passionate about food, history, anime, photography, or something completely unique—let's design your dream Tokyo day together.",
    duration: "Flexible (3-8 hours)",
    price: "From ¥18,000",
    difficulty: "Customizable",
    groupSize: "1-6 people",
    startTime: "Flexible",
    meetingPoint: "Your choice",
    image: tourUeno,
    highlights: [
      "Personalized itinerary based on your interests",
      "Flexible timing and pace",
      "Access to local spots not in guidebooks",
      "Special interests: food, anime, photography, history",
      "Combination of multiple areas possible",
    ],
    itinerary: [
      { time: "Flexible", activity: "Meet at your preferred location" },
      { time: "", activity: "Explore based on your custom itinerary" },
      { time: "", activity: "Lunch at hand-picked local spots" },
      { time: "", activity: "Continue exploring your interests" },
      { time: "", activity: "Tour ends at convenient location" },
    ],
    includes: [
      "Licensed English-speaking guide",
      "Custom itinerary planning",
      "Local insider recommendations",
      "Flexible pace and schedule",
      "Restaurant reservations assistance",
    ],
    suitableFor: [
      "Anyone with specific interests",
      "Those wanting off-the-beaten-path experiences",
      "Special occasions and celebrations",
      "Business travelers with limited time",
      "Families with unique needs",
    ],
  },
};

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tour = tourData[id as keyof typeof tourData];

  if (!tour) {
    return (
      <Layout>
        <div className="container-section py-20 text-center">
          <h1 className="heading-section">Tour not found</h1>
          <Link to="/tours" className="btn-primary mt-8">
            View All Tours
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-section pb-8">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tours
          </Link>
          <p className="text-label text-accent mb-2">{tour.difficulty} · {tour.duration}</p>
          <h1 className="heading-display text-foreground">{tour.title}</h1>
          <p className="text-lg text-muted-foreground mt-2">{tour.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="heading-card text-foreground mb-4">About This Tour</h2>
                <p className="text-body">{tour.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="heading-card text-foreground mb-4">Highlights</h2>
                <ul className="space-y-3">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="heading-card text-foreground mb-4">Itinerary</h2>
                <div className="space-y-4">
                  {tour.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      {item.time && (
                        <span className="text-sm font-medium text-accent w-16 shrink-0">
                          {item.time}
                        </span>
                      )}
                      <span className="text-muted-foreground">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="heading-card text-foreground mb-4">What's Included</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {tour.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable For */}
              <div>
                <h2 className="heading-card text-foreground mb-4">This Tour is Perfect For</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {tour.suitableFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-6 shadow-[var(--shadow-card)]">
                <div className="text-center pb-6 border-b border-border">
                  <p className="text-sm text-muted-foreground">From</p>
                  <p className="text-3xl font-serif font-semibold text-foreground">{tour.price}</p>
                  <p className="text-sm text-muted-foreground">per group</p>
                </div>

                <div className="py-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Duration</p>
                      <p className="text-muted-foreground">{tour.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Group Size</p>
                      <p className="text-muted-foreground">{tour.groupSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Meeting Point</p>
                      <p className="text-muted-foreground">{tour.meetingPoint}</p>
                    </div>
                  </div>
                </div>

                <Link to="/contact" className="btn-accent w-full justify-center">
                  Book This Tour
                </Link>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Free cancellation up to 24 hours before
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TourDetail;
