import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Hero } from "@/components/home/Hero";
import { SignalGrid } from "@/components/home/SignalGrid";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { EngineeringStrengths } from "@/components/home/EngineeringStrengths";
import { CaseStudyPreview } from "@/components/home/CaseStudyPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignalGrid />
      <FeaturedProjects />
      <EngineeringStrengths />
      <CaseStudyPreview />
      <ContactCTA />
    </>
  );
}
