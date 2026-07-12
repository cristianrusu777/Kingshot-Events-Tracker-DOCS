# Henod Processor

**Henod Processor** is a free, higher-accuracy processor fully managed by the platform. Users do not configure or paste a key for it.

## Using it

Open Imports or KvK, choose **Free**, then select **Henod Processor** from the compact processor selector. Upload the screenshot and review the detected rows before applying them.

## Availability

Henod remains visible in the Free category. It is selectable only when the system key is configured, the service is enabled, and the shared account is not automatically suspended. If it is unavailable, the picker names the reason, such as missing server credentials, an admin suspension, shared-credit exhaustion, or an upstream service failure.

If the upstream service reports shared-credit exhaustion, the platform suspends Henod for new work so uploads fail quickly and clearly rather than waiting indefinitely. Choose Terra, a user-key processor, or Premium if available. Users are never redirected to enter an OpenRouter key.

## For operators

Henod uses the server `OPENROUTER_API_KEY` and only free models (`openrouter/free` or an explicit `:free` model). Once capacity is restored, an admin uses **Admin → Processing Services → Re-check Henod** to verify the service and clear a stale automatic suspension. Health checks and errors are visible in the Processing Console without exposing the credential.

## Related

- [Processor categories](processor-categories.md)
- [Processing console](processing-console.md)
- [Administer OCR providers](../admin/ocr-settings.md)
