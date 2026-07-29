"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export interface ContactFormResult {
  success: boolean;
  error?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  name: string,
  email: string,
  message: string
): Promise<ContactFormResult> {
  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: "Please fill in every field." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { success: false, error: "Enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      success: false,
      error: "Email delivery isn't configured yet. Please reach out directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: siteConfig.social.email,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Something went wrong sending your message. Please try again." };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact message:", error);
    return { success: false, error: "Something went wrong sending your message. Please try again." };
  }
}
