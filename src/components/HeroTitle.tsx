const WORDS = "Real-time conversation intelligence that stays out of sight.".split(" ");
const GHOST_FROM = WORDS.length - 4;

/** Word-by-word blur-to-sharp reveal; "stays out of sight." fades to a ghosted gradient. */
export function HeroTitle() {
  return (
    <h1 className="display mx-auto max-w-4xl">
      {WORDS.map((w, i) => (
        <span key={i}>
          <span className={`word ${i >= GHOST_FROM ? "grad-fade" : ""}`} style={{ "--i": i } as React.CSSProperties}>{w}</span>
          {i < WORDS.length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
}
