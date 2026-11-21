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
        <h1 className="h1">Coming soon.</h1>
        <p className="mt-5 text-lg text-muted">QUERLY is almost ready.</p>
        <Link
          href="/"
          className="btn btn-ghost mt-8"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
