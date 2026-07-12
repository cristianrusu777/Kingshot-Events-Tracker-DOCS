# Processing Services

Open **Admin -> Processing Services** to monitor processor health and use the processing-specific live console.

## What the page shows

Each processor card reports:

- exact availability state
- running jobs
- recent failure count
- success rate
- average duration
- last error
- last successful processing window

## Henod

Henod now resolves its server key from the active runtime first and then from the workspace `.env`. The expected server variable is `OPENROUTER_API_KEY`.

If Henod is unavailable, the page distinguishes:

- missing server key
- suspended by admin or credit exhaustion
- upstream health-check failure

Use **Re-check Henod** after restoring capacity. A successful check clears stale automatic suspension.

## Premium Processor

Premium Processor distinguishes these states precisely:

- disabled by admin
- subscription required
- implementation unavailable
- available

It no longer tells entitled users they are missing Premium when the actual problem is admin disablement or missing platform configuration.

## Related

- [Platform console](platform-console.md)
- [Processing console](../imports/processing-console.md)
