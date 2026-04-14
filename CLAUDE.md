# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # Start dev server (Vite)
bun build        # Production build
bun lint         # ESLint check
bun lint:fix     # ESLint auto-fix
bun type-check   # TypeScript check (no emit)
bun preview      # Preview production build
```

If `bun` is not available, fall back to `npm run dev`, `npx tsc --noEmit`, `npx eslint src/`, etc.

No test suite is configured.

## Architecture

This is a single-page React portfolio site built with Vite + TypeScript + Tailwind CSS.

**Single-column layout, max-w-3xl centered:**
- `PortfolioLayout` — top-level orchestrator
- `Hero` — name, title, typewriter tagline, social links
- `RightContent` — scrollable sections: About, Experience, Projects, Certifications, Contact

**All content lives in two config files — edit these to update the portfolio:**
- `src/config/data.ts` — `EXPERIENCES`, `PROJECTS`, `ABOUT_SECTIONS` arrays
- `src/config/constants.ts` — `NAVIGATION_ITEMS`, `SOCIAL_LINKS`, `CONTACT`, `RESUME_URL`, scroll offset constants

**Styling:** Dark background with terminal green accent (`--accent-green: 142 69% 58%`) defined in `src/index.css` as CSS custom properties and Tailwind `@layer components`. Key utility classes: `.nav-link`, `.tech-pill`, `.experience-card`, `.experience-title-link`, `.social-icon`. The `@/` path alias resolves to `src/`.

**Images/assets** (resume PDF) are served from `public/` and referenced by absolute path.

## Favicon

Two files must both be updated when changing the favicon — browsers always request `/favicon.ico` directly regardless of HTML `<link>` tags:

- `public/favicon.svg` — primary favicon (modern browsers)
- `public/favicon.ico` — fallback; must also be regenerated or browsers show the old icon

The accent green color `hsl(142,69%,58%)` is hardcoded in the SVG (CSS variables don't work in static SVG files).
