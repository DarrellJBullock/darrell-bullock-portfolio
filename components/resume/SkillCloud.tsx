import { SIGNAL_GRID } from "@/lib/constants";
import { TechPill } from "@/components/ui/TechPill";

export function SkillCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {SIGNAL_GRID.map((signal) => (
        <TechPill key={signal.label} label={signal.label} />
      ))}
    </div>
  );
}
