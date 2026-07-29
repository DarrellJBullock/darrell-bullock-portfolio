# Darrell Bullock — Portfolio (`djb-portfolio`)

A senior-level personal portfolio for Darrell Bullock, built as an **Engineering Command Center**: a dark, cinematic interface that presents senior software engineering work, AI product experiments, healthcare and data systems, sports simulation projects, and code review discipline, without looking like a generic developer portfolio template.

## Portfolio purpose

This site is the presentation layer for six existing GitHub projects. It does **not** rebuild those projects, it showcases them: what problem each one solves, how it's architected, what trade-offs were made, and where it's headed next. The goal is to communicate senior-level engineering judgment within about 30 seconds on the home page, then let a recruiter, hiring manager, or collaborator go as deep as they want via project detail pages and case studies.

## Tech stack

- **Next.js** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-based `@theme` token system, no `tailwind.config.js`)
- **Framer Motion** for scroll reveals and page transitions
- Static project data in `lib/projects.ts` (no CMS, no database)
- Server Components by default; Client Components only where interactivity requires it (nav, filters, forms, animated reveals)
- Vercel-ready output, no special build config required

## Design concept

**Engineering Command Center.** The visual language borrows from radar/HUD interfaces, systems dashboards, and console UIs:

- A dark void background (`#05070c`) with a faint cyan grid overlay
- A dual-accent palette: **signal cyan** (`#4ce7e0`) for "systems online" energy, **ember amber** (`#f5a623`) for alerts/trade-offs/warmth
- `Space Grotesk` for display type, `Inter` for body copy, `JetBrains Mono` for console/data text
- A radar-sweep motif that recurs in the hero background and the avatar frame
- Glass panels (`.glass-panel`), HUD corner brackets (`.hud-frame`), and a typewriter-style `CommandConsole` component for the "boot log" feel
- All motion respects `prefers-reduced-motion`, globally enforced in `app/globals.css` and per-component via `hooks/useReducedMotion.ts`

## Caricature and avatar direction

The brief calls for a premium stylized caricature of Darrell based on two reference photos. As instructed, **the final illustrated asset does not exist yet**, so the site renders a polished placeholder instead: `components/home/CommandCenterPortrait.tsx`.

- Reference photos live at `public/reference/darrell-reference-1.jpg` and `public/reference/darrell-reference-2.jpg`. They are **not rendered anywhere in the UI** (see Privacy note below); the component only checks that they exist.
- The placeholder renders a "DB" monogram inside a HUD ring with a radar sweep, orbiting domain tags (AI / Healthcare / Data / Sports / Frontend), and the accessible label **"Darrell Bullock Command Center Avatar"**.
- It's used at hero size on the home page (`components/home/HeroAvatar.tsx`) and at compact size on the About page (`components/about/AvatarPanel.tsx`).
- The component checks for `public/images/darrell-command-center-avatar.png` at render time. **Drop the final artwork at that exact path and the placeholder is automatically replaced**, no code changes required.

### Privacy note

The two reference photos are real personal photos of Darrell. They're kept in `public/reference/` for local reference only, are **not displayed by any component**, and `public/reference/` is listed in `.gitignore` so they are never committed or pushed to the public repo. They exist only on the local machine that scaffolded this project. If you clone this repo fresh, `CommandCenterPortrait` still works, it just reports `0/2` reference assets linked and renders the placeholder.

## Project lineup

| Project | Category |
| --- | --- |
| AislePilot | Retail, AI, Shopping, Full-Stack |
| Campus Legend | Sports Game, RPG, Simulation |
| AI Detective: Console | AI Game, LLM, Mystery, Console-Style UI |
| PR Review | AI Developer Tool, Code Review, Senior Engineering |
| WeatherWise AI | Weather, Senior Frontend, Performance, Maps |
| Healthcare Claims Analytics Warehouse | Healthcare, SQL, Data Engineering, Compliance-Aware Analytics |

All six projects live externally on GitHub, this repo only presents them. See [Updating project links](#how-to-update-github-and-live-demo-links) below.

## Architecture

- `app/` — Next.js App Router routes: `/`, `/projects`, `/projects/[slug]`, `/case-studies`, `/ai-labs`, `/about`, `/resume`, `/contact`, plus `not-found.tsx`.
- `components/ui/` — shared design-system primitives (Button, Card, Badge, Navbar, AppShell, ContactForm, CommandConsole, etc.)
- `components/home/`, `components/projects/`, `components/case-studies/`, `components/about/`, `components/resume/`, `components/contact/` — page-section components, grouped by the page that owns them.
- `lib/projects.ts` — the project registry (single source of truth for all project content and metadata).
- `lib/site.ts`, `lib/constants.ts`, `lib/utils.ts` — site-wide config, nav/filter/signal constants, and small helpers.
- `hooks/` — `useReducedMotion` and `useActiveSection`.

## Folder structure

```
app/
  layout.tsx
  page.tsx
  globals.css
  projects/page.tsx
  projects/[slug]/page.tsx
  case-studies/page.tsx
  ai-labs/page.tsx
  about/page.tsx
  resume/page.tsx
  contact/page.tsx
  not-found.tsx
components/
  ui/
  home/
  projects/
  case-studies/
  about/
  resume/
  contact/
hooks/
lib/
  projects.ts
  site.ts
  constants.ts
  utils.ts
public/
  reference/        # private reference photos, not rendered in the UI
  images/            # drop the final avatar PNG here
```

## How to run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npm run build   # Production build
```

## How to update project links

Every project's GitHub and live-demo URLs are placeholders. Update them in **`lib/projects.ts`**:

```ts
githubUrl: "https://github.com/YOUR_USERNAME/aislepilot", // TODO: update with real GitHub URL
liveUrl: "https://aislepilot.vercel.app", // TODO: update with real live demo URL
```

Search the file for `TODO` to find every placeholder that needs a real URL. Also update:

- `lib/site.ts` → `social.github`, `social.linkedin`
- `components/resume/ResumeSummary.tsx` → the `/resume.pdf` download link (add a real PDF to `public/`)

## How to replace the avatar placeholder with final caricature art

1. Generate or commission the final stylized caricature based on the reference photos.
2. Save it as `public/images/darrell-command-center-avatar.png`.
3. That's it, `CommandCenterPortrait` checks for this exact path at render time and will automatically swap from the placeholder to the real image with no code changes.
4. Once the final art is in place, consider removing the raw files in `public/reference/` (see Privacy note above).

## How to add new projects

1. Add a new entry to the `projects` array in `lib/projects.ts` following the existing `Project` shape (see the `Project` interface at the top of the file).
2. Pick a `filters` array from the existing `ProjectFilter` categories in `lib/constants.ts` (or add a new one there and to `PROJECT_FILTERS`).
3. The project automatically appears in `/projects`, the filter grid, and gets a detail page at `/projects/[slug]` via `generateStaticParams`.
4. If it deserves a full case study, add a `caseStudyUrl` (e.g. `/case-studies#your-slug`) and it will show up on `/case-studies` via `MissionReportLayout`.

## Deployment to Vercel

1. Push this repo to GitHub (see below).
2. Import the repo in [Vercel](https://vercel.com/new).
3. No environment variables are required for the MVP (see `.env.example` for where future integrations would go).
4. Vercel will detect Next.js automatically, default build command (`next build`) and output work as-is.

### Custom domain setup

Once deployed, connect a custom domain from the Vercel project's **Settings → Domains** tab. Point your domain's DNS at Vercel per their on-screen instructions (typically an `A`/`ALIAS` record or `CNAME`), Vercel handles TLS automatically once DNS propagates.

## Accessibility notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link in `app/layout.tsx`
- Visible focus states globally via `*:focus-visible` in `globals.css`
- All interactive controls are keyboard-reachable (nav, mobile menu, project filters, contact form)
- `prefers-reduced-motion: reduce` disables all animation globally (`globals.css`) and is checked explicitly in `useReducedMotion`, `AnimatedPanel`, `CommandConsole`, `PageTransition`, and the magnetic `Button` hover effect
- Minimum 44×44px tap targets on interactive controls
- No hover-only interactions, everything with a hover state also works on focus/tap

## Performance notes

- Server Components by default; `"use client"` is scoped to components that need interactivity (nav, filters, forms, motion)
- `next/image` used for the avatar once the final asset exists
- Radar/HUD backgrounds are pure CSS (gradients + keyframes), not JS-driven, to keep the main thread free
- No heavy animation or 3D dependencies, Framer Motion is the only animation library, used sparingly

## Future roadmap

- Replace the `CommandCenterPortrait` placeholder with the final illustrated avatar
- Wire up real GitHub/live demo URLs for all six projects
- Connect the contact form to a real backend (Resend, Formspree, or a Next.js API route)
- Add a real resume PDF at `public/resume.pdf`
- Add real screenshots to each project detail page
- Consider a dedicated `/case-studies/[slug]` route if case studies grow beyond a single scrollable page

---

Built with Next.js, TypeScript, and Tailwind CSS.
