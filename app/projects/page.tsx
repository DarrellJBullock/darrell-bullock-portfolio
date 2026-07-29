import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Six shipped and shipping products spanning AI applications, healthcare data systems, sports simulation, and performance-focused frontends.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Project Lineup"
        title="Projects"
        description="Every project here is presented from the portfolio side: the problem, the architecture, and the trade-offs. Filter by category to find what's relevant to you."
      />

      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
