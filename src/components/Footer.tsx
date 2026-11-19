import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/70 pt-8 sm:flex-row">
        <span className="shimmer-logo"><Logo /></span>
        <p className="text-sm text-ink-soft">© 2026 QUERLY</p>
        <ul className="flex gap-6 text-sm text-ink-soft">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <li key={l}><a href="#" className="hover:text-ink transition">{l}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
