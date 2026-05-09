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

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl px-6 py-8 md:px-10 md:py-10">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground text-center tracking-tight">
            {tourName}
          </h3>
          <p className="text-center text-sm text-muted-foreground mt-1.5 mb-8">
            {perPerson(1)} fixed for your entire group · the more you bring, the better the per-person value.
          </p>
          <div className="space-y-0">
            {[1, 2, 3, 4, 5, 6].map((n) => {
              const widthPct = (1 / n) * 100;
              const isHighlighted = n >= 4;
              const isBestValue = n === 6;
              return (
                <div
                  key={n}
                  className={
                    "grid grid-cols-[80px_1fr_120px] sm:grid-cols-[100px_1fr_130px] items-center gap-3 sm:gap-4 py-3 px-2 -mx-2 rounded-md border-b border-border/40 last:border-b-0 " +
                    (isHighlighted ? "bg-accent/5" : "")
                  }
                >
                  <div className="text-sm text-foreground flex items-baseline gap-1.5 flex-wrap">
                    <span className="font-serif text-xl md:text-2xl text-foreground leading-none font-semibold">{n}</span>
                    <span className="text-[13px] text-muted-foreground">{n === 1 ? "person" : "people"}</span>
                  </div>
                  <div className="h-2 bg-foreground/[0.06] rounded-full relative overflow-hidden">
                    <div
                      className={"h-full rounded-full " + (isHighlighted ? "bg-accent" : "bg-foreground/30")}
                      style={{ width: `${widthPct}%` }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-right">
                    <p className={"font-serif text-lg md:text-xl font-semibold leading-none " + (isHighlighted ? "text-accent" : "text-foreground")}>
                      {perPerson(n)}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.14em] font-bold text-muted-foreground/80 mt-0.5">
                      per person
                    </p>
                    {isBestValue && (
                      <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-accent-foreground bg-accent px-1.5 py-0.5 rounded">
                        Best value
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 pt-5 border-t border-border">
            <span className="font-semibold text-foreground">Tip:</span> Most guests bring 2–4 people. Splitting with friends or family makes it almost the same price as a public tour — but private.
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
          ? "relative bg-card rounded-lg px-6 py-7 md:px-7 md:py-8 border-t-[3px] border-accent shadow-[0_8px_24px_-8px_rgba(0,0,0,0.18)] ring-1 ring-accent/20"
          : "bg-muted/40 rounded-lg px-6 py-7 md:px-7 md:py-8 border border-border"
      }
    >
      {isPositive && (
        <span className="absolute -top-3 right-5 text-[10px] tracking-[0.18em] font-bold uppercase text-accent-foreground bg-accent px-3 py-1 rounded-sm">
          Recommended
        </span>
      )}
      <h3
        className={
          isPositive
            ? "font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight mb-6"
            : "font-serif text-xl md:text-2xl font-semibold text-muted-foreground tracking-tight mb-6"
        }
      >
        {heading}
      </h3>
      <ul className="space-y-3.5">
        {rows.map((r) => {
          const value = valueOf(r);
          return (
            <li
              key={r.label}
              className="flex items-start gap-3 text-sm leading-relaxed"
            >
              {isPositive ? (
                <Check
                  className="w-[16px] h-[16px] mt-1 text-accent shrink-0"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              ) : (
                <X
                  className="w-[16px] h-[16px] mt-1 text-muted-foreground/70 shrink-0"
                  strokeWidth={2.5}
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
                      ? "font-semibold text-foreground"
                      : "font-semibold text-foreground/75"
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
          <p className="text-label text-accent mb-3">¿Por Qué Privado?</p>
          <h2 className="heading-section text-foreground">
            ¿Vale la Pena un Tour Privado?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Un tour privado no es solo un grupo más pequeño — es una experiencia completamente diferente.
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

        <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl px-6 py-8 md:px-10 md:py-10">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground text-center tracking-tight">
            {tourName}
          </h3>
          <p className="text-center text-sm text-muted-foreground mt-1.5 mb-8">
            {perPerson(1)} fijo para todo tu grupo · cuantas más personas, mejor precio por persona.
          </p>
          <div className="space-y-0">
            {[1, 2, 3, 4, 5, 6].map((n) => {
              const widthPct = (1 / n) * 100;
              const isHighlighted = n >= 4;
              const isBestValue = n === 6;
              return (
                <div
                  key={n}
                  className={
                    "grid grid-cols-[80px_1fr_120px] sm:grid-cols-[100px_1fr_130px] items-center gap-3 sm:gap-4 py-3 px-2 -mx-2 rounded-md border-b border-border/40 last:border-b-0 " +
                    (isHighlighted ? "bg-accent/5" : "")
                  }
                >
                  <div className="text-sm text-foreground flex items-baseline gap-1.5 flex-wrap">
                    <span className="font-serif text-xl md:text-2xl text-foreground leading-none font-semibold">{n}</span>
                    <span className="text-[13px] text-muted-foreground">{n === 1 ? "persona" : "personas"}</span>
                  </div>
                  <div className="h-2 bg-foreground/[0.06] rounded-full relative overflow-hidden">
                    <div
                      className={"h-full rounded-full " + (isHighlighted ? "bg-accent" : "bg-foreground/30")}
                      style={{ width: `${widthPct}%` }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-right">
                    <p className={"font-serif text-lg md:text-xl font-semibold leading-none " + (isHighlighted ? "text-accent" : "text-foreground")}>
                      {perPerson(n)}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.14em] font-bold text-muted-foreground/80 mt-0.5">
                      por persona
                    </p>
                    {isBestValue && (
                      <span className="inline-block mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-accent-foreground bg-accent px-1.5 py-0.5 rounded">
                        Mejor valor
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 pt-5 border-t border-border">
            <span className="font-semibold text-foreground">Consejo:</span> La mayoría viaja con 2–4 personas. Compartirlo con amigos o familia lo deja casi al mismo precio que un tour público — pero privado.
          </p>
        </div>
      </div>
    </section>
  );
};
