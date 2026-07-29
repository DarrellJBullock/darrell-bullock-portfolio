import { Card } from "@/components/ui/Card";

interface MetricCardProps {
  value: string;
  label: string;
  detail?: string;
}

export function MetricCard({ value, label, detail }: MetricCardProps) {
  return (
    <Card className="text-center">
      <p className="font-display text-3xl font-semibold text-cyan text-glow-cyan sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-bright">{label}</p>
      {detail && <p className="mt-1 text-xs text-fog-dim">{detail}</p>}
    </Card>
  );
}
