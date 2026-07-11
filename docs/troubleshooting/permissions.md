# Permission Problems

Use this page as a quick lookup when the app blocks an action. Read the left column first, then match it to the likely cause and the right next step.

| What you see | Likely cause | What to do / who to ask |
|---|---|---|
| A menu item is simply **not there** | Your role does not include that area | Nothing is broken. Check [Roles Explained](../roles/overview.md). If you truly need it, ask the next role up. |
| An **access denied** or forbidden page | You opened a page your role cannot use, often from an old bookmark | Go back to [Reading the Dashboard](../getting-started/dashboard-tour.md) or the sidebar. If you think the role is wrong, ask your King or Supreme Admin. |
| **"You cannot delete your own account."** | Self-delete is blocked on purpose | Ask another admin to handle the account if it really must be removed. See [Safety Rules You'll Run Into](../roles/protection-rules.md). |
| **"At least one active supreme admin must remain."** | Someone tried to remove, deactivate, or demote the last active Supreme Admin | Add another active Supreme Admin first. Then retry. |
| **"You cannot remove your own role because it would lock you out."** | You tried to remove your own last critical role | Have another admin make the change, or add another suitable role first. |
| **"You can only delete users that you created."** | A King tried to delete a user outside their ownership boundary | Ask the Supreme Admin to handle it. |
| **"Cannot delete supreme admin users."** | A King tried to delete a Supreme Admin | Only the proper senior admin flow can handle that account. Stop and escalate. |
| **"You cannot delete users who registered independently."** | A King tried to delete a self-registered user | Ask the Supreme Admin to review it instead. |
| `KINGDOM_SCOPE_DENIED` | An alliance-scoped role tried to use a kingdom-scoped action | Check your [context banner](../getting-started/navigating.md). If the action really is kingdom-level, ask your King or Supreme Admin. |
| `USAGE_SCOPE_DENIED` | You tried to view usage outside your own scope | Open the correct kingdom or alliance first. If you still cannot see it, your role does not cover that scope. |
| **"Only PNG, JPEG, or WebP image uploads are supported"** or `INVALID_UPLOAD_TYPE` | The upload is not a supported image type | Re-export the file as PNG, JPEG, or WebP, then try again. See [Upload Screenshots](../imports/upload-screenshots.md). |
| **"This event instance is locked. Request unlock or ask a leader to unlock it."** or `INSTANCE_LOCKED` | The event instance auto-locked after the cleanup window | Use [Locked Instances & Unlock Requests](../how-to/session-lock.md). |
| `KINGDOM_ALLIANCE_GRANT_LIMIT_REACHED` | The kingdom plan does not have any grant slots left | Review the current grant usage on the kingdom side. See [Grant Premium to Your Alliances](../subscriptions/kingdom-grants.md). |
| `ALLOCATION_EXCEEDS_KINGDOM_QUOTA` | The allocation total is higher than the kingdom plan allows | Reduce the allocation or raise the kingdom limit first. See [Share Kingdom Quotas with Alliances](../subscriptions/allocations.md). |
| **"Only alliances with a pending or accepted kingdom subscription grant can receive an allocation."** or `ALLIANCE_NOT_GRANTED` | An allocation was attempted for an alliance that does not currently hold a grant | Offer or re-activate the grant first. Then return to the allocation step. |
| **"Quota limits were reached. New writes are blocked until old resources are cleaned up or additional capacity is granted."** | A hard limit was reached | Use [Quota & Suspension Problems](quotas.md) and [Run a Cleanup](../subscriptions/cleanup.md). |
| **"Limited cleanup mode is active. New writes are blocked while cleanup actions remain available."** | The scope is in limited mode because usage reached a hard limit | Cleanup is still allowed. Use [Quota & Suspension Problems](quotas.md). |

## If you are still unsure

1. Check [Finding Your Way Around](../getting-started/navigating.md) and confirm the current context.
2. Check [Roles Explained](../roles/overview.md) and make sure the action belongs to your role.
3. If the message is one of the safety rules above, do not try to work around it. Ask the correct higher role instead.
