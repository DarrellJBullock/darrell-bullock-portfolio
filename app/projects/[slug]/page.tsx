import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import { ProjectDetailHero } from "@/components/projects/ProjectDetailHero";
import { ProjectMetadata } from "@/components/projects/ProjectMetadata";
import { ProjectHighlights } from "@/components/projects/ProjectHighlights";
import { ProjectRoadmap } from "@/components/projects/ProjectRoadmap";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ArchitecturePreview } from "@/components/case-studies/ArchitecturePreview";
import { TradeoffPanel } from "@/components/case-studies/TradeoffPanel";
import { EmptyState } from "@/components/ui/EmptyState";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div>
      <ProjectDetailHero project={project} />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-12 lg:col-span-2">
          <section>
            <h2 className="console-text text-xs uppercase tracking-widest text-cyan">Problem</h2>
            <p className="mt-3 text-base leading-relaxed text-fog-dim">{project.problem}</p>
          </section>

          <section>
            <h2 className="console-text text-xs uppercase tracking-widest text-cyan">Solution</h2>
            <p className="mt-3 text-base leading-relaxed text-fog-dim">{project.solution}</p>
          </section>

          <section>
            <h2 className="console-text text-xs uppercase tracking-widest text-cyan">
              Key Features
            </h2>
            <div className="mt-4">
              <ProjectHighlights highlights={project.highlights} />
            </div>
          </section>

          <section>
            <h2 className="console-text text-xs uppercase tracking-widest text-cyan">
              Architecture
            </h2>
            <div className="mt-4">
              <ArchitecturePreview architecture={project.architecture} />
            </div>
          </section>

          <section>
            <h2 className="console-text text-xs uppercase tracking-widest text-cyan">
              Engineering Challenges
            </h2>
            <div className="mt-4">
              <TradeoffPanel challenges={project.challenges} />
            </div>
          </section>

          <section>
            <h2 className="console-text text-xs uppercase tracking-widest text-cyan">
              Screenshots
            </h2>
            <div className="mt-4">
              <EmptyState
                title="Screenshots coming soon"
                description="Live product screenshots will be added here once this project reaches a public release milestone."
              />
            </div>
          </section>

          <section>
            <h2 className="console-text text-xs uppercase tracking-widest text-cyan">
              What I Learned
            </h2>
            <p className="mt-3 text-base leading-relaxed text-fog-dim">
              Building {project.title} reinforced how much this domain comes down to trade-offs
              like {project.challenges[0]?.toLowerCase()}. That shaped how the next items on the
              roadmap below are scoped.
            </p>
          </section>

          <section>
            <h2 className="console-text text-xs uppercase tracking-widest text-cyan">
              Future Roadmap
            </h2>
            <div className="mt-4">
              <ProjectRoadmap roadmap={project.futureRoadmap} />
            </div>
          </section>

          <ProjectLinks project={project} />
        </div>

        <aside className="space-y-6">
          <ProjectMetadata project={project} />
        </aside>
      </div>
    </div>
  );
}
