---
title: 'Bear Trap Calculation and Result Anatomy'
description: 'Build or replay a rally, reuse profile facts safely, compare formations, and distinguish modeled output from observed results.'
product: 'kingshot-events'
audience: 'Rally leaders and scenario reviewers'
experienceLevel: 'Intermediate'
featureArea: 'Simulations and Optimizations'
lastReviewed: '2026-09-14'
verifiedAgainstSourceCommit: 'bea100eeccd39f9d71fc12820b2791c48adfcb8f'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Bear Trap Calculation and Result Anatomy

The Bear Trap Simulator compares a configured rally with controlled alternatives. It models leader and joiner contributions, eligible hero and widget effects, formations, and uncertainty. It does not guarantee a live score.

## Choose the workflow

Use **Build setup** for a what-if scenario or **Replay rally** for a real result. Select the Leader or Joiner perspective, then enter the relevant capacities, troop stacks, heroes, skills, widgets, account stats, and temporary effects.

Replay mode requires at least one observed score. Keep observed results separate from values you are trying to estimate.

The editor checks important constraints before running:

- at least one leader or joiner troop stack;
- leader march and effective rally capacities;
- accepted troops within rally capacity;
- average joiner formation totaling exactly 100%;
- active joiner skills within the configured skill slots;
- valid hero, troop-tier, and Truegold inputs.

If a leader formation exceeds march capacity, the editor can fit it to the available capacity and tells you what was adjusted. Generated average joiner troops are capped to the remaining rally capacity.

## Profile prefill and scenario ownership

The active account profile can supply two kinds of starting facts:

- Bonus Overview Attack, Defense, Lethality, and Health for each troop type;
- the selected heroes' Hero Gear Enhancement and Mastery levels.

A brand-new empty scenario can be seeded from those values. A previously saved Bear draft wins on initial load so its deliberate what-if choices are not silently overwritten.

When you switch or update the active profile, Bear refreshes the mapped profile facts and clears a result calculated from the previous profile. Run the simulation again.

Bear scenario edits never write back to the account profile. Change actual account facts in Profiles or the owning optimizer. Use Bear fields only for the rally being modeled.

## Read leader, joiner, and total results

**Leader contribution** explains the leader's modeled damage and applicable effects. **Joiner contribution** explains the supported joiner environment. The total combines them into the displayed rally estimate and event-score view.

Only eligible active captain-skill slots affect the model. The engine resolves skill effects by troop type: Infantry effects apply to Infantry, while Cavalry and Archer effects apply to their matching troop stacks.

If an observed result was entered, **prediction error** shows the difference between the observation and the model. One close rally is useful evidence, not proof that every future rally will match.

## Compare formations on the same basis

The Formation Damage Map compares the current formation with alternatives under the same scenario assumptions. Open the Leader, average Joiner, or total Rally scope deliberately, because an Apply action targets only the named scope.

The optimizer uses **multi-scale top-region refinement**. It starts with a broad search, refines the strongest regions by geometrically reducing the step size, and continues to single-troop resolution. Locks, troop quantities, and capacity still bound what can be tested.

| Result | Meaning |
| --- | --- |
| Better candidate found | A tested alternative improved the modeled result |
| Current best in completed search | No tested alternative in that completed search was better |
| No better candidate in limited search | The bounded search did not establish an improvement |
| Insufficient data or search failed | Correct the setup before drawing a conclusion |

The ternary damage heatmap maps sampled Infantry, Cavalry, and Archer combinations. When fixed stacks restrict the search, a callout identifies the affected scope and can unlock the relevant stacks before recalculating. Unlocking changes the scenario and invalidates the earlier comparison.

## Bear Trap Rally Damage profile

The **Bear Trap Rally Damage** build profile favors offense while keeping a defensive reserve:

- Attack and Lethality use a 1.0 baseline for Infantry and Cavalry;
- Archer offense uses 1.1 to represent the supported Ranged Strike assumption;
- Health and Defense keep a 35% reserve so useful all-mode gear is not treated as disposable.

Older saved Bear weights with the former standard reserves are migrated to the 35% reserve. Custom weight matrices remain custom.

The suggested 5 / 25 / 70 formation is a starting assumption for the profile, not a universal answer. Compare nearby formations with your actual heroes, capacities, and account stats.

## Saving and limitations

The Bear scenario is personal Lab planning data. It is not a kingdom event record. A saved local draft and the active account profile have different ownership, and a contribution to the shared Bear experience flow is a separate explicit action.

Important limits:

- hidden or unsupported game effects remain outside the model;
- a wrong stat source can double-count effects;
- a constrained search cannot prove the current formation is perfect;
- profile prefill reduces typing but does not prove a hero is owned or available for this rally;
- changing any input makes the displayed result stale until you rerun.

See [Profiles and Shared Inputs](/kingshot-events/lab/profiles-and-autosave) for saving boundaries, [Rally Simulator](/kingshot-events/lab/rally-simulator) for effect stacking, and [Hero Gear Optimizer](/kingshot-events/lab/hero-gear) for account progression.
