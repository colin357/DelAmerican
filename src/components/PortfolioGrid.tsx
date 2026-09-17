"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import { categories, projects, type Category } from "@/lib/data";

export default function PortfolioGrid() {
  const params = useSearchParams();
  const router = useRouter();
  const active = params.get("category") as Category | null;
  const list = active ? projects.filter((p) => p.categories.includes(active)) : projects;

  const select = (c: Category | null) =>
    router.replace(c ? `/portfolio?category=${encodeURIComponent(c)}` : "/portfolio", { scroll: false });

  return (
    <>
      <div className="mb-12 flex flex-wrap items-center gap-3">
        <span className="mr-2 text-xs uppercase tracking-[0.3em] text-muted">Select Category</span>
        {[null, ...categories].map((c) => (
          <button
            key={c ?? "all"}
            type="button"
            onClick={() => select(c)}
            className={`border px-4 py-2 font-display text-xs uppercase tracking-[0.2em] transition ${
              active === c ? "border-accent bg-accent text-ink" : "border-line hover:border-white"
            }`}
          >
            {c ?? "All"}
          </button>
        ))}
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
