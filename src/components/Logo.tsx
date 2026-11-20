import Link from "next/link";

/** Solid script wordmark in neon blue. */
export function Logo() {
  return (
    <Link
      href="/"
      aria-label="querly ai — home"
      className="inline-flex shrink-0 items-center rounded-lg px-1 font-[family-name:var(--font-script)] text-[1.75rem] font-semibold leading-none text-neon-blue"
    >
      querly ai
    </Link>
  );
}
