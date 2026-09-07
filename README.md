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

## GitHub Pages

The `main` branch is deployed automatically to
https://lukehoban.github.io/buhtig/ after a successful GitHub Actions build. The
workflow can also be started manually from the Actions tab. The Vite build uses
the `/buhtig/` project base path and includes a fallback for client-side routes.

Repository Pages settings may need one-time manual configuration: in **Settings
> Pages**, select **GitHub Actions** as the source. No backend or authentication
is included in this static deployment.
