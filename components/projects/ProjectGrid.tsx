"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import { PROJECT_FILTERS, type ProjectFilter } from "@/lib/constants";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.filters.includes(filter));
  }, [filter, projects]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {PROJECT_FILTERS.map((option) => {
          const active = option === filter;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={active}
              className={cn(
                "console-text min-h-[44px] rounded-full border px-4 py-2 text-xs uppercase tracking-wide transition-colors",
                active
                  ? "border-cyan bg-cyan/10 text-cyan"
                  : "border-steel text-fog-dim hover:text-bright"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <EmptyState
            title="No projects on this frequency"
            description="Try a different category filter to pick up another signal."
          />
        </div>
      )}
    </div>
  );
}
