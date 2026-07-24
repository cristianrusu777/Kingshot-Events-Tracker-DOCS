# Roles Explained

Everyone in the Kingshot Event Tracker has a **role**. Your role decides what you can see, what you can change, and how far your reach extends. This page explains the five built‑in roles in plain language.

Throughout the app and these docs we use the names you see on screen: **Supreme Admin**, **King**, **Alliance Leader**, **Co‑Leader**, and **Alliance Player**.

## The five roles at a glance

Roles form a ladder, from the widest reach to the narrowest. Each one can do everything sensible within its **[scope](../getting-started/glossary.md#scope)** - global, one kingdom, or one alliance.

```
Supreme Admin      ── the whole platform (all kingdoms)
   └── King         ── one kingdom and its alliances
        └── Alliance Leader   ── one alliance
             └── Co-Leader     ── helps run one alliance
                  └── Alliance Player  ── views one alliance's data
```

### Supreme Admin
The top of the platform. Runs everything: all kingdoms and alliances, users, roles, subscription plans, and global settings. Some powerful controls (like managing subscription plans, suspending groups, and configuring support links) are **Supreme‑Admin‑only**, even for other admins. If you need something that no one else can do, this is who you ask.

### King (Kingdom Admin)
Runs **one kingdom** and everything inside it: its alliances, players, events, imports, and the users they create. A King can grant premium plans to their alliances and manage their kingdom's data end to end - but cannot reach other kingdoms, and cannot do the Supreme‑Admin‑only things. Kings also have a special ownership rule about the users and alliances they created (see [Safety Rules](protection-rules.md)).

### Alliance Leader
Runs **one alliance**. Manages that alliance's players, events, results, and imports, handles its reports, and looks after its subscription/usage through the **My Alliance** page. A Leader can accept or decline a premium plan offered by their King. Leaders can't see kingdom‑wide analytics or manage other alliances.

### Co‑Leader
A leader's helper for **one alliance**. Can do the everyday tracking work - add and edit players, enter results, upload and review imports, file reports - but **cannot delete** things, manage settings, or view the audit logs. Think of it as "hands‑on help, without the risky buttons."

### Alliance Player
A **view‑only** member. Can read the dashboards, analytics, and rewards they're allowed to see, and can file reports - but cannot add, edit, delete, or import anything. (Internally this role is called "viewer," but the app labels it **Alliance Player** - that's the name to use.)

## What each role can do (quick comparison)

| Ability | Supreme Admin | King | Alliance Leader | Co‑Leader | Alliance Player |
|---|:--:|:--:|:--:|:--:|:--:|
| View dashboards & analytics | ✅ (all) | ✅ (kingdom) | ✅ (alliance) | ✅ (alliance) | ✅ (scoped) |
| Add / edit players | ✅ | ✅ | ✅ | ✅ | - |
| Delete / restore players | ✅ | ✅ | ✅ | - | - |
| Upload & review imports | ✅ | ✅ | ✅ | ✅ | - |
| Delete imports / roll back | ✅ | ✅ | ✅ | - | - |
| Manage events & templates | ✅ | ✅ | ✅ | - | - |
| Manual data entry | ✅ | ✅ | ✅ | ✅ | - |
| Recycle Bin (view) | ✅ | ✅ | ✅ | - | - |
| Recycle Bin (purge permanently) | ✅ | ✅ | - | - | - |
| Manage users & assign roles | ✅ | ✅ (own creations) | - | - | - |
| Manage roles & permissions | ✅ | - | - | - | - |
| Approve registrations | ✅ | ✅ | ✅ | - | - |
| View audit logs | ✅ | ✅ | ✅ | - | - |
| Request a subscription | ✅ | ✅ | ✅ | ✅ | - |
| Manage plans / suspend groups | ✅ | - | - | - | - |
| Grant premium to alliances | ✅ | ✅ (own kingdom) | - | - | - |
| Accept / decline a grant offer | ✅ | - | ✅ (own alliance) | ✅ (own alliance) | - |

This is a summary - each area has its own detailed guide in later sections.

## A note on custom roles

The five roles above are the **built‑in** ones. A Supreme Admin can also create **custom roles** with a hand‑picked set of permissions. If your kingdom uses custom roles, your exact abilities might not match a built‑in role precisely - but the *scope* idea still holds, and the app always tells you when you don't have access.

If you're ever unsure what you can do, the safest sources are the app itself (menu items you can see) and, when in doubt, whoever is one level up from you.

## Related

- [Holding Multiple Roles](../getting-started/glossary.md#multiple-roles) - combining assignments (detailed guide in a later section).
- [Safety Rules You'll Run Into](protection-rules.md) - the guardrails every admin should know.
- ["You don't have access"](../getting-started/access-denied.md) - when a role stops you.
