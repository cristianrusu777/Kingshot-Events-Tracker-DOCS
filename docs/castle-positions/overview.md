# Castle Positions

Castle Positions is a kingdom-scoped workflow for KvK castle appointments. It collects applications, availability and resources; gives the schedule team a review board and a planning preview; and shows players the published result. It is separate from [KvK Prep](../how-to/kvk-prep.md), which compares power rather than arranging appointments.

::: info
The system creates **placement suggestions**, not automatic final appointments. A King or Minister of Justice reviews the result, can change it, then saves, finalizes and publishes it.
:::

## Start here

<figure class="castle-screenshot castle-screenshot--standard">
  <a href="/images/castle-positions/castle-dashboard-dark.png" target="_blank"><img src="/images/castle-positions/castle-dashboard-dark.png" alt="Castle Positions dashboard in dark mode" loading="lazy"></a>
  <figcaption>The dashboard shows the selected kingdom, cycle status, application count and the navigation into review, scheduling, stages and resources.</figcaption>
</figure>

| You are | Start with | Then |
| --- | --- | --- |
| Applicant | [Apply for a position](applying.md) | [Track your status](application-statuses.md) |
| Minister of Justice | [Management guide](managing.md) | [Review candidates](reviewing.md) and [plan a stage](schedule-planner.md) |
| King | [Roles and access](roles-and-access.md) | Follow the Minister workflow in your own kingdom |
| Supreme Admin | [Roles and access](roles-and-access.md) | Select the kingdom before making a platform-level correction |

## Lifecycle

<div class="castle-diagram">

```mermaid
flowchart TD
  A[Configure cycle, stages and positions] --> B[Open applications]
  B --> C[Applicant submits or updates request]
  C --> D[Review identity, status and resources]
  D --> E[Accept, reject, request review or keep standby]
  E --> F[Build draft schedule]
  F --> G[Review suggestions and manual changes]
  G --> H[Finalize and publish]
  H --> I[Player views published appointment]
  I --> J[Reopen, revise and publish a new version if needed]
```

</div>

## Concepts that prevent mistakes

- **Stage** is one scheduled event day or section of the cycle.
- **Position** is a schedule column within a stage.
- **Slot** is a position at one UTC time. Its capacity says how many appointments fit in that cell.
- **Application** is the player’s request; **assignment** is the administrator’s schedule decision.
- **Draft** and **finalized** schedules are not the published player-facing result.

Next step: applicants should read [Applying](applying.md); schedule teams should start with [Managing Castle Positions](managing.md).

For the verified automatic decision process, read [Candidate Selection and Scheduling Logic](selection-algorithm.md). See also the [15–16 July system update](../updates/2026-07-15-16-system-update.md).
