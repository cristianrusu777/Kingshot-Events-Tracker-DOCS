import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { createSidebar } from './sidebar.mts'

const base = '/'

export default withMermaid(
  defineConfig({
    lang: 'en-US',
    title: 'Kingshot Event Tracker',
    titleTemplate: ':title · Kingshot Docs',
    description:
      'Guides for players, alliance leaders, Kings, and platform administrators using Kingshot Event Tracker.',
    base,
    lastUpdated: true,
    cleanUrls: false,
    // spend-optimizer is not a published feature - exclude permanently
    srcExclude: ['**/spend-optimizer*.md', '**/simulators/spend-optimizer*.md'],
    ignoreDeadLinks: false,

    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
      ['link', { rel: 'apple-touch-icon', href: `${base}favicon.svg` }],
      ['meta', { name: 'theme-color', content: '#047857' }],
      ['meta', { name: 'color-scheme', content: 'light dark' }]
    ],

    markdown: {
      lineNumbers: true
    },

    vite: {
      build: {
        chunkSizeWarningLimit: 1400
      }
    },

    themeConfig: {
      logo: `${base}images/app-mark.svg`,
      siteTitle: 'Kingshot Docs',

      nav: [
        { text: 'Start Here', link: '/getting-started/what-is-the-tracker' },
        { text: 'User Guides', link: '/how-to/players-directory' },
        { text: 'Castle Positions', link: '/castle-positions/overview' },
        { text: 'Simulators & Lab', link: '/simulators/overview' },
        { text: 'Imports & OCR', link: '/imports/overview' },
        { text: 'Subscriptions', link: '/subscriptions/overview' },
        { text: 'Roadmap', link: '/roadmap/README' },
        {
          text: 'Ralyvora',
          link: 'https://ralyvora.com/'
        }
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
        formatOptions: {
          dateStyle: 'medium',
          timeStyle: 'short'
        }
      },

      footer: {
        message: 'Built for the Kingshot Event Tracker community.',
        copyright: 'Created by CRON #1625'
      },

      returnToTopLabel: 'Back to top',
      sidebarMenuLabel: 'Documentation',
      darkModeSwitchLabel: 'Theme',
      lightModeSwitchTitle: 'Use light theme',
      darkModeSwitchTitle: 'Use dark theme'
    },

    mermaid: {
      theme: 'neutral',
      fontFamily: 'Inter, sans-serif'
    }
  })
)
