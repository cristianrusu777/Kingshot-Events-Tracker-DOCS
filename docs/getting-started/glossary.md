# Glossary

Every term the rest of the documentation relies on, defined in plain language. When a guide uses one of these words for the first time, it links back here. Terms are grouped, but you can also just search the page.

---

## Structure & people

### Kingdom
The top‑level group in the app, matching an in‑game kingdom/server. A kingdom contains alliances, players, events, and its own settings. Run by a **King**.

### Alliance
A group of players inside a kingdom. Run by an **Alliance Leader** (with help from **Co‑Leaders**). Most day‑to‑day tracking happens at the alliance level.

### Player
A single governor tracked in the app. A player belongs to an alliance and carries details like power, alliance rank, status, and a [nickname history](#nickname-history).

### Nickname history
The record of the names a player has used over time. Because governors rename themselves, the app keeps past nicknames so it can still recognize a player on new screenshots and keep their results connected.

### Role
The label on your account that decides what you can see and do. The five built‑in roles are **Supreme Admin**, **King**, **Alliance Leader**, **Co‑Leader**, and **Alliance Player**. See [Roles Explained](../roles/overview.md).

### Assignment
The link between a user and a role *at a particular place*. For example, "Alliance Leader of \[ABC] alliance" is one assignment. A single person can have several assignments (see [multiple roles](#multiple-roles)).

### Scope
How far your access reaches: **global** (whole platform), **kingdom** (one kingdom), or **alliance** (one alliance). Your role's scope is why you can see some data but not other kingdoms' or alliances' data.

### Context (context banner)
The strip near the top of the screen that shows which kingdom and alliance you are currently working inside, plus your role. It tells you *where* your actions will apply. See [Finding Your Way Around](navigating.md).

### Multiple roles
Some people hold more than one role (for example, a King who is also a Co‑Leader somewhere). The app combines all of their assignments, and a stronger role is **never weakened** by also holding a lesser one. Covered in the roles section.

---

## Events & scoring

### Event template
A reusable *definition* of an event — its name, rules, scoring style, and stages. A template is the recipe. The app ships with several **default templates** (Bear Trap, Alliance Brawl, and others). You can edit templates, and you can create your own. Default templates can be edited but **not deleted** — see [Safety Rules](../roles/protection-rules.md).

### Event instance
One *actual occurrence* of an event on real dates — for example, "Bear Trap — March 3." Scores are recorded against an instance, not against the template. Also called a **session** in a few places.

### Stage
A sub‑round inside an event that has multiple parts (for example, each day of a multi‑day brawl). Some events have stages; many don't.

### Result
One player's score and/or participation in one event instance. Results are the numbers everything else (analytics, rewards) is built from.

### Participation
Whether a player took part in an event, separate from any score. Some events are scored by points; others only track who showed up.

### Snapshot
A saved picture of who was in an alliance at a certain moment — used to decide who counts as a participant in an event instance. Because members join and leave, the app can "freeze" the roster at the start of an instance so scoring stays fair.

### Reward eligibility
The app's calculation of which players earned a reward, based on **reward rules** you define. It flags eligible players so a leader can hand out prizes and mark them as handled.

---

## Imports & data entry

### Import
An upload of screenshots (or a spreadsheet) that the app reads to pull out player names and scores. An import is always a **draft first**: it stages the data for you to check and changes nothing about your real players or results until you accept it.

### Review row
One line inside an import — usually one player and their score — waiting for you to check it. Each review row has a status (for example, *ready*, *needs review*, *conflict*, *ignored*, *accepted*). You edit, accept, or ignore rows during review. Accepting a row is the moment its data is actually saved.

### Accept / apply
The action that turns a reviewed row into a real, saved result (and, for player imports, updates the player). Before you accept, nothing is written.

### Manual entry
Typing scores in yourself instead of uploading screenshots. Ends in the same place as an import: saved results on an event instance.

### OCR (image reading)
The technology that reads text and numbers out of your screenshots. The app offers a **free local** reader and a **premium (Gemini)** reader that you power with your own key. You don't need to know how it works — just which one you picked.

---

## Deleting & recovering

### Soft delete
"Deleting" most things (players, events, imports, alliances, kingdoms) doesn't erase them — it moves them to the **Recycle Bin**, where they can be restored. See [What "Delete" Really Does](../reference/soft-delete.md).

### Recycle Bin
The place where soft‑deleted items wait. People with the right permission can **restore** an item, or **purge** it (permanently remove it). Purging cannot be undone.

### Purge
Permanently removing a soft‑deleted item from the Recycle Bin. This is the one action that truly destroys data, so it's limited to senior roles.

### Rollback
Undoing an import that was already applied — the app removes the results that import created, putting things back the way they were. Covered in the imports section.

---

## Subscriptions & premium

> These terms were checked against the current app. A couple of common assumptions are **wrong**, so read carefully.

### Plan
A subscription tier that sets what a kingdom or alliance can do and how much it can store. There are free plans and premium plans, for kingdoms and for alliances.

### Free tier (fallback plan)
Every kingdom and alliance always has *at least* a free plan, even if nobody assigned one. This fallback works quietly in the background — you may never see it named, but it's why limits still apply to brand‑new alliances.

### Effective plan
The plan that **actually applies to you right now**. The app works it out from strongest to weakest source:

1. **Direct alliance plan** — the alliance has its own subscription.
2. **Accepted kingdom grant** — a King offered their kingdom's plan to the alliance and the alliance accepted (see [grant](#grant)).
3. **Direct kingdom plan** — for a kingdom itself, its own subscription.
4. **Free tier** — if none of the above apply.

**Important:** an alliance does **not** automatically inherit its kingdom's plan just because the kingdom has one. The King must *grant* the plan and the alliance must *accept* it. Without that, the alliance stays on its own plan (or the free tier).

### Grant
When a King offers their kingdom's premium plan to a specific alliance. The alliance's leader must **accept** the offer before it takes effect, and either side can later revoke it. How many alliances a King can grant to is **set by the kingdom's plan** (the free kingdom plan allows none; a premium kingdom plan allows several) — it is not a fixed universal number.

### Allocation
When a King divides up the kingdom plan's limits among the alliances they've granted to — for example, giving each granted alliance a share of the player limit. The shares can't add up to more than the kingdom's own limit.

### Quota / limit
The maximum amount of something (players, events, screenshots, storage, and so on) your plan allows. As you approach a limit you'll see warnings; passing it can block creating more.

### Suspension
A state where a kingdom or alliance is paused (usually for hitting limits or by an admin decision). A suspended group drops to limited, mostly read‑only access until it's unsuspended. The exact rules are covered in the subscriptions section.

### Premium feature
An extra capability unlocked by a premium plan (or by an accepted grant that includes it) — such as advanced analytics, extra charts, or recommendations. Locked features show an upgrade prompt instead of the feature.

---

## Admin & safety

### Audit log
The app's record of who did what and when. Sensitive details are hidden. Used by senior roles to review changes.

### Protection rule
A built‑in guardrail that blocks a dangerous action — like deleting your own account or removing the last Supreme Admin. See [Safety Rules You'll Run Into](../roles/protection-rules.md).

### Online indicator
A small marker on the Users list showing that a user was active recently (within the last few minutes).
