import type { DefaultTheme } from 'vitepress'
import { publishedPages } from './publication-manifest.mts'

const productOrder = [
  'Overview', 'Getting Started', 'Accounts and Access', 'Scopes and Communities',
  'Players', 'Kingdoms and Alliances',
  'Events and Results', 'Imports and Data Entry', 'Analytics and Rewards',
  'Castle Positions', 'Knowledge Hub', 'Simulations and Optimizations',
  'Subscriptions and Usage', 'Subscriptions', 'Platform Lifecycles',
  'Role Journeys', 'Troubleshooting', 'Updates'
]

const trustPages = publishedPages.filter((page) => page.navigationSection === 'Support and Policies')
const productPages = publishedPages.filter((page) => page.product === 'kingshot-events')

export function createSidebar(): DefaultTheme.Sidebar {
  return {
    '/kingshot-events/': productOrder.map((section) => ({
      text: section,
      collapsed: !['Overview', 'Getting Started'].includes(section),
      items: productPages
        .filter((page) => page.navigationSection === section)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((page) => ({ text: page.title, link: page.path }))
    })).filter((group) => group.items.length > 0),
    '/': [
      { text: 'Ralyvora Docs', items: [
        { text: 'Platforms', link: '/' },
        ...trustPages.sort((a, b) => a.sortOrder - b.sortOrder).map((page) => ({ text: page.title, link: page.path }))
      ] }
    ]
  }
}
