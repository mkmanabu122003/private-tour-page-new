import { Check, X } from "lucide-react";

interface ValueComparisonProps {
  tourPrice: number;
  tourName: string;
}

interface ComparisonRowData {
  label: string;
  group: string;
  priv: string;
  /** Renders the group value in italic + softer tone — used when the
   *  group-tour answer is inherently uncertain (e.g. "Varies"). */
  uncertain?: boolean;
}

const rowsEn: ComparisonRowData[] = [
  { label: "Group size", group: "10–20 strangers", priv: "Just your group (1–6)" },
  { label: "Route", group: "Fixed itinerary", priv: "Fully customized to your interests" },
  { label: "Pace", group: "Rushed to stay on schedule", priv: "Your pace — stop whenever you like" },
  { label: "Guide credentials", group: "Varies", priv: "National Government Licensed Guide", uncertain: true },
  { label: "Dietary needs", group: "Not accommodated", priv: "Fully customized" },
  { label: "Pre-tour planning", group: "None", priv: "Personal itinerary by email" },
  { label: "Scheduling", group: "Fixed departure times", priv: "Any date, any start time" },
  { label: "After-tour support", group: "None", priv: "Restaurant tips & help during your stay" },
];

const rowsEs: ComparisonRowData[] = [
  { label: "Grupo", group: "10–20 desconocidos", priv: "Solo tu grupo (1–6)" },
  { label: "Ruta", group: "Itinerario fijo", priv: "Totalmente personalizada" },
  { label: "Ritmo", group: "Apresurado", priv: "A tu ritmo" },
  { label: "Credencial del guía", group: "Variable", priv: "Guía con Licencia Nacional", uncertain: true },
  { label: "Dieta", group: "Sin opciones", priv: "Totalmente adaptable" },
  { label: "Planificación previa", group: "Ninguna", priv: "Itinerario personal por email" },
  { label: "Horario", group: "Horas fijas de salida", priv: "Cualquier día y hora" },
  { label: "Soporte post-tour", group: "Ninguno", priv: "Recomendaciones durante tu estancia" },
];

export const ValueComparison = ({ tourPrice, tourName }: ValueComparisonProps) => {
  const perPerson = (people: number) =>
    "¥" + Math.ceil(tourPrice / people).toLocaleString();

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-label text-accent mb-3">Why Private?</p>
          <h2 className="heading-section text-foreground">
            Is a Private Tour Worth It?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A private tour isn't just a smaller group — it's an entirely different experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-5 md:gap-6 items-start">
          <ComparisonCard
            heading="Typical Group Tour"
            rows={rowsEn}
            valueOf={(r) => r.group}
            tone="negative"
          />
          <ComparisonCard
            heading="Private Tour"
            rows={rowsEn}
            valueOf={(r) => r.priv}
            tone="positive"
          />
        </div>

        <div className="max-w-xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground text-center mb-6">
            {tourName}: {perPerson(1)} for your entire group
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Group size</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Per person</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <tr key={n} className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">
                      {n} {n === 1 ? "person" : "people"}
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-foreground">
                      {perPerson(n)}/person
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            The tour price is fixed per group — the more people you bring, the better value per person.
          </p>
        </div>
      </div>
    </section>
  );
};

interface ComparisonCardProps {
  heading: string;
  rows: ComparisonRowData[];
  valueOf: (r: ComparisonRowData) => string;
  tone: "positive" | "negative";
}

function ComparisonCard({ heading, rows, valueOf, tone }: ComparisonCardProps) {
  const isPositive = tone === "positive";
  return (
    <div
      className={
        isPositive
          ? "relative bg-card rounded-lg px-5 py-6 md:px-6 md:py-7 border-t-[3px] border-accent shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)] ring-1 ring-accent/20"
          : "bg-muted/40 rounded-lg px-5 py-6 md:px-6 md:py-7 border border-border"
      }
    >
      {isPositive && (
        <span className="absolute -top-3 right-5 text-[10px] tracking-widest font-semibold uppercase text-accent-foreground bg-accent px-2.5 py-1 rounded-sm">
          Recommended
        </span>
      )}
      <h3
        className={
          isPositive
            ? "text-base md:text-lg font-semibold text-accent mb-5"
            : "text-base md:text-lg font-medium text-muted-foreground mb-5"
        }
      >
        {heading}
      </h3>
      <ul className="space-y-3">
        {rows.map((r) => {
          const value = valueOf(r);
          return (
            <li
              key={r.label}
              className="flex items-start gap-2 md:gap-2.5 text-[13px] leading-snug whitespace-nowrap"
            >
              {isPositive ? (
                <Check
                  className="w-[16px] h-[16px] mt-0.5 text-accent shrink-0"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              ) : (
                <X
                  className="w-[16px] h-[16px] mt-0.5 text-rose-500 shrink-0"
                  strokeWidth={3}
                  aria-hidden="true"
                />
              )}
              <span
                className={
                  "min-w-0 flex-1 " +
                  (isPositive ? "text-foreground" : "text-muted-foreground")
                }
              >
                <span
                  className={
                    isPositive
                      ? "font-semibold"
                      : "font-semibold text-foreground/80"
                  }
                >
                  {r.label}:
                </span>{" "}
                <span className={!isPositive && r.uncertain ? "italic" : ""}>
                  {value}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const ValueComparisonEs = ({ tourPrice, tourName }: ValueComparisonProps) => {
  const perPerson = (people: number) =>
    "¥" + Math.ceil(tourPrice / people).toLocaleString();

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-label text-accent mb-3">Por Que Privado?</p>
          <h2 className="heading-section text-foreground">
            Vale la Pena un Tour Privado?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Un tour privado no es solo un grupo mas pequeno — es una experiencia completamente diferente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-5 md:gap-6 items-start">
          <ComparisonCard
            heading="Tour en Grupo"
            rows={rowsEs}
            valueOf={(r) => r.group}
            tone="negative"
          />
          <ComparisonCard
            heading="Tour Privado"
            rows={rowsEs}
            valueOf={(r) => r.priv}
            tone="positive"
          />
        </div>

        <div className="max-w-xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground text-center mb-6">
            {tourName}: {perPerson(1)} para todo tu grupo
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Grupo</th>
                  <th className="text-right py-3 px-4 font-medium text-muted-foreground">Por persona</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <tr key={n} className="border-b border-border/50">
                    <td className="py-3 px-4 text-muted-foreground">
                      {n} {n === 1 ? "persona" : "personas"}
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-foreground">
                      {perPerson(n)}/persona
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            El precio del tour es fijo por grupo — cuantas más personas, mejor precio por persona.
          </p>
        </div>
      </div>
    </section>
  );
};
