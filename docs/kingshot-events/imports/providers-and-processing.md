---
title: 'Providers and Processing'
description: 'Choose provider|Upload source|Watch progress|Open review'
product: 'Kingshot Events'
audience: 'Import contributors'
experienceLevel: 'Intermediate'
featureArea: 'Imports and Data Entry'
lastReviewed: '2026-08-01'
---

<CategoryHero category="imports" icon="upload" eyebrow="Fast input with human review" title="Providers and Processing">
Turn screenshots and structured rows into reviewed records without hiding uncertainty or overwrite decisions.
</CategoryHero>

# Providers and Processing

Providers and Processing is the focused guide for import contributors. It explains the controls you can see, the states that change what you can do, and the confirmation that proves the task finished in the intended scope.

## What this guide helps you decide

The main decision is whether to **know when a submission is ready for human review**. Start by reading the scope label and the record status. A control can be present but unavailable when your membership, role, plan access, current status, or selected community does not permit the change. That distinction is intentional: visibility helps you understand the workflow, while availability protects shared records.

Use this page when you need to select a provider and monitor processing progress. It is not a promise that every account sees every action. Public pages, signed-in features, role-restricted controls, subscription-backed capabilities, and intentionally private administration are documented as different availability classes.

## Before you begin

- Confirm the signed-in identity and the player link shown in the account area.
- Read the current kingdom, alliance, or personal scope before changing data.
- Open the record itself instead of relying on a notification or an old browser tab.
- Check whether the status is Queued, Reading, Ready, or Failed.
- If the action affects other people, agree on the intended outcome before saving or publishing.

## Controls and information you will use

The relevant controls are: **Select a provider and monitor processing progress**. Labels may be shortened on a narrow screen, but the scope name, status, primary action, and confirmation remain part of the same task. Filters change the current view; they do not silently move or rewrite the underlying record. A save changes a draft or editable record. Apply, approve, publish, restore, or award are separate decisions when the workflow requires review.

<VisualReference title="Recognizing the Providers and Processing workspace" :items="['scope and identity context', 'current status and availability', 'primary action with confirmation']">
Look first for the category icon and imports label, then read the scope line above the working area. The center region presents select a provider and monitor processing progress. A status treatment identifies queued, reading, ready, failed, while the final confirmation names the record and community affected.
</VisualReference>

## Complete the task

1. **Choose provider.** Confirm the page title, signed-in identity, and selected scope before entering or changing anything.
2. **Upload source.** Read existing values and status messages. If information is missing, stop and gather it rather than guessing.
3. **Watch progress.** Use the available control and review the preview, comparison, or warning. A disabled control usually points to a missing prerequisite.
4. **Open review.** Read the success message and reopen the affected record. For shared work, verify that the next responsible role can see the expected state.


## Providers and Processing workflow

The providers and processing map follows the choices visible to import contributors and marks the confirmation that prevents work from continuing in the wrong state or scope.

<!-- diagram: ke-imports-and-data-entry-providers-and-processing -->
```mermaid
flowchart TD
  S0["Choose provider"]
  S1["Upload source"]
  S2["Watch progress"]
  S3["Open review"]
  S0 --> S1
  S1 --> S2
  S2 --> S3
```

**Diagram summary:** Choose provider, then Upload source, then Watch progress, then Open review. Each step remains visible to the person doing the work, and the final step confirms the outcome.

*Workflow caption: Providers and Processing from first choice to confirmed outcome.*

## Status and role differences

| Status | What it means to the reader | Sensible next action |
| --- | --- | --- |
| **Queued** | The task is at its starting or neutral state. | Continue with choose provider. |
| **Reading** | Work has progressed but another check or decision remains. | Continue with upload source. |
| **Ready** | Work has progressed but another check or decision remains. | Continue with watch progress. |
| **Failed** | The workflow reached a final or constrained state. | Verify the outcome and history. |

For providers and processing, import contributors see the records and outcomes their current responsibility permits. Alliance roles act within their alliance, while granted kingdom roles can coordinate across communities without silently taking ownership of every source record. Plan access can reveal imports and data entry capabilities, but it never replaces the role, status, and scope checks described above. Platform-wide administration remains outside this public handbook.

## Saving, review, and history

While working in providers and processing, editable values should show a saved state before you leave. Review keeps upload source separate from the later decision to watch progress. Applying or publishing makes the agreed outcome visible to its intended audience. If removal, rollback, or restore is supported here, authorized readers retain enough history to understand the change. Reopen the source record before repeating open review.

## If the result is not what you expected

- **The providers and processing action is missing:** confirm the selected scope, membership, role, and feature availability.
- **The action is disabled:** inspect required fields and the current status; a locked or final record may need a correction or review path.
- **The list looks unchanged:** clear view filters and reopen the source record before submitting again.
- **Another person sees a different result:** compare scope, date window, role, and publication state.
- **You need support:** record the page title, scope name, visible status, time, and safe steps to reproduce. Do not include passwords, payment details, or private screenshots.

## Continue learning

- [Imports and Data Entry Guide](/kingshot-events/imports/)
- [Row Statuses and Decisions](/kingshot-events/imports/row-statuses-and-decisions)
- [Apply and Import History](/kingshot-events/imports/apply-and-history)
- [Rollback and Restore](/kingshot-events/imports/rollback-and-restore)
- [Spreadsheet and Structured Input](/kingshot-events/imports/spreadsheet-and-structured-input)
