---
title: 'Plans, Grants, Quotas, and Effective Access'
description: 'The exact precedence for alliance and kingdom plans, accepted grants, allocations, quota warnings, limited mode, and suspension.'
product: 'Kingshot Events'
audience: 'Members and community owners'
experienceLevel: 'Advanced'
featureArea: 'Subscriptions and Usage'
lastReviewed: '2026-08-02'
verifiedAgainstSourceCommit: '0238432f9a614513b1f28a43c438a994a0caaf8a'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Plans, Grants, Quotas, and Effective Access

For an alliance, effective plan source follows fixed precedence: **direct alliance plan**, then **accepted kingdom grant**, then **direct kingdom plan**, then **Free**. A pending grant unlocks nothing. An accepted grant exposes only features marked eligible for grants, not every feature on the kingdom plan. Free capabilities remain available because they are not premium-gated.

```mermaid
flowchart TD
 A["Alliance requests feature"] --> B{"Direct alliance plan active?"}
 B -->|Yes| C["Use alliance plan features"]
 B -->|No| D{"Accepted current kingdom grant?"}
 D -->|Yes| E["Use grant-eligible kingdom features"]
 D -->|No| F{"Direct kingdom plan applies?"}
 F -->|Yes| G["Use kingdom plan features"]
 F -->|No| H["Use Free capabilities"]
 C --> I["Resolve quota and suspension"]
 E --> I
 G --> I
 H --> I
```

**Accessible summary:** Direct alliance access, an accepted eligible grant, a direct kingdom plan, and Free capabilities are checked before quota and suspension determine effective access.

An allocation is the granted alliance's per-resource share of a kingdom quota. Allocations may be made only to granted alliances, and their sum cannot exceed the kingdom limit. Accepting a grant changes entitlement source; it does not assign management roles. Analytics sharing likewise grants no edit access.

Quota percentage is used only when a positive hard limit is enabled: below 80% is Normal, 80% is Warning, 95% is Critical, and 100% is Exceeded. A granted alliance uses its allocation for that resource. A disabled or zero hard limit does not create an exceeded state. Limited mode preserves permitted read and cleanup behavior while blocking quota-consuming writes. Suspension can further restrict effective access even when a plan exists.

**Worked example:** Kingdom 1625 has a plan with grant-eligible premium processing and a player limit. It offers Aster a grant. Before Aster accepts, Aster remains on its direct alliance plan or Free. After acceptance, and only if no stronger direct alliance plan exists, the grant becomes effective. Aster receives the eligible features and its assigned player allocation. At 80% it sees a warning; at 100% a new quota-consuming write is blocked, while existing records and allowed cleanup remain accessible.

## Questions answered

- A direct alliance plan controls the alliance before any kingdom grant.
- A kingdom grant has no effect until accepted and current.
- Exhausted allocation limits that resource for the alliance; unused kingdom capacity is not silently borrowed.
- Analytics sharing does not grant management access.
- Limited mode does not mean all data disappears; the interface identifies the remaining safe actions.
- A plan label alone is insufficient: source, feature eligibility, allocation, current usage, and suspension all contribute to the visible result.

If access appears wrong, compare the selected alliance, source label, grant status and dates, allocation, usage percentage, and suspension message before submitting another request.

## Limitations and recovery

An effective-plan label does not override role or scope checks, and a quota warning does not itself identify which operation consumed usage. If a write is blocked, confirm the resource named in the message, current allocation, accepted-grant dates, and suspension state. Cleanup may reduce usage, but it does not reactivate an expired plan or grant management rights.

## Grant and quota lifecycles

### Kingdom grant lifecycle

```mermaid
stateDiagram-v2
  [*] --> Offered
  Offered --> Accepted: alliance accepts current offer
  Offered --> Declined: alliance declines
  Accepted --> Allocated: eligible resources assigned
  Allocated --> Effective: dates, plan, and feature qualify
  Effective --> Expired: validity ends
  Offered --> Revoked: kingdom withdraws
  Accepted --> Revoked: kingdom withdraws
```

*Grant lifecycle. An offer does not unlock access; acceptance, allocation where needed, dates, and eligible features determine effectiveness.*

**Accessible summary:** Grants move from offer to acceptance and allocation before becoming effective, and can instead be declined, revoked, or expire.

### Quota warning and limited-mode lifecycle

```mermaid
stateDiagram-v2
  [*] --> Normal
  Normal --> Warning: usage reaches 80 percent
  Warning --> Critical: usage reaches 95 percent
  Critical --> Exceeded: usage reaches 100 percent
  Exceeded --> LimitedMode: quota-consuming write attempted
  LimitedMode --> Critical: eligible cleanup lowers usage
  Normal --> Suspended: active suspension
  Warning --> Suspended: active suspension
  Critical --> Suspended: active suspension
```

*Quota and limited-mode lifecycle. Warnings precede the hard boundary; limited mode preserves permitted reading and cleanup while blocking consuming writes.*

**Accessible summary:** Usage advances through normal, warning, critical, and exceeded states; a blocked write enters limited mode, while cleanup can lower usage and suspension can independently restrict access.

## Purpose, controls, roles, and full workflow

Effective-access resolution solves the difference between a displayed plan name and what one scoped user can actually do. The visible controls include plan or request selection, kingdom grant offer and acceptance, per-alliance allocation, feature availability, current usage, and permitted cleanup. Owners and authorized subscription managers can offer, allocate, or review where their role applies; an ordinary member can accept only supported offers or view the resulting access. None of these controls creates roster, event, or Knowledge management permission.

The workflow resolves direct alliance plan first, then an accepted current grant, then direct kingdom plan, then Free. It checks whether the requested feature is included and grant-eligible, applies allocation and quota state, then applies suspension or limited-mode restrictions. The output names effective source, feature result, usage warning, and allowed next action.

**Pending-grant example:** Alliance Aster has no direct plan and receives a kingdom grant, but has not accepted it. The grant remains Offered and unlocks nothing, so Free is effective. After acceptance and an eligible allocation, the grant can become effective. If usage is already at the allocation, a new consuming write is blocked in limited mode while permitted reading and cleanup remain. Acceptance changes entitlement, never leadership authority.
