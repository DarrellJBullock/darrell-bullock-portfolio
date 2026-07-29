import { getFeaturedProjects } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { AnimatedPanel } from "@/components/ui/AnimatedPanel";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="border-b border-steel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Featured Work"
            title="Projects on deck"
            description="Six shipped-and-shipping products spanning AI, healthcare, data, sports, and frontend performance."
          />
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <AnimatedPanel key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </AnimatedPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
