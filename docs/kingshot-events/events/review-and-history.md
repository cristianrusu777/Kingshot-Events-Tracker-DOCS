---
title: 'Reviewing Results and Event History'
description: 'Trace saved results to their event, player, import, and record history, then correct them safely.'
product: 'kingshot-events'
audience: 'Players and managers'
experienceLevel: 'Intermediate'
featureArea: 'Event review'
lastReviewed: '2026-08-01'
---

# Reviewing Results and Event History

Use the dated event instance as the main record of what happened. Player history answers which events affected one player, while import and record-batch history explain how a set of rows entered the platform.

## Review an instance

Confirm the template, date or session, scope, stage, status, and lock. Compare totals with the result table and participation counts. Open a player for their cross-event context or open the source record batch when a row came from an import.

## Understand source and current value

An import preserves the screenshot, processor context, proposed review rows, and saved-result references. A later authorized correction can change the current result without changing what the original screenshot proposed. Analytics reads the current eligible result. History is therefore essential when a same-date value changed.

## Correct safely

1. Identify whether the error is the player match, event, date, stage, participation, or score.
2. Edit the smallest affected current record when allowed.
3. If the entire import used the wrong context, review its delete-with-results impact instead of editing many rows blindly.
4. Save and confirm the instance and player history.
5. Reload Analytics and rewards after recalculation.

## Locks, deletion, and archives

A locked session prevents ordinary editing so a reviewed set remains stable. Deleted records are hidden from normal views but may be available through authorized restore workflows. Archived events remain historical and should not be treated as an open entry session. Use the current interface action; do not create a duplicate instance to bypass a lock.

<VisualReference title="Event review and history landmarks">
Follow a result from instance to source and back to the player.

<template #items>

- Instance identity, date, stage, scope, status, and lock indicator.
- Result rows with participation, score, source, and available edit action.
- Player event history, record batch, or import link.
- Save, delete-impact, restore, and recalculation feedback where authorized.

</template>
</VisualReference>

Related: [Import data rules](/kingshot-events/imports/data-rules), [War Room Analytics](/kingshot-events/analytics/activity-and-results), and [Reward Eligibility](/kingshot-events/analytics/rewards-and-statuses).
