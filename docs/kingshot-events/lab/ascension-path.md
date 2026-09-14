---
title: 'Ascension Path: Plan Your Next Upgrades'
description: 'Validate your current build, compare Hero Gear, Governor Gear, and Charms, and inspect the projected account state.'
product: 'kingshot-events'
audience: 'Players planning account progression'
experienceLevel: 'Intermediate'
featureArea: 'Simulations and Optimizations'
lastReviewed: '2026-09-14'
verifiedAgainstSourceCommit: 'bea100eeccd39f9d71fc12820b2791c48adfcb8f'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Ascension Path: Plan Your Next Upgrades

**Ascension Path** compares Hero Gear, Governor Gear, and Charms in one progression workspace. It recommends an ordered path under the nine separate material balances in your selected account profile or temporary scenario.

The tool never spends resources or changes your game account. It uses Ascension Engine version 1.3.0 and a bounded beam search, so its result is not a guaranteed global optimum.

## Review Current Build first

Open Ascension Path from the Lab and inspect **Current Build** before running. The source cards show whether each input came from a saved profile, an owning optimizer, a confirmed screenshot import, or a temporary override.

Confirm:

- all twelve Hero Gear pieces and their Mastery state;
- all six Governor Gear pieces;
- all eighteen Charm slots;
- Attack, Defense, Lethality, and Health for Infantry, Cavalry, and Archer;
- all nine progression-material balances;
- the selected locks and combat focus.

Choose the meaning of your combat stats:

- **Observed total:** the entered totals already include current equipment, so the projection adds only the modeled change;
- **Base plus progression:** the entered values are a baseline before the modeled Hero Gear, Governor Gear, and Charm contributions.

## Resolve readiness before running

The calculation stays off while you edit. The readiness panel validates equipment, locks, priorities, resource balances, and all twelve combat-stat values. Values must be finite and nonnegative.

An explicit resource value of zero is valid. It means none of that material is currently owned. It does not make the profile incomplete.

For **Observed total**, the tool warns when an entered combat total is below the modeled contribution from current equipment. It preserves the entered value so you can verify the source instead of silently replacing it.

Correct blockers in the named Current Build section. Warnings can still allow a run, but review them before acting on the result.

## Choose a combat focus

| Combat focus | What it prioritizes |
| --- | --- |
| **Overall Strength** | Balances supported troops and combat stats |
| **KvK / PvP** | Uses the active profile's competitive troop and stat priorities |
| **Rally Leader** | Emphasizes offensive value while retaining defensive contribution |

The focus changes candidate value. It does not change upgrade costs or claim that one play style is universally best.

## How the path is built

The engine searches legal checkpoints across all three progression systems. A checkpoint includes every required intermediate step, material cost, Mastery gate, set transition, or Red milestone needed to reach it.

Each selected step contains:

- the system, piece, and exact transition;
- resources consumed and projected balances;
- combat deltas across the affected troop and stats;
- a breakpoint indicator when a set or gear threshold is crossed;
- an impact label and **Why First** explanation;
- the strongest available alternative and why it ranked lower.

The **Alternative comparison** explains which competing checkpoint was available from the same state and why it lost under the selected focus and resource budgets.

The search keeps a limited candidate beam for browser performance. Its technical diagnostics disclose the strategy, states evaluated, checkpoint depth, and termination reason. Use the path as a reviewable plan, not proof that every possible future sequence was exhausted.

## Read UPGRADE NOW, SAVE, and COMPLETE

- **UPGRADE NOW:** at least one recommended path step is affordable with the entered inventory.
- **SAVE:** a modeled next checkpoint exists, but the complete material requirement is not currently affordable.
- **COMPLETE:** no supported progression target remains in the selected scope.

**Next Target** shows required, sufficient, and missing materials. **Following Target** is conditional: it assumes you acquire exactly the first target's missing materials, complete that target, then evaluate what comes next. It does not assume other future income.

## Inspect weak points, forecast, and Projected Build

**Weak point analysis** assigns an Opportunity score and a status such as High Priority, Medium, or Healthy to each supported system.

**Weak Points** ranks the three systems by their strongest current marginal opportunity under your focus and budgets. A low rank can mean that no affordable step remains, not that the system is permanently unimportant.

The forecast workbench includes:

- **Combat Stats Trajectory** across the displayed path;
- **Resource Depletion Curves** for the nine progression materials;
- a tabular step-by-step projection.

The **Projected Build** section shows all twelve before and after combat values and the physical Hero Gear, Governor Gear, and Charm changes that create them. Combat changes are percentage points. Review this section with the ordered steps before copying anything into the game.

Changing an input makes the old result stale. Choose Run again before interpreting the charts or projected build.

## Event timing

When eligible event sessions are available, Ascension Path can compare the path with their timing:

- **UPGRADE NOW** when immediate strength is preferred or an important battle comes first;
- **WAIT** when a known upcoming event preserves the modeled path while adding a configured efficiency benefit;
- **NO TIMING ADVANTAGE** when no relevant active or upcoming event changes the decision.

This timing card depends on recorded event information. It does not discover unconfigured Kingshot schedules.

## Resource Routing is temporary

Use **Resource Routing** to test a hypothetical virtual shop or other resource source:

1. name the source and currency;
2. enter the currency balance;
3. add canonical or custom bundles with quantities, costs, and purchase limits;
4. choose **Analyze route**;
5. review the suggested combination and its projected path;
6. optionally apply the acquired resources to the temporary scenario.

The routing tool does not buy anything. Applying a route changes only the temporary scenario, leaves the confirmed profile untouched, and marks the previous calculation stale.

## Saving and limitations

Confirmed account facts follow [Lab profile saving rules](/kingshot-events/lab/profiles-and-autosave). Temporary combat stats, resources, and routing results remain scenario overrides until you deliberately update the owning profile or optimizer.

Ascension Path is limited to the current supported catalogs, entered balances, selected locks, and modeled combat objective. It cannot know future game releases, an unentered purchase, or personal priorities that are not represented in the profile. Use **Copy summary** for discussion, then verify every cost and level in Kingshot before spending.
