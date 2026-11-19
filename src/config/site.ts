/**
 * HOW TO CHANGE THE "Get Early Access" LINK
 * -----------------------------------------
 * Every CTA button on the site reads CTA_HREF from this file. Pick ONE way:
 *   1. Set NEXT_PUBLIC_APP_URL in `.env.local` (local) or in your host's
 *      environment variables (e.g. Vercel), then rebuild / redeploy.
 *   2. Or replace the fallback on the APP_URL line below with your URL.
 * While no URL is set, all CTAs go to /coming-soon.
 */

export const SITE_NAME = "QUERLY";
export const SITE_DESCRIPTION =
  "QUERLY listens, understands and analyses conversations in the background, surfacing important insights and suggested questions when you need them.";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://querly-website.vercel.app"
).replace(/\/$/, "");

// ✏️ Edit the "" fallback to hard-code your product link.
export const APP_URL: string = process.env.NEXT_PUBLIC_APP_URL?.trim() || "";

export const COMING_SOON_PATH = "/coming-soon";

export const CTA_HREF: string = APP_URL !== "" ? APP_URL : COMING_SOON_PATH;
export const CTA_IS_EXTERNAL: boolean = CTA_HREF.startsWith("http");

/** Optional second link (e.g. Chrome extension). Empty = hidden. */
export const EXTENSION_URL: string =
  process.env.NEXT_PUBLIC_EXTENSION_URL?.trim() || "";
