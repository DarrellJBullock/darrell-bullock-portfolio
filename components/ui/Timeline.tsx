export interface TimelineItem {
  title: string;
  period: string;
  description: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-steel pl-6">
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span
            className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-cyan bg-void"
            aria-hidden="true"
          />
          <p className="console-text text-xs uppercase tracking-wide text-cyan">{item.period}</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-bright">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-fog-dim">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
