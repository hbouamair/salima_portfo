import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0908] py-14 text-center">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-400">
          {site.social.twitter && (
            <a
              href={site.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-amber-200"
            >
              X (Twitter)
            </a>
          )}
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-amber-200"
          >
            Instagram
          </a>
          <Link href="/portfolio" className="transition hover:text-amber-200">
            Portfolio
          </Link>
          <Link href="/blog" className="transition hover:text-amber-200">
            Blog
          </Link>
        </div>
        <p className="mt-8 text-xs text-stone-600">
          © {new Date().getFullYear()} {site.name}. Crafted with care.
        </p>
      </div>
    </footer>
  );
}
