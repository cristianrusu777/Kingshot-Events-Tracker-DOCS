---
title: 'Kingdom Analytics'
description: 'Read kingdom trends, alliance standings, and granted aggregate analytics.'
product: 'kingshot-events'
audience: 'Kings, kingdom managers, and granted analytics viewers'
experienceLevel: 'Intermediate'
featureArea: 'Analytics'
lastReviewed: '2026-08-01'
---

# Kingdom Analytics

The **Kingdom** tab compares eligible alliances and players across the active kingdom. It is intended for kingdom-level review, not for changing an alliance roster or result.

## What appears

The overview combines kingdom population, power, score, internal points, and participation summaries with **Kingdom War Tempo**, **Alliance Power Ranking**, **Kingdom Event Discipline**, **Event Focus**, and an alliance standings table. Full kingdom viewers may also see **Kingdom Champions** and can open a player. Rows in **Alliance Standings** show rank, alliance, members, power, event score, points, participation, and active or at-risk counts. Opening an alliance moves to its Alliance tab.

## Full and granted views

The tab is hidden when the account has no kingdom analytics path. With ordinary kingdom access it is labeled **Kingdom**. With an analytics sharing grant it can be labeled **Granted Kingdom** and uses an aggregate-only presentation. The granted view supports cross-alliance situational awareness but does not make the viewer a kingdom manager, reveal unrelated private controls, or grant result-editing rights.

When a kingdom stops sharing granted analytics, the tab and shared summaries can disappear immediately on the next access check. Previously viewed information should not be treated as continuing authorization.

## Safe review workflow

1. Confirm the kingdom context in the application shell.
2. Check whether the tab says **Kingdom** or **Granted Kingdom**.
3. Compare alliance participation with the number of eligible saved event records.
4. Open an alliance for member-level context only when that drill-down is available.
5. Trace a surprising value to the related event history before making a reward or roster decision.

## Limitations

Alliance comparisons are only as complete as the underlying events and results. A newly added alliance, an event excluded from analytics, or a period with missing imports can make rankings misleading. Aggregate access can intentionally omit player-level detail.

See [sharing, access, and missing data](/kingshot-events/analytics/sharing-and-troubleshooting) when the tab is absent or an expected alliance is missing.

## Complete view behavior and worked example

Kingdom Analytics starts with current eligible participation and score results attached to the selected kingdom and its permitted child alliances. Event, stage, result type, and inclusive start and end boundaries are applied before grouping. Deleted rows and unapplied import proposals do not contribute. Missing rows are absent evidence, Unknown is a tracked participation state, and missing scores do not become zero.

The view groups supported totals and rates across the kingdom, then exposes alliance or player drill-down where access permits. Recalculation replaces derived summaries after source correction. A direct kingdom role can qualify; an accepted eligible Analytics grant can instead provide a read-only view. The grant does not permit roster, result, or reward-rule edits. Premium state can control availability without changing source eligibility.

**Worked example:** Alliance Red appears but Blue does not. Preserving event and date filters, the viewer finds Blue's screenshot rows are accepted but not applied. Reviewed proposals are not Analytics inputs. An authorized Blue manager applies the eligible batch and recalculation adds the rows. The shared viewer verifies output but cannot apply it. Troubleshoot with kingdom, event, dates, alliance, source batch state, access source, and recalculation time.
