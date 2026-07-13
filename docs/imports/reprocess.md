# Reprocess an Import

Reprocessing is the area where the original plan was more ambitious than the current product.

## What is actually supported today

The app does **not** currently support a live "reprocess this existing import in place" workflow.

Reprocessing an existing saved import is not active yet. Use a new upload when you need to process a screenshot again.

## What to do instead

If you want a fresh OCR pass today:

- upload the screenshot again
- switch provider first if that is the reason
- review the new rows as a new import

## Important warning for already accepted rows

Because in-place reprocessing is not implemented, there is no supported "rebuild the same import after some rows were already accepted" story to rely on today.

If accepted data is already wrong, your safer choices are:

- fix the rows directly if the mistake is small
- or use rollback through [Delete an Import & Roll Back Its Changes](delete-and-rollback.md), then restore or upload again as needed

## Related

- [Choose an Image-Processing Provider](choose-provider.md)
- [Fixing Import Mistakes](import-mistakes.md)
