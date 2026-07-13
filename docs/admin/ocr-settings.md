# Administer OCR Providers

The **Image Processing Settings** area controls which screenshot-processing options users can see and use. The picker always presents exactly three compact categories: **Free**, **With Keys**, and **Premium**.

## Provider controls

Authorized admins can enable or suspend the individual services:

- **Terra Processor** - built-in local OCR, no user key
- **Henod Processor** - a free platform-managed service, with no personal key required
- **Gemini** - bring-your-own-key Google Gemini
- **OpenAI** - bring-your-own-key OpenAI
- **Premium Processor** - platform-managed premium processing

The recommended provider controls the initial suggestion only. A saved user selection remains visible in the header, Imports, Settings, and KvK. The app does not silently swap it to Terra.

## Henod control

Henod is a platform-managed free option and never accepts a personal key. Administrators manage its availability from Image Processing Settings.

When Henod is unavailable, it stays visible in the **Free** category with a clear explanation.

## Premium control

Premium Processor is available only when the service is enabled, healthy, and the current scope includes the required premium feature. The UI distinguishes admin disablement from entitlement or service issues.

## Terra accuracy

Terra preprocesses screenshots with normalized color and grayscale passes, merges complementary OCR reads, and now prefers stronger name candidates when another OCR pass recovers the missing player name for the same rank. Suspicious rows are routed to review instead of treated as ready data.

## Console split

- Use [Processing Services](processing-services.md) and [Processing Console](../imports/processing-console.md) for processor operations.
- Use [Platform Console](platform-console.md) for broader live platform activity.
