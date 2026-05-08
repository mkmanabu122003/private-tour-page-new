import { ReactNode } from "react";
import manabuPortrait from "@/assets/About_page_Manabu_team_photo.webp";

export interface TocItem {
  /** 2-digit number string ("01", "02", …) */
  num: string;
  /** Short label shown in the TOC */
  label: string;
  /** Anchor (must match the matching h2 id, e.g. "#section-01") */
  href: string;
}

export interface GlanceFact {
  /** Short bold key (e.g. "Cheapest transit") */
  label: string;
  /** Value (e.g. "Haneda Monorail ¥519") */
  value: string;
}

export interface BlogArticleTocProps {
  items: TocItem[];
  /** Override label text (default: "On this page" / EN) */
  label?: string;
}

export interface BlogArticleAsideProps {
  /** Manabu's 1-2 sentence take on the article */
  guideNote?: ReactNode;
  /** Override portrait (default: Manabu's stock portrait) */
  portrait?: string;
  /** 3-5 quick facts shown in the At a Glance card */
  glance?: GlanceFact[];
  /** Override card label (default: "Guide Note" + "At a Glance") */
  guideNoteLabel?: string;
  glanceLabel?: string;
}

/** Left-side sticky table of contents. Render inside the article grid. */
export const BlogArticleToc = ({ items, label = "On this page" }: BlogArticleTocProps) => (
  <aside className="article-toc hidden lg:block">
    <p className="toc-label">{label}</p>
    {items.map(item => (
      <a key={item.href} href={item.href}>
        <span className="toc-num">{item.num}</span>
        <span>{item.label}</span>
      </a>
    ))}
  </aside>
);

const DEFAULT_GUIDE_NOTE =
  "I'm Manabu, a National Government Licensed Guide Interpreter. I help travelers plan and run private tours across Tokyo and beyond — happy to answer questions about your specific trip.";

/** Right-side sticky sidebar with Guide Note + At a Glance cards. */
export const BlogArticleAside = ({
  guideNote,
  portrait = manabuPortrait,
  glance,
  guideNoteLabel = "Guide Note",
  glanceLabel = "At a Glance",
}: BlogArticleAsideProps) => {
  const noteContent = guideNote ?? DEFAULT_GUIDE_NOTE;
  return (
    <aside className="article-sidebar hidden lg:flex">
      <div className="sidebar-card">
        <div
          className="sb-portrait"
          style={{ backgroundImage: `url(${portrait})` }}
        />
        <p className="sb-label">{guideNoteLabel}</p>
        {typeof noteContent === "string" ? <p>{noteContent}</p> : noteContent}
      </div>
      {glance && glance.length > 0 && (
        <div className="sidebar-card">
          <p className="sb-label">{glanceLabel}</p>
          <div className="fact-list">
            {glance.map((g, i) => (
              <div key={i}>
                <strong>{g.label}</strong>
                {g.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default BlogArticleToc;
