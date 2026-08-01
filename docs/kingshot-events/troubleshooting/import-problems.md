---
title: 'Import Problems'
description: 'Safe troubleshooting for import problems.'
product: 'kingshot-events'
audience: 'All affected users'
experienceLevel: 'Beginner'
featureArea: 'Troubleshooting'
lastReviewed: '2026-08-01'
head:
  - - meta
    - name: 'robots'
      content: 'index,follow'
---

# Import Problems
## What you see

A screenshot is rejected, processing stalls, or extracted rows are wrong.

## What it usually means

The file may be unclear or unsupported, the category may be wrong, or extraction needs review.

## Safe checks and resolution

Use a clear supported image, select the right category and scope, retry once, then correct proposed rows manually or report the visible error.

## When to contact an authorized manager

Ask for help when the issue depends on role assignment, community scope, review status, or a locked workflow. Include the page name, visible message, selected scope, approximate time, and the safe steps already tried. Do not include passwords, tokens, private keys, or unrelated personal data.

## Related guides

- [support](/support)
- [feature availability](/kingshot-events/overview/feature-availability)

## Practical depth

### Keep source and decision together

Record the provider, source, processing state, batch, row, and warning. Do not upload repeatedly while processing or overwrite a reviewed decision without new evidence.

## Worked example, recovery, and limitations

**What you see:** A screenshot extracts only part of the ranking. **Checks:** Preserve the import, inspect processor status and warnings, compare crop and supported file type, then review every proposed row. **Decision:** Valid rows can proceed; ambiguous names remain unmatched or needs review; an unreadable score is corrected from the source or rejected. **Recovery:** Reprocess once only when the batch exposes that action and the image context is correct. Deleting the import does not roll back applied results, and restoring it does not reapply them. Include import identifier, event, date, scope, provider label, failed row, and exact warning without credentials or private exports.

Extraction cannot guarantee complete rows, correct digits, or unique name matching. Keep the source and row decisions together until the applied batch is verified in event history.

If the image has already been permanently removed after retention, neither reprocess nor Restore can reconstruct it. Use remaining batch history and authorized source correction, and document that limitation in the support request.
