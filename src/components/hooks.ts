"use client";
import { useEffect, useState, useSyncExternalStore } from "react";

const MQ = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/** True when the user prefers reduced motion (false during SSR). */
export function useReducedMotionPref() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(MQ).matches, () => false);
}

/** Tracks whether an element is on screen. */
export function useInView<T extends Element>() {
  const [el, setEl] = useState<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [el]);
  return { ref: setEl, inView };
}
