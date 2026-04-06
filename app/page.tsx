import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/portfolio-page";
import { web2Metadata, web2Portfolio } from "@/lib/portfolio/web2";

export const metadata: Metadata = web2Metadata;

export default function Web2PortfolioPage() {
  return <PortfolioPage content={web2Portfolio} />;
}
