# Import Lifecycle Tests

Use these tests to confirm the full safe-import lifecycle for each import type.

## Test 1. Wrong alliance context guard

1. Open the Imports page with a role that can upload alliance member screenshots.
Expected result: the page opens normally.
2. Choose the **Alliance players / member list** import type.
Expected result: alliance context is required.
3. Leave alliance unselected and try to continue.
Expected result: the flow is blocked until an alliance is selected.
4. Select an alliance and try again.
Expected result: the upload flow becomes valid.

## Test 2. Alliance player import lifecycle

1. Upload a valid alliance member screenshot.
Expected result: the import reaches review and no live player data is written yet.
2. Edit one staging row before accepting.
Expected result: only the staging row changes.
3. Accept one row.
Expected result: the row moves to a saved state and the player record is updated or created.
4. Verify the player in the directory.
Expected result: the written player data matches the accepted row.
5. Use **Delete import & rollback**.
Expected result: the import moves to `rolled_back`.
6. Verify the rollback outcome.
Expected result: results created by this import are removed; overwritten values are only restored where the documented rollback rules allow it; unrelated newer data is left intact.
7. Restore the import from the Recycle Bin.
Expected result: the import returns as `restored_draft`.
8. Re-open the review page and accept again.
Expected result: the live changes can be written again from the restored draft.

## Test 3. Event-result screenshot lifecycle

1. Upload a valid event-result screenshot into an unlocked instance.
Expected result: the import reaches review and no live result is written yet.
2. Edit one row in review.
Expected result: only the staging row changes.
3. Accept one row.
Expected result: a live result is written for that player and event context.
4. Verify the result on the instance or player view.
Expected result: the saved result is visible.
5. Delete the import with rollback.
Expected result: the import becomes `rolled_back`.
6. Verify the result state.
Expected result: the import-created result is removed, while unrelated data stays intact.
7. Restore from the Recycle Bin.
Expected result: the import returns as `restored_draft`.
8. Accept the row again.
Expected result: the result is written again.

## Test 4. Spreadsheet lifecycle

1. Upload a valid spreadsheet file.
Expected result: the spreadsheet enters the same review-first flow.
2. Edit one staging row.
Expected result: only the staging row changes.
3. Accept one row.
Expected result: the corresponding live player or result update is written.
4. Delete the import with rollback.
Expected result: the import becomes `rolled_back`.
5. Restore the import.
Expected result: it returns as `restored_draft`.
6. Re-accept the row.
Expected result: the live change can be written again.

## Test 5. Locked-session rejection

1. Try to accept or import into a locked event instance.
Expected result: the write is blocked with **"This event instance is locked. Request unlock or ask a leader to unlock it."**
