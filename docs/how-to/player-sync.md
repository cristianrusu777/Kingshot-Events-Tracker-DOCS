# Sync Players from the Game API

Player sync is an optional helper that fills or refreshes player details from the Kingshot game API. It is useful, but it is environment-dependent: some installations have it fully configured, and some do not.

## Important limitation

If your environment does not have the Kingshot API client configured, or if the external service is unavailable, sync may fail or be unavailable. Manual player management still works either way.

## What sync can update

When sync works, it can refresh fields such as:

- player name
- profile ID link
- avatar
- kingdom reference
- level
- detailed level display
- power
- game rank
- TC level

## Sync while creating or editing

From the player form:

1. Enter a **Kingshot profile ID**.
2. Select **Sync**.
3. Review the filled fields.
4. Save the player.

If no data comes back, you can still save the player manually.

## Sync an existing player from the directory

In the **Players** list, linked players can show a sync action on their row. Use it when you want to refresh the stored profile.

The row may show states such as:

- `sync pending`
- `API syncing`
- `API synced now`
- `API sync failed`
- `synced ...`

## Sync from the full profile

The player profile also has a **Sync** action in **Profile Foundation**. This is helpful when you want to review the incoming changes before saving them.

## Background refresh behavior

The app can also queue background refresh jobs for players with profile IDs. In normal day-to-day use, you mostly notice this through changing sync labels and fresher player fields rather than through a separate queue screen.

## When sync will not work

- the player has no Kingshot profile ID
- the environment is not configured for API sync
- the external API is temporarily failing

In those cases, keep working manually and try again later if needed.

## Related

- [Add a Player](add-player.md)
- [Edit Player Details](edit-player.md)
- [Read a Player Profile](player-profile.md)
- [Browse & Filter Players](players-directory.md)
