# Documentation repository instructions

- Treat the internal source route `/simulators/spend-optimizer` and its implementation key `spend-optimizer` as confidential and excluded from documentation.
- Never add that feature to published or draft documentation, navigation, search metadata, inventories, generated reports, screenshots, release notes, summaries, or examples.
- Do not infer, describe, rename, or hint at the feature from source code. Keep it outside all documentation work unless the repository owner explicitly reverses this rule.
- Run `npm run docs:check`; the confidential-exclusion gate must pass before handing off documentation changes.
