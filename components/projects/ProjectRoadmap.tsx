export function ProjectRoadmap({ roadmap }: { roadmap: string[] }) {
  return (
    <ol className="space-y-3">
      {roadmap.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-fog-dim">
          <span className="console-text mt-0.5 shrink-0 text-xs text-amber">
            {String(i + 1).padStart(2, "0")}
          </span>
          {item}
        </li>
      ))}
    </ol>
  );
}
