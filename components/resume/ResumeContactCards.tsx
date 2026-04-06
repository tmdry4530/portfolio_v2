import { Mail } from "lucide-react";
import type { ContactInfo, SocialLink } from "@/lib/data";
import { socialIconMap } from "./constants";
import { compactUrl } from "./utils";

interface ResumeContactCardsProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

export function ResumeContactCards({
  contactInfo,
  socialLinks,
}: ResumeContactCardsProps) {
  return (
    <div className="grid gap-3 text-sm text-secondary-foreground sm:grid-cols-2 lg:min-w-[320px] lg:grid-cols-1">
      <a
        href={`mailto:${contactInfo.email}`}
        className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-background/50 px-4 py-3 transition-colors hover:border-accent/40 hover:text-foreground"
      >
        <Mail className="h-4 w-4 text-accent" />
        <div className="min-w-0">
          <p className="font-medium text-foreground">Email</p>
          <p className="truncate">{contactInfo.email}</p>
        </div>
      </a>

      {socialLinks.map((link) => {
        const Icon = socialIconMap[link.name];

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-background/50 px-4 py-3 transition-colors hover:border-accent/40 hover:text-foreground"
          >
            {Icon ? (
              <Icon className="h-4 w-4 shrink-0 text-accent" />
            ) : (
              <span className="h-4 w-4 text-center text-accent">•</span>
            )}
            <div className="min-w-0">
              <p className="font-medium text-foreground">{link.name}</p>
              <p className="truncate">{compactUrl(link.url)}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
