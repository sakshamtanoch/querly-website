import { Overlay, OVERLAY_ROWS } from "./Overlay";

const LINES = [
  { who: "Riya", pre: "Sir, delivery next week tak ", hl: "pakka ho jayegi", post: ", no issues." },
  { who: "Aman", pre: "Theek hai. Aur price wahi rahega jo discuss hua tha?" },
  { who: "Riya", pre: "Haan, bas final confirmation kal tak bhej dungi." },
  { who: "Aman", pre: "Okay, main wait karta hoon." },
];

/** Static product shot. Highlight fades in, then overlay rows slide in — once, on scroll into view. */
export function DemoWindow({ short = false }: { short?: boolean }) {
  const lines = short ? LINES.slice(0, 2) : LINES;
  const rows = short ? [OVERLAY_ROWS[0], OVERLAY_ROWS[2]] : OVERLAY_ROWS;
  return (
    <figure className="mx-auto w-full max-w-4xl">
      <div className="seq window overflow-hidden" role="group" aria-label="Sample call with the QUERLY overlay">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" /><i className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <div className="grid gap-5 p-4 text-left sm:p-6 md:grid-cols-[1.35fr_1fr]">
          <ul className="space-y-3.5 text-[0.95rem] sm:text-base" aria-label="Sample transcript">
            {lines.map((l, i) => (
              <li key={i}>
                <span className="block text-xs font-medium text-muted">{l.who}</span>
                {l.pre}
                {l.hl && <mark className="hl rounded px-0.5 text-ink">{l.hl}</mark>}
                {l.post}
              </li>
            ))}
          </ul>
          <Overlay rows={rows} />
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted">Sample call · fictional</figcaption>
    </figure>
  );
}
