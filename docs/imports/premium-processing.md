# Premium Processing

**Premium Processing** is a platform-managed vision-AI processor for the most accurate screenshot imports. Unlike the bring-your-own-key options (Gemini, OpenAI), it needs **no personal API key** — the platform runs and pays for the model on your behalf as part of a premium subscription.

## Why it exists

The two free processors are convenient but imperfect: Terra Processor can misread stylized game text, and Henod Processor depends on shared free capacity. Premium Processing uses a modern vision model with zero setup, so premium subscribers get reliable, high-accuracy extraction without managing keys.

## What powers it

- A modern vision-AI model, **Gemini Flash by default**, called with a server-side platform key.
- The model is cheap enough that cost stays well within a small subscription: roughly a fraction of a cent per screenshot, so ~100 uploads cost well under €1.
- The engine is configurable by the operator (see *For operators* below).

Like every processor, results are review-first — detected rows are drafts until you accept them.

## When you can use it

Premium Processing appears and becomes selectable on the imports page only when **all three** are true:

1. **Enabled** — an admin has enabled Premium Processing.
2. **Entitled** — your kingdom or alliance has an active plan that includes the **Premium Processing** feature.
3. **Configured** — the server has a platform vision-AI key set.

If one is missing, the card tells you which:

| Status shown | Meaning |
| --- | --- |
| `Disabled by admin` | Turned off in Image Processing Settings |
| `Premium plan required` | Your context has no premium plan with this feature |
| `Not configured` | No platform key is set on the server |
| `Included in plan` | Ready to use |

## How to use it

1. Open **Imports**.
2. In the **Premium processors** group, select **Premium Processing**.
3. Upload or paste your screenshot as usual.
4. Review the detected rows and accept them.

No key entry, no per-user configuration.

## For operators

Premium Processing is controlled by environment variables:

| Variable | Default | Purpose |
| --- | --- | --- |
| `PREMIUM_LLM_API_KEY` | falls back to `GEMINI_API_KEY` | Platform key used for premium imports |
| `PREMIUM_LLM_MODEL` | `gemini-2.5-flash` | Vision model used for premium imports |
| `PREMIUM_LLM_BASE_URL` | Gemini v1beta endpoint | Override for a compatible endpoint |

Leaving `PREMIUM_LLM_API_KEY` blank reuses the system `GEMINI_API_KEY`, so a single configured key can power both env-fallback and premium.

Entitlement is enforced server-side: an upload that selects Premium Processing is rejected with a clear error unless the subject's active subscription includes the `premium_processing` feature and the platform key is present. The user's own keys are never forwarded for premium requests.

## Related

- [Choose an Image-Processing Provider](choose-provider.md)
- [Set Up Your Gemini API Key](gemini-key.md)
- [Administer OCR Providers](../admin/ocr-settings.md)
- [Subscriptions overview](../subscriptions/overview.md)
