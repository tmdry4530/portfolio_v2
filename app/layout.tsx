import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chamdom Portfolio | 블록체인 & 프론트엔드 개발자",
  description: "블록체인과 프론트엔드 개발을 전문으로 하는 개발자 Chamdom의 포트폴리오입니다. Next.js, React, Solidity 등의 기술 스택으로 다양한 프로젝트를 진행했습니다.",
  keywords: ["포트폴리오", "블록체인", "프론트엔드", "개발자", "React", "Next.js", "Solidity", "Web3"],
  authors: [{ name: "Chamdom", url: "https://github.com/tmdry4530" }],
  creator: "Chamdom",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "Chamdom Portfolio | 블록체인 & 프론트엔드 개발자",
    description: "블록체인과 프론트엔드 개발을 전문으로 하는 개발자 Chamdom의 포트폴리오입니다.",
    siteName: "Chamdom Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamdom Portfolio | 블록체인 & 프론트엔드 개발자",
    description: "블록체인과 프론트엔드 개발을 전문으로 하는 개발자 Chamdom의 포트폴리오입니다.",
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
        <link rel="canonical" href="https://chamdom.dev" />
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
