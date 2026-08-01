---
title: 'Alliance Analytics'
description: 'Filter alliance participation, member intelligence, comparisons, and watchlists.'
product: 'kingshot-events'
audience: 'Alliance and kingdom analytics viewers'
experienceLevel: 'Intermediate'
featureArea: 'Analytics'
lastReviewed: '2026-08-01'
---

# Alliance Analytics

The **Alliance** tab explains how one alliance is performing across saved event instances and which member records need closer review.

## Select the alliance and filters

Use the alliance picker when it appears. The **Analytics Filters** panel provides **Date from**, **Date to**, and event type choices for **All event types**, **Bear Trap**, **Alliance Mobilization**, **Alliance Brawl**, **KvK / Power**, and **Alliance events**. **Reset filters** clears all three controls. A date filter changes the contributing event instances, so compare filtered and unfiltered totals carefully.

## Summary and standard sections

The tab can show KPI tiles, **Alliance War Tempo**, **Player Status Distribution**, **Alliance Event Discipline**, **Damage Leaderboard**, and **Power Distribution**. **Event Participation Summary** lists date, event, type, present, missing, unknown, participation, and total score for each eligible instance.

**Member Intelligence** lists rank, warrior, power, Town Center, score, average, points, attendance, missed events, last seen, and status. Select a member row to open Player analytics. **Inactivity Watchlist** is a review prompt based on current analytics state, not an automatic removal decision.

## Premium sections

**Player Comparison** adds participation, average, best, missed, and tracked-event comparisons. **Event / Session Comparison** compares total score with participation across supported sessions. **Explainable Recommendations** may show a source, confidence, and suggested action when the feature is active. When any of these features is unavailable, its section explains that it is locked instead of showing protected results.

Recommendations are decision support. Check the member profile and source event records before changing a roster, reward, or status. The public documentation does not describe the private recommendation calculation.

## Who can use it

Alliance leaders and other assigned viewers normally see their alliance. Kingdom-level viewers can select eligible alliances. A granted analytics viewer may see a shared alliance without gaining edit access. If the picker lists an unexpected alliance, recheck the active kingdom and assignments before continuing.

## Missing or stale values

No members means the selected alliance has no visible player records. No event summary means the date and type filters matched no eligible instances. A member can show low participation because missing and unknown rows are distinct states; inspect the underlying events rather than assuming absence.

Related: [Player analytics](/kingshot-events/analytics/player) and [event review and history](/kingshot-events/events/review-and-history).

## Complete view behavior and worked example

Alliance Analytics reads eligible current results belonging to one selected alliance. Event, stage, participation or attribute, and inclusive date filters apply before grouping. The output can show participation, scores, internal points, status or reward context, trends, and player drill-down. An alliance manager can trace a value to its source, while a granted viewer may receive only read access. Premium availability affects the view, not who owns results.

**Starting situation:** The alliance average changes after the end date adds one occurrence. Drill-down shows Unknown participation rows and no scores. Unknown enters tracked participation but is not Active; unscored rows do not reduce a score average as zeros. The output is explained by participation, not score. If rows are wrong, correct the event batch and recalculate. If the occurrence should be excluded, restore the former boundary rather than deleting evidence.

The view cannot infer attendance from a missing row, rewrite a locked event, or change player identity. Preserve alliance, filters, event dates, result type, player, source batch, and calculation time when troubleshooting.
