import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `Portfolio: ${p.name}` : "Project" };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const others = projects.filter((p) => p.slug !== slug);

  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden">
        <Image src={project.cover} alt={project.name} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="container-x relative flex min-h-[70svh] flex-col justify-end pb-16 pt-40">
          <p className="eyebrow">Project</p>
          <h1 className="mt-3 text-5xl md:text-7xl">{project.name}</h1>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Category</p>
              <p className="mt-1">{project.categories.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Release</p>
              <p className="mt-1">{project.release}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-14 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <h2 className="text-3xl">{project.name}</h2>
          <p className="text-muted">{project.location}</p>
          <dl className="mt-8 divide-y divide-line border-y border-line text-sm">
            {project.facts.map((f) => (
              <div key={f.label} className="flex justify-between gap-6 py-3">
                <dt className="text-muted">{f.label}</dt>
                <dd className="text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-3">
          {project.description && <p className="leading-relaxed text-neutral-300">{project.description}</p>}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <div key={src} className={`relative aspect-[4/3] overflow-hidden bg-ink-3 ${i === 0 ? "sm:col-span-2 sm:aspect-[16/9]" : ""}`}>
                <Image src={src} alt={`${project.name} ${i + 1}`} fill className="object-cover" sizes="(min-width: 768px) 60vw, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-2 py-20">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="mt-3 text-4xl">More Projects</h2>
            </div>
            <Link href="/portfolio" className="font-display text-sm uppercase tracking-[0.25em] hover:text-accent">
              View All Projects →
            </Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {others.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
