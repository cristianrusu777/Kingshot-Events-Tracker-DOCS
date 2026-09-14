---
title: 'Local Castle Planner for Guests'
description: 'Build a browser-only Castle schedule with participant availability, resources, fixed half-hour slots, and backups.'
product: 'kingshot-events'
audience: 'Guests and signed-in planners'
experienceLevel: 'Intermediate'
featureArea: 'Castle Positions'
lastReviewed: '2026-09-14'
verifiedAgainstSourceCommit: 'bea100eeccd39f9d71fc12820b2791c48adfcb8f'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Local Castle Planner for Guests

The **Local Castle Planner** is a browser-only scratchpad for Guests and signed-in users. It is useful for a small personal schedule that does not need applications, account roles, or an official published version.

::: warning No server persistence
The plan has no server persistence or account sync. Clearing site data, resetting the plan, or changing browsers can remove it. Use **Export backup** when the plan matters, and keep the exported file private.
:::

## Build the schedule

1. Open [Local Castle Planner](https://ralyvora.com/games/kingshot/castle-positions/helper) and name the plan.
2. Choose one of five days and a Castle Position.
3. Add local participants.
4. Assign with **Assign next**, click controls, or drag and drop.
5. Reserve any slot that should remain unavailable.
6. Review availability conflicts and resource context.
7. Choose **Export backup**.

Every day has **48** fixed **30-minute** slots in UTC. Slot duration cannot be changed. You can add up to six local positions and 200 local participants.

An assignment can be moved or swapped. A reserved destination must be released first. The same participant cannot occupy simultaneous slots across positions.

## Add participant details

A local participant can include:

- display name and avatar;
- alliance or origin label;
- kingdom and game ID;
- an optional planner note;
- available resource values;
- availability for each of the five days;
- a preferred UTC time and day-specific note.

Availability can be **Any time**, **Specific time**, or **Not available**. A specific choice must include a preferred UTC slot before the participant can be saved. **Assign next** uses the preferred slot when it is free, otherwise it finds another open slot.

The planner marks an assignment that conflicts with a participant's unavailable day or specific-time preference. The warning does not silently move the person.

These participants are local labels. They do not create or update a server player, alliance, kingdom, application, or official Castle record.

## Plan resources across five days

Open **Resources & calculators**, choose a resource, and enter the real stock. Allocate it across the five days. Available, allocated, and remaining totals make an over-budget plan visible.

Speedups use minutes internally. The days, hours, and minutes converter helps enter them. General speedups are one shared budget, so do not count the same minutes as construction, research, and training stock.

Use a custom resource for an unlisted item. Choose items or minutes and optionally enter a points rate. Participant-level resource values appear on their planner cards and help compare candidates, but they do not change the plan-wide stock automatically.

## Back up, restore, or reset

**Export backup** downloads the current browser plan. **Import backup** replaces the local plan with a compatible exported file, so inspect the current work before importing.

Backups can contain names, IDs, notes, availability, and resource amounts. Do not put passwords, private messages, or unrelated personal data in the plan.

**Reset** clears the browser plan and calculator after confirmation. Staff cannot recover a cleared local plan.

## Choose the right Castle tool

| Need | Tool |
| --- | --- |
| A quick personal schedule without registration | Local Castle Planner |
| Applications, review, shared scheduling, and publication | [Managed Castle Positions](/kingshot-events/castle-positions/) |
| Someone in the managed schedule who should not become a roster player | [Temporary participant](/kingshot-events/castle-positions/temporary-participants) |
