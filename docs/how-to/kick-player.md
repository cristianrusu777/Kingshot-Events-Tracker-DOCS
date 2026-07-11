# Kick a Player from the Alliance

Use **Kick** when a player left the alliance but should still exist in the kingdom. This is the safe cleanup path for roster changes.

::: warning TODO screenshot

**Page:** Kick a Player from the Alliance  
**Role:** User with access to this page  
**State:** Open the screen at the point described in the steps below  
**What should be visible:** The complete page, the action being explained, and any warning or confirmation message  
**Suggested filename:** `images/player-kick.png`

:::

## Why kick is different from delete

Kicking a player:

- removes them from the current alliance roster
- keeps their kingdom identity
- keeps their history
- keeps old results and nickname history

Deleting is much heavier. If the player only left the alliance, kick them instead.

## Kick from the Players page

1. Open **Players**.
2. Find the player.
3. Use the **Kick from alliance** action.
4. Confirm the warning.

The confirmation reminds you that the player's kingdom identity and history will stay intact.

## What changes after the kick

- The player no longer belongs to the current alliance.
- The current alliance membership ends.
- The membership history records the change as `kicked`.
- Event and analytics history are still preserved.

## When kick will not help

Do not use kick when you are trying to:

- remove the player from the kingdom entirely
- fix a wrong role assignment for a user account
- move the player to another alliance right away

For a move between alliances, use the player edit or profile flow that records a transfer.

## Related

- [How Alliance Membership Works](../reference/alliance-membership.md)
- [Delete & Restore a Player](delete-restore-player.md)
- [Read a Player Profile](player-profile.md)
