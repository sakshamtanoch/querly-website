"use client";
import { useEffect, useState } from "react";
import { useInView, useReducedMotionPref } from "./hooks";

const icons = [
  <svg key="a" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 20V8m7 12V4m7 16v-9" strokeLinecap="round" className="origin-bottom animate-pulse" /></svg>,
  <svg key="b" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8" className="animate-pulse" /><path d="M8 12.5l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="c" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="8" strokeDasharray="3 3" className="animate-pulse" /><path d="M12 8v4m0 3h.01" strokeLinecap="round" /></svg>,
];

/** "Ghost to clear" demo: near-transparent by default, focuses on hover/tap/focus or on a loop while in view. */
export function GhostPanel() {
  const reduced = useReducedMotionPref();
  const { ref, inView } = useInView<HTMLDivElement>();
  const [loopClear, setLoopClear] = useState(false);
  const [held, setHeld] = useState(false);
  useEffect(() => {
    if (!inView || reduced) return;
    const first = setTimeout(() => setLoopClear(true), 500);
    const t = setInterval(() => setLoopClear((c) => !c), 3200);
    return () => { clearTimeout(first); clearInterval(t); };
  }, [inView, reduced]);
  const clear = held || loopClear || reduced;
  return (
    <div className="mt-14">
      <div ref={ref} className="glass glass-border relative overflow-hidden rounded-3xl p-5 sm:p-10">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-lavender-100/70 via-white/30 to-sky-100/70" />
        <p className="text-left text-xs text-ink-soft">Your workspace · Sample · fictional</p>
        <div aria-hidden="true" className="mt-3 space-y-2">{[88, 64, 76].map((w, i) => <div key={i} className="h-2.5 rounded-full bg-white/80" style={{ width: `${w}%` }} />)}</div>
        <div
          tabIndex={0}
          role="group"
          aria-label="QUERLY overlay: hover, tap or focus to bring it into focus"
          onPointerEnter={() => setHeld(true)} onPointerLeave={() => setHeld(false)}
          onFocus={() => setHeld(true)} onBlur={() => setHeld(false)}
          onClick={() => setHeld((h) => !h)}
          className={`glass glass-border mx-auto mt-8 max-w-md rounded-2xl p-5 text-left transition duration-[900ms] ${clear ? "opacity-100 blur-0" : "pulse-soft loop opacity-40 blur-[2px]"}`}
        >
          <p className="font-[family-name:var(--font-script)] text-xl">querly ai</p>
          <p className={`mt-3 rounded-xl bg-peach-200/70 px-3 py-2 text-sm transition duration-700 ${clear ? "opacity-100" : "opacity-0"}`}><b className="font-medium">Flagged claim</b> — “Pakka ho jayegi”</p>
          <p className={`mt-2 rounded-xl bg-lavender-100 px-3 py-2 text-sm transition duration-700 delay-150 ${clear ? "opacity-100" : "opacity-0"}`}><b className="font-medium">Suggested question</b> — “Exact delivery date kya hai?”</p>
        </div>
      </div>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-ink-soft">
        {["Claims", "Promises", "Missing information"].map((w, i) => (
          <li key={w} className="flex items-center gap-2 text-sm">{icons[i]}{w}</li>
        ))}
      </ul>
    </div>
  );
}
