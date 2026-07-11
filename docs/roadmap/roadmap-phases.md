# Roadmap Phases

> **Planned / Future · Not implemented yet · Sequencing proposal only**

Phases describe dependencies, not committed dates. Research, privacy review, and data quality may change their order or scope.

## Phase A — Mobile responsive web foundation

- **Goal:** Make core workflows usable at phone and tablet widths.
- **Features:** Responsive navigation, forms, tables, uploads, review, and usage panels.
- **User benefit:** Complete small tasks away from a desktop.
- **Classification:** Free.
- **Complexity:** High.
- **Dependencies:** Design tokens, accessibility baseline, responsive test matrix.
- **Risks:** Hiding critical columns or actions.
- **Acceptance:** Core dashboard and upload/review journeys require no horizontal page scrolling.

## Phase B — User-friendly redesign and guided flows

- **Goal:** Make next actions, scope, and consequences obvious.
- **Features:** Setup and event wizards, review assistant, safer dialogs, useful empty states, plain-language settings.
- **User benefit:** Faster onboarding and fewer avoidable mistakes.
- **Classification:** Free; saved premium layouts may follow.
- **Complexity:** High.
- **Dependencies:** Phase A patterns and user research.
- **Risks:** Disrupting experienced users.
- **Acceptance:** Representative users complete setup and a first import with minimal outside help.

## Phase C — Advanced analytics foundation

- **Goal:** Establish trustworthy metrics and comparisons.
- **Features:** Coverage indicators, event/player trends, stage comparison, KvK before/after, custom-query foundation.
- **User benefit:** Understand performance changes and their evidence.
- **Classification:** Free summaries; Premium Alliance, Premium Kingdom, and Premium Both detail.
- **Complexity:** Very high.
- **Dependencies:** Consistent accepted results, eligibility, stage, roster, and snapshot data.
- **Risks:** Invalid comparisons and slow queries.
- **Acceptance:** Every metric exposes scope, window, definition, and data coverage.

## Phase D — Smart suggestions and recommendations

- **Goal:** Turn trustworthy analytics into explainable follow-up ideas.
- **Features:** Reminders, attention lists, reward candidates, event warnings, alliance health components.
- **User benefit:** Less time finding what needs investigation.
- **Classification:** Free safety suggestions; premium operational recommendations.
- **Complexity:** Very high.
- **Dependencies:** Phase C metrics and feedback/dismissal records.
- **Risks:** False positives, stigma, and automation bias.
- **Acceptance:** Every suggestion shows evidence, confidence, corrective actions, and dismissal controls.

## Phase E — Advanced screenshot/OCR improvements

- **Goal:** Improve source quality before adding video.
- **Features:** Region detection, field confidence, deduplication, source trace, recurring-error analysis.
- **User benefit:** Less manual review and fewer silent OCR mistakes.
- **Classification:** Free safety baseline; Premium Both quality dashboard.
- **Complexity:** High.
- **Dependencies:** Representative consented test sources and quality evaluation.
- **Risks:** Language/device bias and overconfident OCR.
- **Acceptance:** Measured quality improves while uncertain rows remain reviewable drafts.

## Phase F — Video OCR processor

- **Goal:** Convert short recordings into deduplicated review rows.
- **Features:** Frame sampling, table detection, frame dedupe, row merge, conflicts, confidence, review table.
- **User benefit:** Faster capture of long scrolling lists.
- **Classification:** Premium Both / Future Experimental.
- **Complexity:** Very high.
- **Dependencies:** Phase E, storage limits, retention controls, processing quotas.
- **Risks:** Duplicate results, cost, privacy, and device variability.
- **Acceptance:** Duplicate frames do not duplicate results and nothing saves before acceptance.

## Phase G — Premium reports and exports

- **Goal:** Package trusted analytics for recurring decisions.
- **Features:** Weekly alliance, monthly kingdom, player, event, reward, quality, and usage reports.
- **User benefit:** Repeatable reporting with less spreadsheet work.
- **Classification:** Premium Alliance, Premium Kingdom, Premium Both.
- **Complexity:** High.
- **Dependencies:** Phase C definitions and Phase D explanations.
- **Risks:** Stale exports and oversharing.
- **Acceptance:** Reports include scope, filters, generation time, coverage, and permission-safe content.

## Phase H — Discord notifications and summaries

- **Goal:** Deliver approved reminders and summaries outside the app.
- **Features:** Opt-in rules, previews, channel allowlists, quiet hours, delivery audit.
- **User benefit:** Timely follow-up without constant dashboard checking.
- **Classification:** Free in-app notices; Premium Both external delivery.
- **Complexity:** High.
- **Dependencies:** Report templates, secure connector configuration, redaction.
- **Risks:** Spam, wrong-channel delivery, and privacy leaks.
- **Acceptance:** External delivery is permission-checked, previewable, rate-limited, and auditable.

## Phase I — Premium mobile companion app MVP

- **Goal:** Provide a safe, user-initiated capture queue.
- **Features:** Pairing, screenshot capture/import, event modes, encrypted drafts, upload handoff, notifications.
- **User benefit:** Faster capture while preserving web review.
- **Classification:** Premium Both / Future Experimental.
- **Complexity:** Very high.
- **Dependencies:** Phases A and E, security review, mobile platform research.
- **Risks:** Account security, capture permissions, and app-store policy.
- **Acceptance:** Capture is explicit, drafts are revocable, and no gameplay automation exists.

## Phase J — Companion video capture and offline queue

- **Goal:** Extend the companion to controlled video and resilient offline drafts.
- **Features:** Short recording queue, local dedupe hints, upload resume, retention controls, web review handoff.
- **User benefit:** Efficient capture under poor connectivity or for long lists.
- **Classification:** Premium Both / Future Experimental.
- **Complexity:** Very high.
- **Dependencies:** Phases F and I.
- **Risks:** Battery/storage use, accidental capture, large uploads, duplicate processing.
- **Acceptance:** Recordings are permission-based, bounded, encrypted, user-deletable, and draft-only until review.

