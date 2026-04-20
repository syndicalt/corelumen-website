# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository scope

Static marketing site for **CoreLumen**, a small software studio (Provara, Pathlight, Divita). No package manager, build step, bundler, or test suite — each page is a standalone HTML file that loads React + Babel from CDNs and transpiles JSX in the browser at runtime.

To preview, open the HTML file directly in a browser, or serve the directory with any static server (e.g. `python3 -m http.server` from the repo root).

## Architecture

- Pages live in `internal/` and are self-contained: a `<style>` block with a couple of keyframes, React/ReactDOM/Babel UMD bundles from `unpkg.com` (with SRI hashes), then one or more `<script type="text/babel">` blocks defining components and calling `ReactDOM.createRoot(...).render(<App />)`.
- Shared design tokens and brand marks come from a sibling file `observatory-system.jsx` loaded via `<script type="text/babel" src="observatory-system.jsx">`. It is expected to expose a global `OBS` object (palette: `ink`, `text`, `mute`, `muteSoft`, `panel`, `surface`, `line`, `lineSoft`, `accent`, `accentDim`; typography: `display` = Fraunces, `mono` = JetBrains Mono) plus components `LockupHorizontal` and `ObservatoryMark`. When editing any page, assume those names are in scope — do not redeclare them inline.
- Pages cross-link by relative filename with spaces preserved (`CoreLumen Logo System.html`, `CoreLumen Guidelines.html`). Keep that convention when adding pages so existing `<a href>`s don't break.
- All component styling is inline `style={{}}` objects keyed off `OBS` tokens. There is no CSS file, no Tailwind, no styled-components — resist the urge to introduce one for a small change.
- Because Babel runs in the browser, any JSX syntax error is silent in the page but visible in the devtools console. When something "doesn't render," check the console first.

## Conventions

- Section backgrounds are `#08090C` (ink); section separators are always `borderTop: 1px solid ${OBS.line}`.
- Eyebrow labels use `OBS.mono`, 11px, `letterSpacing: 2.5`, uppercase, `OBS.accent`. Display headings use `OBS.display` at weight 300 with negative letter-spacing. Matching these two patterns keeps new sections visually consistent with the existing ones.
- Italic + `OBS.accent` is the standard "emphasized word" treatment inside headings (see the Hero and Principles `<h1>`/`<h2>`).
