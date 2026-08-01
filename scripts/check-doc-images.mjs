import fs from 'node:fs'
import path from 'node:path'
import { publicationManifest } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const errors = []
let references = 0
for (const entry of publicationManifest) {
  const file = path.join(docs, entry.file)
  const source = fs.readFileSync(file, 'utf8')
  for (const match of source.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)) {
    references += 1
    const [, alt, href] = match
    if (!alt.trim()) errors.push(`Missing alt text in ${entry.file}`)
    if (/^https?:/.test(href)) continue
    const target = href.startsWith('/') ? path.join(docs, 'public', href.replace(/^\//, '')) : path.resolve(path.dirname(file), href)
    if (!fs.existsSync(target)) errors.push(`Missing image in ${entry.file}: ${href}`)
  }
}
for (const asset of ['brand-mark.svg','favicon.svg']) if (!fs.existsSync(path.join(docs, 'public', asset))) errors.push(`Missing public asset: ${asset}`)
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Image check OK: ${references} Markdown images and 2 required brand assets.`)
