---
title: 'Apply and Import History'
description: 'Finish review|Apply batch|Read summary|Open history'
product: 'Kingshot Events'
audience: 'Contributors and managers'
experienceLevel: 'Intermediate'
featureArea: 'Imports and Data Entry'
lastReviewed: '2026-08-01'
---

<CategoryHero category="imports" icon="upload" eyebrow="Fast input with human review" title="Apply and Import History">
Turn screenshots and structured rows into reviewed records without hiding uncertainty or overwrite decisions.
</CategoryHero>

# Apply and Import History

Apply and Import History is the focused guide for contributors and managers. It explains the controls you can see, the states that change what you can do, and the confirmation that proves the task finished in the intended scope.

## What this guide helps you decide

The main decision is whether to **connect every applied value to its import decision**. Start by reading the scope label and the record status. A control can be present but unavailable when your membership, role, plan access, current status, or selected community does not permit the change. That distinction is intentional: visibility helps you understand the workflow, while availability protects shared records.

Use this page when you need to apply reviewed rows and inspect the resulting batch. It is not a promise that every account sees every action. Public pages, signed-in features, role-restricted controls, subscription-backed capabilities, and intentionally private administration are documented as different availability classes.

## Before you begin

- Confirm the signed-in identity and the player link shown in the account area.
- Read the current kingdom, alliance, or personal scope before changing data.
- Open the record itself instead of relying on a notification or an old browser tab.
- Check whether the status is Reviewed, Applying, Applied, or Partly applied.
- If the action affects other people, agree on the intended outcome before saving or publishing.

## Controls and information you will use

The relevant controls are: **Apply reviewed rows and inspect the resulting batch**. Labels may be shortened on a narrow screen, but the scope name, status, primary action, and confirmation remain part of the same task. Filters change the current view; they do not silently move or rewrite the underlying record. A save changes a draft or editable record. Apply, approve, publish, restore, or award are separate decisions when the workflow requires review.

<VisualReference title="Recognizing the Apply and Import History workspace" :items="['scope and identity context', 'current status and availability', 'primary action with confirmation']">
Look first for the category icon and imports label, then read the scope line above the working area. The center region presents apply reviewed rows and inspect the resulting batch. A status treatment identifies reviewed, applying, applied, partly applied, while the final confirmation names the record and community affected.
</VisualReference>

## Complete the task

1. **Finish review.** Confirm the page title, signed-in identity, and selected scope before entering or changing anything.
2. **Apply batch.** Read existing values and status messages. If information is missing, stop and gather it rather than guessing.
3. **Read summary.** Use the available control and review the preview, comparison, or warning. A disabled control usually points to a missing prerequisite.
4. **Open history.** Read the success message and reopen the affected record. For shared work, verify that the next responsible role can see the expected state.


## Apply and Import History workflow

The apply and import history map follows the choices visible to contributors and managers and marks the confirmation that prevents work from continuing in the wrong state or scope.

<!-- diagram: ke-imports-and-data-entry-apply-and-history -->
```mermaid
flowchart TD
  S0["Finish review"]
  S1["Apply batch"]
  S2["Read summary"]
  S3["Open history"]
  S0 --> S1
  S1 --> S2
  S2 --> S3
```

**Diagram summary:** Finish review, then Apply batch, then Read summary, then Open history. Each step remains visible to the person doing the work, and the final step confirms the outcome.

*Workflow caption: Apply and Import History from first choice to confirmed outcome.*

## Status and role differences

| Status | What it means to the reader | Sensible next action |
| --- | --- | --- |
| **Reviewed** | The task is at its starting or neutral state. | Continue with finish review. |
| **Applying** | Work has progressed but another check or decision remains. | Continue with apply batch. |
| **Applied** | Work has progressed but another check or decision remains. | Continue with read summary. |
| **Partly applied** | The workflow reached a final or constrained state. | Verify the outcome and history. |

For apply and import history, contributors and managers see the records and outcomes their current responsibility permits. Alliance roles act within their alliance, while granted kingdom roles can coordinate across communities without silently taking ownership of every source record. Plan access can reveal imports and data entry capabilities, but it never replaces the role, status, and scope checks described above. Platform-wide administration remains outside this public handbook.

## Saving, review, and history

While working in apply and import history, editable values should show a saved state before you leave. Review keeps apply batch separate from the later decision to read summary. Applying or publishing makes the agreed outcome visible to its intended audience. If removal, rollback, or restore is supported here, authorized readers retain enough history to understand the change. Reopen the source record before repeating open history.

## If the result is not what you expected

- **The apply and import history action is missing:** confirm the selected scope, membership, role, and feature availability.
- **The action is disabled:** inspect required fields and the current status; a locked or final record may need a correction or review path.
- **The list looks unchanged:** clear view filters and reopen the source record before submitting again.
- **Another person sees a different result:** compare scope, date window, role, and publication state.
- **You need support:** record the page title, scope name, visible status, time, and safe steps to reproduce. Do not include passwords, payment details, or private screenshots.

## Continue learning

- [Imports and Data Entry Guide](/kingshot-events/imports/)
- [Providers and Processing](/kingshot-events/imports/providers-and-processing)
- [Row Statuses and Decisions](/kingshot-events/imports/row-statuses-and-decisions)
- [Rollback and Restore](/kingshot-events/imports/rollback-and-restore)
- [Spreadsheet and Structured Input](/kingshot-events/imports/spreadsheet-and-structured-input)
