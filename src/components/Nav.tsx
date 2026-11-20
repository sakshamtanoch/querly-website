"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";

export function Nav({ links = true }: { links?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`sticky top-0 z-40 border-b bg-surface transition-colors duration-150 ${scrolled ? "border-line" : "border-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <div className="flex items-center gap-3 sm:gap-8">
          {links && (
            <ul className="hidden items-center gap-8 text-[0.95rem] text-muted sm:flex">
              <li><Link className="transition-colors hover:text-ink" href="/#features">Features</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/#how-it-works">How it works</Link></li>
            </ul>
          )}
          <CTAButton className="!h-10 !px-4" />
        </div>
      </nav>
    </header>
  );
}
