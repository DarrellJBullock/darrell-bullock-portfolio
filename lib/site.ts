export const siteConfig = {
  name: "Darrell Bullock",
  title: "Darrell Bullock | Senior Software Engineer",
  description:
    "Senior Software Engineer building AI-powered, data-driven web products across frontend engineering, healthcare workflows, data systems, code review tools, and sports simulations.",
  url: "https://djb-portfolio.vercel.app",
  heroHeadline: "Senior Software Engineer building AI-powered, data-driven web products.",
  heroSubheadline:
    "20+ years across frontend, backend, cloud, healthcare systems, data pipelines, engineering leadership, and product delivery.",
  primaryCta: { label: "View Projects", href: "/projects" },
  secondaryCta: { label: "Contact Me", href: "/contact" },
  social: {
    github: "https://github.com/DarrellJBullock",
    linkedin: "https://linkedin.com/in/darrellbullock",
    email: "darrellbullock@comcast.net",
  },
  availability:
    "Open to senior/staff software engineering roles and select consulting or contract engagements focused on AI products, healthcare data systems, and performance-critical frontends.",
  // Inbox that receives contact form submissions. Separate from social.email
  // (the publicly displayed address) because Resend's sandbox sender can
  // only deliver to the address the Resend account itself was created with.
  // TODO: once a custom domain is verified with Resend, this can point at
  // social.email instead and the `from` address in app/contact/actions.ts
  // can move off onboarding@resend.dev.
  contactNotificationEmail: "darrelljfresh@gmail.com",
} as const;

export const OG_IMAGE = "/images/darrell-command-center-avatar.png";
