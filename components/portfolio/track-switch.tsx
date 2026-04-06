import Link from "next/link";
import { cn } from "@/lib/utils";
import type { PortfolioTrack } from "@/lib/portfolio/types";

interface TrackSwitchProps {
  currentTrack: PortfolioTrack;
  className?: string;
  onNavigate?: () => void;
}

const TRACKS: Array<{
  href: string;
  label: string;
  track: PortfolioTrack;
}> = [
  { href: "/", label: "Web2", track: "web2" },
  { href: "/web3", label: "Web3", track: "web3" },
];

export default function TrackSwitch({
  currentTrack,
  className,
  onNavigate,
}: TrackSwitchProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/10 bg-secondary/60 p-1 backdrop-blur-xl",
        className,
      )}
      aria-label="포트폴리오 트랙 전환"
    >
      {TRACKS.map((item) => {
        const isActive = item.track === currentTrack;

        return (
          <Link
            key={item.track}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-mono transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive
                ? "bg-accent text-background shadow-glow-sm"
                : "text-secondary-foreground hover:bg-white/5 hover:text-accent",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
