import Link from "next/link";
import type { Project } from "@/lib/projects";
import { StatusBadge } from "@/components/ui/Badge";
import { ArchitecturePreview } from "@/components/case-studies/ArchitecturePreview";
import { TradeoffPanel } from "@/components/case-studies/TradeoffPanel";

export function MissionReportLayout({ project }: { project: Project }) {
  return (
    <article id={project.slug} className="scroll-mt-24 border-b border-steel py-16 last:border-b-0">
      <div className="flex flex-wrap items-center gap-3">
        <p className="console-text text-xs uppercase tracking-widest text-amber">
          Mission Report · {project.category}
        </p>
        <StatusBadge status={project.status} />
      </div>

      <h2 className="mt-3 font-display text-3xl font-semibold text-bright">{project.title}</h2>
      <p className="mt-3 max-w-2xl text-fog-dim">{project.tagline}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="console-text text-xs uppercase tracking-widest text-cyan">Objective</h3>
          <p className="mt-2 text-sm leading-relaxed text-fog-dim">{project.problem}</p>
        </div>
        <div>
          <h3 className="console-text text-xs uppercase tracking-widest text-cyan">Approach</h3>
          <p className="mt-2 text-sm leading-relaxed text-fog-dim">{project.solution}</p>
        </div>
      </div>

      <div className="mt-6">
        <ArchitecturePreview architecture={project.architecture} />
      </div>

      <div className="mt-6">
        <TradeoffPanel challenges={project.challenges} />
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-block text-sm font-medium text-cyan hover:underline"
      >
        View full project detail →
      </Link>
    </article>
  );
}
