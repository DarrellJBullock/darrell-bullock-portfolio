import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="glass-panel rounded-lg px-8 py-14">
          <p className="console-text text-xs uppercase tracking-widest text-cyan">
            Open Channel
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-bright sm:text-4xl">
            Building something that needs senior engineering ownership?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-fog-dim">{siteConfig.availability}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary">
              Contact Me
            </Button>
            <Button href="/projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
