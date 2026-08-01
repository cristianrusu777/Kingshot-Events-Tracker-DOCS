---
title: 'Player Directory and Profiles'
description: 'Find players with current filters, read directory indicators, and open the shared profile.'
product: 'kingshot-events'
audience: 'Members and managers'
experienceLevel: 'Intermediate'
featureArea: 'Players'
lastReviewed: '2026-08-01'
head:
  - - meta
    - name: 'robots'
      content: 'index,follow'
---

# Player Directory and Profiles

The **Players** page is the scoped roster and the safest starting point before adding, linking, editing, removing, or restoring a player. Each row represents one shared player identity in a kingdom. An account profile can link to that identity, but it does not replace it.

## Select the correct roster

Use **All kingdoms** and **All alliances** only when your assignments allow them. The alliance selector stays unavailable until a kingdom is selected and can be locked to your assigned alliance. Changing kingdom clears an incompatible alliance choice.

**Search players** looks for current player records. When a name has changed, also search the nickname history from the profile or use Player Analytics, which accepts old nicknames. Before creating a player, try the Kingshot profile ID and alternate spellings to prevent duplicate identities.

## Directory filters

| Control | What it changes |
| --- | --- |
| **Any status** | Limits the roster to **active**, **inactive**, or **unknown**. The primary badge can use a more specific configured label such as semi-active. |
| **Any attribute** | Limits rows to a currently available calculated or manually assigned attribute. Options come from the visible roster data. |
| **Any reward state** | Shows **reward eligible** or **not reward eligible** players according to the current reward rules and analytics state. |
| **Any API state** | Separates **API linked** players from **local only** records. |
| **Show deleted** | Available to authorized managers. Includes soft-deleted kingdom identities so they can be reviewed or restored. |

Filters combine. If no rows remain, clear one filter at a time and confirm the kingdom and alliance. Pagination applies after filtering.

## Columns and indicators

Select **Player**, **Level**, **Alliance Role**, **Status**, **Attributes**, **Participation**, or **Results** to sort ascending or descending. The player cell includes the name, alliance context, Kingshot profile ID or **not linked**, synchronization state, and a shortened note when present.

- **Level** uses the saved game progression fields.
- **Alliance Role** is roster information such as the player's in-game alliance rank.
- **Status** is the primary calculated state or a manual override. The badge indicates when the source is an override.
- **Attributes** shows additional current classifications.
- **Participation** is the calculated percentage from eligible tracked events.
- **Results** is the count of saved result rows tied to the player.

## Open a profile

**Open player** shows **Profile Foundation**, **Sync State**, nickname history, attributes and status override controls for authorized managers, and the player's event history and summaries. The profile can display name, avatar, kingdom and alliance, profile ID, power, Town Center, level, rank, alliance role and status, notes, last synchronization, and analytics state.

Personal account data remains separate. Linking an account identifies which shared player represents that user; editing the account profile does not silently rewrite the kingdom roster.

<VisualReference title="Player Directory landmarks">
Read the page from scope to filters to roster actions.

<template #items>

- Kingdom and alliance selectors, followed by **Search players**.
- Status, attribute, reward-state, API-state, and **Show deleted** filters.
- Sortable player table with link or sync text, status and attribute badges, participation, and result count.
- Row actions for **Open player**, **Sync Kingshot profile**, **Kick from alliance**, **Edit player**, **Delete player**, or **Restore**, shown only when allowed.

</template>
</VisualReference>

## Next guides

- [Adding and updating players](/kingshot-events/players/manage-players)
- [Player linking and synchronization](/kingshot-events/players/linking-and-sync)
- [Activity, attributes, removal, and restore](/kingshot-events/players/lifecycle)
- [Player and roster problems](/kingshot-events/troubleshooting/data-and-save-problems)
