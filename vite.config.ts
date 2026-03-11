import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
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
}));
