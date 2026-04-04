import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Articles and updates from ${site.name}.`,
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* ── Hero header ── */}
      <section className="relative overflow-hidden border-b border-white/[0.04] bg-bg-surface">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-1/3 top-0 h-[50vh] w-[50vh] rounded-full bg-accent/[0.03] blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl section-padding pb-16 pt-32 sm:pb-20 sm:pt-40">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <p className="label text-accent tracking-[0.3em]">Journal</p>
          </div>
          <h1 className="mt-5 font-display text-5xl font-light leading-[1.05] tracking-tight text-text-primary sm:text-6xl md:text-7xl">
            The Blog
          </h1>
          <p className="mt-5 max-w-lg text-lg text-text-secondary leading-relaxed">
            Behind the scenes, creative insights, and stories from the world
            of fashion — straight from the set.
          </p>

          {/* Category pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-text-secondary"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured post ── */}
      <section className="mx-auto max-w-7xl section-padding py-16 sm:py-20">
        <article className="group">
          <Link
            href={`/blog/${featured.slug}`}
            className="grid gap-0 overflow-hidden rounded-3xl bg-bg-surface ring-1 ring-white/[0.04] transition-all duration-500 hover:ring-accent/20 lg:grid-cols-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={featured.image}
                alt=""
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {featured.category}
                </span>
                <time className="text-[11px] uppercase tracking-wider text-text-muted">
                  {featured.date}
                </time>
              </div>
              <h2 className="mt-5 font-display text-2xl font-light leading-snug text-text-primary sm:text-3xl lg:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed line-clamp-3">
                {featured.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors group-hover:text-accent-light">
                Read article
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </article>
      </section>

      {/* ── All posts grid ── */}
      <section className="mx-auto max-w-7xl section-padding pb-24 sm:pb-32">
        <div className="mb-12 flex items-center gap-4">
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
            All articles
          </h3>
          <span className="h-px flex-1 bg-white/[0.06]" />
          <span className="text-xs text-text-muted">{blogPosts.length} posts</span>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl bg-bg-surface ring-1 ring-white/[0.04] transition-all duration-500 hover:ring-accent/20 hover:-translate-y-1"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[3/2] overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                  {post.category}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <time className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                  {post.date}
                </time>
                <h3 className="mt-3 font-display text-lg font-light leading-snug text-text-primary sm:text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors duration-300 hover:text-accent"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-text-muted transition-colors group-hover:text-accent"
                >
                  Read more
                  <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
