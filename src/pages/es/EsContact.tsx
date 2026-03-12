// TRANSLATION REVIEW NEEDED: Please have a native Spanish speaker review this content before publishing
import { useState, useEffect } from "react";
import { Mail, MapPin, Send, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { trackContactPageView, trackFormSubmit } from "@/lib/ga4";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";

const EsContact = () => {
  const { toast } = useToast();

  useEffect(() => {
    trackContactPageView();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tourType: "",
    date: "",
    groupSize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataEncoded = new FormData(formElement);

      const formDataObj: Record<string, string> = {
        "form-name": "contact-es",
      };

      formDataEncoded.forEach((value, key) => {
        formDataObj[key] = value.toString();
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj).toString(),
      });

      if (response.ok) {
        trackFormSubmit();
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por tu consulta. Responderé en menos de 24 horas.",
        });

        setFormData({
          name: "",
          email: "",
          tourType: "",
          date: "",
          groupSize: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos directamente por email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section className="py-16">
        <div className="container-section">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                name="contact-es"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact-es" />
                <p className="hidden">
                  <label>
                    No rellenes esto si eres humano: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="tu-email@ejemplo.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="tourType" className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Tour
                    </label>
                    <select
                      id="tourType"
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    >
                      <option value="">Selecciona un tour</option>
                      <optgroup label="Tours por Tokio">
                        <option value="asakusa">Tour por Asakusa</option>
                        <option value="yanaka">Ueno y Yanaka</option>
                        <option value="shibuya-harajuku">Shibuya y Harajuku</option>
                        <option value="tsukiji-ginza">Tsukiji y Ginza</option>
                        <option value="imperial-palace">Palacio Imperial</option>
                      </optgroup>
                      <optgroup label="Tours de Experiencia">
                        <option value="tokyo-food-tour">Tour Gastronómico</option>
                        <option value="tokyo-night-tour">Tour Nocturno</option>
                      </optgroup>
                      <optgroup label="Excursiones de un Día">
                        <option value="kamakura-day-trip">Excursión a Kamakura</option>
                        <option value="hakone-day-trip">Excursión a Hakone</option>
                        <option value="nikko-day-trip">Excursión a Nikko</option>
                      </optgroup>
                      <option value="custom">Tour Personalizado</option>
                      <option value="other">Otro / No estoy seguro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                      Fecha deseada
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium text-foreground mb-2">
                      Tamaño del grupo
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    >
                      <option value="">Seleccionar</option>
                      <option value="1">1 persona</option>
                      <option value="2">2 personas</option>
                      <option value="3-4">3-4 personas</option>
                      <option value="5-6">5-6 personas</option>
                      <option value="7+">7+ personas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Cuéntanos tus intereses *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                    placeholder="Cuéntanos sobre tus planes de viaje, intereses o cualquier pregunta que tengas..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mi Solicitud de Reserva
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
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
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-highlight mt-0.5 shrink-0" />
                      Cancelación gratuita hasta 24h antes
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
