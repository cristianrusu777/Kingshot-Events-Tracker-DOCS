# Processing Services

Open **Admin → Processing Services** to monitor provider state and use the live console.

## What is monitored

The page shows a concise health card for each processor: its current availability, jobs currently running, failures in the last 24 hours, success/error rate, average duration, most recent attempt, and the last readable error. It intentionally reports queue/load activity rather than unreliable host CPU or RAM figures.

## Terra Processor

Terra is the local, no-key processor. Its health card reports local availability and the processing metrics above. Terra compares complementary OCR passes and marks malformed names, unsafe numbers, or implausible scores for review instead of treating them as ready rows.

## Henod Processor

Henod is the system-managed free AI processor. Its card distinguishes a usable service from a missing server key, an admin suspension, an automatic shared-credit suspension, and an upstream failure. Credit balance is shown as **unknown** unless the upstream provider supplies an authoritative value; the app never guesses a balance.

Use **Re-check Henod** after restoring provider capacity or after a temporary failure. A successful check clears a stale automatic suspension. A failed check writes a safe, readable console event and never reveals the service credential.

## With Keys and Premium

Gemini and OpenAI show whether they are enabled and require a user browser key. Premium Processing shows one precise state: disabled by admin, subscription required, implementation unavailable, or available. A user is never told they need a subscription when the service is actually disabled or unconfigured.

## Related

- [Processor categories](../imports/processor-categories.md)
- [Processing console](../imports/processing-console.md)
- [Processor troubleshooting](../troubleshooting/processors.md)
