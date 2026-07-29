import { CommandCenterPortrait } from "@/components/home/CommandCenterPortrait";

export function AvatarPanel() {
  return (
    <div className="glass-panel flex flex-col items-center rounded-lg p-8 pb-14">
      <div className="pb-8">
        <CommandCenterPortrait size="compact" />
      </div>
      <p className="mt-2 text-center text-sm text-fog-dim">
        Senior Software Engineer · AI Products · Healthcare Data · Frontend Performance
      </p>
    </div>
  );
}
