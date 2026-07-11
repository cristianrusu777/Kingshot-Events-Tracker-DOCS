import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function getSidebar() {
  const docsDir = path.resolve(__dirname, '..')

  const categoryOrder = [
    'getting-started',
    'roles',
    'how-to',
    'events',
    'imports',
    'subscriptions',
    'analytics',
    'admin',
    'testing',
    'troubleshooting',
    'reference'
  ]

  const categoryNames: Record<string, string> = {
    'getting-started': 'Getting Started',
    'roles': 'Roles & Access',
    'how-to': 'How‑To Guides',
    'events': 'Event Tracking',
    'imports': 'Imports & Scanning',
    'subscriptions': 'Subscriptions & Billing',
    'analytics': 'Analytics & Insights',
    'admin': 'Platform Administration',
    'testing': 'Testing & QA',
    'troubleshooting': 'Troubleshooting',
    'reference': 'Reference'
  }

  // Find other folders dynamically
  try {
    const allSubDirs = fs.readdirSync(docsDir).filter(f => {
      if (f.startsWith('.') || f === 'public' || f === 'node_modules' || f === 'images') return false
      const fullPath = path.join(docsDir, f)
      return fs.statSync(fullPath).isDirectory()
    })

    for (const dir of allSubDirs) {
      if (!categoryOrder.includes(dir)) {
        categoryOrder.push(dir)
      }
    }
  } catch (err) {
    console.error('Failed to read docs dir:', err)
    return []
  }

  const sidebar = []

  for (const cat of categoryOrder) {
    const catDir = path.join(docsDir, cat)
    if (!fs.existsSync(catDir) || !fs.statSync(catDir).isDirectory()) {
      continue
    }

    const files = fs.readdirSync(catDir)
      .filter(f => f.endsWith('.md'))
      .sort()

    const items = []

    for (const file of files) {
      const filePath = path.join(catDir, file)
      const content = fs.readFileSync(filePath, 'utf-8')

      let title = ''
      const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
      if (fmMatch) {
        const fmContent = fmMatch[1]
        const titleMatch = fmContent.match(/^title:\s*(['"]?)(.*?)\1\s*$/m)
        if (titleMatch) {
          title = titleMatch[2].trim()
        }
      }

      if (!title) {
        const h1Match = content.match(/^#\s+(.+)$/m)
        if (h1Match) {
          title = h1Match[1].trim()
        }
      }

      if (!title) {
        const baseName = path.basename(file, '.md')
        title = baseName
          .split(/[-_]/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }

      const link = `/${cat}/${path.basename(file, '.md')}`
      items.push({ text: title, link })
    }

    if (items.length > 0) {
      sidebar.push({
        text: categoryNames[cat] || cat.charAt(0).toUpperCase() + cat.slice(1),
        items,
        collapsed: true
      })
    }
  }

  return sidebar
}

export default defineConfig({
  title: 'Project Documentation',
  description: 'A centralized documentation repository.',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: getSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
