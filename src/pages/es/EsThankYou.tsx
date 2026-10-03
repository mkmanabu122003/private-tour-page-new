import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

const EsThankYou = () => {
  return (
    <Layout>
      <SEO
        title="Recibimos su consulta | Tanuki Tabi Travel"
        description="Su consulta de tour privado en Tokio ya llegó. Un coordinador responderá en menos de 24 horas."
        canonicalPath="/es/thank-you"
      />
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="pt-16 pb-20">
        <div className="container-section max-w-2xl">
          <p className="text-label text-accent mb-3">Consulta recibida</p>
          <h1 className="heading-display text-foreground">Gracias. Ya llegó la solicitud.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Un coordinador responderá en menos de 24 horas con disponibilidad y un plan
            sugerido. La reserva no queda confirmada hasta ese intercambio.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Mientras esperan, la guía para preparar el viaje cubre lo que más
            preguntan antes de aterrizar: eSIM, trenes, aeropuerto y efectivo.
            Presentamos esas opciones. No las reservamos por ustedes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/es/prepara-tu-viaje" className="btn-accent inline-flex justify-center">
              Guía para preparar el viaje
            </Link>
            <Link
              to="/es/tours"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Ver tours
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Si hace falta escribir antes:{" "}
            <a href="mailto:info@tanuki-tabi-travel.com" className="text-accent hover:underline">
              info@tanuki-tabi-travel.com
            </a>
            {" · "}
            <Link to="/es/faq" className="text-accent hover:underline">
              Preguntas frecuentes
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default EsThankYou;
