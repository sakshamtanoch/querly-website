import { EXTENSION_URL } from "@/config/site";

/** Optional second link; renders nothing unless NEXT_PUBLIC_EXTENSION_URL is set. */
export function ExtensionButton({ label = "Add the extension" }: { label?: string }) {
  if (!EXTENSION_URL) return null;
  return (
    <a
      href={EXTENSION_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="glass inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[0.95rem] font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-white/80"
    >
      {label}
    </a>
  );
}
