import { defineConfig } from 'vitepress'
import { createSidebar } from './sidebar.mts'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserSite = repository?.toLowerCase().endsWith('.github.io')
const base = process.env.VITEPRESS_BASE ?? (repository ? (isUserSite ? '/' : `/${repository}/`) : '/')

export default defineConfig({
  lang: 'en-US',
  title: 'Kingshot Event Tracker',
  titleTemplate: ':title · Kingshot Docs',
  description: 'Guides for players, alliance leaders, Kings, and platform administrators using Kingshot Event Tracker.',
  base,
  lastUpdated: true,
  cleanUrls: false,
  ignoreDeadLinks: false,
  head: [
    ['meta', { name: 'theme-color', content: '#047857' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/images/app-mark.svg',
    siteTitle: 'Kingshot Docs',
    nav: [
      { text: 'Start Here', link: '/getting-started/what-is-the-tracker' },
      { text: 'User Guides', link: '/how-to/players-directory' },
      { text: 'Imports & OCR', link: '/imports/overview' },
      { text: 'Subscriptions', link: '/subscriptions/overview' },
      { text: 'Roadmap', link: '/roadmap/README' }
    ],
    sidebar: createSidebar(),
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous guide',
      next: 'Next guide'
    },
    lastUpdated: {
      text: 'Updated',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' }
    },
    editLink: {
      pattern: 'https://github.com/cristianrusu777/Kingshot-Events-Tracker-DOCS/edit/main/docs/:path',
      text: 'Suggest a correction on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cristianrusu777/Kingshot-Events-Tracker-DOCS' }
    ],
    footer: {
      message: 'Built for the Kingshot Event Tracker community.',
      copyright: 'Documentation is maintained alongside the tracker.'
    },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Documentation',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Use light theme',
    darkModeSwitchTitle: 'Use dark theme'
  }
})

