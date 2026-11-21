/** The QUERLY overlay card (mock). `ghost` fades it; `auto` loops clear/ghosted until the visitor takes control. */
export function OverlayCard({ ghost = false, auto = false, className = "" }: { ghost?: boolean; auto?: boolean; className?: string }) {
  return (
    <aside
      aria-label="QUERLY overlay (sample)"
      className={`sheet p-4 text-left transition-opacity duration-500 ${auto ? "ghost-loop" : ghost ? "opacity-25" : "opacity-100"} ${className}`}
    >
      <p className="mb-3 font-[family-name:var(--font-script)] text-xl font-semibold leading-none text-neon-blue">querly ai</p>
      <ul className="space-y-2 text-sm leading-snug">
        <li className="row-flag rounded-xl px-3 py-2"><b className="block text-[11px] font-semibold uppercase tracking-wide">Flagged claim</b>“Pakka ho jayegi” — no firm date given.</li>
        <li className="row-miss rounded-xl px-3 py-2"><b className="block text-[11px] font-semibold uppercase tracking-wide">Missing info</b>Price not confirmed.</li>
        <li className="row-ask rounded-xl px-3 py-2"><b className="block text-[11px] font-semibold uppercase tracking-wide">Suggested question</b>“Exact delivery date kya hai?”</li>
      </ul>
    </aside>
  );
}

export function CallLines({ short = false }: { short?: boolean }) {
  return (
    <ul className="space-y-2.5 text-[0.9rem] leading-snug">
      <li><span className="block text-[11px] font-medium text-muted">Riya</span>Sir, delivery next week tak <mark className="mk mk-o">pakka ho jayegi</mark>, no issues.</li>
      <li><span className="block text-[11px] font-medium text-muted">Aman</span>Theek hai. Aur price wahi rahega jo discuss hua tha?</li>
      {!short && <li><span className="block text-[11px] font-medium text-muted">Riya</span>Haan, bas final confirmation kal tak bhej dungi.</li>}
    </ul>
  );
}
