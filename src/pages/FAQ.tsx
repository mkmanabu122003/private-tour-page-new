import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Booking & Pricing",
    items: [
      {
        question: "How much does a private tour cost?",
        answer: "Our Tokyo walking tours range from ¥25,000 to ¥40,000 per group depending on the tour and duration. Day trips to Kamakura (¥50,000), Hakone (¥55,000), and Nikko (¥60,000) have different pricing. Check each tour page for specific rates, or contact us for a custom quote.",
      },
      {
        question: "How do I book a tour?",
        answer: "Simply visit our Contact page and tell us your preferred date, group size, and interests. We'll respond within 24 hours with availability and a suggested itinerary.",
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 1-2 weeks in advance, especially during peak seasons (March-May for cherry blossoms, October-November for autumn). Last-minute bookings are sometimes possible — just ask!",
      },
      {
        question: "What is your cancellation policy?",
        answer: "Free cancellation up to 48 hours before the tour. Cancellations within 48 hours are charged in full. In case of severe weather warnings (typhoons etc.), you'll receive a full refund or reschedule option.",
      },
      {
        question: "Can I book for just 1 person?",
        answer: "Yes! Solo travelers are very welcome. Pricing may differ from group rates — contact us for a quote.",
      },
    ],
  },
  {
    title: "About the Tours",
    items: [
      {
        question: 'What is a "Government-Licensed Guide"?',
        answer: "The National Government Licensed Guide Interpreter (全国通訳案内士) is a national certification issued by the Japanese government. It requires passing rigorous exams covering Japanese history, geography, culture, and English proficiency. It is the only nationally recognized professional tour guide certification in Japan.",
      },
      {
        question: "Are your tours private?",
        answer: "Yes, all our tours are 100% private. It's just you and your group with your guide — no strangers, no fixed schedule. You set the pace.",
      },
      {
        question: "What happens if it rains?",
        answer: "Tours run rain or shine — Tokyo has many covered areas, indoor stops, and underground passages. Your guide will adapt the route for weather. We only cancel for severe weather warnings (typhoons etc.), in which case you'll receive a full refund or reschedule.",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer: "Absolutely. Let us know in advance and your guide will recommend restaurants that cater to vegetarian, vegan, halal, gluten-free, or allergy-specific needs.",
      },
      {
        question: "Are your tours suitable for children?",
        answer: "Yes! We regularly welcome families with children of all ages. Our routes are mostly flat and pram-friendly. Your guide will adjust the pace and content to keep younger travelers engaged.",
      },
      {
        question: "Can you accommodate wheelchair users?",
        answer: "We do our best to make tours accessible. Please let us know in advance and we'll plan a route that avoids stairs and uses accessible entrances. Some historic sites have limited accessibility — your guide will plan accordingly.",
      },
    ],
  },
  {
    title: "Day Trips",
    items: [
      {
        question: "How do we get to Kamakura / Hakone / Nikko?",
        answer: "By train from central Tokyo. Your guide meets you at your hotel or a convenient station and handles all navigation. Train fares are not included in the tour price but your guide will help you purchase tickets.",
      },
      {
        question: "Is it worth doing a day trip with a guide vs. on my own?",
        answer: 'While you can certainly visit these destinations independently, a guide provides three key benefits: (1) efficient navigation of complex transport systems, (2) deep cultural and historical context at each site, and (3) flexibility to adjust the itinerary based on weather, crowds, and your energy level. Most travelers tell us the guide transformed their experience from "visiting places" to "understanding Japan."',
      },
      {
        question: "Can I combine a day trip with a Tokyo tour?",
        answer: "Yes! Many guests book a Tokyo walking tour for one day and a day trip for another. We offer multi-day packages — contact us for details.",
      },
    ],
  },
  {
    title: "Practical",
    items: [
      {
        question: "Where do we meet?",
        answer: "Your guide can meet you at your hotel lobby, a nearby train station, or any convenient location in central Tokyo. We'll confirm the meeting point when you book.",
      },
      {
        question: "What should I wear / bring?",
        answer: "Comfortable walking shoes are essential. We recommend layers (Tokyo weather changes quickly), a water bottle, and sun protection in summer. Your guide will advise on any specific needs for your chosen tour.",
      },
      {
        question: "Do I need to tip?",
        answer: "Tipping is not customary in Japan and not expected. If you enjoyed the tour, a kind review is always appreciated!",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.items);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <Layout>
      <SEO
        title="FAQ | Tokyo Private Tour Guide Questions | Tanuki Tabi Travel"
        description="Common questions about booking a private tour in Tokyo. Learn about pricing, what's included, meeting points, group sizes, and how to customize your experience."
        canonicalPath="/faq"
      />

      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">Questions</p>
            <h1 className="heading-display text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about our tours. Can't find what
              you're looking for?{" "}
              <Link to="/contact" className="text-accent hover:underline">
                Contact us directly
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container-section">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="heading-card text-foreground mb-6">{category.title}</h2>
                <div className="space-y-4">
                  {category.items.map((faq, index) => {
                    const key = `${category.title}-${index}`;
                    return (
                      <div
                        key={key}
                        className="bg-card border border-border rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(key)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                        >
                          <span className="text-lg font-medium text-foreground pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                              openIndex === key ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openIndex === key && (
                          <div className="px-6 pb-6 animate-fade-in">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-section text-center">
          <h2 className="heading-card text-foreground">Still Have Questions?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            I'm happy to answer any other questions you may have about the tours
            or your visit to Tokyo.
          </p>
          <Link to="/contact" className="btn-accent mt-8 inline-flex">
            Contact Me
          </Link>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </Layout>
  );
};

export default FAQ;
