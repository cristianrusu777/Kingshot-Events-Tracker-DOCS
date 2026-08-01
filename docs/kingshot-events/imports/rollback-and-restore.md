---
title: 'Rollback and Restore'
description: 'Open batch|Review impact|Request rollback|Verify records'
product: 'Kingshot Events'
audience: 'Managers and restore reviewers'
experienceLevel: 'Intermediate'
featureArea: 'Imports and Data Entry'
lastReviewed: '2026-08-01'
---

<CategoryHero category="imports" icon="upload" eyebrow="Fast input with human review" title="Rollback and Restore">
Turn screenshots and structured rows into reviewed records without hiding uncertainty or overwrite decisions.
</CategoryHero>

# Rollback and Restore

Rollback and Restore is the focused guide for managers and restore reviewers. It explains the controls you can see, the states that change what you can do, and the confirmation that proves the task finished in the intended scope.

## What this guide helps you decide

The main decision is whether to **reverse an import while preserving later valid work**. Start by reading the scope label and the record status. A control can be present but unavailable when your membership, role, plan access, current status, or selected community does not permit the change. That distinction is intentional: visibility helps you understand the workflow, while availability protects shared records.

Use this page when you need to request rollback, inspect impact, and confirm restoration. It is not a promise that every account sees every action. Public pages, signed-in features, role-restricted controls, subscription-backed capabilities, and intentionally private administration are documented as different availability classes.

## Before you begin

- Confirm the signed-in identity and the player link shown in the account area.
- Read the current kingdom, alliance, or personal scope before changing data.
- Open the record itself instead of relying on a notification or an old browser tab.
- Check whether the status is Applied, Rollback requested, Restored, or Declined.
- If the action affects other people, agree on the intended outcome before saving or publishing.

## Controls and information you will use

The relevant controls are: **Request rollback, inspect impact, and confirm restoration**. Labels may be shortened on a narrow screen, but the scope name, status, primary action, and confirmation remain part of the same task. Filters change the current view; they do not silently move or rewrite the underlying record. A save changes a draft or editable record. Apply, approve, publish, restore, or award are separate decisions when the workflow requires review.

<VisualReference title="Recognizing the Rollback and Restore workspace" :items="['scope and identity context', 'current status and availability', 'primary action with confirmation']">
Look first for the category icon and imports label, then read the scope line above the working area. The center region presents request rollback, inspect impact, and confirm restoration. A status treatment identifies applied, rollback requested, restored, declined, while the final confirmation names the record and community affected.
</VisualReference>

## Complete the task

1. **Open batch.** Confirm the page title, signed-in identity, and selected scope before entering or changing anything.
2. **Review impact.** Read existing values and status messages. If information is missing, stop and gather it rather than guessing.
3. **Request rollback.** Use the available control and review the preview, comparison, or warning. A disabled control usually points to a missing prerequisite.
4. **Verify records.** Read the success message and reopen the affected record. For shared work, verify that the next responsible role can see the expected state.


## Rollback and Restore workflow

The rollback and restore map follows the choices visible to managers and restore reviewers and marks the confirmation that prevents work from continuing in the wrong state or scope.

<!-- diagram: ke-imports-and-data-entry-rollback-and-restore -->
```mermaid
flowchart TD
  S0["Open batch"]
  S1["Review impact"]
  S2["Request rollback"]
  S3["Verify records"]
  S0 --> S1
  S1 --> S2
  S2 --> S3
```

**Diagram summary:** Open batch, then Review impact, then Request rollback, then Verify records. Each step remains visible to the person doing the work, and the final step confirms the outcome.

*Workflow caption: Rollback and Restore from first choice to confirmed outcome.*

## Status and role differences

| Status | What it means to the reader | Sensible next action |
| --- | --- | --- |
| **Applied** | The task is at its starting or neutral state. | Continue with open batch. |
| **Rollback requested** | Work has progressed but another check or decision remains. | Continue with review impact. |
| **Restored** | Work has progressed but another check or decision remains. | Continue with request rollback. |
| **Declined** | The workflow reached a final or constrained state. | Verify the outcome and history. |

For rollback and restore, managers and restore reviewers see the records and outcomes their current responsibility permits. Alliance roles act within their alliance, while granted kingdom roles can coordinate across communities without silently taking ownership of every source record. Plan access can reveal imports and data entry capabilities, but it never replaces the role, status, and scope checks described above. Platform-wide administration remains outside this public handbook.

## Saving, review, and history

While working in rollback and restore, editable values should show a saved state before you leave. Review keeps review impact separate from the later decision to request rollback. Applying or publishing makes the agreed outcome visible to its intended audience. If removal, rollback, or restore is supported here, authorized readers retain enough history to understand the change. Reopen the source record before repeating verify records.

## If the result is not what you expected

- **The rollback and restore action is missing:** confirm the selected scope, membership, role, and feature availability.
- **The action is disabled:** inspect required fields and the current status; a locked or final record may need a correction or review path.
- **The list looks unchanged:** clear view filters and reopen the source record before submitting again.
- **Another person sees a different result:** compare scope, date window, role, and publication state.
- **You need support:** record the page title, scope name, visible status, time, and safe steps to reproduce. Do not include passwords, payment details, or private screenshots.

## Continue learning

- [Imports and Data Entry Guide](/kingshot-events/imports/)
- [Providers and Processing](/kingshot-events/imports/providers-and-processing)
- [Row Statuses and Decisions](/kingshot-events/imports/row-statuses-and-decisions)
- [Apply and Import History](/kingshot-events/imports/apply-and-history)
- [Spreadsheet and Structured Input](/kingshot-events/imports/spreadsheet-and-structured-input)
