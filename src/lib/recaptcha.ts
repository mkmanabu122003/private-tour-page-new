/**
 * reCAPTCHA v2 (checkbox) for the inquiry form, verified by Netlify Forms.
 *
 * Why: on 2026-09-16 and again on 2026-10-12 an SQL-injection scanner posted
 * ~45 and ~90 submissions straight to the Netlify Forms endpoint. The honeypot
 * does nothing against a client that leaves the honeypot empty, and the
 * server-side gate in netlify/functions/inquiryGate.cjs only stops the fan-out;
 * every probe still counted against the Forms quota and still triggered
 * Netlify's own notification email. reCAPTCHA rejects them before Netlify
 * stores anything.
 *
 * How (Netlify "custom reCAPTCHA 2"):
 *   - Netlify env vars SITE_RECAPTCHA_KEY (Builds + Runtime) and
 *     SITE_RECAPTCHA_SECRET (Runtime). Both are set in the Netlify UI, never in
 *     the repo.
 *   - vite.config.ts inlines SITE_RECAPTCHA_KEY as import.meta.env.RECAPTCHA_SITE_KEY
 *     and, when it is set, adds data-netlify-recaptcha="true" to the hidden
 *     detection forms in index.html.
 *   - The React form renders the widget and sends g-recaptcha-response with
 *     the POST. Netlify checks it against the secret.
 *
 * With no site key (local dev, a preview without the env var) nothing changes:
 * no widget, no attribute, and the form submits as before. That is deliberate.
 * A missing env var must degrade to "no captcha", never to "no inquiries".
 */

export function getRecaptchaSiteKey(): string {
  const raw = import.meta.env.RECAPTCHA_SITE_KEY;
  if (typeof raw !== "string") return "";
  const key = raw.trim();
  if (!key || key.startsWith("TODO_")) return "";
  return key;
}

export const RECAPTCHA_RESPONSE_FIELD = "g-recaptcha-response";

export interface GrecaptchaRenderParams {
  sitekey: string;
  theme?: "light" | "dark";
  size?: "normal" | "compact";
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
}

export interface Grecaptcha {
  ready: (cb: () => void) => void;
  render: (container: HTMLElement, params: GrecaptchaRenderParams) => number;
  reset: (widgetId?: number) => void;
  getResponse: (widgetId?: number) => string;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
    __tanukiRecaptchaOnLoad?: () => void;
  }
}

const SCRIPT_ID = "tanuki-recaptcha-api";
let loader: Promise<Grecaptcha> | null = null;

/**
 * Loads https://www.google.com/recaptcha/api.js once and resolves with the
 * grecaptcha object once it is ready to render. Safe to call repeatedly.
 * Browser only: never call during SSR / prerender.
 */
export function loadRecaptcha(lang: "en" | "es"): Promise<Grecaptcha> {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return Promise.reject(new Error("reCAPTCHA can only load in a browser"));
  }
  if (loader) return loader;

  loader = new Promise<Grecaptcha>((resolve, reject) => {
    const settle = () => {
      const g = window.grecaptcha;
      if (!g) {
        reject(new Error("reCAPTCHA script loaded without window.grecaptcha"));
        return;
      }
      g.ready(() => resolve(g));
    };

    if (window.grecaptcha) {
      settle();
      return;
    }

    window.__tanukiRecaptchaOnLoad = settle;

    const existing = document.getElementById(SCRIPT_ID);
    if (existing) return; // the onload callback above will fire

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src =
      "https://www.google.com/recaptcha/api.js?render=explicit&onload=__tanukiRecaptchaOnLoad&hl=" +
      encodeURIComponent(lang);
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      loader = null;
      script.remove();
      reject(new Error("reCAPTCHA script failed to load"));
    };
    document.head.appendChild(script);
  });

  return loader;
}
