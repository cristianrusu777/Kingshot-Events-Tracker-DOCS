# Privacy, Security & Fair-Use Boundaries

> **Current policy direction plus implemented safeguards.** This page is practical product documentation, not legal advice. Public production terms should still be reviewed by a qualified legal professional.  

## Privacy principles

- Collect only data needed for a stated feature.
- Show scope, source, and retention for uploads and generated reports.
- Use aggregates for kingdom comparisons when player detail is unnecessary.
- Keep external notifications minimal and configurable.
- Allow authorized correction of inaccurate records and recommendation evidence.
- Separate historical facts from estimates and predictions.

## Implemented safeguards

- Uploaded screenshots and import assets are served through authenticated, scope-checked API routes.
- Uploaded file responses use private/no-store caching, no-referrer policy, same-origin resource policy, and validated content types.
- Spreadsheet uploads use strict size, row, column, and cell limits.
- The vulnerable SheetJS/xlsx package has been removed; .xlsx and .csv are supported, while legacy .xls is blocked.
- Spreadsheet formulas, macros, and external links are rejected.
- Import assets remain scoped to the import's kingdom/alliance. A leaked old public URL should not grant file access.
- Dialogs and high-use icon controls have been improved for keyboard and screen-reader accessibility.

## Security direction
- explicit device/account pairing and revocation
- encrypted transport and protected stored drafts
- short-lived upload authorization
- permission checks when viewing, exporting, or delivering a report
- audit trails for sensitive configuration and external delivery
- bounded retention for video and raw OCR sources

## Fair use

Future capture tools may assist with user-initiated screenshots and recordings. They must not automate gameplay, simulate input, evade restrictions, scrape hidden data, bypass game protections, capture other apps without permission, or encourage account sharing.

## Responsible analytics

Health, activity, reliability, anomaly, and prediction signals are aids for investigation. They must expose evidence and uncertainty and must not silently trigger punishment, membership changes, reward decisions, or access changes.



