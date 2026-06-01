# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start           # Dev server (ng serve)
npm run build       # Production build → dist/
npm run watch       # Build in watch mode (development config)
npm test            # Unit tests via Vitest
npm run serve:ssr:wayne-heart  # Serve SSR app via Express (port 4000)
```

## Architecture

Angular 21 application with SSR (Server-Side Rendering) and Capacitor for mobile.

**Rendering**: All routes are fully prerendered at build time (`RenderMode.Prerender` in `app.routes.server.ts`). The Express server in `src/server.ts` serves the prerendered output.

**Standalone components**: No NgModules — all components use `standalone: true`. This is the Angular 21 standard pattern throughout.

**Single source of truth for content**: All business-specific copy, images, links, stats, and navigation items live in [`src/app/common/constant/business.ts`](src/app/common/constant/business.ts). This file is the only thing that needs updating when rebranding for a new client. It exports typed interfaces (`NavItem`, `Service`, `Stat`, `GalleryItem`, etc.) and a `BUSINESS` constant.

**Routing**: Defined in `src/app/app.routes.ts`. Currently active routes are `/` (home) and `/contact-us`. A `/gallery` route is commented out (not yet implemented). All unmatched routes redirect to home.

**Styling**: SCSS with theme variables in `src/styles/theme.scss`. Global styles in `src/styles.scss`. FontAwesome for icons (`@fortawesome/fontawesome-free`).

## Key Directories

- `src/app/page/` — Routable page components (`home/`, `contact-us/`)
- `src/app/common/component/` — Shared components (`header/`, `footer/`)
- `src/app/common/constant/` — Business data constants
- `src/app/common/pipe/` — Custom Angular pipes
- `public/` — Static assets served directly (robots.txt, favicons)
- `assets/` — Images referenced by components

## Planning Docs

- [md/git-workflow.md](md/git-workflow.md) — branch and deploy process
- [md/gallery-plan.md](md/gallery-plan.md) — dynamic Instagram gallery options and recommended approach

## Git Workflow

See [md/git-workflow.md](md/git-workflow.md) for the full branching and deployment process.

Short version: feature branches → `develop` → `prod` (uncompiled live source) → run `deploy-to-live.ps1` on `live` branch to compile and push static files to GitHub Pages.

## Testing

Vitest with jsdom. Config in `vitest.config.ts`. Run a single test file:

```bash
npx vitest run src/app/path/to/spec.ts
```
