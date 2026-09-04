import { Check, X } from "lucide-react";
import { tourInclusionsCopy, type TourLang } from "./tourPolicyCopy";

interface TourInclusionsProps {
  lang?: TourLang;
}

export const TourInclusions = ({ lang = "en" }: TourInclusionsProps) => {
  const copy = tourInclusionsCopy[lang];

  return (
    <div className="space-y-6">
      <h2 className="heading-card text-foreground">{copy.heading}</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-5">
          <p className="text-sm font-medium text-foreground mb-4">{copy.includedTitle}</p>
          <ul className="space-y-3">
            {copy.included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-lg p-5">
          <p className="text-sm font-medium text-foreground mb-4">{copy.excludedTitle}</p>
          <ul className="space-y-3">
            {copy.excluded.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        <p>
          <span className="text-foreground font-medium">{copy.paymentTitle}. </span>
          {copy.payment}
        </p>
        <p>
          <span className="text-foreground font-medium">{copy.vehicleTitle}. </span>
          {copy.vehicle}
        </p>
      </div>
    </div>
  );
};
