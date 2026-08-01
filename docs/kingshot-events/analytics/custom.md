---
title: 'Custom Analytics'
description: 'Build a scoped analytics table and chart with current metrics and groupings.'
product: 'kingshot-events'
audience: 'Premium analytics viewers'
experienceLevel: 'Advanced'
featureArea: 'Analytics'
lastReviewed: '2026-08-01'
---

# Custom Analytics

The **Custom** tab builds a chart and table from the records already visible in the active scope. It is labeled **Custom (Premium)** and shows a locked state until Custom Analytics is active.

## Builder controls

- **All events** or one event narrows the source records.
- **Date from** and **Date to** limit event dates. Leaving either blank keeps that side of the range open.
- **Metric** can be **Total score**, **Average score**, **Participation rate**, **Row count**, or **Active count**.
- **Group by** can be **event**, **date**, **player**, **alliance**, **category**, or **status**.

Changing a control refreshes the request. Choose combinations that answer one question at a time. For example, group participation rate by event to compare attendance, or group total score by alliance for a scoped alliance comparison.

## Results

**Custom Metric Trend** plots the selected metric. **Top Groups** shows the leading groups with row count and participation context. **Custom Analytics Table** includes group, selected metric, total score, average score, participation, rows, and active count. Expand the table when the chart hides useful detail.

Row count is the number of contributing records, not necessarily the number of unique players. Average score depends on scored records. Participation and active count depend on saved attendance and current player analytics state. Comparing unlike groups can therefore produce a technically correct but unhelpful result.

## Empty and unavailable results

An empty result usually means the selected event and dates have no eligible data in the active scope. Clear the event or widen the dates, then check the source event history. A locked notice means the subscription feature is unavailable, not that the current filters are wrong.

Custom analytics is read-only. Correct source data from the relevant event, import, or player workflow, then return and reload the view.

## Complete view behavior and worked example

Custom Analytics lets an eligible premium viewer combine supported dimensions and filters without becoming an unrestricted data query. Inputs remain current accepted player results. The user selects an authorized scope, event set, stage or result type where available, inclusive dates, and supported grouping, participation, attribute, or sorting controls. Eligibility and filters run before grouping; the result cannot pull records from an unauthorized kingdom or alliance.

The output names active controls so another viewer can reproduce it, and drill-down preserves those boundaries. Recalculation replaces derived output after source or rule changes. A shared or granted viewer qualifies only when the effective feature and sharing rules allow it, and remains read-only. Premium access never supplies management authority.

**Worked example:** A viewer groups by alliance for two events and filters to one attribute. Red appears empty. Clearing only that attribute reveals Red, proving scope, dates, and events were valid. The empty output reflected attribute eligibility, not deleted results. Custom combinations can be precise but misleading when filters are forgotten; they cannot infer missing rows or guarantee statistical significance. Preserve every filter, scope, feature state, grouping, and one missing source identity for troubleshooting.
