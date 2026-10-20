# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`novaxmatrix.com` is the brand homepage of **NovaX Matrix**, the parent brand of **DataX Matrix** (business software; first product Iris School, at https://dataxmatrix.com) and **NovaX Lab** (experiments at https://lab.novaxmatrix.com; first live: the daily puzzle «البرج» / Burj at /burj/). Static, no build step, no frameworks.

- `index.html` (English, `/`) and `ar/index.html` (Arabic, `/ar/`) — keep them in step: same sections, same claims. Each links the other with a language switch that saves `localStorage.lang`; the English page sends a first-time visitor with an Arabic browser (or a saved `ar` choice) to `/ar/`; bots never redirect.
- `assets/css/site.css` — design matches dataxmatrix.com as one family: same tokens, type scale, radius, shadows, light + dark themes (`data-theme` override, saved in `localStorage.theme`). When changing it, bump `?v=` in both pages.
- `assets/js/site.js` — theme toggle and language-choice saving only.
- `assets/fonts/` — self-hosted subset IBM Plex Sans Arabic / IBM Plex Sans, copied from `~/projects/dataxmatrix-site` (read that repo, never modify it).
- `assets/img/` — `logo-*.webp` (NovaX Matrix mark, from the old site), `iris-80.webp` (Iris logo), `burj.svg` (Burj icon, from `~/projects/lab/docs/burj/icon.svg`), `og-en.png` / `og-ar.png` link previews rendered from `design/og-image.html` (commands in its header), `apple-touch-icon.png`.
- `sitemap.xml`, `robots.txt` — update the sitemap if a page is added.
- `sw.js` — a self-unregistering service worker. The old studio site installed an offline worker; returning visitors' browsers fetch this file, which clears the old caches and unregisters itself. Keep it at `/sw.js` for as long as old visitors might still have the worker installed.
- `favicon-16.png`, `favicon-32.png` — favicons.
- `CNAME` — pins the custom domain `novaxmatrix.com`. Do not delete or change it unless the domain is changing.
- `design/review/` — local screenshots, gitignored.

The previous bilingual studio site (neon dark design, hero canvas, PWA) is preserved in the git tag `studio-site-2026-10`; the plain redirect to dataxmatrix.com is commit `696bc09`.

## Deploy

- **Hosting:** GitHub Pages, served from the `main` branch root. Push to `main` to deploy; there is no CI or build step.
- **Preview locally:** `python -m http.server` from the repo root.

## Conventions

- Keep the pages light and dependency-free, with LF line endings. Lighthouse mobile ≥ 95.
- No invented numbers, clients or testimonials. Brand names always in Latin letters, also in Arabic.
- Never write an address, city, region or country of the owner. Contact is WhatsApp (wa.me/972568806666) and info@novaxmatrix.com; DataX Matrix / Iris contacts are info@dataxmatrix.com and support@dataxmatrix.com.
