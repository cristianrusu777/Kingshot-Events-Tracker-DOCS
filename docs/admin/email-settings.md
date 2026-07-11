# Email Settings

This guide is mainly for `Supreme Admin` users. Some setups may also let a `King` open the page.

The Email Settings page controls whether the app uses **Mock Email** or **SMTP Email**, and lets you send a test message.

> Screenshot placeholder: `admin-email.png` (S77)

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

The exact list of app events that send email is still something you should **verify in the app or check with your admin** rather than relying on a fixed checklist here.

That is the cautious approach for this documentation because the planning notes still flag the full trigger list as unverified.

## Good practice

- use Mock Email in development or test setups
- switch to SMTP for real delivery
- send a test after any SMTP change
- keep the support contact current so users know who to reach
