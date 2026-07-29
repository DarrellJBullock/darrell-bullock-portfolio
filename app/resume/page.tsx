import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResumeSummary } from "@/components/resume/ResumeSummary";
import { ExperienceHighlights } from "@/components/resume/ExperienceHighlights";
import { SkillCloud } from "@/components/resume/SkillCloud";
import { ProjectResumeBullets } from "@/components/resume/ProjectResumeBullets";
import { EDUCATION } from "@/lib/resume";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Darrell Bullock's resume: experience highlights, technical skills, and project-level resume bullets.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <ResumeSummary />

      <div className="mt-16">
        <SectionHeader eyebrow="Career History" title="Experience timeline" className="mb-8" />
        <ExperienceHighlights />
      </div>

      <div className="mt-16">
        <SectionHeader eyebrow="Technical Skills" title="Skill cloud" className="mb-8" />
        <SkillCloud />
      </div>

      <div className="mt-16">
        <SectionHeader eyebrow="Education" title="Academic background" className="mb-8" />
        <Card className="max-w-md">
          <p className="font-display text-base font-semibold text-bright">{EDUCATION.degree}</p>
          <p className="mt-1 text-sm text-fog-dim">
            {EDUCATION.school}, {EDUCATION.location}
          </p>
        </Card>
      </div>

      <div className="mt-16">
        <SectionHeader eyebrow="Project Highlights" title="Resume bullets by project" className="mb-8" />
        <ProjectResumeBullets />
      </div>
    </div>
  );
}
