import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { PrepareTripHub } from "@/components/affiliates/PrepareTripHub";

const EsPreparaTuViaje = () => (
  <Layout>
    <SEO
      title="Prepara tu viaje a Tokio 2026 | Guía con licencia"
      description="Lo que un guía con licencia dice a sus clientes antes de volar: Pocket WiFi, si compensa el JR Pass, Narita o Haneda y cuánto efectivo llevar."
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
