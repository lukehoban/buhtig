# buhtig

A small replica of GitHub.com. Just the UI for now. Just Git storage pieces (repos, commits, file browser).

## Web UI (initial spike)

The `web/` directory contains a React + Vite + TypeScript single-page app implementing the
initial UI-only spike: repo list, repo overview (README + file tree), commit history, single
commit diff view, file browser with breadcrumbs, and file view. All data is static fixture data
bundled with the app — there is no backend, real Git storage, or authentication yet.

To run it locally:

```bash
cd web
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To produce a production build:

```bash
cd web
npm run build
```
