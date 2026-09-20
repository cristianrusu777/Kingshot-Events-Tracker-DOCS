---
title: "September 20, 2026: Admin CP Modernization, Generative AI Governance, Public Guest Assistant Access, and Contextual Conversion Engine"
slug: "2026-09-20-admin-assistant-reliability-update"
version: "2026.09.20"
category: "new_feature"
shortSummary: "Major platform release introducing public Guest Assistant access with strict data isolation, an intent-driven conversion and feature promotion engine, runtime Generative AI governance for Supreme Admins with deterministic fallback guarantees, a modern ambient visual overhaul for the Admin Center with live review queue alert badges, and comprehensive navigation and observability hardening."
date: "2026-09-20"
tags:
  - "assistant"
  - "guest-access"
  - "conversion"
  - "admin-center"
  - "ai-governance"
  - "knowledge-hub"
  - "navigation"
  - "observability"
  - "security"
---

## Release Overview

This major release marks a transformative milestone for Ralyvora, delivering substantial enhancements across public visitor accessibility, intelligent product discovery, artificial intelligence governance, administrative control surfaces, and platform-wide route reliability.

### 1. Democratizing Discovery: Public Guest Assistant Access
Historically, Ralyvora Assistant required an authenticated user account to launch. Starting with this release, the barrier to entry has been completely removed: **Ralyvora Assistant is now freely available to unauthenticated Guests** across public landing, documentation, and product pages.

Rather than implementing a disjointed or insecure "guest chatbot," the platform unifies visitor and member experiences under a single, cohesive Assistant interface powered by a strict three-tier capability model:
- **`GUEST` (Public Access):** Non-authenticated visitors. Safe exploration, public Knowledge Hub search, public simulator guidance, and role education.
- **`AUTHENTICATED USER`:** Signed-in members with active Strategy Profiles, personalized optimization workflows, and event tracking.
- **`PRIVILEGED / SCOPED USER`:** Account holders with kingdom or alliance leadership assignments, or Supreme Administrators with platform-wide authority.

Under this model, the backend authoritatively filters capabilities and tools for every single interaction. Guests are granted access only to registered, public-safe tools (`GUEST_SAFE_TOOLS`), while all private user data - including Strategy Profiles, player directories, alliance analytics, warboard workspaces, background runs, and administrative consoles - remains completely inaccessible. Guessing entity IDs or forging tool calls fails authoritatively on the server.

### 2. Value-First Conversion & Contextual Feature Promotion Engine
Guest Assistant is engineered not merely to answer questions, but to actively demonstrate the tangible value of creating a Ralyvora account through a deterministic, context-sensitive **Feature Promotion Engine**.

Operating under a strict **"Value First, CTA Second"** philosophy, the Assistant never blocks public answers behind a registration paywall. Instead, it provides thorough, helpful guidance first, and then contextually explains how an account elevates what the user is trying to accomplish:
- **Hero Gear Inquiries:** Explains gear progression, awakening milestones, and reforge mechanics, followed by a recommendation to create a free account to save Strategy Profiles and calculate optimal upgrade paths using real gear levels, mastery, and materials.
- **Bear Trap Inquiries:** Outlines rally leader mechanics and troop-type multipliers, followed by an invitation to save profiles and compare formations using actual march capacities and battle stats.
- **Alliance & Kingdom Inquiries:** Explains leadership responsibilities (King, Minister of Justice, Castle Positions) and highlights the Event Tracker and attendance analytics available to registered members.
- **Deep Optimization Inquiries:** Clearly and accurately distinguishes what a free account unlocks (saving profiles, reusing configurations, durable run history) from features requiring an active Premium entitlement (such as multi-objective Knapsack/Pareto compute).

Promotions feature session-level frequency controls and dismissal memory, and they are strictly suppressed on low-intent conversational messages ("hi", "thanks", "ok"). Authenticated users never receive registration CTAs.

### 3. Ephemeral Privacy, Browser Consent, and Cost Protection
Guest privacy is safeguarded through a completely ephemeral session architecture. Guest conversations are held only in client memory and are never written to PostgreSQL or associated with anonymous database identities.

External AI provider processing (Gemini or OpenAI) is strictly opt-in. Because guests lack database account records, consent is captured in browser `localStorage` (`ralyvora_assistant_guest_ai_consent`) following a concise, transparent first-use disclosure. If a visitor declines or chooses not to enable AI, a comprehensive **Deterministic Mode** guarantees immediate greetings, public capability discovery, safe role education, and route navigation without external model egress.

To protect upstream provider resources against abuse, guest traffic is enforced by public IP-based rate limiting (`publicRequestLimit`), bounded context windows, and a strict 2-tool execution ceiling per turn. Anonymous mutations are blocked unconditionally.

### 4. Seamless Login Handoffs and Logout Safety
When a visitor attempts an action requiring an account, the Assistant presents an `auth_required` capability card offering immediate `[Sign in]` and `[Create free account]` actions rather than raw HTTP error codes. The user's query intent is preserved in browser `sessionStorage` (`ralyvora_assistant_pending_intent`), allowing the Assistant to refresh capabilities upon login and resume the workflow seamlessly without auto-executing unconfirmed mutations.

Upon sign-out, all private structured state - including selected profile IDs, player IDs, alliance IDs, kingdom IDs, run IDs, and private tool cards - is immediately purged from client state, and the conversation session is cleanly reset to prevent sensitive data leakage on shared workstations.

### 5. Admin Center Visual Modernization & Supreme Admin AI Governance
The **Admin Center** (`/admin`) has received an extensive visual and structural overhaul. The previous monochrome interface has been replaced with a rich, multi-layered ambient radial gradient mesh backdrop and glassmorphic elevation. The **Administration Shortcuts** grid has been refactored into a fully responsive flex container layout (`div[role="button"]`), allowing descriptive text to wrap naturally, preventing icon tiles from overflowing card borders, and maintaining consistent chevron alignment across all viewports.

To improve operational responsiveness, the Admin Center now features **Live Review Queue Badges** (`.admin-nav-badge-red`) across the navigation rail - displaying real-time pending counts for registrations, password resets, data restores, and subscription inquiries - coupled with an animated topbar **Pulsating Alert Dot** (`.admin-notification-dot-pulse`).

For system governance, **Supreme Administrators** now have dedicated runtime controls in `/admin/assistant-settings` to toggle external **Generative AI mode** on or off instantly. When generative mode is deactivated - or during upstream provider outages - the Assistant automatically falls back to 100% deterministic rule-based guidance without requiring service restarts or configuration redeployments.

### 6. Navigation Reliability & Platform Observability
Critical route handling and subpath resolution issues have been resolved across the platform. Direct navigation to `/admin/users` now reliably opens the User Accounts & Access surface rather than redirecting to the overview dashboard. Operations Console links now incorporate the application base path helper (`withBase('/platform-console#...')`), eliminating 404 errors on reverse-proxied subpath deployments (`/games/kingshot/`). Deep route Assistant context chips have been normalized to display clean, human-readable labels (`admin users`) with one-click dismissal.

---

## Detailed Changelog

#### Public Guest Assistant Access & Three-Tier Capability Model
- **Type:** new_feature
- **Area:** assistant
- **Description:** Expanded Ralyvora Assistant to unauthenticated visitors across all public landing, documentation, and product pages without requiring login. Introduced a formalized three-tier access model (`GUEST`, `AUTHENTICATED USER`, `PRIVILEGED / SCOPED USER`) utilizing a unified frontend Assistant interface. Capability resolution dynamically evaluates visitor identity on every request, mapping capabilities into `public_executable`, `public_discoverable`, `auth_required`, `executable`, `discoverable`, or `hidden` states. Unauthenticated users are granted immediate access to safe discovery, public documentation, simulator explanations, and role education without exposing private account or scoped community data.

#### Server-Side Tool Registry Isolation & Defense-in-Depth Authorization
- **Type:** improvement
- **Area:** assistant
- **Description:** Implemented authoritative server-side filtering within the Assistant Tool Registry (`filteredAssistantTools`). For unauthenticated requests, the tool registry strictly exposes only `GUEST_SAFE_TOOLS` (`capability.list`, `capability.explain`, `capability.search`, `navigation.open`, `role.explain`, `recommendation.list`, `knowledge.search`, `knowledge.article`). Authenticated tools (`profile.list`, `player.search`, `alliance.summary`, `optimization.recent`, `castle.unassigned`, `notification.recent`, `admin.*`, `operations.*`) are completely omitted from the tool definitions provided to the model. Enforced defense-in-depth authorization checks on the server so that even forged tool invocations or guessed entity IDs are rejected authoritatively.

#### Authoritative Knowledge Hub Guest Filtering & Scope Isolation
- **Type:** improvement
- **Area:** knowledge-hub
- **Description:** Enforced database query-layer isolation for guest Knowledge Hub interactions. When an unauthenticated visitor searches or retrieves articles through the Assistant, the runtime constructs an anonymous viewer context (`buildViewerContext(null, new Set())`) that strictly filters content to published, global, `public_free` articles. Alliance-scoped, kingdom-scoped, draft, restricted, and feature-gated articles are excluded at the database query level, preventing unauthorized leakage of private community documentation.

#### Browser-Scoped Guest AI Consent & Cost Protection Controls
- **Type:** new_feature
- **Area:** assistant
- **Description:** Added an external AI provider consent mechanism tailored for unauthenticated visitors. Consent is managed purely within browser `localStorage` (`ralyvora_assistant_guest_ai_consent`) and passed via request headers, eliminating the creation of fake database accounts. Visitors receive a transparent first-use disclosure explaining that messages are processed by configured external models (Gemini or OpenAI) with bounded request context and zero access to private account data. Deterministic mode remains fully operational without consent. Anonymous traffic is protected by public IP rate limiting (`publicRequestLimit`), bounded context windows, and a strict 2-tool execution cap per turn. Ephemeral guest conversations are never written to PostgreSQL.

#### Contextual Conversion & Feature Promotion Engine
- **Type:** new_feature
- **Area:** assistant
- **Description:** Built a deterministic, intent-driven Guest Promotion Engine (`evaluateGuestPromotion`) operating under a "Value First, CTA Second" architecture. The engine analyzes user intent and active page context to surface relevant account benefits after providing public answers:
  - *Hero Gear queries:* Highlights Strategy Profiles and Hero Gear Optimizer to calculate upgrade paths with real gear levels, mastery, and materials.
  - *Bear Trap queries:* Recommends saving profiles and comparing formations with actual march capacities and battle stats.
  - *Event queries:* Promotes Event Tracker and alliance attendance analytics.
  - *Castle queries:* Explains Castle appointment management and role-specific workflows.
  - *Deep Optimization queries:* Clearly distinguishes free account benefits from Premium entitlements.
  Includes session-level dismissal memory (`dismissedCardIds`), anti-spam regex suppression on low-intent greetings ("hi", "thanks", "ok"), and strict exclusion of authenticated users from registration CTAs.

#### Login-Aware Intent Restoration & Logout Safety Purging
- **Type:** improvement
- **Area:** assistant
- **Description:** Enhanced authentication transition handling within the Assistant. When a guest accesses an `auth_required` capability, the Assistant presents actionable `[Sign in]` and `[Create free account]` cards and caches the pending query intent in `sessionStorage` (`ralyvora_assistant_pending_intent`). Upon successful authentication, the Assistant dynamically refetches `/api/assistant/bootstrap`, refreshes capability sets, and resumes the preserved intent without automatically executing mutations. Upon logout, all private structured state (`selectedProfileId`, `selectedPlayerId`, `selectedAllianceId`, `selectedKingdomId`, `selectedRunId`, `selectedImportId`, `selectedWorkspaceId`, private article IDs, and private tool cards) is immediately cleared, and the conversation session is cleanly reset.

#### Admin Center Visual and Structural Overhaul
- **Type:** improvement
- **Area:** admin-center
- **Description:** Replaced the flat monochrome administration surface with an ambient multi-layered radial gradient mesh backdrop across both dark and light modes. Refactored the Administration Shortcuts grid from rigid button elements into accessible flex containers (`div[role="button"]`), allowing multi-line description text to wrap cleanly, preventing icon tiles from overflowing past card borders, and keeping navigation chevrons neatly positioned.

#### Real-Time Notification Badges and Topbar Alert Indicators
- **Type:** new_feature
- **Area:** admin-center
- **Description:** Added live count badges (`.admin-nav-badge-red`) across the Admin Center sidebar for pending user registrations, password resets, data restores, and subscription support inquiries. Integrated an animated pulsating red dot indicator (`.admin-notification-dot-pulse`) into the topbar alert pill to make pending administrative work immediately apparent upon entering the Control Panel.

#### Supreme Admin Generative AI Mode Management
- **Type:** new_feature
- **Area:** assistant
- **Description:** Introduced an administrative settings workspace (`/admin/assistant-settings`) enabling Supreme Administrators to toggle external Generative AI mode on or off at runtime without service restarts. When generative mode is disabled - or during external provider outages - Ralyvora Assistant operates in pure deterministic mode, delivering reliable capability discovery, profile inspection, and route navigation with zero external model egress. All configuration changes are recorded in the administrative audit log.

#### Dedicated User Management Route Restoration
- **Type:** bug_fix
- **Area:** navigation
- **Description:** Fixed route matching for `/admin/users` in the application router. Direct requests to `/admin/users` now consistently navigate directly to the User Accounts & Access Management surface rather than falling through to the Admin Center overview dashboard.

#### Subpath Operations Console Route Resolution
- **Type:** bug_fix
- **Area:** navigation
- **Description:** Updated all Operations Console navigation links to use the application base path helper (`withBase('/platform-console#...')`). This ensures users accessing the platform under subpath deployments (`/games/kingshot/`) are routed to `/games/kingshot/platform-console#...` instead of hitting root-domain 404 errors.

#### Assistant Route Context Normalization and Pill Polishing
- **Type:** improvement
- **Area:** assistant
- **Description:** Resolved an issue where opening the Assistant from deep routes displayed raw URI-encoded query strings (such as `assistant?from=%2Fadmin%2Fusers`) in the context chip. The context resolver now parses and decodes route parameters, displays a clean human-readable title (`admin users`), and provides a one-click dismiss button.

#### Platform Observability and Background Job Diagnostics
- **Type:** improvement
- **Area:** observability
- **Description:** Added Prometheus metrics integration for HTTP request duration, BullMQ queue throughput, and Assistant tool latency. Enhanced background optimization runs with `lastAttemptStartedAt` tracking to ensure precise duration reporting and retry analysis.
