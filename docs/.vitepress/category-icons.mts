export type CategoryIconDefinition = { label: string; paths: string[] }

export const categoryIcons: Record<string, CategoryIconDefinition> = {
  'Overview': { label: 'Overview', paths: ['M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z', 'M12 8v8M8 12h8'] },
  'Getting Started': { label: 'Getting Started', paths: ['M12 3a9 9 0 1 0 9 9', 'M12 7v5l3 2', 'M16 3h5v5'] },
  'Accounts and Access': { label: 'Accounts and Access', paths: ['M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z', 'M9 12l2 2 4-5'] },
  'Scopes and Communities': { label: 'Scopes and Communities', paths: ['M12 4v5M5 20v-5l7-4 7 4v5', 'M3 20h4M10 20h4M17 20h4'] },
  'Players': { label: 'Players', paths: ['M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M2 21c.5-5 3-8 7-8s6.5 3 7 8', 'M17 8a3 3 0 1 0 0-6M17 13c3 0 5 2 5 6'] },
  'Events and Results': { label: 'Events and Results', paths: ['M5 22V3', 'M5 5h14l-4 5 4 5H5'] },
  'Imports and Data Entry': { label: 'Imports and Data Entry', paths: ['M4 17v4h16v-4', 'M12 17V3', 'm7 10 5-5 5 5'] },
  'Analytics and Rewards': { label: 'Analytics and Rewards', paths: ['M4 20h16', 'M6 17v-6h3v6M11 17V5h3v12M16 17v-9h3v9'] },
  'Castle Positions': { label: 'Castle Positions', paths: ['m3 7 5 4 4-8 4 8 5-4-2 13H5L3 7Z', 'M6 16h12'] },
  'Knowledge Hub': { label: 'Knowledge Hub', paths: ['M3 5c4-1 7 0 9 3v13c-2-3-5-4-9-3V5Z', 'M21 5c-4-1-7 0-9 3v13c2-3 5-4 9-3V5Z'] },
  'Simulations and Optimizations': { label: 'Simulations and Optimizations', paths: ['M8 3h8M10 3v6L4 19c-.6 1 .2 2 1.5 2h13c1.3 0 2.1-1 1.5-2L14 9V3', 'M7 16h10'] },
  'Subscriptions and Usage': { label: 'Subscriptions and Usage', paths: ['m12 3 8 4-8 4-8-4 8-4Z', 'm5 11 7 3.5 7-3.5M5 16l7 3.5 7-3.5'] },
  'Platform Lifecycles': { label: 'Platform Lifecycles', paths: ['M20 7v5h-5', 'M4 17v-5h5', 'M18 9a7 7 0 0 0-12-2M6 15a7 7 0 0 0 12 2'] },
  'Role Journeys': { label: 'Role Journeys', paths: ['M5 20V9l7-6 7 6v11', 'M9 20v-6h6v6'] },
  'Troubleshooting': { label: 'Troubleshooting', paths: ['M12 3 22 21H2L12 3Z', 'M12 9v5M12 18h.01'] },
  'Updates': { label: 'Updates', paths: ['M12 3a9 9 0 1 1-8.5 6', 'M3 4v5h5', 'M12 7v5l4 2'] }
}

const slugCategories: Record<string, string> = {
  'overview': 'Overview', 'getting-started': 'Getting Started', 'accounts-and-access': 'Accounts and Access',
  'scopes-and-communities': 'Scopes and Communities', 'kingdoms-and-alliances': 'Scopes and Communities', 'players': 'Players',
  'events': 'Events and Results', 'imports': 'Imports and Data Entry', 'analytics': 'Analytics and Rewards',
  'castle-positions': 'Castle Positions', 'knowledge-hub': 'Knowledge Hub', 'lab': 'Simulations and Optimizations',
  'subscriptions': 'Subscriptions and Usage', 'lifecycles': 'Platform Lifecycles', 'role-journeys': 'Role Journeys',
  'troubleshooting': 'Troubleshooting', 'updates': 'Updates'
}

export const categoryFromPath = (href: string) => slugCategories[href.split('/').filter(Boolean)[1] ?? ''] ?? 'Overview'
export const normalizeCategory = (category: string) => categoryIcons[category] ? category : (slugCategories[category] ?? 'Overview')
export const iconForCategory = (category: string) => categoryIcons[normalizeCategory(category)]
