# Choose a Processor

The processor picker has exactly three user-facing categories: **Free**, **With Keys**, and **Premium**.

Choose a category first, then pick one processor from the compact selector inside that category. The page shows one details card for the current processor instead of a wall of large cards.

## Free

- **Terra Processor** is local, fast, and requires no setup. It now pushes more suspicious OCR rows into review instead of presenting them as confident data.
- **Henod Processor** is the free platform-managed AI option. It never accepts a user key. The app checks both the active runtime environment and the workspace `.env`, so a newly added `OPENROUTER_API_KEY` can be detected without restarting Docker.

## With Keys

- **Gemini** and **OpenAI** remain bring-your-own-key processors. Their keys stay in the browser.

## Premium

**Premium Processor** is available only when all of these are true:

- An admin enabled Premium Processor
- The current kingdom or alliance has the `premium_processing` entitlement
- The platform-managed Premium service is configured
- The service is healthy

If a processor becomes unavailable, the selection remains visible across the header, imports, settings, and KvK instead of silently switching to Terra.

## Related

- [Processing console](processing-console.md)
- [Platform console](../admin/platform-console.md)
- [Processor troubleshooting](../troubleshooting/processors.md)
