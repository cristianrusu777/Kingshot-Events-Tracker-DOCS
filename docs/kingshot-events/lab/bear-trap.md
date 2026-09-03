---
title: 'Bear Trap Calculation and Result Anatomy'
description: 'Build or replay a rally, compare formations, and distinguish estimated output from observed results.'
product: 'kingshot-events'
audience: 'Rally leaders and scenario reviewers'
experienceLevel: 'Intermediate'
featureArea: 'Simulations and Optimizations'
lastReviewed: '2026-09-03'
verifiedAgainstSourceCommit: '6bfaf6e0a6a8ceb8d6dcf09ead5ad5a9f85185d0'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Bear Trap Calculation and Result Anatomy

The Bear Trap Simulator is most useful when you compare a real setup with a controlled alternative. It helps explain the contribution of troops, account stats, heroes, and eligible skills without presenting a prediction as a guaranteed live result.

## Choose your role and workflow

Start with **Build setup** to explore a scenario or **Replay rally** to work from a real rally. Choose **Leader** or **Joiner**, then verify the relevant march and rally capacities.

Enter actual troop counts, troop tier and Truegold level, leader heroes, joiner captains, skill levels, account combat stats, and temporary effects. Confirm the stat source and included progression layers so a bonus is not counted again merely because it also appears in a profile.

Your own march, the average joiner, and the total rally are different comparison scopes. Many players may contribute troops, but only the eligible active captain-skill slots affect the modeled rally. Do not equate the number of joiners with the number of active rally skills.

## Read a result in three parts

**Leader contribution** explains the leader's modeled damage and applicable effects. **Joiner contribution** explains the supported joiner setup. The total combines those contributions into the displayed rally estimate and event-score view.

The result distinguishes supported inputs, estimates, and unresolved assumptions. If you enter an observed result, **prediction error** shows the disagreement between that observation and the model. A small error in one rally is useful evidence, not proof that every future rally will match.

Inputs changed after a run make the result stale. Use **Run Bear Simulation** again before interpreting the numbers below.

## Compare formations on the same basis

The Formation Damage Map and recommended-formation results compare the current formation and alternatives using the same scenario assumptions. Troop groups, locks, capacity, and the chosen comparison scope matter throughout the search.

The optimizer applies **multi-scale top-region refinement**. It begins with a broad coarse search across possible troop mixes, then takes the top candidate anchors and refines them by geometrically reducing the step size by 4x on each pass down to single-troop integer resolution. This multi-pass refinement prevents small optimal proportions (such as a 1.7% Infantry frontline share) from getting trapped between wide coarse intervals.

Read the result state carefully:

| Result | What it tells you |
| --- | --- |
| Better candidate found | A tested alternative improved the modeled result |
| Current best in completed search | No tested alternative in that completed search beat the current setup |
| No better candidate in limited search | The bounded search or constraints did not establish an improvement |
| Insufficient data or search failed | Correct the input or problem before drawing a conclusion |

None of these is a promise of the universally best live formation. In particular, an empty or heavily locked search should not be read as "your current formation is perfect."

Where offered, compare the strongest sampled recommendation with the smaller-change alternative. A modest troop adjustment can be more practical than reorganizing the entire rally for a small modeled gain. Recommendation cards specify the exact scope destination (`Apply to Leader`, `Apply to Joiners`, or `Apply to Draft`) to prevent accidental overwrites.

### Ternary damage surface and locked stack detection

The Bear Trap formation view includes a **Ternary Damage Heatmap** that maps modeled rally damage across every possible combination of **Infantry**, **Cavalry**, and **Archer**:

- **Ternary Surface Heatmap:** Plots candidate compositions with interactive sample markers, color-coded damage density gradients, and complete support for both Light and Dark color themes with high-contrast text and border tokens.
- **Locked Stack Restriction Callout:** When troop stacks have fixed quantities, the optimizer cannot freely vary those troops. A warning banner alerts the user (`Locked troop stacks are restricting the search`) and identifies whether Leader, Joiner, or Rally stacks are locked.
- **One-Click Unlock Action:** The callout provides an **Unlock Stacks & Find Best Formation** button. Clicking this unlocks the relevant stacks, clears the optimizer evaluation cache, and immediately recalculates the optimal formation across all troop types.

## Build weights and defensive reserves

The **Bear Trap Rally Damage** preset is designed for offense while protecting equipment integrity:

- **Lethality and Attack weights:** Set to 1.0 for **Infantry** and **Cavalry**, and 1.1 for **Archer** (capturing Archer's 10% Ranged Strike bonus against the Infantry Bear).
- **Defensive reserves:** Health and Defense are assigned a 35% reserve (0.35 weight). Because the Bear does not attack back, offensive stats drive score, but the 35% defensive reserve ensures that durable all-mode gear is not treated as disposable reforge donors.
- **Legacy preset migration:** Profiles saved under legacy Bear Trap weights with 0% or 25% reserves automatically upgrade to the standard 35% reserve when opened, while custom player weight matrices remain untouched.

## Keep hero assumptions honest

Hero progression, supported skill effects, troop-type applicability, and widget or star requirements can change a comparison. The simulation engine resolves skill effects by troop type: an **Infantry** skill factor multiplies only Infantry stacks, while **Archer** and **Cavalry** skills apply strictly to their matching troop types, rather than applying a blanket multiplier across all troops.

Profile prefill reduces typing, but inspect the values after selecting a different profile. A hypothetical hero recommendation is not proof that the account owns that hero or can meet its requirements.

**Example:** You replay a rally and find the estimate much higher than the observed result. First confirm the actual captain skills, troop counts, stat source, tier, and temporary buffs. Correct one uncertain input at a time and rerun. Changing several values until the answer matches can hide the original mistake.

## What is saved or shared?

The scenario is personal Lab planning data, not an official kingdom event record. Profile inputs follow the [Lab saving rules](/kingshot-events/lab/profiles-and-autosave). Sharing a Bear experience is a separate contribution action; review any submitted details before sending them.

For different questions, use the [Rally Simulator](/kingshot-events/lab/rally-simulator), [Battle Simulator](/kingshot-events/lab/battle-simulator), or [Hero Gear Optimizer](/kingshot-events/lab/hero-gear).
