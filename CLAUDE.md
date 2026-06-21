# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**KeepSplit** — "Split the bill. Keep the vibe." A mobile app (iOS & Android) for tracking shared travel expenses within a group. Users create groups, invite members, log expenses (equal or custom splits), view live balances, and record settlements.

## Current State

The repo is at the **design/mockup stage**. No framework or build system exists yet. All content lives under `mockup/`.

To preview mockups, open files directly in a browser:
- `mockup/KeepSplit Landing Page.html` — fully self-contained bundle, works offline
- `mockup/Landing Page.dc.html` — dc-runtime source format (requires `support.js` in the same directory)
- `mockup/Privacy Policy.dc.html` — privacy policy page (dc-runtime source)

## Mockup Format (`.dc.html`)

The `.dc.html` files are a React-based design format. Key conventions:
- Content lives inside an `<x-dc>` root element
- `<helmet>` inside `<x-dc>` injects into `<head>` (fonts, global styles)
- `style-hover` attribute on elements defines hover styles (not standard CSS — processed by `support.js`)
- `data-animate=""` marks elements for scroll-triggered fade-in animations
- `support.js` is a compiled dc-runtime; do not edit it directly

## Design Tokens

When implementing the actual site, use these values from the mockups:

| Token | Value |
|---|---|
| Background | `#09090C` |
| Surface | `#111118` |
| Surface alt | `#0C0C13` |
| Text primary | `#EEEEF8` |
| Text muted | `rgba(238,238,248,0.48)` |
| Brand purple | `#7C55F0` |
| Brand blue | `#7EB8F7` |
| Brand pink | `#D060CF` |
| Brand gradient | `linear-gradient(130deg, #BDD8FF 0%, #A78BF5 50%, #E07DDE 100%)` |
| Font | `Outfit` (Google Fonts), weights 300–900 |
| Border radius (card) | `24px` |
| Border radius (pill) | `100px` |
| Card border | `1px solid rgba(255,255,255,0.06)` |
