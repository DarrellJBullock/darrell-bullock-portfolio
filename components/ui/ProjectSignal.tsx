interface ProjectSignalProps {
  label: string;
  description: string;
}

export function ProjectSignal({ label, description }: ProjectSignalProps) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-steel bg-panel/60 p-4">
      <span
        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan animate-blip-pulse"
        aria-hidden="true"
      />
      <div>
        <p className="font-display text-sm font-semibold text-bright">{label}</p>
        <p className="mt-1 text-xs text-fog-dim">{description}</p>
      </div>
    </div>
  );
}
