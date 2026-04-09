import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";

export const Footer = () => {
  const location = useLocation();
  const isEs = location.pathname.startsWith("/es");

  if (isEs) {
    return (
      <footer className="bg-primary text-primary-foreground">
        <div className="container-section py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/es" className="inline-flex flex-col items-center gap-1">
                <img src="/images/logo.webp" alt="Tanuki Tabi Travel" className="h-14 w-auto brightness-0 invert" loading="lazy" width={56} height={56} />
                <span className="font-serif text-base font-semibold tracking-[0.15em] text-primary-foreground uppercase">Tanuki Tabi Travel</span>
              </Link>
              <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
                Tours privados a pie por Tokio y excursiones de día con guía con licencia oficial del gobierno.
                Más de 500 tours completados. Valoración media de 4.86★.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="mailto:info@tanuki-tabi-travel.com"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Envíanos un email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Síguenos en Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Tokyo Tours */}
            <div>
              <h4 className="text-lg font-medium mb-4">Tours en Tokio</h4>
              <ul className="space-y-3">
                <li><Link to="/es/tours/asakusa" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tour por Asakusa</Link></li>
                <li><Link to="/es/tours/yanaka" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tour por Yanaka</Link></li>
                <li><Link to="/es/tours/shibuya-harajuku" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tour por Shibuya y Harajuku</Link></li>
                <li><Link to="/es/tours/tsukiji-ginza" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tour por Tsukiji y Ginza</Link></li>
                <li><Link to="/es/tours/imperial-palace" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Palacio Imperial</Link></li>
                <li><Link to="/es/tours/tokyo-food-tour" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tour Gastronómico por Tokio</Link></li>
                <li><Link to="/es/tours/tokyo-night-tour" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tour Nocturno por Tokio</Link></li>
                <li><Link to="/es/tours/custom" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tour Personalizado</Link></li>
              </ul>
            </div>

            {/* Day Trips & Blog */}
            <div>
              <h4 className="text-lg font-medium mb-4">Excursiones</h4>
              <ul className="space-y-3">
                <li><Link to="/es/tours/kamakura-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Excursión a Kamakura</Link></li>
                <li><Link to="/es/tours/hakone-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Excursión a Hakone</Link></li>
                <li><Link to="/es/tours/nikko-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Excursión a Nikko</Link></li>
              </ul>

              <h4 className="text-lg font-medium mb-4 mt-8">Blog</h4>
              <ul className="space-y-3">
                <li><Link to="/es/blog/itinerario-tokio-3-dias" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Itinerario de 3 Días por Tokio</Link></li>
                <li><Link to="/es/blog/asakusa-tokio-guia" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Guía de Asakusa</Link></li>
                <li><Link to="/es/blog/guia-shibuya-harajuku" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Guía de Shibuya y Harajuku</Link></li>
                <li><Link to="/es/blog/guia-shinjuku" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Guía de Shinjuku</Link></li>
                <li><Link to="/es/blog/mercado-tsukiji-tokio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Guía de Tsukiji</Link></li>
                <li><Link to="/es/blog/mejor-epoca-visitar-tokio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Mejor Época para Visitar Tokio</Link></li>
                <li><Link to="/es/blog/etiqueta-templos-santuarios" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Etiqueta en Templos y Santuarios</Link></li>
                <li><Link to="/es/blog/vale-la-pena-guia-privado-tokio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">¿Vale la Pena Contratar un Guía?</Link></li>
                <li><Link to="/es/blog/comparativa-excursiones" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Comparativa de Excursiones</Link></li>
              </ul>
            </div>

            {/* Explore & Contact */}
            <div>
              <h4 className="text-lg font-medium mb-4">Explorar</h4>
              <ul className="space-y-3">
                <li><Link to="/es/tours" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Todos los Tours</Link></li>
                <li><Link to="/es/blog" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Blog</Link></li>
                <li><Link to="/es/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Sobre Manabu</Link></li>
                <li><Link to="/es/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">FAQ</Link></li>
                <li><Link to="/es/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contacto / Reservar</Link></li>
                <li><Link to="/es/cancellation-policy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Política de Cancelación</Link></li>
              </ul>

              <h4 className="text-lg font-medium mb-4 mt-8">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Tokio, Japón</span>
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
              <p>&copy; {new Date().getFullYear()} Tanuki Tabi Travel por Manabu. Todos los derechos reservados.</p>
              <p>Guía Turístico Privado con Licencia Oficial · Tokio, Japón</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // English Footer (original)
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex flex-col items-center gap-1">
              <img src="/images/logo.webp" alt="Tanuki Tabi Travel" className="h-14 w-auto brightness-0 invert" loading="lazy" width={56} height={56} />
              <span className="font-serif text-base font-semibold tracking-[0.15em] text-primary-foreground uppercase">Tanuki Tabi Travel</span>
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              Private walking tours of Tokyo and day trips with a government-licensed guide.
              500+ tours completed. 4.86★ average rating.
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
              <li><Link to="/tours/asakusa" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Asakusa Tour</Link></li>
              <li><Link to="/tours/yanaka" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Yanaka Tour</Link></li>
              <li><Link to="/tours/shibuya-harajuku" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Shibuya & Harajuku</Link></li>
              <li><Link to="/tours/tsukiji-ginza" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tsukiji & Ginza</Link></li>
              <li><Link to="/tours/imperial-palace" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Imperial Palace</Link></li>
              <li><Link to="/tours/tokyo-food-tour" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tokyo Food Tour</Link></li>
              <li><Link to="/tours/tokyo-night-tour" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tokyo Night Tour</Link></li>
              <li><Link to="/tours/custom" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Custom Tour</Link></li>
            </ul>
          </div>

          {/* Day Trips & Blog */}
          <div>
            <h4 className="text-lg font-medium mb-4">Day Trips</h4>
            <ul className="space-y-3">
              <li><Link to="/tours/kamakura-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Kamakura Day Trip</Link></li>
              <li><Link to="/tours/hakone-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Hakone Day Trip</Link></li>
              <li><Link to="/tours/nikko-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Nikko Day Trip</Link></li>
            </ul>

            <h4 className="text-lg font-medium mb-4 mt-8">Blog</h4>
            <ul className="space-y-3">
              <li><Link to="/blog/tokyo-3-day-itinerary" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tokyo 3-Day Itinerary</Link></li>
              <li><Link to="/blog/asakusa-guide" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Asakusa Guide</Link></li>
              <li><Link to="/blog/shibuya-harajuku-guide" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Shibuya & Harajuku Guide</Link></li>
              <li><Link to="/blog/shinjuku-guide" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Shinjuku Guide</Link></li>
              <li><Link to="/blog/tsukiji-market-guide" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tsukiji Guide</Link></li>
              <li><Link to="/blog/best-time-to-visit-tokyo" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Best Time to Visit</Link></li>
              <li><Link to="/blog/japan-temple-shrine-etiquette" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Temple & Shrine Etiquette</Link></li>
              <li><Link to="/blog/is-it-worth-hiring-a-tour-guide-in-tokyo" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Is a Guide Worth It?</Link></li>
              <li><Link to="/blog/kamakura-vs-hakone-vs-nikko-day-trip" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Day Trip Comparison</Link></li>
            </ul>
          </div>

          {/* Explore & Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/tours" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">All Tours</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Manabu</Link></li>
              <li><Link to="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact / Book</Link></li>
              <li><Link to="/cancellation-policy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Cancellation Policy</Link></li>
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
