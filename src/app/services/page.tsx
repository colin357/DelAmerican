import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { consultingProjects, services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Company" image={services[0].image}>
        <p className="mt-6 max-w-2xl leading-relaxed text-neutral-300">
          Del American&apos;s experience and creative team has allowed it to be versatile and successful in every
          aspect of the industry. From development and self-performed construction to equity placement and consulting,
          Del American has proven itself to be a driving force in the industry as well as an invaluable partner.
        </p>
      </PageHero>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-24 py-20 ${i % 2 ? "bg-ink-2" : ""}`}>
          <div className="container-x grid items-start gap-12 md:grid-cols-2">
            <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
              <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="mt-3 text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-6 text-lg leading-relaxed">{s.summary}</p>
              {"paragraphs" in s &&
                s.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-neutral-300">
                    {p}
                  </p>
                ))}
              {"sections" in s &&
                s.sections?.map((sec) => (
                  <div key={sec.heading} className="mt-6">
                    <h3 className="text-xl">{sec.heading}</h3>
                    <p className="mt-2 leading-relaxed text-neutral-300">{sec.body}</p>
                  </div>
                ))}
            </div>
          </div>

          {s.id === "consulting" && (
            <div className="container-x mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {consultingProjects.map((c) => (
                <div key={c.name}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink-3">
                    <Image src={c.image} alt={c.name} fill className="object-cover" sizes="25vw" />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">{c.location}</p>
                  <h3 className="mt-1 text-xl">{c.name}</h3>
                  <p className="text-sm text-neutral-300">{c.detail}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
}
