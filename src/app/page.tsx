import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import TeamPhoto from "@/components/TeamPhoto";
import { homeImages, projects, services, site, team } from "@/lib/data";

const portfolio = [
  {
    eyebrow: "Over 6,500 Units",
    title: "Apartment Homes",
    body: "Del American has developed 18 apartment communities, consisting of over 6,500 units over the past 30 years. Currently, Del American is planning new apartment developments throughout Florida and Texas.",
    link: "Portfolio: Apartments",
    href: "/portfolio?category=Apartments",
    image: homeImages.apartments,
  },
  {
    eyebrow: "Ground up & conversions",
    title: "Condominiums",
    body: "Del American has developed 9 condominium communities, both ground up and conversions, in Florida, Georgia and Las Vegas. Consisting of over 3,500 units. Del American's current apartment developments will be positioned to convert to condominiums when market conditions are appropriate.",
    link: "Portfolio: Condominiums",
    href: "/portfolio?category=Condominiums",
    image: homeImages.condos,
  },
  {
    eyebrow: "Development",
    title: "Land & Single Family",
    body: "Del American has developed 9 single family housing communities throughout Florida and Las Vegas.",
    link: "Portfolio: Land & Single Family",
    href: "/portfolio?category=Land%20%26%20Single%20Family",
    image: homeImages.singleFamily,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <Image src={homeImages.hero} alt="S L X Atlanta at twilight" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="container-x relative pb-20 pt-48 md:pb-28">
          <h1 className="mt-4 max-w-4xl text-5xl leading-none sm:text-6xl md:text-8xl">
            Ultimate Residential Lifestyle
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-neutral-200">
            Del American&apos;s core business is the development of luxury multifamily apartment communities. Over the
            past thirty two years, Del American Real Estate Group has developed more than 36 single family and
            multifamily communities representing more than 10,000 residences valued close to $1 billion.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact-us" className="btn btn-solid">
              Contact Us
            </Link>
            <Link href="/projects/sls-atlanta" className="btn">
              New Project
            </Link>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="container-x py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow">Case Studies</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Featured Projects</h2>
          </div>
          <Link href="/portfolio" className="hidden font-display text-sm uppercase tracking-[0.25em] hover:text-accent md:block">
            View All →
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Executive team */}
      <section className="bg-ink-2 py-24">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">About Us · Who We Are</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Our Executive Team</h2>
            </div>
            <Link href="/our-company" className="hidden font-display text-sm uppercase tracking-[0.25em] hover:text-accent md:block">
              Our Company →
            </Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name}>
                <TeamPhoto name={m.name} src={m.image} />
                <h3 className="mt-5 text-2xl">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
              </div>
            ))}
          </div>
          <Link href="/our-company" className="btn mt-12 md:hidden">
            Our Company
          </Link>
        </div>
      </section>

      {/* Portfolio categories */}
      <section className="container-x space-y-24 py-24">
        {portfolio.map((item, i) => (
          <div key={item.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className={`relative aspect-[3/2] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
            <div>
              <p className="eyebrow">{item.eyebrow}</p>
              <h2 className="mt-3 text-4xl md:text-5xl">{item.title}</h2>
              <p className="mt-6 leading-relaxed text-neutral-300">{item.body}</p>
              <Link href={item.href} className="mt-8 inline-block font-display text-sm uppercase tracking-[0.25em] text-accent hover:text-white">
                {item.link} →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="relative overflow-hidden py-24">
        <Image src={homeImages.kitchen} alt="" fill className="object-cover opacity-20" />
        <div className="container-x relative">
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl">
            We Are Versatile &amp; Successful in Every Aspect of the Industry
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-neutral-300">
            From development and self-performed construction to equity placement and consulting, Del American has
            proven itself to be a driving force in the industry as well as an invaluable partner.
          </p>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.id} href={`/services#${s.id}`} className="group bg-ink p-8 transition-colors hover:bg-ink-2">
                <h3 className="text-2xl group-hover:text-accent">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">{s.summary}</p>
              </Link>
            ))}
          </div>
          <Link href="/services" className="btn mt-12">
            Take a Look
          </Link>
        </div>
      </section>

      {/* Instagram */}
      <section className="border-t border-line bg-ink-2 py-20">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Social</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Follow Us on Instagram</h2>
          </div>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="btn">
            View Profile
          </a>
        </div>
      </section>
    </>
  );
}
