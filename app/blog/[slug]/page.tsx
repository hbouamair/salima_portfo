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
    <main className="min-h-screen bg-[#fafaf9]">
      <div className="relative -mt-16 aspect-[21/9] min-h-[200px] w-full sm:aspect-[3/1] sm:min-h-[280px]">
        <Image
          src={hero}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf9] via-transparent to-black/20" />
      </div>
      <article className="relative mx-auto max-w-2xl px-4 pb-20 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-block text-sm font-medium text-stone-600 transition hover:text-stone-900"
        >
          ← All posts
        </Link>
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
            <time dateTime={post.date}>{post.date}</time>
            <span className="rounded-full bg-stone-200 px-2.5 py-0.5 font-medium text-stone-700">
              {post.category}
            </span>
          </div>
          <h1 className="font-display mt-4 text-3xl font-light leading-tight text-stone-900 sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
        </header>
        <div className="prose prose-stone mt-10 max-w-none prose-p:text-stone-600 prose-p:leading-relaxed">
          {post.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {post.blockquote ? (
            <blockquote className="border-l-2 border-amber-400/70 pl-6 font-display text-lg italic text-stone-700">
              {post.blockquote}
            </blockquote>
          ) : null}
        </div>
        <p className="mt-10 text-sm text-stone-500">
          — {site.name}
        </p>
        <nav className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 pt-10">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="max-w-[45%] text-sm font-medium text-stone-700 hover:text-stone-900"
            >
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="max-w-[45%] text-right text-sm font-medium text-stone-700 hover:text-stone-900"
            >
              {next.title} →
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
