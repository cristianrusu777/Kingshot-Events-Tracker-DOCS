---
title: 'Account, Profile, and Player Link'
description: 'Maintain account settings, connect the correct player identity, and understand review states.'
product: 'kingshot-events'
audience: 'All signed-in users'
experienceLevel: 'Beginner'
featureArea: 'Accounts and profiles'
lastReviewed: '2026-08-01'
---

# Account, Profile, and Player Link

Your account controls sign-in and personal settings. A player link connects that account to one shared kingdom player so personal analytics, rewards, appointments, and reading assignments can resolve the correct identity. The account and shared player remain separate records.

## Update account settings

Open **Profile**, review the displayed identity, locale or other supported preferences, and current player link. Change the available fields and choose **Save**. Wait for success feedback before leaving. Profile settings do not silently rewrite a player's alliance, event history, power, or public game profile.

## Request a player link

Search or select the existing player that represents you. Compare kingdom, alliance, current or former name, and Kingshot profile ID. The link can be accepted immediately or show pending review when identity confirmation is required. A pending link can limit personal features until an authorized reviewer accepts or rejects it.

If the wrong player is linked, use the visible correction path or ask the link reviewer. Do not create a duplicate player. Managers should correct the account-to-player association while preserving both player histories.

## Security and recovery

Use a unique password and sign out on shared devices. Use **Forgot password** when access is lost. Never send passwords, reset links, session tokens, or provider keys in support messages.

<VisualReference title="Account profile and link landmarks">
Account settings and shared player identity are displayed as separate sections.

<template #items>

- Account identity and editable profile preferences with **Save** feedback.
- Linked-player card with kingdom, alliance, name, and profile ID context.
- Player search or link-request action and pending, accepted, rejected, or missing-link state.
- Password recovery and sign-out routes without exposing credentials.

</template>
</VisualReference>

Related: [Player Linking and Synchronization](/kingshot-events/players/linking-and-sync) and [Access Problems](/kingshot-events/troubleshooting/access-problems).

## Purpose, workflow, and worked example

The account identifies the signed-in person; the local player carries roster and result history; the external profile supplies supported synchronized values. The workflow confirms account, searches by stable external ID, reviews ambiguous links, activates one eligible player link, and verifies synchronized versus manual fields. **Example:** Two players share a nickname. The external ID matches one, so the reviewer links that record and leaves the other separate. Output is one active link, not a name-based merge. Linking cannot grant management, rewrite event history, or guarantee every profile field synchronizes.
