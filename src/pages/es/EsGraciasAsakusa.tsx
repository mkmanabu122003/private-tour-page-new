import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsGraciasAsakusa = () => {
  return (
    <Layout>
      <SEO
        title="Gracias por visitar Asakusa | Tanuki Tabi Travel"
        description="Gracias por pasar por Asakusa. Un tour privado con guía certificado, o la guía para preparar el resto del viaje a Tokio."
        canonicalPath="/es/gracias-asakusa"
      />
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-16 pb-20">
        <div className="container-section max-w-2xl">
          <p className="text-label text-accent mb-3">Asakusa</p>
          <h1 className="heading-display text-foreground">Gracias por visitar Asakusa.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Si quieren recorrer el barrio con calma, un tour privado pasa por Senso-ji y las
            calles de atrás con un guía certificado. El equipo arma el itinerario. El guía
            los acompaña ese día.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/es/tours/asakusa" className="btn-accent inline-flex justify-center">
              Tour privado por Asakusa
            </Link>
            <Link
              to="/es/contact?tour=asakusa"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Consultar disponibilidad
            </Link>
          </div>
          <p className="mt-10 text-muted-foreground leading-relaxed">
            Si todavía están armando el resto del viaje (datos, trenes, aeropuerto), esta
            guía junta las preguntas que más nos llegan antes de aterrizar.
          </p>
          <p className="mt-4">
            <Link to="/es/prepara-tu-viaje" className="text-accent hover:underline font-medium">
              Guía para preparar el viaje
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default EsGraciasAsakusa;
