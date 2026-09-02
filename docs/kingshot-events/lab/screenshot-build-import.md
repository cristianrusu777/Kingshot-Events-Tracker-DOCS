---
title: 'Import Your Lab Build from Screenshots'
description: 'Review recognized gear, stats, and resources before applying selected values to your Lab build.'
product: 'kingshot-events'
audience: 'Lab users entering or updating a build'
experienceLevel: 'Intermediate'
featureArea: 'Simulations and Optimizations'
lastReviewed: '2026-09-03'
verifiedAgainstSourceCommit: '6bfaf6e0a6a8ceb8d6dcf09ead5ad5a9f85185d0'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Import Your Lab Build from Screenshots

Screenshot import can shorten the work of entering a build, but the review step is what makes it useful. The tool proposes recognized values; you decide which ones accurately describe your account.

This is different from importing event results. A Lab build import updates planning inputs, not alliance scores or event history.

## Add the relevant screens

Where **Import from screenshots** or **Update from screenshots** is available, open it and choose, drag, or paste your images. A session supports up to six PNG, JPEG, or WebP screenshots. Use the screenshot type selector if automatic detection needs help.

Supported groups include Hero Gear, Governor Gear, Charms, combat stats, and owned resources. The current tool may offer only the groups it uses. Crop images to the relevant game screen and remove chat, contact information, and other unrelated details before uploading.

Analyze the selection and wait for the review. Some images may succeed while others fail; inspect the successful results and retry only what still needs attention. If import is unavailable, use manual input instead of waiting to start a plan.

## Confirm only what you can verify

The review distinguishes new or changed values, unchanged values, uncertain readings, and conflicts. Compare each selected field with the original screenshot and the saved value.

- Correct a recognized number when the image supports the correction.
- Choose the resource or Governor Gear piece when a recognized value needs a clearer destination.
- Leave a field unselected if it is not reliable.
- Resolve conflicts rather than treating the latest-looking number as automatically correct.
- Do not import a shop price, reward preview, or upgrade cost as owned inventory.

Confirming applies the selected valid changes. It does not need to replace every field in the profile. Unselected values are not a command to clear your existing build.

**Example:** A screenshot clearly shows a Charm level but its resource amount is obscured. Confirm the level, leave the uncertain amount out, then enter the actual balance manually. You can begin planning without pretending the unreadable field was verified.

## Check the result before running

After confirmation, review the affected build sections and the import timestamp. A source label means the value came from a confirmed import, not that every image or every field was correct. Recalculate any existing optimizer result so it uses the changed inputs.

Saving follows the active Lab workspace: browser-only profiles remain device-local, while eligible signed-in workspaces use their account saving behavior. Image processing is not the same thing as a browser-only calculator; do not assume uploaded screenshots stay only on your device.

See [profiles and autosave](/kingshot-events/lab/profiles-and-autosave) for save conflicts and [Ascension Path](/kingshot-events/lab/ascension-path) for comparing the confirmed build with temporary scenarios.
