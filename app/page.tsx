import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { blogPosts } from "@/lib/blog";
import { portfolioItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3);
  const featuredWork = portfolioItems.slice(0, 6);

  return (
    <>
      <section className="relative -mt-16 min-h-[92vh] overflow-hidden pt-16 sm:-mt-[4.25rem] sm:pt-[4.25rem]">
        <div className="absolute inset-0">
          <Image
            src="/images/1.jpeg"
            alt=""
            fill
            priority
            className="object-cover animate-slow-pan"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-[#0c0a09]" />
          <div className="absolute inset-0 bg-grid-fade opacity-90" />
        </div>
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.35em] text-amber-200/90 opacity-0 [animation-delay:0.1s]">
            {site.name}
          </p>
          <h1 className="font-display mt-4 max-w-4xl animate-fade-up text-4xl font-light leading-[1.08] tracking-tight text-white opacity-0 [animation-delay:0.2s] sm:text-5xl md:text-6xl lg:text-7xl">
            {site.tagline}
          </h1>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4 opacity-0 [animation-delay:0.35s]">
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              About
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 px-6 py-3 text-sm font-semibold text-stone-900 shadow-lg shadow-amber-900/30 transition hover:brightness-105"
            >
              View portfolio
            </Link>
          </div>
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-stone-400 transition hover:text-white"
            aria-label="Scroll to content"
          >
            <span className="h-8 w-px bg-gradient-to-b from-transparent via-stone-500 to-transparent" />
            Scroll
          </a>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-[#fafaf9] py-20 text-stone-900 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-light sm:text-4xl md:text-5xl">
            About me
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            {site.about}
          </p>
          <div className="mt-10 flex justify-center">
            <Image
              src="/images/signature.png"
              alt="Signature"
              width={280}
              height={80}
              className="h-auto w-[min(40%,220px)] opacity-90"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/images/bg-pattern.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#0c0a09]/88" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {site.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm"
              >
                <p className="font-display text-4xl font-light text-amber-200 md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-stone-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 bg-[#fafaf9] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-light text-stone-900 sm:text-4xl md:text-5xl">
              Best projects
            </h2>
            <p className="mt-4 text-stone-600">
              A curated selection of recent work — editorial, campaigns, and
              collaborations.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-200 shadow-sm ring-1 ring-black/5 transition hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition group-hover:from-black/80" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider text-amber-200/90">
                    {item.category}
                  </p>
                  <p className="font-display mt-1 text-xl font-light">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
            >
              See all work
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url(/images/bg-pattern.jpg)",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-[#0c0a09]/90" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {site.quotes.map((q) => (
              <blockquote
                key={q.cite}
                className="border-l-2 border-amber-400/60 pl-8"
              >
                <p className="font-display text-xl font-light leading-relaxed text-stone-100 sm:text-2xl">
                  “{q.text}”
                </p>
                <cite className="mt-4 block text-sm font-medium not-italic text-amber-200/80">
                  — {q.cite}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            Brands & partners
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-80 grayscale transition hover:grayscale-0">
            {site.partners.map((p) => (
              <div
                key={p.src}
                className="relative h-10 w-28 sm:h-12 sm:w-32"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="scroll-mt-24 bg-[#f5f5f4] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-light text-stone-900 sm:text-4xl md:text-5xl">
              Latest from the blog
            </h2>
            <p className="mt-4 text-stone-600">
              Notes on craft, shoots, and the industry.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg"
              >
                <Link href={`/blog/${post.slug}`} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-800 backdrop-blur">
                    {post.category}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs text-stone-500">{post.date}</time>
                  <h3 className="font-display mt-2 text-xl font-light text-stone-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-amber-700"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-medium text-stone-900 underline-offset-4 hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              All posts
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-light sm:text-4xl">
                Let&apos;s work together
              </h2>
              <p className="mt-4 text-stone-400">
                For bookings, campaigns, and collaborations — reach out with a
                few details and I&apos;ll get back to you.
              </p>
              <ul className="mt-10 space-y-4 text-sm text-stone-300">
                <li>
                  <span className="block text-xs uppercase tracking-wider text-stone-500">
                    Address
                  </span>
                  {site.contact.address}
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-stone-500">
                    Phone
                  </span>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="hover:text-amber-200"
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-wider text-stone-500">
                    Email
                  </span>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="hover:text-amber-200"
                  >
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
