---
title: 'Knowledge Studio Workspaces'
description: 'Use article editing, structured blocks, review, revisions, archive, media, spaces, entities, and homepage controls.'
product: 'kingshot-events'
audience: 'Authors, reviewers, and Knowledge managers'
experienceLevel: 'Advanced'
featureArea: 'Knowledge Hub'
lastReviewed: '2026-08-02'
verifiedAgainstSourceCommit: '0238432f9a614513b1f28a43c438a994a0caaf8a'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Knowledge Studio Workspaces

Knowledge Studio is a collection of authoring and management workspaces. Article editing, review, archive, media, homepage composition, scoped spaces, and structured game entities have different records and permissions.

## Workspace map

| Workspace | Purpose | Completion evidence |
| --- | --- | --- |
| Studio | Create or edit an article draft | Saved revision or submitted review |
| Review queue | Compare structured changes or full content | Approved, changes requested, rejected, or published decision |
| Archive | Find archived guides and use permitted recovery actions | Updated archive or restored record state |
| Media | Upload, find, and select reusable assets | Asset appears with correct metadata |
| Homepage editor | Arrange the Knowledge landing content | Saved homepage configuration |
| Space management | Configure a scoped knowledge space | Correct audience and visible space state |
| Entity editors | Maintain hero, event, or mechanic records | Saved entity version |

The block picker includes structured content types such as text, lists, data tables, cards, questions, images, hero or event content, and other supported blocks. Preview shows final appearance; empty fields still need valid content after insertion. Media should have meaningful alternative text and a safe audience.

```mermaid
flowchart LR
  D["Draft or structured entity"] --> V{"Validation passes?"}
  V -- "No" --> E["Correct fields, blocks, sources, or audience"]
  V -- "Yes" --> R["Submit for review"]
  R --> C{"Review decision"}
  C -- "Changes" --> D
  C -- "Reject" --> X["Closed without publication"]
  C -- "Approve or publish" --> P["Published version"]
  P --> A["Later archive if authorized"]
```

**Accessible summary:** Validate a draft, submit it, respond to review, publish an approved version, and archive only through the separate lifecycle action.

**Example:** A reviewer sees a changed data table. They use structured changes to identify modified cells, switch to full content to verify context, then request changes with a reason. They do not publish based on the diff alone.

If a block cannot publish, inspect its required fields and source metadata. If an asset is missing, verify it in Media rather than pasting a new duplicate. If a space article is invisible, check article state, space audience, and reader access separately.

## Limits and troubleshooting

Saving a draft does not publish it, approval does not necessarily replace the explicit publish action, and archive is not deletion. Preview cannot guarantee access for every reader because final projection still considers publication state and audience. If a revision conflict appears, stop editing, compare the latest version, and reapply only intended changes. If review controls are absent, verify reviewer permission and article state rather than cloning the article into a new draft.
