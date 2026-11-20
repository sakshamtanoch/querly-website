import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 relative">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <Logo />
        <p className="text-sm text-muted">© 2026 QUERLY</p>
        <ul className="flex gap-6 text-sm text-muted">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <li key={l}><a href="#" className="transition-colors hover:text-ink">{l}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
