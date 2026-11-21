"use client";
import { useState } from "react";
import { StealthToggle } from "./StealthToggle";
import { OverlayCard, CallLines } from "./OverlayCard";

/** Full-bleed contrast section. Overlay loops clear/ghosted until the visitor uses the toggle. */
export function StealthSection() {
  const [manual, setManual] = useState<boolean | null>(null);
  return (
    <section id="how-it-works" className="blue-tex on-blue scroll-mt-0 px-4 py-24 text-paper sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="big">Stealth Mode</h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-xl text-paper">A discreet interface designed to keep QUERLY out of your visible workspace.</p>
        <div className="mt-8"><StealthToggle onBlue checked={manual === true} onChange={setManual} /></div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-t-2xl border-[10px] border-b-0 border-ink bg-ink">
            <div className="grid gap-4 rounded-md bg-paper-light p-4 text-ink sm:grid-cols-[1.3fr_1fr] sm:p-6">
              <div className="text-left">
                <p className="mb-3 text-[11px] font-medium text-muted">Sample call · fictional</p>
                <CallLines />
              </div>
              <OverlayCard auto={manual === null} ghost={manual === true} className="self-start" />
            </div>
          </div>
          <div aria-hidden="true" className="mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-2xl bg-ink" style={{ clipPath: "polygon(0 0, 100% 0, 97% 100%, 3% 100%)" }} />
        </div>
      </div>
    </section>
  );
}
