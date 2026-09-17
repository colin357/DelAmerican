import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { homeImages } from "@/lib/data";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Our Projects" title="Portfolio" image={homeImages.vegas888} />
      <section className="container-x pb-24">
        <Suspense>
          <PortfolioGrid />
        </Suspense>
      </section>
    </>
  );
}
