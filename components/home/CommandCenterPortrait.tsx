import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const FINAL_AVATAR_PATH = "images/darrell-command-center-avatar.png";
const REFERENCE_PATHS = ["reference/darrell-reference-1.jpg", "reference/darrell-reference-2.jpg"];

const DOMAIN_TAGS = ["AI", "Healthcare", "Data", "Sports", "Frontend"];

interface CommandCenterPortraitProps {
  size?: "hero" | "compact";
}

function publicFileExists(relativePath: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", relativePath));
  } catch {
    return false;
  }
}

/**
 * Renders the final stylized caricature once it exists at
 * public/images/darrell-command-center-avatar.png. Until then, renders a
 * polished Engineering Command Center placeholder frame so the build never
 * blocks on a missing image asset.
 */
export function CommandCenterPortrait({ size = "hero" }: CommandCenterPortraitProps) {
  const hasFinalAvatar = publicFileExists(FINAL_AVATAR_PATH);
  const referenceCount = REFERENCE_PATHS.filter(publicFileExists).length;

  const dimensions = size === "hero" ? "h-72 w-72 sm:h-80 sm:w-80" : "h-40 w-40";

  return (
    <div
      className={`relative mx-auto ${dimensions}`}
      role="img"
      aria-label="Darrell Bullock Command Center Avatar"
    >
      <div className="hud-frame absolute inset-0 rounded-full" />
      <div
        className="absolute inset-0 animate-radar-spin rounded-full opacity-70"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(76,231,224,0.35), transparent 18%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-3 overflow-hidden rounded-full border border-steel bg-panel">
        {hasFinalAvatar ? (
          <Image
            src={`/${FINAL_AVATAR_PATH}`}
            alt="Stylized illustrated portrait of Darrell Bullock inside an Engineering Command Center"
            fill
            sizes="(min-width: 640px) 320px, 288px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-panel-soft to-panel">
            <span className="font-display text-4xl font-semibold text-cyan text-glow-cyan">
              DB
            </span>
            <span className="console-text text-[10px] uppercase tracking-widest text-fog-dim">
              Command Center Avatar
            </span>
          </div>
        )}
      </div>

      {size === "hero" &&
        DOMAIN_TAGS.map((tag, i) => {
          const angle = (i / DOMAIN_TAGS.length) * 2 * Math.PI - Math.PI / 2;
          const radius = 46;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <span
              key={tag}
              className="console-text absolute rounded-full border border-cyan/40 bg-void/90 px-2 py-0.5 text-[10px] uppercase tracking-wide text-cyan"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              {tag}
            </span>
          );
        })}

      <p className="console-text absolute -bottom-8 left-1/2 w-full -translate-x-1/2 text-center text-[10px] uppercase tracking-widest text-fog-dim">
        {hasFinalAvatar
          ? "Darrell Bullock Command Center Avatar"
          : `Placeholder Avatar · Reference assets linked: ${referenceCount}/${REFERENCE_PATHS.length}`}
      </p>
    </div>
  );
}
