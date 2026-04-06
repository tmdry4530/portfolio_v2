import type { Metadata } from "next";
import PortfolioPage from "@/components/portfolio/portfolio-page";
import { web3Metadata, web3Portfolio } from "@/lib/portfolio/web3";

export const metadata: Metadata = web3Metadata;

export default function Web3PortfolioPage() {
  return <PortfolioPage content={web3Portfolio} />;
}
