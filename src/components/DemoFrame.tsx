"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotionPref } from "./hooks";

const LAST = 9;
const STEP_MS = 1500;

function Avatar({ hue }: { hue: string }) {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMax slice" aria-hidden="true" className="h-full w-full">
      <defs><linearGradient id={`av-${hue}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={hue} /><stop offset="1" stopColor="#fff" /></linearGradient></defs>
      <rect width="100" height="100" fill={`url(#av-${hue})`} opacity=".7" />
      <circle cx="50" cy="40" r="15" fill="#fff" opacity=".85" />
      <path d="M18 100c0-22 14-34 32-34s32 12 32 34z" fill="#fff" opacity=".85" />
    </svg>
  );
}

function Wave({ active }: { active: boolean }) {
  return (
    <span aria-hidden="true" className={`flex h-4 items-end gap-[2px] ${active ? "" : "opacity-30"}`}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`w-[3px] rounded-full bg-ink ${active ? "bar loop" : ""}`} style={{ height: "100%", transform: active ? undefined : "scaleY(.25)", transformOrigin: "bottom", animationDelay: `${i * 0.11}s` }} />
      ))}
    </span>
  );
}

const dock = ["#c9b8ff", "#bfe3ff", "#ffd4b8", "#e6deff", "#ddf0ff"];

export function DemoFrame() {
  const reduced = useReducedMotionPref();
  const [phase, setPhase] = useState(LAST - 1); // SSR/static: finished state
  const wrap = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 90, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 90, damping: 18 });

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setPhase((p) => (p + 1) % LAST), STEP_MS);
    return () => clearInterval(t);
  }, [reduced]);

  const onMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType !== "mouse" || !wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 6);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 5);
  };
  const reset = () => { rx.set(0); ry.set(0); };

  const activeSpeaker = phase === 3 ? "Aman" : "Riya";
  const thinking = phase === 1 || phase === 5;
  const sh = (n: number) => phase >= n;

  return (
    <div className="relative mx-auto mt-14 w-full max-w-5xl sm:mt-20" onPointerMove={onMove} onPointerLeave={reset} ref={wrap} style={{ perspective: 1200 }}>
      <div aria-hidden="true" className="absolute -inset-x-3 -inset-y-10 -z-10 rounded-[3rem] [background:radial-gradient(closest-side,rgba(201,184,255,.8),rgba(191,227,255,.4)_60%,transparent)] sm:-inset-x-24" />
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative rounded-[1.75rem] bg-gradient-to-br from-lavender-300 via-[#e9dcff] to-peach-200 p-2.5 shadow-[0_30px_100px_-30px_rgba(150,120,255,.6)] sm:p-4"
        role="group" aria-label="Sample call · fictional. Illustrative desktop with a mock call and the QUERLY overlay.">
        <div className="mb-2 flex items-center justify-between px-3 text-[10px] text-ink/70 sm:text-xs" aria-hidden="true">
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-ink/60" /> Sample call · fictional</span>
          <span>9:41</span>
        </div>

        <div className="relative rounded-2xl bg-white/70 p-3 backdrop-blur-xl sm:p-5">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
            {[{ n: "Riya", h: "#c9b8ff" }, { n: "Aman", h: "#bfe3ff" }].map((p) => (
              <div key={p.n} className={`relative aspect-[4/3] overflow-hidden rounded-xl transition duration-500 sm:rounded-2xl ${activeSpeaker === p.n ? "ring-2 ring-peach-400 shadow-[0_0_30px_rgba(255,180,138,.6)]" : "ring-1 ring-white/70"}`}>
                <Avatar hue={p.h} />
                <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-medium backdrop-blur sm:text-xs">
                  {p.n} <Wave active={activeSpeaker === p.n} />
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-3 min-h-[8.5rem] space-y-2 text-left text-[13px] leading-snug sm:mt-4 sm:min-h-[9.5rem] sm:text-base" aria-label="Sample transcript">
            {[
              { n: 0, who: "Riya", t: "Sir, delivery next week tak pakka ho jayegi, no issues.", me: false },
              { n: 3, who: "Aman", t: "Theek hai. Aur price wahi rahega jo discuss hua tha?", me: true },
              { n: 4, who: "Riya", t: "Haan, bas final confirmation kal tak bhej dungi.", me: false },
            ].map((l) => (
              <li key={l.n} className={`max-w-[88%] rounded-2xl px-3.5 py-2 transition duration-700 ${l.me ? "ml-auto rounded-tr-sm bg-lavender-100" : "rounded-tl-sm bg-sky-100"} ${sh(l.n) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
                <b className="font-medium">{l.who}:</b> {l.t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 flex justify-center gap-2 pb-0.5 sm:mt-4 sm:gap-3" aria-hidden="true">
          {dock.map((c, i) => <span key={i} className="h-7 w-7 rounded-lg shadow-sm ring-1 ring-white/70 sm:h-9 sm:w-9 sm:rounded-xl" style={{ background: `linear-gradient(135deg, #fff, ${c})` }} />)}
        </div>

        <motion.aside
          tabIndex={0}
          aria-label="QUERLY overlay (sample)"
          className="ghost-overlay glass glass-border bob loop relative mt-3 w-full rounded-2xl p-3.5 text-left text-sm sm:absolute sm:-right-8 sm:top-[22%] sm:mt-0 sm:w-[19.5rem] sm:p-4"
          style={{ translateZ: 60 }}
        >
          <div className="mb-2.5 flex items-center justify-between">
            <span className="font-[family-name:var(--font-script)] text-lg leading-none">querly ai</span>
            <span className={`dot3 flex gap-1 transition-opacity duration-300 ${thinking ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/60" /><span className="h-1.5 w-1.5 rounded-full bg-ink/60" /><span className="h-1.5 w-1.5 rounded-full bg-ink/60" />
            </span>
          </div>
          <ul className="min-h-[10.5rem] space-y-2">
            {[
              { n: 2, k: "Flagged claim", t: "“Pakka ho jayegi” — no firm date given.", c: "bg-peach-200/70" },
              { n: 6, k: "Missing info", t: "Price not confirmed.", c: "bg-sky-100" },
              { n: 7, k: "Suggested question", t: "“Exact delivery date kya hai?”", c: "bg-lavender-100" },
            ].map((c) => sh(c.n) && (
              <li key={c.n} className={`pop rounded-xl px-3 py-2 ${c.c}`}>
                <span className="block text-[11px] font-medium uppercase tracking-wide">{c.k}</span>{c.t}
              </li>
            ))}
          </ul>
        </motion.aside>
      </motion.div>
    </div>
  );
}
