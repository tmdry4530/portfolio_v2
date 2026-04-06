import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chamdom.dev"),
  title: "Chamdom Portfolio | 프론트엔드 · 풀스택 · 블록체인 개발",
  description:
    "프론트엔드, 풀스택, 블록체인 개발을 아우르는 Chamdom의 포트폴리오입니다.",
  keywords: [
    "포트폴리오",
    "프론트엔드",
    "풀스택",
    "블록체인",
    "개발자",
    "React",
    "Next.js",
    "Solidity",
    "Web3",
  ],
  authors: [{ name: "Chamdom", url: "https://github.com/tmdry4530" }],
  creator: "Chamdom",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "Chamdom Portfolio",
    description:
      "프론트엔드, 풀스택, 블록체인 개발을 아우르는 Chamdom의 포트폴리오입니다.",
    siteName: "Chamdom Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamdom Portfolio",
    description:
      "프론트엔드, 풀스택, 블록체인 개발을 아우르는 Chamdom의 포트폴리오입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/devicon.min.css"
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
