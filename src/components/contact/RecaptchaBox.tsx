import { useEffect, useRef, useState } from "react";
import { loadRecaptcha } from "@/lib/recaptcha";

interface RecaptchaBoxProps {
  siteKey: string;
  lang: "en" | "es";
  /** Called with the token when the visitor passes, and with null when it expires or is reset. */
  onChange: (token: string | null) => void;
  /** Bump this to reset the widget (tokens are single-use, so after a failed POST). */
  resetSignal?: number;
}

/**
 * Renders the reCAPTCHA v2 checkbox inside the form. The widget injects its own
 * hidden <textarea name="g-recaptcha-response">, and InquiryForm also copies
 * the token explicitly, so the POST carries it either way.
 */
export const RecaptchaBox = ({ siteKey, lang, onChange, resetSignal = 0 }: RecaptchaBoxProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const onChangeRef = useRef(onChange);
  const [failed, setFailed] = useState(false);
  onChangeRef.current = onChange;

  useEffect(() => {
    let cancelled = false;
    loadRecaptcha(lang)
      .then((grecaptcha) => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) return;
        widgetIdRef.current = grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          theme: "light",
          callback: (token) => onChangeRef.current(token),
          "expired-callback": () => onChangeRef.current(null),
          "error-callback": () => onChangeRef.current(null),
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [siteKey, lang]);

  useEffect(() => {
    if (resetSignal === 0 || widgetIdRef.current === null) return;
    window.grecaptcha?.reset(widgetIdRef.current);
    onChangeRef.current(null);
  }, [resetSignal]);

  return (
    <div data-testid="recaptcha-box">
      <div ref={containerRef} />
      {failed && (
        <p className="text-sm text-destructive mt-2">
          {lang === "es"
            ? "No se pudo cargar la verificación anti-spam. Recarguen la página o escriban a info@tanuki-tabi-travel.com."
            : "The anti-spam check could not load. Reload the page or email info@tanuki-tabi-travel.com."}
        </p>
      )}
    </div>
  );
};
