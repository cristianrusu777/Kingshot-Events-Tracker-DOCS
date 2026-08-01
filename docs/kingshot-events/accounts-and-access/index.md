---
title: 'Accounts and Access'
description: 'Identify account|Check membership|Check role|Check availability'
product: 'Kingshot Events'
audience: 'All users'
experienceLevel: 'Beginner'
featureArea: 'Accounts and Access'
lastReviewed: '2026-08-01'
---

<CategoryHero category="accounts-and-access" icon="shield" eyebrow="Identity and permission" title="Accounts and Access">
Understand registration, approval, sign-in security, player links, and why an action can be visible but unavailable.
</CategoryHero>

# Accounts and Access

Understand registration, approval, sign-in security, player links, and why an action can be visible but unavailable. This guide is the decision point for all users: it explains where to begin, what changes with scope or role, and which focused guide answers the next question.

## What this guide helps you decide

The main decision is whether to **find the layer that controls the requested action**. Start by reading the scope label and the record status. A control can be present but unavailable when your membership, role, plan access, current status, or selected community does not permit the change. That distinction is intentional: visibility helps you understand the workflow, while availability protects shared records.

Use this page when you need to separate identity, membership, role, and plan access. It is not a promise that every account sees every action. Public pages, signed-in features, role-restricted controls, subscription-backed capabilities, and intentionally private administration are documented as different availability classes.

## Before you begin

- Confirm the signed-in identity and the player link shown in the account area.
- Read the current kingdom, alliance, or personal scope before changing data.
- Open the record itself instead of relying on a notification or an old browser tab.
- Check whether the status is Public, Pending, Active, or Restricted.
- If the action affects other people, agree on the intended outcome before saving or publishing.

## Controls and information you will use

The relevant controls are: **Separate identity, membership, role, and plan access**. Labels may be shortened on a narrow screen, but the scope name, status, primary action, and confirmation remain part of the same task. Filters change the current view; they do not silently move or rewrite the underlying record. A save changes a draft or editable record. Apply, approve, publish, restore, or award are separate decisions when the workflow requires review.

<VisualReference title="Recognizing the Accounts and Access workspace" :items="['scope and identity context', 'current status and availability', 'primary action with confirmation']">
Look first for the category icon and accounts-and-access label, then read the scope line above the working area. The center region presents separate identity, membership, role, and plan access. A status treatment identifies public, pending, active, restricted, while the final confirmation names the record and community affected.
</VisualReference>

## Complete the task

1. **Identify account.** Confirm the page title, signed-in identity, and selected scope before entering or changing anything.
2. **Check membership.** Read existing values and status messages. If information is missing, stop and gather it rather than guessing.
3. **Check role.** Use the available control and review the preview, comparison, or warning. A disabled control usually points to a missing prerequisite.
4. **Check availability.** Read the success message and reopen the affected record. For shared work, verify that the next responsible role can see the expected state.


## Accounts and Access workflow

The accounts and access map follows the choices visible to all users and marks the confirmation that prevents work from continuing in the wrong state or scope.

<!-- diagram: ke-accounts-and-access-index -->
```mermaid
flowchart TD
  S0["Identify account"]
  S1["Check membership"]
  S2["Check role"]
  S3["Check availability"]
  S0 --> S1
  S1 --> S2
  S2 --> S3
```

**Diagram summary:** Identify account, then Check membership, then Check role, then Check availability. Each step remains visible to the person doing the work, and the final step confirms the outcome.

*Workflow caption: Accounts and Access from first choice to confirmed outcome.*

## Status and role differences

| Status | What it means to the reader | Sensible next action |
| --- | --- | --- |
| **Public** | The task is at its starting or neutral state. | Continue with identify account. |
| **Pending** | Work has progressed but another check or decision remains. | Continue with check membership. |
| **Active** | Work has progressed but another check or decision remains. | Continue with check role. |
| **Restricted** | The workflow reached a final or constrained state. | Verify the outcome and history. |

For accounts and access, all users see the records and outcomes their current responsibility permits. Alliance roles act within their alliance, while granted kingdom roles can coordinate across communities without silently taking ownership of every source record. Plan access can reveal accounts and access capabilities, but it never replaces the role, status, and scope checks described above. Platform-wide administration remains outside this public handbook.

## Saving, review, and history

While working in accounts and access, editable values should show a saved state before you leave. Review keeps check membership separate from the later decision to check role. Applying or publishing makes the agreed outcome visible to its intended audience. If removal, rollback, or restore is supported here, authorized readers retain enough history to understand the change. Reopen the source record before repeating check availability.

## If the result is not what you expected

- **The accounts and access action is missing:** confirm the selected scope, membership, role, and feature availability.
- **The action is disabled:** inspect required fields and the current status; a locked or final record may need a correction or review path.
- **The list looks unchanged:** clear view filters and reopen the source record before submitting again.
- **Another person sees a different result:** compare scope, date window, role, and publication state.
- **You need support:** record the page title, scope name, visible status, time, and safe steps to reproduce. Do not include passwords, payment details, or private screenshots.

## Continue learning

- [Registration and Approval](/kingshot-events/accounts-and-access/registration-and-approval)
- [Password and Sign-In Security](/kingshot-events/accounts-and-access/password-and-security)
- [Player Link Review](/kingshot-events/accounts-and-access/player-link-review)
- [Multi-Role Access](/kingshot-events/accounts-and-access/multi-role-access)
