---
title: 'Record Batches and Corrections'
description: 'Open batch|Find row|Enter correction|Confirm history'
product: 'Kingshot Events'
audience: 'Result contributors and reviewers'
experienceLevel: 'Intermediate'
featureArea: 'Events and Results'
lastReviewed: '2026-08-01'
---

<CategoryHero category="events" icon="flag" eyebrow="From event setup to trusted results" title="Record Batches and Corrections">
Follow each event from its reusable definition through participation, correction, review, and history.
</CategoryHero>

# Record Batches and Corrections

Record Batches and Corrections is the focused guide for result contributors and reviewers. It explains the controls you can see, the states that change what you can do, and the confirmation that proves the task finished in the intended scope.

## What this guide helps you decide

The main decision is whether to **correct a result without losing its provenance**. Start by reading the scope label and the record status. A control can be present but unavailable when your membership, role, plan access, current status, or selected community does not permit the change. That distinction is intentional: visibility helps you understand the workflow, while availability protects shared records.

Use this page when you need to inspect batches, amend rows, and preserve correction history. It is not a promise that every account sees every action. Public pages, signed-in features, role-restricted controls, subscription-backed capabilities, and intentionally private administration are documented as different availability classes.

## Before you begin

- Confirm the signed-in identity and the player link shown in the account area.
- Read the current kingdom, alliance, or personal scope before changing data.
- Open the record itself instead of relying on a notification or an old browser tab.
- Check whether the status is Pending, Applied, Corrected, or Reverted.
- If the action affects other people, agree on the intended outcome before saving or publishing.

## Controls and information you will use

The relevant controls are: **Inspect batches, amend rows, and preserve correction history**. Labels may be shortened on a narrow screen, but the scope name, status, primary action, and confirmation remain part of the same task. Filters change the current view; they do not silently move or rewrite the underlying record. A save changes a draft or editable record. Apply, approve, publish, restore, or award are separate decisions when the workflow requires review.

<VisualReference title="Recognizing the Record Batches and Corrections workspace" :items="['scope and identity context', 'current status and availability', 'primary action with confirmation']">
Look first for the category icon and events label, then read the scope line above the working area. The center region presents inspect batches, amend rows, and preserve correction history. A status treatment identifies pending, applied, corrected, reverted, while the final confirmation names the record and community affected.
</VisualReference>

## Complete the task

1. **Open batch.** Confirm the page title, signed-in identity, and selected scope before entering or changing anything.
2. **Find row.** Read existing values and status messages. If information is missing, stop and gather it rather than guessing.
3. **Enter correction.** Use the available control and review the preview, comparison, or warning. A disabled control usually points to a missing prerequisite.
4. **Confirm history.** Read the success message and reopen the affected record. For shared work, verify that the next responsible role can see the expected state.


## Record Batches and Corrections workflow

The record batches and corrections map follows the choices visible to result contributors and reviewers and marks the confirmation that prevents work from continuing in the wrong state or scope.

<!-- diagram: ke-events-and-results-record-batches-and-corrections -->
```mermaid
flowchart TD
  S0["Open batch"]
  S1["Find row"]
  S2["Enter correction"]
  S3["Confirm history"]
  S0 --> S1
  S1 --> S2
  S2 --> S3
```

**Diagram summary:** Open batch, then Find row, then Enter correction, then Confirm history. Each step remains visible to the person doing the work, and the final step confirms the outcome.

*Workflow caption: Record Batches and Corrections from first choice to confirmed outcome.*

## Status and role differences

| Status | What it means to the reader | Sensible next action |
| --- | --- | --- |
| **Pending** | The task is at its starting or neutral state. | Continue with open batch. |
| **Applied** | Work has progressed but another check or decision remains. | Continue with find row. |
| **Corrected** | Work has progressed but another check or decision remains. | Continue with enter correction. |
| **Reverted** | The workflow reached a final or constrained state. | Verify the outcome and history. |

For record batches and corrections, result contributors and reviewers see the records and outcomes their current responsibility permits. Alliance roles act within their alliance, while granted kingdom roles can coordinate across communities without silently taking ownership of every source record. Plan access can reveal events and results capabilities, but it never replaces the role, status, and scope checks described above. Platform-wide administration remains outside this public handbook.

## Saving, review, and history

While working in record batches and corrections, editable values should show a saved state before you leave. Review keeps find row separate from the later decision to enter correction. Applying or publishing makes the agreed outcome visible to its intended audience. If removal, rollback, or restore is supported here, authorized readers retain enough history to understand the change. Reopen the source record before repeating confirm history.

## If the result is not what you expected

- **The record batches and corrections action is missing:** confirm the selected scope, membership, role, and feature availability.
- **The action is disabled:** inspect required fields and the current status; a locked or final record may need a correction or review path.
- **The list looks unchanged:** clear view filters and reopen the source record before submitting again.
- **Another person sees a different result:** compare scope, date window, role, and publication state.
- **You need support:** record the page title, scope name, visible status, time, and safe steps to reproduce. Do not include passwords, payment details, or private screenshots.

## Continue learning

- [Events and Results Guide](/kingshot-events/events/)
- [Templates and Event Settings](/kingshot-events/events/templates-and-settings)
- [Instances, Windows, and Locks](/kingshot-events/events/instances-and-locks)
- [Custom Events and Proposals](/kingshot-events/events/custom-events-and-proposals)
- [Default Event Patterns](/kingshot-events/events/default-event-patterns)
