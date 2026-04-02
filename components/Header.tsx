"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
  const glass =
    scrolled || !isHome
      ? "border-white/10 bg-[#0c0a09]/80 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl"
      : "border-transparent bg-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div
        className={`relative z-[60] mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8 ${glass} rounded-b-2xl border-x border-b sm:mx-4 sm:mt-3 sm:rounded-2xl lg:mx-8`}
      >
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-light.svg"
            alt={site.name}
            width={88}
            height={28}
            className="h-7 w-auto opacity-95"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-200/90 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-[#0c0a09]/95 backdrop-blur-md transition-opacity duration-300 md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <nav className="flex min-h-screen flex-col items-center justify-center gap-2 px-6 pt-20">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-lg font-medium text-white transition hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 flex gap-4 text-sm text-stone-400">
            {site.social.twitter && (
              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                X
              </a>
            )}
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
