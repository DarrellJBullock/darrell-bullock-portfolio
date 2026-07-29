import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "AI Labs",
  description:
    "AI-focused experiments and systems: LLM-powered games, AI code review coaching, and exploratory work in AI-assisted planning and healthcare workflows.",
};

const aiDetective = getProjectBySlug("ai-detective-console");
const prReview = getProjectBySlug("pr-review");
const healthcareWarehouse = getProjectBySlug("healthcare-claims-warehouse");

const labEntries = [
  {
    title: "AI Detective: Console",
    description: aiDetective?.tagline ?? "",
    status: "Shipped Project" as const,
    href: aiDetective ? `/projects/${aiDetective.slug}` : undefined,
  },
  {
    title: "PR Review",
    description: prReview?.tagline ?? "",
    status: "Shipped Project" as const,
    href: prReview ? `/projects/${prReview.slug}` : undefined,
  },
  {
    title: "AI-Assisted Healthcare Workflows",
    description:
      "Exploring how LLM-assisted review could sit on top of the healthcare claims warehouse, flagging data quality issues or unusual claims patterns for human review.",
    status: "Concept" as const,
    href: healthcareWarehouse ? `/projects/${healthcareWarehouse.slug}` : undefined,
  },
  {
    title: "LLM Workflow Tooling",
    description:
      "Provider-agnostic patterns for routing prompts between mock, OpenAI, and Claude backends without rewriting application logic, the same pattern used in PR Review and AI Detective: Console.",
    status: "In Development" as const,
    href: undefined,
  },
  {
    title: "AI-Powered Project Planning",
    description:
      "An early concept for turning a rough product brief into a scoped implementation plan, similar to how this portfolio itself was scaffolded from a structured prompt.",
    status: "Concept" as const,
    href: undefined,
  },
  {
    title: "AI Game Mechanics",
    description:
      "Using LLMs for dynamic NPC dialogue and branching narrative logic, prototyped in AI Detective: Console and applicable to future work on Campus Legend.",
    status: "Concept" as const,
    href: undefined,
  },
];

export default function AiLabsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Experimental Systems"
        title="AI Labs"
        description="Where AI product work actually lives in this portfolio, shipped features, in-progress systems, and early concepts I'm exploring next."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labEntries.map((entry) => (
          <Card key={entry.title} className="flex h-full flex-col">
            <Badge className="w-fit">{entry.status}</Badge>
            <h3 className="mt-4 font-display text-lg font-semibold text-bright">{entry.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-fog-dim">{entry.description}</p>
            {entry.href && (
              <Link
                href={entry.href}
                className="mt-4 inline-block text-sm font-medium text-cyan hover:underline"
              >
                View project →
              </Link>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
