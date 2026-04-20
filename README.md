# corelumen-website

The CoreLumen studio site. Three pages (`/`, `/logo-system/`, `/guidelines/`), one shared design system, built with Vite + React.

## Develop

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build + serve

```bash
npm run build         # outputs to dist/
PORT=3000 npm start   # serves dist/ via `serve` on $PORT
```

## Deploy (Railway)

`railway.json` pins the build (`npm run build`) and start (`npx serve dist -l $PORT`) commands, so deploys do not rely on Nixpacks autodetection.

```bash
railway up
```

## Layout

- `index.html`, `logo-system/index.html`, `guidelines/index.html` — Vite MPA entries.
- `src/brand/` — ObservatoryMark, wordmarks, lockups, Colophon.
- `src/shared/Nav.jsx` — page-aware nav.
- `src/pages/<slug>/` — page-specific sections and their CSS Modules.
- `src/styles/tokens.css` — `--obs-*` design tokens.
- `public/favicon.svg` — static favicon.
- `internal/` — reference templates (gitignored).
