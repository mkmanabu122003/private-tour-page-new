import { Check, X, Users, Route, Clock, Shield, UtensilsCrossed, MessageSquare, CalendarCheck, Headphones } from "lucide-react";

interface ValueComparisonProps {
  tourPrice: number;
  tourName: string;
}

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

        {/* Experience Comparison Table */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground w-1/3"></th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground w-1/3 bg-secondary/50 rounded-t-lg">
                    Typical Group Tour
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-accent w-1/3 bg-accent/5 rounded-t-lg border-t-2 border-accent">
                    Private Tour
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <ComparisonRow
                  icon={<Users className="w-4 h-4" />}
                  label="Group size"
                  group="10–20 strangers"
                  priv="Just your group (1–6)"
                  privWins
                />
                <ComparisonRow
                  icon={<Route className="w-4 h-4" />}
                  label="Route"
                  group="Fixed itinerary"
                  priv="Fully customized to your interests"
                  privWins
                />
                <ComparisonRow
                  icon={<Clock className="w-4 h-4" />}
                  label="Pace"
                  group="Rushed to stay on schedule"
                  priv="Your pace — stop whenever you like"
                  privWins
                />
                <ComparisonRow
                  icon={<Shield className="w-4 h-4" />}
                  label="Guide credentials"
                  group="Varies"
                  priv="National Government Licensed Guide"
                  privWins
                />
                <ComparisonRow
                  icon={<UtensilsCrossed className="w-4 h-4" />}
                  label="Dietary needs"
                  group="Not accommodated"
                  priv="Fully customized"
                  privWins
                />
                <ComparisonRow
                  icon={<MessageSquare className="w-4 h-4" />}
                  label="Pre-tour planning"
                  group="None"
                  priv="Personal itinerary by email"
                  privWins
                />
                <ComparisonRow
                  icon={<CalendarCheck className="w-4 h-4" />}
                  label="Scheduling"
                  group="Fixed departure times"
                  priv="Any date, any start time"
                  privWins
                />
                <ComparisonRow
                  icon={<Headphones className="w-4 h-4" />}
                  label="After-tour support"
                  group="None"
                  priv="Restaurant tips & help during your stay"
                  privWins
                />
              </tbody>
            </table>
          </div>
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

function ComparisonRow({
  icon,
  label,
  group,
  priv,
  privWins,
}: {
  icon: React.ReactNode;
  label: string;
  group: string;
  priv: string;
  privWins?: boolean;
}) {
  return (
    <tr className="border-b border-border/50">
      <td className="py-3 px-4 text-muted-foreground">
        <span className="flex items-center gap-2">
          {icon} {label}
        </span>
      </td>
      <td className="py-3 px-4 text-center text-muted-foreground bg-secondary/30">
        {group}
      </td>
      <td className="py-3 px-4 text-center bg-accent/5">
        <span className="text-foreground font-medium">{priv}</span>
      </td>
    </tr>
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

        <div className="max-w-3xl mx-auto mb-12">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground w-1/3"></th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground w-1/3 bg-secondary/50 rounded-t-lg">
                    Tour en Grupo
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-accent w-1/3 bg-accent/5 rounded-t-lg border-t-2 border-accent">
                    Tour Privado
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <ComparisonRow icon={<Users className="w-4 h-4" />} label="Grupo" group="10–20 desconocidos" priv="Solo tu grupo (1–6)" privWins />
                <ComparisonRow icon={<Route className="w-4 h-4" />} label="Ruta" group="Itinerario fijo" priv="Totalmente personalizada" privWins />
                <ComparisonRow icon={<Clock className="w-4 h-4" />} label="Ritmo" group="Apresurado" priv="A tu ritmo" privWins />
                <ComparisonRow icon={<Shield className="w-4 h-4" />} label="Credencial del guia" group="Variable" priv="Guia con Licencia Nacional" privWins />
                <ComparisonRow icon={<UtensilsCrossed className="w-4 h-4" />} label="Dieta" group="Sin opciones" priv="Totalmente adaptable" privWins />
                <ComparisonRow icon={<MessageSquare className="w-4 h-4" />} label="Planificacion previa" group="Ninguna" priv="Itinerario personal por email" privWins />
                <ComparisonRow icon={<CalendarCheck className="w-4 h-4" />} label="Horario" group="Horas fijas de salida" priv="Cualquier dia y hora" privWins />
                <ComparisonRow icon={<Headphones className="w-4 h-4" />} label="Soporte post-tour" group="Ninguno" priv="Recomendaciones durante tu estancia" privWins />
              </tbody>
            </table>
          </div>
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
