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
  return (
    <main className="min-h-screen bg-[#f5f5f4] pb-20 pt-8 sm:pb-28 sm:pt-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-500">
            Journal
          </p>
          <h1 className="font-display mt-3 text-4xl font-light text-stone-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-stone-600">
            Longer reads from the archive, migrated from the original site.
          </p>
        </header>
        <ul className="mt-14 space-y-12">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[21/9] sm:aspect-[2.2/1]"
                >
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-800 backdrop-blur">
                    {post.category}
                  </span>
                </Link>
                <div className="p-6 sm:p-8">
                  <time className="text-xs text-stone-500">{post.date}</time>
                  <h2 className="font-display mt-2 text-2xl font-light text-stone-900 sm:text-3xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-amber-800"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-stone-600">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-stone-900 underline-offset-4 hover:underline"
                  >
                    Continue reading
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
