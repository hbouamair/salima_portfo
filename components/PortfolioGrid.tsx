"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PortfolioCategory, PortfolioItem } from "@/lib/portfolio";

const filters: Array<PortfolioCategory | "All"> = [
  "All",
  "Editorial",
  "Campaign",
  "Fashion",
  "Commercial",
  "Portrait",
];

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((i) => i.category === active);
  }, [active, items]);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-14 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
              active === f
                ? "bg-accent text-bg-primary shadow-lg shadow-accent/20"
                : "border border-white/[0.08] bg-white/[0.03] text-text-secondary hover:bg-white/[0.06] hover:text-text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => {
          const isTall = item.span === "tall";
          const isWide = item.span === "wide";
          return (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group relative mb-4 block overflow-hidden rounded-2xl break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden ${
                  isTall
                    ? "aspect-[3/5]"
                    : isWide
                      ? "aspect-[16/10]"
                      : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Always-visible bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Content — always visible at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-light/90">
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-light text-white sm:text-xl">
                    {item.title}
                  </h3>

                  {/* Reveal on hover */}
                  <div className="mt-3 flex items-center gap-2 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="h-px w-6 bg-accent" />
                    <span className="text-[11px] font-medium text-white/70">
                      View project
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-text-muted">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
