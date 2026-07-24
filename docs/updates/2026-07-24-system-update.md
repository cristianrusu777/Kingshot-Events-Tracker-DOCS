# 24 July 2026 System Update

This update covers the major release of the **Strategy & Simulators Suite** (Bear Trap Engine & Hero Gear Reforge Simulator), **Platform Console Observability**, **Admin Role Refactoring**, **Global Banner Policy Hardening**, **Subscription Plan Catalog Redesign**, and **404/Base Path Routing** delivered across 24 July 2026.

::: tip Major Feature Release
The **Strategy & Simulators Suite** is now live, introducing high-precision Bear Trap combat modeling, 4-scope rally composition maps, Hero Gear reforge XP recovery calculations, and Machine Learning damage predictions.
:::

---

## At a Glance: Key Changes & Before/After Operational Matrix

| Functional Area | Previous State | Current Capabilities | Primary Benefit |
| --- | --- | --- | --- |
| **Bear Trap Events** | Rough manual estimation | 4-scope composition map, Truegold troop effects, verified skill evidence, ML predictions | Accurate damage modeling & optimal rally setup |
| **Hero Gear Reforging** | Unclear XP recycling losses | Precise donor XP recovery math, color-coded delta metrics, slot filtering | Zero wasted XP when upgrading equipment |
| **Admin Observability** | Basic system logs | Multi-tab Platform Console: Security events, Bear ML telemetry, System Config, Audit Logs | Real-time platform visibility & monitoring |
| **Access Control & Roles** | Simple role lists | Refactored role management, `AttributeBadge` display, tenant scope, session revocation | Granular security & immediate permission enforcement |
| **Global Banners** | Unconstrained banner edits | Hardened publication logic, uniqueness constraints, transactional integrity | Secure & policy-compliant banner management |
| **Subscription Catalog** | Basic plan display | Visual hierarchy redesign, dedicated `PlanCatalog` support page, clear feature cards | Streamlined plan selection & support |
| **Routing & UX** | Generic error fallbacks | Custom responsive 404 page, SPA Base Path support, standardized `RouteLoading` UI | Polished navigation & seamless sub-path deployment |

---

## 1. Strategy & Simulators Bounded Context

The platform now features a dedicated Strategy & Simulators bounded context:

- **[Bear Trap Strategy Lab](../simulators/bear-trap-lab.md)**:
  - **4-Scope Composition Map**: Alliance, Kingdom, Personal, and Target scopes for rally leader & joiner planning.
  - **Troop Skill & Truegold Catalog**: Incorporates verified troop tier bonuses and Truegold unit lethal effects.
  - **Bear ML Predictor (`/bear-ml/predict`)**: Machine learning inference engine validating theoretical calculations against historical rally telemetry.
- **[Hero Gear & Reforge Simulator](../simulators/hero-gear-reforge.md)**:
  - **Donor Piece Detection & XP Recovery Math**: Computes exact net recoverable experience from donor gear minus dismantling penalties.
  - **Enhanced Gear Comparison**: Color-coded delta metrics (<span style="color: #10b981;">+green</span> for gains, <span style="color: #ef4444;">-red</span> for drops), hero class & equipment slot filtering.
  - **Paid Reforge Policy Guard**: Restricts paid reforge recommendations when account progress planner feature toggles are administrative-disabled.

---

## 2. Platform Console & Admin Observability

The **Platform Console** has been expanded into a comprehensive observability dashboard:

- **System Configuration**: Centralized view of global feature flags, operational toggles, and base path settings.
- **Providers & Processing Services**: Dynamic health indicators for OCR and AI service providers.
- **Audit Log**: Immutable audit trail for administrative actions, role modifications, and policy changes.
- **Security Events**: Real-time monitoring of failed logins, privilege escalation attempts, and session revocations.
- **Subscriptions & Usage Monitoring**: Real-time quota tracking, usage thresholds, and subscription status alerts.
- **Bear Data & ML Telemetry**: Live telemetry monitoring prediction error rates, inference latency, and dataset drift for `/bear-ml/predict`.

---

## 3. Role Management & Access Control

Role management and access enforcement have been modernized:

- **Granular Permission Catalog**: Standardized permission definitions in `accessControlCatalog.ts`.
- **AttributeBadge Component**: Replaced raw text role labels with visual `AttributeBadge` components reflecting role scopes.
- **Moderator Role**: Added dedicated Moderator role with scoped content moderation capabilities.
- **Session Revocation**: Changing user credentials or revoking role privileges instantly invalidates active user sessions across all devices.
- **Tenant Scope Enforcement**: Strict validation ensuring kingdom and alliance administrators operate strictly within their assigned tenant boundary.

---

## 4. Global Banner & Advertising Policy

The global banner publication workflow was rebuilt for security and policy compliance:

- **Structured Banner Builder**: Refactored advertising controller to construct validated, policy-compliant banner objects.
- **Uniqueness & Transactional Integrity**: Database-enforced uniqueness constraints for active banners to eliminate duplicate banner collisions.
- **Draft Validation**: Enhanced validation pipeline verifying banner image dimensions, target URLs, and campaign schedules before publication.

---

## 5. Subscription Plan Catalog Redesign

The subscription and support experience has been upgraded:

- **Plan Catalog Support View**: Dedicated page (`PlanCatalog.tsx`) outlining available plans, feature comparisons, and plan assignment options.
- **Visual Card Hierarchy**: Enhanced CSS styling (`subscription-support.css`) with responsive card grids and clear call-to-action buttons.
- **Plan Assignment Workflows**: Streamlined administrator paths for assigning plans to alliances or kingdoms.

---

## 6. Public Routing, 404 & Base Path Infrastructure

User experience and deployment flexibility have been polished:

- **Custom 404 NotFound Page**: Responsive error page (`NotFoundPage.tsx`) with clear navigation links, SEO metadata, and themed layout.
- **SPA Base Path Support**: Full support for hosting the tracker under custom sub-paths (`/games/kingshot/`), correctly resolving assets and deep routes.
- **Standardized Loading UI**: Implemented `RouteLoading` and `LoadingPanel` components to eliminate abrupt layout shifts during page transitions.

---

## Documentation Quick Links

| Topic | Guide |
| --- | --- |
| Simulators Overview | [Strategy & Simulators Overview](../simulators/overview.md) |
| Bear Trap Strategy Lab | [Bear Trap Strategy Lab & Engine](../simulators/bear-trap-lab.md) |
| Hero Gear & Reforge | [Hero Gear & Reforge Simulator](../simulators/hero-gear-reforge.md) |
| Admin Portal & Console | [Platform Console Guide](../admin/platform-console.md) |
| Managing Roles | [Manage Roles & Access](../admin/manage-roles.md) |
| Subscriptions | [Subscriptions Overview](../subscriptions/overview.md) |
