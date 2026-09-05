---
title: "September 5, 2026 Platform Update: Strict Scoping, 1-Click Provisioning, Minister of Justice Elevation, and Optimizer Precision"
slug: "2026-09-05-platform-update"
date: "2026-09-05"
version: "0.4.0"
category: "new_feature"
tags:
  - "Security"
  - "Scoping"
  - "Provisioning"
  - "Minister of Justice"
  - "Access Requests"
  - "Hero Gear"
  - "Castle Positions"
shortSummary: "Comprehensive tenant isolation with Holding Realm quarantine, 1-click kingdom and alliance provisioning, Minister of Justice role elevation with Server King approvals, login credential clarity, exact Knapsack Pareto gear optimization, and Recycle Bin session recovery."
---

# September 5, 2026 Platform Update: Strict Scoping, 1-Click Provisioning, Minister of Justice Elevation, and Optimizer Precision

Since the September 3 platform release, Kingshot Events has undergone major enhancements focused on strict multi-tenant security, streamlined community onboarding, elevated role governance, and advanced calculation precision.

---

## Release Overview

### Strict Tenant Scoping and Holding Realm Isolation
- **Zero Global Unplaced Accounts:** Public registration no longer allows accounts to exist in an unplaced global state. Every registered user is strictly bound to a verified kingdom tenant.
- **Holding Realm Quarantine (Server 0):** Users registering before their kingdom has been reviewed or provisioned are quarantined in the designated **Holding Realm (Pending Placement)** (`serverCode: 0`, alliance `[UNA] Pending Assignment`). Quarantined accounts receive safe, read-only viewer capabilities and are completely isolated from live kingdom rosters.
- **Seamless Scope Transition:** When kingdom leadership or platform administrators accept and provision the pending kingdom, users are automatically moved from the Holding Realm into the live kingdom and alliance without losing account history.

### 10-Alliance Cap Protection and Automatic Overflow Alliance
- **Subscription Limit Safeguard:** Free subscription kingdoms are capped at tracking 10 active alliances. When a governor registers for an unlisted alliance or the kingdom has reached the 10-alliance limit, they are automatically placed into the kingdom's overflow alliance: **[UNA] General Kingdom Members**.
- **Preserved Alliance Identity:** The applicant's requested alliance tag and name are preserved in account metadata and review cards, allowing governors to participate in kingdom events without breaching subscription quotas.

### Self-Service Access Requests Space (`/access-requests`)
- **Dedicated Request Hub:** Registered users can navigate to `/access-requests` (also available via `/requests` or from their Profile) to submit structured requests:
  - **All-in-One:** Simultaneous Kingdom creation, Alliance creation, and Role elevation.
  - **Kingdom Creation:** Numeric server code and suggested kingdom name.
  - **Alliance Creation:** Desired alliance tag and name under the user's kingdom.
  - **Role Elevation:** Requests for specialized operational roles.
- **Real-Time Request Tracking:** Live status badges (`Pending`, `Approved`, `Rejected`), submitted In-Game IDs, and administrator review notes provide full transparency into application progress.
- **Holding Realm Status Notice:** When an applicant is in the Holding Realm, an informative status card explains their current access level and outlines next steps for approval.
- **Accelerated Review Card:** Configurable by administrators, presenting expedited contact routes (e.g. Discord, Telegram) so applicants can fast-track their onboarding.

### Minister of Justice Role Elevation and Server King Approval
- **Dedicated Judicial Office:** Governors can now request the **Minister of Justice** (`minister_of_justice`) role through the self-service Access Requests workspace to coordinate castle positions, stage schedules, and court policies.
- **Strict Anti-Escalation Safeguard:** Minister of Justice is excluded from the public self-registration page to prevent unauthenticated privilege hoarding; requests must originate from authenticated governors.
- **Server King Review Authority:** In addition to Supreme Administrators, the **Server King** (`kingdom_admin`) possesses verified authority to review and approve Minister of Justice applications for their kingdom directly from the role request queue.
- **Kingdom-Scoped Protection:** Minister of Justice permissions are bound strictly to the target kingdom without alliance restrictions, and Server Kings cannot elevate users to Server King without supreme admin authorization.

### 1-Click Atomic Kingdom and Alliance Provisioning
- **Unlisted Community Registration:** Self-registering users can select existing communities or specify non-existing numeric kingdom codes (e.g. `104`, `1625`) and suggested alliance tags/names.
- **Tri-View Administrative Queue:** The Admin Registration Requests dashboard features three dedicated filter tabs:
  1. `All Requests`: Complete administrative queue with full-text search and server-side pagination.
  2. `Player Requests (No Elevation)`: Dedicated queue for reviewing and approving ordinary players without elevated roles.
  3. `Uncreated Entities (Suggestions)`: Isolates pending requests requiring kingdom or alliance provisioning.
- **Visual Suggestion Badges:** Uncreated entities are highlighted with distinctive badges (`🆕 New #999` and `🆕 New [TAG]`).
- **1-Click Accept & Provision:** Reviewers can click **Accept & Provision** on any pending suggestion to atomically provision the kingdom and alliance, migrate the applicant from the holding realm, and approve the account in a single transaction.

### Player Identity and Login Credential Clarity
- **Mandatory In-Game ID Tracking:** All registration and access request forms require the player's In-Game ID (`inGameId`), allowing administrators to verify identity against game rosters before granting access.
- **Dual Identity Display:** The topbar user menu and profile views now display both the player's In-Game Name and account username (with a prominent `@username` badge), preventing confusion when logging into the platform.

### Universal Updates Availability
- **Uninterrupted Communication:** Governors in the Holding Realm or overflow alliances have direct access to platform updates, announcements, and guides at `/updates` without encountering blank or blocked views.

### Architectural Cleanliness and Security Verification
- **Layer Boundary Enforcement:** Tenant holding scope constants and utilities were relocated into the shared domain, satisfying strict architecture checks (`scripts/check-architecture-deps.mjs`) with zero cross-layer dependency violations.
- **Comprehensive Test Suite:** Fully validated across 3,870 automated tests (273 server test files and 84 UI test suites) with zero failures.

---

## Detailed Changelog

### New Features

#### 1. Minister of Justice Kingdom Role Elevation
- **Area:** Accounts & Roles
- **Type:** `new_feature`
- **Description:** Added support for requesting and reviewing the Minister of Justice role. Governors can submit requests via `/access-requests` under Role Elevation. Server Kings (`kingdom_admin`) and Supreme Administrators can review and approve requests for their kingdom. Minister of Justice is strictly excluded from public registration.

#### 2. Holding Realm Quarantine (Server 0)
- **Area:** Security & Tenant Scoping
- **Type:** `security`
- **Description:** Implemented strict tenant scoping ensuring no self-registered user obtains unassigned global scope. Users with pending kingdoms are placed in Holding Realm (Server 0) with `[UNA]` alliance until approved.

#### 3. 1-Click Community Provisioning
- **Area:** Administration
- **Type:** `new_feature`
- **Description:** Added 1-click kingdom and alliance provisioning from registration and role request review cards. Uncreated communities display distinct badges (`🆕 New #999` and `🆕 New [TAG]`). Reviewers can provision entities and approve users atomically.

#### 4. Overflow Alliance Management ([UNA])
- **Area:** Scopes & Communities
- **Type:** `improvement`
- **Description:** Free tier kingdoms reaching the 10-alliance cap automatically route incoming players to the overflow alliance `[UNA] General Kingdom Members`, preserving their requested alliance identity in profile notes.

#### 5. Self-Service Access Requests Hub (`/access-requests`)
- **Area:** Account & Requests
- **Type:** `new_feature`
- **Description:** Created a dedicated user workspace for submitting All-in-One, Kingdom, Alliance, and Role elevation requests with real-time status badges, submitted In-Game IDs, and administrator review notes.

#### 6. Exact Knapsack Pareto Solver for Hero Gear
- **Area:** Lab Simulators
- **Type:** `new_feature`
- **Description:** Upgraded the Hero Gear optimizer with a multi-dimensional Pareto frontier knapsack solver, evaluating trade-offs between enhancement XP, mastery stones, and non-linear stat gains under user-defined combat contexts.

#### 7. Event Session Recycle Bin and Restoration
- **Area:** Events & Lifecycles
- **Type:** `improvement`
- **Description:** Added event instances and sessions to the Recycle Bin, allowing safe soft-deletion, audit logging, and single-click restoration of historical scoring sessions.

---

### Improvements and UX Refinements

#### 8. In-Game Name and Username Disambiguation
- **Area:** Authentication & Topbar
- **Type:** `improvement`
- **Description:** Added `@username` badges alongside the player's In-Game Name across topbars and account headers, eliminating confusion between display names and login usernames.

#### 9. Castle Positions Application Review Summary
- **Area:** Castle Positions
- **Type:** `improvement`
- **Description:** Introduced an Application Review step summarizing governor identity, target positions, stage choices, and resource proof before final submission.

#### 10. Castle Board and Cycle Management
- **Area:** Castle Positions
- **Type:** `improvement`
- **Description:** Organizers can rename active cycles, manage temporary participants, and toggle proof verification rules directly from the board interface.

#### 11. Accelerated Review Contact Card
- **Area:** Registration & Onboarding
- **Type:** `improvement`
- **Description:** Registration settings now support an accelerated review contact message displayed on registration confirmation and within the user's access requests dashboard.

#### 12. Notification Read-on-Visible
- **Area:** Notifications
- **Type:** `improvement`
- **Description:** Notification inbox cards now mark as read as they enter the visible viewport via intersection observer, while preserving pending action items.

---

### Bug Fixes and Security Hardening

#### 13. Strict Tenant Scoping and Cross-Tenant Isolation
- **Area:** Security
- **Type:** `security`
- **Description:** Eliminated scenarios where self-registering users could obtain unassigned global scope, preventing unauthorized cross-tenant data visibility.

#### 14. Architecture Dependency Compliance
- **Area:** Architecture
- **Type:** `maintenance`
- **Description:** Relocated holding scope helpers (`isHoldingScope`, `HOLDING_SERVER_CODE`) into `src/shared/roles.ts` to satisfy layer direction rules and eliminate frontend-to-application dependency violations.

#### 15. Privacy Request Modal Dark Mode Contrast
- **Area:** User Interface
- **Type:** `bug_fix`
- **Description:** Corrected contrast levels and button styling in privacy and legal data modals across both Light and Dark modes.

#### 16. Server-Side Pagination and Filter State Bounds
- **Area:** Administration
- **Type:** `bug_fix`
- **Description:** Fixed pagination count boundaries and tab filter counters on administrative registration and recovery queues.
