import type { CSSProperties } from "react";

export type OverlayRow = { kind: "flag" | "miss" | "ask"; label: string; text: string };

const cls = { flag: "tag-flag", miss: "tag-miss", ask: "tag-ask" } as const;

/** The QUERLY overlay card (mock). Rows slide in once when inside a `.seq.in` container. */
export function Overlay({ rows, animate = true }: { rows: OverlayRow[]; animate?: boolean }) {
  return (
    <aside aria-label="QUERLY overlay (sample)" className="card self-start p-4">
      <p className="mb-3 font-[family-name:var(--font-script)] text-xl font-semibold leading-none text-accent">querly ai</p>
      <ul className="space-y-2">
        {rows.map((r, i) => (
          <li key={r.label} className={`${animate ? "row" : ""} rounded-lg px-3 py-2.5 text-sm leading-snug ${cls[r.kind]}`} style={{ "--i": i } as CSSProperties}>
            <span className="block text-[11px] font-semibold uppercase tracking-wide">{r.label}</span>
            {r.text}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export const OVERLAY_ROWS: OverlayRow[] = [
  { kind: "flag", label: "Flagged claim", text: "“Pakka ho jayegi” — no firm date given." },
  { kind: "miss", label: "Missing info", text: "Price not confirmed." },
  { kind: "ask", label: "Suggested question", text: "“Exact delivery date kya hai?”" },
];
