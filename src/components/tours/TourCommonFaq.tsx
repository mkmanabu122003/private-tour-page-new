import { Link } from "react-router-dom";
import {
  getCancellationPolicyHref,
  getCommonTourFaqs,
  type TourFaqItem,
  type TourLang,
} from "./tourPolicyCopy";

interface TourCommonFaqProps {
  lang?: TourLang;
  extraFaqs?: TourFaqItem[];
  heading?: string;
}

export const TourCommonFaq = ({ lang = "en", extraFaqs = [], heading }: TourCommonFaqProps) => {
  const common = getCommonTourFaqs(lang);
  const faqs = [...extraFaqs, ...common];
  const policyHref = getCancellationPolicyHref(lang);
  const title =
    heading ?? (lang === "es" ? "Preguntas frecuentes" : "Frequently asked questions");
  const policyLink = lang === "es" ? "Ver la política de cancelación" : "Read the cancellation policy";

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container-section">
        <h2 className="heading-section text-foreground mb-8 text-center">{title}</h2>
        <div className="faq-block space-y-8 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-foreground mb-2">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">
            <Link to={policyHref} className="text-accent hover:underline">
              {policyLink}
            </Link>
          </p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};
