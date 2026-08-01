import type { DefaultTheme } from 'vitepress'
import { publishedPages } from './publication-manifest.mts'

type Item = DefaultTheme.SidebarItem
const link = (text: string, path: string): Item => ({ text, link: `/kingshot-events/${path}` })
const subgroup = (text: string, items: Item[]): Item => ({ text, collapsed: true, items })
const section = (text: string, icon: string, items: Item[], collapsed = true): Item => ({
  text: `${icon} ${text}`,
  collapsed,
  items
})

const productSidebar: Item[] = [
  section('Overview', '◈', [
    link('Kingshot Events', ''),
    link('Problems solved', 'overview/problems-solved'),
    link('How the platform fits together', 'overview/platform-model'),
    link('Product terminology', 'overview/terminology'),
    link('Feature availability', 'overview/feature-availability')
  ], false),
  section('Getting Started', '◇', [
    link('Your first visit', 'getting-started/first-visit'),
    link('Account, profile, and player link', 'getting-started/account-and-profile'),
    link('Choose scope and understand access', 'getting-started/access-and-navigation')
  ], false),
  section('Accounts and Access', '◉', [
    subgroup('Identity and approval', [
      link('Registration and login', 'getting-started/first-visit'),
      link('Account and player link', 'getting-started/account-and-profile')
    ]),
    subgroup('Access resolution', [
      link('Hierarchy and scope switching', 'scopes-and-communities/hierarchy-and-switching'),
      link('Feature availability', 'overview/feature-availability')
    ]),
    link('Access troubleshooting', 'troubleshooting/access-problems')
  ]),
  section('Scopes and Communities', '◇', [
    link('Overview', 'scopes-and-communities/'),
    subgroup('Core concepts', [
      link('Hierarchy and switching', 'scopes-and-communities/hierarchy-and-switching'),
      link('Membership and management', 'scopes-and-communities/membership-and-management'),
      link('Cross-scope visibility', 'scopes-and-communities/cross-scope-visibility')
    ]),
    subgroup('Community work', [
      link('Working inside an alliance', 'kingdoms-and-alliances/alliance-work'),
      link('Working inside a kingdom', 'kingdoms-and-alliances/kingdom-work')
    ])
  ]),
  section('Players', '●', [
    link('Overview', 'players/'),
    subgroup('Find and understand players', [
      link('Player directory and profiles', 'players/directory-and-profiles'),
      link('Filters and columns', 'players/filters-and-columns'),
      link('Profile, activity, and history', 'players/profile-and-history')
    ]),
    subgroup('Identity and synchronization', [
      link('Player linking and synchronization', 'players/linking-and-sync'),
      link('Identity layers and precedence', 'players/profile-and-history')
    ]),
    subgroup('Management and lifecycle', [
      link('Add and update players', 'players/manage-players'),
      link('Activity, removal, and restore', 'players/lifecycle'),
      link('Player problems', 'troubleshooting/data-and-save-problems')
    ])
  ]),
  section('Events and Results', '⚑', [
    link('Overview', 'events/'),
    subgroup('Event model', [
      link('Templates, instances, and results', 'events/overview'),
      link('Instances, batches, and corrections', 'events/record-batches-and-corrections'),
      link('Participation, scores, and stages', 'events/participation-and-scores'),
      link('Event-specific behavior', 'events/event-specific-behavior')
    ]),
    subgroup('Record and review', [
      link('Enter results manually', 'events/manual-entry'),
      link('Review results and history', 'events/review-and-history'),
      link('Event problems', 'troubleshooting/event-problems')
    ])
  ]),
  section('Imports and Data Entry', '⇧', [
    link('Overview', 'imports/'),
    subgroup('Bring in data', [
      link('Screenshot import', 'imports/screenshot-import'),
      link('Providers and processing', 'imports/providers-and-processing'),
      link('Structured input', 'imports/spreadsheet-and-structured-input')
    ]),
    subgroup('Reconcile and apply', [
      link('Row states and decisions', 'imports/row-statuses-and-decisions'),
      link('Review and apply imported data', 'imports/review-imported-data'),
      link('Duplicate, date, and overwrite rules', 'imports/data-rules'),
      link('Rollback and restore', 'imports/rollback-and-restore')
    ]),
    link('Import troubleshooting', 'imports/import-troubleshooting')
  ]),
  section('Analytics and Rewards', '▤', [
    link('Overview', 'analytics/'),
    subgroup('Analytics views', [
      link('War Room overview', 'analytics/activity-and-results'),
      link('Kingdom analytics', 'analytics/kingdom'),
      link('Alliance analytics', 'analytics/alliance'),
      link('Player analytics', 'analytics/player'),
      link('Custom analytics', 'analytics/custom')
    ]),
    subgroup('Rules and interpretation', [
      link('Aggregation and reward decisions', 'analytics/reward-rules'),
      link('Reward eligibility and statuses', 'analytics/rewards-and-statuses'),
      link('Sharing, scope, and troubleshooting', 'analytics/sharing-and-troubleshooting')
    ])
  ]),
  section('Castle Positions', '♛', [
    link('Overview', 'castle-positions/'),
    subgroup('Apply and review', [
      link('Applicant guide', 'castle-positions/applicant-guide'),
      link('Resources and eligibility', 'castle-positions/resources-and-eligibility'),
      link('Review workflow', 'castle-positions/review-workflow')
    ]),
    subgroup('Plan and publish', [
      link('Candidate ranking and suggestions', 'castle-positions/planner-controls'),
      link('Planning and publishing', 'castle-positions/planning-and-publishing'),
      link('Statuses and schedule changes', 'castle-positions/statuses-and-changes'),
      link('Notifications and versions', 'castle-positions/notifications-and-versions')
    ]),
    link('Castle Position problems', 'troubleshooting/castle-position-problems')
  ]),
  section('Knowledge Hub', '▣', [
    link('Overview', 'knowledge-hub/'),
    subgroup('Read and access', [
      link('Read and find articles', 'knowledge-hub/reading-and-finding'),
      link('Access and translation', 'knowledge-hub/access-and-translation'),
      link('Reading Verification', 'knowledge-hub/reading-verification')
    ]),
    subgroup('Author and publish', [
      link('Authoring and publication', 'knowledge-hub/authoring-and-publication'),
      link('Blocks and media', 'knowledge-hub/blocks-and-media'),
      link('Revisions and review', 'knowledge-hub/revisions-and-review'),
      link('Access, publication, and sessions', 'knowledge-hub/reading-sessions')
    ]),
    link('Knowledge problems', 'troubleshooting/knowledge-problems')
  ]),
  section('Simulations and Optimizations', '⚗', [
    link('Lab overview', 'lab/'),
    subgroup('Profiles and shared inputs', [
      link('Profiles and autosave', 'lab/profiles-and-autosave'),
      link('Interpret results', 'lab/interpreting-results')
    ]),
    subgroup('Progression optimizers', [
      link('Hero Gear logic', 'lab/hero-gear'),
      link('Governor Gear logic', 'lab/governor-gear'),
      link('Charm logic', 'lab/charms'),
    ]),
    subgroup('Combat tools', [
      link('Bear Trap model', 'lab/bear-trap'),
      link('Bear rally and battle', 'lab/bear-rally-battle')
    ]),
    link('Simulator problems', 'troubleshooting/simulator-problems')
  ]),
  section('Subscriptions and Usage', '◈', [
    link('Overview', 'subscriptions/'),
    link('Plans, grants, quotas, and access', 'subscriptions/plans-and-effective-access'),
    link('Access and usage', 'subscriptions/access-and-usage'),
    link('Subscription troubleshooting', 'subscriptions/troubleshooting')
  ]),
  section('Shared Lifecycles', '⟳', [
    link('Notifications and reports', 'lifecycles/notifications-and-reports'),
    link('Recycle bin and restore requests', 'lifecycles/recycle-bin-and-restore-requests')
  ]),
  section('Role Journeys', '◇', [
    link('Player or member', 'role-journeys/player-or-member'),
    link('Alliance leader', 'role-journeys/alliance-leader'),
    link('Co-leader', 'role-journeys/co-leader'),
    link('King or kingdom manager', 'role-journeys/kingdom-manager'),
    link('Minister of Justice', 'role-journeys/minister-of-justice'),
    link('Knowledge author or reviewer', 'role-journeys/knowledge-author'),
    link('Reading-session manager', 'role-journeys/reading-session-manager')
  ]),
  section('Troubleshooting', '⚠', [
    link('Problem finder', 'troubleshooting/'),
    link('Access problems', 'troubleshooting/access-problems'),
    link('Data and save problems', 'troubleshooting/data-and-save-problems'),
    link('Event problems', 'troubleshooting/event-problems'),
    link('Import problems', 'troubleshooting/import-problems'),
    link('Castle Position problems', 'troubleshooting/castle-position-problems'),
    link('Knowledge problems', 'troubleshooting/knowledge-problems'),
    link('Simulator problems', 'troubleshooting/simulator-problems')
  ]),
  section('Updates', '◌', [link('User-facing release notes', 'updates/release-notes')])
]

export function createSidebar(): DefaultTheme.Sidebar {
  const trustPages = publishedPages.filter((page) => page.navigationSection === 'Support and Policies')
  return {
    '/kingshot-events/': productSidebar,
    '/': [{ text: 'Ralyvora Docs', items: [
      { text: 'Platforms', link: '/' },
      ...trustPages.sort((a, b) => a.sortOrder - b.sortOrder).map((page) => ({ text: page.title, link: page.path }))
    ] }]
  }
}
