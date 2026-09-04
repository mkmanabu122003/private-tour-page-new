export type TourLang = "en" | "es";

export interface TourFaqItem {
  question: string;
  answer: string;
}

const cancellationHref = {
  en: "/cancellation-policy",
  es: "/es/cancellation-policy",
} as const;

export const tourInclusionsCopy = {
  en: {
    heading: "What's included in the fee",
    includedTitle: "Included",
    excludedTitle: "Not included",
    included: [
      "Licensed guide service",
      "The licensed guide's own transport on the day",
    ],
    excluded: [
      "Admission fees",
      "Meals",
      "Each traveler's own transport (paid on the day)",
    ],
    paymentTitle: "Payment",
    payment:
      "The full amount is due at booking time. Wise is the preferred method; PayPal also works.",
    vehicleTitle: "Private vehicle",
    vehicle:
      "A private or charter vehicle is not included in any tour. It is always a separate quote. This site does not book or reserve the vehicle — introduction and quote only.",
  },
  es: {
    heading: "Qué incluye la tarifa",
    includedTitle: "Incluido",
    excludedTitle: "No incluido",
    included: [
      "Servicio de guía certificado",
      "El transporte del guía certificado el día del tour",
    ],
    excluded: [
      "Entradas",
      "Comidas",
      "El transporte de cada viajero (se paga el mismo día)",
    ],
    paymentTitle: "Pago",
    payment:
      "El importe completo se paga en el momento de la reserva. Se recomienda Wise; también se acepta PayPal.",
    vehicleTitle: "Vehículo privado",
    vehicle:
      "Un vehículo privado o de alquiler con conductor no está incluido en ningún tour. Siempre es un presupuesto aparte. Este sitio no reserva ni contrata el vehículo: solo presentación y presupuesto.",
  },
} as const;

export function getTourInclusionsCopy(lang: TourLang, options?: { includeMeals?: boolean }) {
  const base = tourInclusionsCopy[lang];
  if (!options?.includeMeals) {
    return {
      ...base,
      included: [...base.included],
      excluded: [...base.excluded],
    };
  }
  const mealLabel = lang === "es" ? "Comidas" : "Meals";
  return {
    ...base,
    included: [...base.included, mealLabel],
    excluded: base.excluded.filter((item) => item !== mealLabel),
  };
}

export const tourTrustCopy = {
  en: {
    heading: "Who designs the day, who leads it",
    body:
      "Itineraries are designed by a coordinator who holds Japan's National Government Licensed Guide Interpreter credential (Spanish and English). Certified licensed guides lead the tour on the day.",
  },
  es: {
    heading: "Quién diseña el itinerario y quién acompaña",
    body:
      "Los itinerarios los diseña un coordinador con la licencia nacional de guía-intérprete (español e inglés). Guías certificados acompañan el día del tour.",
  },
} as const;

export function getCommonTourFaqs(lang: TourLang): TourFaqItem[] {
  if (lang === "es") {
    return [
      {
        question: "¿Cuál es la política de cancelación?",
        answer:
          "Si cancelan con 7 días o más de antelación (hora de Japón), el reembolso es completo. Entre 3 y 6 días, el 50%. Con menos de 72 horas, no hay reembolso. La política completa está en la página de cancelación.",
      },
      {
        question: "¿Qué pasa si llueve?",
        answer:
          "Los tours se realizan con lluvia o sol. El itinerario se adapta a zonas cubiertas y paradas interiores. Solo se cancela ante alertas meteorológicas graves (tifón u otras advertencias oficiales); en ese caso hay reembolso completo o se reprograma.",
      },
      {
        question: "¿Se puede ir con niños?",
        answer:
          "Sí. Las familias con niños de todas las edades reservan estos tours con regularidad. Las rutas son en su mayoría planas y aptas para carrito. El ritmo y las paradas se ajustan para que los más pequeños también puedan seguir el día.",
      },
      {
        question: "¿Hay problema si alguien del grupo tiene tatuajes?",
        answer:
          "En los tours a pie no hay restricción por tatuajes. Algunos onsen y baños públicos en Japón no admiten tatuajes visibles. Si el grupo quiere incluir un baño, indíquenlo al consultar para elegir un sitio que lo permita.",
      },
      {
        question: "¿Pueden adaptar el tour a restricciones alimentarias?",
        answer:
          "Sí, si lo indican al consultar. Se pueden planear paradas vegetarianas, veganas, halal, sin gluten o con alergias frecuentes.",
      },
      {
        question: "¿Dónde se encuentran?",
        answer:
          "El punto de encuentro se confirma al cerrar la reserva: lobby del hotel, una estación cercana u otro lugar fácil de reconocer en el centro de Tokio. Cada ficha de tour indica una estación de partida habitual.",
      },
    ];
  }

  return [
    {
      question: "What's the cancellation policy?",
      answer:
        "Cancel 7 or more days before the tour (Japan time) for a full refund. 3 to 6 days before, a 50% refund. Less than 72 hours, no refund. The full policy is on the cancellation page.",
    },
    {
      question: "What happens if it rains?",
      answer:
        "Tours run rain or shine. The route shifts toward covered streets and indoor stops. Cancellation is only for severe weather warnings (typhoon or similar official alerts). In that case it's a full refund or a new date.",
    },
    {
      question: "Can we bring children?",
      answer:
        "Yes. Families with children of all ages book these tours regularly. Routes are mostly flat and pram-friendly. Pace and stops adjust so younger travelers can keep up.",
    },
    {
      question: "Is it a problem if someone in the group has tattoos?",
      answer:
        "Walking tours have no tattoo restriction. Some onsen and public baths in Japan do not allow visible tattoos. If the group wants a bath stop, mention it when you inquire so the itinerary can use a facility that accepts tattoos.",
    },
    {
      question: "Can the tour work around dietary restrictions?",
      answer:
        "Yes, if you mention them when you inquire. Vegetarian, vegan, halal, gluten-free, and common allergies can be planned for.",
    },
    {
      question: "Where do we meet?",
      answer:
        "The meeting point is confirmed when the booking is set: a hotel lobby, a nearby station, or another easy landmark in central Tokyo. Each tour page lists a usual starting station.",
    },
  ];
}

export function getCancellationPolicyHref(lang: TourLang): string {
  return cancellationHref[lang];
}
