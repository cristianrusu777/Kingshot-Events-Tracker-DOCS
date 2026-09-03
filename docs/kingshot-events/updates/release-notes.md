---
title: 'User-facing Release Notes'
description: 'What changed since the August documentation update, with practical introductions and links to the revised guides.'
product: 'kingshot-events'
audience: 'All users'
experienceLevel: 'Intermediate'
featureArea: 'Updates'
lastReviewed: '2026-09-03'
verifiedAgainstSourceCommit: '6bfaf6e0a6a8ceb8d6dcf09ead5ad5a9f85185d0'
sourceVerificationOwner: 'Ralyvora documentation'
---

# User-facing Release Notes

## September 2026: easier planning, clearer follow-up

Since the August documentation update, Kingshot Events has gained new ways to prepare a schedule, compare an upgrade path, and keep track of work that needs attention. This guide brings those changes together so you can choose what is useful without reading a technical change log.

The changes below are grouped into **New**, **Improved**, **Fixed**, and **Removed or replaced**, followed by links to the current workflows.

These notes describe the product reviewed on September 3. Availability on the live site still depends on the deployed version, module state, account access, and configured plan. A feature described here does not promise that every account can use every control.

## New

### A Castle planner you can try without an account

The **Local Castle Planner** is a quick scratchpad for guests as well as registered users. It uses the familiar interactive slot cards, fixed 30-minute appointments, click assignment, and drag controls. Add your own participants, reserve a slot, and work through a small schedule without first creating kingdom or alliance players.

The companion resource calculator organizes available stock and allocations across five days, with resource images, custom rows, a duration converter, and over-budget warnings.

This helper saves only in the current browser. It has no server backup, account sync, application review, or official publication. Export a backup when the plan matters. For full shared assignments and retained history, register and use managed Castle Positions.

Read [Local Castle Planner for Guests](/kingshot-events/castle-positions/local-planner).

### More flexible managed Castle appointments

Organizers can add a **temporary participant** to a managed schedule without creating a roster player. That label belongs to the schedule, so it is different from the entirely browser-only guest helper.

When an application genuinely needs roster review, approval can create a missing player or update a matching player's name after the identity is confirmed. A conflicting identity still needs a reviewer's decision. Approval alone is not a guaranteed appointment.

The scheduling workspace also keeps its kingdom context more reliably, avoids repeated page restarts while refreshing data, and uses the selected kingdom in the Points view.

Read [Temporary Participants and Reviewed Players](/kingshot-events/castle-positions/temporary-participants).

### KvK preparation with evidence and clearer scoring

Castle applications can request optional or required resource screenshots. The form makes that requirement visible before submission. Reviewers can inspect a day-by-day scoring reference with searchable resources, readable rates, and the explanation behind each formula.

Resource evidence is private and has limited retention. Estimated points are guidance for a discussion, not a guarantee of final game results or a reason to ignore scheduling conflicts.

Read [KvK Resources, Proof, and Points](/kingshot-events/castle-positions/kvk-resources-and-proof).

### One place to see what needs attention

The new **Notifications** inbox groups recent updates and review requests into readable cards, with workflow filters, pagination, and separate unread, action-needed, and urgent views.

A sidebar dot now leads to an explanation of **What's new here**. Seeing an informational card clears its unread state. A real approval or other decision stays pending until the action is completed. Offscreen cards are not silently marked read just because you opened the inbox.

Eligible staff also have a paginated recent-activity view. It is not a public list of visitors or proof that someone is watching a page. Review links lead directly to the relevant work, without needing a separate general Moderation landing page.

Read [Notifications and Reports](/kingshot-events/lifecycles/notifications-and-reports).

### Free and Premium for your own account

Every registered account starts on **Free**. Personal paid plans, such as Premium, provide the benefits shown on their own plan cards, including eligible premium reading where configured.

Personal plans are separate from alliance and kingdom subscriptions. They do not buy staff roles, community membership, alliance quotas, or access for another user. The current purchase flow creates a private request, with payment verification before activation and no automatic renewal. A plan without configured pricing cannot be purchased.

Read [Free and Premium Personal Plans](/kingshot-events/subscriptions/personal-plans).

### See a wider upgrade path in the Lab

**Ascension Path** connects Hero Gear, Governor Gear, and Charms into one unified progression workspace. Powered by Ascension Engine version 1.1.0, it executes a 30-step bounded beam search across all nine progression materials to recommend optimal upgrade orders.

The workspace delivers:
- **Action recommendations:** Instant status banners (`UPGRADE NOW`, `SAVE`, `COMPLETE`) paired with `Next Target` and `Following Target` milestone cards displaying sufficient and missing resources.
- **Comparative step anatomy:** Step cards detail exact combat deltas, impact ratings (`Very High` to `Marginal`), set breakpoints, the "Why First" optimization reason, and the competing "Alternative" showing why another system lost.
- **Weak point diagnostics:** Evaluates equipment balance across all three systems, categorizing areas into `High Priority`, `High`, `Medium`, or `Healthy` with quantified opportunity scores.
- **Interactive forecast charts:** Dual interactive visualizations plot your projected Combat Stats Curve (Attack, Defense, Lethality, Health) and multi-line Resource Depletion Curves for all nine currencies.
- **Event timing recommendations:** Integrates with active platform event sessions to advise whether to `UPGRADE NOW`, `WAIT`, or observe `NO TIMING ADVANTAGE`.
- **Resource routing workbench:** A virtual acquisition shop simulator where players enter custom currency balances, configure offer bundles, and calculate optimal return on investment to unblock milestones.

Where enabled, **screenshot build import** reduces setup work. Choose, drag, or paste game screens, review recognized values, and confirm only the fields you trust. It updates Lab planning inputs, not event results.

Read [Ascension Path](/kingshot-events/lab/ascension-path) and [Import Your Lab Build from Screenshots](/kingshot-events/lab/screenshot-build-import).

## Improved

### A more consistent account experience

Upload or remove your account avatar from Profile and use the same identity image across supported Event Tracker and Knowledge displays. Configured name gradients are also more consistent; they are styling, not proof of permission.

The **Recycle Bin** now starts with clear record categories, search, and pagination. Privacy request review has readable light and dark theme controls, and fulfilled requests no longer linger as unfinished privacy actions.

Read [Account and Profile](/kingshot-events/getting-started/account-and-profile) and [Recycle Bin and Restore Requests](/kingshot-events/lifecycles/recycle-bin-and-restore-requests).

### Visual overhaul, authentic game assets, and sharper comparisons

The entire Lab workspace has transitioned to the **Cyber design system**:
- **Ambient canvas backdrop:** A dynamic animated mesh background adds visual depth to calculations.
- **Card depth and button sheens:** Layered card surfaces, subtle borders, and contained button sheen hover animations create clear tactile hierarchy.
- **Compact battle cards and inputs:** Space-efficient stepper controls and compact percentage bars maximize visible information.
- **Standardized color conventions:** Universal troop styling (**Infantry** in blue, **Cavalry** in amber, **Archer** in emerald) and stat colors (sky blue Attack, amber Defense, pink Lethality, emerald Health).
- **High-contrast accessibility:** All inputs, dropdowns, and borders pass WCAG 4.5:1 contrast standards across both Dark and Light themes.
- **Responsive workspace rail:** Collapsible navigation rail expands from 3.5rem to 14rem on desktop and adapts to a mobile toolbar on handheld devices.

**Authentic game entity artwork:** Generic placeholders have been replaced with a comprehensive asset resolution engine. The platform renders high-resolution artwork for Hero Gear (including awakened Red tier gear), Governor Gear (across piece, rarity, tier, and star levels), Charms (levels 1 through 22), Truegold troops (tiers 1 through 8), battle skills, and hero exclusive widgets, supported by semantic SVG category fallback icons.

**Optimizer mechanics:** Hero Gear planning incorporates dataset version 1.0.1 (201 per-level XP rows totaling 575,320 XP, zero-XP level 101 ascension, and Mastery enhancement caps), reforge donor priority locks, direct mastery inputs, and total stats preview. Governor Gear and Charms add four distinct Optimization Goals (`Maximum stats`, `Combat power` with 20% defensive retention, `Balanced troops`, and `My build`). Bear Trap features the **Bear Trap Rally Damage** preset (1.0 Lethality for Infantry/Cavalry, 1.1 for Archer, 35% defensive reserve), automatic legacy reserve migration, multi-scale formation refinement down to single-troop steps, and troop-type scoped skill effects.

Read [Hero Gear](/kingshot-events/lab/hero-gear), [Governor Gear](/kingshot-events/lab/governor-gear), [Charms](/kingshot-events/lab/charms), and [Bear Trap](/kingshot-events/lab/bear-trap).

### A more useful reading library and everyday workspace

Knowledge Hub supports up to 2,000 blocks per revision, default 2 GB space storage quotas with progressive warning thresholds, automatic LaTeX formula normalization, and embeddable tool widgets. Reader experiences add easier mobile navigation, a collapsible article outline, browser printing, multi-category articles, structured Hero and Master entries, view counters, and an in-depth administrative article statistics panel. Scoped space and contributor management help editorial teams organize their work while keeping draft, review, and publication separate.

Event lists, sessions, manual entry, result batches, and proposals also have refreshed presentation. These changes improve orientation without changing the need to confirm the correct community, record, and action before saving.

Read [Knowledge Hub](/kingshot-events/knowledge-hub/) and [Events and Results](/kingshot-events/events/overview).

## Fixed

### Castle Positions

- Scheduling data refreshes no longer repeatedly restart the page while you are arranging appointments.
- A successful identity approval updates the candidate's review state and can resolve the corresponding roster player, instead of leaving the approved applicant looking unresolved.
- Castle administration remembers a valid kingdom choice, and the Points view uses that selection rather than asking for a kingdom already selected.
- Click-to-assign works in the local helper alongside the shared drag controls. Slots remain fixed at 30 minutes.

### Notifications, accounts, and privacy

- Informational red dots clear after their visible updates are seen. A section explains which items caused its dot, and genuine unfinished actions remain highlighted.
- Reading all available updates clears the Notifications unread indicator without silently approving pending requests. Offscreen cards and unopened pages remain unread.
- Fulfilled privacy requests no longer count as unfinished actions. The request-processing dialog is readable in both light and dark themes.
- The personal subscription page now distinguishes loading or pricing problems from Free access and active paid access. Personal plans stay separate from community purchases.

### Lab calculations and controls

- Hero Gear XP costs and reforge accounting have been updated to dataset version 1.0.1, utilizing all 201 per-level values, zero-XP level 101 ascension, and Mastery enhancement caps (100, 119, 139, 159, 179, 199, 200). Reforge comparisons protect higher-priority gear and check both total and useful weighted gains against the no-reforge result.
- Account-aware gear planning uses the declared stat source and formation more consistently, with an explicit fallback when usable account context is missing.
- Bear formation comparisons evaluate the current setup and alternatives with multi-scale refinement down to single-troop steps; a constrained or incomplete search is no longer presented as proof of an ideal formation. Hero progression and troop-specific skill handling have also been refined.
- Battle stat labels, percentage inputs, edit controls, current-build selection, dropdown appearance, hover effects, and light-theme contrast have been corrected or refined.

### Knowledge reading

- Mobile menus, dropdown overlays, loading presentation, the article outline, statistics presentation, and space labels have been refined so navigation and content remain easier to find.

If an older saved calculation differs, rerun it with the same profile, inventory, objective, locks, formation, and stat source before comparing results. These are planning tools, not guarantees of a live game outcome.

## Removed or replaced

- **Standalone Moderation landing page and menu entry removed.** Use Notifications or the owning workflow to reach a permitted review. Report review and other necessary review actions still exist.
- **Name-dependent gradient styling replaced by configured account appearance.** Styling now follows the applicable account, role, or active personal-subscription configuration; a display name does not grant a benefit or permission.
- **Dense scoring and recovery lists replaced with organized views.** KvK scoring uses day selectors, search, and readable formula cards. The Recycle Bin uses categories, search, and pagination. The underlying scoring reference and recovery actions were not removed.

The managed Castle system remains available. The guest helper is an additional small-task tool, not its replacement. Personal plans likewise do not replace alliance or kingdom subscriptions.

## August 2026 documentation foundation

The previous documentation refresh established the product portal, role-based journeys, focused guides, and consolidated troubleshooting. This update extends that foundation with the new workflows and revises outdated explanations rather than presenting every older feature as new.

## Where to start

For a quick experiment, try the local Castle helper. For a progression decision, start with your confirmed Lab build. For shared responsibilities, open Notifications and complete the action in its owning workspace. The detailed guides explain the limits and saving behavior of each choice.
