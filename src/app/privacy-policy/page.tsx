import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="container-x max-w-3xl space-y-6 pb-24 leading-relaxed text-neutral-300">
        <p>
          {site.fullName} respects your privacy. Information you submit through our contact form (name, email address,
          phone number and message) is used only to respond to your inquiry and, if you opt in, to send occasional
          news about our communities.
        </p>
        <p>We do not sell or share your personal information with third parties for their own marketing purposes.</p>
        <p>
          To request access to or deletion of your information, contact us at{" "}
          <a href={`mailto:${site.email}`} className="text-accent hover:text-white">
            {site.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
