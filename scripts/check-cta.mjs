// Warns (never fails) if the CTA still points to /coming-soon. Runs before `npm run build`.
import { readFileSync, existsSync } from "node:fs";

let url = process.env.NEXT_PUBLIC_APP_URL?.trim() || "";
if (!url) {
  for (const f of [".env.production.local", ".env.local", ".env.production", ".env"]) {
    if (!existsSync(f)) continue;
    const m = readFileSync(f, "utf8").match(/^NEXT_PUBLIC_APP_URL=(.*)$/m);
    if (m && m[1].trim()) { url = m[1].trim(); break; }
  }
}
if (!url) {
  console.warn(
    "\n\x1b[33m⚠  CTA WARNING: NEXT_PUBLIC_APP_URL is not set.\n" +
      "   Every \"Get Early Access\" button will point to /coming-soon.\n" +
      "   Set the real product link before launch (see README → Changing the CTA link).\x1b[0m\n"
  );
}
