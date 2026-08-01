# Ralyvora Docs

Public VitePress documentation for Ralyvora platforms. Kingshot Events is the currently available product.

## Commands

- `npm run docs:dev` starts the local documentation server.
- `npm run docs:audit` runs inventory, publication, link, image, content, and leak checks.
- `npm run docs:check` runs the deterministic publication checks.
- `npm run docs:build` creates the production site.

Published and redirected pages are explicitly registered in `docs/.vitepress/publication-manifest.mts`. Audit reports are generated locally under `reports/` and are excluded from version control and the public build.
