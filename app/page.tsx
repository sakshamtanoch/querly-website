import type { CSSProperties } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { ExtensionButton } from "@/components/ExtensionButton";
import { Reveal } from "@/components/Reveal";
import { HeroScene } from "@/components/HeroScene";
import { StealthSection } from "@/components/StealthSection";
import { FloatWindow } from "@/components/FloatWindow";
import { CursorTag } from "@/components/CursorTag";
import { CommentBubble } from "@/components/CommentBubble";

const sample = <p className="mt-5 text-xs text-muted">Sample · fictional</p>;

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroScene />

        {/* Statement + features */}
        <section id="features" className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-24 pt-28 sm:px-8 sm:pb-36 sm:pt-44">
          <Reveal>
            <h2 className="big max-w-5xl">
              Stay in the conversation. <br />
              <span className="marker blue">Stay one step ahead.</span>
            </h2>
          </Reveal>
          <ul className="mt-20 grid gap-6 md:grid-cols-3">
            {[
              { t: "Real-time Intelligence", d: "Identify important claims, promises and missing information as conversations unfold.", rot: -1, dot: "bg-neon-blue", v: (
                <div className="flex flex-wrap gap-2"><span className="chip c-flag">Claim</span><span className="chip c-promise">Promise</span><span className="chip c-miss">Missing information</span></div>) },
              { t: "Suggested Questions", d: "Get contextual prompts to ask the right questions at the right moment.", rot: 1, dot: "bg-neon-orange", v: (
                <div className="space-y-2">{["Exact delivery date kya hai?", "Price final hai kya?"].map((q) => <p key={q} className="chip c-ask !block !rounded-xl !px-3.5 !py-2 !text-[0.9rem] !font-medium">{q}</p>)}</div>) },
              { t: "Hinglish-first", d: "Built for the natural mix of Hindi and English in everyday Indian conversations.", rot: -0.6, dot: "bg-neon-green", v: (
                <ul className="deva space-y-2 text-[0.9rem]">
                  <li>भाई, <mark className="mk mk-g">kal tak payment kar dunga</mark>, pakka.</li>
                  <li>Okay, but <mark className="mk mk-o">invoice kab milega</mark>?</li>
                  <li>मैं <mark className="mk mk-p">आज ही भेज देता हूँ</mark>.</li>
                </ul>) },
            ].map((c, i) => (
              <li key={c.t}>
                <Reveal delay={i * 0.08} className="h-full">
                  <article className="sheet lift flex h-full min-h-[26rem] flex-col p-7" style={{ transform: `rotate(${c.rot}deg)` } as CSSProperties}>
                    <i aria-hidden="true" className={`mb-6 h-3 w-3 rounded-full ${c.dot}`} />
                    <h3 className="text-2xl font-medium tracking-tight">{c.t}</h3>
                    <p className="mt-3 text-muted">{c.d}</p>
                    <div className="mt-auto pt-8">
                      <div className="rounded-xl border border-line bg-paper p-4">{c.v}</div>
                      {sample}
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <StealthSection />

        {/* Hinglish scene */}
        <section aria-label="Hinglish sample conversations" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-28 sm:px-8 sm:py-40">
          <div className="relative mx-auto grid max-w-4xl gap-6 md:min-h-[26rem] md:block">
            <Reveal className="md:absolute md:left-0 md:top-0 md:w-[22rem]">
              <FloatWindow label="Sample chat · fictional" title="Chat" depth={18} rotate={-1}>
                <ul className="deva space-y-2.5 text-[0.95rem] leading-snug">
                  <li>भाई, <mark className="mk mk-g">kal tak payment kar dunga</mark>, pakka.</li>
                  <li>Okay, but invoice kab milega?</li>
                </ul>
                <p className="mt-3 text-[11px] text-muted">Sample · fictional</p>
              </FloatWindow>
            </Reveal>
            <Reveal delay={0.1} className="md:absolute md:right-0 md:top-24 md:w-[22rem]">
              <FloatWindow label="Sample chat · fictional" title="Chat" depth={8} rotate={1}>
                <ul className="deva space-y-2.5 text-[0.95rem] leading-snug">
                  <li>Haan haan, मैं <mark className="mk mk-p">आज ही भेज देता हूँ</mark>.</li>
                  <li>Theek hai, <mark className="mk mk-o">invoice kab milega</mark> bata do.</li>
                </ul>
                <p className="mt-3 text-[11px] text-muted">Sample · fictional</p>
              </FloatWindow>
            </Reveal>
            <Reveal delay={0.2} className="md:absolute md:bottom-0 md:left-[28%] md:w-[18rem]">
              <FloatWindow title="Notes" depth={14} rotate={0.6}>
                <div className="space-y-2">{[88, 64, 78].map((w, i) => <div key={i} className="h-2 rounded bg-line" style={{ width: `${w}%` }} />)}</div>
              </FloatWindow>
            </Reveal>
            <CursorTag label="Promise" color="pink" className="right-[23.5rem] top-[11rem]" dx={-14} dy={10} hideOnMobile />
            <CursorTag label="Claim" color="orange" className="left-[23.5rem] top-[3rem]" dx={14} dy={-8} delay={3} hideOnMobile />
          </div>
        </section>

        {/* Present in every conversation */}
        <section className="mx-auto max-w-5xl px-4 pb-28 pt-8 text-center sm:px-8 sm:pb-40">
          <Reveal>
            <h2 className="h2 mx-auto max-w-4xl">Present in every conversation. Visible when you need it.</h2>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted">QUERLY helps you focus on the conversation while AI works quietly in the background.</p>
          </Reveal>
          <div className="watch relative mx-auto mt-16 max-w-xl" style={{ "--gap": "92px", height: "17.5rem" } as CSSProperties}>
            <FloatWindow title="Notes" depth={16} rotate={-1} className="absolute -left-6 top-6 hidden w-56 opacity-70 md:block">
              <div className="space-y-2">{[90, 70, 82].map((w, i) => <div key={i} className="h-2 rounded bg-line" style={{ width: `${w}%` }} />)}</div>
            </FloatWindow>
            <FloatWindow title="Draft" depth={10} rotate={1} className="absolute -right-6 top-24 hidden w-52 opacity-70 md:block">
              <div className="space-y-2">{[76, 92, 58].map((w, i) => <div key={i} className="h-2 rounded bg-line" style={{ width: `${w}%` }} />)}</div>
            </FloatWindow>
            <div className="fan relative z-10">
              <div style={{ "--i": 0 } as CSSProperties}><CommentBubble type="flag" text="“Pakka ho jayegi” — no firm date given." delay={0.1} /></div>
              <div style={{ "--i": 1 } as CSSProperties}><CommentBubble type="promise" text="Final confirmation promised by tomorrow." delay={0.25} /></div>
              <div style={{ "--i": 2 } as CSSProperties}><CommentBubble type="miss" text="Price not confirmed." delay={0.4} /></div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted">Sample · fictional</p>
          <Reveal>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
              {[["Claims", "var(--neon-orange)"], ["Promises", "var(--neon-pink)"], ["Missing information", "var(--neon-green)"]].map(([w, c]) => (
                <li key={w} className="flex items-center gap-2"><i aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />{w}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Closing */}
        <section className="relative px-4 pb-32 pt-16 text-center sm:px-8 sm:pb-44">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">QUERLY AI</p>
            <h2 className="big mx-auto mt-5 max-w-4xl">Think beyond the conversation.</h2>
            <div className="relative mt-10 inline-flex flex-wrap items-center justify-center gap-3">
              <CTAButton />
              <ExtensionButton />
              <CursorTag label="You" color="blue" className="-left-14 top-14" dx={26} dy={-26} hideOnMobile />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
