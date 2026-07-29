import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectSignal } from "@/components/ui/ProjectSignal";
import { AnimatedPanel } from "@/components/ui/AnimatedPanel";
import { SIGNAL_GRID } from "@/lib/constants";

export function SignalGrid() {
  return (
    <section className="border-b border-steel py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Systems Online"
          title="Signal grid"
          description="A live read on where I add the most engineering value, across product, platform, and delivery."
        />

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {SIGNAL_GRID.map((signal, i) => (
            <AnimatedPanel key={signal.label} delay={i * 0.03}>
              <ProjectSignal label={signal.label} description={signal.description} />
            </AnimatedPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
