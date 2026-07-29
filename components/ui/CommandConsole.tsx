"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface CommandConsoleProps {
  lines: string[];
  className?: string;
  typingSpeedMs?: number;
}

/**
 * A code-console style reveal: lines type in sequentially like a terminal boot log.
 * Renders all lines instantly when reduced motion is preferred.
 */
export function CommandConsole({ lines, className, typingSpeedMs = 18 }: CommandConsoleProps) {
  const prefersReducedMotion = useReducedMotion();
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (prefersReducedMotion) return;

    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function typeNext() {
      if (cancelled || lineIndex >= lines.length) return;

      const line = lines[lineIndex];
      if (charIndex <= line.length) {
        setCurrentText(line.slice(0, charIndex));
        charIndex += 1;
        timeoutId = setTimeout(typeNext, typingSpeedMs);
      } else {
        setTypedLines((prev) => [...prev, line]);
        setCurrentText("");
        lineIndex += 1;
        charIndex = 0;
        timeoutId = setTimeout(typeNext, typingSpeedMs * 6);
      }
    }

    typeNext();
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [prefersReducedMotion, lines, typingSpeedMs]);

  const visibleLines = prefersReducedMotion ? lines : typedLines;
  const visibleCurrentText = prefersReducedMotion ? "" : currentText;

  return (
    <div
      className={cn(
        "glass-panel console-text rounded-lg p-4 text-xs leading-relaxed text-cyan sm:text-sm",
        className
      )}
      role="status"
      aria-live="polite"
    >
      {visibleLines.map((line, i) => (
        <p key={i} className="text-fog-dim">
          <span className="text-cyan">{">"}</span> {line}
        </p>
      ))}
      {visibleCurrentText && (
        <p className="text-fog-dim">
          <span className="text-cyan">{">"}</span> {visibleCurrentText}
          <span className="cursor-caret">&nbsp;</span>
        </p>
      )}
    </div>
  );
}
