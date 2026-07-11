# Where Did My Data Go?

When data looks missing, use these four questions in order before assuming it was destroyed.

## 1. Was it deleted?

Check the [Recycle Bin](../how-to/recycle-bin.md) first.

If the item is there:

- restore it directly if your role allows that
- or use [Request & Approve Restores](../how-to/restore-requests.md) if you need an approver

Most deletes in the app are soft deletes, not permanent destruction. See [What "Delete" Really Does](../reference/soft-delete.md).

## 2. Am I in the wrong context or scope?

Look at the context banner and the current page scope before doing anything else.

Common causes:

- the wrong kingdom is selected
- the wrong alliance is selected
- you are using an old bookmark into a page outside your role's scope

Use [Finding Your Way Around](../getting-started/navigating.md) and ["You don't have access"](../getting-started/access-denied.md).

## 3. Was an import rolled back?

If the missing data came from an import, check whether that import was deleted with results and moved to `rolled_back`.

If that happened:

- the written results may have been intentionally undone
- the import can be restored as a reviewable draft through [Restore a Deleted Import](../imports/restore-import.md)
- if you still want those rows live again, review them and accept them again

The safe rollback behavior is described in [Delete an Import & Roll Back Its Changes](../imports/delete-and-rollback.md).

## 4. Is the session locked?

Sometimes the data is not gone. The page is simply locked against changes.

If the instance is locked:

- imports are blocked
- edits are blocked
- you need the unlock flow in [Locked Instances & Unlock Requests](../how-to/session-lock.md)

## If none of the above explains it

File a report so a senior role can investigate:

- [File & Track Reports](../how-to/reports.md)
