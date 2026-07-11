# Import a Spreadsheet

Spreadsheet import is the file-based alternative to screenshot OCR when you already have event rows in `.xlsx`, `.xls`, or `.csv` form.

::: warning TODO screenshot

**Page:** Import a Spreadsheet  
**Role:** User with access to this page  
**State:** Open the screen at the point described in the steps below  
**What should be visible:** The complete page, the action being explained, and any warning or confirmation message  
**Suggested filename:** `images/spreadsheet-upload.png`

:::

## What the page supports

The spreadsheet panel lets you:

- choose a file
- adjust a field-mapping JSON
- preview the mapped rows
- apply the import and open its review page

## Preview first

The safest first step is **Preview**.

Preview shows mapped rows such as:

- player
- event
- date
- score
- participation status
- whether review is likely needed

This does not open live result rows yet.

## What "Apply import" really does

When you choose **Apply import**:

- the app creates an import record
- it creates review rows
- it opens the import review page

So spreadsheet import still leads into the same review-and-accept workflow used by screenshot imports.

## Context still matters

Before applying, make sure you chose the correct:

- kingdom
- alliance, when needed
- event
- date
- stage or total mode, when needed

The spreadsheet panel uses the same event context as the rest of the imports page.

## Good practice

- preview first, especially when using a custom mapping
- keep one spreadsheet focused on one event/date context
- treat the review page as part of the workflow, not an optional extra

## Related

- [How Screenshot Imports Work](../imports/overview.md)
- [Review Import Rows](../imports/review-rows.md)
- [Accept Rows (Apply an Import)](../imports/apply-import.md)
