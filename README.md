# QUERLY website

Marketing site for QUERLY — real-time conversation intelligence that stays out of sight.
Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · static export.

## Run, build, deploy

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint && npm run typecheck
npm run build        # static site in ./out (warns if the CTA still points to /coming-soon)
```

Deploy `out/` to any static host. On Vercel, import the repo — the framework is auto-detected.
(GitHub Pages would additionally need `basePath` in `next.config.ts`.)

## Changing the CTA link

All "Get Early Access" buttons use one `<CTAButton />` driven by `src/config/site.ts`. With no link set they go to `/coming-soon`.

1. **Locally:** copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_APP_URL=https://your-link`.
2. **On Vercel:** Project Settings → Environment Variables → add `NEXT_PUBLIC_APP_URL`, then **redeploy** (the value is baked in at build time).
3. **Or** edit the one `APP_URL` line in `src/config/site.ts`.

Optional: `NEXT_PUBLIC_EXTENSION_URL` adds a second button (e.g. Chrome extension); it is hidden when empty.
Set `NEXT_PUBLIC_SITE_URL` to your real domain for correct sitemap/Open Graph URLs.
