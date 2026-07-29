import { Timeline, type TimelineItem } from "@/components/ui/Timeline";
import { EXPERIENCE } from "@/lib/resume";

const items: TimelineItem[] = EXPERIENCE.map((entry) => ({
  title: `${entry.role} · ${entry.company}`,
  period: entry.period,
  description: entry.description,
}));

export function ExperienceHighlights() {
  return <Timeline items={items} />;
}
