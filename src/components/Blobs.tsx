export function Blobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob -left-[10vw] -top-[10vh] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] bg-lavender-300" />
      <div className="blob -right-[12vw] top-[20vh] h-[50vw] w-[50vw] max-h-[650px] max-w-[650px] bg-sky-300 [animation-delay:-8s]" />
      <div className="blob bottom-[-10vh] left-[25vw] h-[40vw] w-[40vw] max-h-[500px] max-w-[500px] bg-lavender-100 [animation-delay:-15s]" />
      <div className="blob right-[18vw] top-[55vh] h-[18vw] w-[18vw] max-h-[240px] max-w-[240px] bg-peach-200 opacity-50 [animation-delay:-4s]" />
    </div>
  );
}
