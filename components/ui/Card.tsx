import { type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ as: Component = "div", children, className, interactive = false }: CardProps) {
  return (
    <Component
      className={cn(
        "glass-panel rounded-lg p-6",
        interactive &&
          "transition-all duration-300 ease-out hover:border-cyan/50 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(76,231,224,0.15)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
