import { Card } from "@/components/ui/Card";

const HIGHLIGHTS = [
  {
    title: "20+ Years in Software Engineering",
    description:
      "Broad experience spanning frontend, backend, cloud infrastructure, and full-stack product delivery.",
  },
  {
    title: "Healthcare & Data Systems",
    description:
      "Compliance-aware data engineering: warehouse marts, masked identifiers, audit logging, and quality checks.",
  },
  {
    title: "AI Product Development",
    description:
      "Provider-agnostic LLM integrations, agentic workflows, and AI-assisted developer tooling.",
  },
  {
    title: "Frontend Performance & Accessibility",
    description:
      "Core Web Vitals, Server Components, and accessible, reduced-motion-aware interface design.",
  },
  {
    title: "Code Review & Engineering Quality",
    description:
      "Senior-level review practices focused on risk analysis, test coverage, and maintainability.",
  },
  {
    title: "Engineering Leadership",
    description:
      "Architecture ownership, mentoring, and delivery accountability across cross-functional teams.",
  },
];

export function ExperienceHighlights() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {HIGHLIGHTS.map((item) => (
        <Card key={item.title}>
          <h3 className="font-display text-base font-semibold text-bright">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-fog-dim">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
