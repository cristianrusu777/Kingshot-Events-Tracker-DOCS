export type SearchContentType = 'Overview' | 'How it works' | 'Task guide' | 'Algorithm and decision logic' | 'Status reference' | 'Troubleshooting' | 'Role journey'

export const categoryAliases: Record<string, string[]> = {
  'Players': ['player', 'governor', 'roster', 'nickname', 'kick player', 'player missing'],
  'Events and Results': ['event occurrence', 'event instance', 'event date', 'same date', 'locked event'],
  'Imports and Data Entry': ['screenshot import', 'ocr import', 'duplicate screenshot', 'correct imported rows', 'partial extraction'],
  'Analytics and Rewards': ['war room', 'analytics empty', 'reward not eligible', 'shared analytics', 'granted analytics'],
  'Castle Positions': ['castle appointment', 'castle standby', 'planner conflict', 'applicant', 'schedule row full'],
  'Knowledge Hub': ['article locked', 'reading code', 'reading verification', 'open seal', 'browser translation', 'knowledge studio'],
  'Simulations and Optimizations': ['lab', 'hero gear', 'governor gear', 'chief gear', 'charm', 'bear joiners', 'autosave', 'profile autosave'],
  'Subscriptions and Usage': ['premium access', 'grant quota', 'limited mode', 'allocation', 'subscription grant'],
  'Platform Lifecycles': ['deleted', 'removed', 'recycle bin', 'restore', 'notifications', 'reports'],
  'Scopes and Communities': ['server context', 'server identifier', 'kingdom scope', 'kingdom identifier', 'alliance', 'active scope'],
  'Accounts and Access': ['login', 'registration', 'role', 'approval', 'linked account'],
  'Troubleshooting': ['error', 'missing', 'disabled', 'not saved', 'cannot find']
}

const sectionTypes: Record<string, SearchContentType> = {
  'Overview': 'Overview',
  'Getting Started': 'Task guide',
  'Accounts and Access': 'How it works',
  'Kingdoms and Alliances': 'How it works',
  'Scopes and Communities': 'How it works',
  'Players': 'How it works',
  'Events and Results': 'How it works',
  'Imports and Data Entry': 'Task guide',
  'Analytics and Rewards': 'How it works',
  'Castle Positions': 'Task guide',
  'Knowledge Hub': 'How it works',
  'Simulations and Optimizations': 'Algorithm and decision logic',
  'Subscriptions': 'How it works',
  'Subscriptions and Usage': 'How it works',
  'Platform Lifecycles': 'How it works',
  'Role Journeys': 'Role journey',
  'Troubleshooting': 'Troubleshooting',
  'Updates': 'Status reference'
}

const typeOverrides: Record<string, SearchContentType> = {
  '/kingshot-events/': 'Overview',
  '/kingshot-events/overview/feature-availability': 'Status reference',
  '/kingshot-events/overview/terminology': 'Status reference',
  '/kingshot-events/players/manage-players': 'Task guide',
  '/kingshot-events/players/profile-and-history': 'Algorithm and decision logic',
  '/kingshot-events/events/manual-entry': 'Task guide',
  '/kingshot-events/events/record-batches-and-corrections': 'Algorithm and decision logic',
  '/kingshot-events/imports/row-statuses-and-decisions': 'Algorithm and decision logic',
  '/kingshot-events/analytics/reward-rules': 'Algorithm and decision logic',
  '/kingshot-events/castle-positions/planner-controls': 'Algorithm and decision logic',
  '/kingshot-events/knowledge-hub/authoring-and-publication': 'Task guide',
  '/kingshot-events/knowledge-hub/reading-sessions': 'Algorithm and decision logic',
  '/kingshot-events/knowledge-hub/reading-verification': 'Task guide',
  '/kingshot-events/lab/profiles-and-autosave': 'How it works',
  '/kingshot-events/subscriptions/plans-and-effective-access': 'Algorithm and decision logic'
}

const pageAliases: Record<string, string[]> = {
  '/kingshot-events/scopes-and-communities/hierarchy-and-switching': ['server versus kingdom', 'server kingdom difference', 'scope selector'],
  '/kingshot-events/players/profile-and-history': ['player missing', 'kick player', 'nickname history', 'restore player'],
  '/kingshot-events/events/record-batches-and-corrections': ['same date', 'locked result', 'correct batch'],
  '/kingshot-events/imports/row-statuses-and-decisions': ['duplicate screenshot', 'unknown player', 'row review'],
  '/kingshot-events/analytics/reward-rules': ['reward not eligible', 'empty analytics', 'recalculate rewards'],
  '/kingshot-events/castle-positions/planner-controls': ['castle standby', 'planner conflict', 'row full'],
  '/kingshot-events/knowledge-hub/reading-sessions': ['reading code', 'open seal', 'article locked'],
  '/kingshot-events/lab/profiles-and-autosave': ['profile autosave', 'stale save'],
  '/kingshot-events/lab/bear-trap': ['bear joiners', 'bear damage', 'prediction error'],
  '/kingshot-events/subscriptions/plans-and-effective-access': ['grant quota', 'limited mode', 'read only grant']
}

export function normalizeCategory(section: string) {
  if (section === 'Kingdoms and Alliances') return 'Scopes and Communities'
  if (section === 'Subscriptions') return 'Subscriptions and Usage'
  return section
}

export function resolveSearchMetadata(page: any) {
  const category = normalizeCategory(page.navigationSection)
  return {
    category,
    contentType: typeOverrides[page.path] ?? sectionTypes[page.navigationSection] ?? 'How it works',
    aliases: [...(categoryAliases[category] ?? []), ...(pageAliases[page.path] ?? [])]
  }
}
