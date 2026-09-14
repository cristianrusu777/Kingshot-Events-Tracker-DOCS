---
title: 'Hero Gear Optimization Logic'
description: 'Enter all twelve pieces, choose a combat objective, protect gear, and interpret Enhancement, Mastery, Red Gear, Imbuement, and Reforge recommendations.'
product: 'kingshot-events'
audience: 'Hero Gear planner users'
experienceLevel: 'Intermediate'
featureArea: 'Simulations and Optimizations'
lastReviewed: '2026-09-14'
verifiedAgainstSourceCommit: 'bea100eeccd39f9d71fc12820b2791c48adfcb8f'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Hero Gear Optimization Logic

The Hero Gear Optimizer allocates owned Enhancement XP, Forgehammers, Mythic Gear, and Mithril across all twelve Hero Gear pieces. It compares upgrading with the current bag against an optional Enhancement Reforge, then provides an ordered plan you can review before making irreversible changes in Kingshot.

The calculation does not change your game account. Applying a plan updates only the selected Ralyvora profile after a separate confirmation.

## Enter the current state

Select the active account profile and verify every piece for Infantry, Cavalry, and Archer. Each troop has four pieces: Helm, Gloves, Chest, and Boots.

Enter these dimensions separately:

- **Enhancement:** the `+` level on the piece and the source of its normal primary-stat progression;
- **Mastery Forging:** the Mastery level, which increases the piece's Enhancement stat and gates later Red levels;
- **Red Gear and Imbuement:** Red progression after the ascension boundary, including milestone bonuses that can grant a separate Expedition Attack or Defense stat;
- **Resources:** Enhancement XP, Forgehammers, Mythic Gear, and Mithril currently owned;
- **Protection:** locks for pieces the optimizer must not upgrade or use as Reforge donors.

Normal gear primary stats and Imbuement milestone bonuses are not one stat model. A piece's Enhancement can raise its primary Health or Lethality line, while a Red milestone can separately grant Attack or Defense. The recommendation details identify both sources when both contribute.

## Choose the objective and combat context

Choose the question you want the plan to answer:

| Objective | What it values |
| --- | --- |
| **Maximize Total Stat %** | A higher raw sum of Hero Gear percentage points, while retaining profile-priority safeguards |
| **Balanced for my account** | Marginal combat value relative to the entered account snapshot and march formation |
| **Gear value only** | The selected build-profile weights without requiring account combat stats |
| **Match the published optimizer** | A linear weighted reference comparison for spreadsheet-style verification |

For account-aware planning, choose the source of the percentages and enter all four values for every troop: Attack, Defense, Lethality, and Health. Enter a displayed `650.5%` as `650.5`.

**Bonus Overview** already contains current Hero Gear. The optimizer subtracts the current Hero Gear contribution before applying the proposed gear, so it is counted once. A source that excludes Hero Gear is handled differently and adds the modeled contribution once.

Formation is part of account-aware valuation. The Infantry, Cavalry, and Archer fields must total exactly 100%. Formation edits stay independent, and selecting a build profile does not silently turn its suggested formation into a fact about your account.

If no compatible combat snapshot is available, the results say so and fall back to gear-only valuation. Do not compare that result as if it used the whole account.

## Understand Mastery and Red checkpoints

The optimizer can bundle the steps needed to reach a valid checkpoint. A later Enhancement target may require Mastery first, and a Red milestone may require both the Mastery gate and its separate Imbuement materials.

The cost breakdown keeps these categories separate:

- Enhancement XP used for Enhancement;
- Forgehammers and any Mastery-specific Mythic Gear used for Mastery Forging;
- Mythic Gear and Mithril used for Red ascension or Imbuement.

The recommendation shows the exact milestone stat gain, including a milestone that has zero value under the selected objective. A zero-valued Defense milestone, for example, can still be a real required cost on the path to a later target.

The default Red policy is **Complete milestones only**. It avoids spending into an intermediate Red level unless the plan can complete the supported milestone. Older unversioned saves are migrated to this safer default once. If you later choose another policy explicitly, that choice is preserved.

The candidate loop asks whether an **Affordable positive candidate** remains after locks, gates, costs, and the selected objective are applied. If none remains, the plan stops and reports leftovers.

## Reforge eligibility and protection

Optional **Enhancement Reforge** resets eligible non-Red pieces to `+0` and returns their invested Enhancement XP. Mastery levels are preserved. Forgehammers, Mythic Gear, Mithril, and other irreversible materials are not refunded.

The Reforge panel separates:

- XP already in the inventory;
- recoverable XP invested in eligible pieces;
- XP locked in protected or Red pieces;
- XP available if the recommended Reforge is performed.

Only pieces with recoverable Enhancement XP can be donors. A Red piece is ineligible, and its invested XP remains irreversible. Manual piece locks and profile priority locks also keep important gear out of the set of Reforge donors. Higher-priority gear cannot be stripped merely to improve lower-priority gear.

**Allow Reforging** lets the optimizer compare the best legal Reforge plan with the no-Reforge plan. **Do Not Reforge** restricts the plan to bag XP. Advanced settings can limit actions or model a paid cooldown bypass, but the tool never assumes a price that you did not enter.

For **Maximize Total Stat %**, a Reforge must improve both the raw stat total and the weighted useful value over the no-Reforge result. Moving XP around without a qualifying gain produces **Do not reforge**.

## Read and execute the result

Start with the verdict, then review the ordered execution plan. Reversible Enhancement changes appear before Mastery and Red actions. Red ascension and later checkpoints are explicitly marked irreversible.

Check these result sections:

- the troop that receives resources and the comparison across all three troops;
- raw gear-stat change, build-profile value, full-objective value, and formation context;
- before and after account totals when the selected stat source supports them;
- each piece's starting and projected Enhancement, Mastery, and Red state;
- recovered, preserved, spent, irreversible, and remaining XP;
- separate Mastery and Imbuement material costs;
- sensitivity notes showing how strongly weights affected the answer.

If the plan recommends a Reforge, compare the XP in Kingshot's confirmation with the displayed recovered XP before continuing. Stop if the values differ. After every in-game step, verify the resulting level before moving to the next irreversible action.

The single **Apply** action writes the projected Hero Gear and Hero Gear resource balances to the selected Ralyvora profile. It does not apply combat-stat totals or unrelated scenario settings.

## Limitations

- The planner uses the supported catalog and the account data you entered. It does not know future game changes.
- Account-aware value is conditional on the selected stat source, formation, build weights, and current snapshot.
- A bounded plan is not proof of the globally best build across every future resource drop.
- A copied result can become stale after a profile, inventory, lock, objective, or formation change.
- Reforge recovery must be checked against the live Kingshot confirmation before execution.

Use [Profiles and Shared Inputs](/kingshot-events/lab/profiles-and-autosave) to understand what is reused, [Screenshot Build Import](/kingshot-events/lab/screenshot-build-import) to reduce manual entry, and [Ascension Path](/kingshot-events/lab/ascension-path) for cross-system planning.
