---
title: 'Event and Analytics Problems'
description: 'Safe troubleshooting for event and analytics problems.'
product: 'kingshot-events'
audience: 'All affected users'
experienceLevel: 'Beginner'
featureArea: 'Troubleshooting'
lastReviewed: '2026-08-01'
head:
  - - meta
    - name: 'robots'
      content: 'index,follow'
---

# Event and Analytics Problems
## What you see

An event, result, reward, or chart is missing or unexpected.

## What it usually means

The wrong event occurrence, date range, stage, scope, filter, or underlying record may be selected.

## Safe checks and resolution

Confirm the event instance and date, clear filters, inspect the player record, and compare the source with saved results before requesting a correction.

## When to contact an authorized manager

Ask for help when the issue depends on role assignment, community scope, review status, or a locked workflow. Include the page name, visible message, selected scope, approximate time, and the safe steps already tried. Do not include passwords, tokens, private keys, or unrelated personal data.

## Related guides

- [support](/support)
- [feature availability](/kingshot-events/overview/feature-availability)

## Practical depth

### Trace the event layer

Identify whether the problem belongs to a template, dated instance, result row, batch, or summary. Check the window, lock, stage, scope, inclusion rules, and recalculation state.

## Worked example, recovery, and limitations

**What you see:** The same player appears twice for one event date. **Checks:** Identify the template, dated instance, stage or total context, result type, alliance, and source batches. **Decision:** Equivalent evidence is a duplicate; a different cumulative snapshot may refresh that date; a different non-cumulative value is a conflict requiring correction intent. **Recovery:** Use the owning batch or history correction, then verify recalculation with unchanged Analytics filters. Do not change the date or create another instance to bypass a lock. Include event, instance date, stage, player, both batches, lock state, and visible conflict wording when escalation is needed.

Limitations include locked instances, retention, dependent corrections, and incomplete source evidence. The safe outcome is one traceable identity or a visible unresolved conflict, never a hidden merge.

The event template cannot guarantee that a contributor chose the intended real-world occurrence. Preserve the source image or manual evidence until date, stage, player, score, and participation output have been verified.
