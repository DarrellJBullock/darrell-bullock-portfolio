import { TechPill } from "@/components/ui/TechPill";

export function ProjectStack({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technology stack">
      {stack.map((tech) => (
        <li key={tech}>
          <TechPill label={tech} />
        </li>
      ))}
    </ul>
  );
}
