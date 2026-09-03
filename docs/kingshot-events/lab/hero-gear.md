---
title: 'Hero Gear Optimization Logic'
description: 'Choose a useful objective, protect important gear, and understand the trade-offs in a proposed upgrade or reforge plan.'
product: 'kingshot-events'
audience: 'Hero Gear planner users'
experienceLevel: 'Intermediate'
featureArea: 'Simulations and Optimizations'
lastReviewed: '2026-09-03'
verifiedAgainstSourceCommit: '6bfaf6e0a6a8ceb8d6dcf09ead5ad5a9f85185d0'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Hero Gear Optimization Logic

The Hero Gear Optimizer helps you turn current equipment and available materials into a plan you can review before spending. It considers enhancement, mastery, milestone requirements, locks, and your chosen build priorities. It does not change your game account.

## Give the planner the right starting point

Choose the active Lab profile, then check each troop's gear, enhancement and mastery levels, available XP, Forge Hammers, Mythic Gear, and Mithril. Lock anything you do not want the planner to change.

Next choose your build profile. A strategic profile describes which stats matter for your goal; it is not a claim that those weights are a rule of the game. The **Bear Trap Rally Damage** profile favors offense while retaining defensive value so a damage-focused plan does not treat useful all-mode gear as worthless.

## Choose the question you want answered

| Objective | How to interpret it |
| --- | --- |
| Maximize Total Stat % | Searches for greater total gear stats while protecting build-profile priorities |
| Balanced for my account | Values upgrades against your entered account stats and march formation |
| Gear value only | Uses gear gains and build priorities without an account snapshot |
| Match the published optimizer | Helps compare against the weighted reference method |

For account-aware planning, enter the actual troop percentages, select where you read them, and confirm the formation. The stat source matters: some displayed totals already include Hero Gear. The tool accounts for that distinction so the same gear is not simply counted twice.

If usable account context is missing, inspect the result's fallback explanation. A gear-only comparison is not the same answer as a calculation based on your whole account.

## Follow the plan, not just the headline

The planner compares affordable next steps and evaluates enhancement together with the mastery needed to cross milestone gates. Direct mastery level inputs allow precise starting state entry. The total stats preview lets you inspect current and projected equipment stats across all three troop classes before confirming a calculation.

After choosing an upgrade the engine consumes the modeled resources and reevaluates the remaining options. Locked, unreachable, maximum-level, and unaffordable choices are excluded.

The familiar candidate question is **Affordable positive candidate?** If none remains, the plan stops and leaves unused resources. This does not mean every item is finished; a different required material may have run out.

Review the ordered steps, affected troop and slot, before-and-after stats, material spending, and leftovers. The results display presents troop facts using dedicated semantic colors for **Infantry**, **Cavalry**, and **Archer**. Net troop gain tracking details the exact stat gain achieved for each troop class. Total stat percentage is a sum of stat gains, not the percentage by which you will win more battles or deal more damage.

## Reforge without losing sight of your priorities

Optional **reforge** can recover invested enhancement XP from eligible gear and reuse it in the proposed plan. A locked item is protected. In addition, **profile priority locks** prevent higher-priority gear from being selected as reforge donors: gear belonging to a higher-priority troop class cannot have its invested XP stripped to upgrade lower-priority items.

An empty XP bag does not necessarily mean there is nothing to compare: invested, recoverable XP can still be relevant. Conversely, recoverable XP is not free new inventory, and not every material is refunded.

For Maximize Total Stat %, a reforge must improve both raw stat total and weighted useful value over the no-reforge result before it is selected. Inspect that comparison and the actual donor items instead of assuming that a longer plan is better.

**Example:** A proposed reforge would raise several secondary stats but reduce a higher-priority group. The larger raw sum alone is not sufficient. Priority protection prevents higher-priority gear from being used as donors, while keeping the no-reforge alternative visible for comparison.

## Why an older result may differ

The XP cost table and reforge comparisons have been corrected, and account context is handled more consistently. Re-run a saved scenario after an update rather than relying on a copied old total. Compare the same input levels, inventory, objective, locks, and formation before deciding two results disagree.

The planner searches supported choices; it does not prove a globally best build over every future upgrade. Treat predictions as conditional on the entered information and current catalog.

Use [screenshot build import](/kingshot-events/lab/screenshot-build-import) to reduce data entry, [profiles and autosave](/kingshot-events/lab/profiles-and-autosave) to understand saving, and [Ascension Path](/kingshot-events/lab/ascension-path) for cross-system planning.
