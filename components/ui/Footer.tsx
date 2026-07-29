import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-steel bg-void">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-sm font-semibold text-bright">
              <span className="text-cyan" aria-hidden="true">{"//"}</span> {SITE_NAME}
            </p>
            <p className="mt-2 max-w-sm text-sm text-fog-dim">{siteConfig.description}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="console-text text-xs uppercase tracking-wide text-fog-dim hover:text-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={siteConfig.social.github}
              className="text-fog-dim hover:text-cyan"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={siteConfig.social.linkedin}
              className="text-fog-dim hover:text-cyan"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="text-fog-dim hover:text-cyan"
            >
              {siteConfig.social.email}
            </a>
          </div>
        </div>

        <div className="playbook-line mt-8" aria-hidden="true" />

        <p className="console-text mt-6 text-xs text-fog-dim">
          © {new Date().getFullYear()} {SITE_NAME}. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
