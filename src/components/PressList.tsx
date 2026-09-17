"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { posts, pressCategories, type PressCategory } from "@/lib/data";

export default function PressList() {
  const params = useSearchParams();
  const router = useRouter();
  const active = params.get("category") as PressCategory | null;
  const list = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <>
      <div className="mb-12 flex flex-wrap items-center gap-3">
        <span className="mr-2 text-xs uppercase tracking-[0.3em] text-muted">Select Category</span>
        {[null, ...pressCategories].map((c) => (
          <button
            key={c ?? "all"}
            type="button"
            onClick={() => router.replace(c ? `/press?category=${encodeURIComponent(c)}` : "/press", { scroll: false })}
            className={`border px-4 py-2 font-display text-xs uppercase tracking-[0.2em] transition ${
              active === c ? "border-accent bg-accent text-ink" : "border-line hover:border-white"
            }`}
          >
            {c ?? "All Posts"}
          </button>
        ))}
      </div>
      {list.length === 0 && <p className="text-muted">No items found.</p>}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((post) => (
          <Link key={post.slug} href={`/press/${post.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink-2">
              {post.image ? (
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
              ) : (
                <div className="flex h-full items-center justify-center font-display text-4xl uppercase text-muted">{post.category}</div>
              )}
            </div>
            <div className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">
              {post.date && <span>{post.date} · </span>}
              {post.category ?? "Instagram"}
            </div>
            <h3 className="mt-2 text-2xl normal-case tracking-normal group-hover:text-accent">{post.title}</h3>
            <span className="mt-3 inline-block font-display text-xs uppercase tracking-[0.25em] text-accent">Read More →</span>
          </Link>
        ))}
      </div>
    </>
  );
}
