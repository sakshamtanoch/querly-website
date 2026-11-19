"use client";
import { useRef } from "react";
import { CTAButton } from "./CTAButton";
import { ExtensionButton } from "./ExtensionButton";

function Bubble({ className, tilt, style, children }: { className: string; tilt: number; style?: React.CSSProperties; children: React.ReactNode }) {
  return (
    <div aria-hidden="true" className={`bob loop absolute hidden sm:block ${className}`} style={style}>
      <div className="rounded-3xl bg-gradient-to-br from-white/90 to-lavender-100/70 shadow-[inset_2px_2px_4px_#fff,inset_-3px_-3px_8px_rgba(150,130,255,.25),0_20px_50px_-12px_rgba(150,130,255,.6)] backdrop-blur-md transition-transform duration-300 ease-out"
        style={{ transform: `rotate(calc(var(--mx,0) * ${tilt}deg)) translate3d(calc(var(--mx,0) * 14px), calc(var(--my,0) * 10px), 0)` }}>
        {children}
      </div>
    </div>
  );
}

export function Closing() {
  const ref = useRef<HTMLElement>(null);
  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", String((e.clientX - r.left) / r.width - 0.5));
    ref.current.style.setProperty("--my", String((e.clientY - r.top) / r.height - 0.5));
  };
  return (
    <section ref={ref} onPointerMove={move} className="relative mx-4 mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-lavender-100 via-[#eef1ff] to-sky-100 px-6 py-24 text-center sm:mx-auto sm:max-w-6xl sm:py-36">
      <Bubble className="left-[6%] top-[18%]" tilt={-10} style={{ animationDuration: "6s" }}>
        <div className="flex gap-1.5 px-6 py-5"><i className="h-2.5 w-2.5 rounded-full bg-lavender-300" /><i className="h-2.5 w-2.5 rounded-full bg-sky-300" /><i className="h-2.5 w-2.5 rounded-full bg-peach-200" /></div>
      </Bubble>
      <Bubble className="bottom-[16%] right-[7%]" tilt={12} style={{ animationDuration: "7.5s", animationDelay: "-3s" }}>
        <div className="space-y-2 px-6 py-5"><div className="h-2 w-20 rounded-full bg-lavender-300/70" /><div className="h-2 w-12 rounded-full bg-sky-300/80" /></div>
      </Bubble>
      <div className="relative">
        <p className="font-[family-name:var(--font-script)] text-2xl text-ink-soft">QUERLY AI</p>
        <h2 className="display mx-auto mt-4 max-w-3xl">Think beyond the conversation.</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <CTAButton />
          <ExtensionButton />
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(255,196,160,.7),transparent)] breathe loop" />
    </section>
  );
}
