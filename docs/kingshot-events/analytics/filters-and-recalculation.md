---
title: 'Filters and Recalculation'
description: 'Set scope|Choose filters|Recalculate|Record context'
product: 'Kingshot Events'
audience: 'Analytics viewers'
experienceLevel: 'Intermediate'
featureArea: 'Analytics and Rewards'
lastReviewed: '2026-08-01'
---

<CategoryHero category="analytics" icon="chart" eyebrow="Evidence for decisions" title="Filters and Recalculation">
Read scope-aware trends, find missing data, and turn agreed reward rules into explainable outcomes.
</CategoryHero>

# Filters and Recalculation

Filters and Recalculation is the focused guide for analytics viewers. It explains the controls you can see, the states that change what you can do, and the confirmation that proves the task finished in the intended scope.

## What this guide helps you decide

The main decision is whether to **make comparisons repeatable and explainable**. Start by reading the scope label and the record status. A control can be present but unavailable when your membership, role, plan access, current status, or selected community does not permit the change. That distinction is intentional: visibility helps you understand the workflow, while availability protects shared records.

Use this page when you need to set event, date, player, alliance, and inclusion filters. It is not a promise that every account sees every action. Public pages, signed-in features, role-restricted controls, subscription-backed capabilities, and intentionally private administration are documented as different availability classes.

## Before you begin

- Confirm the signed-in identity and the player link shown in the account area.
- Read the current kingdom, alliance, or personal scope before changing data.
- Open the record itself instead of relying on a notification or an old browser tab.
- Check whether the status is Unfiltered, Filtered, Recalculating, or Ready.
- If the action affects other people, agree on the intended outcome before saving or publishing.

## Controls and information you will use

The relevant controls are: **Set event, date, player, alliance, and inclusion filters**. Labels may be shortened on a narrow screen, but the scope name, status, primary action, and confirmation remain part of the same task. Filters change the current view; they do not silently move or rewrite the underlying record. A save changes a draft or editable record. Apply, approve, publish, restore, or award are separate decisions when the workflow requires review.

<VisualReference title="Recognizing the Filters and Recalculation workspace" :items="['scope and identity context', 'current status and availability', 'primary action with confirmation']">
Look first for the category icon and analytics label, then read the scope line above the working area. The center region presents set event, date, player, alliance, and inclusion filters. A status treatment identifies unfiltered, filtered, recalculating, ready, while the final confirmation names the record and community affected.
</VisualReference>

## Complete the task

1. **Set scope.** Confirm the page title, signed-in identity, and selected scope before entering or changing anything.
2. **Choose filters.** Read existing values and status messages. If information is missing, stop and gather it rather than guessing.
3. **Recalculate.** Use the available control and review the preview, comparison, or warning. A disabled control usually points to a missing prerequisite.
4. **Record context.** Read the success message and reopen the affected record. For shared work, verify that the next responsible role can see the expected state.


## Filters and Recalculation workflow

The filters and recalculation map follows the choices visible to analytics viewers and marks the confirmation that prevents work from continuing in the wrong state or scope.

<!-- diagram: ke-analytics-and-rewards-filters-and-recalculation -->
```mermaid
flowchart TD
  S0["Set scope"]
  S1["Choose filters"]
  S2["Recalculate"]
  S3["Record context"]
  S0 --> S1
  S1 --> S2
  S2 --> S3
```

**Diagram summary:** Set scope, then Choose filters, then Recalculate, then Record context. Each step remains visible to the person doing the work, and the final step confirms the outcome.

*Workflow caption: Filters and Recalculation from first choice to confirmed outcome.*

## Status and role differences

| Status | What it means to the reader | Sensible next action |
| --- | --- | --- |
| **Unfiltered** | The task is at its starting or neutral state. | Continue with set scope. |
| **Filtered** | Work has progressed but another check or decision remains. | Continue with choose filters. |
| **Recalculating** | Work has progressed but another check or decision remains. | Continue with recalculate. |
| **Ready** | The workflow reached a final or constrained state. | Verify the outcome and history. |

For filters and recalculation, analytics viewers see the records and outcomes their current responsibility permits. Alliance roles act within their alliance, while granted kingdom roles can coordinate across communities without silently taking ownership of every source record. Plan access can reveal analytics and rewards capabilities, but it never replaces the role, status, and scope checks described above. Platform-wide administration remains outside this public handbook.

## Saving, review, and history

While working in filters and recalculation, editable values should show a saved state before you leave. Review keeps choose filters separate from the later decision to recalculate. Applying or publishing makes the agreed outcome visible to its intended audience. If removal, rollback, or restore is supported here, authorized readers retain enough history to understand the change. Reopen the source record before repeating record context.

## If the result is not what you expected

- **The filters and recalculation action is missing:** confirm the selected scope, membership, role, and feature availability.
- **The action is disabled:** inspect required fields and the current status; a locked or final record may need a correction or review path.
- **The list looks unchanged:** clear view filters and reopen the source record before submitting again.
- **Another person sees a different result:** compare scope, date window, role, and publication state.
- **You need support:** record the page title, scope name, visible status, time, and safe steps to reproduce. Do not include passwords, payment details, or private screenshots.

## Continue learning

- [Analytics and Rewards Guide](/kingshot-events/analytics/)
- [Recommendations and Missing Data](/kingshot-events/analytics/recommendations-and-missing-data)
- [Reward Rules and Outcomes](/kingshot-events/analytics/reward-rules)
