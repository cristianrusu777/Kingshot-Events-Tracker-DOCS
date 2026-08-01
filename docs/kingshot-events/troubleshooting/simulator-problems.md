---
title: 'Simulator and Optimizer Problems'
description: 'Safe troubleshooting for simulator and optimizer problems.'
product: 'kingshot-events'
audience: 'All affected users'
experienceLevel: 'Beginner'
featureArea: 'Troubleshooting'
lastReviewed: '2026-08-01'
head:
  - - meta
    - name: 'robots'
      content: 'index,follow'
---

# Simulator and Optimizer Problems
## What you see

A Lab tool is missing, unavailable, or gives an unexpected result.

## What it usually means

The module may be disabled, login may be required, or the profile and inputs may not match the scenario.

## Safe checks and resolution

Check the availability label, sign in if requested, refresh the profile inputs, and compare one controlled input change at a time.

## When to contact an authorized manager

Ask for help when the issue depends on role assignment, community scope, review status, or a locked workflow. Include the page name, visible message, selected scope, approximate time, and the safe steps already tried. Do not include passwords, tokens, private keys, or unrelated personal data.

## Related guides

- [support](/support)
- [feature availability](/kingshot-events/overview/feature-availability)

## Practical depth

### Verify assumptions before results

Confirm profile, save state, units, current levels, targets, resources, and scenario name. Lab comparisons do not change live player, event, or inventory records and cannot guarantee an in-game outcome.

## Worked example, recovery, and limitations

**What you see:** A Hero Gear plan stops with Forge Hammers remaining. **Checks:** Confirm active profile, visible saved state, current levels, locks, strategy, weights, every material balance, and dataset version. **Decision:** Remaining Hammers alone may not fund any valid positive step if XP, Mythic Gear, or Mithril is exhausted, a slot is locked, or the next gain has non-positive configured value. **Recovery:** Correct the input, wait for saved confirmation, and rerun; compare before state, ordered steps, and leftovers. The iterative plan is deterministic but not a proof of global optimality or live-game outcome. Include module, scenario, dataset, save state, inputs changed, and unexpected output.

The safe workflow changes one assumption in a copied scenario. It cannot guarantee future game balance, exact live damage, or recovery of a profile whose newer version legitimately won a save conflict.
