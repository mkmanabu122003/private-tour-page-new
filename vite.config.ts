import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
