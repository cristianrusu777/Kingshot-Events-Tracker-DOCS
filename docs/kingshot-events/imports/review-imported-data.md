---
title: 'Reviewing and Applying Imported Data'
description: 'Match, correct, ignore, and accept extracted rows before they become saved records.'
product: 'kingshot-events'
audience: 'Contributors and alliance managers'
experienceLevel: 'Intermediate'
featureArea: 'Import review'
lastReviewed: '2026-08-01'
---

# Reviewing and Applying Imported Data

**Import Review** is the decision point between extracted text and product records. Acceptance can create or update player and result data in the selected scope, so review the screenshot and context beside the rows.

## Read the review summary

The header shows the file, import status, processor, processing time when available, event context, and counts for **Detected**, **Matched**, **Saved**, and **Need review**. A title mismatch warning means the recognized event name differs from the assigned event. Resolve it before trusting the rows.

## Review each row

Use the row filters to separate correct or matched rows from warnings, unmatched players, and already accepted rows. User-visible row states can include **needs review**, **matched**, **correct**, **almost correct**, **incorrect**, **accepted**, **created**, **saved**, **rejected**, **ignored**, **unmatched player**, **low confidence**, or **conflict**, depending on the import type and processing result.

For every row, compare:

- player name and proposed player match;
- old nickname or profile ID evidence when names are similar;
- score, participation, power, role, stage, or other fields relevant to that import;
- event and event date;
- whether the row is a duplicate, cumulative total, or stage value;
- warnings and confidence feedback.

Correct editable values, select the existing player when a match is wrong, create a player only when the identity is genuinely new, or ignore a row that should not enter the product. If an alliance roster is at capacity, the page warns before new members are assigned. Use **Kick** only for a confirmed former member, not merely to make a warning disappear.

## Accept rows

Accept a single verified row when other rows still need work. Bulk acceptance is appropriate only after all included rows have been checked. Accepted rows become saved player or result records and the summary counts update. **Saved results** lists the resulting records and flags those that still require manual review.

For a KvK Prep import, the review page uses **Apply & Return to KvK Prep** and saves reviewed rows to the named snapshot phase. Ordinary imports return to Imports and their record batches or event history.

<RolePerspective>

### As a contributor

Correct extracted values and accept only rows you can verify from the image.

### As an alliance manager

Confirm the active alliance matches the screenshot. Accepted roster and result changes stay inside that selected context.

### What the platform does automatically

It proposes matches, saves accepted rows, preserves import history, and recalculates affected analytics. It does not decide that a low-confidence row is true.

</RolePerspective>

<VisualReference title="Import Review landmarks">
Keep the screenshot visible while working through the review rows.

<template #items>

- File, status, processor, event context, and Detected, Matched, Saved, and Need review counts.
- Screenshot preview and title-mismatch or alliance-capacity warnings.
- Review filters, proposed player match, editable values, row status, accept, reject, or ignore controls.
- Saved results, record batches, and delete or restore actions available to authorized managers.

</template>
</VisualReference>

See [Duplicate, Date, and Overwrite Handling](/kingshot-events/imports/data-rules) before accepting a second import for the same event date.
