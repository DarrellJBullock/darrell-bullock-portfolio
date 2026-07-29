export function TradeoffPanel({ challenges }: { challenges: string[] }) {
  return (
    <div className="rounded-lg border border-amber/30 bg-amber/5 p-6">
      <p className="console-text mb-4 text-xs uppercase tracking-widest text-amber">
        Engineering Trade-offs
      </p>
      <ul className="space-y-3">
        {challenges.map((challenge, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-fog-dim">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
            {challenge}
          </li>
        ))}
      </ul>
    </div>
  );
}
