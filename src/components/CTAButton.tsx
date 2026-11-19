import Link from "next/link";
import { CTA_HREF, CTA_IS_EXTERNAL } from "@/config/site";
import { Magnetic } from "./Magnetic";

type Props = { variant?: "primary" | "ghost"; label?: string; className?: string };

const base =
  "relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-[0.95rem] font-medium text-ink transition duration-300 hover:-translate-y-0.5";
const styles = { primary: "btn-peach", ghost: "glass hover:bg-white/80" };

/** Single shared CTA. Link target comes ONLY from src/config/site.ts. */
export function CTAButton({ variant = "primary", label = "Get Early Access", className = "" }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  const el = CTA_IS_EXTERNAL ? (
    <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>
  ) : (
    <Link href={CTA_HREF} className={cls}>{label}</Link>
  );
  return variant === "primary" ? <Magnetic>{el}</Magnetic> : el;
}
