import { ReactNode } from "react";

type HubTableProps = {
  caption: string;
  children: ReactNode;
};

export const HubTable = ({ caption, children }: HubTableProps) => (
  <div className="hub-table-scroll" role="region" aria-label={caption} tabIndex={0}>
    <div className="cost-table-cap">
      <span>{caption}</span>
    </div>
    {children}
  </div>
);
