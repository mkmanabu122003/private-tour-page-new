import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What happens if it rains?",
    answer: "Tours run rain or shine! I provide umbrellas if needed, and we can adjust the itinerary to include more covered areas like temples, shopping arcades, and indoor spots. Some guests even find the rainy atmosphere adds to the authentic Tokyo experience.",
  },
  {
    question: "Is this tour suitable for children?",
    answer: "Absolutely! My tours are family-friendly and I can adjust the pace and content for children. We can include more interactive elements, snack breaks, and kid-friendly spots. Please let me know the ages of your children when booking.",
  },
  {
    question: "How far do we walk?",
    answer: "Walking distances vary by tour: Asakusa is about 3-4 km, Yanaka is about 4-5 km. We walk at a comfortable pace with plenty of stops. If you have mobility concerns, please let me know and I can customize the route.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Free cancellation up to 24 hours before the tour start time. Cancellations within 24 hours are charged 100% of the tour fee. In case of severe weather warnings, I may offer to reschedule at no extra cost.",
  },
  {
    question: "How do I pay?",
    answer: "Payment is made on the day of the tour. I accept cash (Japanese Yen) or major credit cards. For custom tours or special arrangements, advance payment may be requested.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer: "Yes! If we're doing food tasting or stopping for lunch, please inform me of any allergies or dietary restrictions (vegetarian, halal, kosher, etc.) when booking, and I'll make appropriate arrangements.",
  },
  {
    question: "What should I wear/bring?",
    answer: "Wear comfortable walking shoes and dress for the weather. Bring a camera, water, and perhaps a small backpack. Temples require removing shoes, so easy-to-remove footwear is helpful. I'll send detailed preparation tips before your tour.",
  },
  {
    question: "Can you pick us up from our hotel?",
    answer: "Tours typically start at convenient train station meeting points. However, for custom tours, I can arrange to meet you at your hotel lobby in central Tokyo for an additional fee. Please inquire when booking.",
  },
  {
    question: "Do you offer tours in languages other than English?",
    answer: "Currently, I conduct tours in English and Japanese. If you need another language, please contact me and I may be able to recommend a colleague or arrange interpretation.",
  },
  {
    question: "How do I book a custom tour?",
    answer: "Contact me through the booking form with your interests, dates, and group size. We'll have a conversation to understand what you'd like to experience, and I'll create a personalized itinerary for you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <SEO
        title="FAQ | Tokyo Private Tour Questions | Tanuki Tabi Travel"
        description="Answers to common questions about private Tokyo walking tours: cancellation policy, payment, weather, accessibility, and custom tour options."
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
              Find answers to common questions about my tours. Can't find what 
              you're looking for? Feel free to contact me directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="font-serif text-lg font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
    </Layout>
  );
};

export default FAQ;
