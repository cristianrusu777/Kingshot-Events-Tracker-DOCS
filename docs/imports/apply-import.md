# Accept Rows (Apply an Import)

Accepting is the moment an import stops being review-only and starts writing real data.

> Screenshot placeholder: import-conflict.png
> Screenshot placeholder: import-accept-all.png

## What accept does

When you accept a row, the app can:

- save it against a matched player
- create a new player and then save it
- overwrite an existing result, if the row is a conflict and you approve it

That is why accept is the real "apply" step.

## Created vs matched

- **Matched** means the row linked to a player already in the tracker.
- **Created** means the row created a brand-new player during accept.

That difference appears again in the row status after save.

## Conflict rows

If a row is marked **conflict**, a result already exists for that player and event context.

Accepting the row means:

- you are choosing to overwrite the existing saved result
- the import change trail records that overwrite

Do not accept conflict rows blindly.

## Power and role safety guards

For alliance-player style imports, the tracker uses safety rules when applying updates:

- a valid existing power is not replaced by an invalid or missing OCR power
- role, rank, and membership-style updates only apply when the player belongs in the same alliance context
- if the player is currently in a different alliance, the import can still update usable power data, but it does not hijack membership into the wrong alliance

## Accept one vs accept all

- use **Accept** when only one row is ready
- use **Accept all** when you trust the remaining attention rows enough to save them in one sweep

If some rows fail, the page reports how many were accepted and how many still need manual work.

## Related

- [Review Import Rows](review-rows.md)
- [Fixing Import Mistakes](import-mistakes.md)
- [Delete an Import & Roll Back Its Changes](delete-and-rollback.md)
