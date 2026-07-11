# Player Management Tests

Use this guide to confirm player CRUD, kicking, restore, sync, and the power-update safety guard.

## Test 1. Create and edit

1. Add a new player manually.
Expected result: the player appears in the directory.
2. Edit the player name or note.
Expected result: the updated value is saved and visible.

## Test 2. Kick from alliance

1. Kick a player from an alliance.
Expected result: the player leaves the current alliance roster.
2. Open the player's history or related views.
Expected result: the player's kingdom identity and history remain intact.

## Test 3. Delete and restore

1. Delete a player with no special blockers.
Expected result: the player disappears from normal lists.
2. Restore the player through the allowed restore path.
Expected result: the player returns to normal views.

## Test 4. Power-update guard

1. Prepare an existing player with a valid stored power value.
Expected result: the player shows that valid power before the import.
2. Import a row for that same player where OCR gives invalid or null power.
Expected result: the row can still be reviewed normally.
3. Accept the row.
Expected result: other safe updates apply, but the valid existing power is **not** overwritten by the invalid or null OCR value.

## Test 5. Sync from the game API

1. Run a sync on a player with a known profile ID.
Expected result: if the environment supports the Kingshot API, profile data refreshes.
2. Repeat in an environment without the API client or external availability.
Expected result: the sync is unavailable or fails gracefully, while manual editing still remains possible.
