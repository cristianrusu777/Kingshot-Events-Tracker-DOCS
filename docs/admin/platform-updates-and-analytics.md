---
title: Platform Updates and Analytics
description: Publish release notes and announcements, then monitor privacy-safe product analytics and reliability.
---

# Platform Updates and Analytics

Platform Console now combines release communication with first-party product analytics.

## Platform Updates access

Update managers can create, edit, preview, schedule, archive, duplicate, and delete unpublished drafts. Publishers can publish, unpublish, and reannounce. Analytics viewers can open product and announcement metrics.

## Create and publish an update

1. Open **Platform Updates**.
2. Select **New draft**.
3. Enter the title, slug, version, category, summary, and plain-text detail.
4. Add ordered change items.
5. Choose public or authenticated visibility.
6. Configure the optional global announcement.
7. Save and preview.
8. Publish now or schedule.

Published edits create a revision snapshot before the change is saved.

Only draft or scheduled updates can be deleted. Published updates can be archived or unpublished.

## Announcement settings

An announcement has:

- title and short summary;
- call-to-action label;
- start and end time;
- dismissible setting;
- priority;
- audience: everyone, anonymous, authenticated, or selected roles;
- version.

Reannounce increments the version. A dismissal applies to one user, announcement, and version, so a later version can be shown again.

## Public update experience

The public archive supports category filters and cursor pagination. Detail pages show ordered change items and adjacent releases. The latest published public release also appears on the public home page.

## First-party analytics

The analytics views use approved product activity and aggregated reporting. Automated traffic is excluded from normal usage reporting, and recent activity does not display signed-in user identities.

## Console tabs

| Tab | Purpose |
|---|---|
| Overview | Period KPI and previous-period comparison |
| Realtime | Active users, anonymous visitors, sessions, routes, features, devices, and browsers |
| Traffic | Aggregated events by route |
| Engagement | Engaged duration, rate, single-page rate, and conversion |
| Features | Aggregated simulator, Knowledge, update, import, and other product events |
| Reliability | Request volume, 4xx/5xx rates, and p50/p95 response time |

## Reporting periods

Choose Today, This week, This month, or Custom, then set the reporting timezone.

The current range is compared with the immediately previous range of the same length. When the previous value is zero, the Console shows no meaningful percentage instead of an infinite or misleading change.

## Real-time semantics

The active total combines signed-in users and anonymous visitors without counting the same visitor twice after sign-in.

## Announcement metrics

The Console reports:

- impressions;
- unique viewers;
- dismissals;
- call-to-action clicks;
- update page views;
- dismissal rate;
- click-through rate.

Use these metrics to check whether an announcement reached its intended audience. They do not replace the release record itself.

## Privacy and operations

- automated traffic is excluded from normal usage reporting;
- duplicate activity is filtered;
- recent activity does not expose signed-in identities;
- aggregation freshness is visible;
- access requires the appropriate Console role.

## Related

- [Platform Console](platform-console.md)
- [25-29 July 2026 System Update](../updates/2026-07-25-29-system-update.md)
