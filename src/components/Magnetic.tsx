"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, PointerEvent } from "react";

/** Leans its child slightly toward the cursor. */
export function Magnetic({ children }: { children: ReactNode }) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const move = (e: PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const leave = () => { x.set(0); y.set(0); };
  return (
    <motion.span className="magnetic inline-block" style={{ x, y }} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </motion.span>
  );
}
