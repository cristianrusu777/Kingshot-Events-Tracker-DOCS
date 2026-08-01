import fs from 'node:fs'
import path from 'node:path'
import { publishedPages } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const manifest = JSON.parse(fs.readFileSync(path.join(docs, 'editorial', 'diagram-manifest.json'), 'utf8'))
const errors = []
const found = []
for (const page of publishedPages.filter((item) => item.product === 'kingshot-events')) {
  const source = fs.readFileSync(path.join(docs, page.file), 'utf8')
  for (const match of source.matchAll(/<!-- diagram: ([a-z0-9-]+) -->\s*```mermaid\s*([\s\S]*?)```([\s\S]{0,450})/g)) {
    const [, id, body, after] = match
    if (/\b(?:controller|service|repository|Prisma|database|API endpoint|token|middleware|worker)\b/i.test(body)) errors.push(`${page.file}: ${id} exposes implementation language`)
    if (!/\*\*Diagram summary:\*\*/.test(after)) errors.push(`${page.file}: ${id} has no nearby prose summary`)
    const nodeCount = (body.match(/\b[A-Z]\d+\[/g) ?? []).length
    if (nodeCount > 14) errors.push(`${page.file}: ${id} has ${nodeCount} nodes; split for mobile reading`)
    found.push({ id, page: page.file, nodeCount })
  }
}
for (const required of manifest.filter((item) => item.status === 'implemented')) {
  const matches = found.filter((item) => item.id === required.id)
  if (matches.length !== 1) errors.push(`${required.id}: expected once, found ${matches.length}`)
  if (!matches.some((item) => item.page === required.page)) errors.push(`${required.id}: not found on declared page ${required.page}`)
}
fs.mkdirSync(path.join(root, 'reports'), { recursive: true })
fs.writeFileSync(path.join(root, 'reports', 'diagram-coverage-audit.json'), JSON.stringify({ implementedManifestDiagrams: manifest.length, taggedDiagramsFound: found.length, errors, diagrams: found }, null, 2))
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Diagram audit OK: ${found.length} tagged user diagrams verified with summaries and mobile-sized flows.`)
