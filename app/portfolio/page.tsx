import Image from "next/image";
import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { portfolioItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Selected work and campaigns — ${site.name}.`,
};

const heroImages = portfolioItems.slice(0, 4);

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-accent/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl section-padding">
          {/* Top label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <p className="label text-accent">Portfolio</p>
          </div>

          {/* Headline */}
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-light leading-[1.1] text-text-primary sm:text-6xl lg:text-7xl">
            Selected{" "}
            <span className="text-accent">work</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            A curated collection of editorial, campaign, and fashion projects —
            from Morocco to the international stage.
          </p>

          {/* Featured strip — 4 stacked images with tilt */}
          <div className="mt-16 hidden lg:block">
            <div className="flex items-end gap-5">
              {heroImages.map((item, idx) => {
                const heights = ["h-72", "h-96", "h-80", "h-64"];
                const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
                return (
                  <div
                    key={item.slug}
                    className={`relative ${heights[idx]} w-56 flex-shrink-0 overflow-hidden rounded-2xl ${rotations[idx]} shadow-xl shadow-black/20 transition-transform duration-500 hover:rotate-0 hover:scale-105`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <p className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                      {item.title}
                    </p>
                  </div>
                );
              })}

              {/* Counter chip */}
              <div className="ml-4 mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-border" />
                <p className="text-sm text-text-muted">
                  {portfolioItems.length} projects
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: horizontal scroll strip */}
          <div className="mt-12 flex gap-3 overflow-x-auto pb-4 lg:hidden scrollbar-hide">
            {heroImages.map((item) => (
              <div
                key={item.slug}
                className="relative h-52 w-40 flex-shrink-0 overflow-hidden rounded-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl section-padding">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ── Grid ── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl section-padding">
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="relative overflow-hidden border-t border-border py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-7xl section-padding text-center">
          <h2 className="font-display text-3xl font-light text-text-primary sm:text-4xl">
            Interested in working together?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-secondary">
            Let&apos;s create something beautiful. Get in touch for bookings, collaborations, or inquiries.
          </p>
          <a
            href="/contact"
            className="btn-primary mt-8 inline-block"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
