import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold">
                Tanuki<span className="text-accent">Tabi</span>
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              Private walking tours of Tokyo and day trips with a government-licensed guide.
              516+ tours completed. 4.86★ average rating.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="mailto:info@tanuki-tabi-travel.com"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tokyo Tours */}
          <div>
            <h4 className="text-lg font-medium mb-4">Tokyo Tours</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tours/asakusa" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Asakusa Tour
                </Link>
              </li>
              <li>
                <Link to="/tours/yanaka" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Yanaka Tour
                </Link>
              </li>
              <li>
                <Link to="/tours/shibuya-harajuku" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Shibuya & Harajuku
                </Link>
              </li>
              <li>
                <Link to="/tours/tsukiji-ginza" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Tsukiji & Ginza
                </Link>
              </li>
              <li>
                <Link to="/tours/imperial-palace" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Imperial Palace
                </Link>
              </li>
              <li>
                <Link to="/tours/tokyo-food-tour" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Tokyo Food Tour
                </Link>
              </li>
              <li>
                <Link to="/tours/tokyo-night-tour" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Tokyo Night Tour
                </Link>
              </li>
              <li>
                <Link to="/tours/custom" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Custom Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Day Trips & Blog */}
          <div>
            <h4 className="text-lg font-medium mb-4">Day Trips</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tours/kamakura-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Kamakura Day Trip
                </Link>
              </li>
              <li>
                <Link to="/tours/hakone-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Hakone Day Trip
                </Link>
              </li>
              <li>
                <Link to="/tours/nikko-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Nikko Day Trip
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-medium mb-4 mt-8">Blog</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog/tokyo-3-day-itinerary" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Tokyo 3-Day Itinerary
                </Link>
              </li>
              <li>
                <Link to="/blog/asakusa-guide-what-to-see" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Asakusa Guide
                </Link>
              </li>
              <li>
                <Link to="/blog/shibuya-harajuku-guide" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Shibuya & Harajuku Guide
                </Link>
              </li>
              <li>
                <Link to="/blog/shinjuku-guide" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Shinjuku Guide
                </Link>
              </li>
              <li>
                <Link to="/blog/tsukiji-guide-food-lover" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Tsukiji Guide
                </Link>
              </li>
              <li>
                <Link to="/blog/best-time-to-visit-tokyo" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Best Time to Visit
                </Link>
              </li>
              <li>
                <Link to="/blog/japan-temple-shrine-etiquette" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Temple & Shrine Etiquette
                </Link>
              </li>
              <li>
                <Link to="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Is a Guide Worth It?
                </Link>
              </li>
              <li>
                <Link to="/blog/kamakura-vs-hakone-vs-nikko-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Day Trip Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore & Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tours" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  All Tours
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Manabu
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact / Book
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-medium mb-4 mt-8">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Tokyo, Japan</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                <a href="mailto:info@tanuki-tabi-travel.com" className="hover:text-primary-foreground transition-colors">
                  info@tanuki-tabi-travel.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Tanuki Tabi Travel by Manabu. All rights reserved.</p>
            <p>Government-Licensed Private Tour Guide · Tokyo, Japan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
