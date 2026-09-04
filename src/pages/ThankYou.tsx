import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const ThankYou = () => {
  return (
    <Layout>
      <SEO
        title="Thanks, we received your inquiry | Tanuki Tabi Travel"
        description="Your Tokyo private tour inquiry is in. A coordinator will reply within 24 hours."
        canonicalPath="/thank-you"
      />
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-16 pb-20">
        <div className="container-section max-w-2xl">
          <p className="text-label text-accent mb-3">Inquiry received</p>
          <h1 className="heading-display text-foreground">Thanks. The request is in.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A coordinator will reply within 24 hours with availability and a suggested plan.
            No booking is confirmed until that exchange is done.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            While you wait, the trip-prep guide collects the practical questions
            most guests ask before they land — eSIM, trains, airport, cash.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/prepare-your-trip" className="btn-accent inline-flex justify-center">
              Trip prep guide
            </Link>
            <Link
              to="/tours"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Browse tours
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Questions in the meantime:{" "}
            <a href="mailto:info@tanuki-tabi-travel.com" className="text-accent hover:underline">
              info@tanuki-tabi-travel.com
            </a>
            {" · "}
            <Link to="/faq" className="text-accent hover:underline">
              FAQ
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
