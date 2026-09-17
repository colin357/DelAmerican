import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import PressList from "@/components/PressList";

export const metadata: Metadata = { title: "Press" };

export default function PressPage() {
  return (
    <>
      <PageHero eyebrow="News & Updates" title="Press" />
      <section className="container-x pb-24">
        <Suspense>
          <PressList />
        </Suspense>
      </section>
    </>
  );
}
