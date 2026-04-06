# Aldanex.fi Rebuild Execution Plan

## Objective

Rebuild `aldanex.fi` from WordPress to Next.js + React with an MVP-first scope, then expand to full parity.

## MVP Scope (Phase 1 Release)

- Homepage
- Core business pages (`property` and `it`)
- Homepage contact section + working contact form
- Working contact form
- SEO baseline (metadata, sitemap, robots)
- Production deployment and monitoring

## Working Assumptions

- Content strategy: hardcoded content first, CMS later.
- Tech stack: Next.js App Router + React.
- Deployment target: Vercel (or equivalent if required).

## Team Roles (recommended)

- Product/Content: page inventory, copy approval, prioritization.
- Design/UI: visual rules, responsive behavior, asset quality.
- Frontend: components, routes, metadata, form UX.
- QA: parity checks, accessibility, cross-browser, launch validation.
- DevOps: deploy config, domain/SSL, redirects, monitoring.

---

## Phase-by-Phase TODOs

### 1) Discovery and Inventory

**Goal:** Create a complete migration source of truth.

- [x] Crawl all existing WP URLs (including legal, hidden nav/footer links).
- [ ] Build content inventory sheet per page:
  - [ ] H1/H2 structure
  - [ ] body copy
  - [ ] CTAs
  - [ ] form fields
  - [ ] SEO title/description
- [ ] Export and organize all media assets to `public/assets`.
- [ ] Mark MVP pages vs post-MVP pages.
- [ ] Record current SEO baseline and key rankings/pages.

**Deliverable:** Signed-off inventory sheet + finalized MVP page list.

### 2) Project Foundation

**Goal:** Ensure maintainable project structure and standards.

- [x] Initialize/confirm Next.js App Router project structure.
- [x] Create/confirm directories:
  - [x] `src/app`
  - [x] `src/components`
  - [x] `src/sections`
  - [x] `src/lib`
  - [x] `public/assets`
- [x] Set global styling rules and design tokens.
- [ ] Configure quality checks:
  - [x] ESLint
  - [x] Prettier
  - [ ] TypeScript strict mode (if/when TS is enabled)
  - [x] CI build/lint checks

**Deliverable:** Green CI checks and documented project conventions.

### 3) Design System and Layout

**Goal:** Reusable UI primitives and consistent page shell.

- [x] Implement root layout (`src/app/layout.*`) with:
  - [x] header
  - [x] footer
  - [x] container/grid rules
  - [x] responsive nav
- [x] Build reusable UI primitives:
  - [x] Button
  - [x] Card
  - [x] Section
  - [x] Container
  - [x] Heading
  - [x] Input
  - [x] Textarea
- [x] Add shared SEO helper utilities in `src/lib`.

**Deliverable:** Reusable component baseline used by at least one page.

### 4) MVP Pages and Content Migration

**Goal:** Ship business-critical pages with approved content.

- [x] Build homepage (`src/app/page.*`) using modular sections.
- [x] Build core static routes:
  - [x] `src/app/property/page.*`
  - [x] `src/app/it/page.*`
- [x] Rebuild the homepage contact section from the current WP site.
- [x] Migrate approved copy directly into code (hardcoded-first).
- [x] Ensure internal links and nav states are correct on all breakpoints.

**Deliverable:** Full MVP page set feature-complete and review-ready.

### 5) Contact Form + SEO + Performance Baseline

**Goal:** Functional lead capture and production-grade fundamentals.

- [ ] Implement contact endpoint (`src/app/api/contact/route.*`).
- [ ] Add submit UX states (idle/loading/success/error).
- [ ] Configure per-page metadata with Next Metadata API.
- [ ] Add `sitemap.xml` and `robots.txt`.
- [ ] Add OG/Twitter defaults.
- [ ] Optimize images (`next/image`, sizing, lazy loading).
- [ ] Add analytics (GA4 or Plausible) + conversion events.

**Deliverable:** Contact flow working and SEO/performance baseline complete.

### 6) QA and WP Parity Validation

**Goal:** Ensure correctness before launch.

- [ ] Visual parity pass against current WP site.
- [ ] Responsive checks (mobile/tablet/desktop).
- [ ] Browser checks (latest Chrome, Safari, Firefox, Edge).
- [ ] Functional checks:
  - [ ] all links
  - [ ] forms
  - [ ] 404 page behavior
- [ ] Accessibility baseline:
  - [ ] semantic headings
  - [ ] labels/inputs
  - [ ] keyboard nav
  - [ ] contrast
- [ ] Lighthouse run and top-priority fixes.
- [ ] Prepare old-to-new URL mapping and 301 redirects.

**Deliverable:** QA sign-off + redirect map approved.

### 7) Launch and Stabilization

**Goal:** Safe go-live and post-launch confidence.

- [ ] Configure production deployment (Vercel or target platform).
- [ ] Set environment variables and domain/SSL.
- [ ] Publish redirect rules.
- [ ] Launch in low-traffic window.
- [ ] Monitor for 1-2 weeks:
  - [ ] errors/logs
  - [ ] core web vitals
  - [ ] form submissions
  - [ ] key traffic/conversion metrics

**Deliverable:** Stable production release with monitoring in place.

---

## Definition of Done (MVP)

- [ ] Homepage + `property` + `it` live in production.
- [ ] Contact form submits successfully and is verified end-to-end.
- [ ] SEO essentials in place (metadata, sitemap, robots, social previews).
- [ ] No critical QA bugs open.
- [ ] Redirects from legacy WP URLs are active, including old `/saas/` mapping if `it` is used in the rebuild.
- [ ] Team handoff notes and backlog for Phase 2 are documented.

## Phase 2 Backlog (after MVP)

- CMS integration for editable content.
- Blog/news migration.
- Enhanced structured data and technical SEO.
- Content workflow and publishing governance.
