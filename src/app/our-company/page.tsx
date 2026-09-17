import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { homeImages, team } from "@/lib/data";

export const metadata: Metadata = { title: "About Us" };

const stats = [
  ["37", "communities developed"],
  ["6800+", "apartment units"],
  ["2100+", "condominium units"],
  ["36", "years in business"],
];

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="Our Company" title="Company" image={homeImages.companyGate} />
      <section className="container-x grid gap-14 pb-24 md:grid-cols-5">
        <div className="space-y-6 leading-relaxed text-neutral-300 md:col-span-3">
          <p>
            Del American&apos;s experience and creative team has allowed it to be versatile and successful in every
            aspect of the industry. From development and self-performed construction to equity placement and
            consulting, Del American has proven itself to be a driving force in the industry as well as an invaluable
            partner.
          </p>
          <p>
            Del American was founded in May 1982 in Orlando, Florida and has been in business for 36 years. We have
            developed 37 communities with a development value of $1 Billion + and $750.0MM in construction loan totals.
            Our development portfolio includes:
          </p>
          <ul className="space-y-2 border-l border-accent pl-6 text-white">
            <li>Apartments: 19 Properties · 6800 Units</li>
            <li>Condominiums: 9 Properties · 2100 Units</li>
            <li>Single Family: 9 Properties · 1400 Units</li>
          </ul>
          <Link href="/contact-us" className="btn">
            Contact Us
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-px self-start bg-line md:col-span-2">
          {stats.map(([n, l]) => (
            <div key={l} className="bg-ink-2 p-8">
              <p className="font-display text-5xl">{n}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-2 py-24">
        <div className="container-x">
          <p className="eyebrow">Who We Are</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Our Executive Team</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name}>
                <div className="relative aspect-[4/5] overflow-hidden bg-ink-3">
                  <Image src={m.image} alt={m.name} fill className="object-cover object-top" sizes="(min-width: 1024px) 33vw, 50vw" />
                </div>
                <h3 className="mt-5 text-2xl">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
