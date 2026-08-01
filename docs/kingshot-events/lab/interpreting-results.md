---
title: 'Interpreting Lab Results and Limitations'
description: 'Validate input summaries, compare controlled scenarios, and use modeled output responsibly.'
product: 'kingshot-events'
audience: 'All Lab users'
experienceLevel: 'Intermediate'
featureArea: 'Lab results'
lastReviewed: '2026-08-01'
---

# Interpreting Lab Results and Limitations

Read the input summary before the recommendation. A result is useful only when the active profile, current levels, inventory, formation, roles, and selected mode match the intended scenario.

## What results can show

Depending on the module, output can include an upgrade order, target checkpoints, resource consumption, remaining inventory, bottlenecks, expected damage, uncertainty range, comparison, sensitivity, or repeated-run distribution. These values compare supported choices under one model.

## What results cannot guarantee

The Lab cannot predict player execution, connection conditions, undocumented game changes, every interaction, future prices, or live opponent behavior. Beta modules and data revisions can change an output even when saved inputs did not change. A narrow uncertainty range describes the model, not certainty about the game.

## When a result looks wrong

1. Confirm the correct profile and save state.
2. Recheck every starting level and owned resource.
3. Verify Infantry, Cavalry, and Archer formation totals and capacity.
4. Confirm captain versus joiner roles, hero skills, widgets, and combat context.
5. Check whether current equipment is already included in the entered stats.
6. Compare one controlled change at a time.
7. Rerun only after the input summary matches the intended scenario.

If profile edits did not appear, save them, reopen the module, and select the profile again. A previously saved run retains its own input snapshot and does not silently become a result for the newest profile state.

<VisualReference title="Lab result review landmarks">
Compare input summary, result, and assumptions as one record.

<template #items>

- Tool name, module availability or beta label, active profile, and saved-input timestamp.
- Complete input summary with mode, objective, formation, roles, equipment, and inventory.
- Main recommendation or modeled result with comparison, range, or resource detail.
- Assumptions, limitations, data version, save or share action, and rerun controls.

</template>
</VisualReference>

When reporting a problem, provide the tool, public input summary, module version information shown, and unexpected output. Remove account credentials and private community data.
