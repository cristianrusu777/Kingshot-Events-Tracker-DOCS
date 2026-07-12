# Administer OCR Providers

The **Image Processing Settings** area controls which screenshot-processing options users can see and use. The picker always presents exactly three compact categories: **Free**, **With Keys**, and **Premium**.

## Provider controls

Authorized admins can enable or suspend the individual services:

- **Terra Processor** — built-in local OCR, no user key
- **Henod Processor** — free system-managed AI, using the server OpenRouter key
- **Gemini** — bring-your-own-key Google Gemini
- **OpenAI** — bring-your-own-key OpenAI
- **Premium Processing** — platform-managed premium vision AI

The recommended provider controls the initial suggestion only. A saved user selection remains visible in the header, Imports, and KvK; it is never silently swapped for Terra.

## Henod control

Henod uses the server `OPENROUTER_API_KEY` with free models only. It is never exposed as a user-key processor. When it is suspended, missing server credentials, or automatically suspended after shared-credit exhaustion, it stays visible in the **Free** category with an explanation and cannot be selected.

After restoring capacity, open **Admin → Processing Services** and use **Re-check Henod**. A successful health check clears a stale automatic suspension. Failed checks are recorded in the processing console without exposing credentials.

## Premium control

Premium Processing is available only when the service is enabled, configured, healthy, and the user has the `premium_processing` subscription feature. The interface distinguishes each failed condition rather than displaying a misleading entitlement message.

## Terra accuracy

Terra preprocesses screenshots with normalized colour and grayscale passes, then reconciles the best candidate rows. It keeps raw OCR evidence and routes malformed names, unsafe values, unusually small alliance power, and low-confidence rows to review. It is suitable for clear screenshots, but difficult stylized screenshots may benefit from Henod, Premium, Gemini, or OpenAI.

## Diagnostics and operations

The diagnostics/status surfaces report local OCR availability, preprocessing capability, provider enablement, selected provider, current jobs, recent failures, duration, and last error. Use the [Processing Services](processing-services.md) page and [Processing Console](../imports/processing-console.md) for live operations.

## Related

- [Processor categories](../imports/processor-categories.md)
- [Henod Processor](../imports/openrouter-free-ai.md)
- [Premium Processing](../imports/premium-processing.md)
