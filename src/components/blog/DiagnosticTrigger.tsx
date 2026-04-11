import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Diagnostic, type DiagnosticConfig } from "@/components/blog/Diagnostic";
import guidePortrait from "@/assets/About_page_Manabu_team_photo.webp";

interface DiagnosticTriggerProps {
  config: DiagnosticConfig;
}

export const DiagnosticTrigger = ({ config }: DiagnosticTriggerProps) => {
  const [open, setOpen] = useState(false);

  const t =
    config.language === "es"
      ? {
          openLabel: "Hacer el test (30 segundos)",
          credentials: "Guía con Licencia Nacional",
          name: "Manabu",
          close: "Cerrar",
        }
      : {
          openLabel: "Take the 30-second quiz",
          credentials: "National Government Licensed Guide",
          name: "Manabu",
          close: "Close",
        };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      {/* Inline trigger card */}
      <div className="not-prose my-12 border border-border rounded-lg overflow-hidden bg-background shadow-sm">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Photo */}
          <div className="relative h-40 md:h-auto md:col-span-2 min-h-[180px]">
            <img
              src="/images/blog/day-trip-comparison-hero.webp"
              alt="Day trips from Tokyo: Kamakura, Hakone and Nikko"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/15" />
          </div>

          {/* Content */}
          <div className="md:col-span-3 px-6 py-8 md:px-10 md:py-10 flex flex-col justify-center">
            {/* Author lockup */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src={guidePortrait}
                alt="Manabu, your tour guide"
                className="w-11 h-11 rounded-full object-cover border border-accent"
              />
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.credentials}
                </p>
              </div>
            </div>

            {/* Tool name */}
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent mb-3">
              {config.toolName}
            </p>

            {/* Headline */}
            <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-[1.2] tracking-tight mb-4">
              {config.introHeadline}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {config.introBody}
            </p>

            <DialogPrimitive.Trigger asChild>
              <button
                type="button"
                className="btn-accent self-start inline-flex items-center"
              >
                {t.openLabel}
                <span className="ml-2">→</span>
              </button>
            </DialogPrimitive.Trigger>
          </div>
        </div>
      </div>

      {/* Modal */}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[50%] z-50 w-[calc(100%-1rem)] sm:w-[92%] max-w-3xl translate-x-[-50%] translate-y-[-50%] max-h-[92vh] overflow-y-auto bg-background rounded-lg shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          {/* Hidden a11y title */}
          <DialogPrimitive.Title className="sr-only">{config.toolName}</DialogPrimitive.Title>

          {/* Close button */}
          <DialogPrimitive.Close
            className="absolute right-4 top-4 z-10 w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-md"
            aria-label={t.close}
          >
            <X className="w-4 h-4" />
          </DialogPrimitive.Close>

          {/* Diagnostic content */}
          <Diagnostic config={config} />
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
