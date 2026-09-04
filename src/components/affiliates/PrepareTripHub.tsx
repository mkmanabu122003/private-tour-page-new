import { Link } from "react-router-dom";
import { AffiliateDisclosure } from "@/components/affiliates/AffiliateDisclosure";
import { AffiliateLink } from "@/components/affiliates/AffiliateLink";
import type { AffiliateLang } from "@/data/affiliates";

interface PrepareTripHubProps {
  lang: AffiliateLang;
}

const COPY = {
  en: {
    intro:
      "A few decisions before you land — data, trains, airport, cash — save the first day. The notes below are introductions, not bookings. A coordinator can help you match them to your dates.",
    tourEyebrow: "Section 01 · Private tours",
    tourTitle: "Start with a private day in Tokyo",
    tourBody:
      "Guests from Mexico, Colombia, Argentina, and the rest of Latin America often want the first full day to feel calm: a licensed guide, a small group, Spanish or English. The team designs the day; a certified licensed guide leads it. Inquire before you lock every flight if you can.",
    tourCta: "See private tours",
    tourContact: "Check availability",
    esimEyebrow: "Section 02 · eSIM",
    esimTitle: "Data before you leave the airport",
    esimBody:
      "Long-haul arrivals from Latin America often land without a usable Japanese data plan. An eSIM you install before the flight avoids hunting for airport Wi-Fi just to message home. We introduce a partner; we do not activate SIMs for you.",
    esimLink: "Japan eSIM partner (placeholder until the ID is live)",
    wifiEyebrow: "Section 03 · Pocket WiFi",
    wifiTitle: "One connection for several phones",
    wifiBody:
      "If you are traveling as a family, one pocket Wi-Fi device can be simpler than an eSIM on every phone. Pickup is typically at the airport — check the partner's current options. We do not rent devices ourselves.",
    wifiLink: "Pocket WiFi partner (placeholder until the ID is live)",
    insEyebrow: "Section 04 · Travel insurance",
    insTitle: "Insurance is a personal call",
    insBody:
      "A long-haul flight plus a first day that can still involve cash is why some guests look at travel insurance. We do not sell policies and cannot say which one fits. Until a partner ID is set, this link returns here.",
    insLink: "Insurance partner (not live yet)",
    railEyebrow: "Section 05 · Rail pass",
    railTitle: "The JR Pass is often the wrong buy for Tokyo",
    railBody:
      "Tokyo-only trips and a simple Tokyo–Kyoto return usually cost less on individual tickets. Read the route math before you spend on a nationwide pass. We do not sell rail passes.",
    railLink: "Is the JR Pass worth it in 2026?",
    airEyebrow: "Section 06 · Airport access",
    airTitle: "Narita vs Haneda, then how you get into the city",
    airBody:
      "Which airport you use changes the first three hours. Trains cover most arrivals; a taxi can make sense with heavy luggage or a very late landing. We introduce options; we do not dispatch cars.",
    airLink: "Airport taxi partner (placeholder until the ID is live)",
    airInternal: "Narita vs Haneda: which airport fits",
    lugEyebrow: "Section 07 · Luggage",
    lugTitle: "When you do not want to drag bags across the city",
    lugBody:
      "Same-day forwarding or a locker helps if you change hotels or take a day trip. We do not store bags and we do not arrange shipping for you.",
    lugLink: "Luggage storage partner (not live yet)",
    cashEyebrow: "Section 08 · Paying in Japan",
    cashTitle: "Cards go far; a little yen still helps",
    cashBody:
      "IC cards (Suica/Pasmo) cover trains and many convenience stores. Smaller restaurants may still prefer cash. We do not exchange currency. Bring a card that works abroad and a small yen float for the first evening.",
    cashLink: "Tipping in Japan (and how payment usually works)",
  },
  es: {
    intro:
      "Unas pocas decisiones antes de aterrizar — datos, trenes, aeropuerto, efectivo — alivian el primer día. Estas notas son presentaciones, no reservas. Un coordinador puede ayudarles a encajarlas con sus fechas.",
    tourEyebrow: "Sección 01 · Tours privados",
    tourTitle: "Empiecen con un día privado en Tokio",
    tourBody:
      "Quienes viajan desde México, Colombia, Argentina y el resto de América Latina suelen querer que el primer día completo se sienta tranquilo: guía con licencia, grupo pequeño, español o inglés. El equipo diseña el día; un guía certificado lo conduce. Si pueden, consulten disponibilidad antes de cerrar todos los vuelos.",
    tourCta: "Ver tours privados",
    tourContact: "Consultar disponibilidad",
    esimEyebrow: "Sección 02 · eSIM",
    esimTitle: "Datos antes de salir del aeropuerto",
    esimBody:
      "Los vuelos largos desde América Latina a menudo aterrizan sin un plan de datos usable en Japón. Una eSIM instalada antes del vuelo evita buscar Wi-Fi solo para avisar a casa. Presentamos un socio; no activamos SIM por ustedes.",
    esimLink: "Socio de eSIM para Japón (el enlace se activa cuando tengamos el ID)",
    wifiEyebrow: "Sección 03 · Pocket WiFi",
    wifiTitle: "Una conexión para varios teléfonos",
    wifiBody:
      "Si viajan en familia, un pocket Wi-Fi puede ser más simple que una eSIM en cada teléfono. La recogida suele ser en el aeropuerto: confirmen las opciones vigentes del socio. Nosotros no alquilamos dispositivos.",
    wifiLink: "Socio de pocket WiFi (el enlace se activa cuando tengamos el ID)",
    insEyebrow: "Sección 04 · Seguro de viaje",
    insTitle: "El seguro es una decisión personal",
    insBody:
      "Un vuelo largo y un primer día que todavía puede pedir efectivo es la razón por la que algunas personas miran un seguro de viaje. No vendemos pólizas y no podemos decir cuál les sirve. Hasta que haya un ID de socio, este enlace vuelve a esta guía.",
    insLink: "Socio de seguro (aún no está activo)",
    railEyebrow: "Sección 05 · Pase de tren",
    railTitle: "El JR Pass suele ser una mala compra si se quedan en Tokio",
    railBody:
      "Un viaje centrado en Tokio, o un simple Tokio–Kioto de ida y vuelta, casi siempre sale más barato con boletos sueltos. Lean la cuenta por ruta antes de gastar en un pase nacional. No vendemos pases.",
    railLink: "¿Vale la pena el JR Pass en 2026?",
    airEyebrow: "Sección 06 · Acceso desde el aeropuerto",
    airTitle: "Narita o Haneda, y cómo llegar a la ciudad",
    airBody:
      "El aeropuerto cambia las primeras tres horas. El tren cubre la mayoría de las llegadas; un taxi puede tener sentido con mucho equipaje o un aterrizaje muy tarde. Presentamos opciones; no despachamos autos.",
    airLink: "Socio de taxi de aeropuerto (el enlace se activa cuando tengamos el ID)",
    airInternal: "Narita vs Haneda: qué aeropuerto encaja",
    lugEyebrow: "Sección 07 · Equipaje",
    lugTitle: "Cuando no quieren arrastrar maletas por la ciudad",
    lugBody:
      "Un envío el mismo día o una consigna ayuda si cambian de hotel o salen de excursión. No guardamos maletas ni gestionamos envíos por ustedes.",
    lugLink: "Socio de guardaequipaje (aún no está activo)",
    cashEyebrow: "Sección 08 · Cómo pagar en Japón",
    cashTitle: "Las tarjetas llegan lejos; un poco de yen todavía ayuda",
    cashBody:
      "Las tarjetas IC (Suica/Pasmo) cubren trenes y muchas tiendas de conveniencia. Restaurantes pequeños todavía pueden preferir efectivo. No cambiamos divisas. Traigan una tarjeta que funcione en el extranjero y un poco de yen para la primera noche.",
    cashLink: "Propinas en Japón (y cómo se paga de verdad)",
  },
} as const;

export function PrepareTripHub({ lang }: PrepareTripHubProps) {
  const t = COPY[lang];
  const tours = lang === "es" ? "/es/tours" : "/tours";
  const contact = lang === "es" ? "/es/contact" : "/contact";
  const jrPass =
    lang === "es" ? "/es/blog/japan-rail-pass-vale-la-pena" : "/blog/japan-rail-pass-worth-it";
  const tipping = lang === "es" ? "/es/blog/propinas-en-japon" : "/blog/tipping-in-japan";
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
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "es" ? "Última actualización: septiembre 2026" : "Last updated: September 2026"}
          </p>
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
            <span>{t.esimEyebrow}</span>
          </div>
          <h2 id="section-02" className="scroll-mt-20">
            {t.esimTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.esimBody}</p>
          <p className="mb-10">
            <AffiliateLink slug="japan-wireless-esim" lang={lang}>
              {t.esimLink}
            </AffiliateLink>
          </p>

          <div className="section-eyebrow">
            <span>{t.wifiEyebrow}</span>
          </div>
          <h2 id="section-03" className="scroll-mt-20">
            {t.wifiTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.wifiBody}</p>
          <p className="mb-10">
            <AffiliateLink slug="japan-wireless-wifi" lang={lang}>
              {t.wifiLink}
            </AffiliateLink>
          </p>

          <div className="section-eyebrow">
            <span>{t.insEyebrow}</span>
          </div>
          <h2 id="section-04" className="scroll-mt-20">
            {t.insTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.insBody}</p>
          <p className="mb-10">
            <AffiliateLink slug="travel-insurance" lang={lang}>
              {t.insLink}
            </AffiliateLink>
          </p>

          <div className="section-eyebrow">
            <span>{t.railEyebrow}</span>
          </div>
          <h2 id="section-05" className="scroll-mt-20">
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
          <h2 id="section-06" className="scroll-mt-20">
            {t.airTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.airBody}</p>
          <p className={lang === "en" ? "mb-4" : "mb-10"}>
            <AffiliateLink slug="airport-taxi-tokyo" lang={lang}>
              {t.airLink}
            </AffiliateLink>
          </p>
          {lang === "en" && (
            <p className="mb-10">
              <Link to={airports} className="text-accent hover:underline font-medium">
                {t.airInternal}
              </Link>
            </p>
          )}

          <div className="section-eyebrow">
            <span>{t.lugEyebrow}</span>
          </div>
          <h2 id="section-07" className="scroll-mt-20">
            {t.lugTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.lugBody}</p>
          <p className="mb-10">
            <AffiliateLink slug="luggage-storage" lang={lang}>
              {t.lugLink}
            </AffiliateLink>
          </p>

          <div className="section-eyebrow">
            <span>{t.cashEyebrow}</span>
          </div>
          <h2 id="section-08" className="scroll-mt-20">
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
