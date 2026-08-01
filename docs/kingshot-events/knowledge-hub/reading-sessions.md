---
title: 'Reading Sessions'
description: 'Create session|Assign readers|Read article|Verify completion'
product: 'Kingshot Events'
audience: 'Session managers and readers'
experienceLevel: 'Intermediate'
featureArea: 'Knowledge Hub'
lastReviewed: '2026-08-01'
---

<CategoryHero category="knowledge-hub" icon="book" eyebrow="Knowledge people can trust" title="Reading Sessions">
Find, author, review, publish, and verify guidance for the communities that need it.
</CategoryHero>

# Reading Sessions

Reading Sessions is the focused guide for session managers and readers. It explains the controls you can see, the states that change what you can do, and the confirmation that proves the task finished in the intended scope.

## What this guide helps you decide

The main decision is whether to **distinguish opening an article from verified completion**. Start by reading the scope label and the record status. A control can be present but unavailable when your membership, role, plan access, current status, or selected community does not permit the change. That distinction is intentional: visibility helps you understand the workflow, while availability protects shared records.

Use this page when you need to assign required reading and verify completion. It is not a promise that every account sees every action. Public pages, signed-in features, role-restricted controls, subscription-backed capabilities, and intentionally private administration are documented as different availability classes.

## Before you begin

- Confirm the signed-in identity and the player link shown in the account area.
- Read the current kingdom, alliance, or personal scope before changing data.
- Open the record itself instead of relying on a notification or an old browser tab.
- Check whether the status is Assigned, Opened, Verified, or Expired.
- If the action affects other people, agree on the intended outcome before saving or publishing.

## Controls and information you will use

The relevant controls are: **Assign required reading and verify completion**. Labels may be shortened on a narrow screen, but the scope name, status, primary action, and confirmation remain part of the same task. Filters change the current view; they do not silently move or rewrite the underlying record. A save changes a draft or editable record. Apply, approve, publish, restore, or award are separate decisions when the workflow requires review.

<VisualReference title="Recognizing the Reading Sessions workspace" :items="['scope and identity context', 'current status and availability', 'primary action with confirmation']">
Look first for the category icon and knowledge-hub label, then read the scope line above the working area. The center region presents assign required reading and verify completion. A status treatment identifies assigned, opened, verified, expired, while the final confirmation names the record and community affected.
</VisualReference>

## Complete the task

1. **Create session.** Confirm the page title, signed-in identity, and selected scope before entering or changing anything.
2. **Assign readers.** Read existing values and status messages. If information is missing, stop and gather it rather than guessing.
3. **Read article.** Use the available control and review the preview, comparison, or warning. A disabled control usually points to a missing prerequisite.
4. **Verify completion.** Read the success message and reopen the affected record. For shared work, verify that the next responsible role can see the expected state.


## Reading Sessions workflow

The reading sessions map follows the choices visible to session managers and readers and marks the confirmation that prevents work from continuing in the wrong state or scope.

<!-- diagram: ke-knowledge-hub-reading-sessions -->
```mermaid
flowchart TD
  S0["Create session"]
  S1["Assign readers"]
  S2["Read article"]
  S3["Verify completion"]
  S0 --> S1
  S1 --> S2
  S2 --> S3
```

**Diagram summary:** Create session, then Assign readers, then Read article, then Verify completion. Each step remains visible to the person doing the work, and the final step confirms the outcome.

*Workflow caption: Reading Sessions from first choice to confirmed outcome.*

## Status and role differences

| Status | What it means to the reader | Sensible next action |
| --- | --- | --- |
| **Assigned** | The task is at its starting or neutral state. | Continue with create session. |
| **Opened** | Work has progressed but another check or decision remains. | Continue with assign readers. |
| **Verified** | Work has progressed but another check or decision remains. | Continue with read article. |
| **Expired** | The workflow reached a final or constrained state. | Verify the outcome and history. |

For reading sessions, session managers and readers see the records and outcomes their current responsibility permits. Alliance roles act within their alliance, while granted kingdom roles can coordinate across communities without silently taking ownership of every source record. Plan access can reveal knowledge hub capabilities, but it never replaces the role, status, and scope checks described above. Platform-wide administration remains outside this public handbook.

## Saving, review, and history

While working in reading sessions, editable values should show a saved state before you leave. Review keeps assign readers separate from the later decision to read article. Applying or publishing makes the agreed outcome visible to its intended audience. If removal, rollback, or restore is supported here, authorized readers retain enough history to understand the change. Reopen the source record before repeating verify completion.

## If the result is not what you expected

- **The reading sessions action is missing:** confirm the selected scope, membership, role, and feature availability.
- **The action is disabled:** inspect required fields and the current status; a locked or final record may need a correction or review path.
- **The list looks unchanged:** clear view filters and reopen the source record before submitting again.
- **Another person sees a different result:** compare scope, date window, role, and publication state.
- **You need support:** record the page title, scope name, visible status, time, and safe steps to reproduce. Do not include passwords, payment details, or private screenshots.

## Continue learning

- [Knowledge Hub Guide](/kingshot-events/knowledge-hub/)
- [Blocks, Media, and Structured Content](/kingshot-events/knowledge-hub/blocks-and-media)
- [Revisions and Review](/kingshot-events/knowledge-hub/revisions-and-review)
