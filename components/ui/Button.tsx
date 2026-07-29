"use client";

import Link from "next/link";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan text-void border border-cyan hover:bg-transparent hover:text-cyan shadow-[0_0_24px_rgba(76,231,224,0.35)]",
  secondary:
    "bg-transparent text-bright border border-steel hover:border-cyan hover:text-cyan",
  ghost: "bg-transparent text-fog border border-transparent hover:text-cyan",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className } = props;
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.28}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold font-display tracking-wide transition-all duration-200 ease-out min-h-[44px] min-w-[44px]",
    VARIANT_STYLES[variant],
    className
  );

  if (props.href) {
    return (
      <Link
        href={props.href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={baseClasses}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={props.onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
