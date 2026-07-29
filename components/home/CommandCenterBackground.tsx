export function CommandCenterBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-3xl animate-drift" />
      <div className="absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/3 rounded-full bg-amber/10 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/15">
        <div className="absolute inset-8 rounded-full border border-cyan/10" />
        <div className="absolute inset-16 rounded-full border border-cyan/10" />
        <div
          className="absolute inset-0 animate-radar-spin rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(76,231,224,0.28), transparent 22%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />
    </div>
  );
}
