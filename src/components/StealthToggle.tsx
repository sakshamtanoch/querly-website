"use client";

/**
 * Switch labelled "Stealth mode". Real <button role="switch">; Space/Enter toggle.
 * Track is a fixed 56x32 box (4px padding, overflow hidden); the 24px knob moves with transform only,
 * so it can never leave the track. The label sits outside the track with a 12px gap.
 */
export function StealthToggle({ checked, onChange, onBlue = false }: { checked: boolean; onChange: (v: boolean) => void; onBlue?: boolean }) {
  const edge = onBlue ? "var(--paper)" : "var(--ink)";
  return (
    <button
      type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)}
      className={`inline-flex items-center gap-3 rounded-full border px-3 py-2 pr-5 text-sm font-medium ${onBlue ? "border-paper text-paper" : "border-ink text-ink"}`}
    >
      <span
        aria-hidden="true"
        className="block h-8 w-14 shrink-0 overflow-hidden rounded-full p-1 transition-colors duration-150"
        style={{ boxSizing: "border-box", background: checked ? "var(--neon-green)" : "transparent", boxShadow: `inset 0 0 0 1px ${checked ? "var(--ink)" : edge}` }}
      >
        <span
          className="block h-6 w-6 rounded-full transition-transform duration-150 motion-reduce:transition-none"
          style={{ background: checked ? "var(--ink)" : edge, transform: checked ? "translateX(24px)" : "translateX(0)" }}
        />
      </span>
      <span>Stealth mode</span>
      <span className="sr-only">{checked ? "on, headline blurred" : "off, headline clear"}</span>
    </button>
  );
}
