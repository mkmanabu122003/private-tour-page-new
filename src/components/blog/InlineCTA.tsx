import { Link } from "react-router-dom";

interface InlineCTAProps {
  /** Short contextual message relating to the article topic */
  message?: string;
  /** Link text for the CTA */
  linkText?: string;
  /** Target path */
  href?: string;
}

export const InlineCTA = ({
  message = "Want to experience this with a local guide?",
  linkText = "Learn more & book →",
  href = "/contact",
}: InlineCTAProps) => (
  <aside className="bg-accent/10 border-l-4 border-accent rounded-r-lg px-6 py-5 my-10">
    <p className="text-foreground leading-relaxed">
      <strong>{message}</strong>{" "}
      Our private Tokyo tours bring these stories to life.{" "}
      <Link to={href} className="text-accent hover:underline font-medium">
        {linkText}
      </Link>
    </p>
  </aside>
);
