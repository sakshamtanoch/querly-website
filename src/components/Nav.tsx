"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";

export function Nav({ links = true }: { links?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className="sticky top-0 z-40 px-4 pt-3">
      <nav
        aria-label="Primary"
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-3 pr-2 transition duration-500 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <Logo blur />
        <div className="flex items-center gap-2 sm:gap-8">
          {links && (
            <ul className="hidden items-center gap-8 text-sm text-ink sm:flex">
              <li><Link className="transition hover:opacity-60" href="/#features">Features</Link></li>
              <li><Link className="transition hover:opacity-60" href="/#how-it-works">How it works</Link></li>
            </ul>
          )}
          <CTAButton className="!px-4 !py-2.5 text-sm sm:!px-5" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 -bottom-px h-[2px] overflow-hidden rounded-full">
          <motion.div className="h-full origin-left bg-gradient-to-r from-lavender-300 to-peach-400" style={{ scaleX }} />
        </div>
      </nav>
    </header>
  );
}
