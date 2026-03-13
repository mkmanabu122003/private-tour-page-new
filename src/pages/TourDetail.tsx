import { useParams, Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { Clock, Users, MapPin, Check, X, ArrowLeft, ChevronLeft, ChevronRight, ArrowRight, Calendar, Mountain, Footprints, Info } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { StickyBookingBar } from "@/components/tours/StickyBookingBar";
import { trackBookNowClick, trackTourPageView } from "@/lib/ga4";
import useEmblaCarousel from "embla-carousel-react";
import tourYanaka from "@/assets/tour-yanaka.webp";
import tourUeno from "@/assets/tour-ueno.webp";
import uenoNight from "@/assets/ueno-night.webp";
import imperialPalace from "@/assets/imperial-palace.webp";
import imperialBridge from "@/assets/imperial-bridge.webp";
import tokyoStation from "@/assets/tokyo-station.webp";
import hamarikyu from "@/assets/hamarikyu.webp";
import nikkoToshogu from "@/assets/nikko-toshogu.webp";
import yanakaGinzaStairs from "@/assets/yanaka-ginza-stairs.webp";
import yanakaCandyShop from "@/assets/yanaka-candy-shop.webp";

const tourSEO: Record<string, { title: string; description: string; h1: string }> = {
  asakusa: {
    title: "Asakusa Walking Tour | Private Tokyo Tour Guide | Tanuki Tabi Travel",
    description: "Discover old Tokyo on a private Asakusa walking tour. Visit Senso-ji Temple, Nakamise Street, and hidden alleyways with a licensed government guide. From ¥30,000.",
    h1: "Asakusa Private Walking Tour",
  },
  yanaka: {
    title: "Yanaka Walking Tour | Tokyo's Hidden Old Town | Tanuki Tabi Travel",
    description: "Explore Yanaka and Ueno on a private guided walk through Tokyo's most nostalgic neighborhood. Local temples, vintage shops, and authentic local life. From ¥40,000.",
    h1: "Yanaka Private Walking Tour",
  },
  "shibuya-harajuku": {
    title: "Shibuya & Harajuku Tour | Pop Culture & Fashion | Tanuki Tabi Travel",
    description: "Walk the famous Shibuya Crossing and explore Harajuku on a private guided tour. Meiji Shrine, Takeshita Street, and youth culture explained in depth. From ¥35,000.",
    h1: "Shibuya & Harajuku Private Walking Tour",
  },
  "tsukiji-ginza": {
    title: "Tsukiji & Ginza Tour | Food & Luxury Shopping | Tanuki Tabi Travel",
    description: "Taste Tokyo at Tsukiji Outer Market and stroll upscale Ginza on a private guided tour. Street food, history, and local culture, all in one morning. From ¥30,000.",
    h1: "Tsukiji & Ginza Private Walking Tour",
  },
  "imperial-palace": {
    title: "Imperial Palace Tour | Tokyo History Walk | Tanuki Tabi Travel",
    description: "Walk the Imperial Palace East Gardens and Marunouchi on a private guided tour. Tokyo's historical and modern heart explained by a certified guide. From ¥25,000.",
    h1: "Imperial Palace Private Walking Tour",
  },
  custom: {
    title: "Custom Tokyo Tour | Design Your Own Itinerary | Tanuki Tabi Travel",
    description: "Design your perfect Tokyo tour. Tell your interests and get a fully personalized private itinerary from Manabu, a government-licensed guide with 500+ tours.",
    h1: "Custom Private Tour: Your Tokyo, Your Way",
  },
  "kamakura-day-trip": {
    title: "Kamakura Day Trip from Tokyo | Private Guided Tour | Tanuki Tabi Travel",
    description: "Take a private day trip to Kamakura with a licensed Tokyo guide. The Great Buddha, ancient temples, and coastal scenery, all in one full day. From ¥50,000.",
    h1: "Kamakura Day Trip from Tokyo: Private Guided Tour",
  },
  "hakone-day-trip": {
    title: "Hakone Day Trip from Tokyo | Hot Springs & Mt. Fuji Views | Tanuki Tabi Travel",
    description: "See Mt. Fuji, cruise Lake Ashi, and experience onsen culture on a private Hakone day trip from Tokyo led by a certified guide. From ¥55,000.",
    h1: "Hakone Day Trip from Tokyo: Mt. Fuji Views & Hot Springs",
  },
  "nikko-day-trip": {
    title: "Nikko Day Trip from Tokyo | Toshogu Shrine & Nature | Tanuki Tabi Travel",
    description: "Visit UNESCO World Heritage Toshogu Shrine and Nikko's mountain scenery on a private day trip from Tokyo. Government-licensed guide included. From ¥60,000.",
    h1: "Nikko Day Trip from Tokyo: UNESCO Shrines & Mountain Scenery",
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
      { src: "/images/tours/asakusa-kaminarimon-morning.webp", alt: "Kaminarimon Gate Asakusa - private walking tour starting point", position: "center" },
      { src: "/images/tours/asakusa-nakamise-street.webp", alt: "Nakamise-dori shopping street leading to Senso-ji Temple", position: "center" },
      { src: "/images/tours/senso-ji-temple-tokyo.webp", alt: "Senso-ji Temple main hall - oldest temple in Tokyo", position: "center" },
      { src: "/images/tours/asakusa-backstreet-local.webp", alt: "Hidden backstreet in Asakusa away from tourist crowds", position: "center" },
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
      { src: yanakaGinzaStairs, alt: "Yanaka Ginza shopping street viewed from Yuyake Dandan stairs", position: "center" },
      { src: tourYanaka, alt: "Yanaka Ginza retro shopping street with local shops", position: "center" },
      { src: yanakaCandyShop, alt: "Goto no Ame traditional candy shop in Yanaka", position: "center" },
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
      { src: "/images/tours/shibuya-scramble-crossing.webp", alt: "Shibuya Scramble Crossing - Tokyo's most famous intersection", position: "center" },
      { src: "/images/tours/harajuku-takeshita-street.webp", alt: "Takeshita Street Harajuku - center of Tokyo youth culture", position: "center" },
      { src: "/images/tours/meiji-shrine-torii-gate.webp", alt: "Meiji Shrine entrance - peaceful contrast to busy Harajuku", position: "center" },
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
      { src: "/images/tours/tsukiji-outer-market.webp", alt: "Tsukiji Outer Market - Tokyo private food tour", position: "center" },
      { src: "/images/tours/tsukiji-street-food.webp", alt: "Fresh seafood skewers at Tsukiji Market Tokyo", position: "center" },
      { src: "/images/tours/ginza-shopping-district.webp", alt: "Ginza luxury shopping district - combine with Tsukiji tour", position: "center" },
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
    description: "Tell me your interests, and I'll create a personalized itinerary just for you. Whether you're passionate about food, history, anime, photography, or something completely unique, let's design your dream Tokyo day together.",
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
    description: "Escape Tokyo for a day and explore Kamakura, Japan's first military capital. This private day trip takes you to the iconic Great Buddha, serene temples with ocean views, and the charming Komachi-dori shopping street, all with a licensed guide who brings 800 years of samurai history to life.",
    duration: "7-8 hours",
    price: "¥50,000",
    difficulty: "Easy to moderate",
    groupSize: "1-6 people",
    startTime: "8:30 AM",
    meetingPoint: "Your hotel in Tokyo",
    images: [
      { src: "/images/tours/kamakura-great-buddha.webp", alt: "Great Buddha of Kamakura - day trip from Tokyo with guide", position: "center" },
      { src: "/images/tours/kamakura-coast-enoden.webp", alt: "Kamakura coastal view - seaside day trip from Tokyo", position: "center" },
      { src: "/images/tours/kamakura-hasedera-temple.webp", alt: "Hasedera Temple gardens in Kamakura", position: "center" },
    ],
    highlights: [
      "Great Buddha at Kotoku-in: 13th century bronze statue, one of Japan's most iconic landmarks",
      "Hasedera Temple: ocean views, Kannon statue, hydrangeas in June",
      "Tsurugaoka Hachimangu Shrine: Kamakura's most important shrine",
      "Komachi-dori shopping street: local snacks, souvenirs, artisan crafts",
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
      { time: "3:30 PM", activity: "Komachi-dori street: street food, shopping" },
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
    whyGuide: "Kamakura has over 65 temples and shrines. A guide helps you prioritize and understand the rich history of Japan's first military capital. Skip the confusion of train connections and navigate crowds efficiently, especially at popular sites. Your guide provides cultural context that transforms temple visits from sightseeing into meaningful experiences.",
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
    description: "Experience the best of Hakone in a single day. Cruise across Lake Ashi with Mt. Fuji as your backdrop, ride the aerial ropeway over steaming volcanic valleys, and discover the iconic lakeside torii gate of Hakone Shrine. Your guide navigates the complex transport system so you can focus on the views.",
    duration: "8-10 hours",
    price: "¥55,000",
    difficulty: "Easy",
    groupSize: "1-6 people",
    startTime: "8:00 AM",
    meetingPoint: "Your hotel in Tokyo",
    images: [
      { src: "/images/tours/hakone-lake-ashi-fuji.webp", alt: "Lake Ashi with Mt Fuji view - Hakone day trip from Tokyo", position: "center" },
      { src: "/images/tours/hakone-ropeway-owakudani.webp", alt: "Hakone Ropeway over Owakudani volcanic valley", position: "center" },
      { src: "/images/tours/hakone-pirate-ship-ashi.webp", alt: "Pirate ship cruise on Lake Ashi Hakone", position: "center" },
    ],
    highlights: [
      "Lake Ashi pirate ship cruise with Mt. Fuji views (weather permitting)",
      "Hakone Ropeway: aerial views over Owakudani volcanic valley",
      "Owakudani: volcanic hot springs, famous black eggs",
      "Hakone Shrine: iconic torii gate on the lake",
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
      "Hakone transport navigation (ropeway, cruise, buses; it's complex!)",
      "Restaurant and onsen recommendations",
      "Cultural and geological explanations",
    ],
    notIncluded: [
      "Hakone Free Pass (approx. ¥6,100; covers all Hakone transport + round trip from Shinjuku)",
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
    whyGuide: "Hakone's transport system (trains, cable cars, ropeways, buses, boats) can be overwhelming for first-time visitors. A guide navigates the famous \"Hakone Loop\" efficiently, saving you time and confusion. More importantly, Mt. Fuji visibility changes by the hour, so your guide adjusts the itinerary in real-time to maximize your chances of that iconic view.",
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
    description: "Journey to Nikko, home to Japan's most ornate shrine complex and breathtaking mountain scenery. Discover the UNESCO World Heritage Toshogu Shrine with its 5,000+ intricate carvings, witness the powerful Kegon Falls, and enjoy the serene beauty of Lake Chuzenji, all with expert historical commentary from your guide.",
    duration: "9-10 hours",
    price: "¥60,000",
    difficulty: "Moderate",
    groupSize: "1-6 people",
    startTime: "7:30 AM",
    meetingPoint: "Tokyo Station",
    images: [
      { src: nikkoToshogu, alt: "Stone torii gate and shrine buildings at Toshogu Shrine in Nikko", position: "center" },
    ],
    highlights: [
      "Toshogu Shrine: UNESCO World Heritage, Japan's most ornate shrine complex",
      "\"See no evil, speak no evil, hear no evil\" original carvings",
      "Shinkyo Bridge: sacred vermillion bridge over the Daiya River",
      "Kegon Falls: one of Japan's most famous waterfalls (97m drop)",
      "Lake Chuzenji: mountain lake at 1,269m elevation",
    ],
    itinerary: [
      { time: "7:30 AM", activity: "Meet at Tokyo Station" },
      { time: "9:30 AM", activity: "Arrive Nikko by Shinkansen + local train (~2 hours)" },
      { time: "10:00 AM", activity: "Shinkyo Bridge (photo stop)" },
      { time: "10:30 AM", activity: "Toshogu Shrine complex (allow 1.5-2 hours)" },
      { time: "12:30 PM", activity: "Lunch (try local specialty: yuba, tofu skin dishes)" },
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
    whyGuide: "Toshogu Shrine has over 5,000 intricate carvings. Without a guide, you'll walk past 90% of them without understanding their meaning. The shrine complex is a masterpiece of Tokugawa-era craftsmanship, and a knowledgeable guide transforms the visit from \"pretty buildings\" into a deep dive into Japanese political and spiritual history. The guide also handles the complex transport logistics between Nikko town and the mountain lake area.",
    suitableFor: [
      "History buffs and culture enthusiasts",
      "Nature lovers and photographers",
      "UNESCO heritage enthusiasts",
      "Those seeking less-crowded destinations",
      "Travelers who enjoy deeper cultural experiences",
    ],
  },
};

const tourFAQs: Record<string, { question: string; answer: string }[]> = {
  "tsukiji-ginza": [
    { question: "What time should I book the Tsukiji & Ginza tour?", answer: "The morning session starting at 9:00 AM is strongly recommended. Tsukiji Outer Market is at its freshest and liveliest early in the morning, with most stalls closing by 2:00 PM." },
    { question: "Is Tsukiji Outer Market still open?", answer: "Yes! Only the inner wholesale market moved to Toyosu in 2018. The outer market with 460+ shops, restaurants, and food stalls remains fully open." },
    { question: "What dietary restrictions can you accommodate?", answer: "We can accommodate most dietary restrictions including vegetarian, pescatarian, halal, and common allergies. Let us know when booking and we'll plan the food stops accordingly." },
    { question: "How many people can join the tour?", answer: "Our private tours accommodate 1-6 people per group. The per-group pricing means larger groups get better value per person." },
  ],
  "nikko-day-trip": [
    { question: "How do we get to Nikko from Tokyo?", answer: "We take the JR Tohoku Shinkansen to Utsunomiya, then transfer to the JR Nikko Line. Total journey is about 2 hours. Your guide handles all navigation and tickets." },
    { question: "Is the Nikko day trip suitable for children?", answer: "Yes, though there are some stairs and uphill walking at Toshogu Shrine. Children usually love the ornate carvings (especially the sleeping cat and three monkeys) and the waterfall." },
    { question: "What is the best season to visit Nikko?", answer: "October to November offers spectacular autumn foliage. May brings lush spring greenery. Summer is cooler than Tokyo, making it a pleasant escape. Winter has fewer crowds but some facilities may be closed." },
    { question: "What does the tour cost not include?", answer: "Train fares (approx. ¥5,000-8,000 round trip), Toshogu Shrine admission (¥1,600), lunch, Kegon Falls elevator (¥570, optional), and local bus fares are not included in the guide fee." },
  ],
  "kamakura-day-trip": [
    { question: "How far is Kamakura from Tokyo?", answer: "Kamakura is about 1 hour from Tokyo by train. We typically take the JR Yokosuka Line from Tokyo Station directly to Kamakura Station." },
    { question: "Can we customize the Kamakura itinerary?", answer: "Absolutely. Kamakura has over 65 temples and shrines. Your guide will tailor the route to your interests — whether that's history, hiking trails, zen gardens, or beach views." },
    { question: "Is Kamakura worth visiting with kids?", answer: "Yes! Children love the Great Buddha (you can go inside the statue), the beach, and the street food on Komachi-dori. The walking is mostly flat and manageable." },
    { question: "What should I wear to Kamakura?", answer: "Comfortable walking shoes are essential. Some temple grounds have gravel paths and stairs. Dress modestly for temple visits (shoulders and knees covered). Bring a hat and sunscreen in summer." },
  ],
  "hakone-day-trip": [
    { question: "Will I see Mt. Fuji from Hakone?", answer: "Mt. Fuji visibility depends on weather. Clearest views are typically October through February. Your guide monitors conditions and adjusts the itinerary to maximize your chances." },
    { question: "What is the Hakone Free Pass?", answer: "The Hakone Free Pass (approx. ¥6,100) covers round-trip train from Shinjuku plus unlimited rides on ropeway, cruise ship, cable car, and buses within Hakone. It's not included in the guide fee but highly recommended." },
    { question: "Can we visit an onsen (hot spring) during the tour?", answer: "Yes! We can include a public foot bath (free) or a day-use onsen facility. Let your guide know your preference when booking." },
    { question: "Is the Hakone day trip too long for elderly travelers?", answer: "The tour is mostly transport-based with short walks, so it's manageable for most fitness levels. We can adjust the pace and skip more strenuous segments if needed." },
  ],
  asakusa: [
    { question: "How long is the Asakusa walking tour?", answer: "The tour is approximately 3 hours. We cover Senso-ji Temple, Nakamise Street, hidden backstreets, and Sumida River views at a comfortable pace." },
    { question: "Is the Asakusa tour suitable for young children?", answer: "Yes! The route is flat and pram-friendly. Children enjoy the colorful temple, the fortune-telling (omikuji), and the street food on Nakamise." },
    { question: "What's the best time of day for the Asakusa tour?", answer: "Morning (10:00 AM start) is ideal for fewer crowds and better photos. The afternoon session works well too, especially for catching the evening illumination of Senso-ji." },
  ],
  "shibuya-harajuku": [
    { question: "Will we see the Shibuya Crossing from above?", answer: "Yes! Your guide will take you to the best observation points for watching and photographing the famous scramble crossing from above." },
    { question: "Is this tour suitable for teenagers?", answer: "Absolutely — this is one of our most popular tours for families with teens. Harajuku's fashion scene, crepe shops, and pop culture make it a highlight." },
    { question: "Do we visit Meiji Shrine on this tour?", answer: "Yes. Meiji Shrine is a peaceful contrast to busy Harajuku and a highlight of the tour. We walk through the forested approach and explain the Shinto rituals." },
  ],
  custom: [
    { question: "How do I tell you what I want to see?", answer: "After booking, we'll exchange messages about your interests, pace, food preferences, and any specific places you want to visit. Your guide then designs a custom itinerary." },
    { question: "What's the minimum booking time for a custom tour?", answer: "The minimum is 3 hours. Most guests book 4-6 hours for a half-day experience or 7-8 hours for a full day." },
    { question: "Can you combine multiple neighborhoods?", answer: "Yes! A custom tour can cover 2-3 areas depending on the duration. Your guide plans efficient routes using Tokyo's excellent train network." },
  ],
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
  const faqs = tourFAQs[id as string] || [];

  useEffect(() => {
    if (seo) {
      trackTourPageView(seo.h1);
    }
  }, [id, seo]);

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={`/tours/${id}`}
        hreflang={
          ["asakusa", "yanaka", "shibuya-harajuku", "tsukiji-ginza", "imperial-palace", "kamakura-day-trip", "hakone-day-trip", "nikko-day-trip", "custom"].includes(id || "")
            ? [
                { lang: "en", path: `/tours/${id}` },
                { lang: "es", path: `/es/tours/${id}` },
                { lang: "x-default", path: `/tours/${id}` },
              ]
            : undefined
        }
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
                  fetchpriority={index === 0 ? "high" : undefined}
                  loading={index === 0 ? undefined : "lazy"}
                  width={1600}
                  height={900}
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
                  loading="lazy"
                  width={64}
                  height={48}
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

                <Link to="/contact" data-cta="book-now" className="btn-accent w-full justify-center" onClick={() => trackBookNowClick("Book This Tour")}>
                  Book This Tour
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Booking CTA */}
      <section className="py-12 bg-accent/5 border-y border-accent/10">
        <div className="container-section text-center">
          <p className="text-lg sm:text-xl font-semibold text-foreground">
            Ready to book? Secure your private tour →
          </p>
          <Link
            to="/contact"
            data-cta="book-now"
            className="mt-4 inline-flex items-center justify-center px-7 py-3 bg-[#C9A84C] text-[#0D0D0D] font-semibold rounded-md transition-colors duration-200 hover:bg-[#E2C07A]"
            onClick={() => trackBookNowClick("Book Now")}
          >
            Book Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Licensed guide · Private tour
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container-section">
            <h2 className="heading-section text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Day Trip CTA */}
      {"whyGuide" in tour && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-section text-center">
            <h2 className="heading-section">Ready to explore {tour.title.replace(" Day Trip", "")}?</h2>
            <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto">
              Let's create an unforgettable day trip experience. Contact us to book your private guided tour or customize the itinerary.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" data-cta="book-now" className="btn-accent" onClick={() => trackBookNowClick("Book This Tour")}>
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
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
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
              "url": `https://tanuki-tabi-travel.com/tours/${id}`,
              "touristType": "Cultural Tourism",
              "itinerary": tour ? {
                "@type": "ItemList",
                "itemListElement": tour.highlights.map((h: string, i: number) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "name": h,
                })),
              } : undefined,
              "offers": {
                "@type": "Offer",
                "price": schema.price,
                "priceCurrency": "JPY",
                "availability": "https://schema.org/InStock",
              },
              "provider": {
                "@type": "LocalBusiness",
                "name": "Tanuki Tabi Travel",
                "url": "https://tanuki-tabi-travel.com",
              },
            }),
          }}
        />
      )}

      {/* FAQ Schema */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            }),
          }}
        />
      )}

      <StickyBookingBar tourName={tour.title} price={tour.price} />
    </Layout>
  );
};

export default TourDetail;
