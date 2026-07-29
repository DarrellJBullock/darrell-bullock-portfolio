import { siteConfig } from "@/lib/site";
import { Card } from "@/components/ui/Card";

export function ContactPanel() {
  return (
    <Card>
      <h2 className="console-text text-xs uppercase tracking-widest text-cyan">Direct Channels</h2>
      <ul className="mt-4 space-y-3 text-sm">
        <li>
          <a href={`mailto:${siteConfig.social.email}`} className="text-bright hover:text-cyan">
            {siteConfig.social.email}
          </a>
        </li>
        <li>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-bright hover:text-cyan"
          >
            GitHub {/* TODO: replace with real GitHub profile URL */}
          </a>
        </li>
        <li>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-bright hover:text-cyan"
          >
            LinkedIn {/* TODO: replace with real LinkedIn profile URL */}
          </a>
        </li>
      </ul>
    </Card>
  );
}
