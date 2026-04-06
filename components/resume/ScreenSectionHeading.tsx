import type { LucideIcon } from "lucide-react";

interface ScreenSectionHeadingProps {
  icon: LucideIcon;
  title: string;
}

export function ScreenSectionHeading({
  icon: Icon,
  title,
}: ScreenSectionHeadingProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-5 w-5 text-accent" />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}
