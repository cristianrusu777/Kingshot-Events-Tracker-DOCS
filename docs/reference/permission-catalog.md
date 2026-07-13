# Permission Reference

This reference is for `Supreme Admin` users and anyone reviewing what a custom role can do.

The permission list below is a baseline reference for the built-in roles, but custom roles can be configured to any combination.

To use these permissions in practice, see [Create & Edit Custom Roles](../admin/manage-roles.md).

## How to read this page

- **Permission key** is the real internal key used by the app.
- **What it allows** is the plain-language meaning.
- **Built-in roles by default** shows which built-in roles start with it.

## Kingdoms

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `kingdom:create` | Create kingdom records. | Supreme Admin |
| `kingdom:update` | Rename and update kingdom details. | Supreme Admin |
| `kingdom:delete` | Soft-delete kingdoms. | Supreme Admin |
| `kingdom:restore` | Restore deleted kingdoms. | Supreme Admin, King |

## Alliances

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `alliance:create` | Create alliances inside a kingdom. | Supreme Admin, King |
| `alliance:update` | Update alliance details. | Supreme Admin, King |
| `alliance:delete` | Soft-delete alliances. | Supreme Admin, King |
| `alliance:restore` | Restore deleted alliances. | Supreme Admin, King |

## Users

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `user:create` | Create user accounts. | Supreme Admin, King |
| `user:update` | Update user accounts. | Supreme Admin, King |
| `user:delete` | Disable user accounts. | Supreme Admin |
| `assignment:manage` | Create, edit, and disable user assignments. | Supreme Admin, King |

## Roles

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `role:view` | View role definitions and assignments. | Supreme Admin |
| `role:manage` | Create, clone, edit, disable, reset, and delete roles. | Supreme Admin |
| `permission:view` | Inspect the permission catalog. | Supreme Admin |

## Players

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `player:create` | Create players from dashboard flows. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `player:update` | Update players from dashboard flows. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `player:delete` | Soft-delete players. | Supreme Admin, King, Alliance Leader |
| `player:restore` | Restore deleted players. | Supreme Admin, King, Alliance Leader |

## Events

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `event:create` | Create events and templates. | Supreme Admin, King, Alliance Leader |
| `event:update` | Update events and templates. | Supreme Admin, King, Alliance Leader |
| `event:delete` | Soft-delete events. | Supreme Admin, King, Alliance Leader |
| `event:restore` | Restore deleted events. | Supreme Admin, King, Alliance Leader |
| `event-fields:manage` | Manage event custom fields. | Supreme Admin, King, Alliance Leader |

## Results

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `result:create` | Create event result rows. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `result:update` | Update event result rows. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `result:delete` | Soft-delete event result rows. | Supreme Admin, King, Alliance Leader |
| `result:restore` | Restore deleted result rows. | Supreme Admin, King, Alliance Leader |

## Imports

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `import:create` | Upload screenshots and spreadsheets. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `import:delete` | Delete imports and linked rows. | Supreme Admin, King, Alliance Leader |
| `import:restore` | Restore deleted imports. | Supreme Admin, King, Alliance Leader |
| `import:alliance-players` | Run alliance player import flows. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `import:event-results` | Run alliance event result imports. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `import:kingdom-results` | Run kingdom-wide event result imports. | Supreme Admin, King |
| `import:excel` | Run spreadsheet imports. | Supreme Admin, King, Alliance Leader, Co-Leader |

## Analytics

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `analytics:view` | View dashboards, players, events, and reports. | Supreme Admin, King, Alliance Leader, Co-Leader, Alliance Player |
| `analytics:recalculate` | Recompute analytics and eligibility. | Supreme Admin, King, Alliance Leader |

## Logs

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `logs:view` | View scoped audit logs. | Supreme Admin, King, Alliance Leader |
| `logs:manage` | View sensitive log details and admin log controls. | Supreme Admin, King |

## Reports

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `report:view` | View reports and report details. | Supreme Admin, King, Alliance Leader, Co-Leader, Alliance Player |
| `report:create` | Create reports and comments. | Supreme Admin, King, Alliance Leader, Co-Leader, Alliance Player |
| `report:update` | Edit reports. | Supreme Admin, King, Alliance Leader |
| `report:resolve` | Resolve or reject reports. | Supreme Admin, King |
| `restore-request:view` | View restore requests. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `restore-request:manage` | Approve or reject restore requests. | Supreme Admin, King, Alliance Leader |

## Recycle Bin

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `deleted:view` | Browse soft-deleted entities. | Supreme Admin, King, Alliance Leader |
| `deleted:purge` | Permanently purge soft-deleted entities. | Supreme Admin, King |

## Registration

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `registration:view` | View registration requests and settings. | Supreme Admin, King, Alliance Leader |
| `registration:manage` | Approve or reject registration requests. | Supreme Admin, King, Alliance Leader |

## Rewards

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `reward:view` | View reward eligibility pages. | Supreme Admin, King, Alliance Leader, Co-Leader, Alliance Player |
| `reward:manage` | Manage reward rules and handled status. | Supreme Admin, King, Alliance Leader |
| `reward:manage:global` | Manage global reward rules. | Supreme Admin |
| `reward:manage:kingdom` | Manage kingdom reward rules. | Supreme Admin, King |
| `reward:manage:alliance` | Manage alliance reward rules. | Supreme Admin, Alliance Leader |

## Settings

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `settings:manage` | Manage configurable settings pages. | Supreme Admin, King, Alliance Leader |
| `theme:manage` | Manage application theme settings. | Supreme Admin |

## Manual Input

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `manual:players:create` | Create players in manual flows. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `manual:players:update` | Edit players in manual flows. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `manual:players:delete` | Delete players in manual flows. | Supreme Admin, King, Alliance Leader |
| `manual:attributes:manage` | Assign manual attributes and overrides. | Supreme Admin, King, Alliance Leader |
| `manual:events:create` | Create events in manual flows. | Supreme Admin, King, Alliance Leader |
| `manual:events:update` | Edit events in manual flows. | Supreme Admin, King, Alliance Leader |
| `manual:events:delete` | Delete events in manual flows. | Supreme Admin, King, Alliance Leader |
| `manual:results:create` | Create manual event results. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `manual:results:update` | Edit manual event results. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `manual:results:delete` | Delete manual event results. | Supreme Admin, King, Alliance Leader |

## Subscriptions

| Permission key | What it allows | Built-in roles by default |
|---|---|---|
| `subscription:view` | View scoped usage, warnings, cleanup suggestions, and subscription status. | Supreme Admin, King, Alliance Leader, Co-Leader, Alliance Player |
| `subscription:cleanup` | Run scoped cleanup actions while in quota-limited mode. | Supreme Admin, King, Alliance Leader, Co-Leader |
| `subscription:manage` | Manage subscription plans, assignments, overrides, and suspensions. | Supreme Admin |

## One final note

The built-in role coverage above is the default baseline only. Once you create a custom role, you can mix these permissions in whatever combination your platform needs. Use [Create & Edit Custom Roles](../admin/manage-roles.md) to do that safely.
