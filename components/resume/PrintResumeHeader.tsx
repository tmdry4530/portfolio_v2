import type { ContactInfo, SocialLink } from "@/lib/data";

interface PrintResumeHeaderProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

export function PrintResumeHeader({
  contactInfo,
  socialLinks,
}: PrintResumeHeaderProps) {
  return (
    <header className="border-b border-[#e5e7eb] pb-5">
      <h1 className="text-[28px] font-bold tracking-tight text-[#111827]">
        {contactInfo.name}
      </h1>
      <p className="mt-1 text-[16px] font-semibold text-[#3b82f6]">
        {contactInfo.title}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#4b5563]">
        <a href={`mailto:${contactInfo.email}`} className="hover:underline">
          {contactInfo.email}
        </a>
        {socialLinks.map((link, index) => (
          <div key={link.name} className="flex items-center gap-3">
            {index > 0 && <span className="text-[#9ca3af]">|</span>}
            <a href={link.url} className="text-[#3b82f6] hover:underline">
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </header>
  );
}
