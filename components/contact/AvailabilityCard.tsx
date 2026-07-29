import { siteConfig } from "@/lib/site";
import { Card } from "@/components/ui/Card";

export function AvailabilityCard() {
  return (
    <Card className="border-success/30">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-success animate-blip-pulse" aria-hidden="true" />
        <p className="console-text text-xs uppercase tracking-widest text-success">
          Status: Available
        </p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-fog-dim">{siteConfig.availability}</p>
    </Card>
  );
}
