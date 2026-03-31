import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import TokyoFoodTour from "./pages/tours/TokyoFoodTour";
import TokyoNightTour from "./pages/tours/TokyoNightTour";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import BlogIndex from "./pages/blog/BlogIndex";
import Tokyo3DayItinerary from "./pages/blog/Tokyo3DayItinerary";
import Tokyo5DayItinerary from "./pages/blog/Tokyo5DayItinerary";
import IsItWorthHiringGuide from "./pages/blog/IsItWorthHiringGuide";
import DayTripComparison from "./pages/blog/DayTripComparison";
import AsakusaGuide from "./pages/blog/AsakusaGuide";
import ShibuyaHarajukuGuide from "./pages/blog/ShibuyaHarajukuGuide";
import ShinjukuGuide from "./pages/blog/ShinjukuGuide";
import TsukijiGuide from "./pages/blog/TsukijiGuide";
import BestTimeToVisit from "./pages/blog/BestTimeToVisit";
import TempleEtiquette from "./pages/blog/TempleEtiquette";
import AsakusaGuideNew from "./pages/blog/AsakusaGuideNew";
import JapanRailPass from "./pages/blog/JapanRailPass";
import KamakuraDayTrip from "./pages/blog/KamakuraDayTrip";
import KawagoeDayTrip from "./pages/blog/KawagoeDayTrip";

import NikkoDayTrip from "./pages/blog/NikkoDayTrip";
import OldTokyoShitamachi from "./pages/blog/OldTokyoShitamachi";
import RamenGuideTokyo from "./pages/blog/RamenGuideTokyo";
import SensojiMostVisited from "./pages/blog/SensojiMostVisited";
import SushiGuideTokyo from "./pages/blog/SushiGuideTokyo";
import TippingInJapan from "./pages/blog/TippingInJapan";
import TokyoHiddenGems from "./pages/blog/TokyoHiddenGems";
import TokyoItinerary5Days from "./pages/blog/TokyoItinerary5Days";
import TokyoOnABudget from "./pages/blog/TokyoOnABudget";
import TsukijiMarketGuide from "./pages/blog/TsukijiMarketGuide";
import YanakaWalkingRoute from "./pages/blog/YanakaWalkingRoute";
import YanakaWalkingTourGuide from "./pages/blog/YanakaWalkingTourGuide";
import YokohamaDayTrip from "./pages/blog/YokohamaDayTrip";
import VegetarianFoodTourTokyo from "./pages/blog/VegetarianFoodTourTokyo";
import TokyoPrivateTourGuideCost from "./pages/blog/TokyoPrivateTourGuideCost";
import TokyoWithKidsFamilyTour from "./pages/blog/TokyoWithKidsFamilyTour";
import WhatToExpectPrivateTour from "./pages/blog/WhatToExpectPrivateTour";
import HakoneDayTripGuideVsSolo from "./pages/blog/HakoneDayTripGuideVsSolo";
import TsukijiToGinzaFoodWalk from "./pages/blog/TsukijiToGinzaFoodWalk";
import FirstTimeTokyoLocalGuide from "./pages/blog/FirstTimeTokyoLocalGuide";
import TokyoCherryBlossomGuide from "./pages/blog/TokyoCherryBlossomGuide";
import TsukijiVsToyosu from "./pages/blog/TsukijiVsToyosu";
import NotFound from "./pages/NotFound";
import EsIndex from "./pages/es/EsIndex";
import EsAsakusa from "./pages/es/tours/EsAsakusa";
import EsYanaka from "./pages/es/tours/EsYanaka";
import EsKamakura from "./pages/es/tours/EsKamakura";
import EsContact from "./pages/es/EsContact";
import EsAbout from "./pages/es/EsAbout";
import EsTours from "./pages/es/EsTours";
import EsFaq from "./pages/es/EsFaq";
import EsShibuyaHarajuku from "./pages/es/tours/EsShibuyaHarajuku";
import EsTsukijiGinza from "./pages/es/tours/EsTsukijiGinza";
import EsImperialPalace from "./pages/es/tours/EsImperialPalace";
import EsHakone from "./pages/es/tours/EsHakone";
import EsNikko from "./pages/es/tours/EsNikko";
import EsCustom from "./pages/es/tours/EsCustom";
import EsBlogIndex from "./pages/es/blog/EsBlogIndex";
import EsItinerarioTokio3Dias from "./pages/es/blog/EsItinerarioTokio3Dias";
import EsGuiaAsakusa from "./pages/es/blog/EsGuiaAsakusa";
import EsGuiaShibuyaHarajuku from "./pages/es/blog/EsGuiaShibuyaHarajuku";
import EsGuiaShinjuku from "./pages/es/blog/EsGuiaShinjuku";
import EsGuiaTsukiji from "./pages/es/blog/EsGuiaTsukiji";
import EsMejorEpocaVisitarTokio from "./pages/es/blog/EsMejorEpocaVisitarTokio";
import EsEtiquetaTemplos from "./pages/es/blog/EsEtiquetaTemplos";
import EsValeLaPenaGuia from "./pages/es/blog/EsValeLaPenaGuia";
import EsComparativaExcursiones from "./pages/es/blog/EsComparativaExcursiones";

import EsPropinasenJapon from "./pages/es/blog/EsPropinasenJapon";
import EsQueSecomeEnJapon from "./pages/es/blog/EsQueSecomeEnJapon";
import EsMercadoTsukijiTokio from "./pages/es/blog/EsMercadoTsukijiTokio";
import EsComidaCallejeraTokio from "./pages/es/blog/EsComidaCallejeraTokio";
import EsQueComerEnJapon from "./pages/es/blog/EsQueComerEnJapon";
import EsJapanRailPass from "./pages/es/blog/EsJapanRailPass";
import EsTemplosFamososJapon from "./pages/es/blog/EsTemplosFamososJapon";
import EsItinerarioTokio5Dias from "./pages/es/blog/EsItinerarioTokio5Dias";
import EsMonteFujiSeVeDesdeTokio from "./pages/es/blog/EsMonteFujiSeVeDesdeTokio";
import EsExcursionNikkoDesdeTokio from "./pages/es/blog/EsExcursionNikkoDesdeTokio";
import EsKamakuraDesdeTokio from "./pages/es/blog/EsKamakuraDesdeTokio";
import EsYanakaTokio from "./pages/es/blog/EsYanakaTokio";
import EsGuiaLicenciaOficialJapon from "./pages/es/blog/EsGuiaLicenciaOficialJapon";
import EsAsakusaTokioGuia from "./pages/es/blog/EsAsakusaTokioGuia";
import EsTsukiji2026 from "./pages/es/blog/EsTsukiji2026";
import EsShitamachiTokio from "./pages/es/blog/EsShitamachiTokio";
import EsCuantoCuestaGuiaPrivadoTokio from "./pages/es/blog/EsCuantoCuestaGuiaPrivadoTokio";
import EsValeLaPenaGuiaPrivadoTokio from "./pages/es/blog/EsValeLaPenaGuiaPrivadoTokio";
import EsPrimeraVezTokioGuiaLocal from "./pages/es/blog/EsPrimeraVezTokioGuiaLocal";
import EsTourGastronomicoTokio from "./pages/es/blog/EsTourGastronomicoTokio";
import EsCerezosEnFlorTokio from "./pages/es/blog/EsCerezosEnFlorTokio";
import EsTesorosOcultosTokio from "./pages/es/blog/EsTesorosOcultosTokio";
import EsRutaGastronomicaTsukijiGinza from "./pages/es/blog/EsRutaGastronomicaTsukijiGinza";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/tokyo-food-tour" element={<TokyoFoodTour />} />
        <Route path="/tours/tokyo-night-tour" element={<TokyoNightTour />} />
        <Route path="/tours/:id" element={<TourDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/tokyo-3-day-itinerary" element={<Tokyo3DayItinerary />} />
        <Route path="/blog/tokyo-5-day-itinerary" element={<Tokyo5DayItinerary />} />
        <Route path="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" element={<IsItWorthHiringGuide />} />
        <Route path="/blog/kamakura-vs-hakone-vs-nikko-day-trip" element={<DayTripComparison />} />
        <Route path="/blog/asakusa-guide-what-to-see" element={<AsakusaGuide />} />
        <Route path="/blog/shibuya-harajuku-guide" element={<ShibuyaHarajukuGuide />} />
        <Route path="/blog/shinjuku-guide" element={<ShinjukuGuide />} />
        <Route path="/blog/tsukiji-guide-food-lover" element={<TsukijiGuide />} />
        <Route path="/blog/best-time-to-visit-tokyo" element={<BestTimeToVisit />} />
        <Route path="/blog/japan-temple-shrine-etiquette" element={<TempleEtiquette />} />
        <Route path="/blog/asakusa-guide" element={<AsakusaGuideNew />} />
        <Route path="/blog/japan-rail-pass-worth-it" element={<JapanRailPass />} />
        <Route path="/blog/kamakura-day-trip-from-tokyo" element={<KamakuraDayTrip />} />
        <Route path="/blog/kawagoe-day-trip-from-tokyo" element={<KawagoeDayTrip />} />

        <Route path="/blog/nikko-day-trip-from-tokyo" element={<NikkoDayTrip />} />
        <Route path="/blog/old-tokyo-shitamachi" element={<OldTokyoShitamachi />} />
        <Route path="/blog/ramen-guide-tokyo" element={<RamenGuideTokyo />} />
        <Route path="/blog/senso-ji-most-visited-temple" element={<SensojiMostVisited />} />
        <Route path="/blog/sushi-guide-tokyo" element={<SushiGuideTokyo />} />
        <Route path="/blog/tipping-in-japan" element={<TippingInJapan />} />
        <Route path="/blog/tokyo-hidden-gems" element={<TokyoHiddenGems />} />
        <Route path="/blog/tokyo-itinerary-5-days" element={<TokyoItinerary5Days />} />
        <Route path="/blog/tokyo-on-a-budget" element={<TokyoOnABudget />} />
        <Route path="/blog/tsukiji-market-guide" element={<TsukijiMarketGuide />} />
        <Route path="/blog/yanaka-tokyo-walking-route" element={<YanakaWalkingRoute />} />
        <Route path="/blog/yanaka-walking-tour-guide" element={<YanakaWalkingTourGuide />} />
        <Route path="/blog/yokohama-day-trip-from-tokyo" element={<YokohamaDayTrip />} />
        <Route path="/blog/vegetarian-food-tour-tokyo" element={<VegetarianFoodTourTokyo />} />
        <Route path="/blog/tokyo-private-tour-guide-cost" element={<TokyoPrivateTourGuideCost />} />
        <Route path="/blog/tokyo-with-kids-family-tour" element={<TokyoWithKidsFamilyTour />} />
        <Route path="/blog/what-to-expect-private-tour-tokyo" element={<WhatToExpectPrivateTour />} />
        <Route path="/blog/hakone-day-trip-guide-vs-solo" element={<HakoneDayTripGuideVsSolo />} />
        <Route path="/blog/tsukiji-to-ginza-food-walk" element={<TsukijiToGinzaFoodWalk />} />
        <Route path="/blog/first-time-tokyo-local-guide" element={<FirstTimeTokyoLocalGuide />} />
        <Route path="/blog/tokyo-cherry-blossom-guide" element={<TokyoCherryBlossomGuide />} />
        <Route path="/blog/tsukiji-vs-toyosu" element={<TsukijiVsToyosu />} />
        {/* Spanish Pages */}
        <Route path="/es" element={<EsIndex />} />
        <Route path="/es/tours" element={<EsTours />} />
        <Route path="/es/tours/asakusa" element={<EsAsakusa />} />
        <Route path="/es/tours/yanaka" element={<EsYanaka />} />
        <Route path="/es/tours/kamakura-day-trip" element={<EsKamakura />} />
        <Route path="/es/tours/shibuya-harajuku" element={<EsShibuyaHarajuku />} />
        <Route path="/es/tours/tsukiji-ginza" element={<EsTsukijiGinza />} />
        <Route path="/es/tours/imperial-palace" element={<EsImperialPalace />} />
        <Route path="/es/tours/hakone-day-trip" element={<EsHakone />} />
        <Route path="/es/tours/nikko-day-trip" element={<EsNikko />} />
        <Route path="/es/tours/custom" element={<EsCustom />} />
        <Route path="/es/contact" element={<EsContact />} />
        <Route path="/es/about" element={<EsAbout />} />
        <Route path="/es/faq" element={<EsFaq />} />
        {/* Spanish Blog */}
        <Route path="/es/blog" element={<EsBlogIndex />} />
        <Route path="/es/blog/itinerario-tokio-3-dias" element={<EsItinerarioTokio3Dias />} />
        <Route path="/es/blog/guia-asakusa" element={<EsGuiaAsakusa />} />
        <Route path="/es/blog/guia-shibuya-harajuku" element={<EsGuiaShibuyaHarajuku />} />
        <Route path="/es/blog/guia-shinjuku" element={<EsGuiaShinjuku />} />
        <Route path="/es/blog/guia-tsukiji" element={<EsGuiaTsukiji />} />
        <Route path="/es/blog/mejor-epoca-visitar-tokio" element={<EsMejorEpocaVisitarTokio />} />
        <Route path="/es/blog/etiqueta-templos-santuarios" element={<EsEtiquetaTemplos />} />
        <Route path="/es/blog/vale-la-pena-contratar-guia" element={<EsValeLaPenaGuia />} />
        <Route path="/es/blog/comparativa-excursiones" element={<EsComparativaExcursiones />} />

        <Route path="/es/blog/propinas-en-japon" element={<EsPropinasenJapon />} />
        <Route path="/es/blog/que-se-come-en-japon" element={<EsQueSecomeEnJapon />} />
        <Route path="/es/blog/mercado-tsukiji-tokio" element={<EsMercadoTsukijiTokio />} />
        <Route path="/es/blog/comida-callejera-tokio" element={<EsComidaCallejeraTokio />} />
        <Route path="/es/blog/que-comer-en-japon" element={<EsQueComerEnJapon />} />
        <Route path="/es/blog/japan-rail-pass-vale-la-pena" element={<EsJapanRailPass />} />
        <Route path="/es/blog/templos-famosos-japon" element={<EsTemplosFamososJapon />} />
        <Route path="/es/blog/itinerario-tokio-5-dias" element={<EsItinerarioTokio5Dias />} />
        <Route path="/es/blog/monte-fuji-se-ve-desde-tokio" element={<EsMonteFujiSeVeDesdeTokio />} />
        <Route path="/es/blog/excursion-nikko-desde-tokio" element={<EsExcursionNikkoDesdeTokio />} />
        <Route path="/es/blog/kamakura-desde-tokio" element={<EsKamakuraDesdeTokio />} />
        <Route path="/es/blog/yanaka-tokio-itinerario" element={<EsYanakaTokio />} />
        <Route path="/es/blog/guia-licencia-oficial-japon" element={<EsGuiaLicenciaOficialJapon />} />
        <Route path="/es/blog/asakusa-tokio-guia" element={<EsAsakusaTokioGuia />} />
        <Route path="/es/blog/tsukiji-2026" element={<EsTsukiji2026 />} />
        <Route path="/es/blog/shitamachi-tokio" element={<EsShitamachiTokio />} />
        <Route path="/es/blog/cuanto-cuesta-guia-privado-tokio" element={<EsCuantoCuestaGuiaPrivadoTokio />} />
        <Route path="/es/blog/vale-la-pena-guia-privado-tokio" element={<EsValeLaPenaGuiaPrivadoTokio />} />
        <Route path="/es/blog/primera-vez-tokio-guia-local" element={<EsPrimeraVezTokioGuiaLocal />} />
        <Route path="/es/blog/tour-gastronomico-tokio" element={<EsTourGastronomicoTokio />} />
        <Route path="/es/blog/cerezos-en-flor-tokio" element={<EsCerezosEnFlorTokio />} />
        <Route path="/es/blog/tesoros-ocultos-tokio" element={<EsTesorosOcultosTokio />} />
        <Route path="/es/blog/ruta-gastronomica-tsukiji-ginza" element={<EsRutaGastronomicaTsukijiGinza />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppRoutes;
