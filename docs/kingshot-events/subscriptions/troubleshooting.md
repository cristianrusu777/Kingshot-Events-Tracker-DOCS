---
title: 'Subscription Troubleshooting'
description: 'Resolve a locked feature, pending request, missing grant, quota, expiry, or scope mismatch.'
product: 'kingshot-events'
audience: 'Members and managers'
experienceLevel: 'Intermediate'
featureArea: 'Subscriptions'
lastReviewed: '2026-08-01'
---

# Subscription Troubleshooting

## A premium tab is locked

Check the exact feature in the current effective-plan summary. Player and Custom Analytics are separate features. Confirm the active alliance, reload after a recent grant, and use **Request Subscription** only when no request is pending.

## A kingdom grant is missing

Confirm the manager allocated it to the intended alliance and that any alliance acceptance step completed. A grant to another alliance cannot be transferred by switching player context. Ask the kingdom subscription manager to review the visible grant status.

## A request is still pending

The request remains **submitted** or **under review** until an authorized reviewer acts. Follow the configured support instructions and do not duplicate payment or request submissions.

## Quota exceeded

Read the feature, used amount, limit, and reset information. Wait for reset, use an enabled alternative, or ask the subscription manager about plan capacity. Deleting prior records does not necessarily restore usage.

## Access stopped after a move or expiry

Alliance access belongs to the alliance. A moved player can lose the former alliance's direct or granted features. Expired, revoked, or suspended plans also lock new actions. Confirm the current scope and effective dates.

## What to send support

Use the approved support route and include the affected community label, feature name, visible request or grant status, usage message, and approximate time. Never include passwords, reset links, payment secrets, or provider keys.

<VisualReference title="Subscription problem checkpoints">
Capture the effective state without exposing private payment data.

<template #items>

- Active community and effective-plan source.
- Locked feature name or premium label.
- Request or grant timeline and acceptance state.
- Usage warning with limit and reset, plus configured support action.

</template>
</VisualReference>

## Decision checks, worked example, and limitations

Use the effective source label, grant status and dates, feature name, allocation, usage state, limited-mode notice, and suspension message as controls for diagnosis. **Example:** A grant is Offered but not Accepted, so the alliance remains Free. Acceptance is the required state transition; refreshing or selecting another scope cannot make the pending grant effective. If accepted access still fails, verify the feature is grant-eligible and allocated quota remains. A plan cannot grant role authority, a zero or disabled hard limit is not an exceeded quota, and cleanup cannot revive an expired grant. Include scope, plan source, feature, grant, quota, operation, and exact error in troubleshooting.
