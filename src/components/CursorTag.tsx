import type { CSSProperties } from "react";

const colors = { orange: "var(--neon-orange)", pink: "var(--neon-pink)", green: "var(--neon-green)", blue: "var(--neon-blue)" } as const;

/** Figma-style pointer with a neon name pill. Decorative. */
export function CursorTag({
  label, color, className = "", dx = 24, dy = 16, delay = 0, hideOnMobile = false,
}: { label: string; color: keyof typeof colors; className?: string; dx?: number; dy?: number; delay?: number; hideOnMobile?: boolean }) {
  const c = colors[color];
  return (
    <div
      aria-hidden="true"
      className={`cursor ${hideOnMobile ? "hidden md:block" : ""} ${className}`}
      style={{ "--dx": `${dx}px`, "--dy": `${dy}px`, animationDelay: `-${delay}s` } as CSSProperties}
    >
      <svg width="18" height="20" viewBox="0 0 18 20" fill={c} stroke="#0b0b10" strokeWidth="1.4" strokeLinejoin="round"><path d="M2 1.5l13.5 7.2-5.6 1.7-2.6 5.6z" /></svg>
      <span
        className="-mt-1 ml-3 inline-block rounded-full px-2.5 py-1 text-xs font-semibold leading-none text-ink"
        style={{ background: c, color: color === "blue" ? "var(--paper)" : "var(--ink)" }}
      >{label}</span>
    </div>
  );
}
