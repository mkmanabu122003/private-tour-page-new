import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold">
                Tanuki<span className="text-accent">Tabi</span>
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              Private walking tours of Tokyo with a government-licensed guide.
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

          {/* Tours */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Tours</h4>
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
                <Link to="/tours/custom" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Custom Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tours" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  All Tours
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
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact</h4>
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
