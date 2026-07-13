# Choose an Image-Processing Provider

The imports page lets eligible users choose which processor reads screenshot images. Processors are organized into exactly three user-facing categories: **Free**, **With Keys**, and **Premium**.

![Image-processing settings and provider controls](../images/ocr-admin-full.png)

## Responsive behavior

On mobile:

- category selector fits as compact segmented controls or scrolls horizontally;
- processor selector is full width;
- the selected processor details card is compact;
- normal users see safe availability messages only;
- admin diagnostics are hidden from normal users.

On tablet:

- categories can appear in columns;
- details appear below the selected processor;
- diagnostics wrap instead of overflowing.

## Free

### Terra Processor

The built-in default. Nothing to set up.

- **+** Always available, no setup
- **+** Fast and free
- **+** Nothing to configure
- **−** Best on clear screenshots
- **−** Large numbers may need a check
- **−** Manual review recommended

### Henod Processor

A stronger free processor, managed by the platform — no user key needed.

- **+** Higher accuracy on tough screenshots
- **+** Free to use
- **+** No setup needed
- **−** May be unavailable if the shared service/key is not configured or is suspended

Normal users see a safe message if Henod is temporarily unavailable. Supreme Admins can inspect sanitized diagnostics in Processing Services.

## With Keys

Use your own account with a provider you already pay for.

- **Gemini** — see [Set Up Your Gemini API Key](gemini-key.md)
- **OpenAI** — see [Set Up Your OpenAI API Key](openai-key.md)

## Premium

### Premium Processor

The platform-managed premium option. It appears as available when:

1. admin enables Premium Processor;
2. the selected/current scope has `premium_processing` entitlement;
3. the backend runtime has the premium provider key/model configured;
4. the service is healthy.

If configuration is broken, normal users see a safe technical-unavailable message. Supreme Admin diagnostics show expected env names and sanitized status without exposing secret values.

## Processor category flow

```mermaid
flowchart TD
  A[Choose category: Free / With Keys / Premium] --> B[Choose processor]
  B --> C[Read selected details and status]
  C --> D{Available?}
  D -- Yes --> E[Upload / process screenshot]
  D -- No --> F[Pick another processor or ask admin]
```

Every processor is review-first: detected rows are drafts until you accept them.

## One source of availability

The backend is the source of truth for availability. The header chip, import picker, KvK picker, and settings all use the same effective provider state. A processor that is unavailable is visibly unavailable and cannot be selected for a new import.

Henod may be automatically suspended after an upstream credit or health failure. In that case it is also treated as disabled for new work until a Supreme Admin verifies it from **Processing Services**. The public message stays generic; only Supreme Admin diagnostics show safe operational context.

## Related

- [Upload Screenshots](upload-screenshots.md)
- [Review Rows](review-rows.md)
- [Premium Processing](premium-processing.md)
- [Processing Services](../admin/processing-services.md)
- [Processing Console](processing-console.md)
