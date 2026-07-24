# Agent Rules & Behavioral Guidelines

Guidelines for AI agents editing documentation or writing code in this repository:

## Documentation Style & Punctuation Constraints

> [!IMPORTANT]
> **NO EM DASHES OR EN DASHES (`—` / `–`)**:
> - **NEVER** use em dashes (`—`) or en dashes (`–`) in Markdown documents, page titles, section headings, docstrings, or commit messages.
> - Always use standard hyphens (`-`), colons (`:`), or clear, direct sentence structure instead.

## Anti-AI Tone & Language Safeguards

> [!WARNING]
> **AVOID AI CLICHÉS AND OVERUSED BUZZWORDS**:
> - Do not use artificial AI tropes or filler words such as: *delve*, *tapestry*, *testament*, *seamlessly*, *robust*, *plethora*, *unleash*, *elevate*, *beacon*, *game-changer*, *furthermore*, *in conclusion*, *demystify*.
> - Write clean, concise, technical, and human-sounding documentation. Speak directly to the player, King, or administrator.

## Technical Accuracy & Terminology Rules

- **Verified Game Terminology**: Always inspect the authoritative source code for exact hero names, skill labels, widget titles, and troop classes (**Infantry**, **Cavalry**, **Archer**).
- **Public Asset Paths**: Place static image files inside `docs/public/images/` so VitePress serves them correctly at runtime.
- **Verification**: Run `npm run docs:check` and `npm run docs:build` to confirm link integrity and site compilation after every modification.
