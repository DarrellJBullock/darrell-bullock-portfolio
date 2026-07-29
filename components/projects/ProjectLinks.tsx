import type { Project } from "@/lib/projects";
import { Button } from "@/components/ui/Button";

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-4">
      <Button href={project.githubUrl} variant="secondary">
        View on GitHub
      </Button>
      <Button href={project.liveUrl} variant="ghost">
        Live demo
      </Button>
    </div>
  );
}
