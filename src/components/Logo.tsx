import Link from "next/link";

/** Solid script wordmark in the accent colour. */
export function Logo() {
  return (
    <Link
      href="/"
      aria-label="querly ai — home"
      className="inline-flex shrink-0 items-center rounded-lg px-1 font-[family-name:var(--font-script)] text-[1.7rem] font-semibold leading-none text-accent"
    >
      querly ai
    </Link>
  );
}
