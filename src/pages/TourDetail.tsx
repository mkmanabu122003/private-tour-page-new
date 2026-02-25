import { useParams, Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { Clock, Users, MapPin, Check, X, ArrowLeft, ChevronLeft, ChevronRight, ArrowRight, Calendar, Mountain, Footprints, Info } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import useEmblaCarousel from "embla-carousel-react";
import tourYanaka from "@/assets/tour-yanaka.jpg";
import tourUeno from "@/assets/tour-ueno.jpg";
import uenoNight from "@/assets/ueno-night.jpg";
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
  "kamakura-day-trip": {
    title: "Kamakura Day Trip from Tokyo | Private Guided Tour | Tanuki Tabi Travel",
    description: "Explore Kamakura's Great Buddha, ancient temples, and coastal charm on a private day trip from Tokyo. Licensed guide, custom itinerary, train travel included in planning.",
    h1: "Kamakura Day Trip from Tokyo — Private Guided Tour",
  },
  "hakone-day-trip": {
    title: "Hakone Day Trip from Tokyo | Hot Springs & Mt. Fuji Views | Tanuki Tabi Travel",
    description: "Private guided day trip to Hakone from Tokyo. See Mt. Fuji, cruise Lake Ashi, ride the ropeway, and experience hot spring culture with a licensed guide.",
    h1: "Hakone Day Trip from Tokyo — Mt. Fuji Views & Hot Springs",
  },
  "nikko-day-trip": {
    title: "Nikko Day Trip from Tokyo | Toshogu Shrine & Nature | Tanuki Tabi Travel",
    description: "Visit Nikko's UNESCO World Heritage Toshogu Shrine, stunning waterfalls, and mountain scenery on a private guided day trip from Tokyo.",
    h1: "Nikko Day Trip from Tokyo — UNESCO Shrines & Mountain Scenery",
  },
};

const tourSchemaData: Record<string, { name: string; area: string; price: string }> = {
  asakusa: { name: "Asakusa Private Walking Tour", area: "Asakusa", price: "30000" },
  yanaka: { name: "Yanaka Private Walking Tour", area: "Yanaka", price: "40000" },
  "shibuya-harajuku": { name: "Shibuya & Harajuku Private Walking Tour", area: "Shibuya & Harajuku", price: "35000" },
  "tsukiji-ginza": { name: "Tsukiji & Ginza Private Walking Tour", area: "Tsukiji & Ginza", price: "30000" },
  "imperial-palace": { name: "Imperial Palace Private Walking Tour", area: "Imperial Palace & Marunouchi", price: "25000" },
  custom: { name: "Custom Private Tokyo Tour", area: "Tokyo", price: "10000" },
  "kamakura-day-trip": { name: "Kamakura Day Trip from Tokyo", area: "Kamakura", price: "50000" },
  "hakone-day-trip": { name: "Hakone Day Trip from Tokyo", area: "Hakone", price: "55000" },
  "nikko-day-trip": { name: "Nikko Day Trip from Tokyo", area: "Nikko", price: "60000" },
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
      { src: "/images/tours/asakusa-kaminarimon-morning.jpg", alt: "Kaminarimon Gate Asakusa - private walking tour starting point", position: "center" },
      { src: "/images/tours/asakusa-nakamise-street.jpg", alt: "Nakamise-dori shopping street leading to Senso-ji Temple", position: "center" },
      { src: "/images/tours/senso-ji-temple-tokyo.jpg", alt: "Senso-ji Temple main hall - oldest temple in Tokyo", position: "center" },
      { src: "/images/tours/asakusa-backstreet-local.jpg", alt: "Hidden backstreet in Asakusa away from tourist crowds", position: "center" },
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
      { src: "/images/tours/shibuya-scramble-crossing.jpg", alt: "Shibuya Scramble Crossing - Tokyo's most famous intersection", position: "center" },
      { src: "/images/tours/harajuku-takeshita-street.jpg", alt: "Takeshita Street Harajuku - center of Tokyo youth culture", position: "center" },
      { src: "/images/tours/meiji-shrine-torii-gate.jpg", alt: "Meiji Shrine entrance - peaceful contrast to busy Harajuku", position: "center" },
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
      { src: "/images/tours/tsukiji-outer-market.jpg", alt: "Tsukiji Outer Market - Tokyo private food tour", position: "center" },
      { src: "/images/tours/tsukiji-street-food.jpg", alt: "Fresh seafood skewers at Tsukiji Market Tokyo", position: "center" },
      { src: "/images/tours/ginza-shopping-district.jpg", alt: "Ginza luxury shopping district - combine with Tsukiji tour", position: "center" },
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
  "kamakura-day-trip": {
    title: "Kamakura Day Trip",
    subtitle: "Ancient temples, Great Buddha & coastal charm",
    description: "Escape Tokyo for a day and explore Kamakura, Japan's first military capital. This private day trip takes you to the iconic Great Buddha, serene temples with ocean views, and the charming Komachi-dori shopping street — all with a licensed guide who brings 800 years of samurai history to life.",
    duration: "7-8 hours",
    price: "¥50,000",
    difficulty: "Easy to moderate",
    groupSize: "1-6 people",
    startTime: "8:30 AM",
    meetingPoint: "Your hotel in Tokyo",
    images: [
      { src: "/images/tours/kamakura-great-buddha.jpg", alt: "Great Buddha of Kamakura - day trip from Tokyo with guide", position: "center" },
      { src: "/images/tours/kamakura-coast-enoden.jpg", alt: "Kamakura coastal view - seaside day trip from Tokyo", position: "center" },
      { src: "/images/tours/kamakura-hasedera-temple.jpg", alt: "Hasedera Temple gardens in Kamakura", position: "center" },
    ],
    highlights: [
      "Great Buddha at Kotoku-in — 13th century bronze statue, one of Japan's most iconic landmarks",
      "Hasedera Temple — ocean views, Kannon statue, hydrangeas in June",
      "Tsurugaoka Hachimangu Shrine — Kamakura's most important shrine",
      "Komachi-dori shopping street — local snacks, souvenirs, artisan crafts",
      "Optional: Hokokuji Temple bamboo grove + matcha experience",
    ],
    itinerary: [
      { time: "8:30 AM", activity: "Meet at your hotel in Tokyo" },
      { time: "9:30 AM", activity: "Arrive Kamakura by train (~1 hour from Tokyo)" },
      { time: "10:00 AM", activity: "Tsurugaoka Hachimangu Shrine" },
      { time: "11:00 AM", activity: "Hokokuji Temple bamboo grove (optional matcha)" },
      { time: "12:00 PM", activity: "Lunch at a local restaurant (guide recommends based on your preferences)" },
      { time: "1:30 PM", activity: "Great Buddha at Kotoku-in" },
      { time: "2:30 PM", activity: "Hasedera Temple (ocean views from observation deck)" },
      { time: "3:30 PM", activity: "Komachi-dori street — street food, shopping" },
      { time: "4:30 PM", activity: "Return to Tokyo by train" },
      { time: "5:30 PM", activity: "Arrive back in Tokyo" },
    ],
    includes: [
      "Licensed English-speaking guide for the full day",
      "Custom itinerary planning based on your interests",
      "Navigation of trains and local transport",
      "Restaurant recommendations and booking assistance",
      "Cultural context and historical explanations at each site",
    ],
    notIncluded: [
      "Train fares (approx. ¥1,500-2,000 round trip per person)",
      "Lunch and snacks",
      "Temple admission fees (approx. ¥200-400 per site)",
    ],
    practicalInfo: {
      duration: "7-8 hours (flexible)",
      bestSeason: "Year-round. June for hydrangeas, November-December for autumn leaves",
      difficulty: "Easy to moderate walking on mostly flat terrain",
      goodFor: "Families, couples, history enthusiasts, first-time Japan visitors",
    },
    whyGuide: "Kamakura has over 65 temples and shrines — a guide helps you prioritize and understand the rich history of Japan's first military capital. Skip the confusion of train connections and navigate crowds efficiently, especially at popular sites. Your guide provides cultural context that transforms temple visits from sightseeing into meaningful experiences.",
    suitableFor: [
      "Families with children",
      "Couples seeking a romantic day out",
      "History and culture enthusiasts",
      "First-time visitors to Japan",
      "Anyone wanting to escape the city for a day",
    ],
  },
  "hakone-day-trip": {
    title: "Hakone Day Trip",
    subtitle: "Mt. Fuji views, hot springs & volcanic valleys",
    description: "Experience the best of Hakone in a single day — cruise across Lake Ashi with Mt. Fuji as your backdrop, ride the aerial ropeway over steaming volcanic valleys, and discover the iconic lakeside torii gate of Hakone Shrine. Your guide navigates the complex transport system so you can focus on the views.",
    duration: "8-10 hours",
    price: "¥55,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "8:00 AM",
    meetingPoint: "Your hotel in Tokyo",
    images: [
      { src: "/images/tours/hakone-lake-ashi-fuji.jpg", alt: "Lake Ashi with Mt Fuji view - Hakone day trip from Tokyo", position: "center" },
      { src: "/images/tours/hakone-ropeway-owakudani.jpg", alt: "Hakone Ropeway over Owakudani volcanic valley", position: "center" },
      { src: "/images/tours/hakone-pirate-ship-ashi.jpg", alt: "Pirate ship cruise on Lake Ashi Hakone", position: "center" },
    ],
    highlights: [
      "Lake Ashi pirate ship cruise with Mt. Fuji views (weather permitting)",
      "Hakone Ropeway — aerial views over Owakudani volcanic valley",
      "Owakudani — volcanic hot springs, famous black eggs",
      "Hakone Shrine — iconic torii gate on the lake",
      "Optional: Hakone Open-Air Museum or onsen (hot spring) experience",
    ],
    itinerary: [
      { time: "8:00 AM", activity: "Meet at your hotel in Tokyo" },
      { time: "9:30 AM", activity: "Arrive Hakone-Yumoto by Romancecar (scenic express train)" },
      { time: "10:00 AM", activity: "Hakone Ropeway to Owakudani" },
      { time: "11:00 AM", activity: "Owakudani volcanic valley (try the famous black eggs!)" },
      { time: "12:00 PM", activity: "Continue ropeway to Togendai" },
      { time: "12:30 PM", activity: "Lake Ashi cruise (Mt. Fuji views on clear days)" },
      { time: "1:30 PM", activity: "Hakone Shrine (walk the lakeside torii gate path)" },
      { time: "2:30 PM", activity: "Lunch at a local restaurant" },
      { time: "3:30 PM", activity: "Option: Open-Air Museum OR onsen foot bath" },
      { time: "5:00 PM", activity: "Return to Tokyo by Romancecar" },
      { time: "6:30 PM", activity: "Arrive back in Tokyo" },
    ],
    includes: [
      "Licensed English-speaking guide for the full day",
      "Custom itinerary planning",
      "Hakone transport navigation (ropeway, cruise, buses — it's complex!)",
      "Restaurant and onsen recommendations",
      "Cultural and geological explanations",
    ],
    notIncluded: [
      "Hakone Free Pass (approx. ¥6,100 — covers all Hakone transport + round trip from Shinjuku)",
      "Lunch",
      "Museum admission / onsen fees",
      "Romancecar supplement (approx. ¥1,110 each way, optional)",
    ],
    practicalInfo: {
      duration: "8-10 hours",
      bestSeason: "October-February for Mt. Fuji visibility. Year-round for hot springs",
      difficulty: "Easy. Mostly transport-based with short walks",
      goodFor: "Nature lovers, photographers, couples, anyone wanting to escape the city",
    },
    whyGuide: "Hakone's transport system (trains, cable cars, ropeways, buses, boats) can be overwhelming for first-time visitors. A guide navigates the famous \"Hakone Loop\" efficiently, saving you time and confusion. More importantly, Mt. Fuji visibility changes by the hour — your guide adjusts the itinerary in real-time to maximize your chances of that iconic view.",
    suitableFor: [
      "Nature lovers and photographers",
      "Couples seeking a scenic getaway",
      "Hot spring enthusiasts",
      "First-time visitors wanting to see Mt. Fuji",
      "Anyone wanting variety (mountains, lakes, volcanoes)",
    ],
  },
  "nikko-day-trip": {
    title: "Nikko Day Trip",
    subtitle: "UNESCO shrines, waterfalls & mountain scenery",
    description: "Journey to Nikko, home to Japan's most ornate shrine complex and breathtaking mountain scenery. Discover the UNESCO World Heritage Toshogu Shrine with its 5,000+ intricate carvings, witness the powerful Kegon Falls, and enjoy the serene beauty of Lake Chuzenji — all with expert historical commentary from your guide.",
    duration: "9-10 hours",
    price: "¥60,000",
    difficulty: "Moderate",
    groupSize: "1-6 people",
    startTime: "7:30 AM",
    meetingPoint: "Tokyo Station",
    images: [
      { src: hamarikyu, alt: "Toshogu Shrine ornate carvings in Nikko", position: "center" },
    ],
    highlights: [
      "Toshogu Shrine — UNESCO World Heritage, Japan's most ornate shrine complex",
      "\"See no evil, speak no evil, hear no evil\" original carvings",
      "Shinkyo Bridge — sacred vermillion bridge over the Daiya River",
      "Kegon Falls — one of Japan's most famous waterfalls (97m drop)",
      "Lake Chuzenji — mountain lake at 1,269m elevation",
    ],
    itinerary: [
      { time: "7:30 AM", activity: "Meet at Tokyo Station" },
      { time: "9:30 AM", activity: "Arrive Nikko by Shinkansen + local train (~2 hours)" },
      { time: "10:00 AM", activity: "Shinkyo Bridge (photo stop)" },
      { time: "10:30 AM", activity: "Toshogu Shrine complex (allow 1.5-2 hours)" },
      { time: "12:30 PM", activity: "Lunch (try local specialty: yuba — tofu skin dishes)" },
      { time: "1:30 PM", activity: "Drive/bus to Chuzenji area" },
      { time: "2:00 PM", activity: "Kegon Falls observation platform" },
      { time: "2:30 PM", activity: "Lake Chuzenji lakeside walk" },
      { time: "3:30 PM", activity: "Return to Nikko Station" },
      { time: "4:00 PM", activity: "Train back to Tokyo" },
      { time: "6:00 PM", activity: "Arrive Tokyo" },
    ],
    includes: [
      "Licensed English-speaking guide for the full day",
      "Custom itinerary planning",
      "Train and bus navigation",
      "Detailed explanations of Toshogu's intricate carvings and Shinto/Buddhist history",
      "Local food recommendations",
    ],
    notIncluded: [
      "Train fares (approx. ¥5,000-8,000 round trip depending on train type)",
      "Toshogu Shrine admission (¥1,600)",
      "Lunch",
      "Kegon Falls elevator (¥570, optional)",
      "Bus fares within Nikko area",
    ],
    practicalInfo: {
      duration: "9-10 hours (Nikko is further from Tokyo)",
      bestSeason: "October-November for spectacular autumn foliage. May for spring greenery",
      difficulty: "Moderate. Some uphill walking and stairs at Toshogu",
      goodFor: "History buffs, nature lovers, UNESCO heritage enthusiasts, photographers",
    },
    whyGuide: "Toshogu Shrine has over 5,000 intricate carvings — without a guide, you'll walk past 90% of them without understanding their meaning. The shrine complex is a masterpiece of Tokugawa-era craftsmanship, and a knowledgeable guide transforms the visit from \"pretty buildings\" into a deep dive into Japanese political and spiritual history. The guide also handles the complex transport logistics between Nikko town and the mountain lake area.",
    suitableFor: [
      "History buffs and culture enthusiasts",
      "Nature lovers and photographers",
      "UNESCO heritage enthusiasts",
      "Those seeking less-crowded destinations",
      "Travelers who enjoy deeper cultural experiences",
    ],
  },
};

const relatedTours: Record<string, string[]> = {
  asakusa: ["yanaka", "tsukiji-ginza", "kamakura-day-trip"],
  yanaka: ["asakusa", "imperial-palace", "nikko-day-trip"],
  "shibuya-harajuku": ["tsukiji-ginza", "asakusa", "hakone-day-trip"],
  "tsukiji-ginza": ["asakusa", "imperial-palace", "kamakura-day-trip"],
  "imperial-palace": ["asakusa", "tsukiji-ginza", "nikko-day-trip"],
  custom: ["asakusa", "shibuya-harajuku", "hakone-day-trip"],
  "kamakura-day-trip": ["hakone-day-trip", "nikko-day-trip", "custom"],
  "hakone-day-trip": ["kamakura-day-trip", "nikko-day-trip", "custom"],
  "nikko-day-trip": ["kamakura-day-trip", "hakone-day-trip", "custom"],
};

const tourNames: Record<string, string> = {
  asakusa: "Asakusa Walking Tour",
  yanaka: "Yanaka Walking Tour",
  "shibuya-harajuku": "Shibuya & Harajuku Tour",
  "tsukiji-ginza": "Tsukiji & Ginza Tour",
  "imperial-palace": "Imperial Palace Tour",
  custom: "Custom Private Tour",
  "kamakura-day-trip": "Kamakura Day Trip",
  "hakone-day-trip": "Hakone Day Trip",
  "nikko-day-trip": "Nikko Day Trip",
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
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground">{seo.h1}</h1>
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

              {/* Not Included (day trips only) */}
              {"notIncluded" in tour && (tour as any).notIncluded && (
                <div>
                  <h2 className="heading-card text-foreground mb-4">Not Included</h2>
                  <ul className="space-y-3">
                    {((tour as any).notIncluded as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Why Go With a Private Guide (day trips only) */}
              {"whyGuide" in tour && (tour as any).whyGuide && (
                <div className="bg-secondary/50 rounded-lg p-6">
                  <h2 className="heading-card text-foreground mb-4">Why Go With a Private Guide?</h2>
                  <p className="text-muted-foreground leading-relaxed">{(tour as any).whyGuide}</p>
                </div>
              )}

              {/* Practical Information (day trips only) */}
              {"practicalInfo" in tour && (tour as any).practicalInfo && (
                <div>
                  <h2 className="heading-card text-foreground mb-4">Practical Information</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                      <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Duration</p>
                        <p className="text-muted-foreground text-sm">{(tour as any).practicalInfo.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                      <Calendar className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Best Season</p>
                        <p className="text-muted-foreground text-sm">{(tour as any).practicalInfo.bestSeason}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                      <Footprints className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Difficulty</p>
                        <p className="text-muted-foreground text-sm">{(tour as any).practicalInfo.difficulty}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                      <Users className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Good For</p>
                        <p className="text-muted-foreground text-sm">{(tour as any).practicalInfo.goodFor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

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

      {/* Day Trip CTA */}
      {"whyGuide" in tour && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-section text-center">
            <h2 className="heading-section">Ready to explore {tour.title.replace(" Day Trip", "")}?</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
              Let's create an unforgettable day trip experience. Contact us to book your private guided tour or customize the itinerary.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent">
                Book This Tour
              </Link>
              <Link to="/tours/custom" className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-md transition-all duration-200 hover:bg-primary-foreground/10">
                Customize This Trip
              </Link>
            </div>
          </div>
        </section>
      )}

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
                    <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
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
