---
title: 'Hero Gear, Governor Gear, and Charms'
description: 'Enter complete equipment and inventory state, compare upgrade plans, and apply a reviewed plan to a Lab profile.'
product: 'kingshot-events'
audience: 'Lab users'
experienceLevel: 'Intermediate'
featureArea: 'Progression optimizers'
lastReviewed: '2026-08-01'
---

# Hero Gear, Governor Gear, and Charms

These optimizers compare supported upgrades from the exact profile and inventory you provide. They do not inspect the game account, buy packs, or apply upgrades in game.

## Hero Gear Optimizer

Confirm all twelve gear pieces across Infantry, Cavalry, and Archer heroes, including the supported enhancement, mastery, ascension, imbuement, or reforge state shown by the editor. Enter only owned enhancement XP, Forge Hammers, Mythic Shards, Mithril, and other listed resources. Choose the combat context and objective, then run the plan.

Results show target pieces, before and after states, ordered actions, resource use, remaining inventory, and the reason a supported checkpoint was preferred. When combat stats already include current Hero Gear, select that state correctly so the tool does not count it twice.

## Governor Gear Optimizer

Enter all six troop-related gear pieces and their current tier or star state, plus the listed materials. Review set breakpoints as well as individual piece gains. A recommendation can favor completing a set checkpoint instead of raising the visually weakest piece.

## Charm Optimizer

Enter all charm slots for Infantry, Cavalry, and Archer and the available Charm Guides, Charm Designs, or other current inputs. Check every slot because a missing level can redirect the entire order.

## Save or apply a plan

Review resource consumption and prerequisites first. If **Apply to profile** is offered, confirm the selected profile and apply only the accepted target state. This updates the reusable Lab input. It does not confirm that the upgrades were made in game; update or revert the profile if the real purchase differs.

<VisualReference title="Equipment optimizer landmarks">
Move from profile and inventory to objectives, plan, and optional profile update.

<template #items>

- Active Lab profile and complete piece or charm grid for Infantry, Cavalry, and Archer.
- Current levels, tiers, stars, mastery or reforge state, and owned-resource inputs.
- Objective or context controls and missing-input validation.
- Ordered target plan, before and after states, resource usage, remaining inventory, and **Apply to profile** confirmation.

</template>
</VisualReference>

Optimizer order is a modeled recommendation and can change with game data or objectives. See [Interpreting Results](/kingshot-events/lab/interpreting-results).

## Choose the correct mechanism

Hero Gear uses enhancement, mastery, milestone bundles, optional reforge, and its own material set. Governor Gear uses six item states, three materials, and set-effect deltas. Charms use 18 slots with Guides and Designs. All three read personal profile inputs, locks, troop and stat weights, and strategy, but their candidate generation and costs are not interchangeable.

**Worked example:** A user says "chief gear" but opens Hero Gear. The visible slots and materials do not match the intended Governor Gear system. No run should be interpreted until the correct module is selected. In Governor Gear, a set-completing delta can change candidate order; in Charms, one exhausted Design can stop many slots; in Hero Gear, Mithril or a milestone bundle can be decisive.

Each optimizer produces ordered steps, before and after state, spending, and leftovers. None changes the game or guarantees global optimality. If output is wrong, confirm module, active profile, visible saved state, slot levels, locks, weights, inventory, objective, and dataset version, then rerun one copied scenario. Continue to [Hero Gear](/kingshot-events/lab/hero-gear), [Governor Gear](/kingshot-events/lab/governor-gear), or [Charms](/kingshot-events/lab/charms).
