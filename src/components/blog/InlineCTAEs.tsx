import { Link } from "react-router-dom";

interface InlineCTAEsProps {
  /** Short contextual message relating to the article topic */
  message?: string;
  /** Link text for the CTA */
  linkText?: string;
  /** Target path */
  href?: string;
}

export const InlineCTAEs = ({
  message = "¿Quieres vivir esto con un guía local?",
  linkText = "Más información y reserva →",
  href = "/es/contact",
}: InlineCTAEsProps) => (
  <aside className="bg-accent/10 border-l-4 border-accent rounded-r-lg px-6 py-5 my-10">
    <p className="text-foreground leading-relaxed">
      <strong>{message}</strong>{" "}
      Nuestros tours privados por Tokio dan vida a estas historias.{" "}
      <Link to={href} className="text-accent hover:underline font-medium">
        {linkText}
      </Link>
    </p>
  </aside>
);
