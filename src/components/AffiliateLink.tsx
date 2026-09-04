import { ReactNode, MouseEvent } from "react";
import {
  getAffiliateOffer,
  goPath,
  PLACEHOLDER_DESTINATION,
} from "@/lib/affiliates";
import { trackAffiliateClick } from "@/lib/ga4";

type AffiliateLinkProps = {
  slug: string;
  children: ReactNode;
  className?: string;
};

export const AffiliateLink = ({ slug, children, className }: AffiliateLinkProps) => {
  const offer = getAffiliateOffer(slug);
  const href = goPath(slug);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      // Let modified clicks open a new tab; still count the intent.
    }
    trackAffiliateClick({
      slug,
      partner: offer?.partner ?? "inbound-platform",
      destination: offer?.destination ?? PLACEHOLDER_DESTINATION,
    });
  };

  return (
    <a
      href={href}
      className={className}
      rel="nofollow sponsored noopener"
      onClick={handleClick}
      data-affiliate-slug={slug}
    >
      {children}
    </a>
  );
};
