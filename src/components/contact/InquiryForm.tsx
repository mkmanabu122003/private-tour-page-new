import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmit, trackFormEngage } from "@/lib/ga4";
import { composeGroupSize, isValidTourValue } from "@/lib/inquiryForm";

const inputClass =
  "w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors";

interface InquiryFormProps {
  lang: "en" | "es";
  initialTour?: string;
}

export const InquiryForm = ({ lang, initialTour = "" }: InquiryFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const prefilledTour = isValidTourValue(initialTour) ? initialTour : "";
  const isEs = lang === "es";
  const formName = isEs ? "contact-es" : "contact";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    date: "",
    adults: "",
    children: "",
    city: "",
    language: isEs ? "es" : "en",
    tourType: prefilledTour,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasEngaged, setHasEngaged] = useState(false);
  const tourSelectRef = useRef<HTMLSelectElement>(null);

  useLayoutEffect(() => {
    const fromProp = isValidTourValue(initialTour) ? initialTour : "";
    const fromQuery =
      typeof window === "undefined"
        ? ""
        : new URLSearchParams(window.location.search).get("tour") || "";
    const next = fromProp || (isValidTourValue(fromQuery) ? fromQuery : "");
    if (!next) return;
    setFormData((prev) => (prev.tourType === next ? prev : { ...prev, tourType: next }));
    if (tourSelectRef.current && tourSelectRef.current.value !== next) {
      tourSelectRef.current.value = next;
    }
  }, [initialTour]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (!hasEngaged) {
      setHasEngaged(true);
      trackFormEngage(name);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataEncoded = new FormData(formElement);
      const formDataObj: Record<string, string> = {
        "form-name": formName,
      };
      formDataEncoded.forEach((value, key) => {
        formDataObj[key] = value.toString();
      });
      formDataObj.groupSize = composeGroupSize(formData.adults, formData.children);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj).toString(),
      });

      if (response.ok) {
        trackFormSubmit();
        navigate(isEs ? "/es/thank-you" : "/thank-you");
        return;
      }
      throw new Error("Form submission failed");
    } catch {
      toast({
        title: isEs ? "Error" : "Error",
        description: isEs
          ? "No se pudo enviar el mensaje. Inténtenlo de nuevo o escriban a info@tanuki-tabi-travel.com."
          : "Failed to send the message. Try again or email info@tanuki-tabi-travel.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copy = isEs
    ? {
        name: "Nombre *",
        namePh: "Su nombre",
        email: "Correo electrónico *",
        emailPh: "su-email@ejemplo.com",
        country: "País",
        countryPh: "México, Colombia, España…",
        date: "Fecha o período deseado *",
        datePh: "15 oct 2026 o finales de octubre",
        adults: "Adultos *",
        children: "Niños",
        city: "Ciudad",
        cityPh: "Ciudad donde se alojan, o de origen",
        language: "Idioma de la consulta",
        tourType: "Tour de interés",
        tourPlaceholder: "Seleccionar un tour",
        tokyo: "Tours por Tokio",
        experience: "Tours de experiencia",
        daytrips: "Excursiones de un día",
        message: "Intereses y pedidos",
        messagePh: "Qué les gustaría ver, ritmo, restricciones alimentarias u otras notas.",
        policy: (
          <>
            Al enviar este formulario, aceptan nuestra{" "}
            <Link to="/es/cancellation-policy" className="text-accent hover:underline">
              política de cancelación
            </Link>
            .
          </>
        ),
        sending: "Enviando...",
        submit: "Enviar consulta",
        tours: {
          asakusa: "Tour por Asakusa",
          yanaka: "Ueno y Yanaka",
          "shibuya-harajuku": "Shibuya y Harajuku",
          "tsukiji-ginza": "Tsukiji y Ginza",
          "imperial-palace": "Palacio Imperial",
          "tokyo-food-tour": "Tour gastronómico",
          "tokyo-night-tour": "Tour nocturno",
          "kamakura-day-trip": "Excursión a Kamakura",
          "hakone-day-trip": "Excursión a Hakone",
          "nikko-day-trip": "Excursión a Nikko",
          custom: "Tour personalizado",
          other: "Otro / aún no lo saben",
        },
      }
    : {
        name: "Your name *",
        namePh: "Jane Smith",
        email: "Email address *",
        emailPh: "you@example.com",
        country: "Country",
        countryPh: "United States, Australia…",
        date: "Preferred date or period *",
        datePh: "15 Oct 2026 or late October",
        adults: "Adults *",
        children: "Children",
        city: "City",
        cityPh: "Where you'll stay, or where you're writing from",
        language: "Preferred language",
        tourType: "Tour of interest",
        tourPlaceholder: "Select a tour",
        tokyo: "Tokyo walking tours",
        experience: "Experience tours",
        daytrips: "Day trips from Tokyo",
        message: "Interests and requests",
        messagePh: "What you'd like to see, pace, dietary needs, or other notes.",
        policy: (
          <>
            By submitting this form, you agree to our{" "}
            <Link to="/cancellation-policy" className="text-accent hover:underline">
              cancellation policy
            </Link>
            .
          </>
        ),
        sending: "Sending...",
        submit: "Send inquiry",
        tours: {
          asakusa: "Asakusa Walking Tour",
          yanaka: "Ueno & Yanaka Discovery",
          "shibuya-harajuku": "Shibuya & Harajuku Tour",
          "tsukiji-ginza": "Tsukiji & Ginza Tour",
          "imperial-palace": "Imperial Palace & Marunouchi",
          "tokyo-food-tour": "Tokyo Food Tour",
          "tokyo-night-tour": "Tokyo Night Tour",
          "kamakura-day-trip": "Kamakura Day Trip",
          "hakone-day-trip": "Hakone Day Trip",
          "nikko-day-trip": "Nikko Day Trip",
          custom: "Custom Private Tour",
          other: "Other / not sure yet",
        },
      };

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="groupSize" value={composeGroupSize(formData.adults, formData.children)} />
      <p className="hidden">
        <label>
          {isEs ? "No rellenen esto si son humanos: " : "Don't fill this out if you're human: "}
          <input name="bot-field" />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            {copy.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={copy.namePh}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            {copy.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={copy.emailPh}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
            {copy.country}
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={inputClass}
            placeholder={copy.countryPh}
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
            {copy.date}
          </label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className={inputClass}
            placeholder={copy.datePh}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="adults" className="block text-sm font-medium text-foreground mb-2">
            {copy.adults}
          </label>
          <input
            type="number"
            id="adults"
            name="adults"
            min={1}
            max={20}
            value={formData.adults}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="children" className="block text-sm font-medium text-foreground mb-2">
            {copy.children}
          </label>
          <input
            type="number"
            id="children"
            name="children"
            min={0}
            max={20}
            value={formData.children}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
            {copy.city}
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={inputClass}
            placeholder={copy.cityPh}
          />
        </div>
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-foreground mb-2">
            {copy.language}
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="tourType" className="block text-sm font-medium text-foreground mb-2">
          {copy.tourType}
        </label>
        <select
          id="tourType"
          name="tourType"
          ref={tourSelectRef}
          value={formData.tourType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">{copy.tourPlaceholder}</option>
          <optgroup label={copy.tokyo}>
            <option value="asakusa">{copy.tours.asakusa}</option>
            <option value="yanaka">{copy.tours.yanaka}</option>
            <option value="shibuya-harajuku">{copy.tours["shibuya-harajuku"]}</option>
            <option value="tsukiji-ginza">{copy.tours["tsukiji-ginza"]}</option>
            <option value="imperial-palace">{copy.tours["imperial-palace"]}</option>
          </optgroup>
          <optgroup label={copy.experience}>
            <option value="tokyo-food-tour">{copy.tours["tokyo-food-tour"]}</option>
            <option value="tokyo-night-tour">{copy.tours["tokyo-night-tour"]}</option>
          </optgroup>
          <optgroup label={copy.daytrips}>
            <option value="kamakura-day-trip">{copy.tours["kamakura-day-trip"]}</option>
            <option value="hakone-day-trip">{copy.tours["hakone-day-trip"]}</option>
            <option value="nikko-day-trip">{copy.tours["nikko-day-trip"]}</option>
          </optgroup>
          <option value="custom">{copy.tours.custom}</option>
          <option value="other">{copy.tours.other}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          {copy.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder={copy.messagePh}
        />
      </div>

      <p className="text-xs text-muted-foreground">{copy.policy}</p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-accent w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          copy.sending
        ) : (
          <>
            {copy.submit}
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};
