---
title: 'Roles, Permissions, and Approval Queues'
description: 'Understand role definitions, direct permissions, assignments, and the review queues that gate sensitive work.'
product: 'kingshot-events'
audience: 'Administrators and reviewers'
experienceLevel: 'Advanced'
featureArea: 'Accounts and Access'
lastReviewed: '2026-08-02'
verifiedAgainstSourceCommit: '0238432f9a614513b1f28a43c438a994a0caaf8a'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Roles, Permissions, and Approval Queues

Access is resolved from identity, account state, scoped assignments, roles and permissions, module availability, and any applicable plan or grant. A role label is not sufficient evidence that a particular control should appear.

## Administration surfaces

- **Roles** defines named permission bundles; role detail shows the bundle being edited.
- **Permissions** provides the permission catalog and assignment view available to administrators.
- **User assignments** connects a user to the permitted kingdom, alliance, or operational responsibility.
- **Registration requests** reviews accounts awaiting approval; registration settings control the exposed registration policy.
- **Player-link reviews** accepts or rejects requested account-to-player identity links.
- **Password requests** tracks supported recovery or reset requests.

```mermaid
flowchart TD
  I["Authenticated identity"] --> A{"Account approved?"}
  A -- "No" --> Q["Relevant approval queue"]
  A -- "Yes" --> S["Scoped assignments"]
  S --> R["Roles and direct permissions"]
  R --> M["Module and plan availability"]
  M --> C{"Requested action allowed?"}
  C -- "Yes" --> X["Show and authorize control"]
  C -- "No" --> D["Hide, disable, or deny"]
```

**Accessible summary:** Approval, scope, permissions, and availability are all checked before a control is authorized.

## Safe change procedure

1. Identify the exact user and target scope.
2. Determine the smallest permission or role needed for the task.
3. Apply the assignment and verify the resulting effective access.
4. Keep approval decisions and their reasons in the owning queue.
5. Remove obsolete assignments rather than layering contradictory roles.

**Example:** A new alliance reviewer has an approved account but cannot resolve imports. The administrator verifies the alliance assignment and adds only the review permission intended for that scope. They do not grant a kingdom-wide administrative role.

If access remains wrong, check account approval, player link where relevant, assignment scope, explicit permission, module availability, and effective plan in that order. Report the denied action and scope without publishing the permission matrix or protected user data.

## Limits and troubleshooting

A visible administration page does not guarantee authority for every action inside it. Cached navigation can briefly outlive a permission change, but the server still decides the request. Avoid using a broad role as a diagnostic shortcut. When access differs between two users, compare approval state, assignments, roles, direct permissions, module status, and plan at the same scope. Record only the minimum safe identifiers needed for an administrator to reproduce the denial.
