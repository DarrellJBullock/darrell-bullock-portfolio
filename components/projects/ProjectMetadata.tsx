import type { Project } from "@/lib/projects";
import { Card } from "@/components/ui/Card";
import { ProjectStack } from "@/components/projects/ProjectStack";

export function ProjectMetadata({ project }: { project: Project }) {
  return (
    <Card>
      <h2 className="console-text text-xs uppercase tracking-widest text-cyan">Project Data</h2>

      <dl className="mt-4 space-y-4 text-sm">
        <div>
          <dt className="text-fog-dim">Status</dt>
          <dd className="mt-0.5 font-medium text-bright">{project.status}</dd>
        </div>
        <div>
          <dt className="text-fog-dim">Category</dt>
          <dd className="mt-0.5 font-medium text-bright">{project.category}</dd>
        </div>
        <div>
          <dt className="mb-2 text-fog-dim">Stack</dt>
          <dd>
            <ProjectStack stack={project.stack} />
          </dd>
        </div>
      </dl>
    </Card>
  );
}
