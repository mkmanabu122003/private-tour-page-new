import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";

interface PolicySection {
  title: string;
  content: React.ReactNode;
}

const EsCancellationPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections: PolicySection[] = [
    {
      title: "Cancelación por tu parte",
      content: (
        <div className="space-y-4">
          <p>
            Los planes de viaje cambian, y lo entendemos. Así funcionan las cancelaciones.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-foreground">
                    Cuándo cancelas
                  </th>
                  <th className="text-left py-3 font-medium text-foreground">
                    Reembolso
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">7 o más días antes del tour</td>
                  <td className="py-3 font-medium text-highlight">
                    Reembolso completo
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">De 3 a 6 días antes del tour</td>
                  <td className="py-3">Reembolso del 50%</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Menos de 72 horas antes del tour</td>
                  <td className="py-3">Sin reembolso</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">No presentarse (sin contacto)</td>
                  <td className="py-3">Sin reembolso</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            Todos los horarios se basan en la hora estándar de Japón (JST /
            UTC+9). Para cancelar, envíanos un correo a{" "}
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
      title: "Cancelación por nuestra parte (guía)",
      content: (
        <div className="space-y-4">
          <p>
            Si necesitamos cancelar tu tour, siempre recibirás un reembolso
            completo o la opción de reprogramar. Tú decides.
          </p>
          <p>Situaciones en las que podríamos cancelar:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Clima severo:</strong> La Agencia Meteorológica
                de Japón emite una alerta (tifón, lluvia intensa, inundaciones,
                etc.)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Desastres naturales:</strong> Terremotos, actividad
                volcánica u otros eventos donde no se puede garantizar la
                seguridad
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Interrupción importante del transporte público:</strong>{" "}
                Si el transporte principal de la ruta del tour se suspende,
                podemos proponer una ruta alternativa o cancelar
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Enfermedad o lesión del guía:</strong> Si el guía no
                puede realizar el tour de forma segura
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Emergencia personal:</strong> Emergencias familiares u
                otras circunstancias personales inevitables
              </span>
            </li>
          </ul>
          <p>
            Te contactaremos lo antes posible por correo electrónico. Si eliges
            reprogramar, priorizaremos encontrar una fecha alternativa durante
            tu estancia.
          </p>
        </div>
      ),
    },
    {
      title: "Circunstancias excepcionales",
      content: (
        <div className="space-y-4">
          <p>
            A veces surgen imprevistos que no puedes controlar. En estos
            casos, el plazo estándar de cancelación no se aplica:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Enfermedad o lesión:</strong> Tú o alguien de tu
                grupo se enferma o sufre una lesión
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Retrasos o cancelaciones de vuelos:</strong> Tu vuelo
                tiene un retraso significativo o es cancelado
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Problemas de entrada:</strong> Problemas de pasaporte o
                visa que impiden la entrada a Japón
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Emergencia familiar:</strong> Enfermedad grave o
                fallecimiento de un familiar cercano
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                <strong>Alertas de viaje:</strong> Se elevan las advertencias
                oficiales del gobierno para tu destino
              </span>
            </li>
          </ul>
          <p>
            En estos casos, recibirás un reembolso completo o reprogramación.
            Podemos solicitar documentación (por ejemplo, un aviso de tu
            aerolínea), pero no siempre es necesario. En caso de duda, decidimos
            a tu favor.
          </p>
        </div>
      ),
    },
    {
      title: "Reprogramación",
      content: (
        <div className="space-y-4">
          <p>
            ¿Necesitas otra fecha? Podemos reprogramar tu tour durante tu
            estancia, sujeto a disponibilidad.
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                La primera reprogramación es gratuita
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                Para solicitudes de reprogramación posteriores, haremos lo
                posible para acomodarte, pero no podemos garantizar
                disponibilidad
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                Para reprogramar, envíanos un correo a{" "}
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
      title: "Llegada tardía y no presentarse",
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-medium text-foreground">
                    Situación
                  </th>
                  <th className="text-left py-3 font-medium text-foreground">
                    Qué ocurre
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Hasta 15 minutos de retraso</td>
                  <td className="py-3">
                    Tu guía te esperará. El tiempo del tour se ajustará en
                    consecuencia.
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    Más de 15 minutos de retraso (sin contacto)
                  </td>
                  <td className="py-3">
                    Se considera como no presentarse. Sin reembolso.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Salida anticipada</td>
                  <td className="py-3">
                    Si decides terminar el tour antes, el tiempo restante no se
                    reembolsa.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">
            ¿Llegas tarde? Envía un mensaje a tu guía. Lo solucionamos.
          </p>
        </div>
      ),
    },
    {
      title: "Pago y reembolsos",
      content: (
        <div className="space-y-4">
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                El pago completo es necesario al momento de la reserva para
                confirmar tu tour
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                Los reembolsos se procesan al método de pago original en un
                plazo de 7 a 14 días hábiles
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                Los montos de reembolso se determinan según el plazo de
                cancelación indicado anteriormente
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Cómo cancelar o reprogramar",
      content: (
        <div className="space-y-4">
          <p>
            Para cancelar o reprogramar tu tour, envíanos un correo a:
          </p>
          <a
            href="mailto:info@tanuki-tabi-travel.com"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            <Mail className="w-4 h-4" />
            info@tanuki-tabi-travel.com
          </a>
          <p>Por favor incluye:</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>Tu nombre y la fecha de la reserva</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>Si deseas cancelar o reprogramar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1.5 text-xs">&#9679;</span>
              <span>
                Si reprogramas, tu(s) fecha(s) alternativa(s) preferida(s)
              </span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Nos esforzamos por responder a todas las solicitudes de cancelación
            y reprogramación en un plazo de 24 horas.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <SEO
        title="Política de Cancelación | Tanuki Tabi Travel - Tours Privados en Tokio"
        description="Política de cancelación flexible para tours privados en Tokio. Cancelación gratuita hasta 7 días antes del tour. Opciones de reprogramación disponibles."
        canonicalPath="/es/cancellation-policy"
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
            <p className="text-label text-accent mb-3">Política</p>
            <h1 className="heading-display text-foreground">
              Política de Cancelación
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Los planes cambian, y lo entendemos. Así es como lo gestionamos.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-12 border-b border-border">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-foreground mb-6">
              Resumen
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-highlight/10 border border-highlight/20 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">7+ días</p>
                <p className="text-lg font-semibold text-highlight">
                  Reembolso total
                </p>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">3–6 días</p>
                <p className="text-lg font-semibold text-accent">
                  Reembolso 50%
                </p>
              </div>
              <div className="bg-secondary border border-border rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">&lt;72 horas</p>
                <p className="text-lg font-semibold text-muted-foreground">
                  Sin reembolso
                </p>
              </div>
              <div className="bg-secondary border border-border rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">No presentarse</p>
                <p className="text-lg font-semibold text-muted-foreground">
                  Sin reembolso
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
              Esta política puede actualizarse periódicamente. La versión
              vigente al momento de tu reserva se aplica a tu tour. Última
              actualización: abril de 2026.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container-section text-center">
          <h2 className="heading-card text-foreground">
            ¿Tienes preguntas sobre tu reserva?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            ¿Tienes dudas sobre cancelaciones, reprogramación o tu
            próximo tour? Escríbeme y te ayudo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/es/contact" className="btn-accent inline-flex">
              Contáctame
            </Link>
            <Link
              to="/es/faq"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Ver FAQ
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EsCancellationPolicy;
