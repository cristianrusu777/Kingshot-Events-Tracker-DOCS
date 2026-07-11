# Assign or Remove Roles

Use the assignments editor when one user needs access to a kingdom, an alliance, or more than one place at the same time. This is the normal way to give someone `King`, `Alliance Leader`, `Co-Leader`, or `Alliance Player` access after the account already exists.

> Screenshot placeholder: admin-assignments.png

## Open the assignments editor

1. Open **Admin**.
2. Find the user in **Users**.
3. Select **Edit**.
4. Use **Current Assignments** to review what they already have.
5. Use **Add Assignment** to add another role.

## Add an assignment

1. Pick the **Kingdom** if the role needs kingdom or alliance scope.
2. Pick the **Alliance** if the role is alliance-based.
3. Choose the role.
4. Select **Add assignment**.

Use the exact UI labels:

- `King`
- `Alliance Leader`
- `Co-Leader`
- `Alliance Player`

`Supreme Admin` is not added here. That is handled as a global account setting.

## Remove an assignment

Use the delete button beside the assignment in **Current Assignments**.

Before you remove one, check whether it is the user's only management role or whether it was created by someone with tighter ownership rules.

## Guard messages you may see

These messages are important safety checks, not bugs:

- `You cannot remove your own role because it would lock you out.`
- `At least one active supreme admin must remain.`
- `You can only remove role assignments that you created.`

## What these guards mean

`You cannot remove your own role because it would lock you out.`

- You tried to remove your own last management access.
- Add or keep another active management assignment before removing this one.

`At least one active supreme admin must remain.`

- The system will not let the final active `Supreme Admin` lose that access.
- Another `Supreme Admin` must exist and stay active first.

`You can only remove role assignments that you created.`

- This applies to `Kings`.
- A `King` can only remove assignments they originally created themselves.

## Good practice

- Add before you remove when you are reshaping someone's access.
- Double-check the scope so a user is placed in the correct kingdom or alliance.
- If a person works in more than one alliance, keep one account and add assignments instead of making duplicate users.

## Related

- [Create a User](create-user.md)
- [Edit a User & Reset Their Password](edit-user.md)
- [Delete a User](delete-user.md)
- [Safety Rules You'll Run Into](../roles/protection-rules.md)
