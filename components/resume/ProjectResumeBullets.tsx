import { projects } from "@/lib/projects";

export function ProjectResumeBullets() {
  return (
    <ul className="space-y-4">
      {projects.map((project) => (
        <li key={project.id} className="flex items-start gap-3 text-sm leading-relaxed text-fog-dim">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
          <span>
            <span className="font-medium text-bright">{project.title}: </span>
            {project.resumeBullet}
          </span>
        </li>
      ))}
    </ul>
  );
}
