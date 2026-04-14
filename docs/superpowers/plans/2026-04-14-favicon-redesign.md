# Favicon Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the red "R" lettermark favicon with a bracketed crosshair SVG icon matching the site's terminal green cybersecurity aesthetic.

**Architecture:** Create a single `public/favicon.svg` as the primary favicon (supported by all modern browsers), then prepend it to the favicon link list in `index.html` so browsers prefer it over the existing PNG/ICO fallbacks. Existing fallback files are untouched.

**Tech Stack:** Plain SVG, HTML

---

### Task 1: Create the SVG favicon

**Files:**
- Create: `public/favicon.svg`

- [ ] **Step 1: Create `public/favicon.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
  <rect width="80" height="80" rx="14" fill="#0b0e0b"/>
  <!-- Corner brackets -->
  <path d="M22 32 L22 22 L32 22" stroke="hsl(142,69%,58%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M48 22 L58 22 L58 32" stroke="hsl(142,69%,58%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 48 L22 58 L32 58" stroke="hsl(142,69%,58%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M48 58 L58 58 L58 48" stroke="hsl(142,69%,58%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <!-- Inner crosshair ring -->
  <circle cx="40" cy="40" r="4" stroke="hsl(142,69%,58%)" stroke-width="1.5"/>
  <!-- Center dot -->
  <circle cx="40" cy="40" r="1.5" fill="hsl(142,69%,58%)"/>
  <!-- Tick marks -->
  <line x1="40" y1="30" x2="40" y2="34" stroke="hsl(142,69%,58%)" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="40" y1="46" x2="40" y2="50" stroke="hsl(142,69%,58%)" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="30" y1="40" x2="34" y2="40" stroke="hsl(142,69%,58%)" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="46" y1="40" x2="50" y2="40" stroke="hsl(142,69%,58%)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

- [ ] **Step 2: Verify the file renders correctly**

Open `public/favicon.svg` directly in a browser (drag-and-drop or `open public/favicon.svg`). You should see a dark rounded square with four green corner brackets and a small green crosshair centered inside.

- [ ] **Step 3: Commit**

```bash
git add public/favicon.svg
git commit -m "feat: add bracketed crosshair SVG favicon"
```

---

### Task 2: Wire the SVG favicon into index.html

**Files:**
- Modify: `index.html` — add one `<link>` tag before the existing favicon block

- [ ] **Step 1: Add the SVG favicon link**

In `index.html`, find the `<!-- Favicon -->` comment block (line 37). Insert the SVG link as the first entry so browsers prefer it:

```html
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
    <link rel="manifest" href="/site.webmanifest" />
```

- [ ] **Step 2: Run the dev server and verify**

```bash
bun dev
```

Open `http://localhost:5173` in Chrome or Firefox. Check the browser tab — it should show the green crosshair icon, not the red "R". If the old favicon is cached, do a hard refresh (`Cmd+Shift+R` on Mac).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: wire SVG favicon into index.html"
```
