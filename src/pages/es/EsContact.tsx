// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { trackContactPageView } from "@/lib/ga4";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";

const EsContact = () => {
  const [searchParams] = useSearchParams();
  const initialTour = searchParams.get("tour") || "";

  useEffect(() => {
    trackContactPageView();
  }, []);

  return (
    <Layout>
      <SEO
        title="Reserva tu Tour Privado en Tokio | Tanuki Tabi Travel"
        description="Reserva tu tour privado en Tokio con Manabu, guía japonés nativo con licencia oficial. Respuesta en menos de 24 horas."
        canonicalPath="/es/contact"
        hreflang={[
          { lang: "en", path: "/contact" },
          { lang: "es", path: "/es/contact" },
          { lang: "x-default", path: "/contact" },
        ]}
      />

      {/* Header */}
      <section className="pt-16 pb-12 bg-secondary/30">
        <div className="container-section">
          <div className="max-w-2xl">
            <p className="text-label text-accent mb-3">Contacto</p>
            <h1 className="heading-display text-foreground">Reserva tu Tour o Contáctanos</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              ¿Listo para explorar Tokio? Completa el formulario y te responderé en menos de 24 horas para confirmar tu reserva o responder tus preguntas.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-8 bg-secondary/30 border-b border-border">
        <div className="container-section">
          <div className="flex items-center gap-4 max-w-2xl">
            <img
              src={guidePortrait}
              alt="Manabu, tu guía turístico con licencia en Tokio"
              className="w-14 h-14 rounded-full object-cover border-2 border-accent shrink-0"
              loading="lazy"
              width={56}
              height={56}
            />
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "Leo personalmente cada mensaje y respondo en menos de 24 horas." — <span className="text-foreground font-medium not-italic">Manabu</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="inquiry-form" className="py-16 scroll-mt-24">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <InquiryForm lang="es" initialTour={initialTour} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    Información de Contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a href="mailto:info@tanuki-tabi-travel.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          info@tanuki-tabi-travel.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Ubicación</p>
                        <p className="text-sm text-muted-foreground">Tokio, Japón</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    Información Rápida
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-highlight mt-0.5 shrink-0" />
                      Respuesta en menos de 24 horas
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-highlight mt-0.5 shrink-0" />
                      Reserva con al menos 48 horas de antelación
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-highlight mt-0.5 shrink-0" />
                      Tours personalizados disponibles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EsContact;
