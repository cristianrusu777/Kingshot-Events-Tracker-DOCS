---
title: 'Event-Specific Behavior and Template Changes'
description: 'Use current default event patterns and change templates without corrupting interpretation.'
product: 'kingshot-events'
audience: 'Players and managers'
experienceLevel: 'Intermediate'
featureArea: 'Events'
lastReviewed: '2026-08-01'
---

# Event-Specific Behavior and Template Changes

The seven default templates give new scopes useful starting behavior, but authorized managers can adjust them. The active template and instance labels are the source of truth for entry.

## Default event guidance

- **Bear Trap**: record the supported session damage and participation for the matching occurrence.
- **Viking Vengeance**: use the complete leaderboard for the selected single session.
- **Alliance Mobilization**: treat imported scores as cumulative totals. Later totals can supersede earlier snapshots for the same effective record.
- **Alliance Brawl**: choose one of the configured stages before entry. A stage screenshot and an event total are not interchangeable.
- **Kingdom of Power**: use its configured stages for event results. KvK Prep snapshots are a separate workflow with their own review and apply action.
- **Strongest Governor**: keep scores attached to the correct configured stage and date.
- **Sanctuary Battle**: focus on participation and the supported manual control outcome; the default does not use an ordinary score.

## Before changing a template

Review existing instances and imports. Changing duration, stages, score-entry mode, analytics visibility, participation support, or reward inclusion can change how future data is entered and how current data is summarized. Explain the new convention to contributors before the next import.

Template changes do not safely convert old stage results into cumulative totals or repair prior dates automatically. If historical interpretation must change, review the affected instances explicitly.

## Custom events and proposals

Use a custom event when no existing template represents the real workflow. Give it a clear name and category, choose the duration and score mode, then configure stages, analytics, and rewards deliberately. Where event proposals are enabled, a contributor submits the proposal and an authorized manager reviews it before the event becomes available.

<VisualReference title="Event template settings landmarks">
Read the summary before changing settings used by future instances.

<template #items>

- Template name, category, icon, description, and default ordering.
- Duration, score-entry mode, stage count or labels, and participation behavior.
- Analytics and reward inclusion controls.
- Save, proposal, review, or protected-default feedback.

</template>
</VisualReference>

See [Participation, Scores, Stages, and Cumulative Events](/kingshot-events/events/participation-and-scores) for the result meanings.

## Decision order, states, and example

The purpose of event-specific behavior is to preserve template meaning when an instance and rows are created. The platform resolves duration and score-entry mode, stage or total context, required position or custom fields, activity and reward inclusion, then applies date and duplicate rules. A later template change does not silently rewrite completed evidence.

**Worked example:** A multi-stage cumulative event stores daily stage rows and a total snapshot. A second different total for the same player and date enters refresh review rather than adding both totals. For a non-cumulative event, the same identity becomes conflict. If locked, neither branch writes until authorized correction reopens it. Output stays traceable to instance and batch.

## Limitations and troubleshooting

Default protection, custom ownership, proposal review, and lock state restrict controls by role and scope. Do not duplicate a template or shift a date to bypass them. Record template, instance, event mode, stage or total, result type, scope, date, lock, source batch, and visible message, then compare [record batches and corrections](/kingshot-events/events/record-batches-and-corrections).
