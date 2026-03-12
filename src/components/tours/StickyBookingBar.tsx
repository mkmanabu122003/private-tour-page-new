import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { trackBookNowClick } from "@/lib/ga4";

interface StickyBookingBarProps {
  tourName: string;
  price: string;
}

export const StickyBookingBar = ({ tourName, price }: StickyBookingBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D0D] border-t border-white/10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container-section py-3 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-white font-medium text-sm sm:text-base truncate">
            {tourName}
          </p>
          <p className="text-white/70 text-xs sm:text-sm">{price}</p>
        </div>
        <Link
          to="/contact"
          data-cta="book-now"
          className="shrink-0 inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 bg-[#C9A84C] text-[#0D0D0D] font-semibold rounded-md transition-colors duration-200 hover:bg-[#E2C07A] text-sm sm:text-base"
          onClick={() => trackBookNowClick("Book Now")}
        >
          Book Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
