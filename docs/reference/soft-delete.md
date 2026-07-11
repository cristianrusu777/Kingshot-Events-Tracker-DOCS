# What "Delete" Really Does

If you've ever deleted something and felt a jolt of panic — *did I just lose all that data?* — this page is for you. In the Kingshot Event Tracker, **deleting almost never means "gone forever."** Most deletes are reversible.

## Soft delete: the safety net

When you delete a player, event, import, alliance, or kingdom, the app performs a **soft delete**. That means the item is:

- **Hidden** from the normal lists and pages, so it's out of your way, but
- **Kept** behind the scenes, in the **Recycle Bin**, where it can be brought back.

So a delete is really more like "move to the bin" than "shred." The data is still there until someone deliberately removes it for good.

## The Recycle Bin

The Recycle Bin is where soft‑deleted items wait. From there, someone with the right permission can:

- **Restore** an item — putting it back where it was, as if it hadn't been deleted, or
- **Purge** an item — permanently removing it.

Who can do what:

- **Viewing and restoring** the bin is available to senior roles (Supreme Admin, King, and Alliance Leader, within their scope).
- **Purging** — the permanent removal — is limited to the most senior roles (Supreme Admin and King).
- **Lower roles** (like Co‑Leaders) who can't restore directly can file a **restore request** for an admin to approve. Restore requests are covered in a later section.

## Purge: the one that's forever

**Purging is the only action that truly destroys data**, and it cannot be undone. That's why it's restricted to senior roles and comes with a warning. Treat purge as a rare, deliberate act — cleaning out things you're certain will never be needed again.

If you're not sure, **don't purge** — just leave the item in the bin. It isn't hurting anything there.

## Undoing an import is a bit different

Screenshot and spreadsheet **imports** have their own kind of undo, called a **rollback**. If you applied an import and then realize it was wrong, rolling it back removes the results that import created — putting your data back the way it was. The import itself can also be restored from the bin and reviewed again. The full import undo story (delete → rollback → restore → re‑apply) is covered in the imports section.

## So, before you panic

If data seems to have vanished, run through this quick checklist:

1. **Did someone delete it?** Check the Recycle Bin — it may be sitting there, ready to restore.
2. **Are you in the right [context](../getting-started/glossary.md#context-context-banner)?** Data is scoped to your current kingdom/alliance; the item might just be out of your current view.
3. **Was an import rolled back?** Its results may have been undone on purpose.
4. **Is an event instance locked?** Locked instances hide the ability to change results, which can look like missing data.

Nine times out of ten, the data isn't gone — it's in the bin, out of scope, or intentionally undone.

## Related

- [Glossary: soft delete, Recycle Bin, purge, rollback](../getting-started/glossary.md#deleting--recovering)
- [Safety Rules You'll Run Into](../roles/protection-rules.md)
- ["You don't have access"](../getting-started/access-denied.md)
