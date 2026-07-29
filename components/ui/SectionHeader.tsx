import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className="console-text mb-3 text-xs uppercase tracking-[0.2em] text-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold text-bright sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-fog-dim">{description}</p>}
    </div>
  );
}
