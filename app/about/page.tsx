import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AvatarPanel } from "@/components/about/AvatarPanel";
import { CareerSummary } from "@/components/about/CareerSummary";
import { LeadershipPanel } from "@/components/about/LeadershipPanel";
import { SkillsMatrix } from "@/components/about/SkillsMatrix";

export const metadata: Metadata = {
  title: "About",
  description:
    "Darrell Bullock's engineering story: 20+ years across frontend, backend, healthcare data systems, AI products, and engineering leadership.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="About" title="Engineering story" />

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CareerSummary />
        </div>
        <div>
          <AvatarPanel />
        </div>
      </div>

      <div className="mt-16">
        <SectionHeader
          eyebrow="Leadership Style"
          title="How I work with a team"
          className="mb-8"
        />
        <LeadershipPanel />
      </div>

      <div className="mt-16">
        <SectionHeader eyebrow="Technology Strengths" title="Where I focus" className="mb-8" />
        <SkillsMatrix />
      </div>
    </div>
  );
}
