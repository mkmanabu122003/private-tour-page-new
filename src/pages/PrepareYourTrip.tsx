import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PrepareTripHub } from "@/components/affiliates/PrepareTripHub";

const PrepareYourTrip = () => (
  <Layout>
    <SEO
      title="Prepare Your Tokyo Trip 2026 | eSIM, Trains, Airport"
      description="eSIM, trains, airport, and cash before you land. Private Tokyo tours first, then partner intros. We don't book transport for you."
      canonicalPath="/prepare-your-trip"
      hreflang={[
        { lang: "en", path: "/prepare-your-trip" },
        { lang: "es", path: "/es/prepara-tu-viaje" },
        { lang: "x-default", path: "/prepare-your-trip" },
      ]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Prepare your trip" },
      ]}
    />
    <PrepareTripHub lang="en" />
  </Layout>
);

export default PrepareYourTrip;
