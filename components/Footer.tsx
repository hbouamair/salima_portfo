import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-bg-primary">
      <div className="mx-auto max-w-7xl section-padding py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group inline-block">
              <span className="font-display text-2xl tracking-wide text-text-primary">
                Salima
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Professional fashion model based in Morocco. Available for
              campaigns, editorial shoots, and brand collaborations.
            </p>
          </div>

          <div>
            <h4 className="label text-text-muted mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/#about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/blog", label: "Blog" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label text-text-muted mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  Instagram
                </a>
              </li>
              {site.social.twitter && (
                <li>
                  <a
                    href={site.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition-colors hover:text-accent"
                  >
                    X (Twitter)
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="label text-text-muted mb-4">Get in touch</h4>
            <p className="text-sm text-text-secondary">{site.contact.address}</p>
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="mt-2 block text-sm text-text-secondary transition-colors hover:text-accent"
            >
              {site.contact.phone}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-1 block text-sm text-accent transition-colors hover:text-accent-light"
            >
              {site.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Designed with purpose & precision
          </p>
        </div>
      </div>
    </footer>
  );
}
