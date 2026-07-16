# 15–16 July 2026 System Update

This update covers the Castle Positions release and the related account, email, access, user-lifecycle, subscription/usage and usability corrections delivered across 15–16 July 2026. It describes what users see now, not planned behavior.

## Castle Positions and KvK applications

Players can use a public kingdom application flow, provide stage availability in UTC, resources and comments, and return to their own overview to follow status and published appointments. The platform now supports player identity linking, stages, configurable positions, time slots, capacity, review, drafts, schedule versions and publication. Kings and Ministers operate only within their kingdom; Supreme Admins select the relevant kingdom for wider corrections.

Automatic placement is a **reviewable suggestion preview**, not automatic final assignment. It filters to eligible linked applications in placeable statuses, preserves locked assignments, honours unavailable times, compares time compatibility and configured ranking, and reports unplaced candidates. A schedule still needs an authorized reviewer to save, finalize and publish. See [Selection algorithm](../castle-positions/automatic-placement.md).

## Registration and authentication

Login and registration now keep their purposes separate: login validates an existing account and does not incorrectly demand registration-only fields. Email availability/validity checks and account/contact-email handling were corrected. Application steps avoid unnecessary re-submission of plaintext password information. Registration approval and password-reset matching were corrected so administrators have clearer target information before issuing a temporary password.

**Who is affected:** applicants, new users and administrators. **Action:** use login for an existing account; use registration only when creating one. Check [Logging in](../getting-started/logging-in.md), [Registering](../getting-started/registering.md) and [Password requests](../how-to/handle-password-requests.md).

## Email behavior

Welcome and password-related messages now have clearer delivery tracking and matching behavior. Castle appointment notifications are separate, depend on kingdom sender/mode and opted-in contact, and can be sent, failed, skipped or disabled. Missing email or disabled sending does not block all Castle use, and delivery is never guaranteed. See [Email settings](../admin/email-settings.md) and [Castle notifications](../castle-positions/notifications-and-email.md).

## User lifecycle and access

Inactive/deleted users are more consistently hidden from normal visibility and credentials are invalidated when access is disabled. Restore pathways remain role-controlled; Supreme Admin views retain the administrative context needed to correct lifecycle issues. Minister of Justice has explicit kingdom-scoped Castle access, while Kings have equivalent operational access in their own kingdom. Unauthorized navigation shows access denial rather than granting a hidden capability.

## Subscription and usage pages

Subscription/usage panels received loading and subject-identification corrections. Details are loaded when needed, list views paginate instead of eagerly loading large data, and error/warning states are clearer. **Action:** wait for the detail panel to finish loading; if it errors, refresh once then report the visible message and scope. See [Subscriptions overview](../subscriptions/overview.md) and [Quota troubleshooting](../troubleshooting/quotas.md).

## Reliability and usability corrections

The update corrects validation and loading states, safer dropdown/action behavior, planner slot layout, stage configuration density, accessible action labels, resource display handling and defensive handling of incomplete response data. Schedule revisions protect against overwriting a board changed by another administrator. Empty planner cells are represented as available placeholders instead of fake player data.

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

Next: read [Castle Positions](../castle-positions/overview.md) for the operating guide.
