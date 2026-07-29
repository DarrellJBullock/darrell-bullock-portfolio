import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/lib/projects";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Live: "border-success/40 text-success bg-success/10",
  "In Development": "border-amber/40 text-amber bg-amber/10",
  Prototype: "border-cyan/40 text-cyan bg-cyan/10",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium font-console uppercase tracking-wider",
        STATUS_STYLES[status]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current animate-blip-pulse" aria-hidden="true" />
      {status}
    </span>
  );
}

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-steel px-3 py-1 text-xs font-medium font-console uppercase tracking-wider text-fog-dim",
        className
      )}
    >
      {children}
    </span>
  );
}
