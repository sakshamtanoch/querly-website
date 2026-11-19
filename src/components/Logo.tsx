import Link from "next/link";

/** Ghosted script wordmark: translucent lavender→sky gradient with soft glow. */
export function Logo({ blur = false }: { blur?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="querly ai — home"
      className={`inline-flex items-center rounded-full px-3 py-1 ${blur ? "backdrop-blur-md" : ""}`}
    >
      <svg viewBox="0 0 150 44" className="h-9 w-auto" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#9c82ff" />
            <stop offset="1" stopColor="#6cb9f5" />
          </linearGradient>
          <filter id="logo-glow" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <text
          x="4" y="32"
          fontFamily="var(--font-script), cursive"
          fontSize="30"
          fill="url(#logo-g)" fillOpacity="0.75"
          stroke="#7a68d8" strokeOpacity="0.35" strokeWidth="0.6"
          filter="url(#logo-glow)"
        >
          querly ai
        </text>
      </svg>
    </Link>
  );
}
