# Share Kingdom Quotas with Allocations

When a King [grants](kingdom-grants.md) the kingdom's premium plan to several alliances, they all draw on the **same** kingdom limits. **Allocations** let a King divide those limits up - giving each granted alliance its own slice - so one alliance can't use up everything. This guide is for **Kings** (and Supreme Admins).

## What an allocation is

An **[allocation](../getting-started/glossary.md#allocation)** is a per-alliance cap on a specific resource, carved out of the kingdom's plan limit. For example, if your kingdom plan allows 5,000 players in total, you might allocate 1,000 to one granted alliance and 800 to another.

You set allocations from the same **kingdom detail page** where you manage grants.

![Grant and allocation table on the kingdom page](../images/subs-grants-king.png)

## The rules

- You can only allocate to an alliance that has a grant (offered or accepted). Allocating to an alliance you haven't granted to is refused.
- **Allocations only take effect once the grant is accepted.** Setting them up on a pending offer is fine, but they do nothing until the alliance accepts.
- For each resource, the **total you allocate across alliances can't exceed the kingdom's own limit**. If you try, the app blocks it with an "allocation exceeds kingdom quota" message.

## Setting allocations

1. Open your kingdom detail page.
2. In the allocation table, find the granted alliance.
3. Set the per-resource amounts you want to reserve for that alliance.
4. Save.

The table shows your totals against the kingdom limit so you can see how much is still unallocated.

## How allocations interact with a granted alliance's limits

For an alliance running on a granted kingdom plan, the app decides its limit for each resource in this order:

1. A **special override** for that alliance (if a Supreme Admin set one).
2. The **allocation** you gave it (if any).
3. Otherwise, the **plan's** own limit.

So an allocation is the King's way of saying "this granted alliance gets *this much* of the kingdom plan," without changing the plan itself.

## If you revoke the grant

Revoking a grant removes that alliance's allocations along with it. If you re-grant later, you'll set allocations again.

## Where to go next

- [Kingdom Grants](kingdom-grants.md) - offering premium to alliances in the first place.
- [Quota Warnings](quota-warnings.md) - what a granted alliance sees as it approaches its allocated limits.
