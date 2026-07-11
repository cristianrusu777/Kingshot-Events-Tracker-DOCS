# Safety Rules You'll Run Into

The app has a set of built‑in guardrails that block certain dangerous actions — even for admins. They exist so nobody can accidentally lock everyone out, delete the wrong account, or destroy a shared default. When one of these kicks in, you'll see a clear message and the action is stopped.

None of these are bugs. This page explains each rule, the message you'll see, and the right way to get what you wanted.

## 1. You can't delete your own account

**What's blocked:** deleting the user account you're currently signed in with.

**Message you'll see:** *"You cannot delete your own account."*

**Why:** it prevents you from removing yourself by mistake and getting locked out.

**What to do instead:** if your account genuinely needs to be removed, ask another admin to do it for you.

## 2. The last Supreme Admin can't be removed

**What's blocked:** deleting, deactivating, or demoting the **last remaining active Supreme Admin**. This applies whether you try to delete that account, switch off its active status, or change its role away from Supreme Admin.

**Message you'll see:** *"At least one active supreme admin must remain."*

**Why:** the platform must always have at least one top‑level administrator. If the last one could be removed, no one could manage the platform afterward.

**What to do instead:** appoint and confirm **another** Supreme Admin first. Once a second active Supreme Admin exists, the original can be changed or removed.

## 3. You can't remove your own last critical role

**What's blocked:** taking away your *own* final senior role when it would leave you without the access you need — the app calls this being "locked out."

**Message you'll see:** *"You cannot remove your own role because it would lock you out."*

**Why:** it stops you from stripping your own access and being unable to undo it.

**What to do instead:** have another admin make the change, or make sure you still hold another suitable role first.

## 4. A King can only delete users (and alliances) they created

Kings have a strict **ownership** boundary. A King can manage their kingdom, but not freely delete any account or alliance in it.

**When deleting a *user*, a King is blocked if:**

- The user **registered independently** (self‑registration).
  *Message:* "You cannot delete users who registered independently."
- The user is a **Supreme Admin**.
  *Message:* "Cannot delete supreme admin users."
- The user was **not created by that King**.
  *Message:* "You can only delete users that you created."

**When deleting an *alliance*, a King is blocked if:**

- The alliance was **not created by that King**.
  *Message:* "…not created by you."
- The alliance was **created independently** (self‑service).
  *Message:* "You cannot delete alliances that were created independently."

**Why:** it keeps a King from removing people or groups they don't own — protecting self‑registered members, other admins' work, and independent alliances.

**What to do instead:** ask the Supreme Admin, who isn't bound by the ownership rule, to handle removals that fall outside what you created.

> **Note on grants and kingdom access:** a King's authority is confined to their **own** kingdom. Kingdom‑level actions — including offering premium plan **grants** to alliances — only work for the kingdom the King runs; trying to reach another kingdom is refused. How many alliances a King can grant to is decided by the kingdom's plan, not a fixed number. Grants are covered fully in the subscriptions section.

## 5. Default events can be edited but not deleted

**What's blocked:** deleting any of the built‑in **default event templates** (Bear Trap, Alliance Brawl, and the others that ship with the app).

**Message you'll see:** *"Default events can be edited, but they cannot be deleted."*

**Why:** the defaults are shared starting points for everyone. You're free to adjust their settings to fit your kingdom, but removing them would break that shared foundation.

**What to do instead:** if a default event doesn't fit, **edit** it, or create your **own** custom event alongside it (custom events can be deleted freely). Editing templates and creating custom events is covered in the events section.

## What these rules have in common

Every rule above answers the same question — *"what if someone does the one thing that can't be undone?"* — by simply not allowing it. If you hit one of these messages, you haven't done anything wrong; the app is protecting the platform. The path forward is almost always **"have the right person do it"** or **"set up a replacement first."**

## Related

- ["You don't have access"](../getting-started/access-denied.md) — other refusals and what they mean.
- [What "Delete" Really Does](../reference/soft-delete.md) — why most "deletes" are recoverable anyway.
- [Roles Explained](overview.md) — who sits where.
