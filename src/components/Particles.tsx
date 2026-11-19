const dots = [
  [8, 18, 5, 0], [22, 62, 4, 3], [35, 28, 6, 6], [48, 80, 4, 2], [58, 12, 5, 8],
  [67, 45, 7, 1], [78, 72, 4, 5], [88, 22, 6, 9], [93, 55, 4, 4], [14, 88, 5, 7],
  [42, 50, 3, 10], [72, 90, 5, 2],
];

/** Faint, slow-floating dust. Fewer dots on small screens; static under reduced motion. */
export function Particles() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {dots.map(([x, y, s, d], i) => (
        <span
          key={i}
          className={`dust loop absolute rounded-full bg-white ${i > 5 ? "hidden sm:block" : ""}`}
          style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, animationDelay: `-${d * 2}s`, animationDuration: `${18 + d * 2}s` }}
        />
      ))}
    </div>
  );
}
