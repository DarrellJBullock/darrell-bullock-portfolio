import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { CommandConsole } from "@/components/ui/CommandConsole";
import { CommandCenterBackground } from "@/components/home/CommandCenterBackground";
import { HeroAvatar } from "@/components/home/HeroAvatar";

const BOOT_LINES = [
  "engineering_systems: online",
  "domains: ai · healthcare · data · frontend · sports",
  "status: accepting new missions",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-steel">
      <CommandCenterBackground />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28 lg:px-8">
        <div>
          <p className="console-text mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs uppercase tracking-widest text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-blip-pulse" />
            Engineering Command Center
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-bright sm:text-5xl lg:text-6xl">
            {siteConfig.heroHeadline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog-dim">
            {siteConfig.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={siteConfig.primaryCta.href} variant="primary">
              {siteConfig.primaryCta.label}
            </Button>
            <Button href={siteConfig.secondaryCta.href} variant="secondary">
              {siteConfig.secondaryCta.label}
            </Button>
          </div>

          <CommandConsole lines={BOOT_LINES} className="mt-10 max-w-md" />
        </div>

        <HeroAvatar />
      </div>
    </section>
  );
}
