---
title: 'Adding and Updating Players'
description: 'Create or edit a scoped player record without duplicating an existing identity.'
product: 'kingshot-events'
audience: 'Alliance and kingdom managers'
experienceLevel: 'Intermediate'
featureArea: 'Players'
lastReviewed: '2026-08-01'
---

# Adding and Updating Players

Authorized managers can add and edit shared player records from **Players**. The form is hidden from viewers who can read the directory but cannot manage players.

## Check for an existing identity

Search the current kingdom, other visible alliances, deleted records, old nicknames, and the Kingshot profile ID. A player who moved alliances should normally keep the same kingdom identity. Use **Kick from alliance** and then edit the alliance instead of creating a second player.

## Fields

**Kingdom** and **Player name** are required. **Alliance** is optional and is limited to the chosen kingdom. The form also supports **Kingshot profile ID**, **Avatar URL**, **Power**, **Level**, **Game rank**, **TC level**, **Alliance role**, **Alliance status**, and **Notes**.

Enter the stable Kingshot profile ID when known. **Sync** can retrieve the visible game profile before saving, allowing the manager to confirm the identity and current public profile values. A local-only player can be created without that ID and linked later.

## Save behavior

Select **Add player** to create a new identity. From a row, choose **Edit player** to load the same form; the primary action changes to **Save player**, and **Cancel** returns to create mode. A successful save updates the shared record in the selected kingdom. It does not create a new event result, account, or account-to-player link.

Changing an alliance moves the current player record. Removing the alliance leaves a kingdom player without an alliance. Existing event history stays tied to the player, though what other users can see may change with scope.

## Role and scope boundaries

Alliance managers can work only in their assigned context. Kingdom managers may have a broader kingdom roster. Locked kingdom or alliance selectors show the effective boundary. If the required community is unavailable, do not save the player into a convenient but incorrect scope; ask an authorized manager to correct access.

<VisualReference title="Add or edit player form">
The form sits between the directory filters and the roster table when the viewer can manage players.

<template #items>

- Required **Kingdom** and **Player name** controls and optional **Alliance**.
- **Kingshot profile ID** with **Sync**, followed by profile and progression fields.
- Alliance role, alliance status, and notes.
- **Add player** or **Save player**, plus **Cancel** while editing.

</template>
</VisualReference>

## If saving fails

Confirm the required fields, active scope, and duplicate warning. If the profile ID belongs to another record, open that record instead. For an apparently missing player, enable **Show deleted** before creating a replacement.
