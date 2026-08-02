---
title: 'Knowledge Hub'
description: 'Find, access, translate, author, review, publish, revise, and verify reading of scoped Knowledge articles.'
product: 'kingshot-events'
audience: 'Readers, authors, reviewers, and session managers'
experienceLevel: 'Intermediate'
featureArea: 'Knowledge Hub'
lastReviewed: '2026-08-02'
verifiedAgainstSourceCommit: '0238432f9a614513b1f28a43c438a994a0caaf8a'
sourceVerificationOwner: 'Ralyvora documentation'
keywords: ['knowledge article', 'draft', 'published', 'article locked', 'reading code', 'reading verification', 'browser translation']
---

# Knowledge Hub

<CategoryHero category="knowledge-hub" icon="book" eyebrow="One canonical article, controlled access and revisions" title="Knowledge Hub">
Knowledge Hub separates reading access, editorial workflow, and Reading Verification. Publishing a revision changes what eligible readers receive; creating a verification session assigns reading work without creating another article copy.
</CategoryHero>

<ProductFinder default-category="Knowledge Hub" />

## Feature map

```mermaid
flowchart TD
  D["Author creates structured draft"] --> S["Autosave or explicit save"]
  S --> V["Preview and validate blocks, media, scope, and premium setting"]
  V --> R["Submit for review"]
  R --> C{"Reviewer decision"}
  C -- "Requested changes" --> D
  C -- "Approved" --> P["Publish immutable revision"]
  P --> A{"Reader passes state, identity, scope, and premium checks?"}
  A -- "No" --> T["Teaser, unavailable, or denied state"]
  A -- "Yes" --> F["Full canonical article"]
  F --> Q{"Applicable Reading Verification assignment?"}
  Q -- "No" --> Z["Normal reading"]
  Q -- "Yes" --> M["Reach seal, select Open seal, request fragment, complete, submit"]
  P --> N["New edits create a draft revision while previous publication remains available"]
```

*Knowledge lifecycle and reader access. Editorial state precedes viewer access; Reading Verification is an additional assignment flow over the canonical article.*

**Accessible summary:** Authors save and review a draft before publishing a revision. Readers then pass article state, identity, scope, and premium checks. An applicable verification assignment adds marker and submission steps. Editing published content creates a new revision without silently mutating the previous publication.

## Reading and access order

The platform first considers article state: draft and archived material are not ordinary published reading. It then resolves whether the viewer is public or authenticated, whether server, kingdom, or alliance scope matches, and whether premium access is required. A premium teaser can be visible while the full body remains unavailable. Ownership or author status affects editorial controls, not the public meaning of a published revision.

[Reading and finding](/kingshot-events/knowledge-hub/reading-and-finding) explains search and article structure. [Access and translation](/kingshot-events/knowledge-hub/access-and-translation) covers public, authenticated, scoped, premium, teaser, and Browser Translation Assistance behavior.

## Authoring and review

An article draft is made from supported blocks and media. Autosave preserves draft work after its visible save cycle; explicit save remains important before review transitions. Preview shows the proposed reader experience but is not publication. Review can request changes or approve. Publication produces a revision readers can identify. Editing an already published article creates a new draft revision while the previous published revision remains the reader version until the new one is reviewed and published.

Structured import and AI-assisted authoring can propose content, layout, or media work. The author and reviewer remain responsible for accuracy, scope, source quality, and public-information safety. Assisted output must not bypass review or expose private implementation details.

## Reading Verification

A session manager selects the canonical article and permitted audience, creates assignments, monitors progress and signals, reviews submission classification, and closes or archives the session. A reader opens an applicable assignment, reaches the collapsed seal, explicitly selects **Open seal**, receives the fragment only after the platform verifies the assignment and completes the request, finishes the article, and submits the requested evidence. A retry is possible only when the session and classification allow it. A deleted or otherwise non-restorable assignment must not be recreated merely to falsify continuity.

Reports are available to the session creator and authorized tenant management; the documented privileged oversight role may also qualify. Other users are denied. This describes the outcome without publishing private permission keys or endpoints.

## Browser Translation Assistance

The article has a source language and the reader may have a preferred language. The site can allow the browser's native translation suggestion using `browser_default`, request a suggestion using `always_suggest`, or suppress the suggestion using `never_suggest`. Protected content remains protected. The platform does not store a translated article copy, and browser translation can mistranslate game terminology, tables, markers, or structured blocks.

## Why Knowledge Hub exists

Knowledge Hub gives a community one canonical, structured, reviewable body of guidance. It separates discovery from access, drafts from publications, current revisions from history, reusable media from duplicates, and ordinary reading from assigned verification.

Readers need to know they see the current published version. Authors need to improve a draft without prematurely changing the live guide. Reviewers need to compare exactly what changed. Managers need scoped audiences without exposing protected bodies through search. Session managers need evidence of an assigned reading workflow without creating article copies.

## Workspace purpose map

| Surface | Purpose | What it does not do |
| --- | --- | --- |
| Home and directory | Discover permitted published cards and collections | Does not expose protected body content |
| Search | Find eligible articles, entities, and spaces | Does not bypass publication or access projection |
| Article reader | Render the canonical permitted revision | Viewing does not grant editorial control |
| Heroes, events, mechanics | Provide structured entity references | Does not automatically replace reviewed guidance |
| Spaces | Group knowledge for public, kingdom, or alliance audiences | Membership does not make every reader an author |
| Studio | Create, save, preview, validate, and submit drafts | Save and preview are not publication |
| Review queue | Compare and approve, request changes, reject, or publish | Does not alter content without a decision |
| Revisions and archive | Preserve history and remove content from current reading | Archive is not silent permanent deletion |
| Media library | Reuse assets with metadata and alternative text | Upload does not make an asset safe for every audience |
| Homepage editor | Arrange Knowledge landing content | Does not change article access rules |
| Reading Verification | Assign a canonical revision and track progress | Does not reveal a seal on marker encounter |

## Demonstration: publish a scoped guide safely

1. **Choose destination.** Identify collection or scoped space and intended audience.
2. **Create a draft.** Use supported text, list, table, card, question, image, entity, and other structured blocks.
3. **Attach safe media.** Reuse assets, supply alternative text, and check captions and source metadata.
4. **Preview and validate.** Preview shows layout; validation catches incomplete blocks or constraints. Neither changes the live article.
5. **Submit.** The draft enters review.
6. **Review.** A reviewer checks structured changes and full context.
7. **Decide.** Changes return to the author; rejection closes the proposal; approval and publication follow their explicit controls.
8. **Project to readers.** Published state, identity, scope, and premium policy determine full content, teaser, or no surface.
9. **Revise later.** A new draft leaves the prior publication readable until replacement publication.
10. **Archive when authorized.** The guide leaves ordinary reading through an explicit lifecycle.

**Verifiable output:** readers identify the canonical article; authors and reviewers identify the draft and revision that produced it.

## Demonstration: Reading Verification without accidental reveal

A manager selects a published canonical revision and eligible readers, then opens the session. The assignment does not clone the article. An eligible reader reads until reaching a collapsed marker.

Nothing is revealed automatically. The reader explicitly chooses **Open seal**. Only then does the platform verify session and assignment and request the assigned fragment. The reader receives it, completes the article, and submits the requested evidence. The result can be correct, nearly correct, incorrect, retry-eligible, or routed to manual review. The authorized manager uses the dashboard and report, then closes or archives the session.

This keeps reader choice, assignment eligibility, and reporting distinct. Reloading does not justify a new assignment, and fragments should not be exposed outside the permitted session workflow.

## Quality, search, translation, and recovery

Search cards and teasers contain only permitted projection fields. Protected bodies must not be downloaded and hidden client-side. Browser Translation Assistance uses the browser and does not store a translated revision. Assisted import can propose content, but authors and reviewers remain responsible for accuracy, source quality, audience, and confidentiality.

If an article is missing, troubleshoot published state, canonical route, identity, scope, premium access, search terms, and archive state. If publication fails, inspect block validation, media metadata, review status, and authority. If a seal remains collapsed, confirm session and assignment before selecting **Open seal**; if reveal fails, never paste a fragment from another reader.
## Detailed Knowledge feature catalog

### Home, directories, and recommendations

The Knowledge home page combines editorial entry points with the permitted content projection for the current reader. Directories organize articles and structured references without bypassing access rules. Recommendations provide the next relevant reading path; they are not a separate copy of protected content and must use the same publication and access decisions as canonical routes.

### Search and structured databases

Search covers eligible articles plus supported hero, event, and mechanic records. Filters and result types help distinguish a guide from a structured entity. Search indexes only fields allowed for discovery. A protected body must not be shipped to the browser and merely hidden with styling. Structured databases give stable facts a queryable home while articles provide interpretation, procedures, examples, and policy.

### Article reader controls

The reader surface supports practical long-form use: adjustable font size, reading theme, cover-image lightbox, share action, mobile or desktop table of contents, related recommendations, and return-to-top navigation. These controls change presentation or navigation, not the canonical revision. A shared link still passes through the recipient's own identity and access evaluation.

### Access policies, projections, and teasers

Publication answers whether a revision is ready; access answers which projection a reader may receive. Policy can consider identity, scope, role, plan, and accepted grants. Public metadata or an allowed teaser may be returned when the body is restricted. The server selects that projection before delivery so restricted blocks do not exist in an unauthorized browser response.

### Spaces

Spaces group material by purpose, team, program, or subject. They provide navigation and editorial ownership without replacing article-level state. Moving or featuring an article changes organization; it must not silently broaden its audience or rewrite its canonical revision.

### Studio drafts and the block library

Knowledge Studio is the authoring workspace. A draft is separate from the currently published canonical revision. Authors build content from validated blocks such as headings, paragraphs, lists, callouts, media, tables, references, and supported interactive or verification markers. Block validation catches incomplete structure before review or publication.

### Media and Asset Picker

The media library and Asset Picker let authors choose managed assets rather than paste untraceable references. Selection should preserve asset identity, metadata, accessibility text, and permitted usage. Replacing an asset in a draft is an editorial change; publication still determines which revision readers receive.

### AI writing assistant

The writing assistant can create a proposed passage, rewrite a selected passage, or help derive metadata. Its output remains draft content. The author must verify accuracy, scope, sources, confidentiality, tone, and block placement, and reviewers see the resulting revision through the normal workflow. Assistance never grants publication authority.

### AI Structured Import

Structured Import converts supported source material into editable article candidates. Before saving, the author can inspect proposed structure, merge or move sections, remove unwanted material, correct metadata, and resolve unsupported content. Import speed does not weaken provenance or review: the accepted draft still needs an accountable author and the same validation as manually written material.

### Review queue and Revision Diff

The review queue separates items awaiting editorial decision from personal drafts and published articles. Revision Diff helps reviewers navigate changes between versions, inspect additions and removals, and focus on the affected blocks. A reviewer can approve, request changes, or reject according to authority; comparing revisions does not publish them automatically.

### Revision, publication, and archive lifecycle

Edits create revision history. Review records editorial decisions. Publication selects the canonical revision for eligible readers. A later draft does not silently replace that published version. Archive removes material from normal discovery while preserving the governed record and recovery path. Restoration should re-evaluate current policy and canonical state.

### Homepage, spaces, and entity management

Authorized editorial tools manage featured material, spaces, and structured hero, event, or mechanic records. These controls affect discovery and reference data, so they require the same care as article publication: validate ownership, scope, state, and downstream references before committing a change.

### Browser Translation Assistance

Browser Translation Assistance helps a reader render content in another language using browser capabilities. It does not create, store, approve, or publish a translated Knowledge revision. Readers should treat the canonical article language as the governed source and report ambiguous translations instead of editing operational meaning from an automatic rendering.

### Reading Verification

Reading Verification pins a published canonical revision to an authorized session and eligible assignments. A collapsed fragment stays protected until the assigned reader explicitly chooses **Open seal** and the server validates the session and assignment. Submission can produce correct, nearly correct, incorrect, retry-eligible, or manual-review outcomes. Managers use the scoped dashboard and report to follow progress, close, or archive the session.

### Recovery map

| Symptom | Verify first | Safe next action |
| --- | --- | --- |
| Article is missing | Published state, canonical route, scope, identity, archive state | Open the canonical directory or contact the space owner |
| Only a teaser appears | Effective access, plan, grant, and policy projection | Resolve access, then reload the same canonical route |
| Search cannot find it | Eligibility, title terms, result type, publication state | Refine filters; do not ask for a protected body copy |
| Draft cannot publish | Block validation, media metadata, review state, authority | Correct the draft and return it through review |
| Imported structure is wrong | Proposed blocks, merges, moves, removals, metadata | Edit the candidate before saving a governed draft |
| Revision change is unclear | Base revision, target revision, changed blocks | Use Revision Diff and request author clarification |
| Seal remains collapsed | Session state, assignment, signed-in reader | Select Open seal only in the assigned workflow |
| Translation is confusing | Canonical language and browser translation state | Return to the original and report the ambiguity |

Knowledge Hub succeeds when readers can discover the right permitted material, authors can improve it without bypassing governance, and reviewers can explain exactly which revision became canonical.
## Worked example

**Starting situation:** A kingdom-scoped premium article is published and a signed-in alliance member opens it without effective premium access. **Rules:** Published state passes; identity and kingdom scope pass; premium access fails. **Branch:** The reader receives the permitted teaser, not the body. **State:** The article remains published and unchanged. **Output reason:** Scope does not substitute for premium entitlement. **Next action:** The reader checks effective access or an accepted grant, then reloads the same canonical article after access changes.

Use [Knowledge access, publication, and Reading Verification](/kingshot-events/knowledge-hub/reading-sessions) for detailed decision tables, reader and manager flows, and recovery boundaries.
