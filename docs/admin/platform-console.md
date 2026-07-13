# Platform Console

> Supreme Admin only. Standalone app at `platform-console/`.

Platform Console is the external/global operations terminal for the platform. It is not the same page as Processing Console.

## What it shows

- live platform audit/activity stream;
- login and session activity;
- current page/activity tracking;
- processor/import/subscription summaries;
- read-only command output.

Commands remain read-only. They must not expose API keys, tokens, passwords, or secret env values.

## Responsive behavior

On mobile:

- terminal header stacks cleanly;
- status tiles use two columns;
- event rows become readable cards;
- command input remains touch-friendly;
- command output/history persists across polling and refresh.

On tablet:

- the terminal keeps the hacker/ops layout with larger event and command panes.

## Command flow

```mermaid
flowchart TD
  A[Supreme Admin opens Platform Console] --> B[AuthGate verifies /auth/me]
  B --> C{Supreme Admin?}
  C -- No --> D[Access denied]
  C -- Yes --> E[Live event stream starts]
  E --> F[Run read-only command]
  F --> G[Command output persists locally]
  E --> H[Polling refreshes events only]
```

## Available commands

`help`, `status`, `whoami`, `sessions`, `logins`, `activity`, `users online`, `processors`, `imports`, `subscriptions`, `analytics`, `events`, `clear`.

`clear` clears only local terminal output. It does not delete audit logs.

## Visual model

```mermaid
flowchart LR
  A[Event stream] --> D[Platform Console]
  B[Session and page activity] --> D
  C[Read-only command endpoint] --> D
  D --> E[Persistent command history]
  D --> F[Selected event detail]
  D --> G[Live health indicator]
```

The event stream refreshes independently from the command pane. A refresh adds new events without clearing command output, typed input, filters, selected detail, or local command history.
