import { useParams, Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { Clock, Users, MapPin, Check, ArrowLeft, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import useEmblaCarousel from "embla-carousel-react";
import tourAsakusa from "@/assets/tour-asakusa.jpg";
import tourYanaka from "@/assets/tour-yanaka.jpg";
import tourUeno from "@/assets/tour-ueno.jpg";
import uenoNight from "@/assets/ueno-night.jpg";
import asakusaStreet from "@/assets/asakusa-street.jpg";
import asakusaMask from "@/assets/mask-2397624.jpg";
import asakusaTemple from "@/assets/asakusa-temple.jpg";
import shibuyaCrossing from "@/assets/shibuya-crossing.jpg";
import shibuyaStreet from "@/assets/shibuya-street.jpg";
import meijiShrine from "@/assets/meiji-shrine.jpg";
import harajukuStreet from "@/assets/harajuku-street.webp";
import tsukijiMarket from "@/assets/tsukiji-market.jpg";
import tsukijiFood from "@/assets/tsukiji-food.jpg";
import imperialPalace from "@/assets/imperial-palace.jpg";
import imperialBridge from "@/assets/imperial-bridge.jpg";
import tokyoStation from "@/assets/tokyo-station.jpg";
import hamarikyu from "@/assets/hamarikyu.jpg";

const tourSEO: Record<string, { title: string; description: string; h1: string }> = {
  asakusa: {
    title: "Asakusa Walking Tour | Private Tokyo Tour Guide | Tanuki Tabi Travel",
    description: "Discover Asakusa's historic temples, Senso-ji shrine, and traditional streets with a licensed private guide. Personalized walking tour tailored to your interests.",
    h1: "Asakusa Private Walking Tour",
  },
  yanaka: {
    title: "Yanaka Walking Tour | Tokyo's Hidden Old Town | Tanuki Tabi Travel",
    description: "Explore Yanaka, Tokyo's best-kept secret neighborhood. Walk through Edo-era streets, local temples, and Yanaka Ginza with a licensed private guide.",
    h1: "Yanaka Private Walking Tour",
  },
  "shibuya-harajuku": {
    title: "Shibuya & Harajuku Tour | Pop Culture & Fashion | Tanuki Tabi Travel",
    description: "Experience Shibuya Crossing, Takeshita Street, and Harajuku's unique culture with a private licensed guide. See Tokyo's modern side up close.",
    h1: "Shibuya & Harajuku Private Walking Tour",
  },
  "tsukiji-ginza": {
    title: "Tsukiji & Ginza Tour | Food & Luxury Shopping | Tanuki Tabi Travel",
    description: "Tour Tsukiji's famous food market and Ginza's luxury shopping district with a licensed private guide. Sample street food and explore historic shops.",
    h1: "Tsukiji & Ginza Private Walking Tour",
  },
  "imperial-palace": {
    title: "Imperial Palace Tour | Tokyo History Walk | Tanuki Tabi Travel",
    description: "Explore the Imperial Palace gardens, Edo Castle ruins, and surrounding historic districts with a government-licensed private tour guide.",
    h1: "Imperial Palace Private Walking Tour",
  },
  custom: {
    title: "Custom Tokyo Tour | Design Your Own Itinerary | Tanuki Tabi Travel",
    description: "Create your perfect Tokyo day with a licensed private guide. Tell us your interests and we'll design a custom walking tour just for you. Groups of 1-8 welcome.",
    h1: "Custom Private Tour — Your Tokyo, Your Way",
  },
};

const tourSchemaData: Record<string, { name: string; area: string; price: string }> = {
  asakusa: { name: "Asakusa Private Walking Tour", area: "Asakusa", price: "30000" },
  yanaka: { name: "Yanaka Private Walking Tour", area: "Yanaka", price: "40000" },
  "shibuya-harajuku": { name: "Shibuya & Harajuku Private Walking Tour", area: "Shibuya & Harajuku", price: "35000" },
  "tsukiji-ginza": { name: "Tsukiji & Ginza Private Walking Tour", area: "Tsukiji & Ginza", price: "30000" },
  "imperial-palace": { name: "Imperial Palace Private Walking Tour", area: "Imperial Palace & Marunouchi", price: "25000" },
  custom: { name: "Custom Private Tokyo Tour", area: "Tokyo", price: "10000" },
};

const tourData = {
  asakusa: {
    title: "Asakusa Walking Tour",
    subtitle: "Discover the heart of old Tokyo",
    description: "Experience the magic of Tokyo's oldest and most traditional district. This immersive walking tour takes you through the iconic Senso-ji Temple, the bustling Nakamise shopping street, and hidden corners that only locals know.",
    duration: "3 hours",
    price: "¥30,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "10:00 AM or 2:00 PM",
    meetingPoint: "Asakusa Station, Exit 1",
    images: [
      { src: tourAsakusa, alt: "Senso-ji Temple and Kaminarimon Gate in Asakusa, Tokyo", position: "center 80%" },
      { src: asakusaStreet, alt: "Traditional shopping street in Asakusa with lanterns", position: "center" },
      { src: asakusaMask, alt: "Traditional Japanese mask at an Asakusa souvenir shop", position: "center" },
      { src: asakusaTemple, alt: "Senso-ji Temple five-story pagoda in Asakusa", position: "center" },
    ],
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
      "English & Spanish-speaking guide",
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
    price: "¥40,000",
    difficulty: "Easy",
    groupSize: "1-4 people",
    startTime: "9:30 AM or 1:30 PM",
    meetingPoint: "Nippori Station, North Exit",
    images: [
      { src: tourUeno, alt: "Traditional Yanaka neighborhood street in Tokyo", position: "center" },
      { src: tourYanaka, alt: "Yanaka Ginza retro shopping street with local shops", position: "center" },
      { src: uenoNight, alt: "Ueno Park temple illuminated at evening", position: "center" },
    ],
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
      "English & Spanish-speaking guide",
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
    price: "¥35,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "10:30 AM or 2:30 PM",
    meetingPoint: "Shibuya Station, Hachiko Exit",
    images: [
      { src: shibuyaCrossing, alt: "Shibuya Crossing at dusk with hundreds of pedestrians", position: "center" },
      { src: shibuyaStreet, alt: "Vibrant Shibuya shopping street with neon signs", position: "center" },
      { src: meijiShrine, alt: "Meiji Shrine torii gate surrounded by ancient forest", position: "center" },
      { src: harajukuStreet, alt: "Colorful Harajuku Takeshita Street with youth fashion", position: "center" },
    ],
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
      "English & Spanish-speaking guide",
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
    price: "¥30,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "9:00 AM or 1:00 PM",
    meetingPoint: "Tsukiji Market Station, Exit A1",
    images: [
      { src: tsukijiMarket, alt: "Tsukiji Outer Market fresh seafood and food stalls", position: "center" },
      { src: tsukijiFood, alt: "Fresh Japanese street food at Tsukiji Market", position: "center" },
    ],
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
      { time: "10:15", activity: "Walk through Tsukiji Honganji Temple" },
      { time: "10:45", activity: "Ginza main street architecture tour" },
      { time: "11:15", activity: "Traditional shops & department stores" },
      { time: "11:45", activity: "Hidden backstreets & local gems" },
      { time: "12:00", activity: "Tour ends at Ginza Station" },
    ],
    includes: [
      "English & Spanish-speaking guide",
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
    price: "¥25,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "10:00 AM or 2:00 PM",
    meetingPoint: "Tokyo Station, Marunouchi North Exit",
    images: [
      { src: imperialPalace, alt: "Imperial Palace East Gardens with traditional Japanese landscaping", position: "center" },
      { src: imperialBridge, alt: "Nijubashi Bridge at the Imperial Palace, iconic Tokyo landmark", position: "center" },
      { src: tokyoStation, alt: "Historic red brick Tokyo Station building in Marunouchi", position: "center" },
    ],
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
      "English & Spanish-speaking guide",
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
    price: "From ¥10,000/hour",
    difficulty: "Customizable",
    groupSize: "1-6 people",
    startTime: "Flexible",
    meetingPoint: "Your choice",
    images: [
      { src: hamarikyu, alt: "Hamarikyu Gardens tea house overlooking Tokyo skyline", position: "center" },
    ],
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
      "English & Spanish-speaking guide",
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

const relatedTours: Record<string, string[]> = {
  asakusa: ["yanaka", "tsukiji-ginza", "imperial-palace"],
  yanaka: ["asakusa", "imperial-palace", "shibuya-harajuku"],
  "shibuya-harajuku": ["tsukiji-ginza", "asakusa", "custom"],
  "tsukiji-ginza": ["asakusa", "imperial-palace", "shibuya-harajuku"],
  "imperial-palace": ["asakusa", "tsukiji-ginza", "yanaka"],
  custom: ["asakusa", "shibuya-harajuku", "tsukiji-ginza"],
};

const tourNames: Record<string, string> = {
  asakusa: "Asakusa Walking Tour",
  yanaka: "Yanaka Walking Tour",
  "shibuya-harajuku": "Shibuya & Harajuku Tour",
  "tsukiji-ginza": "Tsukiji & Ginza Tour",
  "imperial-palace": "Imperial Palace Tour",
  custom: "Custom Private Tour",
};

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tour = tourData[id as keyof typeof tourData];
  const seo = tourSEO[id as keyof typeof tourSEO];
  const schema = tourSchemaData[id as keyof typeof tourSchemaData];

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const related = relatedTours[id as string] || [];

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={`/tours/${id}`}
      />

      {/* Hero Carousel with Thumbnails */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px]">
        {/* Main Image */}
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {tour.images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: image.position }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tour Info - Below Image */}
        <div className="absolute bottom-16 md:bottom-20 left-0 right-0 container-section pointer-events-none">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white mb-2 md:mb-4 transition-colors pointer-events-auto drop-shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tours
          </Link>
        </div>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 flex items-center gap-1 md:gap-2 pointer-events-auto">
          <button
            onClick={scrollPrev}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          <div className="flex gap-1 md:gap-2">
            {tour.images.map((image, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-12 h-9 md:w-16 md:h-12 rounded-md overflow-hidden border-2 transition-all ${
                  index === selectedIndex
                    ? "border-accent opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </section>

      {/* Tour Title Section */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container-section">
          <p className="text-label text-accent mb-1 md:mb-2">{tour.difficulty} · {tour.duration}</p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground">{seo.h1}</h1>
          <p className="text-sm md:text-lg text-muted-foreground mt-1 md:mt-2">{tour.subtitle}</p>
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

      {/* You Might Also Like */}
      {related.length > 0 && (
        <section className="py-16 bg-secondary/30 border-t border-border">
          <div className="container-section">
            <h2 className="heading-section text-foreground mb-8 text-center">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((tourId) => {
                const relatedTour = tourData[tourId as keyof typeof tourData];
                if (!relatedTour) return null;
                return (
                  <Link
                    key={tourId}
                    to={`/tours/${tourId}`}
                    className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-[var(--shadow-card)] transition-all"
                  >
                    <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                      {tourNames[tourId]}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {relatedTour.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-accent font-medium text-sm">
                      <span>View Tour</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD Structured Data */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristTrip",
              "name": schema.name,
              "description": seo.description,
              "touristType": "Cultural",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Tanuki Tabi Travel",
                "url": "https://tanuki-tabi-travel.com",
              },
              "offers": {
                "@type": "Offer",
                "price": schema.price,
                "priceCurrency": "JPY",
                "availability": "https://schema.org/InStock",
              },
              "itinerary": {
                "@type": "Place",
                "name": `${schema.area}, Tokyo`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Tokyo",
                  "addressCountry": "JP",
                },
              },
            }),
          }}
        />
      )}
    </Layout>
  );
};

export default TourDetail;
