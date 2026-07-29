import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { EmptyState } from "@/components/ui/EmptyState";

interface ProjectScreenshotProps {
  slug: string;
  title: string;
}

function screenshotExists(slug: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "images", "screenshots", `${slug}.jpg`));
  } catch {
    return false;
  }
}

export function ProjectScreenshot({ slug, title }: ProjectScreenshotProps) {
  if (!screenshotExists(slug)) {
    return (
      <EmptyState
        title="Screenshots coming soon"
        description="Live product screenshots will be added here once this project reaches a public release milestone."
      />
    );
  }

  return (
    <div className="glass-panel overflow-hidden rounded-lg border border-steel">
      <Image
        src={`/images/screenshots/${slug}.jpg`}
        alt={`Screenshot of the ${title} live demo`}
        width={1280}
        height={800}
        className="h-auto w-full"
        sizes="(min-width: 1024px) 800px, 100vw"
      />
    </div>
  );
}
