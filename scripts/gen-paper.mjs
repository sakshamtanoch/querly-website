// Generates public/paper.webp: a seamless 1200x1200 crumpled-paper texture
// (periodic ridged noise -> lit height map + fine fibres). Run: node scripts/gen-paper.mjs
// Uses headless Chrome's canvas for rendering and WebP encoding. Deterministic (seeded).
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const CHROME = process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const QUALITY = Number(process.env.PAPER_QUALITY || 0.72);
const port = 9700 + Math.floor(Math.random() * 200);
const chrome = spawn(CHROME, ["--headless=new", "--disable-gpu", `--remote-debugging-port=${port}`, `--user-data-dir=/tmp/paper-${port}`, "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let list; for (let i = 0; i < 40; i++) { try { list = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); break; } catch { await sleep(250); } }
const ws = new WebSocket(list.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d.result); pend.delete(d.id); } };
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

const expr = `(() => {
  const S = 1200;
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const grid = (n) => { const g = new Float32Array(n * n); for (let i = 0; i < g.length; i++) g[i] = rnd(); return g; };
  const sm = (t) => t * t * (3 - 2 * t);
  const sample = (g, n, x, y) => { // periodic value noise, x,y in [0,1)
    const fx = x * n, fy = y * n, x0 = Math.floor(fx), y0 = Math.floor(fy), tx = sm(fx - x0), ty = sm(fy - y0);
    const a = g[(y0 % n) * n + (x0 % n)], b = g[(y0 % n) * n + ((x0 + 1) % n)], c = g[((y0 + 1) % n) * n + (x0 % n)], d = g[((y0 + 1) % n) * n + ((x0 + 1) % n)];
    return (a * (1 - tx) + b * tx) * (1 - ty) + (c * (1 - tx) + d * tx) * ty;
  };
  // Crumple = periodic Voronoi facets (flat planes with different tilt) + creases at the borders, warped by smooth noise.
  const warpG = [grid(5), grid(5)], warpG2 = [grid(11), grid(11)];
  const mk = (n) => Array.from({ length: n }, () => ({ x: rnd() * S, y: rnd() * S, shade: (rnd() - 0.5) * 18, tx: (rnd() - 0.5) * 0.05, ty: (rnd() - 0.5) * 0.05 }));
  const big = mk(46), small = mk(190);
  const wrapd = (d) => (d > S / 2 ? d - S : d < -S / 2 ? d + S : d);
  const cv = document.createElement('canvas'); cv.width = cv.height = S; const ctx = cv.getContext('2d');
  const img = ctx.createImageData(S, S); const px = img.data;
  const facet = (pts, x, y) => {
    let d1 = 1e9, d2 = 1e9, best = null;
    for (const p of pts) { const dx = wrapd(x - p.x), dy = wrapd(y - p.y), d = Math.sqrt(dx * dx + dy * dy); if (d < d1) { d2 = d1; d1 = d; best = [p, dx, dy]; } else if (d < d2) d2 = d; }
    return { e: d2 - d1, shade: best[0].shade + best[0].tx * best[1] * 40 + best[0].ty * best[2] * 40 };
  };
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const wx = x + 38 * (sample(warpG[0], 5, x / S, y / S) - 0.5) + 9 * (sample(warpG2[0], 11, x / S, y / S) - 0.5);
    const wy = y + 38 * (sample(warpG[1], 5, x / S, y / S) - 0.5) + 9 * (sample(warpG2[1], 11, x / S, y / S) - 0.5);
    const X = (wx + S) % S, Y = (wy + S) % S;
    const f1 = facet(big, X, Y), f2 = facet(small, X, Y);
    let v = 248 + f1.shade * 0.5 + f2.shade * 0.25;
    v -= 16 * Math.max(0, 1 - f1.e / 3.2);  // main creases
    v -= 7 * Math.max(0, 1 - f2.e / 2.4);   // fine creases
    v += (rnd() - 0.5) * 3.0;               // grain
    v = Math.max(200, Math.min(255, v));
    const i = (y * S + x) * 4; px[i] = px[i + 1] = px[i + 2] = v; px[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  // paper fibres, drawn with wrap-around so the tile stays seamless
  ctx.lineCap = 'round';
  for (let f = 0; f < 900; f++) {
    const x = rnd() * S, y = rnd() * S, len = 6 + rnd() * 18, a = rnd() * Math.PI;
    ctx.strokeStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.35)' : 'rgba(120,110,90,0.12)'; ctx.lineWidth = 0.6 + rnd() * 0.5;
    for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
      if (x + ox < -30 || x + ox > S + 30 || y + oy < -30 || y + oy > S + 30) continue;
      ctx.beginPath(); ctx.moveTo(x + ox, y + oy); ctx.lineTo(x + ox + Math.cos(a) * len, y + oy + Math.sin(a) * len); ctx.stroke();
    }
  }
  return cv.toDataURL('image/webp', ${QUALITY});
})()`;
const r = await send("Runtime.evaluate", { expression: expr, returnByValue: true, timeout: 60000 });
const url = r.result.value;
const buf = Buffer.from(url.split(",")[1], "base64");
writeFileSync(new URL("../public/paper.webp", import.meta.url), buf);
console.log("public/paper.webp", Math.round(buf.length / 1024) + " KB");
ws.close(); chrome.kill();
