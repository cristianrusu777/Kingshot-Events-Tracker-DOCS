---
title: 'Castle Position Statuses, Changes, and Notifications'
description: 'Understand application, assignment, publication, and schedule-change states.'
product: 'kingshot-events'
audience: 'Applicants and managers'
experienceLevel: 'Intermediate'
featureArea: 'Castle Position statuses'
lastReviewed: '2026-08-01'
---

# Castle Position Statuses, Changes, and Notifications

Castle Positions has separate application and schedule states. **Accepted** describes an application; **scheduled** describes a placement; **published** describes the schedule version participants can use.

## Application period and application states

- **Open**: applications can be submitted or updated as the form allows.
- **Provisionally taken**: some times already have demand, but the form may still allow a request with a note.
- **Closed**: ordinary application changes are unavailable.
- **Submitted** or **linked**: received for review, with linked confirming the player association.
- **Standby**, **needs review**, or **under review**: identity or eligibility needs manager attention.
- **Accepted**: eligible for scheduling, without a guaranteed slot.
- **Rejected**: excluded from the current candidate plan unless reviewed again.

## Planner and participant states

- **Available**: an empty schedulable slot.
- **Occupied**: a player is assigned.
- **Reserved**: intentionally kept without a player.
- **Locked**: protected from ordinary moves or suggestions until a manager unlocks it.
- **Scheduled**: placed in the current draft or published schedule. Check publication state before relying on it.
- **Published**: visible participant version.
- **Changed**: an already communicated assignment was moved, removed, or had its time or stage changed.

## Participant perspective

Open **View my castle positions** after submission and again after publication. Your requested time remains provisional until the published schedule shows it. If a manager changes the schedule, the participant view reflects the latest published version.

Configured email can notify a player that an assignment was scheduled, removed, moved to another stage, or changed time. Email is a convenience, not the schedule record. Delivery can fail or arrive late, so confirm in the platform.

## Manager perspective

Save draft changes before publishing. After a published change, verify the new published version and the affected participant view. A test email or configured sender does not prove every participant received a message.

<VisualReference title="Castle status and change landmarks">
Distinguish the application badge from the schedule version.

<template #items>

- Application-period banner and applicant review status.
- Draft assignment state, slot state, lock, conflict, and unsaved or saved feedback.
- Published version or schedule-published marker.
- Participant assignment with stage, UTC time, position, and changed or removed notice.

</template>
</VisualReference>

If an update is missing, reload the correct kingdom instance and confirm it was published, not merely saved as a draft.
