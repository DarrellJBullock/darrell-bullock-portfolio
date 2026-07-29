import { CommandCenterPortrait } from "@/components/home/CommandCenterPortrait";

export function HeroAvatar() {
  return (
    <div className="relative flex justify-center pb-10">
      <div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-3xl"
        aria-hidden="true"
      />
      <CommandCenterPortrait size="hero" />
    </div>
  );
}
