# Documentation repository instructions

- Document only mechanisms that are intentionally reader-visible in the current product. A source route, registry entry, or implementation file is not evidence that a mechanism is public.
- Classify source-inventory records with `documentationVisibility: public | internal | confidential`. Only `public` records may enter pages, navigation, search metadata, generated reports, screenshots, release notes, summaries, or examples.
- Never expose or hint at the names, routes, identifiers, controls, or behavior of `internal` or `confidential` records. Keep inventories containing those records local and untracked.
- Run `npm run docs:check`; the documentation-visibility gate must pass before handing off changes.
