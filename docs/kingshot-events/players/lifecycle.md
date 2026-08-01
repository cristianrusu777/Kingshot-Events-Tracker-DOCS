---
title: 'Activity, Attributes, Removal, and Restore'
description: 'Understand calculated status, overrides, alliance removal, soft deletion, and restoration.'
product: 'kingshot-events'
audience: 'Players and managers'
experienceLevel: 'Intermediate'
featureArea: 'Player lifecycle'
lastReviewed: '2026-08-01'
---

# Activity, Attributes, Removal, and Restore

A player can leave an alliance without leaving the kingdom, and can be hidden without erasing historical event records. Choose the action that matches the real-world change.

## Statuses and attributes

The directory's primary status can be **active**, **semi-active**, **inactive**, **unknown**, or another enabled status label. It is calculated from eligible analytics rules unless an authorized manager sets a manual override. Participation, missed events, internal points, and available rule configuration can affect the displayed state.

The profile lists the primary status plus additional calculated or manually assigned attributes. Managers with attribute access can **Assign manual attribute** with a reason, remove a manual attribute, or select **No manual override** to return primary status control to automatic calculation. An override badge indicates that the visible primary status was set manually.

Use overrides for a known exception, record a useful reason, and remove the override when automatic evaluation should resume. Recalculation does not clear a valid manual override by itself.

## Kick from alliance

Choose **Kick from alliance** when the player left only the current alliance. The confirmation states that the kingdom identity and history remain intact. After confirmation, the alliance roster no longer includes the player, but managers can still find the kingdom player and later assign a new alliance.

## Delete player

Choose **Delete player** only when the kingdom identity itself should be removed from ordinary use. Deletion is soft: the row disappears from normal lists, remains available through **Show deleted** to authorized managers, and preserves historical references.

If the player has historical data, the interface requires the exact player name before the dangerous delete proceeds and reminds the manager to use Kick for an alliance departure. This safeguard prevents an easy roster action from hiding a record with history.

## Restore

Enable **Show deleted**, locate the marked row, and choose **Restore**. Restoration makes the same player identity active in ordinary lists again; it does not create a copy. Review its alliance, profile ID, link, and current details after restoration because the real player may have moved while the record was deleted.

## Role differences

Readers can see lifecycle indicators but not change them. Alliance managers can kick or edit within their assigned alliance when allowed. Delete, restore, attribute, and override actions appear only to viewers with the corresponding management access.

<VisualReference title="Player lifecycle actions">
Use row actions for roster changes and the profile for status details.

<template #items>

- Primary status badge and attribute badges, including an override indicator.
- Profile controls for manual attribute, reason, status override, and removing an override.
- Directory actions **Kick from alliance**, **Delete player**, and the exact-name confirmation for a player with history.
- **Show deleted** filter and **Restore** action on a deleted row.

</template>
</VisualReference>

## Avoid duplicates after a move

Search all visible alliances, deleted records, old nicknames, and profile IDs. Restore or update the existing kingdom identity. Create a new player only when the identity is genuinely different.
