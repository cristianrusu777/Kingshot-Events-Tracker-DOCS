import fs from 'node:fs'
import path from 'node:path'
import { publicationManifest } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const routes = new Set(publicationManifest.map((entry) => entry.path))
const errors = []
for (const entry of publicationManifest) {
  const file = path.join(docs, entry.file)
  const source = fs.readFileSync(file, 'utf8')
  for (const match of source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const href = match[1].trim().split('#')[0]
    if (!href || /^(https?:|mailto:|#)/.test(href)) continue
    if (href.startsWith('/')) {
      const normalized = href || '/'
      if (!routes.has(normalized)) errors.push(`${path.relative(root, file)} -> ${href}`)
    } else {
      const target = path.resolve(path.dirname(file), href)
      if (![target, `${target}.md`, path.join(target, 'index.md')].some(fs.existsSync)) errors.push(`${path.relative(root, file)} -> ${href}`)
    }
  }
  for (const match of source.matchAll(/['"](\/[-a-z0-9/]+\/?)[\'"]/gi)) {
    const href = match[1]
    if (!routes.has(href) && !href.startsWith('/images/') && !href.startsWith('/assets/')) errors.push(`${path.relative(root, file)} -> embedded route ${href}`)
  }
}
if (errors.length) { console.error(`Broken links:\n${errors.join('\n')}`); process.exit(1) }
console.log(`Link check OK: ${publicationManifest.length} classified pages.`)
