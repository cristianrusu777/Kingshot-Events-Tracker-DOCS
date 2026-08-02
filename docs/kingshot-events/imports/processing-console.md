---
title: 'Processing Console and Provider Health'
description: 'Understand provider availability, processing jobs, retry boundaries, and the separation between extraction and import review.'
product: 'kingshot-events'
audience: 'Import operators and processing administrators'
experienceLevel: 'Advanced'
featureArea: 'Imports and Data Entry'
lastReviewed: '2026-08-02'
verifiedAgainstSourceCommit: '0238432f9a614513b1f28a43c438a994a0caaf8a'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Processing Console and Provider Health

Image processing converts submitted evidence into candidate data. The Processing Console and provider-health views explain whether the configured processing services are available and how jobs progress. Successful extraction is not approval to apply rows.

## Processing boundary

```mermaid
flowchart LR
  U["Upload evidence"] --> P{"Permitted provider healthy?"}
  P -- "No" --> M["Use supported manual or alternate path"]
  P -- "Yes" --> J["Create processing job"]
  J --> X["Extract candidate fields"]
  X --> R["Import row review"]
  R --> A{"Reviewer decision"}
  A -- "Apply" --> B["Result batch or target record"]
  A -- "Reject or correct" --> R
```

**Accessible summary:** A healthy provider extracts candidates; a human review still decides what becomes product data.

Provider status can be enabled, disabled, unavailable, misconfigured, or otherwise unhealthy as exposed by the console. Jobs can be queued, processing, completed, or failed. Use the exact current status rather than repeatedly uploading the same evidence.

## Operator procedure

1. Check the processing category and provider status.
2. Open the existing job and read its error before retrying.
3. Retry only when the failure is transient or the corrected configuration is active.
4. Use manual entry when the product offers it and processing remains unavailable.
5. Review extracted names, dates, stages, values, and duplicates before apply.

**Example:** A job fails because no provider is healthy. The operator does not create five duplicate imports. They confirm provider health, choose the supported manual path for urgent data, and later retry the original job only after service recovery.

When escalating, include the job or import identifier, provider category, current status, safe error text, time, and whether a manual fallback was used. Never include provider secrets or protected image contents in a public report.

## Limits and troubleshooting

Provider health does not guarantee correct extraction, and a failed health check does not prove that stored imports were lost. The console is diagnostic; row approval remains in the import review. If a job stays queued, confirm that an eligible provider is enabled for its category and inspect the existing job before retry. If a completed job has no candidates, verify the evidence format and processing output rather than applying an empty import.
