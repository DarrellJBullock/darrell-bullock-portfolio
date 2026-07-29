import { Card } from "@/components/ui/Card";

const PRINCIPLES = [
  {
    title: "Own the outcome, not just the ticket",
    description:
      "Delivery ownership means understanding why a feature matters, not just shipping what was specced.",
  },
  {
    title: "Review code like you'll maintain it",
    description:
      "Senior-level code review catches risk and test gaps before they become production incidents.",
  },
  {
    title: "Make the ambiguous concrete",
    description:
      "Turning a fuzzy product idea into a scoped, shippable plan is a core part of the job, not a side skill.",
  },
  {
    title: "Mentor through the work itself",
    description:
      "The best mentoring happens in real PRs and real design discussions, not just formal 1:1s.",
  },
];

export function LeadershipPanel() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {PRINCIPLES.map((principle) => (
        <Card key={principle.title}>
          <h3 className="font-display text-base font-semibold text-bright">{principle.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-fog-dim">{principle.description}</p>
        </Card>
      ))}
    </div>
  );
}
