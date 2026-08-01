---
title: 'Bear Trap, Rally, and Battle Simulators'
description: 'Configure combat profiles, formations, heroes, roles, and uncertainty, then compare modeled outcomes.'
product: 'kingshot-events'
audience: 'Lab users'
experienceLevel: 'Intermediate'
featureArea: 'Combat simulators'
lastReviewed: '2026-08-01'
---

# Bear Trap, Rally, and Battle Simulators

Combat simulators compare configured scenarios. Results are estimates based on supported inputs and assumptions, not official formulas or guaranteed live damage.

## Bear Trap Simulator

Select the active profile and fill each guided step: combat stats, troop capacity and Infantry/Cavalry/Archer formation, rally captain, joiners, hero skills or widgets, and any supported Valora or Bear-specific choice. The status rail identifies missing inputs. **Simulate** remains unavailable until required steps are complete.

Results can show expected damage, a range or uncertainty, formation and captain review cards, and comparisons between supported alternatives. Change one input at a time when learning which choice affected the model.

## Rally Simulator

Choose the rally context, captain and joiner roles, heroes and supported skills, widgets, formation, and relevant stats. Distinguish rally-leader effects from joiner effects. Compare offense and defense only when both scenarios use equivalent assumptions.

## Battle Simulator

Configure both attacker and defender, including troop types, counts or formation, bonuses, heroes, and the supported battle context. Choose the run controls and repeat count shown by the module. Distributions from repeated modeled runs describe variation inside the model, not connection quality or player execution.

## Saved runs and sharing

Where a module supports saving, give the run a meaningful label and keep the input summary with the output. A shared result can expose the modeled inputs; inspect it before sharing community-sensitive profile information.

<VisualReference title="Combat simulator landmarks">
Complete the guided input rail before interpreting the output.

<template #items>

- Active profile, scenario or mode selector, and required-step status rail.
- Infantry, Cavalry, and Archer formation, capacity, captain, joiner, hero, widget, and stat controls.
- Review cards and disabled or active **Simulate** action.
- Expected result, uncertainty or distribution, comparison, assumptions, and saved-run controls.

</template>
</VisualReference>

If a result looks implausible, use [Interpreting Results and Limitations](/kingshot-events/lab/interpreting-results).

## Workflow, scope, example, and recovery

Bear Trap models a rally against the Bear; Rally and Battle tools model other supported attacker, defender, captain, joiner, formation, or stacking questions. Each begins with the active personal profile, then applies module-specific scenario input. Roles and kingdom or alliance scope do not make a scenario official or editable by another manager.

The user validates leader and joiner capacities, exact troop counts, actual tier and Truegold, heroes or captains, active skill slots, account bonuses, temporary buffs, and opponent or observed result where supported. The engine resolves deterministic catalog effects, labels community-observed or estimated mechanics, produces contribution and damage output, and reports limitations or prediction error.

**Worked example:** One Bear joiner lacks captain data. The run can use declared troops but must not assume an optimal captain. The output remains an estimate with an incomplete-input limitation. Add the confirmed captain, rerun from a copy, and compare only that controlled change. A large remaining error prompts checks of formation, tier, Truegold, capacity, skills, buffs, version, and unresolved mechanics. No single observed rally proves the model.
