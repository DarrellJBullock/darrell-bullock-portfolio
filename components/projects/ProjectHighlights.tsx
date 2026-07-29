export function ProjectHighlights({ highlights }: { highlights: string[] }) {
  return (
    <ul className="space-y-3">
      {highlights.map((highlight, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-fog-dim">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
          {highlight}
        </li>
      ))}
    </ul>
  );
}
