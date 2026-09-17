import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-3">
        <Image
          src={project.cover}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs text-muted">{project.date}</p>
          <h3 className="mt-1 text-2xl group-hover:text-accent">{project.name}</h3>
          <p className="text-sm text-muted">{project.categories.join(" · ")}</p>
        </div>
        {index !== undefined && <span className="font-display text-muted">—0{index + 1}</span>}
      </div>
    </Link>
  );
}
