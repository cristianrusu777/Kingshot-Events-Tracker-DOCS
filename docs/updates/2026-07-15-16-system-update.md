# 15–16 July 2026 System Update

This update covers the Castle Positions release and the related account, email, access, user-lifecycle, subscription/usage and usability corrections delivered across 15–16 July 2026. It describes what users see now, not planned behavior.

::: tip New Feature
Castle Positions & KvK Applications is now a kingdom workflow for public applications, preferred UTC times, resource information, reviewer decisions, suggestion-based planning, published schedules and controlled changes.
:::

## Who should read this update

- **Applicants**: read [Applying](../castle-positions/applying.md) and [Application statuses](../castle-positions/application-statuses.md).
- **Kings and Ministers of Justice**: start with [Managing Castle Positions](../castle-positions/managing.md), then use the [selection algorithm](../castle-positions/automatic-placement.md) and [planner](../castle-positions/schedule-planner.md).
- **Supreme Admins**: review the scope, email and lifecycle notes below before making platform-level corrections.

## Before and after at a glance

| Area | Earlier experience | What users see now | Action needed |
| --- | --- | --- | --- |
| Castle appointments | No single application-to-publication path | A kingdom-scoped cycle, application, review and schedule workflow | Configure the cycle and positions before opening applications |
| Placement | No integrated deterministic preview | Suggestions compare compatible eligible candidates but never publish automatically | Review every suggestion before saving |
| Accounts | Login and registration could be conflated in an application flow | Existing login remains separate from new-account registration | Choose login only if you already have an account |
| Email | Delivery context was unclear | Account messages and Castle appointment attempts are described separately | Check in-app status; do not rely only on email |
| User visibility | Inactive/deleted behavior could be confusing | Normal views hide inactive/deleted users and access is invalidated | Use authorised restoration paths when appropriate |
| Usage lists | Large details could be slow or ambiguous | Details load when opened; lists paginate and expose clearer errors | Wait for the named subject before acting |

## Castle Positions and KvK applications

<figure class="castle-screenshot castle-screenshot--wide">
  <a href="/images/castle-positions/castle-dashboard-dark.png" target="_blank"><img src="/images/castle-positions/castle-dashboard-dark.png" alt="Castle Positions release dashboard in dark mode" loading="lazy"></a>
  <figcaption>Castle Positions is the principal feature of this update: the dashboard connects kingdom-scoped applications with review and scheduling workflows.</figcaption>
</figure>

Players can use a public kingdom application flow, provide stage availability in UTC, resources and comments, and return to their own overview to follow status and published appointments. The platform now supports player identity linking, stages, configurable positions, time slots, capacity, review, drafts, schedule versions and publication. Kings and Ministers operate only within their kingdom; Supreme Admins select the relevant kingdom for wider corrections.

Automatic placement is a **reviewable suggestion preview**, not automatic final assignment. It filters to eligible linked applications in placeable statuses, preserves locked assignments, honours unavailable times, compares time compatibility and configured ranking, and reports unplaced candidates. A schedule still needs an authorized reviewer to save, finalize and publish. See [Selection algorithm](../castle-positions/automatic-placement.md).

### Compatibility and older schedules

Older appointment information can need an administrator to identify the correct position before it is saved in a multi-position stage. The system does not guess a position column when several active positions exist, because that could place an appointment under the wrong role. A stage also needs a date and at least one active position before its planner can be used.

### Administrator actions

Before announcing appointments, a King or Minister confirms kingdom scope, dates, active positions, capacity, resource rules and the application window. They resolve incomplete applications, calculate or recalculate suggestions, make the final schedule decisions, save the draft, finalize it and publish. Reopening starts a revision; players retain the last published result until the replacement is published.

## Registration and authentication

Login and registration now keep their purposes separate: login validates an existing account and does not incorrectly demand registration-only fields. Email availability/validity checks and account/contact-email handling were corrected. Application steps avoid unnecessary re-submission of plaintext password information. Registration approval and password-reset matching were corrected so administrators have clearer target information before issuing a temporary password.

**Who is affected:** applicants, new users and administrators. **Action:** use login for an existing account; use registration only when creating one. Check [Logging in](../getting-started/logging-in.md), [Registering](../getting-started/registering.md) and [Password requests](../how-to/handle-password-requests.md).

For Castle applicants, account email and optional application contact email have separate purposes. An existing account is verified rather than re-created; returning to review should not ask an applicant to resubmit password text merely because another application step is revisited. Registration and password-reset approval now have better matching information to reduce the risk of applying an action to the wrong account.

## Email behavior

Welcome and password-related messages now have clearer delivery tracking and matching behavior. Castle appointment notifications are separate, depend on kingdom sender/mode and opted-in contact, and can be sent, failed, skipped or disabled. Missing email or disabled sending does not block all Castle use, and delivery is never guaranteed. See [Email settings](../admin/email-settings.md) and [Castle notifications](../castle-positions/notifications-and-email.md).

Players should continue to consult **My Castle Positions**. A sender can be disabled, contact can be absent or opted out, or an external provider can filter a message. Administrators can inspect notification outcomes where controls are available, but a test email is not a substitute for a real appointment change.

## User lifecycle and access

Inactive/deleted users are more consistently hidden from normal visibility and credentials are invalidated when access is disabled. Restore pathways remain role-controlled; Supreme Admin views retain the administrative context needed to correct lifecycle issues. Minister of Justice has explicit kingdom-scoped Castle access, while Kings have equivalent operational access in their own kingdom. Unauthorized navigation shows access denial rather than granting a hidden capability.

The important boundary is scope: a Minister of Justice does not obtain another kingdom’s Castle administration merely by receiving the role. Kings operate their own kingdom workflow. Supreme Admins can correct relevant platform-level issues, but routine scheduling should remain with the kingdom team.

## Subscription and usage pages

Subscription/usage panels received loading and subject-identification corrections. Details are loaded when needed, list views paginate instead of eagerly loading large data, and error/warning states are clearer. **Action:** wait for the detail panel to finish loading; if it errors, refresh once then report the visible message and scope. See [Subscriptions overview](../subscriptions/overview.md) and [Quota troubleshooting](../troubleshooting/quotas.md).

This improves responsiveness on larger kingdoms and alliances without changing a plan, quota, grant or suspension decision. A loading state is not a completed result, and an error should be reported with the visible page and kingdom/alliance context.

## Reliability and usability corrections

The update corrects validation and loading states, safer dropdown/action behavior, planner slot layout, stage configuration density, accessible action labels, resource display handling and defensive handling of incomplete response data. Schedule revisions protect against overwriting a board changed by another administrator. Empty planner cells are represented as available placeholders instead of fake player data.

Candidate cards and slot controls now communicate decisions more clearly. If the planner indicates a stale or failed suggestion calculation, treat it as a prompt to recalculate and review rather than a usable final recommendation. If another administrator saves first, reload and reconcile the newer revision rather than overwriting it.

## What remains intentionally manual

The platform does not independently choose the “best” player. It can calculate a deterministic preview from configured eligibility/ranking, explicit time choices, capacity and conflict protection. A King or Minister remains responsible for incomplete applications, exceptions, manual changes, finalization and publication.

## Remaining limits

- Castle suggestions require valid stage/position setup and are never a published appointment by themselves.
- Notification attempts can be skipped or fail.
- Eligibility/ranking influence only the rules configured by a kingdom; they do not replace human review.
- A linked/accepted applicant can remain unscheduled.

## Documentation propagation

| Change area | Affected roles/screens | Updated documentation |
| --- | --- | --- |
| Application, identity, UTC/resources | Applicant; public form/status | Castle overview, applying, statuses, FAQ, troubleshooting |
| Suggestions, planner and publication | King/Minister; review, planner, schedule | Reviewing, selection algorithm, planner, publishing, management |
| Minister scope/access | Minister/King/Supreme Admin; navigation | Roles, management, access-denied links, troubleshooting |
| Login/registration/password repair | Applicant/user/admin; account forms | Login, registration, password guides, Castle applying/troubleshooting |
| Email and delivery | Applicant/admin; sender/notifications | Email settings, Castle notifications, update notes |
| Disabled/deleted users | Admin/Supreme Admin; user visibility/restore | User delete/edit, player visibility, troubleshooting |
| Usage performance | Admin/King; subscription/usage detail | Subscription overview, quotas, update notes |

## Where detailed guidance lives

| Need | Guide |
| --- | --- |
| Apply and choose UTC times/resources | [Applying](../castle-positions/applying.md) |
| Understand standby, review, accepted and scheduled | [Application statuses](../castle-positions/application-statuses.md) |
| Review candidates and resource rules | [Reviewing](../castle-positions/reviewing.md) and [Stages, positions and resources](../castle-positions/stages-positions-resources.md) |
| Verify exactly how suggestions decide | [Candidate Selection and Scheduling Logic](../castle-positions/selection-algorithm.md) |
| Build, publish and revise a schedule | [Schedule planner](../castle-positions/schedule-planner.md) and [Publishing](../castle-positions/publishing-and-changes.md) |
| Resolve account/email/access issues | [Castle troubleshooting](../castle-positions/troubleshooting.md), [Login troubleshooting](../troubleshooting/login.md), and [Email settings](../admin/email-settings.md) |

Next: read [Castle Positions](../castle-positions/overview.md) for the operating guide.
