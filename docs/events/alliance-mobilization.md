# Alliance Mobilization

Alliance Mobilization is the default template for the multi-day mission event where scores build toward one running total across the event window.

## How this default is set up

- event style: multi-day
- score entry: cumulative total
- score label: **Points**
- default duration: 7 days
- participation tracked: yes

This is the main default where **later imports update the running total** instead of behaving like separate one-off scores.

## What cumulative scoring means

In this event, the score for a player is treated as their latest known total for that date.

Example:

1. On Day 2, you import a row showing `Player A = 12,000`.
2. On Day 4, you import a row showing `Player A = 19,500`.

The tracker does not add those together as `31,500`.

Instead, it understands that:

- `12,000` was the running total on Day 2
- `19,500` was the running total on Day 4

So the latest total becomes `19,500`, and analytics can derive the gain between days.

## What to import

Upload the personal points ranking for the correct date inside the event window.

The date matters here more than it does in single-session events, because each dated import updates that day's cumulative snapshot.

## What to watch out for

- do not treat repeated imports as separate stage scores
- make sure the event date matches the day shown in the screenshot
- if you re-import the same date, you are updating that day's snapshot rather than creating a second total

## Why this matters for analytics

Because the tracker stores dated totals, it can show:

- latest known total
- day-to-day gains
- missing dates in the event window

## Protection note

This is a default template, so it is **editable but not deletable**. See [Safety Rules You'll Run Into](../roles/protection-rules.md).

## Related

- [The Default Events](default-events.md)
- [Create an Event Instance](../how-to/create-instance.md)
- [Work Inside an Instance](../how-to/instance-detail.md)
- [Upload Screenshots](../imports/upload-screenshots.md)
