import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { ExtensionButton } from "@/components/ExtensionButton";
import { Reveal } from "@/components/Reveal";
import { HeroLandscape } from "@/components/HeroLandscape";
import { HeroTitle } from "@/components/HeroTitle";
import { DemoFrame } from "@/components/DemoFrame";
import { Bento } from "@/components/Bento";
import { GhostPanel } from "@/components/GhostPanel";
import { Closing } from "@/components/Closing";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative -mt-[4.25rem] px-6 pb-16 pt-32 text-center sm:pt-40">
          <HeroLandscape />
          <p className="word mb-6 text-sm font-medium uppercase tracking-[0.2em] text-ink-soft" style={{ "--i": 0 } as React.CSSProperties}>Intelligence in Stealth.</p>
          <HeroTitle />
          <div className="fade-up" style={{ "--d": "0.45s" } as React.CSSProperties}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              QUERLY listens, understands and analyses conversations in the background, surfacing important insights and suggested questions when you need them.
            </p>
            <p className="mt-4 font-medium">Invisible interface. Intelligent assistance.</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <CTAButton />
              <ExtensionButton />
            </div>
          </div>
          <div className="fade-up" style={{ "--d": "0.65s" } as React.CSSProperties}>
            <DemoFrame />
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32">
          <Reveal>
            <h2 className="h2 mx-auto max-w-3xl text-center">
              Stay in the conversation. <span className="grad-grey">Stay one step ahead.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}><Bento /></Reveal>
        </section>

        <section id="how-it-works" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-20 text-center sm:px-6 sm:py-28">
          <Reveal>
            <h2 className="h2">Present in every conversation. Visible when you need it.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
              QUERLY helps you focus on the conversation while AI works quietly in the background.
            </p>
          </Reveal>
          <Reveal delay={0.1}><GhostPanel /></Reveal>
        </section>

        <Reveal><Closing /></Reveal>
      </main>
      <Footer />
    </>
  );
}
