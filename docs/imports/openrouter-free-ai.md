# Set Up Free AI Extraction

Free AI Extraction sends the uploaded screenshot to a free vision model through OpenRouter. Imports are still drafts: review every detected row before accepting it.

## When the option is hidden

While the platform system OpenRouter key is active, the personal Free AI option and key form are hidden.

## When the system key is suspended

The Free AI provider becomes visible, and Settings explains that a personal key is required.

1. Open [OpenRouter Keys](https://openrouter.ai/keys).
2. Sign in and select **Create Key**.
3. Copy the key. Treat it like a password.
4. In the tracker, open **Settings → Image Processing**.
5. Select **Free AI Extraction**, paste the key, leave the model as `openrouter/free`, and select **Save locally**.

The personal key is stored in that browser and sent only with Free AI import requests. It is not saved in the application database.

## Free-only protection

The server accepts only:

- `openrouter/free`
- an explicit model identifier ending in `:free`

Other model identifiers are rejected to prevent accidental paid inference.

## Limitations

OpenRouter may route `openrouter/free` to different compatible vision models as availability changes. A request can be rate-limited or temporarily unavailable. Correct, rematch, or ignore uncertain rows in the review screen.

## Related

- [Choose an Image-Processing Provider](choose-provider.md)
- [Review Detected Rows](review-rows.md)
- [Administer OCR Providers](../admin/ocr-settings.md)
