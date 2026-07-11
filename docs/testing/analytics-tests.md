# Analytics & Premium Gating Tests

Use this guide to confirm locked and unlocked states for premium analytics and the special Kingdom-tab grant rule for alliance leadership.

## Test 1. Player cross-event analytics

1. Sign in as Alliance Leader or Co-Leader without the premium player feature.
Expected result: the **Player** tab shows a locked premium prompt.
2. Assign a premium plan carrying player cross-event analytics.
Expected result: the **Player** tab unlocks.
3. Search for a player and open the tab.
Expected result: cross-event charts, rankings, and the event breakdown appear.
4. Remove the premium plan or the relevant grant.
Expected result: the tab returns to the locked state.

## Test 2. Custom analytics

1. Sign in without the custom analytics feature.
Expected result: the **Custom** tab shows a locked premium prompt.
2. Assign a premium plan carrying custom analytics.
Expected result: the **Custom** tab unlocks.
3. Open the tab.
Expected result: event filters, date filters, metric and grouping selectors, a trend chart, and the custom table are visible.
4. Remove the premium plan or the relevant grant.
Expected result: the tab returns to the locked state.

## Test 3. Recommendations

1. Sign in without the premium recommendation features.
Expected result: the recommendation areas show locked notices instead of the premium follow-up content.
2. Assign a premium plan carrying recommendation features.
Expected result: the relevant recommendation areas unlock.
3. Open alliance analytics.
Expected result: watchlists and recommendation-driven follow-up content appear.
4. Remove the premium plan or the relevant grant.
Expected result: the locked notices return.

## Test 4. Kingdom tab visibility for Alliance Leader

1. Sign in as Alliance Leader with no accepted kingdom grant.
Expected result: the Kingdom tab is not visible.
2. Offer and accept a kingdom grant that includes `kingdom_analytics_for_granted_alliances`.
Expected result: the Kingdom tab appears for that alliance leadership scope.
3. Open the Kingdom tab.
Expected result: the view opens in the granted aggregate mode rather than full kingdom-admin detail.
4. Revoke the grant.
Expected result: the Kingdom tab disappears again.
