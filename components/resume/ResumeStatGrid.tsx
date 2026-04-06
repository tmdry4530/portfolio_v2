interface ResumeStatGridProps {
  featuredProjectCount: number;
  experienceCount: number;
  totalSkillCount: number;
}

const stats = (
  featuredProjectCount: number,
  experienceCount: number,
  totalSkillCount: number,
) => [
  { label: "Featured Projects", value: featuredProjectCount },
  { label: "Experience Entries", value: experienceCount },
  { label: "Skills & Tools", value: `${totalSkillCount}+` },
];

export function ResumeStatGrid({
  featuredProjectCount,
  experienceCount,
  totalSkillCount,
}: ResumeStatGridProps) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-3">
      {stats(featuredProjectCount, experienceCount, totalSkillCount).map(
        (stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-background/45 px-4 py-3"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
        ),
      )}
    </div>
  );
}
