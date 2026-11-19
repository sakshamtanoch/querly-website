"use client";
import { useEffect, useRef } from "react";

/** Calm pastel landscape (inline SVG): drifting clouds, breathing sun, parallax mountains. */
export function HeroLandscape() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const set = (mx: number, my: number) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { el.style.setProperty("--mx", String(mx)); el.style.setProperty("--my", String(my)); });
    };
    const move = (e: PointerEvent) => set(e.clientX / window.innerWidth - 0.5, e.clientY / window.innerHeight - 0.5);
    const scroll = () => el.style.setProperty("--sy", String(Math.min(window.scrollY, 900)));
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true });
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("scroll", scroll); cancelAnimationFrame(raf); };
  }, []);
  const layer = (k: number) => ({ transform: `translate3d(calc(var(--mx,0) * ${k}px), calc(var(--my,0) * ${k / 2}px + var(--sy,0) * ${k / 400}px), 0)` });
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-[5] h-[760px] overflow-hidden sm:h-[900px]">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" className="h-full w-full">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c9b8ff" /><stop offset=".45" stopColor="#cfe6ff" /><stop offset=".8" stopColor="#f3ecff" /><stop offset="1" stopColor="#f8faff" />
          </linearGradient>
          <radialGradient id="sun"><stop offset="0" stopColor="#fff3e6" /><stop offset=".35" stopColor="#ffd4b8" stopOpacity=".95" /><stop offset="1" stopColor="#ffb48a" stopOpacity="0" /></radialGradient>
          <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" stopOpacity=".95" /><stop offset="1" stopColor="#dcd2ff" stopOpacity=".7" /></linearGradient>
          <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f0eaff" stopOpacity=".95" /><stop offset="1" stopColor="#f8faff" stopOpacity=".9" /></linearGradient>
          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f8faff" stopOpacity="0" /><stop offset="1" stopColor="#f8faff" /></linearGradient>
          <radialGradient id="cl"><stop offset="0" stopColor="#fff" /><stop offset=".6" stopColor="#fff" stopOpacity=".7" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#sky)" />
        <g style={layer(10)}>
          <circle cx="1010" cy="470" r="230" fill="url(#sun)" className="breathe" />
          <circle cx="1010" cy="470" r="46" fill="#fff7ee" opacity=".95" />
        </g>
        <g style={layer(18)} fill="url(#cl)" opacity=".85">
          <g className="cloud loop" style={{ animationDuration: "60s" }}><ellipse cx="250" cy="250" rx="150" ry="28" /><ellipse cx="330" cy="232" rx="90" ry="26" /></g>
          <g className="cloud loop" style={{ animationDuration: "80s", animationDelay: "-20s" }}><ellipse cx="760" cy="180" rx="170" ry="26" /><ellipse cx="700" cy="164" rx="80" ry="22" /></g>
        </g>
        <g style={layer(28)} fill="url(#cl)" opacity=".7">
          <g className="cloud loop" style={{ animationDuration: "50s", animationDelay: "-10s" }}><ellipse cx="1180" cy="300" rx="130" ry="22" /></g>
          <g className="cloud loop" style={{ animationDuration: "70s" }}><ellipse cx="520" cy="360" rx="120" ry="20" /></g>
        </g>
        <path style={layer(14)} fill="url(#m1)" d="M-40 560 L160 430 L260 500 L430 360 L600 520 L720 450 L900 560 L1100 410 L1260 520 L1480 400 L1480 900 L-40 900Z" />
        <path style={layer(26)} fill="url(#m2)" d="M-40 640 L120 560 L300 640 L520 540 L720 650 L940 570 L1160 660 L1340 580 L1480 640 L1480 900 L-40 900Z" />
        <rect y="520" width="1440" height="380" fill="url(#fade)" />
      </svg>
    </div>
  );
}
