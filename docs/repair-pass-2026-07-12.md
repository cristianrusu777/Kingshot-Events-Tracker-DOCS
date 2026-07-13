# Repair pass: processors, analytics, entitlement, and console

This note documents the July 2026 repair pass for image processing, Premium entitlement, analytics, and the Platform Console.

## Multi-role premium entitlement

Premium features are resolved from the effective request scope. If a user is both `supreme_admin` and an alliance leader, the global role does not erase the alliance subscription. When no explicit scope is supplied, the backend evaluates active scoped assignments and uses the best premium feature set, preferring alliance assignments over kingdom assignments.

This means an admin who also leads a Premium Alliance receives the same `premium_processing`, advanced analytics, player comparison, and custom analytics access as a dedicated alliance leader for that premium alliance.

## Henod and Premium Processor status

Henod uses `HENOD_API_KEY` first and `OPENROUTER_API_KEY` as fallback. Normal users only see safe availability messages. Supreme Admin diagnostics may show whether a server key is missing, suspended, or unhealthy.

Premium Processor uses `PREMIUM_LLM_API_KEY`, `PREMIUM_LLM_MODEL`, and optional `PREMIUM_LLM_BASE_URL`. `GEMINI_API_KEY` fallback is only used when `ALLOW_ENV_GEMINI_FALLBACK=true`. Normal users never see env variable names.

Premium Processor states are distinguished as:

- disabled by administrator;
- subscription required;
- included but disabled;
- included but temporarily unavailable due to technical issue;
- available.

## Terra Processor safety

Terra remains a free local OCR processor and must not pretend uncertain OCR is correct. Rows with broken names, suspicious OCR debris, impossible values, malformed separators, very low powers, duplicate reads, or low confidence are forced into review with visible warnings and raw extracted text.

Terra supports comma/dot separators and K/M/B suffixes, but uncertain rows still require human review before save.

## Analytics experience

Analytics are a single experience. Free users see the basic modules in context; Premium users unlock deeper modules in the same page rather than a separate Premium section.

Included modules:

- participation trend chart;
- player status distribution;
- event participation summary with present/missing/unknown counts;
- filters for date range and event type;
- Premium player comparison;
- Premium event/session comparison;
- Premium custom analytics builder;
- explainable Premium recommendations with reason, data source, confidence, and suggested action.

## Mega-alliance visibility

Kingdom Premium grants can enable analytics-only visibility between accepted granted alliances. This is controlled by the king setting: **Allow granted alliances to view each other's analytics**.

Default is disabled. When enabled, leaders/co-leaders of accepted granted alliances may view analytics for another accepted granted alliance. They cannot edit players, import screenshots, change rewards, delete/restore data, manage users, or manage subscriptions for the other alliance.

## Platform Console

The Platform Console is Supreme Admin only. It uses a terminal-style interface with scanline/grid background, `Share Tech Mono`/monospace font stack, glow effects, live pulse, boot reveal, and readable CSS-grid log rows.

Read-only commands include:

- `help`
- `status`
- `whoami`
- `sessions`
- `users online`
- `logins`
- `activity --user <name>`
- `activity --page <page>`
- `processors`
- `imports --latest`
- `subscriptions --pending`
- `analytics --summary`
- `events --latest`
- `clear`

The console tracks login/session/page activity for admin monitoring: user, role, scope, current page, last page, last action, last seen, IP address, country fallback, browser, and device. It does not track form contents, passwords, API keys, tokens, screenshot contents, or private messages.
