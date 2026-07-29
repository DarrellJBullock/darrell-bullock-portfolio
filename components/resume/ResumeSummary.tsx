import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function ResumeSummary() {
  return (
    <div className="glass-panel rounded-lg p-8">
      <p className="console-text text-xs uppercase tracking-widest text-cyan">Resume</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-bright sm:text-4xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-fog-dim">
        {siteConfig.heroSubheadline} Focused on AI-powered products, healthcare and data systems,
        frontend performance, and senior-level code review and delivery ownership.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        {/* TODO: replace with a real resume PDF in /public and link it here */}
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
