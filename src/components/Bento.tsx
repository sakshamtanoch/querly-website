"use client";
import { useEffect, useState } from "react";
import { useReducedMotionPref } from "./hooks";

const fiction = <p className="mt-3 text-[11px] text-ink/70">Sample · fictional</p>;

function useTick(ms: number, max: number, reduced: boolean, active = true) {
  const [i, setI] = useState(max - 1);
  useEffect(() => {
    if (reduced || !active) return;
    const t = setInterval(() => setI((v) => (v + 1) % max), ms);
    return () => clearInterval(t);
  }, [ms, max, reduced, active]);
  return i;
}

function Card({ className = "", children, title, desc, dark = false }: { className?: string; children: React.ReactNode; title: string; desc: string; dark?: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl p-7 transition duration-500 hover:-translate-y-1.5 sm:p-9 ${className}`}>
      <h3 className="font-[family-name:var(--font-serif)] text-3xl font-medium tracking-tight text-ink sm:text-4xl">{title}</h3>
      <p className={`mt-3 max-w-md leading-relaxed ${dark ? "text-ink/80" : "text-ink-soft"}`}>{desc}</p>
      {children}
    </article>
  );
}

/* 1 — listening */
function Listening() {
  const reduced = useReducedMotionPref();
  const [secs, setSecs] = useState(5);
  const flag = useTick(1700, 4, reduced);
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [reduced]);
  const mm = String(Math.floor(secs / 60)).padStart(2, "0"), ss = String(secs % 60).padStart(2, "0");
  return (
    <div className="mt-6" role="img" aria-label="Sample listening animation: a waveform, a recording timer and flagged items appearing">
      <p className="text-center font-mono text-3xl font-medium tabular-nums text-ink" aria-hidden="true">{mm}:{ss}</p>
      <p className="text-center text-xs text-ink/70" aria-hidden="true"><span className="mr-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-peach-400" />Recording</p>
      <div aria-hidden="true" className="mx-auto mt-5 flex h-16 max-w-xl items-center justify-between gap-[3px]">
        {Array.from({ length: 48 }).map((_, i) => (
          <span key={i} className="bar loop w-[3px] flex-1 rounded-full bg-white/90" style={{ height: `${30 + ((i * 37) % 70)}%`, animationDelay: `${(i % 12) * 0.09}s`, animationDuration: `${0.9 + (i % 5) * 0.18}s` }} />
        ))}
      </div>
      <div aria-hidden="true" className="mx-auto mt-5 max-w-xl rounded-2xl bg-white/35 p-3 opacity-90 backdrop-blur-md">
        <div className="flex flex-wrap gap-2">
          {["Claim", "Promise", "Missing information"].map((l, i) => (
            <span key={l} className={`rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink transition duration-500 ${flag >= i ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}>{l}</span>
          ))}
        </div>
      </div>
      {fiction}
    </div>
  );
}

/* 2 — suggested questions */
const QS = ["Exact delivery date kya hai?", "Kya price final hai?", "Confirmation kab tak milega?"];
function Questions() {
  const reduced = useReducedMotionPref();
  const [q, setQ] = useState(0);
  const [n, setN] = useState(QS[0].length);
  useEffect(() => {
    if (reduced) return;
    let i = 0, chars = QS[0].length, pause = 10;
    const t = setInterval(() => {
      if (pause > 0) { pause--; return; }
      if (chars < QS[i].length) { chars++; setN(chars); if (chars === QS[i].length) pause = 18; }
      else { i = (i + 1) % QS.length; chars = 0; setQ(i); setN(0); }
    }, 70);
    return () => clearInterval(t);
  }, [reduced]);
  return (
    <div className="mt-6" role="img" aria-label="Sample suggested questions typing out one after another">
      <div aria-hidden="true" className="glass glass-border rounded-2xl p-5 transition duration-500 group-hover:shadow-[0_0_50px_rgba(201,184,255,.8)]">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">Suggested question</p>
        <p className="caret mt-2 min-h-[3.5rem] font-[family-name:var(--font-serif)] text-2xl text-ink">{QS[q].slice(0, n)}</p>
      </div>
      {fiction}
    </div>
  );
}

/* 3 — stealth slider (auto-sweeps via CSS until the user touches it) */
function Stealth() {
  const [manual, setManual] = useState<number | null>(null);
  const v = manual ?? 50;
  const vars = manual === null ? undefined : ({ "--v": manual, animation: "none" } as React.CSSProperties);
  const take = (n: number) => setManual(n);
  return (
    <div className="mt-6" role="group" aria-label="Stealth demonstration">
      <div className={`relative h-52 overflow-hidden rounded-2xl bg-white/70 ${manual === null ? "stealth-auto loop" : ""}`} style={vars}>
        <div aria-hidden="true" className="absolute inset-0 p-4">
          <p className="text-[11px] font-medium text-ink-soft">Your workspace</p>
          <div className="mt-3 space-y-2">{[90, 70, 82, 55, 76].map((w, i) => <div key={i} className="h-2 rounded-full bg-lavender-100" style={{ width: `${w}%` }} />)}</div>
        </div>
        <div aria-hidden="true" className="absolute inset-y-0 right-0 flex items-center justify-end p-4" style={{ left: "calc(var(--v) * 1%)", opacity: "calc(1 - 0.82 * var(--v) / 100)" }}>
          <div className="glass glass-border w-full min-w-[9rem] max-w-[13rem] overflow-hidden rounded-xl p-3 text-xs">
            <p className="font-[family-name:var(--font-script)] text-base">querly ai</p>
            <p className="mt-1 rounded-lg bg-peach-200/70 px-2 py-1.5">Flagged claim</p>
            <p className="mt-1 rounded-lg bg-lavender-100 px-2 py-1.5">Suggested question</p>
          </div>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px bg-ink/30" style={{ left: "calc(var(--v) * 1%)" }}>
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs shadow-[0_0_24px_rgba(201,184,255,.9)]">↔</span>
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-2 left-3 text-[11px] font-medium">Your workspace</span>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-2 right-3 text-[11px] font-medium">QUERLY</span>
        <input
          type="range" min={0} max={100} step={1} value={Math.round(v)}
          aria-label="Overlay visibility divider, from clear to ghosted"
          className="stealth absolute inset-0 h-full w-full opacity-0 focus-visible:opacity-100"
          onPointerDown={(e) => { if (manual === null) { const r = e.currentTarget.getBoundingClientRect(); take(((e.clientX - r.left) / r.width) * 100); } }}
          onKeyDown={() => { if (manual === null) take(50); }}
          onChange={(e) => take(Number(e.target.value))}
        />
      </div>
      {fiction}
    </div>
  );
}

/* 4 — Hinglish */
const CHAT: { t: string; mark: string; me?: boolean }[] = [
  { t: "भाई, kal tak payment kar dunga, pakka.", mark: "kal tak payment kar dunga" },
  { t: "Okay, but invoice kab milega?", mark: "invoice kab milega", me: true },
  { t: "Haan haan, मैं आज ही भेज देता हूँ.", mark: "आज ही भेज देता हूँ" },
];
function Hinglish() {
  const reduced = useReducedMotionPref();
  const i = useTick(1800, 3, reduced);
  return (
    <div className="mt-6" role="img" aria-label="Sample chat mixing Devanagari, romanised Hindi and English, with phrases highlighted one by one">
      <ul aria-hidden="true" className="space-y-2.5 font-[family-name:var(--font-deva)]">
        {CHAT.map((l, k) => {
          const [a, b] = l.t.split(l.mark);
          return (
            <li key={k} className={`max-w-[92%] rounded-2xl px-4 py-2.5 text-[15px] text-ink ${l.me ? "ml-auto bg-lavender-100" : "bg-white/80"}`}>
              {a}<mark className={`rounded-md px-1 text-ink transition duration-500 ${i === k ? "bg-peach-200" : "bg-transparent"}`}>{l.mark}</mark>{b}
            </li>
          );
        })}
      </ul>
      {fiction}
    </div>
  );
}

export function Bento() {
  return (
    <ul className="mt-16 grid gap-5 lg:grid-cols-6">
      <li className="lg:col-span-4">
        <Card dark title="Real-time Intelligence" desc="Identify important claims, promises and missing information as conversations unfold." className={`h-full bg-gradient-to-br from-[#8da2ff] to-[#b6c4ff] hover:shadow-[0_20px_80px_-20px_rgba(120,140,255,.8)]`}><Listening /></Card>
      </li>
      <li className="lg:col-span-2">
        <Card title="Suggested Questions" desc="Get contextual prompts to ask the right questions at the right moment." className={`h-full bg-gradient-to-b from-white to-lavender-100 ring-1 ring-white hover:shadow-[0_20px_80px_-20px_rgba(201,184,255,.9)]`}><Questions /></Card>
      </li>
      <li className="lg:col-span-3">
        <Card title="Stealth Mode" desc="A discreet interface designed to keep QUERLY out of your visible workspace." className={`h-full bg-gradient-to-br from-sky-100 to-white ring-1 ring-white hover:shadow-[0_20px_80px_-20px_rgba(191,227,255,.9)]`}><Stealth /></Card>
      </li>
      <li className="lg:col-span-3">
        <Card title="Hinglish-first" desc="Built for the natural mix of Hindi and English in everyday Indian conversations." className={`h-full bg-gradient-to-br from-lavender-100 to-sky-100 ring-1 ring-white hover:shadow-[0_20px_80px_-20px_rgba(255,180,138,.7)]`}><Hinglish /></Card>
      </li>
    </ul>
  );
}
