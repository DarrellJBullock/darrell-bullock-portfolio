import type { ProjectFilter } from "./constants";

export type ProjectStatus = "Live" | "In Development" | "Prototype";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  filters: ProjectFilter[];
  tagline: string;
  description: string;
  portfolioAngle: string;
  status: ProjectStatus;
  /** TODO: replace with the real GitHub repo URL once published/public */
  githubUrl: string;
  /** TODO: replace with the real live demo URL once deployed */
  liveUrl: string;
  caseStudyUrl?: string;
  featured: boolean;
  stack: string[];
  highlights: string[];
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  futureRoadmap: string[];
  resumeBullet: string;
}

export const projects: Project[] = [
  {
    id: "aislepilot",
    slug: "aislepilot",
    title: "AislePilot",
    category: "Retail, AI, Shopping, Full-Stack",
    filters: ["AI", "Frontend"],
    tagline:
      "A smart shopping list app that helps users plan trips, organize items, and shop faster.",
    description:
      "AislePilot is a mobile-first shopping assistant that turns a loose list of groceries into an organized, store-aware trip plan. It focuses on the everyday friction of shopping: aisle order, saved lists, and quick re-planning when a store or list changes.",
    portfolioAngle:
      "Built a mobile-first shopping assistant that combines product planning, store-aware UX, saved lists, and full-stack product design.",
    status: "In Development",
    githubUrl: "https://github.com/DarrellJBullock/aislepilot",
    liveUrl: "https://store-pilot-black.vercel.app",
    caseStudyUrl: undefined,
    featured: true,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Kroger API-ready provider layer",
      "PostgreSQL",
      "Auth",
      "Local persistence",
    ],
    highlights: [
      "Store-aware list organization designed around real shopping trips",
      "Provider-layer architecture ready for live retailer API integration",
      "Saved lists and local persistence for fast repeat trips",
      "Full-stack auth and data model built on Supabase/PostgreSQL",
    ],
    problem:
      "Shopping lists are usually flat text with no awareness of store layout, past trips, or how people actually shop. That leads to backtracking, forgotten items, and slow trips.",
    solution:
      "AislePilot models lists as structured, categorized data and layers a store-aware provider system on top, so the app can eventually reorder items by aisle and suggest items from prior trips, while working fully offline-first today with local persistence.",
    architecture:
      "A Next.js App Router frontend talks to a Supabase/PostgreSQL backend for auth and persisted lists, behind a typed provider abstraction that isolates retailer-specific logic (starting with a Kroger API-ready provider) from the core list and trip-planning domain model.",
    challenges: [
      "Designing a provider abstraction that works with mock data today and real retailer APIs later without a rewrite",
      "Balancing offline-first local persistence with authenticated, synced cloud storage",
      "Keeping the mobile UX fast and low-friction for quick, repeated shopping trips",
    ],
    futureRoadmap: [
      "Wire up a live retailer API for real aisle and pricing data",
      "Add collaborative/shared household lists",
      "Add trip history and smart re-order suggestions",
    ],
    resumeBullet:
      "Designed and built AislePilot, a full-stack shopping assistant with a store-aware provider architecture, saved lists, and offline-first UX.",
  },
  {
    id: "campus-legend",
    slug: "campus-legend",
    title: "Campus Legend",
    category: "Sports Game, RPG, Simulation",
    filters: ["Games", "Sports"],
    tagline:
      "A console-style athlete career RPG where users build a player from freshman season to pro potential.",
    description:
      "Campus Legend is a career-mode sports RPG. Players create an athlete, make decisions across seasons, and watch a simulation engine turn those choices into stats, storylines, and a shot at going pro, all wrapped in a console-style presentation.",
    portfolioAngle:
      "Built a sports career RPG with player progression, decision systems, season simulation, and console-style presentation.",
    status: "In Development",
    githubUrl: "https://github.com/DarrellJBullock/campus-legend",
    liveUrl: "https://campus-legend.vercel.app",
    caseStudyUrl: "/case-studies#campus-legend",
    featured: true,
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "LocalStorage",
      "Game state engine",
    ],
    highlights: [
      "Custom game state engine driving multi-season player progression",
      "Branching decision system that affects stats and storylines",
      "Season simulation logic independent of the presentation layer",
      "Console-style UI with animated transitions between game screens",
    ],
    problem:
      "Career-mode sports games are usually locked inside large studio titles. Building one from scratch means designing a progression system, a simulation model, and a UI that feels like a console game, entirely in the browser.",
    solution:
      "Campus Legend separates a pure game-state engine (player attributes, season progression, decision outcomes) from the React presentation layer, so seasons can be simulated deterministically and the UI can focus on console-style feedback and pacing.",
    architecture:
      "A TypeScript game engine module owns player state, season progression, and decision trees; React/Next.js components consume that state and render console-style screens, with Framer Motion handling transitions and LocalStorage persisting career progress between sessions.",
    challenges: [
      "Modeling multi-season player progression in a way that stays balanced and replayable",
      "Keeping game logic decoupled from UI so the simulation can be tested independently",
      "Designing a console-style UI that feels premium without heavy animation overhead",
    ],
    futureRoadmap: [
      "Add more branching storylines and decision trees",
      "Expand pro-career simulation beyond the college years",
      "Add cloud save support alongside LocalStorage",
    ],
    resumeBullet:
      "Built Campus Legend, a browser-based sports career RPG with a custom simulation engine and console-style UI.",
  },
  {
    id: "ai-detective-console",
    slug: "ai-detective-console",
    title: "AI Detective: Console",
    category: "AI Game, LLM, Mystery, Console-Style UI",
    filters: ["AI", "Games"],
    tagline:
      "A cinematic mystery game where players interview AI-powered suspects and solve a branching case.",
    description:
      "AI Detective: Console is a mystery game built around LLM-driven suspect interviews. Players gather evidence, question suspects, catch contradictions, and build a case, all inside a cinematic, console-style interface.",
    portfolioAngle:
      "Built a console-style AI detective game with LLM-ready suspect interviews, evidence tracking, contradiction detection, save progress, and cinematic React UI.",
    status: "In Development",
    githubUrl: "https://github.com/DarrellJBullock/ai-detective-console",
    liveUrl: "https://ai-detective-console.vercel.app",
    caseStudyUrl: "/case-studies#ai-detective-console",
    featured: true,
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Mock AI provider",
      "OpenAI-ready provider",
      "Claude-ready provider",
      "LocalStorage",
    ],
    highlights: [
      "Provider-agnostic AI layer with mock, OpenAI-ready, and Claude-ready implementations",
      "Evidence tracking and contradiction detection across suspect interviews",
      "Zustand-driven state management for branching case progress",
      "Cinematic console-style UI with save/resume support",
    ],
    problem:
      "AI-driven narrative games need suspect responses that feel consistent and can be checked against evidence, while also being resilient to swapping or mocking the underlying LLM provider during development.",
    solution:
      "The game routes all suspect dialogue through a provider-agnostic AI interface, so the same interview and contradiction-detection logic works against a deterministic mock provider during development and against OpenAI- or Claude-ready providers in production.",
    architecture:
      "Zustand stores case state (evidence, suspect memory, contradictions); a provider abstraction layer routes prompts to a mock, OpenAI-ready, or Claude-ready backend; React/Framer Motion render the console-style interview and evidence-board UI, with LocalStorage persisting save progress.",
    challenges: [
      "Designing contradiction detection that works reliably against LLM-generated suspect answers",
      "Building an AI provider abstraction that swaps cleanly between mock and real LLM backends",
      "Keeping branching case state consistent across saves and multiple suspect interviews",
    ],
    futureRoadmap: [
      "Connect a production LLM provider for live suspect interviews",
      "Add additional cases with deeper branching narratives",
      "Add a difficulty/hint system for contradiction detection",
    ],
    resumeBullet:
      "Built AI Detective: Console, an LLM-powered mystery game with provider-agnostic AI, evidence tracking, and contradiction detection.",
  },
  {
    id: "pr-review",
    slug: "pr-review",
    title: "PR Review",
    category: "AI Developer Tool, Code Review, Senior Engineering",
    filters: ["AI", "Developer Tools"],
    tagline:
      "An AI-powered pull request review coach that helps developers catch risk before human review.",
    description:
      "PR Review is an AI-assisted code review coach. It analyzes a pull request for risk, missing test coverage, and code quality issues, and gives developers senior-engineer-style feedback before a human reviewer ever looks at the diff.",
    portfolioAngle:
      "Built an AI-powered pull request review coach that analyzes code risk, finds test gaps, and gives developers senior-engineer feedback before human review.",
    status: "In Development",
    githubUrl: "https://github.com/DarrellJBullock/code-review-coach",
    liveUrl: "https://web-phi-peach-94.vercel.app",
    caseStudyUrl: "/case-studies#pr-review",
    featured: true,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
      "FastAPI or Node",
      "PostgreSQL",
      "LLM provider abstraction",
      "Background jobs",
    ],
    highlights: [
      "Automated risk analysis surfaced before human code review",
      "Test gap detection tied directly to changed files",
      "GitHub API integration for pulling real PR diffs and metadata",
      "Background job pipeline for asynchronous, non-blocking analysis",
    ],
    problem:
      "Human reviewers spend a lot of time catching issues that could be flagged automatically, risky diffs, missing tests, unclear intent, before they ever open the PR.",
    solution:
      "PR Review pulls a pull request's diff and metadata via the GitHub API, runs it through an LLM-backed analysis pipeline in a background job, and returns a structured risk report: what's risky, what's untested, and what a senior reviewer would flag first.",
    architecture:
      "A Next.js frontend surfaces PR analysis results; a Node/FastAPI service handles GitHub API calls and orchestrates background jobs; an LLM provider abstraction layer generates the risk and test-gap analysis, with results persisted in PostgreSQL for history and comparison across PRs.",
    challenges: [
      "Structuring LLM output into consistent, actionable risk categories rather than free-form text",
      "Designing background job handling so analysis doesn't block the PR review UI",
      "Scoping test-gap detection accurately across varied codebases and languages",
    ],
    futureRoadmap: [
      "Add inline GitHub PR comments from the analysis pipeline",
      "Support additional LLM providers and model comparison",
      "Add team-level risk trend dashboards",
    ],
    resumeBullet:
      "Built PR Review, an AI-powered code review coach that surfaces risk and test gaps in pull requests via a GitHub-integrated analysis pipeline.",
  },
  {
    id: "weatherwise-ai",
    slug: "weatherwise-ai",
    title: "WeatherWise AI",
    category: "Weather, Senior Frontend, Performance, Maps",
    filters: ["AI", "Frontend"],
    tagline:
      "A mobile-first weather dashboard focused on speed, maps, alerts, offline fallback, and Core Web Vitals.",
    description:
      "WeatherWise AI is a mobile-first weather dashboard built as a frontend performance showcase: alert-first UX, map layers, offline fallback, and measured Core Web Vitals, not just another weather widget.",
    portfolioAngle:
      "Built a mobile-first weather dashboard focused on speed, alert-first UX, maps, offline support, edge caching, and measurable frontend performance.",
    status: "In Development",
    githubUrl: "https://github.com/DarrellJBullock/weatherwise-ai",
    liveUrl: "https://weather-watch-gamma.vercel.app",
    caseStudyUrl: "/case-studies#weatherwise-ai",
    featured: true,
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Server Components",
      "Edge caching",
      "PWA",
      "Lighthouse reports",
      "Mock weather provider",
    ],
    highlights: [
      "Alert-first layout that prioritizes severe weather above the fold",
      "Server Components and edge caching for fast first paint",
      "PWA support with offline fallback when connectivity drops",
      "Measured Core Web Vitals with recorded Lighthouse reports",
    ],
    problem:
      "Weather apps are usually cluttered and slow on mobile, and rarely treat performance as a first-class feature even though speed directly affects usefulness during severe weather.",
    solution:
      "WeatherWise AI leans on Server Components and edge caching to minimize client JavaScript, prioritizes alerts in the layout so critical information loads first, and adds a PWA layer with offline fallback so the dashboard stays useful with poor connectivity.",
    architecture:
      "Next.js App Router Server Components fetch and cache weather data at the edge; a mock weather provider abstraction stands in for a live weather API; a service worker/PWA layer provides offline fallback; Lighthouse reports track Core Web Vitals as a build-time discipline.",
    challenges: [
      "Keeping bundle size and client JavaScript minimal while still supporting interactive maps",
      "Designing a useful offline fallback experience instead of a blank error state",
      "Making alert-first layout decisions that hold up across device sizes",
    ],
    futureRoadmap: [
      "Connect a live weather data provider in place of the mock provider",
      "Add radar map layers with historical playback",
      "Publish ongoing Lighthouse/Core Web Vitals tracking over time",
    ],
    resumeBullet:
      "Built WeatherWise AI, a performance-first mobile weather dashboard using Server Components, edge caching, and PWA offline support.",
  },
  {
    id: "healthcare-claims-warehouse",
    slug: "healthcare-claims-warehouse",
    title: "Healthcare Claims Analytics Warehouse",
    category: "Healthcare, SQL, Data Engineering, Compliance-Aware Analytics",
    filters: ["Healthcare", "Data"],
    tagline:
      "A HIPAA-aware synthetic healthcare claims warehouse with SQL marts, quality checks, masking, and audit logging.",
    description:
      "A production-style healthcare claims analytics warehouse and dashboard, built entirely on synthetic data. Models the full pipeline from raw claims through staging, a dimensional warehouse, and nine SQL-first analytics marts, behind a Django REST API and a React operations dashboard.",
    portfolioAngle:
      "Built a HIPAA-aware healthcare claims analytics warehouse using Python, Django, React, PostgreSQL, advanced SQL, role-based views, masked identifiers, audit logging, export controls, and data quality checks.",
    status: "In Development",
    githubUrl: "https://github.com/DarrellJBullock/healthcare-claims-warehouse",
    liveUrl: "https://healthcare-claims-warehouse-fronten.vercel.app",
    caseStudyUrl: "/case-studies#healthcare-claims-warehouse",
    featured: true,
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Recharts",
      "Docker Compose",
      "Advanced SQL",
    ],
    highlights: [
      "Nine SQL-first analytics marts built on a dimensional warehouse (raw → staging → warehouse → marts)",
      "Six role-based demo personas (Admin, Data Engineer, Claims Analyst, Manager, Auditor, Read Only) with masking- and role-aware API responses",
      "Consistent identifier masking (e.g. MBR-10039281 → MBR-••••9281) enforced server-side and mirrored in the frontend",
      "15 SQL-defined data quality checks and full audit logging of every sensitive action",
    ],
    problem:
      "Healthcare claims data is hard to analyze and govern because claims, service lines, members, providers, payers, denials, adjustments, payments, and eligibility records live in messy source systems, and teams need trusted SQL marts, quality checks, role-based views, masked identifiers, audit history, and export controls before that data can be safely used for analytics.",
    solution:
      "The warehouse models the pipeline end-to-end, from raw synthetic source tables through staging views to a dimensional warehouse and nine SQL-first analytics marts, behind a Django REST API that enforces role checks and identifier masking, and a React operations dashboard that simply reflects whatever the API decides to return, mask, or deny.",
    architecture:
      "PostgreSQL holds six schemas (raw, staging, warehouse, marts, audit, compliance); Django migrations own the raw, audit, and compliance tables, while staging views, warehouse dimensions/facts, and all nine marts are built by executing SQL files through a build_marts management command. A Django REST Framework API reads from the marts/warehouse via raw SQL and applies role checks and masking; a React/TypeScript dashboard consumes it, switching between six demo roles via an X-Demo-Role header.",
    challenges: [
      "Designing a SQL-first pipeline (raw → staging → warehouse → marts) that stays separate from Django's ORM instead of modeling everything as Django models",
      "Enforcing masking and role-based access consistently at the API boundary so the frontend never has to be the source of truth for permissions",
      "Covering the full 6-role × route access-control matrix with real end-to-end API tests, not just unit tests",
    ],
    futureRoadmap: [
      "Add real authentication layered on top of the existing role model",
      "Move from truncate/reload marts to materialized views with scheduled refresh",
      "Add SCD Type 2 history for providers and payers, not just members",
    ],
    resumeBullet:
      "Built a HIPAA-aware healthcare claims analytics warehouse using Python, Django, React, PostgreSQL, advanced SQL, synthetic claims data, role-based views, masked identifiers, audit logging, export controls, and data quality checks across claims, payments, denials, providers, payers, and members.",
  },
  {
    id: "ascendra",
    slug: "ascendra",
    title: "Ascendra",
    category: "AI Game, Startup Simulation, Business Strategy",
    filters: ["AI", "Games"],
    tagline:
      "An AI-powered startup simulation game — build a company week by week toward a $1M valuation before you run out of cash.",
    description:
      "Ascendra is a startup simulation game: name a company, pick an industry and founder background, then advance week by week as an AI-driven event engine throws realistic curveballs at your cash, MRR, valuation, and technical debt.",
    portfolioAngle:
      "Built an AI-powered startup simulation game with a deterministic turn engine, AI-generated event narratives with a graceful fallback, and a rate-limited proxy that keeps the AI provider key off the client.",
    status: "Prototype",
    githubUrl: "https://github.com/DarrellJBullock/ascendra-game",
    liveUrl: "https://frontend-psi-one-63.vercel.app",
    caseStudyUrl: undefined,
    featured: false,
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Recharts",
      "FastAPI",
      "OpenAI (gpt-4o-mini)",
      "Docker Compose",
    ],
    highlights: [
      "Deterministic client-side turn engine simulating cash, MRR, valuation, and technical debt",
      "AI-generated event narratives with a templated fallback so the game keeps working if the AI call fails or times out",
      "Stateless FastAPI proxy keeps the OpenAI key off the client, behind per-IP rate limiting and an abuse-guard middleware",
      "82 frontend tests and 22 backend tests (OpenAI mocked, no live network calls) covering the simulation engine",
    ],
    problem:
      "Business simulation games are usually either shallow trivia or slow, static branching narratives. Ascendra needed a core loop that felt reactive and replayable without depending on a live AI call for every turn.",
    solution:
      "Ascendra separates a deterministic client-side simulation engine (cash, MRR, valuation, technical debt) from an AI narrative layer: the engine always produces a valid game state, and a stateless FastAPI proxy generates AI event narratives with OpenAI when available, falling back to templated narratives if the AI call fails, times out, or the backend is down.",
    architecture:
      "A Next.js/Zustand frontend owns all game state and the deterministic turn engine, persisted to localStorage; a stateless FastAPI backend proxies AI event-narrative generation to OpenAI so the API key never reaches the browser, protected by per-IP rate limiting and an abuse-guard middleware.",
    challenges: [
      "Designing a deterministic simulation engine that stays fun and balanced across widely different industries and founder backgrounds",
      "Keeping the game fully playable when the AI narrative call fails, times out, or the backend is unavailable",
      "Scoping a v1 \"playable slice\" tightly enough to validate the core loop before investing in breadth or polish",
    ],
    futureRoadmap: [
      "Run an internal playtest to validate the core loop holds attention",
      "Expand team management, more industries, and competitor intelligence per the phased roadmap",
      "Add a full design-polish pass beyond the v1 slice",
    ],
    resumeBullet:
      "Built Ascendra, an AI-powered startup simulation game with a deterministic turn engine, AI-generated event narratives with graceful fallback, and a rate-limited proxy protecting the AI provider key.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByFilter(filter: ProjectFilter): Project[] {
  if (filter === "All") return projects;
  return projects.filter((project) => project.filters.includes(filter));
}
