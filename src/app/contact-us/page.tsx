import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { homeImages, site } from "@/lib/data";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact" image={homeImages.contact} />
      <section className="container-x grid gap-16 pb-24 md:grid-cols-5">
        <div className="space-y-10 md:col-span-2">
          <div>
            <p className="eyebrow">Call Us</p>
            <a href={site.phoneHref} className="mt-2 block text-2xl hover:text-accent">
              {site.phoneIntl}
            </a>
          </div>
          <div>
            <p className="eyebrow">Visit Us</p>
            <p className="mt-2 text-lg">{site.officeAddress}</p>
            <a href={site.directionsUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm uppercase tracking-[0.25em] text-accent hover:text-white">
              Get Directions →
            </a>
          </div>
          <div>
            <p className="eyebrow">Email Us</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-lg hover:text-accent">
              {site.email}
            </a>
          </div>
        </div>
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl">Let&apos;s Create Something Great!</h2>
          <p className="mt-3 text-neutral-300">Let&apos;s collaborate. Fill out this form and we will contact you shortly.</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
