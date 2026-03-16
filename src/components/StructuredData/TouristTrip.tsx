interface ItineraryDay {
  name: string;
  description: string;
  places: string[];
  recommendedDuration?: string;
}

interface TouristTripProps {
  name: string;
  description: string;
  url: string;
  touristType: string;
  /** ISO 8601 duration, e.g. "P3D" for 3 days */
  duration: string;
  days: ItineraryDay[];
}

const TouristTrip = ({
  name,
  description,
  url,
  touristType,
  duration,
  days,
}: TouristTripProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url,
    touristType: {
      "@type": "Audience",
      audienceType: touristType,
    },
    duration,
    provider: {
      "@type": "Person",
      name: "Manabu",
      url: "https://tanuki-tabi-travel.com/about",
      jobTitle: "National Government Licensed Guide Interpreter",
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: days.length,
      itemListElement: days.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: day.name,
        description: day.description,
        item: {
          "@type": "Trip",
          name: day.name,
          description: day.description,
          ...(day.recommendedDuration && { duration: day.recommendedDuration }),
          itinerary: {
            "@type": "ItemList",
            itemListElement: day.places.map((place, placeIndex) => ({
              "@type": "ListItem",
              position: placeIndex + 1,
              item: {
                "@type": "Place",
                name: place,
              },
            })),
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export { TouristTrip };
