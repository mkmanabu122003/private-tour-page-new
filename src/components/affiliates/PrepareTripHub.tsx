import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "@/components/affiliates/AffiliateDisclosure";
import { AffiliateLink } from "@/components/affiliates/AffiliateLink";
import type { AffiliateLang } from "@/data/affiliates";

interface PrepareTripHubProps {
  lang: AffiliateLang;
}

// Phase 1 covers the one partner with a live tracking link (Japan Wireless
// pocket WiFi). eSIM, shinkansen, airport taxi and highway bus are not listed
// until their Rewardful programs are registered — a section whose only content
// is a dead link is worse than no section.
const COPY = {
  en: {
    intro:
      "Guests ask me the same handful of questions in the week before they fly. Here is what I actually tell them — data, trains, the ride in from the airport, and cash. I introduce options; I don't book them for you.",
    updated: "Last updated: September 2026",
    tourEyebrow: "Section 01 · Private tours",
    tourTitle: "Start with one unhurried day",
    tourBody:
      "Most people arrive with a list and no sense of how far apart things are. I plan the route around what you actually want to see, and I walk it with you. If your dates are firm, check availability before the flights are locked in.",
    tourCta: "See private tours",
    tourContact: "Check availability",
    wifiEyebrow: "Section 02 · Staying connected",
    wifiTitle: "One connection for the whole group",
    wifiBody:
      "If you're travelling as a family or a group, one pocket WiFi unit is usually simpler than putting an eSIM on every phone — and cheaper once you're past two or three devices. Pickup is normally at the airport. I use Japan Wireless with my own guests; I don't rent the devices myself, so check their current plans and pickup points before you book.",
    wifiLink: "Pocket WiFi from Japan Wireless",
    wifiAlt: "A black pocket WiFi router with a status screen.",
    railEyebrow: "Section 03 · Rail passes",
    railTitle: "The nationwide JR Pass is usually the wrong buy for Tokyo",
    railBody:
      "If you're staying in Tokyo, or doing one Tokyo–Kyoto return, the nationwide pass costs more than the tickets you'd actually use. I wrote out the route maths so you can check your own trip before you spend ¥50,000. I don't sell rail passes.",
    railLink: "Is the JR Pass worth it in 2026?",
    airEyebrow: "Section 04 · Airport access",
    airTitle: "Narita or Haneda changes your first evening",
    airBody:
      "Which airport you land at decides whether you're in your hotel in 40 minutes or two hours. Trains cover almost every arrival; the exceptions are a very late landing or more luggage than you can carry up station stairs.",
    airLink: "Narita vs Haneda: which airport fits your trip",
    cashEyebrow: "Section 05 · Paying in Japan",
    cashTitle: "Cards go far. A little cash still helps.",
    cashBody:
      "Suica or Pasmo covers trains and most convenience stores. The small places I like best often still want cash. Bring a card that works abroad and enough yen for the first evening, in case the first ATM refuses you.",
    cashLink: "Tipping in Japan, and how paying usually works",
  },
  es: {
    intro:
      "Mis clientes me hacen siempre las mismas preguntas la semana antes de volar. Esto es lo que les respondo: datos móviles, trenes, el traslado desde el aeropuerto y el efectivo. Les presento opciones; no las reservo por ustedes.",
    updated: "Última actualización: septiembre 2026",
    tourEyebrow: "Sección 01 · Tours privados",
    tourTitle: "Empiecen con un día sin prisas",
    tourBody:
      "Casi todos llegan con una lista y sin idea de las distancias reales. Yo armo la ruta según lo que de verdad quieren ver, y la recorro con ustedes. Si ya tienen fechas, consulten disponibilidad antes de cerrar los vuelos.",
    tourCta: "Ver tours privados",
    tourContact: "Consultar disponibilidad",
    wifiEyebrow: "Sección 02 · Conexión a internet",
    wifiTitle: "Una conexión para todo el grupo",
    wifiBody:
      "Si viajan en familia o en grupo, un router de bolsillo suele ser más sencillo que poner una eSIM en cada teléfono, y sale más barato a partir de dos o tres dispositivos. La recogida normalmente es en el aeropuerto. Yo uso Japan Wireless con mis propios clientes; no alquilo los equipos, así que revisen sus planes y puntos de recogida antes de reservar.",
    wifiLink: "Pocket WiFi de Japan Wireless",
    wifiAlt: "Un router Pocket WiFi negro con pantalla de estado.",
    railEyebrow: "Sección 03 · Pases de tren",
    railTitle: "El JR Pass nacional casi nunca compensa para Tokio",
    railBody:
      "Si se quedan en Tokio, o solo hacen un Tokio–Kioto de ida y vuelta, el pase nacional cuesta más que los billetes que realmente usarían. Hice las cuentas por ruta para que comprueben su propio viaje antes de gastar ¥50,000. Yo no vendo pases de tren.",
    railLink: "¿Vale la pena el Japan Rail Pass en 2026?",
    airEyebrow: "Sección 04 · Llegada desde el aeropuerto",
    airTitle: "Narita o Haneda cambia su primera noche",
    airBody:
      "El aeropuerto de llegada decide si están en el hotel en 40 minutos o en dos horas. El tren cubre casi todas las llegadas; las excepciones son aterrizar muy tarde o llevar más maletas de las que puedan subir por las escaleras de la estación.",
    cashEyebrow: "Sección 05 · Cómo pagar en Japón",
    cashTitle: "Las tarjetas llegan lejos. Algo de efectivo todavía ayuda.",
    cashBody:
      "Suica o Pasmo cubren trenes y casi todas las tiendas de conveniencia. Los sitios pequeños que más me gustan siguen pidiendo efectivo. Traigan una tarjeta que funcione en el extranjero y algo de yen para la primera noche, por si el primer cajero les rechaza.",
    cashLink: "Propinas en Japón y cómo se suele pagar",
  },
} as const;

/** Official partner marketing still (public product page). Not wrapped in a /go/ link. */
function PartnerImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="my-5 overflow-hidden rounded-lg border border-border bg-secondary/50">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        data-affiliate-image
        className="mx-auto w-full max-h-72 object-contain"
      />
    </figure>
  );
}

export function PrepareTripHub({ lang }: PrepareTripHubProps) {
  const t = COPY[lang];
  const tours = lang === "es" ? "/es/tours" : "/tours";
  const contact = lang === "es" ? "/es/contact" : "/contact";
  const jrPass =
    lang === "es" ? "/es/blog/japan-rail-pass-vale-la-pena" : "/blog/japan-rail-pass-worth-it";
  const tipping = lang === "es" ? "/es/blog/propinas-en-japon" : "/blog/tipping-in-japan";
  // English only: there is no Spanish counterpart for the airport comparison yet.
  const airports = "/blog/narita-vs-haneda";

  return (
    <div className="prose-editorial">
      <section className="pt-16 pb-8 bg-secondary/30">
        <div className="container-section max-w-3xl">
          <p className="text-label text-accent mb-3">
            {lang === "es" ? "Antes de aterrizar" : "Before you land"}
          </p>
          <h1 className="heading-display text-foreground">
            {lang === "es" ? "Preparen su viaje a Tokio" : "Prepare your Tokyo trip"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{t.intro}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.updated}</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container-section max-w-3xl">
          <AffiliateDisclosure lang={lang} placement="top" />

          <div data-hub-tour-cta className="mb-14 rounded-lg border border-accent/30 bg-accent/10 p-8">
            <div className="section-eyebrow">
              <span>{t.tourEyebrow}</span>
            </div>
            <h2 id="section-01" className="scroll-mt-20">
              {t.tourTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t.tourBody}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={tours} className="btn-accent inline-flex justify-center">
                {t.tourCta}
              </Link>
              <Link
                to={contact}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
              >
                {t.tourContact}
              </Link>
            </div>
          </div>

          <div className="section-eyebrow">
            <span>{t.wifiEyebrow}</span>
          </div>
          <h2 id="section-02" className="scroll-mt-20">
            {t.wifiTitle}
          </h2>
          <PartnerImage
            src="/images/affiliates/wifi-hero.webp"
            alt={t.wifiAlt}
            width={409}
            height={254}
          />
          <p className="text-muted-foreground leading-relaxed mb-4">{t.wifiBody}</p>
          <p className="mb-10">
            <AffiliateLink slug="japan-wireless-wifi" lang={lang}>
              {t.wifiLink}
            </AffiliateLink>
          </p>

          <div className="section-eyebrow">
            <span>{t.railEyebrow}</span>
          </div>
          <h2 id="section-03" className="scroll-mt-20">
            {t.railTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.railBody}</p>
          <p className="mb-10">
            <Link to={jrPass} className="text-accent hover:underline font-medium">
              {t.railLink}
            </Link>
          </p>

          <div className="section-eyebrow">
            <span>{t.airEyebrow}</span>
          </div>
          <h2 id="section-04" className="scroll-mt-20">
            {t.airTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.airBody}</p>
          {lang === "en" && (
            <p className="mb-10">
              <Link to={airports} className="text-accent hover:underline font-medium">
                {COPY.en.airLink}
              </Link>
            </p>
          )}

          <div className="section-eyebrow">
            <span>{t.cashEyebrow}</span>
          </div>
          <h2 id="section-05" className="scroll-mt-20">
            {t.cashTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.cashBody}</p>
          <p className="mb-10">
            <Link to={tipping} className="text-accent hover:underline font-medium">
              {t.cashLink}
            </Link>
          </p>

          <AffiliateDisclosure lang={lang} placement="footer" />
        </div>
      </section>
    </div>
  );
}
