export function TechPill({ label }: { label: string }) {
  return (
    <span className="console-text inline-flex items-center rounded border border-steel bg-panel-soft px-2.5 py-1 text-[11px] text-fog">
      {label}
    </span>
  );
}
