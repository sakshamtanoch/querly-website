import Link from "next/link";
import { CTA_HREF, CTA_IS_EXTERNAL } from "@/config/site";

type Props = { variant?: "primary" | "outline" | "ghost"; label?: string; className?: string };

const v = { primary: "btn-primary", outline: "btn-outline", ghost: "btn-ghost" } as const;

/** Single shared CTA. Link target comes ONLY from src/config/site.ts. */
export function CTAButton({ variant = "primary", label = "Get Early Access", className = "" }: Props) {
  const cls = `btn ${v[variant]} ${className}`;
  return CTA_IS_EXTERNAL ? (
    <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>
  ) : (
    <Link href={CTA_HREF} className={cls}>{label}</Link>
  );
}
