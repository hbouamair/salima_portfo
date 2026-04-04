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
      {/* ── Hero ── */}
      <section className="relative min-h-screen overflow-hidden bg-bg-primary">
        {/* Background image with low opacity */}
        <div className="absolute inset-0">
          <Image
            src="/images/1.jpeg"
            alt=""
            fill
            priority
            className="object-cover opacity-[0.12]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-bg-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/60" />
        </div>

        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-1/4 -top-1/4 h-[60vh] w-[60vh] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 h-[40vh] w-[40vh] rounded-full bg-accent/[0.04] blur-[100px]" />
        </div>

        <div className="relative mx-auto grid min-h-screen max-w-7xl section-padding lg:grid-cols-2 lg:gap-8">
          {/* Left: Content */}
          <div className="flex flex-col justify-center pb-12 pt-32 lg:pb-0 lg:pt-0">
            <div className="animate-fade-up opacity-0 [animation-delay:0.1s]">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <p className="label text-accent tracking-[0.3em]">Fashion Model</p>
              </div>
            </div>

            <h1 className="mt-7 animate-fade-up opacity-0 [animation-delay:0.2s]">
              <span className="block font-display text-5xl font-light leading-[1.05] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Salima
              </span>
              <span className="mt-1 block font-display text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]" style={{ color: 'var(--accent)' }}>
                Elmahraoui
              </span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-text-secondary animate-fade-up opacity-0 [animation-delay:0.35s] sm:text-lg">
              Moroccan fashion model — crafting visual stories through 
              high-fashion editorials, brand campaigns & creative collaborations.
              Featured in Nataal Media, Bougroug, and more.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up opacity-0 [animation-delay:0.5s]">
              <Link href="/portfolio" className="btn-primary">
                View portfolio
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="#about" className="btn-outline">
                About me
              </a>
            </div>

            {/* Mini stats row */}
            <div className="mt-14 flex items-center gap-10 animate-fade-up opacity-0 [animation-delay:0.65s]">
              <div>
                <p className="font-display text-3xl font-light text-text-primary">21.6K</p>
                <p className="mt-1 text-xs text-text-muted">Instagram followers</p>
              </div>
              <span className="h-10 w-px bg-white/[0.08]" />
              <div>
                <p className="font-display text-3xl font-light text-text-primary">100+</p>
                <p className="mt-1 text-xs text-text-muted">Projects</p>
              </div>
              <span className="hidden sm:block h-10 w-px bg-white/[0.08]" />
              <div className="hidden sm:block">
                <p className="font-display text-3xl font-light text-text-primary">120+</p>
                <p className="mt-1 text-xs text-text-muted">Happy clients</p>
              </div>
            </div>
          </div>

          {/* Right: Image composition */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Main image */}
            <div className="relative z-10 w-[85%] animate-fade-up opacity-0 [animation-delay:0.3s]">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
                <Image
                  src="/images/1.jpeg"
                  alt="Salima Elmahraoui"
                  fill
                  priority
                  className="object-cover animate-slow-zoom"
                  sizes="50vw"
                />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-10 z-20 rounded-2xl border border-white/[0.08] bg-bg-primary/90 p-5 backdrop-blur-xl animate-fade-up opacity-0 [animation-delay:0.7s]">
                <p className="label text-accent mb-1">Latest</p>
                <p className="text-sm font-medium text-text-primary">Bougroug x Nataal Media</p>
                <p className="mt-1 text-xs text-text-muted">Editorial Campaign 2025</p>
              </div>

              {/* Decorative accent ring */}
              <div className="absolute -right-4 -top-4 z-0 h-24 w-24 rounded-full border border-accent/20 animate-fade-in opacity-0 [animation-delay:0.9s]" />
              <div className="absolute -right-8 -top-8 z-0 h-32 w-32 rounded-full border border-accent/10 animate-fade-in opacity-0 [animation-delay:1s]" />
            </div>
          </div>

          {/* Mobile hero image */}
          <div className="relative lg:hidden -mx-5 sm:-mx-8 mb-8">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl mx-5 sm:mx-8">
              <Image
                src="/images/1.jpeg"
                alt="Salima Elmahraoui"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 [animation-delay:1.2s]">
          <span className="block h-12 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted">Scroll</span>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="scroll-mt-24 bg-bg-light section-gap">
        <div className="mx-auto max-w-7xl section-padding">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent-dark" />
                <p className="label text-accent-dark">About me</p>
              </div>
              <h2 className="heading-lg mt-4 text-text-dark">
                Creating art through the lens of fashion
              </h2>
              <p className="mt-6 body-lg text-text-dark-secondary leading-relaxed">
                {site.about}
              </p>
              <p className="mt-4 body-lg text-text-dark-secondary leading-relaxed">
                With a deep passion for storytelling through movement and
                expression, I bring visions to life in every frame. From
                high-fashion editorials to commercial campaigns, I believe
                in the power of authentic presence.
              </p>
              <div className="mt-8">
                <Image
                  src="/images/signature.png"
                  alt="Signature"
                  width={200}
                  height={60}
                  className="h-auto w-[min(35%,180px)] opacity-80"
                />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-bg-light-alt">
                <Image
                  src="/images/2.jpeg"
                  alt="Salima Elmahraoui"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-2xl sm:-bottom-8 sm:-left-8">
                <p className="font-display text-3xl font-light text-text-dark sm:text-4xl">
                  {site.stats[0].value}
                </p>
                <p className="mt-1 text-xs text-text-dark-secondary">{site.stats[0].label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-bg-surface" />
        <div className="relative mx-auto max-w-7xl section-padding">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.stats.map((s) => (
              <div
                key={s.label}
                className="group glass-card p-8 text-center transition-all duration-500 hover:border-accent/20 hover:bg-accent/[0.03]"
              >
                <p className="font-display text-4xl font-light text-accent md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section id="projects" className="scroll-mt-24 bg-bg-light section-gap">
        <div className="mx-auto max-w-7xl section-padding">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-dark" />
              <p className="label text-accent-dark">Selected work</p>
              <span className="h-px w-8 bg-accent-dark" />
            </div>
            <h2 className="heading-lg mt-4 text-text-dark">
              Best projects
            </h2>
            <p className="mt-4 max-w-md text-text-dark-secondary">
              A curated selection of recent work — editorial, campaigns, and
              collaborations.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-bg-light-alt"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="label text-accent-light">
                    {item.category}
                  </p>
                  <p className="font-display mt-2 text-xl font-light text-white sm:text-2xl">
                    {item.title}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    View project
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/portfolio" className="btn-outline-dark">
              See all work
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quotes ── */}
      <section className="relative section-gap overflow-hidden">
        <div className="absolute inset-0 bg-bg-surface" />
        <div className="relative mx-auto max-w-5xl section-padding">
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className="h-px w-8 bg-accent/40" />
            <p className="label text-accent/70">Words that inspire</p>
            <span className="h-px w-8 bg-accent/40" />
          </div>
          <div className="space-y-20">
            {site.quotes.map((q) => (
              <blockquote key={q.cite} className="relative">
                <span className="absolute -top-6 left-0 font-display text-7xl text-accent/10 select-none">
                  &ldquo;
                </span>
                <div className="pl-6 border-l border-accent/30">
                  <p className="font-display text-xl font-light leading-relaxed text-text-primary/90 sm:text-2xl lg:text-3xl">
                    {q.text}
                  </p>
                  <cite className="mt-6 block text-sm font-medium not-italic text-accent/80">
                    — {q.cite}
                  </cite>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="border-y border-black/[0.06] bg-bg-light py-16">
        <div className="mx-auto max-w-7xl section-padding">
          <p className="text-center label text-text-muted mb-12">
            Brands & partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 opacity-70 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
            {site.partners.map((p) => (
              <div key={p.src} className="relative h-10 w-28 sm:h-12 sm:w-32">
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

      {/* ── Blog ── */}
      <section id="blog" className="scroll-mt-24 bg-bg-light-alt section-gap">
        <div className="mx-auto max-w-7xl section-padding">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent-dark" />
              <p className="label text-accent-dark">Journal</p>
              <span className="h-px w-8 bg-accent-dark" />
            </div>
            <h2 className="heading-lg mt-4 text-text-dark">
              Latest from the blog
            </h2>
            <p className="mt-4 text-text-dark-secondary">
              Notes on craft, shoots, and the industry.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.04] transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-text-dark backdrop-blur-sm">
                    {post.category}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <time className="text-[11px] uppercase tracking-wider text-text-muted">
                    {post.date}
                  </time>
                  <h3 className="font-display mt-3 text-xl font-light text-text-dark">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors duration-300 hover:text-accent-dark"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-dark-secondary line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-text-dark transition-colors hover:text-accent-dark"
                  >
                    Read more
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/blog" className="btn-outline-dark">
              All posts
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="scroll-mt-24 section-gap">
        <div className="mx-auto max-w-7xl section-padding">
          <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <p className="label text-accent">Get in touch</p>
              </div>
              <h2 className="heading-lg mt-4">
                Let&apos;s work together
              </h2>
              <p className="mt-6 body-lg text-text-secondary">
                For bookings, campaigns, and collaborations — reach out with a
                few details and I&apos;ll get back to you.
              </p>

              <div className="mt-12 space-y-6">
                <div>
                  <p className="label text-text-muted mb-2">Address</p>
                  <p className="text-text-secondary">{site.contact.address}</p>
                </div>
                <div>
                  <p className="label text-text-muted mb-2">Phone</p>
                  <a
                    href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                    className="text-text-secondary transition-colors hover:text-accent"
                  >
                    {site.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="label text-text-muted mb-2">Email</p>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-accent transition-colors hover:text-accent-light"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </div>
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
