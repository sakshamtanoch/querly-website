export function HeroMock() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-4xl" role="img" aria-label="Illustrative mock conversation with a QUERLY overlay showing a flagged claim, a missing-information alert and a suggested question">
      <div className="glass glass-border rounded-3xl p-5 sm:p-8">
        <div className="mb-5 flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-lavender-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-peach-200" />
          <span className="ml-3 text-xs text-ink-soft">Sample call · fictional</span>
        </div>
        <ul className="space-y-4 text-left text-sm sm:text-base">
          <li className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/70 px-4 py-3">
            <b className="font-medium">Riya:</b> Sir, delivery next week tak pakka ho jayegi, no issues.
          </li>
          <li className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-lavender-100/80 px-4 py-3">
            <b className="font-medium">Aman:</b> Theek hai. Aur price wahi rahega jo discuss hua tha?
          </li>
          <li className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/70 px-4 py-3">
            <b className="font-medium">Riya:</b> Haan, bas final confirmation kal tak bhej dungi.
          </li>
        </ul>
      </div>

      <aside
        tabIndex={0}
        aria-label="QUERLY overlay"
        className="ghost-overlay glass glass-border mt-4 w-full rounded-2xl p-4 text-left text-sm sm:absolute sm:-bottom-10 sm:-right-6 sm:mt-0 sm:w-[19rem]"
      >
        <p className="mb-3 font-[family-name:var(--font-script)] text-lg text-ink">querly ai</p>
        <ul className="space-y-2.5">
          <li className="rounded-xl bg-peach-200/60 px-3 py-2"><span className="block text-xs font-medium uppercase tracking-wide">Flagged claim</span>“Pakka ho jayegi” — no firm date given.</li>
          <li className="rounded-xl bg-sky-100/90 px-3 py-2"><span className="block text-xs font-medium uppercase tracking-wide">Missing info</span>Price not confirmed.</li>
          <li className="rounded-xl bg-lavender-100/90 px-3 py-2"><span className="block text-xs font-medium uppercase tracking-wide">Suggested question</span>“Exact delivery date kya hai?”</li>
        </ul>
      </aside>
    </div>
  );
}
