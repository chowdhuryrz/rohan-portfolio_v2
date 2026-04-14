# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite) — http://localhost:5173
npm run build        # Production build
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run type-check   # TypeScript check (no emit)
npm run preview      # Preview production build
```

No test suite is configured.

## Architecture

Single-page React portfolio, Vite + TypeScript + Tailwind CSS. All content is static — no API calls, no routing.

**Component tree:**
```
PortfolioLayout
├── Hero               # name, typewriter tagline, social icon links
└── RightContent       # scrollable sections wrapped in SectionWrapper
    ├── About
    ├── Experience
    ├── Projects
    ├── Certifications  ← own component (src/components/portfolio/Certifications.tsx)
    └── Contact + Footer
```

`SectionWrapper` applies a `reveal` / `visible` CSS class pair driven by `useInView` (intersection observer). This is the scroll-reveal animation — every section fades in when it enters the viewport.

## Editing Content

All portfolio content lives in two files — edit these, nothing else:

- **`src/config/data.ts`** — `EXPERIENCES`, `PROJECTS`, `ABOUT_SECTIONS`, `CERTIFICATIONS`, `EDUCATION` arrays
- **`src/config/constants.ts`** — `SOCIAL_LINKS`, `CONTACT` (name, email, title, tagline), `RESUME_URL`

Each export is `as const` and has a corresponding type alias (`Experience`, `Project`, etc.) at the bottom of `data.ts`.

## Styling

Design tokens are CSS custom properties in `src/index.css`. The full palette:

| Variable | Value | Usage |
|---|---|---|
| `--accent-green` | `142 69% 58%` | primary green, all interactive elements |
| `--text-primary` | `0 0% 96%` | headings |
| `--text-secondary` | `0 0% 65%` | body text |
| `--text-muted` | `0 0% 45%` | timestamps, labels |
| `--background` | `120 5% 6%` | page bg |
| `--card-hover` | `120 5% 9%` | card hover bg |

Reference via `hsl(var(--accent-green))` in inline styles or CSS.

**Fonts:** Inter (body), JetBrains Mono (code labels, timestamps, tech pills). Both loaded from Google Fonts in `index.css`.

**Component utility classes** (defined in `src/index.css` `@layer components`):
- `.tech-pill` — green pill badge for technology tags in experience cards
- `.project-flag` — `--flag-style` tech tags in project cards
- `.experience-card` — hover border/glow card wrapper
- `.experience-title-link` — monospace title with hover green
- `.social-icon` — muted icon with green hover glow
- `.section-heading` — section title style
- `.reveal` / `.visible` — scroll-reveal animation classes

**Hover pattern:** interactive elements use inline `onMouseEnter`/`onMouseLeave` to toggle between `--text-muted` and `--accent-green` rather than Tailwind hover classes, because Tailwind can't reference CSS variables in arbitrary values at runtime.

**Project cards** render technologies as `--flag-name` CLI-style strings (lowercased, hyphenated). The first technology in the array becomes the category label in the card header. Cards show a `[CASE-001]` style ID based on array index.

## Favicon

Both files must be updated when changing the favicon — browsers request `/favicon.ico` directly regardless of HTML `<link>` tags:

- `public/favicon.svg` — primary (modern browsers, referenced in `index.html`)
- `public/favicon.ico` — must be regenerated; contains 16×16 and 32×32 PNG frames

The accent green `hsl(142,69%,58%)` is hardcoded in the SVG — CSS variables don't work in static SVG files. To regenerate `favicon.ico` without external tools, use Playwright to render the SVG to canvas at multiple sizes, capture base64 PNG, and pack into ICO format via a Node.js script.
