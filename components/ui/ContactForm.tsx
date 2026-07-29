"use client";

import { useState, useTransition, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { sendContactMessage } from "@/app/contact/actions";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function validate(): boolean {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "Tell me a bit about the project.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    startTransition(async () => {
      const result = await sendContactMessage(values.name, values.email, values.message);
      if (result.success) {
        setSubmitted(true);
      } else {
        setServerError(result.error ?? "Something went wrong. Please try again.");
      }
    });
  }

  if (submitted) {
    return (
      <div className="glass-panel rounded-lg p-8 text-center" role="status">
        <p className="console-text text-xs uppercase tracking-wide text-success">
          Transmission received
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold text-bright">
          Thanks, {values.name.split(" ")[0]}.
        </h3>
        <p className="mt-2 text-sm text-fog-dim">
          Your message is on its way. I&apos;ll get back to you at {values.email} soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-panel space-y-5 rounded-lg p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-bright">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-md border border-steel bg-panel-soft px-4 py-3 text-sm text-bright placeholder:text-fog-dim/60 focus-visible:border-cyan"
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-danger">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-bright">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-md border border-steel bg-panel-soft px-4 py-3 text-sm text-bright placeholder:text-fog-dim/60 focus-visible:border-cyan"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-danger">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-bright">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-md border border-steel bg-panel-soft px-4 py-3 text-sm text-bright placeholder:text-fog-dim/60 focus-visible:border-cyan"
          placeholder="What are you building, and how can I help?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-danger">
            {errors.message}
          </p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-danger">
          {serverError}
        </p>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={isPending}>
        {isPending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
