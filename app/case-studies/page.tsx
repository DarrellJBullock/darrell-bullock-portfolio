import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MissionReportLayout } from "@/components/case-studies/MissionReportLayout";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Mission reports on AI Detective: Console, PR Review, WeatherWise AI, and the Healthcare Claims Analytics Warehouse, covering problem, architecture, and engineering trade-offs.",
};

export default function CaseStudiesPage() {
  const caseStudyProjects = projects.filter((project) => project.caseStudyUrl);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Mission Reports"
        title="Case studies"
        description="Deeper reports on the problem, architecture, and engineering trade-offs behind select projects in this portfolio."
      />

      <div className="mt-6">
        {caseStudyProjects.map((project) => (
          <MissionReportLayout key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
