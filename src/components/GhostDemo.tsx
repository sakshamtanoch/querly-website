import { Overlay, type OverlayRow } from "./Overlay";

const ROWS: OverlayRow[] = [
  { kind: "flag", label: "Flagged claim", text: "“Pakka ho jayegi” — no firm date given." },
  { kind: "ask", label: "Suggested question", text: "“Exact delivery date kya hai?”" },
];

/** Ghost-to-clear: overlay is faint and blurred; sharpens on scroll into view, hover or focus, then stays clear. */
export function GhostDemo() {
  return (
    <figure className="mx-auto w-full max-w-3xl">
      <div className="beam-wrap" style={{ boxShadow: "0 0 60px -24px rgba(99,102,241,.35)" }}>
        <div className="window overflow-hidden">
          <div
            className="ghost relative grid gap-5 p-4 text-left outline-none sm:p-6 md:grid-cols-[1.2fr_1fr]"
            tabIndex={0}
            role="group"
            aria-label="Sample: the QUERLY overlay is faint until you hover, focus or scroll to it"
          >
            <div>
              <p className="text-xs font-medium text-muted">Your workspace</p>
              <div className="mt-4 space-y-3" aria-hidden="true">
                {[100, 86, 94, 62, 90, 74].map((w, i) => <div key={i} className="h-2.5 rounded bg-line" style={{ width: `${w}%` }} />)}
              </div>
            </div>
            <Overlay rows={ROWS} animate={false} />
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted">Sample · fictional — hover or focus to bring it into focus</figcaption>
    </figure>
  );
}
