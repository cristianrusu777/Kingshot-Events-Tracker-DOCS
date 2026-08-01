import fs from 'node:fs'
import path from 'node:path'
import { publicationManifest } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const errors = []
const visualBodies = new Map()
for (const entry of publicationManifest) {
  const source = fs.readFileSync(path.join(docs, entry.file), 'utf8')
  if (entry.publicationStatus !== 'published') continue
  const headings = source.match(/^#\s+.+$/gm) ?? []
  if (headings.length !== 1) errors.push(`${entry.file}: expected one H1, found ${headings.length}`)
  for (const key of ['title','description','product','audience','experienceLevel','featureArea','lastReviewed']) {
    if (!new RegExp(`^${key}:`, 'm').test(source)) errors.push(`${entry.file}: missing ${key} metadata`)
  }
  if (/\b(?:placeholder|coming soon|TODO|FIXME)\b/i.test(source)) errors.push(`${entry.file}: prohibited unfinished wording`)
  if (/[—–]/.test(source)) errors.push(`${entry.file}: prohibited em dash or en dash`)
  if (/^#\s+(.+)$/m.exec(source)?.[1]?.trim() !== entry.title) errors.push(`${entry.file}: H1 does not match manifest title`)
  for (const match of source.matchAll(/<VisualReference[^>]*>([\s\S]*?)<\/VisualReference>/g)) {
    const normalized = match[1].replace(/\s+/g, ' ').trim()
    if (normalized.length < 120) errors.push(`${entry.file}: VisualReference is not specific enough`)
    if (visualBodies.has(normalized)) errors.push(`${entry.file}: duplicates VisualReference from ${visualBodies.get(normalized)}`)
    visualBodies.set(normalized, entry.file)
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log('Content check OK: metadata, headings, titles, and publication wording validated.')
