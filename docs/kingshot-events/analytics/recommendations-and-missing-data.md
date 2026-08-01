---
title: 'Recommendations and Missing Data'
description: 'Check coverage|Read gaps|Review recommendation|Confirm manually'
product: 'Kingshot Events'
audience: 'Leaders and analysts'
experienceLevel: 'Intermediate'
featureArea: 'Analytics and Rewards'
lastReviewed: '2026-08-01'
---

<CategoryHero category="analytics" icon="chart" eyebrow="Evidence for decisions" title="Recommendations and Missing Data">
Read scope-aware trends, find missing data, and turn agreed reward rules into explainable outcomes.
</CategoryHero>

# Recommendations and Missing Data

Recommendations and Missing Data is the focused guide for leaders and analysts. It explains the controls you can see, the states that change what you can do, and the confirmation that proves the task finished in the intended scope.

## What this guide helps you decide

The main decision is whether to **avoid treating incomplete evidence as a final decision**. Start by reading the scope label and the record status. A control can be present but unavailable when your membership, role, plan access, current status, or selected community does not permit the change. That distinction is intentional: visibility helps you understand the workflow, while availability protects shared records.

Use this page when you need to read recommendations beside coverage and missing-data signals. It is not a promise that every account sees every action. Public pages, signed-in features, role-restricted controls, subscription-backed capabilities, and intentionally private administration are documented as different availability classes.

## Before you begin

- Confirm the signed-in identity and the player link shown in the account area.
- Read the current kingdom, alliance, or personal scope before changing data.
- Open the record itself instead of relying on a notification or an old browser tab.
- Check whether the status is Complete, Partial, or Insufficient.
- If the action affects other people, agree on the intended outcome before saving or publishing.

## Controls and information you will use

The relevant controls are: **Read recommendations beside coverage and missing-data signals**. Labels may be shortened on a narrow screen, but the scope name, status, primary action, and confirmation remain part of the same task. Filters change the current view; they do not silently move or rewrite the underlying record. A save changes a draft or editable record. Apply, approve, publish, restore, or award are separate decisions when the workflow requires review.

<VisualReference title="Recognizing the Recommendations and Missing Data workspace" :items="['scope and identity context', 'current status and availability', 'primary action with confirmation']">
Look first for the category icon and analytics label, then read the scope line above the working area. The center region presents read recommendations beside coverage and missing-data signals. A status treatment identifies complete, partial, insufficient, while the final confirmation names the record and community affected.
</VisualReference>

## Complete the task

1. **Check coverage.** Confirm the page title, signed-in identity, and selected scope before entering or changing anything.
2. **Read gaps.** Read existing values and status messages. If information is missing, stop and gather it rather than guessing.
3. **Review recommendation.** Use the available control and review the preview, comparison, or warning. A disabled control usually points to a missing prerequisite.
4. **Confirm manually.** Read the success message and reopen the affected record. For shared work, verify that the next responsible role can see the expected state.


## Recommendations and Missing Data workflow

The recommendations and missing data map follows the choices visible to leaders and analysts and marks the confirmation that prevents work from continuing in the wrong state or scope.

<!-- diagram: ke-analytics-and-rewards-recommendations-and-missing-data -->
```mermaid
flowchart TD
  S0["Check coverage"]
  S1["Read gaps"]
  S2["Review recommendation"]
  S3["Confirm manually"]
  S0 --> S1
  S1 --> S2
  S2 --> S3
```

**Diagram summary:** Check coverage, then Read gaps, then Review recommendation, then Confirm manually. Each step remains visible to the person doing the work, and the final step confirms the outcome.

*Workflow caption: Recommendations and Missing Data from first choice to confirmed outcome.*

## Status and role differences

| Status | What it means to the reader | Sensible next action |
| --- | --- | --- |
| **Complete** | The task is at its starting or neutral state. | Continue with check coverage. |
| **Partial** | Work has progressed but another check or decision remains. | Continue with read gaps. |
| **Insufficient** | The workflow reached a final or constrained state. | Verify the outcome and history. |

For recommendations and missing data, leaders and analysts see the records and outcomes their current responsibility permits. Alliance roles act within their alliance, while granted kingdom roles can coordinate across communities without silently taking ownership of every source record. Plan access can reveal analytics and rewards capabilities, but it never replaces the role, status, and scope checks described above. Platform-wide administration remains outside this public handbook.

## Saving, review, and history

While working in recommendations and missing data, editable values should show a saved state before you leave. Review keeps read gaps separate from the later decision to review recommendation. Applying or publishing makes the agreed outcome visible to its intended audience. If removal, rollback, or restore is supported here, authorized readers retain enough history to understand the change. Reopen the source record before repeating confirm manually.

## If the result is not what you expected

- **The recommendations and missing data action is missing:** confirm the selected scope, membership, role, and feature availability.
- **The action is disabled:** inspect required fields and the current status; a locked or final record may need a correction or review path.
- **The list looks unchanged:** clear view filters and reopen the source record before submitting again.
- **Another person sees a different result:** compare scope, date window, role, and publication state.
- **You need support:** record the page title, scope name, visible status, time, and safe steps to reproduce. Do not include passwords, payment details, or private screenshots.

## Continue learning

- [Analytics and Rewards Guide](/kingshot-events/analytics/)
- [Filters and Recalculation](/kingshot-events/analytics/filters-and-recalculation)
- [Reward Rules and Outcomes](/kingshot-events/analytics/reward-rules)
