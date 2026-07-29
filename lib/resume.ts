export const RESUME_TITLE = "Staff Software Engineer | Technical Lead | Engineering Manager";

export const RESUME_LOCATION = "Mullica Hill, NJ";

export const RESUME_SUMMARY =
  "Software engineering leader with 20+ years of experience spanning individual contribution, technical architecture, and team leadership — from founding engineer building zero-to-one systems to staff-level technical authority owning architecture for 50+ production services. Deep expertise in backend engineering, LLM/AI integration, cloud infrastructure, and SRE practices, with a consistent track record of measurable impact across EdTech, healthcare, and financial services environments.";

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Senior Software Engineer",
    company: "Currus, Inc.",
    period: "Jul 2025 – Dec 2025",
    description:
      "Technical architecture lead for a data-driven financial services platform. Architected observability-first FastAPI microservices (99.9% uptime, MTTR cut from 45 to under 8 minutes), optimized pipelines processing 2M+ financial records/day, and led a 5-engineer chapter team.",
  },
  {
    role: "Technology Lead",
    company: "Code Differently",
    period: "Jan 2025 – Jul 2025",
    description:
      "Led technical instruction and mentorship for a K-12/college EdTech program, designing a full-stack React/Node.js/Java curriculum and coaching 30+ students; 85% of graduates secured internships or entry-level roles.",
  },
  {
    role: "Software Engineering Contractor",
    company: "Thomas Jefferson University Hospitals",
    period: "Jul 2023 – Jul 2024",
    description:
      "Technical lead building zero-to-one healthcare applications for 15,000+ physicians and staff in HIPAA-regulated environments, including a respirator fit-test app (99.95% uptime) and real-time clinical FastAPI microservices at sub-200ms latency.",
  },
  {
    role: "Senior Backend Engineer",
    company: "Mathison.io",
    period: "Mar 2022 – Mar 2023",
    description:
      "Backend engineer for a SaaS Equity Index platform measuring employer DEI efforts. Architected Ruby on Rails/GraphQL APIs handling 1M+ daily requests at 99.9% uptime and built a zero-to-one data pipeline processing 500K+ employer records/month.",
  },
  {
    role: "Technical Lead, Software Engineering",
    company: "Einstein Healthcare Network",
    period: "Jul 1998 – Mar 2022",
    description:
      "24-year tenure as primary technical authority over 50+ interconnected production healthcare services. Scaled the engineering team from 3 to 15+ engineers, built an SRE culture achieving 99.95% uptime, and led a legacy modernization effort saving $200K/year.",
  },
];

export const RESUME_SKILLS = [
  "Technical Leadership & Org Scaling",
  "System Architecture & Design Patterns",
  "LLM / AI Integration & Optimization",
  "Backend Engineering (Python, Ruby, Node.js)",
  "Frontend Development (React, Next.js, TS)",
  "Cloud Infrastructure (AWS)",
  "PostgreSQL & Database Performance",
  "Observability & SRE Practices",
  "CI/CD & DevOps",
  "Docker & Kubernetes",
  "GraphQL & REST API Design",
  "Microservices Architecture",
  "React Native (iOS & Android)",
  "HIPAA Compliance & Healthcare IT",
  "Mentorship & Career Development",
  "Agile / Scrum Methodologies",
  "ADA / WCAG Accessibility",
  "EdTech & Curriculum Development",
];

export const EDUCATION = {
  degree: "B.S., Electrical Engineering",
  school: "Howard University",
  location: "Washington, DC",
};
