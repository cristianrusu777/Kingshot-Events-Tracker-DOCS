# Edit a User & Reset Their Password

After a user exists, you manage them from the **Users** list and their **Edit** page. This is where you update identity details, suspend or reactivate access, and decide whether they must change their password next time they sign in.

## Open the user

1. Open **Admin**.
2. Find the user in **Users**.
3. Select **Edit**.

The user page is split into two main parts:

- **User Profile** for account details.
- **Current Assignments** and **Add Assignment** for role and scope changes.

## What you can change

On **User Profile**, you can update:

- **Username**
- **Display name**
- **Email**
- **Active**
- **Force password change**

If you are a `Supreme Admin`, you can also change the user's global role between regular user access and `Supreme Admin`.

## When to use "Force password change"

Turn on **Force password change** when you want the user to pick a fresh password the next time they log in. This is helpful after handoffs, shared setup work, or any situation where you no longer want the current password to remain in use.

## Reset a password by email

The password reset action starts from the **Users** list, not from the profile form.

1. Go back to **Admin**.
2. In the user row, select **Reset**.
3. Confirm the email action.

What happens:

- The system creates a one-time temporary password.
- That password is emailed to the user's saved email address.
- The user is forced to change it at next login.

If the user does not have an email address saved, the reset action is not available.

## Good practice

- Use profile editing for normal account changes.
- Use the email reset flow when you want a clean, private password handoff.
- Use role assignments instead of rewriting the account when the real change is scope or responsibility.

## Related

- [Create a User](create-user.md)
- [Assign or Remove Roles](assign-roles.md)
- [Handle Password Reset Requests](handle-password-requests.md)
- [Safety Rules You'll Run Into](../roles/protection-rules.md)
