# Role & Permission Tests

Use this guide to confirm the five built-in roles behave as documented. Every row states the expected outcome explicitly.

## Supreme Admin

| Action | Role | Expected result |
|---|---|---|
| Open `Subscriptions & Usage` | Supreme Admin | **Allowed.** The page opens. |
| Create a kingdom | Supreme Admin | **Allowed.** The kingdom is created. |
| Edit support links | Supreme Admin | **Allowed.** The settings page saves successfully. |
| Purge an item from the Recycle Bin | Supreme Admin | **Allowed.** The purge action is available. |
| Handle a subscription request | Supreme Admin | **Allowed.** Approve, reject, send payment instructions, and complete actions are available. |
| Delete own account | Supreme Admin | **Blocked.** Show **"You cannot delete your own account."** |
| Remove own last critical role | Supreme Admin | **Blocked.** Show **"You cannot remove your own role because it would lock you out."** |
| Remove the last active Supreme Admin | Supreme Admin | **Blocked.** Show **"At least one active supreme admin must remain."** |

## King

| Action | Role | Expected result |
|---|---|---|
| Open own kingdom detail | King | **Allowed.** The kingdom page opens. |
| Create an alliance in own kingdom | King | **Allowed.** The alliance is created. |
| Open kingdom analytics | King | **Allowed.** The Kingdom tab is visible. |
| Offer a kingdom premium grant | King | **Allowed.** A pending grant offer is created if slots are available. |
| Purge from Recycle Bin in own scope | King | **Allowed.** Purge is available. |
| Open platform `Subscriptions & Usage` manager | King | **Blocked.** The page should not be available. |
| Suspend a kingdom or alliance | King | **Blocked.** The suspend tools are Supreme-Admin-only. |
| Delete a user not created by this King | King | **Blocked.** Show **"You can only delete users that you created."** |
| Delete a self-registered user | King | **Blocked.** Show **"You cannot delete users who registered independently."** |
| Delete a Supreme Admin user | King | **Blocked.** Show **"Cannot delete supreme admin users."** |

## Alliance Leader

| Action | Role | Expected result |
|---|---|---|
| Open `My Alliance` | Alliance Leader | **Allowed.** The page opens. |
| Add a player | Alliance Leader | **Allowed.** The player is created. |
| Create an alliance-scoped event | Alliance Leader | **Allowed.** The event is created. |
| Upload event-result screenshots | Alliance Leader | **Allowed.** The import reaches review. |
| Open rewards page | Alliance Leader | **Allowed.** Reward rows are visible. |
| Open another alliance's page directly | Alliance Leader | **Blocked.** Access is denied by scope. |
| Open kingdom usage outside own scope | Alliance Leader | **Blocked.** Expect `USAGE_SCOPE_DENIED`. |
| Open Kingdom analytics without a qualifying grant | Alliance Leader | **Blocked.** The tab is not shown. |
| Purge from Recycle Bin | Alliance Leader | **Blocked.** Purge is not available. |

## Co-Leader

| Action | Role | Expected result |
|---|---|---|
| Open `My Alliance` | Co-Leader | **Allowed.** The page opens. |
| Add a player | Co-Leader | **Allowed.** The player is created. |
| Enter manual results | Co-Leader | **Allowed.** The save action works on an unlocked instance. |
| Upload screenshots and accept rows | Co-Leader | **Allowed.** The import can be reviewed and accepted. |
| View analytics | Co-Leader | **Allowed.** Alliance analytics open. |
| Delete a player | Co-Leader | **Blocked.** Delete is not available. |
| Delete an import with rollback | Co-Leader | **Blocked.** Delete-with-results is not available. |
| Open Reward Rules settings | Co-Leader | **Blocked.** Rule-management access is not available. |
| Open Audit Logs | Co-Leader | **Blocked.** Logs are not available. |

## Alliance Player

| Action | Role | Expected result |
|---|---|---|
| Open dashboard | Alliance Player | **Allowed.** The page opens. |
| Open players directory | Alliance Player | **Allowed.** The list is visible in read-only form. |
| Open rewards page | Alliance Player | **Allowed.** Reward rows are visible if the scope allows them. |
| File a report | Alliance Player | **Allowed.** A report can be created. |
| Open analytics overview | Alliance Player | **Allowed.** Read-only analytics open within scope. |
| Open Support & Plans | Alliance Player | **Blocked.** The request page is not available for this role. |
| Upload screenshots | Alliance Player | **Blocked.** Import tools are not available. |
| Add or edit a player | Alliance Player | **Blocked.** Player write actions are not available. |
| Open Recycle Bin | Alliance Player | **Blocked.** The page is not available. |
