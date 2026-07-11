# Import & OCR Problems

Use the symptom below that is closest to what went wrong, then follow the linked fix.

## Names or numbers were read wrong

Use this path when OCR guessed badly.

- If the screenshot is ordinary and readable, first re-check the row on [Review Import Rows](../imports/review-rows.md).
- If the screenshot is hard to read, switch provider guidance on [Choose an Image-Processing Provider](../imports/choose-provider.md). Gemini is the better choice for smaller text, trickier formatting, or harder screenshots.
- If only a few rows are wrong, correct them before accepting on [Review Import Rows](../imports/review-rows.md).

## I uploaded to the wrong event, wrong date, or wrong alliance

Use the undo path, not manual patching.

1. If rows were **not** accepted yet, delete the import normally and upload again.
2. If rows **were** accepted, use [Delete an Import & Roll Back Its Changes](../imports/delete-and-rollback.md).
3. If you still want the import draft back afterward, use [Restore a Deleted Import](../imports/restore-import.md).

Important: rollback is only guaranteed at the level already documented in [Delete an Import & Roll Back Its Changes](../imports/delete-and-rollback.md). It does **not** promise to blindly rewind newer unrelated work.

## The import is stuck, failed, or did not finish cleanly

Start with the simplest safe path.

- If the import shows `failed`, use a fresh upload and check the provider choice first. See [How Screenshot Imports Work](../imports/overview.md).
- If you were looking for an in-place reprocess flow, read [Reprocess an Import](../imports/reprocess.md) carefully. In the currently documented behavior, the practical fix is usually a fresh upload instead of rebuilding the same import in place.

## I accepted the wrong rows

Use the rollback path if live data was written incorrectly.

- If the mistake is small and still in review, fix the row on [Review Import Rows](../imports/review-rows.md).
- If the wrong rows were already accepted and changed live data, use [Delete an Import & Roll Back Its Changes](../imports/delete-and-rollback.md).
- If you want the import back as a working draft after rollback, use [Restore a Deleted Import](../imports/restore-import.md).

## The page says the session is locked

This is not an OCR problem. It is an event-instance lock.

- Use [Locked Instances & Unlock Requests](../how-to/session-lock.md).
- After the unlock is approved, return to the import and continue.

## I do not know which guide I need

Use this order:

1. [How Screenshot Imports Work](../imports/overview.md)
2. [Review Import Rows](../imports/review-rows.md)
3. [Accept Rows (Apply an Import)](../imports/apply-import.md)
4. [Delete an Import & Roll Back Its Changes](../imports/delete-and-rollback.md)
