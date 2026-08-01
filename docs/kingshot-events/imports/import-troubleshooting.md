---
title: 'Import Troubleshooting'
description: 'Resolve processing, matching, review, quota, duplicate, and correction problems safely.'
product: 'kingshot-events'
audience: 'Import contributors'
experienceLevel: 'Intermediate'
featureArea: 'Imports'
lastReviewed: '2026-08-01'
---

# Import Troubleshooting

## Processing does not start

Confirm the selected processor is available, the file is a supported readable image, and the required scope and event fields are complete. A **With Keys** processor needs its browser setup; a **Premium** processor needs the feature and remaining usage. Submit once after correcting the visible problem.

## Processing fails or produces few rows

Use the original-resolution screenshot with headers and full rows. Remove overlays and unrelated panels. Try another currently available processor when appropriate, but treat its output as a new proposal and review it fully.

## Import remains in review

Open **Import Review** and check **Need review**, unmatched, low-confidence, and conflict rows. Processing completion does not accept them. Correct, match, reject, or ignore every unresolved row before expecting the import to appear complete.

## Wrong player is matched

Do not accept the row. Search by profile ID, current name, and old nickname in the correct kingdom. Select the existing player or leave the row unresolved for a manager. If it was already accepted, correct the saved result and player link through the review or event history.

## Duplicate warning or same-date value changed

Confirm the event, date, stage, and score-entry mode. The new accepted row may be a correction to the same effective result. Compare import history before deleting anything. See [data rules](/kingshot-events/imports/data-rules).

## Assigned event differs from the screenshot title

The review header shows a warning. Return to the correct event context or discard the incorrect import before acceptance. Do not rely on row values from an image assigned to the wrong event.

## Alliance capacity is reached

Review proposed new members and ignored rows. Kick an existing member only after confirming that the person left the alliance. A full roster is not evidence that a matched player is wrong.

## Premium quota is exceeded

Choose an available free or browser-key processor, wait for the usage period to reset when shown, or ask the subscription manager about the effective plan. Repeated submission does not bypass a quota.

## A deleted import was restored but results are absent

Restore brings back the import record. Results removed by a rollback are not automatically recreated. Review the rows and current saved-results section, then make a new corrected import if the interface does not support reapplying them.

## What to provide to a manager

Send the import filename, visible status, kingdom and alliance, event and date, processor category, and the exact public error message. Do not send provider keys, account passwords, or private raw processing data.

<VisualReference title="Import problem checkpoints">
Use visible state and context before retrying.

<template #items>

- Import list status, processor category, scope, event, date, and usage notice.
- Review summary counts and any title, capacity, match, or conflict warning.
- Row-level correction and accept or ignore controls.
- Import delete, rollback, restore, and Saved results sections for authorized managers.

</template>
</VisualReference>
