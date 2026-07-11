# Delete a User

Deleting a user here means disabling the account so it stops working in normal use. Use this when someone should no longer sign in, not when they just need a different role.

## Before you delete

- If the person still needs access, edit the account or change assignments instead.
- If you only need to stop access for a while, the disabled account can stay in the list.
- Read the protection rules first if the account belongs to a senior admin.

## Delete the account

1. Open **Admin**.
2. Find the user in **Users**.
3. Select the delete button on that row.

After deletion, the account is shown as disabled and can no longer be used normally.

## Messages that block deletion

This page follows the same safety rules already documented elsewhere. The most important messages are:

- `You cannot delete your own account.`
- `At least one active supreme admin must remain.`
- `You cannot delete users who registered independently.`
- `Cannot delete supreme admin users.`
- `You can only delete users that you created.`

## What those rules mean

- You cannot delete yourself from the admin screen.
- The last active `Supreme Admin` must stay in place.
- A `King` cannot delete a user who came in through self-registration.
- A `King` cannot delete a `Supreme Admin`.
- A `King` can only delete users they originally created.

## Use this instead when deletion is the wrong tool

- Need a different role: use [Assign or Remove Roles](assign-roles.md).
- Need new account details: use [Edit a User & Reset Their Password](edit-user.md).
- Need to stop access but keep the account ready for later: clear or narrow assignments instead of deleting.

## Related

- [Safety Rules You'll Run Into](../roles/protection-rules.md)
- [Assign or Remove Roles](assign-roles.md)
- [Approve Registration Requests](approve-registrations.md)
