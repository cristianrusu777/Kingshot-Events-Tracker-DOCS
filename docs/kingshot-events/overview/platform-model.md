---
title: 'How the Platform Fits Together'
description: 'Understand the user-facing relationship between servers, kingdoms, alliances, players, and event results.'
product: 'kingshot-events'
audience: 'All users'
experienceLevel: 'Beginner'
featureArea: 'Scopes and records'
lastReviewed: '2026-08-01'
head:
  - - meta
    - name: 'robots'
      content: 'index,follow'
---

# How the Platform Fits Together
The information model follows the community context people already use:

**Server → Kingdom → Alliance → Player → Event participation and results**

A server identifies the wider environment. A kingdom contains alliances. Players are managed in an alliance context, and their event records are connected to configured event occurrences.

## Why scope matters

Your active scope controls which community information you are working with. A manager who belongs to more than one assignment should confirm the selected kingdom or alliance before adding players, reviewing an import, changing a schedule, or interpreting analytics.

## Event definitions and occurrences

An event template describes a reusable event. An event instance is one scheduled occurrence. Participation or score records belong to the occurrence, which is why dates and duplicate checks matter.

## Personal and shared information

Some pages show only the signed-in person's information. Others show alliance or kingdom information to authorized roles. Public surfaces such as selected Knowledge articles, the Lab, and Castle Position application links have their own availability rules.

<VisualReference title="Scope model orientation">
Read the active context from broadest to most specific.

<template #items>

- Server or kingdom identifier.
- Selected alliance when the task is alliance-specific.
- Player, event occurrence, or workflow item inside that scope.

</template>
</VisualReference>

## Related guides

- [scopes](/kingshot-events/kingdoms-and-alliances/scopes)
- [overview](/kingshot-events/events/overview)

## Practical depth

### Follow a record through the product

Identity and community scope lead to a player record. Event instances collect manual or imported evidence. Accepted records feed analytics, rewards, reports, and planning. A source correction can change a later summary after recalculation.

When a downstream value surprises you, preserve the Analytics filters or participant view and follow its drill-down to the owning player, result batch, schedule version, article revision, Lab profile, or grant. Correct that source through its state-aware workflow, then recalculate or republish. Do not manufacture another record to make the summary look right, and do not include credentials or unrelated player data in the recovery evidence.
