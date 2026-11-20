"use client";

/** Switch labelled "Stealth mode": on = overlay ghosted. Keyboard accessible (Space/Enter). */
export function StealthToggle({ checked, onChange, onBlue = false }: { checked: boolean; onChange: (v: boolean) => void; onBlue?: boolean }) {
  return (
    <button
      type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)}
      className={`inline-flex items-center gap-3 rounded-full border px-3 py-2 text-sm font-medium transition-colors duration-150 ${onBlue ? "border-paper text-paper" : "border-ink text-ink"}`}
    >
      <span className={`relative h-6 w-11 rounded-full border transition-colors duration-150 ${checked ? "border-ink bg-neon-green" : onBlue ? "border-paper bg-transparent" : "border-ink bg-transparent"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full transition-transform duration-150 ${checked ? "translate-x-[22px] bg-ink" : onBlue ? "translate-x-0.5 bg-paper" : "translate-x-0.5 bg-ink"}`} />
      </span>
      Stealth mode
      <span className="sr-only">{checked ? "on, overlay ghosted" : "off, overlay clear"}</span>
    </button>
  );
}
