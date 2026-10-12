/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_WHATSAPP_NUMBER?: string;
  readonly VITE_PUBLIC_WHATSAPP_NUMBER?: string;
  /** Inlined by vite.config.ts from SITE_RECAPTCHA_KEY. Empty = no captcha. */
  readonly RECAPTCHA_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
