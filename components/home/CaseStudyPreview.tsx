import { projects } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { Button } from "@/components/ui/Button";
import { AnimatedPanel } from "@/components/ui/AnimatedPanel";

export function CaseStudyPreview() {
  const caseStudyProjects = projects.filter((p) => p.caseStudyUrl).slice(0, 3);

  return (
    <section className="border-b border-steel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Mission Reports"
            title="Case study preview"
            description="Deeper dives into the problem, architecture, and trade-offs behind select projects."
          />
          <Button href="/case-studies" variant="secondary">
            Read all case studies
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudyProjects.map((project, i) => (
            <AnimatedPanel key={project.id} delay={i * 0.05}>
              <CaseStudyCard project={project} />
            </AnimatedPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
