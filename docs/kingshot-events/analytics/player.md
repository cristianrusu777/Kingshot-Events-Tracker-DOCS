---
title: 'Player Cross-Event Analytics'
description: 'Select a player and interpret ranks, attendance, scores, and event performance.'
product: 'kingshot-events'
audience: 'Players and analytics viewers'
experienceLevel: 'Intermediate'
featureArea: 'Analytics'
lastReviewed: '2026-08-01'
---

# Player Cross-Event Analytics

The **Player** tab collects one warrior's eligible event history across multiple event instances. It is a premium feature and appears as **Player (Premium)** when locked.

## Find a player

Search by current name or old nickname. Search begins after at least two characters and returns visible matching players with their alliance tag. You can also open a player name from Kingdom or Alliance analytics. Selecting a player clears the search list and loads the dossier.

## Read the dossier

The identity header shows the player, alliance and kingdom context, primary status, power, Town Center, and alliance and kingdom score ranks. **Full profile** opens the shared player record.

When sufficient data exists, KPI tiles show **Total score**, **Average score**, **Internal points**, **Attendance**, **Events tracked** with missed count, and alliance **Points rank**. **Damage History**, **Event Discipline**, and **Attendance Streak** visualize the saved history. **Cross-Event Consistency** summarizes repeat participation and top events.

**Performance by Event** lists event, type, attendance, total, average, best, latest, and points. **No data** means no eligible saved score exists for that particular value. **Unranked** means a comparable rank could not be produced in the visible population.

## Scope and privacy

Searching does not bypass scope. Results are limited to players the viewer may access. Personal account settings and the shared player profile remain separate, and this tab does not allow profile editing. Users who need their own basic summary but lack cross-event access should use the personal analytics view available from their linked account.

## After a correction

Accepted import rows and manual result edits can trigger recalculation. Reload Analytics after the correction completes. If only one event changed, confirm that the event is included in player analytics and that its date falls in the expected period.

See [Player Directory and Profiles](/kingshot-events/players/directory-and-profiles) for record details and [analytics troubleshooting](/kingshot-events/analytics/sharing-and-troubleshooting) for missing players.

## Complete view behavior and worked example

Player Analytics follows one resolved local player across selected eligible events and inclusive date boundaries. It groups by player and event after scope, stage, result-type, and time filters. Nickname changes do not split the view when history stays on one identity. Duplicate local players do split evidence and require identity recovery, not a filter workaround.

Active, Inactive, and Unknown contribute according to event and rule behavior; score totals, averages, best, and latest values use rows containing a score. Drill-down names contributing occurrences. Recalculation follows accepted correction, import apply, rollback, deletion, restore, or rule change. Personal, manager, shared, and granted visibility can differ, but read-only access never adds source-edit controls. Advanced cross-event behavior can require premium access.

**Worked example:** Nia changes nickname between events. Both batches point to one player, so the view shows one series and nickname history. A later screenshot matches the former nickname but waits for review; it contributes only after acceptance and apply. If output is missing, verify external ID, history, scope, event, dates, apply state, and deletion. An absent row cannot guarantee Inactive status.
