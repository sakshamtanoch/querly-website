"use client";
import { useState } from "react";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Card({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  const move = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <article onPointerMove={move} className="card spot flex h-full flex-col p-6 sm:p-7">
      <div className="relative flex min-h-[13.5rem] flex-col justify-center rounded-xl border border-line bg-canvas/60 p-4 md:h-[13.5rem]">{children}<p className="absolute bottom-2 left-4 text-[11px] text-muted">Sample · fictional</p></div>
      <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
      <p className="mt-2 text-muted">{desc}</p>
    </article>
  );
}

function Stealth() {
  const [ghost, setGhost] = useState(false);
  return (
    <div className="pb-4">
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-lg border border-line p-2.5">
          <p className="text-[11px] font-medium text-muted">Your workspace</p>
          <div className="mt-2.5 space-y-1.5" aria-hidden="true">{[100, 80, 90].map((w, i) => <div key={i} className="h-1.5 rounded bg-line" style={{ width: `${w}%` }} />)}</div>
        </div>
        <div className="rounded-lg border border-line p-2.5">
          <p className="text-[11px] font-medium text-muted">QUERLY</p>
          <div className={`mt-1.5 space-y-1 transition-opacity duration-300 ${ghost ? "opacity-30" : "opacity-100"}`}>
            <p className="tag-flag rounded-md px-2 py-1 text-[11px] leading-tight">Flagged claim</p>
            <p className="tag-ask rounded-md px-2 py-1 text-[11px] leading-tight">Suggested question</p>
          </div>
        </div>
      </div>
      <div role="group" aria-label="QUERLY overlay state" className="mt-3 inline-flex rounded-full border border-line p-0.5 text-sm">
        {([["Clear", false], ["Ghosted", true]] as const).map(([label, val]) => (
          <button
            key={label} type="button" aria-pressed={ghost === val} onClick={() => setGhost(val)}
            className={`rounded-full px-3.5 py-1 transition-colors duration-150 ${ghost === val ? "bg-ink text-canvas" : "text-muted hover:text-ink"}`}
          >{label}</button>
        ))}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <ul className="mt-14 grid items-stretch gap-5 md:grid-cols-2">
      <li>
        <Card title="Real-time Intelligence" desc="Identify important claims, promises and missing information as conversations unfold.">
          <svg viewBox="0 0 240 40" className="mx-auto h-9 w-full max-w-[15rem] text-accent" aria-hidden="true" {...stroke}>
            <path d="M2 20h18l6-14 8 28 8-34 8 40 8-30 7 20 6-10h18l5-8 6 16 6-12 6 8h22" />
          </svg>
          <div className="mt-4 flex flex-wrap justify-center gap-2 pb-4">
            <span className="tag-flag rounded-full px-3 py-1 text-sm font-medium">Claim</span>
            <span className="tag-ask rounded-full px-3 py-1 text-sm font-medium">Promise</span>
            <span className="tag-miss rounded-full px-3 py-1 text-sm font-medium">Missing information</span>
          </div>
        </Card>
      </li>
      <li>
        <Card title="Suggested Questions" desc="Get contextual prompts to ask the right questions at the right moment.">
          <svg viewBox="0 0 32 32" className="mb-3 h-8 w-8 text-accent" aria-hidden="true" {...stroke}><path d="M5 6h22v15H14l-6 5v-5H5z" /><path d="M11 12h10M11 16h6" /></svg>
          <div className="space-y-2 pb-4">
            {["Exact delivery date kya hai?", "Price final hai kya?"].map((q) => (
              <p key={q} className="tag-ask rounded-lg px-3.5 py-2 leading-snug">{q}</p>
            ))}
          </div>
        </Card>
      </li>
      <li>
        <Card title="Stealth Mode" desc="A discreet interface designed to keep QUERLY out of your visible workspace."><Stealth /></Card>
      </li>
      <li>
        <Card title="Hinglish-first" desc="Built for the natural mix of Hindi and English in everyday Indian conversations.">
          <ul className="deva space-y-1.5 pb-4 text-[0.9rem]">
            <li className="rounded-lg bg-elevated px-3.5 py-2">भाई, <mark className="rounded bg-flag-bg px-0.5 text-flag-fg">kal tak payment kar dunga</mark>, pakka.</li>
            <li className="rounded-lg bg-elevated px-3.5 py-2">Okay, but <mark className="rounded bg-ask-bg px-0.5 text-ask-fg">invoice kab milega</mark>?</li>
            <li className="rounded-lg bg-elevated px-3.5 py-2">Haan haan, मैं <mark className="rounded bg-miss-bg px-0.5 text-miss-fg">आज ही भेज देता हूँ</mark>.</li>
          </ul>
        </Card>
      </li>
    </ul>
  );
}
