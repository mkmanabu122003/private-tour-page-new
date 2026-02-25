import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import BlogIndex from "./pages/blog/BlogIndex";
import Tokyo3DayItinerary from "./pages/blog/Tokyo3DayItinerary";
import IsItWorthHiringGuide from "./pages/blog/IsItWorthHiringGuide";
import DayTripComparison from "./pages/blog/DayTripComparison";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/tokyo-3-day-itinerary" element={<Tokyo3DayItinerary />} />
          <Route path="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" element={<IsItWorthHiringGuide />} />
          <Route path="/blog/kamakura-vs-hakone-vs-nikko-day-trip" element={<DayTripComparison />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
