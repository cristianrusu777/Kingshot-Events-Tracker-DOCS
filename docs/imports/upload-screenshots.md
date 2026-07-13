# Upload Screenshots

Upload screenshots from the **Imports** page when you want the app to detect rows for review.

## Before you upload

Choose the right context first:

- kingdom
- alliance, when required
- import type
- event
- event date
- stage or total mode, when needed

If the event uses stages, the page can also ask for:

- stage number
- stage date

## Import types

You can upload screenshots for:

- **Alliance players / member list**
- **Event results**
- **Kingdom event results**

The correct type changes which fields are required.

## Stage and total choices

For multi-stage events, the page can show:

- **Stage Data**
- **Total Data**

Use the one that matches the screenshot. Alliance Brawl deserves extra care because its stage choice should be deliberate. See [Alliance Brawl](../events/alliance-brawl.md).

## Processor choice

If your role allows it, choose:

- Terra Processor
- Henod Processor
- Premium Processing (with an eligible plan)
- Gemini or OpenAI (with your own key)

The page also links straight to image-processing settings when you need to switch providers or add a Gemini key.

## Private screenshot access

Uploaded screenshots are private data. In-app previews are available only to signed-in people whose alliance, kingdom, or administrator scope permits access.

Expected behavior:

- not logged in: blocked
- wrong kingdom or alliance scope: blocked
- correct scoped reviewer: allowed
- Supreme Admin: allowed
- deleted imports: file preview is blocked until the import is restored

The response is not stored in shared caches and does not leak the file URL through the `Referer` header.

## What happens after upload

After a successful upload:

- the import appears in history
- the review page opens
- you can inspect, edit, rematch, ignore, or accept rows

## Related

- [Choose an Image-Processing Provider](choose-provider.md)
- [Review Import Rows](review-rows.md)
- [How Screenshot Imports Work](overview.md)

