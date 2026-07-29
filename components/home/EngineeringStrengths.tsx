import { STRENGTH_PILLARS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimatedPanel } from "@/components/ui/AnimatedPanel";

export function EngineeringStrengths() {
  return (
    <section className="border-b border-steel bg-panel/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Core Systems"
          title="Where I focus"
          description="Four pillars that show up across every project in this portfolio."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {STRENGTH_PILLARS.map((pillar, i) => (
            <AnimatedPanel key={pillar.title} delay={i * 0.05}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-bright">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog-dim">{pillar.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            </AnimatedPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
