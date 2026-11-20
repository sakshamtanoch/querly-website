"use client";
import { useState } from "react";

const cap = <p className="mt-4 text-xs text-muted">Sample · fictional</p>;

function Card({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <article className="card flex h-full flex-col p-6 sm:p-8">
      <div className="flex flex-1 flex-col justify-center md:min-h-[10rem]">{children}</div>
      <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
      <p className="mt-2 text-muted">{desc}</p>
    </article>
  );
}

function Stealth() {
  const [ghost, setGhost] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-line bg-canvas p-3">
          <p className="text-[11px] font-medium text-muted">Your workspace</p>
          <div className="mt-3 space-y-2" aria-hidden="true">{[100, 80, 90, 60].map((w, i) => <div key={i} className="h-2 rounded bg-line" style={{ width: `${w}%` }} />)}</div>
        </div>
        <div className="rounded-xl border border-line bg-canvas p-3">
          <p className="text-[11px] font-medium text-muted">QUERLY</p>
          <div className={`mt-2 space-y-1.5 transition-opacity duration-300 ${ghost ? "opacity-35" : "opacity-100"}`}>
            <p className="tag-flag rounded-lg px-2.5 py-1.5 text-xs leading-snug">Flagged claim</p>
            <p className="tag-ask rounded-lg px-2.5 py-1.5 text-xs leading-snug">Suggested question</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3 text-sm">
        <button
          type="button" role="switch" aria-checked={ghost} onClick={() => setGhost((g) => !g)}
          className="relative h-6 w-11 rounded-full bg-line transition-colors duration-150 aria-checked:bg-accent"
        >
          <span className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-surface shadow transition-transform duration-150 ${ghost ? "translate-x-5" : ""}`} />
          <span className="sr-only">Ghost the QUERLY overlay</span>
        </button>
        <span className="text-muted" aria-live="polite">{ghost ? "Ghosted" : "Clear"}</span>
      </div>
      {cap}
    </div>
  );
}

export function Features() {
  return (
    <ul className="mt-14 grid items-stretch gap-5 md:grid-cols-2">
      <li>
        <Card title="Real-time Intelligence" desc="Identify important claims, promises and missing information as conversations unfold.">
          <div className="flex flex-wrap gap-2">
            <span className="tag-flag rounded-full px-3 py-1.5 text-sm font-medium">Claim</span>
            <span className="tag-ask rounded-full px-3 py-1.5 text-sm font-medium">Promise</span>
            <span className="tag-miss rounded-full px-3 py-1.5 text-sm font-medium">Missing information</span>
          </div>
          {cap}
        </Card>
      </li>
      <li>
        <Card title="Suggested Questions" desc="Get contextual prompts to ask the right questions at the right moment.">
          <div className="space-y-2">
            {["Exact delivery date kya hai?", "Price final hai kya?"].map((q) => (
              <p key={q} className="tag-ask rounded-xl px-4 py-3 leading-snug">{q}</p>
            ))}
          </div>
          {cap}
        </Card>
      </li>
      <li>
        <Card title="Stealth Mode" desc="A discreet interface designed to keep QUERLY out of your visible workspace."><Stealth /></Card>
      </li>
      <li>
        <Card title="Hinglish-first" desc="Built for the natural mix of Hindi and English in everyday Indian conversations.">
          <ul className="deva space-y-2 text-[0.95rem]">
            <li className="rounded-xl bg-canvas px-4 py-2.5">भाई, <mark className="rounded bg-flag-bg px-0.5">kal tak payment kar dunga</mark>, pakka.</li>
            <li className="rounded-xl bg-canvas px-4 py-2.5">Okay, but <mark className="rounded bg-ask-bg px-0.5">invoice kab milega</mark>?</li>
            <li className="rounded-xl bg-canvas px-4 py-2.5">Haan haan, मैं <mark className="rounded bg-miss-bg px-0.5">आज ही भेज देता हूँ</mark>.</li>
          </ul>
          {cap}
        </Card>
      </li>
    </ul>
  );
}
