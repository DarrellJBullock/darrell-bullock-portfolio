import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { RESUME_TITLE, RESUME_LOCATION, RESUME_SUMMARY } from "@/lib/resume";

export function ResumeSummary() {
  return (
    <div className="glass-panel rounded-lg p-8">
      <p className="console-text text-xs uppercase tracking-widest text-cyan">Resume</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-bright sm:text-4xl">
        {siteConfig.name}
      </h1>
      <p className="mt-2 text-sm font-medium text-cyan">{RESUME_TITLE}</p>
      <p className="console-text mt-1 text-xs text-fog-dim">{RESUME_LOCATION}</p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-fog-dim">{RESUME_SUMMARY}</p>

      <div className="mt-6 flex flex-wrap gap-4">
        <Button href="/resume.pdf" variant="primary">
          Download resume (PDF)
        </Button>
        <Button href={siteConfig.social.linkedin} variant="secondary">
          LinkedIn
        </Button>
        <Button href={siteConfig.social.github} variant="ghost">
          GitHub
        </Button>
      </div>
    </div>
  );
}
