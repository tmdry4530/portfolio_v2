import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { ContactInfo, SocialLink } from "@/lib/data";

interface FooterSectionProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

export default function FooterSection({
  contactInfo,
  socialLinks,
}: FooterSectionProps) {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github size={24} />;
      case "Linkedin":
        return <Linkedin size={24} />;
      case "Twitter":
        return <Twitter size={24} />;
      default:
        return null;
    }
  };

  return (
    <footer className="py-20 text-center relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">다음은 무엇일까요?</h2>
        <p className="text-secondary-foreground mb-8 max-w-md mx-auto">
          현재 새로운 기회를 찾고 있습니다. 함께 일하고 싶으시다면 언제든
          연락주세요.
        </p>
        <a
          href={`mailto:${contactInfo.email}`}
          className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 hover:bg-accent/90 transition-colors font-mono mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${contactInfo.email}로 이메일 보내기`}
        >
          <Mail size={20} aria-hidden="true" />
          안녕하세요
        </a>
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm p-1"
              aria-label={`${link.name} 프로필 보기`}
            >
              {getIconComponent(link.icon)}
            </a>
          ))}
        </div>
        <p className="text-secondary-foreground text-sm">
          Designed & Built by {contactInfo.name}
        </p>
      </div>
    </footer>
  );
}
