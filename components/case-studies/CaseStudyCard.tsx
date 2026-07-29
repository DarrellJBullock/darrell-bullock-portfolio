import Link from "next/link";
import type { Project } from "@/lib/projects";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function CaseStudyCard({ project }: { project: Project }) {
  return (
    <Card as="article" interactive>
      <p className="console-text text-xs uppercase tracking-wide text-amber">Mission Report</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-bright">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-fog-dim">{project.problem}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.filters.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <Link
        href={`/case-studies#${project.slug}`}
        className="mt-6 inline-block text-sm font-medium text-cyan hover:underline"
      >
        Read full report →
      </Link>
    </Card>
  );
}
