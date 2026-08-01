---
title: 'Player Linking and Synchronization'
description: 'Connect an account to the right player and refresh public game profile data.'
product: 'kingshot-events'
audience: 'Players and managers'
experienceLevel: 'Intermediate'
featureArea: 'Player linking'
lastReviewed: '2026-08-01'
---

# Player Linking and Synchronization

Linking and synchronization solve different problems. **Linking** connects a signed-in account to one existing shared player identity. **Synchronization** refreshes supported public Kingshot profile values for a player that has a profile ID.

## Link the right player

Open account or profile settings and choose the player that represents you. Confirm the kingdom, alliance, current name, and profile ID. If the correct record is absent, ask a roster manager to find or create it rather than linking a similar name.

A link can require manager review when the identity is uncertain or already associated. Until accepted, personal features may show missing-player or pending-review behavior. Linking does not grant alliance or kingdom management access and does not merge two shared player records.

## Synchronize a profile

Managers can enter a **Kingshot profile ID** and use **Sync** in the add or edit form. An existing directory row with a stored ID also offers **Sync Kingshot profile**. The profile shows **API linked** or **local only**, a last synchronization time, and the current synchronization state.

Sync can refresh supported public identity and progression values such as name, avatar, power, Town Center, level, or alliance information when the current provider returns them. Review the retrieved identity before saving or accepting a move. Locally managed notes, manual attributes, manual status overrides, and historical event results are not a substitute for provider data and should not be assumed to be overwritten by a profile refresh.

## Nickname history

From the player profile, authorized managers can add a **Former or alternate nickname**. Nickname history helps imports and searches match a renamed player to the same identity. Add real historical names only; do not use it as a notes field.

## Common problems

- **The linked profile does not update:** Linking alone does not run a sync. Confirm the stored profile ID, run **Sync**, then reload after it finishes.
- **Sync finds the wrong player:** Do not save the result. Recheck the numeric profile ID and open the existing matching record.
- **The player is already linked:** Ask an authorized manager to review the existing account link. Do not create a duplicate player.
- **The old name cannot be found:** Add the verified old nickname to the existing profile and search again.
- **A synced alliance is unexpected:** Confirm the in-game move and active kingdom before changing the roster. Use the player lifecycle workflow for alliance removal.

<VisualReference title="Player link and sync states">
Compare the account link state with the shared profile's synchronization state.

<template #items>

- Account profile player selector or link-review message.
- Shared player identity with kingdom, alliance, and Kingshot profile ID.
- **Sync** action, **API linked** or **local only**, and last synchronization time.
- Nickname history and the **Former or alternate nickname** input on the player profile.

</template>
</VisualReference>

Related: [Account and Profile](/kingshot-events/getting-started/account-and-profile) and [Player lifecycle](/kingshot-events/players/lifecycle).
