import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { portfolioItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Selected work and campaigns — ${site.name}.`,
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] pb-20 pt-8 sm:pb-28 sm:pt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-500">
            Portfolio
          </p>
          <h1 className="font-display mt-3 text-4xl font-light text-stone-900 sm:text-5xl">
            Work
          </h1>
          <p className="mt-4 text-stone-600">
            Filter by category or open a project for more context.
          </p>
        </header>
        <div className="mt-14">
          <PortfolioGrid items={portfolioItems} />
        </div>
      </div>
    </main>
  );
}
