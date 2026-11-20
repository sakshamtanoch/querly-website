import { EXTENSION_URL } from "@/config/site";

/** Optional second link; renders nothing unless NEXT_PUBLIC_EXTENSION_URL is set. */
export function ExtensionButton({ label = "Add the extension" }: { label?: string }) {
  if (!EXTENSION_URL) return null;
  return (
    <a href={EXTENSION_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
      {label}
    </a>
  );
}
