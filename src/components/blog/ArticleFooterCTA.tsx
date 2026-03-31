import { Link } from "react-router-dom";

interface ArticleFooterCTAProps {
  heading?: string;
  description?: string;
}

export const ArticleFooterCTA = ({
  heading = "Experience Tokyo Beyond the Guidebook",
  description = "Join a private walking tour led by a licensed local guide. Every tour is customized to your interests — from food and culture to history and hidden gems.",
}: ArticleFooterCTAProps) => (
  <section className="article-footer-cta bg-secondary/50 rounded-lg p-8 mt-12 text-center">
    <h2 className="text-2xl font-medium text-foreground mb-4">{heading}</h2>
    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
      {description}
    </p>
    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
      <span>✓ Fully customized</span>
      <span>✓ Licensed local guide</span>
      <span>✓ From ¥40,000</span>
    </div>
    <Link to="/contact" className="btn-accent">
      Book Your Private Tour
    </Link>
  </section>
);
