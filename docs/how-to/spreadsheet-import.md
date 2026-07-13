# Import a Spreadsheet

Spreadsheet import is the file-based alternative to screenshot OCR when you already have event rows in `.xlsx` or `.csv` form.

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

## Safety limits

Spreadsheet upload is intentionally strict. The parser is used only after the request is authenticated and scoped to the user's kingdom/alliance.

Current safety rules:

- one file per request
- maximum file size: 2 MB
- maximum data rows: 1,000
- maximum columns: 50
- maximum cell length: 500 characters
- legacy binary .xls files are not accepted; export as .xlsx or .csv first
- formulas are rejected; paste values before upload
- macro-enabled spreadsheets are rejected
- external links are rejected
- invalid spreadsheets fail safely with a readable error

These limits protect the platform from unsafe spreadsheet content and keep imports reviewable.

## Good practice

- preview first, especially when using a custom mapping
- keep one spreadsheet focused on one event/date context
- treat the review page as part of the workflow, not an optional extra

## Related

- [How Screenshot Imports Work](../imports/overview.md)
- [Review Import Rows](../imports/review-rows.md)
- [Accept Rows (Apply an Import)](../imports/apply-import.md)


