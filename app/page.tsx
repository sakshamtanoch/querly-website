import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { ExtensionButton } from "@/components/ExtensionButton";
import { HeroMock } from "@/components/HeroMock";
import { Reveal } from "@/components/Reveal";

const features = [
  { t: "Stealth Mode", d: "A discreet interface designed to keep QUERLY out of your visible workspace." },
  { t: "Real-time Intelligence", d: "Identify important claims, promises and missing information as conversations unfold." },
  { t: "Suggested Questions", d: "Get contextual prompts to ask the right questions at the right moment." },
  { t: "Hinglish-first", d: "Built for the natural mix of Hindi and English in everyday Indian conversations." },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 text-center sm:pt-28">
          <Reveal immediate>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-ink-soft">Intelligence in Stealth.</p>
            <h1 className="display">Real-time conversation intelligence that stays out of sight.</h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
              QUERLY listens, understands and analyses conversations in the background, surfacing important insights and suggested questions when you need them.
            </p>
            <p className="mt-4 font-medium">Invisible interface. Intelligent assistance.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <CTAButton />
              <ExtensionButton />
            </div>
          </Reveal>
          <Reveal delay={0.15} immediate>
            <HeroMock />
          </Reveal>
        </section>

        <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
          <Reveal>
            <h2 className="h2 mx-auto max-w-3xl text-center">Stay in the conversation. Stay one step ahead.</h2>
          </Reveal>
          <ul className="mt-16 grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <li key={f.t}>
                <Reveal delay={i * 0.08} className="h-full">
                  <article className="glass glass-border h-full rounded-3xl p-8 transition duration-500 hover:-translate-y-1 hover:bg-white/75 sm:p-10">
                    <h3 className="text-2xl font-medium tracking-tight">{f.t}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{f.d}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section id="how-it-works" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24 text-center sm:py-32">
          <Reveal>
            <h2 className="h2">Present in every conversation. Visible when you need it.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
              QUERLY helps you focus on the conversation while AI works quietly in the background.
            </p>
            <div aria-hidden="true" className="relative mx-auto mt-14 h-40 max-w-md">
              <div className="glass glass-border absolute inset-x-0 top-0 h-24 rounded-2xl opacity-30 blur-[2px]" />
              <div className="glass glass-border absolute inset-x-6 top-8 h-24 rounded-2xl opacity-60" />
              <div className="glass glass-border absolute inset-x-12 top-16 h-24 rounded-2xl shadow-[0_0_60px_rgba(255,180,138,0.5)]" />
            </div>
          </Reveal>
        </section>

        <section className="px-6 py-24 text-center sm:py-32">
          <Reveal>
            <p className="font-[family-name:var(--font-script)] text-xl text-ink-soft" aria-label="QUERLY AI">QUERLY AI</p>
            <h2 className="display mt-4">Think beyond the conversation.</h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <CTAButton />
              <ExtensionButton />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
