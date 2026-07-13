# Last 24-Hour Change Inventory

> **Coverage window:** 12–13 July 2026. **Sources inspected:** application Git history (`HEAD~20..HEAD`), application working tree, documentation working tree, current Docker app at `http://localhost:3000`, and the standalone Platform Console at `http://localhost:4000`.

This inventory is the documentation checklist for the complete change window. “Documented” means the current guide was updated or the subject is covered by the detailed patch notes. “Not applicable” means the available demonstration data did not expose that state.

| Area | Change found | Documentation status |
|---|---|---|
| Responsive mobile/tablet UI, navigation, tables/cards, forms/modals | Responsive pass, desktop sticky navigation repair, scroll-safe dense tables, focusable dialogs and labelled icon controls | Documented: [Mobile & Tablet](/roadmap/mobile-responsive-web), [Navigation](/getting-started/navigating), [Privacy and Safety](/reference/security-and-deployment) |
| Processor selector | Three categories: Free, With Keys, Premium; consistent selection/status across header, settings, Imports and KvK | Documented: [Choose a Provider](/imports/choose-provider) |
| Terra | Safer OCR parsing, duplicate/invalid-value handling, review-first warnings | Documented: [Processor Categories](/imports/processor-categories), [Troubleshooting](/troubleshooting/processors) |
| Henod | Availability checks, temporary suspension, re-check workflow and safe status separation | Documented: [Henod](/imports/henod), [Processing Services](/admin/processing-services) |
| Premium Processor | Accurate eligibility/service state and scope-aware multi-role access | Documented: [Premium Processing](/imports/premium-processing), [Premium Features](/subscriptions/premium-features) |
| Gemini/OpenAI | User-managed key providers; status remains distinct from system processors | Documented: [Choose a Provider](/imports/choose-provider), [Gemini Key](/imports/gemini-key), [OpenAI Key](/imports/openai-key) |
| Processing Services | Configuration/health dashboard separated from live console | Documented: [Processing Services](/admin/processing-services) |
| Processing Console | Live processing jobs/events, filters, detail and mobile layout | Documented: [Processing Console](/imports/processing-console) |
| Platform Console | Standalone global terminal, Glass TTY VT220 bundle, selected-log detail, manual refresh/auto-refresh safety, activity/session tracking | Documented: [Platform Console](/admin/platform-console) |
| Platform Console commands | Read-only command catalogue; current console UI capture shows its input disabled/coming-soon state | Documented with current limitation: [Platform Console](/admin/platform-console) |
| Analytics | Responsive/collapsible layout, alliance/player/custom modules, comparisons, recommendations | Documented: [Analytics Overview](/analytics/overview), related analytics guides |
| Mega-alliance analytics | King-controlled, accepted-grant, feature-gated view-only analytics sharing | Documented: [Analytics Overview](/analytics/overview), [Kingdom Grants](/subscriptions/kingdom-grants) |
| Subscription and premium resolution | Effective subscription resolver respects the selected alliance/kingdom scope for multi-role users | Documented: [Effective Plan](/subscriptions/effective-plan), [Premium Features](/subscriptions/premium-features) |
| Users | Full-width list, filtering, sorting, server pagination, protected actions, responsive table | Documented: [Create & Manage Users](/how-to/create-user) |
| Permissions | Admin-only grouped catalog, search, comparison and risk guidance | Documented: [Permissions](/admin/permissions) |
| Badges | Honest limited/preview state; icons remain the active management feature | Documented: [Badges](/admin/badges) |
| Restore Requests | Scoped request/review/approval/audit lifecycle and clearer queue | Documented: [Restore Requests](/how-to/restore-requests) |
| Terms/privacy | EU/US-oriented practical policy language, uploads, BYO keys, monitoring, acceptable use | Documented: [Terms & Privacy](/admin/terms-and-privacy) |
| Account and browser safety | Protected account/session behavior and browser safety safeguards | Documented: [Privacy and Safety](/reference/security-and-deployment) |
| Upload privacy | Private, scope-checked screenshot and import access | Documented: [Upload Screenshots](/imports/upload-screenshots), [Privacy and Safety](/reference/security-and-deployment) |
| Spreadsheet safety | Supported formats and strict safety limits | Documented: [Spreadsheet Import](/how-to/spreadsheet-import), [Privacy and Safety](/reference/security-and-deployment) |
| Documentation structure | Homepage Latest Updates, detailed changelog, inventory, screenshot matrix, favicon, sidebar grouping | Documented: this page and [13 July Patch Notes](/updates/2026-07-13) |

## Verified current-data limitations

- A labelled local documentation kingdom, two documentation alliances, a premium kingdom assignment, and an accepted grant were created through the local app/demo database solely to capture the real King analytics-visibility control. The current screenshot is published in the [Screenshot Matrix](/updates/screenshot-matrix-2026-07-13).
- Current Platform Console capture shows the command input disabled, so the UI capture does not claim interactive command execution is currently available.

## Screenshot disposition

Changed surfaces are represented by the real current captures listed in the [Screenshot Matrix](/updates/screenshot-matrix-2026-07-13). Older captures remain only on guides whose underlying workflow was not part of this 24-hour change set; they were not used to represent changed UI.
