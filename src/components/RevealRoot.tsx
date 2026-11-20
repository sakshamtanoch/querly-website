"use client";
import { useEffect } from "react";

export function RevealRoot() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .seq, .ghost"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
