export const SITE_NAME = "Darrell Bullock";

export const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/ai-labs", label: "AI Labs" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export type ProjectFilter =
  | "All"
  | "AI"
  | "Games"
  | "Healthcare"
  | "Data"
  | "Frontend"
  | "Developer Tools"
  | "Sports";

export const PROJECT_FILTERS: ProjectFilter[] = [
  "All",
  "AI",
  "Games",
  "Healthcare",
  "Data",
  "Frontend",
  "Developer Tools",
  "Sports",
];

export interface SignalItem {
  label: string;
  description: string;
}

export const SIGNAL_GRID: SignalItem[] = [
  { label: "Frontend Engineering", description: "React, Next.js, and performance-obsessed UI work." },
  { label: "Full-Stack Systems", description: "End-to-end product delivery from database to browser." },
  { label: "AI Applications", description: "LLM-powered features, agents, and provider-agnostic tooling." },
  { label: "Healthcare Workflows", description: "Compliance-aware systems for sensitive clinical and claims data." },
  { label: "Data Pipelines", description: "Warehouse design, SQL marts, and data quality checks." },
  { label: "Performance Optimization", description: "Core Web Vitals, caching, and measurable speed gains." },
  { label: "Code Review and Quality", description: "Risk analysis, test coverage, and senior-level review discipline." },
  { label: "Sports Simulation", description: "Game state engines and season/career simulation logic." },
  { label: "Product Strategy", description: "Turning ambiguous problems into scoped, shippable plans." },
  { label: "Engineering Leadership", description: "Mentoring, architecture ownership, and delivery accountability." },
];

export interface StrengthPillar {
  title: string;
  description: string;
  tags: string[];
}

export const STRENGTH_PILLARS: StrengthPillar[] = [
  {
    title: "AI-Powered Product Engineering",
    description:
      "Designing provider-agnostic AI layers, agentic workflows, and LLM-backed features that stay swappable between mock, OpenAI-ready, and Claude-ready providers.",
    tags: ["AI Applications", "Product Strategy"],
  },
  {
    title: "Healthcare & Data Systems",
    description:
      "Building compliance-aware pipelines and warehouse marts, with masked identifiers, audit logging, and data quality checks treated as first-class requirements.",
    tags: ["Healthcare Workflows", "Data Pipelines"],
  },
  {
    title: "Frontend Performance & Craft",
    description:
      "Shipping accessible, cinematic interfaces that hold up on Core Web Vitals, not just in a design file, using Server Components and disciplined client-side JavaScript.",
    tags: ["Frontend Engineering", "Performance Optimization"],
  },
  {
    title: "Engineering Leadership & Quality",
    description:
      "Bringing senior-level code review discipline, full-stack ownership, and delivery accountability to every project, from a shopping app to a sports simulation engine.",
    tags: ["Code Review and Quality", "Engineering Leadership", "Full-Stack Systems"],
  },
];
