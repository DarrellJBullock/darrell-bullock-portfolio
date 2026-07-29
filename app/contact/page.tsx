import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactFormCard } from "@/components/contact/ContactFormCard";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { AvailabilityCard } from "@/components/contact/AvailabilityCard";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about senior software engineering roles or collaboration on AI, healthcare, or performance-focused web products.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Let's talk about what you're building"
        description="Open a channel below, or reach out directly."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactFormCard />
        </div>
        <div className="space-y-6">
          <AvailabilityCard />
          <ContactPanel />
        </div>
      </div>
    </div>
  );
}
