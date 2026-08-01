---
title: 'Data and Save Problems'
description: 'Safe troubleshooting for data and save problems.'
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

# Data and Save Problems
## What you see

A form does not save, reports a duplicate, or shows older information.

## What it usually means

A required field may be missing, an existing logical record may conflict, the workflow may be locked, or the view may need refresh.

## Safe checks and resolution

Review every visible field, open the existing record, avoid repeated submission, refresh once after a confirmed save, and ask the scoped manager before creating a replacement.

## When to contact an authorized manager

Ask for help when the issue depends on role assignment, community scope, review status, or a locked workflow. Include the page name, visible message, selected scope, approximate time, and the safe steps already tried. Do not include passwords, tokens, private keys, or unrelated personal data.

## Related guides

- [support](/support)
- [feature availability](/kingshot-events/overview/feature-availability)

## Practical depth

### Separate view state from record state

Wait for saved confirmation, reopen the record, clear filters, and verify scope. Draft, review, locked, published, removed, and restored states intentionally offer different controls.

## Worked example, recovery, and limitations

**What you see:** A renamed player seems to disappear after save. **Checks:** Wait for the visible saved state, clear the directory filters, confirm alliance scope, search both current and former nickname, and inspect the external player ID. **Decision:** If the old nickname appears in history on the same player, no new record is needed. If the player is soft-deleted, use the eligible restore path. **Output:** The existing identity returns to the directory or a manager receives a precise restore request. Synchronization can later replace supported display fields, so a manual edit cannot guarantee permanent precedence. Include player ID, before and after nickname, alliance, save state, and time.

This recovery preserves one identity and its history. It cannot guarantee restoration after retention expires or override a newer synchronized value without resolving its source.
