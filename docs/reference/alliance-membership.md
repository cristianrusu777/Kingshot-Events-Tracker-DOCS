# How Alliance Membership Works

A player belongs to one kingdom identity, but their alliance membership can change over time. The tracker keeps that history so imports, event snapshots, and player records still make sense after someone moves, leaves, or gets kicked.

## The simple rule

- A player can have only one current alliance at a time.
- A player can have many past alliance memberships in their history.

If you assign the same player to a different alliance, the old membership is closed and the new one starts.

## Membership sources you may see

Each membership record has a source that explains how it happened:

| Source | What it means in plain language |
|---|---|
| `manual` | A person was added to an alliance by hand. |
| `import` | The alliance link came from imported data. |
| `api_sync` | The link came from the game API profile data. |
| `kvk` | The link was recorded from KvK-related capture or processing. |
| `kicked` | The player was removed from the alliance by a kick action. |
| `transfer` | The player moved from one alliance to another. |

## What a kick does

A kick removes the player from the current alliance roster, but it does not erase the player from the kingdom.

The player's:

- identity stays
- result history stays
- nickname history stays
- old membership history stays

That is why **Kick** is safer than delete when someone only left the alliance.

## What a transfer does

A transfer changes the player's current alliance and records that change in membership history. If the player was active inside event participant lists, the old alliance membership is marked as having ended.

## Why this history matters

Membership history helps the tracker explain:

- why old imports matched the player a certain way
- why event participation changed over time
- why a player is no longer on the current alliance roster

## Related

- [Kick a Player from the Alliance](../how-to/kick-player.md)
- [Edit Player Details](../how-to/edit-player.md)
- [Read a Player Profile](../how-to/player-profile.md)
- [Delete & Restore a Player](../how-to/delete-restore-player.md)
