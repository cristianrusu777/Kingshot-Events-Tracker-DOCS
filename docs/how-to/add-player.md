# Add a Player

Use the player form when someone should be tracked in the kingdom, even if you do not have import data yet. You can create the player fully by hand or fill part of the form from the game API first.

> Screenshot placeholder: players-add.png

## Open the form

Go to **Players** and use the **Create Player** section.

## Fill in the basics

The form can include:

- **Kingdom**
- **Alliance**
- **Player name**
- **Kingshot profile ID**
- **Avatar URL**
- **Power**
- **Level**
- **Game rank**
- **TC level**
- **Alliance role**
- **Alliance status**
- **Notes**

The only must-have fields for a normal manual add are the correct kingdom and the player name.

## Use the Sync button if you have a profile ID

If you know the **Kingshot profile ID**:

1. Enter it.
2. Select **Sync**.
3. Review the fields the app fills in.
4. Save the player.

If sync does not return data, you can still finish the player manually.

## Save the player

Select **Add player** when the form is ready.

After saving:

- the player appears in the directory
- the player can be opened from the list
- alliance membership starts if you placed the player into an alliance

## Duplicate-name situation

If a player with the same name already exists in the kingdom without an alliance, the app can offer to attach that existing player to the alliance instead of making a duplicate record.

## Good practice

- Add a profile ID whenever you have it. It makes later sync work much better.
- Use notes for context that other admins will understand later.
- If the player only changed alliance, do not create them again. Move or kick them as needed instead.

## Related

- [Browse & Filter Players](players-directory.md)
- [Edit Player Details](edit-player.md)
- [Sync Players from the Game API](player-sync.md)
- [How Alliance Membership Works](../reference/alliance-membership.md)
