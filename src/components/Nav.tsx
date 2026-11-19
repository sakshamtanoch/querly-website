import Link from "next/link";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";

export function Nav({ links = true }: { links?: boolean }) {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <nav
        aria-label="Primary"
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-3 pr-2"
      >
        <Logo blur />
        <div className="flex items-center gap-2 sm:gap-8">
          {links && (
            <ul className="hidden items-center gap-8 text-sm text-ink sm:flex">
              <li><Link className="hover:opacity-60 transition" href="/#features">Features</Link></li>
              <li><Link className="hover:opacity-60 transition" href="/#how-it-works">How it works</Link></li>
            </ul>
          )}
          <CTAButton className="!px-5 !py-2.5 text-sm" />
        </div>
      </nav>
    </header>
  );
}
