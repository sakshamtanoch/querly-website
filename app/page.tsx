import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { ExtensionButton } from "@/components/ExtensionButton";
import { Reveal } from "@/components/Reveal";
import { DemoWindow } from "@/components/DemoWindow";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-4 pb-20 pt-16 text-center sm:px-6 sm:pt-24">
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-muted">Intelligence in Stealth.</p>
            <h1 className="h1 mx-auto max-w-[1180px]">
              Real-time conversation intelligence <br className="hidden md:block" />
              that stays <span className="accent-serif text-accent">out of sight.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted">
              QUERLY listens, understands and analyses conversations in the background, surfacing important insights and suggested questions when you need them.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CTAButton />
              <ExtensionButton />
            </div>
          </Reveal>
          <div className="relative mt-16 sm:mt-20">
            <div aria-hidden="true" className="absolute inset-x-0 -inset-y-10 -z-10 mx-auto max-w-4xl [background:radial-gradient(closest-side,rgba(201,184,255,.28),transparent)]" />
            <Reveal delay={0.1}><DemoWindow /></Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="mt-10 text-base font-medium">Invisible interface. Intelligent assistance.</p>
          </Reveal>
        </section>

        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="h2 mx-auto max-w-3xl text-center">Stay in the conversation. Stay one step ahead.</h2>
          </Reveal>
          <Reveal delay={0.05}><Features /></Reveal>
        </section>

        <section id="how-it-works" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-20 text-center sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="h2 mx-auto max-w-3xl">Present in every conversation. Visible when you need it.</h2>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-muted">
              QUERLY helps you focus on the conversation while AI works quietly in the background.
            </p>
          </Reveal>
          <div className="mt-12"><Reveal><DemoWindow short /></Reveal></div>
          <Reveal>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
              {[["Claims", "bg-flag-fg"], ["Promises", "bg-ask-fg"], ["Missing information", "bg-miss-fg"]].map(([w, c]) => (
                <li key={w} className="flex items-center gap-2"><i aria-hidden="true" className={`h-2 w-2 rounded-full ${c}`} />{w}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="px-4 pb-24 sm:px-6">
          <Reveal>
            <div className="card mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">QUERLY AI</p>
              <h2 className="h1 mx-auto mt-4 max-w-3xl">Think beyond the conversation.</h2>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <CTAButton />
                <ExtensionButton />
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
