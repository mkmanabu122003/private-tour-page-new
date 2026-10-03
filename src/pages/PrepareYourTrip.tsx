import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PrepareTripHub } from "@/components/affiliates/PrepareTripHub";

const PrepareYourTrip = () => (
  <Layout>
    <SEO
      title="Prepare Your Tokyo Trip 2026 | A Guide's Checklist"
      description="What a licensed Tokyo guide tells guests before they fly: pocket WiFi, whether the JR Pass pays off, Narita vs Haneda, and how much cash to carry."
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
