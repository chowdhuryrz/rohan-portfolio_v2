# Favicon Logo Redesign

**Date:** 2026-04-14
**Status:** Approved

## Summary

Replace the current red "R" lettermark favicon with a bracketed crosshair icon that matches the site's terminal/hacker cybersecurity aesthetic.

## Design

### Icon: Bracketed Crosshair

Four corner L-brackets frame a square target zone, referencing the terminal/code `[ ]` aesthetic. A small circle with a center dot sits at the intersection as the crosshair lock-on point, with four short tick marks extending outward from it.

```
[          ]
    ─●─
[          ]
```

### Colors

- Background: `#0b0e0b` (matches site near-black)
- All strokes and fills: `hsl(142, 69%, 58%)` — the site's terminal green accent, defined as `--accent-green` in `src/index.css`

### Container

Rounded square, `rx="14"` on an `80×80` viewBox. Consistent with how favicons render on macOS/iOS platforms.

## Files Changed

| File | Change |
|------|--------|
| `public/favicon.svg` | New file — primary SVG favicon |
| `index.html` | Add `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` before existing `.ico` reference |

## Files Unchanged

- `public/favicon.ico` — kept as fallback for browsers that cannot read SVG favicons
- `public/favicon-16x16.png`, `public/favicon-32x32.png` — kept as legacy fallbacks
- `public/apple-touch-icon.png`, `public/android-chrome-*.png` — kept as-is; these are only shown on home-screen add-to-homescreen, not in the browser tab
- `public/site.webmanifest` — no change needed
- All site UI components — no change

## Scope Boundary

This change is favicon-only. The icon does not appear anywhere in the site UI. No component or layout files are modified.
