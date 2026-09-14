---
title: 'Lab Profiles, Shared Inputs, and Saving'
description: 'Create and switch account profiles, understand which facts every Lab tool reuses, and keep tool-specific scenarios separate.'
product: 'Kingshot Events'
audience: 'Lab users'
experienceLevel: 'Intermediate'
featureArea: 'Simulations and Optimizations'
lastReviewed: '2026-09-14'
verifiedAgainstSourceCommit: 'bea100eeccd39f9d71fc12820b2791c48adfcb8f'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Lab Profiles, Shared Inputs, and Saving

An account profile is the shared description of one Kingshot account. Hero Gear, Governor Gear, Charms, combat-stat snapshots, resources, heroes, troops, and march capacities can be entered once and reused by compatible Lab tools.

Tool-specific questions stay outside the account profile. A temporary budget, optimization objective, formation experiment, opponent, battle side, or Warboard roster belongs to that tool's scenario and does not become an account fact.

## Create and manage profiles

Sign in, open **Profiles** from the Lab, then choose **Create profile**. Use separate profiles for separate game accounts or genuinely different owned builds.

The profile editor is divided into:

- **Account:** profile identity, kingdom, server, and linked-player context;
- **Capacities:** leader march, rally total, typical joiner capacity, troop tiers, Truegold levels, and troop quantities;
- **Heroes:** owned heroes, progression, skill levels, and supported widgets;
- **Stat snapshots:** named combat-stat readings with their source and included layers;
- **Equipment:** the Hero Gear, Mastery, Governor Gear, and Charm state maintained through the matching optimizers;
- **Resources:** shared material balances used by progression tools.

Use the profile selector on a Lab page to switch the active profile. You can create, rename, or delete profiles from the selector. At least one signed-in profile must remain. Deleting the active profile selects a remaining profile, while tool workspaces are not deleted as collateral.

The last active profile is restored when it still exists. A missing or inaccessible profile does not strand the selector: the next available owned profile is used.

## What compatible tools reuse

The active profile supplies reusable facts to Hero Gear, Governor Gear, Charms, Ascension Path, Bear Trap, Rally, and other compatible Lab surfaces.

| Shared account fact | Typical consumers |
| --- | --- |
| Hero Gear Enhancement and Mastery levels | Hero Gear, Ascension Path, Bear Trap |
| Governor Gear levels | Governor Gear, Ascension Path |
| Charm levels | Charms, Ascension Path |
| Shared material balances | Progression optimizers and Ascension Path |
| Default combat-stat snapshot and included layers | Account-aware optimizers and combat tools |
| March capacities, troop progression, and owned heroes | Bear Trap and Rally planning |

Switching profiles while a tool is open refreshes the shared inputs and clears results that were calculated for the previous profile. Rerun the tool before interpreting a result.

## What remains tool-specific

The following examples do not automatically change the saved account profile:

- optimization goal, strategy, locks, and what-if budget;
- a temporary Ascension resource-routing result;
- Bear Trap formation or rally experiment;
- Battle Simulator attacker and defender setup;
- Championship Warboard rosters, opponent intelligence, and lane plans.

Applying a supported optimizer result is a separate confirmation. Review the projected equipment and resource values before choosing the apply action. A calculation alone changes nothing.

## Stat snapshots and double-count protection

A stat snapshot stores all four displayed percentages for Infantry, Cavalry, and Archer, plus a source and the progression layers already included in those numbers. Select one snapshot as the default used by compatible tools.

Source meaning matters. For example, Bonus Overview values already include current Hero Gear. An account-aware Hero Gear plan subtracts the current gear contribution before adding the proposed gear, so the same bonus is not counted twice. If a source excludes gear, the tool can add the modeled contribution once.

Create a new snapshot when you need to preserve a different situation. Edit or delete an old snapshot when its source or numbers are no longer useful. Deleting the default snapshot selects another remaining snapshot or leaves no default.

## Saving and conflicts

Edits show **Unsaved changes** until you choose **Save profile**. The saved state appears only after the server confirms the write.

Every signed-in save includes the version that was loaded. If another tab saved a newer version first, the older write is rejected. Copy any unsaved values you need, reload the profile, and apply the intended edit to the latest version.

The profile editor uses an explicit save action. Other Lab workspaces can use autosave for their own scenario state, but autosave never turns a tool-specific experiment into a shared account fact.

Rapid profile switching is isolated: a late response for Profile B cannot overwrite Profile A after you switch back. Unsaved draft values from one profile are discarded when another profile is selected, preventing cross-profile data leakage.

## Visitors and older saved data

Visitors can run public Lab tools with device-local state, but the Profiles management page requires sign-in. Visitor data is limited to the current browser. It is not saved to the account cloud and is not available on another device.

Older per-tool visitor saves are merged into the shared local Lab state on first use when compatible values can be recovered. Older signed-in profile payloads are normalized with safe defaults for fields that did not exist yet. Existing equipment values are preserved.

Hero Gear also performs a one-time settings migration for older saves: the Red Gear strategy changes to the safer **Complete milestones only** default. A later explicit strategy choice is preserved.

## Bear Trap prefill boundary

A new Bear scenario can start from the active profile's Bonus Overview combat stats and the selected heroes' Hero Gear. A previously saved Bear draft takes priority on initial load. When the active profile later changes, Bear refreshes the mapped profile facts and invalidates the old result.

Bear what-if edits do not write back to the account profile. Save actual account changes in Profiles or the owning optimizer, then rerun Bear.

For the Hero Gear application boundary, see [Hero Gear Optimization Logic](/kingshot-events/lab/hero-gear). For cross-system temporary planning, see [Ascension Path](/kingshot-events/lab/ascension-path).
