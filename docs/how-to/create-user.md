# Create and Manage Users

Users are managed from the Admin page when your role has user-management permission.

![Current Users controls](../images/current/2026-07-13/users-controls-current-safe.png)

![Current tablet Users layout](../images/current/2026-07-13/tablet-users-current.png)

## What changed in the responsive pass

The Users section is now a full-width management view instead of being squeezed beside logs. It includes:

- clear **Create user** section;
- clear **Find and sort users** toolbar;
- pagination;
- page size selector;
- role, kingdom, alliance, status, presence, and password-state filters;
- sorting by username, email, role, scope, created date, last login, and last seen;
- readable horizontal table on smaller screens;
- protected destructive actions.

## Basic flow

```mermaid
flowchart TD
  A[Open Admin > Users] --> B[Create user or search existing users]
  B --> C[Choose role and scope]
  C --> D[Save / edit assignments]
  D --> E[User appears in paginated table]
  E --> F[Reset password, edit, or disable if permitted]
```

## Mobile/tablet guidance

- Use filters first; then scroll the table horizontally if needed.
- Bulk/danger actions are easier on tablet or desktop.
- Self-delete and last-supreme-admin protections still apply.

## Visual reference

![User creation workflow](../images/admin-user-create.png)

The redesigned list uses the same clear hierarchy: filters and sorting precede results, role and scope are badges rather than dense prose, and destructive actions live in an actions menu.
