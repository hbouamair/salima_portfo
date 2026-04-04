import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPortfolioBySlug, portfolioItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return { title: "Project" };
  return {
    title: item.title,
    description: `${item.title} — ${item.category}. ${site.name}.`,
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) notFound();

  const idx = portfolioItems.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? portfolioItems[idx - 1] : null;
  const next =
    idx < portfolioItems.length - 1 ? portfolioItems[idx + 1] : null;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* ── Full-bleed hero image ── */}
      <div className="relative h-[65vh] min-h-[400px] w-full sm:h-[75vh] lg:h-[85vh]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 to-transparent" />

        {/* Back button */}
        <div className="absolute top-28 left-0 z-10 section-padding sm:top-32">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:bg-black/50"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            All work
          </Link>
        </div>

        {/* Title overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 section-padding pb-10 sm:pb-14 lg:pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                {item.category}
              </p>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-light leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              {item.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="mx-auto max-w-7xl section-padding">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-3 lg:gap-20">
          {/* Main content column */}
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-text-secondary sm:text-xl sm:leading-relaxed">
              {item.description ??
                "A showcase piece from the portfolio. Campaign story, credits, and publication details coming soon."}
            </p>

            {/* Decorative divider */}
            <div className="my-10 flex items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
              <span className="h-px flex-1 bg-border" />
            </div>

            {/* The image once more — full width inside card */}
            <div className="overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:pt-2">
            <div className="sticky top-32 space-y-8">
              {/* Project details card */}
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-text-muted">
                  Project details
                </h3>

                <dl className="mt-6 space-y-5 text-sm">
                  <div className="flex items-start justify-between">
                    <dt className="text-text-muted">Role</dt>
                    <dd className="text-right font-medium text-text-primary">
                      Fashion Model
                    </dd>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-start justify-between">
                    <dt className="text-text-muted">Category</dt>
                    <dd className="text-right font-medium text-text-primary">
                      {item.category}
                    </dd>
                  </div>
                  <div className="h-px bg-border" />
                  {item.client && (
                    <>
                      <div className="flex items-start justify-between">
                        <dt className="text-text-muted">Client</dt>
                        <dd className="text-right font-medium text-text-primary">
                          {item.client}
                        </dd>
                      </div>
                      <div className="h-px bg-border" />
                    </>
                  )}
                  {item.year && (
                    <div className="flex items-start justify-between">
                      <dt className="text-text-muted">Year</dt>
                      <dd className="text-right font-medium text-text-primary">
                        {item.year}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-accent/20 bg-accent/[0.05] p-6 text-center sm:p-8">
                <p className="text-sm font-medium text-text-primary">
                  Want to create something like this?
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  Bookings &amp; collaborations welcome
                </p>
                <a
                  href="/contact"
                  className="btn-primary mt-5 block w-full text-center"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Prev / Next navigation ── */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Previous */}
            {prev ? (
              <Link
                href={`/portfolio/${prev.slug}`}
                className="group relative flex items-center gap-6 overflow-hidden py-10 pr-6 sm:border-r sm:border-border"
              >
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={prev.image}
                    alt={prev.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-text-muted">
                    Previous
                  </p>
                  <p className="mt-1 font-display text-lg font-light text-text-primary transition-colors group-hover:text-accent">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* Next */}
            {next ? (
              <Link
                href={`/portfolio/${next.slug}`}
                className="group relative flex items-center justify-end gap-6 overflow-hidden py-10 pl-6 text-right"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-text-muted">
                    Next
                  </p>
                  <p className="mt-1 font-display text-lg font-light text-text-primary transition-colors group-hover:text-accent">
                    {next.title}
                  </p>
                </div>
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={next.image}
                    alt={next.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="80px"
                  />
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
