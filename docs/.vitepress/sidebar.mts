import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { DefaultTheme } from 'vitepress'

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

type Doc = { relative: string; link: string; title: string }
type Section = { text: string; collapsed?: boolean; match: (doc: Doc) => boolean }

const sectionDefinitions: Section[] = [
  { text: 'Latest Updates', collapsed: false, match: d => d.relative.startsWith('updates/') || /^repair-pass-\d{4}-\d{2}-\d{2}\.md$/i.test(d.relative) },
  { text: 'Getting Started', match: d => d.relative.startsWith('getting-started/') },
  { text: 'Role Guides', match: d => d.relative.startsWith('roles/') },
  { text: 'Castle Positions', collapsed: false, match: d => d.relative.startsWith('castle-positions/') },
  { text: 'Strategy & Simulators', collapsed: false, match: d => d.relative.startsWith('simulators/') },
  { text: 'Players', match: d => /^how-to\/(add-player|edit-player|delete-restore-player|kick-player|manual-players|nicknames|player-profile|player-sync|players-directory)\.md$/i.test(d.relative) },
  { text: 'Kingdoms & Alliances', match: d => /^how-to\/(manage-kingdoms|manage-alliances|my-alliance|kvk-prep)\.md$/i.test(d.relative) },
  { text: 'Events & Default Events', match: d => d.relative.startsWith('events/') },
  { text: 'Imports & OCR', match: d => d.relative.startsWith('imports/') },
  { text: 'Analytics', match: d => d.relative.startsWith('analytics/') },
  { text: 'Subscriptions', match: d => d.relative.startsWith('subscriptions/') },
  { text: 'Admin Guide', match: d => d.relative.startsWith('admin/') },
  { text: 'User Guide', match: d => d.relative.startsWith('how-to/') },
  { text: 'Troubleshooting', match: d => d.relative.startsWith('troubleshooting/') },
  { text: 'Testing / Manual QA', match: d => d.relative.startsWith('testing/') },
  { text: 'Future Roadmap', match: d => d.relative.startsWith('roadmap/') },
  { text: 'Technical Appendix', match: d => d.relative.startsWith('reference/') }
]

function walk(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('.') || ['images', 'public', 'node_modules'].includes(entry.name)) return []
    const full = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(full) : entry.isFile() && entry.name.toLowerCase().endsWith('.md') ? [full] : []
  })
}

function titleFrom(content: string, relative: string): string {
  const frontmatter = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const frontmatterTitle = frontmatter?.[1].match(/^title:\s*['"]?(.+?)['"]?\s*$/m)?.[1]
  const heading = content.match(/^#\s+(.+)$/m)?.[1]
  const fallback = path.basename(relative, '.md').replace(/[-_]+/g, ' ').replace(/\b\w/g, value => value.toUpperCase())
  return (frontmatterTitle ?? heading ?? fallback).replace(/[`*_]/g, '').trim()
}

function readDocs(): Doc[] {
  return walk(docsRoot)
    .map(file => {
      const relative = path.relative(docsRoot, file).split(path.sep).join('/')
      const withoutExtension = relative.replace(/\.md$/i, '')
      return {
        relative,
        link: `/${withoutExtension}`,
        title: titleFrom(fs.readFileSync(file, 'utf8'), relative)
      }
    })
    .filter(doc => !['index.md', 'README.md'].includes(doc.relative))
    .sort((a, b) => a.title.localeCompare(b.title, 'en'))
}

export function createSidebar(): DefaultTheme.SidebarItem[] {
  const remaining = new Map(readDocs().map(doc => [doc.relative, doc]))
  const groups: DefaultTheme.SidebarItem[] = []

  for (const definition of sectionDefinitions) {
    const items = [...remaining.values()].filter(definition.match)
    if (!items.length) continue
    items.forEach(item => remaining.delete(item.relative))
    groups.push({
      text: definition.text,
      collapsed: definition.collapsed ?? true,
      items: items.map(item => ({ text: item.title, link: item.link }))
    })
  }

  if (remaining.size) {
    groups.push({
      text: 'More Documentation',
      collapsed: true,
      items: [...remaining.values()].map(item => ({ text: item.title, link: item.link }))
    })
  }

  return groups
}
