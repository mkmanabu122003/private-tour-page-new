import { Check, X, Users, Route, Clock, Shield, UtensilsCrossed, MessageSquare, CalendarCheck, Headphones } from "lucide-react";

interface ValueComparisonProps {
  tourPrice: number;
  tourName: string;
}

interface ComparisonRowData {
  icon: React.ReactNode;
  label: string;
  group: string;
  priv: string;
  /** Renders the group value in italic + softer tone — used when the
   *  group-tour answer is inherently uncertain (e.g. "Varies"). */
  uncertain?: boolean;
}

const iconCls = "w-[18px] h-[18px] text-muted-foreground/60";

const rowsEn: ComparisonRowData[] = [
  { icon: <Users className={iconCls} strokeWidth={1.5} />, label: "Group size", group: "10–20 strangers", priv: "Just your group (1–6)" },
  { icon: <Route className={iconCls} strokeWidth={1.5} />, label: "Route", group: "Fixed itinerary", priv: "Fully customized to your interests" },
  { icon: <Clock className={iconCls} strokeWidth={1.5} />, label: "Pace", group: "Rushed to stay on schedule", priv: "Your pace — stop whenever you like" },
  { icon: <Shield className={iconCls} strokeWidth={1.5} />, label: "Guide credentials", group: "Varies", priv: "National Government Licensed Guide", uncertain: true },
  { icon: <UtensilsCrossed className={iconCls} strokeWidth={1.5} />, label: "Dietary needs", group: "Not accommodated", priv: "Fully customized" },
  { icon: <MessageSquare className={iconCls} strokeWidth={1.5} />, label: "Pre-tour planning", group: "None", priv: "Personal itinerary by email" },
  { icon: <CalendarCheck className={iconCls} strokeWidth={1.5} />, label: "Scheduling", group: "Fixed departure times", priv: "Any date, any start time" },
  { icon: <Headphones className={iconCls} strokeWidth={1.5} />, label: "After-tour support", group: "None", priv: "Restaurant tips & help during your stay" },
];

const rowsEs: ComparisonRowData[] = [
  { icon: <Users className={iconCls} strokeWidth={1.5} />, label: "Grupo", group: "10–20 desconocidos", priv: "Solo tu grupo (1–6)" },
  { icon: <Route className={iconCls} strokeWidth={1.5} />, label: "Ruta", group: "Itinerario fijo", priv: "Totalmente personalizada" },
  { icon: <Clock className={iconCls} strokeWidth={1.5} />, label: "Ritmo", group: "Apresurado", priv: "A tu ritmo" },
  { icon: <Shield className={iconCls} strokeWidth={1.5} />, label: "Credencial del guía", group: "Variable", priv: "Guía con Licencia Nacional", uncertain: true },
  { icon: <UtensilsCrossed className={iconCls} strokeWidth={1.5} />, label: "Dieta", group: "Sin opciones", priv: "Totalmente adaptable" },
  { icon: <MessageSquare className={iconCls} strokeWidth={1.5} />, label: "Planificación previa", group: "Ninguna", priv: "Itinerario personal por email" },
  { icon: <CalendarCheck className={iconCls} strokeWidth={1.5} />, label: "Horario", group: "Horas fijas de salida", priv: "Cualquier día y hora" },
  { icon: <Headphones className={iconCls} strokeWidth={1.5} />, label: "Soporte post-tour", group: "Ninguno", priv: "Recomendaciones durante tu estancia" },
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

        {/* Experience Comparison — Desktop table (md+) */}
        <div className="hidden md:block max-w-4xl mx-auto mb-12">
          <div className="relative pb-6">
            {/* Private Tour column card backdrop */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 bottom-6 w-[44%] bg-card shadow-lg rounded-lg border-t-2 border-accent pointer-events-none"
            />
            <table className="w-full border-collapse relative">
              <colgroup>
                <col className="w-[22%]" />
                <col className="w-[34%]" />
                <col className="w-[44%]" />
              </colgroup>
              <thead>
                <tr>
                  <th className="py-5 px-4"></th>
                  <th className="py-5 px-4 text-left text-sm font-normal text-muted-foreground/80">
                    Typical Group Tour
                  </th>
                  <th className="py-5 px-6 text-left text-base font-semibold text-accent">
                    Private Tour
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {rowsEn.map((r) => (
                  <ComparisonRow key={r.label} {...r} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Experience Comparison — Mobile card stack (<md) */}
        <div className="md:hidden max-w-md mx-auto mb-12 space-y-4">
          {rowsEn.map((r) => (
            <ComparisonCard key={r.label} row={r} groupLabel="Typical Group Tour" privLabel="Private Tour" />
          ))}
        </div>

        {/* Per-Person Price Breakdown */}
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

function ComparisonRow({ icon, label, group, priv, uncertain }: ComparisonRowData) {
  return (
    <tr className="border-b border-border/40 last:border-b-0">
      <td className="py-5 px-4 text-muted-foreground align-top">
        <span className="flex items-center gap-2">
          {icon} {label}
        </span>
      </td>
      <td
        className={
          "py-5 px-4 text-left align-top " +
          (uncertain ? "italic text-muted-foreground/60" : "text-muted-foreground/80")
        }
      >
        {group}
      </td>
      <td className="py-5 px-6 text-left align-top">
        <span className="text-foreground font-medium">{priv}</span>
      </td>
    </tr>
  );
}

function ComparisonCard({
  row,
  groupLabel,
  privLabel,
}: {
  row: ComparisonRowData;
  groupLabel: string;
  privLabel: string;
}) {
  const { icon, label, group, priv, uncertain } = row;
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border/40 overflow-hidden">
      <div className="px-4 py-3 border-b border-border/40 flex items-center gap-2 text-sm font-medium text-foreground">
        {icon} {label}
      </div>
      <div className="grid grid-cols-2">
        <div className="px-4 py-4 border-r border-border/40">
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground/70 mb-1">
            {groupLabel}
          </p>
          <p
            className={
              "text-sm leading-snug " +
              (uncertain ? "italic text-muted-foreground/60" : "text-muted-foreground/80")
            }
          >
            {group}
          </p>
        </div>
        <div className="px-4 py-4 bg-accent/5 border-t-2 border-accent -mt-[2px]">
          <p className="text-[11px] uppercase tracking-widest text-accent font-semibold mb-1">
            {privLabel}
          </p>
          <p className="text-sm leading-snug text-foreground font-medium">
            {priv}
          </p>
        </div>
      </div>
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

        {/* Desktop table (md+) */}
        <div className="hidden md:block max-w-4xl mx-auto mb-12">
          <div className="relative pb-6">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 bottom-6 w-[44%] bg-card shadow-lg rounded-lg border-t-2 border-accent pointer-events-none"
            />
            <table className="w-full border-collapse relative">
              <colgroup>
                <col className="w-[22%]" />
                <col className="w-[34%]" />
                <col className="w-[44%]" />
              </colgroup>
              <thead>
                <tr>
                  <th className="py-5 px-4"></th>
                  <th className="py-5 px-4 text-left text-sm font-normal text-muted-foreground/80">
                    Tour en Grupo
                  </th>
                  <th className="py-5 px-6 text-left text-base font-semibold text-accent">
                    Tour Privado
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {rowsEs.map((r) => (
                  <ComparisonRow key={r.label} {...r} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile card stack (<md) */}
        <div className="md:hidden max-w-md mx-auto mb-12 space-y-4">
          {rowsEs.map((r) => (
            <ComparisonCard key={r.label} row={r} groupLabel="Tour en Grupo" privLabel="Tour Privado" />
          ))}
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
