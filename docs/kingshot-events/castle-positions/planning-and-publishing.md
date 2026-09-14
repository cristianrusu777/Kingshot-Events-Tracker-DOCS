---
title: 'Planning, Scheduling, and Publishing'
description: 'Build a Castle Position draft with grid or list controls, validate assignments, and publish the participant schedule.'
product: 'kingshot-events'
audience: 'Authorized kingdom managers'
experienceLevel: 'Intermediate'
featureArea: 'Castle Position scheduling'
lastReviewed: '2026-09-14'
verifiedAgainstSourceCommit: 'bea100eeccd39f9d71fc12820b2791c48adfcb8f'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Planning, Scheduling, and Publishing

The scheduling workspace turns reviewed candidates into a dated Castle Position schedule. Select the correct kingdom, application cycle, and stage before moving anyone.

## Choose grid, list, or focused work

The grid shows configured Castle Positions as columns and UTC times as rows. A cell can be available, occupied, reserved, or locked. Candidate cards show identity, priority, relevant resources, preferred time, notes, and visible conflicts.

The chronological list view shows assigned appointments with UTC time, local-time context, player, position, time fit, lock state, and actions to move earlier or later. It is useful on narrow screens and for reviewing the stage in time order. Copy the list when you need a plain-text working view.

Use focused full-screen mode for a larger scheduling surface. On mobile, toolbars and actions stack, tables remain horizontally scrollable, and primary actions stay reachable. A small screen does not change validation or publication rules.

## Build and save a draft

1. Confirm stage date, positions, slots, and required resources.
2. Review accepted candidates and their recorded availability.
3. Place a compatible candidate by click or drag controls.
4. Inspect overlap, capacity, duplicate, time-fit, and eligibility feedback.
5. Reserve a slot that must remain intentionally empty, or add a named temporary participant where supported.
6. Lock an assignment that suggestions and ordinary moves must preserve.
7. Use suggestions as proposals, then accept, change, or ignore each result.
8. Save the draft and wait for the saved state.

An empty earlier slot followed by a filled later slot can produce a gap warning. Resolve, reserve, or deliberately keep the gap according to the visible controls. A draft is not participant-facing merely because it was saved.

## Read time fit and conflicts

Time fit compares the slot with the application's recorded choice. A preferred or compatible time is different from a distant or conflicting assignment. Do not widen an applicant's availability because it would make the board easier to fill.

Locked assignments cannot be moved earlier or later until unlocked. Reserved slots must be released before a participant can replace them. If a participant would overlap another appointment, correct the conflict before publishing.

## Suggestions and minimum-change planning

Suggestions use only reviewed candidates, recorded availability, eligibility, resources, locks, current placements, and configured ordering. They do not know offline agreements and cannot guarantee political fairness.

Preserve valid manual placements and locks before requesting suggestions. Use a minimum-change approach when a published or agreed board already exists and unnecessary moves would create confusion.

## Validate and publish

Run the visible validation or review summary. Resolve invalid assignments and ambiguous conflicts, then choose **Publish** when the complete draft is ready.

Publication creates the participant-facing schedule version and can trigger configured notices. It does not make future correction impossible. For a later change:

1. start from the current board;
2. preserve unaffected locks;
3. make the smallest supported correction;
4. save and validate;
5. publish the successor version;
6. verify the affected participant view.

The latest published version is authoritative. Email is a convenience and can fail or arrive late, so it is not the schedule record.

## Application adjustments remain visible

If leadership corrects an applicant's identity, resource, or time information, review the adjustment history and note before scheduling. The original submission remains available for comparison. A correction does not bypass eligibility or publication validation.

For application decisions, see [Review Workflow](/kingshot-events/castle-positions/review-workflow). For applicant-facing states, see [Statuses and Changes](/kingshot-events/castle-positions/statuses-and-changes). The [Local Castle Planner](/kingshot-events/castle-positions/local-planner) is browser-only and cannot publish this shared schedule.
