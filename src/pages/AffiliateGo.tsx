import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { trackAffiliateClick } from "@/lib/ga4";
import {
  getAffiliateOffer,
  isTodoSlug,
  isUnconfiguredDestination,
} from "@/lib/affiliates";

const AffiliateGo = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const offer = getAffiliateOffer(slug);
  const unconfigured =
    !offer || isTodoSlug(slug) || isUnconfiguredDestination(offer.destination);

  useEffect(() => {
    if (!offer) return;

    trackAffiliateClick({
      slug: offer.slug,
      partner: offer.partner,
      destination: offer.destination,
    });

    if (unconfigured) return;
    if (!/^https:\/\//i.test(offer.destination)) return;

    const timer = window.setTimeout(() => {
      window.location.assign(offer.destination);
    }, 120);
    return () => window.clearTimeout(timer);
  }, [offer, unconfigured]);

  if (!offer) {
    return (
      <Layout>
        <SEO
          title="Link not found | Tanuki Tabi Travel"
          description="This booking link is not available."
          canonicalPath={`/go/${slug}`}
          robots="noindex, nofollow"
        />
        <section className="py-24">
          <div className="container-section max-w-xl">
            <h1 className="heading-display text-foreground">Link not found</h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              That booking shortcut isn't in our list. Head back to the logistics
              checklist to keep planning.
            </p>
            <p className="mt-8 flex flex-wrap gap-4">
              <Link to="/logistics" className="btn-accent">
                Trip logistics
              </Link>
              <Link to="/es/logistics" className="btn-outline">
                Logística del viaje
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <SEO
        title="Booking link | Tanuki Tabi Travel"
        description="Third-party booking shortcut used from the logistics checklist."
        canonicalPath={`/go/${offer.slug}`}
        robots="noindex, nofollow"
      />
      <section className="py-24">
        <div className="container-section max-w-xl">
          {unconfigured ? (
            <>
              <h1 className="heading-display text-foreground">
                This booking link isn't live yet
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The partner shortcut <code className="text-sm">{`/go/${offer.slug}`}</code> is
                a placeholder. No third-party site will open from here until the
                destination is configured. You book those tools yourself — this
                page does not complete a reservation.
              </p>
              <p className="mt-8 flex flex-wrap gap-4">
                <Link to="/logistics" className="btn-accent">
                  Back to logistics
                </Link>
                <Link to="/es/logistics" className="btn-outline">
                  Volver a logística
                </Link>
                <Link to="/contact" className="btn-outline">
                  Inquire about a private tour
                </Link>
              </p>
            </>
          ) : (
            <>
              <h1 className="heading-display text-foreground">Continuing to the booking site</h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                If nothing happens,{" "}
                <a href={offer.destination} className="text-accent hover:underline" rel="nofollow sponsored noopener">
                  open the booking page
                </a>
                .
              </p>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AffiliateGo;
