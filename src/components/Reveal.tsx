import type { ReactNode, CSSProperties } from "react";

/**
 * Scroll-reveal wrapper (fade + rise + blur-to-sharp). Pure CSS; <RevealRoot/>
 * adds `.in` when it scrolls into view. Without JS the content is simply visible.
 */
export function Reveal({
  children, delay = 0, className = "", as: Tag = "div",
}: { children: ReactNode; delay?: number; className?: string; as?: "div" | "li" | "p" | "section" }) {
  return (
    <Tag className={`reveal ${className}`} style={{ "--d": `${delay}s` } as CSSProperties}>
      {children}
    </Tag>
  );
}
