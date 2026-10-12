import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// reCAPTCHA site key for the inquiry form. Netlify's custom-reCAPTCHA
// integration names it SITE_RECAPTCHA_KEY, which is outside envPrefix (the
// matching SITE_RECAPTCHA_SECRET must never reach the client), so the key alone
// is inlined explicitly. PUBLIC_RECAPTCHA_SITE_KEY is the local-dev spelling.
// See src/lib/recaptcha.ts for the full picture.
function readRecaptchaSiteKey(mode: string): string {
  const fileEnv = loadEnv(mode, process.cwd(), "");
  const raw =
    process.env.SITE_RECAPTCHA_KEY ||
    fileEnv.SITE_RECAPTCHA_KEY ||
    fileEnv.PUBLIC_RECAPTCHA_SITE_KEY ||
    "";
  const key = raw.trim();
  return key.startsWith("TODO_") ? "" : key;
}

// Netlify reads the hidden detection forms in index.html at build time. When
// a site key is configured they must carry data-netlify-recaptcha="true" so
// Netlify verifies g-recaptcha-response on every POST; when it is not, the
// attribute must be absent or Netlify would reject every real inquiry.
function netlifyRecaptchaFlag(enabled: boolean): Plugin {
  return {
    name: "tanuki-netlify-recaptcha-flag",
    transformIndexHtml(html) {
      if (!enabled) return html;
      const pattern =
        /<form name="(contact|contact-es)" netlify netlify-honeypot="bot-field" hidden>/g;
      let replaced = 0;
      const out = html.replace(pattern, (_m, name: string) => {
        replaced += 1;
        return `<form name="${name}" netlify netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>`;
      });
      if (replaced !== 2) {
        throw new Error(
          `netlifyRecaptchaFlag: expected 2 hidden Netlify forms in index.html, found ${replaced}`,
        );
      }
      return out;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => {
  const recaptchaSiteKey = readRecaptchaSiteKey(mode);
  return {
    envPrefix: ["VITE_", "PUBLIC_"],
    define: {
      "import.meta.env.RECAPTCHA_SITE_KEY": JSON.stringify(recaptchaSiteKey),
    },
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      netlifyRecaptchaFlag(Boolean(recaptchaSiteKey)),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: isSsrBuild
          ? {}
          : {
              manualChunks: {
                "vendor-react": ["react", "react-dom", "react-router-dom"],
                "vendor-ui": [
                  "@radix-ui/react-accordion",
                  "@radix-ui/react-dialog",
                  "@radix-ui/react-dropdown-menu",
                  "@radix-ui/react-tabs",
                  "@radix-ui/react-tooltip",
                  "@radix-ui/react-popover",
                  "@radix-ui/react-select",
                  "@radix-ui/react-slot",
                ],
                "vendor-utils": [
                  "class-variance-authority",
                  "clsx",
                  "tailwind-merge",
                  "lucide-react",
                ],
              },
            },
      },
    },
    ssr: {
      // Bundle these CJS packages into the SSR output so Node ESM can import them
      noExternal: [
        "react-helmet-async",
        "embla-carousel-react",
        "embla-carousel",
        "lucide-react",
        "sonner",
        "next-themes",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        "cmdk",
        "react-day-picker",
        "input-otp",
        "react-resizable-panels",
        "recharts",
        "vaul",
      ],
    },
  };
});
