import fs from 'node:fs'
import path from 'node:path'
import { publicationManifest } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const errors = []
for (const entry of publicationManifest) {
  const source = fs.readFileSync(path.join(docs, entry.file), 'utf8')
  if (entry.publicationStatus !== 'published') continue
  const headings = source.match(/^#\s+.+$/gm) ?? []
  if (headings.length !== 1) errors.push(`${entry.file}: expected one H1, found ${headings.length}`)
  for (const key of ['title','description','product','audience','experienceLevel','featureArea','lastReviewed']) {
    if (!new RegExp(`^${key}:`, 'm').test(source)) errors.push(`${entry.file}: missing ${key} metadata`)
  }
  if (/\b(?:placeholder|coming soon|TODO|FIXME)\b/i.test(source)) errors.push(`${entry.file}: prohibited unfinished wording`)
  if (/^#\s+(.+)$/m.exec(source)?.[1]?.trim() !== entry.title) errors.push(`${entry.file}: H1 does not match manifest title`)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log('Content check OK: metadata, headings, titles, and publication wording validated.')
