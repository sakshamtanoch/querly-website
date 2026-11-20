import Link from "next/link";
import { CTA_HREF, CTA_IS_EXTERNAL } from "@/config/site";

type Props = { variant?: "primary" | "ghost"; label?: string; className?: string };

/** Single shared CTA. Link target comes ONLY from src/config/site.ts. */
export function CTAButton({ variant = "primary", label = "Get Early Access", className = "" }: Props) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  return CTA_IS_EXTERNAL ? (
    <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className={cls}>{label}</a>
  ) : (
    <Link href={CTA_HREF} className={cls}>{label}</Link>
  );
}
