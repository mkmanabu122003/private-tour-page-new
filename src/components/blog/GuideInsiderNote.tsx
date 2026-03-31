interface GuideInsiderNoteProps {
  date: string;
  children: React.ReactNode;
}

export const GuideInsiderNote = ({ date, children }: GuideInsiderNoteProps) => (
  <div className="bg-secondary/50 border border-border rounded-lg p-5 my-8">
    <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
      <span className="text-lg">&#128221;</span> Guide's Insider Note
    </h3>
    <div className="text-muted-foreground leading-relaxed text-sm space-y-2">
      {children}
    </div>
    <p className="text-xs text-muted-foreground/70 mt-3 italic">
      Updated based on Manabu's actual tours. Last visit: {date}.
    </p>
  </div>
);

export const GuideInsiderNoteEs = ({ date, children }: GuideInsiderNoteProps) => (
  <div className="bg-secondary/50 border border-border rounded-lg p-5 my-8">
    <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
      <span className="text-lg">&#128221;</span> Nota del Guía
    </h3>
    <div className="text-muted-foreground leading-relaxed text-sm space-y-2">
      {children}
    </div>
    <p className="text-xs text-muted-foreground/70 mt-3 italic">
      Actualizado según los tours reales de Manabu. Última visita: {date}.
    </p>
  </div>
);
