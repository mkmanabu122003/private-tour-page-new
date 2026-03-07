import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";

const tokyoTours = [
  { name: "Asakusa", href: "/tours/asakusa" },
  { name: "Yanaka", href: "/tours/yanaka" },
  { name: "Shibuya & Harajuku", href: "/tours/shibuya-harajuku" },
  { name: "Tsukiji & Ginza", href: "/tours/tsukiji-ginza" },
  { name: "Imperial Palace", href: "/tours/imperial-palace" },
];

const experienceTours = [
  { name: "Tokyo Food Tour", href: "/tours/tokyo-food-tour" },
  { name: "Tokyo Night Tour", href: "/tours/tokyo-night-tour" },
];

const dayTrips = [
  { name: "Kamakura Day Trip", href: "/tours/kamakura-day-trip" },
  { name: "Hakone Day Trip", href: "/tours/hakone-day-trip" },
  { name: "Nikko Day Trip", href: "/tours/nikko-day-trip" },
];

const esTokyoTours = [
  { name: "Tour por Asakusa", href: "/es/tours/asakusa" },
  { name: "Tour por Yanaka", href: "/es/tours/yanaka" },
  { name: "Shibuya y Harajuku", href: "/es/tours/shibuya-harajuku" },
  { name: "Tsukiji y Ginza", href: "/es/tours/tsukiji-ginza" },
  { name: "Palacio Imperial", href: "/es/tours/imperial-palace" },
];

const esDayTrips = [
  { name: "Excursión a Kamakura", href: "/es/tours/kamakura-day-trip" },
  { name: "Excursión a Hakone", href: "/es/tours/hakone-day-trip" },
  { name: "Excursión a Nikko", href: "/es/tours/nikko-day-trip" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [mobilToursOpen, setMobileToursOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isEs = location.pathname.startsWith("/es");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToursDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setToursDropdownOpen(false);
    setMobileToursOpen(false);
  }, [location.pathname]);

  if (isEs) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container-section">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/es" className="flex items-center">
              <img src="/images/logo.png" alt="Tanuki Tabi Travel" className="h-10 md:h-14 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/es"
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname === "/es" || location.pathname === "/es/"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Inicio
              </Link>

              {/* Tours Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setToursDropdownOpen(!toursDropdownOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors link-underline ${
                    location.pathname.startsWith("/es/tours")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Tours
                  <ChevronDown className={`w-4 h-4 transition-transform ${toursDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {toursDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-[var(--shadow-medium)] py-2 animate-fade-in z-50">
                    <Link
                      to="/es/tours"
                      className="block px-4 py-2 text-sm text-foreground font-medium hover:bg-secondary/50 transition-colors"
                    >
                      Todos los Tours
                    </Link>
                    <div className="border-t border-border my-1" />
                    <p className="px-4 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Tours a Pie por Tokio
                    </p>
                    {esTokyoTours.map((tour) => (
                      <Link
                        key={tour.href}
                        to={tour.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                      >
                        {tour.name}
                      </Link>
                    ))}
                    <div className="border-t border-border my-1" />
                    <p className="px-4 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Excursiones de un Día
                    </p>
                    {esDayTrips.map((tour) => (
                      <Link
                        key={tour.href}
                        to={tour.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                      >
                        {tour.name}
                      </Link>
                    ))}
                    <div className="border-t border-border my-1" />
                    <Link
                      to="/es/tours/custom"
                      className="block px-4 py-2 text-sm text-accent font-medium hover:bg-secondary/50 transition-colors"
                    >
                      Tour Personalizado
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/es/blog"
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname.startsWith("/es/blog")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Blog
              </Link>

              <Link
                to="/es/faq"
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname === "/es/faq"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FAQ
              </Link>

              <Link
                to="/es/about"
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname === "/es/about"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sobre Manabu
              </Link>

              <Link
                to="/es/contact"
                className={`text-sm font-medium transition-colors link-underline ${
                  location.pathname === "/es/contact"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Contacto
              </Link>
            </div>

            {/* CTA Button & Language Switcher */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Globe className="w-4 h-4" />
                EN
              </Link>
              <Link to="/es/contact" className="btn-accent text-sm">
                Reservar Ahora
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
              <div className="flex flex-col gap-2">
                <Link
                  to="/es"
                  className={`text-base font-medium py-2 ${
                    location.pathname === "/es" || location.pathname === "/es/" ? "text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </Link>

                <button
                  onClick={() => setMobileToursOpen(!mobilToursOpen)}
                  className={`flex items-center justify-between text-base font-medium py-2 ${
                    location.pathname.startsWith("/es/tours") ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Tours
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobilToursOpen ? "rotate-180" : ""}`} />
                </button>
                {mobilToursOpen && (
                  <div className="pl-4 space-y-1 animate-fade-in">
                    <Link
                      to="/es/tours"
                      className="block py-1.5 text-sm text-foreground font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Todos los Tours
                    </Link>
                    <p className="py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Tokio
                    </p>
                    {esTokyoTours.map((tour) => (
                      <Link
                        key={tour.href}
                        to={tour.href}
                        className="block py-1.5 text-sm text-muted-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {tour.name}
                      </Link>
                    ))}
                    <p className="py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Excursiones
                    </p>
                    {esDayTrips.map((tour) => (
                      <Link
                        key={tour.href}
                        to={tour.href}
                        className="block py-1.5 text-sm text-muted-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {tour.name}
                      </Link>
                    ))}
                    <Link
                      to="/es/tours/custom"
                      className="block py-1.5 text-sm text-accent font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Tour Personalizado
                    </Link>
                  </div>
                )}

                <Link
                  to="/es/blog"
                  className={`text-base font-medium py-2 ${
                    location.pathname.startsWith("/es/blog") ? "text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  to="/es/faq"
                  className={`text-base font-medium py-2 ${
                    location.pathname === "/es/faq" ? "text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>

                <Link
                  to="/es/about"
                  className={`text-base font-medium py-2 ${
                    location.pathname === "/es/about" ? "text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre Manabu
                </Link>

                <Link
                  to="/es/contact"
                  className={`text-base font-medium py-2 ${
                    location.pathname === "/es/contact" ? "text-foreground" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </Link>

                <Link
                  to="/"
                  className="flex items-center gap-1.5 text-base font-medium py-2 text-muted-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Globe className="w-4 h-4" />
                  English
                </Link>

                <Link
                  to="/es/contact"
                  className="btn-accent text-center mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reservar Ahora
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    );
  }

  // English Header (original)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container-section">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Tanuki Tabi Travel" className="h-10 md:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors link-underline ${
                location.pathname === "/"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {/* Tours Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setToursDropdownOpen(!toursDropdownOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors link-underline ${
                  location.pathname.startsWith("/tours")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Tours
                <ChevronDown className={`w-4 h-4 transition-transform ${toursDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {toursDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-[var(--shadow-medium)] py-2 animate-fade-in z-50">
                  <Link
                    to="/tours"
                    className="block px-4 py-2 text-sm text-foreground font-medium hover:bg-secondary/50 transition-colors"
                  >
                    All Tours
                  </Link>
                  <div className="border-t border-border my-1" />
                  <p className="px-4 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Tokyo Walking Tours
                  </p>
                  {tokyoTours.map((tour) => (
                    <Link
                      key={tour.href}
                      to={tour.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      {tour.name}
                    </Link>
                  ))}
                  <div className="border-t border-border my-1" />
                  <p className="px-4 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Experience Tours
                  </p>
                  {experienceTours.map((tour) => (
                    <Link
                      key={tour.href}
                      to={tour.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      {tour.name}
                    </Link>
                  ))}
                  <div className="border-t border-border my-1" />
                  <p className="px-4 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Day Trips from Tokyo
                  </p>
                  {dayTrips.map((tour) => (
                    <Link
                      key={tour.href}
                      to={tour.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                    >
                      {tour.name}
                    </Link>
                  ))}
                  <div className="border-t border-border my-1" />
                  <Link
                    to="/tours/custom"
                    className="block px-4 py-2 text-sm text-accent font-medium hover:bg-secondary/50 transition-colors"
                  >
                    Custom Tour
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors link-underline ${
                location.pathname.startsWith("/blog")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Blog
            </Link>

            <Link
              to="/faq"
              className={`text-sm font-medium transition-colors link-underline ${
                location.pathname === "/faq"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FAQ
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors link-underline ${
                location.pathname === "/about"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors link-underline ${
                location.pathname === "/contact"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/es" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="w-4 h-4" />
              ES
            </Link>
            <Link to="/contact" className="btn-accent text-sm">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={`text-base font-medium py-2 ${
                  location.pathname === "/" ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Tours Accordion */}
              <button
                onClick={() => setMobileToursOpen(!mobilToursOpen)}
                className={`flex items-center justify-between text-base font-medium py-2 ${
                  location.pathname.startsWith("/tours") ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Tours
                <ChevronDown className={`w-4 h-4 transition-transform ${mobilToursOpen ? "rotate-180" : ""}`} />
              </button>
              {mobilToursOpen && (
                <div className="pl-4 space-y-1 animate-fade-in">
                  <Link
                    to="/tours"
                    className="block py-1.5 text-sm text-foreground font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Tours
                  </Link>
                  <p className="py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Tokyo
                  </p>
                  {tokyoTours.map((tour) => (
                    <Link
                      key={tour.href}
                      to={tour.href}
                      className="block py-1.5 text-sm text-muted-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {tour.name}
                    </Link>
                  ))}
                  <p className="py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Experience Tours
                  </p>
                  {experienceTours.map((tour) => (
                    <Link
                      key={tour.href}
                      to={tour.href}
                      className="block py-1.5 text-sm text-muted-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {tour.name}
                    </Link>
                  ))}
                  <p className="py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Day Trips
                  </p>
                  {dayTrips.map((tour) => (
                    <Link
                      key={tour.href}
                      to={tour.href}
                      className="block py-1.5 text-sm text-muted-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {tour.name}
                    </Link>
                  ))}
                  <Link
                    to="/tours/custom"
                    className="block py-1.5 text-sm text-accent font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Custom Tour
                  </Link>
                </div>
              )}

              <Link
                to="/blog"
                className={`text-base font-medium py-2 ${
                  location.pathname.startsWith("/blog") ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/faq"
                className={`text-base font-medium py-2 ${
                  location.pathname === "/faq" ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>

              <Link
                to="/about"
                className={`text-base font-medium py-2 ${
                  location.pathname === "/about" ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`text-base font-medium py-2 ${
                  location.pathname === "/contact" ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/es"
                className="flex items-center gap-1.5 text-base font-medium py-2 text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Globe className="w-4 h-4" />
                Español
              </Link>

              <Link
                to="/contact"
                className="btn-accent text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
