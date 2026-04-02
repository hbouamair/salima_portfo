import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPortfolioBySlug,
  portfolioItems,
} from "@/lib/portfolio";
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
    <main className="min-h-screen bg-[#fafaf9] pb-20 pt-8 sm:pb-28 sm:pt-12">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
        >
          ← All work
        </Link>
        <header className="mt-8">
          <p className="text-xs font-medium uppercase tracking-wider text-amber-700">
            {item.category}
          </p>
          <h1 className="font-display mt-2 text-4xl font-light text-stone-900 sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">
            A showcase piece from the portfolio. Replace this copy with your
            campaign story, credits, and publication details when you are ready.
          </p>
        </header>
        <div className="relative mt-12 aspect-[16/10] overflow-hidden rounded-2xl bg-stone-200 shadow-lg ring-1 ring-black/5">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
        <dl className="mt-10 grid gap-4 border-t border-stone-200 pt-10 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-medium text-stone-900">Role</dt>
            <dd className="mt-1 text-stone-600">Fashion model</dd>
          </div>
          <div>
            <dt className="font-medium text-stone-900">Category</dt>
            <dd className="mt-1 text-stone-600">{item.category}</dd>
          </div>
        </dl>
        <nav className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 pt-10">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="text-sm font-medium text-stone-700 hover:text-stone-900"
            >
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="text-sm font-medium text-stone-700 hover:text-stone-900"
            >
              {next.title} →
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
