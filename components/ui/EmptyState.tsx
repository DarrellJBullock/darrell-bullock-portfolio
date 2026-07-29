import { type ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="glass-panel rounded-lg border-dashed p-12 text-center">
      <p className="console-text text-xs uppercase tracking-wide text-cyan">No signal</p>
      <h3 className="mt-3 font-display text-xl font-semibold text-bright">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-fog-dim">{description}</p>
      {action && <div className="mt-6 flex justify-center">{action}</div>}
    </div>
  );
}
