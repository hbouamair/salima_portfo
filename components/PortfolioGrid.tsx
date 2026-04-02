"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PortfolioCategory, PortfolioItem } from "@/lib/portfolio";

const filters: Array<PortfolioCategory | "All"> = [
  "All",
  "Branding",
  "Print",
  "Photography",
  "Design",
  "Mockup",
];

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((i) => i.category === active);
  }, [active, items]);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === f
                ? "bg-stone-900 text-white"
                : "bg-stone-200 text-stone-700 hover:bg-stone-300"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-xs font-medium uppercase tracking-wider text-amber-200/90">
                {item.category}
              </p>
              <p className="font-display mt-1 text-xl font-light">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-stone-500">No projects in this category.</p>
      ) : null}
    </div>
  );
}
