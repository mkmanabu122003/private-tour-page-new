import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

interface PolicySection {
  title: string;
  content: React.ReactNode;
}

const CancellationPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections: PolicySection[] = [
    {
      title: "Cancellation by You",
      content: (
        <div className="space-y-4">
          <p>
            Travel plans change, and that's okay. Here's how cancellations work.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-foreground">
                    When You Cancel
                  </th>
                  <th className="text-left py-3 font-medium text-foreground">
                    Refund
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">7 or more days before the tour</td>
                  <td className="py-3 font-medium text-highlight">
                    Full refund
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">3 to 6 days before the tour</td>
                  <td className="py-3">50% refund</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Less than 72 hours before the tour</td>
                  <td className="py-3">No refund</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">No-show (no contact)</td>
                  <td className="py-3">No refund</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            All times are based on Japan Standard Time (JST / UTC+9). To cancel,
            please email us at{" "}
            <a
              href="mailto:info@tanuki-tabi-travel.com"
              className="text-accent hover:underline"
            >
              info@tanuki-tabi-travel.com
            </a>
            .
          </p>
        </div>
      ),
    },
    {
      title: "Cancellation by Us (Guide)",
      content: (
        <div className="space-y-4">
          <p>
            If we need to cancel your tour, you'll always get a full
            refund or the option to reschedule. It's your call.
          </p>
          <p>Situations where we may cancel include:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Severe weather:</strong> The Japan Meteorological
                Agency issues a warning (typhoon, heavy rain, flooding, etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Natural disasters:</strong> Earthquakes, volcanic
                activity, or other events where safety cannot be ensured
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Major public transport disruption:</strong> If key
                transit on your tour route is suspended, we may propose an
                alternative route or cancel
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Guide illness or injury:</strong> If your guide is
                unable to safely lead the tour
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Personal emergency:</strong> Family emergencies or
                other unavoidable personal circumstances
              </span>
            </li>
          </ul>
          <p>
            We will contact you as soon as possible by email. If you choose to
            reschedule, we will prioritize finding an alternative date during
            your stay.
          </p>
        </div>
      ),
    },
    {
      title: "Exceptional Circumstances",
      content: (
        <div className="space-y-4">
          <p>
            Sometimes things come up that you can't control. In these
            situations, the standard timeline above doesn't apply:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Illness or injury:</strong> You or someone in your
                group falls ill or gets injured
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Flight delays or cancellations:</strong> Your flight is
                significantly delayed or cancelled
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Entry issues:</strong> Passport or visa problems
                preventing entry to Japan
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Family emergency:</strong> Serious illness or death of
                a close family member
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Travel advisories:</strong> Official government travel
                warnings are raised for your destination
              </span>
            </li>
          </ul>
          <p>
            In these cases, you'll get a full refund or rescheduling. We may
            ask for documentation (e.g., a notice from your airline), but it's
            not always required. When in doubt, we side with you.
          </p>
        </div>
      ),
    },
    {
      title: "Rescheduling",
      content: (
        <div className="space-y-4">
          <p>
            Need a different date? We can reschedule your tour during your
            stay, subject to availability.
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                Your first reschedule is free of charge
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                For subsequent reschedule requests, we will do our best to
                accommodate you, but cannot guarantee availability
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                To reschedule, email us at{" "}
                <a
                  href="mailto:info@tanuki-tabi-travel.com"
                  className="text-accent hover:underline"
                >
                  info@tanuki-tabi-travel.com
                </a>
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Late Arrival & No-Show",
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-foreground">
                    Situation
                  </th>
                  <th className="text-left py-3 font-medium text-foreground">
                    What Happens
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Up to 15 minutes late</td>
                  <td className="py-3">
                    Your guide will wait. Tour time may be adjusted accordingly.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    More than 15 minutes late (no contact)
                  </td>
                  <td className="py-3">Treated as a no-show. No refund.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Early departure</td>
                  <td className="py-3">
                    If you choose to end the tour early, the remaining time is
                    not refunded.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Running late? Just send your guide a message. We'll work it out.
          </p>
        </div>
      ),
    },
    {
      title: "Payment & Refunds",
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                Full payment is required at the time of booking to confirm your
                tour
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                Refunds are processed to the original payment method within 7 to
                14 business days
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                Refund amounts are determined by the cancellation timeline above
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "How to Cancel or Reschedule",
      content: (
        <div className="space-y-4">
          <p>
            To cancel or reschedule your tour, email us at:
          </p>
          <a
            href="mailto:info@tanuki-tabi-travel.com"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            <Mail className="w-4 h-4" />
            info@tanuki-tabi-travel.com
          </a>
          <p>Please include:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>Your name and booking date</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>Whether you'd like to cancel or reschedule</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                If rescheduling, your preferred alternative date(s)
              </span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            We aim to respond to all cancellation and rescheduling requests
            within 24 hours.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <SEO
        title="Cancellation Policy | Tanuki Tabi Travel - Tokyo Private Tours"
        description="Flexible cancellation policy for Tokyo private tours. Free cancellation up to 7 days before your tour. Easy rescheduling options available."
        canonicalPath="/cancellation-policy"
        hreflang={[
          { lang: "en", path: "/cancellation-policy" },
          { lang: "es", path: "/es/cancellation-policy" },
          { lang: "x-default", path: "/cancellation-policy" },
        ]}
      />

      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">Policy</p>
            <h1 className="heading-display text-foreground">
              Cancellation Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Plans change, and that's okay. Here's how we handle it.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-12 border-b border-border">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              At a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-highlight/10 border border-highlight/20 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">7+ days</p>
                <p className="text-lg font-semibold text-highlight">
                  Full Refund
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">3–6 days</p>
                <p className="text-lg font-semibold text-accent">50% Refund</p>
              </div>
              <div className="bg-secondary border border-border rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">&lt;72 hours</p>
                <p className="text-lg font-semibold text-muted-foreground">
                  No Refund
                </p>
              </div>
              <div className="bg-secondary border border-border rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">No-show</p>
                <p className="text-lg font-semibold text-muted-foreground">
                  No Refund
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16">
        <div className="container-section">
          <div className="max-w-3xl mx-auto space-y-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="text-lg font-medium text-foreground pr-4">
                    {section.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in text-muted-foreground leading-relaxed">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Note */}
      <section className="pb-8">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground/60 text-center">
              This policy may be updated from time to time. The version in
              effect at the time of your booking applies to your tour. Last
              updated: April 2026.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-section text-center">
          <h2 className="heading-card text-foreground">
            Questions About Your Booking?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have questions about cancellations, rescheduling, or your
            upcoming tour? I'm happy to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent inline-flex">
              Contact Me
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CancellationPolicy;
