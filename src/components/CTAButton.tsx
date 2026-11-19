import Link from "next/link";
import { CTA_HREF, CTA_IS_EXTERNAL } from "@/config/site";

type Props = {
  variant?: "primary" | "ghost";
  label?: string;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.95rem] font-medium text-ink transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2";
const styles = {
  primary:
    "bg-gradient-to-r from-peach-200 to-peach-400 shadow-[0_8px_40px_-8px_rgba(255,180,138,0.9)] hover:shadow-[0_12px_50px_-6px_rgba(255,180,138,1)]",
  ghost: "glass hover:bg-white/80",
};

/** Single shared CTA. Link target comes ONLY from src/config/site.ts. */
export function CTAButton({ variant = "primary", label = "Get Early Access", className = "" }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  return CTA_IS_EXTERNAL ? (
    <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
    </a>
  ) : (
    <Link href={CTA_HREF} className={cls}>
      {label}
    </Link>
  );
}
