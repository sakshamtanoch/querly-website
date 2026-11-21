"use client";
import { useSyncExternalStore } from "react";

function useMedia(query: string, server = false) {
  return useSyncExternalStore(
    (cb) => { const m = window.matchMedia(query); m.addEventListener("change", cb); return () => m.removeEventListener("change", cb); },
    () => window.matchMedia(query).matches,
    () => server,
  );
}
export const useReducedMotionPref = () => useMedia("(prefers-reduced-motion: reduce)");
export const useIsDesktop = () => useMedia("(min-width: 768px)");
