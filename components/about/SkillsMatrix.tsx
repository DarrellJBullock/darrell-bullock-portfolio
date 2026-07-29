import { STRENGTH_PILLARS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function SkillsMatrix() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {STRENGTH_PILLARS.map((pillar) => (
        <Card key={pillar.title}>
          <h3 className="font-display text-base font-semibold text-bright">{pillar.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-fog-dim">{pillar.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {pillar.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
