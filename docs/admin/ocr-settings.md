# Administer OCR Providers

The **Image Processing Settings** area controls which screenshot-processing options users can see and use. The picker always presents exactly three compact categories: **Free**, **With Keys**, and **Premium**.

## Provider controls

Authorized admins can enable or suspend the individual services:

- **Terra Processor** - built-in local OCR, no user key
- **Henod Processor** - free system-managed AI, using the server OpenRouter key
- **Gemini** - bring-your-own-key Google Gemini
- **OpenAI** - bring-your-own-key OpenAI
- **Premium Processor** - platform-managed premium vision AI

The recommended provider controls the initial suggestion only. A saved user selection remains visible in the header, Imports, Settings, and KvK. The app does not silently swap it to Terra.

## Henod control

Henod uses the server `OPENROUTER_API_KEY` with free models only. It is never exposed as a user-key processor. The runtime now checks both `process.env` and the workspace `.env`, so adding the system key no longer requires a Docker restart just to be detected by status and request flows.

When Henod is suspended, missing server credentials, or automatically suspended after shared-credit exhaustion, it stays visible in the **Free** category with a clear explanation.

## Premium control

Premium Processor is available only when the service is enabled, configured, healthy, and the current scope has the `premium_processing` subscription feature. The UI distinguishes admin disablement from entitlement or service issues.

## Terra accuracy

Terra preprocesses screenshots with normalized color and grayscale passes, merges complementary OCR reads, and now prefers stronger name candidates when another OCR pass recovers the missing player name for the same rank. Suspicious rows are routed to review instead of treated as ready data.

## Console split

- Use [Processing Services](processing-services.md) and [Processing Console](../imports/processing-console.md) for processor operations.
- Use [Platform Console](platform-console.md) for broader live platform activity.
