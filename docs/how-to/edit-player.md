# Edit Player Details

Use the player edit form for normal maintenance work such as cleaning up names, updating power, fixing role text, or adding a missing profile ID.

## Where editing happens

You can start editing from the **Players** page by using the edit action on a row.

That form is best for quick updates such as:

- player name
- profile ID
- avatar link
- power
- level
- game rank
- TC level
- alliance role
- alliance status
- notes

## Save the change

1. Open the player from the list's edit action.
2. Change the fields you need.
3. Select **Save player**.

If the player has a Kingshot profile ID, you can also use **Sync** before saving to refresh the form from the game API.

## Moving alliance membership

Be careful with alliance changes:

- adding a player to an alliance from no-alliance state is fine
- moving a player from one alliance to another is a membership transfer, not just a text edit

For a true move between alliances, use the fuller profile flow in [Read a Player Profile](player-profile.md), where the app asks you to confirm the transfer.

## When editing is not enough

- If the player only left the alliance, use [Kick a Player from the Alliance](kick-player.md).
- If the player should disappear from normal views, use [Delete & Restore a Player](delete-restore-player.md).
- If you need nickname history or manual attributes, use the full player profile page.

## Related

- [Read a Player Profile](player-profile.md)
- [Manage Nickname History](nicknames.md)
- [Manual Attributes & Status Overrides](manual-attributes.md)
- [Kick a Player from the Alliance](kick-player.md)
