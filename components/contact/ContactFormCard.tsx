import { ContactForm } from "@/components/ui/ContactForm";

export function ContactFormCard() {
  return (
    <div>
      <h2 className="console-text mb-4 text-xs uppercase tracking-widest text-cyan">
        Open a Channel
      </h2>
      <ContactForm />
    </div>
  );
}
