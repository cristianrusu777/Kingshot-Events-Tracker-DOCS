# Managing Castle Positions

This is the end-to-end Minister of Justice and King workflow.

<figure class="castle-screenshot castle-screenshot--standard">
  <a href="/images/castle-positions/castle-entry-media-dark.png" target="_blank"><img src="/images/castle-positions/castle-entry-media-dark.png" alt="Castle Positions media library in dark mode" loading="lazy"></a>
  <figcaption>The management surface includes a kingdom-scoped media library for Castle resource and hero artwork.</figcaption>
</figure>

<figure class="castle-screenshot castle-screenshot--standard">
  <a href="/images/castle-positions/castle-email-state-dark.png" target="_blank"><img src="/images/castle-positions/castle-email-state-dark.png" alt="Castle Positions email configuration state in dark mode" loading="lazy"></a>
  <figcaption>Email configuration is a separate read-only management surface; delivery attempts do not replace the in-app schedule state.</figcaption>
</figure>

<div class="castle-diagram">

```mermaid
flowchart TD
 A[Confirm kingdom scope] --> B[Prepare cycle and stages]
 B --> C[Open applications]
 C --> D[Resolve and review candidates]
 D --> E[Calculate suggestions]
 E --> F[Build and save draft]
 F --> G[Finalize and publish]
 G --> H[Review delivery and changes]
 H --> I[Reopen and republish if needed]
```

</div>

1. Confirm your kingdom scope and access. A Minister stays within the assigned kingdom.
2. Create/open the cycle, set its title and application window.
3. Prepare stages: date, UTC timing and active positions; configure resource fields and any local eligibility/ranking rules.
4. Open applications and share the public link.
5. Review every incomplete, standby and needs-review application before relying on the planner.
6. Accept/reject candidates as appropriate. Acceptance means consideration, not an appointment.
7. Recalculate and review suggestions; resolve unplaced candidates and conflicts.
8. Build and save each stage draft. Use manual decisions only after checking overlaps, capacity and position scope.
9. Finalize, publish and inspect notification outcomes.
10. Reopen and publish a new version for changes. Escalate global settings or access issues to a Supreme Admin.

## Supreme Admin boundary

Supreme Admin work is limited here to selecting the correct kingdom, correcting access/role or platform-level email configuration, and resolving cross-kingdom issues. It is not necessary to use global access for ordinary kingdom scheduling.

Related: [Roles](roles-and-access.md), [Reviewing](reviewing.md), [Planner](schedule-planner.md), and [Publishing](publishing-and-changes.md).

Before recalculating, read [Candidate Selection and Scheduling Logic](selection-algorithm.md) so the team can explain suggestion results consistently.
