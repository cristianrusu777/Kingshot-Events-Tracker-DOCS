// Source-backed registry of reader-visible product mechanisms.
// Every record must identify implementation evidence and words that must appear in its guide.
const group = (productArea, docsFile, sourceEvidence, records) => records.map(([id, mechanismName, ...evidenceTerms]) => ({
  id, productArea, mechanismName, docsFile, sourceEvidence, evidenceTerms
}))

export const sourceMechanismCatalog = [
  ...group('Dashboard', 'kingshot-events/overview/dashboard-and-alerts.md', 'src/frontend/appPages/DashboardPages.tsx', [
    ['SRC-001', 'scope-aware dashboard', 'scope heading', 'selected context'],
    ['SRC-002', 'action-needed queue', 'Action Needed', 'owning workspace'],
    ['SRC-003', 'dashboard quick actions', 'Quick Actions', 'permission'],
    ['SRC-004', 'recent import shortcuts', 'Recent Imports', 'import review'],
    ['SRC-005', 'support and plan shortcuts', 'Support & Plans', 'request history'],
    ['SRC-006', 'kingdom pulse visibility', 'Kingdom Pulse', 'alliance-scoped'],
    ['SRC-007', 'dashboard alert recovery', 'count looks stale', 'refresh'],
  ]),
  ...group('Accounts and Access', 'kingshot-events/accounts-and-access/roles-and-approvals.md', 'src/frontend/app/routes.ts; src/frontend/lib/frontendAccess.tsx', [
    ['SRC-008', 'role definitions', 'Roles', 'permission bundles'],
    ['SRC-009', 'permission catalog', 'Permissions', 'permission catalog'],
    ['SRC-010', 'scoped user assignments', 'User assignments', 'target scope'],
    ['SRC-011', 'registration review queue', 'Registration requests', 'approval'],
    ['SRC-012', 'player-link review queue', 'Player-link reviews', 'accepts or rejects'],
    ['SRC-013', 'password request queue', 'Password requests', 'recovery'],
    ['SRC-014', 'effective access resolution', 'module availability', 'effective plan'],
  ]),
  ...group('Accounts and Access', 'kingshot-events/accounts-and-access/privacy-and-data-rights.md', 'src/frontend/appPages/PrivacyDataPage.tsx', [
    ['SRC-015', 'consent controls', 'consent controls', 'privacy choices'],
    ['SRC-016', 'formal privacy request submission', 'formal request', 'request type'],
    ['SRC-017', 'privacy request history', 'historical requests log', 'signed-in identity'],
    ['SRC-018', 'privacy request status tracking', 'in progress', 'fulfilled'],
    ['SRC-019', 'data export download', 'export download', 'fulfilled request'],
    ['SRC-020', 'privacy reviewer console', 'privacy reviewers', 'management console'],
  ]),
  ...group('Scopes and Communities', 'kingshot-events/scopes-and-communities/hierarchy-and-switching.md', 'src/domain/kingdoms; src/domain/alliances; src/frontend/app', [
    ['SRC-021', 'server to kingdom hierarchy', 'Server', 'Kingdom'],
    ['SRC-022', 'kingdom to alliance hierarchy', 'Kingdom', 'Alliance'],
    ['SRC-023', 'alliance to player hierarchy', 'Alliance', 'Player'],
    ['SRC-024', 'scope switching', 'scope switch', 'active context'],
    ['SRC-025', 'cross-scope access boundary', 'access', 'scope'],
  ]),
  ...group('Scopes and Communities', 'kingshot-events/scopes-and-communities/alliance-hub.md', 'src/frontend/appPages/DashboardPages.tsx; src/frontend/app/routes.ts', [
    ['SRC-026', 'Alliance Hub overview', 'Alliance Hub', 'current alliance'],
    ['SRC-027', 'alliance roster review', 'Review membership', 'Member list'],
    ['SRC-028', 'alliance analytics handoff', 'Alliance analytics', 'date range'],
    ['SRC-029', 'alliance announcements', 'announcement', 'audience'],
    ['SRC-030', 'alliance resource links', 'Resources', 'destination'],
    ['SRC-031', 'alliance management permission', 'management permission', 'target alliance'],
  ]),
  ...group('Players', 'kingshot-events/players/profile-and-history.md', 'src/frontend/appPages/PlayerPages.detail.tsx; src/application/players', [
    ['SRC-032', 'player identity layers', 'identity', 'player'],
    ['SRC-033', 'player activity state', 'activity', 'state'],
    ['SRC-034', 'player history timeline', 'history', 'timeline'],
    ['SRC-035', 'account-to-player link', 'link', 'account'],
    ['SRC-036', 'player scope history', 'scope', 'history'],
  ]),
  ...group('Players', 'kingshot-events/players/directory-and-profiles.md', 'src/frontend/appPages/PlayerPages.list.tsx', [
    ['SRC-037', 'player directory', 'directory', 'player'],
    ['SRC-038', 'player filters', 'filter', 'players'],
    ['SRC-039', 'player profile navigation', 'profile', 'Open'],
  ]),
  ...group('Events and Results', 'kingshot-events/events/record-batches-and-corrections.md', 'src/frontend/appPages/events/RecordBatchesPage.tsx; src/application/events', [
    ['SRC-040', 'event instance boundary', 'instance', 'event'],
    ['SRC-041', 'record batches', 'record batch', 'rows'],
    ['SRC-042', 'batch correction', 'correction', 'history'],
    ['SRC-043', 'same-date records', 'same date', 'result'],
    ['SRC-044', 'event record locks', 'lock', 'record'],
  ]),
  ...group('Events and Results', 'kingshot-events/events/proposals-and-settings.md', 'src/frontend/appPages/events/EventProposalsPage.tsx; src/frontend/appPages/events/EventSettingsPage.tsx', [
    ['SRC-045', 'event proposals', 'proposal', 'review'],
    ['SRC-046', 'event template approval', 'approved template', 'proposal'],
    ['SRC-047', 'event templates', 'template', 'structure'],
    ['SRC-048', 'event instances', 'instance', 'schedules'],
    ['SRC-049', 'event stage settings', 'stages', 'stage numbers'],
    ['SRC-050', 'event result-type settings', 'result types', 'settings'],
  ]),
  ...group('Events and Results', 'kingshot-events/events/preparation-and-kvk.md', 'src/frontend/pages/kvk/KvkPrepPage.tsx', [
    ['SRC-051', 'KvK preparation sessions', 'preparation session', 'kingdom'],
    ['SRC-052', 'before-power capture', 'baseline', 'before'],
    ['SRC-053', 'after-power capture', 'after values', 'phase'],
    ['SRC-054', 'preparation reminder windows', 'reminder windows', 'reminder count'],
    ['SRC-055', 'growth report', 'percentage growth', 'absolute'],
    ['SRC-056', 'KvK manual fallback', 'manual', 'provider'],
  ]),
  ...group('Imports and Data Entry', 'kingshot-events/imports/row-statuses-and-decisions.md', 'src/frontend/appPages/ImportPages.review.tsx; src/application/imports', [
    ['SRC-057', 'screenshot row reconciliation', 'row', 'reconciliation'],
    ['SRC-058', 'unknown-player decision', 'unknown', 'player'],
    ['SRC-059', 'duplicate-row decision', 'duplicate', 'row'],
    ['SRC-060', 'import apply boundary', 'apply', 'review'],
    ['SRC-061', 'import history', 'history', 'import'],
  ]),
  ...group('Imports and Data Entry', 'kingshot-events/imports/processing-console.md', 'src/frontend/pages/settings/processing-services/ProcessingServicesPage.tsx; src/frontend/appPages/SettingsPages.processing.tsx', [
    ['SRC-062', 'processing provider health', 'provider status', 'healthy'],
    ['SRC-063', 'processing jobs', 'processing job', 'queued'],
    ['SRC-064', 'candidate extraction', 'extract', 'candidate'],
    ['SRC-065', 'processing retry boundary', 'retry', 'failure'],
    ['SRC-066', 'manual processing fallback', 'manual entry', 'alternate'],
  ]),
  ...group('Analytics and Rewards', 'kingshot-events/analytics/reward-rules.md', 'src/application/analytics; src/application/rewards', [
    ['SRC-067', 'analytics aggregation', 'aggregation', 'result'],
    ['SRC-068', 'reward eligibility', 'eligibility', 'reward'],
    ['SRC-069', 'reward decision precedence', 'precedence', 'decision'],
    ['SRC-070', 'missing-data treatment', 'missing data', 'zero'],
  ]),
  ...group('Analytics and Rewards', 'kingshot-events/analytics/reward-workspace.md', 'src/frontend/appPages/DashboardPages.tsx; src/frontend/app/routes.ts', [
    ['SRC-071', 'reward management workspace', 'reward workspace', 'manager'],
    ['SRC-072', 'personal rewards view', 'My Rewards', 'linked player'],
    ['SRC-073', 'reward status workflow', 'pending', 'approved'],
    ['SRC-074', 'reward source verification', 'source results', 'recalculate'],
  ]),
  ...group('Castle Positions', 'kingshot-events/castle-positions/planner-controls.md', 'src/application/castlePositions/CastlePositionCompetitivePlacement.ts', [
    ['SRC-075', 'candidate preference ordering', 'preference', 'candidate'],
    ['SRC-076', 'competitive placement', 'placement', 'displacement'],
    ['SRC-077', 'protected assignments', 'protected', 'assignment'],
    ['SRC-078', 'schedule gap validation', 'gap', 'finalize'],
    ['SRC-079', 'contest strategy', 'Balanced', 'Best Time Match'],
  ]),
  ...group('Knowledge Hub', 'kingshot-events/knowledge-hub/studio-workspaces.md', 'src/frontend/appPages/knowledge/KnowledgeStudio.tsx', [
    ['SRC-080', 'Knowledge Studio drafts', 'Studio', 'draft'],
    ['SRC-081', 'structured content blocks', 'block picker', 'data tables'],
    ['SRC-082', 'Knowledge review queue', 'Review queue', 'structured changes'],
    ['SRC-083', 'Knowledge archive', 'Archive', 'archived'],
    ['SRC-084', 'Knowledge media library', 'Media', 'assets'],
    ['SRC-085', 'Knowledge homepage editor', 'Homepage editor', 'landing'],
    ['SRC-086', 'knowledge space management', 'Space management', 'audience'],
    ['SRC-087', 'knowledge entity editors', 'Entity editors', 'hero'],
  ]),
  ...group('Knowledge Hub', 'kingshot-events/knowledge-hub/reading-verification.md', 'src/frontend/appPages/knowledge/ReadingSessionMarker.tsx; src/application/knowledge/KnowledgeReadingSessionService.ts', [
    ['SRC-088', 'collapsed reading marker', 'collapsed', 'Open seal'],
    ['SRC-089', 'explicit seal reveal', 'Open seal', 'request'],
    ['SRC-090', 'reading verification entry', 'characters', 'verification'],
  ]),
  ...group('Simulations and Optimizations', 'kingshot-events/lab/profiles-and-autosave.md', 'src/frontend/appPages/simulators/useSimulatorProfiles.ts', [
    ['SRC-091', 'visitor Lab profiles', 'visitor', 'browser'],
    ['SRC-092', 'cloud Lab profiles', 'cloud', 'account'],
    ['SRC-093', 'active profile switching', 'active profile', 'switch'],
    ['SRC-094', 'Lab autosave', 'autosave', 'profile'],
  ]),
  ...group('Simulations and Optimizations', 'kingshot-events/lab/rally-simulator.md', 'src/frontend/appPages/simulators/rallyBattle/RallyTab.tsx', [
    ['SRC-095', 'rally leader configuration', 'leader', 'joiners'],
    ['SRC-096', 'rally effect classification', 'accepted', 'rejected'],
    ['SRC-097', 'rally stacking', 'additive', 'multiplicative'],
    ['SRC-098', 'controlled rally comparison', 'one variable', 'comparison'],
  ]),
  ...group('Simulations and Optimizations', 'kingshot-events/lab/battle-simulator.md', 'src/frontend/appPages/simulators/rallyBattle/BattleTab.tsx', [
    ['SRC-099', 'attacker configuration', 'attacker', 'formation'],
    ['SRC-100', 'defender configuration', 'defender', 'formation'],
    ['SRC-101', 'Monte Carlo battle runs', 'Monte Carlo', 'worker'],
    ['SRC-102', 'battle distribution interpretation', 'distribution', 'repeat count'],
  ]),
  ...group('Simulations and Optimizations', 'kingshot-events/lab/game-data-reference.md', 'src/frontend/appPages/simulators/tabs/DataTab.tsx', [
    ['SRC-103', 'game-data catalog', 'Catalog data', 'versioned'],
    ['SRC-104', 'upgrade cost lookup', 'upgrade-cost', 'level'],
    ['SRC-105', 'catalog-profile-scenario separation', 'Profile data', 'Scenario data'],
    ['SRC-106', 'data-version reproducibility', 'data version', 'reproduce'],
  ]),
  ...group('Subscriptions and Usage', 'kingshot-events/subscriptions/support-requests.md', 'src/frontend/pages/subscriptions/SubscriptionSupportPage.tsx', [
    ['SRC-107', 'plan discovery', 'active requestable plan', 'selector'],
    ['SRC-108', 'subscription target scope', 'target kingdom', 'target alliance'],
    ['SRC-109', 'manual subscription request', 'manual subscription requests', 'submit'],
    ['SRC-110', 'subscription request history', 'My Requests', 'status'],
    ['SRC-111', 'subscription request replies', 'reply', 'existing request'],
    ['SRC-112', 'pending request cancellation', 'pending', 'cancellation'],
  ]),
  ...group('Platform Lifecycles', 'kingshot-events/lifecycles/reports-and-issues.md', 'src/frontend/appPages/ReportPages.tsx', [
    ['SRC-113', 'new scoped report', 'New report', 'correct scope'],
    ['SRC-114', 'report filters', 'filter by priority', 'status'],
    ['SRC-115', 'report resolution', 'Resolve', 'permission'],
    ['SRC-116', 'report rejection', 'Reject', 'open'],
    ['SRC-117', 'report and restore separation', 'Restore requests', 'does not restore'],
  ]),
  ...group('Updates', 'kingshot-events/updates/module-availability.md', 'src/domain/pageAvailability.ts; src/frontend/pages/admin/PageAvailabilitySettingsPage.tsx', [
    ['SRC-118', 'release detail', 'release detail', 'publication date'],
    ['SRC-119', 'global update banner', 'global update banner', 'pointer'],
    ['SRC-120', 'module live status', 'live', 'normal access'],
    ['SRC-121', 'module under-construction status', 'under construction', 'availability notice'],
  ])
  ,...group('Product Overview', 'kingshot-events/index.md', 'src/frontend/app/routes.ts; src/domain/pageAvailability.ts; src/frontend/App.tsx', [
    ['SRC-122', 'identity-scope-source-decision model', 'Who is acting?', 'What is the source?'],
    ['SRC-123', 'end-to-end player journey', 'build one durable player record', 'Verifiable output'],
    ['SRC-124', 'end-to-end event evidence journey', 'bring in evidence', 'record batch'],
    ['SRC-125', 'source-first correction model', 'owning source', 'downstream views'],
    ['SRC-126', 'cross-module product demonstration', 'complete demonstration', 'Step 10'],
    ['SRC-127', 'explicit product limitations', 'deliberately does not do', 'uncertainty']
  ])
  ,...group('Simulations and Optimizations', 'kingshot-events/lab/index.md', 'src/frontend/appPages/simulators; src/domain/game-data', [
    ['SRC-128', 'Lab purpose and reproducibility', 'Why the Lab exists', 'reproducible scenario'],
    ['SRC-129', 'Lab module selection', 'Module purpose and output map', 'Question it answers'],
    ['SRC-130', 'profile-scenario separation', 'Shared profiles', 'scenario fields'],
    ['SRC-131', 'safe plan application', 'safe application', 'planning state only'],
    ['SRC-132', 'module-specific diagnosis', 'Failure diagnosis by module', 'Save conflict']
  ])
  ,...group('Simulations and Optimizations', 'kingshot-events/lab/hero-gear.md', 'src/frontend/appPages/simulators/heroGear; src/application/simulators', [
    ['SRC-133', 'Hero Gear candidate loop', 'milestone', 'Affordable positive candidate'],
    ['SRC-134', 'Hero Gear optional reforge', 'reforge', 'locked']
  ])
  ,...group('Simulations and Optimizations', 'kingshot-events/lab/governor-gear.md', 'src/application/simulators; src/domain/game-data', [
    ['SRC-135', 'Governor Gear set deltas', 'set-effect deltas', 'refresh set state'],
    ['SRC-136', 'Governor Gear material constraints', 'Satin', 'Artisan Vision']
  ])
  ,...group('Simulations and Optimizations', 'kingshot-events/lab/charms.md', 'src/application/simulators; src/domain/game-data', [
    ['SRC-137', 'Charm candidate loop', 'charm slots', 'Positive candidate'],
    ['SRC-138', 'Charm material constraints', 'Guides', 'Designs']
  ])
  ,...group('Simulations and Optimizations', 'kingshot-events/lab/bear-trap.md', 'src/frontend/appPages/simulators/tabs/BearTab.tsx; src/domain/simulators/bearEngine.ts', [
    ['SRC-139', 'Bear leader and joiner resolution', 'Leader contribution', 'Joiner contribution'],
    ['SRC-140', 'Bear formation recommendation', 'minimum-infantry floor', 'squared coefficients'],
    ['SRC-141', 'Bear prediction error', 'prediction error', 'observed result']
  ])
  ,...group('Knowledge Hub', 'kingshot-events/knowledge-hub/index.md', 'src/frontend/appPages/knowledge/KnowledgeApp.tsx; src/frontend/appPages/knowledge/KnowledgeStudio.tsx', [
    ['SRC-142', 'Knowledge purpose and canonical revision', 'Why Knowledge Hub exists', 'canonical'],
    ['SRC-143', 'Knowledge workspace map', 'Workspace purpose map', 'Review queue'],
    ['SRC-144', 'scoped guide publication demonstration', 'publish a scoped guide safely', 'Project to readers'],
    ['SRC-145', 'Knowledge search access boundary', 'Protected bodies', 'Search cards'],
    ['SRC-146', 'Reading Verification explicit reveal demonstration', 'Nothing is revealed automatically', 'Open seal']
  ])
  ,...group('Knowledge Hub', 'kingshot-events/knowledge-hub/reading-sessions.md', 'src/application/knowledge/KnowledgeReadingSessionService.ts', [
    ['SRC-147', 'reading session revision pinning', 'pins published revision', 'assignment'],
    ['SRC-148', 'reading session report boundary', 'Authorized report', 'manager']
  ])
  ,...group('Product Orientation', 'kingshot-events/index.md', 'src/frontend/app/routes.ts; src/frontend/appPages; src/application; src/domain', [
    ['SRC-151', 'complete product capability guide', 'Complete product capability guide', 'operating workspace'],
    ['SRC-152', 'identity scope availability evidence chain', 'How to evaluate any feature', 'Identity'],
    ['SRC-153', 'multi-path contribution intake', 'Screenshot, spreadsheet, and structured imports', 'reviewed subset'],
    ['SRC-154', 'governed planning and publishing overview', 'Knowledge Hub is the governed publishing system', 'Lab is the planning and simulation workspace'],
    ['SRC-155', 'lifecycle recovery orientation', 'Reports, notifications, deletion, and recovery', 'recovery is part of a reliable product']
  ])
  ,...group('Simulations and Optimizations', 'kingshot-events/lab/index.md', 'src/frontend/appPages/simulators; src/domain/simulators; src/domain/game-data; src/application/simulators', [
    ['SRC-156', 'Lab hub state handling', 'Hub states and module availability', 'loading, unavailable, empty, ready, and error'],
    ['SRC-157', 'profile library lifecycle', 'Profile library and persistence', 'create, select, rename, duplicate, update, and remove'],
    ['SRC-158', 'profile troop and capacity model', 'march capacities and troop counts', 'Truegold'],
    ['SRC-159', 'profile hero and skill model', 'selected heroes, skill levels', 'supported widgets'],
    ['SRC-160', 'stat snapshot provenance', 'Stat snapshots, sources, and layers', 'Source labels'],
    ['SRC-161', 'Hero Gear objective planning', 'Hero Gear planning and reforge', 'optimization objective'],
    ['SRC-162', 'Governor Gear planning overview', 'Governor Gear', 'remaining resources'],
    ['SRC-163', 'Charm candidate exclusion', 'Charm planning evaluates', 'candidate can disappear'],
    ['SRC-164', 'Bear simulation and observed contribution split', 'Simulate and contribute', 'Share Your Bear Experience'],
    ['SRC-165', 'Rally effect acceptance breakdown', 'accepted and rejected effects', 'resulting multipliers'],
    ['SRC-166', 'repeat battle distribution', 'worker-backed repeated model', 'distribution across repeated runs'],
    ['SRC-167', 'Game Data reference surface', 'Game Data is the reference surface', 'Search and category navigation'],
    ['SRC-168', 'Lab evidence class labels', 'Result trust labels', 'Observed contribution']
  ])
  ,...group('Knowledge Hub', 'kingshot-events/knowledge-hub/index.md', 'src/frontend/appPages/knowledge/KnowledgeApp.tsx; src/frontend/appPages/knowledge/KnowledgeStudio.tsx; src/application/knowledge', [
    ['SRC-169', 'Knowledge home and recommendations', 'Home, directories, and recommendations', 'canonical routes'],
    ['SRC-170', 'typed Knowledge search', 'Search and structured databases', 'hero, event, and mechanic records'],
    ['SRC-171', 'article reader presentation controls', 'adjustable font size', 'cover-image lightbox'],
    ['SRC-172', 'server-selected access projection', 'Access policies, projections, and teasers', 'before delivery'],
    ['SRC-173', 'Knowledge spaces', 'Spaces group material', 'editorial ownership'],
    ['SRC-174', 'block-based Studio drafts', 'Studio drafts and the block library', 'validated blocks'],
    ['SRC-175', 'managed Knowledge media', 'Media and Asset Picker', 'accessibility text'],
    ['SRC-176', 'AI writing assistant modes', 'create a proposed passage', 'rewrite a selected passage'],
    ['SRC-177', 'AI Structured Import editing', 'AI Structured Import', 'merge or move sections'],
    ['SRC-178', 'revision comparison workflow', 'Review queue and Revision Diff', 'additions and removals'],
    ['SRC-179', 'canonical publication lifecycle', 'Revision, publication, and archive lifecycle', 'canonical revision'],
    ['SRC-180', 'browser-only translation assistance', 'Browser Translation Assistance', 'does not create, store, approve, or publish'],
    ['SRC-181', 'Reading Verification guarded reveal', 'explicitly chooses **Open seal**', 'validates the session and assignment'],
    ['SRC-182', 'Knowledge recovery map', 'Recovery map', 'Imported structure is wrong']
  ])  ,...group('Subscriptions and Usage', 'kingshot-events/subscriptions/plans-and-effective-access.md', 'src/application/subscriptions; src/domain/subscriptions', [
    ['SRC-149', 'effective entitlement order', 'Direct alliance plan', 'kingdom grant'],
    ['SRC-150', 'quota limited mode', 'Limited mode', 'quota-consuming writes']
  ])
]
