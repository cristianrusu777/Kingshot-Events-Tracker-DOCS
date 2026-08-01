---
title: 'Participation, Scores, Stages, and Cumulative Events'
description: 'Choose the correct result meaning for each current event pattern.'
product: 'kingshot-events'
audience: 'Contributors and managers'
experienceLevel: 'Intermediate'
featureArea: 'Event results'
lastReviewed: '2026-08-01'
---

# Participation, Scores, Stages, and Cumulative Events

The value entered for a player must match the template's event mode. A number copied from the right screenshot into the wrong mode can still save and later produce misleading analytics.

## Result meanings

- **Single-session, single-score** events store one score for the occurrence, often with participation.
- **Multi-day cumulative total** events expect the current overall total. A later same-event entry can replace the earlier total instead of being added to it.
- **Multi-stage, single-score** events keep stage context. Select the correct stage before importing or entering scores.
- **Participation-oriented** events can track present, missing, unknown, or another configured participation value even when a score is absent.
- Some control events support participation and a manually recorded outcome but do not use ordinary score import.

Do not convert **unknown** to **missing** merely to complete a table. Unknown means the source does not prove attendance either way. This distinction affects participation rates and review.

## Current default patterns

| Event | Current default pattern | Entry caution |
| --- | --- | --- |
| **Bear Trap** | Single session, single score | Use the damage score from the correct session. |
| **Viking Vengeance** | Single session, single score | Confirm the leaderboard belongs to the selected occurrence. |
| **Alliance Mobilization** | Multi-day, cumulative total | Enter the latest total, not a daily delta, unless the current template says otherwise. |
| **Alliance Brawl** | Multi-stage, six default stages | Select the screenshot's stage; do not mix a total with one stage. |
| **Kingdom of Power** | Multi-stage, five default stages | Keep event tracking separate from the KvK Prep snapshot workflow. |
| **Strongest Governor** | Multi-stage, six default stages | Match the current stage and date. |
| **Sanctuary Battle** | Single session, participation-focused control result | Do not assume an ordinary score is required. |

Managers can edit template settings, so the instance UI is the final authority. The table describes current defaults, not an unchangeable game rule.

## Save and recalculation

Saving or accepting a result updates the instance and player history. Eligible changes trigger analytics recalculation. Reward eligibility can depend on participation, score, status, attributes, or configured rules. Review those results only after the save completes.

<VisualReference title="Event result-mode checkpoints">
Match the template or instance banner to the entry controls.

<template #items>

- Duration and score-entry description on the event or instance.
- Stage selector for multi-stage events and date or session context for every entry.
- Participation state and score fields supported by that event.
- Save, accepted-row, lock, and recalculation feedback.

</template>
</VisualReference>

See [Event-Specific Behavior](/kingshot-events/events/event-specific-behavior) before changing a default template.
