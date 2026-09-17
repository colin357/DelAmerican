import Link from "next/link";
import { nav, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <div className="relative h-9 w-44">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.logo} alt="Del American" className="h-full w-full object-contain object-left" />
          </div>
          <address className="mt-6 not-italic leading-relaxed text-muted">
            {site.address.map((l) => (
              <div key={l}>{l}</div>
            ))}
          </address>
        </div>
        <div className="space-y-2">
          <p className="eyebrow mb-4">Contact</p>
          <a href={`mailto:${site.email}`} className="block hover:text-accent">
            {site.email}
          </a>
          <a href={site.phoneHref} className="block hover:text-accent">
            {site.phone}
          </a>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="mt-4 inline-block text-muted hover:text-accent">
            Instagram
          </a>
        </div>
        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-2 font-display text-sm uppercase tracking-[0.2em]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>Family owned and operated for over 30 years</p>
          <p>
            ©{new Date().getFullYear()} {site.fullName}. All Rights Reserved.{" "}
            <Link href="/privacy-policy" className="underline-offset-4 hover:text-white hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
