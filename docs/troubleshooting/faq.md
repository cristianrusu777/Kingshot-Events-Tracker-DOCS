# FAQ

## Why can I see a guide in the docs but not the page in the app?

Docs cover the whole platform, but your role only sees the parts allowed to it. Start with [Roles Explained](../roles/overview.md) and ["You don't have access"](../getting-started/access-denied.md).

## Why is the Kingdom analytics tab missing for my Alliance Leader account?

Alliance leadership does not get that tab from kingdom membership alone. It appears only through an **accepted** kingdom grant carrying the kingdom analytics feature. See [Kingdom Analytics](../analytics/kingdom.md).

## Why did my screenshot import create no live data?

Because upload is review-first. Live data is only written when rows are accepted. See [How Screenshot Imports Work](../imports/overview.md).

## Why did the app warn me before overwriting a result?

That row was a `conflict`, meaning a result already exists for that player and event context. The overwrite warning is expected. See [Accept Rows (Apply an Import)](../imports/apply-import.md).

## Why did rollback not restore every single old value?

Rollback is intentionally cautious. It skips pieces that were changed again later instead of erasing newer unrelated work. See [Delete an Import & Roll Back Its Changes](../imports/delete-and-rollback.md).

## Why does a restored import not instantly bring back all results?

Restore brings the import back as `restored_draft`, not as live data. You still review rows and accept them again if they are still correct. See [Restore a Deleted Import](../imports/restore-import.md).

## Why can I not add results even though the event still exists?

The instance may be locked after the 3-day cleanup window. Use [Locked Instances & Unlock Requests](../how-to/session-lock.md).

## Why did adding one more player suddenly fail?

You likely hit a player quota or another hard resource limit. Check the usage panel and [Quota & Suspension Problems](quotas.md).

## Why can cleanup still run when everything else is blocked?

That is how limited mode is designed. Read access and cleanup stay available so you can recover. See [Suspension & Limited Mode](../subscriptions/suspension.md).

## Why does Alliance Brawl ask me to choose a stage?

Because stage choice matters for that event and should not be guessed. Day screenshots must be imported with the correct stage selection. See [Alliance Brawl](../events/alliance-brawl.md).

## Why is Sanctuary Battle documented differently from score-based events?

Because Sanctuary Battle is primarily a participation and control outcome event, not a normal score-first template. See [Sanctuary Battle](../events/sanctuary-battle.md).

## Why can a King not delete some users in their own kingdom?

Kings are limited by the creator-ownership rule. Some users were not created by that King, or are protected for stronger reasons. See [Safety Rules You'll Run Into](../roles/protection-rules.md).

## Why can I request a restore but not restore directly?

Your role can see the deleted item but does not have direct restore permission. That is exactly what the restore-request flow is for. See [Request & Approve Restores](../how-to/restore-requests.md).

## Why does the plan editor show prices if the app does not bill me?

Those fields are display-only. Payment still happens manually through the request thread and support links. See [Create & Edit Plans](../admin/manage-plans.md) and [Payment Instructions & Completing a Request](../subscriptions/payment-instructions.md).

## Why can a directly subscribed alliance survive a kingdom usage-limit suspension?

That is part of the subscription hierarchy and suspension rules. See [Direct Alliance Subscriptions](../subscriptions/direct-alliance-subscription.md) and [Suspension & Limited Mode](../subscriptions/suspension.md).
