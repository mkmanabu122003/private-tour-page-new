interface QuickAnswerProps {
  answer: string;
  hook: string;
}

export const QuickAnswer = ({ answer, hook }: QuickAnswerProps) => (
  <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg mb-8">
    <p className="font-semibold text-foreground mb-2">Quick Answer</p>
    <p className="text-foreground leading-relaxed">{answer}</p>
    <p className="text-muted-foreground mt-3 text-sm italic">{hook}</p>
  </div>
);

export const QuickAnswerEs = ({ answer, hook }: QuickAnswerProps) => (
  <div className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg mb-8">
    <p className="font-semibold text-foreground mb-2">Respuesta Rápida</p>
    <p className="text-foreground leading-relaxed">{answer}</p>
    <p className="text-muted-foreground mt-3 text-sm italic">{hook}</p>
  </div>
);
