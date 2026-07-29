export function ArchitecturePreview({ architecture }: { architecture: string }) {
  return (
    <div className="glass-panel rounded-lg p-6">
      <p className="console-text mb-4 text-xs uppercase tracking-widest text-cyan">
        Architecture Summary
      </p>

      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
        {["Client", "Provider Layer", "Data Store"].map((node, i, arr) => (
          <div key={node} className="flex items-center gap-2">
            <span className="console-text rounded border border-steel bg-panel-soft px-3 py-1.5 text-fog">
              {node}
            </span>
            {i < arr.length - 1 && (
              <span className="text-cyan" aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-fog-dim">{architecture}</p>
    </div>
  );
}
