---
title: 'Lab Overview and Profiles'
description: 'Choose a simulator or optimizer, manage shared account facts, and keep each result attached to its assumptions and limits.'
product: 'kingshot-events'
audience: 'All Lab users'
experienceLevel: 'Intermediate'
featureArea: 'Lab'
lastReviewed: '2026-09-14'
verifiedAgainstSourceCommit: 'bea100eeccd39f9d71fc12820b2791c48adfcb8f'
sourceVerificationOwner: 'Ralyvora documentation'
---

<CategoryHero category="lab" icon="flask" eyebrow="Explore before committing resources" title="Lab Overview and Profiles">
Save account assumptions, compare upgrade or battle scenarios, and treat every output as modeled guidance.
</CategoryHero>

<ProductFinder default-category="Simulations and Optimizations" />

# Lab Overview and Profiles

The Lab contains account profiles, progression planners, optimizers, combat simulators, the Championship Warboard, and supporting Game Data. The **Hub states and module availability** distinguish loading, unavailable, empty, ready, and error conditions. A tool can also be public, require sign-in, be beta, or be temporarily disabled.

## Why the Lab exists

The Lab turns a broad question into a reproducible scenario. It exposes the account facts, scenario fields, locks, material limits, catalog version, model assumptions, and uncertainty used to produce an answer.

Every calculation changes planning state only. It cannot spend game resources, equip gear, register an Alliance Championship lineup, publish a Castle schedule, or prove a live outcome.

## Shared profiles and scenario fields

Signed-in users can create account profiles that are available on their account. The **Profile library and persistence** lets an owner create, select, rename, duplicate, update, and remove profiles. The active profile can reuse:

- march capacities and troop counts, tiers, and Truegold progression;
- selected heroes, skill levels, and supported widgets;
- Hero Gear, Mastery, Governor Gear, and Charms;
- shared material balances;
- named combat-stat snapshots.

**Stat snapshots, sources, and layers** record all twelve combat percentages and what is already included. Source labels help a tool avoid adding the same equipment or widget contribution twice.

Tool-specific scenario fields remain separate. Examples include an optimization objective, temporary budget, Bear formation, Battle opponent, or Warboard roster. Switching profiles refreshes shared facts and clears results that belong to the earlier profile.

Visitors can use public tools with browser-local state, but the Profiles management page requires sign-in. Browser data is not cloud persistence.

Read [Lab Profiles, Shared Inputs, and Saving](/kingshot-events/lab/profiles-and-autosave).

## Module purpose and output map

| Module | Question it answers | Inputs to verify | Output to inspect |
| --- | --- | --- | --- |
| Profiles | Which account facts should compatible tools reuse? | Equipment, stats, resources, capacities, heroes | Active profile, source, saved state |
| Ascension Path | Which cross-system checkpoint should come next? | Hero Gear, Governor Gear, Charms, nine resources | Ordered path, target shortages, Projected Build |
| Hero Gear | How should four resources be allocated across twelve pieces? | Enhancement, Mastery, Red state, context, locks | Reforge verdict, milestones, costs, before and after |
| Governor Gear | Which next levels best use Satin, Gilded Thread, and Artisan Vision? | Six levels, set state, objective, locks | Ordered steps, set deltas, remaining resources |
| Charms | Which next charm levels best use Guides and Designs? | Eighteen slots, priorities, locks | Ordered upgrades, stopping reason, leftovers |
| Bear Trap | How do leader, joiner, formation, and profile facts affect the modeled score? | Capacities, troops, heroes, skills, stats | Contributions, formation comparison, observed error |
| Rally | Which configured effects apply and how do they stack? | Leader, joiners, formation, skills, widgets | Accepted and rejected effects, resulting multipliers |
| Battle | How do two configured sides vary across repeated trials? | Both sides, formations, stats, repeat count | Distribution across repeated runs |
| Championship Warboard | Which three-lane plan holds up across hidden opponent layouts? | Both rosters, AC evidence, round history, locks | Strategy matrix, lane plans, confidence, exports |
| Game Data | Which supported catalog values feed the Lab? | System, entity, level, version | Read-only source and version details |

## Progression planning

**Hero Gear planning and reforge** distinguishes Enhancement, Mastery Forging, Red ascension, Imbuement milestones, profile locks, and recoverable versus irreversible XP. Select an optimization objective and inspect the no-Reforge comparison before acting.

Governor Gear evaluates direct and set changes under three resource limits. Charm planning evaluates valid next levels across eighteen slots. A candidate can disappear because it is locked, at maximum, unaffordable, missing a valid catalog step, or has no positive value under the current objective.

Ascension Path combines the three systems, keeps their nine material budgets separate, and shows the projected physical build behind the numeric result.

## Combat and Championship planning

Bear Trap has two different boundaries: **Simulate and contribute**. Simulation uses profile and scenario inputs. **Share Your Bear Experience** is a separate explicit flow for an observed result and never silently rewrites the profile.

Rally separates leader and joiner effects, prerequisites, and stacking categories. Battle uses a worker-backed repeated model and keeps attacker and defender sources independent.

Championship Warboard accepts manual, spreadsheet, and AC-only roster input, works with partial opponent intelligence, and compares several three-lane strategies. Saved scenarios and observations stay in the current browser. Read [Championship Warboard](/kingshot-events/lab/championship-warboard).

## Game Data and visual references

**Game Data is the reference surface** for supported costs, heroes, skills, troops, gear, and other catalog records. Search and category navigation help locate an entry. An image existing in the interface does not prove the entry participates in every calculation.

The Lab uses a **Cyber design system** with an Ambient canvas backdrop, Compact battle cards, semantic troop and stat colors, and mobile navigation. Its authentic game asset mapping includes supported equipment artwork such as awakened Red tier gear. A Structured fallback system keeps a labeled category icon visible when a specific image is missing.

## Result trust labels

| Label | Meaning |
| --- | --- |
| Profile input | Saved account fact controlled by the profile owner |
| Scenario override | Temporary value for one comparison |
| Catalog input | Versioned application reference data |
| Derived result | Calculated from declared inputs and model rules |
| Observed contribution | User-submitted real outcome with its own context |
| Applied plan | Confirmed planning-state update, never an in-game action |

## Safe application

When an optimizer offers **Apply**, review the target profile, projected levels, and consumed resources. Safe application updates the supported profile fields only. It does not apply combat totals, unrelated scenario settings, or anything inside Kingshot.

Screenshot import follows the same boundary: review recognized values and apply only selected valid changes. Uncertain fields remain unselected.

## Failure diagnosis by module

- **No candidate:** inspect locks, levels, prerequisites, weights, and every required material.
- **Sequence stops early:** find the first exhausted resource and read the leftovers.
- **Account totals look wrong:** verify the stat source and included layers.
- **Bear or Rally effect is missing:** verify role, active slot, troop type, and prerequisites.
- **Battle distribution is extreme:** compare both side assignments, stats, formations, seed, and repeat count.
- **Warboard result is weak:** add observed AC or round evidence, then review the confidence range.
- **Stale result:** rerun after changing a profile or scenario.
- **Save conflict:** preserve your typed values, reload the newer profile version, and reapply only the intended change.

Continue with [Interpreting Results](/kingshot-events/lab/interpreting-results), the guide for the selected tool, or [Simulator Problems](/kingshot-events/troubleshooting/simulator-problems).
