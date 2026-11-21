"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsDesktop, useReducedMotionPref } from "./hooks";

/** Generic app window on paper-light, at a given depth (gentle scroll parallax, max 24px; off on mobile/reduced motion). */
export function FloatWindow({
  title = "", depth = 12, rotate = 0, className = "", children, label,
}: { title?: string; depth?: number; rotate?: number; className?: string; children: React.ReactNode; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useIsDesktop();
  const reduced = useReducedMotionPref();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const d = Math.min(24, depth);
  const y = useTransform(scrollYProgress, [0, 1], [d, -d]);
  const on = desktop && !reduced;
  return (
    <motion.div ref={ref} style={{ y: on ? y : 0, rotate }} className={`sheet overflow-hidden ${className}`} role={label ? "group" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5" aria-hidden="true">
        <i className="h-2.5 w-2.5 rounded-full bg-neon-orange" /><i className="h-2.5 w-2.5 rounded-full bg-neon-green" /><i className="h-2.5 w-2.5 rounded-full bg-neon-pink" />
        {title && <span className="ml-2 text-[11px] text-muted">{title}</span>}
      </div>
      <div className="p-4 text-left">{children}</div>
    </motion.div>
  );
}
