import { RESUME_SKILLS } from "@/lib/resume";
import { TechPill } from "@/components/ui/TechPill";

export function SkillCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {RESUME_SKILLS.map((skill) => (
        <TechPill key={skill} label={skill} />
      ))}
    </div>
  );
}
