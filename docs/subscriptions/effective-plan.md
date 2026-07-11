# Which Plan Applies to You

A plan can reach you from more than one direction, so the app has to decide which one actually counts. The winner is your **[effective plan](../getting-started/glossary.md#effective-plan)** — the one your limits and features come from right now. Your usage panel shows it, along with a **plan source** label telling you *where* it came from.

## The one rule to remember

> **Premium does not flow downhill automatically.** An alliance does **not** become premium just because its kingdom is premium. For an alliance to get the kingdom's premium, the King must **offer** a [grant](../getting-started/glossary.md#grant) and the alliance must **accept** it. Without that explicit offer-and-accept, the alliance stays on its own plan (or the free tier).

There is no silent "inherited" plan. If your alliance isn't premium, having a premium kingdom above you changes nothing until a grant is accepted.

## How the app picks — for an alliance

The app checks these in order and stops at the first one that applies:

```
ALLIANCE — which plan wins?

  1. Direct alliance plan            ──▶  panel shows:  "Direct alliance plan"
        (the alliance has its own subscription)
        │  none?
        ▼
  2. Accepted kingdom grant          ──▶  panel shows:  "Accepted kingdom grant"
        (the King offered the kingdom plan AND the alliance accepted)
        │  none?
        ▼
  3. Free tier                       ──▶  panel shows:  "Free tier"
        (the automatic fallback)
```

Note what is **not** in that list: there is no step where an alliance quietly picks up its kingdom's plan on its own. A kingdom grant only counts once it has been **accepted** — a pending, rejected, revoked, or expired offer does nothing.

## How the app picks — for a kingdom

A kingdom is simpler, because grants are something a kingdom *gives*, not receives:

```
KINGDOM — which plan wins?

  1. Direct kingdom plan             ──▶  panel shows:  "Direct kingdom plan"
        (the kingdom has its own subscription)
        │  none?
        ▼
  2. Free tier                       ──▶  panel shows:  "Free tier"
        (the automatic fallback)
```

## Reading the plan source label

The **plan source** label on your usage panel tells you exactly which tier you landed on:

| Label you see | What it means |
|---|---|
| **Direct alliance plan** | This alliance has its own subscription. |
| **Accepted kingdom grant** | Your King shared the kingdom's plan and your alliance accepted it. |
| **Direct kingdom plan** | This kingdom has its own subscription. |
| **Free tier** | The automatic free fallback — nothing premium is active. |

If your label says **Free tier** and you expected premium, that's your clue: either no plan was ever activated, or a grant was offered but not yet accepted. See [Accept a Premium Offer](accept-grant.md).

## Why this matters

- **Leaders:** if you're waiting on premium from your King, check your plan source. Until it reads *Accepted kingdom grant*, the offer hasn't taken effect — you may still need to [accept it](accept-grant.md).
- **Kings:** offering a grant isn't the finish line. It only counts once the alliance accepts. See [Kingdom Grants](kingdom-grants.md).

## Where to go next

- [Kingdom Grants](kingdom-grants.md) — how a King offers premium to alliances.
- [Accept a Premium Offer](accept-grant.md) — how a leader turns an offer into an active plan.
- [Direct Alliance Subscriptions](direct-alliance-subscription.md) — when an alliance has its own plan instead.
