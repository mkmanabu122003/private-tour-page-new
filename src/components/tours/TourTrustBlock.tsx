import { ShieldCheck } from "lucide-react";
import { tourTrustCopy, type TourLang } from "./tourPolicyCopy";

interface TourTrustBlockProps {
  lang?: TourLang;
}

export const TourTrustBlock = ({ lang = "en" }: TourTrustBlockProps) => {
  const copy = tourTrustCopy[lang];

  return (
    <div className="bg-secondary/40 border border-border rounded-lg p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <div>
          <h2 className="heading-card text-foreground mb-2">{copy.heading}</h2>
          <p className="text-muted-foreground leading-relaxed">{copy.body}</p>
        </div>
      </div>
    </div>
  );
};
