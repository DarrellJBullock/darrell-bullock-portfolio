"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-steel bg-void/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-wide text-bright"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-cyan" aria-hidden="true">{"//"}</span> {SITE_NAME}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "console-text rounded-md px-4 py-2 text-xs uppercase tracking-wide transition-colors",
                    active ? "text-cyan" : "text-fog-dim hover:text-bright"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-steel text-bright md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform",
                isOpen && "translate-y-[5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-0.5 w-5 bg-current transition-transform",
                isOpen && "-translate-y-[5px] -rotate-45"
              )}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-steel bg-void px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "console-text block rounded-md px-4 py-3 text-sm uppercase tracking-wide",
                      active ? "text-cyan bg-panel" : "text-fog-dim hover:text-bright"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
