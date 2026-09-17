import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { partners } from "@/lib/data";

export const metadata: Metadata = { title: "Relationships" };

export default function RelationshipsPage() {
  return (
    <>
      <PageHero eyebrow="Relationships" title="Partners">
        <p className="mt-6 max-w-2xl leading-relaxed text-neutral-300">
          Del American has partnered with leading lenders, institutional investors, brokers and property managers over
          more than three decades of development.
        </p>
      </PageHero>
      <section className="container-x pb-24">
        <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p) => (
            <div key={p.name} className="flex aspect-[3/2] items-center justify-center bg-white p-8">
              <div className="relative h-full w-full">
                <Image src={p.image} alt={p.name} fill className="object-contain" sizes="25vw" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
