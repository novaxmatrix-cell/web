# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page bilingual (Arabic/English) marketing site for **NovaX Matrix**, an Arabic-world software studio. The entire site is one self-contained `index.html` — inline CSS in a `<style>` block and inline vanilla JS in one IIFE `<script>`. There is no build step, no package manager, no dependencies installed locally, and no test suite. The only external resources are Google Fonts (Unbounded + Cairo) loaded via CDN.

## Deploy / run

- **Hosting:** GitHub Pages, served from the `main` branch root. `CNAME` pins the custom domain `novaxmatrix.com` — do not delete or change it unless the domain is changing.
- **Deploy:** push to `main`. There is no CI; the live site updates from the committed `index.html`.
- **Preview locally:** open `index.html` directly in a browser, or `python -m http.server` from the repo root. No build needed.

## Architecture notes (things that span the file)

- **i18n is attribute-driven.** Every translatable element carries both `data-ar` and `data-en` attributes. `setLang(lang)` (in the script) swaps `textContent` for all `[data-ar]` nodes, flips `<html>` `lang`/`dir` (rtl for Arabic), and updates the title. When adding any user-facing text, you must provide **both** `data-ar` and `data-en` or it won't translate. The page initializes with `setLang('en')` at the end of the script.
- **Default language vs. metadata:** the static `<html lang="en" dir="ltr">` and the page initializing to English mean Arabic is toggled on by the `ع` button (`#lang-ar`). Keep the static HTML's default-language text in sync with its `data-en` value.
- **Hero canvas (`#nova`):** a hand-rolled hexagon particle/grid animation driven by `requestAnimationFrame`, pointer interaction (`mousemove`/`pointerdown` bursts), and a `--spectrum` color ramp. It is purely decorative (`aria-hidden`). Resize is handled by `resize()`.
- **Tech marquee (`#mq`):** the list is generated in JS from the `tech` array (duplicated for a seamless loop), not hardcoded in HTML. Edit the `tech` array to change chips.
- **Styling:** all theming flows through CSS custom properties in `:root` (e.g. `--accent`, `--spectrum`, `--maxw`, `--nav-h`). Change colors/spacing there rather than in individual rules. Note several palette vars (`--blue`, `--green`, etc.) are intentionally aliased to `--accent`.
- **Sections** are anchored by id (`#about`, `#services`, `#work`, `#contact`) and linked from both the desktop `nav` and the mobile menu (`#mobile-menu`, toggled by `#hamb`).

## Conventions

- Keep everything in the single `index.html`; the site is deliberately dependency-free and self-contained. Don't introduce a build tool or split files unless explicitly asked.
- Script is strict-mode vanilla ES5-style JS (`var`, function declarations) — match that style.
