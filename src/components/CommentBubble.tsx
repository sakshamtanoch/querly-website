import type { CSSProperties } from "react";

const dot = { flag: "var(--neon-orange)", promise: "var(--neon-pink)", miss: "var(--neon-green)" } as const;

/** Comment bubble: avatar, bold name, timestamp, one line, type dot. Pops in when its container is `.in`. */
export function CommentBubble({ type, text, delay = 0, className = "" }: { type: keyof typeof dot; text: string; delay?: number; className?: string }) {
  return (
    <div className={`pop sheet flex items-start gap-3 rounded-2xl p-4 text-left ${className}`} style={{ "--d": `${delay}s` } as CSSProperties}>
      <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon-blue font-[family-name:var(--font-script)] text-xl font-semibold leading-none text-paper">q</span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-sm">
          <b className="font-semibold">QUERLY</b>
          <span className="text-muted">just now</span>
          <i aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: dot[type] }} />
        </p>
        <p className="mt-0.5 text-[0.95rem] leading-snug">{text}</p>
      </div>
    </div>
  );
}
