import { Link } from "react-router-dom";

interface ArticleFooterCTAEsProps {
  heading?: string;
  description?: string;
}

export const ArticleFooterCTAEs = ({
  heading = "Descubre Tokio más allá de las guías turísticas",
  description = "Únete a un tour privado a pie con un guía local licenciado. Cada tour se personaliza según tus intereses — desde gastronomía y cultura hasta historia y rincones secretos.",
}: ArticleFooterCTAEsProps) => (
  <section className="article-footer-cta bg-secondary/50 rounded-lg p-8 mt-12 text-center">
    <h2 className="text-2xl font-medium text-foreground mb-4">{heading}</h2>
    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
      {description}
    </p>
    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
      <span>✓ Totalmente personalizado</span>
      <span>✓ Guía local licenciado</span>
      <span>✓ Desde ¥25,000</span>
    </div>
    <Link to="/es/contact" className="btn-accent">
      Reserva tu tour privado
    </Link>
  </section>
);
