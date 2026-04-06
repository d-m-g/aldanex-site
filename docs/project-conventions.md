# Project Conventions

## Stack

- Framework: Next.js App Router
- UI: React
- Language: JavaScript
- Styling: global CSS tokens plus route-scoped CSS modules

## Directory Structure

- `src/app`: routes, layouts, metadata, route-level styling
- `src/components`: reusable UI primitives and shared components
- `src/sections`: page sections composed from reusable components
- `src/lib`: utilities, configuration, and SEO helpers
- `public/assets`: static images, icons, and exported media
- `docs`: migration notes, inventories, and implementation plans

## Styling Rules

- Define shared tokens in `src/app/globals.css`
- Use CSS variables for color, spacing, radii, shadows, and layout width
- Prefer CSS modules for page-specific styling
- Keep typography and spacing aligned to token values

## Quality Checks

- ESLint: `npm run lint`
- Prettier: `npx prettier --check .`
- Production build: `npm run build`
- CI mirrors local validation through GitHub Actions

## TypeScript

- TypeScript strict mode remains pending until the repo is migrated from JavaScript to TypeScript.
