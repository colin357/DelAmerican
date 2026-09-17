import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return { title: p ? `Press: ${p.title}` : "Press" };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="container-x max-w-3xl pb-20 pt-40 md:pt-52">
        <p className="eyebrow">
          {post.date ? `${post.date} · ` : ""}
          {post.category ?? "Instagram"}
        </p>
        <h1 className="mt-4 text-4xl normal-case tracking-normal md:text-5xl">{post.title}</h1>
        {post.video && (
          <div className="mt-10 aspect-video overflow-hidden bg-ink-2">
            <iframe src={post.video} title={post.title} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        )}
        {post.image && !post.video && (
          <div className="relative mt-10 aspect-[4/3] overflow-hidden bg-ink-2">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" sizes="(min-width: 768px) 48rem, 100vw" />
          </div>
        )}
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-neutral-200">
          {post.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {post.tags && (
          <p className="mt-10 text-sm text-muted">{post.tags.join(" ")}</p>
        )}
        <Link href="/press" className="btn mt-12">
          View All Posts
        </Link>
      </article>

      <section className="bg-ink-2 py-20">
        <div className="container-x">
          <p className="eyebrow">More Posts</p>
          <h2 className="mt-3 text-4xl">You Might Also Like</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} href={`/press/${p.slug}`} className="group block">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">{p.category ?? "Instagram"}</p>
                <h3 className="mt-2 text-xl normal-case tracking-normal group-hover:text-accent">{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
