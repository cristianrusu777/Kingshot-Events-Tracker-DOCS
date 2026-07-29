# Handle Password Reset Requests

The forgot-password flow can be admin-reviewed or self-service. This page covers the review queue used when administrator approval is enabled.

## Open the request list

1. Open **Admin**.
2. Select **Password requests**.

The list shows:

- what the person typed in **Lookup**
- the matched user, if one was found
- the email address
- the request message
- the current status
- pagination and a status filter

## Review a request

1. Select **Open**.
2. Read the request details.
3. Add a **Resolution note** if your team wants one.

From the detail page, you can:

- resolve or correct the matched account
- **Approve and email one-time reset link**
- **Reject request**

## If you approve

The system:

- revokes older unused reset tokens
- creates a hashed one-time password action token
- emails a reset link that expires after one hour
- returns the request to a retryable pending state if email delivery fails

Approval only works when the request can be matched to a user account that has an email address.

## If you reject

The request is marked rejected. If the matched user has an email address, the system can send the rejection result there as well.

## Good practice

- Approve only when you are comfortable that the request belongs to the real account owner.
- Use the resolution note when the request was unusual or needed manual verification.
- If the account itself needs cleanup, update the user profile after finishing the password request.
- Do not approve your own request.
- Confirm that the target account is inside your permitted review scope.

## Related

- [Reset a Forgotten Password](../getting-started/forgot-password.md)
- [Edit a User & Reset Their Password](edit-user.md)
- [Create a User](create-user.md)
