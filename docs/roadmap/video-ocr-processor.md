# Video OCR Processor Roadmap

> **Planned / Future · Not implemented yet · Premium Both / Future Experimental**

The correct term is **OCR** (optical character recognition).

## Proposed review-first pipeline

1. Accept a short video or screen recording as a draft upload.
2. Split it into sampled frames.
3. Detect scene changes and remove duplicate/near-duplicate frames.
4. Identify frames likely to contain readable tables.
5. Crop relevant regions.
6. Run OCR only on useful frames.
7. Merge repeated player rows across frames.
8. detect conflicting names, scores, power, ranks, stages, or event context.
9. Assign row- and field-level confidence.
10. Present a source-linked review table.
11. Save nothing until the user chooses **Accept / Apply**.

## Required safeguards

- Low-confidence fields are flagged.
- Duplicate frames cannot create duplicate results.
- Repeated appearances of one player merge into one proposed row when context matches.
- Conflicts retain all candidate values and source-frame links.
- Upload duration, resolution, and retention are bounded.
- Original video retention is explicit and configurable.

## Research questions

- Which frame sampling strategy preserves fast scrolling text?
- How should the system detect table boundaries across devices and languages?
- When is merging safe, and when should rows remain separate?
- What processing limits are fair for shared infrastructure?

This feature must not record gameplay automatically, inspect hidden game data, or bypass platform protections.

