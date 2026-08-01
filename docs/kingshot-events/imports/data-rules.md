---
title: 'Duplicate, Date, and Overwrite Handling'
description: 'Avoid duplicate records and unintended changes during data entry.'
product: 'kingshot-events'
audience: 'Contributors and managers'
experienceLevel: 'Intermediate'
featureArea: 'Data integrity'
lastReviewed: '2026-08-01'
head:
  - - meta
    - name: 'robots'
      content: 'index,follow'
---

# Duplicate, Date, and Overwrite Handling
The platform compares the identifying parts of a record, such as player, event occurrence, stage, and date. A warning can mean the same logical record already exists.

## Safe response to a duplicate

Open the existing record, compare it with the source, and use the supported correction path only when the new value should replace the old one. Do not change a date merely to bypass duplicate detection.

Date overwrite behavior depends on the current workflow. Read the confirmation carefully: updating an existing date-bound result is different from adding a new event occurrence.
<VisualReference title="Duplicate, Date, and Overwrite Handling orientation">
Use the current page labels and confirm context before acting.

<template #items>

- Active scope or profile.
- Primary input and review area.
- Visible save, submit, result, or status feedback.

</template>
</VisualReference>

## Related guides

- [manual entry](/kingshot-events/events/manual-entry)
- [data and save problems](/kingshot-events/troubleshooting/data-and-save-problems)
