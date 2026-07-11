# Handle Password Reset Requests

The forgot-password flow in this tracker is admin-reviewed. Users submit a request, and an authorized admin decides whether to approve or reject it.

::: warning TODO screenshot

**Page:** Handle Password Reset Requests  
**Role:** User with access to this page  
**State:** Open the screen at the point described in the steps below  
**What should be visible:** The complete page, the action being explained, and any warning or confirmation message  
**Suggested filename:** `images/admin-password-requests.png`

:::

## Open the request list

1. Open **Admin**.
2. Select **Password requests**.

The list shows:

- what the person typed in **Lookup**
- the matched user, if one was found
- the email address
- the request message
- the current status

## Review a request

1. Select **Open**.
2. Read the request details.
3. Add a **Resolution note** if your team wants one.

From the detail page, you can:

- **Approve and email temporary password**
- **Reject request**

## If you approve

The system:

- creates a fresh temporary password
- forces the user to change it at next login
- emails the temporary password to the matched user's saved email address

Approval only works when the request can be matched to a user account that has an email address.

## If you reject

The request is marked rejected. If the matched user has an email address, the system can send the rejection result there as well.

## Good practice

- Approve only when you are comfortable that the request belongs to the real account owner.
- Use the resolution note when the request was unusual or needed manual verification.
- If the account itself needs cleanup, update the user profile after finishing the password request.

## Related

- [Reset a Forgotten Password](../getting-started/forgot-password.md)
- [Edit a User & Reset Their Password](edit-user.md)
- [Create a User](create-user.md)
