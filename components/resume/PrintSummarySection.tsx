import { PrintSection } from "./PrintSection";

interface PrintSummarySectionProps {
  paragraphs: string[];
}

export function PrintSummarySection({
  paragraphs,
}: PrintSummarySectionProps) {
  return (
    <PrintSection title="SUMMARY">
      <div className="mt-3 space-y-3 text-[12px] leading-[1.7] text-[#4b5563]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </PrintSection>
  );
}
