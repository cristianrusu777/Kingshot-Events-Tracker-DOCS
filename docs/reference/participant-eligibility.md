# Participant Eligibility Statuses

An event instance can mark players with different eligibility states. These statuses help reviewers understand whether a saved or imported row clearly belongs in the event snapshot.

## The seven statuses

| Status | Plain meaning |
|---|---|
| `Eligible` | The player cleanly belongs in this event snapshot. |
| `Left during event` | The player left during the event window, so later rows may need care. |
| `Joined after start` | The player was first seen after the instance had already started. |
| `Transferred` | The player's current alliance differs from the event alliance. |
| `No alliance` | The player currently has no alliance. |
| `Not eligible` | The current rules say this player should not count automatically. |
| `Needs review` | The tracker could not safely decide without a human check. |

## Why these appear

These statuses are shaped by the event's policy settings, especially:

- snapshot mode
- new joiner policy
- membership change policy
- leave policy

Those are configured in [Configure Event Settings](../how-to/event-settings.md).

## How to use them

- treat **Eligible** as clean
- treat everything else as a sign to review the event context more carefully
- do not assume **Transferred** means the score should move to the new alliance

In fact, transfer cases are often kept with the original event alliance and flagged for review.

## Where you see them

Eligibility appears on instance detail pages, especially in the participant snapshot section.

## Related

- [Work Inside an Instance](../how-to/instance-detail.md)
- [Configure Event Settings](../how-to/event-settings.md)
