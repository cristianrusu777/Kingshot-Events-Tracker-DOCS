# Subscription & Grant Tests

Use this guide to confirm the manual subscription flow, grant lifecycle, suspension rules, and quota thresholds.

## Test 1. Direct request cycle

1. Sign in as a role allowed to request premium.
Expected result: **Support & Plans** is available.
2. Create a new subscription request.
Expected result: the request appears as `pending`.
3. Sign in as Supreme Admin and open the request queue.
Expected result: the request is visible.
4. Send payment instructions.
Expected result: the request moves to `awaiting_payment`.
5. Sign back in as the requester and reply in the thread.
Expected result: the reply is stored on the request conversation.
6. Sign back in as Supreme Admin and complete the request with a plan assignment.
Expected result: the request moves to `completed`.
7. Return to the requester scope and inspect the usage panel.
Expected result: the plan is active and the premium features tied to it are available.

## Test 2. Kingdom grant lifecycle

1. Sign in as King for a premium kingdom with grant slots.
Expected result: the grant manager is available.
2. Create a grant offer for an alliance.
Expected result: the offer appears as pending.
3. Sign in as Alliance Leader for that alliance and accept the grant.
Expected result: the alliance plan source changes to an accepted kingdom grant.
4. Open analytics as that Alliance Leader.
Expected result: any grant-carried analytics features become available, including the Kingdom tab only if the grant includes `kingdom_analytics_for_granted_alliances`.
5. Sign back in as King and revoke the grant.
Expected result: the grant ends.
6. Return to the alliance account and re-open analytics.
Expected result: grant-driven premium access is gone again.

## Test 3. Suspension cascade

1. Prepare one directly subscribed alliance and one non-direct alliance under the same kingdom.
Expected result: both are active before the test starts.
2. Suspend the kingdom for `usage_limit` conditions.
Expected result: the non-direct alliance enters limited mode.
3. Check the directly subscribed alliance.
Expected result: it stays active and usable.
4. Check the non-direct alliance.
Expected result: it shows limited or suspended behavior with writes blocked.

## Test 4. Quota thresholds

1. Raise usage of one hard-limited resource to about 80%.
Expected result: a warning banner appears.
2. Raise the same resource to about 95%.
Expected result: a critical warning appears.
3. Raise the same resource to 100%.
Expected result: creation of that specific resource is blocked.
4. Try a new write after the 100% threshold.
Expected result: the UI shows a quota-limit block such as **"Quota limits were reached. New writes are blocked until old resources are cleaned up or additional capacity is granted."**
