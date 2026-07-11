# Delete & Restore a Player

Deleting a player is the heavy option. It removes the player from normal views at the kingdom level. If the person only left an alliance, use **Kick** instead.

> Screenshot placeholder: player-delete-impact.png

## Use kick first when possible

If the player still belongs to the kingdom and only left the alliance, use [Kick a Player from the Alliance](kick-player.md). That keeps the identity active while removing the current alliance link.

## Check the impact before deleting

When you delete from the **Players** page, the app checks whether the player already has important history such as:

- results
- review rows
- nickname history
- membership history
- API sync jobs
- profile-link history

If that history exists, the app asks for a stronger confirmation with the exact player name.

## Delete the player

1. Open **Players**.
2. Find the player.
3. Use the delete action.
4. Confirm the warning.

After deletion:

- the player is hidden from normal views
- the current alliance link is cleared
- the player can still be restored later

## Restore the player

If your role can see deleted players directly:

1. Turn on **Show deleted** if needed.
2. Find the deleted player.
3. Select **Restore**.

Restore may be blocked if another active player now uses the same name in that kingdom.

If you do not have a direct restore path in the player list, use [Use the Recycle Bin](recycle-bin.md) or ask for a restore through the path your role is allowed to use.

## Related

- [Kick a Player from the Alliance](kick-player.md)
- [Use the Recycle Bin](recycle-bin.md)
- [What "Delete" Really Does](../reference/soft-delete.md)
- [How Alliance Membership Works](../reference/alliance-membership.md)
