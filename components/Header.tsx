"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";

  return (
    <>
      {/* ── Mobile/tablet fullscreen menu (rendered OUTSIDE header so z-index works) ── */}
      <div
        className={`fixed inset-0 z-[60] overflow-hidden transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Background image */}
        <Image
          src="/images/pro3.jpeg"
          alt=""
          fill
          className={`object-cover object-top transition-transform duration-[1200ms] ease-out ${
            open ? "scale-100" : "scale-110"
          }`}
          sizes="100vw"
          priority
        />

        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

        {/* Close button inside menu */}
        <button
          type="button"
          className="absolute right-5 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all active:scale-95 sm:right-8 sm:top-5"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Nav content */}
        <nav className="relative flex min-h-screen flex-col items-center justify-center gap-4 px-6">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full max-w-xs rounded-2xl border border-white/15 bg-white/[0.08] px-6 py-5 text-center text-xl font-light text-white backdrop-blur-md transition-all duration-300 hover:bg-white/[0.15] hover:border-accent/30 active:scale-[0.97] ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${150 + i * 80}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className={`mt-2 w-full max-w-xs rounded-2xl bg-accent px-6 py-5 text-center text-xl font-semibold text-bg-primary transition-all duration-300 hover:bg-accent-light active:scale-[0.97] ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            onClick={() => setOpen(false)}
            style={{
              transitionDelay: open ? `${150 + nav.length * 80}ms` : "0ms",
            }}
          >
            Hire me
          </Link>

          {/* Social links */}
          <div
            className={`mt-10 flex items-center gap-6 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: open ? "600ms" : "0ms" }}
          >
            <a
              href="https://www.instagram.com/salimaelmahraoui/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 transition-colors hover:text-accent"
            >
              Instagram
            </a>
            <span className="h-3 w-px bg-white/20" />
            <a
              href="mailto:salimasbusiness@gmail.com"
              className="text-sm text-white/60 transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </nav>
      </div>

      {/* ── Header bar ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-bg-primary/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_2px_40px_rgba(0,0,0,0.4)]"
            : "bg-bg-primary/90 backdrop-blur-xl lg:bg-transparent lg:backdrop-blur-none"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between section-padding sm:h-[72px] lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-baseline gap-1.5"
            onClick={() => setOpen(false)}
          >
            <span className="font-display text-2xl tracking-wide text-text-primary transition-colors group-hover:text-accent lg:text-xl">
              Salima
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted lg:text-[10px]">
              .portfolio
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-5 py-2 text-[13px] font-medium text-text-secondary transition-colors duration-300 hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-4 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-[13px] font-medium text-accent transition-all duration-300 hover:bg-accent/20 hover:border-accent/50"
            >
              Hire me
            </Link>
          </nav>

          {/* Mobile/tablet hamburger */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all duration-300 active:scale-95 lg:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[2.5px] w-[22px] rounded-full bg-white" />
              <span className="block h-[2.5px] w-[22px] rounded-full bg-white" />
              <span className="block h-[2.5px] w-[22px] rounded-full bg-white" />
            </span>
          </button>
        </div>
      </header>
    </>
  );
}
