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
import IsItWorthHiringGuide from "./pages/blog/IsItWorthHiringGuide";
import DayTripComparison from "./pages/blog/DayTripComparison";
import ShibuyaHarajukuGuide from "./pages/blog/ShibuyaHarajukuGuide";
import ShinjukuGuide from "./pages/blog/ShinjukuGuide";
import BestTimeToVisit from "./pages/blog/BestTimeToVisit";
import TempleEtiquette from "./pages/blog/TempleEtiquette";
import AsakusaGuideNew from "./pages/blog/AsakusaGuideNew";
import JapanRailPass from "./pages/blog/JapanRailPass";
import KamakuraDayTrip from "./pages/blog/KamakuraDayTrip";
import KawagoeDayTrip from "./pages/blog/KawagoeDayTrip";

import NikkoDayTrip from "./pages/blog/NikkoDayTrip";
import OldTokyoShitamachi from "./pages/blog/OldTokyoShitamachi";
import RamenGuideTokyo from "./pages/blog/RamenGuideTokyo";
import TokyoIzakayaGuide from "./pages/blog/TokyoIzakayaGuide";
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
import FreeWalkingTourVsPrivate from "./pages/blog/FreeWalkingTourVsPrivate";
import TokyoWithKidsFamilyTour from "./pages/blog/TokyoWithKidsFamilyTour";
import WhatToExpectPrivateTour from "./pages/blog/WhatToExpectPrivateTour";
import HakoneDayTripGuideVsSolo from "./pages/blog/HakoneDayTripGuideVsSolo";
import NikkoDayTripGuideVsSolo from "./pages/blog/NikkoDayTripGuideVsSolo";
import KamakuraDayTripGuideVsSolo from "./pages/blog/KamakuraDayTripGuideVsSolo";
import LicensedVsUnlicensedTourGuidesJapan from "./pages/blog/LicensedVsUnlicensedTourGuidesJapan";
import TsukijiToGinzaFoodWalk from "./pages/blog/TsukijiToGinzaFoodWalk";
import GinzaToTsukijiWalkingRoute from "./pages/blog/GinzaToTsukijiWalkingRoute";
import FirstTimeTokyoLocalGuide from "./pages/blog/FirstTimeTokyoLocalGuide";
import TokyoCherryBlossomGuide from "./pages/blog/TokyoCherryBlossomGuide";
import TsukijiVsToyosu from "./pages/blog/TsukijiVsToyosu";
import MountFujiFromTokyo from "./pages/blog/MountFujiFromTokyo";
import PrivateMountFujiTour2026 from "./pages/blog/PrivateMountFujiTour2026";
import BestTokyoNightTour2026 from "./pages/blog/BestTokyoNightTour2026";
import ImperialPalaceTour2026 from "./pages/blog/ImperialPalaceTour2026";
import HarajukuVsShibuyaVsShinjuku from "./pages/blog/HarajukuVsShibuyaVsShinjuku";
import NaritaVsHaneda from "./pages/blog/NaritaVsHaneda";
import OnsenDayTripsBeyondHakone from "./pages/blog/OnsenDayTripsBeyondHakone";
import ToyosuVsUenoFishMarket from "./pages/blog/ToyosuVsUenoFishMarket";
import TsukijiOuterVsInnerMarket from "./pages/blog/TsukijiOuterVsInnerMarket";
import ToyosuVsTsukijiOuter from "./pages/blog/ToyosuVsTsukijiOuter";
import HakoneVsNikkoDayTrip from "./pages/blog/HakoneVsNikkoDayTrip";
import CancellationPolicy from "./pages/CancellationPolicy";
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
import EsComidaCallejeraTokio from "./pages/es/blog/EsComidaCallejeraTokio";
import EsQueComerEnJapon from "./pages/es/blog/EsQueComerEnJapon";
import EsJapanRailPass from "./pages/es/blog/EsJapanRailPass";
import EsTemplosFamososJapon from "./pages/es/blog/EsTemplosFamososJapon";
import EsItinerarioTokio5Dias from "./pages/es/blog/EsItinerarioTokio5Dias";
import EsMonteFujiSeVeDesdeTokio from "./pages/es/blog/EsMonteFujiSeVeDesdeTokio";
import EsTourPrivadoMonteFuji2026 from "./pages/es/blog/EsTourPrivadoMonteFuji2026";
import EsMejorTourNocturnoTokio2026 from "./pages/es/blog/EsMejorTourNocturnoTokio2026";
import EsTourPalacioImperialTokio2026 from "./pages/es/blog/EsTourPalacioImperialTokio2026";
import EsExcursionNikkoDesdeTokio from "./pages/es/blog/EsExcursionNikkoDesdeTokio";
import EsKamakuraDesdeTokio from "./pages/es/blog/EsKamakuraDesdeTokio";
import EsYanakaTokio from "./pages/es/blog/EsYanakaTokio";
import EsGuiaLicenciaOficialJapon from "./pages/es/blog/EsGuiaLicenciaOficialJapon";
import EsAsakusaTokioGuia from "./pages/es/blog/EsAsakusaTokioGuia";
import EsTsukiji2026 from "./pages/es/blog/EsTsukiji2026";
import EsShitamachiTokio from "./pages/es/blog/EsShitamachiTokio";
import EsCuantoCuestaGuiaPrivadoTokio from "./pages/es/blog/EsCuantoCuestaGuiaPrivadoTokio";
import EsTourGratisVsGuiaPrivadoTokio from "./pages/es/blog/EsTourGratisVsGuiaPrivadoTokio";
import EsValeLaPenaGuiaPrivadoTokio from "./pages/es/blog/EsValeLaPenaGuiaPrivadoTokio";
import EsPrimeraVezTokioGuiaLocal from "./pages/es/blog/EsPrimeraVezTokioGuiaLocal";
import EsTourGastronomicoTokio from "./pages/es/blog/EsTourGastronomicoTokio";
import EsCerezosEnFlorTokio from "./pages/es/blog/EsCerezosEnFlorTokio";
import EsTesorosOcultosTokio from "./pages/es/blog/EsTesorosOcultosTokio";
import EsRutaGastronomicaTsukijiGinza from "./pages/es/blog/EsRutaGastronomicaTsukijiGinza";
import EsDeGinzaATsukijiAPie from "./pages/es/blog/EsDeGinzaATsukijiAPie";
import EsExcursionHakoneDesdeTokio from "./pages/es/blog/EsExcursionHakoneDesdeTokio";
import EsNikkoConGuiaVsSolo from "./pages/es/blog/EsNikkoConGuiaVsSolo";
import EsKamakuraConGuiaVsSolo from "./pages/es/blog/EsKamakuraConGuiaVsSolo";
import EsTsukijiVsToyosu from "./pages/es/blog/EsTsukijiVsToyosu";
import EsSensojiTemploMasVisitado from "./pages/es/blog/EsSensojiTemploMasVisitado";
import EsTokioConNinosTourFamiliar from "./pages/es/blog/EsTokioConNinosTourFamiliar";
import EsTourVegetarianoTokio from "./pages/es/blog/EsTourVegetarianoTokio";
import EsExcursionKawagoeDesdeTokio from "./pages/es/blog/EsExcursionKawagoeDesdeTokio";
import EsExcursionYokohamaDesdeTokio from "./pages/es/blog/EsExcursionYokohamaDesdeTokio";
import EsGuiaRamenTokio from "./pages/es/blog/EsGuiaRamenTokio";
import EsTokioConPresupuesto from "./pages/es/blog/EsTokioConPresupuesto";
import EsQueEsperarTourPrivado from "./pages/es/blog/EsQueEsperarTourPrivado";
import EsGuiaAsakusaNueva from "./pages/es/blog/EsGuiaAsakusaNueva";
import EsGuiaIzakayasTokio from "./pages/es/blog/EsGuiaIzakayasTokio";
import EsToyosuVsUenoMercadoPescado from "./pages/es/blog/EsToyosuVsUenoMercadoPescado";
import EsTsukijiExteriorVsInterior from "./pages/es/blog/EsTsukijiExteriorVsInterior";
import EsToyosuVsTsukijiExterior from "./pages/es/blog/EsToyosuVsTsukijiExterior";
import EsHakoneVsNikkoExcursion from "./pages/es/blog/EsHakoneVsNikkoExcursion";
import EsCancellationPolicy from "./pages/es/EsCancellationPolicy";
// New 2026-05 batch: Day Trip + Decision Helper + Practical articles
import BestDayTripsFromTokyo from "./pages/blog/BestDayTripsFromTokyo";
import KawaguchikoVsHakoneForMtFuji from "./pages/blog/KawaguchikoVsHakoneForMtFuji";
import EnoshimaDayTripFromTokyo from "./pages/blog/EnoshimaDayTripFromTokyo";
import GroupVsPrivateTourTokyo from "./pages/blog/GroupVsPrivateTourTokyo";
import HowToChoosePrivateTokyoGuide from "./pages/blog/HowToChoosePrivateTokyoGuide";
import ViatorVsGetYourGuideVsDirectTokyo from "./pages/blog/ViatorVsGetYourGuideVsDirectTokyo";
import WhereToStayInTokyoAreaGuide from "./pages/blog/WhereToStayInTokyoAreaGuide";
import TokyoWithElderlyParents from "./pages/blog/TokyoWithElderlyParents";
import EnglishFriendlyTokyoTips from "./pages/blog/EnglishFriendlyTokyoTips";
import RainyDayTokyo from "./pages/blog/RainyDayTokyo";
import EsMejoresExcursionesDesdeTokio from "./pages/es/blog/EsMejoresExcursionesDesdeTokio";
import EsKawaguchikoVsHakoneMonteFuji from "./pages/es/blog/EsKawaguchikoVsHakoneMonteFuji";
import EsExcursionEnoshimaDesdeTokio from "./pages/es/blog/EsExcursionEnoshimaDesdeTokio";
import EsTourGrupoVsPrivadoTokio from "./pages/es/blog/EsTourGrupoVsPrivadoTokio";
import EsComoElegirGuiaPrivadoTokio from "./pages/es/blog/EsComoElegirGuiaPrivadoTokio";
import EsViatorVsGetYourGuideVsDirectoTokio from "./pages/es/blog/EsViatorVsGetYourGuideVsDirectoTokio";
import EsDondeAlojarseEnTokio from "./pages/es/blog/EsDondeAlojarseEnTokio";
import EsTokioConPadresMayores from "./pages/es/blog/EsTokioConPadresMayores";
import EsTokioParaNoAnglohablantes from "./pages/es/blog/EsTokioParaNoAnglohablantes";
import EsDiaDeLluviaEnTokio from "./pages/es/blog/EsDiaDeLluviaEnTokio";

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
        <Route path="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" element={<IsItWorthHiringGuide />} />
        <Route path="/blog/kamakura-vs-hakone-vs-nikko-day-trip" element={<DayTripComparison />} />
        <Route path="/blog/shibuya-harajuku-guide" element={<ShibuyaHarajukuGuide />} />
        <Route path="/blog/shinjuku-guide" element={<ShinjukuGuide />} />
        <Route path="/blog/best-time-to-visit-tokyo" element={<BestTimeToVisit />} />
        <Route path="/blog/japan-temple-shrine-etiquette" element={<TempleEtiquette />} />
        <Route path="/blog/asakusa-guide" element={<AsakusaGuideNew />} />
        <Route path="/blog/japan-rail-pass-worth-it" element={<JapanRailPass />} />
        <Route path="/blog/kamakura-day-trip-from-tokyo" element={<KamakuraDayTrip />} />
        <Route path="/blog/kawagoe-day-trip-from-tokyo" element={<KawagoeDayTrip />} />

        <Route path="/blog/nikko-day-trip-from-tokyo" element={<NikkoDayTrip />} />
        <Route path="/blog/old-tokyo-shitamachi" element={<OldTokyoShitamachi />} />
        <Route path="/blog/ramen-guide-tokyo" element={<RamenGuideTokyo />} />
        <Route path="/blog/tokyo-izakaya-guide" element={<TokyoIzakayaGuide />} />
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
        <Route path="/blog/free-walking-tour-vs-private-tokyo" element={<FreeWalkingTourVsPrivate />} />
        <Route path="/blog/tokyo-with-kids-family-tour" element={<TokyoWithKidsFamilyTour />} />
        <Route path="/blog/what-to-expect-private-tour-tokyo" element={<WhatToExpectPrivateTour />} />
        <Route path="/blog/hakone-day-trip-guide-vs-solo" element={<HakoneDayTripGuideVsSolo />} />
        <Route path="/blog/nikko-day-trip-guide-vs-solo" element={<NikkoDayTripGuideVsSolo />} />
        <Route path="/blog/kamakura-day-trip-guide-vs-solo" element={<KamakuraDayTripGuideVsSolo />} />
        <Route path="/blog/licensed-vs-unlicensed-tour-guides-japan" element={<LicensedVsUnlicensedTourGuidesJapan />} />
        <Route path="/blog/tsukiji-to-ginza-food-walk" element={<TsukijiToGinzaFoodWalk />} />
        <Route path="/blog/ginza-to-tsukiji-walking-route" element={<GinzaToTsukijiWalkingRoute />} />
        <Route path="/blog/first-time-tokyo-local-guide" element={<FirstTimeTokyoLocalGuide />} />
        <Route path="/blog/tokyo-cherry-blossom-guide" element={<TokyoCherryBlossomGuide />} />
        <Route path="/blog/tsukiji-vs-toyosu" element={<TsukijiVsToyosu />} />
        <Route path="/blog/mount-fuji-from-tokyo" element={<MountFujiFromTokyo />} />
        <Route path="/blog/private-mount-fuji-tour-2026" element={<PrivateMountFujiTour2026 />} />
        <Route path="/blog/best-tokyo-night-tour-2026" element={<BestTokyoNightTour2026 />} />
        <Route path="/blog/imperial-palace-tokyo-tour-2026" element={<ImperialPalaceTour2026 />} />
        <Route path="/blog/harajuku-vs-shibuya-vs-shinjuku" element={<HarajukuVsShibuyaVsShinjuku />} />
        <Route path="/blog/narita-vs-haneda" element={<NaritaVsHaneda />} />
        <Route path="/blog/onsen-day-trips-beyond-hakone" element={<OnsenDayTripsBeyondHakone />} />
        <Route path="/blog/toyosu-vs-ueno-fish-market" element={<ToyosuVsUenoFishMarket />} />
        <Route path="/blog/tsukiji-outer-vs-inner-market" element={<TsukijiOuterVsInnerMarket />} />
        <Route path="/blog/toyosu-vs-tsukiji-outer" element={<ToyosuVsTsukijiOuter />} />
        <Route path="/blog/hakone-vs-nikko-day-trip" element={<HakoneVsNikkoDayTrip />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
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
        <Route path="/es/blog/comida-callejera-tokio" element={<EsComidaCallejeraTokio />} />
        <Route path="/es/blog/que-comer-en-japon" element={<EsQueComerEnJapon />} />
        <Route path="/es/blog/japan-rail-pass-vale-la-pena" element={<EsJapanRailPass />} />
        <Route path="/es/blog/templos-famosos-japon" element={<EsTemplosFamososJapon />} />
        <Route path="/es/blog/itinerario-tokio-5-dias" element={<EsItinerarioTokio5Dias />} />
        <Route path="/es/blog/monte-fuji-se-ve-desde-tokio" element={<EsMonteFujiSeVeDesdeTokio />} />
        <Route path="/es/blog/tour-privado-monte-fuji-2026" element={<EsTourPrivadoMonteFuji2026 />} />
        <Route path="/es/blog/mejor-tour-nocturno-tokio-2026" element={<EsMejorTourNocturnoTokio2026 />} />
        <Route path="/es/blog/tour-palacio-imperial-tokio-2026" element={<EsTourPalacioImperialTokio2026 />} />
        <Route path="/es/blog/excursion-nikko-desde-tokio" element={<EsExcursionNikkoDesdeTokio />} />
        <Route path="/es/blog/kamakura-desde-tokio" element={<EsKamakuraDesdeTokio />} />
        <Route path="/es/blog/yanaka-tokio-itinerario" element={<EsYanakaTokio />} />
        <Route path="/es/blog/guia-licencia-oficial-japon" element={<EsGuiaLicenciaOficialJapon />} />
        <Route path="/es/blog/asakusa-tokio-guia" element={<EsAsakusaTokioGuia />} />
        <Route path="/es/blog/tsukiji-2026" element={<EsTsukiji2026 />} />
        <Route path="/es/blog/shitamachi-tokio" element={<EsShitamachiTokio />} />
        <Route path="/es/blog/cuanto-cuesta-guia-privado-tokio" element={<EsCuantoCuestaGuiaPrivadoTokio />} />
        <Route path="/es/blog/tour-gratis-vs-guia-privado-tokio" element={<EsTourGratisVsGuiaPrivadoTokio />} />
        <Route path="/es/blog/vale-la-pena-guia-privado-tokio" element={<EsValeLaPenaGuiaPrivadoTokio />} />
        <Route path="/es/blog/primera-vez-tokio-guia-local" element={<EsPrimeraVezTokioGuiaLocal />} />
        <Route path="/es/blog/tour-gastronomico-tokio" element={<EsTourGastronomicoTokio />} />
        <Route path="/es/blog/cerezos-en-flor-tokio" element={<EsCerezosEnFlorTokio />} />
        <Route path="/es/blog/tesoros-ocultos-tokio" element={<EsTesorosOcultosTokio />} />
        <Route path="/es/blog/ruta-gastronomica-tsukiji-ginza" element={<EsRutaGastronomicaTsukijiGinza />} />
        <Route path="/es/blog/de-ginza-a-tsukiji-a-pie" element={<EsDeGinzaATsukijiAPie />} />
        <Route path="/es/blog/excursion-hakone-desde-tokio" element={<EsExcursionHakoneDesdeTokio />} />
        <Route path="/es/blog/nikko-con-guia-vs-solo" element={<EsNikkoConGuiaVsSolo />} />
        <Route path="/es/blog/kamakura-con-guia-vs-solo" element={<EsKamakuraConGuiaVsSolo />} />
        <Route path="/es/blog/tsukiji-vs-toyosu" element={<EsTsukijiVsToyosu />} />
        <Route path="/es/blog/sensoji-templo-mas-visitado" element={<EsSensojiTemploMasVisitado />} />
        <Route path="/es/blog/tokio-con-ninos-tour-familiar" element={<EsTokioConNinosTourFamiliar />} />
        <Route path="/es/blog/tour-vegetariano-tokio" element={<EsTourVegetarianoTokio />} />
        <Route path="/es/blog/excursion-kawagoe-desde-tokio" element={<EsExcursionKawagoeDesdeTokio />} />
        <Route path="/es/blog/excursion-yokohama-desde-tokio" element={<EsExcursionYokohamaDesdeTokio />} />
        <Route path="/es/blog/guia-ramen-tokio" element={<EsGuiaRamenTokio />} />
        <Route path="/es/blog/tokio-con-presupuesto" element={<EsTokioConPresupuesto />} />
        <Route path="/es/blog/que-esperar-tour-privado-tokio" element={<EsQueEsperarTourPrivado />} />
        <Route path="/es/blog/guia-asakusa-completa" element={<EsGuiaAsakusaNueva />} />
        <Route path="/es/blog/guia-izakayas-tokio" element={<EsGuiaIzakayasTokio />} />
        <Route path="/es/blog/toyosu-vs-ueno-mercado-pescado" element={<EsToyosuVsUenoMercadoPescado />} />
        <Route path="/es/blog/tsukiji-mercado-exterior-vs-interior" element={<EsTsukijiExteriorVsInterior />} />
        <Route path="/es/blog/toyosu-vs-tsukiji-exterior" element={<EsToyosuVsTsukijiExterior />} />
        <Route path="/es/blog/hakone-vs-nikko-excursion" element={<EsHakoneVsNikkoExcursion />} />
        {/* New 2026-05 batch */}
        <Route path="/blog/best-day-trips-from-tokyo" element={<BestDayTripsFromTokyo />} />
        <Route path="/blog/kawaguchiko-vs-hakone-for-mt-fuji" element={<KawaguchikoVsHakoneForMtFuji />} />
        <Route path="/blog/enoshima-day-trip-from-tokyo" element={<EnoshimaDayTripFromTokyo />} />
        <Route path="/blog/group-vs-private-tour-tokyo" element={<GroupVsPrivateTourTokyo />} />
        <Route path="/blog/how-to-choose-private-tokyo-guide" element={<HowToChoosePrivateTokyoGuide />} />
        <Route path="/blog/viator-vs-getyourguide-vs-direct-tokyo" element={<ViatorVsGetYourGuideVsDirectTokyo />} />
        <Route path="/blog/where-to-stay-in-tokyo-area-guide" element={<WhereToStayInTokyoAreaGuide />} />
        <Route path="/blog/tokyo-with-elderly-parents" element={<TokyoWithElderlyParents />} />
        <Route path="/blog/english-friendly-tokyo-tips" element={<EnglishFriendlyTokyoTips />} />
        <Route path="/blog/rainy-day-tokyo" element={<RainyDayTokyo />} />
        <Route path="/es/blog/mejores-excursiones-desde-tokio" element={<EsMejoresExcursionesDesdeTokio />} />
        <Route path="/es/blog/kawaguchiko-vs-hakone-monte-fuji" element={<EsKawaguchikoVsHakoneMonteFuji />} />
        <Route path="/es/blog/excursion-enoshima-desde-tokio" element={<EsExcursionEnoshimaDesdeTokio />} />
        <Route path="/es/blog/tour-grupo-vs-privado-tokio" element={<EsTourGrupoVsPrivadoTokio />} />
        <Route path="/es/blog/como-elegir-guia-privado-tokio" element={<EsComoElegirGuiaPrivadoTokio />} />
        <Route path="/es/blog/viator-vs-getyourguide-vs-directo-tokio" element={<EsViatorVsGetYourGuideVsDirectoTokio />} />
        <Route path="/es/blog/donde-alojarse-en-tokio" element={<EsDondeAlojarseEnTokio />} />
        <Route path="/es/blog/tokio-con-padres-mayores" element={<EsTokioConPadresMayores />} />
        <Route path="/es/blog/tokio-para-no-anglohablantes" element={<EsTokioParaNoAnglohablantes />} />
        <Route path="/es/blog/dia-de-lluvia-en-tokio" element={<EsDiaDeLluviaEnTokio />} />
        <Route path="/es/cancellation-policy" element={<EsCancellationPolicy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppRoutes;
