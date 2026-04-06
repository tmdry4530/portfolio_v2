import type { ReactNode } from "react";

interface PrintSectionProps {
  title: string;
  children: ReactNode;
  bordered?: boolean;
}

export function PrintSection({
  title,
  children,
  bordered = true,
}: PrintSectionProps) {
  return (
    <section
      className={`resume-print-section py-4 ${
        bordered ? "border-b border-[#e5e7eb]" : ""
      }`}
    >
      <h2 className="text-[11px] font-bold tracking-[0.14em] text-[#3b82f6]">
        {title}
      </h2>
      {children}
    </section>
  );
}
