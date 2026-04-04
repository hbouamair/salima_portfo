import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const idx = blogPosts.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? blogPosts[idx - 1] : null;
  const next = idx < blogPosts.length - 1 ? blogPosts[idx + 1] : null;
  const hero = post.coverHero ?? post.image;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* ── Full-bleed hero ── */}
      <div className="relative h-[55vh] min-h-[340px] w-full sm:h-[65vh] lg:h-[75vh]">
        <Image
          src={hero}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/50 via-transparent to-transparent" />

        {/* Back button over hero */}
        <div className="absolute top-28 left-0 w-full sm:top-32">
          <div className="mx-auto max-w-4xl section-padding">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to journal
            </Link>
          </div>
        </div>

        {/* Title overlay at bottom of hero */}
        <div className="absolute inset-x-0 bottom-0 pb-12 sm:pb-16">
          <div className="mx-auto max-w-4xl section-padding">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent backdrop-blur-sm">
                {post.category}
              </span>
              <time className="text-[11px] uppercase tracking-wider text-white/60" dateTime={post.date}>
                {post.date}
              </time>
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <article className="relative mx-auto max-w-4xl section-padding py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          {/* Main content */}
          <div>
            {/* Lead paragraph */}
            <p className="text-lg leading-relaxed text-text-secondary sm:text-xl sm:leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-3 h-px w-16 bg-accent/40" />

            {/* Body */}
            <div className="mt-10 space-y-6">
              {post.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-[1.8] text-text-secondary/90">
                  {p}
                </p>
              ))}
            </div>

            {/* Blockquote */}
            {post.blockquote && (
              <blockquote className="relative my-14 py-8 pl-8 sm:pl-10">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-transparent" />
                <span className="absolute -left-2 -top-4 font-display text-6xl text-accent/15 select-none">
                  &ldquo;
                </span>
                <p className="font-display text-xl font-light italic leading-relaxed text-text-primary/85 sm:text-2xl">
                  {post.blockquote}
                </p>
              </blockquote>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:pt-2">
            <div className="sticky top-28 space-y-8">
              {/* Author card */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/images/1.jpeg"
                      alt={site.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{site.name}</p>
                    <p className="text-xs text-text-muted">Fashion Model</p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-text-muted">
                  Moroccan fashion model based in Casablanca. Editorial, campaigns, and creative collaborations.
                </p>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:text-accent-light"
                >
                  Follow on Instagram
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Post info */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm">
                <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted mb-4">
                  Post details
                </h4>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-text-muted text-xs">Published</dt>
                    <dd className="mt-0.5 text-text-secondary">{post.date}</dd>
                  </div>
                  <div>
                    <dt className="text-text-muted text-xs">Category</dt>
                    <dd className="mt-0.5 text-text-secondary">{post.category}</dd>
                  </div>
                  <div>
                    <dt className="text-text-muted text-xs">Reading time</dt>
                    <dd className="mt-0.5 text-text-secondary">
                      {Math.max(2, Math.ceil(post.paragraphs.join(" ").split(" ").length / 200))} min read
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Share / CTA */}
              <Link
                href="/#contact"
                className="flex items-center justify-center gap-2 rounded-2xl border border-accent/20 bg-accent/5 px-5 py-3.5 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent/10 hover:border-accent/40"
              >
                Work with Salima
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {/* ── Navigation ── */}
      <nav className="border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl section-padding">
          <div className="grid gap-0 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex flex-col border-b border-white/[0.04] py-10 pr-6 transition-colors hover:bg-white/[0.01] sm:border-b-0 sm:border-r"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
                  Previous article
                </span>
                <span className="mt-3 font-display text-lg font-light text-text-primary transition-colors group-hover:text-accent sm:text-xl">
                  {prev.title}
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors group-hover:text-accent">
                  <svg className="h-3 w-3 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Read
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex flex-col items-end py-10 pl-6 text-right transition-colors hover:bg-white/[0.01]"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
                  Next article
                </span>
                <span className="mt-3 font-display text-lg font-light text-text-primary transition-colors group-hover:text-accent sm:text-xl">
                  {next.title}
                </span>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-text-muted transition-colors group-hover:text-accent">
                  Read
                  <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
