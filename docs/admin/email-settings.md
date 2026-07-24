# Email Settings

This guide is mainly for `Supreme Admin` users. Some setups may also let a `King` open the page.

The Email Settings page controls whether the app uses **Mock Email** or **SMTP Email**, and lets you send a test message.

## What you can configure

The page includes:

- provider choice: **Mock Email** or **SMTP Email**
- SMTP host
- SMTP port
- SMTP username
- SMTP password
- secure-connection toggle
- from email
- from name
- test recipient email
- support contact

The current password is not shown back to you. If a password already exists, the form lets you leave it blank to keep the current one.

## Testing

Use **Send test email** after saving to confirm the current setup can send mail the way you expect.

## Which system emails are sent

The app sends email only for a small set of **account events** - all tied to logging in. There are exactly three automatic messages, plus the manual test email:

| Event that triggers it | Who receives it | What it contains |
|---|---|---|
| A **registration request is approved** | the new user | a welcome message with their username, a temporary password, a login link, and their assigned role/kingdom/alliance |
| A **password‑reset request is approved** | the user | a temporary password and a login link |
| A **password‑reset request is rejected** | the user | a notice that the request was declined (no password) |
| **Admin resets a user's password** (from the Edit User page) | that user | a temporary password and a login link |
| **Send test email** (this page) | the test recipient you enter | a sample message to confirm delivery works |

> The last two both use the "password reset" message; the "admin reset" one fires from the user‑management page rather than the reset‑request queue.

**No email is sent** for anything else. In particular, the app does **not** email on: a registration request being *rejected* or marked *needs more info*, subscription/quota/suspension changes, imports, event or player changes, or reports. Those are shown in the app only.

## Castle appointment emails

Castle Positions can use a kingdom-specific sender and notification mode for published appointment changes. These notifications are conditional: sender availability, mode, opted-in contact and delivery can cause a message to be sent, skipped, disabled or fail. They are not a delivery guarantee. See [Castle notifications](../castle-positions/notifications-and-email.md). Registration requests rejected or marked *needs more info*, subscription/quota/suspension changes, imports, event/player changes and reports remain in-app outcomes rather than general email broadcasts.

## Good practice

- use Mock Email in development or test setups
- switch to SMTP for real delivery
- send a test after any SMTP change
- keep the support contact current so users know who to reach
