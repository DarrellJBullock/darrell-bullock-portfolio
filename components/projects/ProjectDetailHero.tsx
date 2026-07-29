import type { Project } from "@/lib/projects";
import { StatusBadge } from "@/components/ui/Badge";
import { Badge } from "@/components/ui/Badge";

export function ProjectDetailHero({ project }: { project: Project }) {
  return (
    <section className="border-b border-steel bg-panel/40">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{project.category}</Badge>
          <StatusBadge status={project.status} />
        </div>

        <h1 className="mt-5 font-display text-4xl font-semibold text-bright sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fog-dim">{project.tagline}</p>

        <p className="console-text mt-6 max-w-2xl text-sm leading-relaxed text-cyan">
          {project.portfolioAngle}
        </p>
      </div>
    </section>
  );
}
