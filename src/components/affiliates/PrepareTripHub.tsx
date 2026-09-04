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
      "Get data, trains, and the airport sorted before you land, and day one is calmer. These notes introduce options; we don't book them for you. A coordinator can help you fit them around your dates.",
    tourEyebrow: "Section 01 · Private tours",
    tourTitle: "Start with a private day in Tokyo",
    tourBody:
      "Travelers from Mexico, Colombia, Argentina, and the rest of Latin America often want the first full day unhurried: a small group, a licensed guide, Spanish or English. The team plans the route; a licensed guide leads it. If you can, check availability before every flight is locked.",
    tourCta: "See private tours",
    tourContact: "Check availability",
    esimEyebrow: "Section 02 · eSIM",
    esimTitle: "Data before you leave the airport",
    esimBody:
      "After a long haul from Latin America, WhatsApp usually won't work on a Japanese network until you have a plan. Install an eSIM before you fly so you're not hunting airport Wi-Fi just to say you landed. We introduce a partner; we don't activate SIMs for you.",
    esimLink: "Japan eSIM options",
    wifiEyebrow: "Section 03 · Pocket WiFi",
    wifiTitle: "One connection for several phones",
    wifiBody:
      "If you're traveling as a family, one pocket Wi-Fi unit is often simpler than an eSIM on every phone. Pickup is usually at the airport, so check the partner's current options. We don't rent devices ourselves.",
    wifiLink: "Pocket WiFi for the group",
    insEyebrow: "Section 04 · Travel insurance",
    insTitle: "Get travel insurance before you fly",
    insBody:
      "We strongly recommend travel insurance for this trip. A flight from Latin America is long, and you want coverage already in place if something goes wrong in Japan. We don't sell policies and we won't name a best product; this is only an introduction.",
    insLink: "Travel insurance options",
    railEyebrow: "Section 05 · Rail pass",
    railTitle: "A nationwide JR Pass is often the wrong buy for Tokyo",
    railBody:
      "If you're staying in Tokyo, or only doing a simple Tokyo-Kyoto return, a nationwide pass is often more than you need. Read the route math before you buy. We don't sell rail passes.",
    railLink: "Is the JR Pass worth it in 2026?",
    airEyebrow: "Section 06 · Airport access",
    airTitle: "Narita or Haneda, then into the city",
    airBody:
      "Which airport you use shapes the first hours after a long flight. Trains cover most arrivals; a taxi can make sense with heavy luggage or a very late landing. We introduce options; we don't dispatch cars.",
    airLink: "Airport taxi into Tokyo",
    airInternal: "Narita vs Haneda: which airport fits",
    lugEyebrow: "Section 07 · Luggage",
    lugTitle: "When you don't want to drag bags across the city",
    lugBody:
      "If you change hotels or take a day trip, a locker or same-day forwarding beats hauling suitcases on the metro. We don't store bags and we don't arrange shipping for you.",
    lugLink: "Luggage storage options",
    cashEyebrow: "Section 08 · Paying in Japan",
    cashTitle: "Cards go far. A little yen still helps.",
    cashBody:
      "Suica or Pasmo covers trains and a lot of convenience stores. Smaller restaurants may still want cash. We don't exchange currency. Bring a card that works abroad and a small yen float for the first evening, in case the first ATM doesn't take your card.",
    cashLink: "Tipping in Japan, and how payment usually works",
  },
  es: {
    intro:
      "Si ordenan datos, trenes y el traslado del aeropuerto antes de aterrizar, el primer día se siente más tranquilo. Estas notas son presentaciones, no reservas que hagamos por ustedes. Un coordinador puede ayudarles a encajarlas con sus fechas.",
    tourEyebrow: "Sección 01 · Tours privados",
    tourTitle: "Empiecen con un día privado en Tokio",
    tourBody:
      "Quienes llegan de México, Colombia, Argentina y el resto de América Latina suelen querer el primer día completo sin prisa: grupo pequeño, guía con licencia, español o inglés. El equipo arma el recorrido y un guía certificado los acompaña. Si pueden, consulten disponibilidad antes de cerrar todos los vuelos.",
    tourCta: "Ver tours privados",
    tourContact: "Consultar disponibilidad",
    esimEyebrow: "Sección 02 · eSIM",
    esimTitle: "Datos antes de salir del aeropuerto",
    esimBody:
      "Después de un vuelo largo desde América Latina, WhatsApp no suele funcionar en la red japonesa hasta que tengan un plan. Instalen una eSIM antes de volar y no tienen que buscar Wi-Fi en el aeropuerto solo para avisar que llegaron. Presentamos un socio; no activamos SIM por ustedes.",
    esimLink: "Opciones de eSIM para Japón",
    wifiEyebrow: "Sección 03 · Pocket WiFi",
    wifiTitle: "Una conexión para varios teléfonos",
    wifiBody:
      "Si viajan en familia, un pocket Wi-Fi suele ser más simple que una eSIM en cada teléfono. La recogida suele ser en el aeropuerto; confirmen las opciones vigentes del socio. Nosotros no alquilamos dispositivos.",
    wifiLink: "Pocket WiFi para el grupo",
    insEyebrow: "Sección 04 · Seguro de viaje",
    insTitle: "Contraten un seguro de viaje antes de volar",
    insBody:
      "Les recomendamos encarecidamente viajar con seguro. El vuelo desde América Latina es largo, y conviene llegar a Japón ya cubiertos si algo sale mal. No vendemos pólizas ni señalamos un producto como el mejor; solo presentamos la opción.",
    insLink: "Opciones de seguro de viaje",
    railEyebrow: "Sección 05 · Pase de tren",
    railTitle: "El JR Pass nacional suele sobrar si se quedan en Tokio",
    railBody:
      "Si el viaje es Tokio, o solo un Tokio-Kioto de ida y vuelta, un pase nacional a menudo es más de lo que necesitan. Lean la cuenta por ruta antes de comprarlo. No vendemos pases.",
    railLink: "¿Vale la pena el JR Pass en 2026?",
    airEyebrow: "Sección 06 · Acceso desde el aeropuerto",
    airTitle: "Narita o Haneda, y cómo llegar a la ciudad",
    airBody:
      "El aeropuerto que elijan marca las primeras horas después de un vuelo largo. El tren cubre la mayoría de las llegadas; un taxi puede tener sentido con mucho equipaje o un aterrizaje muy tarde. Presentamos opciones; no despachamos autos.",
    airLink: "Taxi de aeropuerto hacia Tokio",
    airInternal: "Narita vs Haneda: qué aeropuerto encaja",
    lugEyebrow: "Sección 07 · Equipaje",
    lugTitle: "Cuando no quieren arrastrar maletas por la ciudad",
    lugBody:
      "Si cambian de hotel o salen de excursión, una consigna o un envío el mismo día es más fácil que cargar maletas en el metro. No guardamos maletas ni gestionamos envíos por ustedes.",
    lugLink: "Opciones de guardaequipaje",
    cashEyebrow: "Sección 08 · Cómo pagar en Japón",
    cashTitle: "Las tarjetas llegan lejos. Un poco de yen todavía ayuda.",
    cashBody:
      "Suica o Pasmo cubren trenes y muchas tiendas de conveniencia. Restaurantes pequeños todavía pueden pedir efectivo. No cambiamos divisas. Traigan una tarjeta que funcione en el extranjero y un poco de yen para la primera noche, por si el primer cajero no acepta su tarjeta.",
    cashLink: "Propinas en Japón y cómo se suele pagar",
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
