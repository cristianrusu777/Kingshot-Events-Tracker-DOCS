---
title: 'Screenshot Import'
description: 'Choose a supported import context, process a clear image, and continue to row review.'
product: 'kingshot-events'
audience: 'Authorized contributors and managers'
experienceLevel: 'Intermediate'
featureArea: 'Imports'
lastReviewed: '2026-08-01'
---

# Screenshot Import

Screenshot import converts a supported leaderboard or roster image into proposed rows. Processing is assisted data entry: no extracted row is trustworthy until a person checks the context, match, values, and date.

## Before uploading

1. Open **Imports** inside the intended kingdom and alliance.
2. Confirm the import category and target event or session. For multi-stage or cumulative events, confirm the stage and whether the screenshot contains a stage value or a cumulative total.
3. Use an uncropped, readable screenshot with names, headings, and values visible. Remove chat overlays and avoid combining unrelated panels.
4. Check that you are allowed to contribute to the selected scope and that its usage limit is available.

## Processor choices

The application groups available processors into **Free**, **With Keys**, and **Premium** choices. The cards show current availability and explain what setup is required. A browser-held provider key, when supported, remains a user setup choice and should never be pasted into documentation, support screenshots, or review notes. Premium processing appears only when the effective plan and quota allow it.

Processor availability can change without changing the import workflow. Choose an available option, review its visible notice, and do not assume one provider is more accurate for every screenshot.

## Upload and processing

Choose a file, drag and drop it, or use the supported clipboard flow. Submit once. The import moves through visible states such as **draft**, **processing**, **review required**, **accepted**, **rejected**, **deleted**, or a failure state. Leave the record in history while it processes; repeated uploads can create duplicate review work.

When processing completes, open **Import Review**. The page shows the source image, processor label, detected and assigned event context, and counts for **Detected**, **Matched**, **Saved**, and **Need review**. A warning appears when the detected screenshot title differs from the assigned event.

```mermaid
flowchart LR
  A["Choose scope and import type"] --> B["Upload a supported image"]
  B --> C["Processing"]
  C --> D["Review rows and context"]
  D --> E["Accept correct rows"]
  E --> F["Saved records and analytics"]
```

<VisualReference title="Screenshot upload landmarks">
Verify the context summary before selecting a processor or image.

<template #items>

- Kingdom, alliance, event or session, import category, date, and stage or total controls when applicable.
- Processor cards grouped by current availability, with setup or quota feedback.
- File, drag-and-drop, or clipboard upload area and processing status.
- Link to **Import Review** with the screenshot, context warning, and row summary.

</template>
</VisualReference>

## Purpose, controls, decision order, and review boundary

Screenshot import solves high-volume transcription while keeping the source image and every row decision traceable. Authorized contributors choose import type, kingdom or alliance scope, event, event date, supported image, and an available processor or provider. The file must pass supported type, size, quota, and repeated-file checks before processing. A selected event or date takes precedence over a detected guess; disagreement becomes a visible review reason rather than an automatic context change.

After extraction, names and values are normalized only within supported rules. Matching considers current player names and nickname history in context. One strong match can stage a row; no match, several matches, low confidence, missing score, warning, duplicate identity, or conflict requires review. The processor never has authority to accept, reject, create a player, overwrite a non-cumulative result, or apply a batch on its own. Reviewers control those decisions according to role and lock state.

**Worked example:** A same-date screenshot contains eight existing players, one former nickname, and one unknown name. Eight rows stage against current players. The former nickname stages with history evidence for confirmation. The unknown remains unmatched. The reviewer confirms the former identity, intentionally rejects the unknown row because the image is cropped, accepts the nine supported rows, and applies the eligible batch. The output is a linked import, applied records, and recalculation; the rejected row remains visible in review history.

## Limitations and recovery

OCR can confuse digits, punctuation, ordering, or cropped names. Reprocess only through the visible confirmed action; repeated upload can create another artifact without fixing context. A processing failure can leave an import history entry, so check history before retrying. Delete concerns the import artifact, rollback concerns applied results, and restore does not automatically reapply them. Include import, scope, event, date, provider label, processing state, warning, and affected row when requesting help.

## Do not continue when

Stop before accepting rows if the alliance, event, date, stage, title, or screenshot type is wrong. Correcting the context before acceptance is safer than trying to repair many saved results later.

Next: [Reviewing Imported Data](/kingshot-events/imports/review-imported-data).
