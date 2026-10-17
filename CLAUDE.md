# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`novaxmatrix.com` is retired as a standalone site and now only redirects to **https://dataxmatrix.com/**. The repo holds:

- `index.html` — a minimal redirect page: `<meta http-equiv="refresh">` to dataxmatrix.com, a canonical link to dataxmatrix.com, and a visible bilingual (English/Arabic) fallback link.
- `sw.js` — a self-unregistering service worker. The old site installed an offline worker; returning visitors' browsers fetch this file, which clears the old caches, unregisters itself and reloads open tabs. Keep it at `/sw.js` for as long as old visitors might still have the worker installed.
- `favicon-16.png`, `favicon-32.png` — used by the redirect page.
- `CNAME` — pins the custom domain `novaxmatrix.com`. Do not delete or change it unless the domain is changing.

The previous bilingual studio site (neon dark design, hero canvas, PWA) is preserved in the git tag `studio-site-2026-10`.

## Deploy

- **Hosting:** GitHub Pages, served from the `main` branch root. Push to `main` to deploy; there is no CI or build step.
- **Preview locally:** `python -m http.server` from the repo root.

## Conventions

- Keep the redirect page minimal and dependency-free, with LF line endings.
- Never write an address, city, region or country of the owner. Contact is WhatsApp (wa.me/972568806666) and the site only.
