import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { createSidebar } from './sidebar.mts'
import { publishedPages, redirectPages } from './publication-manifest.mts'

const canonical = (path: string) => `https://docs.ralyvora.com${path}`
const searchAliases: Record<string, string> = {
  'Players': 'player governor roster nickname player missing kick player external player ID',
  'Events and Results': 'event occurrence event instance same date locked event record batch',
  'Imports and Data Entry': 'screenshot import OCR import duplicate screenshot partial extraction correct rows',
  'Analytics and Rewards': 'War Room analytics empty reward not eligible shared analytics granted analytics',
  'Castle Positions': 'castle appointment castle standby planner conflict row full',
  'Knowledge Hub': 'article locked reading code Reading Verification browser translation',
  'Simulations and Optimizations': 'Lab profile autosave hero gear governor gear chief gear charms bear joiners',
  'Subscriptions and Usage': 'premium access grant quota allocation limited mode suspension',
  'Platform Lifecycles': 'deleted removed recycle bin restore notification report',
  'Scopes and Communities': 'server kingdom alliance tenant scope active scope',
  'Accounts and Access': 'login registration approval role assignment player link',
  'Troubleshooting': 'error missing disabled not saved cannot find recovery'
}

export default withMermaid(defineConfig({
  lang: 'en-US',
  title: 'Ralyvora Docs',
  titleTemplate: ':title · Ralyvora Docs',
  description: 'User-focused documentation for Ralyvora platforms, currently featuring Kingshot Events.',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  srcExclude: ['editorial/**'],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0b7663' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['meta', { name: 'application-name', content: 'Ralyvora Docs' }],
    ['meta', { property: 'og:site_name', content: 'Ralyvora Docs' }]
  ],
  transformHead({ pageData }) {
    const record = publishedPages.find((item) => item.file === pageData.relativePath)
    return record ? [['link', { rel: 'canonical', href: canonical(record.path) }]] : []
  },
  sitemap: {
    hostname: 'https://docs.ralyvora.com',
    transformItems: (items) => items.filter((item) => publishedPages.some((page) => page.path.replace(/^\//, '').replace(/\/$/, '') === item.url.replace(/\/$/, '')))
  },
  markdown: { lineNumbers: false },
  themeConfig: {
    logo: '/brand-mark.svg',
    siteTitle: 'Ralyvora Docs',
    nav: [
      { text: 'Platforms', link: '/' },
      { text: 'Kingshot Events', link: '/kingshot-events/' },
      { text: 'About Ralyvora Docs', link: '/about-ralyvora-docs' },
      { text: 'Support', link: '/support' },
      { text: 'Policies', items: [
        { text: 'Privacy', link: '/privacy' },
        { text: 'Terms', link: '/terms' },
        { text: 'Editorial policy', link: '/editorial-policy' }
      ] }
    ],
    sidebar: createSidebar(),
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        _render(src, env, md) {
          const relative = env.relativePath as string
          const published = publishedPages.find((item) => item.file === relative)
          if (!published) return ''
          const metadata = [published.navigationSection, published.featureArea, published.audience, published.experienceLevel, searchAliases[published.navigationSection] ?? ''].join(' ')
          return `${md.render(src, env)}<div class="search-only-metadata">${metadata}</div>`
        }
      }
    },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous guide', next: 'Next guide' },
    lastUpdated: { text: 'Page updated' },
    footer: {
      message: 'Independent community documentation. Not affiliated with or endorsed by Kingshot or its publisher.',
      copyright: 'Ralyvora Docs'
    },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Kingshot Events guides',
    darkModeSwitchLabel: 'Theme'
  },
  mermaid: { theme: 'neutral', fontFamily: 'Inter, sans-serif' },
  vite: {
    build: { chunkSizeWarningLimit: 1400 },
    define: {
      __PUBLISHED_PAGE_COUNT__: JSON.stringify(publishedPages.length),
      __REDIRECT_PAGE_COUNT__: JSON.stringify(redirectPages.length)
    }
  }
}))
