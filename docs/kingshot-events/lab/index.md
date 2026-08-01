---
title: 'Lab Overview and Profiles'
description: 'Choose a Lab module, manage reusable inputs, and understand device or signed-in persistence.'
product: 'kingshot-events'
audience: 'All Lab users'
experienceLevel: 'Intermediate'
featureArea: 'Lab'
lastReviewed: '2026-08-01'
---

<CategoryHero category="lab" icon="flask" eyebrow="Explore before committing resources" title="Lab Overview and Profiles">
Save account assumptions, compare upgrade paths, and interpret every result as a scenario rather than a guaranteed outcome.
</CategoryHero>

<ProductFinder default-category="Simulations and Optimizations" />

# Lab Overview and Profiles

The **Lab** contains profiles, progression planners, optimizers, combat simulators, and supporting game data. Module cards show whether a tool is public, requires sign-in, is beta, or is currently unavailable.

## Profiles and saved inputs

A profile stores reusable supported inputs such as account stats, troop bonuses, formations, Hero Gear, Governor Gear, Charms, heroes, widgets, and owned resources. It is not a live connection to the game account. Update it after every relevant in-game change.

Visitors can use a device-saved profile. Clearing site data, changing browsers, or using private browsing can remove or isolate it. Signed-in users can create and select saved profiles where cloud persistence is available. Always check the active profile name before editing or running a module.

Some tools can apply an accepted plan back to the selected Lab profile. Applying changes the stored planning state, not the game account. Review the target levels and consumed resources before confirming.

## Choose a module

- **Hero Gear Optimizer**, **Governor Gear Optimizer**, and **Charm Optimizer** plan progression with current slots and inventory.
- **Bear Trap Simulator** models a rally against the Bear with captain, joiners, formation, and stats.
- **Rally Simulator** compares supported captain, joiner, formation, and stacking choices.
- **Battle Simulator** runs a configured attacker and defender scenario.

<VisualReference title="Lab and profile landmarks">
Select the profile before the module and review persistence feedback after saving.

<template #items>

- Module cards with public, sign-in, beta, premium, or unavailable state.
- Active profile selector, create, rename, duplicate, save, or delete actions where available.
- Profile sections for account stats, troops, equipment, heroes, widgets, formations, and inventory.
- Freshness or missing-input feedback and links to each compatible optimizer or simulator.

</template>
</VisualReference>

All Lab outputs are modeled guidance. Continue with [Interpreting Results and Limitations](/kingshot-events/lab/interpreting-results).

## How profiles and modules relate

The active profile supplies shared account assumptions. Module-specific fields then describe a progression or combat scenario. Debounced autosave shows pending, saved, failed, or conflict state; switching profiles must not let an older pending response overwrite the newly active profile. Running a module uses the resolved saved and typed inputs at that moment. The output belongs to the scenario and never changes a live game account.

```mermaid
flowchart TD
  P["Choose active profile"] --> S["Load shared stats, progression, formations, and inventory"]
  S --> M{"Choose module"}
  M -- "Progression optimizer" --> O["Add current levels, targets, weights, locks, and resources"]
  M -- "Bear or battle model" --> B["Add troops, heroes, skills, capacities, buffs, and opponents"]
  O --> V{"Inputs valid and saved?"}
  B --> V
  V -- "No" --> C["Correct fields or resolve save conflict"]
  V -- "Yes" --> R["Run versioned model"]
  R --> I["Interpret assumptions, steps, before/after result, leftovers, and limits"]
```

*Lab feature map. A profile supplies shared inputs; each module adds controls and produces a versioned scenario result only after validation.*

**Accessible summary:** Users select a profile, add progression or combat inputs, resolve invalid or unsaved state, run the model, and interpret its output and limitations.

## Decision mechanisms

Hero Gear, Governor Gear, and Charm planning generate valid next candidates, remove locked, maximum, unaffordable, or out-of-scope choices, compare weighted gain with normalized cost, apply the best positive candidate, update resources, and repeat. The behavior is greedy and iterative, with system-specific staging such as Hero Gear milestone bundles and reforge or Governor Gear set deltas. It is not an exhaustive proof of global optimality.

Bear Trap resolves the rally leader separately from joiners, validates capacity and formation, applies supported troop, Truegold, hero, captain, skill, stat, and temporary-buff effects, and distinguishes deterministic, probabilistic, estimated, and unresolved mechanics. Prediction error requires an observed result and helps diagnose assumptions; it does not validate every mechanic.

## Worked example and common mistakes

**Starting situation:** A Charm plan leaves Guides unused after Designs reach zero. **Rules:** Every candidate must cover all required materials. **Branch:** Design-requiring candidates are removed; a Guide-only positive candidate may continue, otherwise the plan stops. **Output:** Ordered steps and leftovers explain the stop. **Next action:** Correct the inventory only if it was entered incorrectly, then rerun from the same profile.

Avoid running from the wrong profile, leaving an autosave pending, mixing game-displayed and estimated values, treating a modeled target as an in-game save, or claiming global optimality. If output surprises you, compare one controlled input change in a copied scenario.

## Recommended reading order

Begin with [Profiles, Autosave, and Optimization Order](/kingshot-events/lab/profiles-and-autosave), then choose [Hero Gear](/kingshot-events/lab/hero-gear), [Governor Gear](/kingshot-events/lab/governor-gear), [Charms](/kingshot-events/lab/charms), or [Bear Trap](/kingshot-events/lab/bear-trap). Finish with [Interpreting Results](/kingshot-events/lab/interpreting-results) and [Simulator Problems](/kingshot-events/troubleshooting/simulator-problems).
