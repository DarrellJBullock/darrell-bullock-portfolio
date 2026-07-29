# Darrell Bullock Portfolio, Claude Code Instructions

## Project

Project name:
djb-portfolio

Build a senior-level personal portfolio website for Darrell Bullock.

The portfolio should feel like an Engineering Command Center, not a generic developer portfolio.

The site should highlight:
- Senior software engineering experience
- AI-powered products
- Healthcare and data systems
- Frontend performance
- Code review and engineering quality
- Sports and game projects
- Product thinking
- Leadership and delivery ownership

## Default Claude behavior

Do not ask clarifying questions unless blocked.
Make reasonable assumptions, document them, and continue building.
Batch any required questions into one list before coding.
Do not stop after planning.
Create the plan, then implement it.
Build a working MVP first, then polish.
Prefer progress over waiting for small decisions.
Use placeholders where details are missing.
Document placeholders clearly in the README and source comments.

## Tech stack

Use:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Static project data in TypeScript
- Server Components where practical
- Client Components only for interactivity
- Vercel-ready deployment structure

Avoid unnecessary dependencies.
Avoid heavy animation packages.
Avoid unnecessary 3D unless it adds clear value and does not hurt performance.

## Design direction

Create a premium Engineering Command Center interface.

Visual style:
- Dark cinematic UI
- Command center panels
- Radar sweep accents
- AI system activity panels
- Healthcare data pipeline visuals
- Sports strategy/playbook lines
- PR review signal cards
- Layered glass panels
- Strong typography
- Subtle neon accents
- Smooth transitions
- Mobile-first layout
- Accessible contrast
- Reduced-motion support

Avoid:
- Generic portfolio templates
- Plain card grids
- Basic resume-only layouts
- Low-contrast text
- Heavy animation
- Broken placeholder links
- Fake claims

## Caricature and avatar direction

Include a premium stylized caricature or avatar of Darrell Bullock.

Use these local reference paths if present:

public/reference/darrell-reference-1.jpg
public/reference/darrell-reference-2.jpg

Reference details:
- Short curly hair
- Salt-and-pepper beard and mustache
- Glasses
- Calm, focused expression
- Mature senior engineer presence
- Professional, confident look

The caricature should feel:
- Premium
- Modern
- Professional
- Portfolio-ready
- Slightly stylized
- Recognizable as Darrell

The caricature should not feel:
- Goofy
- Childish
- Mascot-like
- Over-exaggerated

Preferred final asset path:

public/images/darrell-command-center-avatar.png

If the final avatar asset does not exist, build a polished placeholder component called CommandCenterPortrait.

The placeholder should:
- Render without errors
- Fit the hero section
- Use an Engineering Command Center frame
- Show the label: Darrell Bullock Command Center Avatar
- Reference the photo paths only when available
- Not block the build

Privacy note:
Do not expose raw reference photos in production unless the user chooses to publish them. Prefer replacing raw reference photos with the final avatar artwork before deployment.

## Site pages

Create these routes:

/
 /projects
 /projects/[slug]
 /case-studies
 /ai-labs
 /about
 /resume
 /contact

## Home page requirements

The home page should communicate Darrell’s value within 30 seconds.

Include:
- Hero section
- Hero avatar or CommandCenterPortrait
- Animated command center background
- Senior engineer positioning
- Featured projects
- Signal grid of strengths
- Case study preview
- AI Labs preview
- Contact CTA

Hero headline:
Senior Software Engineer building AI-powered, data-driven web products.

Hero subheadline:
20+ years across frontend, backend, cloud, healthcare systems, data pipelines, engineering leadership, and product delivery.

Primary CTA:
View Projects

Secondary CTA:
Contact Me

Signal grid items:
- Frontend Engineering
- Full-Stack Systems
- AI Applications
- Healthcare Workflows
- Data Pipelines
- Performance Optimization
- Code Review and Quality
- Sports Simulation
- Product Strategy
- Engineering Leadership

## Projects section

The projects already exist in GitHub. Do not rebuild the individual apps inside this portfolio.

Build the portfolio presentation, project cards, project detail pages, and case study structure.

Include these six projects:

1. AislePilot
2. Campus Legend
3. AI Detective: Console
4. PR Review
5. WeatherWise AI
6. Healthcare Claims Analytics Warehouse

Use placeholder URLs when exact GitHub or live demo URLs are missing.

Use this URL pattern:
https://github.com/YOUR_USERNAME/REPO_NAME
https://PROJECT_NAME.vercel.app

Add TODO comments in lib/projects.ts where links need updates.

## Project registry

Create:

lib/projects.ts

Each project should include:
- id
- slug
- title
- category
- tagline
- description
- portfolioAngle
- status
- githubUrl
- liveUrl
- caseStudyUrl
- featured
- stack
- highlights
- problem
- solution
- architecture
- challenges
- futureRoadmap
- resumeBullet

## Project data

### AislePilot

Category:
Retail, AI, Shopping, Full-Stack

Tagline:
A smart shopping list app that helps users plan trips, organize items, and shop faster.

Portfolio angle:
Built a mobile-first shopping assistant that combines product planning, store-aware UX, saved lists, and full-stack product design.

Stack:
Next.js, TypeScript, Tailwind CSS, Supabase, Kroger API-ready provider layer, PostgreSQL, Auth, local persistence

### Campus Legend

Category:
Sports Game, RPG, Simulation

Tagline:
A console-style athlete career RPG where users build a player from freshman season to pro potential.

Portfolio angle:
Built a sports career RPG with player progression, decision systems, season simulation, and console-style presentation.

Stack:
Next.js, React, TypeScript, Tailwind CSS, Framer Motion, LocalStorage, game state engine

### AI Detective: Console

Category:
AI Game, LLM, Mystery, Console-Style UI

Tagline:
A cinematic mystery game where players interview AI-powered suspects and solve a branching case.

Portfolio angle:
Built a console-style AI detective game with LLM-ready suspect interviews, evidence tracking, contradiction detection, save progress, and cinematic React UI.

Stack:
Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Zustand, mock AI provider, OpenAI-ready provider, Claude-ready provider, LocalStorage

### PR Review

Category:
AI Developer Tool, Code Review, Senior Engineering

Tagline:
An AI-powered pull request review coach that helps developers catch risk before human review.

Portfolio angle:
Built an AI-powered pull request review coach that analyzes code risk, finds test gaps, and gives developers senior-engineer feedback before human review.

Stack:
Next.js, TypeScript, Tailwind CSS, GitHub API, FastAPI or Node, PostgreSQL, LLM provider abstraction, background jobs

### WeatherWise AI

Category:
Weather, Senior Frontend, Performance, Maps

Tagline:
A mobile-first weather dashboard focused on speed, maps, alerts, offline fallback, and Core Web Vitals.

Portfolio angle:
Built a mobile-first weather dashboard focused on speed, alert-first UX, maps, offline support, edge caching, and measurable frontend performance.

Stack:
Next.js App Router, React, TypeScript, Tailwind CSS, Server Components, edge caching, PWA, Lighthouse reports, mock weather provider

### Healthcare Claims Analytics Warehouse

Category:
Healthcare, SQL, Data Engineering, Compliance-Aware Analytics

Tagline:
A HIPAA-aware synthetic healthcare claims warehouse with SQL marts, quality checks, masking, and audit logging.

Portfolio angle:
Built a HIPAA-aware healthcare claims analytics warehouse using synthetic data, advanced SQL, role-based views, masked identifiers, audit logging, export controls, and data quality checks.

Stack:
Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, Prisma or direct SQL, Docker Compose, advanced SQL, warehouse marts

## Components

Create reusable components.

components/ui:
- AppShell
- Navbar
- Footer
- Button
- Card
- Badge
- SectionHeader
- MetricCard
- AnimatedPanel
- CommandConsole
- ProjectSignal
- TechPill
- Timeline
- EmptyState
- ContactForm
- PageTransition

components/home:
- Hero
- HeroAvatar
- CommandCenterPortrait
- CommandCenterBackground
- SignalGrid
- FeaturedProjects
- EngineeringStrengths
- CaseStudyPreview
- ContactCTA

components/projects:
- ProjectGrid
- ProjectCard
- ProjectDetailHero
- ProjectMetadata
- ProjectHighlights
- ProjectStack
- ProjectRoadmap
- ProjectLinks

components/case-studies:
- CaseStudyCard
- MissionReportLayout
- ArchitecturePreview
- TradeoffPanel

components/about:
- AvatarPanel
- CareerSummary
- LeadershipPanel
- SkillsMatrix

components/resume:
- ResumeSummary
- ExperienceHighlights
- SkillCloud
- ProjectResumeBullets

components/contact:
- ContactPanel
- AvailabilityCard
- ContactFormCard

## UX requirements

Include:
- Animated command center hero
- Premium avatar placement
- Radar sweep background
- Cinematic project cards
- Playbook line accents
- Code console reveal effect
- Smooth page transitions
- Mobile menu
- Project filtering by category
- Featured project section
- Case study cards

Project filters:
- All
- AI
- Games
- Healthcare
- Data
- Frontend
- Developer Tools
- Sports

## Accessibility requirements

Use:
- Semantic HTML
- Keyboard navigation
- Visible focus states
- Reduced-motion support
- Readable contrast
- Mobile-friendly tap targets
- ARIA labels where helpful

Avoid hover-only interactions.

## Performance requirements

Use:
- Server Components where practical
- Focused Client Components
- Stable layout dimensions
- Lazy-loaded non-critical sections
- next/image for local images
- SEO metadata
- Open Graph metadata

Run:
npm run lint
npm run build

Fix errors before final response.

## SEO metadata

Title:
Darrell Bullock | Senior Software Engineer

Description:
Senior Software Engineer building AI-powered, data-driven web products across frontend engineering, healthcare workflows, data systems, code review tools, and sports simulations.

Add metadata for:
- Home
- Projects
- AI Labs
- About
- Contact

## Git behavior

Set up Git after the first successful scaffold build.

Repo name:
djb-portfolio

After first build passes:
- Create README.md
- Create .gitignore
- Create .env.example
- Create GitHub Actions CI
- Create issue templates
- Create PR template
- Commit the scaffold

Commit message:
Initial portfolio scaffold

If GitHub CLI is available and authenticated:

gh repo create darrell-bullock-portfolio --public --source=. --remote=origin --push

If GitHub CLI is unavailable, print manual commands instead.

## README requirements

Create a professional README.

Include:
- Project title
- Portfolio purpose
- Tech stack
- Design concept
- Caricature and avatar direction
- Project lineup
- Architecture
- Folder structure
- How to run locally
- How to update project links
- How to replace avatar placeholder with final caricature art
- How to add new projects
- Deployment to Vercel
- Custom domain setup notes
- Accessibility notes
- Performance notes
- Future roadmap

## Local commands

Use:

npm install
npm run dev
npm run lint
npm run build

## Acceptance criteria

The app must:
- Run with npm run dev
- Build with npm run build
- Pass lint
- Work on mobile, tablet, and desktop
- Include a dynamic Home page
- Include avatar or CommandCenterPortrait placement
- Include all six projects
- Include detail pages for all projects
- Include GitHub and live demo placeholders
- Include Case Studies page
- Include AI Labs page
- Include About page
- Include Resume page
- Include Contact page
- Support reduced motion
- Support keyboard navigation
- Include portfolio-ready README
- Include GitHub repo files
- Commit no secrets
- Feel premium, custom, personal, and senior-level

## Final QA

Review the project as:
- Senior frontend engineer
- Creative director
- Recruiter
- Hiring manager
- Accessibility reviewer
- Performance reviewer

Check:
- Visual quality
- Avatar placement
- Project clarity
- Portfolio story
- Mobile layout
- Navigation
- Keyboard access
- Reduced motion
- SEO metadata
- Broken links
- Broken imports
- Build errors
- README quality
- Project data quality
- Case study usefulness

Fix issues.

Run:
npm run lint
npm run build

## Final response

Summarize:
- What was built
- How to run it
- Where project data lives
- Where the avatar/reference image logic lives
- How to replace avatar placeholder with final caricature art
- How to update GitHub and live demo links
- Which pages were created
- What to demo first
- What should be improved next
