# Event & Instance Tests

Use this guide to confirm event-type behavior, default-event protection, instance locking, and stage handling.

## Test 1. Default event types

1. Open [Bear Trap](../events/bear-trap.md).
Expected result: it behaves as a score-based single-session event.
2. Open [Viking Vengeance](../events/viking-vengeance.md).
Expected result: it behaves as a score-based single-session event.
3. Open [Alliance Mobilization](../events/alliance-mobilization.md).
Expected result: it behaves as a cumulative score event, not as staged daily scores.
4. Open [Alliance Brawl](../events/alliance-brawl.md).
Expected result: it behaves as a multi-stage event where stage choice matters.
5. Open [Kingdom of Power](../events/kingdom-of-power.md).
Expected result: it behaves as a kingdom-wide multi-stage event.
6. Open [Strongest Governor](../events/strongest-governor.md).
Expected result: it behaves as a multi-stage individual-ranking event.
7. Open [Sanctuary Battle](../events/sanctuary-battle.md).
Expected result: it is treated as participation and control oriented, not as a normal score-first event.

## Test 2. Default-event delete protection

1. Try to delete the default Bear Trap template.
Expected result: the action is blocked with **"Default events can be edited, but they cannot be deleted."**

## Test 3. Lock and unlock cycle

1. Create an event instance.
Expected result: the instance is writable.
2. End it and advance the test clock or data so it is more than 3 days past end.
Expected result: the instance becomes locked.
3. Attempt a write.
Expected result: the write is blocked with **"This event instance is locked. Request unlock or ask a leader to unlock it."**
4. Submit an unlock request.
Expected result: the request is created.
5. Approve the unlock as an authorized reviewer.
Expected result: the instance becomes writable again.
6. Retry the write.
Expected result: the write succeeds.

## Test 4. Alliance Brawl stage import

1. Open an Alliance Brawl instance or import context.
Expected result: stage-aware options are available.
2. Choose **Stage Data** and **Stage 1** for a Day 1 screenshot.
Expected result: the selected stage is stored with the import context.
3. Complete the review and accept flow.
Expected result: the saved result is attached to the correct stage instead of being treated as an unspecified total.
