---
title: 'Analytics Sharing, Scope, and Troubleshooting'
description: 'Understand granted analytics, read-only access, recalculation, and missing results.'
product: 'kingshot-events'
audience: 'Analytics viewers and managers'
experienceLevel: 'Intermediate'
featureArea: 'Analytics access'
lastReviewed: '2026-08-01'
---

# Analytics Sharing, Scope, and Troubleshooting

Analytics visibility combines account assignments, the active kingdom or alliance, optional kingdom sharing, and subscription features. These mechanisms can grant a view without granting management rights.

## Granted kingdom analytics

An authorized kingdom manager can make aggregate kingdom analytics available to eligible viewers through a sharing grant. The recipient may see **Granted Kingdom**, alliance highlights, and permitted alliance drill-downs. The grant is analytics-only: it does not change alliance membership, allow edits, or expose unrelated manager pages. The kingdom must keep sharing enabled and the grant must remain active.

## Common problems

### The Kingdom tab is missing

The account has no kingdom analytics assignment or active grant in the current context. Switch to the expected kingdom, then ask an authorized kingdom manager to confirm the grant. Alliance-only viewers should use the Alliance tab.

### A premium tab is locked

**Player (Premium)** requires Player Cross-Event Analytics. **Custom (Premium)** requires Custom Analytics. Confirm the effective plan and feature availability for the current scope. A plan assigned elsewhere does not automatically unlock this scope.

### An alliance is missing

Check the active kingdom, alliance assignment, and any grant boundary. The alliance may also have no eligible visible records. Do not create a duplicate alliance to solve an access problem.

### Analytics is empty or lower than expected

Reset date and event filters. Confirm that the event instance is saved, the event is included in analytics, reviewed rows were accepted, and the player is not deleted. Unknown or missing participation is not automatically counted as present. Recent corrections may require the page to be reloaded after recalculation.

### A same-date result changed

Open event history or the import record. A reviewed apply or later correction may have replaced or updated the eligible record for that player, event, and date. Analytics shows the current saved result, while record history is the place to review what changed.

### A player cannot be selected

Search with at least two characters and try an old nickname. Confirm that the player belongs to a visible scope and is not deleted. The Player tab cannot reveal a player outside the viewer's access.

## When to contact a manager

Contact an alliance or kingdom manager when the source record is missing, the wrong scope is assigned, a sharing grant should exist, or a reviewed import was applied to the wrong context. Provide the visible event, date, player, alliance, and filter choices. Do not send private account credentials or processor keys.
