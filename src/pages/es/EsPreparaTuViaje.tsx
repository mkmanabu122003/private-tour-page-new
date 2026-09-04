import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PrepareTripHub } from "@/components/affiliates/PrepareTripHub";

const EsPreparaTuViaje = () => (
  <Layout>
    <SEO
      title="Prepara tu viaje a Tokio 2026 | eSIM y trenes"
      description="eSIM, WiFi, JR Pass, aeropuerto y efectivo antes de aterrizar. Primero tours privados en Tokio; luego socios. No reservamos transporte por ustedes."
      canonicalPath="/es/prepara-tu-viaje"
      hreflang={[
        { lang: "en", path: "/prepare-your-trip" },
        { lang: "es", path: "/es/prepara-tu-viaje" },
        { lang: "x-default", path: "/prepare-your-trip" },
      ]}
      breadcrumbs={[
        { name: "Inicio", path: "/es" },
        { name: "Prepara tu viaje" },
      ]}
    />
    <PrepareTripHub lang="es" />
  </Layout>
);

export default EsPreparaTuViaje;
