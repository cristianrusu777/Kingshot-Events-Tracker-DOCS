---
title: 'Ascension Path: Plan Your Next Upgrades'
description: 'Compare progression priorities, resource shortages, timing, and hypothetical shop choices in one planning workspace.'
product: 'kingshot-events'
audience: 'Players planning account progression'
experienceLevel: 'Intermediate'
featureArea: 'Simulations and Optimizations'
lastReviewed: '2026-09-03'
verifiedAgainstSourceCommit: '6bfaf6e0a6a8ceb8d6dcf09ead5ad5a9f85185d0'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Ascension Path: Plan Your Next Upgrades

**Ascension Path** unifies progression across Hero Gear, Governor Gear, and Charms into a single strategic workspace. Rather than asking which piece to upgrade within one isolated menu, the tool evaluates your entire account to determine where your next materials deliver the highest combat return.

Open Ascension Path from the Lab. Start by reviewing the **Current Build** rather than the headline recommendation. A calculation based on outdated inventory or equipment levels produces the wrong sequence for your account.

## Progression engine and search depth

The planner is driven by Ascension Engine version 1.1.0. It applies a bounded beam search that evaluates progression up to 30 steps deep:

- **Cross-system scope:** The search evaluates candidate steps across Hero Gear, Governor Gear, and Charms simultaneously.
- **Multi-resource balancing:** It tracks nine distinct upgrade currencies: Hero Gear XP, Forge Hammers, Mythic Gear, Mithril, Satin, Gilded Threads, Artisan's Vision, Charm Guides, and Charm Designs.
- **Dominance rules:** At each depth level, the engine prunes inferior candidate branches to find an optimal sequence within modeled constraints without slowing down the browser.

## Start from confirmed inputs and combat focus

Review your current equipment levels, account combat stats, and resource balances:

1. **Input provenance:** Labels indicate whether a value originates from a confirmed profile, an isolated optimizer, a screenshot import, or a temporary scenario override.
2. **Combat stat semantics:** Select how your entered combat stats should be interpreted:
   - **Observed total:** Your entered stats already include your current equipment and progression bonuses.
   - **Base plus progression:** Your entered stats represent an unequipped baseline to which equipment bonuses are added.
3. **Choose a combat focus:**

| Combat Focus | Strategic Objective |
| --- | --- |
| Overall Strength | Balances gains across all three troop classes and all combat stats equally. |
| KvK / PvP | Follows your saved profile troop and stat priorities for competitive combat. |
| Rally Leader | Prioritizes offensive stats while retaining defensive gains. |

## Action recommendations and target milestones

After running the calculation, the header surfaces a clear summary action:

- **UPGRADE NOW:** You have sufficient resources to complete one or more high-value steps immediately.
- **SAVE:** Your owned resources are insufficient for the next milestone, and spending them on secondary choices would waste materials.
- **COMPLETE:** All supported items across all three systems have reached their maximum modeled levels.

### Milestone target cards

Below the action banner, the **Next Target** and **Following Target** cards highlight upcoming milestones:

- **System and transition:** Identifies the piece and target level (for example, Governor Ring Tier 4 -> Tier 5).
- **Required materials:** The full material cost for that milestone.
- **Sufficient resources:** Quantities of materials you already hold in adequate amounts.
- **Missing resources:** Exact shortages preventing you from reaching that milestone.
- **Recommendation badge:** Tags whether you should actively target or save for that checkpoint.

## Step anatomy and alternative comparisons

The plan displays an ordered sequence of recommended steps. Consecutive upgrades within the same system are grouped for clarity. You can filter steps by system (**All**, **Hero Gear**, **Governor Gear**, **Charms**) or search by keyword.

Each step provides complete technical details:

- **System badge and transition:** Indicates the system and the exact upgrade step.
- **Resource cost:** Quantities consumed for that step and projected remaining balances.
- **Combat delta:** The exact stat gains across **Infantry**, **Cavalry**, and **Archer** for Attack, Defense, Lethality, and Health.
- **Combat impact:** Classified as `Very High`, `High`, `Medium`, `Low`, or `Marginal`.
- **Breakpoint indicator:** Marks steps that activate a set bonus or cross a key gear threshold.
- **Why First:** Explains the calculation reason this step was prioritized over competing candidates.
- **Alternative comparison:** Shows the competing upgrade from another system that was evaluated at the same step, its combat impact, and an explicit explanation of **Why It Loses** (such as poor stat return per material or higher resource scarcity).

## Weak point analysis and opportunity scores

The **Weak Points** section evaluates your three equipment systems to expose progression imbalances:

- **Priority classification:** Each system is tagged as `High Priority`, `High`, `Medium`, or `Healthy`.
- **Opportunity score:** A quantified score indicating the relative combat gain available per resource spent in that system.
- **System diagnosis:** Text explanations detail why a system is lagging (for example, low charm levels relative to advanced governor gear) so you can direct future acquisitions effectively.

## Interactive forecast charts

The forecast workbench visualizes your progression trajectory across two interactive charts:

1. **Combat Stats Trajectory:** Plots the projected growth of Attack (sky blue), Defense (amber), Lethality (pink), and Health (emerald) averages from your current baseline across each planned step.
2. **Resource Depletion Curves:** Multi-line chart tracking how all nine upgrade materials deplete step by step, showing which resource triggers a bottleneck.
3. **Tabular Projection View:** A structured data table listing cumulative stat gains and remaining resource tallies at every step.

If inputs change, earlier charts become stale; select Run again to refresh all projections.

## Platform event timing decisions

Progression timing matters as much as upgrade order. Ascension Path analyzes active platform event sessions to produce a timing recommendation:

- **UPGRADE NOW:** An active event currently rewards points for spending your upgrade materials.
- **WAIT:** A scheduled event offering point multipliers or spending milestones starts soon.
- **NO TIMING ADVANTAGE:** No active or upcoming event provides bonuses for your required materials.

The decision card links directly to the relevant event session and explains the modeled efficiency gain.

## Resource routing workbench and virtual shop

The **Resource Routing** tool simulates hypothetical acquisitions to resolve material shortages:

1. **Configure shop parameters:** Define a virtual shop name, currency label, and your available currency balance.
2. **Add offer bundles:** Select from canonical resource packages or create custom offers with custom quantities, currency costs, and purchase limits.
3. **Analyze route:** The engine computes the optimal combination of purchases using return-on-investment ranking to clear your biggest progression bottlenecks. This calculation does not buy real items.
4. **Apply to temporary scenario:** Clicking this action adds the acquired materials directly into the temporary what-if inventory. It does not alter your confirmed profile inventory. Rerun the path to preview the new upgrade sequence enabled by those purchases.

## Saving and safe application

Confirmed profile inputs follow the standard [Lab saving rules](/kingshot-events/lab/profiles-and-autosave). Edits made in the temporary scenario remain in the what-if sandbox until discarded or manually entered into your profile.

Use the **Copy summary** button to export a clean text summary of your progression path for alliance discussion or personal planning.
