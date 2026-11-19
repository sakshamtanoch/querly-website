import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Coming soon — QUERLY",
  robots: { index: false, follow: false },
};

export default function ComingSoon() {
  return (
    <>
      <Nav links={false} />
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <h1 className="display">Coming soon.</h1>
        <p className="mt-6 text-lg text-ink-soft">QUERLY is almost ready.</p>
        <Link
          href="/"
          className="glass mt-10 inline-flex items-center rounded-full px-7 py-3.5 text-[0.95rem] font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-white/80"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
