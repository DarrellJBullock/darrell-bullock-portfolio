import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { ProjectStack } from "@/components/projects/ProjectStack";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card as="article" interactive className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="console-text text-xs uppercase tracking-wide text-cyan">
          {project.category}
        </p>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="font-display text-xl font-semibold text-bright">
        <Link href={`/projects/${project.slug}`} className="hover:text-cyan">
          {project.title}
        </Link>
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-fog-dim">{project.tagline}</p>

      <div className="mt-5">
        <ProjectStack stack={project.stack.slice(0, 4)} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-steel pt-4 text-sm">
        <Link href={`/projects/${project.slug}`} className="font-medium text-cyan hover:underline">
          View details →
        </Link>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-fog-dim hover:text-bright"
        >
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-fog-dim hover:text-bright"
          >
            Live demo
          </a>
        )}
      </div>
    </Card>
  );
}
