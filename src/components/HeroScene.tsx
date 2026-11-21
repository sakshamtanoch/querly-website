"use client";
import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { ExtensionButton } from "./ExtensionButton";
import { CursorTag } from "./CursorTag";
import { FloatWindow } from "./FloatWindow";
import { StealthToggle } from "./StealthToggle";
import { OverlayCard, CallLines } from "./OverlayCard";

const lines = (w: number[]) => w.map((x, i) => <div key={i} className="mb-2 h-2 rounded bg-line" style={{ width: `${x}%` }} />);

export function HeroScene() {
  const [ghost, setGhost] = useState(false);
  return (
    <section className="relative px-4 pb-24 pt-14 text-center sm:px-8 sm:pt-20">
      <div className="relative mx-auto max-w-7xl">
        {/* Floating windows + cursors (xl and up) */}
        <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden="false">
          <FloatWindow label="Sample call · fictional" title="Sample call" depth={20} rotate={-1} className="pointer-events-auto absolute left-0 top-4 w-[19rem]">
            <CallLines short />
            <p className="mt-3 text-[11px] text-muted">Sample · fictional</p>
          </FloatWindow>
          <FloatWindow title="Notes" depth={10} rotate={1} className="absolute right-2 top-0 w-[15rem]">{lines([90, 72, 84, 55])}</FloatWindow>
          <FloatWindow title="Draft" depth={14} rotate={-0.6} className="absolute bottom-24 left-6 w-[13rem]">{lines([80, 94, 60])}</FloatWindow>
          <div className="pointer-events-auto absolute bottom-16 right-0 w-[17.5rem]" style={{ rotate: "0.8deg" }}><OverlayCard /></div>
          <CursorTag label="Claim" color="orange" className="left-[19rem] top-24" dx={-30} dy={18} />
          <CursorTag label="Promise" color="pink" className="right-[16rem] top-40" dx={26} dy={-14} delay={3} />
          <CursorTag label="Missing information" color="green" className="bottom-[19rem] right-[3rem]" dx={-24} dy={-14} delay={5} />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <h1
            className={`statement -mx-4 -my-4 px-4 py-4 transition-[filter,opacity] duration-[400ms] ease-out motion-reduce:transition-none ${ghost ? "opacity-55 blur-[10px]" : "opacity-100 blur-0"}`}
          >
            Intelligence <br />in Stealth.
          </h1>
          <div className="mt-8"><StealthToggle checked={ghost} onChange={setGhost} /></div>
          <div className="mt-14">
            <h2 className="h1 mx-auto">
              Real-time conversation intelligence that stays <span className="marker load">out of sight.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted">
              QUERLY listens, understands and analyses conversations in the background, surfacing important insights and suggested questions when you need them.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CTAButton />
              <ExtensionButton />
            </div>
            <p className="mt-6 text-base font-medium">Invisible interface. Intelligent assistance.</p>
          </div>
        </div>

        {/* Mobile / tablet: a short stack instead of floating windows */}
        <div className="relative mx-auto mt-14 max-w-md space-y-4 xl:hidden">
          <FloatWindow label="Sample call · fictional" title="Sample call" rotate={-0.8}><CallLines short /><p className="mt-3 text-[11px] text-muted">Sample · fictional</p></FloatWindow>
          <div style={{ rotate: "0.8deg" }}><OverlayCard /></div>
          <CursorTag label="Claim" color="orange" className="right-4 top-12" dx={-14} dy={10} hideOnMobile />
          <CursorTag label="Missing information" color="green" className="bottom-4 left-4" dx={14} dy={-10} delay={4} hideOnMobile />
        </div>
      </div>
    </section>
  );
}
